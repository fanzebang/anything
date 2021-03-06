import {AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {HttpResult} from '../../core/http-entity';
import {NzMessageService, NzModalService} from "ng-zorro-antd";
import {MarkSampleTreeComponent} from "./mark-sample-tree.component";
import { fromEvent } from 'rxjs';
import {DataMarkService} from "./data-mark.service"
import axios from 'axios';
import { Expression } from '@angular/compiler';

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
  
  markcountData:any = {
      stayMarkNum:25,
      MarkedNum:25,
      MarkProgress:50,
  }
  lableAloneStatus:boolean = false
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
    this.listenKeyboard2();
    // var interval
    // window.onfocus=function(){interval=window.setInterval("clipboardData.setData('text','')",100);}
    // window.onblur=function(){window.clearInterval(interval);}

  }

  ngAfterViewInit(): void {
    this.loadSampleFiles();
    this.reqMarkCountData();
   this.intervalLoadSampleFiles = setInterval(()=>{
      var thisTime:any = new Date()
      if((thisTime -this.listenTime)/1000 >= 1*60*10){
        this.loadSampleFiles();
      }
    },1000)
  
  }

  private reqMarkCountData(){
    axios.post(`${environment.API_URL}/v1/mark-detect/markStatistics`,{},{
      headers: {
        'Authorization':'Bearer '+localStorage.getItem('Bearer'),
        'TR-Role': 'TR-User'
      }
    })
    .then((result:any)=>{
      if(result.data.code == 1){
        let prseData =  JSON.parse(result.data.data)
        this.markcountData.stayMarkNum = prseData.NotMark
        this.markcountData.MarkedNum = prseData.isMark
        this.markcountData.MarkProgress =  ((this.markcountData.MarkedNum/(this.markcountData.MarkedNum+this.markcountData.stayMarkNum))*100).toFixed(1)
      
      }
      
    })

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
    
        try{
          if(this.gMapArr.getActiveFeature().props.name == "uninterested"){
            this.gfeatureLayer.removeFeatureById(this.gMapArr.getActiveFeature().id)
          }else if(this.gMapArr.getActiveFeature().props.name == "123"){
            var that = this
            let idx:number; 
            let textId = this.gMapArr.getActiveFeature().props.textId;
            $.each(that.drawingRects,function(i,n){
              if(that.drawingRects[i].relatedTextId == textId){
                idx = i
              }
            })
            this.delRect(idx)
          }
        }catch(e){
          console.log(e)
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

  gMapActive(index){
        this.singleTarget = true
        let feature = this.gMapArr.layers[1].features[index];
          // if(element.props.name != "uninterested"){
        this.gMapArr.setActiveFeature(feature);
          // }
          for (let index = 0; index < feature.layer.features.length; index++) {
            const element = feature.layer.features[index];
            if(element.props.name != "uninterested"){
            this.drawingRects[index].select = false
            if(element.id == feature.id){
              this.drawingRects[index].select = true
              }
            }
          }   
    }


  keyboardVerifySubscription2:any;
  singleTarget:boolean = false;
  private listenKeyboard2() {
    this.keyboardVerifySubscription2 = fromEvent(window, 'keydown').subscribe((event: any) => {
      if(event.keyCode == 192){
 
        if(!this.lableAloneStatus){
          if(!this.singleTarget && this.gMapArr.layers[1].features.length > 0 ){
            this.singleTarget = true;
            this.gMapActive(0)
            // this.listenKeyboard();
            // this.changeClassIndex(0)
          }else{
            let feature = this.gMapArr.getActiveFeature();
            // let featuresLength = 0;
            for (let index = 0; index < this.gMapArr.layers[1].features.length; index++) {
              const element = this.gMapArr.layers[1].features[index];
              try{
                if(element.id == feature.id){
                  this.gMapActive(index+1)
                }
              }catch(e){
                this.gMapActive(0)
              }
            }
         
          }
        }else{
          if(this.selectClassIndex1+1<this.gMapArr.layers[1].features.length){
            this.selectClassIndex1++
          }else{
            this.selectClassIndex1 = 0

          }
          this.labelShowAlone(this.selectClassIndex1)
          // if(this.selectClassIndex1-1>=0){
          //     this.labelShowAlone(this.selectClassIndex1-1)
          //   }else if(this.selectClassIndex1+1<this.gMapArr.layers[1].features.length){
          //     this.labelShowAlone(this.selectClassIndex1+1)
          //   }
            // return false
        }
      }
    });
  }


  removeKeyboard() {
    this.keyboardSubscription.unsubscribe()
    this.keyboardUp.unsubscribe()
    if(this.keyboarChangeFeature) this.keyboarChangeFeature.unsubscribe()
    if(this.keyboardVerifySubscription2) this.keyboardVerifySubscription2.unsubscribe()
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

aiLableStatus = false;

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

 var itemKey;

 switch(allotFile.file.bucketName){
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

 var imgSrc:any = localStorage.getItem(itemKey)+`/${allotFile.file.ossKey}`;
//  if(localStorage.getItem('sampleResourcePath').split("/")[3] != allotFile.file.bucketName){
//    imgSrc=
//    `${localStorage.getItem('sampleResourcePath').split("/")[0]}//${localStorage.getItem('sampleResourcePath').split("/")[2]}/${allotFile.file.bucketName}/${allotFile.file.ossKey}`}
 var img = new Image();
  img.src = imgSrc;

if (img.complete){
 const imgWidth =  img.width ;
 const imgHeight =  img.height ;
 this.gMapArr= new AILabel.Map(`aiLabel`,{
    center: {x: imgWidth/2, y: imgHeight/2}, // 为了让图片居中
    zoom: imgWidth*2,
    mode: 'RECT', // 绘制线段
    refreshDelayWhenZooming: true, // 缩放时是否允许刷新延时，性能更优
    zoomWhenDrawing: true,
    panWhenDrawing: true,
    featureCaptureWhenMove:true,
    zoomWheelRatio: 5 , // 控制滑轮缩放缩率[0, 10), 值越小，则缩放越快，反之越慢
    withHotKeys: true ,// 关闭快捷键
    zoomMax: imgWidth * 10,
    zoomMin: imgWidth / 10
})  
$(".canvas-container").append("<div id='sy' class='table-sy' style= 'width: 100%;height: 100%;position: absolute;pointer-events: none; /*主要是这个属性*/color:rgba(210, 214, 217,.2);z-index: 99999999999;opacity: .5;user-select:none'></div>")
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
  
  that.gMapArr.addLayer(imageLayer)
  that.gfeatureLayer = new AILabel.Layer.Feature(`feature`, {name: '第一个矢量图层'}, {zIndex:19});
  that.gMapArr.addLayer(that.gfeatureLayer)
  const gFirstTextLayer = new AILabel.Layer.Text(
    'first-layer-text', // id
    {name: '第一个文本图层'}, // props
    {zIndex: 12, opacity: 1} // style
  );
  that.gMapArr.addLayer(gFirstTextLayer);
  that.gMapArr.events.on('drawDone', (type:any, data:any, data1:any) => {
    var feature:any;
  
    const relatedTextId = `label-text-id-${+new Date()}`;
    const relatedDeleteMarkerId = `label-marker-id-${+new Date()}`;
  if (type === 'RECT') {
        // 添加feature
        if(!that.uninterested){
          feature = new AILabel.Feature.Rect(
            `${+new Date}`, // id
            data, // shape
            {name: '',textId: relatedTextId}, // props
            {strokeStyle: '#00f', fillStyle: '#0f0', globalAlpha: 0.2, lineWidth: 1, fill: true, stroke: true} // style
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
  
  
    that.allotFiles.forEach(x=>{
        if(x.id == allotFile.id){
         var arr =  x.file.samplePath.split("/")
         if(arr.length != 1){
          var length = arr.length-2
          text = arr[length]
         }else{
          text = arr[0]
         }
         if(!that.uninterested){
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
       if(!that.uninterested){
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
    that.markData.theFeatureId = feature.id
    // this.initDrawingCanvas();
   
  $.each(that.allotFiles,function(i,x){
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


      console.log(that.gMapArr)
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
            feature.props.name =result.data.data[0].id 
            that.drawingRects.push({
              id:result.data.data[0].id,
              samplePath:result.data.data[0].samplePath,
              markData:result.data.data[0],
              relatedTextId
            })
          }else{
            that.drawingRects.push({
              id:x.file.id,
              samplePath:x.file.samplePath,
              markData:x,
              relatedTextId
            })
          }
        })
      }
     }
  })
  
  
  });
  
  that.gMapArr.events.on('featureSelected',(feature: any) => {
    let index;
    for (let i = 0; i < feature.layer.features.length; i++) {
      const element = feature.layer.features[i];
      if(element.props.name != "uninterested"){
      this.drawingRects[i].select = false
      if(element.id == feature.id){
        index = i
      }
      }
    }
    that.gMapActive(index)
    // that.gMapArr.setActiveFeature(feature);
    // console.log(feature.layer.features)

  })
  
  that.gMapArr.events.on('featureUnselected',() => {
      // that.gMapArr.setActiveFeature(null);
      that.gMapUnactive()
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
       if (that.markMode === 'auto') {
        that.autoMark();
      }


}else{
  setTimeout(()=>{
  this.drawFileInCanvas(allotFile)
},400)
}

 
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
    let featuresArr = [];
    var dataRight = true
    $.each(this.gMapArr.layers[1].features,function(i,rect){
      if(rect.props.name != "uninterested"){
        delete rect.layer
        if(!rect.style.stroke){
          rect.style.globalAlpha =0.2 
          rect.style.stroke = true }
       
        featuresArr.push(rect) 
      }
    })

    $.each(featuresArr,function(i,rect){
      if(!rect.props.name) dataRight = false
      rect.props.text = that.gMapArr.layers[2].texts[i].textInfo.text
      let xmin = parseInt(rect.shape.x) 
      let ymin = parseInt(rect.shape.y) ;
      let xmax = parseInt(rect.shape.x) + parseInt(rect.shape.width);
      let ymax = parseInt(rect.shape.y) + parseInt(rect.shape.height);
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

    let saveData = JSON.stringify(featuresArr)
 
  if(!dataRight) return this.nzMessage.error("保存失败,数据库中未查询到当前分类名");

    this.http.patch(`${environment.API_URL}/v1/sample-oss-file/patch_mark_status`,{}, {
      headers:{
        'Content-Type':'application/json;charset=utf-8',
        'Accept':'*!/'
      },
      params: {
        fileId: this.currentAllotFile.id + '',
        sampleOssTypeId:this.drawingRects[0].id+'',
        labelMessageObject:saveData
      }
    })
    .subscribe((result: HttpResult<any>) => {
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
        this.reqMarkCountData();
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

        this.reqMarkCountData()
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
   
    // console.log(idx,this.gMapArr.layers[1].features,this.selectClassIndex1)
    if(idx == this.selectClassIndex1) this.labelShowAlone(this.selectClassIndex1-1)

    this.gfeatureLayer.removeFeatureById(this.gMapArr.layers[1].features[idx].id);

    // 删除对应text
    this.gMapArr.layers[2].removeTextById(this.gMapArr.layers[2].texts[idx].id);
 
    if(this.drawingRects.length != 0){
      this.drawingRects[idx].markData.relatedTextId.splice(idx-1,1)
    }

    this.drawingRects.splice(idx, 1);
  }

  editRect(idx: number,fileSample:any) {
    this.drawingRects[idx].markData.rects = []
    localStorage.setItem("markData",JSON.stringify(this.drawingRects[idx].markData))
    this.gMapArr.getActiveFeature()
    this.removeKeyboard() 
    this.dataMarkService.creatNzModal(this,idx,fileSample)
  }


  autoMarkRequest(){
    return this.http.post(`${environment.API_URL}/v1/mark-detect`, {
      "ossKey": this.currentAllotFile.file.ossKey
    })
  }

  autoMark() {

    if (this.currentAllotFile) {
      this.autoMarkRequest().subscribe((result: HttpResult<any>) => {
        if (HttpResult.succeed(result.code)) {
          const marks = result.data;
          const rects = []
          if(marks.length == 0){

            this.nzMessage.error("请求失败，识别失败");

          }else{

            let flag = true

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
              let newDate = +new Date()
              const relatedTextId = `label-text-id-${marks[i].sampleOssType.id}${i}${newDate}`;
              var feature = new AILabel.Feature.Rect(marks[i].sampleOssType.id+"_"+i+`${newDate}`, 
                {height:marks[i].markPolygon.maxY - marks[i].markPolygon.minY,width:marks[i].markPolygon.maxX - marks[i].markPolygon.minX,x:marks[i].markPolygon.minX ,y: marks[i].markPolygon.minY}, 
                {name:'123',textId: relatedTextId}, 
                {fill: true,
                  fillStyle: "#0f0",
                  globalAlpha: 0.2,
                  lineWidth: 1,
                  opacity: 1,
                  stroke: true,
                  strokeStyle: "red"}
              );
              this.gfeatureLayer.addFeature(feature)
              const {x: ltx, y: lty} = feature.shape;
       
              if (marks[i].markPolygon.categoryCn == "未识别") flag = false;

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
                      samplePath:marks[i].sampleOssType.samplePath,
                      relatedTextId
                    })
                   
            }

            if(flag){
              this.nzMessage.success("请求成功，识别成功");
            }else{
              this.nzMessage.success("请求成功，识别失败");
            }

          }
        }
      });
    }
  }

  redraw(points?: { startX: number, startY: number, endX: number, endY: number }) {
    // this.gfeatureLayer.removeFeatureById(this.markData.theFeatureId);
  }


  changeMarkMode(markMode: string) {
    this.markMode = markMode;
    this.allFeatures();
    if (this.markMode === 'auto') {
      // 人机协同标注
      this.autoMark();
    } else {
      // 手动标注
      // this.drawingRects = [];
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
  selectClassIndex1 = -1;
  keyboarChangeFeature:any;

  private keyBoardOfFeature() {

    this.keyboarChangeFeature = fromEvent(window, 'keydown').subscribe((event: any) => {
      if(event.keyCode == 40){
        if((this.selectClassIndex1+1) <=0 || (this.selectClassIndex1+1) >= this.gMapArr.layers[1].features.length) return
        this.labelShowAlone(this.selectClassIndex1+1)
      }else if(event.keyCode == 38){
        if((this.selectClassIndex1-1) < 0 || (this.selectClassIndex1-1) >= this.gMapArr.layers[1].features.length) return
        this.labelShowAlone(this.selectClassIndex1-1)
      }
    });
  }

  gMapUnactive(){
    this.gMapArr.setActiveFeature(null);
    for (let index = 0; index < this.gMapArr.layers[1].features.length; index++) {
      const element = this.gMapArr.layers[1].features[index];
      if(element.props.name != "uninterested"){
        this.drawingRects[index].select = false
      }
    }
  }

  featuresAllHiden:boolean = false
  allFeaturesHide(){
    this.gMapUnactive()
    this.labelShowAlone(-1)
    this.featuresAllHiden = true
    if(this.keyboarChangeFeature || !this.keyboarChangeFeature.closed)  this.keyboarChangeFeature.unsubscribe()
    for (let index = 0; index < this.gMapArr.layers[1].features.length; index++) {
      let rectFeature = this.gMapArr.layers[1].features[index];
      let textFeature = this.gMapArr.layers[2].texts[index];
      if(rectFeature.props.name != "uninterested"){
        if(rectFeature.style.stroke == true){
          rectFeature.style.stroke = false
          rectFeature.style.globalAlpha = 0
          textFeature.style.fontColor = "rgba(225,225,225,0)"
          textFeature.style.globalAlpha = 0
        }
    }
  }
  this.gMapArr.refresh()

  }


  allFeatures(){
    this.featuresAllHiden = false
    this.labelShowAlone(-1)
    this.lableAloneStatus = false
    if(this.keyboarChangeFeature || !this.keyboarChangeFeature.closed)  this.keyboarChangeFeature.unsubscribe()
    if(this.keyboardVerifySubscription2){this.keyboardVerifySubscription2.unsubscribe()}
    this.listenKeyboard2()
    for (let index = 0; index < this.gMapArr.layers[1].features.length; index++) {
      let rectFeature = this.gMapArr.layers[1].features[index];
      let textFeature = this.gMapArr.layers[2].texts[index];
      if(rectFeature.props.name != "uninterested"){
        if(rectFeature.style.stroke == false){
          rectFeature.style.stroke = true
          rectFeature.style.globalAlpha = 0.2
          textFeature.style.fontColor = "#fff"
          textFeature.style.globalAlpha = 1
        }
    }
  }
  this.gMapArr.refresh()
}

featureActive(key){

  

}

  labelShowAlone(key){
    this.featuresAllHiden = false
    this.lableAloneStatus = true
    this.gMapUnactive()
    if(!this.keyboarChangeFeature || this.keyboarChangeFeature.closed)  this.keyBoardOfFeature()
    this.selectClassIndex1 = key
    for (let index = 0; index < this.gMapArr.layers[1].features.length; index++) {
      let rectFeature = this.gMapArr.layers[1].features[index];
      let textFeature = this.gMapArr.layers[2].getTextById("label-text-id-"+rectFeature.id);
      console.log(textFeature,rectFeature)
      if(rectFeature.props.name != "uninterested"){
      if(key != index){
        rectFeature.style.stroke = false
        rectFeature.style.globalAlpha = 0
        textFeature.style.fontColor = "rgba(225,225,225,0)"
        textFeature.style.globalAlpha = 0
      }else{
        rectFeature.style.stroke = true
        rectFeature.style.globalAlpha = 0.2
        textFeature.style.fontColor = "#fff"
        textFeature.style.globalAlpha = 1
      }
  
    }
  }
     this.gMapArr.refresh()
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
