import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { CreateStocksDto } from './create-stocks.dto';

export class UpdateStocksDto extends PartialType(CreateStocksDto) {
  @ApiProperty()
  quantity: number;

  @ApiProperty()
  type: string;

  @ApiProperty()
  product_id: number;
}
