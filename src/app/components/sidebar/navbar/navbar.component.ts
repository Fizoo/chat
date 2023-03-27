import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FirebaseAuthService} from "../../../services/firebaseAuth.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent implements OnInit{

  imgUrl$:Observable<string>

  constructor(private firebase: FirebaseAuthService,
              private router: Router
              ) {}

  ngOnInit(): void {
    this.imgUrl$=this.firebase.getImgUrl()
  }

  logout() {
      this.firebase.logout().subscribe(()=>{
        this.router.navigate(['/admin/login'])
    })

  }


}
