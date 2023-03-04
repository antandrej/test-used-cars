import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private auth: AuthService, private route: Router){}

  public logout(){
    if(confirm("Are you sure you want to log out?") == true){
      this.auth.logout();
      this.route.navigate(['login']);
    }
  }
}
