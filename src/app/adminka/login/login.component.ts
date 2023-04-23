import {Component, OnInit} from '@angular/core';
import {FirebaseAuthService} from "../../services/firebaseAuth.service";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup

  constructor(private fb: FormBuilder,
              private fireAuth: FirebaseAuthService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  submit(event: any) {
    event.preventDefault()

    if (this.form.valid) {
      let {email, password} = this.form.value
      this.fireAuth.login(email, password).subscribe({
        next: () => this.router.navigate(['/']),
        error:(error)=>console.log(error)
      }
      )
    }

  }

  get email() {
    return this.form.controls['email']
  }

  get password() {
    return this.form.controls['password']
  }


}
