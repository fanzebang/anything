<template>
    <ul>
        <li><v-header></v-header></li>
        <li><v-center></v-center></li>
        <li><v-bottom></v-bottom></li>
    </ul>
</template>

<script>

import header from "./header.vue"
import center from "./center.vue"
import bottom from "./bottom.vue"

export default {
    name: 'TasksystemHome',

    components: { "v-header":header,"v-center":center,"v-bottom":bottom },

    // directives: { DirectiveName },

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

ul{
    display: flex;
    flex-wrap: wrap;
    height: 100%;
    li{
       
        width: 100%;
        
    }
    li:nth-child(1){
        height: 5%;
    }
    li:nth-child(2){
        height: 25%;
      
    }
    li:nth-child(3){
        height: 65%;
    }

}


</style>