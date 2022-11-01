import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './resources/users/users.module';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { SubscriptionsModule } from './resources/subscriptions/subscriptions.module';
import { PersonsModule } from './resources/persons/persons.module';
import { CompaniesModule } from './resources/companies/companies.module';
import { MembersModule } from './resources/members/members.module';

@Module({
  imports: [PrismaModule, UsersModule, AuthModule, SubscriptionsModule, PersonsModule, CompaniesModule, MembersModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
