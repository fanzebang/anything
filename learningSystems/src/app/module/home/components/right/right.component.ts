import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//echarts
import * as echarts from 'echarts';

//jquery
declare var $:any;

import { HomeService } from '../../home.service';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.scss']
})
export class RightComponent implements OnInit {

  
  public items:any = [

    {
      title:"镜筒检测设备趋势图",
      xData:["ok","ng","pass","pass2"],
      yData:["500","40","700","300"],
      lineChart:"",
    },
  
    {
      title:"镜筒检测设备趋势图1",
      xData:["ok1","ng1","pass1","pass1"],
      yData:["51","4","600","300"],
      lineChart:"",
    },
  
    {
      title:"镜筒检测设备趋势图2",
      xData:["ok1","ng1","pass1","pass1"],
      yData:["51","4","600","300"],
      lineChart:"",
    }
]
equipment:any={
  title:""
};
xData:any = [];
yData:any = [];

public index:any = 0;

  constructor(private HomeService:HomeService,private router:Router,private appService:AppService) { }

  ngOnInit(): void {


  }

  changeData(data:any){
    var that:any = this
    var xData:any = data.data.data
    this.xData = []
    this.yData= []
    $.each(xData,function(i:any,n:any){
      that.xData.push(n.name)
      that.yData.push(n.okRate)
    })
    this.initCharts(this)
  }

  toAlert(){
    this.HomeService.alertFun(this,"bar")
  }


  ngAfterViewInit(): void {

    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.

    this.initCharts(this)
    var that = this
    // window.onresize = function () {
    //   for (let index = 0; index < that.items.length; index++) {
    //       const element = that.items[index];
    //       console.log(element)
    //       element.barChart.resize()
    //     }
    //   };
 
     $(".right ul li").mouseover(function(this:any){
      $(this).eq(0).css("transform","translateX(0px) scale(1.1)")

      that.HomeService.textFun2(that.index)
    
    })
  
    $(".right ul li").mouseout(function(this:any){
      $(this).eq(0).css("transform","translateX(0px) scale(1)")

      that.HomeService.textFun3(that.index)
    
    })
 

this.HomeService.homeCenter.subscribe((value:any)=>{
  // console.log(value.equipmentId)
        this.equipment = value
        this.appService.getData(`/detection/business/station/queryStationStatisticsByEquipmentId/${value.equipmentId}`,"","get",{})
        .then((response)=>{
          this.changeData(response)
      
        })
        .catch((e)=>{
          this.xData = []
          this.yData= []
          this.initCharts(this)
          console.log(e)
        })
       
    })






  }

  ngAfterViewChecked(): void {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
  
  }

  // ngOnDestroy(): void {
  //   //Called once, before the instance is destroyed.
  //   //Add 'implements OnDestroy' to the class.
    

  //   this.HomeService.eventbus.unsubscribe()

  // }

  initCharts(index:any){

        const ec = echarts as any;
        var barChart = ec.init(document.getElementById('barChart0'));
        const barChartOption = {
          grid:{
            left:'40px',
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
                interval:0,
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
    }
 
    // toDetail(){
    //   this.router.navigate([`/details`,{index:this.index}])
    // }

}






