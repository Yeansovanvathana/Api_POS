import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './entities/product.entity';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product) private ProductsRepository: Repository<Product>,
  ) {}

  create(CreateProductDto: CreateProductDto) {
    const newProduct = this.ProductsRepository.create(CreateProductDto);
    return this.ProductsRepository.save(newProduct);
  }

  findAll() {
    return this.ProductsRepository.find();
  }

  findOne(id: number) {
    return this.ProductsRepository.findOneBy({ id });
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    const Product = await this.findOne(id);
    return this.ProductsRepository.save({ ...Product, ...updateProductDto });
  }

  async remove(id: number) {
    const Product = await this.findOne(id);
    return this.ProductsRepository.remove(Product);
  }
}
