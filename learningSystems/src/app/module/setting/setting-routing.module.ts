import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingComponent } from './setting.component';
import { DeviceManagementComponent } from './content/device-management/device-management.component';
import { ModuleLearningComponent } from './content/module-learning/module-learning.component';
import { SystemSettingComponent } from './content/system-setting/system-setting.component';

const routes: Routes = [
  {path:"",component:SettingComponent,
    children:[
      {path:"device",component:DeviceManagementComponent},
      {path:"module",component:ModuleLearningComponent},
      {path:"system",component:SystemSettingComponent},
      {path:"**",component:DeviceManagementComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingRoutingModule { }
