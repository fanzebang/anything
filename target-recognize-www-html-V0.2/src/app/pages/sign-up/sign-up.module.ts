import {NgModule} from '@angular/core';
import {SignUpRoutingModule} from './sign-up-routing.module';
import {CommonModule} from '@angular/common';
import {SignUpComponent} from './sign-up.component';
import {NzButtonModule, NzCheckboxModule, NzFormModule, NzInputModule, NzModalModule, NzSelectModule, NzToolTipModule} from 'ng-zorro-antd';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {IconsProviderModule} from '../../icons-provider.module';

const APP_MODULES = [SignUpRoutingModule];
const APP_COMPONENTS = [SignUpComponent];
const NZ_MODULES = [
  IconsProviderModule, NzFormModule, NzInputModule, NzButtonModule, NzCheckboxModule, NzSelectModule, NzToolTipModule,
  NzModalModule
];
const NG_MODULES = [CommonModule, FormsModule, ReactiveFormsModule];

@NgModule({
  declarations: [...APP_COMPONENTS],
  imports: [...APP_MODULES, ...NZ_MODULES, ...NG_MODULES]
})
export class SignUpModule {

}
