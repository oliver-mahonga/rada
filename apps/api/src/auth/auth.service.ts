import {
  Injectable,
  ConflictException,
  InternalServerErrorException,
  UnauthorizedException,
  Inject,
  Logger,
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

  /**
   * Enrollment Logic: Registers a user in Supabase and syncs to local Postgres
   */
  async create(createAuthDto: CreateAuthDto) {
    this.logger.log(`Attempting enrollment for: ${createAuthDto.email}`);

    // 1. Register in Supabase Auth
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

    // 2. Sync to local PostgreSQL Profile
    try {
      const newProfile = await this.prisma.profile.create({
        data: {
          id: authData.user.id, // Links Supabase UUID to local Profile
          email: createAuthDto.email,
          username: createAuthDto.username,
          firstName: createAuthDto.firstName,
          lastName: createAuthDto.lastName,
        },
      });

      this.logger.log(
        `User profile synced successfully: ${newProfile.username}`,
      );
      return newProfile;
    } catch (dbError) {
      this.logger.error('Database Sync Error:', dbError);
      throw new InternalServerErrorException(
        'Profile synchronization failed. Check if username exists.',
      );
    }
  }

  /**
   * Login Logic: Validates credentials via Supabase
   */
  async login(loginAuthDto: LoginAuthDto) {
    this.logger.log(`Authorization request for: ${loginAuthDto.email}`);

    const { data, error } = await this.supabase
      .getClient()
      .auth.signInWithPassword({
        email: loginAuthDto.email,
        password: loginAuthDto.password,
      });

    if (error || !data.user) {
      this.logger.warn(`Failed login attempt for: ${loginAuthDto.email}`);
      throw new UnauthorizedException('Invalid Access Key or University ID');
    }

    this.logger.log(`User authorized: ${data.user.email}`);

    // Return the user and session for the frontend to manage state
    return {
      user: data.user,
      session: {
        access_token: data.session?.access_token,
        refresh_token: data.session?.refresh_token,
        expires_at: data.session?.expires_at,
      },
    };
  }

  /**
   * Verification Check: Checks if the user confirmed their email
   */
  async checkVerification(userId: string) {
    const { data, error } = await this.supabase
      .getClient()
      .auth.getUser(userId);

    if (error || !data.user) {
      throw new UnauthorizedException('User session expired');
    }

    const isConfirmed = !!data.user.email_confirmed_at;

    // Update local database status if they just verified
    if (isConfirmed) {
      await this.prisma.profile.update({
        where: { id: userId },
        data: { isVerified: true },
      });
    }

    return { verified: isConfirmed };
  }
}
