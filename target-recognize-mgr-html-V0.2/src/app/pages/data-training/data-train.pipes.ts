import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'trainTaskMode'})
export class DataTrainPipes implements PipeTransform {
  transform(taskMode: number): string {
    // 1增量训练，2重新训练
    if (taskMode === 1) {
      return '增量训练';
    } else {
      return '重新训练';
    }
  }
}


@Pipe({name: 'taskPattern'})
export class DataTaskPatternPipes implements PipeTransform {
  transform(taskPattern: number): string {
    if (taskPattern === 1) {
      return '手动训练';
    } else {
      return '自动训练';
    }
  }
}

@Pipe({name: 'taskStatus'})
export class DataTaskStatusPipes implements PipeTransform {
  transform(taskStatus: number): string {
    // 0正在训练/1暂停训练/2训练完成/3 强制结束
    if (taskStatus === -1) {
      return '正在排队';
    } else if (taskStatus === 0) {
      return '正在训练';
    } else if (taskStatus === 1) {
      return '暂停训练';
    } else if (taskStatus === 2) {
      return '训练完成';
    } else if (taskStatus === 3) {
      return '强制结束';
    }
  }
}

@Pipe({name: 'taskProgress'})
export class DataTaskProgressPipes implements PipeTransform {
  transform(taskProgress: any): string {
    if (!isNaN(+taskProgress)) {
      return (+taskProgress*100).toFixed(2);
    } else {
      return "0";
    }
  }
}

