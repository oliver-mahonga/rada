import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaModule } from '../prisma/prisma.module'; // Import the Module
import { OnboardingController } from './onboarding.controller';
import { SupabaseModule } from '../supabase/supabase.module';

@Module({
  imports: [PrismaModule, SupabaseModule], // PrismaModule MUST be here
  controllers: [AuthController, OnboardingController],
  providers: [AuthService],
})
export class AuthModule {}
