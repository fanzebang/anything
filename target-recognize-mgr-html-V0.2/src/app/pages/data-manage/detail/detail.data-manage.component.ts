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
declare var AILabel:any;
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
  countImg:any;
  aiLabel:any;
  gfeatureLayer:any;
  markData:any;
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

  saveRect(){

    const reqBody: { [key: number]: any } = {};
    var that = this
    let featuresArr = []
    $.each(this.aiLabel.layers[1].features,function(i,rect){
    
        featuresArr.push(rect)
    })

    $.each(featuresArr,function(i,rect){
      rect.props.text = that.aiLabel.layers[2].texts[i].textInfo.text
      rect.id = that.sampleOssFile.sampleTypeId
      rect.props.name = that.sampleOssFile.sampleTypeId
      delete rect.layer
      rect.shape.x = rect.shape.x/that.mutliple
      rect.shape.y = rect.shape.y/that.mutliple
      rect.shape.width = rect.shape.width/that.mutliple
      rect.shape.height = rect.shape.height/that.mutliple
   
      // let xmin = parseInt(rect.shape.x) 
      // let ymin = parseInt(rect.shape.y) ;
      // let xmax = parseInt(rect.shape.x) + parseInt(rect.shape.width);
      // let ymax = parseInt(rect.shape.y) + parseInt(rect.shape.height);
      //   reqBody[rect.id] = {
      //     "xmin": xmin,
      //     "ymin": ymin,
      //     "xmax": xmax,
      //     "ymax": ymax
      //   }
    })

    let saveData = JSON.stringify(featuresArr)
    let sampleOssTypeId = featuresArr[0].id?featuresArr[0].id:featuresArr[0].props.textId
    this.http.patch(`${environment.API_URL}/v1/sample-oss-file/patch_mark_status`, saveData, {
      params: {
        fileId: this.imageId + '',
        sampleOssTypeId:sampleOssTypeId+'',
        labelMessageObject:saveData
      }
    }).subscribe((result: HttpResult<any>) => {
      if (HttpResult.succeed(result.code)) {
        this.nzMessage.success("保存成功");
        this.loadImages()
      }
    });

   


  }

public  mutliple;
  creatAILabel(Imgdata:SampleOssFile) :void{
     var that = this
      let coordinateData = JSON.parse(Imgdata.labelMessage);
      let ossKey:String = Imgdata.ossKey
      // let imgUrl = localStorage.getItem('sampleResourcePath') + '/' + ossKey

      var itemKey;
 
      switch(Imgdata.bucketName){
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
     
      var imgUrl:any = localStorage.getItem(itemKey)+`/${ossKey}`;

      let text = Imgdata.samplePath.split("/")[Imgdata.samplePath.split("/").length-2];
      let img = new Image()
      img.src = imgUrl
      if(img.complete) {
      var imgWidth = img.width*1 ;
      var imgHeight =  img.height*1 ;
      let zoomWidth = $("#detailLabel").css("width").replace(/[^\d.]/ig,"")
      let zoomHeight = $("#detailLabel").css("height").replace(/[^\d.]/ig,"")
       let labelZoom;
        if(imgWidth >= imgHeight ){
            this.mutliple = zoomWidth/imgWidth
            imgHeight = imgHeight* this.mutliple
            imgWidth = zoomWidth
            labelZoom = imgWidth*3
        }else{  
          this.mutliple = zoomHeight/imgHeight
          imgWidth = imgWidth* this.mutliple
          labelZoom = imgHeight*3
          imgHeight = zoomHeight
        }

      // let coordinateData1 = coordinateData.data

      $("#detailLabel").empty();
     
      this.aiLabel= new AILabel.Map(`detailLabel`,{
        center: {x: imgWidth/2, y: imgHeight/2}, // 为了让图片居中
        zoom: labelZoom,
        mode: 'RECT', // 绘制线段
        refreshDelayWhenZooming: false, // 缩放时是否允许刷新延时，性能更优
        zoomWhenDrawing: true,
        panWhenDrawing: true,
        featureCaptureWhenMove:true,
        zoomWheelRatio: 5 , // 控制滑轮缩放缩率[0, 10), 值越小，则缩放越快，反之越慢
        withHotKeys: true ,// 关闭快捷键
        zoomMax: imgWidth * 10,
        zoomMin: imgWidth / 10
        })

     

    var imageLayer = new AILabel.Layer.Image(
              'img', // id
              {
                src: imgUrl,
                width: imgWidth,
                height: imgHeight,
                crossOrigin: true, // 如果跨域图片，需要设置为true
                position: { // 图片左上角对应的坐标位置
                    x: 0,
                    y: 0
                },
              },
              {name: '第一个图片图层'},
              {zIndex: 1} 
         );
  that.aiLabel.addLayer(imageLayer)

  this.gfeatureLayer = new AILabel.Layer.Feature(`feature`, {name: '第一个矢量图层'}, {zIndex:19});

  this.aiLabel.addLayer(this.gfeatureLayer)

  var gFirstTextLayer = new AILabel.Layer.Text(
    'first-layer-text', // id
    {name: '第一个文本图层'}, // props
    {zIndex: 12, opacity: 1} // style
  );
  this.aiLabel.addLayer(gFirstTextLayer);
  

if (!coordinateData.length){coordinateData = [coordinateData] }

  for (let i = 0; i < coordinateData.length; i++) {
    var testData = coordinateData[i];
    var feature:any;
    var id = testData +`${+new Date()}`;
    if( null == testData.id) testData.id = id
    if( null == testData.props.text) testData.props.text = text
    if( null == testData.props.textId) testData.props.textId = id
    testData.style =  {fill: true,fillStyle: "#0f0",globalAlpha: 0,lineWidth: 1,opacity: 1,stroke: true,strokeStyle: "red"}
    if(testData.type == "RECT"){
        testData.shape.height = testData.shape.height *1* this.mutliple
        testData.shape.width = testData.shape.width *1* this.mutliple
        testData.shape.x = testData.shape.x *1* this.mutliple
        testData.shape.y = testData.shape.y *1* this.mutliple
        feature = new AILabel.Feature.Rect(
        testData.id, 
        testData.shape, 
        testData.props, 
        testData.style
      );
    
    }else{    // if(testData.type == "POLYGON")
      // testData.shape.height = testData.shape.height *1* this.mutliple
      // testData.shape.width = testData.shape.width *1* this.mutliple
      // testData.shape.x = testData.shape.x *1* this.mutliple
      // testData.shape.y = testData.shape.y *1* this.mutliple

console.log()   
for (let index = 0; index < testData.shape.points.length; index++) {
  const element = testData.shape.points[index];
  element.x =  element.x *1* this.mutliple
  element.y =  element.y *1* this.mutliple
}   
      feature = new AILabel.Feature.Polygon(
        testData.id, 
        testData.shape, 
        testData.props, 
        testData.style
      );
      
    }
  
    that.gfeatureLayer.addFeature(feature);

    var {x: ltx, y: lty} = feature.shape;
    var gFirstText = new AILabel.Text(
      testData.props.textId, // id
      {text:text, position: {x: ltx, y: lty}, offset: {x: 0, y: 0}}, // shape, 左上角
      {name: '第一个文本对象'}, // props
      {fillStyle: '#15a0ff', strokeStyle: '#f0f8ff00', background: true, globalAlpha: 1, fontColor: '#fff'} // style
    );

    that.aiLabel.layers[2].addText(gFirstText);


  
  }




  this.aiLabel.events.on('featureSelected',(feature: any) => {

    this.aiLabel.setActiveFeature(feature);
  })
  this.aiLabel.events.on('featureUnselected',() => {
    this.aiLabel.setActiveFeature(null); 
  })


this.aiLabel.events.on('featureUpdated',(feature: any, shape: any) => {
  feature.updateShape(shape);
  const markerId = feature.props.deleteMarkerId;
  const textId = feature.props.textId;
  // 更新text位置
  const targetText = gFirstTextLayer.getTextById(textId);
  targetText.updatePosition(feature.getPoints()[0]);
})

}else{
  setTimeout(()=>{
    this.creatAILabel(Imgdata)
  },200)

}


}



  loadImages(): void {
    this.http.get(`${environment.API_URL}/v1/sample-oss-file/${this.imageId}`)
      .subscribe((result: HttpResult<SampleOssFile[]>) => {
        if (HttpResult.succeed(result.code)) {
          this.sampleOssFiles = result.data;
          this.countImg = result.data.length
          // let str = $(".search-form-title")[0].innerText
          // let str1 = str.slice(0, str.indexOf(str.match('共[0-9]+个结果|共个结果')[0]))
       
          for (let i = 0; i < result.data.length; i++) {
            if (result.data[i].id === this.imageId) {
              // debugger;
              // console.log(images.browseNumber + 'images');
              this.sampleOssFile = result.data[i];
           
              this.dataManageService.delect(this.countImg,result.data[i])
              if (i === 0) {
                this.presentIdx = 1;
              } else {
                this.presentIdx = i + 1;
              }
              this.loadChars();


              this.creatAILabel(result.data[i])

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
           
              this.creatAILabel(result.data)
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
  
          this.creatAILabel(result.data)
   
              
             
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
        x2: 0,
        right: "5%",
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

  // lock(): void {
  //   const params = new HttpParams().append('ids', this.imageId + '').append('sampleTypeId', this.sampleOssFile.sampleTypeId + '').append('enumStatus', 'LOCK');
  //   this.http.patch(`${environment.API_URL}/v1/sample-oss-file/patch_status`, null, {params})
  //     .subscribe((result: HttpResult<SampleOssFile[]>) => {
  //       if (HttpResult.succeed(result.code)) {
  //         this.nzMessage.success('锁定成功');
  //         this.loadSecondaryImage(+this.imageId);
  //       } else {
  //         this.nzMessage.error(result.message);
  //       }
  //     });
  // }

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


  loadSecondaryImage(sampleUpId: number):void{
    const params = new HttpParams().append('typeId', sampleUpId + '');
    this.http.get(`${environment.API_URL}/v1/sample-oss-file/getOssFilesByTypeId`, {params})
      .subscribe((result: HttpResult<ApiPage<SampleOssFile>>) => {
        this.sampleOssFiles = result.data.records;
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
