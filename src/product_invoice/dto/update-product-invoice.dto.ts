import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { CreateProductInvoiceDto } from './create-product_invoice.dto';

export class UpdateProductInvoiceDto extends PartialType(CreateProductInvoiceDto) {
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
