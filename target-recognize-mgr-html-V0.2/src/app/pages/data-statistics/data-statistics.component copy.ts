import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {HttpResult} from "../../core/http-entity";
import * as echarts from 'echarts';
import {ECharts} from "echarts";
import 'echarts/dist/extension/bmap.min.js';
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

    axios.get(`${environment.API_URL}/v1/stat-infos/getDataStatistics`, {
      headers: {
        'Authorization':'Bearer '+localStorage.getItem('Bearer'),
        'TR-Role': 'TR-User'
      }
    })
    .then((result:any)=>{

      $(".mapData span")[0].innerHTML = result.data.data.syyb
      $(".mapData span")[1].innerHTML = result.data.data.dzmx
      $(".mapData span")[2].innerHTML = result.data.data.yh
      $(".mapData span")[3].innerHTML = result.data.data.qqcs

      this.arr1 = (result.data.data.yh+"").split("")

      

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

   var toolTipData :any= [{
      "provinceName": "??????",
      "provinceKey": 110000,
      "cityName": null,
      "cityKey": null,
      "shopCount": 58,
      "totalPrice":0,
      "orderCount": 31744,
      "onlineCount": 0
  }, {
      "provinceName": "??????",
      "provinceKey": 120000,
      "cityName": null,
      "cityKey": null,
      "shopCount": 74,
      "totalPrice":0,
      "orderCount": 30025,
      "onlineCount": 0
  }, {
      "provinceName": "??????",
      "provinceKey": 130000,
      "cityName": null,
      "cityKey": null,
      "shopCount": 175,
      "totalPrice":0,
      "orderCount": 50625,
      "onlineCount": 0
  }, {
      "provinceName": "??????",
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
      "provinceName": "??????",
      "provinceKey": 210000,
      "cityName": null,
      "cityKey": null,
      "shopCount": 74,
      "totalPrice":0,
      "orderCount": 27143,
      "onlineCount": 0
  }, {
      "provinceName": "??????",
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
      "provinceName": "??????",
      "provinceKey": 310000,
      "cityName": null,
      "cityKey": null,
      "shopCount": 78,
      "totalPrice":0,
      "orderCount": 26753,
      "onlineCount": 0
  }, {
      "provinceName": "??????",
      "provinceKey": 320000,
      "cityName": null,
      "cityKey": null,
      "shopCount": 475,
      "totalPrice":0,
      "orderCount": 158180,
      "onlineCount": 0
  }, {
      "provinceName": "??????",
      "provinceKey": 330000,
      "cityName": null,
      "cityKey": null,
      "shopCount": 332,
      "totalPrice":0,
      "orderCount": 116344,
      "onlineCount": 0
  }, {
      "provinceName": "??????",
      "provinceKey": 340000,
      "cityName": null,
      "cityKey": null,
      "shopCount": 168,
      "totalPrice":0,
      "orderCount": 57139,
      "onlineCount": 0
  }, {
      "provinceName": "??????",
      "provinceKey": 350000,
      "cityName": null,
      "cityKey": null,
      "shopCount": 145,
      "totalPrice":0,
      "orderCount": 65228,
      "onlineCount": 0
  }, {
      "provinceName": "??????",
      "provinceKey": 360000,
      "cityName": null,
      "cityKey": null,
      "shopCount": 103,
      "totalPrice":0,
      "orderCount": 31822,
      "onlineCount": 0
  }, {
      "provinceName": "??????",
      "provinceKey": 370000,
      "cityName": null,
      "cityKey": null,
      "shopCount": 198,
      "totalPrice":0,
      "orderCount": 59966,
      "onlineCount": 0
  }, {
      "provinceName": "??????",
      "provinceKey": 410000,
      "cityName": null,
      "cityKey": null,
      "shopCount": 184,
      "totalPrice":0,
      "orderCount": 52829,
      "onlineCount": 0
  }, {
      "provinceName": "??????",
      "provinceKey": 420000,
      "cityName": null,
      "cityKey": null,
      "shopCount": 125,
      "totalPrice":0,
      "orderCount": 46768,
      "onlineCount": 0
  }, {
      "provinceName": "??????",
      "provinceKey": 430000,
      "cityName": null,
      "cityKey": null,
      "shopCount": 111,
      "totalPrice":0,
      "orderCount": 44094,
      "onlineCount": 0
  }, {
      "provinceName": "??????",
      "provinceKey": 440000,
      "cityName": null,
      "cityKey": null,
      "shopCount": 384,
      "totalPrice":0,
      "orderCount": 165774,
      "onlineCount": 0
  }, {
      "provinceName": "??????",
      "provinceKey": 450000,
      "cityName": null,
      "cityKey": null,
      "shopCount": 194,
      "totalPrice":0,
      "orderCount": 69882,
      "onlineCount": 0
  }, {
      "provinceName": "??????",
      "provinceKey": 460000,
      "cityName": null,
      "cityKey": null,
      "shopCount": 58,
      "totalPrice":0,
      "orderCount": 33090,
      "onlineCount": 0
  }, {
      "provinceName": "??????",
      "provinceKey": 500000,
      "cityName": null,
      "cityKey": null,
      "shopCount": 35,
      "totalPrice":0,
      "orderCount": 20163,
      "onlineCount": 0
  }, {
      "provinceName": "??????",
      "provinceKey": 510000,
      "cityName": null,
      "cityKey": null,
      "shopCount": 127,
      "totalPrice":0,
      "orderCount": 43625,
      "onlineCount": 0
  }, {
      "provinceName": "??????",
      "provinceKey": 520000,
      "cityName": null,
      "cityKey": null,
      "shopCount": 78,
      "totalPrice":0,
      "orderCount": 28817,
      "onlineCount": 0
  }, {
      "provinceName": "??????",
      "provinceKey": 530000,
      "cityName": null,
      "cityKey": null,
      "shopCount": 87,
      "totalPrice":0,
      "orderCount": 30916,
      "onlineCount": 0
  }, {
      "provinceName": "??????",
      "provinceKey": 540000,
      "cityName": null,
      "cityKey": null,
      "shopCount": 5,
      "totalPrice":0,
      "orderCount": 2470,
      "onlineCount": 0
  }, {
      "provinceName": "??????",
      "provinceKey": 610000,
      "cityName": null,
      "cityKey": null,
      "shopCount": 65,
      "totalPrice":0,
      "orderCount": 27093,
      "onlineCount": 0
  }, {
      "provinceName": "??????",
      "provinceKey": 620000,
      "cityName": null,
      "cityKey": null,
      "shopCount": 40,
      "totalPrice":0,
      "orderCount": 12390,
      "onlineCount": 0
  }, {
      "provinceName": "??????",
      "provinceKey": 630000,
      "cityName": null,
      "cityKey": null,
      "shopCount": 3,
      "totalPrice":0,
      "orderCount": 1161,
      "onlineCount": 0
  }, {
      "provinceName": "??????",
      "provinceKey": 640000,
      "cityName": null,
      "cityKey": null,
      "shopCount": 14,
      "totalPrice":0,
      "orderCount": 5240,
      "onlineCount": 0
  }, {
      "provinceName": "??????",
      "provinceKey": 650000,
      "cityName": null,
      "cityKey": null,
      "shopCount": 43,
      "totalPrice":0,
      "orderCount": 11741,
      "onlineCount": 0
  }, {
      "provinceName": "??????",
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
    tooltip: {
        trigger: 'item',
        formatter: function(params) { // ???????????????????????????
                var toolTiphtml = ''
                for (var i = 0; i < tmp.length; i++) {
                    if (params.name == tmp[i].provinceName) {
                        toolTiphtml += tmp[i].provinceName + '<br>?????????' + tmp[i].totalPrice;
                    }
                }
                return toolTiphtml;
        }
    },
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
            }
        },
    ]
};

    // const data = [
    //   {name: '??????', value: 9},
    //   {name: '????????????', value: 12},
    //   {name: '??????', value: 12},
    //   {name: '??????', value: 12},
    //   {name: '????????????', value: 14},
    //   {name: '??????', value: 15},
    //   {name: '??????', value: 16},
    //   {name: '??????', value: 18},
    //   {name: '??????', value: 18},
    //   {name: '??????', value: 19},
    //   {name: '??????', value: 21},
    //   {name: '??????', value: 21},
    //   {name: '??????', value: 21},
    //   {name: '??????', value: 22},
    //   {name: '??????', value: 23},
    //   {name: '??????', value: 24},
    //   {name: '??????', value: 24},
    //   {name: '??????', value: 25},
    //   {name: '??????', value: 25},
    //   {name: '??????', value: 25},
    //   {name: '?????????', value: 25},
    //   {name: '??????', value: 25},
    //   {name: '??????', value: 25},
    //   {name: '??????', value: 26},
    //   {name: '??????', value: 26},
    //   {name: '??????', value: 26},
    //   {name: '??????', value: 27},
    //   {name: '??????', value: 27},
    //   {name: '??????', value: 27},
    //   {name: '??????', value: 28},
    //   {name: '??????', value: 29},
    //   {name: '?????????', value: 30},
    //   {name: '??????', value: 30},
    //   {name: '??????', value: 31},
    //   {name: '??????', value: 31},
    //   {name: '?????????', value: 31},
    //   {name: '??????', value: 31},
    //   {name: '??????', value: 32},
    //   {name: '??????', value: 32},
    //   {name: '??????', value: 32},
    //   {name: '??????', value: 33},
    //   {name: '??????', value: 33},
    //   {name: '??????', value: 33},
    //   {name: '??????', value: 34},
    //   {name: '??????', value: 34},
    //   {name: '?????????', value: 35},
    //   {name: '?????????', value: 35},
    //   {name: '??????', value: 36},
    //   {name: '??????', value: 36},
    //   {name: '??????', value: 36},
    //   {name: '??????', value: 36},
    //   {name: '??????', value: 36},
    //   {name: '??????', value: 37},
    //   {name: '??????', value: 37},
    //   {name: '??????', value: 37},
    //   {name: '??????', value: 37},
    //   {name: '??????', value: 37},
    //   {name: '??????', value: 38},
    //   {name: '?????????', value: 38},
    //   {name: '??????', value: 38},
    //   {name: '??????', value: 38},
    //   {name: '??????', value: 39},
    //   {name: '??????', value: 39},
    //   {name: '??????', value: 39},
    //   {name: '??????', value: 39},
    //   {name: '??????', value: 40},
    //   {name: '??????', value: 40},
    //   {name: '??????', value: 41},
    //   {name: '??????', value: 41},
    //   {name: '??????', value: 42},
    //   {name: '??????', value: 43},
    //   {name: '??????', value: 43},
    //   {name: '??????', value: 44},
    //   {name: '??????', value: 44},
    //   {name: '??????', value: 44},
    //   {name: '??????', value: 44},
    //   {name: '??????', value: 45},
    //   {name: '??????', value: 45},
    //   {name: '??????', value: 46},
    //   {name: '??????', value: 47},
    //   {name: '??????', value: 47},
    //   {name: '??????', value: 47},
    //   {name: '?????????', value: 49},
    //   {name: '??????', value: 50},
    //   {name: '??????', value: 50},
    //   {name: '??????', value: 50},
    //   {name: '??????', value: 51},
    //   {name: '??????', value: 51},
    //   {name: '??????', value: 52},
    //   {name: '??????', value: 52},
    //   {name: '?????????', value: 52},
    //   {name: '?????????', value: 53},
    //   {name: '??????', value: 54},
    //   {name: '??????', value: 54},
    //   {name: '??????', value: 54},
    //   {name: '??????', value: 54},
    //   {name: '??????', value: 56},
    //   {name: '??????', value: 56},
    //   {name: '??????', value: 57},
    //   {name: '??????', value: 57},
    //   {name: '??????', value: 57},
    //   {name: '??????', value: 58},
    //   {name: '????????????', value: 58},
    //   {name: '??????', value: 58},
    //   {name: '??????', value: 58},
    //   {name: '??????', value: 59},
    //   {name: '??????', value: 59},
    //   {name: '?????????', value: 59},
    //   {name: '??????', value: 59},
    //   {name: '??????', value: 60},
    //   {name: '??????', value: 61},
    //   {name: '??????', value: 62},
    //   {name: '??????', value: 62},
    //   {name: '?????????', value: 63},
    //   {name: '??????', value: 63},
    //   {name: '??????', value: 63},
    //   {name: '??????', value: 64},
    //   {name: '??????', value: 64},
    //   {name: '??????', value: 65},
    //   {name: '??????', value: 66},
    //   {name: '??????', value: 67},
    //   {name: '??????', value: 67},
    //   {name: '??????', value: 70},
    //   {name: '??????', value: 71},
    //   {name: '??????', value: 71},
    //   {name: '??????', value: 71},
    //   {name: '????????????', value: 72},
    //   {name: '??????', value: 72},
    //   {name: '?????????', value: 72},
    //   {name: '??????', value: 72},
    //   {name: '??????', value: 75},
    //   {name: '??????', value: 75},
    //   {name: '??????', value: 79},
    //   {name: '??????', value: 79},
    //   {name: '??????', value: 80},
    //   {name: '??????', value: 80},
    //   {name: '??????', value: 80},
    //   {name: '????????????', value: 84},
    //   {name: '??????', value: 84},
    //   {name: '??????', value: 84},
    //   {name: '??????', value: 85},
    //   {name: '??????', value: 86},
    //   {name: '??????', value: 86},
    //   {name: '?????????', value: 86},
    //   {name: '??????', value: 90},
    //   {name: '??????', value: 90},
    //   {name: '??????', value: 92},
    //   {name: '??????', value: 93},
    //   {name: '??????', value: 95},
    //   {name: '??????', value: 96},
    //   {name: '??????', value: 98},
    //   {name: '??????', value: 99},
    //   {name: '??????', value: 99},
    //   {name: '??????', value: 100},
    //   {name: '??????', value: 103},
    //   {name: '??????', value: 104},
    //   {name: '??????', value: 105},
    //   {name: '??????', value: 106},
    //   {name: '??????', value: 112},
    //   {name: '??????', value: 112},
    //   {name: '??????', value: 113},
    //   {name: '?????????', value: 114},
    //   {name: '??????', value: 116},
    //   {name: '??????', value: 117},
    //   {name: '??????', value: 119},
    //   {name: '?????????', value: 119},
    //   {name: '??????', value: 119},
    //   {name: '??????', value: 120},
    //   {name: '??????', value: 120},
    //   {name: '??????', value: 127},
    //   {name: '??????', value: 130},
    //   {name: '??????', value: 132},
    //   {name: '??????', value: 133},
    //   {name: '??????', value: 134},
    //   {name: '?????????', value: 136},
    //   {name: '??????', value: 143},
    //   {name: '?????????', value: 147},
    //   {name: '??????', value: 148},
    //   {name: '??????', value: 152},
    //   {name: '??????', value: 153},
    //   {name: '??????', value: 154},
    //   {name: '??????', value: 157},
    //   {name: '??????', value: 169},
    //   {name: '??????', value: 175},
    //   {name: '??????', value: 177},
    //   {name: '??????', value: 193},
    //   {name: '??????', value: 194},
    //   {name: '??????', value: 229},
    //   {name: '??????', value: 273},
    //   {name: '??????', value: 279}
    // ];

    // const geoCoordMap = {
    //   '??????': [121.15, 31.89],
    //   '????????????': [109.781327, 39.608266],
    //   '??????': [120.38, 37.35],
    //   '??????': [122.207216, 29.985295],
    //   '????????????': [123.97, 47.33],
    //   '??????': [120.13, 33.38],
    //   '??????': [118.87, 42.28],
    //   '??????': [120.33, 36.07],
    //   '??????': [121.52, 36.89],
    //   '??????': [102.188043, 38.520089],
    //   '??????': [118.58, 24.93],
    //   '??????': [120.53, 36.86],
    //   '??????': [119.46, 35.42],
    //   '??????': [119.97, 35.88],
    //   '??????': [121.05, 32.08],
    //   '??????': [91.11, 29.97],
    //   '??????': [112.02, 22.93],
    //   '??????': [116.1, 24.55],
    //   '??????': [122.05, 37.2],
    //   '??????': [121.48, 31.22],
    //   '?????????': [101.718637, 26.582347],
    //   '??????': [122.1, 37.5],
    //   '??????': [117.93, 40.97],
    //   '??????': [118.1, 24.46],
    //   '??????': [115.375279, 22.786211],
    //   '??????': [116.63, 23.68],
    //   '??????': [124.37, 40.13],
    //   '??????': [121.1, 31.45],
    //   '??????': [103.79, 25.51],
    //   '??????': [121.39, 37.52],
    //   '??????': [119.3, 26.08],
    //   '?????????': [121.979603, 39.627114],
    //   '??????': [120.45, 36.38],
    //   '??????': [123.97, 41.97],
    //   '??????': [102.52, 24.35],
    //   '?????????': [114.87, 40.82],
    //   '??????': [113.57, 37.85],
    //   '??????': [119.942327, 37.177017],
    //   '??????': [120.1, 30.86],
    //   '??????': [116.69, 23.39],
    //   '??????': [120.95, 31.39],
    //   '??????': [121.56, 29.86],
    //   '??????': [110.359377, 21.270708],
    //   '??????': [116.35, 23.55],
    //   '??????': [122.41, 37.16],
    //   '?????????': [119.16, 34.59],
    //   '?????????': [120.836932, 40.711052],
    //   '??????': [120.74, 31.64],
    //   '??????': [113.75, 23.04],
    //   '??????': [114.68, 23.73],
    //   '??????': [119.15, 33.5],
    //   '??????': [119.9, 32.49],
    //   '??????': [108.33, 22.84],
    //   '??????': [122.18, 40.65],
    //   '??????': [114.4, 23.09],
    //   '??????': [120.26, 31.91],
    //   '??????': [120.75, 37.8],
    //   '??????': [113.62, 24.84],
    //   '?????????': [98.289152, 39.77313],
    //   '??????': [113.23, 23.16],
    //   '??????': [109.47, 36.6],
    //   '??????': [112.53, 37.87],
    //   '??????': [113.01, 23.7],
    //   '??????': [113.38, 22.52],
    //   '??????': [102.73, 25.04],
    //   '??????': [118.73, 36.86],
    //   '??????': [122.070714, 41.119997],
    //   '??????': [113.08, 36.18],
    //   '??????': [114.07, 22.62],
    //   '??????': [113.52, 22.3],
    //   '??????': [118.3, 33.96],
    //   '??????': [108.72, 34.36],
    //   '??????': [109.11, 35.09],
    //   '??????': [119.97, 36.77],
    //   '??????': [113.11, 23.05],
    //   '??????': [110.35, 20.02],
    //   '??????': [113.06, 22.61],
    //   '??????': [117.53, 36.72],
    //   '??????': [112.44, 23.05],
    //   '??????': [121.62, 38.92],
    //   '??????': [111.5, 36.08],
    //   '??????': [120.63, 31.16],
    //   '?????????': [106.39, 39.04],
    //   '??????': [123.38, 41.8],
    //   '??????': [120.62, 31.32],
    //   '??????': [110.88, 21.68],
    //   '??????': [120.76, 30.77],
    //   '??????': [125.35, 43.88],
    //   '??????': [120.03336, 36.264622],
    //   '??????': [106.27, 38.47],
    //   '?????????': [120.555821, 31.875428],
    //   '?????????': [111.19, 34.76],
    //   '??????': [121.15, 41.13],
    //   '??????': [115.89, 28.68],
    //   '??????': [109.4, 24.33],
    //   '??????': [109.511909, 18.252847],
    //   '??????': [104.778442, 29.33903],
    //   '??????': [126.57, 43.87],
    //   '??????': [111.95, 21.85],
    //   '??????': [105.39, 28.91],
    //   '??????': [101.74, 36.56],
    //   '??????': [104.56, 29.77],
    //   '????????????': [111.65, 40.82],
    //   '??????': [104.06, 30.67],
    //   '??????': [113.3, 40.12],
    //   '??????': [119.44, 32.2],
    //   '??????': [110.28, 25.29],
    //   '?????????': [110.479191, 29.117096],
    //   '??????': [119.82, 31.36],
    //   '??????': [109.12, 21.49],
    //   '??????': [108.95, 34.27],
    //   '??????': [119.56, 31.74],
    //   '??????': [118.49, 37.46],
    //   '?????????': [129.58, 44.6],
    //   '??????': [106.9, 27.7],
    //   '??????': [120.58, 30.01],
    //   '??????': [119.42, 32.39],
    //   '??????': [119.95, 31.79],
    //   '??????': [119.1, 36.62],
    //   '??????': [106.54, 29.59],
    //   '??????': [121.420757, 28.656386],
    //   '??????': [118.78, 32.04],
    //   '??????': [118.03, 37.36],
    //   '??????': [106.71, 26.57],
    //   '??????': [120.29, 31.59],
    //   '??????': [123.73, 41.3],
    //   '????????????': [84.77, 45.59],
    //   '??????': [109.5, 34.52],
    //   '?????????': [118.48, 31.56],
    //   '??????': [107.15, 34.38],
    //   '??????': [113.21, 35.24],
    //   '??????': [119.16, 31.95],
    //   '??????': [116.46, 39.92],
    //   '??????': [117.2, 34.26],
    //   '??????': [115.72, 37.72],
    //   '??????': [110, 40.58],
    //   '??????': [104.73, 31.48],
    //   '????????????': [87.68, 43.77],
    //   '??????': [117.57, 34.86],
    //   '??????': [120.19, 30.26],
    //   '??????': [118.05, 36.78],
    //   '??????': [122.85, 41.12],
    //   '??????': [119.48, 31.43],
    //   '?????????': [86.06, 41.68],
    //   '??????': [114.35, 36.1],
    //   '??????': [114.35, 34.79],
    //   '??????': [117, 36.65],
    //   '??????': [104.37, 31.13],
    //   '??????': [120.65, 28.01],
    //   '??????': [115.97, 29.71],
    //   '??????': [114.47, 36.6],
    //   '??????': [119.72, 30.23],
    //   '??????': [103.73, 36.03],
    //   '??????': [116.83, 38.33],
    //   '??????': [118.35, 35.05],
    //   '??????': [106.110698, 30.837793],
    //   '??????': [117.2, 39.13],
    //   '??????': [119.95, 30.07],
    //   '??????': [117.13, 36.18],
    //   '??????': [120.23, 29.71],
    //   '??????': [113.65, 34.76],
    //   '?????????': [126.63, 45.75],
    //   '??????': [115.97, 36.45],
    //   '??????': [118.38, 31.33],
    //   '??????': [118.02, 39.63],
    //   '?????????': [113.29, 33.75],
    //   '??????': [114.48, 37.05],
    //   '??????': [116.29, 37.45],
    //   '??????': [116.59, 35.38],
    //   '??????': [112.239741, 30.335165],
    //   '??????': [111.3, 30.7],
    //   '??????': [120.06, 29.32],
    //   '??????': [119.92, 28.45],
    //   '??????': [112.44, 34.7],
    //   '?????????': [119.57, 39.95],
    //   '??????': [113.16, 27.83],
    //   '?????????': [114.48, 38.03],
    //   '??????': [117.67, 36.19],
    //   '??????': [111.69, 29.05],
    //   '??????': [115.48, 38.85],
    //   '??????': [112.91, 27.87],
    //   '??????': [119.64, 29.12],
    //   '??????': [113.09, 29.37],
    //   '??????': [113, 28.21],
    //   '??????': [118.88, 28.97],
    //   '??????': [116.7, 39.53],
    //   '??????': [115.480656, 35.23375],
    //   '??????': [117.27, 31.86],
    //   '??????': [114.31, 30.52],
    //   '??????': [125.03, 46.58]
    // };

    // var convertData = (data) => {
    //   var res = [];
    //   for (var i = 0; i < data.length; i++) {
    //     var geoCoord = geoCoordMap[data[i].name];
    //     if (geoCoord) {
    //       res.push({
    //         name: data[i].name,
    //         value: geoCoord.concat(data[i].value)
    //       });
    //     }
    //   }
    //   return res;
    // };


    // const mapChartOption: any = {
    //   backgroundColor: 'transparent',
    //   title: {
    //     text: '??????????????????????????????',
    //     subtext: 'data from PM25.in',
    //     sublink: 'http://www.pm25.in',
    //     left: 'center',
    //     textStyle: {
    //       color: '#fff'
    //     }
    //   },
    //   tooltip: {
    //     trigger: 'item'
    //   },
    //   bmap: {
    //     center: [104.114129, 37.550339],
    //     zoom: 5,
    //     roam: true,
    //     mapStyle: {
    //       styleJson: [
    //         {
    //           "featureType": "water",
    //           "elementType": "all",
    //           "stylers": {
    //             "color": "#044161"
    //           }
    //         },
    //         {
    //           "featureType": "land",
    //           "elementType": "all",
    //           "stylers": {
    //             "color": "#004981"
    //           }
    //         },
    //         {
    //           "featureType": "boundary",
    //           "elementType": "geometry",
    //           "stylers": {
    //             "color": "#064f85"
    //           }
    //         },
    //         {
    //           "featureType": "railway",
    //           "elementType": "all",
    //           "stylers": {
    //             "visibility": "off"
    //           }
    //         },
    //         {
    //           "featureType": "highway",
    //           "elementType": "geometry",
    //           "stylers": {
    //             "color": "#004981"
    //           }
    //         },
    //         {
    //           "featureType": "highway",
    //           "elementType": "geometry.fill",
    //           "stylers": {
    //             "color": "#005b96",
    //             "lightness": 1
    //           }
    //         },
    //         {
    //           "featureType": "highway",
    //           "elementType": "labels",
    //           "stylers": {
    //             "visibility": "off"
    //           }
    //         },
    //         {
    //           "featureType": "arterial",
    //           "elementType": "geometry",
    //           "stylers": {
    //             "color": "#004981"
    //           }
    //         },
    //         {
    //           "featureType": "arterial",
    //           "elementType": "geometry.fill",
    //           "stylers": {
    //             "color": "#00508b"
    //           }
    //         },
    //         {
    //           "featureType": "poi",
    //           "elementType": "all",
    //           "stylers": {
    //             "visibility": "off"
    //           }
    //         },
    //         {
    //           "featureType": "green",
    //           "elementType": "all",
    //           "stylers": {
    //             "color": "#056197",
    //             "visibility": "off"
    //           }
    //         },
    //         {
    //           "featureType": "subway",
    //           "elementType": "all",
    //           "stylers": {
    //             "visibility": "off"
    //           }
    //         },
    //         {
    //           "featureType": "manmade",
    //           "elementType": "all",
    //           "stylers": {
    //             "visibility": "off"
    //           }
    //         },
    //         {
    //           "featureType": "local",
    //           "elementType": "all",
    //           "stylers": {
    //             "visibility": "off"
    //           }
    //         },
    //         {
    //           "featureType": "arterial",
    //           "elementType": "labels",
    //           "stylers": {
    //             "visibility": "off"
    //           }
    //         },
    //         {
    //           "featureType": "boundary",
    //           "elementType": "geometry.fill",
    //           "stylers": {
    //             "color": "#029fd4"
    //           }
    //         },
    //         {
    //           "featureType": "building",
    //           "elementType": "all",
    //           "stylers": {
    //             "color": "#1a5787"
    //           }
    //         },
    //         {
    //           "featureType": "label",
    //           "elementType": "all",
    //           "stylers": {
    //             "visibility": "off"
    //           }
    //         }
    //       ]
    //     }
    //   },
    //   series: [
    //     {
    //       name: 'pm2.5',
    //       type: 'scatter',
    //       coordinateSystem: 'bmap',
    //       data: convertData(data),
    //       encode: {
    //         value: 2
    //       },
    //       symbolSize: (val) => {
    //         return val[2] / 10;
    //       },
    //       label: {
    //         formatter: '{b}',
    //         position: 'right'
    //       },
    //       itemStyle: {
    //         color: '#ddb926'
    //       },
    //       emphasis: {
    //         label: {
    //           show: true
    //         }
    //       }
    //     },
    //     {
    //       name: 'Top 5',
    //       type: 'effectScatter',
    //       coordinateSystem: 'bmap',
    //       data: convertData(data.sort((a, b) => {
    //         return b.value - a.value;
    //       }).slice(0, 6)),
    //       encode: {
    //         value: 2
    //       },
    //       symbolSize: (val) => {
    //         return val[2] / 10;
    //       },
    //       showEffectOn: 'emphasis',
    //       rippleEffect: {
    //         brushType: 'stroke'
    //       },
    //       hoverAnimation: true,
    //       label: {
    //         formatter: '{b}',
    //         position: 'right',
    //         show: true
    //       },
    //       itemStyle: {
    //         color: '#f4e925',
    //         shadowBlur: 10,
    //         shadowColor: '#333'
    //       },
    //       zlevel: 1
    //     },
    //     {
    //       type: 'custom',
    //       coordinateSystem: 'bmap',
    //       renderItem: (params, api) => {
    //         var coords = [
    //           [116.7, 39.53],
    //           [103.73, 36.03],
    //           [112.91, 27.87],
    //           [120.65, 28.01],
    //           [119.57, 39.95]
    //         ];
    //         var points = [];
    //         for (var i = 0; i < coords.length; i++) {
    //           points.push(api.coord(coords[i]));
    //         }
    //         var color = api.visual('color');

    //         return {
    //           type: 'polygon',
    //           shape: {
    //             points: echarts.graphic.clipPointsByRect(points, {
    //               x: params.coordSys.x,
    //               y: params.coordSys.y,
    //               width: params.coordSys.width,
    //               height: params.coordSys.height
    //             })
    //           },
    //           style: api.style({
    //             fill: color,
    //             // stroke: echarts.color.lift(color)
    //           })
    //         };
    //       },
    //       itemStyle: {
    //         opacity: 0.5
    //       },
    //       animation: false,
    //       silent: true,
    //       data: [0],
    //       z: -10
    //     }
    //   ]
    // };

    if(dbClikcSarchElement != "load"){
      var bigboxDom:any = document.getElementById("bigCharts")
      this.mapEchart = echarts.init(bigboxDom);

    }else{
      if (!this.mapEchart) {
        this.mapEchart = echarts.init(this.mapEchartElm.nativeElement);
        console.log(this.mapEchartElm.nativeElement)
      }

    }

    this.mapEchart.setOption(option);
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
