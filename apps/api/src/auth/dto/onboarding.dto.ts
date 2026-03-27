import { IsString, IsArray, IsOptional, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class OnboardingDto {
  @ApiProperty({ example: 'Aspiring AI Architect focusing on DeFi.' })
  @IsString()
  @MaxLength(160)
  bio!: string;

  @ApiProperty({ example: ['ai', 'coding', 'web3'] })
  @IsArray()
  @IsString({ each: true })
  interests!: string[];

  @ApiProperty({ example: 'beginner' })
  @IsString()
  experienceLevel!: string;

  @ApiProperty({ example: 'Financial Freedom' })
  @IsOptional()
  @IsString()
  primaryGoal?: string;

  @ApiProperty({ example: 'https://avatar-url.com/image.png' })
  @IsOptional()
  @IsString()
  avatarUrl?: string;
}
