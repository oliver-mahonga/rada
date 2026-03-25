import { Module, Global } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global() // Makes it available everywhere without re-importing in every module
@Module({
  providers: [PrismaService],
  exports: [PrismaService], 
})
export class PrismaModule {}