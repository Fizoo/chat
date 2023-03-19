import { Component } from '@angular/core';
import {AlertService} from "../../services/alert.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent {
  message$:Observable<string>
  constructor(private alert:AlertService) {
    this.message$=this.alert.alert$
  }


}
