import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {finalize} from "rxjs";
import {FirebaseAuthService} from "../../services/firebaseAuth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{
  form: FormGroup

  constructor(private fb:FormBuilder,
              private storage:AngularFireStorage,
              private fireAuth:FirebaseAuthService
              ){}

  ngOnInit(): void {
    this.form=this.fb.group({
      name:['',Validators.required],
      email:['',[Validators.email,Validators.required]],
      password:['',[Validators.minLength(6),Validators.required]],
      avatar:[null]
    })
  }

  register(event: any) {
    event.preventDefault()
    console.log(this.form.value)
    const {email,password}=this.form.value
    this.fireAuth.createNewUser(email,password).subscribe()
  }

  uploadFile(event:any) {
    const file = event.target.files[0];
    const filePath = `avatar/${file.name}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);

    task.snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe(downloadURL => {
          this.fireAuth.setImgUrl(downloadURL)
          console.log('File available at: ', downloadURL);
          const image = document.getElementById('myImage') as HTMLImageElement;
          image.src = downloadURL; // установка URL-адреса файла в тег img
        });
      })
    ).subscribe();
  }
}
