import { IsEmail, IsString, Length } from 'class-validator';

export class SignAuthDto {
  @IsEmail()
  email: string;

  @IsString()
  @Length(8)
  password: string;
}
