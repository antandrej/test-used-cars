import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UsersService } from './users.service';
import { MainComponent } from './main/main.component';
import { NavbarComponent } from './main/navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { loginGuardService } from './loginGuard.service';
import { AuthService } from './auth.service';
import { OfferComponent } from './main/offer/offer.component';
import { AdminComponent } from './main/admin/admin.component';
import { SelectedCarComponent } from './main/selected-car/selected-car.component';
import { SelectedCarService } from './main/selected-car.service';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  { path: 'main', component: MainComponent, canActivate: [loginGuardService]},
  { path: 'admin', component: AdminComponent, canActivate: [loginGuardService]},
  { path: 'car', component: SelectedCarComponent, canActivate: [loginGuardService]},
  { path: '**', redirectTo: 'login'}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    NavbarComponent,
    OfferComponent,
    AdminComponent,
    SelectedCarComponent
  ],
  imports: [
    BrowserModule,  
    AppRoutingModule,
    RouterModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  exports: [
    RouterModule
  ],
  providers: [UsersService, loginGuardService, AuthService, SelectedCarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
