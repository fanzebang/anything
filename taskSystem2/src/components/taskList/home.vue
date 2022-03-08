<template>
<div>
  <v-pHeader></v-pHeader>
  <div class="bottom">
      <v-left class="left" @changeStatus = changeStatus></v-left>
      <v-right class="right" :status="status"></v-right>
  </div>
</div>

</template>

<script>

import pHeader from "../public/header.vue"
import left from "./left.vue"
import right from "./right.vue"

export default {
    name: 'taskList',
    components:{"v-pHeader":pHeader,"v-left":left,"v-right":right},
    data() {
        return {
            status:"",
        };
    },

    mounted() {
        
    },

    methods: {

            changeStatus(data){
                
                this.status = data

                if(data == 0){
                   this.status = "" 
                }
                this.$EventBus.$emit("sendStatus",this.status)
            }
    },
};
</script>

<style lang="scss" scoped>
.bottom{
    display: flex;
    .left{
        height: 100%;
        flex: 0 0 10%;
        padding: 10px;
    }
    .right{
        flex:1;
        padding: 10px;;
        
    }
}

</style>