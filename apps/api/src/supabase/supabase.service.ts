import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable()
export class SupabaseService {
  private readonly logger = new Logger(SupabaseService.name);
  private supabase: SupabaseClient<any, any, any>;

  private supabaseAdmin?: SupabaseClient<any, any, any>;

  constructor(private configService: ConfigService) {
    const url = this.configService.get<string>('SUPABASE_URL');
    const anonKey = this.configService.get<string>('SUPABASE_ANON_KEY');
    const serviceRoleKey = this.configService.get<string>(
      'SUPABASE_SERVICE_ROLE_KEY',
    );

    if (!url || !anonKey) {
      throw new Error('Supabase URL or Anon Key is missing in .env');
    }

    this.supabase = createClient(url, anonKey);

    if (serviceRoleKey) {
      this.supabaseAdmin = createClient(url, serviceRoleKey, {
        auth: {
          autoRefreshToken: false,
          persistSession: false,
        },
      });
      this.logger.log('Supabase Admin Client initialized.');
    } else {
      this.logger.warn(
        'SUPABASE_SERVICE_ROLE_KEY missing. Admin features will be unavailable.',
      );
    }
  }

  getClient(): SupabaseClient<any, any, any> {
    return this.supabase;
  }

  getAdminClient(): SupabaseClient<any, any, any> {
    if (!this.supabaseAdmin) {
      this.logger.error('Admin client access attempted but not initialized.');
      throw new Error(
        'Admin client not initialized. Check your SERVICE_ROLE_KEY.',
      );
    }
    return this.supabaseAdmin;
  }
}
