import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from "./pages/home/home.component";
import {DetectComponent} from "./pages/detect/detect.component";
import {PersonageComponent} from "./pages/detect/personage/personage.component";
import {WarshipComponent} from "./pages/detect/warship/warship.component";
import {JetComponent} from "./pages/detect/jet/jet.component";
import {LoginState} from "./state/login.state";
import {NgxsModule} from "@ngxs/store";
import {environment} from "../environments/environment";
import {NZ_I18N} from 'ng-zorro-antd/i18n';
import {zh_CN} from 'ng-zorro-antd/i18n';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthInterceptor} from "./core/auth.interceptor";
import {IconsProviderModule} from "./icons-provider.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {DragDropUploadDirective} from "./directives/drag-drop-upload.directive";
import {NzMessageModule, NzModalModule, NzSpinModule} from "ng-zorro-antd";
import {DetectState} from "./state/detect.state";
import {WebsocketService} from "./core/websocket.service";
import {OssPathPipe, SampleOssPathPipe, SceneTypePipe, SafePipe, AdminUrlPipe,VideoInfoPipe} from "./app.pipes";
import {RecognizeState} from "./state/recognize.state";
import {VideoState} from "./state/video.state";
import {FfdecWasmLoaderService} from "./ffdec-wasm-loader.service";
import {VideoService} from "./video.service";
import {VideoCanvasComponent} from "./pages/detect/video-canvas.component";
import {SsoComponent} from "./pages/sso/sso.component";
import {FormsModule,ReactiveFormsModule} from "@angular/forms";
import { VideoComponent } from './pages/video/video.component';
import { VideoListComponent } from './pages/video/video-list/video-list.component';
import { AccordionComponent } from './pages/video/accordion/accordion.component';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { KeyobjectComponent } from './pages/video/keyobject/keyobject.component';
import { LabelComponent } from './pages/video/label/label.component';
import { ChartComponent } from './pages/video/chart/chart.component';
import { ModelComponent } from './pages/show/model/model.component';
import { TargetComponent } from './pages/show/target/target.component';
import { Target2Component } from './pages/show/target2/target2.component';
import { ServiceService } from './pages/show/service.service';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { ObjComponent } from './pages/show/target2/obj/obj.component';
import { WorldComponent } from './pages/show/target2/world/world.component';
import { KeyComponent } from './pages/show/target2/key/key.component';
import { SenceComponent } from './pages/show/target2/sence/sence.component';
import { TimeComponent } from './pages/show/target2/time/time.component';
import { Target2LabelComponent } from './pages/show/target2/target2-label/target2-label.component';
import { Target1Component } from './pages/show/target1/target1.component';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NewsComponent } from './pages/news/news.component';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { Home2Component } from './pages/home2/home2.component';
import { Detect2Component } from './pages/detect2/detect2.component';

@NgModule({
  declarations: [
    AppComponent, HomeComponent, DetectComponent, PersonageComponent, WarshipComponent, JetComponent, SsoComponent,
    DragDropUploadDirective, OssPathPipe, SceneTypePipe, SafePipe, VideoCanvasComponent, SampleOssPathPipe, AdminUrlPipe,VideoInfoPipe, VideoComponent, VideoListComponent, AccordionComponent, KeyobjectComponent, LabelComponent, ChartComponent, ModelComponent, TargetComponent, Target2Component, ObjComponent, WorldComponent, KeyComponent, SenceComponent, TimeComponent, Target2LabelComponent, Target1Component, NewsComponent, Home2Component, Detect2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconsProviderModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxsModule.forRoot([LoginState, DetectState, RecognizeState, VideoState], {
      developmentMode: !environment.production
    }),
    NzSpinModule,NzSelectModule,NzTableModule,NzPaginationModule, NzRadioModule,NzMessageModule, NzModalModule, FormsModule,NzCollapseModule,NzTabsModule,NzProgressModule,ReactiveFormsModule,NzInputModule,NzGridModule,NzButtonModule
  ],
  providers: [
    {
      provide: NZ_I18N, useValue: zh_CN
    },
    {
      provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true
    },
    WebsocketService, FfdecWasmLoaderService, VideoService,
    OssPathPipe,ServiceService,VideoInfoPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
