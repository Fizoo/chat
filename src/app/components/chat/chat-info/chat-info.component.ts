import { Component } from '@angular/core';
import {FireDatabaseService} from "../../../services/fireDatabase.service";
import {User} from "../../../model/users";
import {Observable} from "rxjs";

@Component({
  selector: 'app-chat-info',
  templateUrl: './chat-info.component.html',
  styleUrls: ['./chat-info.component.scss']
})
export class ChatInfoComponent {
  user$:Observable<User>
  constructor(private dataService: FireDatabaseService){
    this.user$=this.dataService.selectedUser$
  }

}
