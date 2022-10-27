import { IsEmail, IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreatePersonDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(11)
  cpf: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  phoneNumber: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  birthDate: Date;

  @IsEmail()
  @IsNotEmpty()
  gender: string;
}
