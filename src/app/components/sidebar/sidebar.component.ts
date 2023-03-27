import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Users} from "../../model/users";
import {Observable} from "rxjs";
import {FireDatabaseService} from "../../services/fireDatabase.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent implements OnInit{

  users$:Observable< Users[] >
  search$:Observable< string>

  constructor(private dataService:FireDatabaseService) {
  }

  ngOnInit(): void {
    this.search$=this.dataService.search$
    this.users$=this.dataService.user$
    const user:Users={
      name:'Sofi',
      id:'1',
      photoUrl:'',
      message:[{
        text:'Kitten',
        id:'1'
      }]
    }
   // this.dataService.create(user).subscribe()
  }

}
