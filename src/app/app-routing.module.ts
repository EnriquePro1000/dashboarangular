import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { LoginGuard } from './guards/login/login.guard';
import { LogoutGuard } from './guards/login/logout.guard';
import { RegisterGuard } from './guards/register/register.guard';

import { LoginComponent } from './seguridad/login/login.component';

import { RegisterComponent } from './seguridad/register/register.component';
import { ModifyComponent } from './seguridad/modify/modify.component';
import { RegisterclientComponent } from './seguridad/registerclient/registerclient.component';
import { ModifyclientComponent } from './seguridad/modifyclient/modifyclient.component';
import { ModifysaldoComponent } from './seguridad/modifysaldo/modifysaldo.component';

import { EditarprestamoComponent } from './prestamos/editarprestamo/editarprestamo.component';
import { HacerprestamoComponent } from './prestamos/hacerprestamo/hacerprestamo.component';
import { HistorialpagoComponent } from './prestamos/historialpago/historialpago.component';
import { RegistrarpagoComponent } from './prestamos/registrarpago/registrarpago.component';

import { HomeComponent } from './vistas/home/home.component';
import { IndexComponent } from './vistas/index/index.component';
import { AppComponent } from './app.component';


const routes:Routes = [
{path: '', component: LoginComponent, canActivate: [LoginGuard]},
{path: '**', pathMatch: 'full',redirectTo:'', canActivate: [LoginGuard]},

//{path: 'login', component: LoginComponent,pathMatch: 'full', canActivate: [LoginGuard]},
{path: 'home', component: HomeComponent,pathMatch: 'full',canActivate: [LogoutGuard]},

{path: 'registrar', component: RegisterComponent,pathMatch: 'full',canActivate: [LogoutGuard, RegisterGuard]},
{ path: 'modificar', component: ModifyComponent,  pathMatch: 'full',canActivate: [LogoutGuard, RegisterGuard]},
{path: 'registrarCliente', component: RegisterclientComponent,pathMatch: 'full',canActivate: [LogoutGuard]},
{path: 'modificarCliente', component: ModifyclientComponent,pathMatch: 'full',canActivate: [LogoutGuard]},
{path: 'modificarSaldo', component: ModifysaldoComponent,pathMatch: 'full',canActivate: [LogoutGuard]},

{ path: 'editarPrestamo', component: EditarprestamoComponent,  pathMatch: 'full',canActivate: [LogoutGuard]},
{ path: 'hacerPrestamo', component: HacerprestamoComponent,  pathMatch: 'full',canActivate: [LogoutGuard]},
{path: 'historialPago', component: HistorialpagoComponent,pathMatch: 'full',canActivate: [LogoutGuard]},
{path: 'registrarPago', component: RegistrarpagoComponent,pathMatch: 'full',canActivate: [LogoutGuard]},
];



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
