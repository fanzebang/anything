<template>
    <div style="height:500px">
     <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      background-color="#fff0"
      text-color="#fff"
      @select="handleSelect"
      active-text-color="#ffd04b">
        <el-menu-item index="1">
            <i class="el-icon-menu"></i>
            <span slot="title">全部任务</span>
        </el-menu-item>
        <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">进行中</span>
        </el-menu-item>
        <el-menu-item index="3">
            <i class="el-icon-document"></i>
            <span slot="title">分析中</span>
        </el-menu-item>
        <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">已完成</span>
        </el-menu-item>
        </el-menu>
    </div>
</template>

<script>


export default {
    name: 'left',
    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
            handleSelect:function(key, keyPath){
                this.$emit('changeStatus', key-1);
            }

    },
};
</script>

<style lang="scss" scoped>

.el-menu{
    border: none;
    padding: 10px;
    .el-menu-item{
        margin-bottom: 10px;
    }
    .el-menu-item:hover{
        background: url("~@/assets/navActiveBg.png") 0 0 no-repeat !important;
        background-size: 85% 100% !important;
    }
    .is-active{
        background: url("~@/assets/navActiveBg.png") 0 0 no-repeat !important;
        background-size: 85% 100% !important; 
    }
}

</style>