import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {NzMessageService, NzModalService} from 'ng-zorro-antd';
import {ApiPage, HttpResult, SampleOssFile, SampleOssType, User} from '../../../core/http-entity';
import {environment} from '../../../../environments/environment';
import ECharts = echarts.ECharts;
// import echarts from 'node_modules/echarts/index.js';
import {Observable} from 'rxjs';
import axios from 'axios';
import { DataManageService } from '../data-manage.service';
import { de } from 'date-fns/locale';
declare var $:any
@Component({
  templateUrl: './detail.data-manage.component.html',
  styleUrls: ['./detail.data-manage.component.less']
})
export class DetailDataManageComponent implements OnInit, AfterViewInit {
  constructor(private route: ActivatedRoute, private http: HttpClient, private nzMessage: NzMessageService,
              private nzModal: NzModalService, private router: Router,private dataManageService:DataManageService) {
  }

  @ViewChild('lineEchart')
  lineEchartElm: ElementRef;
  lineEchart: ECharts;

  sampleOssFile: SampleOssFile;
  sampleOssFiles: SampleOssFile[];
  sampleOssType: SampleOssType;
  imageId: number;
  presentIdx: number;
  user: User;
  isFaceModel:any = false;
  isExist:any = false;
  countImg:any
  ngOnInit(): void {
    // 从路由中获取当前图片这一层级的
    this.route.paramMap.subscribe((params: ParamMap) => {
      if (params.has('imageId')) {
        this.imageId = +params.get('imageId');
        console.log('执行-->');
      }
    });

 
      this.updateBrowseNumber();
      this.loadImages();
      this.loadImageCount();

  }

  ngAfterViewInit(): void {
  }


  loadImages(): void {
    this.http.get(`${environment.API_URL}/v1/sample-oss-file/${this.imageId}`)
      .subscribe((result: HttpResult<SampleOssFile[]>) => {
        if (HttpResult.succeed(result.code)) {
          this.sampleOssFiles = result.data;
          this.countImg = result.data.length
          let str = $(".search-form-title")[0].innerText
          let str1 = str.slice(0, str.indexOf(str.match('共[0-9]+个结果|共个结果')[0]))
          if (str1.length > 0) {
            this.dataManageService.delect(this.countImg,str1)
          }
          for (let i = 0; i < result.data.length; i++) {
            if (result.data[i].id === this.imageId) {
              // debugger;
              // console.log(images.browseNumber + 'images');
              this.sampleOssFile = result.data[i];
              if (i === 0) {
                this.presentIdx = 1;
              } else {
                this.presentIdx = i + 1;
              }
              this.loadChars();
              //  this.queryFaceDetectModel()
              return;
            }
          }
          result.data.forEach((images) => {
            if (images.id === this.imageId) {
              this.sampleOssFile = images;
              this.loadChars();
              return;
            }
          });
         
        }
      });
  }

  queryFaceDetectModel(){

  
    axios.post(`${environment.API_URL}/v1/face_detect/queryFaceDetectModel?id=${this.imageId}`,{id:this.imageId},{
      headers: {
        'Authorization':'Bearer '+localStorage.getItem('Bearer'),
        'TR-Role': 'TR-User'
      }
    })
    .then((result:any)=>{
      let data = JSON.parse(result.data.data)
    
      if(data.isExist){
        this.isExist = true
      }else{
        this.isExist = false
      }

      if(data.faceStatus){
        this.isFaceModel = true
      }else{
        this.isFaceModel = false
      }

    })
 

  }

  setFaceModel(){

    axios.post(`${environment.API_URL}/v1/face_detect/saveFaceDetectModel?id=${this.imageId}`,{id:this.imageId},{
      headers: {
        'Authorization':'Bearer '+localStorage.getItem('Bearer'),
        'TR-Role': 'TR-User'
      }
    })
    .then((result:any)=>{
    
      if(result.data.code == 1){
        this.nzMessage.success(result.data.message);
        this.isFaceModel = true
      }else{
        this.nzMessage.error(result.data.message);
      }
    })

  }

  removeFaceModel(){
    axios.post(`${environment.API_URL}/v1/face_detect/deleteFaceDetectModel?id=${this.imageId}`,{id:this.imageId},{
      headers: {
        'Authorization':'Bearer '+localStorage.getItem('Bearer'),
        'TR-Role': 'TR-User'
      }
    })
    .then((result:any)=>{
      if(result.data.code == 1){
        this.isFaceModel = false
        this.nzMessage.success(result.data.message);
      }else{
        this.nzMessage.error(result.data.message);
      }
    })

  }


  nextImage(): void {
    for (let i = 0; i < this.sampleOssFiles.length; i++) {
      if (this.sampleOssFiles[i].id === this.imageId) {
        if (i < this.sampleOssFiles.length - 1) {
          this.sampleOssFile = this.sampleOssFiles[i + 1];
          this.imageId = this.sampleOssFiles[i + 1].id;
          // this.presentIdx = i;
          if (this.presentIdx > 0) {
            this.presentIdx = this.presentIdx + 1;
          }
          this.updateBrowseNumber();
          this.loadOne(this.imageId).subscribe((result: HttpResult<SampleOssFile>) => {
            if (HttpResult.succeed(result.code)) {
              console.log('this is data', result.data);
              this.sampleOssFile = result.data;
              this.loadChars();
            }
          });
          return;
        } else {
          this.nzMessage.error('已经是最后一张啦!');
        }
      }
    }
  }

  lastImage(): void {
    for (let i = 0; i < this.sampleOssFiles.length; i++) {
      if (this.sampleOssFiles[i].id === this.imageId) {
        if (i === 0) {
          this.nzMessage.error('已经是第一张啦!');
        } else {
          this.imageId = this.sampleOssFiles[i - 1].id;
          this.sampleOssFile = this.sampleOssFiles[i - 1];
          this.updateBrowseNumber();
          this.loadOne(this.imageId).subscribe((result: HttpResult<SampleOssFile>) => {
            if (HttpResult.succeed(result.code)) {
              this.sampleOssFile = result.data;
              this.loadChars();
            }
          });
          if (this.presentIdx > 0) {
            this.presentIdx = this.presentIdx - 1;
          }
          return;
        }
      }
    }
  }

  // onChartInit(ec): void {
  //   this.echartsInstance = ec;
  // }

  loadChars(): void {

    const lineChartOption:any = {
      xAxis: {
        // data: [122, 130, 170],
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        splitLine: {
          show: false
        },
        axisLabel: {
          show: false
        }
      },
      yAxis: {
        data: ['训练次数', '下载次数', '浏览次数'],
        type: 'category',
        axisLabel: {
          color: '#27bef0',
          // fontWeight: 600,
          fontSize: 16
        },
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        splitLine: {
          show: false
        },
        interval: 0
      },
      grid: {
        x: 100,
        y: 0,
        y2: 0,
        x2: 0
      },
      series: [
        {
          data: [this.sampleOssFile.trainNumber === null ? 0 : this.sampleOssFile.trainNumber,
            this.sampleOssFile.downloadNumber === null ? 0 : this.sampleOssFile.downloadNumber, this.sampleOssFile.browseNumber + 1],
          type: 'bar',
          barCategoryGap: '50%',
          itemStyle: {
            normal: {
              label: {
                show: true,
                position: 'right',
                fontSize: 14,
                color: '#FFFFFF'
              },
              color: (params) => {
                const colors = [{
                  start: '#7f8ae8',
                  end: '#2e31ea'
                }, {
                  start: '#01b698',
                  end: '#1BDDEB'
                }, {
                  start: '#2924B3',
                  end: '#504AD7'
                }];
                return new echarts.graphic.LinearGradient(
                  0, 0, 1, 0,
                  [
                    {offset: 0, color: colors[params.dataIndex].start},
                    {offset: 1, color: colors[params.dataIndex].end}
                  ]
                );
              }
            }
          }
        }
      ]
    };

    if (!this.lineEchart) {
      this.lineEchart = echarts.init(this.lineEchartElm.nativeElement);
    }

    this.lineEchart.setOption(lineChartOption);
  }

  lock(): void {
    const params = new HttpParams().append('ids', this.imageId + '').append('sampleTypeId', this.sampleOssFile.sampleTypeId + '').append('enumStatus', 'LOCK');
    this.http.patch(`${environment.API_URL}/v1/sample-oss-file/patch_status`, null, {params})
      .subscribe((result: HttpResult<SampleOssFile[]>) => {
        if (HttpResult.succeed(result.code)) {
          this.nzMessage.success('锁定成功');
          this.loadSecondaryImage(+this.imageId);
        } else {
          this.nzMessage.error(result.message);
        }
      });
  }

  delete(): void {
    const params = new HttpParams().append('ids', this.imageId + '').append('sampleTypeId', this.sampleOssFile.sampleTypeId + '').append('enumStatus', 'DELETE');
    this.http.patch(`${environment.API_URL}/v1/sample-oss-file/patch_status`, null, {params})
      .subscribe((result: HttpResult<SampleOssFile[]>) => {
        if (HttpResult.succeed(result.code)) {
          this.nzMessage.success('删除成功');
          this.loadImages()
      this.http.get(`${environment.API_URL}/v1/sample-oss-file/${this.imageId}`)
      .subscribe((result: HttpResult<SampleOssFile[]>) => {
        if (HttpResult.succeed(result.code)) {
          
          console.log(this.sampleOssType,result.data.length) 
        }
      });
        
          for (let i = 0; i < this.sampleOssFiles.length; i++) {
            if (this.sampleOssFiles[i].id === this.imageId) {
              if (i === 0 && this.sampleOssFiles.length === 1) {
                // this.route.
                this.router.navigate(['../leaf', {'sampleUpId': this.sampleOssFiles[0].sampleTypeId}], {relativeTo: this.route});
              } else if (i === this.sampleOssFiles.length - 1) {
                // this.presentIdx = i + 1;
                this.imageId = this.sampleOssFiles[i - 1].id;
                this.updateBrowseNumber();
                this.loadOne(this.imageId).subscribe((rs: HttpResult<SampleOssFile>) => {
                  if (HttpResult.succeed(rs.code)) {
                    this.sampleOssFile = rs.data;
                    this.loadChars();
                    this.presentIdx = this.presentIdx - 1;
                    this.sampleOssFiles.splice(i, 1);
                  }
                });
                return;
              } else if (i < this.sampleOssFiles.length - 1) {
                // this.imageId = this.sampleOssFiles[i + 1].id;
                this.imageId = this.sampleOssFiles[i + 1].id;
                this.updateBrowseNumber();
                this.loadOne(this.imageId).subscribe((rs: HttpResult<SampleOssFile>) => {
                  if (HttpResult.succeed(rs.code)) {
                    this.sampleOssFile = rs.data;
                    this.loadChars();
                    // this.presentIdx = this.presentIdx + 1;
                    this.sampleOssFiles.splice(i, 1);
                  }
                });
                return;
              }
            }
          }



        } else {
          this.nzMessage.error(result.message);
        }
      });
  }


  loadSecondaryImage(sampleUpId: number): void {

    const params = new HttpParams().append('typeId', sampleUpId + '');
    this.http.get(`${environment.API_URL}/v1/sample-oss-file/getOssFilesByTypeId`, {params})
      .subscribe((result: HttpResult<ApiPage<SampleOssFile>>) => {
        this.sampleOssFiles = result.data.records;
        // this.secondaryTotal = result.data.total;
        // const box = this.secondaryData.map((s) => {
        //   return [{label: '', value: s.id, checked: false, typeId: s.sampleTypeId}];
        // });
        // this.checkOptionsOne = box;
      });
  }

  updateBrowseNumber(): void {
    const params = new HttpParams().append('ids', this.imageId + '');
    this.http.patch(`${environment.API_URL}/v1/sample-oss-file/browse-number`, null, {params})
      .subscribe((result: HttpResult<any>) => {
        this.queryFaceDetectModel()
      });
  }

  loadImageCount(): void {
    const params = new HttpParams().append('imageId', this.imageId + '');
    this.http.get(`${environment.API_URL}/v1/sample-oss-types/getTypeByImageId`, {params})
      .subscribe((result: HttpResult<SampleOssType>) => {
        if (HttpResult.succeed(result.code)) {
          this.sampleOssType = result.data;
        }
      });
  }

  loadOne(imageId: number): Observable<HttpResult<any>> {
    return this.http.get<HttpResult<any>>(`${environment.API_URL}/v1/sample-oss-file/getOne/${imageId}`);
  }
}
