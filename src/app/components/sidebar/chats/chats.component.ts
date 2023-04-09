import {ChangeDetectionStrategy,  Component, Input} from '@angular/core';
import {User} from "../../../model/users";

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatsComponent {
  @Input() users:User[]
  @Input() search:string|null


}
