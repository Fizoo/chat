import { Pipe, PipeTransform } from '@angular/core';
import {Users} from "../model/users";
import {FireDatabaseService} from "../services/fireDatabase.service";

@Pipe({
  name: 'filter',
  pure: false,
})
export class FilterPipe implements PipeTransform {

  constructor(private database:FireDatabaseService) {
  }

  transform(users: Users[], search:string|null=''): Users[] {
    if(!!search){
      return users.filter(el=>el.name.toLowerCase().includes(search.toLowerCase()))
    }
    return users;
  }

}
