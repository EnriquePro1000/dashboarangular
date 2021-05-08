import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editarprestamo',
  templateUrl: './editarprestamo.component.html',
  styleUrls: ['./editarprestamo.component.css']
})
export class EditarprestamoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    localStorage.setItem("view", "editarprestamo");
    localStorage.setItem("section", "prestamos");
  }

}
