import {
  PaymentType,
  Subscription,
  SubscriptionPlan,
  SubscriptionStatus,
  SubscriptionType,
} from '@prisma/client';

export class SubscriptionEntity implements Subscription {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  subscriptionType: SubscriptionType;
  subscriptionPlan: SubscriptionPlan;
  startDate: Date;
  price: number;
  payment: PaymentType;
  status: SubscriptionStatus;
  personId: string;
  companyId: string;

  constructor(partial: Partial<SubscriptionEntity>) {
    Object.assign(this, partial);
  }
}
