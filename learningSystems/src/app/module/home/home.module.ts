import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LeftComponent } from './components/left/left.component';
import { CenterComponent } from './components/center/center.component';
import { RightComponent } from './components/right/right.component';
import { HomeService } from './home.service';


//antd
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';

//swiper
import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [
    HomeComponent,
    LeftComponent,
    CenterComponent,
    RightComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NzGridModule,
    NzButtonModule,
    NzCarouselModule,
    SwiperModule
  ],
  providers:[HomeService]
})
export class HomeModule { }
