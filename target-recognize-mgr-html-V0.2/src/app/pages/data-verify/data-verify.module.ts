import {NgModule} from '@angular/core';
import {NzDatePickerModule, NzProgressModule, NzSelectModule, NzTableModule,NzButtonModule} from 'ng-zorro-antd';
import {DataVerifyComponent} from './data-verify.component';
import {DataVerifyRoutingModule} from './data-verify-routing.module';
import {CommonModule} from "@angular/common";
import {AppCommonModule} from "../../core/app-common.module";
import {FormsModule} from '@angular/forms';


const APP_MODULES = [AppCommonModule];
const NZ_MODULES = [NzTableModule, NzDatePickerModule, NzSelectModule, NzProgressModule,NzButtonModule];
const NG_MODULES = [CommonModule];

@NgModule({
  declarations: [DataVerifyComponent],
  imports: [DataVerifyRoutingModule, ...NZ_MODULES, ...NG_MODULES, ...APP_MODULES, FormsModule]
})
export class DataVerifyModule {

}
