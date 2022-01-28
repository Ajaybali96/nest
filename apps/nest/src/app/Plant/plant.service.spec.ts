import { Test, TestingModule } from '@nestjs/testing';
import { plantService } from './plant.service';

describe('PlantsService', () => {
  let service: plantService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [plantService],
    }).compile();

    service = module.get<plantService>(plantService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});