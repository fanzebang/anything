import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

//swiper
import Swiper from 'swiper';
import SwiperCore, { Virtual,Pagination,Autoplay } from 'swiper/core';

// install Swiper modules
SwiperCore.use([Virtual,Pagination,Autoplay]);

//echarts
import * as echarts from 'echarts';

//html2canvas
import html2canvas from "html2canvas";

//jquery
declare var $:any;
// import * as $ from "jquery";

// homeserve
import { HomeService } from '../../home.service';

import { AppService } from 'src/app/app.service';
import axios from 'axios';
 

@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.scss']
})
export class CenterComponent implements OnInit {

  public defects:any=[
    {
      text:"镜筒缺陷",
      img:"assets/homeImg/1.jpg",
    },
    {
      text:"支架缺陷",
      img:"assets/homeImg/1.jpg",
    },
    {
      text:"摄像头缺陷",
      img:"assets/homeImg/1.jpg",
    }
  ]
  public btnList:any=[
    {
      value:"天",
      isSelect:false,
      countNum:1,
    },
    {
      value:"周",
      isSelect:false,
      countNum:7,
    },
    {
      value:"月",
      isSelect:true,
      countNum:30,
    }
  ]

  public array:any = [
 
  ];

  public items:any = [


  ];

  public xData = [];
  public yData = [];

  pieData:any = {
  
  };

  activeIndex:any;

  public certifySwiper:any;

  public certifySwiper1:any;

  constructor(private HomeService:HomeService,private router:Router,private appService:AppService) { 


  }
  
  ngOnInit(): void {
 
    this.appService.getData("/detection/business/equipment/queryEquipmentPageOfInfo","","post",{})
    .then((response)=>{
      this.changeTopData(response.data.rows)
    })
    .catch((e)=>{
      this.router.navigate([`/login`])
      console.log(e)
    })
 
}

  changeTopData(data:any){
      
    

    if(data.length != this.array.length){


      this.array = []
      var storageItem = [];

      for (let i = 0; i < data.length; i++) {
        const element = data[i];
        this.array.push(
          {
            status:element.status,
            img:"assets/homeImg/1.jpg",
            id:element.id
          }
        )

        var value1 = element.num*element.okRate*0.01
        var value2 = element.num*element.ngRate*0.01
        var value3 = element.num*element.passRate*0.01

      

        storageItem.push({
          title:element.devName,
          data:[
            {value:value1,name:"ok",selected: true},
            {value:value2,name:"ng",selected: false},
            {value:value3,name:"pass",selected: false},
          ],
          uph:element.uph,
          time:element.takeTime,
          count:element.num,
          equipmentId:element.id,
          dataStartTime:element.dataStartTime,
          dataEndTime:element.dataEndTime,
          version:element.version,
          model:element.model
        })



      }

      var item:any =  localStorage.getItem("collectionData")
      var item2:any =    JSON.parse(item)
      item2.homeData = storageItem
      localStorage.setItem("collectionData",JSON.stringify(item2))

      setTimeout(()=>{

        this.initSwiper()
    
      },300)

    


    }

 
    
    
  }

  changePieData(data:any){

    if(data){
      data = [data]
    }else{
      data = [{
        devName:"",
        model:"",
        equipmentId:"",
        num:0,
        okRate:0,
        ngRate:0,
        passRate:0,
        uph:"",
        takeTime:"",
        dataStartTime:"",
        dataEndTime:"",
        version:""
      }]
    }
    this.items = []
    for (let i = 0; i < data.length; i++) {
      const element = data[i];
      var value1 = element.num*element.okRate*0.01
      var value2 = element.num*element.ngRate*0.01
      var value3 = element.num*element.passRate*0.01
      this.items.push({
        title:element.devName+'-'+element.model,
        equipmentId:element.equipmentId,
        data:[
          {value:value1,name:"ok",selected: true},
          {value:value2,name:"ng",selected: false},
          {value:value3,name:"pass",selected: false},
        ],
        uph:element.uph,
        time:element.takeTime,
        count:element.num,
        dataStartTime:element.dataStartTime,
        dataEndTime:element.dataEndTime,
        version:element.version
      })
     
      this.appService.homeData.push({
        title:element.devName,
        data:[
          {value:value1,name:"ok",selected: true},
          {value:value2,name:"ng",selected: false},
          {value:value3,name:"pass",selected: false},
        ],
        uph:element.uph,
        time:element.takeTime,
        count:element.num,
        equipmentId:element.equipmentId,
        dataStartTime:element.dataStartTime,
        dataEndTime:element.dataEndTime,
        version:element.version
      })
    }

  }



ngAfterViewInit(): void {


  setInterval(()=>{
    this.appService.getData("/detection/business/equipment/queryEquipmentPageOfInfo","","post",{})
    .then((response)=>{
      this.changeTopData(response.data.rows)
    })
    .catch((e)=>{
      this.router.navigate([`/login`])
      console.log(e)
    })
 
  },1000*30)

  this.initCharts(this.pieData)

 
  // this.html2Can(1882)
  var certifyDom:any = document.querySelector(".swiper-container")
  var pieDom:any = document.querySelector("#certify")
  var that = this

  certifyDom.onmouseover = function(){
      that.certifySwiper1.autoplay.stop()
    }
  certifyDom.onmouseleave = function(){
      that.certifySwiper1.autoplay.start()
  }

  pieDom.onmouseover = function(){
    that.certifySwiper1.autoplay.stop()
  }
  pieDom.onmouseleave = function(){
    that.certifySwiper1.autoplay.start()
}



this.HomeService.homeElse.subscribe((value:any)=>{
      setTimeout(()=>{
        that.certifySwiper1.autoplay.stop()
      },100)
  })

  this.HomeService.homeElse1.subscribe((value:any)=>{


      if($(".outer").css("display") == "none"){
        setTimeout(()=>{
        that.certifySwiper1.autoplay.start()
      },100)
      }

  })

this.HomeService.elseClick.subscribe((value:any)=>{
    $(".outer").css("display","block")
    $(".maks h2").text(value.title)
    if(value.type == "line"){
      this.initCharts2(value.obj)
      that.certifySwiper1.autoplay.stop()
    }else{
      this.initCharts3(value.obj)
      that.certifySwiper1.autoplay.stop()
    }
  })

}

changeTextData(obj:any){
  console.log(obj.title)
  $(".pieData h2").val(obj.title)
}


html2Can(px:number){
  var idObject = document.getElementById('hccanvas');
  if (idObject != null) {idObject.parentNode?.removeChild(idObject)}
  var hcDom:any =document.getElementById('certify')
  var activeDom:any = document.querySelector(".swiper-slide-active")
   setTimeout(() => {
    html2canvas(hcDom,{backgroundColor:'transparent'}).then((canvas)=>{
      canvas.id = "hccanvas"
      canvas.style.position = "absolute"
      canvas.style.left = px+"px"
      canvas.style.zIndex = "998"
      canvas.style.filter ="blur(10px)"
      document.getElementById('wrapper')?.appendChild(canvas);
    });
  }, 500);

  
  $(".swiper-slide-active").mouseover(function(this:any){
    $(this).eq(0).css("transform","translateX(0px) scale(1.1)")

  })
  $(".swiper-slide-active").mouseout(function(this:any){
    $(this).eq(0).css("transform","translateX(0px) scale(1.0)")

  })
}

initCharts(data:any){
      const ec = echarts as any;
      var pieChart1 = document.getElementById('chart')
      var  pieChart =  ec.init(pieChart1)
      var pieChartOption = {
              tooltip: {
                show: false ,
              },
              series: [
                  {
                      type: 'pie',
                      radius: '60%',
                      data:data.data,
                      emphasis: {
                          itemStyle: {
                              shadowBlur: 10,
                              shadowOffsetX: 0,
                              shadowColor: 'rgba(0, 0, 0, 0.5)'
                          }
                      },
                    label: {
                      formatter: '{b|{b}：}{per|{d}%}',
                      backgroundColor: '#F6F8FC',
                      borderColor: '#8C8D8E',
                      borderRadius: 5,
                      padding:4,
                      position: 'outside',
                      margin:10,
                      rich: {
                        b: {
                          color: '#4C5058',
                          fontSize: 14,
                          fontWeight: 'bold',
                          lineHeight: 33
                        },
                        per: {
                          color: '#fff',
                          backgroundColor: '#4C5058',
                          padding: [3, 4],
                          borderRadius: 4
                        }
                      }
                    },
                  
                  }
              ]
      }
      pieChart.setOption(pieChartOption); 
}

closeMaks(){
  $(".outer").css("display","none")
  this.certifySwiper1.autoplay.start()
}

initCharts2(data:any){
      $(".maks .btn").css("display","block")
 
      const ec = echarts as any;
      var lineChart = ec.init(document.getElementById('alertBox'));
      let lineChartOption = {
        grid:{
          left:"18%",
          top:'25%',
          right:"8%",
          bottom:'15%'
        },
        xAxis: {
          type: 'category',
          data: data.xData,
          axisLabel: {
              show: true,
              textStyle: {
                  fontSize:"10px",
                  color: '#0082c4'
              },
              fontWeight:'lighter'
          },
          axisLine: {
            show:true,
            lineStyle:{
              color:"#0082c4"
            }
          },
        },
      yAxis: {
          type: 'value',
          // position:"right",
           splitLine: { //网格线
              show: false
          },
          axisLine: {
            show:true,
            lineStyle:{
              color:"#0082c4"
            }
          },
          axisLabel: {
            show: true,
            textStyle: {
                fontSize:"10px",
                color: '#0082c4'
            },
            fontWeight:'lighter'
        }
        },
        series: [{
          data: data.yData,
          type: 'line',
          areaStyle: {
            color:"#25577c"
          },
          smooth: true,
          lineStyle:{
            color:'#5cd3bb',
            width :1
          },
          itemStyle : {
            normal : {
               color:'#5cd3bb'
            }
          },
          label: {
            show: true,
            position: 'top',
            color:"#64e5c4"
          },
        }]
      }
      lineChart.setOption(lineChartOption);
}



initCharts3(data:any){
  $(".maks .btn").css("display","none")
  var that = this
  const ec = echarts as any;
  var barChart = ec.init(document.getElementById('alertBox'));
  let barChartOption = {
    grid:{
      left:"18%",
      top:'25%',
      right:"8%",
      bottom:'15%'
    },
    xAxis: {
      type: 'category',
      data: data.xData,
      axisLabel: {
          show: true,
          textStyle: {
              fontSize:"10px",
              color: '#0082c4'
          },
          fontWeight:'lighter'
      },
      axisLine: {
        show:true,
        lineStyle:{
          color:"#0082c4"
        }
      },
    },
  yAxis: {
      type: 'value',
       splitLine: { //网格线
          show: false
      },
      axisLine: {
        show:true,
        lineStyle:{
          color:"#0082c4"
        }
      },
      axisLabel: {
        show: true,
        textStyle: {
            fontSize:"10px",
            color: '#0082c4'
        },
        fontWeight:'lighter'
    }
    },
    series: [{
      data: data.yData,
      type: 'bar',
      itemStyle: {
        normal: {
          label: {
              show: true,		//开启显示
              position: 'top',	//在上方显示
              textStyle: {	    //数值样式
                  color: '#fff',
                  fontSize: 12
              }
          },
          color: new echarts.graphic.LinearGradient(
            0, 0, 0, 1,
            [
                {offset: 0, color: '#52a7ff'},
                {offset: 1, color: '#377eff'}
            ]
        ),
      }     
    },
    barWidth : 30,//柱图宽度
    }]
  }
  barChart.setOption(barChartOption);
  barChart.on('click', function (params:any) {
    that.router.navigate([`/details`],{queryParams:{
      index:that.pieData.equipmentId,
       gwId:params.name
    }})
  })

}

initSwiper(){
var that = this
this.certifySwiper1 = new Swiper('.cBox .swiper-container', {
	  loop: false,
	  speed: 500,
    slidesPerView: 5,
    spaceBetween: 30,
	  centeredSlides : true,
	  watchSlidesProgress : true,
    autoplay:true,
	  on: {
      init:function(swiper){
        that.activeIndex = swiper.activeIndex
          $(".swiper-slide img")[swiper.activeIndex].style.opacity = 1
          that.appService.getData(`/detection/business/equipment/queryEquipmentStatisticsById/${that.array[swiper.activeIndex].id}`,"","get",{})
          .then((response)=>{
           that.changePieData(response.data.data)
           that.pieData = that.items[that.items.length-1]
           that.HomeService.textFun(that.pieData)
           that.initCharts(that.pieData)
          })
          .catch((e)=>{
            // this.router.navigate([`/login`])
            console.log(e)
          })

      },
      slideChange:function(swiper){
     
        that.activeIndex = swiper.activeIndex

        $.each( $(".swiper-slide img"),function(i:any,n:any){
         n.style.opacity = .3
        })

        $(".swiper-slide img")[swiper.activeIndex].style.opacity = 1
        that.appService.getData(`/detection/business/equipment/queryEquipmentStatisticsById/${that.array[swiper.activeIndex].id}`,"","get",{})
        .then((response)=>{
         that.changePieData(response.data.data)

          // console.log(that.items[swiper.activeIndex])

         that.pieData = that.items[that.items.length-1]
         that.HomeService.textFun(that.pieData)
         that.initCharts(that.pieData)
         
        })
        .catch((e)=>{
          // this.router.navigate([`/login`])
          console.log(e)
        })

        // that.HomeService.textFun(that.pieData)
      },
	    setTranslate: function(){
		
		},
		setTransition: function(transition) {
		
		},
	  },
	  navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	  },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        type:"fraction",
      },
    });

	}



  cBoxDBclick(){
    setTimeout(() => {
   
      this.router.navigate([`/details`],{queryParams:{
        index:this.items[0].equipmentId
      }})
    }, 0);
  }

  changeSelect1(i:any,e:any){

    $.each(this.btnList,function(i1:any,n1:any){
        n1.isSelect = false
    })
    this.btnList[i].isSelect = true

    this.yData = [];
    this.xData = [];
    var that:any = this;
    var d:any = new Date(); 
    for (let index = 0; index < this.btnList[i].countNum; index++) {
        that.yData.push(0)
        var theDate = new Date(d-1000*60*60*24*(index+1) ) 
        let month = theDate.getMonth()+1;
        let date = theDate.getDate();
        that.xData.push(month+"-"+date)
        
    }
    this.xData = this.xData.reverse()



      let d2 =new Date(d.setDate(d.getDate() - this.btnList[i].countNum)); 
        this.appService.getData("/detection/business/equipment/queryStatisticsByEquipmentId","","post",{
          equipmentId:this.pieData.equipmentId,
          startTime:this.changeTime(d2),
          endTime:this.changeTime(new Date()),
          version:this.pieData.version
        })
        .then((response)=>{
          // this.changeData(response)
          // this.initCharts(that)
          
          let resData = response.data.data

          $.each(resData,function(i:any,n:any){

           let simpDateArr = n.createTime.substr(5,5).split("-")
            
           if(simpDateArr[0]<10){

            simpDateArr[0] = simpDateArr[0].replace(/^0/,"")

           }

           if(simpDateArr[1]<10){

            simpDateArr[1] = simpDateArr[1].replace(/^0/,"")

           }

         

           let simpDate = simpDateArr[0]+'-'+ simpDateArr[1]



           if(that.xData.indexOf(simpDate) != -1){

              let SimpDateIndex = that.xData.indexOf(simpDate)
              that.yData[SimpDateIndex] = n.okRate

           }

          

          })

          let data = {
              xData:that.xData,
              yData:that.yData
          }

          this.initCharts2(data);
        

        })
        .catch((e)=>{
          console.log(e)
        })

    // this.HomeService.homeCenter.subscribe((value:any)=>{

    // })
    
  }




  changeTime(d:any){


    var date = (d.getFullYear())+"-"+(d.getMonth() + 1) + "-"+(d.getDate())+" "+(d.getHours()) + ":" +(d.getMinutes()) + ":" +(d.getSeconds());

            return date

  }


getDay(day:any){
　　var today = new Date();
　　var targetday_milliseconds=today.getTime() + 1000*60*60*24*day;
　　today.setTime(targetday_milliseconds); //注意，这行是关键代码
　　var tYear = today.getFullYear();
　　var tMonth = today.getMonth();
　　var tDate = today.getDate();
　　tMonth = this.doHandleMonth(tMonth + 1);
　　tDate =  this.doHandleMonth(tDate);
  
　　return tYear+"-"+tMonth+"-"+tDate;

}

doHandleMonth(month:any){
  　　var m = month;
  　　if(month.toString().length == 1){
  　　　　m = "0" + month;
  　　}
  　　return m;
  }

}
