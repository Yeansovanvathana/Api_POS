import { ApiProperty } from '@nestjs/swagger';

export class CreateProductInvoiceDto {
  @ApiProperty()
  quantity: number;

  @ApiProperty()
  price: number;

  @ApiProperty()
  total: number;

  @ApiProperty()
  product_id: number;

  @ApiProperty()
  invoice_id: number;
}
