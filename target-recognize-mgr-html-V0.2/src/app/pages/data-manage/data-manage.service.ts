import { Injectable } from '@angular/core';
import {
  NzFormatEmitEvent,
  NzMessageService,
  NzModalService,
  NzTreeNode,
  toNumber,
  NzTreeComponent
} from 'ng-zorro-antd';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {HttpResult, SampleOssType, StatInfo, ApiPage, SampleOssFile} from '../../core/http-entity';
import {ActivatedRoute, Router} from '@angular/router';
declare var $:any;

@Injectable({
  providedIn: 'root'
})



export class DataManageService {

  num:any;
  name:any;
  visibleLightRootNode: NzTreeNode;
  infraredRootNode: NzTreeNode;
  sarRootNode: NzTreeNode;
  remoteSenseRootNode: NzTreeNode;
  visibleLight: NzTreeNode[] = []; 
  infrared: NzTreeNode[] = [];
  sar: NzTreeNode[] = [];
  remoteSense: NzTreeNode[] = [];
  titleData: NzTreeNode[] = [];
  type: { KJG: string, HW: string, SAR: string, YG: string } = {KJG: 'KJG', HW: 'HW', SAR: 'SAR', YG: 'YG'};
  sampleUpId: number;
  //是否最后一级
  isEndType: boolean = true;
  secondaryTitle: string;
  secondaryTotal: number = 0;
  isOperateButton = false;
  checkOptionsOne = [];
  //选中类型
  chooseType = false;
  currentNode: NzTreeNode;
  constructor(private http: HttpClient,private route: ActivatedRoute,private router: Router ) { 
    this.visibleLightRootNode = new NzTreeNode({
      title: '可见光',
      key: 'KJG',
      expanded: true,
      isSelected: true,
    });
    this.visibleLight.push(this.visibleLightRootNode);
    this.infraredRootNode = new NzTreeNode({
      title: '红外',
      key: 'HW',
      expanded: true,
    });
    this.infrared.push(this.infraredRootNode);
    this.sarRootNode = new NzTreeNode({
      title: 'SAR',
      key: 'SAR',
      expanded: true,
    });
    this.sar.push(this.sarRootNode);
    this.remoteSenseRootNode = new NzTreeNode({
      title: '遥感',
      key: 'YG',
      expanded: true,
    });
    this.remoteSense.push(this.remoteSenseRootNode);
  }

  countBigClassNum(Tree,count){
     let numReg =  new RegExp( /\d+/)
     var that = this
     if(!numReg.test(Tree[0].title)){

       $.each(Tree[0].children,function(i,n){
        count += that.getTitleNum(n.title)
        //  if(n.imageCount) {count+=n.imageCount} else {count +=0}
       })
       Tree[0].title = ` ${Tree[0].title}   ${count}`
     }
   }

loadSarTree(dataManage) {

    const httpParams = new HttpParams().append('sampleTypeName', this.type.SAR);
    this.http.get(`${environment.API_URL}/v1/sample-oss-types`, {params: httpParams}).subscribe((result: HttpResult<any>) => {
      if (HttpResult.succeed(result.code)) {
        if (result.data) {
          const sar = result.data.map((samples: any) => {
            return new NzTreeNode({
              title: samples.data.sampleTypeName + '    ' + samples.imageCount,
              key: samples.data.id + '',
              data: samples.data,
              isLeaf: samples.data.isLeaf,
            });
          });
          this.titleData = sar;
          if (dataManage.nzTreeComponentSar.getTreeNodeByKey(this.type.SAR)?.isExpanded) {
            this.sarRootNode.clearChildren();
            this.sarRootNode.addChildren(sar);
          }
          this.countBigClassNum(this.sar,0)
        }
      }
    });
  }

   loadRemoteSenseTree(dataManage) {
    const httpParams = new HttpParams().append('sampleTypeName', this.type.YG);
    this.http.get(`${environment.API_URL}/v1/sample-oss-types`, {params: httpParams}).subscribe((result: HttpResult<any>) => {
      if (HttpResult.succeed(result.code)) {
        if (result.data) {
          const remote = result.data.map((samples: any) => {
            return new NzTreeNode({
              title: samples.data.sampleTypeName + '    ' + samples.imageCount,
              key: samples.data.id + '',
              data: samples.data,
              isLeaf: samples.data.isLeaf,
            });
          });
          // this.titleData = remote;
          if (dataManage.nzTreeComponentRemote.getTreeNodeByKey(this.type.YG)?.isExpanded) {
        
            this.remoteSenseRootNode.clearChildren();
            this.remoteSenseRootNode.addChildren(remote);
          }

          this.countBigClassNum(this.remoteSense,0)
        
        }
      }
    });
  }

   loadInfraredTree(dataManage) {
    const httpParams = new HttpParams().append('sampleTypeName', this.type.HW);
    this.http.get(`${environment.API_URL}/v1/sample-oss-types`, {params: httpParams}).subscribe((result: HttpResult<any>) => {
      if (HttpResult.succeed(result.code)) {

        const infrared = result.data.map((samples: any) => {
          return new NzTreeNode({
            title: samples.data.sampleTypeName + '    ' + samples.imageCount,
            key: samples.data.id + '',
            data: samples.data,
            isLeaf: samples.data.isLeaf,
          });
        });
        // this.titleData = infrared;
        if (dataManage.nzTreeComponentInfrared.getTreeNodeByKey(this.type.HW)?.isExpanded) {
          this.infraredRootNode.clearChildren();
          this.infraredRootNode.addChildren(infrared);
        }
        this.countBigClassNum(this.infrared,0)
      }
    });
 
  }
  
  loadVisibleLightTree(dataManage) {
    const httpParams = new HttpParams().append('sampleTypeName', this.type.KJG);
    this.http.get(`${environment.API_URL}/v1/sample-oss-types`, {params: httpParams}).subscribe((result: HttpResult<any>) => {
      if (HttpResult.succeed(result.code)) {
        const visibleLight = result.data.map((samples: any) => {
          return new NzTreeNode({
            title: samples.data.sampleTypeName + '    ' + samples.imageCount,
            imageCount:samples.imageCount,
            key: samples.data.id + '',
            data: samples,
            isLeaf: samples.data.isLeaf,
          });
        });
        if (dataManage.nzTreeComponent.getTreeNodeByKey(this.type.KJG)?.isExpanded) {
          this.visibleLightRootNode.clearChildren();
          this.visibleLightRootNode.addChildren(visibleLight);
        }
        this.countBigClassNum(this.visibleLight,0)
        dataManage.router.navigate(['not-leaf', {'sampleUpId': 'KJG'}], {relativeTo: dataManage.route});
      }
    });
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }


  
trimSpace(array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] == "" || array[i] == null || typeof (array[i]) == "undefined") {
            array.splice(i, 1);
            i = i - 1;
        }
    }
    return array;
}

getTitleNum(str){
  return str.match(/\s\d+/)[0].trim()*1
}


serchImageCount(samplePath,title,tree){

for (let index = 0; index < samplePath.length; index++) {
    const element = samplePath[index];

  if(element == title && element != "可见光"  && element != "SAR"  && element != "遥感" && element != "红外"){
  let key:any = tree.parentNode.key

   let params 
   switch (tree.parentNode.key) {
       case 'KJG': params= new HttpParams().append('sampleTypeName', key);
       break;
       case 'SAR': params= new HttpParams().append('sampleTypeName', key);
       break;
       case 'HY': params= new HttpParams().append('sampleTypeName', key);
       break;
       case 'YG': params= new HttpParams().append('sampleTypeName', key);
       break;
      default: 
      var k:any = key*1; 
      params= new HttpParams().append('sampleUpId', k);
       break;
   }
   
  
 
    this.http.get(`${environment.API_URL}/v1/sample-oss-types`, {params: params}).subscribe((result: HttpResult<any>) => {
    if (HttpResult.succeed(result.code)) {
        for (let index = 0; index < result.data.length; index++) {
          let data =  result.data[index].data;
            if(data.sampleTypeName == title){
              tree.imageCount = result.data[index].imageCount
            }
        }
      tree.title = `${element}   ${tree.imageCount}`
    }
  });
}
}

}

changeTree(tree,samplePath){
  let title = tree.title.replace(/\s\d+/,"").trim()
  this.serchImageCount(samplePath,title,tree)
    for (let index = 0; index < tree.children.length; index++) {
      const element = tree.children[index];
        this.changeTree(element,samplePath)
    }
}

  delect(data1:any,data2:any){

    let samplePath = this.trimSpace(data2.samplePath.split('/'))
    // samplePath.shift()
    this.num = data1;
    this.name = samplePath[samplePath.length-1];
    let httpParams:any

    // visibleLight infrared sar remoteSense
    if(samplePath[0] == "可见光"){
      httpParams = new HttpParams().append('sampleTypeName', this.type.KJG);
      this.changeTree(this.visibleLight[0],samplePath)
      
    }else if(samplePath[0] == "SAR"){
      httpParams = new HttpParams().append('sampleTypeName', this.type.SAR);
      this.changeTree(this.sar[0],samplePath)
    }else if(samplePath[0] == "遥感"){
      httpParams = new HttpParams().append('sampleTypeName', this.type.YG);
      this.changeTree(this.remoteSense[0],samplePath)
    }else if(samplePath[0] == "红外"){
      httpParams = new HttpParams().append('sampleTypeName', this.type.HW);
      this.changeTree(this.infrared[0],samplePath)
    }

    this.http.get(`${environment.API_URL}/v1/sample-oss-types`, {params: httpParams}).subscribe((result: HttpResult<any>) => {
      if (HttpResult.succeed(result.code)) {
    
        if(samplePath[0] == "可见光"){
          let count = 0
          for (let index = 0; index < result.data.length; index++) {
            const element = result.data[index];
              for (let j = 0; j < this.visibleLight[0].children.length; j++) {
                const element1 = this.visibleLight[0].children[j];
                let title = element1.title.replace(/\s\d+/,"").trim()
                  if(element.data.sampleTypeName == title){
                    element1.title = `${element.data.sampleTypeName}  ${element.imageCount}`
                  }
              }
              count += element.imageCount
          }
          this.visibleLight[0].title = `${samplePath[0]}    ${count}`
        }else if(samplePath[0] == "SAR"){
          let count = 0
          for (let index = 0; index < result.data.length; index++) {
            const element = result.data[index];
              for (let j = 0; j < this.sar[0].children.length; j++) {
                const element1 = this.sar[0].children[j];
                let title = element1.title.replace(/\s\d+/,"").trim()
                  if(element.data.sampleTypeName == title){
                    element1.title = `${element.data.sampleTypeName}  ${element.imageCount}`
                  }
              }
              count += element.imageCount
          }
          this.sar[0].title = `${samplePath[0]}    ${count}`
        }else if(samplePath[0] == "遥感"){
          let count = 0
          for (let index = 0; index < result.data.length; index++) {
            const element = result.data[index];
              for (let j = 0; j < this.remoteSense[0].children.length; j++) {
                const element1 = this.remoteSense[0].children[j];
                let title = element1.title.replace(/\s\d+/,"").trim()
                  if(element.data.sampleTypeName == title){
                    element1.title = `${element.data.sampleTypeName}  ${element.imageCount}`
                  }
              }
              count += element.imageCount
          }
          this.remoteSense[0].title = `${samplePath[0]}    ${count}`

        }else if(samplePath[0] == "红外"){
          let count = 0
          for (let index = 0; index < result.data.length; index++) {
            const element = result.data[index];
              for (let j = 0; j < this.infrared[0].children.length; j++) {
                const element1 = this.infrared[0].children[j];
                let title = element1.title.replace(/\s\d+/,"").trim()
                  if(element.data.sampleTypeName == title){
                    element1.title = `${element.data.sampleTypeName}  ${element.imageCount}`
                  }
              }
              count += element.imageCount
          }
          this.infrared[0].title = `${samplePath[0]}    ${count}`

        }

       
      }
    });
  }
  

}
