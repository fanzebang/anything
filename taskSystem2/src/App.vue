<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
// import getData from "../static/js/getData";
export default {
  name: 'App',
  methods:{
	  setCookie(name,value){
		var Days = 30;
		var exp = new Date();
		exp.setTime(exp.getTime() + Days*24*60*60*1000);
		document.cookie = name + "="+ value + ";expires=" + exp.toString();
		}
  },
  mounted(){
  var that  = this
  var heard = location.search;
  var access_token = heard.substring(1).split("=")[0]
  var pointLogin = heard.substring(1).split("=")
    if (heard && access_token == 'access_token') {
    
      	that.setCookie("token",pointLogin[1])
        setTimeout(()=>{
            that.$router.push({path:'/'})
        },200)
			  
    //  window.location.href= `${getData.ip}/v1/sso/welcome-detect?access_token=${pointLogin[2]}`
    }
  }
}
</script>

<style>
*{
  list-style: none;
  margin: 0px;
  padding: 0;
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  -webkit-font-smoothing: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  -moz-osx-font-smoothing: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}
#app {

  /*text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
  background: radial-gradient(#0a0041,#040014);
  width: 100%;
  height: 100%;
  /* font-weight: 600; */

}

::-webkit-scrollbar {
  /*滚动条整体样式*/
  width : 10px;  /*高宽分别对应横竖滚动条的尺寸*/
  height: 1px;
  }
::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius   : 10px;
  background-color: skyblue;
  background-image: -webkit-linear-gradient(
      45deg,
      rgba(255, 255, 255, 0.2) 25%,
      transparent 25%,
      transparent 50%,
      rgba(255, 255, 255, 0.2) 50%,
      rgba(255, 255, 255, 0.2) 75%,
      transparent 75%,
      transparent
  );
  }
::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  box-shadow   : inset 0 0 5px rgba(0, 0, 0, 0.2);
  background   : #ededed;
  border-radius: 10px;
  }
</style>
