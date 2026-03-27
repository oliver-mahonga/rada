import {
  Controller,
  Patch,
  Body,
  Param,
  ParseUUIDPipe,
  Logger,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { OnboardingDto } from './dto/onboarding.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Onboarding')
@Controller('onboarding')
export class OnboardingController {
  private readonly logger = new Logger(OnboardingController.name);

  constructor(private readonly prisma: PrismaService) {}

  @Patch(':id')
  @ApiOperation({ summary: 'Network Calibration: Sync Profile Details' })
  async completeOnboarding(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() onboardingDto: OnboardingDto,
  ) {
    this.logger.log(`Calibrating network nodes for profile: ${id}`);

    return await this.prisma.profile.update({
      where: { id },
      data: {
        bio: onboardingDto.bio,
        skills: onboardingDto.interests, // Mapping 'interests' to 'skills' in DB
        // You can add experienceLevel or primaryGoal to your schema if needed
      },
    });
  }
}
