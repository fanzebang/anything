import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {HttpClient, HttpEvent, HttpEventType, HttpParams} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {ApiPage, HttpResult, ProgressDto, SampleOssFile, SampleOssType} from '../../../core/http-entity';
import {NzMessageService, NzModalService} from 'ng-zorro-antd';
import {Select} from "@ngxs/store";
import {Observable} from "rxjs";
import {RenameSampleOssTypeState, RenameSampleOssTypeStateModel} from "../../../state/rename-sample-oss-type.state";
import { DataManageService } from '../data-manage.service';

declare var $:any;

@Component({
  templateUrl: './leaf.data-manage.component.html',
  styleUrls: ['./leaf.data-manage.component.less']
})
export class LeafDataManageComponent implements OnInit {
  sampleUpId: number;
  secondaryData: SampleOssFile[] = [];
  secondaryTotal = 0;
  isOperateButton = false;
  // sampleTitle: string;
  checkOptionsOne = [];
  indeterminate = true;
  allChecked = false;
  sampleOssType: SampleOssType;
  tile: boolean;
  pageIndex:any = 1;
  imgNum:any = 300;
  current = 1;
  @ViewChild('filesInput')
  filesInputElm: ElementRef;
  // files: ProgressDto[] = [];
  hideUploadingProgress = true;
  hideUploadingPanel = true;
  // uploadingFiles: File[] = [];
  uploadingFiles: Array<{ file: File, progress: number }> = [];
  @Select(RenameSampleOssTypeState) sampleOssTypeName$: Observable<RenameSampleOssTypeStateModel>;
  constructor(private route: ActivatedRoute, private http: HttpClient, private nzMessage: NzMessageService,
              private nzModal: NzModalService, private router: Router,public dataManageService:DataManageService) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (params: ParamMap) => {
        if (params.has('sampleUpId')){
          this.sampleUpId = +params.get('sampleUpId');
          this.loadSecondaryImage(this.sampleUpId);
          this.loadSampleType(this.sampleUpId);
        }
      },
    );
    this.sampleOssTypeName$.subscribe(renameModel => {
      if (renameModel.name) {
        this.sampleOssType.sampleTypeName = renameModel.name;
      }
    });
  }

  operateMgr(flag: boolean): void {
    this.isOperateButton = flag;
  }

  loadSecondaryImage(sampleUpId: number): void {
    const params = new HttpParams().append('typeId', sampleUpId + '').append('pageSize', 300 + '').append('pageIndex', this.pageIndex + '');
    this.http.get(`${environment.API_URL}/v1/sample-oss-file/getOssFilesByTypeId`, {params})
      .subscribe((result: HttpResult<ApiPage<SampleOssFile>>) => {
        this.secondaryData = result.data.records;
        this.secondaryTotal = result.data.total;
        this.imgNum = this.secondaryData.length
        let str = $(".search-form-title")[0].innerText
        let str1 = str.split(" —— ")[0]
        this.dataManageService.delect(this.secondaryTotal,str1)
        const box = this.secondaryData.map((s) => {
          return [{label: '', value: s.id, checked: false, typeId: s.sampleTypeId}];
        });
        this.checkOptionsOne = box;
        this.allSelect = false
      });
  }

  nzPageIndexChange(){
    this.loadSecondaryImage(this.sampleUpId)
  }

  loadSampleType(sampleUpId: number): void {
    // 根据类型查上级id的typename
    this.http.get(`${environment.API_URL}/v1/sample-oss-types/${sampleUpId}`)
      .subscribe((result: HttpResult<SampleOssType>) => {
        if (HttpResult.succeed(result.code)) {
          this.sampleOssType = result.data;
        }
      });
  }

  amplify(imageId: number): void {
    this.router.navigate(['../detail', {imageId}], {relativeTo: this.route});
  }

  /**
   * 全选
   */
  allSelect = false

  updateAllChecked(): void {
    if (this.allSelect){
      this.checkOptionsOne = this.checkOptionsOne.map(item => {
        return [{
          ...item[0],
          checked: false
        }];
      });
      this.allChecked = false;
      this.allSelect = false
    } else {
      this.checkOptionsOne = this.checkOptionsOne.map(item => {
        return [{
          ...item[0],
          checked: true
        }];
      });
      this.allChecked = true;
      this.allSelect = true
    }
  }

  /**
   * 单选
   */
  updateSingleChecked(): void {
    this.allSelect = false
    if (this.checkOptionsOne.every(item => !item.checked)) {
      this.allChecked = false;
      this.indeterminate = false;
    } else if (this.checkOptionsOne.every(item => item.checked)) {
      this.allChecked = true;
      this.indeterminate = false;
    } else {
      this.indeterminate = true;
    }
  }

  /**
   * 获取选中的图片
   */
  getChooseImage(): string {
      let ids:any = []
      $.each(this.checkOptionsOne,function(i,n){
        if(n[0].checked){
          ids.push(n[0].value)
        }
      })

     

    // let ids = '';
    // this.checkOptionsOne.map((s) => {
    //   console.log(this.allSelect)
    //   if (s[0].checked && !this.allSelect) {
   
    //     ids = ids.concat(s[0].value + ',');
    //   }
    //   if (s[0].checked && this.allSelect) {
   
    //     ids = ids.concat(s[0][0].value + ',');
    //   }
    // });
 
    return ids;
  }

  /**
   * 获取选中的上级id
   */
  getChooseTypeId(): string {
    let sampleTypeId = '';
    this.checkOptionsOne.map((s) => {
      if (s[0].checked && !this.allSelect) {
        sampleTypeId = s[0].typeId;
      }
      if (s[0].checked && this.allSelect) {
        sampleTypeId = s[0].typeId;
      }
    });
    return sampleTypeId;
  }

  lock(): void {
    const ids = this.getChooseImage();
    const sampleTypeId = this.getChooseTypeId();
    if (ids === '' && sampleTypeId === '') {
      this.nzMessage.error('请勾选需要操作的图片！');
      return;
    }
    const params = new HttpParams().append('ids', ids).append('sampleTypeId', sampleTypeId).append('enumStatus', 'LOCK');
    this.http.patch(`${environment.API_URL}/v1/sample-oss-file/patch_status`, null, {params})
      .subscribe((result: HttpResult<SampleOssFile[]>) => {
        console.log(result.code + '   code');
        if (HttpResult.succeed(result.code)) {
          this.nzMessage.success('锁定成功');
          this.loadSecondaryImage(+sampleTypeId);
        } else {
          this.nzMessage.error(result.message);
        }
      });
  }

  download():void{
    const ids = this.getChooseImage();
    const sampleTypeId = this.getChooseTypeId();
    if (ids === '' && sampleTypeId === '') {
      this.nzMessage.error('请勾选需要操作的图片！');
      return;
    }
    const params = new HttpParams().append('ids', ids).append('sampleTypeId', sampleTypeId).append('enumStatus', '3');
    this.http.post(`${environment.API_URL}/v1/sample-oss-file/downloadFile`, null, {params})
      .subscribe((result:any) => {
        if (HttpResult.succeed(result.code)) {
          this.nzMessage.success('下载成功');
          window.open(result.data)
          // this.loadSecondaryImage(+sampleTypeId);
        } else {
          this.nzMessage.error(result.message);
        }
      });

  }

  delete(): void {
    const ids = this.getChooseImage();
    const sampleTypeId = this.getChooseTypeId();
    if (ids === '' && sampleTypeId === '') {
      this.nzMessage.error('请勾选需要操作的图片！');
      return;
    }
    const params = new HttpParams().append('ids', ids).append('sampleTypeId', sampleTypeId).append('enumStatus', 'DELETE');
    this.http.patch(`${environment.API_URL}/v1/sample-oss-file/patch_status`, null, {params})
      .subscribe((result: HttpResult<SampleOssFile[]>) => {
        if (HttpResult.succeed(result.code)) {
    
          //
          this.nzMessage.success('删除成功');
          this.loadSecondaryImage(+sampleTypeId);
         
        } else {
          this.nzMessage.error(result.message);
        }
      });
  }

  // uploadImages(): void {
  //   const modal = this.nzModal.create({
  //     nzWidth: 1000,
  //     nzContent: DataManageUploadComponent,
  //     nzFooter: null,
  //     nzComponentParams: {
  //       sampleUpId: this.sampleUpId
  //     },
  //   });
  //   modal.afterClose.subscribe(() => {
  //     // 重新加载图片
  //     this.loadSecondaryImage(this.sampleUpId);
  //   });
  // }

  uploadImages(evt: any): void {
    this.hideUploadingProgress = false;
    this.hideUploadingPanel = false;
    const fileList = evt.target.files as FileList;
    if (fileList.length > 500) {
      // 限制一次最多上传20张
      this.nzModal.error({
        nzTitle: '单次最多上传500张'
      });
      this.clearFiles();
      return;
    }
    if (fileList.length > 0) {
      const fileCount = fileList.length;
      const uploadingFiles = [];
      for (let i = 0; i < fileCount; i++) {
        // 每个文件单个上传，这样才能对每个文件有进度条
        uploadingFiles.push({
          file: fileList[i],
          progress: 0
        });
      }
      this.uploadingFiles = uploadingFiles;

      this.uploadingFiles.forEach((file, index) => {
        const formData = new FormData();
        formData.append('files', file.file);
        this.uploadWithFiles(index, formData);
      });

      const completeInterval = setInterval(() => {
        let complete = true;
        for (let j = 0; j < this.uploadingFiles.length; j++) {
          if (this.uploadingFiles[j].progress < 100) {
            complete = false;
            break;
          }
        }
        if (complete) {
          clearInterval(completeInterval);

          this.clearFiles();

          this.loadSecondaryImage(this.sampleUpId);
          this.loadSampleType(this.sampleUpId);

        }
      }, 1000);

    }
  }


  clearFiles(): void {
    this.filesInputElm.nativeElement.value = '';
  }


  uploadWithFiles(index: number, formData: FormData): void {
    this.tile = true;
    const httpParams = new HttpParams().append('sampleTypeId', this.sampleUpId + '');
    this.http.post(`${environment.API_URL}/v1/sample-oss-file`, formData, {
      params: httpParams,
      reportProgress: true,
      responseType: 'text',
      observe: 'events',
    }).subscribe((event: HttpEvent<any>) => {
      if (event.type === HttpEventType.UploadProgress) {
        console.log('upload event is :', event);
        // 根据每个文件进度
        // const map = formData.getAll('files').map((f: File) => {
        //   // this.files = [];
        //   return {name: f.name, jd: event.loaded, id: f.lastModified};
        // });
        // this.files = map;
        // console.log(event.loaded / event.total + '未付费');
        this.uploadingFiles[index].progress = Math.ceil(event.loaded * 100 / event.total);
      } else if (event.type === HttpEventType.Response) {
        // console.log('上传完成', event.body);
        this.uploadingFiles[index].progress = 100;
      }
      // this.nzMessage.success('图片已经上传，进度条还没有完，手动刷新.....未完待续');

    });
  }


}


