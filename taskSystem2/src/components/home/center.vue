<template>
    <div class="center">
        <ul>
            <li v-for="item in centerObj.classList">

                <div>
                    <div class="left_top borderBox"></div>
                    <div class="right_top borderBox"></div>
                     <div class="left_bottom borderBox"></div>
                      <div class="right_bottom borderBox"></div>
                    <p>{{item.text}}</p>
                    <span></span>
                </div>
                  <img :src="item.icon" alt="">
            </li>
        </ul>
    </div>
</template>

<script>
// import func from 'vue-editor-bridge';
import miaov from '../../../static/js/miaov'
export default {
    name: 'TasksystemHeader',
    data() {
        return {
            centerObj:{

                classList:[
                    {
                        text:"累计任务数量",
                        icon:require("@/assets/lj.png"),
                        number:0
                    },
                    {
                        text:"进行中",
                        icon:require("@/assets/jx.png"),
                        number:0
                    },
                    {
                        text:"分析中",
                        icon:require("@/assets/fx.png"),
                        number:0
                    },
                    {
                        text:"已结束",
                        icon:require("@/assets/js.png"),
                        number:0
                    },
                ]

            }
            
        };
    },

    mounted() {

       this.taskStatusCount();

    },

    methods: {

   taskStatusCount(){
     this.$getData.getList("/taskArchives/totakTaskByStatus","post",{})
        .then(data=>{
                let countData = data.data.data;
                var _this = this;
                   let countNum=0;
                   
                     
                $.each(countData,function(i,n){

                        switch(n.status*1){
                            case 1: _this.centerObj.classList[1].number = n.num;
                            case 2: _this.centerObj.classList[2].number = n.num;
                            case 3: _this.centerObj.classList[3].number = n.num;
                        }

                  

            


                })

                  _this.centerObj.classList[0].number =_this.centerObj.classList[1].number + _this.centerObj.classList[2].number+_this.centerObj.classList[3].number
                    miaov.numAnimation()
                    $.each(_this.centerObj.classList,function(i,n){
                            $(".center li span").eq(i).numberRock({
                                            speed:12,
                                            count:n.number
                            })
                    })

                  
          
        })
        .catch(e=>{

             console.log(e)

        })

        }
        
    },
};
</script>

<style lang="scss" scoped>

.center{
 height: 100%;
   
    ul{
        height: 100%;
        display: flex;
        padding: 0 10px 0px 10px;
        li{
           flex: 1;
           border: 2px solid #13346e;
           display: flex;
           margin: 0 10px;
           border-image: linear-gradient(#13346e, #3775ff, #13346e) 20 20;
           position: relative;
           box-shadow:0px 0px 20px #052058 inset;
           div{
               flex:1;
               padding-top: 25px;
               padding-left: 25px;
               .borderBox{
                   width: 5px;
                   height: 5px;
                   border: 4px solid #0066ff;
                   position: absolute;
               }
               .left_top{

                   top: -3px;
                   left: -3px;
                   border-right: none;
                   border-bottom: none;

               }
                .left_bottom{

                   bottom: -3px;
                   left: -3px;
                   border-right: none;
                   border-top: none;

               }
                .right_top{

                   top: -3px;
                   right: -3px;
                   border-left: none;
                   border-bottom: none;

               }
                .right_bottom{

                   bottom: -3px;
                   right: -3px;
                   border-left: none;
                   border-top: none;

               }
                p{
                    color: #fff;
                    height:65%;
                    font-size: 24px;
                }
                span{
                    color: #e59813;
                    font-size: 60px;
                }
           }
           img{
              flex: 0 0 50px;
              height: 50px;
              margin: 10px;
           }
             
        }
    }


}

</style>