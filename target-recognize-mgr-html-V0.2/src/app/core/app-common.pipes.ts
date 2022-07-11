import {Pipe, PipeTransform} from '@angular/core';
import {environment} from '../../environments/environment';
import {Observable, Subject} from 'rxjs';
import {HttpResult, SampleOssFile} from './http-entity';
import {HttpClient} from '@angular/common/http';
declare var Tiff:any;
declare var $:any;
@Pipe({name: 'ossPath'})
export class OssPathPipe implements PipeTransform {
  transform(tiem: any): string {

    var bucketName = tiem.bucketName
    var itemKey;
    switch(bucketName){
      case "sample-resource":
        itemKey = "sampleResourcePath"
      break;
      case "target-recognize":
        itemKey = "targetRecognizePath"
      break;
      default:
        itemKey = "sampleResourcePath"
        break;
    }


    return localStorage.getItem(itemKey) + '/' + tiem.ossKey;
  
  }
}

@Pipe({name: 'taskProgress'})
export class taskProgress implements PipeTransform {
  transform(taskProgress: number): string {
    return taskProgress.toFixed(2);
  }
}

@Pipe({name: 'KB'})
export class KbPipe implements PipeTransform {
  transform(bytes: number): string {
    return (Math.ceil(bytes / 1024)).toFixed(0) + 'KB';
  }
}

function getImageFileFromUrl(url, imageName) {
  return new Promise((resolve, reject) => {
      var blob = null;
      var xhr = new XMLHttpRequest();
      xhr.open("GET", url);
      xhr.setRequestHeader('Accept', 'image/png');
      xhr.responseType = "blob";
      // 加载时处理
      xhr.onload = () => {
        // 获取返回结果
          blob = xhr.response;
          let imgFile = new File([blob], imageName, { type: 'image/png' });
          // 返回结果
          resolve(imgFile);
      };
      xhr.onerror = (e) => {
          reject(e)
      };
      // 发送
      xhr.send();
  });
}


@Pipe({name: 'LocalImgFile'})
export class LocalImgFilePipe implements PipeTransform {
  transform(file: File): Observable<any> {

    
    const subject = new Subject<any>();
    const fr = new FileReader();
    fr.onload = () => {
      subject.next(fr.result);
    };

    if(file.type.startsWith("image")){
      fr.readAsDataURL(file);
    }else{
   let imageFile = null
    getImageFileFromUrl("../assets/images/ysb.png","ysb")
      .then((response)=>{
        // 返回的是文件对象，使用变量接收即可
            imageFile  = response
            fr.readAsDataURL(imageFile);
        })
        .catch((e)=>{
        console.error(e)
        }
      )

      // let ysbFile = new File("../assets/images/photo.png", 'ysb.png', {type: 'image/png'});
      // 

    }
    
   

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


@Pipe({name: 'trainStatus'})
export class TrainStatusPipe implements PipeTransform {
  transform(file: SampleOssFile): string {
    if(file.trainNumber == 0 && file.markStatus == 3){
      return "是";
    } else{
      return "否";
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
  
    console.log(sampleFile)

    var itemKey;
    switch(sampleFile.bucketName){
     case "sample-resource":
       itemKey = "sampleResourcePath"
     break;
     case "target-recognize":
       itemKey = "targetRecognizePath"
     break;
     default:
       itemKey = "sampleResourcePath"
       break;
   }
   
  

    image.crossOrigin = 'anonymous';
    // image.src = localStorage.getItem('sampleResourcePath')+`/${sampleFile.ossKey}`;
    image.src= localStorage.getItem(itemKey)+`/${sampleFile.ossKey}`;
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
