<template>
  <div class="taskTable">
    <div class="form">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-row>
          <el-col :span="8">
            <el-form-item label="任务时间 :">
              <el-date-picker
                v-model="ruleForm.date1"
                type="daterange"
                align="left"
                unlink-panels
                range-separator="——"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                :picker-options="pickerOptions"
              >
              </el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="任务目标 :" prop="region">
              <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
                <el-option  v-for="(item,index) in taskTarget" :label="item" :value="item" :key="index"></el-option>
                <!-- <el-option label="区域二" value="beijing"></el-option> -->
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="任务地点 :" prop="adress">
              <el-input v-model="ruleForm.adress"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="8">
            <el-form-item label="任务编号 :" prop="num">
              <el-input v-model="ruleForm.num"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="任务名称 :" prop="name">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item>
              
              <el-button @click="resetForm('ruleForm')">重置</el-button>
              <el-button type="primary" @click="submitForm('ruleForm')"
                >查询</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>

    <div class="center">
         <el-button type="success" @click="openNewTask">新建任务</el-button>
         
         <el-button type="danger" @click="removeTask">批量删除</el-button>
    </div>

    <div class="table">
            <el-table
                ref="multipleTable"
                :data="tableData"
                 height="580"
                tooltip-effect="dark"
                style="width: 98%"
                @selection-change="handleSelectionChange">
                <el-table-column
                type="selection"
               
                width="55">
                </el-table-column>
                <el-table-column
                prop="num"
                label="任务编号"
                width="120">
                </el-table-column>
                <el-table-column
                prop="name"
                label="任务名称"
               >
                </el-table-column>
                <el-table-column
                prop="actionTime"
                label="任务开始时间"
                show-overflow-tooltip>
                </el-table-column>
                 <el-table-column
                prop="target"
                label="任务目标"
                show-overflow-tooltip>
                </el-table-column>

                 <el-table-column
                prop="status"
                label="状态"
                show-overflow-tooltip>
                    <template slot-scope="scope">

                         <el-button type="success" v-if="scope.row.status == 1" size="mini">进行中</el-button>
                         <div v-else-if="scope.row.status == 2" >
                             <el-row>
                                <el-col :span="7"><el-button type="warning" size="mini">分析中</el-button></el-col>
                                <el-col :span="17"> <el-progress :percentage="scope.row.prorgressnum"></el-progress></el-col>
                            </el-row>
                           
                        </div>
                         <el-button type="primary" v-else size="mini" @click="toReport(scope.row)">已完成</el-button>

                    </template>
                

                </el-table-column>

                 <el-table-column
                prop="play"
                label="操作"
                 width="250"
                show-overflow-tooltip>
                          <el-row  slot-scope="scope">
                                <el-col :span="4"><a @click="openDetail(scope.row)" style="cursor:pointer">{{scope.row.play.btn1}}</a></el-col>
                                <!-- <el-col :span="20"> <a style="cursor:pointer" @click="interval(scope.row)">{{scope.row.play.btn2}}</a></el-col> -->
                            </el-row>
                </el-table-column>
    

            </el-table>

    </div>
 <div class="pagiation">
        <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="page"
        :page-sizes="[10, 20, 50, 100]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="totalItem">
        </el-pagination>
    </div>

    <div>
        <v-detail v-if="detail" @changeDeatil="changeDeatil" :rowData="toDeatalData"></v-detail>
    </div>

     <div>
        <v-newTask v-if="newTask" @changeNewTask="changeNewTask" @listData="listData"></v-newTask>
    </div>

  </div>
</template>

<script>
import detail from './detail.vue'
import newTask from './newTask.vue'

export default {
  components:{'v-detail':detail,'v-newTask':newTask},
  name: "right",
  data() {
    return {
      taskTarget:[],
      page:1,
      pageSize:20,
      detail:false,
      newTask:false,
      toDeatalData:"",
      totalItem:400,
      ruleForm: {
        name: "",
        region: "",
        date1: "",
        num: "",
        adress: "",
      },
      rules: {
        region: [{ message: "请选择任务目标", trigger: "change" }],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change",
          },
        ],
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
      value1: "",
      value2: "",
       tableData: [
          {
          num: '000001',
          name: '陆战队常规训练',
          target: '突防',
          actionTime:'2021-6-1',
          status:3,
          play:{btn1:'详情',btn2:'上传资料'},
          formFile:"",
          prorgressnum:0,
          }
        ],
        multipleSelection: [],
        status:"",
    };
  },

  mounted() {
    var that = this
     this.$EventBus.$on("sendFile",data=>{
 
       if(data.scusses){
            this.$notify({
                  title: '成功',
                  message: '上传成功',
                  type: 'success'
                });

        that.getTableData(this.ruleForm,this.pageSize,this.page,this.status)
       }
     })

  this.$EventBus.$on("sendStatus",data=>{
        this.status = data
         this.getTableData(this.ruleForm,this.pageSize,this.page,this.status)
     })
 

   this.getTableData(this.ruleForm,this.pageSize,this.page,this.status)
            

      

  },

  methods: {



interval(data){

      var that = this
      let formData = new FormData()

  if(!data.formFile.files){

      return   this.$notify.error({
            title: '警告',
            message:"还没有添加数据",
          });

  }


      $.each(data.formFile.files,function(i,n){
 
          formData.append("files",n)
       
      })

   
      
      formData.append("taskId",data.id)


      
      this.$getData.Upload("/upload/file","post",formData, function (progressEvent) { //原生获取上传进度的事件
                    if (progressEvent.lengthComputable) {
                        //属性lengthComputable主要表明总共需要完成的工作量和已经完成的工作是否可以被测量
                        //如果lengthComputable为false，就获取不到progressEvent.total和progressEvent.loaded

                        $.each(that.tableData,function(i,n){
                           if(n.id == data.id){
                             n.prorgressnum =  Math.ceil(progressEvent.loaded/progressEvent.total*100)
                           }
                        })

                       
                    }
                })
    
      .then(data1=>{
        if(data1.data.msg == "操作成功"){
          this.$notify({
            title: '成功',
            message: '上传成功',
            type: 'success'
          });
          that.getTableData(this.ruleForm,this.pageSize,this.page,this.status)
        }else{

          this.$notify.error({
            title: '失败',
            message: data.data.msg,
          });

        }
    
      })
      .catch(e=>{
        console.log(e)
      })

    },

 getTableData(ruleForm,pageSize,page,status){
      this.tableData = [];
   var that = this
      let date = new Date(ruleForm.date1[0])
            let date1 = new Date(ruleForm.date1[1])
            var sMonth,eMonth,sDate,eDate;
            if(date.getMonth()+1 < 10){
                sMonth = '0'+(date.getMonth()+1)
            }else{
              sMonth = date.getMonth()+1 +""
            }
             if(date.getDate() < 10){
                sDate = '0'+(date.getDate())
            }else{
              sDate =date.getDate()  +""
            }
             if(date1.getMonth()+1 < 10){
                eMonth = '0'+(date1.getMonth()+1)
            }else{
              eMonth = date1.getMonth()+1 +""
            }
             if(date1.getDate()+1 < 10){
                eDate = '0'+(date1.getDate())
            }else{
              eDate = date1.getDate()+1 +""
            }
            let startTime =`${date.getFullYear()}-${sMonth}-${sDate}`
          let endTime=`${date1.getFullYear()}-${eMonth}-${eDate}`
     
          let data2 = {
                  pageSize:pageSize,
                  pageNo:page,
                  taskCode:ruleForm.num,
                  taskName:ruleForm.name,
                  startTime:startTime,
                  endTime:endTime,
                  taskTarget:ruleForm.region,
                  place:ruleForm.adress,
                  status:status
              }
              if(data2.endTime == "NaN-NaN-NaN"){
                  data2.endTime = ""
              }
              if(data2.startTime == "NaN-NaN-NaN"){
                data2.startTime = ""
              }

      this.$getData.getList("/taskArchives/queryPage","post",data2)
      .then(data=>{
        $.each(data.data.data.taskList,function(i,n){
                that.tableData.push({
                  num:n.taskCode,
                  name:n.taskName,
                  target:n.taskTarget,
                  actionTime:n.startTime,
                  status:n.status,
                  id:n.tid,
                  play:{btn1:'详情'},
                  formFile:"",
                  prorgressnum:0,
                })
              })
          this.totalItem = data.data.data.totalItem   
      })
      .catch(e=>{
        console.log(e)
      })

    this.$getData.getList("/taskArchives/totalTaskOfTaskTarget","post",{})
    .then(data=>{
      that.taskTarget = []
      $.each(data.data.data,function(i,n){
        that.taskTarget.push(n.taskTarget)
      })
    })
    .catch(e=>{
      console.log(e)
    })

    },



  removeTask(){
  var that = this
       this.$getData.getList("/taskArchives/delete","post",{taskIdList:this.multipleSelection})
        .then(data=>{
          if(data.data.msg == "删除成功"){
              that.getTableData(this.ruleForm,this.pageSize,this.page,this.status)
          } 
        })
        .catch(e=>{
          console.log(e)
        })
      },

    toReport(data){
      this.$router.push({path:'/reoprt',query:data})
    },
    openNewTask(){
          this.newTask = true
      },
      changeDeatil(data){
          this.detail = data
      },

listData(data){
    this.tableData = [];
    var that = this
    $.each(data.data.data.taskList,function(i,n){
            that.tableData.push({
              id:n.tid,
              num:n.taskCode,
              name:n.taskName,
              target:n.taskTarget,
              actionTime:n.startTime,
              status:n.status,
              play:{btn1:'详情'}
            })
          })
    this.totalItem = data.data.data.totalItem
 },

      changeNewTask(data){
          this.newTask = data
      },

        openDetail(data){
            this.detail = true
            this.toDeatalData = data
        },

    submitForm(formName) {
      var that = this;
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if(!that.ruleForm.date1){that.ruleForm.date1 = ""}
            that.getTableData(that.ruleForm,that.pageSize,that.page,that.status)
          // alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
      this.ruleForm.date1 = ""
    },

      handleSelectionChange(val) {
    
        var that = this;
        this.multipleSelection = []
        $.each(val,function(i,n){
            that.multipleSelection.push(n.id)
        })
      },

   //设置表格的样式
      tableRowStyle({}){
        return 'background-color:rgba(255,0,0,0);'
      },

      tableCellStyle({}){
        return 'background-color:rgba(255,0,0,0);'
        },

      //设置表头行的样式
      tableHeaderColor({row,column,rowIndex,columnIndex}){
        return 'background-color:#110452;color:#fff;font-size:18px;text-align:center;font-weight:500'
      },
       handleSizeChange(val) {
          this.pageSize = val
          this.getTableData(this.ruleForm,this.pageSize,this.page,this.status)
      },
      handleCurrentChange(val) {
        this.page = val
         this.getTableData(this.ruleForm,this.pageSize,this.page,this.status)
        $(".el-table__body-wrapper").animate({
  　　　　　　scrollTop:0,
  　　　　},300)
      }
    
  },
};
</script>

<style lang="scss" >
.taskTable {
  .form {
    width: 98%;
    padding: 20px 20px 0 0;
    .el-form {
      .el-form-item {
        margin-right: 150px;
        .el-input__inner{
            background:none;
            border: 1px solid #346ad3;
            width: 360px;
            input{
            background:none; 
            }
            i{
                color: #346ad3;
            }
        }
        label{
            color: #fff;
        }
        .el-button:first-child{
            background: none !important;
            color: #Fff;
           border: 1px solid #346ad3;
        }
      }
    }
  }
  .center{
    padding: 0px 0px 0px 20px;
  }
  .table{
    padding: 0px 0px 0px 20px;
    margin-top: 30px;
    .el-table{
        border: 1px solid #0f366b;
    }
     .el-table, .el-table__expanded-cell{
        background: none !important;
    }
    .el-table th .el-table tr{
        background: none !important;
    }
    .el-table th {
        background-color: #110452;
    }
    .el-table tr{
        background-color: transparent;
        color: #fff;
       
    }
   .el-table--enable-row-hover .el-table__body tr:hover > td {
        background-color: #212e3e !important;

        }
    .el-table td{
      border-bottom: 1px solid #0f366b;
    }
    .el-table td, .el-table th.is-leaf{
          border-bottom: 1px solid #0f366b;
    }
    .el-progress{
        line-height: 2;
    }
  }

    .table /deep/  .el-table--enable-row-transition .el-table__body td, .el-table .cell{
    background-color: transparent;
    }
    .el-table::before {//去除底部白线
        left: 0;
        bottom: 0;
        width: 100%;
        height: 0px;
    }
    .pagiation{
        margin-top: 15px;
        text-align: right;
        color: #fff;
        .el-dialog, li{
            color: #fff;
            background: none;
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
</style>