<template>
    <div class="progress">
      <div class="form3">
        <h3 class="title">进度详情<i class="el-icon-close" style="margin-right:10px;float:right" @click="closeProgress()"></i></h3>
        
        <div class="detileProgress">
            <ul>
              <li v-for="(item,index) in queryData">
                  <div v-if="item.contentType.substring(0,5) == 'image'" class="imgBox">
                    <img :src="item.ossKey"  alt="">
                    <h5>{{item.sampleTypeEnName}}</h5>
                    <div class="status">
                       <i class="el-icon-success" v-if="item.status==3" style="color:#21db21;font-size:25px"></i>
                       <i class="el-icon-loading" v-if="item.status==2" style="color:#ffc107;font-size:25px"></i>
                       <i class="el-icon-remove" v-if="item.status==1" style="color:#838383;font-size:25px"></i>
                        <!-- <el-button type="success" icon="el-icon-check" circle size="mini" v-if="item.status==3"></el-button>
                         <el-button type="warning" icon="el-icon-check" circle size="mini" v-else-if="item.status==2"></el-button>
                          <el-button type="info" icon="el-icon-check" circle size="mini" v-else-if="item.status==1"></el-button> -->
                    </div>
                    
                  </div>
                  <div v-else  class="videoBox">
                    <video controls>
                       <source :src="item.ossKey" type="video/mp4">
                        <source :src="item.ossKey" type="video/ogg">
                          您的浏览器不支持Video标签。
                      </video>
                      <h5>{{item.originFileName}}</h5>
                      <div class="status">
                        <el-progress :percentage="item.progress*100"></el-progress>
                    </div>
                  </div>
                  
              </li>
            </ul>
        </div>
      </div>
    </div>

</template>

<script>


export default {
  name:"progress",
  props:["progressData"],
  data(){
    return {

      rowData:"",
      queryData:"",
   


    }



  },


  mounted(){

   

    this.rowData = this.$props.progressData
    this.queryDetectHistoryByTaskId(this.rowData)
   
  },


  methods:{

     closeProgress(){
          this.$emit('changeProgress', false);
      },

    queryDetectHistoryByTaskId(data){

      this.$getData.getList(`/taskArchives/queryDetectHistoryByTaskId`,"post",{id:data.id})
      .then(result=>{
        if(result.data.code == 200){
          this.queryData = result.data.data
          setTimeout(()=>{
            $(" .el-progress__text").css("color","#fff")
          },100)
    
        }
      })
      .catch(e=>{
        console.log(e)
      })

    }


  }

  


  
  
}
</script>

<style lang="scss" scoped>
.progress{
        z-index: 10;
        position: fixed;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,.6);
        .form3{
            width: 750px;
            height:510px;
            background: #001d4d;
            margin: 250px auto;
            overflow: hidden;
            box-shadow: 0 0 15px rgba(0,0,0,.6);

            .title{
                padding-top: 20px;
                width: 98%;
                color: #fff;
                border-bottom: 1px solid #203e81;
                padding-bottom: 15px;
                padding-left: 15px;
                font-size: 16px;
            }

            .detileProgress{
              width: 90%;
              padding: 20px;
              margin: 10px auto;
              height: 100%;
              overflow: auto;
              ul {
                // overflow:auto;
                margin-bottom: 100px;
                li{
                 min-height: 50px;
                 padding: 5px;
                 border: 1px dashed #fff;
                 margin-bottom: 10px;
                .imgBox{
                     display: flex;
                  img{
                      width: 200px;
                      flex: 0 0 30%;
                  }
                  h5{
                    color: #fff;
                    flex: 0 0 30%;
                    text-align: center;
                    margin: auto 0;
                  }
                  .status{
                    flex: 1;
                    margin: auto 0;
                    text-align: center;
                    }
                }
                .videoBox{
                 display: flex;
                  video{
                    width: 200px;
                    flex: 0 0 30%;
                  }
                   h5{
                    color: #fff;
                    flex: 0 0 30%;
                    text-align: center;
                    margin: auto 0;
                  }
                  .status{
                    flex: 1;
                    margin: auto 0;
                    text-align: center;
                
                    }

                }
                  
     
                
                };
              }
            }

        }

}

</style>
