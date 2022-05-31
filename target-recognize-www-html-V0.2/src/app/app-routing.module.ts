import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {DetectComponent} from './pages/detect/detect.component';
import {SsoComponent} from "./pages/sso/sso.component";
import {VideoComponent} from "./pages/video/video.component";
import {ModelComponent} from "./pages/show/model/model.component";
import {TargetComponent} from "./pages/show/target/target.component";
import {Target1Component} from "./pages/show/target1/target1.component";
import {Target2Component} from "./pages/show/target2/target2.component";
import { NewsComponent } from "./pages/news/news.component";
import { Home2Component } from './pages/home2/home2.component';
import { Detect2Component } from './pages/detect2/detect2.component';

const routes: Routes = [
  {
    path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'sign-up', loadChildren: () => import('./pages/sign-up/sign-up.module').then(m => m.SignUpModule)
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'detect', component: DetectComponent
  },
  {
    path: 'home2', component: Home2Component
  },
  {
    path: 'detect2', component: Detect2Component
  },
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'sso', component: SsoComponent
  },
  {
    path: 'video', component: VideoComponent
  },
  {
    path: 'target', component: TargetComponent
  },
  {
    path: 'target1', component: Target1Component
  },
  {
    path: 'target2', component: Target2Component
  },
  {
    path: 'model', component: ModelComponent
  },
  {
    path: 'news', component: NewsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
