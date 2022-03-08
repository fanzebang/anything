import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {

  headerList:any = [
    {title:"设备管理",tolink:"/setting/device"},
    {title:"系统设置",tolink:"/setting/system"},
    {title:"建模学习",tolink:"/setting/module"},
  ]

  headerTitle:string = "设　备　管　理"

  constructor(private router:Router) { }

  ngOnInit(): void {

  

  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.

    var focusDom:any =  document.querySelectorAll(".setting .header li")
    var focusDivDom:any =  document.querySelectorAll(".setting .header li div")

    for (let index = 0; index < focusDom.length; index++) {
      const element = focusDom[index];
      const element1 = focusDivDom[index];
      element.style.background = '#042448'
      element1.style.background = '#042448'
    }

    console.log(window.location)

    if(window.location.hash.split('/').pop() == 'setting' || window.location.hash.split('/').pop() == 'device'){
      focusDom[0].style.background = "#184a80"
      focusDivDom[0].style.background = "#009cf3"
    }else if(window.location.hash.split('/').pop() == 'system'){
      focusDom[1].style.background = "#184a80"
      focusDivDom[1].style.background = "#009cf3"
    }else{
      focusDom[2].style.background = "#184a80"
      focusDivDom[2].style.background = "#009cf3"
    }

  }

  headerLiclick(e:any,i:any){
    var focusDom:any =  document.querySelectorAll(".setting .header li")
    var focusDivDom:any =  document.querySelectorAll(".setting .header li div")
    for (let index = 0; index < focusDom.length; index++) {
      const element = focusDom[index];
      const element1 = focusDivDom[index];
      element.style.background = '#042448'
      element1.style.background = '#042448'
    }
    focusDom[i].style.background = "#184a80"
    focusDivDom[i].style.background = "#009cf3"
    var title:any = ''
    for (let index = 0; index < this.headerList[i].title.length; index++) {
      const element:any = this.headerList[i].title[index];
      title+=`${element}　`
    }
    this.headerTitle =title

    this.router.navigate([this.headerList[i].tolink]);

  }

}
