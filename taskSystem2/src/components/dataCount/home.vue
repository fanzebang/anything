<template>
    <div class="dataCount">
        <div class="top">
            <v-pHeader></v-pHeader>
        </div>
        
        <div class="center">
            <v-center></v-center>
        </div>
        <div class="bottom">
            <v-bottom></v-bottom>
        </div>
    </div>
</template>

<script>
import pHeader from '../public/header.vue'
import center from './center.vue'
import bottom from './bottom.vue'

export default {
    name: 'TasksystemHome',
    components:{"v-pHeader":pHeader,'v-center':center,'v-bottom':bottom},
    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>

    .dataCount{
        display: flex;
        flex-wrap: wrap;
        height: 100%;
     
        div{
            margin-bottom: 10px;
        }
        .top{
            width: 100%;
        }
        .center{

            flex: 0 0 100%;
            height:53%;
            
        }
        .bottom{
           flex:1; 
           height: 35%;
        }

    }
</style>