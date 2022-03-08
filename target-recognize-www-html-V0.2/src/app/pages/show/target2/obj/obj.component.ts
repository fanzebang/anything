import { Component, OnInit,Input,EventEmitter,Output} from '@angular/core';

@Component({
  selector: 'app-obj',
  templateUrl: './obj.component.html',
  styleUrls: ['./obj.component.less']
})
export class ObjComponent implements OnInit {

  @Input() list:any;

  @Output() public outer = new EventEmitter<string>();

  public getThisTime:number = 0;

  constructor() { }

  ngOnInit(): void {

  }

  getTime(e:any){
   
    var liDom:any = document.querySelectorAll('.label li')
    for(var i =0;i<liDom.length;i++){
      liDom[i].style.background = "#e6e6e6"
      liDom[i].style.color = "#0a6deb"
    }
    e.srcElement.style.background = "#0a6deb"
    e.srcElement.style.color = "#fff"
   var value = e.srcElement.innerText.replace(/[\"\']+/,"")
   this.getThisTime  = value*1
   var that:any = this
   this.outer.emit(that.getThisTime)
  }

}
