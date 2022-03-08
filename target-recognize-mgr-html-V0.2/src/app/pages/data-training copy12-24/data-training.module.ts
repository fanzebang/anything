import {NgModule} from '@angular/core';
import {DataTrainingRoutingModule} from './data-training-routing.module';
import {DataTrainingComponent} from './data-training.component';
import {
  NzFormModule,
  NzInputModule, NzMessageModule,
  NzModalModule,
  NzProgressModule,
  NzSelectModule, NzTableModule,
  NzTreeSelectModule
} from 'ng-zorro-antd';
import {AddTrainingComponent} from './add-training.component';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DataTaskPatternPipes, DataTaskProgressPipes, DataTaskStatusPipes, DataTrainPipes} from './data-train.pipes';
import {ModelPrecisionComponent} from "./model-precision.component";
import {IconsProviderModule} from "../../icons-provider.module";
import {ModelCompareComponent} from "./model-compare.component";

const APP_COMPONENTS = [DataTrainingComponent, AddTrainingComponent, ModelPrecisionComponent, ModelCompareComponent];
const NZ_MODULES = [NzModalModule, NzFormModule, NzInputModule, NzMessageModule, NzSelectModule, NzTreeSelectModule, NzProgressModule,
  NzTableModule];
const NG_MODULES = [CommonModule, FormsModule, ReactiveFormsModule];
const APP_PIPES = [DataTrainPipes, DataTaskPatternPipes, DataTaskStatusPipes, DataTaskProgressPipes];

@NgModule({
  declarations: [...APP_COMPONENTS, ...APP_PIPES, DataTrainPipes],
  imports: [DataTrainingRoutingModule, ...NZ_MODULES, ...NG_MODULES, IconsProviderModule]
})
export class DataTrainingModule {

}
