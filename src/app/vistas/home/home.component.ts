import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  canRegister:boolean = true;

  ngOnInit(): void {
    localStorage.setItem("view", "home")
    localStorage.setItem("section", "null");
    if(localStorage.getItem("level") === "3"){
      this.canRegister= false;
    }
  }

}
