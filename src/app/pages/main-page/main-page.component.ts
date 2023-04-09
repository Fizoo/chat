import {Component} from '@angular/core';
import { Store } from '@ngrx/store';
import {UserActions} from "../../store/actions";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
  constructor(private store: Store) {
    this.store.dispatch(UserActions.loadUsers())
  }



}
