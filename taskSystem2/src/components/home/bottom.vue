<template>
    <div class="bottom">
        <div class="left">

            <h3>任务趋势</h3>
            <div id="lineChart"></div>
        </div>
        <div class="right">
            <h3>任务类型占比</h3>
            <div id="pieChart"></div>
        </div>
    </div>
</template>

<script>


export default {
    name: 'TasksystemHeader',
    data() {
        return {
         
        };
    },

    methods:{

      

        linChart(){

   var lineChartDom = document.getElementById("lineChart")

        var myDate = new Date();
        myDate.setDate(myDate.getDate() - 6);
        var dateArray = [];
        var dateTemp;
        var flag = 1;
        var data1 = [];
        var data2 = [];
        var data3 = [];
        for (var i = 0; i < 7; i++) {
          dateTemp = (myDate.getMonth() + 1) + "-" + myDate.getDate();
          dateArray.push(dateTemp);
          myDate.setDate(myDate.getDate() + flag);
          data1.push(0)
           data2.push(0)
            data3.push(0)
        }


this.$getData.getList("/taskArchives/totalTaskOfTrend","post",{})      
                .then(data=>{  
                    for (let index = 0; index < data.data.data.length; index++) {
                        let element = data.data.data[index];

                        let requeseDate = element.createTime.split("T")[0]
                        requeseDate = requeseDate.substring(5)
                        requeseDate = requeseDate.split("-")

                    $.each(requeseDate,function(i,n){   
                        requeseDate[i] = n.replace(/^0/,"")
                    })

                    requeseDate = requeseDate[0]+'-'+requeseDate[1]

                    if(dateArray.indexOf(requeseDate) != -1){
                        let dateArrIndex = dateArray.indexOf(requeseDate)
                        if(element.status == 1){
                            data1[dateArrIndex] = element.num;
                        }else if(element.status == 2){
                            data2[dateArrIndex] = element.num;
                        }else{
                            data3[dateArrIndex] = element.num;
                        }
                    }
                }          
 let myChart1 = this.$echarts.init(lineChartDom);
        // 绘制图表
            myChart1.setOption({            
            title: { text: "任务数量" ,
            textStyle:{
                fontWeight:"lighter",
                color:"#fff",
                fontSize:15,
            }
            },
        	color:['#2ec832','#ee6666','#5470c6'],
            tooltip: {},
            legend:{
                show:true,
                right:50,
                textStyle:{
                    color:"#fff"
                },
                itemWidth:40
            },
            xAxis: {
                data: dateArray,
                  axisTick:{
                    show:false
                },
                  axisLine:{
                         lineStyle:{
                         color:"#352e62"
                     }
                    },
                  axisLabel : {
                    textStyle: {
                        color: '#fff'
                    },
                    lineHeight:40,
                },
              
            },
            yAxis: {
                 axisLine: {
                     show: false,//不显示坐标轴线
                    
                },
                splitLine:{
                         lineStyle:{
                         color:"#352e62"
                     }
                    },
                axisLabel : {
                    textStyle: {
                        color: '#fff'
                    },
                    margin:30
                }

            },
            series: [
                    {
                    name: "进行中",
                    type: "line",
                    data:data1,
                    },
                    {
                    name: "分析中",
                    type: "line",
                    data: data2,
                    },
                    {
                    name: "已完成",
                    type: "line",
                    data: data3,
                    },
                ],
            })


                })
                .catch(e=>{

                        console.log(e)

                })
                







        },

        pieChart(){

            this.$getData.getList("/taskArchives/totakTaskByTaskType","post",{})
            .then(data=>{

                let dataArr =data.data.data;

                let lengArr = [];

                $.each(dataArr,function(i,n){

                        lengArr.push({value:n.num,name:n.taskType})

                })
   var pieChartDom = document.getElementById("pieChart")
      let myChart2 = this.$echarts.init(pieChartDom);
             myChart2.setOption({
                            tooltip: {
                                show: true ,
                                trigger: 'item'
                            },
                           legend: {
                                    type: 'scroll',
                                    orient: 'vertical',
                                    right: 10,
                                    top: 150,
                                    textStyle:{
                                        color:"#fff",
                                        padding:10,
                                        fontSize:14
                                    },
                                    itemStyle:{
                                        borderWidth:0
                                    }
                                },
                            series: [
                                {
                                name: '任务类型占比',
                                type: 'pie',
                                radius: ['40%', '70%'],
                                avoidLabelOverlap: false,
                                itemStyle: {
                                    borderColor: '#fff',
                                    borderWidth: 2,
                                    borderRadius: 7,
                                },
                                labelLine: {
                                    show: true,
                                    length:30,
                                    length2:80,
                                },
                                label:{
                                    color:"#fff",
                                    fontSize:18,
                                    fontWeight:500
                                },
                                data:lengArr,
                                right:100,
                                }
                                ]
                            })
           let taskData = {
                pieData:lengArr
           }
           localStorage.setItem("taskData",JSON.stringify(taskData))
            })
            .catch(e=>{

                console.log(e)

            })   


        },
 


    },

    mounted() {
  localStorage.setItem("taskData","")
            this.linChart();
            this.pieChart();
        
                },
            };
</script>
<style lang="scss" scoped>
    .bottom{
        width: 99%;
        height: 100%;
        display: flex;
        .left{
          flex:1;
            height: 99%;
            margin-left: 20px;
            background:url('~@/assets/homeChartBg.png') center no-repeat;
            background-size: 100% 100%;
            display: flex;
            flex-wrap: wrap;
            padding: 20px;
            padding-bottom: 0;
            h3{
                width: 100%;
                border-bottom: 1px solid #35304c;
                height:40px;
                color: #fff;
                margin-top: 10px;
                font-weight:500;
                font-size: 14px;
            }
            #lineChart{
                width: 100%;
                height: 500px;
            }
        };
        .right{
            padding: 20px;
            padding-bottom: 0;
            margin-left: 20px;
            flex: 0 0 50%;
            height: 99%;
            background:url('~@/assets/homeChartBg.png') center no-repeat;
            background-size: 100% 100%;
            display: flex;
            flex-wrap: wrap;
            padding: 20px;
            padding-bottom: 0;
              h3{
                width: 100%;
                border-bottom: 1px solid #35304c;
                height:40px;
                color: #fff;
                margin-top: 10px;
                font-weight:500;
                font-size: 14px;
            }
             #pieChart{
                width: 100%;
                height: 500px;
            }
        };
    }
</style>