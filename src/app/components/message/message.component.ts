import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {FirebaseAuthService} from "../../services/firebaseAuth.service";
import {Observable} from "rxjs";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {Message} from "../../model/users";

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class MessageComponent implements OnInit{
  @Input() item:Message

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
