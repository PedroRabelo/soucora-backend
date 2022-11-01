import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateMemberDto } from './dto/create-member.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class MembersService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateMemberDto) {
    const data: Prisma.MemberCreateInput = {
      person: {
        connect: { id: dto.personId },
      },
      subscription: {
        connect: { id: dto.subscriptionId },
      },
      active: false,
      user: {
        create: {
          ...dto.user,
          activateKey: Math.floor(Math.random() * 1000000).toString(),
          password: await bcrypt.hash(dto.user.password, 10),
          role: 'MEMBER',
        },
      },
    };

    return await this.prisma.member.create({ data });
  }

  findAll() {
    return `This action returns all members`;
  }

  findOne(id: number) {
    return `This action returns a #${id} member`;
  }

  remove(id: number) {
    return `This action removes a #${id} member`;
  }
}
