import { IsNotEmptyObject, IsString } from 'class-validator';
import { CreateUserDto } from 'src/resources/users/dto/create-user.dto';

export class CreateMemberDto {
  @IsString()
  subscriptionId: string;

  @IsString()
  personId: string;

  @IsNotEmptyObject()
  user: CreateUserDto;
}
