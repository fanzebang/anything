import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {DataTrainingComponent} from "./data-training.component";

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: '', component: DataTrainingComponent
    }
  ])],
  exports: [RouterModule]
})
export class DataTrainingRoutingModule {

}
