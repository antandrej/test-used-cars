import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { UsersService } from 'src/app/users.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent{

  public users: any[] = [];
  public username;
  public password;


  constructor(private _usersService: UsersService, private auth: AuthService, private route: Router) {}

  ngOnInit() {
    this.users = this._usersService.getUsers();
  }

  public addUser(){
    let newUser = {username: this.username, password: this.password}
    this._usersService.users.push(newUser);
  }

  public logout(){
    if(confirm("Are you sure you want to log out?") == true){
      this.auth.logout();
      this.route.navigate(['login']);
    }
  }

}
