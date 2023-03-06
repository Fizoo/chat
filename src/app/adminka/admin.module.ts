import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from './login/login.component';
import {CommonModule} from "@angular/common";
import {AdminComponent} from './admin/admin.component';
import {RegisterComponent} from './register/register.component';
import {ReactiveFormsModule} from "@angular/forms";

const routes:Routes=[
  {path:'',component:AdminComponent,children:[
      {path:'',redirectTo:'/admin',pathMatch:'full'},
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent},
    ]},
]


@NgModule({
  declarations: [
    LoginComponent,
    AdminComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  exports:[
    RouterModule]
})
export class AdminModule { }
