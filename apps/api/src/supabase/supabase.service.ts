import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable()
export class SupabaseService {
  // Use 'any' for the generics to satisfy the ESLint strict check
  private supabase: SupabaseClient<any, any, any>;

  constructor(private configService: ConfigService) {
    const url = this.configService.get<string>('SUPABASE_URL');
    const key = this.configService.get<string>('SUPABASE_ANON_KEY');

    if (!url || !key) {
      throw new Error('Supabase URL or Key is missing in .env');
    }

    this.supabase = createClient(url, key);
  }

  getClient(): SupabaseClient<any, any, any> {
    return this.supabase;
  }
}
