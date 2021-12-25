import { ApiResponseProperty } from '@nestjs/swagger';

export class StandardResponse {
  @ApiResponseProperty()
  message: string;

  @ApiResponseProperty()
  status: number;
}
