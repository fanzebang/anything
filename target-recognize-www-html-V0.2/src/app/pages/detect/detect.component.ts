import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Observable, Subscription,Observer } from 'rxjs';
import {DetectState, DetectStateModel} from '../../state/detect.state';
import {Select, Store} from '@ngxs/store';
import {ApiPage, DetectHistory, HttpResult, Kms, VideoFrame} from '../../core/http-entity';
import {RecognizeState, RecognizeStateModel} from '../../state/recognize.state';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {NzMessageService} from 'ng-zorro-antd';
import {VideoState, VideoStateModel} from '../../state/video.state';
import {VideoAction} from '../../state/video.action';
import {WebsocketService} from "../../core/websocket.service";
import axios from 'axios';


declare var $:any;
declare var ImagePreview:any;
declare var WinBox:any;
declare var AILabel:any;
@Component({
  templateUrl: './detect.component.html',
  styleUrls: ['./detect.component.less']
})
export class DetectComponent implements OnInit, OnDestroy {

  @Select(DetectState)
  detect$: Observable<DetectStateModel>;
  detectSubscription: Subscription;


  @Select(RecognizeState)
  recognize$: Observable<RecognizeStateModel>;
  recognizeSubscription: Subscription;

  @Select(VideoState)
  video$: Observable<VideoStateModel>;
  videoSubscription: Subscription;

  video: File;

  detectHistory: any = [{id:""}];
  gMapArr:any;
  public countNum:any;
  pageIndex = 0; // 从0开始计数
  total = 0;
  gfeatureLayer:any;
  currentDetectResult: DetectHistory = new DetectHistory();

  selectedTarget: { ossKey: string, category: string, similarity: string };

  selectedTargetPolygon: {
    x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, x4: number, y4: number,
    category: string, categoryCn: string, similarity: number
  };

  // 20201012
  kmsUrl: string;
  kmsResult: Kms[] = [];
  kms: Kms[] = [];
  similarity: number = 0;
  baiKeUrl: string = "assets/jianchuan/junjian.html";
  baiKeUrl1:any = ""

  /*截取的目标*/
  @ViewChild('targetImg')
  targetImgElmRef: ElementRef;

  /*目标区域*/
  @ViewChild('clipTargetContainer')
  clipTargetContainerElmRef: ElementRef;

  targetsImageBase64 = [];

  @ViewChild('markedImage')
  markedImageElmRef: ElementRef;

  @ViewChild('videoFrameCanvas')
  videoFrameCanvasElmRef: ElementRef;
  isPic:any = false
  detectingInterval: any;
  detectingSceneType = 0;
  ishomeToDetect:any = false
  similarTargets = [];
  searchClass:any;
  samplePath:any;
  searchClassIsRight:any = true
  detectImagePreview:any
  isSlectTab:any = false;
  imgId:any
  misBox:any
  misForm:any={
    id:" ",
    errorCorrectionMsg:" "
  }

  constructor(private router: Router, private http: HttpClient, private nzMessage: NzMessageService,
              private route: ActivatedRoute, private store: Store,private ws:WebsocketService,) {
      this.route.paramMap.subscribe((paramMap) => {
        if (paramMap.has('borderShow')) {
          this.searchClass = paramMap.get('borderShow')
          if(this.searchClass == "5"){
            $(".content-right") .css("display","none")
          }
        }
        if (paramMap.has('detectId')) {
          // 图片的解析
          const detectId = paramMap.get('detectId');
          this.imgId = detectId
          this.loadDetectHistory(detectId);
          if(paramMap.has('homeToDetect')){
            this.ishomeToDetect = true
            setTimeout(()=>{
              setTimeout(()=>{
                this.drwReact(this.currentDetectResult.targetJson[0])
              },1000)
            },200)
          }
        }else if(paramMap.has('textSearch')){
          let imgtext = paramMap.get('textSearch')
          console.log(imgtext)
          axios.get(`${environment.API_URL}/v1/similar-targets-api?typeName=${imgtext}`, {
            headers: {
              'Authorization':'Bearer 123456',
              // 'Authorization':'Bearer '+localStorage.getItem('Bearer'),
              'TR-Role': 'TR-Api'
            }
          })
          .then((result) => {
             var that = this
              $(".content-right").css("display","none")
              $(".effect").css("display","none")
              $(".similar-title")[0].innerHTML =`查询到的图片 共${result.data.data.length}张`
              $(".content-bottom").css("overflow","auto")
              $(".content-bottom").css("min-height","100%")
              $(".similar").css("min-height","100%")
              $(".effect-content, .similar-content").css("flex","0 0 auto")
              $.each(result.data.data,function(i,n){
                that.similarTargets.push({
                  ossKey: JSON.parse(n).url.split("sample-resource/")[1]
                })
              })  
              setTimeout(()=>{
                ImagePreview.removed()
                ImagePreview.init({id:$("#similarImg img")})
              },300)  
        
          })
          .catch(e=>{
            console.log(e)
          })
         
          // 文字搜图
          // this.http.get(`${environment.API_URL}/v1/similar-targets-api?typeName=${imgtext}`, {
          // }).subscribe((result:any) => {
          //   if (HttpResult.succeed(result.code)) {
          //    var that = this
          //     $(".content-right").css("display","none")
          //     $(".effect").css("display","none")
          //     $(".similar-title")[0].innerHTML =`查询到的图片 共${result.data.length}张`
          //     $(".content-bottom").css("overflow","auto")
          //     $(".content-bottom").css("min-height","100%")
          //     $(".similar").css("min-height","100%")
          //     $(".effect-content, .similar-content").css("flex","0 0 auto")
          //     $.each(result.data,function(i,n){
          //       that.similarTargets.push({
          //         ossKey: n.split("sample-resource/")[1]
          //       })
          //     })  
          //     setTimeout(()=>{
          //       ImagePreview.removed()
          //       ImagePreview.init({id:$("#similarImg img")})
          //     },300)  
          //   }
          // });
        }
      });
   }








  changeSelect(){
    this.isSlectTab = false  }
  changeSelect1(){
    this.isSlectTab = true

  }

  ngOnInit(): void {

    // this.route.paramMap.subscribe((paramMap) => {
    
    //   if (paramMap.has('borderShow')) {
    //     this.searchClass = paramMap.get('borderShow')
    //     if(this.searchClass == "5"){

    //       $(".content-right") .css("display","none")
    //     }
    //   }
    //   if (paramMap.has('detectId')) {
    //     // 图片的解析
    //     const detectId = paramMap.get('detectId');
    //     this.imgId = detectId
    //     this.loadDetectHistory(detectId);
    //     if(paramMap.has('homeToDetect')){
    //       this.ishomeToDetect = true
    //       setTimeout(()=>{
    //         setTimeout(()=>{
    //           this.drwReact(this.currentDetectResult.targetJson[0])
    //         },1000)
      
    //       },200)
    //     }
    //   }else {
    //     // 视频的解析
    //   }

    // });
  
    const startTime = new Date().getTime();
    this.detectingInterval = setInterval(() => {
      // 重复循环显示loading的
      if (this.detectingSceneType >= 3) {
        this.detectingSceneType = 0;
      } else {
        this.detectingSceneType++;
      }
      this.currentDetectResult.sceneType = this.detectingSceneType + '';
    if (new Date().getTime() - startTime > 60000) {
        // 超过1分钟就不loading了
        clearInterval(this.detectingInterval)
      }
    }, 200);

    this.videoSubscription = this.video$.subscribe((videoStateModel) => {
      if (videoStateModel.video != null) {
        this.video = videoStateModel.video;
      }
    });

    this.recognizeSubscription = this.recognize$.subscribe((recognizeStateModel) => {
      if (recognizeStateModel == null || recognizeStateModel.recognizeJson == null) {
        return;
      }

      const recognizeData = JSON.parse(recognizeStateModel.recognizeJson) as DetectHistory;

      for (let i = 0, len = this.detectHistory.length; i < len; i++) {
        if (recognizeData.id === this.detectHistory[i].id) {
          this.detectHistory[i] = recognizeData;
          break;
        }
      }
      if (this.currentDetectResult && this.currentDetectResult.id === recognizeData.id) {
        this.currentDetectResult = recognizeData;
        this.showDetectResult();
      }
    });



  }

ngAfterViewInit(): void{
  var that = this

}

  ngOnDestroy(): void {
    $(".wb-close").click()
    this.store.dispatch(new VideoAction(null));
    // 改用了路由传参数，这个就不再需要了 this.detectSubscription.unsubscribe();
    this.recognizeSubscription.unsubscribe();
    this.videoSubscription.unsubscribe();
    ImagePreview.removed()
    this.isPic = true
    // localStorage.removeItem("detectResult")
   
  }




  loadDetectHistory(detectId: string): void {
    const params = new HttpParams()
      .append('pageIndex', '1')
      .append('pageSize', '500')
      .append('detectId', detectId);
    this.http.get(`${environment.API_URL}/v1/detect-history`, {
      params
    }).subscribe((result: HttpResult<ApiPage<DetectHistory>>) => {
      if (HttpResult.succeed(result.code)) {
       
        this.detectHistory = result.data.records;
        this.total = result.data.total;
        if (this.total > 0) {
          this.currentDetectResult = this.detectHistory[0];
          this.showDetectResult();
        }

        
      }
    });
  }

borderShowHidden(){
    var Item = localStorage.getItem("detectResult")
    var Item2 = JSON.parse(Item)[this.pageIndex]
    var detectResult = JSON.parse(Item2)
 
    if(this.searchClass == "2" || this.searchClass == "1" || this.searchClass == "3" ||  this.searchClass == "5"){

      if(detectResult.sampleTypeName != "wuqi" && this.searchClass == "2" ){
        this.searchClassIsRight = false
    
          $(".similar-content").empty()
          $(".content-item iframe").remove() 
          $(".effect").empty() 
     
      }else if(detectResult.sampleTypeName != "person" && this.searchClass == "1"){
        this.searchClassIsRight = false
    
          $(".similar-content").empty()
          $(".content-item iframe").remove() 
          $(".effect").empty() 
     
      }else if(detectResult.sceneType != "1"  && this.searchClass == "3"){
        this.searchClassIsRight = false
        setTimeout(()=>{
          $(".similar-content").empty()
          $(".content-item iframe").remove() 
          $(".effect").empty() 
        },100)
      }else if(this.searchClass == "5"){
        this.isPic = false
        $(".content-top").css("display","none")
        $(".content-bottom").css("min-height","100%")
        $(".effect-content").css("flex","none")
        $(".similar-content").css("flex","none")
        $(".content-bottom").css("min-height","100%")
        $(".effect").css("max-height","30%")
        $(".similar").css("overflow","auto")
      }
  
    }

    this.baiKeUrl = detectResult.baiKeUrl 
    setTimeout(()=>{
      ImagePreview.removed()
      ImagePreview.init({id:$("#similarImg img")})
    },300)
  }



  prevImage(): void {
    if (this.pageIndex > 0) {
      $(".bigImg canvas").remove()
      this.pageIndex--;
      this.currentDetectResult = this.detectHistory[this.pageIndex];
      this.showDetectResult();
    
    }
  }

  nextImage(): void {
    if (this.pageIndex < this.total - 1) {
      $(".bigImg canvas").remove()
      this.pageIndex++;
      this.currentDetectResult = this.detectHistory[this.pageIndex];
      this.showDetectResult();
    }
  }

  //范
  showDetectResult(): void {
    this.isPic = true
    clearInterval(this.detectingInterval);
    this.drawMarkedLines(this.currentDetectResult);
    // this.drwReact(this.detectHistory[0].targetJson[0])
   
    // this.selectedTarget = this.currentDetectResult.piecesOssKey[0];
    // this.selectedTargetPolygon = this.currentDetectResult.targetJson[0];

    this.drwReact1(this.currentDetectResult.targetJson)

    if (this.currentDetectResult.targetJson.length != 0 ) {
      // this.selectTargetPolygon(this.currentDetectResult.targetJson[0]);
      this.drawTargetsPolygon(this.currentDetectResult.targetJson);
      // this.baiKeUrl = this.currentDetectResult.baiKeUrl;
    }
  }

  selectTarget(selectedTarget: { ossKey: string, category: string, similarity: string }): void {
    this.selectedTarget = selectedTarget;
  }

  selectTargetPolygon(targetPolygon: {
    x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, x4: number, y4: number,
    category: string, categoryCn: string, similarity: number
  }): void {
   
    this.selectedTargetPolygon = targetPolygon;
    $(".similarImg").remove()
    if (this.selectedTargetPolygon) {
     //  console.log('百分比', targetPolygon.similarity);
     //  console.log('卧槽', this.currentDetectResult);
      this.similarity = Math.round(this.selectedTargetPolygon.similarity * 100.00);
      // this.baiKeUrl = this.currentDetectResult.baiKeUrl;
      // console.log('第一个' + this.baiKeUrl);
    }
   
    this.drwReact(targetPolygon)
    // 查询相似图片
    if (this.selectedTargetPolygon) {
      // 去后台查询相似图片
      ////  console.log('this.selectedTargetPolygon = ', this.selectedTargetPolygon);
      // if(!this.ishomeToDetect){
      //   this.drwReact(this.selectedTargetPolygon)
      // }
      this.http.get(`${environment.API_URL}/v1/sample-oss-file/getByTypeName?pageIndex=1&pageSize=10000`,{
        params: {
          typeName: this.selectedTargetPolygon.categoryCn,
        }
      }).subscribe((result: HttpResult<any>) => {
      
        if (HttpResult.succeed(result.code)) {
         
          if (result.data.records.length > 0) {
            if (result.data.records.length > 5 && this.searchClass != "5") {
              this.similarTargets = result.data.records.slice(0, 5);
            } else {
              this.similarTargets = result.data.records;
            }      
            if(this.searchClass == 5){
              this.countNum = `    共${result.data.total}张`
            }else{
              this.countNum = null
            }
         
            
          }

          setTimeout(()=>{
            ImagePreview.removed()
            ImagePreview.init({id:$("#similarImg img")})
          },300)
        }
      });
      // 查询kms
    
      if (!(this.selectedTargetPolygon.categoryCn === '未识别')) {
          this.kmsSearch(this.currentDetectResult.id + '', this.selectedTargetPolygon.categoryCn);
      }
    }
  }

  drwReact(selectedTargetPolygon){
    let imgUrl =`${localStorage.getItem('targetRecognizePath')}/` +  this.currentDetectResult.ossKey
    let img = new Image();
    img.src = imgUrl
      setTimeout(()=>{
      $(".bigImg #aiLable").remove()
      var bigImgDom:any = document.querySelector(".bigImg")
      var image:any = document.querySelector(".showImg")
      image.style.display = "none"
      var labelDiv:any = document.createElement("div");
      labelDiv.id = "aiLable";
      bigImgDom.appendChild(labelDiv)
      $("#aiLable").css({
        width:"100%",
        height:"100%",
        overflow: "hidden",
        position:"relative",
      })
      

      let zoomWidth = $("#aiLable").css("width").replace(/[^\d.]/ig,"")
      let zoomHeight = $("#aiLable").css("height").replace(/[^\d.]/ig,"")
      let imgWidth = img.width
       let imgHeight =  img.height
       let imgSrc  = image.src;
       let mutliple;
       let labelZoom;



        if(imgWidth >= imgHeight ){
            mutliple = zoomWidth/imgWidth
            imgHeight = imgHeight*mutliple
            imgWidth = zoomWidth
            labelZoom = imgWidth*1.3
        }else{  
          mutliple = zoomHeight/imgHeight
          imgWidth = imgWidth*mutliple
          labelZoom = imgHeight*1.3
          imgHeight = zoomHeight
        }

      this.gMapArr= new AILabel.Map(`aiLable`,{
        center: {x: imgWidth/2, y: imgHeight/2}, // 为了让图片居中
        zoom: labelZoom,
        mode: 'PAN', // 绘制线段
        refreshDelayWhenZooming: false, // 缩放时是否允许刷新延时，性能更优
        zoomWhenDrawing: true,
        panWhenDrawing: false,
        featureCaptureWhenMove:true,
        zoomWheelRatio: 5 , // 控制滑轮缩放缩率[0, 10), 值越小，则缩放越快，反之越慢
        withHotKeys: true ,// 关闭快捷键
        zoomMax: zoomWidth * 10,
        zoomMin: zoomWidth / 10
    }) 

    var imageLayer = new AILabel.Layer.Image(
      'img', // id
      {
        src: imgSrc,
        width: imgWidth,
        height: imgHeight,
        crossOrigin: false, // 如果跨域图片，需要设置为true
        position: { // 图片左上角对应的坐标位置
            x: 0,
            y: 0
        },
      },
      {name: '第一个图片图层'},
      {zIndex: 1} 
    );
    
    this.gMapArr.addLayer(imageLayer)
    this.gfeatureLayer = new AILabel.Layer.Feature(`feature`, {name: '第一个矢量图层'}, {zIndex:19});
    this.gMapArr.addLayer(this.gfeatureLayer)
    let x,y,height,width;
    x = selectedTargetPolygon.minX*mutliple
    y = selectedTargetPolygon.minY*mutliple
    height = (selectedTargetPolygon.maxY - selectedTargetPolygon.minY)*mutliple
    width = (selectedTargetPolygon.maxX - selectedTargetPolygon.minX)*mutliple
    // console.log(selectedTargetPolygon,x,y,height,width)
      var feature = new AILabel.Feature.Rect(this.imgId, 
      {height,width,x,y}, 
      {name:'123',textId: ""}, 
      {fill: true,
        fillStyle: "#0f0",
        globalAlpha: 0,
        lineWidth: 1,
        opacity: 1,
        stroke: true,
        strokeStyle: "red"}
    );
    this.gfeatureLayer.addFeature(feature)

      // var canvas:any = document.createElement("canvas");
      // canvas.width = image.width;
      // canvas.height = image.height;
      // var ctx=canvas.getContext("2d");
      //   ctx.drawImage(image, 0, 0);//0, 0参数画布上的坐标点，图片将会拷贝到这个地方
      //   var bigImgDom:any = document.querySelector(".bigImg")
      //   // 红色矩形
      //     ctx.beginPath();
      //     ctx.lineWidth="2";
      //     ctx.strokeStyle="red";
      //   if(selectedTargetPolygon){
      //     if(selectedTargetPolygon.xPoints){
      //       var maxX = selectedTargetPolygon.maxX+40 >= canvas.width+selectedTargetPolygon.xPoints[0] ? canvas.width-selectedTargetPolygon.xPoints[0]-40 :selectedTargetPolygon.maxX-selectedTargetPolygon.xPoints[0]
      //       ctx.rect(selectedTargetPolygon.xPoints[0],selectedTargetPolygon.yPoints[0],maxX,selectedTargetPolygon.maxY-selectedTargetPolygon.yPoints[0]);
      //     }else{
      //       var maxX = selectedTargetPolygon.maxX+40 >= canvas.width+selectedTargetPolygon.xpoints[0] ? canvas.width-selectedTargetPolygon.xpoints[0]-40 :selectedTargetPolygon.maxX-selectedTargetPolygon.xpoints[0]
      //       ctx.rect(selectedTargetPolygon.xpoints[0],selectedTargetPolygon.ypoints[0],maxX,selectedTargetPolygon.maxY-selectedTargetPolygon.ypoints[0]);
      //     }
      //   }
      //   ctx.stroke();
      //   bigImgDom.appendChild(canvas)

      },1000)
  }


  drwReact1(selectedTargetPolygonArr){
    let imgUrl =`${localStorage.getItem('targetRecognizePath')}/` +  this.currentDetectResult.ossKey
    let img = new Image();
    img.src = imgUrl
    this.kmsSearch(this.currentDetectResult.id + '', selectedTargetPolygonArr[0].categoryCn);
      setTimeout(()=>{
      // $(".bigImg #aiLable").remove()
      var bigImgDom:any = document.querySelector(".bigImg")
      var image:any = document.querySelector(".showImg")
      image.style.display = "none"
      var labelDiv:any = document.createElement("div");
      labelDiv.id = "aiLable";
      bigImgDom.appendChild(labelDiv)
      $("#aiLable").css({
        width:"100%",
        height:"100%",
        overflow: "hidden",
        position:"relative",
      })
      

      let zoomWidth = $("#aiLable").css("width").replace(/[^\d.]/ig,"")
      let zoomHeight = $("#aiLable").css("height").replace(/[^\d.]/ig,"")
      let imgWidth = img.width
       let imgHeight =  img.height
       let imgSrc  = image.src;
       let mutliple;
       let labelZoom;



        if(imgWidth >= imgHeight ){
            mutliple = zoomWidth/imgWidth
            imgHeight = imgHeight*mutliple
            imgWidth = zoomWidth
            labelZoom = imgWidth*1.3
        }else{  
          mutliple = zoomHeight/imgHeight
          imgWidth = imgWidth*mutliple
          labelZoom = imgHeight*1.3
          imgHeight = zoomHeight
        }

      this.gMapArr= new AILabel.Map(`aiLable`,{
        center: {x: imgWidth/2, y: imgHeight/2}, // 为了让图片居中
        zoom: labelZoom,
        mode: 'PAN', // 绘制线段
        refreshDelayWhenZooming: false, // 缩放时是否允许刷新延时，性能更优
        zoomWhenDrawing: true,
        panWhenDrawing: false,
        featureCaptureWhenMove:true,
        zoomWheelRatio: 5 , // 控制滑轮缩放缩率[0, 10), 值越小，则缩放越快，反之越慢
        withHotKeys: true ,// 关闭快捷键
        zoomMax: zoomWidth * 10,
        zoomMin: zoomWidth / 10
    }) 

    var imageLayer = new AILabel.Layer.Image(
      'img', // id
      {
        src: imgSrc,
        width: imgWidth,
        height: imgHeight,
        crossOrigin: false, // 如果跨域图片，需要设置为true
        position: { // 图片左上角对应的坐标位置
            x: 0,
            y: 0
        },
      },
      {name: '第一个图片图层'},
      {zIndex: 1} 
    );
    
    this.gMapArr.addLayer(imageLayer)
    this.gfeatureLayer = new AILabel.Layer.Feature(`feature`, {name: '第一个矢量图层'}, {zIndex:19});
    this.gMapArr.addLayer(this.gfeatureLayer)
    let x,y,height,width;

    for (let index = 0; index < selectedTargetPolygonArr.length; index++) {
      let selectedTargetPolygon = selectedTargetPolygonArr[index];
      x = selectedTargetPolygon.minX*mutliple
      y = selectedTargetPolygon.minY*mutliple
      height = (selectedTargetPolygon.maxY - selectedTargetPolygon.minY)*mutliple
      width = (selectedTargetPolygon.maxX - selectedTargetPolygon.minX)*mutliple
      // console.log(selectedTargetPolygon,x,y,height,width)
        var feature = new AILabel.Feature.Rect(this.imgId, 
        {height,width,x,y}, 
        {name:'123',textId: ""}, 
        {fill: true,
          fillStyle: "#0f0",
          globalAlpha: 0,
          lineWidth: 1,
          opacity: 1,
          stroke: true,
          strokeStyle: "red"}
      );
      this.gfeatureLayer.addFeature(feature)
      
    }


    
      },1000)
  }



mismatch(): void {
    $(".wb-close").click()
    this.misBox = new WinBox({
      title: "请填写纠错信息",
      x: "center",
      y: "center",
      width: "50%",
      height: "50%",
      mount: document.getElementById("content")
    });
  }

submit(){
  this.misForm.id = this.detectHistory[this.pageIndex].id
  this.misForm.errorCorrectionMsg = this.misForm.errorCorrectionMsg.trim()

  if(!this.misForm.errorCorrectionMsg){
    return   this.nzMessage.error("请填写正确的纠错信息");
    
  }

          this.http.post(`${environment.API_URL}/v1/detect-history/mismatched?id=${this.misForm.id}&errorCorrectionMsg=${this.misForm.errorCorrectionMsg}`,this.misForm).subscribe((result:any) => {
    
          if(result.code == 1){
    
                    $(".wb-close").click()
                  this.nzMessage.success('反馈成功');
    
          }else{
    
            this.nzMessage.error(result.message);
    
          }
    
        });



}

  drawMarkedLines(detectHistory: DetectHistory): void {
    if (detectHistory.status !== 3) {
      // 只有识别成功的状态才划线
      return;
    }
    const img = new Image();
    img.onload = () => {
      const testcanvasElm = document.createElement('canvas');
      testcanvasElm.width = detectHistory.originWidth;
      testcanvasElm.height = detectHistory.originHeight;
      /*新建一个画笔 并且开始画画*/
      const ctx = testcanvasElm.getContext('2d');
      ctx.drawImage(img, 0, 0);
      // ctx.fillStyle = 'transparent';
      ctx.strokeStyle = '#f00';

      detectHistory.targetJson.forEach(targetPolygon => {

        ctx.beginPath();
        ctx.moveTo(targetPolygon.x1, targetPolygon.y1);
        ctx.lineTo(targetPolygon.x2, targetPolygon.y2);
        ctx.lineTo(targetPolygon.x3, targetPolygon.y3);
        ctx.lineTo(targetPolygon.x4, targetPolygon.y4);

        ctx.closePath();
        ctx.stroke();
        // ctx.fill();

      });


      const ext = img.src.substring(img.src.lastIndexOf('.') + 1).toLowerCase();
      const dataURL = testcanvasElm.toDataURL('image/' + ext);
      // setTimeout(() => {
      //   // 这里就是处理的事件
      //   // this.markedImageElmRef.nativeElement.src = dataURL;
      //   // this.showDetectResult();
      // }, 1000);
    };

    img.crossOrigin = 'anonymous';

    img.src = `${localStorage.getItem('targetRecognizePath')}/${detectHistory.ossKey}`;

  }


drawTargetsPolygon(targetJson: Array<{
    x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, x4: number, y4: number,
    category: string, similarity: number
  }>): void {
    this.targetsImageBase64 = [];
    // 不能用这个循环还画切图，因为画切图里都逻辑是异步都，会导致数组不一致
    // for (let i = 0, len = targetJson.length; i < len; i++) {
    //   this.appendClipTargetImage(targetJson[i], `${environment.OSS_URL}/${this.currentDetectResult.ossKey}`);
    // }
    // 画第一个目标
    this.appendClipTargetImage(targetJson, `${localStorage.getItem("targetRecognizePath")}/${this.currentDetectResult.ossKey}`, 0);
  }

  appendClipTargetImage(targetJson: Array<{
                          x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, x4: number, y4: number,
                          category: string, similarity: number }>,
                        imgPath: string,
                        targetIdx: number): void {

      //  console.log("imgPath->"+imgPath)
    if (targetIdx >= targetJson.length) {
      // 所有目标都画完了
      return;
    }
    const targetPolygon = targetJson[targetIdx];
    /* 计算获得最大的X Y*/
    const minX = Math.min(targetPolygon.x1, targetPolygon.x2, targetPolygon.x3, targetPolygon.x4);
    const maxX = Math.max(targetPolygon.x1, targetPolygon.x2, targetPolygon.x3, targetPolygon.x4);
    const minY = Math.min(targetPolygon.y1, targetPolygon.y2, targetPolygon.y3, targetPolygon.y4);
    const maxY = Math.max(targetPolygon.y1, targetPolygon.y2, targetPolygon.y3, targetPolygon.y4);

    const clipWidth = maxX - minX;
    const clipHeight = maxY - minY;
    /*初始化图片*/
    const img = new Image();
    img.onload = () => {
      const testcanvasElm = document.createElement('canvas');
      testcanvasElm.width = clipWidth;
      testcanvasElm.height = clipHeight;
      /*新建一个画笔 并且开始画画*/
      const ctx = testcanvasElm.getContext('2d');
      ctx.drawImage(img, minX, minY, clipWidth, clipHeight, 0, 0, clipWidth, clipHeight);

      const ext = img.src.substring(img.src.lastIndexOf('.') + 1).toLowerCase();
      const dataURL = testcanvasElm.toDataURL('image/' + ext);


      // // 初始化这个区域
      // const clipTargetImageElm = document.createElement('img');
      // clipTargetImageElm.id = id + '';
      // clipTargetImageElm.src = testcanvasElm.toDataURL();
      // clipTargetImageElm.style.width = '200px';
      // clipTargetImageElm.style.height = '100px';
      // clipTargetImageElm.style.justifyContent = 'center';
      // clipTargetImageElm.style.objectFit = 'contain';
      // clipTargetImageElm.style.backgroundColor = '#000';
      // // 输出图片
      // this.clipTargetContainerElmRef.nativeElement.appendChild(clipTargetImageElm);

      this.targetsImageBase64.push(dataURL);
       //console.log("aaa",`${environment.OSS_URL}/${this.currentDetectResult.ossKey}`)
      // 画下一个目标   
      this.appendClipTargetImage(targetJson,`${localStorage.getItem("targetRecognizePath")}/${this.currentDetectResult.ossKey}`, targetIdx + 1);

    };
    img.crossOrigin = 'anonymous';

    img.src = imgPath;
  }


  onFrameRecognized(videoFrame: VideoFrame): void {
    clearInterval(this.detectingInterval);
    this.videoFrameCanvasElmRef.nativeElement.setAttribute('width', videoFrame.frameWidth);
    this.videoFrameCanvasElmRef.nativeElement.setAttribute('height', videoFrame.frameHeight);
    this.videoFrameCanvasElmRef.nativeElement.style.position = 'absolute';
    this.videoFrameCanvasElmRef.nativeElement.style.left = videoFrame.x + 'px';
    this.videoFrameCanvasElmRef.nativeElement.style.bottom = videoFrame.y+13+ 'px';

    const img = new Image();
    img.onload = () => {
      const ctx = this.videoFrameCanvasElmRef.nativeElement.getContext('2d');
      ctx.drawImage(img, 0, 0);
      ctx.strokeStyle = '#f00';
      videoFrame.detectHistory.targetJson.forEach(targetPolygon => {
        ctx.beginPath();
        ctx.moveTo(targetPolygon.x1, targetPolygon.y1);
        ctx.lineTo(targetPolygon.x2, targetPolygon.y2);
        ctx.lineTo(targetPolygon.x3, targetPolygon.y3);
        ctx.lineTo(targetPolygon.x4, targetPolygon.y4);

        ctx.closePath();
        ctx.stroke();

      });
    };
    img.src = videoFrame.dataURL;
    if (this.currentDetectResult == null || this.currentDetectResult.id !== videoFrame.detectHistory.id) {
      this.currentDetectResult = videoFrame.detectHistory;
      // this.selectedTargetPolygon = this.currentDetectResult.targetJson[0];
      this.selectTargetPolygon(this.currentDetectResult.targetJson[0]);
      this.drawTargetsPolygon(this.currentDetectResult.targetJson);
    }
  }

  kmsSearch(historyId: string, name: string): void {
    const params = new HttpParams().append('historyId', historyId).append('name', name);
    this.http.get(`${environment.API_URL}/v1/kms/detect-kms`, {params}).subscribe((result: any) => {
      this.borderShowHidden()
      this.kms = result.data;
      $("#ifmBox iframe").eq(1).attr("src","")
      $("#ifmBox iframe").eq(0).attr("src","")
      let baiKeUrl1= this.kms[0].url;
      let sfUrl = this.kms[0].sfUrl;
      // let sfUrl = localStorage.getItem('sfUrl') +'/'+ name
      // let baiKeUrl1 = "http://demo.kgtdata.com:15017/#/index?search_id=c1f66651ccfd457681ce5493d0ff1975&kg_id=kg_c1f66651ccfd457681ce5493d0ff1975&showSearch=1&instanceId=87613c8be489c04ec9834702ce554f59"
    setTimeout(()=>{
      $("#ifmBox iframe").eq(1).attr("src",baiKeUrl1)
      $("#ifmBox iframe").eq(0).attr("src",sfUrl)
    },1000)
    });
  }

}
