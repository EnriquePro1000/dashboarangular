import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../../servicios/api/api.service';
import { ResponseI } from '../../interfaces/response.interface';
@Component({
  selector: 'app-registerclient',
  templateUrl: './registerclient.component.html',
  styleUrls: ['./registerclient.component.css']
})
export class RegisterclientComponent implements OnInit {

  RegisterclientForm = new FormGroup({
   // tipo_prestamo : new FormControl(),
    cedula : new FormControl('',Validators.required),
    nombres : new FormControl('',Validators.required,),
    apellidos : new FormControl('',Validators.required),
    direccion: new FormControl('',Validators.required),
    telefono : new FormControl('',Validators.required),
    file : new FormControl(''),
  })

  errorStatus_0:boolean = false;
  errorMsj_0 = "uno o mas campos están vacios";

  errorStatus_1:boolean = false;
  errorMsj_1 = "usted tiene otro usuario con esta identificación";

  exitStatus:boolean = false;
  exitMsj = "el cliente se ha registrado correctamente";

  constructor(private api:ApiService) { }
  

  ngOnInit(): void {
    localStorage.setItem("view", "registerclient");
    localStorage.setItem("section", "seguridad");
  }

  onRegisterclient(form){
    this.api.RegisterClient(form).subscribe(data => { 
      let dataResponse:ResponseI = data;
      if(dataResponse.status == "ok"){
        console.log(data);
        this.errorStatus_0 = false;
          this.errorStatus_1 = false;
          this.exitStatus = true;
          this.RegisterclientForm.reset();
        }
        if(dataResponse.status == "err_0"){
          console.log(data);
          this.errorStatus_0 = true;
          this.errorStatus_1 = false;
          this.exitStatus = false;
          }
          if(dataResponse.status == "err_1"){
            console.log(data);
            this.errorStatus_0 = false;
            this.errorStatus_1 = true;
            this.exitStatus = false;
            }
        

});
}



  }
        
      

