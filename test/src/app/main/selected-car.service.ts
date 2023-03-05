interface Cars {
    image: string;
    make: string;
    model: string;
    mileage: number;
    horsepower: number;
    price: number;
  }

export class SelectedCarService {
    public selectedCar!: Cars;
}