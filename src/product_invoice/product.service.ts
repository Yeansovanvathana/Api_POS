import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductInvoiceDto } from './dto/create-product_invoice.dto';
import { ProductInvoice } from './entities/product_invoice.entity';
import { UpdateProductInvoiceDto } from './dto/update-product-invoice.dto';

@Injectable()
export class ProductInvoiceService {
  constructor(
    @InjectRepository(ProductInvoice) private ProductInvoicesRepository: Repository<ProductInvoice>,
  ) {}

  create(CreateProductInvoiceDto: CreateProductInvoiceDto) {
    const newProductInvoice = this.ProductInvoicesRepository.create(CreateProductInvoiceDto);
    return this.ProductInvoicesRepository.save(newProductInvoice);
  }

  findAll() {
    return this.ProductInvoicesRepository.find();
  }

  findOne(id: number) {
    return this.ProductInvoicesRepository.findOneBy({ id });
  }

  async update(id: number, UpdateProductInvoiceDto: UpdateProductInvoiceDto) {
    const ProductInvoice = await this.findOne(id);
    return this.ProductInvoicesRepository.save({ ...ProductInvoice, ...UpdateProductInvoiceDto });
  }

  async remove(id: number) {
    const ProductInvoice = await this.findOne(id);
    return this.ProductInvoicesRepository.remove(ProductInvoice);
  }
}
