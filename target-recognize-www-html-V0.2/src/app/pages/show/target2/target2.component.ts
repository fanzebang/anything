import { Component, OnInit } from '@angular/core';
import { number } from 'echarts';
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { ServiceService } from "../service.service"
import {environment} from "../../../../environments/environment"


declare var Swiper:any;
declare var $:any;
@Component({
  selector: 'app-target2',
  templateUrl: './target2.component.html',
  styleUrls: ['./target2.component.less']
})
export class Target2Component implements OnInit {

  public videoArr = [
  
  ]
 isreuqest:Boolean = true
  public requestData:any;

  public videoSelect:number= 0;


public swiper:any
  public itemSelect:number = 0;

  constructor(public ServiceService:ServiceService,public http:HttpClient) { }

  ngOnInit(): void {


    this.changeRequestData()
  }

  

  ngAfterViewInit(): void {
    this.getVideoPic()


    
  }


  changeLi(key:any){
    console.log(key,this.itemSelect)
    if(key == this.itemSelect){
        return
    }else{
      var tabLi:any = document.querySelectorAll(".right li")
      for(let i=0;i<tabLi.length;i++){
        tabLi[i].style.background = "#e1ecf8"
        tabLi[i].style.color='#0a6deb';
      }
      tabLi[key].style.background = "#0a6deb"
      tabLi[key].style.color='#fff';
      this.itemSelect = key
    }

  }

getVideoPic(){

  var videoDom:any = document.querySelectorAll('.bottom video')
var i:number=0;
    for (let i = 0; i < videoDom.length; i++) {
      const element = videoDom[i];
      element.currentTime  = 3
    }

  }
  changeVideoUrl(e:any,key:any){
   
    if(this.videoSelect == key) return
    var liDom:any = document.querySelectorAll('.bottom .swiper-slide')
    var videoDom:any = document.querySelector('.left video')
    for (let i = 0; i < liDom.length; i++) {
      const element = liDom[i];
      element.style.border = 'none';
    }
    liDom[key].style.border = '2px solid #e29426';
    this.videoSelect = key
    this.changeLi(0)
    videoDom.play()
  }

  changeVideoTime(time:any){
    var videoDom:any = document.querySelector('.left video')
    videoDom.currentTime = time

  }
  
changeRequestData():any{
var api = `${environment.API_URL}/v1/frame-detect/instructions?typeName=video&pageIndex=1&pageSize=100`
this.http.post(api,{}).subscribe((res:any)=>{
  // console.log(res.data.records)
  res.data.records.forEach(element => {
    for(var key in element){
      if(key == 'keyObjectList'||key == 'objectStartTimeVoList'||key == 'labelVoList'){
            element[key] = JSON.parse(element[key])
      }else if(key =='keyWordVoList'|| key == 'keyFrameVoList'){
          element[key] = JSON.parse(element[key])
          element[key].forEach(x => {
              x.imgUrl = element.url +'/'+x.imgUrl
          });
      }
    }
  });
     

  // .records
    var data:any = res.data.records
    var dataArr:any = []
    var url = localStorage.getItem("targetRecognizePath")
    for (let index = 0; index < data.length ; index++) {
      let dataIndex = data[index];
      dataArr.push({
        videoSrc:url+'/'+dataIndex.targetPath,
        imgSrc:'',
        items:[]
      })
      dataArr.videoSrc = dataIndex.url+'/'+dataIndex.targetPath
      let dataInfo = {};
      let dataInfoArr:any = []
      dataIndex.keyObjectList.forEach((item, index) => {
            let { objectName } = item;
            if (!dataInfo[objectName]) {
              dataInfo[objectName] = {
                name:'',			
                key: [],
              }
            }
            dataInfo[objectName].key.push(item.appearTime);
            dataInfo[objectName].name =item.objectName
          });
          var list:any = Object.values(dataInfo); // list 转换成功的数据
       
          list.forEach(function(x:any ){
            for(var key in x){

              if(key == 'key'){
                var arr = []
                x[key].forEach(element => {
                
                  var arr2 = element.split(':')
          
                  arr.push(arr2[0]*60*60+arr2[1]*60+arr2[2]*1+'\'')
                });
                x[key] = arr
              }
             
            }
          })
          
  

            for(var key in dataInfo){
              dataInfoArr.push(dataInfo[key])
            }


      let dataText = []
      dataIndex.keyWordVoList.forEach((x)=>{


        let obj:any= {
          text:x.word,
          imgSrc:x.imgUrl,
          key:0,
        }
        let time = x.wordTime.split(":")
        obj.key = (time[0]*60*60+time[1]*60+time[2])*1
        dataText.push(obj)
      })

      let dataFrame = []
      dataIndex.keyFrameVoList.forEach((x)=>{
        let obj:any= {
          imgSrc:x.imgUrl,
          key:0
        }
        let time = x.startTime.split(":")
        obj.key = (time[0]*60*60+time[1]*60+time[2])*1
        dataFrame.push(obj)
      })

      let dataTimeCount = []
      dataIndex.objectStartTimeVoList.forEach((x)=>{
        let obj = {
          name:x.targetName,
          time:x.startTimeCount,
        }
          dataTimeCount.push(obj)
      })

          
          dataArr[index].items.push(
            {
            title:'关键对象',
            list:dataInfoArr
            },
            {
              title:'文字',
              list:dataText
            },
            {
              title:'关键帧',
              list:dataFrame
            },
            {
              title:'场景',
            },
            {
              title:'标签',
              list:dataIndex.labelVoList
            },
            {
              title:'目标出现时长',
              list:dataTimeCount
            }
          )
    }
    dataArr.forEach(element => {
      this.videoArr .push(element)
    });

    setTimeout(() => {
      this.initSwiper()
      }, 200);
   })
  }


  initSwiper(){
    var that = this
    this.isreuqest = true
    this.swiper = new Swiper(".mySwiper", {
      slidesPerView: 5,
      centeredSlides: false,
      spaceBetween: 30,
      grabCursor: true,

      on:{
        setTranslate: function(translate){
           //自定义事件
          //  console.log(that.swiper,translate)
    
        },
        
      }
    });
    // this.swiper.setTranslate(0);//设定位移，可以为正数
    // that.swiper.translate = 0
    // console.log(that.swiper.previousTranslate)
  }


}

