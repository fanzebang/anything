<template>
    <div class="center2">
        <div class="left">
            <v-cLeft></v-cLeft>
        </div>
        <div class="Ccenter">
            <v-cCenter></v-cCenter>
        </div>
        <div class="right">
            <v-cRight></v-cRight>
        </div>
    </div>
</template>

<script>
import cLeft from './cLeft.vue';
import cCenter from './cCenter.vue';
import cRight from './cRight.vue';


export default {
    name: 'TasksystemCenter',
    components:{'v-cLeft':cLeft,'v-cCenter':cCenter,'v-cRight':cRight},
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
    .center2{
        display: flex;
        height:100%;
        padding:0 20px 0 20px;
        div{
            height: 100%;
        }
        .left{
            flex: 0 0 30%;
        }
        .right{
            flex: 0 0 30%;
           
        }
        .Ccenter{
            flex: 1;
            margin: 0 10px;
        }
    }
</style>