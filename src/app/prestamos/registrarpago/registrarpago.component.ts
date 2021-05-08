import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrarpago',
  templateUrl: './registrarpago.component.html',
  styleUrls: ['./registrarpago.component.css']
})
export class RegistrarpagoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    localStorage.setItem("view", "registrarpago");
    localStorage.setItem("section", "prestamos");
  }

}
