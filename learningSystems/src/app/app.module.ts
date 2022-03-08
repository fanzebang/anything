import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { zh_CN } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// antd
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';

//swiper
import { SwiperModule } from 'swiper/angular';

//Particles
import { ParticlesModule } from 'angular-particle'; 

import {CanActivateGuard} from './CanActivate'


import {LocationStrategy,HashLocationStrategy} from "@angular/common"

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzGridModule,
    NzButtonModule,
    SwiperModule,
    NzRadioModule,
    NzPaginationModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: zh_CN},
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    CanActivateGuard

    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
