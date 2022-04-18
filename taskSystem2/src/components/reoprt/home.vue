<template>
  <div class="report">
    <h3>任务报告</h3>

    <div class="content">
      <div class="left">
        <div class="status box">
          <h4>报告状态</h4>
          <span>{{ sataus }}</span>
          <div class="progress">
            <h5>整体进度</h5>
            <div class="eprogress">
              <el-progress
                :percentage="100"
                color="#0273ff"
                stroke-linecap="square"
                stroke-width="10"
              ></el-progress>
            </div>
          </div>

          <ul>
            <li>
              <div>2 <span>类</span></div>
              <p>已识别目标</p>
            </li>
            <li>
              <div class="piechar">
                <el-progress
                  type="circle"
                  :percentage="100"
                  stroke-width="18"
                  color="#7428ff"
                  stroke-linecap="butt"
                ></el-progress>
              </div>
              <p>图像识别进度{{imgNum}}/{{imgNum}}</p>
            </li>
            <li>
              <div class="piechar">
                <el-progress
                  type="circle"
                  :percentage="100"
                  stroke-width="18"
                  color="#0bdea0"
                  stroke-linecap="butt"
                ></el-progress>
              </div>
              <p>视频识别进度{{vedioNum}}/{{vedioNum}}</p>
            </li>
          </ul>
        </div>

        <div class="freq box">
          <h4>出现频率</h4>
          <div class="barChart1"></div>
        </div>

        <div class="baseInfo box">
          <h4>基本信息</h4>
          <div class="table">

                <el-row>
                    <el-col :span="3"><div class="grid-content bg-purple">任务编号</div></el-col>
                    <el-col :span="9"><div class="grid-content bg-purple-light">　{{baseInfo.num}}</div></el-col>
                    <el-col :span="3"><div class="grid-content bg-purple">任务名称</div></el-col>
                    <el-col :span="9"><div class="grid-content bg-purple-light">　{{baseInfo.name}}</div></el-col>
                </el-row>
                <el-row>
                    <el-col :span="3"><div class="grid-content bg-purple">任务时间</div></el-col>
                    <el-col :span="9"><div class="grid-content bg-purple-light">　{{baseInfo.time}}</div></el-col>
                    <el-col :span="3"><div class="grid-content bg-purple">任务目标</div></el-col>
                    <el-col :span="9"><div class="grid-content bg-purple-light">　{{baseInfo.target}}</div></el-col>
                </el-row>
                <el-row>
                    <el-col :span="3"><div class="grid-content bg-purple">任务地点</div></el-col>
                    <el-col :span="9"><div class="grid-content bg-purple-light">　{{baseInfo.adress}}</div></el-col>
                    <el-col :span="3"><div class="grid-content bg-purple">侦察装备</div></el-col>
                    <el-col :span="9"><div class="grid-content bg-purple-light">　{{baseInfo.equip}}</div></el-col>
                </el-row>
                <el-row>
                    <el-col :span="3"><div class="grid-content bg-purple last-bg-purple">任务背景</div></el-col>
                    <el-col :span="21"><div class="grid-content bg-purple-light last-bg-purple-light">　<p>{{baseInfo.bg}}</p></div></el-col>
                </el-row>
          </div>
          <div class="route box">
               <h4>路线图</h4>
               <div class="pic" id="allmap">
                   <!-- <img src="@/assets/route.png" alt=""> -->
               </div>
          </div>
        </div>
      </div>
      <div class="right">

        <div class="obj box">
          <h4>关键对象</h4>
            <div class="order">
                <el-row>
                    <el-col :span="3"  v-if="false"><div class="grid-content bg-purple">排序方式:</div></el-col>
                        <el-col :span="13" v-if="false">
                            <el-radio-group v-model="radio" fill="transparent">
                                <el-radio :label="3">按时间排序</el-radio>
                               <el-radio :label="6">按类型排序</el-radio>
                               <el-radio :label="9">按地点排序</el-radio>
                                </el-radio-group>
                           </el-col>
                             <el-col :span="1.5">
                                 <div style="line-height:24px">筛选：</div>
                           </el-col>
                            <el-col :span="6">
                                 <el-select placeholder="" v-model="sx" @change="selectChange()">
                                    <el-option label="全部" value=""></el-option>
                                    <el-option label="图片" value="img"></el-option>
                                     <el-option label="视频" value="video"></el-option>
                                </el-select>
                        </el-col>
                </el-row>

             

            </div>
               <ul>
                    <li v-for="item in listData">
                        <div class="pic">
                            <img :src="item.url" alt="" v-if="item.type == 'img'">
                           <video controls  v-else>
                          <source :src="item.url" type="video/mp4">
                          <source :src="item.url" type="video/ogg">
                        您的浏览器不支持Video标签。
                        </video>
                        </div> 
                        <div class="content">
                            <h4>{{item.title}}</h4>
                            <!-- <p>
                              {{item.content}}
                            </p> -->
                        </div>
                    </li>
                    
                </ul>

        <div class="pagiation">
                <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="pageNum"
                :page-sizes="[5, 10, 20, 50]"
                :page-size="pageSize"
                layout="total, sizes, prev, pager, next, jumper"
                :total="total">
                </el-pagination>
        </div>

        </div>

            <div class="label box">
               <h4>标签</h4>
               <ul>
                   <li v-for="item in label">{{item}}</li>
               </ul>
          </div>

      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "TasksystemHome",

  data() {
    return {
        vedioNum:0,
        imgNum:0,
        listData:[],
        pageSize:5,
        pageNum:1,
        total:0,
        label:[],
        sx:'',
        radio: 3,
      sataus: "整理中",
        baseInfo:{
            num:'',
            name:'',
            time:'',
            target:'',
            adress:'',
            equip:"",
            bg:''
        },
        // picUrl:"@/assets/route.png"
    };
  },

  mounted() {

// this.$getData.getList()

this.requestTaskReport(this.$route.query.id)
this.requestKeyObjData(this.$route.query.id)
this.requestListData(this.$route.query.id)



  },

methods: {

requestListData(taskId){
    let postData={
        id:taskId
    }
  this.$getData.getList("/taskArchives/queryInfo ","post",postData)
  .then(data=>{
    this.vedioNum = data.data.data.vedioNum
    this.imgNum = data.data.data.imgNum
  })
  .catch(e=>{
    console.log(e)
  })

},


 requestKeyObjData(taskId){

   let postData={
      taskId,
      pageSize:this.pageSize,
      pageNo:this.pageNum,
      type:this.sx
   }

  this.$getData.getList("/taskArchives/queryPageOfKeyObject","post",postData)
  .then(data=>{
    var that = this
    let requestList = data.data.data
     this.total = requestList.totalItem
    this.listData = []
        $.each(requestList.list,function(i,n){

          if(n.type == 'img'){
            let checkResult = JSON.parse(n.checkResult)
            let url = n.url+"/"+checkResult.ossKey
            let title = checkResult.typeName
            let content = checkResult.sceneType
      

              that.listData.push({
                    url:url,
                    title:title,
                    content:content,
                    type:n.type
              })


          }else{

            let keyObjectList = JSON.parse(n.keyObjectList)
            let url = n.url+"/"+n.targetPath
            let title = keyObjectList[0].objectName

             let content = ""

            $.each(keyObjectList,function(i1,n1){

                  content+= n1.appearTime + "   "
            })
           
      

              that.listData.push({
                    url:url,
                    title:title,
                    content:content,
                    type:n.type
              })

          }



        })
  })
  .catch(e=>{
    console.log(e)
  })


 },

initMap(route){
    var host = window.isLocal ? window.server : "https://iserver.supermap.io";
    var url = host + "/iserver/services/map-china400/rest/maps/China_4326";
    var serverUrl = host+"/iserver/services/plot-jingyong/rest/plot/";
    var map;
    map = L.map('allmap', {
        preferCanvas: true,
        crs: L.CRS.EPSG4326,
        center: [39.9,116.3],
        maxZoom: 18,
        zoom: 10
    });

  L.supermap.tiledMapLayer(url).addTo(map);
  console.log(L.supermap.plotting)

  // var plottingLayer = L.supermap.plotting.plottingLayer("plot", serverUrl);
  // plottingLayer.addTo(map);
  // var drawControl = L.supermap.plotting.drawControl(plottingLayer);
  // drawControl.addTo(map);
  // var editControl = L.supermap.plotting.editControl();
  // editControl.addTo(map);
  // var plotting = L.supermap.plotting.getControl(map, serverUrl);

var linePoints = [];
    $.each(route,function(i,n){
        L.marker([n.Latitude*1,n.Longitude*1]).addTo(map);
        linePoints.push([n.Latitude*1,n.Longitude*1]);
    })

    var polyline = L.polyline(linePoints, {color: 'red'}).addTo(map);
    map.fitBounds(polyline.getBounds());
//  plottingLayer.createSymbol(0, SuperMap.Plot.SymbolType.POLYLINESYMBOL, linePoints);






// var map = new BMapGL.Map("allmap");
// 	var point = new BMapGL.Point(route[0].Longitude*1, route[0].Latitude*1);
// 	map.centerAndZoom(point, 12);
// 	map.enableScrollWheelZoom(true);
//    function startLushu() {
//         var fly = 'data:image/png;base64,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';
//    var lushu = new BMapGLLib.LuShu(map, polyline.getPath(), {
//             geodesic: true,
//             autoCenter: true,
//             icon: new BMapGL.Icon(fly, new BMapGL.Size(48, 48), { anchor: new BMapGL.Size(24, 24) }),
//             speed: 5000,
//             enableRotation: true
//         });

//         setTimeout(lushu.start(), 4000);
//     }

// var path = []
  
//     $.each(route,function(i,n){
//         path.push(new BMapGL.Point(n.Longitude*1,n.Latitude*1))
//     })

//     var polyline = new BMapGL.Polyline(path, {
//         clip: false,
//         geodesic: true,
//         strokeWeight: 3,
//         strokeColor:'red',
//         strokeStyle:"dashed"
//     });
//   map.addOverlay(polyline);
//   startLushu();
},

initCharts(obj){

   var pieChart1 = this.$echarts.init(document.querySelector(".barChart1"));
    var optionP1 = {
      color: ["#0273ff", "#ffa902"],
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "cross",
          crossStyle: {
            color: "#999",
          },
        },
      },
    dataZoom: [
      {
        type: 'inside',
        start :0,
        end:10
      },
      {
        type: 'slider'
      }
    ],
      grid: {
        bottom: 70,
      },
      legend: {
        data:["影像中时长","图像中次数"],
        textStyle: {
          color: "#fff",
        },
      },
      xAxis: [
        {
          type: "category",
          data: obj.xData,
          axisPointer: {
            type: "shadow",
          },
          axisTick: {
            show: false,
          },

          axisLine: {
            lineStyle: {
              color: "#352e62",
              type: "dashed",
            },
          },
          axisLabel: {
            color: "#fff",
          },
        },
      ],
      yAxis: [
        {
          type: "value",
          name: "单位（毫秒）",
          min: 0,
          axisLabel: {
            formatter: "{value}",
            color: "#fff",
          },
          splitLine: {
            show: false,
          },
          nameTextStyle: {
            color: "#fff",
          },
        },
        {
          type: "value",
          name: "单位（次数）",
          min: 0,
          axisLabel: {
            formatter: "{value} ",
            color: "#fff",
          },

          nameTextStyle: {
            color: "#fff",
          },
          axisLine: {
            show: false, //不显示坐标轴线
          },
          splitLine: {
            lineStyle: {
              color: "#352e62",
              type: "dashed",
            },
          },
        },
      ],
      series: [
        {
          name: "影像中时长",
          type: "bar",
          data: obj.yData1,
          barWidth: 15,
        },
        {
          name: "图像中次数",
          type: "bar",
          yAxisIndex: 1,
          data: obj.yData2,
          barWidth: 15,
        },
      ],
    };
    pieChart1.setOption(optionP1);




    },


requestTaskReport(id){

      this.$getData.getList("/taskArchives/queryTaskReport","post",{id})
      .then(data=>{
       let requestBaseData = data.data.data
       this.baseInfo.num = requestBaseData.taskCode
         this.baseInfo.bg = requestBaseData.taskBackground
         this.baseInfo.equip = requestBaseData.useEquipment
         this.baseInfo.name = requestBaseData.taskName
          this.baseInfo.target = requestBaseData.taskTarget
           this.baseInfo.time = requestBaseData.startTime + " — " +requestBaseData.endTime
           this.baseInfo.adress =  requestBaseData.place


  let chartsData = {
   xData:[],
   yData1:[],
   yData2:[]
  }

if(requestBaseData.frequencyOccurrence){

    $.each(JSON.parse(requestBaseData.frequencyOccurrence),function(i,n){
        chartsData.xData.push(n.tagName)
         chartsData.yData1.push(n.tagData.duration)
          chartsData.yData2.push(n.tagData.frequency)
    })

}
this.initCharts(chartsData)
let route = JSON.parse(requestBaseData.route);
if(route){


 this.initMap(route)


 

}
this.label = JSON.parse(requestBaseData.labels)

      })
      .catch(e=>{
        console.log(e)
      })

   },


handleSizeChange(val) {
  this.pageSize = val
  this.requestKeyObjData(this.$route.query.id)
},
handleCurrentChange(val) {
      this.pageNum = val
      this.requestKeyObjData(this.$route.query.id)
},
selectChange(){
  this.requestKeyObjData(this.$route.query.id)

}

  },
};
</script>

<style lang="scss">
.report {
  width: 100%;
  background: radial-gradient(#0a0041,#040014);
  h3 {
    color: #fff;
    font-size: 18px;
    font-weight: 400;
    border-bottom: 1px solid #4c485a;
    padding: 20px 10px 10px 10px;
  }
  .content {
    margin-top: 10px;
    height: 90%;
    display: flex;
    width: calc(100vw - 40px);
    padding: 10px;
   .box {
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 20px;
        h4 {
          color: #fff;
          flex: 0 0 80px;
        }
        span {
          color: #0090ff;
          font-size: 14px;
        }
      }
    .left {
      flex: 0 0 50%;
      height: 100%;
    
      .status {
        .progress {
          margin-top: 20px;
          width: 100%;
          display: flex;
          h5 {
            color: #fff;
            flex: 0 0 80px;
          }
          div {
            flex: 1;
          }
          .el-progress-bar__outer {
            background-color: #1e2b64 !important;
            border-radius: 0;
          }
          .el-progress-bar__inner {
            border-radius: 0;
          }
          .el-progress__text {
            color: #fff;
          }
        }
        ul {
          margin-top: 10px;
          width: 100%;
          height: 170px;
          display: flex;
          li {
            flex: 0 0 33.33%;
            color: #fff;
            text-align: center;
            p {
              font-size: 12px;
            }
            .piechar {
              width: 100%;
              height: 80%;
              padding-top: 17px;
              .el-progress path:first-child {
                stroke: #1e2b64;
              }
            }
          }

          li:nth-child(1) {
            div {
              span {
                color: #fff;
                font-size: 16px;
              }
              margin-top: 48px;
              font-size: 60px;
            }
            p {
              margin-top: 36px;
            }
          }
        }
      }
      .freq {
        .barChart1 {
          width: 100%;
          height: 350px;
        }
      }

    .baseInfo{
      .table{
        width: 100%;  
        margin-top: 10px;
        .el-row {
            &:last-child {
            margin-bottom: 0;
            }
        }
        .el-col {
            border-radius: 4px;
        }
        .bg-purple-dark {
            background: #99a9bf;
        }
        .bg-purple {
            background: #120653;
            text-align: center;
        }
        .bg-purple-light {
            background: none;
            span{
                line-height: 0px;
            }
        }
        .grid-content {
            border: 1px solid #0f366b;
            min-height: 36px;
            color: #fff;
            line-height: 36px;
            font-size: 14px;
        }
            .row-bg {
                padding: 10px 0;
                background-color: #f9fafc;
            }
            .last-bg-purple{
               height: 72px;
               line-height: 72px;
            }    
              .last-bg-purple-light{
                height: 52px;
                line-height: 1rem;
                padding: 10px;
              }
        }
    }

    .route{
        margin-top: 20px;
        width: 100%;
        height: 600px;
        .pic{
            width: 100%;
            height: 550px;
            .anchorBL{
                display:none;
            }
            img{
                width: 100%;
                height: 100%;
            }

        }
    }

    }
    .right {
      flex: 1;
      height: 100%;
      padding-left: 20px;
      .obj{
          width: 100%;
          .order{
              width: 100%;
              color: #fff;
              font-size: 14px;
              margin-top: 10px;
              .el-radio__inner{
                  background: none;
                  border: 1px solid #255bd9;
              }
              .el-radio__inner::after{
                  background: #255bd9;
              }
              .el-radio-group{
                  margin-top: 4px;
              }
              .el-radio__label{
                  color: #fff;
              }
              .el-input--suffix .el-input__inner{
                  color: #fff;
                  background: none;
                  height: 25px;
                  border: 1px solid #255bd9;
                  
              }
              i{
                position: relative !important;
                top: 7px !important;
                 }
          }

        ul{

            width: 100%;
            margin-top: 20px;
            li{
               display: flex;
               margin-bottom: 20px;
               .pic{

                    flex: 0 0 200px;
                    height: 120px;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                    video{
                       width: 100%;
                       height: 100%;
                    }
               }
               .content{
                   flex: 1;
                   display: flex;
                   flex-wrap: wrap;
                   width: 100%;
                   margin-top: 0;
                   h4{
                      flex: 0 0 100%;

                   }
                   p{
                        flex: 0 0 100%;
                       color: #fff;
                        font-size: 14px;
                   }
               } 
            }

        }

 .pagiation{
        margin-top: 5px;
        text-align: right;
        color: #fff;
        // left: 370px;
        position: relative;
        ul{
            width: 150px;
            margin-top:0px
        }
        .el-dialog, li{
            color: #fff;
            background: none;
            margin-bottom: 0px;
            width: 10px;
            float: left;
        }
        .active{
            color: rgb(51, 115, 211);
        }
        button{
            color: #fff;
           background: none; 
        }
        .el-input__inner{
              color: #fff;
            background: none;
        }
        .el-pagination__total{
            color: #fff;
        }
        .el-pagination__jump{
            color: #fff;
        }
    }

      }

        .label{
            width: 100%;
            ul{
                width: 100%;
                margin-top: 10px;
                display: flex;
                flex-wrap: wrap;
                li{
                    height: 40px;
                    background: #1540ca;
                    color: #fff;
                    padding: 5px 30px;
                    line-height: 40px;
                    margin-right: 10px;
                    margin-bottom: 10px;
                    border-radius: 3px;
                }
            }

        }

    }
  }



}
</style>