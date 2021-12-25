import { ApiResponseProperty } from '@nestjs/swagger';
import { UserModel } from '../models/user.model';
import { StandardResponse } from '../utils/standard.response';

export class GetUserResponseModel implements StandardResponse {
  @ApiResponseProperty()
  message: string;

  @ApiResponseProperty()
  status: number;

  @ApiResponseProperty({
    type: [UserModel],
  })
  data: UserModel[];
}

export class AuthLogoutResponseModel implements StandardResponse {
  @ApiResponseProperty()
  message: string;

  @ApiResponseProperty()
  status: number;
}
