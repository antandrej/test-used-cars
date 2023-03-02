import { Component, Input, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit{

  public users: any[] = [];

  constructor(private _usersService: UsersService) {}

  ngOnInit() {
    this.users = this._usersService.getUsers();
  }

  public login(){
    
  }

}