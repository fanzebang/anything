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

export class DetectHistory {
  id: number;
  originFileName: string;
  ossId: number;
  ossKey: string;
  formatName: string;
  contentType: string;
  progress: number;
  status: number;
  elapsedMillis: number;
  createdTime: string;
  updatedTime: string;
  numBoxes: number;
  boxes: string;
  sceneType: string;
  markedOssId: number;
  markedOssKey: string;
  piecesOssKey: Array<{ ossKey: string, category: string, similarity: string }> = [];
  targetJson: Array<{ x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, x4: number, y4: number, category: string, categoryCn: string, similarity: number }>;
  detectId: string;
  originWidth: number;
  originHeight: number;
  baiKeUrl: string;
  sampleTypeName:string;
}

export class VideoFrame {
  constructor(public dataURL: any, public detectHistory: DetectHistory,
              public frameWidth: number, public frameHeight: number,
              public x: number, public y: number) {
  }
}

export class Kms {
  flag: string;
  name: string;
  url: string;
  id: string;
  detectName: string;
  sfUrl:string;
}
