import { Injectable } from '@angular/core';

declare var $:any;

@Injectable({
  providedIn: 'root'
})



export class DataManageService {
  num:any;
  name:any
  constructor() { }

  delect(data1:any,data2:any){

    this.num = data1;
    this.name = data2;
    $.each($(`nz-tree-node-title span`),function(i,n){
    
      if(n.innerText.indexOf(data2) != -1){
          $(`nz-tree-node-title span`)[i].innerText = `${data2}    ${data1}`
      }
    })
    // .forEach(element => {

    // });
    
  }

}
