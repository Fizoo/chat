import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {FirebaseAuthService} from "../../services/firebaseAuth.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(private firebase: FirebaseAuthService,
              private router: Router
              ) {
  }

  logout() {
      this.firebase.logout().subscribe(()=>{
        this.router.navigate(['/admin/login'])
    })

  }
}
