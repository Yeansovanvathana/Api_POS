import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { CreateSuppliesDto } from './create-supplies.dto';

export class UpdateSuppliesDto extends PartialType(CreateSuppliesDto) {
  @ApiProperty()
  before_supply: number;

  @ApiProperty()
  after_supply: number;

  @ApiProperty()
  product_id: number;

  @ApiProperty()
  stock_id: number;

  @ApiProperty()
  catagory_id: number;
}
