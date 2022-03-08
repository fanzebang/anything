import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {IconsProviderModule} from './icons-provider.module';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {NzMenuModule} from 'ng-zorro-antd/menu';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NZ_I18N} from 'ng-zorro-antd/i18n';
import {zh_CN} from 'ng-zorro-antd/i18n';
import {registerLocaleData} from '@angular/common';
import zh from '@angular/common/locales/zh';
import {LoginState} from "./state/login.state";
import {NgxsModule} from "@ngxs/store";
import {environment} from "../environments/environment";
import {AuthInterceptor} from "./core/auth.interceptor";
import {SsoComponent} from "./pages/sso/sso.component";
import {RenameSampleOssTypeState} from "./state/rename-sample-oss-type.state";
import { FormsModule } from '@angular/forms';

registerLocaleData(zh);


@NgModule({
  declarations: [
    AppComponent, SsoComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxsModule.forRoot([LoginState, RenameSampleOssTypeState], {
      developmentMode: !environment.production
    }),
    FormsModule,
  ],
  providers: [
    {
      provide: NZ_I18N, useValue: zh_CN
    },
    {
      provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true
    }
  ],
  exports: [],
  // providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]


})
export class AppModule {
}
