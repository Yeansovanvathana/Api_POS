import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  price: number;

  @ApiProperty()
  min_stock: number;

  @ApiProperty()
  max_stock: number;

  @ApiProperty()
  barcode: string;

  @ApiProperty()
  category_id: number;
}
