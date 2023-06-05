import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductCatagoriesDto } from './dto/create-product_catagories.dto';
import { ProductCatagories } from './entities/product_catagories.entity';
import { UpdateProductCatagoriesDto } from './dto/update-product_catagories.dto';

@Injectable()
export class ProductCatagoriesService {
  constructor(
    @InjectRepository(ProductCatagories) private ProductCatagoriessRepository: Repository<ProductCatagories>,
  ) {}

  create(CreateProductCatagoriesDto: CreateProductCatagoriesDto) {
    const newProductCatagories = this.ProductCatagoriessRepository.create(CreateProductCatagoriesDto);
    return this.ProductCatagoriessRepository.save(newProductCatagories);
  }

  findAll() {
    return this.ProductCatagoriessRepository.find();
  }

  findOne(id: number) {
    return this.ProductCatagoriessRepository.findOneBy({ id });
  }

  async update(id: number, UpdateProductCatagoriesDto: UpdateProductCatagoriesDto) {
    const ProductCatagories = await this.findOne(id);
    return this.ProductCatagoriessRepository.save({ ...ProductCatagories, ...UpdateProductCatagoriesDto });
  }

  async remove(id: number) {
    const ProductCatagories = await this.findOne(id);
    return this.ProductCatagoriessRepository.remove(ProductCatagories);
  }
}
