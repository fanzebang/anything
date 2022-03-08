import {Component, OnInit, ViewChild} from "@angular/core";
import {NzFormatEmitEvent, NzTreeComponent, NzTreeNodeOptions,} from "ng-zorro-antd";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {HttpResult} from "../../core/http-entity";
import axios from 'axios';
import {DataMarkService} from "./data-mark.service"

declare var $:any;

@Component({
  templateUrl: './mark-sample-tree.component.html',
  styleUrls: ['./mark-sample-tree.component.less']
})
export class MarkSampleTreeComponent implements OnInit {
  @ViewChild('nzTreeComponent', {static: false}) nzTreeComponent!: NzTreeComponent;
  defaultCheckedKeys = [];
  defaultSelectedKeys = [];
  defaultExpandedKeys = [];
  nodes: NzTreeNodeOptions[] = [];
  selectedSampleId: any;
  selectedSamplePath: string;
  isRequsetAll:any = false
  classValue:string = "";
  classList:any = []
  classListInfo:any = []
  constructor(private http: HttpClient,private dataMarkService:DataMarkService) {
  }

  ngOnInit(): void {
      let markData = JSON.parse(localStorage.getItem("markData"))
      let imgId
      try{
        imgId= markData.file.sampleTypeId
      }catch(e){
        imgId= markData.id
      }
   
    this.http.get(`${environment.API_URL}/v1/sample-oss-types`).subscribe((result: HttpResult<any>) => {
      if (HttpResult.succeed(result.code)) {
        this.nodes = result.data.map((data) => {
          return {
            title: data.data.sampleTypeName,
            key: data.data.id+"",
            isLeaf: data.isLeaf,
            samplePath: data.data.samplePath
          }
        });
      
        this.expandSampleNode("",imgId)
      }
    });

   

  }

  expandSampleNode(event: any,type:any) {
    if (event.eventName === 'expand' && type == "handClick") {
  
      if (event.node.isExpanded && event.node.children.length === 0) {
        // 异步加载下个节点
        this.loadChildrenSamples(event.node.key).subscribe((result: HttpResult<any>) => {
          if (HttpResult.succeed(result.code)) {
          
            const childrenNodes = result.data.map(data => {
              return {
                title: data.data.sampleTypeName,
                key: data.data.id+"",
                isLeaf: data.isLeaf,
                samplePath: data.data.samplePath
              }
            });
            
            event.node.addChildren(childrenNodes);

          }
        });
      }
    }else{
   
      this.http.get(`${environment.API_URL}/v1/sample-oss-types/getTypeMap?id=${type}`)
      .subscribe((result:any)=>{

        if(!result.data){

          this.http.get(`${environment.API_URL}/v1/sample-oss-types`).subscribe((result: HttpResult<any>) => {
            if (HttpResult.succeed(result.code)) {
              this.nodes = result.data.map((data) => {
                return {
                  title: data.data.sampleTypeName,
                  key: data.data.id+"",
                  isLeaf: data.isLeaf,
                  samplePath: data.data.samplePath
                }
              });
              this.isRequsetAll = true
            }
          });


        }else{


       
let data = JSON.parse(result.data)   
var that = this
        let arr = []
        let arr2 = []
        getArr(data)
        let index1 = arr.length-1

   
        for (let index = 0; index < this.nodes.length; index++) {
          const element = this.nodes[index];
          if(element.key == arr[arr.length-1]){

            element.expanded=false
            element.children=[]
          }
          
        }
      
        request(index1)
    
      function request(index){
              const element = arr[index];
              that.loadChildrenSamples(element).subscribe((result: HttpResult<any>) => {
                if (HttpResult.succeed(result.code)) {
                  var childrenNodes:any;
                  
               
                  if(arr[index-1]){
                
                    childrenNodes = result.data.map(data => {
                      return {
                        title: data.data.sampleTypeName,
                        key: data.data.id+"",
                        isLeaf: data.isLeaf,
                        samplePath: data.data.samplePath,
                        expanded: false,
                        children:[],
                      }

                      
                    });
                    arr2.push({
                      data:childrenNodes,
                      key:arr[index-1]+""
                    })
                  }else{

                    childrenNodes = result.data.map(data => {
                      return {
                        title: data.data.sampleTypeName,
                        key: data.data.id+"",
                        isLeaf: data.isLeaf,
                        samplePath: data.data.samplePath
                      }
                    });

                    arr2.push({
                      data:childrenNodes,
                      key:arr[0]+""
                    })

                  }
               
                 
              

                  index1--
                  if(index1>= 0){
                    request(index1)
                  }else{

                    // var fastTree:any = arr2
                  

                    for (let index = 0; index < arr2.length; index++) {
                      const element = arr2[index];
                
                      for (let index1 = 0; index1 < element.data.length; index1++) {
                        const element2 = element.data[index1];
            
                        if(element.key == element2.key){
                            element2.children = arr2[index+1].data
                         

                        }
                        
                      }
                    }


                    for (let index = 0; index < that.nodes.length; index++) {
                      const element = that.nodes[index];
                  
                      if(element.key == arr[arr.length-1]){
                        element.children = arr2[0].data
                       
                       
                      }
                      
                    }

                    let selectSampleArr = []
                    selectSampleArr[0] = data.id
                    selectSampleArr[1] = data.samplePath
                    selectSampleArr[2] = arr
               
                    that.selectSample('',selectSampleArr)
                 


                  }
                }


              });
         }
 
      


        function getArr(data){
          if(data.sampleOssType){
            arr.push(data.sampleUpId)
            return getArr(data.sampleOssType)
          }else{
            return false
          } 
        }

      }

      })


 
    }
  }
  
  loadChildrenSamples(sampleUpId: string) {
    return this.http.get(`${environment.API_URL}/v1/sample-oss-types`, {
      params: {
        sampleUpId
      }
    });
  }

  selectSample(event: any,type:any): void {
    if(!type){
      this.selectedSampleId = event.node.key;
      this.selectedSamplePath = event.node.origin.samplePath;
    }else{
      this.selectedSampleId = type[0]+"";
      this.selectedSamplePath = type[1];
      this.defaultCheckedKeys = [];
      let arr = type[2].reverse()
      arr = arr.map((data)=>{
          return data+""
      })

      for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
   
        this.defaultExpandedKeys.push(element)
      }
      this.defaultSelectedKeys.push(this.selectedSampleId);
      this.isRequsetAll = true
    }

    var arr = [this.nodes[this.defaultExpandedKeys[0]-1]];
    this.nodes = arr


  }

ngAfterViewInit(): void {
  //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
  //Add 'implements AfterViewInit' to the class.

}

classSeach(){
  this.classList = []
  this.classListInfo = []
    axios.post(`${environment.API_URL}/v1/sample-oss-file/relationQueryCatalogue?sampleTypeName=${this.classValue}`,{sampleTypeName:this.classValue},{
      headers: {
        'Authorization':'Bearer '+localStorage.getItem('Bearer'),
        'TR-Role': 'TR-User'
      }
    })
    .then((result:any)=>{
   
      result.data.data.forEach(element => {
       
          this.classList.push(element.sampleTypeName)
          this.classListInfo.push(element)
      });
    })
}

selectClass(val:string){
  var that =this
  this.classValue = val
  $.each(this.classListInfo,function(i,n){
    if(n.sampleTypeName == val){
      that.selectedSampleId = n.id
    }
  })
  
  this.dataMarkService.nzModal.openModals[0].triggerOk()
}

}
