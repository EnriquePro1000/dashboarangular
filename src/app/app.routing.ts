
import { RouterModule } from '@angular/router';

//import { AppComponent } from './app.component';
//import { NgModule } from '@angular/core';

import { LoginGuard } from './guards/login/login.guard';
import { LogoutGuard } from './guards/login/logout.guard';
import { LoginComponent } from './seguridad/login/login.component';
import { RegisterComponent } from './seguridad/register/register.component';
import { HomeComponent } from './vistas/home/home.component';
import { IndexComponent } from './vistas/index/index.component';

const appRoutes = [
  { path: '', component: IndexComponent,  pathMatch: 'full'},
  { path: 'login', component: LoginComponent,  pathMatch: 'full',canActivate: [LoginGuard]},
  { path: 'home', component: HomeComponent,  pathMatch: 'full',canActivate: [LogoutGuard]},
  { path: 'registrar', component: RegisterComponent,  pathMatch: 'full',canActivate: [LogoutGuard]},

];
export const routing = RouterModule.forRoot(appRoutes);

