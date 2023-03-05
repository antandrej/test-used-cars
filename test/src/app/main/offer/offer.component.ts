import { Component } from '@angular/core';
import { Router } from '@angular/router';
import carsData from "../../cars.json";
import { SelectedCarService } from '../selected-car.service';

interface Cars {
  image: string;
  make: string;
  model: string;
  mileage: number;
  horsepower: number;
  price: number;
}

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})

export class OfferComponent{

  cars:Cars[] = carsData;
  public selectedCar: Cars = carsData[0];
  
  
  constructor(private route: Router, private selectedCarService: SelectedCarService) {
  }
  
  onSelect(car: Cars): void{
    this.selectedCar = car;
    this.selectedCarService.selectedCar = this.selectedCar;
    console.log(this.selectedCar);
    this.route.navigate(['car']);
    window.scrollTo(0, 0);
  }

}
