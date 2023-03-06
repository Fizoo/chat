import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {FirebaseService} from "../../services/firebase.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(private firebase: FirebaseService,
              private router: Router
              ) {
  }

  logout() {
      this.firebase.logout().then(()=>{
        this.router.navigate(['/admin/login'])
    })

  }
}
