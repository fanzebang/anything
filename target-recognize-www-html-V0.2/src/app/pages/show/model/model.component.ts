import { Component, OnInit,ElementRef,ViewChild } from '@angular/core';
import {Router,NavigationExtras} from '@angular/router';
import { ServiceService } from '../service.service'

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.less']
})
export class ModelComponent implements OnInit {

  @ViewChild('triangle') triangle:ElementRef

  public navList:any=[
    {
      img:"assets/images/persion-select.png",
      text:"人物识别",
      isSelect:true
    },
    {
      img:"assets/images/facilities-normal.png",
      text:"装备识别",
      isSelect:false
    },
    {
      img:"assets/images/equipment-normal.png",
      text:"设施识别",
      isSelect:false
    }
  ]

  public introduceContent:any = [
            {
              text:'快速检测人脸并返回人脸框位置，输出人脸150个关键点坐标，准确识别多种属性信息。与在一个已有人脸集合中找出与指定人脸最相似的一张或多张人脸注册库比对，实现1：N的人脸识别',
              label:['政治人物','经济人物','军事人物','科技人物','文体人物','恐怖分子','分裂分子']
            },
            {
              text:'快速检测装备位置，输出具体型号信息，准确识别多种属性信息。',
              label:['舰  船','飞  机','坦克装甲车辆']
            },
            {
   
            }
          ]

  public theValue:any =  {
    text:'快速检测人脸并返回人脸框位置，输出人脸150个关键点坐标，准确识别多种属性信息。与在一个已有人脸集合中找出与指定人脸最相似的一张或多张人脸注册库比对，实现1：N的人脸识别',
    label:['政治人物','经济人物','军事人物','科技人物','文体人物','恐怖分子','分裂分子']
  }

  public selectNum:any = 0;

  public hidden:boolean = true;

  constructor(public router:Router,public ServiceService:ServiceService) { }

  ngOnInit(): void {

  

  }

  slecet(key){
    for(var i = 0;i<this.navList.length;i++){
      this.navList[i].isSelect = false
      this.navList[i].img = this.navList[i].img.split('-')[0]+'-normal.png'
    }
    this.navList[key].isSelect = true

    this.navList[key].img = this.navList[key].img.split('-')[0]+'-select.png'

    this.triangle.nativeElement.style.left = (200+(key*400))+'px'

    this.theValue = this.introduceContent[key]
    
    this.selectNum = key

  }

  derect(e:any){

 var keyWord:string = e.target.innerText

 var obj ={
    keyWord:keyWord,
    label:this.theValue.label
 }

    if(this.selectNum == 0){

      this.ServiceService.modelSaveData(obj)

      this.router.navigate(['/target']);

    }else if(this.selectNum == 1){

      this.router.navigate(['/target1']);
    }
 
      


  }

}
