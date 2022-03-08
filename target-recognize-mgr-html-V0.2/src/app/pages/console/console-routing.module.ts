import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {ConsoleComponent} from "./console.component";

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: '', component: ConsoleComponent,
      children: [
        {
          path: 'data-manage',
          loadChildren: () => import('../data-manage/data-manage.module').then(m => m.DataManageModule)
        }, {
          path: 'data-mark',
          loadChildren: () => import('../data-mark/data-mark.module').then(m => m.DataMarkModule)
        }, {
          path: 'data-verify',
          loadChildren: () => import('../data-verify/data-verify.module').then(m => m.DataVerifyModule)
        },
        {
          path: 'data-training',
          loadChildren: () => import('../data-training/data-training.module').then(m => m.DataTrainingModule)
        },
        {
          path: 'data-statistics',
          loadChildren: () => import('../data-statistics/data-statistics.module').then(m => m.DataStatisticsModule)
        }
      ]
    }
  ])],
  exports: [RouterModule]
})
export class ConsoleRoutingModule {

}
