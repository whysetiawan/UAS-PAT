import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateUpdateProductDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  price: number;

  @ApiProperty({
    required: false,
    description: 'This is Optional, default will be 1',
  })
  @IsOptional()
  storeId?: number;
}
