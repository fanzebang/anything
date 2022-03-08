import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//echarts
import * as echarts from 'echarts';

//jquery
declare var $:any;

import { HomeService } from '../../home.service';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.scss']
})
export class LeftComponent implements OnInit {

  public items:any = [

      {
        title:"镜筒检测设备趋势图",
        xData:["01-02","01-03","01-04","01-05","01-06","01-07","01-08"],
        yData:["6","4","7","5","7","8","8"],
        lineChart:"",
      },
      {
        title:"镜筒检测设备趋势图2",
        xData:["01-02","01-03","01-04","01-05","01-06","01-07","01-08"],
        yData:["6","4","7","5","7","8","18"],
        lineChart:"",
      },
      {
        title:"镜筒检测设备趋势图3",
        xData:["01-02","01-03","01-04","01-05","01-06","01-07","01-08"],
        yData:["6","4","7","5","7","8","18"],
        lineChart:"",
      }
    
  ]

  xData:any=[];
  yData:any= []
  equipment:any = {
    title:"1号设备"
  }
  public index:any = 0;
  
  constructor(private HomeService:HomeService,private router:Router,private appService:AppService) { }

  ngOnInit(): void {

  }
  changeData(data:any){
    var that:any = this
    this.xData = []
    this.yData= [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    for (let index = 1; index < 31; index++) {
      this.xData.push(this.getDay(-index).substring(this.getDay(-index).length-5,this.getDay(-index).length))
    }

    this.xData.reverse()

  

    if(!data.data.data){

      data.data = [] 


    }


var yData:any = data.data.data

  $.each(yData,function(i:any,n:any){

     if(that.xData.indexOf(n.dataStartTime.substring(5,10)) != -1){
 
         that.yData[that.xData.indexOf(n.dataStartTime.substring(5,10))]=n.okRate
     }
  })


  }


  
  toAlert(){
  
    this.HomeService.alertFun(this,"line")
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

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
   
    var that = this
    // window.onresize = function () {
    //   for (let index = 0; index < that.items.length; index++) {
    //       const element = that.items[index];
    //       element.lineChart.resize()
    //   }
    //  };
 
  $(".left ul li").mouseover(function(this:any){
    $(this).eq(0).css("transform","translateX(0px) scale(1.1)")
    that.HomeService.textFun2(that.index)
  }).mouseout(function(this:any){
    $(this).eq(0).css("transform","translateX(0px) scale(1)")
    that.HomeService.textFun3(that.index)
  }).dblclick(function(this:any){
      that.toAlert()
  })

 

    this.HomeService.homeCenter.subscribe((value:any)=>{
      this.equipment = value
      var d = new Date(); 
      let d2 =new Date(d.setDate(d.getDate() - 30)); 
        this.appService.getData("/detection/business/equipment/queryStatisticsByEquipmentId","","post",{
          equipmentId:value.equipmentId,
          startTime:this.changeTime(d2),
          endTime:this.changeTime(new Date()),
          version:value.version
        })
        .then((response)=>{
          this.changeData(response)
          this.initCharts(that)
        })
        .catch((e)=>{
          console.log(e)
        })
    })


  }


  initCharts(index:any){
          const ec = echarts as any;
          var lineChart = ec.init(document.getElementById('lineChart0'));
          const lineChartOption = {
            grid:{
              left:'30px',
              top:'20px',
              right:0,
              bottom:'50px'
            },
            dataZoom: [
                        {
                          type: 'inside',
                          start: 0,
                          end: 50
                        },
                        {
                          type: 'slider',
                          show: true,
                          height: '12px',
                          left:'50px',
                          right:'50px',
                          bottom: '10px',

                          borderColor: '#8FDFFE',
                          backgroundColor: 'rgba(35,62,72,.2)',
  
                          dataBackground:{
                            areaStyle:{
                              color:'#66b6e5',
                              opacity:1
                            }
                          },
                          // 拖拽手柄样式 svg 路径
                          handleColor: '#8FDFFE',
                          handleSize: 20,
                          handleStyle: {
                            borderColor: '#8FDFFE',
                          },
                        textStyle:{
                          color:"#fff"
                        },
                          start: 0,
                          end: 100
                        }
              
              ],
            xAxis: {
              type: 'category',
              data: index.xData,
              axisLabel: {
                  show: true,
                  textStyle: {
                      fontSize:"12px",
                      color: '#0082c4'
                  },
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
              data: index.yData,
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
      // }



  }

 

  toDetail(){
    this.router.navigate([`/details`,{index:this.index}])
  }

}
