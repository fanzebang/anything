export class HttpResult<T> {
  code: number;
  message: string;
  data: T;

  static succeed(code: number): boolean {
    return code === 1;
  }
}

export interface ApiPage<T> {
  current: number;
  pages: number;
  records: T[];
  size: number;
  total: number;
}

export class User {
  id: number;
  loginName: string;
  name: string;
  leadalId: string;
}

export class StatInfo {
  largeTypeNum: string;
  smallTypeNum: string;
  totalNum: string;
  markNum: string;
  modelTypeNum: string;
  totalUserNum: string;
  modelNum: string;
}

export class SampleOssType {
  id: number;
  sampleTypeName: string;
  sampleUpId: number;
  samplePath: string;
  sampleTypeNumber: number;
  isLeaf: boolean;
  imageCount: number;
}

export interface ApiPage<T> {
  current: number;
  pages: number;
  records: T[];
  size: number;
  total: number;
}

export class SampleOssFile {
  id: number;
  sampleTypeId: number;
  originFileName: string;
  ossKey: string;
  samplePath: string;
  contentType: string;
  bucketName: string;
  width: number;
  height: number;
  sampleStatus: number;
  markStatus: number;
  createdTime: string;
  createdBy: number;
  downloadNumber: number;
  trainNumber: number;
  browseNumber: number;
  labelMessage?: string;
  createdName?: string;
}

export class ProgressDto {
  id: number;
  name: string;
  jd: number;
}

export class DataTrain {
  deployModelUrls:any;
  leftTableData:any;
  id: number;

 /**
   * 创建任务的类别
   */
  lastClass:String;

  /**
   * 任务名称
   */
  taskName: string;

   /**
   * 模型说明
   */
 taskDetail: string;

  /**
   * 任务模式
   */
  taskPattern: number;

  /**
   * 基准模型
   */
  normModel: number;

  /**
   * 任务方式
   */
  taskMode: number;

   /**
   * 任务方式
   */
    taskModeName: string;
  /**
   * 训练类别  图片的类型
   */

  taskSampleType: string;

  /**
   * 任务的状态
   * -1正在排位/0正在训练/1暂停训练/2训练完成/3 强制结束
   */
  taskStatus: number;

  /**
   * 任务的部署 是否已部署
   */
  taskDeploy: boolean;

  createdBy: number;

  createdTime: string;

  typeSource: string;

  taskProgress: number;
  precision: number;
  recall: number;
  compareName?: string;
}

export class LabelTask {
  id: number;

  // 上传时间 创建时间
  createdTime: string;

  //创建人ID
  createdBy: number;

  //创建人昵称
  createdByName: string;

  //地区
  area: string;

  //权限
  authority: string;

  //图片的总数
  countFile: number;

  //已审核的图片
  checkFile: number;

  //文件的ID
  fileIds: string;

  sampleFiles?: SampleOssFile[];
}

