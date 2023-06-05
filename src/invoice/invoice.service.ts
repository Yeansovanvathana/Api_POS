import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { Invoice } from './entities/invoice.entity';
import { UpdateInvoiceDto } from './dto/update-invoice.dto';

@Injectable()
export class InvoiceService {
  constructor(
    @InjectRepository(Invoice) private InvoicesRepository: Repository<Invoice>,
  ) {}

  create(createInvoiceDto: CreateInvoiceDto) {
    const newInvoice = this.InvoicesRepository.create(createInvoiceDto);
    return this.InvoicesRepository.save(newInvoice);
  }


  findAll() {
    return this.InvoicesRepository.find();
  }

  findOne(id: number) {
    return this.InvoicesRepository.findOneBy({ id });
  }

  async update(id: number, updateInvoiceDto: UpdateInvoiceDto) {
    const invoice = await this.findOne(id);
    return this.InvoicesRepository.save({ ...invoice, ...updateInvoiceDto });
  }

  async remove(id: number) {
    const invoice = await this.findOne(id);
    return this.InvoicesRepository.remove(invoice);
  }
}
