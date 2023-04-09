import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Message } from 'src/app/model/users';
import {UserActions} from "../../../store/actions";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  message: string=''

  constructor(private store: Store) {
  }

  sendMessage() {
    console.log('hello world')
    let newMessage:Message = {
      text: this.message,
      id:new Date().getTime(),
      time:new Date().getTime()
    }
    this.store.dispatch(UserActions.addMessagesOfUser({message:newMessage}))
  }
}
