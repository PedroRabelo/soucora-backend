import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateCompanyDto {
  @IsString()
  @IsNotEmpty()
  cnpj: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsOptional()
  companyName: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsOptional()
  contactName: string;

  @IsOptional()
  phoneNumber: string;
}
