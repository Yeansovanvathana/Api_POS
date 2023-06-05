import { Test, TestingModule } from '@nestjs/testing';
import { ProductInvoiceController } from './product_invoice.controller';

describe('ProductInvoiceController', () => {
  let controller: ProductInvoiceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductInvoiceController],
    }).compile();

    controller = module.get<ProductInvoiceController>(ProductInvoiceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
