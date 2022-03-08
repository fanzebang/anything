import { Component, OnInit ,Output, EventEmitter,ElementRef} from '@angular/core';
import { VideoService } from 'src/app/video.service';



@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.less']
})
export class VideoListComponent implements OnInit {

  @Output('checked') checkedBack = new EventEmitter<any>();
 

  public imageArr:any[] = [
   

  ]

  public videoUrl:string = ''

  public myData:any;

  constructor(private el: ElementRef,private VideoService:VideoService) { 

  
  }

  ngOnInit(): void {

  }
  

  ngAfterViewInit(): void {
    this.imageArr = this.VideoService.getVideoFile()
    this.VideoService.objectTime.subscribe((key:any)=>{
        var video:any = document.querySelector("#my-video")
        video.currentTime = key
    })
  }

  imgclick(key):any{
    var changeData = JSON.parse(localStorage.getItem("videoData"))[key]
    var imglist = document.querySelectorAll('li')
    for(let i=0;i<imglist.length;i++){
      imglist[i].style.border = 'none'
    }
    imglist[key].style.border = "1px solid #fff" 
    this.videoUrl = changeData.vedioUrl
    this.VideoService.changeAccordion(key)
  }

}
