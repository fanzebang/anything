import {NgModule} from '@angular/core';
import {DataManageComponent} from './data-manage.component';
import {DataManageRoutingModule} from './data-manage-routing.module';
import {
  NzButtonModule,
  NzCheckboxModule, NzDividerModule,
  NzFormModule,
  NzInputModule,
  NzMessageModule, NzModalModule, NzProgressModule, NzRadioModule,
  NzSelectModule,
  NzTreeModule, NzUploadModule
  ,NzPaginationModule
} from 'ng-zorro-antd';
import {DataManageAddSampleComponent} from './data-manage-add-sample.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {DataManageDetailComponent} from './data-manage-detail.component';
import {DataManageUploadComponent} from './data-manage-upload.component';
import {NotLeafDataManageComponent} from "./not-leaf/not-leaf.data-manage.component";
import {LeafDataManageComponent} from "./leaf/leaf.data-manage.component";
import {DetailDataManageComponent} from "./detail/detail.data-manage.component";
import {EditDataManageComponent} from "./edit/edit.data-manage.component";
import {IconsProviderModule} from "../../icons-provider.module";
import {AppCommonModule} from "../../core/app-common.module";
import {RenameSampleTypeComponent} from "./rename-sample-type.component";
import { DataManageService } from './data-manage.service';
const APP_COMPONENTS = [DataManageComponent, DataManageAddSampleComponent, DataManageDetailComponent,
  DataManageUploadComponent, NotLeafDataManageComponent, LeafDataManageComponent, EditDataManageComponent,
  DetailDataManageComponent, RenameSampleTypeComponent];

const NG_MODULES = [CommonModule, FormsModule, ReactiveFormsModule, IconsProviderModule];
const NZ_MODULES = [NzFormModule, NzSelectModule, NzTreeModule, NzInputModule, NzMessageModule, NzModalModule,
  NzCheckboxModule, NzButtonModule, NzUploadModule, NzDividerModule, NzRadioModule, NzProgressModule,NzPaginationModule];

@NgModule({
  imports: [DataManageRoutingModule, ...NG_MODULES, ...NZ_MODULES, AppCommonModule],
  declarations: [...APP_COMPONENTS],
  providers:[DataManageService]
})
export class DataManageModule {

}
