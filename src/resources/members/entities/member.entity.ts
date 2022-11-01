import { Member } from '@prisma/client';

export class MemberEntity implements Member {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  active: boolean;
  subscriptionId: string;
  personId: string;
  userId: string;

  constructor(partial: Partial<MemberEntity>) {
    Object.assign(this, partial);
  }
}
