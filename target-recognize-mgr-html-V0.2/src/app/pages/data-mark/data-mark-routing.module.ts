import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {DataMarkComponent} from './data-mark.component';

@NgModule({
  imports: [RouterModule.forChild([{
    path: '', component: DataMarkComponent
  }])],
  exports: [RouterModule]
})
export class DataMarkRoutingModule {

}
