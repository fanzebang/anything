import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AppService } from 'src/app/app.service';

declare global {
  interface Window {
    iframe1: any
  }
}

@Component({
  selector: 'app-device-management',
  templateUrl: './device-management.component.html',
  styleUrls: ['./device-management.component.scss']
})



export class DeviceManagementComponent implements OnInit {



  btnArr = ["添加","修改","删除"];
  deviceList = ['镜筒检测设备','支架检测设备','摄像头检测设备'];
  panels = [
    {
      active: true,
      name: '镜筒检测设备详细信息',
      disabled: false,
      src:"assets/components/1.html"
    },
    {
      active: true,
      disabled: false,
      name: '设备状态',
      src:"assets/components/2.html"
    },
    {
      active: true,
      disabled: false,
      name: '硬件状态',
      src:"assets/components/3.html"
    },
    {
      active: true,
      disabled: false,
      name: '版本信息',
      src:"assets/components/1.html"
    },
    {
      active: true,
      disabled: false,
      name: '心跳信息',
      src:"assets/components/1.html"
    },
    {
      active: true,
      disabled: false,
      name: '故障信息',
      src:"assets/components/1.html"
    },
    {
      active: true,
      disabled: false,
      name: '运维记录',
      src:"assets/components/1.html"
    }
  ];

  constructor(private sanitizer:DomSanitizer,private appService:AppService) { 

    for (let index = 0; index < this.panels.length; index++) {
      const element:any = this.panels[index];
      element.src = this.sanitizer.bypassSecurityTrustResourceUrl(element.src)
    }

    var that:any = this
    window.iframe1 = function iframe1() {
      that.appService.alertFun("重　　启")
    }
   

  }

  ngOnInit(): void {
 
   
   
  }

  

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    var iframes:any  = document.getElementsByTagName("iframe")
   
    for (var i = 0, j = iframes.length; i < j; ++i) {
      // 放在闭包中，防止iframe触发load事件的时候下标不匹配
      (function(_i:any) {
          iframes[_i].onload = function(this:any) {
              this.style.visibility = 'hidden';
              // this.style.display = 'none';

              // 提前还原高度
              this.setAttribute('height', 'auto'); // 或设为''

              // 再在下一轮事件循环中设置新高度
              setTimeout(function() {
                  iframes[_i].setAttribute('height', iframes[_i].contentWindow.document.body.scrollHeight);

                  iframes[_i].style.visibility = 'visible';
                  // iframes[_i].style.display = 'block';
              }, 0);
          }
      })(i);
  }
    

   
  }

}
