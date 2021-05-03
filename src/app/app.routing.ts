import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { LoginGuard } from './guards/login/login.guard';

import { LoginComponent } from './seguridad/login/login.component';
import { RegisterComponent } from './seguridad/register/register.component';
import { HomeComponent } from './vistas/home/home.component';

const appRoutes = [
  { path: '', component: AppComponent,  pathMatch: 'full'},
  { path: 'login', component: LoginComponent,  pathMatch: 'full',canActivate: [LoginGuard]},
  { path: 'home', component: HomeComponent,  pathMatch: 'full'},
  { path: 'registrar', component: RegisterComponent,  pathMatch: 'full'},

];
export const routing = RouterModule.forRoot(appRoutes);

