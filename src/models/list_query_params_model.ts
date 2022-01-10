import { ApiPropertyOptional } from '@nestjs/swagger';

export class ListQueryParamsModel {
  @ApiPropertyOptional()
  limitPerPage?: number;

  @ApiPropertyOptional()
  page?: number;
}
