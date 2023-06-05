import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { CreateProductDto } from './create-product.dto';

export class UpdateProductDto extends PartialType(CreateProductDto) {
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
