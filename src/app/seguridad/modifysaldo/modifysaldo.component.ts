import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modifysaldo',
  templateUrl: './modifysaldo.component.html',
  styleUrls: ['./modifysaldo.component.css']
})
export class ModifysaldoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    localStorage.setItem("view", "modifysaldo");
    localStorage.setItem("section", "seguridad");
  }

}
