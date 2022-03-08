import { Component, OnInit } from '@angular/core';
import {  Router  } from "@angular/router";
import { environment } from "../../../environments/environment";


//jquery
declare var $:any;
declare var layui:any;

declare function AjaxErro(data:any):any;
declare function AjaxPost(Url:any,JsonData:any,LodingFun:any,ReturnFun:any):any;
declare function ErroAlert(e:any):any;
declare function createCode(e:any):any;
declare function getCookieValue(name:any):any;



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  CodeVal:any = 0;
  canGetCookie = 0;//是否支持存储Cookie 0 不支持 1 支持
  remoberPassworldIsselect:any = true;
  constructor(private router:Router) { }
  ngOnInit(): void {

    var rightDom:any = document.querySelector('.header .right') 
    rightDom.style.display = "none"
 
  }

  ngAfterViewInit(): void {


    var that:any = this
		var ajaxmockjax = 1 ;//是否启用虚拟Ajax的请求响 0 不启用  1 启用
		var truelogin = "kbcxy";
		var truepwd = "mcwjs";
		this.Code()
   


	    $(document).keypress(function (e:any) {
	        // 回车键事件  
	        if (e.which == 13) {
	            $('input[type="button"]').click();
	        }
	    });
	  
	    $('input[name="pwd"]').focus(function (this:any) {
	        $(this).attr('type', 'password');
	    });
	    $('input[type="text"]').focus(function (this:any) {
	        $(this).prev().animate({ 'opacity': '1' }, 200);
	    });
	    $('input[type="text"],input[type="password"]').blur(function (this:any) {
	        $(this).prev().animate({ 'opacity': '.5' }, 200);
	    });
	    $('input[name="login"],input[name="pwd"]').keyup(function (this:any) {
	        var Len = $(this).val().length;
	        if ($(this).val() == '' && Len >= 5) {

            $(this).next().animate({
              'opacity': '0',
              'right': '20'
          }, 200);

	           
	        } else {

            $(this).next().animate({
              'opacity': '1',
              'right': '30'
           }, 200);
	           
	        }
	    });
	    var open = 0;

	    layui.use('layer', function (this:any) {
        
	

	        //非空验证
	        $('input[type="button"]').click(function (this:any) {
        
	            var login = $('input[name="login"]').val();
	            var pwd = $('input[name="pwd"]').val();
	            var code:any = $('input[name="code"]').val();
	            if (login == '') {
               ErroAlert('请输入您的账号');
	            } else if (pwd == '') {
               ErroAlert('请输入密码');
	            } else if (code == '' || code.length != 4) {
               ErroAlert('输入验证码');
	            } else {
	         

	                //登陆

	                var JsonData =JSON.stringify({ username: login, password: pwd});
					//此处做为ajax内部判断   
					var url = `${environment.requestIp}/detection/login`;  

			
			if(that.CodeVal.toLowerCase() != code.toLowerCase()
			){
				ErroAlert('验证码不正确');
				return ;

			}else{

				AjaxPost(url, JsonData,
                    function () {
                        //ajax加载中

						       //认证中..
	                // fullscreen();   //浏览器全屏
	                $('.login').addClass('test'); //倾斜特效
	                setTimeout(function () {
	                    $('.login').addClass('testtwo'); //平移特效
	                }, 300);
	                setTimeout(function () {
	                    $('.authent').show().animate({ right: -320 }, {
	                        easing: 'easeOutQuint',
	                        duration: 600,
	                        queue: false
	                    });
	                    $('.authent').animate({ opacity: 1 }, {
	                        duration: 200,
	                        queue: false
	                    }).addClass('visible');
	                }, 500);

                    },
                    function (data:any) {
					
                        //ajax返回 
                        //认证完成
                        setTimeout(function () {
                            $('.authent').hide();
                            $('.login').removeClass('test');
							
                            if (data.Status == 'ok') {
                                //登录成功
                                $('.login div').fadeOut(100);
                                $('.success').fadeIn(1000);
                                $('.success').html(data.Text);
          					//跳转操作
							}
							

							// 记住用户名
							if(data.token){
								localStorage.setItem("collectionData",JSON.stringify({token:data.token}))
								let loginData = {pwd:$("input[name='pwd']").val(),name:$("input[name='login']").val()}
								let loginDataCookie = JSON.parse(that.getCookie("collection"))
								if(that.remoberPassworldIsselect == true){
										if(that.getCookie("collection")){
										
											if(that.getCookie("collection").indexOf(loginData.name) == -1){
												loginDataCookie.push(loginData)
												that.setCookie("collection",JSON.stringify(loginDataCookie))
											}
									
										}else{
											that.setCookie("collection","[]")
											if(that.getCookie("collection").indexOf(loginData.name) == -1){
												loginDataCookie.push(loginData)
												that.setCookie("collection",JSON.stringify(loginDataCookie))
											}

										}
								}else{

									if(that.getCookie("collection")){
										if(that.getCookie("collection").indexOf(loginData.name) != -1){
											$.each(loginDataCookie,function(i:any,n:any){
												loginDataCookie.splice(i,1)
											})
										}
										that.setCookie("collection",JSON.stringify(loginDataCookie))
								
									}

								}
								that.router.navigate(['/home'])
							}else{
								ErroAlert('账号名或密码或验证码有误');
							}
                        }, 2400);
                    })


				
			}
					
			

	            }
	        })
	    })
  

		// 登录返回界面
		// if(ajaxmockjax == 1){
		// 	$.mockjax({  
		// 		url: 'Ajax/Login',  
		// 		status: 200,  
		// 		responseTime: 50,          
		// 		responseText: {"Status":"ok","Text":"登陆成功<br /><br />欢迎回来"}  
		// 	}); 
		// 	$.mockjax({  
		// 		url: 'Ajax/LoginFalse',  
		// 		status: 200,  
		// 		responseTime: 50,          
		// 		responseText: {"Status":"Erro","Erro":"账号名或密码或验证码有误"}
		// 	});   
		// }

		$("input[name='pwd']").focus(function(){

			if(that.getCookie("collection")){
				let name = $("input[name='login']").val()
				if(that.getCookie("collection").indexOf(name) != -1){

					let loginDataCookie = JSON.parse(that.getCookie("collection"))
					$.each(loginDataCookie,function(i:any,n:any){
	
						if(loginDataCookie[i].name == name){

							$("input[name='pwd']").val(loginDataCookie[i].pwd)

						}	
	
					})

				}
			

			}

		})

		
    
  }

  changeremoberPassworld(){

	if(this.remoberPassworldIsselect){

		this.remoberPassworldIsselect = false

	}else{
		
		this.remoberPassworldIsselect = true
	}

  }

getCookie(name:any){
		var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
		if(arr=document.cookie.match(reg))
		return unescape(arr[2]);
		else
		return null;
	}
delCookie(name:any){
var exp = new Date();
exp.setTime(exp.getTime() - 1);
var cval=this.getCookie(name);
if(cval!=null){document.cookie= name + "="+cval+";expires="+exp.toString()};
}

setCookie(name:any,value:any){
var Days = 30;
var exp = new Date();
exp.setTime(exp.getTime() + Days*24*60*60*1000);
document.cookie = name + "="+ escape (value) + ";expires=" + exp.toString();
}
  
  Code() {
    if(this.canGetCookie == 1){
    createCode("AdminCode");
      var AdminCode =getCookieValue("AdminCode");
     this.showCheck(AdminCode);
    }else{
      this.showCheck(createCode(""));
    }
    }

    showCheck(a:any) {
			this.CodeVal = a;
	        var c:any = document.getElementById("myCanvas");
	        var ctx = c.getContext("2d");
	        ctx.clearRect(0, 0, 1000, 1000);
	        ctx.font = "80px 'Hiragino Sans GB'";
	        ctx.fillStyle = "#E8DFE8";
	        ctx.fillText(a, 0, 100);
		
	    }
  

}
