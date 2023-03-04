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
    /*
    type userData = Array<{username: string, password: string}>;

    const arr:userData = [{
      username: "ane",
      password: "anepass"
    },
    {
      username: "glisa",
      password: "glisapass"
    }
  ]

  return arr;
  */
  }
}
