import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import carsData from "../../cars.json";
import { SelectedCarService } from '../selected-car.service';

interface Car {
  image: string;
  make: string;
  model: string;
  mileage: number;
  horsepower: number;
  price: number;
}

@Component({
  selector: 'app-selected-car',
  templateUrl: './selected-car.component.html',
  styleUrls: ['./selected-car.component.css']
})

export class SelectedCarComponent {

  constructor(private auth: AuthService, private route: Router, private selectedCarService: SelectedCarService) {
    //this.car = carsData[0];
  }

  car:Car = this.selectedCarService.selectedCar;

  public logout(){
    if(confirm("Are you sure you want to log out?") == true){
      this.auth.logout();
      this.route.navigate(['login']);
    }
  }
}
