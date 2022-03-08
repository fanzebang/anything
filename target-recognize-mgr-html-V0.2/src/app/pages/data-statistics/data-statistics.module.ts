import {NgModule} from "@angular/core";
import {DataStatisticsComponent} from "./data-statistics.component";
import {DataStatisticsRoutingModule} from "./data-statistics-routing.module";
import {CommonModule} from "@angular/common";
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzIconModule } from 'ng-zorro-antd/icon';



const APP_COMPONENTS = [DataStatisticsComponent];
const NG_MODULES = [CommonModule,NzModalModule,NzIconModule];

@NgModule({
  declarations: [...APP_COMPONENTS],
  imports: [DataStatisticsRoutingModule, ...NG_MODULES]
})
export class DataStatisticsModule {

}
