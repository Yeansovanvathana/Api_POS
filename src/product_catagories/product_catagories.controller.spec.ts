import { Test, TestingModule } from '@nestjs/testing';
import { ProductCatagoriesController } from './product_catagories.controller';

describe('ProductCatagoriesController', () => {
  let controller: ProductCatagoriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductCatagoriesController],
    }).compile();

    controller = module.get<ProductCatagoriesController>(ProductCatagoriesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
