import { ApiProperty } from '@nestjs/swagger';

export class CreateCourseDto {
  @ApiProperty()
  title!: string;

  @ApiProperty({ enum: ['ai', 'dev', 'crypto', 'sales'] })
  category!: 'ai' | 'dev' | 'crypto' | 'sales';

  @ApiProperty()
  level!: string;

  @ApiProperty()
  duration!: string;

  @ApiProperty()
  lessons!: number;

  @ApiProperty()
  xp!: number;

  @ApiProperty()
  description!: string;

  @ApiProperty()
  gradient!: string;

  @ApiProperty()
  border!: string;

  @ApiProperty()
  tools!: string[];

  @ApiProperty()
  outcomes!: string[];

  @ApiProperty({ required: false })
  badge?: string;

  @ApiProperty({ required: false })
  students?: string;
}
