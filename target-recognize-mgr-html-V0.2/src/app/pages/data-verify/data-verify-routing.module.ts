import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {DataVerifyComponent} from './data-verify.component';



@NgModule({
  imports: [RouterModule.forChild([{
    path: '', component: DataVerifyComponent
  }])],
  exports: [RouterModule]
})
export class DataVerifyRoutingModule {

}
