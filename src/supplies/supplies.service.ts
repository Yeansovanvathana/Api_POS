import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSuppliesDto } from './dto/create-supplies.dto';
import { Supplies } from './entities/supplies.entity';
import { UpdateSuppliesDto } from './dto/update-supplies.dto';

@Injectable()
export class SuppliesService {
  constructor(
    @InjectRepository(Supplies) private SuppliessRepository: Repository<Supplies>,
  ) {}

  create(CreateSuppliesDto: CreateSuppliesDto) {
    const newSupplies = this.SuppliessRepository.create(CreateSuppliesDto);
    return this.SuppliessRepository.save(newSupplies);
  }

  findAll() {
    return this.SuppliessRepository.find();
  }

  findOne(id: number) {
    return this.SuppliessRepository.findOneBy({ id });
  }

  async update(id: number, UpdateSuppliesDto: UpdateSuppliesDto) {
    const Supplies = await this.findOne(id);
    return this.SuppliessRepository.save({ ...Supplies, ...UpdateSuppliesDto });
  }

  async remove(id: number) {
    const Supplies = await this.findOne(id);
    return this.SuppliessRepository.remove(Supplies);
  }
}
