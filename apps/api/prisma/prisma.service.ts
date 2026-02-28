import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
// This now points to your custom generated folder via the tsconfig path
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  constructor() {
    super();
  }

  async onModuleInit() {
    // Connect to the database when the module initializes
    await this.$connect();
  }

  async onModuleDestroy() {
    // Close the connection when the app shuts down
    await this.$disconnect();
  }
}