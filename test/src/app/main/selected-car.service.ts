import { Injectable } from '@angular/core';
import carsData from '../cars.json';

Injectable({
  providedIn: 'root'
})

interface Cars {
    image: string;
    make: string;
    model: string;
    mileage: number;
    horsepower: number;
    price: number;
  }

export class SelectedCarService {
    public selectedCar: Cars = carsData[0];
}