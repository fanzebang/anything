import {Pipe, PipeTransform} from "@angular/core";
import {environment} from "../environments/environment";
import {DomSanitizer} from "@angular/platform-browser";
import axios from "axios";

@Pipe({name: 'ossPath'})
export class OssPathPipe implements PipeTransform {
  transform(ossKey: any): string {
    return `${localStorage.getItem('targetRecognizePath')}/` + ossKey;
  }
}


@Pipe({name: 'sampleOssPath'})
export class SampleOssPathPipe implements PipeTransform {
  transform(ossKey: string): string {
    return `${localStorage.getItem('sampleResourcePath')}/` + ossKey;
  }
}

@Pipe({name: 'sceneType'})
export class SceneTypePipe implements PipeTransform {
  transform(sceneType: string): string {
    switch (sceneType) {
      case '0':
        return '可见光';
      case '1':
        return '遥感';
      case '2':
        return 'SAR';
      case '3':
        return '红外';
    }
    return '未知';
  }
}


@Pipe({name: 'safe'})
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}


@Pipe({name: 'adminUrl'})
export class AdminUrlPipe implements PipeTransform {

  transform(url) {
    const bearer = localStorage.getItem("Bearer");

    const sampleResourcePath = localStorage.getItem("sampleResourcePath")
    const targetRecognizePath = localStorage.getItem("targetRecognizePath")
    return `${localStorage.getItem("mgrPath")}#${bearer}#${sampleResourcePath}#${targetRecognizePath}`;
  }
}

@Pipe({name:'videoInfo'})
export class VideoInfoPipe implements PipeTransform {

  transform(videoInfo:any) {


    return `${videoInfo.ext2}--${videoInfo.ext4} -- ${videoInfo.ext5}`

  }
}
