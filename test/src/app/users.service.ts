import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  getUsers(){
    return [ 
      {"username": "ane", "password": "anepass"},
      {"username": "glisa", "password": "glisapass"}
    ];
  }
}
