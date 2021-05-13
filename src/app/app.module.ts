import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import {UnauthorizedInterceptor} from './interceptors/unauthorized.interceptor';

import { IndexComponent } from './vistas/index/index.component';
import { LoginComponent } from './seguridad/login/login.component';
import { HeaderComponent } from './secciones/header/header.component';
import { FooterComponent } from './secciones/footer/footer.component';
import { HomeComponent } from './vistas/home/home.component';
import { RegisterComponent } from './seguridad/register/register.component';
import { ModifyComponent } from './seguridad/modify/modify.component';
import { SeguridadComponent } from './secciones/seguridad/seguridad.component';
import { PrestamosComponent } from './secciones/prestamos/prestamos.component';
import { RegisterclientComponent } from './seguridad/registerclient/registerclient.component';
import { ModifyclientComponent } from './seguridad/modifyclient/modifyclient.component';
import { ModifysaldoComponent } from './seguridad/modifysaldo/modifysaldo.component';
import { HacerprestamoComponent } from './prestamos/hacerprestamo/hacerprestamo.component';
import { EditarprestamoComponent } from './prestamos/editarprestamo/editarprestamo.component';
import { RegistrarpagoComponent } from './prestamos/registrarpago/registrarpago.component';
import { HistorialpagoComponent } from './prestamos/historialpago/historialpago.component';



@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    RegisterComponent,
    SeguridadComponent,
    PrestamosComponent,
    RegisterclientComponent,
    ModifyclientComponent,
    ModifysaldoComponent,
    HacerprestamoComponent,
    EditarprestamoComponent,
    RegistrarpagoComponent,
    HistorialpagoComponent,
    ModifyComponent    
  ],
  imports: [
    routing,
    ReactiveFormsModule, 
    HttpClientModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
  ],
  providers: [
    {
      provide : HTTP_INTERCEPTORS,
      useClass: UnauthorizedInterceptor,
      multi   : true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
