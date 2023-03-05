import { Injectable } from '@angular/core';
import { LoginComponent } from './login/login.component';

@Injectable({
  providedIn: 'root'
})

export class UsersService{

  constructor() { }

  public user;

  users:{username: string, password:string}[] = [{
    username: "ane",
    password: "anepass"
  },
  {
    username: "glisa",
    password: "glisapass"
  }
  ]

  getUsers() {
    return this.users;
  }

  getUser() {
    return this.user;
  }

}
