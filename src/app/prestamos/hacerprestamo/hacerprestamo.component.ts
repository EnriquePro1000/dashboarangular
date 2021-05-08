import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hacerprestamo',
  templateUrl: './hacerprestamo.component.html',
  styleUrls: ['./hacerprestamo.component.css']
})
export class HacerprestamoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    localStorage.setItem("view", "hacerprestamo");
    localStorage.setItem("section", "prestamos");
  }

}
