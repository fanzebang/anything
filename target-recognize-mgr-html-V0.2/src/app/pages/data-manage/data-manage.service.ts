import { Injectable } from '@angular/core';
import { NzTreeNode } from 'ng-zorro-antd';

declare var $:any;

@Injectable({
  providedIn: 'root'
})



export class DataManageService {
  num:any;
  name:any;
  visibleLightRootNode: NzTreeNode;
  constructor() { 

 


  }

  setVisibleLightRootNode(data:any){

    this.visibleLightRootNode = data
    
  delete this.visibleLightRootNode.origin.children[3]
  delete this.visibleLightRootNode.origin.children[2]
   
  }

  delect(data1:any,data2:any){
    var that = this
    this.num = data1;
    this.name = data2;
    
    $.each($(`nz-tree-node-title span`),function(i,n){
 
      if(n.innerText.indexOf(data2) != -1){
      
          $(`nz-tree-node-title span`)[i].innerText = `${data2}    ${data1}`
     
      
      }
    })
 
    
  }
  

}
