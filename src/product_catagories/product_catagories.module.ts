import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductCatagoriesController } from './product_catagories.controller';
import { ProductCatagoriesService } from './product_catagories.service';
import { ProductCatagories } from './entities/product_catagories.entity';

@Module({
imports: [TypeOrmModule.forFeature([ProductCatagories])],
  controllers: [ProductCatagoriesController],
  providers: [ProductCatagoriesService],
})
export class ProductCatagoriesModule {}
