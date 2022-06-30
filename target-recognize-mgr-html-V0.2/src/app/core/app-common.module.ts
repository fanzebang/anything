import {NgModule} from '@angular/core';
import {KbPipe, LocalImgFilePipe, MarkedRectImagePipe, OssPathPipe, SampleTypeIdPathPipe, MarkStatusPipe,TrainStatusPipe,taskProgress} from './app-common.pipes';

const COMMON_PIPES = [OssPathPipe, KbPipe, LocalImgFilePipe, MarkedRectImagePipe, SampleTypeIdPathPipe, MarkStatusPipe,TrainStatusPipe,taskProgress];

@NgModule({
  declarations: [...COMMON_PIPES],
  exports: [...COMMON_PIPES]
})
export class AppCommonModule {

}
