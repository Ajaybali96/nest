import { Test, TestingModule } from '@nestjs/testing';
import { sectionService } from './section.service';

describe('sectionService', () => {
  let service: sectionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [sectionService],
    }).compile();

    service = module.get<sectionService>(sectionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});