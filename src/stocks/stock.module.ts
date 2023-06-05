import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Stocks } from './entities/stock.entity';
import { StocksController } from './stocks.controller';
import { StocksService } from './stocks.service';
@Module({
imports: [TypeOrmModule.forFeature([Stocks])],
  controllers: [StocksController],
  providers: [StocksService],
})
export class StocksModule {}
