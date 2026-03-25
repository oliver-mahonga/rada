import { Injectable, ConflictException } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { PrismaService } from '../prisma/prisma.service';
import { SupabaseService } from '../supabase/supabase.service';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private supabase: SupabaseService,
  ) {}

  async create(createAuthDto: CreateAuthDto) {
    // 1. Register in Supabase (Auth Layer)
    const { data: authData, error: authError } = await this.supabase
      .getClient()
      .auth.signUp({
        email: createAuthDto.email,
        password: createAuthDto.password,
      });

    if (authError) throw new ConflictException(authError.message);

    // 2. Persist in Prisma (Database Layer)
    return this.prisma.profile.create({
      data: {
        id: authData.user.id,
        email: createAuthDto.email,
        username: createAuthDto.username,
        firstName: createAuthDto.firstName,
        lastName: createAuthDto.lastName,
      },
    });
  }
}
