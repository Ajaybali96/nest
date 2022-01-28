import { Test, TestingModule } from '@nestjs/testing';
import { sectionController } from './section.controller';

describe('sectionController', () => {
  let controller: sectionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [sectionController],
    }).compile();

    controller = module.get<sectionController>(sectionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});