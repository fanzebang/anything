import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

declare var $:any;
declare global {
  interface Window {
    remove: any,
    update: any,
    save: any
  }
}



@Component({
  selector: 'app-system-setting',
  templateUrl: './system-setting.component.html',
  styleUrls: ['./system-setting.component.scss']
})
export class SystemSettingComponent implements OnInit {

  selectArr:any = [
    {
      text:"支架检测设备"
    },
    {
      text:"支架检测设备"
    },
    {
      text:"支架检测设备"
    }
  ]

  listArr:any = [
    {
      text:"工位1"
    },
    {
      text:"工位2"
    },
    {
      text:"工位3"
    }
  ]
  constructor(private appService:AppService) { }

  ngOnInit(): void {

    // remove: any,
    // update: any,
    // save: any

    var that:any = this
    window.remove = function remove() {
      confirm("是否删除？")
    }

    window.update = function update() {
      that.appService.alertFun("新增用户")
    }
    
    window.save = function save() {

      location.reload()

    }

  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.

    $("input[type='button']").mousedown(function(this:any){
      $(this).css({"background":"#009cf3","color":"#fff"})
    }).mouseup(function(this:any){
      $(this).css({"background":"transparent","color":"#009cf3"})
    })


  }

}
