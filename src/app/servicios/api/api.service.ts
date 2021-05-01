import { Injectable } from '@angular/core';

import { LoginI } from '../../interfaces/login/login.interface';
import { ResponseI } from '../../interfaces/login/response.interface';
import { Observable } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

    url:string = 'http://127.0.0.1/ANGEcommerceAPI/public/api/'

    constructor(private http:HttpClient) { }

    loginByEmail(form:LoginI):Observable<ResponseI>{
    let direccion = this.url + "login";
    return this.http.post<ResponseI>(direccion,form);
    }


}
