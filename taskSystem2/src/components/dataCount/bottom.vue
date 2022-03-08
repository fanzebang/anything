<template>
    <div class="bottom2">
       <div class="left">
            <h3>任务数量</h3>
            <div class="lineChar"></div>
       </div>
       <div class="right">
            <h3>热门标签</h3>
            <div class="labelWind" id="labelWind">
               
            </div>
       </div>
    </div>
</template>

<script>
import miaov from '../../../static/js/miaov'


export default {
    name: 'TasksystemBottom',

    data() {
        return {
            
            categoryDoing:[0,0,0,0,0,0,0,0,0,0,0,0],
            categoryAnaly:[0,0,0,0,0,0,0,0,0,0,0,0],
            categoryFinal:[0,0,0,0,0,0,0,0,0,0,0,0],

             entries : [ 

		    ],
            settings:{
                        entries:'',
                        width: 910,
                        height: 245,
                        radius: '65%',
                        radiusMin: 300,
                        bgDraw: true,
                        bgColor: 'none',
                        opacityOver: 1.00,
                        opacityOut: 0.3,
                        opacitySpeed: 6,
                        fov: 900,
                        speed: 0.1,
                        fontFamily: 'Oswald, Arial, sans-serif',
                        fontSize:18,
                        fontColor: '#fff',
                        fontWeight: 'normal',//bold
                        fontStyle: 'normal',//italic 
                        fontStretch: 'normal',//wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
                        fontToUpperCase: true
                    }
        };
    },

    mounted() {
    var that = this

 this.$getData.getList("/taskArchives/totalTaskOfLabel","post",{})
    .then(data=>{
        var that = this;
        this.entries = []
        this.settings.entries = []
        var labelList = data.data.data
        $.each(labelList,function(i,n){
            for (let index = 0; index < n.num; index++) {
               that.entries.push({
                   label:n.labelName,
                   url:"#",
                   target: '_top'
               })
                
            }

        })

        this.settings.entries = this.entries
        miaov.created()
        $( '#labelWind' ).svg3DTagCloud(this.settings)
        $.each($(".labelWind text"),function(i,n){
             var num = Math.ceil(20+Math.random()*15)
             $(".labelWind text")[i].style.fontSize = num
             $(".labelWind text")[i].style.fill = '#' + Math.random().toString(16).substr(2, 6).toUpperCase();
        
        })

    })
    .catch(e=>{
        console.log(e)
    })



    this.$getData.getList("/taskArchives/totalTaskOfThisYear","post",{})
        .then(data=>{
           
            let requestList = data.data.data
            let doing = [],analy = [],final = []
            $.each(requestList,function(i,n){
                if(n.status == 1){
                    doing.push(n)
                }else if(n.status == 2){
                    analy.push(n)
                }else if(n.status == 3){
                    final.push(n)
                }
            })

    $.each(doing,function(i,n){

        let mounth = n.time.split("-")[1]-1

        that.categoryDoing[mounth] = n.num
        

    })

        $.each(analy,function(i,n){

        let mounth = n.time.split("-")[1]-1

        that.categoryAnaly[mounth] = n.num
        

    })

        $.each(final,function(i,n){

        let mounth = n.time.split("-")[1]-1

        that.categoryFinal[mounth] = n.num
        

    })

        let mychart1 = this.$echarts.init(document.querySelector('.lineChar')) 
         let option1 = {
             color:["#4083ff","#2bcd8a","#ad80e4"],
             legend: {
            
                      axisLabel : {
                           
                            textStyle: {
                                color: '#fff'
                            }
                        },
                              textStyle:{

                    color:"#Fff"
                    
                },
                 right: 10,
                 
             },
              grid: {
                top:40,
                left: '3%',
                right: '4%',
                bottom: 10,
                containLabel: true
            },
            xAxis: {
                type: 'category',
                data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                 axisTick:{       //y轴刻度线
                    show:false
                },
               
             textStyle:{

                    color:"#Fff"
                    
                },
                 axisLabel : {
                           
                            textStyle: {
                                color: '#fff'
                            }
                        },
              "axisLine":{       //y轴
                  lineStyle:{
                    color: ['#36305a'],
                    width: 1,
                    type: 'solid'
                }

                    },
            },
            yAxis: {
                type: 'value',
                  "axisLine":{       //y轴
                    "show":false

                    },
                     //设置网格线颜色
                splitLine: {
                    show: true,
                    lineStyle:{
                    color: ['#36305a'],
                    width: 1,
                    type: 'solid'
                }
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
                name:"进行中",
                data: this.categoryDoing,
                type: 'bar'
                },
                 {
                name:"分析中",
                data: this.categoryAnaly,
                type: 'bar'
                },
                 {
                name:"已完成",
                data: this.categoryFinal,
                type: 'bar'
                }
            ]
            };

            mychart1.setOption(option1)
            
 

        })
        .catch(e=>{
            console.log(e)
        })



        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>
    .bottom2{
        height: 100%;
        padding: 0 20px 0 20px;
        display: flex;
        div{
            height: 100%;
        }
         h3{
            color: #fff;
            font-size: 15px;
            position: relative;
            top: 20px;
            left: 20px;
            width: 95%;
            padding-bottom: 10px;
            font-weight: 400;
            border-bottom: 1px solid #36305a;
            margin-bottom: 10px;
        }
        .left{
            flex: 0 0 50%;
        
        background: url("~@/assets/dataChartBg5.png") 0 0 no-repeat,
                    url("~@/assets/dataChartBg6.png") -2px 100% no-repeat,
                     url("~@/assets/dataChartBg7.png") 100% 0 no-repeat,
                    url("~@/assets/dataChartBg8.png") 100% 100% no-repeat;
        background-size: 50% 50%;

        .lineChar{
            position: relative;
            top: 20px;
            left: 20px;
            width: 95%;
            height: 75%;
        }
            
        }
        .right{
            flex: 1;
            margin-left:10px;
               background: url("~@/assets/dataChartBg5.png") 0 0 no-repeat,
                    url("~@/assets/dataChartBg6.png") -2px 100% no-repeat,
                     url("~@/assets/dataChartBg7.png") 100% 0 no-repeat,
                    url("~@/assets/dataChartBg8.png") 100% 100% no-repeat;
                background-size: 50% 50%;

                .labelWind{
                    position: relative;
                    top: 20px;
                    left: 20px;
                    width: 95%;
                    height: 75%;
                }
        }
    }
</style>