import { Component } from '@angular/core';
import carsData from "../../cars.json";

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
export class OfferComponent {
  cars:Cars[] = carsData;
}
