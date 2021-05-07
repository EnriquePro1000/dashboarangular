import { Injectable } from '@angular/core';
import { ResponseI } from '../../interfaces/response.interface';
import { LoginI } from '../../interfaces/login/login.interface';
import { RegisterI } from '../../interfaces/register/register.interface';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

    //Enlace desde el cual se consumen los servicios
    url:string = 'http://localhost/ANGECommerceAPI/public/api/'

    //Parametros para la validación del token en el servidor
    headers(){
      let headers = new HttpHeaders();
      headers = headers.append("Authorization", "Bearer "+ localStorage.getItem("token"));
      headers = headers.append("Accept", "application/json");
      return headers;
    }

    constructor(private http:HttpClient) {}

    //form post, pasa parametros del login y recibe un response
    loginByEmail(form:LoginI):Observable<ResponseI>{
      let direccion = this.url + "login";
      return this.http.post<ResponseI>(direccion,form);
    }
    
    //form get, llama al metodo logout
    logout():Observable<ResponseI>{
      let headers   = this.headers();   
      let direccion = this.url + "logout";
      return this.http.get<ResponseI>(direccion,{headers});
    }
    
    //form post, pasa parametros delregister y recibe un response
    Register(form:RegisterI):Observable<ResponseI>{
      let headers   = this.headers();
      let direccion = this.url + "register";
      return this.http.post<ResponseI>(direccion,form,{headers});
    }   
}
