<template>
    <div class="map">
        <el-date-picker
                v-model="date1"
                type="daterange"
                align="left"
                unlink-panels
                range-separator="-"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                :picker-options="pickerOptions"
                 v-if="hackReset"
                 @change="dataChange"
              >
        </el-date-picker>
        <h2 class="count" >累计任务&nbsp;<span id="countNum"></span>&nbsp;次</h2>
        <div class="chart" id="chart"></div>
        <div class="map1"></div>
        <div class="map2"></div>
        <div class="map3"></div>
    </div>
</template>

<script>
 require("../../../static/js/china")  //引入china.js地图文件
import miaov from '../../../static/js/miaov'
export default {
    name: 'TasksystemCcenter',

    data() {
        return {
        count:0,
        date1:[],
        hackReset:false,
        pickerOptions: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            },
          },
        ],
      },
 // 全国省份数据
    toolTipData: [{
        "provinceName": "北京",
        "provinceKey": 110000,
        "cityName": null,
        "cityKey": null,
        "shopCount": 58,
        "totalPrice":0,
        "orderCount": 31744,
        "onlineCount": 0
    }, {
        "provinceName": "天津",
        "provinceKey": 120000,
        "cityName": null,
        "cityKey": null,
        "shopCount": 74,
        "totalPrice":0,
        "orderCount": 30025,
        "onlineCount": 0
    }, {
        "provinceName": "河北",
        "provinceKey": 130000,
        "cityName": null,
        "cityKey": null,
        "shopCount": 175,
        "totalPrice":0,
        "orderCount": 50625,
        "onlineCount": 0
    }, {
        "provinceName": "山西",
        "provinceKey": 140000,
        "cityName": null,
        "cityKey": null,
        "shopCount": 73,
        "totalPrice":0,
        "orderCount": 20427,
        "onlineCount": 0
    }, {
        "provinceName": "内蒙古",
        "provinceKey": 150000,
        "cityName": null,
        "cityKey": null,
        "shopCount": 46,
        "totalPrice":0,
        "orderCount": 14585,
        "onlineCount": 0
    }, {
        "provinceName": "辽宁",
        "provinceKey": 210000,
        "cityName": null,
        "cityKey": null,
        "shopCount": 74,
        "totalPrice":0,
        "orderCount": 27143,
        "onlineCount": 0
    }, {
        "provinceName": "吉林",
        "provinceKey": 220000,
        "cityName": null,
        "cityKey": null,
        "shopCount": 25,
        "totalPrice":0,
        "orderCount": 11123,
        "onlineCount": 0
    }, {
        "provinceName": "黑龙江",
        "provinceKey": 230000,
        "cityName": null,
        "cityKey": null,
        "shopCount": 25,
        "totalPrice":0,
        "orderCount": 6481,
        "onlineCount": 0
    }, {
        "provinceName": "上海",
        "provinceKey": 310000,
        "cityName": null,
        "cityKey": null,
        "shopCount": 78,
        "totalPrice":0,
        "orderCount": 26753,
        "onlineCount": 0
    }, {
        "provinceName": "江苏",
        "provinceKey": 320000,
        "cityName": null,
        "cityKey": null,
        "shopCount": 475,
        "totalPrice":0,
        "orderCount": 158180,
        "onlineCount": 0
    }, {
        "provinceName": "浙江",
        "provinceKey": 330000,
        "cityName": null,
        "cityKey": null,
        "shopCount": 332,
        "totalPrice":0,
        "orderCount": 116344,
        "onlineCount": 0
    }, {
        "provinceName": "安徽",
        "provinceKey": 340000,
        "cityName": null,
        "cityKey": null,
        "shopCount": 168,
        "totalPrice":0,
        "orderCount": 57139,
        "onlineCount": 0
    }, {
        "provinceName": "福建",
        "provinceKey": 350000,
        "cityName": null,
        "cityKey": null,
        "shopCount": 145,
        "totalPrice":0,
        "orderCount": 65228,
        "onlineCount": 0
    }, {
        "provinceName": "江西",
        "provinceKey": 360000,
        "cityName": null,
        "cityKey": null,
        "shopCount": 103,
        "totalPrice":0,
        "orderCount": 31822,
        "onlineCount": 0
    }, {
        "provinceName": "山东",
        "provinceKey": 370000,
        "cityName": null,
        "cityKey": null,
        "shopCount": 198,
        "totalPrice":0,
        "orderCount": 59966,
        "onlineCount": 0
    }, {
        "provinceName": "河南",
        "provinceKey": 410000,
        "cityName": null,
        "cityKey": null,
        "shopCount": 184,
        "totalPrice":0,
        "orderCount": 52829,
        "onlineCount": 0
    }, {
        "provinceName": "湖北",
        "provinceKey": 420000,
        "cityName": null,
        "cityKey": null,
        "shopCount": 125,
        "totalPrice":0,
        "orderCount": 46768,
        "onlineCount": 0
    }, {
        "provinceName": "湖南",
        "provinceKey": 430000,
        "cityName": null,
        "cityKey": null,
        "shopCount": 111,
        "totalPrice":0,
        "orderCount": 44094,
        "onlineCount": 0
    }, {
        "provinceName": "广东",
        "provinceKey": 440000,
        "cityName": null,
        "cityKey": null,
        "shopCount": 384,
        "totalPrice":0,
        "orderCount": 165774,
        "onlineCount": 0
    }, {
        "provinceName": "广西",
        "provinceKey": 450000,
        "cityName": null,
        "cityKey": null,
        "shopCount": 194,
        "totalPrice":0,
        "orderCount": 69882,
        "onlineCount": 0
    }, {
        "provinceName": "海南",
        "provinceKey": 460000,
        "cityName": null,
        "cityKey": null,
        "shopCount": 58,
        "totalPrice":0,
        "orderCount": 33090,
        "onlineCount": 0
    }, {
        "provinceName": "重庆",
        "provinceKey": 500000,
        "cityName": null,
        "cityKey": null,
        "shopCount": 35,
        "totalPrice":0,
        "orderCount": 20163,
        "onlineCount": 0
    }, {
        "provinceName": "四川",
        "provinceKey": 510000,
        "cityName": null,
        "cityKey": null,
        "shopCount": 127,
        "totalPrice":0,
        "orderCount": 43625,
        "onlineCount": 0
    }, {
        "provinceName": "贵州",
        "provinceKey": 520000,
        "cityName": null,
        "cityKey": null,
        "shopCount": 78,
        "totalPrice":0,
        "orderCount": 28817,
        "onlineCount": 0
    }, {
        "provinceName": "云南",
        "provinceKey": 530000,
        "cityName": null,
        "cityKey": null,
        "shopCount": 87,
        "totalPrice":0,
        "orderCount": 30916,
        "onlineCount": 0
    }, {
        "provinceName": "西藏",
        "provinceKey": 540000,
        "cityName": null,
        "cityKey": null,
        "shopCount": 5,
        "totalPrice":0,
        "orderCount": 2470,
        "onlineCount": 0
    }, {
        "provinceName": "陕西",
        "provinceKey": 610000,
        "cityName": null,
        "cityKey": null,
        "shopCount": 65,
        "totalPrice":0,
        "orderCount": 27093,
        "onlineCount": 0
    }, {
        "provinceName": "甘肃",
        "provinceKey": 620000,
        "cityName": null,
        "cityKey": null,
        "shopCount": 40,
        "totalPrice":0,
        "orderCount": 12390,
        "onlineCount": 0
    }, {
        "provinceName": "青海",
        "provinceKey": 630000,
        "cityName": null,
        "cityKey": null,
        "shopCount": 3,
        "totalPrice":0,
        "orderCount": 1161,
        "onlineCount": 0
    }, {
        "provinceName": "宁夏",
        "provinceKey": 640000,
        "cityName": null,
        "cityKey": null,
        "shopCount": 14,
        "totalPrice":0,
        "orderCount": 5240,
        "onlineCount": 0
    }, {
        "provinceName": "新疆",
        "provinceKey": 650000,
        "cityName": null,
        "cityKey": null,
        "shopCount": 43,
        "totalPrice":0,
        "orderCount": 11741,
        "onlineCount": 0
    }, {
        "provinceName": "台湾",
        "provinceKey": 650000,
        "cityName": null,
        "cityKey": null,
        "shopCount": 43,
        "totalPrice":0,
        "orderCount": 11741,
        "onlineCount": 0
    }, {
        "provinceName": "南海诸岛",
        "provinceKey": 650000,
        "cityName": null,
        "cityKey": null,
        "shopCount": 43,
        "totalPrice":0,
        "orderCount": 11741,
        "onlineCount": 0
    }],
    seriesData:[],
};


    
    },

mounted() {


    this.getMapData()



 
 },

methods: {
    dataChange(){
       this.getMapData()
    },

getMapData(){
    var that = this
    var endTime = new Date();
    var startTime = new Date(new Date()-1000*60*60*24*365)
    this.date1[0] = startTime
    this.date1[1] = endTime
    this.hackReset = true
   var requeseEndTime = endTime.getFullYear()+"-"+(endTime.getMonth()+1)+"-"+endTime.getDate()
   var requeseStartTime = startTime.getFullYear()+"-"+(startTime.getMonth()+1)+"-"+startTime.getDate()

    var requestData = {

            startTime:requeseStartTime,
            endTime:requeseEndTime

    } 

this.$getData.getList("/taskArchives/totalTaskOfPlace","post",requestData)
.then(data=>{
   
that.count = 0
    let mapList = data.data.data

    $.each(mapList,function(i,n){
           $.each(that.toolTipData,function(i1,n1){
               if(n1.provinceName == n.place){
                   n1.totalPrice = n.num
               }
           })

        that.count += n.num
    })
       this.initEcharts();

           miaov.numAnimation()
                  
            $("#countNum").numberRock({
                    speed:14,
                    count:that.count
            })

                 

    })
    .catch(e=>{
        console.log(e)
    })

},


initEcharts() {


    var myChart = this.$echarts.init(document.getElementById('chart'));
        var tmp =  this.toolTipData;
        var option = {
            tooltip: {
                trigger: 'item',
                formatter: function(params) { // 鼠标滑过显示的数据
                        var toolTiphtml = ''
                        for (var i = 0; i < tmp.length; i++) {
                            if (params.name == tmp[i].provinceName) {
                                toolTiphtml += tmp[i].provinceName + '<br>次数：' + tmp[i].totalPrice;
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
		            layoutCenter: ["50%", "50%"], //地图位置
		            layoutSize: '100%',
		            zoom: 1.3, //当前视角的缩放比例
		            roam: true, //是否开启平游或缩放
		            scaleLimit: { //滚轮缩放的极限控制
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
        myChart.setOption(option);
        /* 响应式 */
        $(window).resize(function() {
            myChart.resize();
        });

      
    }

    },
};
</script>

<style lang="scss" >
     .map {
        position: relative;
        height: 10.125rem;
        
    #back {
        position:absolute;
        top:10px;
        left:0;
        cursor:pointer;
    }
    .hidden {
        display:none;
    }
        .el-range-editor.el-input__inner{
            border: 1px solid #2e5fcd;
            background: none;
            color: #2e5fcd !important;
            i{
                 color: #2e5fcd !important;
            }
        }
        .el-range-editor .el-range-input{
            background: none !important;
        }
        .count{
            text-align: center;
            color: #fff;
            position: absolute;
            top:15%;
            left: 35%;
            span{
                color: rgb(225, 171, 24);
            }
        }
        .chart {
            position: absolute;
            top: 20%;
            left: 0;
            z-index: 5;
            height: 10.125rem;
            width: 100%;
            height: 80%;
        }
        .map1,
        .map2,
        .map3 {
            position: absolute;
            top: 60%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 19.475rem;
            height: 19.475rem;
            background: url("~@/assets/map.png") no-repeat;
            background-size: 100% 100%;
            opacity: 0.3;
        }
        .map2 {
            width: 21.0375rem;
            height: 21.0375rem;
            background-image: url("~@/assets/lbx.png");
            opacity: 0.6;
            animation: rotate2 15s linear infinite;
            z-index: 2;
        }
        .map3 {
            width: 20.075rem;
            height: 20.075rem;
            background-image: url("~@/assets/jt.png");
            animation: rotate1 10s linear infinite;
        }

        @keyframes rotate2 {
            from {
            transform: translate(-50%, -50%) rotate(0deg);
            }
            to {
            transform: translate(-50%, -50%) rotate(360deg);
            }
        }
        @keyframes rotate1 {
            from {
            transform: translate(-50%, -50%) rotate(0deg);
            }
            to {
            transform: translate(-50%, -50%) rotate(-360deg);
            }
        }
        }
</style>