import {Directive, HostListener, Input} from '@angular/core';
import {Users} from "../model/users";
import {FireDatabaseService} from "../services/fireDatabase.service";

@Directive({
  selector: '[appSelectedUser]'
})
export class SelectedUserDirective {
  @Input('appSelectedUser') user: Users

  constructor(private database: FireDatabaseService) {
  }

@HostListener('click',) onClick(){
    console.log('click')
    this.database.selectedUser$.next(this.user)
}

}
