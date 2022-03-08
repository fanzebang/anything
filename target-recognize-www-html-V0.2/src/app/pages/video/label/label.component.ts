import { Component, OnInit } from '@angular/core';
import { VideoService } from 'src/app/video.service';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.less']
})
export class LabelComponent implements OnInit {
  public labelArr:string[]= []
  constructor(private videoService:VideoService) {
 
   }

  ngOnInit(): void {
   
  }
 

  public count=0;
  
  ngAfterViewInit(): void {

    const orignalSetItem = localStorage.setItem;　// 原始的setItem方法
    localStorage.setItem = function(key, newValue) {
      if(key == 'videoData'){
        const setItemEvent = new Event('setItemEvent');
        setItemEvent[key] = newValue; // 保存设置的值
        orignalSetItem.apply(this, arguments);　// 调用原始的setItem方法
        window.dispatchEvent(setItemEvent); // 派发该事件
      }
  };

  window.addEventListener('setItemEvent', (e:any) => {
    this.count++
    if(this.count==1){
      var labelArr = JSON.parse(localStorage.getItem("videoData"))[0].labelVoList

      this.labelArr = labelArr
      
    }
  });


  this.videoService.aClickedEvent
  .subscribe((data:string) => {
    var labelArr = JSON.parse(localStorage.getItem("videoData"))[data].labelVoList
    this.labelArr = labelArr
  });

  }

}
