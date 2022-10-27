import { Company } from '@prisma/client';

export class CompanyEntity implements Company {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  cnpj: string;
  name: string;
  companyName: string;
  email: string;
  contactName: string;
  phoneNumber: string;
}
