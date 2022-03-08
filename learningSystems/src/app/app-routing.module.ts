import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CanActivateGuard} from './CanActivate'

const routes: Routes = [
  {path:'home',loadChildren:()=>import('./module/home/home.module').then(m=>m.HomeModule),canActivate:[CanActivateGuard]},
  {path:'login',loadChildren:()=>import('./module/login/login.module').then(m=>m.LoginModule)},
  {path:'setting',loadChildren:()=>import('./module/setting/setting.module').then(m=>m.SettingModule),canActivate:[CanActivateGuard]},
  {path:'details',loadChildren:()=>import('./module/details/details.module').then(m=>m.DetailsModule),canActivate:[CanActivateGuard]},
  {path:"**",redirectTo:"login"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  

 }

