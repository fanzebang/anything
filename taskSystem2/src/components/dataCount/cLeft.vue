<template>
    <div class="TasksystemCleft">
        <h3>任务类型占比</h3>
        <div id="pieChart1"></div>
    </div>
</template>

<script>
export default {
    name: 'TasksystemCleft',

    data() {
        return {
            
        };
    },

    mounted() {

            this.creatPie()
  
    
    },

    methods: {




        creatPie(){

         var pieChartDom = document.getElementById("pieChart1")
            let myChart2 = this.$echarts.init(pieChartDom);
             myChart2.setOption({
                            tooltip: {
                                show: true ,
                                trigger: 'item'
                            },
                           legend: {
                                    type: 'scroll',
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
                                },
                                label:{
                                    color:"#fff",
                                    fontSize:14,
                                    fontWeight:500
                                },
                                data: JSON.parse(localStorage.getItem("taskData")).pieData,
                                }
                                ]
                            })


        }


        
    },
};
</script>

<style lang="scss" scoped>
    .TasksystemCleft{
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
             #pieChart1{
                width: 90%;
                height: 410px;
                 position: relative;
                top: 25px;
                left: 20px;
            }
    }
</style>