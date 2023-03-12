import {Component, OnInit} from '@angular/core';
import {FirebaseAuthService} from "../../services/firebaseAuth.service";
import {Observable} from "rxjs";
import {AngularFireStorage} from "@angular/fire/compat/storage";

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit{
  imgUrl:Observable< string | null>

  constructor(private storage: AngularFireStorage,
              private auth:FirebaseAuthService) {
   // const ref = this.storage.ref('files/114906346.jpg');
   // this.imgUrl = ref.getDownloadURL();

  }

  ngOnInit(): void {
    this.imgUrl=this.auth.getImgUrl()
  }

}
