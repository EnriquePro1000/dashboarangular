import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './seguridad/login/login.component';
import { HomeComponent } from './home/home.component';

const appRoutes = [
  { path: 'login', component: LoginComponent,  pathMatch: 'full'},
  { path: 'home', component: HomeComponent,  pathMatch: 'full'},
];
export const routing = RouterModule.forRoot(appRoutes);

