import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FireDatabaseService {

readonly url='https://chatapp-91814-default-rtdb.firebaseio.com'

  constructor(private http:HttpClient,
             ) {
  }

  getUsers():Observable<any>{
    return this.http.get(`${this.url}/users.json`)
  }

  create(){
    return this.http.post(`${this.url}/users.json`, {user:{name:'Oleg',m:[]}})
  }

}
