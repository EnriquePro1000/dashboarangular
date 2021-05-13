import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modifyclient',
  templateUrl: './modifyclient.component.html',
  styleUrls: ['./modifyclient.component.css']
})
export class ModifyclientComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { 
    localStorage.setItem("view", "modifyclient");
    localStorage.setItem("section", "seguridad");
  }

}
