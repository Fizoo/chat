import {Component, OnInit} from '@angular/core';
import {FireDatabaseService} from "../../../services/fireDatabase.service";
import {Observable} from "rxjs";
import {Message} from "../../../model/users";
import {Store} from "@ngrx/store";
import {UserSelectors} from "../../../store/selectors";

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit{
  messages$:Observable<Message[]>

  constructor(private database:FireDatabaseService,
              private store:Store) {
  }

  ngOnInit(): void {
    this.messages$=this.store.select(UserSelectors.getMessages);
   // this.messages$= this.database.messageOfUser$.pipe(tap(el=>console.log('messag',el)))
  }


}
