import { ApiResponseProperty } from '@nestjs/swagger';
import { UserModel } from './user.model';

export default class AuthLoginModel {
  @ApiResponseProperty()
  accessToken: string;

  @ApiResponseProperty()
  data: UserModel;
}
