import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProductCatagoriesService } from './product_catagories.service';
import { CreateProductCatagoriesDto } from './dto/create-product_catagories.dto';
import { UpdateProductCatagoriesDto } from './dto/update-product_catagories.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('product-catagories')
@Controller('product-catagories')
export class ProductCatagoriesController {
  constructor(private readonly ProductCatagoriesService: ProductCatagoriesService) {}

  @Post()
  create(@Body() CreateProductCatagoriesDto: CreateProductCatagoriesDto) {
    return this.ProductCatagoriesService.create(CreateProductCatagoriesDto);
  }

  @Get()
  findAll() {
    return this.ProductCatagoriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ProductCatagoriesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() UpdateProductCatagoriesDto: UpdateProductCatagoriesDto,
  ) {
    return this.ProductCatagoriesService.update(+id, UpdateProductCatagoriesDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ProductCatagoriesService.remove(+id);
  }
}
