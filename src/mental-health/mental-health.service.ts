import { Injectable } from '@nestjs/common';

export interface Doctor {
  id: number;
  name: string;
  lastName: string;
  age: number;
  description: string;
}

@Injectable()
export class MentalHealthService {
  private data: Doctor[] = [];

  public createDoctor(doctor: Omit<Doctor, 'id'>): Doctor {
    // Генерація унікального ID
    const newId = this.data.length
      ? Math.max(...this.data.map((d) => d.id)) + 1
      : 1;
    const newDoctor = { ...doctor, id: newId };
    this.data.push(newDoctor);
    return newDoctor;
  }

  public getDoctor(id: number): Doctor | undefined {
    return this.data.find((doctor) => doctor.id === id);
  }

  public getAllDoctors(): Doctor[] {
    return this.data;
  }

  public updateDoctor(id: number, updatedDoctor: Doctor): Doctor | null {
    const doctorIndex = this.data.findIndex((doctor) => doctor.id === id);
    if (doctorIndex === -1) return null;
    this.data[doctorIndex] = { ...updatedDoctor, id };
    return this.data[doctorIndex];
  }

  public deleteDoctor(id: number): boolean {
    const initialLength = this.data.length;
    this.data = this.data.filter((doctor) => doctor.id !== id);
    return this.data.length < initialLength;
  }
}
