import {Pipe, PipeTransform} from '@angular/core';
import {environment} from '../../environments/environment';
import {Observable, Subject} from 'rxjs';
import {HttpResult, SampleOssFile} from './http-entity';
import {HttpClient} from '@angular/common/http';

@Pipe({name: 'ossPath'})
export class OssPathPipe implements PipeTransform {
  transform(ossKey: string): string {
    return localStorage.getItem('sampleResourcePath') + '/' + ossKey;
  }
}

@Pipe({name: 'KB'})
export class KbPipe implements PipeTransform {
  transform(bytes: number): string {
    return (Math.ceil(bytes / 1024)).toFixed(0) + 'KB';
  }
}

@Pipe({name: 'LocalImgFile'})
export class LocalImgFilePipe implements PipeTransform {
  transform(file: File): Observable<any> {
    const subject = new Subject<any>();

    const fr = new FileReader();
    fr.onload = () => {
      subject.next(fr.result);
    };
    fr.readAsDataURL(file);

    return subject.asObservable();
  }
}

@Pipe({name: 'marks'})
export class MarkStatusPipe implements PipeTransform {
  transform(status: number): string {
    if (status === 0) {
      return '未标注';
    } else if (status === 1) {
      return '已标注';
    } else if (status === 2) {
      return '标注错误';
    } else if (status === 3) {
      return '正确的标注(审核通过)';
    } else if(status == 4){
      return '客户端图片检测纠错过来的数据';
    }
  }
}


@Pipe({name: 'MarkedRectImage'})
export class MarkedRectImagePipe implements PipeTransform {
  transform(rect: any, sampleFile: SampleOssFile): Observable<any> {

    const subject = new Subject<any>();

    const image = new Image();
    image.onload = () => {
      const clipWidth = rect.xmax - rect.xmin;
      const clipHeight = rect.ymax - rect.ymin;

      const tempCanvasElm = document.createElement('canvas');
      tempCanvasElm.width = clipWidth;
      tempCanvasElm.height = clipHeight;

      const ctx = tempCanvasElm.getContext('2d');
      //ctx.drawImage(image, rect.minX, rect.minY, clipWidth, clipHeight, 0, 0, clipWidth, clipHeight);
      ctx.drawImage(image, rect.xmin, rect.ymin, clipWidth, clipHeight, 0, 0, clipWidth, clipHeight);

      const dataURL = tempCanvasElm.toDataURL('image/jpeg');

      subject.next(dataURL);
    };
  
    image.crossOrigin = 'anonymous';
    image.src = localStorage.getItem('sampleResourcePath')+`/${sampleFile.ossKey}`;

    return subject.asObservable();
  }
}

@Pipe({name: 'SampleTypeIdPath'})
export class SampleTypeIdPathPipe implements PipeTransform {

  constructor(private http: HttpClient) {
  }

  transform(sampleId: string): Observable<string> {
    const subject = new Subject<any>();
    this.http.get(`${environment.API_URL}/v1/sample-oss-types/${sampleId}`).subscribe((result: HttpResult<any>) => {
      if (HttpResult.succeed(result.code)) {
        subject.next(result.data.samplePath);
      }
    });
    return subject.asObservable();
  }
}
