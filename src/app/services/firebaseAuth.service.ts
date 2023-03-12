import {Injectable} from '@angular/core';
import {BehaviorSubject, from, Observable, ReplaySubject, shareReplay, tap} from "rxjs";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import firebase from "firebase/compat";
import {LocalStorageKeys, LocalStorageService} from "./local-storage.service";

@Injectable({
  providedIn: 'root'
})
export class FirebaseAuthService {
  user$: Observable<firebase.User | null>;

  isAuth$=new BehaviorSubject<boolean>(false);
  imgUrl$ = new ReplaySubject<string>(1);

  constructor(private afAuth: AngularFireAuth,
              private localStorage:LocalStorageService) {

    this.user$ = this.afAuth.authState.pipe(shareReplay(1))

    this.imgUrl$.next(this.localStorage.get(LocalStorageKeys.IMG)  || '')

    this.isAuth$.next(!!this.localStorage.get(LocalStorageKeys.AUTH))

    this.isAuth$.subscribe((isAuth) => this.localStorage.set(LocalStorageKeys.AUTH, isAuth));

    this.imgUrl$.subscribe((url) => this.localStorage.set(LocalStorageKeys.IMG, url))
  }


  login(email: string, password: string): Observable<any> {
    return from(this.afAuth.signInWithEmailAndPassword(email, password)).pipe(
      tap(() => {
        this.isAuth$.next(true);
      })
    )
  }

  logout(): Observable<any> {
    return  from(this.afAuth.signOut()).pipe(
      tap(() => {
        this.isAuth$.next(false);
      })
    )
  }

  createNewUser(email: string, password: string){
    return this.afAuth.createUserWithEmailAndPassword(email,password)
  }

  isAuth():boolean{
    return this.localStorage.get(LocalStorageKeys.AUTH)
  }

  setImgUrl(url:string){
    console.log(url)
    this.imgUrl$.next(url)
  }

  getImgUrl():Observable<string>{
    return this.imgUrl$.asObservable()
  }
}
