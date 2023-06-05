import { ApiProperty } from '@nestjs/swagger';

export class CreateStocksDto {
  @ApiProperty()
  quantity: number;

  @ApiProperty()
  type: string;

  @ApiProperty()
  product_id: number;
}
