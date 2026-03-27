import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  async onModuleInit() {
    // Connect to PostgreSQL on startup
    await this.$connect();
  }

  async onModuleDestroy() {
    // Close connection on shutdown
    await this.$disconnect();
  }
}
