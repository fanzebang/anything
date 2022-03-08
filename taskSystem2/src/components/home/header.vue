<template>
    <div class="header">
       <div class="title">
           <!-- ./assets/logo.png -->
          
            <div class="left">
                <img src="@/assets/tileName.png" alt="">
            </div>
            <div class="center">
                <ul>
                    <li v-for="(item,index) in infromation.navList" :class="[{isSelect:item.isSelect}]" @click="navClick(index)">
                        {{item.text}}
                        <p v-if="item.isSelect">
                            </p>
                        </li>
                </ul>

            </div>
            <div class="right"> 
                <el-button type="primary" icon="el-icon-plus" circle size="mini" class="btn"></el-button>
                <span>新建任务</span>
            </div>
       </div>
    </div>
</template>

<script>
export default {
    name: 'TasksystemHeader',
    data() {
        return {
            infromation:{
                titleImg:"@/assets/tileName.png",
                navList:[
                    {
                        text:"首页",
                        isSelect:true
                    },
                    {
                        text:"任务列表",
                        isSelect:false
                    },
                    {
                        text:"数据汇总",
                        isSelect:false
                    }
                ]
            }
        };
    },

    mounted() {
        
    },

    methods: {
        navClick:function(i){
         
            for (let index = 0; index < this.infromation.navList.length; index++) {
                const element = this.infromation.navList[index];
                element.isSelect = false
                this.infromation.navList[i].isSelect = true
            }

             if(i == 0){

                return

           }else if(i == 1){

               this.$router.push({path:'/taskList'})  

           }else{

                this.$router.push({path:'/dataCount'})  
           }
        }
        
    },
};
</script>

<style lang="scss" scoped>
.header{
    height:100%;
    color: #Fff;
 .title{
    width: 100%;
    height: 100%;
    background: linear-gradient(to right,#141471,#040014);
    display: flex;
    .left{
        flex: 0 0 20%;
        padding: 5px 10px 10px 10px ;
        img{
            width:70%;
           
        }
    }
    .center{
        flex: 0 0 65%;
       position: relative;
        color: #fff;
        ul{
            position: absolute;
            bottom: 0px;
            li{
               float: left;
               margin-left:60px;
               cursor: pointer;
               user-select: none;
                p{
                    width: 100%;
                    transform: scale(1.5,1);
                    height: 3px;
                    background: #2b5dff;
                    margin-top: 5px;
                   
                }
            }
            .isSelect{
                color: #2b5dff;
            }
        }
    }
    .right{
        padding: 10px;
        .btn{
            margin-right: 5px;
         
        }
        span{
            color: #66b1ff;
            margin-top: 5px;
            cursor: pointer;
            user-select: none;
          
        }
    }
   
}

}

</style>