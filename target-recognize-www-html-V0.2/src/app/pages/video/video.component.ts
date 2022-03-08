import { Component, OnInit,ElementRef} from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router'
import { VideoService } from 'src/app/video.service';
import {HttpResult, User} from '../../core/http-entity';
import axios from 'axios';
import { HttpClient, HttpEvent, HttpEventType, HttpProgressEvent,
  HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {NzModalService} from 'ng-zorro-antd';
import * as $ from "jquery";
// declare var $:any;

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.less']
})

export class VideoComponent implements OnInit {

  public videoUrl :string;
  private imgArr :any;
  private frameArr :any;
  public object:any;
  public run :boolean = true;
  isSpinning = false;
  user: User;
  hotspots: string[] = [];
  public videoData:any = [];
  public intervalVideo:any
  constructor(private el: ElementRef,public router:Router,
              public activateInfo:ActivatedRoute,
              private videoService:VideoService,
              private http:HttpClient,
              private nzModal: NzModalService,
              ) {

   }

ngOnInit(): void {

  this.getdata(0)

  }

cutPicture(i){
  this.isSpinning = true
  var canvas = this.el.nativeElement.querySelector('#canvas1')
  var AccorVideo:any = this.el.nativeElement.querySelector('#AccorVideo')
  var ctx = canvas.getContext('2d')
  var that = this
 if(this.imgArr.length==0){
   this.isSpinning = false
   return
 }else{
   var time1:any = this.imgArr[i].wordTime.split(':')
   var time:any = time1[0]*60*60+time1[1]*60+time1[2]*1
              AccorVideo.currentTime = time;
              if(AccorVideo.duration>=time){
                setTimeout(function(){
                  ctx.drawImage(AccorVideo, 0, 0,400, 250)
                  that.el.nativeElement.querySelectorAll('.imgLi img')[i].src = canvas.toDataURL('image/jpeg')
                    i++;
                    if(i<that.imgArr.length){that.cutPicture(i)}else{
                      ctx.clearRect(0,0,400, 250)
                      clearTimeout()
                      return that.isSpinning = false

                    }
                },400)
              }else {
                ctx.clearRect(0,0,400, 250)
                that.el.nativeElement.querySelectorAll('.imgLi img')[i].src = canvas.toDataURL('image/jpeg')
                i++;
                if(i<that.imgArr.length){ that.cutPicture(i)}else{

                  clearTimeout()
                  return that.isSpinning = false;
                }
              }


 }

    }



cutFrameKey(i,canvas,AccorVideo){
      var ctx = canvas.getContext('2d')
      var that = this
      var time1:any = this.frameArr[i].startTime.split(':')
      var time:any = time1[0]*60*60+time1[1]*60+time1[2]*1
                AccorVideo.currentTime = time;
                 ctx.fillStyle="#000000";
                    ctx.beginPath();
                    ctx.fillRect(0,0,canvas.width,canvas.height);
                    ctx.closePath();
                  if(AccorVideo.duration>=time){
                    setTimeout(function(){
                      if(time == AccorVideo.currentTime){
                        ctx.drawImage(AccorVideo, 0, 0,400, 250)
                        that.el.nativeElement.querySelectorAll('.frameLi img')[i].src = canvas.toDataURL('image/jpeg')
                       }else{
                        AccorVideo.currentTime = time;
                        ctx.drawImage(AccorVideo, 0, 0,400, 250)
                        that.el.nativeElement.querySelectorAll('.frameLi img')[i].src = canvas.toDataURL('image/jpeg')
                       }
                        i++
                        if(i<that.frameArr.length){that.cutFrameKey(i,canvas,AccorVideo)}else{
                        }
                    },400)
                  }else{
                    ctx.fillStyle="#000000";
                    ctx.beginPath();
                    ctx.fillRect(0,0,canvas.width,canvas.height);
                    ctx.closePath();
                    that.el.nativeElement.querySelectorAll('.frameLi img')[i].src = canvas.toDataURL('image/jpeg')
                    i++
                    if(i<that.frameArr.length){that.cutFrameKey(i,canvas,AccorVideo)}else{
                    }
                  }
        }


ngAfterViewInit(): void{
  var AccorVideo = this.el.nativeElement.querySelector('#AccorVideo')
  var canvas = this.el.nativeElement.querySelector('#canvas1')
  var that = this
  AccorVideo.onloadedmetadata = function(){
    that.cutPicture(0)
    that.cutFrameKey(0,canvas,AccorVideo)

  }

  this.videoService.aClickedEvent
  .subscribe((data:string) => {
    this.imgArr = JSON.parse(localStorage.getItem('videoData'))[data].keyWordVoList
    this.frameArr = JSON.parse(localStorage.getItem('videoData'))[data].keyFrameVoList
      AccorVideo.src = $(".left li .video").eq(data).attr('src')
    AccorVideo.onloadedmetadata = function(){
      that.cutPicture(0)
      that.cutFrameKey(0,canvas,AccorVideo)
    }

  });
}

ngOnDestroy(): void {
  //Called once, before the instance is destroyed.
  //Add 'implements OnDestroy' to the class.
  clearInterval(this.intervalVideo)
}

public count = 0;

getdata(i){
  var fileList = this.videoService.getVideoFile()
  // .forEach(element => {
  //   fileList.push(element.files)
  // });
// var fileList = this.videoService.getVideoFile()
var api = `${environment.API_URL}/v1/frame-detect/frame`  //--------------------------此段为，影响分析入口

      if(i<fileList.length){
          var formData = new FormData()
          formData.append('files',fileList[i].files)
          axios.post(api, formData, {
            headers: {
              'Authorization':'Bearer '+localStorage.getItem('Bearer'),
              'TR-Role': 'TR-User'
            },
            onUploadProgress: progressEvent => {
              let complete = (progressEvent.loaded / progressEvent.total * 100 | 0)
              let jd = 10;
              if(complete == 100){
                var t = setInterval(()=>{
                  if(jd<100){
                    $('.left ul li .mask').eq(i).text(`文件上传${jd+=10}%...`)
                  }else{
                      $('.left ul li .mask').eq(i).css('color','#fff')
                      $('.left ul li .mask').eq(i).text(`正在发起分析..`)
                    clearInterval(t)
                  }
               },10)
              }else{
                $('.left ul li .mask').eq(i).text(`文件上传${complete}%...`)
              }
            }
          })
          .then((response) => {
            var requestData = JSON.parse(response.data.data)
            setTimeout(()=>{
            if(response.data.code == 1 && requestData.length > 0){
                $('.left ul li .mask').eq(i).css('color','#fff')
                $('.left ul li .mask').eq(i).text(`视频分析中...`)
                this.setVideoProgress(i,requestData[0].detectId)
              }else{
                $('.left ul li .mask').eq(i).css('color','red')
                $('.left ul li .mask').eq(i).text(`视频分析超时！`)
                i++
                this.getdata(i)
              }
          },1000)
          })
          .catch(err=>{
            $('.left ul li .mask').eq(i).css('color','red')
            $('.left ul li .mask').eq(i).text(`解析失败！`)
            console.log(err)
            i++
            this.getdata(i)
          })

      }else{

        return

      }
    }

setVideoProgress(i,detectId){
    var p:any = 0
    this.videoService.setVideoFile(i,p,'progress')
    var videoUrl;
      if(p!=100){
        var api = `${environment.API_URL}/v1/frame-detect/queryProgress?detectId=${detectId}` 
        var api2 = `${environment.API_URL}/v1/frame-detect/getVideoDetectResult?detectId=${detectId}` 
        this.intervalVideo = setInterval(()=>{
        axios.post(api,{detectId}, {
          headers: {
            'Authorization':'Bearer '+localStorage.getItem('Bearer'),
            'TR-Role': 'TR-User'
          }
        })
        .then(result=>{
          let resultData = JSON.parse(result.data.data)
          // process
            let progress:any = (resultData.process*1).toFixed(4)
            p = (progress*100).toFixed(4)
            this.videoService.setVideoFile(i,p,'progress')
            if(p == 100){
              axios.post(api2,{detectId},{
                headers: {
                  'Authorization':'Bearer '+localStorage.getItem('Bearer'),
                  'TR-Role': 'TR-User'
                }
              })
             
              .then((result1:any)=>{
                var requestData = result1.data.data
                clearInterval(this.intervalVideo)
                 if(requestData && requestData.length != 0 ){
                    $('.left ul li .mask').eq(i).text(`视频解析成功！`)
                    this.count++
                    setTimeout(()=>{
                      $('.left ul li .mask').eq(i-1).css('display','none')
                      this.videoData.push(requestData)
                      localStorage.setItem('videoData',JSON.stringify(this.videoData))
                      videoUrl = JSON.parse(localStorage.getItem('videoData'))[i-1].vedioUrl
                      $('.left ul li video').eq(i-1).attr('src',videoUrl)
                      if(this.count==1){
                        $('#my-video').attr('src',JSON.parse(localStorage.getItem('videoData'))[i-1].vedioUrl)
                        $('#AccorVideo').attr('src',JSON.parse(localStorage.getItem('videoData'))[i-1].vedioUrl)
                        this.imgArr = JSON.parse(localStorage.getItem('videoData'))[i-1].keyWordVoList
                        this.frameArr = JSON.parse(localStorage.getItem('videoData'))[i-1].keyFrameVoList
                      }
                    },500)
                  }else{
                    $('.left ul li .mask').eq(i).css('color','red')
                    $('.left ul li .mask').eq(i).text(`视频解析失败！`)
                  }
                  i++
                  this.getdata(i)
              })
              .catch((e:any)=>{
                clearInterval(this.intervalVideo)
                i++
                this.getdata(i)
              })
            }
        })
      },1000*1)
    }
}






    setArr(key){
      this.imgArr = JSON.parse(localStorage.getItem('videoData'))[key][0].keyWordVoList
      this.frameArr = JSON.parse(localStorage.getItem('videoData'))[key][0].keyFrameVoList

    }




}
