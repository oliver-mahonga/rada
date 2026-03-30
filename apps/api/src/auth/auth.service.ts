import {
  Injectable,
  ConflictException,
  InternalServerErrorException,
  UnauthorizedException,
  Inject,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { LoginAuthDto } from './dto/login-auth.dto';
import { PrismaService } from '../prisma/prisma.service';
import { SupabaseService } from '../supabase/supabase.service';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);

  constructor(
    @Inject(PrismaService) private readonly prisma: PrismaService,
    @Inject(SupabaseService) private readonly supabase: SupabaseService,
  ) {}

  async create(createAuthDto: CreateAuthDto) {
    this.logger.log(`Attempting enrollment for: ${createAuthDto.email}`);

    // Use standard client for public signup
    const { data: authData, error: authError } = await this.supabase
      .getClient()
      .auth.signUp({
        email: createAuthDto.email,
        password: createAuthDto.password,
      });

    if (authError || !authData.user) {
      this.logger.error(`Supabase Signup Error: ${authError?.message}`);
      throw new ConflictException(authError?.message || 'Auth signup failed');
    }

    try {
      const newProfile = await this.prisma.profile.create({
        data: {
          id: authData.user.id,
          email: createAuthDto.email,
          username: createAuthDto.username,
          firstName: createAuthDto.firstName,
          lastName: createAuthDto.lastName,
          isVerified: false,
        },
      });

      this.logger.log(`User profile synced: ${newProfile.username}`);
      return {
        ...newProfile,
        access_token: authData.session?.access_token,
      };
    } catch (dbError) {
      this.logger.error('Database Sync Error:', dbError);
      throw new InternalServerErrorException('Profile synchronization failed.');
    }
  }

  async login(loginAuthDto: LoginAuthDto) {
    this.logger.log(`Authorization request for: ${loginAuthDto.email}`);

    const { data, error } = await this.supabase
      .getClient()
      .auth.signInWithPassword({
        email: loginAuthDto.email,
        password: loginAuthDto.password,
      });

    if (error || !data.user) {
      throw new UnauthorizedException('Invalid Access Key or University ID');
    }

    return {
      user: data.user,
      id: data.user.id,
      access_token: data.session?.access_token,
      refresh_token: data.session?.refresh_token,
    };
  }

  /**
   * FIXED: Uses getAdminClient() to avoid Bearer Token errors
   */
  async checkVerification(userId: string) {
    this.logger.log(`Checking verification status for user: ${userId}`);

    // CRITICAL FIX: Use the Admin Client for getUserById
    const { data, error } = await this.supabase
      .getAdminClient()
      .auth.admin.getUserById(userId);

    if (error || !data.user) {
      this.logger.error(`Verification check failed: ${error?.message}`);
      throw new NotFoundException('User record not found in Auth system');
    }

    const isConfirmed = !!data.user.email_confirmed_at;

    if (isConfirmed) {
      await this.prisma.profile.update({
        where: { id: userId },
        data: { isVerified: true },
      });
      this.logger.log(`User ${userId} successfully verified.`);
    }

    return { verified: isConfirmed };
  }
}
