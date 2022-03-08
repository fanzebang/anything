import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {HttpResult, LabelTask, SampleOssFile, StatInfo, User} from '../../core/http-entity';
import {format} from 'date-fns';

declare var $:any

@Component({
  templateUrl: './data-verify.component.html',
  styleUrls: ['./data-verify.component.less', './audit.less']
})
export class DataVerifyComponent implements OnInit {

  listOfData: any = [];

  users: User;

  expandSet = new Set<number>();

  currentSampleFile: SampleOssFile;

  markedRects = [];

  // labelTaskId: number;
  currentLabelTask: LabelTask;

  startTime: string;
  endTime: string;
  dateRange: [];
  searchTerms = {
    startTime: '',
    endTime: '',
    userId:''
  };
  selectClassIndex = 0;
  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.search(true)

  }


  sorLIstOfData(){
    let nuserNmae:any =  JSON.parse(localStorage.getItem("userInfo"))
    this.listOfData.sort(function(a:any,b:any){
      if(b.createdByName == nuserNmae.name ){  
        return 1;  
    }else if(a.createdByName == nuserNmae.name ){  
        return -1;  
    }else{  
        return 0;  
    } 
})
  }


  loadTask() {
    this.search(true)
  }

  changeClassIndex(key:any){
      $(".audit-picture-item").removeClass('audit-picture-item-active')
      this.selectClassIndex = key
  }

  onExpandChange(labelTask: LabelTask, checked: boolean): void {
 
    if (checked) {
      this.expandSet.add(labelTask.createdBy);
      this.http.get(`${environment.API_URL}/v1/label_task/sample_oss_file/${labelTask.createdBy}`).subscribe((result: HttpResult<SampleOssFile[]>) => {
        if (HttpResult.succeed(result.code)) {
            if( result.data.length != 0){
              for (let i = 0; i < this.listOfData.length; i++) {
                if (this.listOfData[i].createdBy == labelTask.createdBy){
                  this.listOfData[i].sampleFiles = result.data;
                  break;
                }
              }
            }else{
              for (let i = 0; i < this.listOfData.length; i++) {
                if (this.listOfData[i].createdBy == labelTask.createdBy) {
                  this.listOfData[i].hasFiles = false
                  this.listOfData[i].sampleFiles = null;
                  break;
                }
              }
            }
        }
      });
    } else {
      this.expandSet.delete(labelTask.createdBy);
    }
  }



  selectSampleFile(labelTask: LabelTask, sampleFile: SampleOssFile) {

    // this.selectClassIndex = 0
    this.currentLabelTask = labelTask;
    this.currentSampleFile = sampleFile;
    if (this.currentSampleFile.markStatus > 0) {
      const markedDatas = JSON.parse(this.currentSampleFile.labelMessage).data;
      this.markedRects = markedDatas.map(data => {
        return {
          typeId: data.type_id,
          rect: data.coordinate
        };
      });
  
    }
    
  }

  markErrorOrCorrect(enumMarkStatus: string) {
    if (this.currentLabelTask) {
      this.http.patch(`${environment.API_URL}/v1/sample-oss-file/${this.currentSampleFile.id}`, {}, {
        params: {
          labelTaskId: this.currentLabelTask.id + '',
          enumMarkStatus
        }
      }).subscribe((result: HttpResult<any>) => {
        if (HttpResult.succeed(result.code)) {
          // 切到下一张图片
       this.currentLabelTask.checkFile = 0;
          for (let i = 0; i < this.currentLabelTask.sampleFiles.length; i++) {
            if (this.currentSampleFile.id == this.currentLabelTask.sampleFiles[i].id) {
              this.currentSampleFile.markStatus = enumMarkStatus === 'ERROR_LABEL' ? 2 : 3;
              // 下一张图片
              if (i + 1 < this.currentLabelTask.sampleFiles.length) {
                this.currentSampleFile = this.currentLabelTask.sampleFiles[i + 1];
                break;
              }
              if(this.currentLabelTask.sampleFiles.length<=(i+1)){
                this.currentSampleFile = null 
              }
            }
          }
          this.search(false)
        }
      });
    }
  }

  search(isLoad:boolean): void {
    // const params = new HttpParams();
    if (this.startTime) {
      this.searchTerms.startTime = this.startTime;
    }
    if (this.endTime) {
      this.searchTerms.endTime = this.endTime;
    }
    let nuserNmae:any =  JSON.parse(localStorage.getItem("userInfo"))
    this.searchTerms.userId = nuserNmae.id
    this.http.get(`${environment.API_URL}/v1/label_task`, {params: this.searchTerms}).subscribe((result: any) => {
      if (HttpResult.succeed(result.code)) {
   
        if(isLoad){
          this.listOfData = result.data;
          this.expandSet =  new Set<number>();
          this.listOfData.map(x=>{
            x.countNum = x.unchedkFile+(x.errorFile||0)+(x.checkFile||0)
          })
        for (let i = 0; i < this.listOfData.length; i++) {
              this.listOfData[i].countNum  = 0;
              this.listOfData[i].hasFiles = true;
              this.listOfData[i].countNum = this.listOfData[i].unchedkFile+(this.listOfData[i].errorFile||0)+(this.listOfData[i].checkFile||0)
          }
            this.sorLIstOfData()
          }else{

            for (let i = 0; i < this.listOfData.length; i++) {
              result.data.forEach(y => {
                if( result.data.length == this.listOfData.length){
                  if(this.listOfData[i].createdBy == y.createdBy){
                    this.listOfData[i].unchedkFile = y.unchedkFile

                    if(this.searchTerms.userId == this.listOfData[i].createdBy ){
                      this.selectClassIndex++
                      this.selectSampleFile(this.listOfData[i],this.listOfData[i].sampleFiles[this.selectClassIndex])
                    }
                    
                  }
                 
                }else{
                  this.listOfData = result.data;
                }

              });
            
          }

          //
          
          }
        }
    });
  }

  onChange(result: Date): void {
    if (result[0]) {
      this.startTime = format(result[0], 'yyyy-MM-dd');
    } else {
      this.searchTerms.startTime = '';
      this.startTime = '';
    }
    if (result[1]) {
      this.endTime = format(result[1], 'yyyy-MM-dd');
    } else {
      this.searchTerms.endTime = '';
      this.endTime = '';
    }
  }

  getUsers(): void {
    this.http.get(`${environment.API_URL}/v1/users`).subscribe((result: HttpResult<any>) => {
      if (HttpResult.succeed(result.code)) {
        console.log('user  data', result.data);
        this.users = result.data;
      }
    });
  }
}
