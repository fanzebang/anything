import { Component, OnInit,Input } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.less']
})
export class TimeComponent implements OnInit {

  @Input() list:any

  public xAxisData:any;

  public yAxisData:any;

  public legendData:any = []

  public series:any = []

  constructor() {

    this.xAxisData = [];

    this.yAxisData = [];
   }

  ngOnInit(): void {

    

    for (let index = 0; index < this.list.length; index++) {
      

        this.xAxisData.push(this.list[index].name)
        // this.yAxisData.push(this.list[index].time)
        this.legendData.push(this.list[index].name)
        this.series.push({
          name:this.list[index].name,
          type: 'bar',
          emphasis: {
            focus: 'series'
          },
          data: [this.list[index].time]
        })
    }


    console.log(this.xAxisData,this.legendData,this.series)

  }

  ngAfterContentInit(): void {

    this.initCharts() 
    
  }

  initCharts() {
 
    const ec:any = echarts as any;
    const barChart:any = ec.init(document.getElementById('barChart1'));




    const barChartOption:Object = {
      tooltip: {
        trigger: 'item',
        triggerOn: 'mousemove',
              enterable:true,
               formatter:(parmas)=>{
                 return `<span style="position: relative;top: 10px;padding:0 5px;">${parmas.value}</span>`
               },
         },
         
    grid:{
      right:'20%',
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
            color: '#000'   
        },
        subtextStyle: {
            color: '#aaa'   
        }
    },
    label: {
      show: true,
      position: 'bottom',
      formatter: '{a}',
      color: '#2f4554',
      rotate:45,
      offset:[0, 0],
      align: 'right',
      fontSize :11,
      },
    // dataZoom: [
    //   {
    //     type: 'inside',
    //     start :0,
    //     end:100,
    //     bottom: '10px'
    //   },
    //   {
    //     type: 'slider',
    //     bottom: '10%',
    //     height: 0,
    //   },
    // ],
      xAxis: {
        type: 'category',
        data: [""],
        axisLabel: {
          show: true,
          interval:0,
          textStyle: {
              color: '#000'
          }
      },
    

      },
      yAxis: {
        type: 'value',
        axisLabel: {
          show: true,
          textStyle: {
              color: '#000'
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
      series:this.series,
      legend: {
        show: true,
        type: 'scroll',
        orient: 'vertical',
        right: 0,
        top: 10,
        bottom: 10,
        textStyle: { color: "#2f4554" }
      }
    }
    barChart.setOption(barChartOption);

  }

}
