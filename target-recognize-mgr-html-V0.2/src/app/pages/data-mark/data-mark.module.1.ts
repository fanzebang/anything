import {NgModule} from '@angular/core';
import {NzMessageModule, NzModalModule, NzTreeModule} from 'ng-zorro-antd';
import {DataMarkRoutingModule} from './data-mark-routing.module';
import {DataMarkComponent} from './data-mark.component';
import {CommonModule} from "@angular/common";
import {AppCommonModule} from "../../core/app-common.module";
import {MarkSampleTreeComponent} from "./mark-sample-tree.component";

const APP_COMPONENTS = [DataMarkComponent, MarkSampleTreeComponent];
const NZ_MODULES = [NzTreeModule, NzModalModule, NzMessageModule];
const NG_MODULES = [CommonModule];

@NgModule({
  declarations: [...APP_COMPONENTS],
  imports: [DataMarkRoutingModule, ...NZ_MODULES, ...NG_MODULES, AppCommonModule]
})
export class DataMarkModule {

}
