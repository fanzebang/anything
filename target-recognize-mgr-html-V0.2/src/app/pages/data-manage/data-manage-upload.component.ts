import {Component, Input, OnInit} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {NzMessageService, NzModalRef, NzModalService, UploadFile, UploadXHRArgs} from 'ng-zorro-antd';
import {Observable, Observer} from 'rxjs';
import {environment} from '../../../environments/environment';


@Component({
  templateUrl: './data-manage-upload.component.html',
})
export class DataManageUploadComponent implements OnInit {

  @Input()
  sampleUpId: number;

  constructor(private http: HttpClient, private nzMessage: NzMessageService, private nzModalRef: NzModalRef) {
  }


  loading = false;

  deviceImageUrl: string;
  showUploadList = {
    showPreviewIcon: true,
    showRemoveIcon: true,
    hidePreviewIconInNonImage: true
  };


  fileList = [];
  previewImage: string | undefined = '';
  previewVisible = false;

  imageJson = [];

  imageJsons = [];


  uploadDeviceImageTwo = ((item: UploadXHRArgs) => {
    const formData = new FormData();
    formData.append('files', item.file as any);
    let httpParams = new HttpParams().append('sampleTypeId', this.sampleUpId + '');
    return this.http.post(`${environment.API_URL}/v1/sample-oss-file`, formData, {
      params: httpParams,
      reportProgress: true,
      responseType: 'text',
    }).subscribe((resp: any) => {
      item.onSuccess(resp, item.file, resp);
    });
  });

  beforeImageUpload = (file: File) => {
    return new Observable((observer: Observer<boolean>) => {
      const isJPG = file.type === 'image/jpeg';
      const isPNG = file.type === 'image/png';
      const isValidFormat = isJPG || isPNG;
      if (!isValidFormat) {
        this.nzMessage.error('只能上传jpg或者png格式的图片');
        observer.complete();
        return;
      }
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.nzMessage.error('图片最多不能超过 2MB!');
        observer.complete();
        return;
      }
      // check height
      this.checkImageDimension(file).then(dimensionRes => {
        if (!dimensionRes) {
          this.nzMessage.error('图片尺寸至少 300x300 以上');
          observer.complete();
          return;
        }

        observer.next(isValidFormat && isLt2M && dimensionRes);
        observer.complete();
      });
    });
  }


  getBase64(img: File, callback: (img: string) => void): void {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result!.toString()));
    reader.readAsDataURL(img);
  }

  checkImageDimension(file: File): Promise<boolean> {
    return new Promise(resolve => {
      const img = new Image(); // create image
      img.src = window.URL.createObjectURL(file);
      img.onload = () => {
        const width = img.naturalWidth;
        const height = img.naturalHeight;
        window.URL.revokeObjectURL(img.src!);
        // resolve(width === height && width >= 300);
        resolve(true);
      };
    });
  }

  handleImageChange(info: { file: UploadFile }): void {
    switch (info.file.status) {
      case 'uploading':
        this.loading = true;
        break;
      case 'done':
        // Get this url from response in real world.
        this.getBase64(info.file!.originFileObj!, (img: string) => {
          this.loading = false;
          this.deviceImageUrl = img;
        });
        break;
      case 'error':
        this.nzMessage.error('Network error');
        this.loading = false;
        break;
    }
  }

  handlePreview = (file: UploadFile) => {
    this.previewImage = file.url || file.thumbUrl;
    this.previewVisible = true;
  };


  removeHandle = (file: UploadFile) => {
    this.removeArray(this.fileList, file.uid);
    this.removeArray(this.imageJson, file.uid);
    this.imageJsons = [];
    this.handleImages(this.imageJson);
  }


  removeArray(fileArray, uid) {
    fileArray.forEach(s => {
      if (s.uid === uid) {
        const indexOf = fileArray.indexOf(s);
        fileArray.splice(indexOf, 1);
      }
    });
  }

  handleImages(fileArray) {
    fileArray.forEach(s => {
      this.imageJsons.push(s.name);
    });
  }

  ngOnInit(): void {
  }

}
