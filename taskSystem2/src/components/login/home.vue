<!--  -->
<template>
<div class='login'>
    <!-- bg effect -->
	<div id="bg">
		<canvas></canvas>
		<canvas></canvas>
		<canvas></canvas>
	</div>
	<div class="sub-main-w3" style="position: absolute;;top:15%;left:25%">
		<div class="form">
			<h2>请登录
				<i class="fa fa-long-arrow-down"></i>
			</h2>
			<div class="form-style-agile">
				<label>
					<i class="fa fa-user"></i>
					用户名
				</label>
				<input placeholder="请输入用户名" name="Name" type="text"v-model="username">
			</div>
			<div class="form-style-agile">
				<label>
					<i class="fa fa-unlock-alt"></i>
					密码
				</label>
				<input placeholder="请输入密码" name="Password" type="password" v-model="password">
			</div>
			<!-- checkbox -->
			<div class="wthree-text">
				<ul>
					<li>
						<label class="anim" style="display:none">
							<input type="checkbox" class="checkbox" :checked="savePassWrold">
							<span>记住密码</span>
						</label>
					</li>
					<li>
						<a href="#">忘记密码?</a>
					</li>
				</ul>
			</div>
			<!-- //checkbox -->
				<input type="submit" value="Log In">
		</div>
			
	</div>
	<!-- //content -->
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import "../../../static/css/style.css"
import miaov from '../../../static/js/miaov'

export default {
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {
    savePassWrold :true,
	username:"",
	password:""
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {

		setCookie(name,value){
		var Days = 30;
		var exp = new Date();
		exp.setTime(exp.getTime() + Days*24*60*60*1000);
		document.cookie = name + "="+ value + ";expires=" + exp.toString();
		}	
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {
var that  = this
miaov.loginBgAnimation()
$("input[type=submit]").click(function(){
	let postData = {
					    "username":that.username,
					    "password":that.password
					}

	 that.$getData.login(`/login`,"post",postData)
	 .then(data=>{
		 if(data.data.msg == "操作成功"){
			 that.setCookie("token",data.data.token)
			 that.$router.push({path:'/'})
		 }else{
			 that.$message.error(data.data.msg);
		 }
	 })
	 .catch(e=>{
		 console.log(e)
	 })

    // 
})
    

		// addEventListener("load", function () {
        
		// 	// setTimeout(hideURLbar, 0);
		// }, false);

		// function hideURLbar() {
		// 	window.scrollTo(0, 1);
		// }

        // $("#app").css("background","none")
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
<style scoped>

</style>