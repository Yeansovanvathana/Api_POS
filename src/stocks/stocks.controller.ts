import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { StocksService } from './stocks.service';
import { CreateStocksDto } from './dto/create-stocks.dto';
import { UpdateStocksDto } from './dto/update-stocks.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('stocks')
@Controller('stocks')
export class StocksController {
  constructor(private readonly StocksService: StocksService) {}

  @Post()
  create(@Body() CreateStocksDto: CreateStocksDto) {
    return this.StocksService.create(CreateStocksDto);
  }

  @Get()
  findAll() {
    return this.StocksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.StocksService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() UpdateStocksDto: UpdateStocksDto,
  ) {
    return this.StocksService.update(+id, UpdateStocksDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.StocksService.remove(+id);
  }
}
