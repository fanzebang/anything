import { Component, OnInit, ViewChild } from '@angular/core';
//swiper
import Swiper from 'swiper';
import SwiperCore, { Autoplay, Pagination, Thumbs, Virtual } from 'swiper/core';

import{ActivatedRoute,Params} from  '@angular/router'
import { Router } from '@angular/router';

import { AppService } from "../../app.service"
import { ElementAst } from '@angular/compiler';


declare global {
  interface Window {
    jxClick: any,
    dbxClick: any,
    gMapArr: any,
    activeMode:any,
    saveLabel:any,
    confirma:any,
    pdlabelDataChange:any,
    changeSelect:any,
    btnItems:any
  }
}


// install Swiper modules
SwiperCore.use([Virtual,Pagination,Autoplay,Thumbs]);

declare var AILabel:any;
declare var layui:any;
declare function rightAlert(e:any):any;
declare function confirmAlert(e:any):any;


declare var $:any;

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})


export class DetailsComponent implements OnInit {
  @ViewChild("swiperVirtualRef2") swiperVirtualRef2:any;
  @ViewChild("swiperVirtualRef3") swiperVirtualRef3:any;


pageIndexChangeFlag:any = true
leftSelectIa = 0;
equipmentId:any ;
optionArr:any = []
activeMode:any;
gfeatureLayer:any ;
activeIndex:any = 0 
gMapArr:any;
pageAble:any= false;
zoom1:any = 0
btnItems:any=[
    // {"text":"全部",isSelect:true},
    {"text":"确认OK",isSelect:false},
    {"text":"确认NG",isSelect:false},
    {"text":"确认PASS",isSelect:false},
  ]
topBottom:any = [
    {
      text:"全部"
    },
    {
      text:"OK",
    },
    {
      text:"NG",
    },
    {
      text:"PASS",
    }
  ]

timeList:any = []


pageNum:any = 1;
pageNum1:any = 0
pageSize:any = 1
total:any= 0
dataArr:any;
dataArr1:any;
lastImg:any =0
labelMap:any = {
  machineCheckStatus:"",
  artificialCheckStatus:""
};
status:any
roiStatus:any={jx:false,dbx:false }
isSetZoom:any = false;
zoom:any=0;
size:any = {width : 2592, height : 1944,}
constructor(private activatedRoute:ActivatedRoute,private appService:AppService,private router:Router) { 

}
ngOnInit(): void {}
selectPreventDefault(e:any){
      if(e.keyCode == 37 || e.keyCode == 39 ){
        e.preventDefault()
      }
  }
changeOptionData(){
    this.optionArr = []
    var homeData:any =JSON.parse(localStorage.getItem("collectionData") as any).homeData
    this.activatedRoute.queryParams.subscribe((value:any)=>{
      if(homeData.length != 0){
        for (let index = 0; index < homeData.length; index++) {
          const element = homeData[index];
          this.optionArr.push({
            text:element.title+"-"+element.model,
            equipmentId:element.equipmentId
          })
        }
      }

      setTimeout(() => {
        $.each(this.optionArr,(i:any,n:any)=>{
            if(n.equipmentId == value.index){
              $(".select").find(`option:contains(${this.optionArr[i].text})`).attr("selected",true);
            }
        })
      }, 10);
    })
  }

collopseChange(e:any,i:any){
      if(e){
          $.each(this.timeList,(index:any,item:any)=>{
            if(index == i){
              item.active = true
            }else{
              item.active = false
            }
          })
      }
  }


detailsGetData(){
  var url = window.document.location.href.toString(); //获取的完整url
  var u = url.split("?");
  if(typeof(u[1]) == "string"){
    u = u[1].split("&");
    var get:any = {};
    for(var i in u){
        var j = u[i].split("=");
        get[j[0]] = j[1];
    }
    return get;
    } else {
    return {};
  }

}

 

changetimeData(response:any){

  this.timeList=[]
  var gwid:any = decodeURI(this.detailsGetData().gwId)

  var index:any = this.detailsGetData().index

  if(gwid == "undefined"){
    if(JSON.stringify(response.data.data) == "{}"){
      response.data.data = []
      this.timeList = response.data.data
    }else{
      var count:any;
      $.each(response.data.data,(i:any,n:any)=>{
        if(i == "batchNo"){
          count = n[0]
        }
      })
      $.each(response.data.data,(i:any,n:any)=>{
          if(i != "batchNo"){
              if( i == count){
                this.timeList.push(
                    {
                      title:i,
                      active:true,
                      workList:[]
                    }
                  )
              }else{
                this.timeList.push(
                  {
                    title:i,
                    active:false,
                    workList:[]
                  }
                )
              }
          setTimeout(()=>{
                $.each(n,(i2:any,n2:any)=>{
                  $.each(this.timeList,(i3:any,n3:any)=>{
                    if(n3.title == i){
                      n3.workList.push({
                        num:n2.name,
                        ok:n2.okRate,
                        isSelect:false,
                        id:n2.id,
                        stationId:n2.stationId,
                      })
                    }
                  })
                })
                $.each(  this.timeList,(i:any,n:any)=>{
                  $.each(n.workList,(i2:any,n2:any)=>{
                    if(n.active && i2 == 0){ 
                       n2.isSelect = true
                       this.TimeClick(i2,this.status,'')
                    }
                  })
               }) 
              },10)
          }
      })
    }
  }else{
    if(JSON.stringify(response.data.data) == "{}"){
      response.data.data = []
      this.timeList = response.data.data
    }else{
      var count:any;
      $.each(response.data.data,(i:any,n:any)=>{
          if(i == "batchNo"){
            count = n[0]
          }else{
              if( i == count){
                this.timeList.push(
                    {
                      title:i,
                      active:true,
                      workList:[]
                    }
                  )
              }else{
                this.timeList.push(
                  {
                    title:i,
                    active:false,
                    workList:[]
                  }
                )
              }
          setTimeout(()=>{
                $.each(n,(i2:any,n2:any)=>{
                  $.each(this.timeList,(i3:any,n3:any)=>{
                    if(n3.title == i){
                      n3.workList.push({
                        num:n2.name,
                        ok:n2.okRate,
                        isSelect:false,
                        id:n2.id,
                        stationId:n2.stationId,
                      })
                    }
                  })
                })
                $.each(  this.timeList,(i:any,n:any)=>{
                  $.each(n.workList,(i2:any,n2:any)=>{
                    if(n.active && n2.num == gwid){ 
                       n2.isSelect = true
                       this.TimeClick(i2,this.status,'')
                    }
                  })
               }) 
              },10)
          }
      })
    }


  }


  this.timeList.sort((a:any,b:any)=>{
    return b.title -a.title
  })

  console.log(this.timeList)
  var that = this


  $.each(this.timeList,function(i:any,n:any){
    that.appService.getData("/detection/business/detection/querySurplus","","post",{
          equipmentId:`${that.equipmentId}`,
          dataBeginTime:`${n.title}`,
      })
      .then(data=>{

        if(data.data.num == 0){
            n.isFinsh = true 
        }else{
          n.isFinsh = false 
        }
   
      })
      .catch(e=>{
        console.log(e)
      })

     
      // for (let index = 0; index < n.workList.length; index++) {
      //   const element = n.workList[index];
      //   console.log(element)
      // }
      setTimeout(()=>{

        $.each(n.workList,function(i2:any,n2:any){

       
          that.appService.getData("/detection/business/detection/querySurplus","","post",{     
            equipmentId:`${that.equipmentId}`,
            dataBeginTime:`${n.title}`,
            stationId:`${n2.stationId}`
          })
          .then(data=>{
  
         
            if(data.data.num == 0){
              n2.isFinsh = true 
            }else{
              n2.isFinsh = false 
            }
  
          })
          .catch(e=>{
  
            console.log(e)
  
          })
  
        })

      },10)

    

  })


  }


  

setZoom(){

    if(!this.isSetZoom){
      this.gMapArr.setZoom(this.size.width/(this.size.width/1228))
      this.isSetZoom = true
      $(".initLableSize").val("恢复原大小")
    }else{

      this.gMapArr.setZoom(this.size.width*2)
      this.isSetZoom = false
      $(".initLableSize").val("1：1")

    }
  
  }

creatDraw(){ 
var that = this
  setTimeout(()=>{
    let checkImgWidth = this.size

    this.zoom = checkImgWidth.width*2
    this.zoom1 = 50
    this.gMapArr= new AILabel.Map(`detailCanvas`,{zoom:checkImgWidth.width*2, cx: 0, cy: 0, zoomMax: checkImgWidth.width * 10, zoomMin: checkImgWidth.width / 10,  autoPan: true, drawZoom: true})
    var gFetureStyle = new AILabel.Style({strokeColor: '#0000FF', lineWeight: 1 ,opacity: 3});
    var imageLayer = new AILabel.Layer.Image(`img`,this.labelMap.ossKey, {w:checkImgWidth.width,h:checkImgWidth.height}, {zIndex:1});
 
    this.gMapArr.addLayer(imageLayer)

    this.gfeatureLayer= new AILabel.Layer.Feature(`feature`, {zIndex:3});
    this.gMapArr.addLayer(this.gfeatureLayer)

    const scaleControl = new AILabel.Control.Scale(
			'scale-control-id',
			{postion: {left: 10, top: 10}}
		);
		this.gMapArr.addControl(scaleControl);

this.gMapArr.setMode((this.activeMode||"pan"),gFetureStyle);
 var markPosition = JSON.parse(this.labelMap.markPosition)
this.dataArr1 = this.labelMap.markPosition
this.dataArr = JSON.parse(this.labelMap.markPosition)
if(markPosition != null && markPosition.length != 0){
 var featurePoint = markPosition
  $.each(featurePoint,(i1:any,n1:any)=>{
      if(n1.type == "rect"){
      var feature = new AILabel.Feature.Rect(n1.id, 
        n1.points, 
        {name:n1.data.name}, 
        n1.style,
        n1.position
      );
      this.gfeatureLayer.addFeature(feature)
    }else if(n1.type == 'polygon'){
      var feature = new AILabel.Feature.Polygon(n1.id, 
        n1.points, 
        {name:n1.data.name}, 
        n1.style,
        n1.position
      );
      this.gfeatureLayer.addFeature(feature)
    }
  })
}
this.gMapArr.events.on('geometryDrawDone',function(type:any,points:any){
      var timestamp = new Date().getTime()
        if(type == "rect"){
        var feature = new AILabel.Feature.Rect( `feature-${timestamp}`, 
            points, 
            {name:"123"}, 
            {strokeColor: '#00FF00', fillColor: '#0000FF', opacity: .3, lineWeight: 1}
          );
        }else if(type === 'polygon'){
          var feature = new AILabel.Feature.Polygon( `feature-${timestamp}`, 
          points, 
          {name:"123"}, 
          {strokeColor: '#00FF00', fillColor: '#0000FF', opacity: .3, lineWeight: 1},
          {edgeFixed: false}
        );
        }                       
          that.gfeatureLayer.addFeature(feature)

          
          that.dataArr = []
          $.each(that.gMapArr.oLayers[4].oFeatures,function(i:any,x:any){
            that.dataArr.push({
                  points:x.points,
                  style:x.style,
                  type:x.type,
                  data:x.data,
                  options:x.options,
                  id:x.id
            })
          })
      })

      that.gMapArr.events.on('geometryEditDone',(type:any, feature:any, newPoints:any) => {
          feature.update({points:newPoints});
          that.gfeatureLayer.addFeature(feature)
          that.dataArr = []
          $.each(that.gMapArr.oLayers[4].oFeatures,function(i:any,x:any){
            that.dataArr.push({
                  points:x.points,
                  style:x.style,
                  type:x.type,
                  data:x.data,
                  options:x.options,
                  id:x.id
            })
          })
      })

      that.gMapArr.events.on('featureUpdated',(feature: any, shape: any) => {
        // console.log(feature)
        // feature.update({points:newPoints});
        // that.gfeatureLayer.addFeature(feature)
        // that.dataArr = []
        // $.each(that.gMapArr.oLayers[4].oFeatures,function(i:any,x:any){
        //   that.dataArr.push({
        //         points:x.points,
        //         style:x.style,
        //         type:x.type,
        //         data:x.data,
        //         options:x.options,
        //         id:x.id
        //   })
        // })
    })
      
   that.gMapArr.events.on("featureSelected",(feature:any) => {
        window.addEventListener("keydown",function(e:any){
            if(e.keyCode == 46){
              if(feature.activeStatus){
                that.gfeatureLayer.removeFeatureById(feature.id)
              }
                that.dataArr = []
                $.each(that.gMapArr.oLayers[4].oFeatures,function(i:any,x:any){
                  that.dataArr.push({
                        points:x.points,
                        style:x.style,
                        type:x.type,
                        data:x.data,
                        options:x.options,
                        id:x.id
                  })
                })
            }
        })
      })     
  window.gMapArr = this.gMapArr
  window.btnItems = this.btnItems
  window.activeMode = this.activeMode

  $("#scale-control-id").css("display","none")
    var scale:any =Math.ceil($("#img-inner-container").css("width").match(/[0-9]+/)[0]*1/$("#img-inner-container img")[0].naturalWidth*100)
    that.zoom1 = scale
    var width = (that.size.width)/2
    // 1218.5 1293
    $("#scale-control-id").bind('DOMNodeInserted', function(e:any) {

     var scale:any = Math.ceil($("#img-inner-container").css("width").match(/[0-9]+/)[0]*1/$("#img-inner-container img")[0].naturalWidth*100)
    //  
      that.zoom1 = scale
      
      // console.log(that.size.width,$(e.target).html().split('/')[0])

    });

  },510)
}


changeSelect(i:any,e:any){

  var that = this
    this.btnItems.map((x:any)=>{
      x.isSelect = false
    })
      this.btnItems[i].isSelect = true

      $("#dsh").find(`option:contains()`).attr("selected",false);
      $("#dsh").find(`option:contains(${this.btnItems[i].text})`).attr("selected",true);
      var artificialCheckStatus

      if(e.type == "mousedown") {
       artificialCheckStatus= e.srcElement.defaultValue.match(/[A-Za-z]+/)[0].toLowerCase()
      }
      

      this.appService.getData("/detection/business/detection/taggingImage","","post",{
        markPosition:`${JSON.stringify(this.dataArr)}`,
        id:this.labelMap.id,
        lockVersion:this.labelMap.lockVersion,
        artificialCheckStatus:artificialCheckStatus,
        })
      .then(function(reponse:any){
        layui.use('layer', function (this:any) {
          rightAlert(reponse.data.msg)
        })
        setTimeout(()=>{

          $.each( that.timeList,(i:any,n:any)=>{
            $.each(n.workList,(i2:any,n2:any)=>{
              if(n2.isSelect){
                var status = $("#dsh").val();
                if(status == '全部'){
                  status = ''
                }
                that.TimeClick(i2,status,'change')
              }
            })
         })

        },500)
     
      })
      .catch((e:any)=>{
  
        console.log(e)
  
      })

  }
changeSelect1(i:any,e:any){
      this.btnItems.map((x:any)=>{
        x.isSelect = false
      })
        $("#dsh").find(`option:contains()`).attr("selected",false);
  }


pageIndexChange1(e:any){
var that = this
var num1 = this.pageNum
    if((this.dataArr || this.dataArr1) &&  JSON.stringify(this.dataArr) != this.dataArr1 && this.pageAble ){
      var num = e.path[1].innerText*1
      layui.use('layer', function (this:any) {
        this.layer.confirm("数据改变了,但没有保存,是否要继续？",{ 
          btn:['确认','取消'],
          icon:3,
          title: '提示',
          success:function(){
            this.enterEsc = function (event:any):any {
              if (event.keyCode === 13) {
                $(".layui-layer-btn0").click();
                return false; //阻止系统默认回车事件
              }else if(event.keyCode == 27){
                $(".layui-layer-btn1").click();
                return false; 
              }
            };
            $(document).on('keydown',this.enterEsc); //监听键盘事件，关闭层
          },
          end:function(){
            $(document).off('keydown',this.enterEsc); //解除键盘关闭事件
          }
        },function(index:any){
         that.pageNum = num
         $.each( that.timeList,(i:any,n:any)=>{
           $.each(n.workList,(i2:any,n2:any)=>{
             if(n2.isSelect){
               that.TimeClick(i2,"",'change')
             }
           })
        })
        $(".ant-pagination li").removeClass("ant-pagination-item-active")
        $(".ant-pagination li").attr("ng-reflect-active","false")
        $(".ant-pagination li").eq(num).attr("ng-reflect-active","true")
        $(".ant-pagination li").eq(num).addClass("ant-pagination-item-active")
        window.saveLabel()
         layui.layer.close(index)
       },function(index:any){
         that.pageAble =true
         that.pageNum = num1
         that.pageIndexChangeFlag
         $(".ant-pagination li").removeClass("ant-pagination-item-active")
         $(".ant-pagination li").attr("ng-reflect-active","false")
         $(".ant-pagination li").eq(num1).attr("ng-reflect-active","true")
         $(".ant-pagination li").eq(num1).addClass("ant-pagination-item-active")
       })
     })
    }
  }

pageIndexChange(num:any){
  var num1 = this.pageNum
  var that = this
this.pageAble = false
  if((this.dataArr || this.dataArr1) && JSON.stringify(this.dataArr) != this.dataArr1 && this.pageIndexChangeFlag){
    layui.use('layer', function (this:any) {
       this.layer.confirm("数据改变了,但没有保存,是否要继续？",{ 
        btn:['确认','取消'],
        icon:3,
        title: '提示',
        success:function(){
          this.enterEsc = function (event:any):any {
            if (event.keyCode === 13) {
              $(".layui-layer-btn0").click();
              return false; //阻止系统默认回车事件
            }else if(event.keyCode == 27){
              $(".layui-layer-btn1").click();
              return false; 
            }
          };
          $(document).on('keydown',this.enterEsc); //监听键盘事件，关闭层
        },
        end:function(){
          $(document).off('keydown',this.enterEsc); //解除键盘关闭事件
        }
      },function(index:any){
        that.pageNum = num
        $.each(  that.timeList,(i:any,n:any)=>{
          $.each(n.workList,(i2:any,n2:any)=>{
            if(n2.isSelect){
              var status = $("#dsh").val();
              if(status == '全部'){
                status = ''
              }
              that.TimeClick(i2,status,'change')
            }
          })
       })
       $(".ant-pagination li").removeClass("ant-pagination-item-active")
       $(".ant-pagination li").attr("ng-reflect-active","false")
       $(".ant-pagination li").eq(num).attr("ng-reflect-active","true")
       $(".ant-pagination li").eq(num).addClass("ant-pagination-item-active")
       window.saveLabel()
        layui.layer.close(index)
      },function(index:any){
        that.pageAble =true
        that.pageNum = num1
        that.pageIndexChangeFlag = true
        $(".ant-pagination li").removeClass("ant-pagination-item-active")
        $(".ant-pagination li").attr("ng-reflect-active","false")

        $(".ant-pagination li").eq(num1).attr("ng-reflect-active","true")
        $(".ant-pagination li").eq(num1).addClass("ant-pagination-item-active")

        // console.log(,num)

      })

    })
  
  }else{
    this.pageNum = num
    this.pageIndexChangeFlag = true
    $.each(  this.timeList,(i:any,n:any)=>{
      $.each(n.workList,(i2:any,n2:any)=>{
        if(n2.isSelect){
          var status = $("#dsh").val();
          if(status == '全部'){
            status = ''
          }
           this.TimeClick(i2,status,'change')
        }
      })
   })
  } 
}



TimeClick(ia:any,status:any,t:any){
  var that = this
  this.roiStatus.jx= false
  this.roiStatus.dbx= false
  var jxDom:any = document.querySelector(".jx")
  var dbxDom:any = document.querySelector(".dbx")


  if(this.activeMode == "drawRect"){

    jxDom.style.background = "rgb(102, 182, 229)"
    dbxDom.style.background = "url('./assets/detailsImg/dbx.png') no-repeat"

  }else if(this.activeMode == "drawPolygon"){

    jxDom.style.background = "url('./assets/detailsImg/jx.png') no-repeat"
    dbxDom.style.background = "url('./assets/detailsImg/dbxAction.png') no-repeat"

  }else{

    jxDom.style.background = "url('./assets/detailsImg/jx.png') no-repeat"
    dbxDom.style.background = "url('./assets/detailsImg/dbx.png') no-repeat"

  }

  // jxDom.style.background = "url('jx.png') no-repeat"
  // dbxDom.style.background = "url('dbx.png') no-repeat"

  if(t != "userChange"){
    if(t == ""){
      this.pageNum = 1 
    }else if( t == "dshChange"){
      this.pageNum = 1 
    }else if(t == "change"){
  
    }

this.leftSelectIa = ia;
$.each(this.timeList,(i:any,n:any)=>{
    $.each(n.workList,(i2:any,n2:any)=>{
        n2.isSelect = false
        if(n.active && i2 == ia){
          n2.isSelect = true
          this.appService.getData("/detection/business/detection/querySurplus","","post",{
            equipmentId:`${this.equipmentId}`,
            dataBeginTime:`${n.title}`,
            stationId:`${n2.stationId}`,
            machineCheckStatus:status
          })
          .then((response:any)=>{
           this.lastImg = response.data.num 
          })
          .catch((e:any)=>{
            console.log(e)
          })

            let text=`pageNum=${this.pageNum}&pageSize=${this.pageSize}`
            this.appService.getData("/detection/business/detection/queryPageOfDetectionInfo?",text,"post",{
              equipmentId:`${this.equipmentId}`,
              dataBeginTime:`${n.title}`,
              stationId:`${n2.stationId}`,
              machineCheckStatus:status,
              pageNum:this.pageNum,
              pageSize:this.pageSize
            })
            .then((response)=>{
              if(response.data.rows[0] && response.data.rows[0].length != 0 ){
                this.labelMap = response.data.rows[0]
              }

              if(!that.labelMap.artificialCheckStatus){
                that.labelMap.artificialCheckStatus = "未确认"
              }else{
                that.labelMap.artificialCheckStatus  = '确认'+that.labelMap.artificialCheckStatus
              }
              if(this.labelMap && this.labelMap.length !=0 && response.data.rows[0] && response.data.rows[0].length != 0){
                this.total = response.data.total
                if(t != "saveData"){
                  this.checkImgWidth(this.labelMap.ossKey)
        
                  this.creatDraw() 
                  
             
                }
               
              }else{
                
                this.labelMap={
                  machineCheckStatus:"",
                  artificialCheckStatus:""
                }
                $("#detailCanvas").empty()
                this.total  = 0
                layui.use('layer', function (this:any) {
                  rightAlert("没有查询到相关图片")
                })
              }
            })
            .catch((e)=>{
              this.router.navigate([`/login`])
            })
       }
    })
})
}else{
this.pageNum = 1 
if((this.dataArr || this.dataArr1) &&  JSON.stringify(this.dataArr) != this.dataArr1){
      layui.use('layer', function (this:any) {
        this.layer.confirm("数据改变了,但没有保存,是否要继续？",{ 
          btn:['确认','取消'],
          icon:3,
          title: '提示',
          success:function(){
            this.enterEsc = function (event:any):any {
              if (event.keyCode === 13) {
                $(".layui-layer-btn0").click();
                return false; //阻止系统默认回车事件
              }else if(event.keyCode == 27){
                $(".layui-layer-btn1").click();
                return false; 
              }
            };
            $(document).on('keydown',this.enterEsc); //监听键盘事件，关闭层
          },
          end:function(){
            $(document).off('keydown',this.enterEsc); //解除键盘关闭事件
          }
        },function(index:any){
        that.pageNum = 1 
        that.leftSelectIa = ia;
    $.each(that.timeList,(i:any,n:any)=>{
    $.each(n.workList,(i2:any,n2:any)=>{
        n2.isSelect = false
        if(n.active && i2 == ia){
          n2.isSelect = true
          that.appService.getData("/detection/business/detection/querySurplus","","post",{
            equipmentId:`${that.equipmentId}`,
            dataBeginTime:`${n.title}`,
            stationId:`${n2.stationId}`,
            machineCheckStatus:status
          })
          .then((response:any)=>{
            that.lastImg = response.data.num 
          })
          .catch((e:any)=>{
            console.log(e)
          })

            let text=`pageNum=${that.pageNum}&pageSize=${that.pageSize}`
            that.appService.getData("/detection/business/detection/queryPageOfDetectionInfo?",text,"post",{
              equipmentId:`${that.equipmentId}`,
              dataBeginTime:`${n.title}`,
              stationId:`${n2.stationId}`,
              machineCheckStatus:status,
              pageNum:that.pageNum,
              pageSize:that.pageSize
            })
            .then((response)=>{
           
               if(response.data.rows[0] && response.data.rows[0].length != 0 ){
                that.labelMap = response.data.rows[0]
              }
              if(!that.labelMap.artificialCheckStatus){
                that.labelMap.artificialCheckStatus = "未确认"
              }else{
                that.labelMap.artificialCheckStatus  = '确认'+that.labelMap.artificialCheckStatus
              }
              
              if(that.labelMap && that.labelMap.length !=0 && response.data.rows[0] && response.data.rows[0].length != 0){
                that.total = response.data.total
                if(t != "saveData"){
                  that.checkImgWidth(that.labelMap.ossKey)
                  that.creatDraw()  
                }
               
              }else{
                that.labelMap={
                  machineCheckStatus:"",
                  artificialCheckStatus:""
                }

                that.leftSelectIa = ia;
                $.each(that.timeList,(i:any,n:any)=>{
                    $.each(n.workList,(i2:any,n2:any)=>{
                        n2.isSelect = false
                        if(n.active && i2 == ia){
                          n2.isSelect = true
                          that.appService.getData("/detection/business/detection/querySurplus","","post",{
                            equipmentId:`${that.equipmentId}`,
                            dataBeginTime:`${n.title}`,
                            stationId:`${n2.stationId}`,
                            machineCheckStatus:status
                          })
                          .then((response:any)=>{
                            that.lastImg = response.data.num 
                          })
                          .catch((e:any)=>{
                            console.log(e)
                          })
                
                            let text=`pageNum=${that.pageNum}&pageSize=${that.pageSize}`
                            that.appService.getData("/detection/business/detection/queryPageOfDetectionInfo?",text,"post",{
                              equipmentId:`${that.equipmentId}`,
                              dataBeginTime:`${n.title}`,
                              stationId:`${n2.stationId}`,
                              machineCheckStatus:status,
                              pageNum:that.pageNum,
                              pageSize:that.pageSize
                            })
                            .then((response)=>{
                           
                              if(response.data.rows[0] && response.data.rows[0].length != 0 ){
                                that.labelMap = response.data.rows[0]
                              }
                              if(!that.labelMap.artificialCheckStatus){
                                that.labelMap.artificialCheckStatus = "未确认"
                              }else{
                                that.labelMap.artificialCheckStatus  = '确认'+that.labelMap.artificialCheckStatus
                              }

                              if(that.labelMap && that.labelMap.length !=0 && response.data.rows[0] && response.data.rows[0].length != 0 ){
                                that.total = response.data.total
                                if(t != "saveData"){
                                  that.checkImgWidth(that.labelMap.ossKey)
                                  that.creatDraw()  
                                }
                               
                              }else{

                                that.labelMap={
                                  machineCheckStatus:"",
                                  artificialCheckStatus:""
                                }

                                $("#detailCanvas").empty()
                                that.total  = 0
                                layui.use('layer', function (this:any) {
                                  rightAlert("没有查询到相关图片")
                                })
                              }
                            })
                       }
                    })
                })
                
              }
            })
       }
    })
})
window.saveLabel()
         layui.layer.close(index)
       },function(index:any){
       })
     })
    }else{


      that.leftSelectIa = ia;
      $.each(that.timeList,(i:any,n:any)=>{
          $.each(n.workList,(i2:any,n2:any)=>{
              n2.isSelect = false
              if(n.active && i2 == ia){
                n2.isSelect = true
                that.appService.getData("/detection/business/detection/querySurplus","","post",{
                  equipmentId:`${that.equipmentId}`,
                  dataBeginTime:`${n.title}`,
                  stationId:`${n2.stationId}`,
                  machineCheckStatus:status
                })
                .then((response:any)=>{
                  that.lastImg = response.data.num 
                })
                .catch((e:any)=>{
                  console.log(e)
                })
      
                  let text=`pageNum=${that.pageNum}&pageSize=${that.pageSize}`
                  that.appService.getData("/detection/business/detection/queryPageOfDetectionInfo?",text,"post",{
                    equipmentId:`${that.equipmentId}`,
                    dataBeginTime:`${n.title}`,
                    stationId:`${n2.stationId}`,
                    machineCheckStatus:status,
                    pageNum:that.pageNum,
                    pageSize:that.pageSize
                  })
                  .then((response)=>{
                 
                    if(response.data.rows[0] && response.data.rows[0].length != 0 ){
                      that.labelMap = response.data.rows[0]
                    }

                    if(!that.labelMap.artificialCheckStatus){

                      that.labelMap.artificialCheckStatus = "未确认"

                    }else{
                      that.labelMap.artificialCheckStatus  = '确认'+that.labelMap.artificialCheckStatus
                    }
                    
                    if(that.labelMap && that.labelMap.length !=0 && response.data.rows[0] && response.data.rows[0].length != 0){
                      that.total = response.data.total
                      if(t != "saveData"){
                        that.checkImgWidth(that.labelMap.ossKey)
                        that.creatDraw()  
                      }
                     
                    }else{
                      
                      that.labelMap={
                        machineCheckStatus:"",
                        artificialCheckStatus:""
                      }

                      $("#detailCanvas").empty()
                      this.total  = 0
                      layui.use('layer', function (this:any) {
                        rightAlert("没有查询到相关图片")
                      })
                    }
                  })
             }
          })
      })

    }

 
  }

  $.each($(".ant-pagination-item a"),function(i2:any,n2:any){

      $(".ant-pagination-item a")[i2].style.color ="#fff"
   

})
 

$.each(that.timeList,function(i:Number,n:any){
  if(n.active){

    $.each(n.workList,function(i2:Number,n2:any){
      if(n2.isSelect){

   var thePageArr:any = [];

   setTimeout(() => {

    $.each($(".ant-pagination-item a"),function(i2:any,n2:any){

      thePageArr.push($(".ant-pagination-item a")[i2].innerText*1)

      })



 

      $.each(thePageArr,function(i3:any,n3:any){
          let text=`pageNum=${n3}&pageSize=1`
        
          that.appService.getData("/detection/business/detection/queryPageOfDetectionInfo?",text,"post",{
            equipmentId:`${that.equipmentId}`,
            dataBeginTime:`${n.title}`,
            stationId:`${n2.stationId}`,
            machineCheckStatus:status||"",
            pageNum:that.pageNum,
            pageSize:that.pageSize
          })
          .then((data:any)=>{
        
            let allData = data.data.rows


            if(allData[0].artificialCheckStatus){

                $.each($(".ant-pagination-item a"),function(i4:any,n4:any){

             
                    if(n4.innerText == n3){

                      $(".ant-pagination-item a")[i4].style.color ="red"

                    }

                })

            }

          })
          .catch((e:Error)=>{

              console.log(e)
          })

      })
     
   }, 200);

          



      }
    })
  }
})

  
  }

dshchange(x:any){

}

ngAfterViewInit(): void {
  var that:any = this
  $(".initLableSize").mousedown(()=>{
    $(".initLableSize").addClass("aaa")
  }).mouseup(()=>{
    $(".initLableSize").removeClass("aaa")
  })

var dshvla:any = $("#dsh").val()

if(dshvla == "全部"){
  dshvla = ""
}

var previous:any;



 
$("#dsh").on('focus',function(value:any){
  previous = value.target.selectedIndex
}).change((x:any)=>{
  $.each(this.timeList,(i:any,n:any)=>{
    $.each(n.workList,(i2:any,n2:any)=>{
      if(n.active && n2.isSelect){
         if(x.target[x.target.selectedIndex].value == "全部"){
            x.target[x.target.selectedIndex].value = ""
         }
         this.status = x.target[x.target.selectedIndex].value
         if((this.dataArr || this.dataArr1) &&  JSON.stringify(this.dataArr) != this.dataArr1){
          layui.use('layer', function (this:any) {
            this.layer.confirm("数据改变了,但没有保存,是否要继续？",{ 
              btn:['确认','取消'],
              icon:3,
              title: '提示',
              success:function(){
                this.enterEsc = function (event:any):any {
                  if (event.keyCode === 13) {
                    $(".layui-layer-btn0").click();
                    return false; //阻止系统默认回车事件
                  }else if(event.keyCode == 27){
                    $(".layui-layer-btn1").click();
                    return false; 
                  }
                };
                $(document).on('keydown',this.enterEsc); //监听键盘事件，关闭层
              },
              end:function(){
                $(document).off('keydown',this.enterEsc); //解除键盘关闭事件
              }
            },function(index:any){
              that.TimeClick(i2,x.target[x.target.selectedIndex].value,'dshChange')
              window.saveLabel()
             layui.layer.close(index)
           },function(index:any){
             console.log()
            $('#dsh').val(x.target[previous].value);
           })
         })
        }else{

          that.TimeClick(i2,x.target[x.target.selectedIndex].value,'dshChange')
        }
          
      }
    })
 }) 
})
// http://127.0.0.1:38083/detection/business/detection/queryDistinguishResult

this.changeOptionData()

var previous1:any;

$(".select").on('focus',function(value:any){
  previous1 = value.target.selectedIndex
})
.change((x:any)=>{
  if((this.dataArr || this.dataArr1) &&  JSON.stringify(this.dataArr) != this.dataArr1){
    layui.use('layer', function (this:any) {
      this.layer.confirm("数据改变了,但没有保存,是否要继续？",{ 
        btn:['确认','取消'],
        icon:3,
        title: '提示',
        success:function(){
          this.enterEsc = function (event:any):any {
            if (event.keyCode === 13) {
              $(".layui-layer-btn0").click();
              return false; //阻止系统默认回车事件
            }else if(event.keyCode == 27){
              $(".layui-layer-btn1").click();
              return false; 
            }
          };
          $(document).on('keydown',this.enterEsc); //监听键盘事件，关闭层
        },
        end:function(){
          $(document).off('keydown',this.enterEsc); //解除键盘关闭事件
        }
      },function(index:any){
        that.selectChange(x)
        window.saveLabel()
        layui.layer.close(index)
     },function(index:any){
    
      $('.select').val(x.target[previous1].value);
     })
   })
  }else{
    that.selectChange(x)
  }
})
   
this.activatedRoute.queryParams.subscribe((value:any)=>{
    var value1 = value.index*1
    this.equipmentId=value1;
    this.appService.getData("/detection/business/station/queryStationStatisticsByDataTime/",value1,"get",{})
      .then(function (response:any) {
  
        if(response.data.code == 401 ){
          that.router.navigate([`/login`])
        }
          that.changetimeData(response)
        })
      .catch(function (error) {
            console.log(error);
      })
})


window.addEventListener("keyup",this.keyUp)

window.addEventListener("keydown",this.keyDown)   

window.jxClick = function jxClick(){
  var jxDom:any = document.querySelector(".jx")
  var dbxDom:any = document.querySelector(".dbx")
    if(that.roiStatus.jx == false){
      that.roiStatus.jx = true
      that.roiStatus.dbx = false
      jxDom.style.background = "#66b6e5"

      dbxDom.style.background = "url('./assets/detailsImg/dbx.png') no-repeat"
      // dbxDom.style.background = "url('dbx.png') no-repeat"

      that.changeMode(that.gMapArr,"jx")
    }else{
      that.roiStatus.jx = false

      jxDom.style.background = "url('./assets/detailsImg/jx.png') no-repeat"
      // jxDom.style.background = "url('jx.png') no-repeat"

      if(!that.roiStatus.dbx){
        that.changeMode(that.gMapArr,"aaa")
      }
    }
  }

  window.changeSelect   = function changeSelect(i:any,e:any){

   
      that.btnItems.map((x:any)=>{
        x.isSelect = false
      })
      that.btnItems[i].isSelect = true
  
        $("#dsh").find(`option:contains()`).attr("selected",false);
        $("#dsh").find(`option:contains(${that.btnItems[i].text})`).attr("selected",true);
       
        var artificialCheckStatus
  
        if(e.type) {
         artificialCheckStatus= e.srcElement.defaultValue.match(/[A-Za-z]+/)[0].toLowerCase()
        }else{
          artificialCheckStatus=e
        }
        
        
        
        that.appService.getData("/detection/business/detection/taggingImage","","post",{
          markPosition:`${JSON.stringify(that.dataArr)}`,
          id:that.labelMap.id,
          lockVersion:that.labelMap.lockVersion,
          artificialCheckStatus:artificialCheckStatus,
          })
        .then(function(reponse:any){
      
          layui.use('layer', function (this:any) {
            rightAlert(reponse.data.msg)
          })
          setTimeout(()=>{
  
            $.each( that.timeList,(i:any,n:any)=>{
              $.each(n.workList,(i2:any,n2:any)=>{
                if(n2.isSelect){
                  var status = $("#dsh").val();
                  if(status == '全部'){
                    status = ''
                  }
                  that.TimeClick(i2,status,'change')
                }
              })
           })
  
          },500)
       
        })
        .catch((e:any)=>{
    
          console.log(e)
    
        })
      
   
    }

window.dbxClick =function dbxClick(){
    var jxDom:any = document.querySelector(".jx")
    var dbxDom:any = document.querySelector(".dbx")
  if(that.roiStatus.dbx == false){
    that.roiStatus.dbx = true
    that.roiStatus.jx = false

    jxDom.style.background = "url('./assets/detailsImg/jx.png') no-repeat"
    dbxDom.style.background = "url('./assets/detailsImg/dbxAction.png') no-repeat"
    // jxDom.style.background = "url('jx.png') no-repeat"
    // dbxDom.style.background = "url('../../../assets/detailsImg/dbxAction.png') no-repeat"

    that.changeMode(that.gMapArr,"dbx")
  }else{
    that.roiStatus.dbx = false

    dbxDom.style.background = "url('./assets/detailsImg/dbx.png') no-repeat"
    // dbxDom.style.background = "url('dbx.png') no-repeat"

    if(!that.roiStatus.jx){
      that.changeMode(that.gMapArr,"aaa")
    }
  }
}
  // http://127.0.0.1:38083/detection/business/detection/taggingImage
window.saveLabel =function saveLabel(){

  that.dataArr1 = []
  $.each(that.gMapArr.oLayers[4].oFeatures,function(i:any,x:any){
    that.dataArr1.push({
          points:x.points,
          style:x.style,
          type:x.type,
          data:x.data,
          options:x.options,
          id:x.id
    })
  })

  that.dataArr1 = JSON.stringify(that.dataArr1)

$.each(that.timeList,(i:any,n:any)=>{
    $.each(n.workList,(i2:any,n2:any)=>{
      if(n.active && n2.isSelect){
        that.TimeClick(i2,"",'saveData')
      }
    })
 }) 


  that.appService.getData("/detection/business/detection/taggingImage","","post",{
      markPosition:`${JSON.stringify(that.dataArr)}`,
      id:that.labelMap.id,
      lockVersion:that.labelMap.lockVersion,
      })
    .then(function(reponse:any){
      layui.use('layer', function (this:any) {
        rightAlert(reponse.data.msg)
      })
    })
    .catch((e:any)=>{

      console.log(e)

    })
  }


window.pdlabelDataChange = function pdlabelDataChange(num:any){
      that.pageIndexChangeFlag = false
      if((that.dataArr || that.dataArr1) && JSON.stringify(that.dataArr) != that.dataArr1){
   
        layui.use('layer', function (this:any) {
          this.pageAble =true
           this.layer.confirm("数据改变了,但没有保存,是否要继续？",{ 
            btn:['确认','取消'],
            icon:3,
            title: '提示',
            success:function(){
              this.enterEsc = function (event:any):any {
                if (event.keyCode === 13) {
                  $(".layui-layer-btn0").click();
                  return false; //阻止系统默认回车事件
                }else if(event.keyCode == 27){
                  $(".layui-layer-btn1").click();
                  return false; 
                }
              };
              $(document).on('keydown',this.enterEsc); //监听键盘事件，关闭层
            },
            end:function(){
              $(document).off('keydown',this.enterEsc); //解除键盘关闭事件
            }
          },function(index:any){
             if(num == 39){
              $(".ant-pagination-next").click()
              if(that.pageNum== that.total) {

              layui.use('layer', function (this:any) {
                    rightAlert("已经是最后一张了，无法再翻页了！")
                  })

              }
             }else if(num == 37){
               
              $(".ant-pagination-prev").click()

              if(that.pageNum == 1) {

                layui.use('layer', function (this:any) {
                      rightAlert("当前是第一张，无法向前翻页！")
                    })
                    
                }
             }
             window.saveLabel()
            layui.layer.close(index)
          },function(index:any){
            that.pageIndexChangeFlag = true
          })
        })
      }else{
        if(num == 39){
          if(that.pageNum == that.total) {

            layui.use('layer', function (this:any) {
                  rightAlert("已经是最后一张了，无法再翻页了！")
                })
                return
            }
          $(".ant-pagination-next").click()
         }else if(num == 37){
          if(that.pageNum == 1) {

            layui.use('layer', function (this:any) {
                  rightAlert("当前是第一张，无法向前翻页！")
                })
                return
            }
          $(".ant-pagination-prev").click()
         }
      }
    }

// setTimeout(()=>{

// },900)






  
}


selectChange(x:any){
var that = this
  var text = $(x)[0].target.options[$(x)[0].target.options.selectedIndex].attributes[1].value
  this.equipmentId = $(x)[0].target.options[$(x)[0].target.options.selectedIndex].attributes[1].value
  this.appService.getData("/detection/business/station/queryStationStatisticsByDataTime/",text,"get",{})
  .then(function (response:any) {
    $("#detailCanvas").empty()
    if(response.data.data.batchNo){
      that.changetimeData(response)
    }else{
      that.timeList = []
      that.total  = 0
      layui.use('layer', function (this:any) {
        rightAlert("没有查询到相关图片")
      })
    }
    })
  .catch(function (error) {
        console.log(error);
  })

}


keyUp(e:any){
  var that = this
  var ctrlKey = e.ctrlKey || e.metaKey;
  if(e.keyCode == 32){
    this.gMapArr.setMode(this.activeMode||"pan");
  }else if(e.keyCode == 83 && ctrlKey){
    e.preventDefault()
  }else if(e.keyCode ==49 || e.keyCode ==97 || e.keyCode ==50|| e.keyCode ==98|| e.keyCode ==51|| e.keyCode ==99){
    this.btnItems.map((x:any)=>{
      x.isSelect = false
    })
      $("#dsh").find(`option:contains()`).attr("selected",false);
  }
}




keyDown(e:any){
 
  var ctrlKey = e.ctrlKey || e.metaKey;
    if(e.keyCode == 32){
      this.gMapArr.setMode('pan');
    }else if(e.keyCode == 39){
      window.pdlabelDataChange(39)
    }else if(e.keyCode == 37){
      window.pdlabelDataChange(e.keyCode)
    }else if(e.keyCode == 77){
      this.jxClick()
    }else if(e.keyCode == 76){
      this.dbxClick()
    }else if(e.keyCode == 107 && ctrlKey){
      e.preventDefault()
      this.zoom= this.zoom-100
      this.gMapArr.zoomIn()
    }else if(e.keyCode == 109 && ctrlKey){
      e.preventDefault()
      this.zoom= this.zoom+100
      this.gMapArr.zoomOut()
    } else if(e.keyCode == 83 && ctrlKey){
      e.preventDefault()
      window.saveLabel()
    }else if(e.keyCode ==49 || e.keyCode ==97){
      this.changeSelect(0,"ok")
    }else if(e.keyCode ==50 || e.keyCode ==98){
      this.changeSelect(1,"ng")
    }else if(e.keyCode ==51 || e.keyCode ==99){
      this.changeSelect(2,"pass")
    }
}

checkImgWidth(fileUrl:any) {
let img = new Image()
img.src = fileUrl
setTimeout(()=>{
if(img.complete){
  this.size.width = img.width;
  this.size.height = img.height
}else{

  setTimeout(()=>{
  
    this.size.width = img.width;
    this.size.height = img.height
    console.log(this.size.width)
  },500) 
}
},500) 

}



topClick(e:any){
    if(this.roiStatus.jx==true || this.roiStatus.dbx == true){
      if(this.roiStatus.jx==true){
      }
    }
  }


changeMode(gMap:any,mode:any){
  const gFetureStyle:any = new AILabel.Style({strokeColor: '#0000FF', lineWeight: 1 ,opacity: 1});
          if(mode == "jx"){
            gMap.setMode('drawRect',gFetureStyle);
            this.activeMode = 'drawRect'
          window.activeMode = 'drawRect'
          }else if(mode == "dbx"){
            gMap.setMode('drawPolygon',gFetureStyle);
            this.activeMode = 'drawPolygon'
            window.activeMode = 'drawPolygon'
          }else{
            gMap.setMode('pan',gFetureStyle);
            this.activeMode = 'pan'
            window.activeMode = 'pan'
    }
}


jxClick(){
      var jxDom:any = document.querySelector(".jx")
      var dbxDom:any = document.querySelector(".dbx")
        if(this.roiStatus.jx == false){
          this.roiStatus.jx = true
          this.roiStatus.dbx = false
          jxDom.style.background = "#66b6e5"

          dbxDom.style.background = "url('./assets/detailsImg/dbx.png') no-repeat"
          // dbxDom.style.background = "url('dbx.png') no-repeat"

          this.changeMode(this.gMapArr,"jx")
        }else{
          this.roiStatus.jx = false

          jxDom.style.background = "url('./assets/detailsImg/jx.png') no-repeat"
          // jxDom.style.background = "url('jx.png') no-repeat"

          if(!this.roiStatus.dbx){
            this.changeMode(this.gMapArr,"aaa")
      }
    }
}


dbxClick(){
        var jxDom:any = document.querySelector(".jx")
        var dbxDom:any = document.querySelector(".dbx")
      if(this.roiStatus.dbx == false){
        this.roiStatus.dbx = true
        this.roiStatus.jx = false

        jxDom.style.background = "url('./assets/detailsImg/jx.png') no-repeat"
        dbxDom.style.background = "url('./assets/detailsImg/dbxAction.png') no-repeat"
        // jxDom.style.background = "url('jx.png') no-repeat"
        // dbxDom.style.background = "url('../../../assets/detailsImg/dbxAction.png') no-repeat"

        this.changeMode(this.gMapArr,"dbx")
      }else{
        this.roiStatus.dbx = false

        dbxDom.style.background = "url('./assets/detailsImg/dbx.png') no-repeat"
        // dbxDom.style.background = "url('dbx.png') no-repeat"

        if(!this.roiStatus.jx){
          this.changeMode(this.gMapArr,"aaa")
        }
      }
    }
}
