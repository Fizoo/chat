import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {debounceTime, distinctUntilChanged} from "rxjs";
import {FireDatabaseService} from "../../services/fireDatabase.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  search=new FormControl()

  constructor(private database:FireDatabaseService) {
    this.search.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged()
    ).subscribe(el=>{
        this.database.search$.next(el)
    })
  }


}
