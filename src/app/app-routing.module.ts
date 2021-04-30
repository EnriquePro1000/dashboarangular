import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './seguridad/login/login.component';
import { ReguserComponent } from './seguridad/reguser/reguser.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';


const routes:Routes = [
{path: '', component: AppComponent},
{path: '**', pathMatch: 'full',redirectTo:''},
{path: 'login', component: LoginComponent},
{path: 'registrar', component: ReguserComponent},
{path: 'home', component: HomeComponent},
];



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
