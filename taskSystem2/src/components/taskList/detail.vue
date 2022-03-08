<!--  -->
<template>
    <div class='taskDetail'>
        <div class="form1">
            <h3 class="title">任务详情<i class="el-icon-close" style="margin-right:10px;float:right" @click="closeDetail()"></i></h3>
            <div class="formContent">
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">


<el-form-item label="任务时间 :">
              <el-date-picker
                v-model="ruleForm.date1"
                type="daterange"
                align="left"
                unlink-panels
                range-separator="-"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                :picker-options="pickerOptions"
                v-if="hackReset"
              >
              </el-date-picker>
            </el-form-item>

  <el-form-item label="侦查装备：" prop="equip">
    <el-input v-model="ruleForm.equip"></el-input>
  </el-form-item>


  <el-form-item label="任务目标：" prop="target">
    <el-input v-model="ruleForm.target"></el-input>
  </el-form-item>

  
  <el-form-item label="任务地点：" prop="adress">
    <el-input v-model="ruleForm.adress"></el-input>
  </el-form-item>

  <el-form-item label="任务背景：" prop="bg">
    <el-input type="textarea" v-model="ruleForm.bg"></el-input>
  </el-form-item>


   <el-form-item label="侦察资料：" prop="pic">
       <el-upload
            class="upload-demo"
            action=""
            multiple
            :limit="100"
            :auto-upload="false"
            :show-file-list="false"
            :on-change="listChange"
            >
            <el-button slot="trigger" size="mini" type="success" v-if="!(this.$props.rowData.status == 3)">添加</el-button>
           </el-upload>
         <div class="imgBox">
             <ul>
                 <li v-for="(item,index) in ruleForm.pic">
                     <el-row>
                    <el-col :span="12">
                        <img :src="item.url" alt="" v-if="item.ispic">
                        <!-- <video :src="item.url" v-else></video> -->
                        <video width="320" height="240" controls  v-else>
                          <source :src="item.url" type="video/mp4">
                          <source :src="item.url" type="video/ogg">
                        您的浏览器不支持Video标签。
                        </video>
                      </el-col>
                    <el-col :span="6"  v-if="item.ispic && !item.isUpload"><span >共{{imgNum}}张图片</span></el-col>
                     <el-col :span="6"  v-else-if="!item.isUpload"><span >共{{videoNum}}个视频</span></el-col>
                    <el-col :span="6"><a @click="removeImg(index)">删除</a></el-col>
                    </el-row>
                 </li>
             </ul>
         </div>
  </el-form-item>


  <el-form-item>
      <el-button @click="closeDetail">取消</el-button>
    <el-button type="primary" @click="submitForm('ruleForm')">上传</el-button>
    
  </el-form-item>
</el-form>
            </div>
        </div>
    </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
components: {},
name:"taskDetail",
 props:["rowData"],
data() {
//这里存放数据
return {
   hackReset:false,
   videoNum:"",
   imgNum:"",
  ruleForm: {
          date1:[],
          target:"突防",
          adress:"南海",
          bg:"快速突防，两栖作战演习",
          equip:"主战坦克、武直10武装直升机，步兵战车...",
          pic:[
            
               ],
     
        },
        rules: {
         
        },
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
};
},
//监听属性 类似于data概念
computed: {},

//监控data中的数据变化
watch: {},
//方法集合
methods: {

  
base64ToBlob(base64Data) {
            let arr = base64Data.split(','),
                fileType = arr[0].match(/:(.*?);/)[1],
                bstr = atob(arr[1]),
                l = bstr.length,
                u8Arr = new Uint8Array(l);
                
            while (l--) {
                u8Arr[l] = bstr.charCodeAt(l);
            }
            return new Blob([u8Arr], {
                type: fileType
            });
        },
blobToFile (newBlob,fileName) {
            newBlob.lastModifiedDate = new Date();
            newBlob.name = fileName;
            return newBlob;
        },

submitForm(formName) {
    var that = this;
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let formData = new FormData()
            let sendFile = []
              $.each(this.ruleForm.pic,function(i,n){
                    if(!n.url.startsWith("http")){
                    let blob =  that.base64ToBlob(n.url)
                    let file = that.blobToFile(blob,n.name)
                    let file2 = new window.File([file], file.name, {type: file.type})
                      sendFile.push(file2)
                       formData.append("files",file2)
                    }
              })

                formData.append("taskId",this.ruleForm.id)


   if(sendFile.length == 0){
      formData = null;
      return   this.$notify.error({
            title: '警告',
            message:"还没有添加新数据",
          });

  }


                 
          this.$getData.Upload("/upload/file","post",formData, function (progressEvent) { //原生获取上传进度的事件
                    if (progressEvent.lengthComputable) {
                        //属性lengthComputable主要表明总共需要完成的工作量和已经完成的工作是否可以被测量
                        //如果lengthComputable为false，就获取不到progressEvent.total和progressEvent.loaded

                        // $.each(that.tableData,function(i,n){
                        //    if(n.id == data.id){
                        //      n.prorgressnum =  Math.ceil(progressEvent.loaded/progressEvent.total*100)
                        //    }
                        // })
                    }
                })
            .then(data1=>{
              if(data1.data.msg == "操作成功"){
                this.$EventBus.$emit("sendFile",{scusses:true})
                 this.closeDetail()
              }else{
                this.$notify.error({
                  title: '失败',
                  message: data1.data.msg,
                });
              }
          
            })
            .catch(e=>{
              console.log(e)
            })

              // this.$EventBus.$emit("sendFile",{sendFile,id:this.ruleForm.id})
              // this.closeDetail()
             
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },

      resetForm(formName) {
        this.$refs[formName].resetFields();
      },

    closeDetail(){
          this.$emit('changeDeatil', false);
      },

      removeImg(index){
          this.$confirm(`确定移除 ${this.ruleForm.pic[index].name }？`)
            .then(()=>{
                let data = {id:this.ruleForm.id,type:this.ruleForm.pic[index].ispic?"img":"video"}
                this.$getData.getList("/taskArchives/deleteVedioRoImg","post",data)
                .then(data=>{

                  if(data.data.code != 500){
                    this.getDetailData(this.ruleForm.id)
                  }else{

                      this.ruleForm.pic.splice(index,1)

                  }
                  console.log(data)
                  
                })
                .catch(e=>{
                  console.log(e)
                })

            })
            .catch((e)=>{
                    console.log(e)
            })

      },
listChange(file,files){
        const isJPG = (file.raw.type === 'image/jpeg'  || file.raw.type === 'video/mp4' || file.raw.type == "image/png" );
        if (!isJPG) {
          this.$message.error('上传图片或视频!');
          return 
        }
        var _this = this
        var ispic = (file.raw.type == "image/png" || file.raw.type === 'image/jpeg') ? true : false
        var isUpload = true;
        var rd =  new FileReader()
        rd.readAsDataURL(file.raw)
        rd.onload=function(e){
             _this.ruleForm.pic.push({name:file.name,url:e.target.result,ispic:ispic,isUpload:isUpload})
             var imgBoxDom = document.querySelector(".imgBox")
             setTimeout(()=>{
                imgBoxDom.scrollTo(imgBoxDom.scrollHeight,imgBoxDom.scrollHeight);
             },0) 
        }

      },

changDate(date){
            date = date.substring(0,19);    
            date = date.replace(/-/g,'/'); 
            var timestamp = new Date(date).getTime();
              timestamp =  new Date(timestamp)+""
              timestamp = timestamp.replace(" (中国标准时间)","")

        return timestamp;
      },

getDetailData(id){
        this.ruleForm.pic = [];
        this.$getData.getList("/taskArchives/queryInfo","post",{id:id})
          .then(data=>{
            var date = data.data.data.startTime;
            var date1 = data.data.data.endTime;
                this.ruleForm.date1[0] = this.changDate(date)
                this.ruleForm.date1[1] = this.changDate(date1)
                this.hackReset = true
                this.ruleForm.equip = data.data.data.useEquipment
                this.ruleForm.target = data.data.data.taskTarget
                this.ruleForm.adress = data.data.data.place
                this.ruleForm.bg = data.data.data.taskBackground     
                 this.ruleForm.id = id    
                if(data.data.data.firstVedioUrl){
                  this.ruleForm.pic.push({
                    name:"视频资料",
                    url: data.data.data.firstVedioUrl,
                    ispic:false
                   })
                }

                if(data.data.data.firstImgUrl){
                  this.ruleForm.pic.push({
                    name:"图片资料",
                    url: data.data.data.firstImgUrl,
                    ispic:true
                  })
                }
 
                this.imgNum = data.data.data.imgNum
                this.videoNum = data.data.data.vedioNum

          })
          .catch(e=>{
            console.log(e)
          })
      }
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {



},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {
  console.log()
  this.getDetailData(this.$props.rowData.id)

},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style  lang="scss">

    .taskDetail{
        
        z-index: 10;
        position: fixed;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,.6);
        .form1{
            width: 750px;
            height:78%;
            background: #001d4d;
            margin: 150px auto;
            overflow: auto;
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
            .formContent{
                padding: 20px;
                margin-top: 10px;
                margin-right:35px;
                .el-form-item{

                    color: #fff !important;
                    .el-range-editor.el-input__inner{
                        background: none;
                         border: 1px solid #2e5fcd;
                       
                    }
                    .el-input__inner{
                        background-color: transparent !important;
                         border: 1px solid #2e5fcd;
                    }
                    .el-textarea__inner{
                        background-color: transparent !important;
                        border: 1px solid #2e5fcd;
                    }
                     .el-date-editor .el-range-input{
                            background: none;
                        
                        }
                    .el-form-item__label{
                    color: #fff !important;
                    }

                     .imgBox{
                          margin-top:20px;
                           height: 150px;
                            width: 90%;
                            border: 1px dashed #203e81;
                            overflow: auto;
                            ul{

                                li{
                                    margin-bottom: 5px;
                                    position: relative;
                                    padding: 20px 0 0 20px;
                                    img{
                                    width: 160px;
                                    height: 100px;
                                  
                                    }
                                    video{
                                    width: 160px;
                                    height: 100px;
                                    }
                                    span{
                                        line-height: 60px;
                                    }
                                    a{
                                        color: salmon;
                                        line-height: 60px;
                                        margin-left: 30px;
                                    }
                                }

                            }
                           
                        } 
                }
               
            }
            

        }
     

    }

</style>