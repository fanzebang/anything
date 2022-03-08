import { Component, OnInit } from '@angular/core';
import { environment } from "../../../environments/environment";
import { Router } from '@angular/router';
declare var $:any;
declare var layui:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {



  constructor(public router:Router) { }

  ngOnInit(): void {
 

    var rightDom:any = document.querySelector('.header .right') 
    rightDom.style.display = ""

  

  }

  exit(){
    var _this:any = this;
    layui.use('layer', function (this:any) {
    this.layer.confirm("是否退出当前帐号，返回登录界面？",{ 
      btn:['确认','取消'],
      icon:3,
      title: '提示',
      success:function(){
   
        
      },
      end:function(){
       
      }
    },function(index:any){

      localStorage.removeItem("collectionData")

      _this.router.navigate([`/login`])

     layui.layer.close(index)
   },function(index:any){
   

   })
  })
  
    // this.$route.
    // localStorage.removeItem("collectionData")

  }

}
