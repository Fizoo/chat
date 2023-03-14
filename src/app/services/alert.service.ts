import { Injectable } from '@angular/core';
import {Subject, takeUntil, timer} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  alert$=new Subject<string>()

  constructor() { }

  addAlert(value:any){
    this.alert$.next(value)

    timer(2000).pipe(
      takeUntil(this.alert$)
    ).subscribe(() => {
      this.clear()
    })
  }
  clear(){
    this.alert$.next('')
  }

}
