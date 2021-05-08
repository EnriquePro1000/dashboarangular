import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../servicios/api/api.service';
import { Router } from '@angular/router';
import { ResponseI } from '../../interfaces/response.interface';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(  private api:ApiService, 
    private router:Router) { }

  ngOnInit(): void {
  }


  onLogout(): void{

    this.api.logout().subscribe(data => {
 
    let dataResponse:ResponseI = data;
    if(dataResponse.status == "ok"){
      console.log(data)
      localStorage.setItem("logged","false");
      localStorage.setItem("token","null");    
      localStorage.setItem("level","null");
        window.location.href="/login"

   
  }else{
  } 
 
    });



}


}
