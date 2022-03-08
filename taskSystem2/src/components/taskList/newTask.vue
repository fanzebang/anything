<template>
    <div class="newTask">
          <div class="form2">
                <h3 class="title">新建任务<i class="el-icon-close" style="margin-right:10px;float:right" @click="closeNewTask()"></i></h3>

                         <div class="formContent">
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">


           

                <el-form-item label="任务名称：" prop="name">
                    <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>

                <el-form-item label="任务时间：" required>
                          
                            <el-date-picker
                             v-model="ruleForm.date1"
                            type="daterange"
                            align="left"
                            unlink-panels
                            range-separator="-"
                            start-placeholder="开始日期"
                            end-placeholder="结束日期"
                        
                            :picker-options="pickerOptions">

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

                <el-form-item>
                    <el-button @click="closeNewTask">取消</el-button>
                    <el-button type="primary" @click="submitForm('ruleForm')">确认</el-button>
                    
                </el-form-item>
                </el-form>
            </div>

          </div>
    </div>
</template>

<script>

export default {
    name: 'TasksystemNewtask',

    data() {
        return {
         ruleForm: {
            date1:'',
            target:"",
            adress:"",
            bg:"",
            equip:"",
            name:""
         },
        rules: {
           name: [
            { required: true, message: '请输入任务名称', trigger: 'blur' },
            { min: 3, max: 255, message: '长度在 1 到 85 个汉字', trigger: 'blur' }
          ],
          equip:[
             { required: true, message: '请输入侦查装备', trigger: 'blur' },
            { min: 3, max: 1000, message: '长度在 1 到 330 个汉字', trigger: 'blur' }
          ],
          target:[
             { required: true, message: '请输入任务目标', trigger: 'blur' },
            { min: 3, max: 1000, message: '长度在 1 到 330 个汉字', trigger: 'blur' }
          ],
          adress:[
              { required: false, message: '请输入任务目标', trigger: 'blur' },
            { min: 3, max: 600, message: '长度在 1 到 200 个汉字', trigger: 'blur' }
          ],
          bg:[
              { required: false, message: '请输入任务目标', trigger: 'blur' }
          ]
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

    mounted() {
       

    },

    methods: {
        closeNewTask(){
            this.$emit('changeNewTask', false);
        },
      submitForm(formName) {
        var that = this;
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let date = new Date(this.ruleForm.date1[0])
            let date1 = new Date(this.ruleForm.date1[1])
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

            // console.log(sMonth,sDate,eMonth,eDate)

            let data = {
              taskName:this.ruleForm.name,
              startTime:`${date.getFullYear()}-${sMonth}-${sDate}`,
              endTime:`${date1.getFullYear()}-${eMonth}-${eDate}`,
              useEquipment:this.ruleForm.equip,
              taskTarget:this.ruleForm.target,
              place:this.ruleForm.adress,
              taskBackground:this.ruleForm.bg
            };

             if(data.endTime == "NaN-NaN-NaN" || data.startTime == "NaN-NaN-NaN"){
                  return       this.$alert('时间不能为空', {
                                   confirmButtonText: '确定',
                                   type:'error'
                              });
              }

              that.$getData.getList("/taskArchives/save","post",data)
              .then(data=>{
              
              let data2 = {
                  pageSize:20,
                  pageNo:1,
              }

                that.$getData.getList("/taskArchives/queryPage","post",data2)
                .then(data=>{
               
                    that.$emit('listData',data);
                    this.closeNewTask()
                })

              })
              .catch(e=>{

                 console.log(e)
                 this.closeNewTask()

              })

          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
    },
};
</script>

<style lang="scss" >
    .newTask{
        z-index: 10;
        position: fixed;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,.6);
        .form2{
            width: 750px;
            height:510px;
            background: #001d4d;
            margin: 250px auto;
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
                    .el-button{
                        float: right;
                        margin-right: 10px;
                    }
                }
               
            }
        }

    }
</style>