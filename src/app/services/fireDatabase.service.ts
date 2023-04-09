import {Injectable} from '@angular/core';
import {BehaviorSubject, debounceTime, map, Observable, Subject, tap} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Message, User} from "../model/users";

@Injectable({
  providedIn: 'root'
})
export class FireDatabaseService {

  readonly url='https://chatapp-91814-default-rtdb.firebaseio.com'
  private _users$ =new BehaviorSubject<User[]>([]);
  public userData:User[]=[]
  search$=new BehaviorSubject<string>('');
  messageOfUser$=new Subject<Message[]>()
  selectedUser$=new Subject<User>()

  readonly user$=this._users$.asObservable()

  constructor(private http:HttpClient) {
    this.fetchAllUsers().subscribe(data=> {
      console.log('data',data)
      this.userData = data
      this._users$.next(this.userData)
      this.messageOfUser$.next(data[0].message)
      this.selectedUser$.next(data[0])
    })

    this.selectedUser$.pipe(
      debounceTime(300),
      tap(user=>this.getSelectedUserMessages(user.id)),
    ).subscribe()

  }

  fetchAllUsers():Observable<User[]>{
    return this.http.get<User[]>(`${this.url}/users.json`)
    .pipe(
        map((response:{[key:string]:any})=>{
         return  Object.keys(response)
           .map(key=>({
             ...response[key],
             id:key
           }))
        }))
  }

  getSelectedUserMessages(userId:number):any{
    let data=this.userData.filter(user=>user.id===userId)[0].message
    this.messageOfUser$.next(data)
  }

  searchUsers(user:string){
   // return this.tempData.filter(el=>el.name.includes(user))
  }



  create(users:User):Observable<User>{
    return this.http.post<User>(`${this.url}/users.json`, users)
  }

}
