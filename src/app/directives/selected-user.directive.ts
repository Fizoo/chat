import {Directive, HostListener, Input} from '@angular/core';
import {User} from "../model/users";
import {FireDatabaseService} from "../services/fireDatabase.service";

@Directive({
  selector: '[appSelectedUser]'
})
export class SelectedUserDirective {
  @Input('appSelectedUser') user: User

  constructor(private database: FireDatabaseService) {
  }

@HostListener('click',) onClick(){
    console.log('click')
    this.database.selectedUser$.next(this.user)
}

}
