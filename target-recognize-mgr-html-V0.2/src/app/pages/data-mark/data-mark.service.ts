import { Injectable } from '@angular/core';
import { NzModalService} from "ng-zorro-antd";
import {MarkSampleTreeComponent} from "./mark-sample-tree.component";

declare var AILabel:any;
declare var $:any;
@Injectable({
  providedIn: 'root'
})
export class DataMarkService {

idsArr:any=[]


  constructor(public nzModal: NzModalService,) { }


creatNzModal(that:any,idx:any,fileSample:any){
    this.nzModal.create({
      nzTitle: '标注',
      nzContent: MarkSampleTreeComponent,
      nzOnOk: (markSampleTreeComponent: MarkSampleTreeComponent) => {
        let sampleId 
        let classValue
      
        if(markSampleTreeComponent.selectedSampleId){
          sampleId= markSampleTreeComponent.selectedSampleId;
          classValue = markSampleTreeComponent.classValue
        }else{
         
        }

        if (sampleId && !classValue) {
          const samplePath = markSampleTreeComponent.selectedSamplePath;
          that.drawingRects[idx].sampleId = sampleId;
          that.drawingRects[idx].samplePath = samplePath.split("/")[samplePath.split("/").length -2];
          var albelText =  that.drawingRects[idx].samplePath
          let arr = []
          $.each(that.gMapArr.layers[1].features,function(i,n){
              if(n.props.name != "uninterested"){
                arr.push(n)
              }
          })
           // 删除对应text
     
           that.drawingRects[idx].id = markSampleTreeComponent.selectedSampleId
          that.gMapArr.layers[2].removeTextById(fileSample.markData.relatedTextId[idx]);
        //添加对应text
      
          const {x: ltx, y: lty} = arr[idx].shape;
          const relatedTextId = `label-text-id-${arr[idx].id}`;
          const gFirstText = new AILabel.Text(
            relatedTextId, // id
            {text: albelText, position: {x: ltx, y: lty}, offset: {x: 0, y: 0}}, // shape, 左上角
            {name: '第一个文本对象'}, // props
            {fillStyle: '#15a0ff', strokeStyle: '#f0f8ff00', background: true, globalAlpha: 1, fontColor: '#fff'} // style
        );
        that.gMapArr.layers[2].addText(gFirstText);
        }else{
          
     
          var samplePath:any;
          // const sampleId = markSampleTreeComponent.classListInfo[0].id;
          $.each(markSampleTreeComponent.classListInfo,function(i,n){
            if(n.id == sampleId){
              samplePath = markSampleTreeComponent.classListInfo[i].samplePath
            }
          })

          // console.log(sampleId,classValue,)
          that.drawingRects[idx].sampleId = sampleId;
          that.drawingRects[idx].samplePath = samplePath
          var albelText =  that.drawingRects[idx].samplePath
          let arr = []
          $.each(that.gMapArr.layers[1].features,function(i,n){
              if(n.props.name != "uninterested"){
                arr.push(n)
              }
          })
           // 删除对应text
         
     
           markSampleTreeComponent.classListInfo[0].relatedTextId = fileSample.markData.relatedTextId
           fileSample.markData = markSampleTreeComponent.classListInfo[0]
           that.drawingRects[idx].id = fileSample.markData.id
           that.gMapArr.layers[2].removeTextById(fileSample.markData.relatedTextId[idx]);



        //添加对应text
          const {x: ltx, y: lty} = arr[idx].shape;
          const relatedTextId = `label-text-id-${arr[idx].id}`;
          const gFirstText = new AILabel.Text(
            relatedTextId, // id
            {text: albelText, position: {x: ltx, y: lty}, offset: {x: 0, y: 0}}, // shape, 左上角
            {name: '第一个文本对象'}, // props
            {fillStyle: '#15a0ff', strokeStyle: '#f0f8ff00', background: true, globalAlpha: 1, fontColor: '#fff'} // style
        );
        that.gMapArr.layers[2].addText(gFirstText);
        
        }
       
      },
      nzOnCancel: () => {

      }
    });
  }

}
