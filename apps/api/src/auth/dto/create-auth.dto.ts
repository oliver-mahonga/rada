export class CreateAuthDto {
  @IsEmail()
  email!: string; // Add the ! here

  @IsString()
  @MinLength(8)
  password!: string;

  @IsString()
  firstName!: string;

  @IsString()
  lastName!: string;

  @IsString()
  username!: string;
}