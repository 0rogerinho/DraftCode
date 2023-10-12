import { IsEmail, IsString, IsStrongPassword, Length } from 'class-validator';

export class CreateAuthDto {
  @IsString()
  @Length(3)
  username: string;

  @IsString()
  @IsEmail()
  email: string;

  @IsStrongPassword()
  @IsString()
  password: string;
}
