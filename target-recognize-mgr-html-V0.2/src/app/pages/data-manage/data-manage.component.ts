import {ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {
  NzFormatEmitEvent,
  NzMessageService,
  NzModalService,
  NzTreeNode,
  toNumber,
  NzTreeComponent
} from 'ng-zorro-antd';
import {HttpResult, SampleOssType, StatInfo, ApiPage, SampleOssFile} from '../../core/http-entity';
import {DataManageAddSampleComponent} from './data-manage-add-sample.component';
import {keyframes} from '@angular/animations';
import construct = Reflect.construct;
import {DataManageDetailComponent} from './data-manage-detail.component';
import {DataManageUploadComponent} from './data-manage-upload.component';
import {ActivatedRoute, Router} from '@angular/router';
import {RenameSampleTypeComponent} from './rename-sample-type.component';
import {Store} from "@ngxs/store";
import {RenameSampleOssTypeAction} from "../../state/rename-sample-oss-type.action";
import { DataManageService } from './data-manage.service';
declare var $:any;

@Component({
  templateUrl: './data-manage.component.html',
  styleUrls: ['./data-manage.component.less', './data-manager.less']
})
export class DataManageComponent implements OnInit {
  @ViewChild('nzTreeComponent', {static: false}) nzTreeComponent!: NzTreeComponent;
  @ViewChild('nzTreeComponentSar', {static: false}) nzTreeComponentSar!: NzTreeComponent;
  @ViewChild('nzTreeComponentRemote', {static: false}) nzTreeComponentRemote!: NzTreeComponent;
  @ViewChild('nzTreeComponentInfrared', {static: false}) nzTreeComponentInfrared!: NzTreeComponent;

  visibleLightRootNode: NzTreeNode;
  infraredRootNode: NzTreeNode;
  sarRootNode: NzTreeNode;
  remoteSenseRootNode: NzTreeNode;
  visibleLight: NzTreeNode[] = [];
  infrared: NzTreeNode[] = [];
  sar: NzTreeNode[] = [];
  remoteSense: NzTreeNode[] = [];
  statInfo: StatInfo;
  titleData: NzTreeNode[] = [];
  type: { KJG: string, HW: string, SAR: string, YG: string } = {KJG: 'KJG', HW: 'HW', SAR: 'SAR', YG: 'YG'};
  sampleUpId: number;
  dataSet: SampleOssFile[] = [];
  //是否最后一级
  isEndType: boolean = true;
  secondaryTitle: string;
  secondaryData: SampleOssFile[] = [];
  secondaryTotal: number = 0;
  isOperateButton = false;
  checkOptionsOne = [];

  //选中类型
  chooseType = false;

  currentNode: NzTreeNode;


  constructor(private http: HttpClient, private nzMessage: NzMessageService, private nzModal: NzModalService,
              private router: Router, private route: ActivatedRoute, private store: Store,public dataManageService:DataManageService) {
                this.visibleLightRootNode = this.dataManageService.visibleLightRootNode      
                this.infraredRootNode = this.dataManageService.infraredRootNode   
                this.sarRootNode = this.dataManageService.sarRootNode   
                this.remoteSenseRootNode = this.dataManageService.remoteSenseRootNode   
                this.visibleLight = this.dataManageService.visibleLight
                this.infrared = this.dataManageService.infrared
                this.sar = this.dataManageService.sar
                this.remoteSense = this.dataManageService.remoteSense
    // this.visibleLightRootNode = new NzTreeNode({
    //   title: '可见光',
    //   key: 'KJG',
    //   expanded: true,
    //   isSelected: true,
    // });
    // this.visibleLight.push(this.visibleLightRootNode);

    // this.infraredRootNode = new NzTreeNode({
    //   title: '红外',
    //   key: 'HW',
    //   expanded: true,
    // });
    // this.infrared.push(this.infraredRootNode);
    // this.sarRootNode = new NzTreeNode({
    //   title: 'SAR',
    //   key: 'SAR',
    //   expanded: true,
    // });
    // this.sar.push(this.sarRootNode);
    // this.remoteSenseRootNode = new NzTreeNode({
    //   title: '遥感',
    //   key: 'YG',
    //   expanded: true,
    // });
    // this.remoteSense.push(this.remoteSenseRootNode);
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap) => {
      if (paramMap.has('sampleUpId')) {
        console.log('this is sampleUpId' + paramMap.get('sampleUpId'));
      }

    });
    // this.checkOptionsOne.push();
    this.dataManageService.loadVisibleLightTree(this);
    this.dataManageService.loadInfraredTree(this);
    this.dataManageService.loadRemoteSenseTree(this);
    this.dataManageService.loadSarTree(this);
    // this.loadVisibleLightTree();
    // this.loadInfraredTree();
    // this.loadSarTree();
    // this.loadRemoteSenseTree();
    this.loadStatInfo();
    this.dragWidth();
  }

  dragWidth(){
    var vbar = document.getElementById('vDragbar');
    var leftd = document.getElementById('treeBox');
    var hctn = document.getElementById("hContainer");
    const vdrag = (e) => {
      leftd.style.flexBasis = (e.pageX - vbar.offsetWidth / 2 - hctn.offsetLeft) + 'px';
    }
    vbar.addEventListener('mousedown', () => {
      document.addEventListener('mousemove', vdrag);
    });
    vbar.addEventListener('mouseup', () => {
      document.removeEventListener('mousemove', vdrag);
    });
  }


  // countBigClassNum(Tree,count){

  //  if(Tree[0]){
  //   let numReg =  new RegExp( /\d+/)

  //   if(!numReg.test(Tree[0].title)){
  //     $.each(Tree[0].origin.children,function(i,n){
  //       if(n.imageCount) {count+=n.imageCount} else {count +=0}
  //     })
  //     Tree[0].title = ` ${Tree[0].title}   ${count}`
  //   }
  //  }else{
  //   let numReg =  new RegExp( /\d+/)
  //   if(!numReg.test(Tree.title)){
  //   $.each(Tree.origin.children,function(i,n){
  //     if(n.imageCount) {count+=n.imageCount} else {count +=0}
      
  //   })
  //   Tree.title += `    ${count}`
  //   }
  //  }
     
   

  // }

  // loadVisibleLightTree() {
   
  //   const httpParams = new HttpParams().append('sampleTypeName', this.type.KJG);
  //   this.http.get(`${environment.API_URL}/v1/sample-oss-types`, {params: httpParams}).subscribe((result: HttpResult<any>) => {
  //     if (HttpResult.succeed(result.code)) {
      
  //       const visibleLight = result.data.map((samples: any) => {
  //         return new NzTreeNode({
  //           title: samples.data.sampleTypeName + '    ' + samples.imageCount,
  //           imageCount:samples.imageCount,
  //           key: samples.data.id + '',
  //           data: samples,
  //           isLeaf: samples.data.isLeaf,
  //         });
  //       });
  //       // this.titleData = visibleLight;
  //       if (this.nzTreeComponent.getTreeNodeByKey(this.type.KJG)?.isExpanded) {
  //         this.visibleLightRootNode.clearChildren();
  //         this.visibleLightRootNode.addChildren(visibleLight);
          
  //       }
  
  //       this.countBigClassNum(this.visibleLight,0)
  //     this.router.navigate(['not-leaf', {'sampleUpId': 'KJG'}], {relativeTo: this.route});
  //     }
  //   });
  // }

  // loadInfraredTree() {
  //   const httpParams = new HttpParams().append('sampleTypeName', this.type.HW);
  //   this.http.get(`${environment.API_URL}/v1/sample-oss-types`, {params: httpParams}).subscribe((result: HttpResult<any>) => {
  //     if (HttpResult.succeed(result.code)) {

  //       const infrared = result.data.map((samples: any) => {
  //         return new NzTreeNode({
  //           title: samples.data.sampleTypeName + '    ' + samples.imageCount,
  //           key: samples.data.id + '',
  //           data: samples.data,
  //           isLeaf: samples.data.isLeaf,
  //         });
  //       });
  //       this.titleData = infrared;
  //       if (this.nzTreeComponentInfrared.getTreeNodeByKey(this.type.HW)?.isExpanded) {
  //         this.infraredRootNode.clearChildren();
  //         this.infraredRootNode.addChildren(infrared);
  //       }
  //       this.countBigClassNum(this.infrared,0)
  //     }
  //   });
 
  // }

  // loadSarTree() {
  //   const httpParams = new HttpParams().append('sampleTypeName', this.type.SAR);
  //   this.http.get(`${environment.API_URL}/v1/sample-oss-types`, {params: httpParams}).subscribe((result: HttpResult<any>) => {
  //     if (HttpResult.succeed(result.code)) {
  //       if (result.data) {
  //         const sar = result.data.map((samples: any) => {
  //           return new NzTreeNode({
  //             title: samples.data.sampleTypeName + '    ' + samples.imageCount,
  //             key: samples.data.id + '',
  //             data: samples.data,
  //             isLeaf: samples.data.isLeaf,
  //           });
  //         });
  //         this.titleData = sar;
  //         if (this.nzTreeComponentSar.getTreeNodeByKey(this.type.SAR)?.isExpanded) {
  //           this.sarRootNode.clearChildren();
  //           this.sarRootNode.addChildren(sar);
  //         }
  //         this.countBigClassNum(this.sar,0)
  //       }
  //     }
  //   });
  // }

  // loadRemoteSenseTree() {
  //   const httpParams = new HttpParams().append('sampleTypeName', this.type.YG);
  //   this.http.get(`${environment.API_URL}/v1/sample-oss-types`, {params: httpParams}).subscribe((result: HttpResult<any>) => {
  //     if (HttpResult.succeed(result.code)) {
  //       if (result.data) {
  //         const remote = result.data.map((samples: any) => {
  //           return new NzTreeNode({
  //             title: samples.data.sampleTypeName + '    ' + samples.imageCount,
  //             key: samples.data.id + '',
  //             data: samples.data,
  //             isLeaf: samples.data.isLeaf,
  //           });
  //         });
  //         // this.titleData = remote;
  //         if (this.nzTreeComponentRemote.getTreeNodeByKey(this.type.YG)?.isExpanded) {
        
  //           this.remoteSenseRootNode.clearChildren();
  //           this.remoteSenseRootNode.addChildren(remote);
  //         }
          
  //         this.countBigClassNum(this.remoteSenseRootNode,0)
        
  //       }
  //     }
  //   });
  // }

  loadStatInfo() {
    this.http.get(`${environment.API_URL}/v1/stat-infos/`).subscribe((result: HttpResult<StatInfo>) => {
      if (HttpResult.succeed(result.code)) {
        this.statInfo = result.data;
      }
    });
  }

  /**
   * 点击事件
   * @param event
   */
 
  nzEvent(event: NzFormatEmitEvent): void {
 
    if (event.node.isLeaf) {
      // 袁攀 如果是最后一级
     
      this.router.navigate(['leaf', {'sampleUpId': event.node.key}], {relativeTo: this.route});
    } else {
      // 袁攀 如果不是最后一级
      console.log('不是最后一级');
      this.router.navigate(['not-leaf', {'sampleUpId': event.node.key}], {relativeTo: this.route});
    }

    let id = event.node.key;
    let node = event.node;
    this.currentNode = event.node;
 
    //展开叶子的时候去加载子节点
    console.log(event.eventName + '选中的是谁');
    if (event.eventName === 'click') {
      if (!isNaN(parseInt(id))) {
      
      } else {
        switch (id) {
          case this.type.KJG:
            this.sampleUpId = 1;
            // this.mutexType(id);
            // this.loadVisibleLightTree();
            this.dataManageService.loadVisibleLightTree(this);
            return;
          case this.type.YG:
            // this.mutexType(id);
            this.dataManageService.loadRemoteSenseTree(this);
            this.sampleUpId = 2;
            return;
          case this.type.SAR:
            // this.mutexType(id);
            this.sampleUpId = 4;
            this.dataManageService.loadSarTree(this);
            // this.loadSarTree();
            return;
          case this.type.HW:
            // this.mutexType(id);
            this.sampleUpId = 3;
            this.dataManageService.loadInfraredTree(this);
            // this.loadInfraredTree();
            return;
        }
      }
      if (event.node.isSelected) {
        this.sampleUpId = parseInt(event.node.key);
      } else {
        this.sampleUpId = null;
      }

      
    }

    //只加载树菜单
    if (event.eventName === 'expand' && event.node.isExpanded) {
      let params;
      if (!isNaN(parseInt(id))) {
        params = new HttpParams().append('sampleUpId', id);
      } else {
        params = new HttpParams().append('sampleTypeName', id);
      }
    
      this.http.get(`${environment.API_URL}/v1/sample-oss-types`, {params: params}).subscribe((result: HttpResult<any>) => {
        if (HttpResult.succeed(result.code)) {
       
     
          const data = result.data.map((samples:any) => {
            return new NzTreeNode({
              markTitle: samples.data.sampleTypeName,
              title: samples.data.sampleTypeName + '    ' + samples.imageCount,
              key: samples.data.id + '',
              data: samples.data,
              isLeaf: samples.data.isLeaf,
              id:samples.data.id
            });
          });
          this.titleData = data;
          if (node?.getChildren().length === 0) {
            node.addChildren(data);
          }
         
          // this.dataManageService.setVisibleLightRootNode(this.visibleLight)
        }
      });
    }
  }


  //互斥click事件
  mutexType(type: string) {
    switch (type) {
      case this.type.KJG:
        this.nzTreeComponentSar.getTreeNodeByKey(this.type.SAR).setSelected(false);
        this.nzTreeComponentSar.getTreeNodeByKey(this.type.YG).setSelected(false);
        this.nzTreeComponentSar.getTreeNodeByKey(this.type.HW).setSelected(false);
        return;
      case this.type.SAR:
        this.nzTreeComponentSar.getTreeNodeByKey(this.type.KJG).setSelected(false);
        this.nzTreeComponentSar.getTreeNodeByKey(this.type.YG).setSelected(false);
        this.nzTreeComponentSar.getTreeNodeByKey(this.type.HW).setSelected(false);
        return;
      case this.type.YG:
        this.nzTreeComponentSar.getTreeNodeByKey(this.type.SAR).setSelected(false);
        this.nzTreeComponentSar.getTreeNodeByKey(this.type.KJG).setSelected(false);
        this.nzTreeComponentSar.getTreeNodeByKey(this.type.HW).setSelected(false);
        return;
      case this.type.HW:
        this.nzTreeComponentSar.getTreeNodeByKey(this.type.SAR).setSelected(false);
        this.nzTreeComponentSar.getTreeNodeByKey(this.type.KJG).setSelected(false);
        this.nzTreeComponentSar.getTreeNodeByKey(this.type.YG).setSelected(false);
        return;
    }
  }

  /**
   * 新增分类
   */
  addSampleType() {
    if (this.sampleUpId) {
      const addModal = this.nzModal.create({
        nzTitle: '新建下级分类',
        nzContent: DataManageAddSampleComponent,
        nzComponentParams: {
          'sampleUpId': this.sampleUpId,
        },
        nzOnOk: (addComponent: DataManageAddSampleComponent) => {
          const formValue = addComponent.getAddFormValue();
          if (formValue) {
            this.http.post(`${environment.API_URL}/v1/sample-oss-types`, formValue).subscribe((result: HttpResult<SampleOssType>) => {
              //重新加载树 通过选择的key去加载树
              if (HttpResult.succeed(result.code)) {
                // debugger;
                
                // switch (this.sampleUpId) {
                //   case 1:
                //this.loadVisibleLightTree();
                //     addModal.close();
                //     return;
                //   case 2:
                //this.loadRemoteSenseTree();
                //     addModal.close();
                //     return;
                //   case 4:
                //this.loadSarTree();
                //     addModal.close();
                //     return;
                //   case 3:
                //this.loadInfraredTree();
                addModal.close();
                //     return;
                // }
                // console.log(result.data.isLeaf + 'issss');
                // this.nzTreeComponent.getTreeNodeByKey(this.sampleUpId + '').addChildren([{
                //   title: result.data.sampleTypeName,
                //   key: result.data.id + '',
                //   isLeaf: result.data.isLeaf,
                // }]);

                // this.currentNode. ([{
                //   markTitle: samples.data.sampleTypeName,
                //   title: samples.data.sampleTypeName + '    ' + samples.imageCount,
                //   key: samples.data.id + '',
                //   data: samples.data,
                //   isLeaf: samples.data.isLeaf,
                //   id:samples.data.id
                // }])
                this.currentNode.addChildren([new NzTreeNode({
                  markTitle: result.data.sampleTypeName,
                  title: result.data.sampleTypeName + '    ' + result.data.imageCount,
                  key: result.data.id + '',
                  data: result.data,
                  isLeaf: result.data.isLeaf,
                  id: result.data.id
                })]);
              
                if (this.currentNode.isLeaf) {
                  this.currentNode.isLeaf = false;
                } else {
                  let params;
                  var id = this.sampleUpId + '';
                  if (!isNaN(parseInt(id))) {
                    params = new HttpParams().append('sampleUpId', id);
                  } else {
                    params = new HttpParams().append('sampleTypeName', id);
                  }
                  this.http.get(`${environment.API_URL}/v1/sample-oss-types`, {params: params}).subscribe((result: HttpResult<any>) => {
                    if (HttpResult.succeed(result.code)) {
                      const data = result.data.map((samples: any) => {
                        return new NzTreeNode({
                          markTitle: samples.data.sampleTypeName,
                          title: samples.data.sampleTypeName + '    ' + samples.imageCount,
                          key: samples.data.id + '',
                          data: samples.data,
                          isLeaf: samples.data.isLeaf,
                          id:samples.data.id
                        });
                      });
                      this.titleData = data;
                      this.currentNode.clearChildren();
                      this.currentNode.addChildren(data);
                     
                    }
                  });
                }
                // addModal.close();
              } else {
                this.nzMessage.error('新增失败！');
              }
            });
          }
          return false;
        },
      });
    } else {
      this.nzMessage.error('请先选择父级菜单！');
    }
  }

  delSampleType() {
    if (this.currentNode) {
      this.nzModal.confirm({
        nzTitle: '确定删除吗？',
        nzContent: `将要删除【${this.currentNode.title}】，是否要继续？`,
        nzOnOk: () => {
          this.http.delete(`${environment.API_URL}/v1/sample-oss-types`, {
            params: {
              id: this.currentNode.key
            }
          }).subscribe(() => {
            this.currentNode.remove();
            this.currentNode = null;
          });
        }
      });
    }

  }

  editSampleType() {
    if (this.currentNode) {
  
      // let targerData = this.currentNode.origin.data.data;
     
      // const nodeData;
    
      // if (!nodeData.isLeaf) {
      //   targerData = nodeData.data;
      // } else {
      //   targerData = nodeData;
      // }
      // const currentSampleType = nodeData;
      //查询一下具体的对象 免得要更新 树结构
      this.http.get(`${environment.API_URL}/v1/sample-oss-types/${this.currentNode.key}`).subscribe((result: HttpResult<any>) => {
        if (HttpResult.succeed(result.code)) {
          const currentSampleType = result.data;
    
          console.log('currentSampleType is :', currentSampleType);
          const addModal = this.nzModal.create({
            nzTitle: '重命名分类',
            nzContent: RenameSampleTypeComponent,
            nzComponentParams: {
              sampleTypeName: currentSampleType.sampleTypeName
            },
            nzOnOk: (renameComponent: RenameSampleTypeComponent) => {
              const newName = renameComponent.getNewName();
              if (newName) {
                this.http.patch(`${environment.API_URL}/v2/sample-oss-types/${currentSampleType.id}/sample-type-name`, {
                  sampleTypeName: newName
                }).subscribe((result: HttpResult<any>) => {
                  if (HttpResult.succeed(result.code)) {
                    this.nzMessage.success('修改成功');
                    this.currentNode.title = newName + '    ' + result.data.imageCount;
                    addModal.close();
                    if (result.data.isLeaf) {
                      this.store.dispatch(new RenameSampleOssTypeAction(newName)).subscribe((aa) => {
                        console.log('aa is :', aa);
                      });
                      // this.router.navigate(['leaf', {'sampleUpId': result.data.id}], {relativeTo: this.route});
                    }
                  } else {
                    this.nzMessage.error(result.message);
                  }
                });
              }
              return false;
            },
          });
        }
      });
    }
  }

  loadImage(sampleUpId: number, sampleType: string) {
    let httpParams;
    if (!sampleType) {
      httpParams = new HttpParams().append('enumTypeName', sampleType);
    }
    this.http.get(`${environment.API_URL}/v1/sample-oss-file/type/${sampleUpId}`, {params: httpParams}).subscribe((result: HttpResult<SampleOssFile[]>) => {
      if (HttpResult.succeed(result.code)) {
        this.dataSet = result.data;
      }
    });
  }

  loadSecondaryImage(sampleUpId: number) {
 
    const params = new HttpParams().append('typeId', sampleUpId + '');
    this.http.get(`${environment.API_URL}/v1/sample-oss-file/getOssFilesByTypeId`, {params: params}).subscribe((result: HttpResult<ApiPage<SampleOssFile>>) => {
      this.secondaryData = result.data.records;
      this.secondaryTotal = result.data.total;
  
      const box = this.secondaryData.map((s) => {
        return [{label: '', value: s.id, checked: false, typeId: s.sampleTypeId}];
      });
      this.checkOptionsOne = box;
    });
  }


  operateMgr(flag: boolean) {
    this.isOperateButton = flag;
  }

  //图片详情 包括上一张和下一张操作
  amplify(sampleOssId: number) {
    this.nzModal.create({
      nzWidth: 800,
      nzContent: DataManageDetailComponent,
      nzFooter: null,
      nzComponentParams: {
        'sampleOssId': sampleOssId,
        'secondaryData': this.secondaryData,
      },
      nzClosable: false,
      nzBodyStyle: {
        'padding': '0',
      },
    });
  }


  indeterminate = true;
  allChecked = false;


  /**
   * 全选
   */
  updateAllChecked(): void {
    if (this.allChecked) {
      this.checkOptionsOne = this.checkOptionsOne.map(item => {
        return [{
          ...item,
          checked: false
        }];
      });
      this.allChecked = false;
    } else {
      this.checkOptionsOne = this.checkOptionsOne.map(item => {
        return [{
          ...item,
          checked: true
        }];
      });
      this.allChecked = true;
    }
  }

  /**
   * 单选
   */
  updateSingleChecked(): void {
    if (this.checkOptionsOne.every(item => !item.checked)) {
      this.allChecked = false;
      this.indeterminate = false;
    } else if (this.checkOptionsOne.every(item => item.checked)) {
      this.allChecked = true;
      this.indeterminate = false;
    } else {
      this.indeterminate = true;
    }
  }


  /**
   * 获取选中的图片
   */
  getChooseImage() {
    let ids = '';
    this.checkOptionsOne.map((s) => {
      if (s[0].checked) {
        console.log('被选中的id ' + s[0].typeId);
        ids = ids.concat(s[0].value + ',');
      }
    });
    console.log(ids);
    return ids;
  }

  /**
   * 获取选中的上级id
   */
  getChooseTypeId() {
    let sampleTypeId = '';
    this.checkOptionsOne.map((s) => {
      if (s[0].checked) {
        sampleTypeId = s[0].typeId;
      }
    });
    return sampleTypeId;
  }

  /**
   * 删除
   */
  delete() {
    let ids = this.getChooseImage();
    let sampleTypeId = this.getChooseTypeId();
    console.log('this is ' + ids + '------>' + sampleTypeId);
    let params = new HttpParams().append('ids', ids).append('sampleTypeId', sampleTypeId).append('enumStatus', 'DELETE');
    this.http.patch(`${environment.API_URL}/v1/sample-oss-file/patch_status`, null, {params: params}).subscribe((result: HttpResult<SampleOssFile[]>) => {
      console.log(result.code + '   code');
      if (HttpResult.succeed(result.code)) {
        this.loadSecondaryImage(parseInt(sampleTypeId));
      } else {
        this.nzMessage.error(result.message);
      }
    });
  }

  move() {
    // this.nzMessage.error('');
  }

  lock() {
    let ids = this.getChooseImage();
    let sampleTypeId = this.getChooseTypeId();
    console.log('this is ' + ids + '------>' + sampleTypeId);
    let params = new HttpParams().append('ids', ids).append('sampleTypeId', sampleTypeId).append('enumStatus', 'LOCK');
    this.http.patch(`${environment.API_URL}/v1/sample-oss-file/patch_status`, null, {params: params}).subscribe((result: HttpResult<SampleOssFile[]>) => {
      console.log(result.code + '   code');
      if (HttpResult.succeed(result.code)) {
        this.loadSecondaryImage(parseInt(sampleTypeId));
      } else {
        this.nzMessage.error(result.message);
      }
    });
  }

  uploadImages() {
    const modal = this.nzModal.create({
      nzWidth: 1000,
      nzContent: DataManageUploadComponent,
      nzFooter: null,
      nzComponentParams: {
        'sampleUpId': this.sampleUpId
      },
    });
    modal.afterClose.subscribe(() => {
      //重新加载图片
      this.loadSecondaryImage(this.sampleUpId);
    });
  }


}
