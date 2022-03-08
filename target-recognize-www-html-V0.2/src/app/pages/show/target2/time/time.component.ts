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

  constructor() {

    this.xAxisData = [];

    this.yAxisData = [];
   }

  ngOnInit(): void {

    console.log(this.list)

    for (let index = 0; index < this.list.length; index++) {
      

         this.xAxisData.push(this.list[index].name)
         this.yAxisData.push(this.list[index].time)
    }

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
