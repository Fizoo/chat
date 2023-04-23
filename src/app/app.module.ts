import {NgModule, Provider, isDevMode} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {ChatComponent} from './components/chat/chat.component';
import {MainPageComponent} from './pages/main-page/main-page.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFireAuthModule} from "@angular/fire/compat/auth";
import {environment} from "../environments/environment";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthInterceptor} from "./services/auth.interceptor";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { FilterPipe } from './pipes/filter.pipe';
import { SelectedUserDirective } from './directives/selected-user.directive';
import {NavbarComponent} from "./components/sidebar/navbar/navbar.component";
import {SearchComponent} from "./components/sidebar/search/search.component";
import {ChatsComponent} from "./components/sidebar/chats/chats.component";
import {MessagesComponent} from "./components/chat/messages/messages.component";
import {MessageComponent} from "./components/chat/messages/message/message.component";
import {InputComponent} from "./components/chat/input/input.component";
import {ChatInfoComponent} from "./components/chat/chat-info/chat-info.component";
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {metaReducers, reducers} from "./store";
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';





const INTERCEPTORS_PROVIDERS:Provider = {
  provide:HTTP_INTERCEPTORS,
  multi:true,
  useClass:AuthInterceptor
}

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
    ChatInfoComponent,
    FilterPipe,
    SelectedUserDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers, {
      metaReducers
    }),
    EffectsModule.forRoot([AppEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),


  ],
  providers: [INTERCEPTORS_PROVIDERS],
  bootstrap: [AppComponent]
})

export class AppModule {
}
