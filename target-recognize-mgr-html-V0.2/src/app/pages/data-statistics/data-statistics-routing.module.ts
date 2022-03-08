import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {DataStatisticsComponent} from "./data-statistics.component";

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: '', component: DataStatisticsComponent
    }
  ])],
  exports: []
})
export class DataStatisticsRoutingModule {

}
