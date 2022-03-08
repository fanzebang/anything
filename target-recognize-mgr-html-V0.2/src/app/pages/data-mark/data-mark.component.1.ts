import {AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {HttpResult} from '../../core/http-entity';
import {NzMessageService, NzModalService} from "ng-zorro-antd";
import {MarkSampleTreeComponent} from "./mark-sample-tree.component";

@Component({
  templateUrl: './data-mark.component.html',
  styleUrls: ['./data-mark.component.less', './annotation.less']
})
export class DataMarkComponent implements OnInit, AfterViewInit {

  allotFiles: Array<AllotFile> = [];
  currentAllotFile: AllotFile;
  currentIndex: number;

  @ViewChild('imgCanvasElement')
  imgCanvasElmRef: ElementRef;

  @ViewChild('drawCanvasElement')
  drawCanvasElmRef: ElementRef;


  drawingRects: DrawRect[] = [];

  startX: number;
  startY: number;
  endX: number;
  endY: number;

  drawing = false;

  markMode = 'manual';

  constructor(private http: HttpClient, private nzModal: NzModalService, private nzMessage: NzMessageService) {

  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.loadSampleFiles();
  }


  loadSampleFiles() {
    this.http.get(`${environment.API_URL}/v1/sample-oss-file/allot`).subscribe((result: HttpResult<any>) => {
      if (HttpResult.succeed(result.code)) {
        this.allotFiles = result.data.map((file) => {
          return {
            id: file.id,
            rects: [],
            file,
            scaleRatio: 1
          };
        });

        if (this.allotFiles.length > 0) {
          this.currentAllotFile = this.allotFiles[0];
          this.currentIndex = 0;
          this.drawFileInCanvas(this.currentAllotFile);
        }
      }
    });
  }

  drawFileInCanvas(allotFile: AllotFile) {
    const imgCanvasElm = this.imgCanvasElmRef.nativeElement;
    const imgCanvasParentElm = this.imgCanvasElmRef.nativeElement.parentElement;

    const canvasWidth = imgCanvasParentElm.clientWidth;
    const canvasHeight = imgCanvasParentElm.clientHeight;

    const imgWidth = allotFile.file.width;
    const imgHeight = allotFile.file.height;


    let dWidth;
    let dHeight;
    // 如果图像的高或者宽任何一个大于canvas的高和宽，那么就需要缩放
    if (imgWidth > canvasWidth || imgHeight > canvasHeight) {
      const scaleRatio = Math.min(canvasWidth / imgWidth, canvasHeight / imgHeight);
      dWidth = imgWidth * scaleRatio;
      dHeight = imgHeight * scaleRatio;
      allotFile.scaleRatio = scaleRatio;
    } else {
      dWidth = imgWidth;
      dHeight = imgHeight;
    }


    imgCanvasElm.width = dWidth;
    imgCanvasElm.height = dHeight;

    const ctx = imgCanvasElm.getContext('2d');

    const img = new Image();
    img.onload = () => {
      ctx.drawImage(img, 0, 0, dWidth, dHeight);

      this.initDrawingCanvas(dWidth, dHeight);

      // 判断是否人机协同标注
      if (this.markMode === 'auto') {
        this.autoMark();
      }
    };

    img.crossOrigin = 'anonymous';
    img.src = localStorage.getItem('sampleResourcePath')+`/${allotFile.file.ossKey}`;
  }

  initDrawingCanvas(width: number, height: number) {
    const drawCanvasElm = this.drawCanvasElmRef.nativeElement;

    drawCanvasElm.width = width;
    drawCanvasElm.height = height;

    drawCanvasElm.addEventListener("mousedown", (e) => {

      this.drawing = true;

      this.startX = e.offsetX;
      this.startY = e.offsetY;

    }, false);

    drawCanvasElm.addEventListener("mousemove", (e) => {

      this.endX = e.offsetX;
      this.endY = e.offsetY;

      if (this.drawing) {
        this.redraw({startX: this.startX, startY: this.startY, endX: this.endX, endY: this.endY});
      }
    }, false);

    drawCanvasElm.addEventListener("mouseup", (e) => {
      if (this.drawing) {

        this.drawing = false;

        // 弹开树形选择框
        this.nzModal.create({
          nzTitle: '标注',
          nzMaskClosable: false,
          nzContent: MarkSampleTreeComponent,
          nzOnOk: (markSampleTreeComponent: MarkSampleTreeComponent) => {
            const sampleId = markSampleTreeComponent.selectedSampleId;
            if (sampleId) {
              const samplePath = markSampleTreeComponent.selectedSamplePath;

              this.drawingRects.push({
                startX: this.startX,
                startY: this.startY,
                endX: this.endX,
                endY: this.endY,
                saved: false,
                sampleId,
                samplePath
              });

              return true;
            } else {
              return false;
            }

          },
          nzOnCancel: () => {
            this.redraw();
          }
        });


      }
    }, false);
  }


  redraw(points?: { startX: number, startY: number, endX: number, endY: number }) {
    const drawCanvasElm = this.drawCanvasElmRef.nativeElement;
    const ctx = drawCanvasElm.getContext('2d');

    // 先清除，再重新画
    ctx.clearRect(0, 0, drawCanvasElm.width, drawCanvasElm.height);

    ctx.strokeStyle = "#F00";
    // ctx.strokeStyle = "#FFC230";

    for (let i = 0; i < this.drawingRects.length; i++) {
      ctx.strokeRect(this.drawingRects[i].startX, this.drawingRects[i].startY, this.drawingRects[i].endX - this.drawingRects[i].startX, this.drawingRects[i].endY - this.drawingRects[i].startY);
    }

    if (points) {
      ctx.strokeRect(points.startX, points.startY, points.endX - points.startX, points.endY - points.startY);
    }
  }

  cancelRect() {
    if (this.drawingRects.length > 0) {
      this.drawingRects.splice(this.drawingRects.length - 1, 1);

      this.redraw();
    }
  }

  saveRect() {

    if (this.drawingRects.length < 1) {
      this.nzMessage.error("请先标注");
      return;
    }
    this.currentAllotFile.rects = this.drawingRects;

    const reqBody: { [key: number]: any } = {};
    this.currentAllotFile.rects.forEach(rect => {
      let xmin = Math.min(rect.startX, rect.endX);
      let ymin = Math.min(rect.startY, rect.endY);

      let xmax = Math.max(rect.startX, rect.endX);
      let ymax = Math.max(rect.startY, rect.endY);

      if (this.currentAllotFile.scaleRatio < 1 && this.currentAllotFile.scaleRatio > 0) {
        // 图片有缩放
        xmin = Math.floor(xmin / this.currentAllotFile.scaleRatio);
        ymin = Math.floor(ymin / this.currentAllotFile.scaleRatio);
        xmax = Math.floor(xmax / this.currentAllotFile.scaleRatio);
        ymax = Math.floor(ymax / this.currentAllotFile.scaleRatio);
      }
      reqBody[rect.sampleId] = {
        "xmin": xmin,
        "ymin": ymin,
        "xmax": xmax,
        "ymax": ymax
      }
    });

    this.http.patch(`${environment.API_URL}/v1/sample-oss-file/patch_mark_status`, reqBody, {
      params: {
        fileId: this.currentAllotFile.id + ''
      }
    }).subscribe((result: HttpResult<any>) => {
      if (HttpResult.succeed(result.code)) {
        this.nzMessage.success("保存成功");

        // 在数组中删除当前这个
        // 判断是否还有下一张
        if (this.allotFiles.length > 1) {
          // 移除当前这个已经保存的
          // this.allotFiles = this.allotFiles.filter(file => file.id !== this.currentAllotFile.id);
          this.allotFiles.splice(this.currentIndex, 1);
          this.currentAllotFile = this.allotFiles[this.currentIndex];
          this.drawFileInCanvas(this.currentAllotFile);
          this.drawingRects = [];
        }

      }
    });
  }

  nextAllocFile() {
    if (this.currentIndex < this.allotFiles.length - 1) {
      this.currentIndex = this.currentIndex + 1;
      this.currentAllotFile = this.allotFiles[this.currentIndex];
      this.drawFileInCanvas(this.currentAllotFile);
      this.redraw();
    }
  }

  prevAllocFile() {
    if (this.currentIndex > 0) {
      this.currentIndex = this.currentIndex - 1;
      this.currentAllotFile = this.allotFiles[this.currentIndex];
      this.drawFileInCanvas(this.currentAllotFile);
      this.redraw();
    }
  }

  delRect(idx: number) {
    this.drawingRects.splice(idx, 1);
    this.redraw();
  }

  editRect(idx: number) {
    this.nzModal.create({
      nzTitle: '标注',
      nzContent: MarkSampleTreeComponent,
      nzOnOk: (markSampleTreeComponent: MarkSampleTreeComponent) => {
        const sampleId = markSampleTreeComponent.selectedSampleId;
        if (sampleId) {
          const samplePath = markSampleTreeComponent.selectedSamplePath;

          this.drawingRects[idx].sampleId = sampleId;
          this.drawingRects[idx].samplePath = samplePath;
        }
      },
      nzOnCancel: () => {

      }
    });
  }

  autoMark() {
    if (this.currentAllotFile) {
      this.http.post(`${environment.API_URL}/v1/mark-detect`, {
        "ossKey": this.currentAllotFile.file.ossKey
      }).subscribe((result: HttpResult<any>) => {
        if (HttpResult.succeed(result.code)) {
          const marks = result.data;
          const rects = []
          for (let i = 0; i < marks.length; i++) {
            rects.push({
              startX: Math.floor(marks[i].markPolygon.minX * this.currentAllotFile.scaleRatio),
              startY: Math.floor(marks[i].markPolygon.minY * this.currentAllotFile.scaleRatio),
              endX: Math.floor(marks[i].markPolygon.maxX * this.currentAllotFile.scaleRatio),
              endY: Math.floor(marks[i].markPolygon.maxY * this.currentAllotFile.scaleRatio),
              saved: false,
              sampleId: marks[i].sampleOssType.id,
              samplePath: marks[i].sampleOssType.samplePath
            })
          }

          this.drawingRects = rects;

          this.redraw();
        }
      });
    }
  }

  changeMarkMode(markMode: string) {
    this.markMode = markMode;
    if (this.markMode === 'auto') {
      // 人机协同标注
      this.autoMark();
    } else {
      // 手动标注
      this.drawingRects = [];
      this.redraw();
    }
  }

}


interface AllotFile {
  id: number;
  rects: DrawRect[];
  file: any;
  scaleRatio: number;
}

interface DrawRect {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  saved: boolean;
  sampleId: number;
  samplePath: string;
}
