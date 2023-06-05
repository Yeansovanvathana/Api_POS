import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductInvoiceController } from './product_invoice.controller';
import { ProductInvoiceService } from './product.service';
import { ProductInvoice } from './entities/product_invoice.entity';
@Module({
imports: [TypeOrmModule.forFeature([ProductInvoice])],
  controllers: [ProductInvoiceController],
  providers: [ProductInvoiceService],
})
export class ProductInvoiceModule {}
