import { Component, OnInit,ViewEncapsulation  } from "@angular/core";
import { Router } from "@angular/router";
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { ServiceService } from "../service.service"
import {environment} from "../../../../environments/environment"

@Component({
  selector: "app-target",
  templateUrl: "./target.component.html",
  styleUrls: ["./target.component.less"],
  encapsulation: ViewEncapsulation.Emulated,
})
export class TargetComponent implements OnInit {
  public items:any = []
  public selectIndex:number = 0
  public keyWorld:string ;
  public picBig:string ;
  public imgKey:number=0;
  public content:any = [
        {
          "imgUrl":[
          ],
          "panels" :[
            {
              "active": "true",
              "name": "目标检测结果",
              "imgArr":[
                        

                      ]
            },
            {
              "active": "false",
              "name": "相似图片目标",
              "imgArr":[
                
              ]
            },
            {
              "active": "false","name": "匹配结果",
              "imgArr":[
               
              ]
            }
          ]
        },
        {
          "imgUrl":[
          ],
          "panels" :[
            {
              "active": "true","name": "目标检测结果",
              "imgArr":[
                     
                      ]
            },
            {
              "active": "false","name": "相似图片目标",
              "imgArr":[
            
              ]
            },
            {
              "active": "false","name": "匹配结果",
              "imgArr":[
              
              ]
            }
          ]
        },
        {
          "imgUrl":[
           ],
          "panels" :[
            {
              "active": "true","name": "目标检测结果",
              "imgArr":[
                      
                      ]
            },
            {
              "active": "false","name": "相似图片目标",
              "imgArr":[
            
              ]
            },
            {
              "active": "false","name": "匹配结果",
              "imgArr":[
                
              ]
            }
          ]
        },
        {
          "imgUrl":[
           ],
          "panels" :[
            {
              "active": "true","name": "目标检测结果",
              "imgArr":[
                   
                      ]
            },
            {
              "active": "false","name": "相似图片目标",
              "imgArr":[
  
              ]
            },
            {
              "active": "false","name": "匹配结果",
              "imgArr":[
         
              ]
            }
          ]
        },
        {
          "imgUrl":[
           ],
          "panels" :[
            {
              "active": "true","name": "目标检测结果",
              "imgArr":[
                  
                      ]
            },
            {
              "active": "false","name": "相似图片目标",
              "imgArr":[
        
              ]
            },
            {
              "active": "false","name": "匹配结果",
              "imgArr":[
             
              ]
            }
          ]
        },
        {
          "imgUrl":[
          ],
          "panels" :[
            {
              "active": "true","name": "目标检测结果",
              "imgArr":[
                
                      ]
            },
            {
              "active": "false","name": "相似图片目标",
              "imgArr":[
     
              ]
            },
            {
              "active": "false","name": "匹配结果",
              "imgArr":[
               
              ]
            }
          ]
        },
        {
          "imgUrl":[
           ],
          "panels" :[
            {
              "active": "true",
              "name": "目标检测结果",
              "imgArr":[
                      
                      ]
            },
            {
              "active": "false",
              "name": "相似图片目标",
              "imgArr":[
           
              ]
            },
            {
              "active": "false",
              "name": "匹配结果",
              "imgArr":[
            
              ]
            }
          ]
        }
];


    public selectImg = this.content[this.selectIndex].imgUrl[0]

    public scenceSrc = "assets/html/yuesefu_baideng.html" ;

    public requestData:any = []

  constructor(public router:Router,public ServiceService:ServiceService,public http:HttpClient) {



  }

  ngOnInit(): void {

    if(this.ServiceService.targetGetData().label.length!=0){
         this.items =  this.ServiceService.targetGetData().label
       }else{
         this.items =  ["政治人物", "经济人物", "军事人物", "科技人物", "文体人物", "恐怖分子", "分裂分子"]
       }
       if(this.ServiceService.targetGetData().keyWord){
         this.keyWorld = this.ServiceService.targetGetData().keyWord
       }else{
         this.keyWorld = "政治人物"
       }
       if(this.items.indexOf(this.keyWorld )!= -1){
         this.selectIndex = this.items.indexOf(this.keyWorld )
       }else{
         this.selectIndex =  0
       }

   this.changeRequestData()

  }

  changePanels():any{

    for (let index = 0; index < this.content[this.selectIndex].panels.length; index++) {
      const element = this.content[this.selectIndex].panels[index];
      element.imgArr = [];
      if(element.name == "目标检测结果"){
        element.imgArr.push({src:this.requestData[this.imgKey].url+'/'+JSON.parse(this.requestData[this.imgKey].checkResult).ossKey,text:JSON.parse(this.requestData[this.imgKey].checkResult).typeName})
 
      }else if(element.name == "相似图片目标"){
     
        element.imgArr = JSON.parse(this.requestData[this.imgKey].resembleImages).map(x=>{return {src:`${x}`}})
      }else if(element.name == "匹配结果"){
        var iframeDom:any = document.querySelector(".scence iframe")
        iframeDom.src = this.requestData[this.imgKey].matchingResult
        // this.scenceSrc = `${this.requestData[this.imgKey].matchingResult}`
      }
    }
  }


changeRequestData():any{
var api = `${environment.API_URL}/v1/frame-detect/instructions?typeName=img&targetType=${this.items[this.selectIndex]}&pageIndex=1&pageSize=5`
// var api = `${environment.API_URL}/v1/frame-detect/instructions?typeName=img&targetType=军舰`
   this.http.post(api,{}).subscribe((res:any)=>{
    this.content[this.selectIndex].imgUrl = []
    var bigImgDom:any = document.querySelector(".picBig img")
     if(res.data.records){
      this.requestData = res.data.records
      for (let index = 0; index < this.requestData.length; index++) {
        const element = this.requestData[index];
        this.content[this.selectIndex].imgUrl.push(element.url+'/'+element.targetPath)
      }
      bigImgDom.src = res.data.records[0].url+'/'+res.data.records[0].targetPath
      this.changePanels();

     }else{
      console.log("后端返回失败")
     }

 
     
 })



  }



  ngAfterViewInit(): void {


    var bigImgDom:any = document.querySelector(".picBig img")

    bigImgDom.src = this.content[this.selectIndex].imgUrl[0]

    // if(window.parent.length>0){window.parent.document.all.newtest.style.height=document.body.scrollHeight;}

  }



  getImg(e:any,key){
    console.log(e.target.currentSrc)
      this.selectImg = e.target.currentSrc
      var imgDom:any = document.querySelectorAll(".img ul img")
      for (let index = 0; index < imgDom.length; index++) {
          imgDom[index].style.border = "none"
      }
      imgDom[key].style.border = "3px solid #e29426"
      this.imgKey = key
      this.changePanels()


  }




  changeTab(e:any){
    this.imgKey = 0
    this.selectIndex = e
    var bigImgDom:any = document.querySelector(".picBig img")
    bigImgDom.src = this.content[this.selectIndex].imgUrl[0]
    this.changeRequestData()

  }
}
