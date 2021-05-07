import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../../servicios/api/api.service';
import { ResponseI } from '../../interfaces/response.interface';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    RegisterForm = new FormGroup({
    cedula : new FormControl('',Validators.required),
    nombres : new FormControl('',Validators.required,),
    apellidos : new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
    password : new FormControl('',Validators.required),
    password_confirm : new FormControl('',Validators.required),
  })

  constructor(
    private api:ApiService, 
    private router:Router,
  ) { }

  errorStatus_0:boolean = false;
  errorMsj_0 = "uno o mas campos están vacios";

  errorStatus_1:boolean = false;
  errorMsj_1 = "la cedula ha sido usada anteriormente";

  errorStatus_2:boolean = false;
  errorMsj_2 = "el email ha sido usado anteriormente";

  errorStatus_3:boolean = false;
  errorMsj_3 = "las contraseñas no coinciden";

  errorStatus_5:boolean = false;
  errorMsj_5 = "usted no está autorizado para realizar esta acción";

  exitStatus:boolean = false;
  exitMsj = "el usuario ha sido registrado correctamente";

  ngOnInit(): void {
  }

  onRegister(form){
    this.api.Register(form).subscribe(data => { 
      let dataResponse:ResponseI = data;
      if(dataResponse.status == "ok"){
        this.errorStatus_0 = false;
        this.errorStatus_1 = false,
        this.errorStatus_2 = false;
        this.errorStatus_3 = false;
        this.errorStatus_5 = false;
        this.exitStatus = true;
        this.RegisterForm.reset();
        }
        
        if(dataResponse.status == "err_0"){
          this.errorStatus_0 = true;
          this.errorStatus_1 = false;
          this.errorStatus_2 = false;
          this.errorStatus_3 = false;
          this.errorStatus_5 = false;
          this.exitStatus = false;
       }
       
       if(dataResponse.status == "err_1"){
         this.errorStatus_0 = false;
         this.errorStatus_1 = true;
         this.errorStatus_2 = false;
         this.errorStatus_3 = false;
         this.errorStatus_5 = false;
         this.exitStatus = false;        
       }
       if(dataResponse.status == "err_2"){
         this.errorStatus_0 = false;
         this.errorStatus_1 = false;
         this.errorStatus_2 = true;
         this.errorStatus_3 = false;
         this.errorStatus_5 = false;
         this.exitStatus= false;
     }
     
     if(dataResponse.status == "err_3"){
       this.errorStatus_0 = false;
       this.errorStatus_1 = false;
       this.errorStatus_2 = false;
       this.errorStatus_3 = true;
       this.errorStatus_5 = false;
       this.exitStatus= false;
   }
   
   if(dataResponse.status == "err_5"){
     this.errorStatus_0 = false;
     this.errorStatus_1 = false;
     this.errorStatus_2 = false;
     this.errorStatus_3 = false;
     this.errorStatus_5 = true;
     this.exitStatus= false;
  }
});
}
}
