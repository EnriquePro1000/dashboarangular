import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../servicios/api/api.service';
import { Router } from '@angular/router';

import { ResponseI } from '../../interfaces/response.interface';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],  
})

export class LoginComponent implements OnInit {  
    loginForm = new FormGroup({
        email    : new FormControl('',Validators.required),
        password : new FormControl('',Validators.required)
})

constructor(private api:ApiService, private router:Router) { }

errorStatus_1:boolean = false;
errorMsj_1 = "este email o nickname no existe";

errorStatus_2:boolean = false;
errorMsj_2 = "password incorrecto";

ngOnInit(): void {}

onLogin(form){
    this.api.loginByEmail(form).subscribe(data => { //console.log(data);
        let dataResponse:ResponseI = data;
            if(dataResponse.status == "ok"){
                localStorage.setItem("token",dataResponse.result.api_token);    
                localStorage.setItem("logged","true");                           
                this.router.navigate(['home']);             
            }
            if(dataResponse.status == "err_1"){                          
                this.errorStatus_1 = true;
                this.errorStatus_2 = false;
            }
            if(dataResponse.status == "err_2"){    
                this.errorStatus_1 = false;
                this.errorStatus_2 = true;    
            }
        });
    }
}
