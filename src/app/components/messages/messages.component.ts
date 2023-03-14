import { Component, OnInit } from '@angular/core';
import {FireDatabaseService} from "../../services/fireDatabase.service";
import {Observable, tap} from "rxjs";
import {Message} from "../../model/users";

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit{
  messages$:Observable<Message[]>

  constructor(private database:FireDatabaseService) {
  }

  ngOnInit(): void {
    this.messages$= this.database.messageOfUser$.pipe(tap(el=>console.log('messag',el)))
  }


}
