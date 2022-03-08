<template>
    <div class="TasksystemCright">
         <h3>任务目标</h3>
        <div id="lineChart1">
         
        </div>
           <!-- <ul class="rightNum">
                <li v-for="item in xData.reverse()">
                    {{item}}
                    </li>
            </ul> -->
    </div>
</template>

<script>
export default {
    name: 'TasksystemCright',

    data() {
        return {
            xData : [],
            yData :[],
           
        };

    },

    mounted() {
        
       this.creatTarget()
        
    },

    methods: {


changeTargetData(data){

            let dataList = data.data.data , targetData = [];
            var that = this;
            this.xData = [];
            this.yData = [];

            $.each(dataList,function(i,n){
                targetData.push({
                    name:n.taskTarget,
                    num:n.num
                })
            })

            targetData.sort(function(a,b){
                let value1 = a['num'];
                let value2 = b['num']
                return  value1- value2
            })

    
         $.each(targetData,function(i,n){
              that.xData.push(n.num)
              that.yData.push(n.name)
         })

      

        },

        
   creatTarget(){

       this.$getData.getList("/taskArchives/totalTaskOfTaskTarget","post",{})
       .then(data=>{
           
           this.changeTargetData(data)

           let lineCharDom =  document.querySelector("#lineChart1")
        let myChart3 =  this.$echarts.init(lineCharDom)
        let option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                type: 'shadow'
                }
            },
            color:['#0069f7'],
            grid: {
                top:20,
                left: '3%',
                right: '4%',
                bottom: 10,
                containLabel: true
            },
            xAxis: {
                type: 'value',
                boundaryGap: [0, 0.01],
                show:false,
            
            },
            yAxis: {
                type: 'category',
                data: this.yData,
                axisTick:{       //y轴刻度线
                    show:false
                },
                 "axisLine":{       //y轴
                    "show":false

                    },
                 "splitLine": {     //网格线
                    "show": false
                    },
                textStyle:{

                    color:"#Fff"
                    
                },
                axisLabel : {
                           
                            textStyle: {
                                color: '#fff'
                            }
                        },
    
            },
            series: [
                    {
                    name: '2011',
                    type: 'bar',
                    data:this.xData,
                    barGap:'20%',
                     barCategoryGap:'50%',
                    label:{
                        show: true,
                        position:'right',
                         distance :20,
                         color :'#fff',
                         formatter:function(x){
                             console.log(x)
                             return `${x.value}`
                         }
                      },
                    },
                ]
            };
            myChart3.setOption(option)

       })
       .catch(e=>{
           console.log(e)
       })

    

        },
        
    },
};

</script>
    <style lang="scss" scoped>
    .TasksystemCright{
            background: url("~@/assets/dataChartBg1.png") 0 0 no-repeat,
                        url("~@/assets/dataChartBg2.png") 0 100% no-repeat,
                        url("~@/assets/dataChartBg3.png") 100% 0 no-repeat,
                        url("~@/assets/dataChartBg4.png") 100% 100% no-repeat;
            background-size: 50% 50%;
            h3{
                        
                    width: 90%;
                    border-bottom: 1px solid #35304c;
                    height:40px;
                    color: #fff;
                    line-height: 40px;
                    font-weight:500;
                    position: relative;
                    top: 15px;
                    left: 20px;
                    font-size: 14px;
            }
            #lineChart1{
                    width: 90%;
                    height: 410px;
                    position: relative;
                    top: 25px;
                    left: 20px;
                 
                }

                   .rightNum{
                        position:absolute;
                        right: 40px;
                        top: 185px;
                        color: #fff;
                        font-size: 14px;
                        li{
                            margin-bottom: 52%;
                        }
                    }
        }
</style>