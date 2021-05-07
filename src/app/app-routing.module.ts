import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { LoginGuard } from './guards/login/login.guard';

import { LoginComponent } from './seguridad/login/login.component';
import { LogoutGuard } from './guards/login/logout.guard';
import { RegisterComponent } from './seguridad/register/register.component';
import { HomeComponent } from './vistas/home/home.component';
import { IndexComponent } from './vistas/index/index.component';
import { AppComponent } from './app.component';


const routes:Routes = [
{path: '', component: IndexComponent},
{path: '**', pathMatch: 'full',redirectTo:''},
{path: 'login', component: LoginComponent, canActivate: [LoginGuard]},
{path: 'registrar', component: RegisterComponent,canActivate: [LogoutGuard]},
{path: 'home', component: HomeComponent,canActivate: [LogoutGuard]},
];



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
