import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProductInvoiceService } from './product.service';
import { CreateProductInvoiceDto } from './dto/create-product_invoice.dto';
import { UpdateProductInvoiceDto } from './dto/update-product-invoice.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('product-invoice')
@Controller('product-invoice')
export class ProductInvoiceController {
  constructor(private readonly ProductInvoiceService: ProductInvoiceService) {}

  @Post()
  create(@Body() createProductInvoiceDto: CreateProductInvoiceDto) {
    return this.ProductInvoiceService.create(createProductInvoiceDto);
  }

  @Get()
  findAll() {
    return this.ProductInvoiceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ProductInvoiceService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductInvoiceDto: UpdateProductInvoiceDto) {
    return this.ProductInvoiceService.update(+id, updateProductInvoiceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ProductInvoiceService.remove(+id);
  }
}
