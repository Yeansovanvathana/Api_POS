import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Supplies } from './entities/supplies.entity';
import { SuppliesController } from './supplies.controller';
import { SuppliesService } from './supplies.service';
@Module({
imports: [TypeOrmModule.forFeature([Supplies])],
  controllers: [SuppliesController],
  providers: [SuppliesService],
})
export class SuppliesModule {}
