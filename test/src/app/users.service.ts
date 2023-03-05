import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UsersService{

  constructor() { }


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
}
