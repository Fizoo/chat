import {Injectable} from '@angular/core';
import {BehaviorSubject, catchError, delay, from, Observable, ReplaySubject, shareReplay, tap, throwError} from "rxjs";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import firebase from "firebase/compat";
import {LocalStorageKeys, LocalStorageService} from "./local-storage.service";
import {HttpErrorResponse} from "@angular/common/http";
import {AlertService} from "./alert.service";

@Injectable({
  providedIn: 'root'
})
export class FirebaseAuthService {
  user$: Observable<firebase.User | null>;

  isAuth$ = new BehaviorSubject<boolean>(false);
  imgUrl$ = new ReplaySubject<string>(1);

  constructor(private afAuth: AngularFireAuth,
              private localStorage: LocalStorageService,
              private alert: AlertService) {

    this.user$ = this.afAuth.authState.pipe(shareReplay(1))

    this.imgUrl$.next(this.localStorage.get(LocalStorageKeys.IMG) || '')

    this.isAuth$.next(!!this.localStorage.get(LocalStorageKeys.AUTH))

    this.isAuth$.subscribe((isAuth) => this.localStorage.set(LocalStorageKeys.AUTH, isAuth));


    this.imgUrl$.subscribe((url) => this.localStorage.set(LocalStorageKeys.IMG, url))
  }


  login(email: string, password: string): Observable<any> {
    return from(this.afAuth.signInWithEmailAndPassword(email, password)).pipe(

      tap((el: any) => {
        const token = el.user?.multiFactor?.user.accessToken
        if (token) {
          this.localStorage.set(LocalStorageKeys.TOKEN, token)
        }
        this.isAuth$.next(true);
        this.alert.addAlert('Login success!!!')
      }),
      delay(2000),

      catchError(this.handleError.bind(this))

    )
  }

  logout(): Observable<any> {
    return from(this.afAuth.signOut()).pipe(
      tap(() => {
        this.isAuth$.next(false);
      }),
      catchError(this.handleError.bind(this))
    )
  }

  createNewUser(email: string, password: string) {
    return from(this.afAuth.createUserWithEmailAndPassword(email, password)).pipe(
      tap(() => this.alert.addAlert('Create new user success!!!')),
      catchError(this.handleError.bind(this))
    )
  }

  isAuth(): boolean {
    return this.localStorage.get(LocalStorageKeys.AUTH)
  }

  setImgUrl(url: string) {
    console.log(url)
    this.imgUrl$.next(url)
  }

  getImgUrl(): Observable<string> {
    return this.imgUrl$.asObservable()
  }

  private handleError(error: HttpErrorResponse) {

    this.alert.addAlert(`Error: ${error}`)

    return throwError(() => new Error(error.message))
  }
}
