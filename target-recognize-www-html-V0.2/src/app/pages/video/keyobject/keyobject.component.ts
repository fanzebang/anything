import { Component, OnInit } from '@angular/core';
import { elementAt } from 'rxjs/operators';
import { VideoService } from 'src/app/video.service';

@Component({
  selector: 'app-keyobject',
  templateUrl: './keyobject.component.html',
  styleUrls: ['./keyobject.component.less']
})
export class KeyobjectComponent implements OnInit {
  public keyObj:any[]=[]
  
  constructor(private videoService:VideoService) { 


  
    // this.keyObj.push(this.changeList(keyObjectList))

  
  }

  changeList(arr){

let dataInfo = {};
arr.forEach((item, index) => {
	let { objectName } = item;
	if (!dataInfo[objectName]) {
		dataInfo[objectName] = {
			objectName,			
			keyTime: [],
      checked:'true'
		}
	}
	dataInfo[objectName].keyTime.push(item.appearTime);
});
var list:any = Object.values(dataInfo); // list 转换成功的数据



list.forEach(function(x:any ){
  for(var key in x){

    if(key == 'objectName'){
      x.text =x[key]
    }
    if(key == 'keyTime'){
      var arr = []
      x[key].forEach(element => {
        var arr2 = element.split(':')

        arr.push(arr2[0]*60*60+arr2[1]*60+arr2[2]*1+'\'')
      });
      x[key] = arr
    }
   
  }
})

this.keyObj = list

    
  }

  ngOnInit(): void {

  }

  checkBox(key):any{
    var outer = document.getElementById('outer'+key) 
    if(this.keyObj[key].checked == 'true'){
      this.keyObj[key].checked = 'false'
      outer.style.display = 'none'
    }else{
      this.keyObj[key].checked = 'true'
      outer.style.display = 'flex'
    }
  }


  public count=0;
  
  ngAfterViewInit(): void {
    const orignalSetItem = localStorage.setItem;　// 原始的setItem方法
    localStorage.setItem = function(key, newValue) {
      if(key == 'videoData'){
        const setItemEvent = new Event('setItemEvent');
        setItemEvent[key] = newValue; // 保存设置的值
        orignalSetItem.apply(this, arguments);　// 调用原始的setItem方法
        window.dispatchEvent(setItemEvent); // 派发该事件
      }
  };

  window.addEventListener('setItemEvent', (e:any) => {
    this.count++
    if(this.count==1){
      var keyObjectList = JSON.parse(localStorage.getItem("videoData"))[0].keyObjectList

      this.changeList(keyObjectList)
      
    }
  });

  this.videoService.aClickedEvent
  .subscribe((data:string) => {
    var keyObjectList = JSON.parse(localStorage.getItem("videoData"))[data].keyObjectList
      this.changeList(keyObjectList)
  });

  }

  getTime(e:any){
    var data = e.srcElement.innerText.replace('\'',"")
      this.videoService.getObjectTime(data)

  }


}
