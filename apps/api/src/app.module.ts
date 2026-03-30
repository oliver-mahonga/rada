import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { SupabaseModule } from './supabase/supabase.module';
import { AuthModule } from './auth/auth.module';
import { CoursesModule } from './courses/courses.module'; // Added
import { DashboardModule } from './dashboard/dashboard.module'; // Added

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    SupabaseModule,
    AuthModule,
    CoursesModule, // This enables the /courses endpoints in Swagger
    DashboardModule, // This enables the /dashboard endpoints in Swagger
  ],
})
export class AppModule {}
