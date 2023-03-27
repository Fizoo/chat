import {ChangeDetectionStrategy,  Component, Input} from '@angular/core';
import {Users} from "../../../model/users";

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatsComponent {
  @Input() users:Users[]
  @Input() search:string|null


}
