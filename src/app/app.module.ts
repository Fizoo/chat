import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {ChatComponent} from './components/chat/chat.component';
import {MainPageComponent} from './pages/main-page/main-page.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {SearchComponent} from './components/search/search.component';
import {ChatsComponent} from './components/chats/chats.component';
import {MessagesComponent} from './components/messages/messages.component';
import {MessageComponent} from './components/message/message.component';
import {InputComponent} from './components/input/input.component';
import {ChatInfoComponent} from './components/chat-info/chat-info.component';
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFireAuthModule} from "@angular/fire/compat/auth";
import {environment} from "../environment";

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    MainPageComponent,
    SidebarComponent,
    NavbarComponent,
    SearchComponent,
    ChatsComponent,
    MessagesComponent,
    MessageComponent,
    InputComponent,
    ChatInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
