import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Router } from '@angular/router';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { environment } from "../../../environments/environment";
import { Subject } from 'rxjs';


//jquery
declare var $:any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public items:any = [
      "2021年5月20日","11:30:25","星期三","多云"
  ]

  tzData:any = {

    numB: true,
    num:4,
    
  }

  alertTitle:string=""

  constructor(private appservice:AppService,private router:Router) {
    
 

   }

  ngOnInit(): void {



  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    // http://127.0.0.1:38083/detection/warningSocket
    var api:any = "ws"+environment.requestIp.substr(4)+"/detection/ws/warningSocket";  
    // var api:any =  "ws://82.157.123.54:9010/ajaxchattest "  // 网络接口可正常接收
    console.log(api)
    var ws  = new WebSocket(`${api}`);

    ws.onopen = function()
    {
       // Web Socket 已连接上，使用 send() 方法发送数据
   
       alert("数据发送中...");
    };

    ws.onmessage = function (evt) 
    { 

       var received_msg = evt.data;
       alert("数据已接收...");

    };

    // const open$ = new Subject();
    // const ws = webSocket({
    //   url: `${api}/push/UnReadWarning`,

    //   openObserver: open$,

    // });
    // ws.subscribe(res => {
    //   console.log('message', res);
    // });



  }

  userAlert(e:any){
    this.appservice.alertFun("通　　知")
  }

  toSetting(e:any){

      this.router.navigate(['/setting'])

  }

  close(){

    var alertDom:any = document.querySelector(".header .alert")
    alertDom.style.display = "none"

  }

}
