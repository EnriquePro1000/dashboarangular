import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { LoginGuard } from './guards/login/login.guard';

import { LoginComponent } from './seguridad/login/login.component';
import { RegisterComponent } from './seguridad/register/register.component';
import { HomeComponent } from './vistas/home/home.component';
import { AppComponent } from './app.component';


const routes:Routes = [
{path: '', component: AppComponent},
{path: '**', pathMatch: 'full',redirectTo:''},
{path: 'login', component: LoginComponent, canActivate: [LoginGuard]},
{path: 'registrar', component: RegisterComponent},
{path: 'home', component: HomeComponent},
];



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
