import { Test, TestingModule } from '@nestjs/testing';
import { ProductCatagoriesService } from './product_catagories.service';

describe('ProductCatagoriesService', () => {
  let service: ProductCatagoriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductCatagoriesService],
    }).compile();

    service = module.get<ProductCatagoriesService>(ProductCatagoriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
