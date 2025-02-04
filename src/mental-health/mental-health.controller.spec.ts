import { Test, TestingModule } from '@nestjs/testing';
import { MentalHealthController } from './mental-health.controller';

describe('MentalHealthController', () => {
  let controller: MentalHealthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MentalHealthController],
    }).compile();

    controller = module.get<MentalHealthController>(MentalHealthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
