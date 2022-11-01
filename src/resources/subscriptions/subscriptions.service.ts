import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateSubscriptionDto } from './dto/create-subscription.dto';

@Injectable()
export class SubscriptionsService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateSubscriptionDto) {
    const createSubscription: Prisma.SubscriptionUncheckedCreateInput = {
      startDate: new Date(),
      status: 'PENDING',
      payment: dto.payment,
      price: dto.price,
      subscriptionPlan: dto.subscriptionPlan,
      subscriptionType: dto.subscriptionType,
    };

    const { person, company } = dto;

    let data: Prisma.SubscriptionCreateInput;
    if (dto.subscriptionType === 'COMPANY') {
      const createCompany: Prisma.CompanyCreateOrConnectWithoutSubscriptionsInput =
        {
          where: {
            cnpj: company.cnpj,
          },
          create: {
            ...company,
          },
        };

      data = {
        ...createSubscription,
        company: {
          connectOrCreate: createCompany,
        },
      };
    } else {
      const createPerson: Prisma.PersonCreateOrConnectWithoutSubscriptionsInput =
        {
          where: {
            cpf: person.cpf,
          },
          create: {
            ...person,
          },
        };

      data = {
        ...createSubscription,
        person: {
          connectOrCreate: createPerson,
        },
      };
    }

    return await this.prisma.subscription.create({
      data: data,
    });
  }

  async findAll() {
    return await this.prisma.subscription.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} subscription`;
  }

  remove(id: number) {
    return `This action removes a #${id} subscription`;
  }
}
