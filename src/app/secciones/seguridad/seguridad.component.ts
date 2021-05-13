import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seguridad',
  templateUrl: './seguridad.component.html',
  styleUrls: ['./seguridad.component.css']
})
export class SeguridadComponent implements OnInit {

  constructor() { }
  activeSeguridad:boolean = true;
  inactiveSeguridad:boolean = false;

  activeRegisterUser:boolean = true;
  inactiveRegisterUser:boolean = false;

  activeRegisterClient:boolean = true;
  inactiveRegisterClient:boolean = false;

  activeModifyClient:boolean = true;
  inactiveModifyClient:boolean = false;

  activeModifyUser:boolean = false;

  activeModifySaldo:boolean = true;
  inactiveModifySaldo:boolean = false;
  
  canRegister:boolean = false;

  ngOnInit(): void {
    if(localStorage.getItem("level") === "1" || localStorage.getItem("level") === "2"){
      this.canRegister = true;
      this.activeRegisterUser= false;
    }else{
      this.canRegister = false;
    }

    if(localStorage.getItem("section") === "seguridad"){
      this.activeSeguridad = false;
      this.inactiveSeguridad = true;
    }else{
      this.activeSeguridad = true;
      this.inactiveSeguridad = false;
    }
    
    if(localStorage.getItem("view") === "registeruser"){
      this.activeRegisterUser = false;
      this.inactiveRegisterUser = true;
    }else{
      this.activeRegisterUser = true;
      this.inactiveRegisterUser = false;
    }

    if(localStorage.getItem("view") === "modifyuser"){
      this.activeModifyUser = true;
    }else{
      this.activeModifyUser = false;
    }

    if(localStorage.getItem("view") === "registerclient"){
      this.activeRegisterClient = true;
      this.inactiveRegisterClient = false;
    }else{
      this.activeRegisterClient = false;
      this.inactiveRegisterClient = true;
    }

    if(localStorage.getItem("view") === "modifyclient"){
      this.activeModifyClient = true;
      this.inactiveModifyClient = false;
    }else{
      this.activeModifyClient = false;
      this.inactiveModifyClient = true;
    }

    if(localStorage.getItem("view") === "modifysaldo"){
      this.activeModifySaldo = true;
      this.inactiveModifySaldo = false;
    }else{
      this.activeModifySaldo = false;
      this.inactiveModifySaldo = true;
    }

    
    
  }

}
