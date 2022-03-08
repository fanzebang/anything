import {NgModule} from '@angular/core';
import {LoginRoutingModule} from './login-routing.module';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login.component';
import {NzAlertModule, NzButtonModule, NzCheckboxModule, NzFormModule, NzInputModule} from 'ng-zorro-antd';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {IconsProviderModule} from '../../icons-provider.module';

const APP_MODULES = [LoginRoutingModule];
const APP_COMPONENTS = [LoginComponent];
const NZ_MODULES = [IconsProviderModule, NzFormModule, NzButtonModule, NzInputModule, NzCheckboxModule, NzAlertModule];
const NG_MODULES = [CommonModule, FormsModule, ReactiveFormsModule];

@NgModule({
  declarations: [...APP_COMPONENTS],
  imports: [...APP_MODULES, ...NZ_MODULES, ...NG_MODULES]
})
export class LoginModule {

}
