import { IsEmail, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateAuthDto {
  @ApiProperty({ example: 'oliver@gmail.com' })
  @IsEmail()
  email!: string;

  @ApiProperty({ example: 'password123' })
  @MinLength(8)
  password!: string;

  @ApiProperty({ example: 'Oliver' })
  @IsString()
  firstName!: string;

  @ApiProperty({ example: 'Mahonga' })
  @IsString()
  lastName!: string;

  @ApiProperty({ example: 'oliver_elite' })
  @IsString()
  username!: string;
}
