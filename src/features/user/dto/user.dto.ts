import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { ListQueryParamsModel } from '../../../models/list_query_params_model';

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

  @ApiProperty({
    enum: ['ACTIVE', 'INACTIVE', 'BLOCKED'],
    enumName: 'User Status',
  })
  @IsString()
  status: 'ACTIVE' | 'INACTIVE' | 'BLOCKED';

  @ApiProperty()
  @IsString()
  username: string;

  @ApiProperty()
  @IsString()
  password: string;

  @ApiProperty()
  roleId: number;

  @ApiProperty()
  storeId: number;
}

export class LoginUserDto {
  @ApiProperty()
  @IsString()
  username: string;

  @ApiProperty()
  @IsString()
  password: string;
}

export class FindUserWithWhereQueryDto implements ListQueryParamsModel {
  @ApiPropertyOptional()
  firstName?: string;

  @ApiPropertyOptional()
  lastName?: string;

  @ApiPropertyOptional()
  roleId?: number;

  @ApiPropertyOptional()
  username?: string;

  @ApiPropertyOptional()
  storeId?: number;

  @ApiPropertyOptional()
  limitPerPage?: number;

  @ApiPropertyOptional()
  page?: number;
}
