import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../servicios/api/api.service';
import { LoginI } from '../../interfaces/login/login.interface';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    loginForm = new FormGroup({
        email : new FormControl('',Validators.required),
        password : new FormControl('',Validators.required)
})

  constructor( private api:ApiService) { }

    ngOnInit(): void {
  }

    onLogin(form){
        this.api.loginByEmail(form).subscribe(data => {
        console.log(data);
        });
    }

}
