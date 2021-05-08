import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prestamos',
  templateUrl: './prestamos.component.html',
  styleUrls: ['./prestamos.component.css']
})
export class PrestamosComponent implements OnInit {

  constructor() { }
  activePrestamos:boolean = true;
  inactivePrestamos:boolean = false;

  activeHacerPrestamo:boolean = true;

  activeEditarPrestamo:boolean = true;

  activeRegistrarPago:boolean = true;

  activeHistorialPago:boolean = true;


  ngOnInit(): void {
    if(localStorage.getItem("section") === "prestamos"){
      this.activePrestamos = false;
      this.inactivePrestamos = true;
    }else{
      this.activePrestamos = true;
      this.inactivePrestamos = false;
    }

    
    if(localStorage.getItem("view") === "hacerprestamo"){
      this.activeHacerPrestamo = true;
    }else{
      this.activeHacerPrestamo = false;   
    }

    if(localStorage.getItem("view") === "editarprestamo"){
      this.activeEditarPrestamo = true;
    }else{
      this.activeEditarPrestamo = false;   
    }

    if(localStorage.getItem("view") === "registrarpago"){
      this.activeRegistrarPago = true;
    }else{
      this.activeRegistrarPago = false;   
    }

    if(localStorage.getItem("view") === "historialpago"){
      this.activeHistorialPago = true;
    }else{
      this.activeHistorialPago = false;   
    }
  }

  
}
