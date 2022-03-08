<template>
    <div class="header">
        <div class="title"> <img src="@/assets/tileName.png" alt=""></div>
        <div class="nav">

                <ul>
                    <li v-for="(item,index) in navList" :class="[{isSelect:item.isSelect}]" @click="navClick(index)">
                        {{item.text}}
                        <p v-if="item.isSelect">
                            </p>
                        </li>
                </ul>

        </div>
    </div>

</template>

<script>


export default {
    name: 'pHeader',
    data() {
        return {
              navList:[
                    {
                        text:"首页",
                        isSelect:false
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
        };
    },

    mounted() {


       if(this.$route.name == 'data'){
           this.navList[2].isSelect = true
       }else{
           this.navList[1].isSelect = true
       }

    },

    methods: {
          navClick:function(i){
            for (let index = 0; index < this.navList.length; index++) {
                const element = this.navList[index];
                element.isSelect = false
                this.navList[i].isSelect = true
            }
           if(i == 0){

                this.$router.push({path:'/'})  

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
        width: 100%;
        height: 70px;
        background: url("~@/assets/pHeaderBg.png") no-repeat;
        display: flex;
        .title{
            flex: 0 0 50%;
           img{
            width:40%;
            margin-top: 10px;
            margin-left: 25px;
            }
        }
    .nav{
        flex:1;
        position: relative;
        color: #fff;
        ul{
            position: absolute;
            bottom:10px;
            li{
               float: left;
               margin-left:60px;
               cursor: pointer;
               user-select: none;
               line-height: 40px;
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
    }

</style>