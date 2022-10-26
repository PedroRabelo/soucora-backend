import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';
import { UserEntity } from '../entities/user.entity';

export class CreateUserDto extends UserEntity {
  @IsEmail()
  email: string;

  @IsString()
  login: string;

  @IsString()
  @MinLength(4)
  @MaxLength(20)
  password: string;

  @IsString()
  name: string;
}

/* @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'password too weak',
  }) */
