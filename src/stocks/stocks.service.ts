import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStocksDto } from './dto/create-stocks.dto';
import { Stocks } from './entities/stock.entity';
import { UpdateStocksDto } from './dto/update-stocks.dto';

@Injectable()
export class StocksService {
  constructor(
    @InjectRepository(Stocks) private StockssRepository: Repository<Stocks>,
  ) {}

  create(CreateStocksDto: CreateStocksDto) {
    const newStocks = this.StockssRepository.create(CreateStocksDto);
    return this.StockssRepository.save(newStocks);
  }

  findAll() {
    return this.StockssRepository.find();
  }

  findOne(id: number) {
    return this.StockssRepository.findOneBy({ id });
  }

  async update(id: number, UpdateStocksDto: UpdateStocksDto) {
    const Stocks = await this.findOne(id);
    return this.StockssRepository.save({ ...Stocks, ...UpdateStocksDto });
  }

  async remove(id: number) {
    const Stocks = await this.findOne(id);
    return this.StockssRepository.remove(Stocks);
  }
}
