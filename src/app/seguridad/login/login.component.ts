import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../servicios/api/api.service';
import { Router } from '@angular/router';
import { LoginService } from '../../servicios/login/login.service';
import { ResponseI } from '../../interfaces/response.interface';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  
})

export class LoginComponent implements OnInit {
    

  
    loginForm = new FormGroup({
        email : new FormControl('',Validators.required),
        password : new FormControl('',Validators.required)
})


  constructor( 
      private api:ApiService, 
      private router:Router,
      private LoggedIn:LoginService ) { }
        errorStatus:boolean = false;
        errorMsj = "estas credenciales no coinciden con nuestros registros";
        
    

    ngOnInit(): void {
  }

    onLogin(form){
        this.api.loginByEmail(form).subscribe(data => {
        console.log(data);
        let dataResponse:ResponseI = data;
            if(dataResponse.status == "ok"){
                localStorage.setItem("token",dataResponse.result.api_token);     
                localStorage.setItem("logged","true");                           
                this.router.navigate(['home']); 
      
             
             
            }else{
                this.errorStatus = true;
              
         
         
            } 
        });
    }

}
