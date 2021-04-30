import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './seguridad/login/login.component';
import { HomeComponent } from './home/home.component';

import { HeaderComponent } from './secciones/header/header.component';
import { FooterComponent } from './secciones/footer/footer.component';
import { ReguserComponent } from './seguridad/reguser/reguser.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ReguserComponent
  ],
  imports: [
    BrowserModule,
    routing,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
