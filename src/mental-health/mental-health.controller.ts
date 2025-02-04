import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { MentalHealthService } from './mental-health.service';
import { Doctor } from './mental-health.service';

@Controller('mental-health')
export class MentalHealthController {
  constructor(private readonly mentalHealthService: MentalHealthService) {}

  @Post()
  createDoctor(@Body() doctor: Omit<Doctor, 'id'>) {
    const newDoctor = this.mentalHealthService.createDoctor(doctor);
    return newDoctor;
  }

  @Get('/:id')
  getDoctor(@Param('id') id: number) {
    const doctor = this.mentalHealthService.getDoctor(id);
    if (!doctor) {
      return { message: 'Doctor not found' };
    }
    return doctor;
  }

  @Get()
  getAllDoctors() {
    return this.mentalHealthService.getAllDoctors();
  }

  @Put('/:id')
  updateDoctor(@Param('id') id: number, @Body() doctor: Doctor) {
    const updatedDoctor = this.mentalHealthService.updateDoctor(id, doctor);
    if (!updatedDoctor) {
      return { message: 'Doctor not found' };
    }
    return updatedDoctor;
  }

  @Delete('/:id')
  deleteDoctor(@Param('id') id: number) {
    const success = this.mentalHealthService.deleteDoctor(id);
    if (!success) {
      return { message: 'Doctor not found' };
    }
    return { message: 'Doctor deleted successfully' };
  }
}
