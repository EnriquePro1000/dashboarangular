import { Injectable } from '@angular/core';
//El responseI se encarga de recibir todos los datos provenientes del API
import { ResponseI } from '../../interfaces/response.interface';
import { LoginService } from '../../servicios/login/login.service';
//Pasa los parametros necesarios para loguearse en la API
import { LoginI } from '../../interfaces/login/login.interface';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
    url:string = 'http://localhost/ANGECommerceAPI/public/api/'

    constructor(private http:HttpClient,
      private LoggedIn:LoginService) { }

    //form post, pasa parametros del login y recibe un response
    loginByEmail(form:LoginI):Observable<ResponseI>{
    let direccion = this.url + "login";
    return this.http.post<ResponseI>(direccion,form);
    }



  /*  getNewToken():Observable<ResponseI>{
      let direccion = this.url + "refresh";
      return this.http.get<ResponseI>(direccion);
  
      
  
      }*/

   
}
