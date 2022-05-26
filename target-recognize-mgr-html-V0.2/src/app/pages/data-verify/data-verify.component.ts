import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {HttpResult, LabelTask, SampleOssFile, StatInfo, User} from '../../core/http-entity';
import {format} from 'date-fns';
import { fromEvent } from 'rxjs';
import {NzMessageService, NzModalService} from "ng-zorro-antd";
import {Router} from '@angular/router';
declare var $:any
declare var AILabel:any;
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
  verifyLabel:any;
  gfeatureLayer:any;
  gFirstTextLayer:any;
  gCoordinateData:any
  dateRange: [];
  searchTerms = {
    startTime: '',
    endTime: '',
    userId:''
  };
  selectClassIndex:any;
  selectClassIndex1 = -1;
  keyboardVerifySubscription:any;
  constructor(private http: HttpClient,private nzMessage: NzMessageService,private router: Router) {

  }


  private listenKeyboard() {

    this.keyboardVerifySubscription = fromEvent(window, 'keydown').subscribe((event: any) => {

        if(event.keyCode == 38 || event.keyCode == 87){
          if(this.selectClassIndex1-1>=0)this.changeClassIndex(this.selectClassIndex1-1)
        }else if(event.keyCode == 40|| event.keyCode == 83){
          let featuresLength = 0;
          for (let index = 0; index < this.verifyLabel.layers[1].features.length; index++) {
            const element = this.verifyLabel.layers[1].features[index];
              if(element.props.name != "auto"){
                featuresLength++
              }
          }
          if(this.selectClassIndex1+1<featuresLength)this.changeClassIndex(this.selectClassIndex1+1)
        }
    });
  }

  keyboardVerifySubscription2:any;
  singleTarget:boolean = false;
  toDown:boolean = true;
  private listenKeyboard2() {
    this.keyboardVerifySubscription2 = fromEvent(window, 'keydown').subscribe((event: any) => {
      if(event.keyCode == 192){
          if(!this.singleTarget){
            this.singleTarget = true;
            this.listenKeyboard();
            this.changeClassIndex(0)
            return false
          }else{
            let featuresLength = 0;
            for (let index = 0; index < this.verifyLabel.layers[1].features.length; index++) {
              const element = this.verifyLabel.layers[1].features[index];
                if(element.props.name != "auto"){
                  featuresLength++
                }
            }
        
            if(this.selectClassIndex1+1 == featuresLength) this.toDown = false
            if(this.selectClassIndex1 == 0) this.toDown = true
            var picturesDom =  document.querySelector(".audit-pictures")
            if( this.toDown){

              this.changeClassIndex(this.selectClassIndex1+1)


            }else{

              this.changeClassIndex(this.selectClassIndex1-1)
           

            }

            picturesDom.scrollTop = (picturesDom.scrollHeight-400)*((this.selectClassIndex1+1)/featuresLength)
            return false
          }

      }
    });
  }


  ngOnInit(): void {
    this.search(true)
    this.listenKeyboard2()
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    if(this.keyboardVerifySubscription)  this.keyboardVerifySubscription.unsubscribe();
    if(this.keyboardVerifySubscription2)  this.keyboardVerifySubscription2.unsubscribe();
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
    if(!this.keyboardVerifySubscription || this.keyboardVerifySubscription.closed == true) { this.singleTarget = true;  this.listenKeyboard() } 
      $(".audit-picture-item").removeClass('audit-picture-item-active')
      var testData = this.gCoordinateData[key];
      this.selectClassIndex1 = key
      for (let index = 0; index < this.verifyLabel.layers[1].features.length; index++) {
        let rectFeature = this.verifyLabel.layers[1].features[index];
        // console.log(rectFeature)
      if(rectFeature.props.name != "auto"){

        if(key != index){
          rectFeature.style.stroke = false
          rectFeature.style.globalAlpha = 0
        }else{
          rectFeature.style.stroke = testData.style.stroke 
          rectFeature.style.globalAlpha = testData.style.globalAlpha
        }
    
      }else{
        let box1 = this.verifyLabel.layers[1].features[this.selectClassIndex1].shape
        let box2 = rectFeature.shape
        let x_inter1 =  Math.max(box1.x,box2.x)
        let y_inter1 = Math.max(box1.y,box2.y)
        let x_inter2 = Math.min(box1.x+box1.width,box2.x+box2.width)
        let y_inter2 = Math.min(box1.y+box1.height,box2.y+box2.height)
        let interArea = Math.max(0,x_inter2-x_inter1+1)*Math.max(0,y_inter2-y_inter1+1)
        let area_box1 = (box1.width+1)*(box1.height+1)
        let area_box2 = (box2.width+1)*(box2.height+1)
        let iou = interArea/(area_box1+area_box2-interArea)*100
        let autoRectFeatureId = rectFeature.id.replace("_","")
        let autoTextHiden = false;
        if(iou < 80){
          rectFeature.style.stroke = false
          autoTextHiden = true
      
        }else{
          rectFeature.style.stroke = true
          autoTextHiden = false
        }

        for (let j = 0; j < this.verifyLabel.layers[2].texts.length; j++) {
          let autoText = this.verifyLabel.layers[2].texts[j];
          let autoTextFeatureId = autoText.id.match(/\d+/)
          if(autoRectFeatureId == autoTextFeatureId[0]){ 
            if(autoTextHiden){
              autoText.style.fontColor = "rgba(225,225,225,0)"
              autoText.style.globalAlpha = 0
            }else{
              autoText.style.fontColor = "#fff"
              autoText.style.globalAlpha = 1
            }
           }
        }


      }
    }
       this.verifyLabel.refresh()

  }

  onExpandChange(labelTask: LabelTask, checked: boolean): void {
    if (checked) {
      this.expandSet.add(labelTask.createdBy);
      this.http.get(`${environment.API_URL}/v1/label_task/sample_oss_file/${labelTask.createdBy}`).subscribe((result: HttpResult<SampleOssFile[]>) => {
        if (HttpResult.succeed(result.code)) {
            if( result.data.length != 0){
              for (let i = 0; i < this.listOfData.length; i++) {
                if (this.listOfData[i].createdBy == labelTask.createdBy){
                  this.listOfData[i].hasFiles = true
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

  mutliple:any
  creatAILabel(Imgdata:SampleOssFile) :void{

    var that = this
    $("#verifyLabel").empty();
    $("#verifyLabel").append('<nz-spin nzSimple  style="text-align: center;"></nz-spin>')
    var str = $("#verifyLabel").css("width")
    var str1 = $("#verifyLabel").css("height")
    var zoom = str.match(/\d+(\.\d+)?/g)[0]*2
    var zoomH = str1.match(/\d+(\.\d+)?/g)[0]*2
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
      
        var imgUrl:any = localStorage.getItem(itemKey)+'/' + ossKey;

        let text;

        try{
          text = Imgdata.samplePath.split("/")[Imgdata.samplePath.split("/").length-2]
        }catch(e){
          text = ""
        }

        let img = new Image()
        img.src = imgUrl
      
      if(img.complete) {
      let imgWidth = img.width;
      let imgHeight =  img.height;
      let coordinateData1 = coordinateData.data
      this.gCoordinateData = coordinateData1
      let mutliple;
     
      let labelZoom;
      if(imgWidth>= imgHeight){
          mutliple = zoom/imgWidth
          imgHeight = imgHeight*mutliple
          imgWidth = zoom
          labelZoom = imgWidth
      }else{
        mutliple = zoomH/imgHeight
        imgWidth = imgWidth*mutliple
        labelZoom = imgHeight
        imgHeight = zoomH
      }
      this.mutliple = mutliple
      this.verifyLabel= new AILabel.Map(`verifyLabel`,{
        center: {x: imgWidth/2, y: imgHeight/2}, // 为了让图片居中
        zoom: labelZoom*1.3,
        mode: 'PAN', // 绘制线段
        refreshDelayWhenZooming: false, // 缩放时是否允许刷新延时，性能更优
        zoomWhenDrawing: true,
        panWhenDrawing: false,
        featureCaptureWhenMove:false,
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
            crossOrigin: false, // 如果跨域图片，需要设置为true
            position: { // 图片左上角对应的坐标位置
                x: 0,
                y: 0
            },
          },
          {name: '第一个图片图层'},
          {zIndex: 1} 
     );
    that.verifyLabel.addLayer(imageLayer)

    that.gfeatureLayer = new AILabel.Layer.Feature(`feature`, {name: '第一个矢量图层'}, {zIndex:19});
    that.verifyLabel.addLayer(this.gfeatureLayer)

    that.gFirstTextLayer = new AILabel.Layer.Text(
        'first-layer-text', // id
        {name: '第一个文本图层'}, // props
        {zIndex: 12, opacity: 1} // style
      );
      that.verifyLabel.addLayer(that.gFirstTextLayer);
        try{
          for (let i = 0; i < coordinateData1.length; i++) {
            var testData = coordinateData1[i];
            var feature:any = new AILabel.Feature.Rect(
              testData.type_id, 
              {height:testData.coordinate.ymax -testData.coordinate.ymin,width:testData.coordinate.xmax - testData.coordinate.xmin,x:(testData.coordinate.xmin*1) ,y: (testData.coordinate.ymin*1)}, 
              {name:'123',textId: testData.type_id}, 
              {fill: true,
              fillStyle: "#0f0",
              globalAlpha: 0,
              lineWidth: 1,
              opacity: 1,
              stroke: true,
              strokeStyle: "red"}
            );
            that.gfeatureLayer.addFeature(feature);
            
            var {x: ltx, y: lty} = feature.shape;
            var gFirstText = new AILabel.Text(
              testData.type_id, // id
              {text:text, position: {x: ltx, y: lty}, offset: {x: 0, y: 0}}, // shape, 左上角
              {name: '第一个文本对象'}, // props
              {fillStyle: '#15a0ff', strokeStyle: '#f0f8ff00', background: true, globalAlpha: 1, fontColor: '#fff'} // style
            );
            that.verifyLabel.layers[2].addText(gFirstText);
          }
        }catch(e){
          that.gCoordinateData = coordinateData
          // console.log(mutliple)
          for (let i = 0; i < coordinateData.length; i++) {
            var testData = coordinateData[i];
            testData.shape.x = testData.shape.x*mutliple
            testData.shape.y = testData.shape.y*mutliple
            testData.shape.width = testData.shape.width*mutliple
            testData.shape.height = testData.shape.height*mutliple
            var feature:any = new AILabel.Feature.Rect(
              testData.type_id, 
              testData.shape, 
              testData.props, 
              testData.style
            );
            that.gfeatureLayer.addFeature(feature);
          }
        }
        if(this.collaborativeAudit == 'primary') this.autoMark(Imgdata.ossKey,mutliple)
     
        return
        }else{
         setTimeout(()=>{
          this.creatAILabel(Imgdata)
        },200)
   
        }
    

  
  }

  collaborativeAudit:any = 'default';

  changeAuditMode(){
    this.collaborativeAudit = this.collaborativeAudit == 'default'?'primary':'default'
    if(this.collaborativeAudit == 'primary' &&  this.currentSampleFile) this.autoMark(this.currentSampleFile.ossKey,this.mutliple)
  }


  autoMark(ossKey,mutliple) {

      this.http.post(`${environment.API_URL}/v1/mark-detect`, {
        "ossKey": ossKey
      }).subscribe((result: HttpResult<any>) => {
        if (HttpResult.succeed(result.code)) {
          const marks = result.data;
          if(marks.length == 0){
            this.nzMessage.error("无法识别");
          }else{
            this.nzMessage.success("识别成功");
            console.log(marks)
            for (let i = 0; i < marks.length; i++) {
              const relatedTextId = `label-text-id-${marks[i].sampleOssType.id}${i}`;
              var feature = new AILabel.Feature.Rect(marks[i].sampleOssType.id+"_"+i, 
                {height:(marks[i].markPolygon.maxY - marks[i].markPolygon.minY)*mutliple,width:(marks[i].markPolygon.maxX - marks[i].markPolygon.minX)*mutliple,x:(marks[i].markPolygon.minX)*mutliple ,y: (marks[i].markPolygon.minY)*mutliple}, 
                {name:'auto',textId: relatedTextId}, 
                {fill: true,
                  fillStyle: "#30b1e3",
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
                {text:`机器识别-${marks[i].markPolygon.categoryCn}`  , position: {x: ltx, y: lty}, offset: {x: 0, y: 0}}, // shape, 左上角
                {name: 'auto'}, // props
                {fillStyle: '#15a0ff', strokeStyle: '#f0f8ff00', background: true, globalAlpha: 1, fontColor: '#fff'} // style
            );
            this.verifyLabel.layers[2].addText(gFirstText);     
            }
          }
        }
      });
   
  }



  selectSampleFile(labelTask: LabelTask, sampleFile: SampleOssFile,index:any) {
      this.currentLabelTask = labelTask;
      this.currentSampleFile = sampleFile;
      this.selectClassIndex1 = -1;
       this.selectClassIndex = index
      this.creatAILabel(sampleFile)
      if (this.currentSampleFile.markStatus > 0) {
        const markedDatas = JSON.parse(this.currentSampleFile.labelMessage).data;
        if(markedDatas){
          this.markedRects = markedDatas.map(data => {
            return {
              typeId: data.type_id,
              rect: data.coordinate
            };
          });
        }else{
          let labelData = JSON.parse(this.currentSampleFile.labelMessage)
          this.markedRects = labelData.map(data=>{
            return {
              typeId: data.props.name,
              rect: {xmax:data.shape.x+data.shape.width,xmin:data.shape.x,ymax:data.shape.y+data.shape.height,ymin:data.shape.y}
            };
          });
        }
      }
      console.log(this.markedRects)
      if( this.keyboardVerifySubscription )  this.keyboardVerifySubscription.unsubscribe();
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
                // this.currentSampleFile = null 
                // this.router.navigate(['/console/data-verify']);
                location.reload();
              }
            }
          }

          // if(null == this.currentSampleFile){
          // }
  
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
                if(result.data.length == this.listOfData.length){
                  if(this.listOfData[i].createdBy == y.createdBy){
                    this.listOfData[i].unchedkFile = y.unchedkFile

                    if(this.searchTerms.userId == this.listOfData[i].createdBy ){
                      this.selectClassIndex++;
                   
                      this.selectSampleFile(this.listOfData[i],this.listOfData[i].sampleFiles[this.selectClassIndex],this.selectClassIndex);
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
