import {AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {HttpResult} from '../../core/http-entity';
import {NzMessageService, NzModalService} from "ng-zorro-antd";
import {MarkSampleTreeComponent} from "./mark-sample-tree.component";
import { fromEvent } from 'rxjs';
import {DataMarkService} from "./data-mark.service"
import axios from 'axios';

declare var AILabel:any;
declare var $:any
@Component({
  templateUrl: './data-mark.component.html',
  styleUrls: ['./data-mark.component.less', './annotation.less']
})
export class DataMarkComponent implements OnInit, AfterViewInit {

  allotFiles: Array<AllotFile> = [];
  currentAllotFile: AllotFile;
  currentIndex: number;

  @ViewChild('imgCanvasElement')
  imgCanvasElmRef: ElementRef;

  @ViewChild('drawCanvasElement')
  drawCanvasElmRef: ElementRef;


  uninterested:any = false;
  drawingRects: any = [];

  setImgSizeInfo:any ={
    isBigImg : false,
    src : "assets/images/icon06.png",
    title:'原比例查看图片'
  } 

  startX: number;
  startY: number;
  endX: number;
  endY: number;
 keyboardSubscription: any
 keyboardUp:any
  drawing = false;
  markMode = 'manual';
  gMapArr:any;
  markData:any = {
    dataArr:[],
    theFeatureId:"",
  };
  gfeatureLayer:any
  intervalLoadSampleFiles:any
  constructor(private http: HttpClient, private nzMessage: NzMessageService,private dataMarkService:DataMarkService,) {

  }

  ngOnInit(): void {
   
    this.listenKeyboard(); // 注册键盘监听
  }

  ngAfterViewInit(): void {
    this.loadSampleFiles();
   this.intervalLoadSampleFiles = setInterval(()=>{
      var thisTime:any = new Date()
      if((thisTime -this.listenTime)/1000 >= 1*60*10){
        this.loadSampleFiles();
      }
    },1000)

  }


 private listenKeyboard() {

    this.keyboardSubscription = fromEvent(window, 'keydown').subscribe((event: any) => {
     
      if(event.keyCode == 39){
        this.nextAllocFile()
      }else if(event.keyCode == 37){
        this.prevAllocFile()
      }else if(event.keyCode == 32){
        this.gMapArr.setMode("PAN")
      }else if(event.keyCode  == 46){
        if(this.gMapArr.getActiveFeature().props.name == "uninterested"){
          this.gfeatureLayer.removeFeatureById(this.gMapArr.getActiveFeature().id)
        }
      }
      if(event.ctrlKey){
        if(event.keyCode == 83){
          event.preventDefault();
          this.saveRect()
        }
      }
    });

    this.keyboardUp = fromEvent(window, 'keyup').subscribe((event: any) => {

      if(event.keyCode == 32){
        this.gMapArr.setMode("RECT")
      }
    })
    
  }

  removeKeyboard() {
    this.keyboardSubscription.unsubscribe()
    this.keyboardUp.unsubscribe()
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.removeKeyboard()
    clearInterval(this.intervalLoadSampleFiles)
  }



  loadSampleFiles() {

    this.http.get(`${environment.API_URL}/v1/sample-oss-file/allot`).subscribe((result: HttpResult<any>) => {
      if (HttpResult.succeed(result.code)) {
        this.allotFiles = result.data.map((file) => {
          if(localStorage.getItem('sampleResourcePath').split("/")[3] != file.bucketName){
            file.imgSrc = `${localStorage.getItem('sampleResourcePath').split("/")[0]}//${localStorage.getItem('sampleResourcePath').split("/")[2]}/${file.bucketName}/${file.ossKey}`
          }else{
            file.imgSrc = localStorage.getItem('sampleResourcePath')+'/'+file.ossKey
          }
          if(file.markStatus == 4){file.samplePath = file.errorCorrectionMsg; file.sampleTypeId = 501 ;}
          return {
            id: file.id,
            rects: [],
            file,
            scaleRatio: 1,
            relatedTextId:[]
          };
        });

// 对象型数组去重
const deWeight = (arr, ...arguements) => {
  function getBoolean (o, m) {
      let list = arguements.map(x => o[x] == m[x])
      return list.every(i => i)
  }
  let result = []
  // 总数组与新数组比较，遍历总数组时用新数组的some方法进行判断
  arr.map(o => !result.some(m => getBoolean(o, m)) ? result.push(o) : '')
  return result
}

// 使用时是这样
let arr2 = deWeight(this.allotFiles , 'id')
this.allotFiles = arr2


        if (this.allotFiles.length > 0) {
          this.currentAllotFile = this.allotFiles[0];
          this.currentIndex = 0;
     
          setTimeout(() => {
            this.drawFileInCanvas(this.currentAllotFile);
          }, 100);
            
       
          
        }
      }
    });
  }
listenTime:any;

loadSy () {
  var config = {
      tw: 300, //内容高度
      th: 150,  // 内容宽度
      c: 80 // 为了避免页面下方有多余的空白, 少显示一行。所以在计算每个水印高度的时候，需要加个差值，使水印分布的更均匀（一般为内容高度的一半即可）
  }
  var dom:any = document.getElementById("sy");
  var userInfo = JSON.parse(localStorage.getItem("userInfo"));
  var date = new Date().getFullYear() +'-'+ (new Date().getMonth()+1) +'-'+new Date().getDate();

  var data = {
      name: userInfo.name+'-'+userInfo.id+'-'+date,
      code: '',
      day:''
  }
  var width = dom.offsetWidth;
  dom.style.width = width + "px";
  var height = dom.offsetHeight;
  dom.style.height = height + "px";
  var wnum:any = width / config.tw || 1;
  wnum = parseInt(wnum)
  var hnum:any = height / config.th || 1;
  wnum = parseInt(hnum)
  var wc = (width - wnum * config.tw) / wnum - 1 || 0;
  var hc = (height - hnum * config.th + config.c) / hnum - 1 || 0;
  var num = wnum * (hnum - 1);
  var html = [];
  for (var i = 0; i < num; i++) {
      html.push('<div style="width: ' + (config.tw + wc) + 'px;height: ' + (config.th + hc) + 'px">', data.name, '<br/>', data.code, '<br/>', data.day, '</div>');
  }
  dom.innerHTML = html.join("");

  $(".table-sy div").css({
    'display': 'flex',
    'align-items': 'center',
    'justify-content': 'center',
    'transform': 'rotate(-40deg)',
    'float': 'left'
  })

    

}

drawFileInCanvas(allotFile: AllotFile) {
  $("#aiLabel").empty()
  this.setImgSizeInfo ={
    isBigImg : false,
    src : "assets/images/icon06.png",
    title:'原比例查看图片'
  } 
this.listenTime = new Date();
this.drawingRects = []
 var that = this
 var drawingStyle;

 
 var imgSrc:any = localStorage.getItem('sampleResourcePath')+`/${allotFile.file.ossKey}`;
 if(localStorage.getItem('sampleResourcePath').split("/")[3] != allotFile.file.bucketName){imgSrc=`${localStorage.getItem('sampleResourcePath').split("/")[0]}//${localStorage.getItem('sampleResourcePath').split("/")[2]}/${allotFile.file.bucketName}/${allotFile.file.ossKey}`}
 var img = new Image();
  img.src = imgSrc;
 const imgWidth = allotFile.file.width || img.width ;
 const imgHeight = allotFile.file.height || img.height ;
 this.gMapArr= new AILabel.Map(`aiLabel`,{
    center: {x: imgWidth/2, y: imgHeight/2}, // 为了让图片居中
    zoom: imgWidth*2,
    mode: 'RECT', // 绘制线段
    refreshDelayWhenZooming: false, // 缩放时是否允许刷新延时，性能更优
    zoomWhenDrawing: true,
    panWhenDrawing: false,
    featureCaptureWhenMove:true,
    zoomWheelRatio: 5 , // 控制滑轮缩放缩率[0, 10), 值越小，则缩放越快，反之越慢
    withHotKeys: true ,// 关闭快捷键
    zoomMax: imgWidth * 10,
    zoomMin: imgWidth / 10
})  
$(".canvas-container").append("<div id='sy' class='table-sy' style= 'width: 100%;height: 100%;position: absolute;pointer-events: none; /*主要是这个属性*/color:rgba(210, 214, 217,.2);z-index: 99999999999;opacity: .5;'></div>")
this.loadSy()
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
const gFirstTextLayer = new AILabel.Layer.Text(
  'first-layer-text', // id
  {name: '第一个文本图层'}, // props
  {zIndex: 12, opacity: 1} // style
);
this.gMapArr.addLayer(gFirstTextLayer);
this.gMapArr.events.on('drawDone', (type:any, data:any, data1:any) => {
  var feature:any;
  const relatedTextId = `label-text-id-${+new Date()}`;
  const relatedDeleteMarkerId = `label-marker-id-${+new Date()}`;
if (type === 'RECT') {
      // 添加feature
      if(!this.uninterested){
        feature = new AILabel.Feature.Rect(
          `${+new Date}`, // id
          data, // shape
          {name: '123',textId: relatedTextId}, // props
          {strokeStyle: '#00f', fillStyle: '#0f0', globalAlpha: .3, lineWidth: 1, fill: true, stroke: true} // style
      );
      }else{
        feature = new AILabel.Feature.Rect(
          `${+new Date}`, // id
          data, // shape
          {name: 'uninterested',textId: relatedTextId}, // props
          {strokeStyle: '#031129', fillStyle: '#031129', globalAlpha: 1, lineWidth: 1, fill: true, stroke: true} // style
      );
      }

  that.gfeatureLayer.addFeature(feature);

  var text 


    this.allotFiles.forEach(x=>{
      if(x.id == allotFile.id){
       var arr =  x.file.samplePath.split("/")
       if(arr.length != 1){
        var length = arr.length-2
        text = arr[length]
       }else{
        text = arr[0]
       }
       if(!this.uninterested){
        x.relatedTextId.push(relatedTextId)
       }
       
      }
  
     
    })

  


     // 添加feature标签名
     const {x: ltx, y: lty} = data;
     const gFirstText = new AILabel.Text(
         relatedTextId, // id
         {text: text, position: {x: ltx, y: lty}, offset: {x: 0, y: 0}}, // shape, 左上角
         {name: '第一个文本对象'}, // props
         {fillStyle: '#15a0ff', strokeStyle: '#f0f8ff00', background: true, globalAlpha: 1, fontColor: '#fff'} // style
     );
     if(!this.uninterested){
      gFirstTextLayer.addText(gFirstText);
     }
     
  }else if(type === 'POLYGON'){
    feature = new AILabel.Feature.Polygon(
      `${+new Date}`, // id
      {points: data}, // shape
      {name: '123'}, // props
      drawingStyle// style
   );
   that.gfeatureLayer.addFeature(feature);
  }
  that.markData.dataArr = []
  $.each(that.gMapArr.layers[1].features,function(i:any,x:any){
    that.markData.dataArr.push({
        style:x.style,
        type:x.type,
        shape:x.shape,
        id:x.id
    })
  })
  this.markData.theFeatureId = feature.id
  // this.initDrawingCanvas();
 
$.each(this.allotFiles,function(i,x){
  if(x.id == allotFile.id){
  
    var arr =  x.file.samplePath.split("/")
    var length = arr.length-2
    if(arr.length != 1){
     length = arr.length-2
     text = arr[length]
    }else{
     length =  0
     text = arr[length]
    }
    

    if(!that.uninterested){
      axios.post(`${environment.API_URL}/v1/sample-oss-file/relationQueryCatalogue?sampleTypeName=${text}`,{sampleTypeName:text},{
        headers: {
          'Authorization':'Bearer '+localStorage.getItem('Bearer'),
          'TR-Role': 'TR-User'
        }
      })
      .then((result:any)=>{
        if(result.data.data.length>0){
          result.data.data[0].relatedTextId = x.relatedTextId
          that.drawingRects.push({
            id:result.data.data[0].id,
            samplePath:result.data.data[0].samplePath,
            markData:result.data.data[0]
          })
        }
      })
    }

   

   }
})


});

that.gMapArr.events.on('featureSelected',(feature: any) => {

  that.gMapArr.setActiveFeature(feature);

})

that.gMapArr.events.on('featureUnselected',() => {

    that.gMapArr.setActiveFeature(null);
  
})

that.gMapArr.events.on('featureUpdated',(feature: any, shape: any) => {
  feature.updateShape(shape);
  
  const markerId = feature.props.deleteMarkerId;
  const textId = feature.props.textId;
  // 更新text位置
  const targetText = gFirstTextLayer.getTextById(textId);

  targetText.updatePosition(feature.getPoints()[0]);
  that.markData.dataArr = []
  $.each(that.gMapArr.layers[1].features,function(i:any,x:any){
    that.markData.dataArr.push({
      style:x.style,
      type:x.type,
      shape:x.shape,
      id:x.id
    })
  })
})


      // 判断是否人机协同标注
      if (this.markMode === 'auto') {
        this.autoMark();
      }
  }



  redraw(points?: { startX: number, startY: number, endX: number, endY: number }) {
    this.gfeatureLayer.removeFeatureById(this.markData.theFeatureId);
  }

  cancelRect(){
    if (this.drawingRects.length > 0) {
      this.drawingRects.splice(0, this.drawingRects.length);
      this.gfeatureLayer.removeAllFeatures();
       // 删除对应text
       this.gMapArr.layers[2].removeAllTexts();
    }
  }

 
  saveRect(){
    if (this.gMapArr.layers[1].features.length < 1) {
      this.nzMessage.error("请先标注");
      return;
    }
    this.currentAllotFile.rects = this.drawingRects;
    const reqBody: { [key: number]: any } = {};
    var that = this
    let featuresArr = []
    $.each(this.gMapArr.layers[1].features,function(i,rect){
      if(rect.props.name != "uninterested"){
        featuresArr.push(rect)
      }
    })
    $.each(featuresArr,function(i,rect){
      let xmin = parseInt(rect.shape.x) 
      let ymin = parseInt(rect.shape.y) ;
      let xmax = parseInt(rect.shape.x) + parseInt(rect.shape.width);
      let ymax = parseInt(rect.shape.x) + parseInt(rect.shape.height);
    
      if(that.drawingRects[i].id){
        reqBody[that.drawingRects[i].id] = {
          "xmin": xmin,
          "ymin": ymin,
          "xmax": xmax,
          "ymax": ymax
        }
      }else{
        reqBody[that.currentAllotFile.file.sampleTypeId] = {
          "xmin": xmin,
          "ymin": ymin,
          "xmax": xmax,
          "ymax": ymax
        }
      }
    })

    console.log(this.currentAllotFile,this.drawingRects)
 
    this.http.patch(`${environment.API_URL}/v1/sample-oss-file/patch_mark_status`, reqBody, {
      params: {
        fileId: this.currentAllotFile.id + '',
        sampleOssTypeId:this.drawingRects[0].id+'',
      }
    }).subscribe((result: HttpResult<any>) => {
      if (HttpResult.succeed(result.code)) {
        this.nzMessage.success("保存成功");
        // 在数组中删除当前这个
        // 判断是否还有下一张
        if (this.allotFiles.length > 1) {
          // 移除当前这个已经保存的
          // this.allotFiles = this.allotFiles.filter(file => file.id !== this.currentAllotFile.id);
          this.allotFiles.splice(this.currentIndex, 1);
          this.currentAllotFile = this.allotFiles[this.currentIndex];
          setTimeout(() => {
            this.drawFileInCanvas(this.currentAllotFile);
          }, 100);
          this.drawingRects = [];
        }else{
          $("#aiLabel").empty()
          this.loadSampleFiles();
        }

      }
    });
    this.listenTime = new Date()
    
  }

  setImgSize(){
    if(!this.setImgSizeInfo.isBigImg){
      let imgWidth = this.currentAllotFile.file.width;
      if(!imgWidth){
        let img = new Image()
        img.src = this.currentAllotFile.file.imgSrc
        imgWidth = img.width
      }
      this.gMapArr.zoomTo(imgWidth*2/(1/this.gMapArr.getScale()))
      this.setImgSizeInfo.src = "assets/images/icon07.png"
      this.setImgSizeInfo.title = "图片自适应大小"
      this.setImgSizeInfo.isBigImg = true
    }else{
      let imgWidth = this.currentAllotFile.file.width;
      if(!imgWidth){
        let img = new Image()
        img.src = this.currentAllotFile.file.imgSrc
        imgWidth = img.width
      }
      this.gMapArr.zoomTo(imgWidth*2/(1/this.gMapArr.getScale()))
      this.setImgSizeInfo.src = "assets/images/icon06.png"
      this.setImgSizeInfo.title = "原比例查看图片"
      this.setImgSizeInfo.isBigImg = false
    }
  }

removeImg(){
  this.http.post(`${environment.API_URL}/v1/label_task/deleteImg?id=${this.currentAllotFile.id}`, {
    }).subscribe((result: HttpResult<any>) => {
      if (HttpResult.succeed(result.code)) {
        this.allotFiles.splice(this.currentIndex, 1);
        this.nzMessage.success("删除成功");
        if (this.allotFiles.length > 1) {
          this.currentAllotFile = this.allotFiles[this.currentIndex];
          setTimeout(() => {
            this.drawFileInCanvas(this.currentAllotFile);
          }, 100);
            
          this.drawingRects = [];
        }else{
          this.loadSampleFiles();
        }
      }else{
        this.nzMessage.error("删除失败");
      } 
    
    });
 
  }
  nextAllocFile() {
    if (this.currentIndex < this.allotFiles.length - 1) {
      this.currentIndex = this.currentIndex + 1;
      this.currentAllotFile = this.allotFiles[this.currentIndex];
      setTimeout(() => {
        this.drawFileInCanvas(this.currentAllotFile);
      }, 100);
        
      this.redraw();
    }
  }
  selectAllocFile(index:any){
    this.currentIndex = index
    // this.currentIndex = this.currentIndex + 1;
    this.currentAllotFile = this.allotFiles[index];
    setTimeout(() => {
      this.drawFileInCanvas(this.currentAllotFile);
    }, 100);
      
    this.redraw();
  }
  prevAllocFile() {
    if (this.currentIndex > 0) {
      this.currentIndex = this.currentIndex - 1;
      this.currentAllotFile = this.allotFiles[this.currentIndex];
      setTimeout(() => {
        this.drawFileInCanvas(this.currentAllotFile);
      }, 100);
        
      this.redraw();
    }
  }
  delRect(idx: number) {
    this.drawingRects.splice(idx, 1);
    this.gfeatureLayer.removeFeatureById(this.gMapArr.layers[1].features[idx].id);
    // 删除对应text
    this.gMapArr.layers[2].removeTextById(this.gMapArr.layers[2].texts[idx].id);
  }
  editRect(idx: number,fileSample:any) {
    localStorage.setItem("markData",JSON.stringify(this.drawingRects[idx].markData))
    //oo
    this.gMapArr.getActiveFeature()
    this.dataMarkService.creatNzModal(this,idx,fileSample)
  }

  autoMark() {
    if (this.currentAllotFile) {
      this.http.post(`${environment.API_URL}/v1/mark-detect`, {
        "ossKey": this.currentAllotFile.file.ossKey
      }).subscribe((result: HttpResult<any>) => {
        if (HttpResult.succeed(result.code)) {
          const marks = result.data;
          const rects = []
          if(marks.length == 0){
            this.nzMessage.error("无法识别");
          }else{
            this.nzMessage.success("识别成功");
            for (let i = 0; i < marks.length; i++) {
              rects.push({
                startX: Math.floor(marks[i].markPolygon.minX * this.currentAllotFile.scaleRatio),
                startY: Math.floor(marks[i].markPolygon.minY * this.currentAllotFile.scaleRatio),
                endX: Math.floor(marks[i].markPolygon.maxX * this.currentAllotFile.scaleRatio),
                endY: Math.floor(marks[i].markPolygon.maxY * this.currentAllotFile.scaleRatio),
                saved: false,
                sampleId: marks[i].sampleOssType.id,
                samplePath: marks[i].sampleOssType.sampleTypeName
              })
              const relatedTextId = `label-text-id-${marks[i].sampleOssType.id}`;
              var feature = new AILabel.Feature.Rect(marks[i].sampleOssType.id, 
                {height:marks[i].markPolygon.maxY - marks[i].markPolygon.minY,width:marks[i].markPolygon.maxX - marks[i].markPolygon.minX,x:marks[i].markPolygon.minX ,y: marks[i].markPolygon.minY}, 
                {name:'123',textId: relatedTextId}, 
                {fill: true,
                  fillStyle: "#0f0",
                  globalAlpha: 0,
                  lineWidth: 1,
                  opacity: 1,
                  stroke: true,
                  strokeStyle: "red"}
              );
              this.gfeatureLayer.addFeature(feature)
              const {x: ltx, y: lty} = feature.shape;
       
              const gFirstText = new AILabel.Text(
                relatedTextId, // id
                {text:  marks[i].markPolygon.categoryCn, position: {x: ltx, y: lty}, offset: {x: 0, y: 0}}, // shape, 左上角
                {name: '第一个文本对象'}, // props
                {fillStyle: '#15a0ff', strokeStyle: '#f0f8ff00', background: true, globalAlpha: 1, fontColor: '#fff'} // style
            );
            this.gMapArr.layers[2].addText(gFirstText);
            this.currentAllotFile.relatedTextId.push(relatedTextId)
        
             this.drawingRects.push({
                      id:marks[i].sampleOssType.id,
                      markData:this.currentAllotFile,
                      samplePath:marks[i].sampleOssType.samplePath
                    })
            }
          }
        }
      });
    }
  }

  changeMarkMode(markMode: string) {
    this.markMode = markMode;
    if (this.markMode === 'auto') {
      // 人机协同标注
      this.autoMark();
    } else {
      // 手动标注
      this.drawingRects = [];
      this.redraw();
    }
  }

  changeUninterested(){
    if(this.uninterested){
      this.uninterested = false
    }else{
      this.uninterested = true
    }
  }

}


interface AllotFile {
  id: number;
  rects: DrawRect[];
  file: any;
  scaleRatio: number;
  relatedTextId:any[];
}

interface DrawRect {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  saved: boolean;
  sampleId: number;
  samplePath: string;
}
