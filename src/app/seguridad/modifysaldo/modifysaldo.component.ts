import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {formatNumber} from '@angular/common';
import { ApiService } from '../../servicios/api/api.service';
import { ResponseI } from '../../interfaces/response.interface';
@Component({
  selector: 'app-modifysaldo',
  templateUrl: './modifysaldo.component.html',
  styleUrls: ['./modifysaldo.component.css']
})
export class ModifysaldoComponent implements OnInit {

    saldoForm = new FormGroup({
        cantidad : new FormControl('',Validators.required),
        tipo : new FormControl('',Validators.required)
})
SaldoAnterior:number;
NuevoSaldo:number;

addCantidad(newCantidad: number) {
this.NuevoSaldo = newCantidad;
}
  constructor(private api:ApiService) { }

  exitStatus:boolean = false;
  exitMsj = "el saldo se ha actualizado correctamente, actualizando...";

  errorStatus_0:boolean = false;
  errorMsj_0 = "La cantidad a restar es mayor al cupo disponible";

  errorStatus_1:boolean = false;
  errorMsj_1 = "El numero no puede ser infinito, hay un limite de 4,200,000,000 COP";

  errorStatus_2:boolean = false;
  errorMsj_2 = "Uno o mas campos vacios";

  errorStatus_3:boolean = false;
  errorMsj_3 = "la cantidad no puede ser menor o igual 0";

  ngOnInit(): void {
    localStorage.setItem("view", "modifysaldo");
    localStorage.setItem("section", "seguridad");
    this.SaldoAnterior = Number(localStorage.getItem("cupo"));
  }
  onModificar(form){
    this.api.ModificarSaldo(form).subscribe(data => {
      let dataResponse:ResponseI = data;
      if(dataResponse.status == "ok_true"){
          this.exitStatus = true;
          this.errorStatus_0 = false;
          this.errorStatus_1 = false;
          this.errorStatus_2 = false;
          this.errorStatus_3 = false;
          this.saldoForm.reset();
          localStorage.setItem("cupo",String(this.SaldoAnterior +  form.cantidad));
          setTimeout("window.location.href='/modificarSaldo'", 500);
          
         
        }
        if(dataResponse.status == "ok_false"){
        //  console.log(data);
            this.exitStatus = true;
            this.errorStatus_0 = false;
            this.errorStatus_1 = false;
            this.errorStatus_2 = false;
            this.errorStatus_3 = false;
            this.saldoForm.reset();
            localStorage.setItem("cupo",String(this.SaldoAnterior -  form.cantidad));
            setTimeout("window.location.href='/modificarSaldo'", 500);
          }
          if(dataResponse.status == "error_0"){
        //    console.log(data);
              this.exitStatus = false;
              this.errorStatus_0 = true;
              this.errorStatus_1 = false;
              this.errorStatus_2 = false;
              this.errorStatus_3 = false;

                       }

       if(dataResponse.status == "error_1"){
     //    console.log(data);
         this.exitStatus = false;
         this.errorStatus_0 = false;
         this.errorStatus_1 = true;
         this.errorStatus_2 = false;
         this.errorStatus_3 = false;
         }
         
         if(dataResponse.status == "error_2"){
     //    console.log(data);
         this.exitStatus = false;
         this.errorStatus_0 = false;
         this.errorStatus_1 = false;
         this.errorStatus_2 = true;
         this.errorStatus_3 = false;
         }
         
         if(dataResponse.status == "error_2"){
      //   console.log(data);
         this.exitStatus = false;
         this.errorStatus_0 = false;
         this.errorStatus_1 = false;
         this.errorStatus_2 = true;
         this.errorStatus_3 = false;
        }
        if(dataResponse.status == "error_3"){
      //    console.log(data);
          this.exitStatus = false;
          this.errorStatus_0 = false;
          this.errorStatus_1 = false;
          this.errorStatus_2 = false;
          this.errorStatus_3 = true;
         }
                       
//console.log(data)
    })
  }

  
  

}
