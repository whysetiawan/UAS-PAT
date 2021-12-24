import { ApiResponseProperty } from '@nestjs/swagger';
import { UserModel } from './user.model';

export default class AuthLoginModel {
  @ApiResponseProperty()
  message: string;

  @ApiResponseProperty()
  access_token: string;

  @ApiResponseProperty()
  data: UserModel;
}
