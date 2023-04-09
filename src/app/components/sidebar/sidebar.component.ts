import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {User} from "../../model/users";
import {Observable} from "rxjs";
import {FireDatabaseService} from "../../services/fireDatabase.service";
import {Store} from "@ngrx/store";
import {UserSelectors} from "../../store/selectors";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent implements OnInit{

  users$:Observable< User[] >
  search$:Observable< string>

  constructor(private dataService:FireDatabaseService,
              private store:Store) {
  }

  ngOnInit(): void {
    this.search$=this.dataService.search$
    this.users$=this.store.select(UserSelectors.getAllUsers)
    //this.users$=this.dataService.user$
  /*  const user:User={
      name:'Sofi',
      id:'1',
      photoUrl:'',
      message:[{
        text:'Kitten',
        id:'1',
        time: new Date().getTime(),
      }]
    }*/
   // this.dataService.create(user).subscribe()
  }

}
