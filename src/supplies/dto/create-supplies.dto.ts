import { ApiProperty } from '@nestjs/swagger';

export class CreateSuppliesDto {
  
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
