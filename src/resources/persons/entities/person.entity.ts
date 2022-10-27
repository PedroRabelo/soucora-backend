import { Person } from '@prisma/client';

export class PersonEntity implements Person {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  cpf: string;
  name: string;
  phoneNumber: string;
  email: string;
  birthDate: Date;
  gender: string;
}
