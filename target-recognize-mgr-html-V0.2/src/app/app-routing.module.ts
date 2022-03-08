import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SsoComponent} from "./pages/sso/sso.component";

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/console/data-manage'},
  {
    path: 'console',
    loadChildren: () => import('./pages/console/console.module').then(m => m.ConsoleModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'sso', component: SsoComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
