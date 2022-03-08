import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {DataManageComponent} from './data-manage.component';
import {NotLeafDataManageComponent} from "./not-leaf/not-leaf.data-manage.component";
import {LeafDataManageComponent} from "./leaf/leaf.data-manage.component";
import {DetailDataManageComponent} from "./detail/detail.data-manage.component";
import {EditDataManageComponent} from "./edit/edit.data-manage.component";

@NgModule({
  imports: [RouterModule.forChild([{
    path: '', component: DataManageComponent,
    children: [
      {
        path: 'not-leaf', component: NotLeafDataManageComponent
      },
      {
        path: 'leaf', component: LeafDataManageComponent
      },
      {
        path: 'edit', component: EditDataManageComponent
      },
      {
        path: 'detail', component: DetailDataManageComponent,
        runGuardsAndResolvers: 'paramsChange',
      }
    ]
  }])],
  exports: [RouterModule]
})
export class DataManageRoutingModule {

}
