import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {MainPageComponent} from "./pages/main-page/main-page.component";
import {AuthGuard} from "./adminka/auth.guard";


const routes: Routes = [
  {path:'',component:MainPageComponent,canActivate:[AuthGuard]},
  {path:'admin',
  loadChildren:()=>import('./adminka/admin.module').then(m=>m.AdminModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    preloadingStrategy:PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
