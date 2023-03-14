import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {FirebaseAuthService} from "../services/firebaseAuth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private fireAuth:FirebaseAuthService,
              private router:Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log(this.fireAuth.isAuth())
    if (this.fireAuth.isAuth()){
      return true
    }
    else {
      this.fireAuth.logout()
      this.router.navigate(['/admin','login'],{
        queryParams: {
          loginAgain:true
        }
      })
    }
    return false;
  }

}
