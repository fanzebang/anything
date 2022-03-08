import {NgModule} from '@angular/core';
import {KbPipe, LocalImgFilePipe, MarkedRectImagePipe, OssPathPipe, SampleTypeIdPathPipe, MarkStatusPipe} from './app-common.pipes';

const COMMON_PIPES = [OssPathPipe, KbPipe, LocalImgFilePipe, MarkedRectImagePipe, SampleTypeIdPathPipe, MarkStatusPipe];

@NgModule({
  declarations: [...COMMON_PIPES],
  exports: [...COMMON_PIPES]
})
export class AppCommonModule {

}
