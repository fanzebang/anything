import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {HttpResult} from "../../core/http-entity";
import * as echarts from 'echarts';
import {ECharts} from "echarts";
import 'echarts/dist/extension/bmap.min.js';
import 'echarts/map/js/china.js';
import { timestamp } from 'rxjs/operators';
import axios from 'axios';


declare var $:any;

@Component({
  templateUrl: './data-statistics.component.html',
  styleUrls: ['./data-statistics.component.less', './statistics.less']
})
export class DataStatisticsComponent implements OnInit, AfterViewInit {

  // cakeChartOption: any = {};
  // pillarChartOption: any = {};
  // targetTypeOption: any = {};
  // modelNumOption: any = {};

  // treeRadialOption = {};

  // mapChartOption = {};
  isVisible = false;
  alertWindowTitle;
  @ViewChild('usePercentEchart')
  usePercentEchartElm: ElementRef;
  usePercentEchart: ECharts;


  @ViewChild('useTrendEchart')
  useTrendEchartElm: ElementRef;
  useTrendEchart: ECharts;


  @ViewChild('treeRadialEchart')
  treeRadialEchartElm: ElementRef;
  treeRadialEchart: ECharts;

  @ViewChild('mapEchart')
  mapEchartElm: ElementRef;
  mapEchart: ECharts;

  @ViewChild('targetTypeEchart')
  targetTypeEchartElm: ElementRef;
  targetTypeEchart: ECharts;

  @ViewChild('modelNumEchart')
  modelNumEchartElm: ElementRef;
  modelNumEchart: ECharts;


  @ViewChild('searchTopEchart')
  searchTopEchartElm: ElementRef;
  searchTopEchart: ECharts;


  ngOnInit(): void {
    // this.loadChars();
    // this.loadPillarChartOption();
    // this.loadTargetTypeOption();
    // this.loadModelNumOption();
    // this.loadMapOption();

 


   

  }

  
  ngAfterViewInit(): void {
  
    this.loadUsePercentCharts("load");
    this.loadUseTrendCharts("load");
    this.loadTargetTypeOption("load");
    this.loadModelNumOption("load");
    this.loadTreeRadialOption("load");
    this.loadSearchTopOption("load");
    this.loadMapOption("load");
  
  


  }

  public arr1:any = [];

  constructor(private http: HttpClient) {

this.requestMapData("??????")

  }


  //6-20 ?????????????????????
  requestMapData(name){
  axios.get(`${environment.API_URL}/v1/stat-infos/getDataStatistics`, {
      headers: {
        'Authorization':'Bearer '+localStorage.getItem('Bearer'),
        'TR-Role': 'TR-User'
      }
    })
    .then((result:any)=>{
    var yhdata = JSON.parse(result.data.data.yh)
     var data:any = [];
     var yhCount;
      yhdata.forEach(element => {
        if(element.last_province){
          data.push(element)
        }
        if(element.count){
          yhCount = element.count
        }
      });
      var yh;
  
      data.forEach(element=>{
        if(element.last_province.indexOf(name)!=-1){
          yh = element.num
        }
      })

      if(!yh){
        yh = 0;
      }
      $(".mapData span")[0].innerHTML = result.data.data.syyb
      $(".mapData span")[1].innerHTML = result.data.data.dzmx
      $(".mapData span")[2].innerHTML = yh
      $(".mapData span")[3].innerHTML = result.data.data.qqcs
      
 

      this.arr1 = (yhCount+"").split("")

    })
  }

  loadUsePercentCharts(dbClikcSarchElement:any): void {

    this.http.get(`${environment.API_URL}/v1/detect-history/detect-use-status`).subscribe((result: HttpResult<any>) => {
      if (HttpResult.succeed(result.code)) {
        const data = result.data;
        const chartOption: any = {
          color: ['#175BEB', '#FC983D', '#6220FA', '#00C18E'],
          tooltip: {
            trigger: 'item',
          },
          legend: {
            // orient: 'vertical',
            // top: 'middle',

            bottom: 10,
            left: 'center',
            style: 'margin-top: 15px;',
            data: ['?????????', '??????', '??????', 'SAR'],
            textStyle: {
              color: '#FFF'
            }
          },
          series: [
            {
              type: 'pie',
              radius: ['50%', '70%'],
              center: ['50%', '50%'],
              selectedMode: 'single',
              data: [
                {value: data.kjgCount, name: '?????????'},
                {value: data.hwCount, name: '??????'},
                {value: data.ygCount, name: '??????'},
                {value: data.sarCount, name: 'SAR'}
              ],
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        };

        const clientHeight = this.usePercentEchartElm.nativeElement.parentElement.clientHeight;
        this.usePercentEchartElm.nativeElement.style.height = clientHeight + "px";

        if(dbClikcSarchElement != "load"){
          var bigboxDom:any = document.getElementById("bigCharts")
          this.usePercentEchart = echarts.init(bigboxDom);

        }else{

          if (!this.usePercentEchart) {
            this.usePercentEchart = echarts.init(this.usePercentEchartElm.nativeElement);
          }

        }
       


        this.usePercentEchart.setOption(chartOption);
      }
    });
  }

  loadUseTrendCharts(dbClikcSarchElement:any): void {


    this.http.get(`${environment.API_URL}/v1/detect-history/detect-use-status`).subscribe((result: HttpResult<any>) => {
      if (HttpResult.succeed(result.code)) {
        const data = result.data;

        const dataX = [data.data6, data.data5, data.data4, data.data3, data.data2, data.data1].map(d => d.substring(5));
        const chartOption: any = {
          color: ['#175BEB', '#00C18E', '#6220FA', '#FC983D'],
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: dataX,
            axisLabel: {
              color: '#27bef0',
              // fontWeight: 600,
              fontSize: 12
            },
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            splitLine: {
              show: false,
            }
          },
          yAxis: {
            type: 'value',
            axisLabel: {
              color: '#27bef0',
              // fontWeight: 600,
              fontSize: 12
            },
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            splitLine: {
              lineStyle: {
                color: '#1A3765',
                type: 'dashed'
              }
            }
          },
          series: [{
            data: [data.count6, data.count5, data.count4, data.count3, data.count2, data.count1],
            type: 'line',
            areaStyle: {}
          }]
        };


        const clientHeight = this.useTrendEchartElm.nativeElement.parentElement.clientHeight;
        this.useTrendEchartElm.nativeElement.style.height = clientHeight + "px";

        if(dbClikcSarchElement != "load"){
          var bigboxDom:any = document.getElementById("bigCharts")
          this.useTrendEchart = echarts.init(bigboxDom);

        }else{

          if (!this.useTrendEchart) {
            this.useTrendEchart = echarts.init(this.useTrendEchartElm.nativeElement);
  
          }

        }

      
        this.useTrendEchart.setOption(chartOption);

      }
    });
  }

  loadTargetTypeOption(dbClikcSarchElement:any): void {


    this.http.get(`${environment.API_URL}/v1/sample-oss-types/target/echar`).subscribe((result: HttpResult<any>) => {
      if (HttpResult.succeed(result.code)) {
        const dataSource = result.data.map(data => {
          return {
            trainTime: data.time,
            ????????????: data.allType,
            ????????????: data.trainType
          }
        }).reverse();

        const targetTypeOption: any = {
          color: ['#4486E3', '#4345C5', '#6220FA', '#FC983D'],
          legend: {
            textStyle: {
              color: '#FFF'
            }
          },
          tooltip: {},
          dataset: {
            dimensions: ['trainTime', '????????????', '????????????'],
            // source: [
            //   {trainTime: '03-15', ????????????: 43, ????????????: 85},
            //   {trainTime: '03-16', ????????????: 83, ????????????: 73},
            //   {trainTime: '03-17', ????????????: 86, ????????????: 65},
            //   {trainTime: '03-20', ????????????: 72, ????????????: 53}
            // ],
            source: dataSource
          },
          xAxis: {
            type: 'category',
            axisLabel: {
              color: '#27bef0',
              // fontWeight: 600,
              fontSize: 12
            },
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            splitLine: {
              show: false,
            }
          },
          yAxis: {
            axisLabel: {
              color: '#27bef0',
              // fontWeight: 600,
              fontSize: 12
            },
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            splitLine: {
              lineStyle: {
                color: '#1A3765',
                type: 'dashed'
              }
            }
          },
          // Declare several bar series, each will be mapped
          // to a column of dataset.source by default.
          series: [
            {type: 'bar'},
            {type: 'bar'}
          ]
        };


        const clientHeight = this.targetTypeEchartElm.nativeElement.parentElement.clientHeight;
        this.targetTypeEchartElm.nativeElement.style.height = clientHeight + "px";



        if(dbClikcSarchElement != "load"){
          var bigboxDom:any = document.getElementById("bigCharts")
          this.targetTypeEchart = echarts.init(bigboxDom);

        }else{

          if (!this.targetTypeEchart) {
            this.targetTypeEchart = echarts.init(this.targetTypeEchartElm.nativeElement);
  
          }

        }

       
        this.targetTypeEchart.setOption(targetTypeOption);
      }
    })
  }

  loadModelNumOption(dbClikcSarchElement:any): void {

    this.http.get(`${environment.API_URL}/v1/sample-oss-types/target/echar`).subscribe((result: HttpResult<any>) => {

      if (HttpResult.succeed(result.code)) {

        const data1 = result.data.map(data => data.allType).reverse();
        const data2 = result.data.map(data => data.trainType).reverse();
        const dataX = result.data.map(data => data.time).reverse();


        const modelNumOption: any = {
          legend: {
            data: ['????????????', '????????????'],
            textStyle: {
              color: '#FFF'
            }
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: [
            {
              type: 'category',
              boundaryGap: false,
              // data: ['03-17', '03-12', '03-22', '03-24'],
              data: dataX,
              axisLabel: {
                color: '#27bef0',
                // fontWeight: 600,
                fontSize: 12
              },
              axisLine: {
                show: false,
              },
              axisTick: {
                show: false,
              },
              splitLine: {
                show: false,
              }
            }
          ],
          yAxis: [
            {
              type: 'value',
              axisLabel: {
                color: '#27bef0',
                // fontWeight: 600,
                fontSize: 12
              },
              axisLine: {
                show: false,
              },
              axisTick: {
                show: false,
              },
              splitLine: {
                lineStyle: {
                  color: '#1A3765',
                  type: 'dashed'
                }
              }
            }
          ],
          series: [
            {
              name: '????????????',
              type: 'line',
              smooth: true,
//           stack: '??????',
//           areaStyle: {
//             color: '#0F2453',
//             shadowColor: 'rgba(8, 49, 86, 0.5)',
//             shadowOffsetX: 10,
//             shadowOffsetY: 10
//             // shadowBlur: 10
//           },
              lineStyle: {
                color: '#1083BF'
              },
              // data: [120, 132, 101, 134],
              data: data1
            },
            {
              name: '????????????',
              type: 'line',
              smooth: true,
              // stack: '??????',
              // areaStyle: {
              //   // color: '#00454B',
              //   shadowColor: 'rgba(0, 65, 72, 0.5)',
              //   // shadowBlur: 10
              // },
              lineStyle: {
                color: '#00C7AA'
              },
              // data: [220, 182, 191, 234]
              data: data2
            }
          ]
        };


        const clientHeight = this.modelNumEchartElm.nativeElement.parentElement.clientHeight;
        this.modelNumEchartElm.nativeElement.style.height = clientHeight + "px";

        if(dbClikcSarchElement != "load"){
          var bigboxDom:any = document.getElementById("bigCharts")
          this.modelNumEchart = echarts.init(bigboxDom);

        }else{

          if (!this.modelNumEchart) {
            this.modelNumEchart = echarts.init(this.modelNumEchartElm.nativeElement);
          }

        }



        this.modelNumEchart.setOption(modelNumOption);

      }
    })

  }

  loadTreeRadialOption(dbClikcSarchElement:any): void {


    this.http.get(`${environment.API_URL}/v1/sample-oss-types/type-all/echar`).subscribe((result: HttpResult<any>) => {
      if (HttpResult.succeed(result.code)) {
        const treeRadialOption: any = {
          //color: ['#175BEB', '#00C18E', '#6220FA', '#FC983D'],
          tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove'
          },
          series: [
            {
              type: 'tree',
              /*
              emphasis: {
                itemStyle: {
                  color:'#fff'
                },
                label: {
                  show: true,
                  formatter:'??????????????????????????????'
                       // backgroundColor: '#fff',
                        // verticalAlign: 'middle',
                }
              },
              */
             data: [result.data],
             color: ['#FFFFFF'],
              top: '18%',
              bottom: '14%',
              layout: 'radial',
              symbol: 'emptyCircle',
              symbolSize: 7,
              initialTreeDepth: 3,
              animationDurationUpdate: 750,
              lineStyle: {
                color: '#FFFFFF'
              },
             itemStyle:{
               normal:{
                 label:{
                   show: true,
                   textStyle:{
                     color:'#FFFFFF'
                   }
                 }
               }
             }
            }
          ]
        }


        const clientHeight = this.treeRadialEchartElm.nativeElement.parentElement.clientHeight;
        this.treeRadialEchartElm.nativeElement.style.height = clientHeight + "px";

        if(dbClikcSarchElement != "load"){
          var bigboxDom:any = document.getElementById("bigCharts")
          this.treeRadialEchart = echarts.init(bigboxDom);

        }else{

          if (!this.treeRadialEchart) {
            this.treeRadialEchart = echarts.init(this.treeRadialEchartElm.nativeElement);
          }

        }

    


        this.treeRadialEchart.setOption(treeRadialOption);

      }
    })


  }


  loadMapOption(dbClikcSarchElement:any) {
var that = this;
   var toolTipData :any= [{
      "provinceName": "?????????",
      "provinceKey": 110000,
      "cityName": null,
      "cityKey": null,
      "shopCount": 58,
      "totalPrice":0,
      "orderCount": 31744,
      "onlineCount": 0
  }, {
      "provinceName": "?????????",
      "provinceKey": 120000,
      "cityName": null,
      "cityKey": null,
      "shopCount": 74,
      "totalPrice":0,
      "orderCount": 30025,
      "onlineCount": 0
  }, {
      "provinceName": "?????????",
      "provinceKey": 130000,
      "cityName": null,
      "cityKey": null,
      "shopCount": 175,
      "totalPrice":0,
      "orderCount": 50625,
      "onlineCount": 0
  }, {
      "provinceName": "?????????",
      "provinceKey": 140000,
      "cityName": null,
      "cityKey": null,
      "shopCount": 73,
      "totalPrice":0,
      "orderCount": 20427,
      "onlineCount": 0
  }, {
      "provinceName": "?????????",
      "provinceKey": 150000,
      "cityName": null,
      "cityKey": null,
      "shopCount": 46,
      "totalPrice":0,
      "orderCount": 14585,
      "onlineCount": 0
  }, {
      "provinceName": "?????????",
      "provinceKey": 210000,
      "cityName": null,
      "cityKey": null,
      "shopCount": 74,
      "totalPrice":0,
      "orderCount": 27143,
      "onlineCount": 0
  }, {
      "provinceName": "?????????",
      "provinceKey": 220000,
      "cityName": null,
      "cityKey": null,
      "shopCount": 25,
      "totalPrice":0,
      "orderCount": 11123,
      "onlineCount": 0
  }, {
      "provinceName": "?????????",
      "provinceKey": 230000,
      "cityName": null,
      "cityKey": null,
      "shopCount": 25,
      "totalPrice":0,
      "orderCount": 6481,
      "onlineCount": 0
  }, {
      "provinceName": "?????????",
      "provinceKey": 310000,
      "cityName": null,
      "cityKey": null,
      "shopCount": 78,
      "totalPrice":0,
      "orderCount": 26753,
      "onlineCount": 0
  }, {
      "provinceName": "?????????",
      "provinceKey": 320000,
      "cityName": null,
      "cityKey": null,
      "shopCount": 475,
      "totalPrice":0,
      "orderCount": 158180,
      "onlineCount": 0
  }, {
      "provinceName": "?????????",
      "provinceKey": 330000,
      "cityName": null,
      "cityKey": null,
      "shopCount": 332,
      "totalPrice":0,
      "orderCount": 116344,
      "onlineCount": 0
  }, {
      "provinceName": "?????????",
      "provinceKey": 340000,
      "cityName": null,
      "cityKey": null,
      "shopCount": 168,
      "totalPrice":0,
      "orderCount": 57139,
      "onlineCount": 0
  }, {
      "provinceName": "?????????",
      "provinceKey": 350000,
      "cityName": null,
      "cityKey": null,
      "shopCount": 145,
      "totalPrice":0,
      "orderCount": 65228,
      "onlineCount": 0
  }, {
      "provinceName": "?????????",
      "provinceKey": 360000,
      "cityName": null,
      "cityKey": null,
      "shopCount": 103,
      "totalPrice":0,
      "orderCount": 31822,
      "onlineCount": 0
  }, {
      "provinceName": "?????????",
      "provinceKey": 370000,
      "cityName": null,
      "cityKey": null,
      "shopCount": 198,
      "totalPrice":0,
      "orderCount": 59966,
      "onlineCount": 0
  }, {
      "provinceName": "?????????",
      "provinceKey": 410000,
      "cityName": null,
      "cityKey": null,
      "shopCount": 184,
      "totalPrice":0,
      "orderCount": 52829,
      "onlineCount": 0
  }, {
      "name":"??????",
      "provinceName": "?????????",
      "provinceKey": 420000,
      "cityName": null,
      "cityKey": null,
      "shopCount": 125,
      "totalPrice":0,
      "orderCount": 46768,
      "onlineCount": 0
  }, {
      "provinceName": "?????????",
      "provinceKey": 430000,
      "cityName": null,
      "cityKey": null,
      "shopCount": 111,
      "totalPrice":0,
      "orderCount": 44094,
      "onlineCount": 0
  }, {
      "provinceName": "?????????",
      "provinceKey": 440000,
      "cityName": null,
      "cityKey": null,
      "shopCount": 384,
      "totalPrice":0,
      "orderCount": 165774,
      "onlineCount": 0
  }, {
      "provinceName": "?????????",
      "provinceKey": 450000,
      "cityName": null,
      "cityKey": null,
      "shopCount": 194,
      "totalPrice":0,
      "orderCount": 69882,
      "onlineCount": 0
  }, {
      "provinceName": "?????????",
      "provinceKey": 460000,
      "cityName": null,
      "cityKey": null,
      "shopCount": 58,
      "totalPrice":0,
      "orderCount": 33090,
      "onlineCount": 0
  }, {
      "provinceName": "?????????",
      "provinceKey": 500000,
      "cityName": null,
      "cityKey": null,
      "shopCount": 35,
      "totalPrice":0,
      "orderCount": 20163,
      "onlineCount": 0
  }, {
      "provinceName": "?????????",
      "provinceKey": 510000,
      "cityName": null,
      "cityKey": null,
      "shopCount": 127,
      "totalPrice":0,
      "orderCount": 43625,
      "onlineCount": 0
  }, {
      "provinceName": "?????????",
      "provinceKey": 520000,
      "cityName": null,
      "cityKey": null,
      "shopCount": 78,
      "totalPrice":0,
      "orderCount": 28817,
      "onlineCount": 0
  }, {
      "provinceName": "?????????",
      "provinceKey": 530000,
      "cityName": null,
      "cityKey": null,
      "shopCount": 87,
      "totalPrice":0,
      "orderCount": 30916,
      "onlineCount": 0
  }, {
      "provinceName": "?????????",
      "provinceKey": 540000,
      "cityName": null,
      "cityKey": null,
      "shopCount": 5,
      "totalPrice":0,
      "orderCount": 2470,
      "onlineCount": 0
  }, {
      "provinceName": "?????????",
      "provinceKey": 610000,
      "cityName": null,
      "cityKey": null,
      "shopCount": 65,
      "totalPrice":0,
      "orderCount": 27093,
      "onlineCount": 0
  }, {
      "provinceName": "?????????",
      "provinceKey": 620000,
      "cityName": null,
      "cityKey": null,
      "shopCount": 40,
      "totalPrice":0,
      "orderCount": 12390,
      "onlineCount": 0
  }, {
      "provinceName": "?????????",
      "provinceKey": 630000,
      "cityName": null,
      "cityKey": null,
      "shopCount": 3,
      "totalPrice":0,
      "orderCount": 1161,
      "onlineCount": 0
  }, {
      "provinceName": "?????????",
      "provinceKey": 640000,
      "cityName": null,
      "cityKey": null,
      "shopCount": 14,
      "totalPrice":0,
      "orderCount": 5240,
      "onlineCount": 0
  }, {
      "provinceName": "?????????",
      "provinceKey": 650000,
      "cityName": null,
      "cityKey": null,
      "shopCount": 43,
      "totalPrice":0,
      "orderCount": 11741,
      "onlineCount": 0
  }, {
      "provinceName": "?????????",
      "provinceKey": 650000,
      "cityName": null,
      "cityKey": null,
      "shopCount": 43,
      "totalPrice":0,
      "orderCount": 11741,
      "onlineCount": 0
  }, {
      "provinceName": "????????????",
      "provinceKey": 650000,
      "cityName": null,
      "cityKey": null,
      "shopCount": 43,
      "totalPrice":0,
      "orderCount": 11741,
      "onlineCount": 0
  }]
  var tmp:any =  toolTipData;


  var option:any = {
    series: [
        {
        type: 'map',
        mapType: 'china',
        aspectScale: 0.85,
        layoutCenter: ["50%", "50%"], //????????????
        layoutSize: '100%',
        zoom: 1.3, //???????????????????????????
        roam: true, //???????????????????????????
        scaleLimit: { //???????????????????????????
            min: 1,
            max: 2
        },
        itemStyle: {
            normal: {
            areaColor: '#042c7d',
            borderColor: '#5d92e9',
            borderWidth: 1

        },
        emphasis: {
            areaColor: '#0480fe',
            label: {
                color: "#fff"
            }
        },
        },
        data:[
          {name:'??????', selected:true} // selected:true ????????????
        ]
      },
    ]
};

    if(dbClikcSarchElement != "load"){
      var bigboxDom:any = document.getElementById("bigCharts")
      this.mapEchart = echarts.init(bigboxDom);

    }else{
      if (!this.mapEchart) {
        // this.mapEchart = echarts.init(this.mapEchartElm.nativeElement);
        var mapEchartsDom:any = document.getElementById("mapEcharts")
        var mapEcharts:any = echarts.init(mapEchartsDom)
       
      }

    }

    mapEcharts.setOption(option);

    mapEcharts.on('click', function (params) {

      $(".mapData div")[0].innerHTML = params.name
      option.series[0].data = [] 
      option.series[0].data.push({name:params.name, selected:true})
      mapEcharts.setOption(option);

      that.requestMapData(params.name);

      // axios.get(`${environment.API_URL}/v1/stat-infos/getDataStatistics`, {
      //   headers: {
      //     'Authorization':'Bearer '+localStorage.getItem('Bearer'),
      //     'TR-Role': 'TR-User'
      //   }
      // })
      // .then((result:any)=>{
      // var yhdata = JSON.parse(result.data.data.yh)
      //  var data:any = [];
      //   yhdata.forEach(element => {
      //     if(element.last_province){
      //       data.push(element)
      //     }
      //   });
      //   var yh;
      //   data.forEach(element=>{
      //     if(element.last_province.indexOf(params.name)!=-1){
      //       yh = element.num
      //     }
      //   })

      //   if(!yh){
      //     yh = 0;
      //   }
      //   $(".mapData span")[0].innerHTML = result.data.data.syyb
      //   $(".mapData span")[1].innerHTML = result.data.data.dzmx
      //   $(".mapData span")[2].innerHTML = yh
      //   $(".mapData span")[3].innerHTML = result.data.data.qqcs
      //   this.arr1 = (result.data.data.yh+"").split("")
  
      // })
  });

  }

  doubleClick(anyCharts:any){

    this.isVisible = true;

    if(anyCharts == "searchTopEchart"){
      this.alertWindowTitle = "????????????"
      this.loadSearchTopOption(anyCharts)
    }else if(anyCharts == "modelNumEchart"){
      this.alertWindowTitle = "????????????"
      this.loadModelNumOption(anyCharts)
    }else if(anyCharts == "targetTypeEchart"){
      this.alertWindowTitle = "??????????????????"
      this.loadTargetTypeOption(anyCharts)
    }else if(anyCharts == "useTrendEchart"){
      this.alertWindowTitle = "??????????????????"
      this.loadUseTrendCharts(anyCharts)
    }else if(anyCharts == "treeRadialEchart"){
      this.alertWindowTitle = "??????????????????"
      this.loadTreeRadialOption(anyCharts)
    }else if(anyCharts == "usePercentEchart"){
      this.alertWindowTitle = "??????????????????"
      this.loadUsePercentCharts(anyCharts)
    }
    

}

handleOk(): void {
  console.log('Button ok clicked!');
  this.isVisible = false;
}

handleCancel(): void {
  console.log('Button cancel clicked!');
  this.isVisible = false;
}


  loadSearchTopOption(dbClikcSarchElement:any) {
    this.http.get(`${environment.API_URL}/v1/detect-history/detect-search-status`).subscribe((result: HttpResult<any>) => {
      if (HttpResult.succeed(result.code)) {
        const yData = result.data.map(data => data.sampleTypeEnName).reverse();
        const series = result.data.map(data => data.countType).reverse();
        const option: any = {
          title: {
            show: false
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
          },
          legend: {
            show: false
          },
          grid: {
            x: 100,
            y: 0,
            y2: 0,
            x2: 0
          },
          xAxis: {
            type: 'value',
            // boundaryGap: [0, 0.01],
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            splitLine: {
              show: false
            },
            axisLabel: {
              show: false
            }
          },
          yAxis: {
            type: 'category',
            // data: ['?????????', '?????????', '?????????', '?????????', '?????????', '????????????', '?????????', '?????????'],
            data: yData,
            axisLabel: {
              color: '#27bef0',
              // fontWeight: 600,
              // fontSize: 16
            },
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            splitLine: {
              show: false
            },
            // interval: 0
          },
          series: [
            {
              type: 'bar',
              // data: [3719, 4160, 5781, 6472, 7569, 8623, 9834, 10592],
              data: series,
              itemStyle: {
                normal: {
                  label: {
                    show: true,
                    position: 'insideRight',
                    fontSize: 12,
                    color: '#FFFFFF'
                  },
                  color: (params) => {
                    return new echarts.graphic.LinearGradient(
                      0, 0, 1, 0,
                      [
                        {offset: 0, color: '#116FEF'},
                        {offset: 1, color: '#2e31ea'}
                      ]
                    );
                  }
                }
              }
            }
          ]
        };


        const clientHeight = this.searchTopEchartElm.nativeElement.parentElement.clientHeight;
        this.searchTopEchartElm.nativeElement.style.height = clientHeight + "px";
        if(dbClikcSarchElement != "load"){
          var bigboxDom:any = document.getElementById("bigCharts")
          this.searchTopEchart = echarts.init(bigboxDom);

        }else{

          if (!this.searchTopEchart) {
            this.searchTopEchart = echarts.init(this.searchTopEchartElm.nativeElement);
          }

        }
      
        this.searchTopEchart.setOption(option);
      }
    });
  }

  

}
