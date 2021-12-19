import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    required: false,
  })
  firstName?: string;

  @ApiProperty({
    required: false,
  })
  lastName?: string;

  // @ApiProperty()
  // @IsEmail()
  // email: string;

  @ApiProperty()
  username: string;

  @ApiProperty()
  @IsNotEmpty()
  password: string;

  @ApiProperty()
  @IsNotEmpty()
  roleId: number;
}

export class LoginUserDto {
  @ApiProperty()
  @IsNotEmpty()
  username: string;

  @ApiProperty()
  @IsNotEmpty()
  password: string;
}
