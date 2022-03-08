import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';
import { VideoService } from 'src/app/video.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.less']
})
export class ChartComponent implements OnInit {

  public xAxisData = [];

  public yAxisData = [];

  constructor(private videoService:VideoService) { 



  }

  ngOnInit(): void {
  
  }

  public count=0;
  
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
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
      var objectStartTimeVoList = JSON.parse(localStorage.getItem("videoData"))[0].objectStartTimeVoList

      objectStartTimeVoList.forEach(element => {
        this.xAxisData.push(element.targetName)
        this.yAxisData.push(element.startTimeCount*1)
      });

      this.initCharts();

    }
  });

  this.videoService.aClickedEvent
  .subscribe((data:string) => {
    var objectStartTimeVoList = JSON.parse(localStorage.getItem("videoData"))[data].objectStartTimeVoList
    this.xAxisData = []
    this.yAxisData = []
    objectStartTimeVoList.forEach(element => {
      this.xAxisData.push(element.targetName)
      this.yAxisData.push(element.startTimeCount*1)
    });
    this.initCharts();
  });

  }


  initCharts() {
    const ec:any = echarts as any;
    const barChart:any = ec.init(document.getElementById('barChart'));

    const barChartOption:Object = {

      tooltip: {
        trigger: 'item',
        triggerOn: 'mousemove',
              enterable:true,
               formatter:(parmas)=>{
                 return `<span style="position: relative;top: 10px;padding:0 5px;">${parmas.value}</span>`
               },
         },
         grid: {
          bottom: '20%',
        },
     
      title:{
        text: '单位（毫秒）',
        x: 'left',                 
        y: '25px', 
        backgroundColor: 'rgba(0,0,0,0)',
        borderColor: '#ccc',      
        borderWidth: 0,           
        padding: [5,15],                            
        itemGap: 10,             
        textStyle: {
            fontSize: 13,
            color: '#fff'   
        },
        subtextStyle: {
            color: '#aaa'   
        }
    },

    dataZoom: [
      {
        type: 'inside',
        start :0,
        end:100,
        bottom: '10px'
      },
      {
        type: 'slider',
        bottom: '10%',
        height: 12,
      },
     
    ],
      xAxis: {
        type: 'category',
        data: this.xAxisData,
        axisLabel: {
          show: true,
          textStyle: {
              color: '#fff'
          }
      },
    

      },
      yAxis: {
        type: 'value',
        axisLabel: {
          show: true,
          textStyle: {
              color: '#fff'
          }
      },
        splitLine: {
          show: true,
          lineStyle:{
               color: ['#1f216d'],
               width: 1,
                type: 'solid'
          },
          
      }
      },
      series: [{
        data: this.yAxisData,
        itemStyle:{
          normal:{
                      color: function (params){
                      var  color:any[] = ['#ff7f50','#87cefa','#da70d6','#32cd32','#6495ed',
                                    '#ff69b4','#ba55d3','#cd5c5c','#ffa500','#40e0d0',
                                    '#1e90ff','#ff6347','#7b68ee','#00fa9a','#ffd700',
                                    '#6699FF','#ff6666','#3cb371','#b8860b','#30e0e0'];
                          return color[params.dataIndex];
                      }
                  },
        },
        type: 'bar',
      }]
    }
    barChart.setOption(barChartOption);

  }

}
