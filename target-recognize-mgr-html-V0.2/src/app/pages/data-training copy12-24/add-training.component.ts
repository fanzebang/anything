import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {DataTrain, HttpResult, SampleOssType} from '../../core/http-entity';
import {
  NzFormatEmitEvent,
  NzMessageService,
  NzModalRef,
  NzTreeNode,
  NzTreeNodeOptions, NzTreeSelectComponent
} from 'ng-zorro-antd';
import {Observable} from 'rxjs';

@Component({
  templateUrl: './add-training.component.html',
  styleUrls: ['./add-training.component.less']
})
export class AddTrainingComponent implements OnInit {

  @Input()
  trainId: number;
  validateForm!: FormGroup;
  dataTrain: DataTrain;

  nodes: NzTreeNodeOptions[] = [];

  @ViewChild('sampleTreeSelect', {static: false})
  nzTreeSelectComponent!: NzTreeSelectComponent;


  constructor(private fb: FormBuilder, private http: HttpClient, private nzModalRef: NzModalRef, private msg: NzMessageService) {
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      taskName: [null, [Validators.required]],
      taskPattern: [null, [Validators.required]],
      normModel: [null, [Validators.required]],
      taskMode: [null, [Validators.required]],
      sampleCategory: [null, [Validators.required]]
    });

    this.initSampleTree();
  }

  initSampleTree() {
    this.http.get(`${environment.API_URL}/v1/sample-oss-types`).subscribe((result: HttpResult<any>) => {
      if (HttpResult.succeed(result.code)) {
        const nodes = result.data.map((data) => {
          return {
            title: data.data.sampleTypeName,
            value: data.data.id + '',
            key: data.data.id + '',
            isLeaf: data.isLeaf
          };
        });

        this.nodes = nodes;


        if (this.trainId) {
          this.loadTrain(this.trainId);
        }
      }
    });
  }

  checkTreePath(sampleUpId: string, sampleOssTypeStack: SampleOssType[]) {

    this.http.get(`${environment.API_URL}/v1/sample-oss-types/${sampleUpId}`).subscribe((result: HttpResult<SampleOssType>) => {

      if (HttpResult.succeed(result.code)) {

        if (result.data.sampleUpId) {// ??????sampleUpId???null?????????????????????????????????
          // ???????????????
          sampleOssTypeStack.unshift(result.data);// ?????????????????????????????????????????????

          this.checkTreePath(result.data.sampleUpId + '', sampleOssTypeStack);

        } else {
          // ??????????????????
          const rootNodes = this.nzTreeSelectComponent.getTreeNodes();

          if (sampleOssTypeStack.length > 0) {

            for (let i = 0; i < rootNodes.length; i++) {
              if (+rootNodes[i].key == result.data.id) {
                this.fillTreePathNode(rootNodes[i], sampleOssTypeStack, 0);
                break;
              }
            }

          } else {


            for (let i = 0; i < rootNodes.length; i++) {
              if (+rootNodes[i].key == result.data.id) {
                rootNodes[i].isChecked = true;

                this.patchForm();
                break;
              }
            }


          }

        }
      }

    });

  }

  fillTreePathNode(parentNode: NzTreeNode, sampleOssTypeStack: SampleOssType[], idx: number) {
    if (idx < sampleOssTypeStack.length) {
      const targetSampleType = sampleOssTypeStack[idx];

      if (parentNode.children.length == 0) {
        const isHalfChecked = idx < sampleOssTypeStack.length - 1;
        const isChecked = idx == sampleOssTypeStack.length - 1;

        this.http.get(`${environment.API_URL}/v1/sample-oss-types`, {
          params: {
            sampleUpId: parentNode.key
          }
        }).subscribe((result: HttpResult<any[]>) => {
          if (HttpResult.succeed(result.code)) {
            const childrenNodes = result.data.map(data => {

              return {
                title: data.data.sampleTypeName,
                value: data.data.id + '',
                key: data.data.id + '',
                isLeaf: data.isLeaf,
                isHalfChecked: isHalfChecked,
                isChecked: isChecked
              };

            });

            parentNode.addChildren(childrenNodes);
            console.log('parentNode is :', parentNode);
            for (let i = 0; i < parentNode.children.length; i++) {
              if (+parentNode.children[i].key == targetSampleType.id) {
                this.fillTreePathNode(parentNode.children[i], sampleOssTypeStack, idx + 1);


                this.patchForm();

                break;
              }
            }
          }
        });
      } else {
        for (let i = 0; i < parentNode.children.length; i++) {
          if (+parentNode.children[i].key == targetSampleType.id) {
            this.fillTreePathNode(parentNode.children[i], sampleOssTypeStack, idx + 1);


            this.patchForm();
            break;
          }
        }
      }
    }
  }


  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }

    if (this.validateForm.valid) {
      this.nzModalRef.updateConfig({
        nzOkLoading: true
      });

      const formValue = this.validateForm.value;

      let sampleIds = formValue.sampleCategory.join(',');

      if (this.trainId) {
        // ??????
        this.http.put(`${environment.API_URL}/v1/data_train`, {
          id: this.trainId,
          taskName: formValue.taskName,
          taskPattern: formValue.taskPattern,
          normModel: formValue.normModel,
          taskMode: formValue.taskMode,
          taskSampleType: sampleIds
        }).subscribe((result: HttpResult<any>) => {
          if (HttpResult.succeed(result.code)) {
            this.msg.success('????????????');
            this.nzModalRef.close('1');
          } else {
            this.msg.error(result.message);
            this.nzModalRef.updateConfig({
              nzOkLoading: false
            });
          }
        });
      } else {
        // ??????
        this.http.post(`${environment.API_URL}/v1/data_train`, {
          taskName: formValue.taskName,
          taskPattern: formValue.taskPattern,
          normModel: formValue.normModel,
          taskMode: formValue.taskMode,
          taskSampleType: sampleIds
        }).subscribe((result: HttpResult<any>) => {
          if (HttpResult.succeed(result.code)) {
            this.msg.success('????????????');
            this.nzModalRef.close('1');
          } else {
            console.log(result);
            this.msg.error(result.message);
            this.nzModalRef.updateConfig({
              nzOkLoading: false
            });
          }
        });
      }
    }
  }

  onExpandChange(event: NzFormatEmitEvent): void {
	  console.log(event)
    if (event.eventName === 'expand') {
      if (event.node.getChildren().length === 0 && event.node.isExpanded) {
        this.loadNode(event.node.key).subscribe(result => {
          if (HttpResult.succeed(result.code)) {
            const childrenNodes = result.data.map((data) => {
                return {
                  title: data.data.sampleTypeName,
                  value: data.data.id + '',
                  key: data.data.id + '',
                  isLeaf: data.isLeaf
                };
              }
            );

            event.node.addChildren(childrenNodes);

          }
        });
      }
    }

  }


  loadNode(key: any): Observable<HttpResult<any>> {
    return this.http.get<HttpResult<any>>(`${environment.API_URL}/v1/sample-oss-types`, {
      params: {
        sampleUpId: key
      }
    });
  }

  loadTrain(id): void {
    this.http.get(`${environment.API_URL}/v1/data_train/${id}`).subscribe((result: HttpResult<DataTrain>) => {
      if (HttpResult.succeed(result.code)) {

        this.dataTrain = result.data;

        // ????????????????????????
        const taskSampleType: string[] = this.dataTrain.taskSampleType.split(',');
        // this.validateForm.patchValue({
        //   taskName: this.dataTrain.taskName,
        //   taskPattern: this.dataTrain.taskPattern,
        //   normModel: this.dataTrain.normModel,
        //   taskMode: this.dataTrain.taskMode,
        //   sampleCategory: taskSampleType
        // });

        taskSampleType.forEach(sampleId => {
          this.checkTreePath(sampleId, []);
        });
      }
    });
  }

  patchForm() {
    this.validateForm.patchValue({
      taskName: this.dataTrain.taskName,
      taskPattern: this.dataTrain.taskPattern,
      normModel: this.dataTrain.normModel,
      taskMode: this.dataTrain.taskMode,
      sampleCategory: this.dataTrain.taskSampleType.split(',')
    });
  }
}

class TrainSelectedSample {
  key: string;

}
