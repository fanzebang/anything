import {Injectable,EventEmitter,Output} from "@angular/core";
import {FfdecWasmLoaderService} from "./ffdec-wasm-loader.service";

declare const FS: any;
declare const ffdecjs: any;



@Injectable()
export class VideoService {

  @Output('aClickedEvent') aClickedEvent = new EventEmitter<any>();

  @Output('objectTime') objectTime = new EventEmitter<any>();

  private dataDirMaked = false;

  private videoArr:any = []
  
  private videoInitData:any;

  constructor() {



  }

  /**
   * 创建glsl程序
   * @param gl
   */
  createProgramFromScripts(gl) {
    const vertex = `
        precision mediump float;
        attribute vec4 vertex_screen;
        attribute vec2 vertex_texture;
        varying vec2 texture_pos;
        void main(void)
        {
          gl_Position = vertex_screen;
          texture_pos = vertex_texture;
        }
    `;
    const fragment = `
        precision mediump float;
        varying vec2 texture_pos;
        uniform sampler2D texture_y;
        uniform sampler2D texture_u;
        uniform sampler2D texture_v;
        void main(void)
        {
          vec3 yuv;
          vec3 rgb;
          yuv.x = texture2D(texture_y, texture_pos).x;
          yuv.y = texture2D(texture_u, texture_pos).x-0.5;
          yuv.z = texture2D(texture_v, texture_pos).y-0.5;
          rgb = mat3(1,1,1,
                    0,-0.39465,2.03211,
                    1.13983,-0.58060,0) * yuv;
          gl_FragColor = vec4(rgb, 1);
        }
    `;
    var program = gl.createProgram();
    var shader1 = this.create_shader(gl, gl.VERTEX_SHADER, vertex);
    var shader2 = this.create_shader(gl, gl.FRAGMENT_SHADER, fragment);
    gl.attachShader(program, shader1);
    gl.attachShader(program, shader2);
    gl.linkProgram(program);
    return program;
  }

  create_shader(gl, t, source) {
    //console.log("create_shader", t, source);
    var shader = gl.createShader(t); // gl.VERTEX_SHADER, gl.FRAGMENT_SHADER
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    // glGetShaderiv, compiled
    // TODO. error?
    return shader;
  }

  draw_begin(gl) {
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.clearColor(0.3, 0.3, 0.3, 1.0);
  }

  draw_end() {

  }

  draw_yuv(gl, program, buffer, vertex_screen, vertex_tex, tex_id_y, texture_y, tex_id_u, tex_id_v, texture_v, texture_u, frame) {
    var w = frame.w;
    var h = frame.h;
    var y = frame.y;
    var u = frame.u;
    var v = frame.v;
    var pitch_y = frame.pitch_y;
    var pitch_u = frame.pitch_u;
    var pitch_v = frame.pitch_v;

    gl.useProgram(program);
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);

    // 顶点
    gl.vertexAttribPointer(vertex_screen, 2, gl.FLOAT, false, 8, 32);
    gl.enableVertexAttribArray(vertex_screen)
    gl.vertexAttribPointer(vertex_tex, 2, gl.FLOAT, false, 8, 0);
    gl.enableVertexAttribArray(vertex_tex)

    // Y
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, tex_id_y);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.LUMINANCE, pitch_y, h, 0, gl.LUMINANCE, gl.UNSIGNED_BYTE, y);
    gl.uniform1i(texture_y, 0);

    // U
    gl.activeTexture(gl.TEXTURE1);
    gl.bindTexture(gl.TEXTURE_2D, tex_id_u);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.LUMINANCE, pitch_u, h / 2, 0, gl.LUMINANCE, gl.UNSIGNED_BYTE, u);
    gl.uniform1i(texture_u, 1);

    // V
    gl.activeTexture(gl.TEXTURE2);
    gl.bindTexture(gl.TEXTURE_2D, tex_id_v);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.LUMINANCE, pitch_v, h / 2, 0, gl.LUMINANCE, gl.UNSIGNED_BYTE, v);
    gl.uniform1i(texture_v, 2);

    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

    gl.disableVertexAttribArray(vertex_tex);
    gl.disableVertexAttribArray(vertex_screen);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    gl.validateProgram(program);
  }


  mkDataDir(dataDirMaked: boolean) {
    this.dataDirMaked = dataDirMaked;
  }

  existDataDir() {
    return this.dataDirMaked;
  }

  dataURLToBlob(dataurl): Blob {
    var arr = dataurl.split(',');
    var mime = arr[0].match(/:(.*?);/)[1];
    var bstr = atob(arr[1]);
    var n = bstr.length;
    var u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], {type: mime});
  }

 sendVideoFile(fileList:any){
    this.videoArr = []
    for (let i = 0; i < fileList.length; i++) {
      const element = fileList[i];
      this.videoArr.push({files:element,progress:0,detectId:""})
      
    }
 
  }

  getVideoFile(){

    return  this.videoArr

  }

  setVideoFile(key,value,field){

    this.videoArr[key][field] = value

  }

  public imgArr:any;
  public frameArr:any

  changeAccordion(key){
    this.imgArr =JSON.parse(localStorage.getItem('videoData'))[key].keyWordVoList
    this.frameArr = JSON.parse(localStorage.getItem('videoData'))[key].keyFrameVoList
    this.aClickedEvent.emit(key);
  }

  getObjectTime(key){
    this.objectTime.emit(key)
  }


}
