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

  public user;

  constructor(private _usersService: UsersService, private auth: AuthService, private route: Router) {}

  ngOnInit() {
    this.users = this._usersService.getUsers();
    this.user = this._usersService.getUser();
    console.log(this.user);
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
