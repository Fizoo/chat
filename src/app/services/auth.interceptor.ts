import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {catchError, Observable, throwError} from 'rxjs';
import {FirebaseAuthService} from "./firebaseAuth.service";
import {Router} from "@angular/router";
import {LocalStorageKeys, LocalStorageService} from "./local-storage.service";
import {AlertService} from "./alert.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private auth: FirebaseAuthService,
              private router: Router,
              private localStorage: LocalStorageService,
              private alert:AlertService
              ) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (this.auth.isAuth()) {
      const token = this.localStorage.get(LocalStorageKeys.TOKEN)
      if (token) {
        request = request.clone({
          setParams: {
            auth: token as string
          }
        })
      }
    }
    return next.handle(request)
      .pipe(
        catchError((error:HttpErrorResponse)=>{
          this.alert.addAlert(`Error:status=${error.status},message=:${error.error.error}`)
          if(error.status===401){

            this.alert.addAlert(`Error:status=${error.status},message=:${error.error.error}`)
            this.auth.logout()
            this.router.navigate(['/admin','login'],
              {
                queryParams:{
                  authFailed:true
                }
              })
          }
          return throwError(()=>new Error(error.message))
        })
    )
  }
}
