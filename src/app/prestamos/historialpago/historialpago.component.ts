import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historialpago',
  templateUrl: './historialpago.component.html',
  styleUrls: ['./historialpago.component.css']
})
export class HistorialpagoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    localStorage.setItem("view", "historialpago");
    localStorage.setItem("section", "prestamos");
  }

}
