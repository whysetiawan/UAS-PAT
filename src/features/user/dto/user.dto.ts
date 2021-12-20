import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateUpdateUserDto {
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

  // @ApiProperty()
  // @IsNumber()
  // storeId: number;
}

export class LoginUserDto {
  @ApiProperty()
  @IsString()
  username: string;

  @ApiProperty()
  @IsString()
  password: string;
}
