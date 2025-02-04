import { Test, TestingModule } from '@nestjs/testing';
import { MentalHealthService } from './mental-health.service';

describe('MentalHealthService', () => {
  let service: MentalHealthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MentalHealthService],
    }).compile();

    service = module.get<MentalHealthService>(MentalHealthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
