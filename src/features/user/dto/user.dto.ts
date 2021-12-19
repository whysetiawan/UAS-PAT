import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    required: false,
  })
  @IsString()
  firstName?: string;

  @ApiProperty({
    required: false,
  })
  @IsString()
  lastName?: string;

  // @ApiProperty()
  // @IsEmail()
  // email: string;

  @ApiProperty()
  @IsString()
  username: string;

  @ApiProperty()
  @IsString()
  password: string;

  @ApiProperty()
  @IsNumber()
  roleId: number;
}

export class LoginUserDto {
  @ApiProperty()
  @IsString()
  username: string;

  @ApiProperty()
  @IsString()
  password: string;
}
