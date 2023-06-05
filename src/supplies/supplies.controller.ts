import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SuppliesService } from './supplies.service';
import { CreateSuppliesDto } from './dto/create-supplies.dto';
import { UpdateSuppliesDto } from './dto/update-supplies.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('supplies')
@Controller('supplies')
export class SuppliesController {
  constructor(private readonly SuppliesService: SuppliesService) {}

  @Post()
  create(@Body() CreateSuppliesDto: CreateSuppliesDto) {
    return this.SuppliesService.create(CreateSuppliesDto);
  }

  @Get()
  findAll() {
    return this.SuppliesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.SuppliesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() UpdateSuppliesDto: UpdateSuppliesDto,
  ) {
    return this.SuppliesService.update(+id, UpdateSuppliesDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.SuppliesService.remove(+id);
  }
}
