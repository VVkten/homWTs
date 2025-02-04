import { Module } from '@nestjs/common';
import { MentalHealthService } from './mental-health.service';
import { MentalHealthController } from './mental-health.controller';

@Module({
  providers: [MentalHealthService],
  controllers: [MentalHealthController],
})
export class MentalHealthModule {}
