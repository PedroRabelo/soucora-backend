import {
  PaymentType,
  SubscriptionPlan,
  SubscriptionType,
} from '@prisma/client';
import { IsEnum, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';
import { CreateCompanyDto } from 'src/resources/companies/dto/create-company.dto';
import { CreatePersonDto } from 'src/resources/persons/dto/create-person.dto';

export class CreateSubscriptionDto {
  @IsEnum(SubscriptionType)
  @IsNotEmpty()
  subscriptionType: SubscriptionType;

  @IsEnum(SubscriptionPlan)
  @IsNotEmpty()
  subscriptionPlan: SubscriptionPlan;

  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsEnum(PaymentType)
  @IsNotEmpty()
  payment: PaymentType;

  @IsOptional()
  person: CreatePersonDto;

  @IsOptional()
  company: CreateCompanyDto;
}
