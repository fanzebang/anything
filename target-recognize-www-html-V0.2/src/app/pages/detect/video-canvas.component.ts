import {Component, ElementRef, Input, OnInit, Output, ViewChild, EventEmitter, OnDestroy} from "@angular/core";
import {FfdecWasmLoaderService} from "../../ffdec-wasm-loader.service";
import {VideoService} from "../../video.service";
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {DetectHistory, HttpResult, VideoFrame} from "../../core/http-entity";

declare const FS: any;
declare const ffdecjs: any;

@Component({
  selector: '[app-video-canvas]',
  templateUrl: './video-canvas.component.html',
  styleUrls: ['./video-canvas.component.less']
})
export class VideoCanvasComponent implements OnInit, OnDestroy {

  @Input()
  video: File;

  @Output()
  frameRecognized = new EventEmitter<VideoFrame>();

  @ViewChild('videoCanvas')
  videoCanvasElmRef: ElementRef;

  lastDetectHistory: DetectHistory;

  retryGetFrameTimes = 0;
  lastVideoFrameIndex = 0;
  lastVideoFrameDetectIndex = 0;

  gl: any;
  program: any;
  buffer: any;
  vertex_screen: any;
  vertex_tex: any;
  tex_id_y: any;
  texture_y: any;
  tex_id_u: any;
  tex_id_v: any;
  texture_v: any;
  texture_u: any;

  stop = false;

  constructor(private ffdecWasmLoaderService: FfdecWasmLoaderService, private videoService: VideoService,
              private http: HttpClient) {
  }

  ngOnDestroy(): void {
    // console.log('要销毁了');
    this.stop = true;
  }


  ngOnInit(): void {
    console.log('video is :', this.video);
    if (this.video == null) {
      return;
    }

    // 开始解析视频
    console.log('开始解析视频');

    this.ffdecWasmLoaderService.load().then(() => {

      this.gl = this.videoCanvasElmRef.nativeElement.getContext('experimental-webgl');
      this.program = this.videoService.createProgramFromScripts(this.gl);
      this.gl.useProgram(this.program);


      // 从glsl中获取参数
      this.texture_y = this.gl.getUniformLocation(this.program, 'texture_y');
      this.texture_u = this.gl.getUniformLocation(this.program, 'texture_u');
      this.texture_v = this.gl.getUniformLocation(this.program, 'texture_v');

      this.vertex_screen = this.gl.getAttribLocation(this.program, 'vertex_screen');
      this.vertex_tex = this.gl.getAttribLocation(this.program, 'vertex_texture');

      // 创建y,u,v纹理
      this.tex_id_y = this.gl.createTexture();
      this.gl.bindTexture(this.gl.TEXTURE_2D, this.tex_id_y);
      this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, this.gl.LINEAR);
      this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, this.gl.LINEAR);
      this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_S, this.gl.CLAMP_TO_EDGE);
      this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_T, this.gl.CLAMP_TO_EDGE);

      this.tex_id_u = this.gl.createTexture();
      this.gl.bindTexture(this.gl.TEXTURE_2D, this.tex_id_u);
      this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, this.gl.LINEAR);
      this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, this.gl.LINEAR);
      this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_S, this.gl.CLAMP_TO_EDGE);
      this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_T, this.gl.CLAMP_TO_EDGE);

      this.tex_id_v = this.gl.createTexture();
      this.gl.bindTexture(this.gl.TEXTURE_2D, this.tex_id_v);
      this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, this.gl.LINEAR);
      this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, this.gl.LINEAR);
      this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_S, this.gl.CLAMP_TO_EDGE);
      this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_T, this.gl.CLAMP_TO_EDGE);

      // 纹理顶点(前8); 屏幕顶点(后8)
      this.buffer = this.gl.createBuffer();
      this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.buffer);
      this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array([
          0.0, 1.0,
          1.0, 1.0,
          0.0, 0.0,
          1.0, 0.0,
          -1.0, -1.0,
          1.0, -1.0,
          -1.0, 1.0,
          1.0, 1.0]),
        this.gl.STATIC_DRAW);

      this.gl.bindBuffer(this.gl.ARRAY_BUFFER, null);

      this.gl.validateProgram(this.program);

      console.log('ffdecjs.postRun is ready');

      if (this.videoService.existDataDir()) {
        console.log('/data 已经创建了，无需再创建');
      } else {
        FS.mkdir('/data'); // 创建"/data"目录, 后面都向这个目录写文件
        // 记录已经创建过目录了
        this.videoService.mkDataDir(true);
      }

      const reader = new FileReader();
      reader.onload = () => {
        console.log('文件读取完毕');
        // TODO. 调整为分步读取数据, 写入文件, 避免一次读取过多的数据量
        var binary = new Uint8Array(reader.result as any);
        //console.log("binary", binary);
        var stream = FS.open('/data/xxxx', 'w+');
        FS.write(stream, binary, 0, binary.length);
        FS.close(stream);
        //ffdecjs.print_file('/data/playFile.mp4');

        ffdecjs.open('/data/xxxx', '');

        //console.log("frame:", frame);
        // frame.time = 0x8000000000000000 为无效值

        setTimeout(() => {
          this.recognizeVideoFrame();
        }, 1000)

      };

      reader.readAsArrayBuffer(this.video);

    });
  }

  recognizeVideoFrame(): void {
    // console.log('this.stop is :', this.stop);
    if (this.stop) {
      return;
    }
    const frame = ffdecjs.get_next_frame();

    //var frame = yuv_init();
    if (frame) {
      this.retryGetFrameTimes = 0;
      this.lastVideoFrameIndex++;

      const containerWidth = this.videoCanvasElmRef.nativeElement.parentElement.clientWidth;
      const containerHeight = this.videoCanvasElmRef.nativeElement.parentElement.clientHeight;

      let viewpointWidth;
      let viewpointHeight;
      let viewpointX;
      let viewpointY;
      if (frame.w > containerWidth || frame.h > containerHeight) {
        // canvas画不下视频帧，需要计算一个缩放比例
        const heightRatio = containerHeight / frame.h;
        const widthRatio = containerWidth / frame.w;
        const ratio = widthRatio > heightRatio ? heightRatio : widthRatio;

        viewpointWidth = frame.w * ratio;
        viewpointHeight = frame.h * ratio;

        viewpointX = (containerWidth - viewpointWidth) / 2;
        viewpointY = (containerHeight - viewpointHeight) / 2;
      } else {
        // canvas画得下视频帧
        viewpointWidth = frame.w;
        viewpointHeight = frame.h;

        viewpointX = (containerWidth - frame.w) / 2;
        viewpointY = (containerHeight - frame.h) / 2;
      }

      this.videoCanvasElmRef.nativeElement.setAttribute('width', viewpointWidth);
      this.videoCanvasElmRef.nativeElement.setAttribute('height', viewpointHeight);
      this.videoCanvasElmRef.nativeElement.style.position = 'relative';
      this.videoCanvasElmRef.nativeElement.style.left = viewpointX + 'px';
      this.videoCanvasElmRef.nativeElement.style.bottom = viewpointY + 'px';

      this.retryGetFrameTimes = 0;
      // gl.viewport(viewpointX, viewpointY, viewpointWidth, viewpointHeight); // 这里根据图像宽高与显示区域宽高,调整输出图像位置
      this.gl.viewport(0, 0, viewpointWidth, viewpointHeight); // 这里根据图像宽高与显示区域宽高,调整输出图像位置
      this.videoService.draw_begin(this.gl);
      this.videoService.draw_yuv(this.gl, this.program, this.buffer, this.vertex_screen, this.vertex_tex, this.tex_id_y, this.texture_y, this.tex_id_u, this.tex_id_v, this.texture_v, this.texture_u, frame);
      this.videoService.draw_end();

      const dataURL = this.videoCanvasElmRef.nativeElement.toDataURL("image/jpeg");


      if ((this.lastVideoFrameIndex - 1) % 24 !== 0) {
        // 每隔8帧取一个图片
        this.frameRecognized.emit(new VideoFrame(dataURL, this.lastDetectHistory, viewpointWidth, viewpointHeight, viewpointX, viewpointY));

        this.recognizeVideoFrame();
      } else {

        const blob = this.videoService.dataURLToBlob(dataURL);
        const formData = new FormData();
        formData.append("file", blob);
        let httpParams = new HttpParams();
        if (this.lastDetectHistory) {
          httpParams = httpParams.append("videoDetectId", this.lastDetectHistory.detectId);
        }
        this.http.post(`${environment.API_URL}/v1/frame-detect/frameToImg`, formData, {
          params: httpParams
        }).subscribe((result: HttpResult<DetectHistory>) => {
          if (HttpResult.succeed(result.code)) {
            this.lastVideoFrameDetectIndex++;
            this.lastDetectHistory = result.data;
            this.frameRecognized.emit(new VideoFrame(dataURL, result.data, viewpointWidth, viewpointHeight, viewpointX, viewpointY));
            // this.loadVideoDetectHistory(this.videoDetectId, this.lastVideoFrameDetectIndex).then(() => {
            //
            this.recognizeVideoFrame();
            // });

          }
        });
      }

    } else {
      this.retryGetFrameTimes++;
      if (this.retryGetFrameTimes < 10) {
        setTimeout(() => {
          this.recognizeVideoFrame();
        }, 1000);
      } else {
        // 取10次都没取到，则认为视频已经结束了


        // if (this.total > 0) {
        //   this.video = null;
        //
        //   this.currentDetectResult = this.detectHistory[0];
        //
        //   this.showDetectResult();
        //
        // }
      }
    }

  }


  // loadVideoDetectHistory(deviceId: string, videoFrameDetectIndex: number): Promise<void> {
  //   return new Promise<void>((resolve, reject) => {
  //     const params = new HttpParams()
  //       .append("pageIndex", videoFrameDetectIndex + '')
  //       .append("pageSize", "1")
  //       .append("detectId", deviceId);
  //     this.http.get(`${environment.API_URL}/v1/detect-history`, {
  //       params
  //     }).subscribe((result: HttpResult<ApiPage<DetectHistory>>) => {
  //       if (HttpResult.succeed(result.code)) {
  //         this.detectHistory = [...this.detectHistory, ...result.data.records];
  //         this.total = this.detectHistory.length;
  //       }
  //
  //       resolve()
  //     }, () => {
  //       resolve();
  //     });
  //   });
  //
  //
  // }
}
