import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit{

  public users: any[] = [];
  public username;
  public password;

  constructor(private _usersService: UsersService, private auth: AuthService, private route: Router) {}

  ngOnInit() {
    this.users = this._usersService.getUsers();
  }

  public login(){
    const user = this.users.find(user => user.username === this.username && user.password === this.password);
    if (user) {
      this.auth.login();
      this.route.navigate(['main']);
    } else {
      alert("Invalid username or password!");
    }
  }

}