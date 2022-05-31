import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {ApiPage, DetectHistory, HttpResult, Kms, VideoFrame} from '../../core/http-entity';

declare var $:any;
declare var ImagePreview:any;
declare var WinBox:any;
declare var AILabel:any;

@Component({
  selector: 'app-detect2',
  templateUrl: './detect2.component.html',
  styleUrls: ['./detect2.component.less']
})
export class Detect2Component implements OnInit {

  constructor(public router:Router,private route:ActivatedRoute,private http:HttpClient) { }

  gMapArr:any;
  gfeatureLayer;
  gFirstTextLayer;
  drwReact(drwData:any){

    

    let imgUrl =`${localStorage.getItem('targetRecognizePath')}/`+ drwData[0].ossKey
    let img = new Image();
    img.src = imgUrl

    if(img.complete){

      var aiLableDom:any = document.querySelector(".detect2_aiLabel")
      aiLableDom.style.width = img.width+"px";

      let zoomWidth = img.width
      let imgWidth = img.width
       let imgHeight =  img.height
       let imgSrc  =  img.src

      this.gMapArr= new AILabel.Map(`aiLabel2`,{
        center: {x: imgWidth/2, y: imgHeight/2}, // 为了让图片居中
        zoom: imgWidth*2,
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
        crossOrigin: true, // 如果跨域图片，需要设置为true
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

  this.gFirstTextLayer = new AILabel.Layer.Text('first-layer-text',{name: '第一个文本图层'},{zIndex: 12, opacity: 1});
  this.gMapArr.addLayer(this.gFirstTextLayer);

drwData[0].targetJson.forEach(element => {
  var id = `${+new Date()}`;
  let x,y,height,width;
  x = element.minX
  y =  element.minY
  height = element.maxY-y
  width = element.maxX-x
    var feature = new AILabel.Feature.Rect(
    id, 
    {height,width,x,y}, 
    {name:'123',textId: id}, 
    {fill: true,
      fillStyle: "#0f0",
      globalAlpha: 0,
      lineWidth: 1,
      opacity: 1,
      stroke: true,
      strokeStyle: "red"}
  );
  this.gfeatureLayer.addFeature(feature)


       // 添加feature标签名
    const {x: ltx, y: lty} = {x,y};
    var gFirstText = new AILabel.Text(
        id, // id
        {text: element.categoryCn, position: {x: ltx, y: lty}, offset: {x: 0, y: 0}}, // shape, 左上角
        {name: '第一个文本对象'}, // props
        {fillStyle: '#15a0ff', strokeStyle: '#f0f8ff00', background: true, globalAlpha: 1, fontColor: '#fff'} // style
    );

    this.gFirstTextLayer.addText(gFirstText)
 

});

   


    }else{

      setTimeout(()=>{
        this.drwReact(drwData);
      },500)
     
    }
  
    // var aiLableDom:any = document.querySelector(".detect2_aiLabel")
    // aiLableDom.style.width = imgDom.width+"px";

//  setTimeout(()=>{

//       let zoomWidth = imgDom.width
//       let imgWidth = imgDom.width
//        let imgHeight =  imgDom.height
//        let imgSrc  = imgDom.src;

//       this.gMapArr= new AILabel.Map(`aiLabel2`,{
//         center: {x: imgWidth/2, y: imgHeight/2}, // 为了让图片居中
//         zoom: imgWidth*2,
//         mode: 'PAN', // 绘制线段
//         refreshDelayWhenZooming: false, // 缩放时是否允许刷新延时，性能更优
//         zoomWhenDrawing: true,
//         panWhenDrawing: false,
//         featureCaptureWhenMove:true,
//         zoomWheelRatio: 5 , // 控制滑轮缩放缩率[0, 10), 值越小，则缩放越快，反之越慢
//         withHotKeys: true ,// 关闭快捷键
//         zoomMax: zoomWidth * 10,
//         zoomMin: zoomWidth / 10
//     }) 

//     var imageLayer = new AILabel.Layer.Image(
//       'img', // id
//       {
//         src: imgSrc,
//         width: imgWidth,
//         height: imgHeight,
//         crossOrigin: true, // 如果跨域图片，需要设置为true
//         position: { // 图片左上角对应的坐标位置
//             x: 0,
//             y: 0
//         },
//       },
//       {name: '第一个图片图层'},
//       {zIndex: 1} 
//     );
    
//     this.gMapArr.addLayer(imageLayer)


//     this.gfeatureLayer = new AILabel.Layer.Feature(`feature`, {name: '第一个矢量图层'}, {zIndex:19});
//     this.gMapArr.addLayer(this.gfeatureLayer)


//     let x,y,height,width;
//     x = 100
//     y = 200
//     height = 150
//     width = 50
//       var feature = new AILabel.Feature.Rect(Math.round(Math.random()*100000), 
//       {height,width,x,y}, 
//       {name:'123',textId: ""}, 
//       {fill: true,
//         fillStyle: "#0f0",
//         globalAlpha: 0,
//         lineWidth: 1,
//         opacity: 1,
//         stroke: true,
//         strokeStyle: "red"}
//     );
//     this.gfeatureLayer.addFeature(feature)


//       },1000)
  }

  ngOnInit(): void {

    this.route.paramMap.subscribe((paramMap:any) => {

      if(paramMap.has("detectId")){
      var detectId = paramMap.params.detectId
       const params = new HttpParams()
        .append('pageIndex', '1')
        .append('pageSize', '500')
        .append('detectId', detectId);
      this.http.get(`${environment.API_URL}/v1/detect-history`, {
        params
      }).subscribe((result: HttpResult<ApiPage<DetectHistory>>) => {
        if (HttpResult.succeed(result.code)){
          console.log()
          var resultData:any = result.data.records
          this.drwReact(resultData);
          // this.detectHistory = result.data.records;
          // this.total = result.data.total;
          // if (this.total > 0) {
           
          //   this.currentDetectResult = this.detectHistory[0];
          
          //   this.showDetectResult();
          // }
  
          
        }
      });

      }

    })

    
      // this.drwReact();
    

  }

  toHome2(){

    this.router.navigate(['/home2']);

  }

}
