import { Pipe, PipeTransform } from '@angular/core';
import {User} from "../model/users";
import {FireDatabaseService} from "../services/fireDatabase.service";

@Pipe({
  name: 'filter',
  pure: false,
})
export class FilterPipe implements PipeTransform {

  constructor(private database:FireDatabaseService) {
  }

  transform(users: User[], search:string|null=''): User[] {
    if(!!search){
      return users.filter(el=>el.name.toLowerCase().includes(search.toLowerCase()))
    }
    return users;
  }

}
