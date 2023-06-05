import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { CreateProductCatagoriesDto } from './create-product_catagories.dto';

export class UpdateProductCatagoriesDto extends PartialType(CreateProductCatagoriesDto) {
  @ApiProperty()
  name: string;
}
