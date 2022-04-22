import { Component, OnInit,ViewEncapsulation,ElementRef} from '@angular/core';
import { VideoService } from 'src/app/video.service';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.less'],
  encapsulation: ViewEncapsulation.Emulated, 
})



export class AccordionComponent implements OnInit {


  public videoUrl:string='';

  panels = [
    {
      active: false,
      name: '文字',
      nn:'<app-video-list></app-video-list>'
    },
    {
      active: true,
      name: '关键帧',
      nn:'<app-video-list></app-video-list>'
    }
  ];





  public imgArr:any= []

  public frameArr:any[]=[]

public scenceArr:any[]=[
  {
    src:'assets/demo2/policy3.png',
    frame:'2\'27\'',
  },
  {
    src:'assets/demo2/policy3.png',
    frame:'27\'',
  },
  {
    src:'assets/demo2/policy3.png',
    frame:'27\'',
  },
  {
    src:'assets/demo2/policy3.png',
    frame:'27\'',
  },
  {
    src:'assets/demo2/policy3.png',
    frame:'27\'',
  },
  {
    src:'assets/demo2/policy3.png',
    frame:'27\'',
  },
  {
    src:'assets/demo2/policy3.png',
    frame:'27\'',
  },
  {
    src:'assets/demo2/policy3.png',
    frame:'27\'',
  },
  {
    src:'assets/demo2/policy3.png',
    frame:'2\'27\'',
  },
  {
    src:'assets/demo2/policy3.png',
    frame:'27\'',
  },
  {
    src:'assets/demo2/policy3.png',
    frame:'27\'',
  },
  {
    src:'assets/demo2/policy3.png',
    frame:'27\'',
  },
  {
    src:'assets/demo2/policy3.png',
    frame:'27\'',
  },
  {
    src:'assets/demo2/policy3.png',
    frame:'27\'',
  },
  {
    src:'assets/demo2/policy3.png',
    frame:'27\'',
  },
  {
    src:'assets/demo2/policy3.png',
    frame:'27\'',
  },
]

  constructor(private videoService:VideoService,private el: ElementRef) {


   }

  ngOnInit(): void {
  
  



  }

  public count = 0;
  public videoData = JSON.parse(localStorage.getItem('videoData'))


  ngAfterViewInit(): void {

    const orignalSetItem = localStorage.setItem;　// 原始的setItem方法
    localStorage.setItem = function(key, newValue) {
      if(key == 'videoData'  ){
        const setItemEvent = new Event('setItemEvent');
        setItemEvent[key] = newValue; // 保存设置的值
        orignalSetItem.apply(this, arguments);　// 调用原始的setItem方法
        window.dispatchEvent(setItemEvent); // 派发该事件
      }
  };

  window.addEventListener('setItemEvent', (e:any) => {
    this.count++
    if(this.count==1){
      this.imgArr =JSON.parse(e.videoData)[0].keyWordVoList
      this.frameArr = JSON.parse(e.videoData)[0].keyFrameVoList
    }
  
  });

  this.videoService.aClickedEvent
  .subscribe((data:string) => {
    this.imgArr =JSON.parse(localStorage.getItem('videoData'))[data].keyWordVoList
    this.frameArr = JSON.parse(localStorage.getItem('videoData'))[data].keyFrameVoList
   
  });


  }

  




}
