import {NgModule} from '@angular/core';
import {NzMessageModule, NzModalModule, NzTreeModule,NzInputModule,NzIconModule,NzDropDownModule,NzProgressModule } from 'ng-zorro-antd';
import {DataMarkRoutingModule} from './data-mark-routing.module';
import {DataMarkComponent} from './data-mark.component';
import {CommonModule} from "@angular/common";
import {AppCommonModule} from "../../core/app-common.module";
import {MarkSampleTreeComponent} from "./mark-sample-tree.component";
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { FormsModule } from '@angular/forms';
import { DataMarkService } from './data-mark.service';
const APP_COMPONENTS = [DataMarkComponent, MarkSampleTreeComponent];
const NZ_MODULES = [NzTreeModule, NzModalModule, NzMessageModule,NzSpinModule,NzButtonModule,NzInputModule,NzIconModule,NzDropDownModule,NzProgressModule];
const NG_MODULES = [CommonModule,FormsModule];

@NgModule({
  declarations: [...APP_COMPONENTS],
  imports: [DataMarkRoutingModule, ...NZ_MODULES, ...NG_MODULES, AppCommonModule],
  providers:[DataMarkService]
})
export class DataMarkModule {

}
