import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class RegisterGuard implements CanActivate {
  constructor(
    //private LoggedIn:LoginService,
    private router:Router
  ){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(localStorage.getItem("level") !== "1" && localStorage.getItem("level") !== "2" ) {
        this.router.navigate(['home']);

      //  alert("bloqueado")
   
      //  this.LoggedIn.true = true;
      } else{
        
       
        return true;
      }
  }
  
}
