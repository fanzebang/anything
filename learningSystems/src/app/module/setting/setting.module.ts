import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingRoutingModule } from './setting-routing.module';
import { SettingComponent } from './setting.component';
import { PublicComponent } from './public/public.component';
import { DeviceManagementComponent } from './content/device-management/device-management.component';
import { SystemSettingComponent } from './content/system-setting/system-setting.component';
import { ModuleLearningComponent } from './content/module-learning/module-learning.component';

import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzIconModule } from 'ng-zorro-antd/icon';



@NgModule({
  declarations: [
    SettingComponent,
    PublicComponent,
    DeviceManagementComponent,
    SystemSettingComponent,
    ModuleLearningComponent,
    
  ],
  imports: [
    CommonModule,
    SettingRoutingModule,
    NzCollapseModule,
    NzIconModule
  ]
})
export class SettingModule { }
