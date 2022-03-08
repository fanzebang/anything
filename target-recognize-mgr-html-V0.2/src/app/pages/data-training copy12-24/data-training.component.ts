import {Component, OnInit} from '@angular/core';
import {NzMessageService, NzModalService} from 'ng-zorro-antd';
import {AddTrainingComponent} from './add-training.component';
import {HttpClient, HttpParams} from '@angular/common/http';
import {DataTrain, HttpResult, ApiPage} from 'src/app/core/http-entity';
import {environment} from '../../../environments/environment';
import {ModelPrecisionComponent} from './model-precision.component';
import {ModelCompareComponent} from './model-compare.component';

@Component({
  templateUrl: './data-training.component.html',
  styleUrls: ['./data-training.component.less', './train.less']
})
export class DataTrainingComponent implements OnInit {
  showCompare = false;

  flag = 0;
  pageIndex = 1;
  pageSize = 10;
  dataTotal = 0;

  listOfData: DataTrain[] = [];
  dataTrain: DataTrain;
  mapOfCheckedId: { [key: string]: boolean } = {};
  status = 'STATUS';
  rightComponent = false;

  // listOfData = [{
  //   taskName: 'Minie Ford',
  //   taskPattern: '自动',
  //   source: '可见光',
  //   taskMode: '增量训练',
  //   progress: '40%',
  //   startTime: '2018-06-23 15:36'
  // }, {
  //   taskName: 'Minie Ford',
  //   taskPattern: '自动',
  //   source: '可见光',
  //   taskMode: '增量训练',
  //   progress: '40%',
  //   startTime: '2018-06-23 15:36'
  // }, {
  //   taskName: 'Minie Ford',
  //   taskPattern: '自动',
  //   source: '可见光',
  //   taskMode: '增量训练',
  //   progress: '40%',
  //   startTime: '2018-06-23 15:36'
  // }];

  checked = false;
  indeterminate = false;
  setOfCheckedId = new Set<number>();
  isAllDisplayDataChecked = false;
  isIndeterminate = false;
  numberOfChecked = 0;

  onItemChecked(id: number, checked: boolean): void {
    // this.updateCheckedSet(id, checked);
    // this.refreshCheckedStatus();
  }

  comparingDataTrainList: DataTrain[] = [];

  checkAll(value: boolean): void {
    this.listOfData.forEach(d => (this.mapOfCheckedId[String(d.id)] = value));
    this.refreshStatus();
  }


  refreshStatus(): void {
    this.isAllDisplayDataChecked = this.listOfData
      .every(item => this.mapOfCheckedId[String(item.id)]);
    this.isIndeterminate =
      this.listOfData.some(item => this.mapOfCheckedId[String(item.id)]) &&
      !this.isAllDisplayDataChecked;
    this.numberOfChecked = this.listOfData.filter(item => this.mapOfCheckedId[String(item.id)]).length;
  }

  constructor(private nzModal: NzModalService, private http: HttpClient, private nzMessage: NzMessageService) {
  }

  ngOnInit(): void {
    this.loadTraining();
  }

  // addTask() {
  //   this.nzModal.create({
  //     nzTitle: '创建任务',
  //     nzContent: AddTrainingComponent,
  //     nzOkText: '提交请求',
  //     nzOnOk: (addComponent: AddTrainingComponent) => {
  //       addComponent.submitForm();
  //       return false;
  //     }
  //   });
  // }

  loadTraining() {
    let params;
    //不分页
    console.log(this.status)
    if (this.status === 'END') {
      params = new HttpParams().append('status', this.status).append('isOver', 'true');
    } else if(this.status === 'STATUS'){
      params = new HttpParams().append('status', this.status);
    }else{
       params = new HttpParams().append('status', this.status);
    }
    this.http.get(`${environment.API_URL}/v1/data_train/`, {params}).subscribe((result: HttpResult<ApiPage<DataTrain>>) => {
      if (HttpResult.succeed(result.code)) {
        this.listOfData = result.data.records;
        this.dataTotal = result.data.total;
        this.pageIndex = result.data.current;
      }
    });
  }

  // 暂停
  endTask() {
    const checkedCameraIds = [];
    for (const k in this.mapOfCheckedId) {
      if (this.mapOfCheckedId[k]) {
        checkedCameraIds.push(k);
      }
    }
    if (checkedCameraIds.length < 1) {
      this.nzMessage.error('最少勾选一项');
      return;
    }
    const controllerIds = checkedCameraIds.join(',');
    const params = new HttpParams().append('ids', controllerIds);
    this.http.put(`${environment.API_URL}/v1/data_train/endTask`, null, {params}).subscribe((result: any) => {
      if (result.code) {
        this.checkAll(false);
        this.nzMessage.success('暂停成功');
        this.loadTraining();
      } else {
        this.nzMessage.error(result.message);
      }
    });
  }

  delete() {
    const checkedCameraIds = [];
    for (const k in this.mapOfCheckedId) {
      if (this.mapOfCheckedId[k]) {
        checkedCameraIds.push(k);
      }
    }
    if (checkedCameraIds.length < 1) {
      this.nzMessage.error('最少勾选一项');
      return;
    }
    const controllerIds = checkedCameraIds.join(',');
    this.http.delete(`${environment.API_URL}/v1/data_train/${controllerIds}`).subscribe((result: any) => {
      if (result.code) {
        this.nzMessage.success('删除成功');
        this.loadTraining();
      } else {
        this.nzMessage.error(result.message);
      }
    });
  }

  changeStatus(flag: number) {
    console.log(flag)
    this.flag = flag;
    if(flag ==0){
      this.status = 'STATUS';
      console.log('点击进行中');
      this.loadTraining();
    }
     if (flag ==1) {
      console.log('点击已经结束');
      this.status = 'OVER';
      //加载进行中的数据
      this.loadTraining();
    }
    if (flag ==-1){
      this.status = 'LINE_UP';
      console.log('点击排队中');
      this.loadTraining();
    }
  }

  tableClick(id: number) {
    this.rightComponent = true;
    for (let i = 0; i < this.listOfData.length; i++) {
      if (this.listOfData[i].id === id) {
        this.dataTrain = this.listOfData[i];
      }
    }
  }

  addTask(id: number) {
    const modal = this.nzModal.create({
      nzTitle: id ? '修改任务' : '创建任务',
      nzContent: AddTrainingComponent,
      nzOkText: '提交请求',
      nzComponentParams: {
        'trainId': id,
      },
      nzOnOk: (addComponent: AddTrainingComponent) => {
        addComponent.submitForm();
        return false;
      }
    });
    modal.afterClose.subscribe(() => {
      this.loadTraining();
    });
  }

  checkModelPrecision(event: any, data: any) {
    // console.log('data', data);
    this.createTestTask(data.id);
    // this.nzMessage.warning('正在创建测试任务.........');
    event.stopPropagation();
    this.nzModal.create({
      nzTitle: '模型精度',
      nzContent: ModelPrecisionComponent,
      nzOkText: '加入对比',
      nzComponentParams: {
        'trainId': data.id,
      },
      nzOnOk: (modelPrecisionComponent: ModelPrecisionComponent) => {

        // 判断是否重复添加
        let duplicated = false;
        for (let i = 0; i < this.comparingDataTrainList.length; i++) {
          if (this.comparingDataTrainList[i].id === modelPrecisionComponent.dataTrain.id) {
            duplicated = true;
            break;
          }
        }

        if (duplicated) {
          this.nzMessage.error('请勿重复添加');
          return false;
        } else if (this.comparingDataTrainList.length < 3) {

          let compareName: string;
          if (this.comparingDataTrainList.length == 0) {
            compareName = '模型一';
          } else if (this.comparingDataTrainList.length == 1) {
            compareName = '模型二';
          } else if (this.comparingDataTrainList.length == 2) {
            compareName = '模型三';
          }
          modelPrecisionComponent.dataTrain.compareName = compareName;

          this.comparingDataTrainList.push(modelPrecisionComponent.dataTrain);

          this.showCompare = true;

        } else {
          this.nzMessage.error('最多对比3个模型');
          return false;
        }
      },
      nzCancelText: '关闭'
    });
  }

  startCompare() {
    const modal = this.nzModal.create({
      nzTitle: '模型对比',
      nzContent: ModelCompareComponent,
      nzComponentParams: {
        comparingDataTrainList: this.comparingDataTrainList
      },
      nzOnOk: (modelCompareComponent: ModelCompareComponent) => {
        // return false;
      },
      nzCancelText: '关闭',
      nzOkText: null
    });
    modal.afterClose.subscribe(() => {
      // this.loadTraining();
    });
  }

  clearCompare() {
    this.comparingDataTrainList = [];
  }

  closeCompare() {
    this.comparingDataTrainList = [];
    this.showCompare = false;
  }

  removeCompareItem(dataTrain: DataTrain) {
    for (let i = 0; i < this.comparingDataTrainList.length; i++) {
      if (dataTrain.id === this.comparingDataTrainList[i].id) {
        this.comparingDataTrainList.splice(i, 1);
        break;
      }
    }
  }

  trainResume() {
    const checkedCameraIds = [];
    for (const k in this.mapOfCheckedId) {
      if (this.mapOfCheckedId[k]) {
        checkedCameraIds.push(k);
      }
    }
    if (checkedCameraIds.length < 1) {
      this.nzMessage.error('最少勾选一项');
      return;
    }
    const controllerIds = checkedCameraIds.join(',');
    const params = new HttpParams().append('ids', controllerIds);
    this.http.put(`${environment.API_URL}/v1/data_train/keepTask`, null, {params}).subscribe((result: any) => {
      if (result.code) {
        this.nzMessage.success('继续训练成功');
        this.checkAll(false);
        this.loadTraining();
      } else {
        this.nzMessage.error(result.message);
      }
    });
  }

  // 创建28分库的测试任务
  createTestTask(trainId: any) {
    const params = new HttpParams().append('id', trainId);
    this.http.put(`${environment.API_URL}/v1/data_train/start-validate-task`, null, {params}).subscribe((result: any) => {
      if (result.code) {
        this.nzMessage.warning('创建测试任务成功.........');
      } else {
        this.nzMessage.error(result.message);
      }
    });
  }

  test(): void {
    console.log('触发');
  };

}
