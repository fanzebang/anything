<template>
  <h2>
      Hello world!!
      <ul>
        <li v-for="(item,index) in list">
            {{item}}
        </li>
      </ul>
  </h2>
</template>
<script>
export default {
  name: 'Helloworld',
  data() {
    return {

      list:[
        "aaa","bbbb","ccc"
      ]
      
    };
  },

  mounted() {
    
  },

  methods: {
    
  },
};
</script>
<style  lang = "scss"  scoped>
  

  
</style>