import { ApiResponseProperty } from '@nestjs/swagger';
import AuthLoginModel from '../models/auth.login.model';
import { StandardResponse } from '../utils/standard.response';

export class AuthLoginResponseModel implements StandardResponse {
  @ApiResponseProperty()
  message: string;

  @ApiResponseProperty()
  status: number;

  @ApiResponseProperty()
  data: AuthLoginModel;
}

export class AuthLogoutResponseModel implements StandardResponse {
  @ApiResponseProperty()
  message: string;

  @ApiResponseProperty()
  status: number;
}
