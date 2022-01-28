import { Test, TestingModule } from '@nestjs/testing';
import { plantController } from './plant.controller';

describe('PlantsController', () => {
  let controller: plantController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [plantController],
    }).compile();

    controller = module.get<plantController>(plantController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});