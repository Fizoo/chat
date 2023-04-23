import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Message } from 'src/app/model/users';
import { FirestoreService } from 'src/app/services/firestore.service';
import {UserActions} from "../../../store/actions";
import {UserSelectors} from "../../../store/selectors";
import {debounceTime, map, switchMap} from "rxjs";







@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  message: string=''

  constructor(private store: Store,
              private firestore: FirestoreService
            ) {
  }

  sendMessage() {
    console.log('hello world')
    let newMessage:Message = {
      text: this.message,
      id:new Date().getTime(),
      time:new Date().getTime()
    }

/*    this.store.select(UserSelectors.getAllUsers).pipe(map(el=>el.map(a=>({
        name:a.name,
        message:a.message,
        photoUrl:a.photoUrl
      }))),
      switchMap(data=> this.firestore.addData({data}))).subscribe(el=>console.log('addData',el))*/
    this.firestore.getAllData().pipe(debounceTime(1000)).subscribe(data=>console.log('GetData',data))

    this.store.dispatch(UserActions.addMessagesOfUser({message:newMessage}))
  }
}
