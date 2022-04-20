import {Component, ElementRef, OnInit, ViewChild,ViewEncapsulation } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {HttpResult, User} from '../../core/http-entity';
import {Store} from '@ngxs/store';
import {Router,NavigationExtras} from '@angular/router';
import {NzModalService} from 'ng-zorro-antd';
import {VideoAction} from '../../state/video.action';
import {OssPathPipe} from "../../app.pipes";
import { VideoService } from 'src/app/video.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { fromEvent } from 'rxjs';
import axios from 'axios';
declare var $:any;
declare var WinBox:any;
declare var FSS:any;
declare var ImagePreview:any;
import * as echarts from 'echarts';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less', './home-upload.less','./home-table.less'],
  encapsulation: ViewEncapsulation.Emulated,
})

export class HomeComponent implements OnInit {
  public homeLink:string =  localStorage.getItem("homeLink")
  user: User;
  isSpinning = false;
  formatOne = (percent: number): string => `${percent} Days`;
  formatTwo = (): string => `Done`;
  @ViewChild('filesInput')
  filesInputElm: ElementRef;

  hotspots: string[] = [];
  news:any = [{text:"攻击加剧！美共和党大佬猛批......",src:"../../../assets/news/1/1.html"},{text:"美媒：美国“里根”号航母一......",src:"../../../assets/news/2/2.html"},{text:"首次！意大利海空军F-35战机......",src:"../../../assets/news/3/3.html"},{text:"俄罗斯首架图160M战略轰炸......",src:"../../../assets/news/4/4.html"}]
  typeTrainCount = {
    KJG: 0,
    YG: 0,
    HW: 0,
    SAR: 0
  }
 current = 1;
 winboxData:any = {
    tastkId:'',
    status : '',
    count : 0,
    progress : 0,
    historySelect:0,
    interVal:'',
    isOpen:false,
    accuracyRate:'99%',
    errorRate:'0.1%',
    lossRate:'0',
    historyPageIndex:1,
    historyTotal:0,
    nextButtonisShow:true,
    fenxiButtonisShow:true,
    stopButtonValue:"暂停分析",
    loding:false,
    history:[{
      id:"",
      createTime:'2022/1/25 17:40',
      updateTime:'2022/1/25 17:40',
      imgCount:0,
      accuracyRate:'99%',
      errorRate:'0.1%',
      lossRate:'0',
      result:'A+'
    }],
    modalData:{
      list:{
        pageIndex:1,
        pageSize:50,
        standardName:'',
        status:'',
        total:0,
        listOfData:[]
      },
      radioValue:0,
      radioValue1:0,
      detail:{
        discernName:[],
        discernType:[],
        standardName:"",
        imgUrl:""
      },
      errorCorrectionData:{
        errorCorrectionMsg:""
      }
      
    },
    
 }


  dataBox:any
  dataBoxCorrectionError:any
  progress:any = 30;
  imageAllCount = {
    kjg: 0,
    yg: 0,
    hw: 0,
    sar: 0
  }

  pasteText: string;
  dataAnalysis:string = "存量数据分析"
  dataAnaStatus:string = ""
  // ossPath:any = "http://microismile.cn:9000/target-recognize";

  public navArr:any[]=[
    {
      icon:"assets/images/analys1.png",
      text:"通用识别"
    },
    {
      icon:"assets/images/persion.png",
      text:"人物识别"
    },
    {
      icon:"assets/images/arms.png",
      text:"武器识别"
    },
    {
      icon:"assets/images/safe.png",
      text:"卫片判读"
    },
    {
      icon:"assets/images/video.png",
      text:"影像分析"
    },
    {
      icon:"assets/images/img.png",
      text:"以图搜图"
    }
  ];

  public borderShow:any =0;
  // public listOfData: Array<{ name: string; age: number; address: string }> = [];

  public resultList:any=[

    {
      src:'assets/images/tragetPic.png',
      title:'目标样本库',
      text:'涵盖可见光、红外、SAR和遥感4大类500多种型号，总数100万+。'
    },
    {
      src:'assets/images/detectModel.png',
      title:'检测模型库',
      text:'随意定制面向各种场景的目标检测和识别模型。'
    },
    {
      src:'assets/images/videoPic.png',
      title:'影像整编库',
      text:'解析、归档存量视频。'
    },
    {
      src:'assets/images/analysisPic.png',
      title:'综合分析库',
      text:'服务、数据、模型详情统计。'
    }
]

public animationBoolean:boolean = false;

public serverList:any=[

  {
    src:'assets/images/web.png',
    title:'网站',
    text:'浏览器作为系统PC入口。'
  },
  {
    src:'assets/images/mobile.png',
    title:'移动端',
    text:'移动App调用系统能力。'
  },
  {
    src:'assets/images/equipment.png',
    title:'装备',
    text:'装备和系统无缝边云系统。'
  },
  {
    src:'assets/images/SDK.png',
    title:'SDK',
    text:'通过开放API赋能各种场景、装备应用。'
  }
]

labeArr:any = []
isAllEqualType:any
keyboardSubscription:any
  constructor(private http: HttpClient, private store: Store, private router: Router, private nzModal: NzModalService,
              private ossPathPipe: OssPathPipe,private videoService:VideoService,private message:NzMessageService) {
                localStorage.removeItem('videoData')

        

  }

  ngOnInit(): void {


    localStorage.setItem("detectResult","[]")
    var that = this
    axios.get(`${environment.API_URL}/v1/detect-history/detect-search-status`, {
      headers: {
        'Authorization':'Bearer '+localStorage.getItem('Bearer'),
        'TR-Role': 'TR-User'
      }
    })
    .then((response) => {
      this.labeArr = [];
      $.each(response.data.data,function(i,n){
        if(n.sampleTypeEnName){
          that.labeArr.push(n.sampleTypeEnName)
        }
      })
    })
   
 
    this.http.get(`${environment.API_URL}/v1/users/0`).subscribe((result: HttpResult<User>) => {
      if (HttpResult.succeed(result.code)) {
        this.user = result.data;
      }
    });

  this.loadHotspot();
  this.loadAllImageCount();

this.keyboardSubscription = fromEvent(window, 'keydown').subscribe((event: any) => {

  if(event.keyCode == 13){

    this.searchImg()

  }

})


  }




  thumbnail(index:number){
      $('.thumbnail li').removeClass('active')
      $('.thumbnail li').eq(index).addClass('active')
      this.workShow()
      this.winboxData.historySelect = index
  }

 workShow() {
    var obj = $('.thumbnail li.active img')
    $(".board-img").find('img').removeClass('board-ani')
    $(".board-img").find('a').attr('href',obj.attr('url'))
    $(".board-img").find('div').remove()
    
    setTimeout(function(){
        $(".board-img").find('img').attr('src',obj.attr('data'))
        $(".board-img").find('img').addClass('board-ani')
        $(".board-img").find('img').after('<div class="board-text-ani">'+obj.attr('alt')+'</div>')
    },100)
    
}

batchDiscern(isDetailOpen:any){
  if(isDetailOpen == 'true'){
    this.winboxData.modalData.list.pageIndex = 1
  }
  axios.post(`${environment.API_URL}/v1/batchDiscern/queryPage?pageIndex=${this.winboxData.modalData.list.pageIndex}&pageSize=${this.winboxData.modalData.list.pageSize}&standardName=${this.winboxData.modalData.list.standardName}&status=${this.winboxData.modalData.list.status}&disernLogId=${this.winboxData.history[this.winboxData.historySelect].id}`, {
    pageIndex:this.winboxData.modalData.list.pageIndex,
    pageSize:this.winboxData.modalData.list.pageSize,
    standardName:this.winboxData.modalData.list.standardName,
    status:this.winboxData.modalData.list.status,
    disernLogId:this.winboxData.history[this.winboxData.historySelect].id
  },{
    headers: {
      'Authorization':'Bearer '+localStorage.getItem('Bearer'),
      'TR-Role': 'TR-User'
    }
  })
  .then(data=>{
    this.winboxData.modalData.list.listOfData = data.data.data.records
    this.winboxData.modalData.list.total = data.data.data.total
    if(this.winboxData.modalData.list.total>0){$(".ant-table-placeholder").css("display","none")}
    document.querySelector("#modal-container > div > div > div.digital > nz-table > nz-spin > div > div > nz-table-inner-scroll > div > div.ant-table-body.ng-star-inserted").scrollTop = 0

  })
  .catch(e=>{
    // if(e.response.status == 401){
    //   this.router.navigate(['/login']);
    // }
  })
}

batchDiscernById(id){
  axios.post(`${environment.API_URL}/v1/batchDiscern/queryById?id=${id}`, {
    id
  },{
    headers: {
      'Authorization':'Bearer '+localStorage.getItem('Bearer'),
      'TR-Role': 'TR-User'
    }
  })
  .then(data=>{
    this.winboxData.modalData.detail = JSON.parse(data.data.data)
    this.winboxData.modalData.detail.discernName = JSON.parse(this.winboxData.modalData.detail.discernName)
    this.winboxData.modalData.detail.discernType = JSON.parse(this.winboxData.modalData.detail.ext1)
    this.winboxData.modalData.errorCorrectionData.errorCorrectionMsg = this.winboxData.modalData.detail.standardName
    
  })
  .catch(e=>{
    // if(e.response.status == 401){
    //   this.router.navigate(['/login']);
    // }
  })
}

setanothername(){
  // console.log(this.winboxData.modalData.deatile)
  let discernType;
  try{
    discernType= this.winboxData.modalData.detail.discernType[this.winboxData.modalData.radioValue1]
  }catch(e){
    discernType= "";
  }
 
  axios.post(`${environment.API_URL}/v1/batchDiscern/insertSampleOssType?standardName=${this.winboxData.modalData.detail.standardName}&discernName=${this.winboxData.modalData.detail.discernName[this.winboxData.modalData.radioValue]}&discernType=${discernType}`, {
    standardName:this.winboxData.modalData.detail.standardName,
    discernName:this.winboxData.modalData.detail.discernName[this.winboxData.modalData.radioValue],
    discernType:discernType,
  },{
    headers: {
      'Authorization':'Bearer '+localStorage.getItem('Bearer'),
      'TR-Role': 'TR-User'
    }
  })
  .then(data=>{

  // console.log(data.data.code)
  if(data.data.code == 1){
    this.message.success(data.data.message, {
      nzDuration: 3000
    });
  }
  })
  .catch(e=>{
    // if(e.response.status == 401){
    //   this.router.navigate(['/login']);
    // }
  })
  // alert(this.winboxData.modalData.detail.discernName[this.winboxData.modalData.radioValue])
}

comparisonDeatil(event){
this.winboxData.modalData.list.pageIndex = 1
  $("#modal-container").css("display","table")
  var buttonId = event.target.id
  $('#modal-container').removeAttr('class').addClass(buttonId);
  $('body').addClass('modal-active');
  this.batchDiscern('false')
}


closeTable(){
  $('#modal-container').addClass('out')
  $('body').removeClass('modal-active');
  $(".modal-detaile").css("display","none")
  $(".modal").css({left:'0'})
  $("#CorrectionErrorBox > div.wb-header > div.wb-icon > span.wb-close").click()
}



  dataBackground(){
    var container = document.getElementById('dataContent');
    try{
      $("#dataContent>canvas").remove()
    }catch(e){}
   
    var renderer = new FSS.CanvasRenderer();
    var scene = new FSS.Scene();
    var light = new FSS.Light('#192539', '#416296');
    var width = $("#dataContent").css("width").split("px")[0]
    var height = $("#dataContent").css("height").split("px")[0]
    var that = this
    var geometry = new FSS.Plane(width, height, 24, 12);
    var material = new FSS.Material('#FFFFFF', '#FFFFFF');
    var mesh = new FSS.Mesh(geometry, material);
    var now, start = Date.now();
    function initialise() {
      scene.add(mesh);
      scene.add(light);
      container.appendChild(renderer.element);
      window.addEventListener('resize', resize);
    }

    function resize() {
      renderer.setSize(container.offsetWidth, container.offsetHeight);
    }

    function animate() {
      now = Date.now() - start;
      light.setPosition(300*Math.sin(now*0.001), 200*Math.cos(now*0.0005), 60);
      renderer.render(scene);
      requestAnimationFrame(animate);
     
  
    }

    initialise();
    resize();
    animate();
    this.workShow()
    console.log()
  }


  

  starCanvas(){
    setTimeout(()=>{
      var canvas:any = document.getElementById('canvas'),
      ctx:any = canvas.getContext('2d'),
      w:any = canvas.width = window.innerWidth,
      h:any = canvas.height = window.innerHeight,
    
      hue = 217,
      stars = [],
      count = 0,
      maxStars = 1300;//星星数量
    
    var canvas2:any = document.createElement('canvas'),
     ctx2 = canvas2.getContext('2d');
    canvas2.width = 100;
    canvas2.height = 100;
    var half:any = canvas2.width / 2,
    gradient2 = ctx2.createRadialGradient(half, half, 0, half, half, half);
    gradient2.addColorStop(0.025, '#CCC');
    gradient2.addColorStop(0.1, 'hsl(' + hue + ', 61%, 33%)');
    gradient2.addColorStop(0.25, 'hsl(' + hue + ', 64%, 6%)');
    gradient2.addColorStop(1, 'transparent');
    
    ctx2.fillStyle = gradient2;
    ctx2.beginPath();
    ctx2.arc(half, half, half, 0, Math.PI * 2);
    ctx2.fill();
    
    // End cache
    
    function random(...args: any){
    
      
      if (args.length < 2) {
        args[1] = args[0];
        args[0] = 0;
      }
    
      if (args[0] > args[1]) {
        var hold = args[1];
        args[1] = args[0];
        args[0] = hold;
      }
    
      return Math.floor(Math.random() * (args[1] - args[0] + 1)) + args[0];
    }
    
    function maxOrbit(x:any, y:any):any {
      var max = Math.max(x, y),
        diameter = Math.round(Math.sqrt(max * max + max * max));
      return diameter / 2;
      //星星移动范围，值越大范围越小，
    }
    
    var Star:any = function() {
    
      this.orbitRadius = random(maxOrbit(w, h));
      this.radius = random(60, this.orbitRadius) / 8; 
      //星星大小
      this.orbitX = w / 2;
      this.orbitY = h / 2;
      this.timePassed = random(0, maxStars);
      this.speed = random(this.orbitRadius) / 500000; 
      //星星移动速度
      this.alpha = random(2, 10) / 10;
    
      count++;
      stars[count] = this;
    }
    
    Star.prototype.draw = function() {
      var x = Math.sin(this.timePassed) * this.orbitRadius + this.orbitX,
        y = Math.cos(this.timePassed) * this.orbitRadius + this.orbitY,
        twinkle = random(10);
    
      if (twinkle === 1 && this.alpha > 0) {
        this.alpha -= 0.05;
      } else if (twinkle === 2 && this.alpha < 1) {
        this.alpha += 0.05;
      }
    
      ctx.globalAlpha = this.alpha;
      ctx.drawImage(canvas2, x - this.radius / 2, y - this.radius / 2, this.radius, this.radius);
      this.timePassed += this.speed;
    }
    
    for (var i = 0; i < maxStars; i++) {
      new Star();
    }
    
    function animation() {
      ctx.globalCompositeOperation = 'source-over';
      ctx.globalAlpha = 0.5; //尾巴
      ctx.fillStyle = 'hsla(' + hue + ', 64%, 6%, 2)';
      ctx.fillRect(0, 0, w, h)
    
      ctx.globalCompositeOperation = 'lighter';
      for (var i = 1, l = stars.length; i < l; i++) {
        stars[i].draw();
      };
    
      window.requestAnimationFrame(animation);
    }
    
    animation();
      


    },500)
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    
  
    this.starCanvas();

    try{
      var detectId = window.location.pathname.split(";")[1].split("=").indexOf("detectId")!=-1
      if(detectId){
        var arr = window.location.pathname.split(";")[1].split("=")
        this.router.navigate(['/detect']);
        this.router.navigate(['/detect', {detectId: arr[1],homeToDetect:true,borderShow:this.borderShow}]);
      }
    }catch(e){

      console.log("detectId is undefind")

    }


    this.requsetProgress()



  }

  


  liMouseLeave(key){
    $(".achievements li").find("h3")[key].style.color = "#fff"
    $(".achievements li").find("h3")[key].style.bottom = "0px"
        let selectIcon = this.resultList[key].src
      if(selectIcon.split(".")[0].endsWith("1")){
        let s1 = selectIcon.split(".")[0]
        this.resultList[key].src = s1.substring(0,s1.length-1)+"."+selectIcon.split(".")[1]
      }
  }

  liMouseOver(key){
    $(".achievements li").find("h3")[key].style.color = "#357af6"
    $(".achievements li").find("h3")[key].style.bottom = "100px"
        let selectIcon = this.resultList[key].src
      if(!selectIcon.split(".")[0].endsWith("1")){
        let s1 = selectIcon.split(".")[0]
        this.resultList[key].src = s1+"1."+selectIcon.split(".")[1]
      }
  }


toShow(key){

 

    if(key == 1){

    this.router.navigate(['/model']);

    }else if(key == 2){

      this.router.navigate(['/target2']);

    }else if(key == 0){
      var sampleResourcePath = localStorage.getItem("sampleResourcePath")
       var bee:any = localStorage.getItem("Bearer")
      window.location.href = `${localStorage.getItem("mgrPath")}#${bee}#${sampleResourcePath}`

    }else{
      var sampleResourcePath = localStorage.getItem("sampleResourcePath")
      var bee:any = localStorage.getItem("Bearer")
      window.location.href = `${localStorage.getItem("dataCountHeaderPath")}/console/data-statistics#${bee}#${sampleResourcePath}`

    }

  }

  changeBorderShow(key):any{

    this.borderShow = key
      this.navArr.forEach((x:any)=>{
        let incon = x.icon
        
        if(incon.split(".")[0].endsWith("1")){
          let s = incon.split(".")[0]
          x.icon = s.substring(0,s.length-1)+"."+incon.split(".")[1]
        }
      })
     
      let selectIcon = this.navArr[key].icon
      if(!selectIcon.split(".")[0].endsWith("1")){
        let s1 = selectIcon.split(".")[0]
        this.navArr[key].icon = s1+"1."+selectIcon.split(".")[1]
      }

     
  }

  fileUpload(evt: any): void {

    const fileList = evt.target.files as FileList;
    const fileCount = fileList.length;

    this.onFileDropped(fileList);

    // 判断文件中是否含有视频
    // let videoCount = 0;
    // for (let i = 0; i < fileCount; i++) {
    //   if (fileList[i].type.split('/')[0] == 'video'){
    //     // 含有视频
    //     videoCount++;
    //     if (fileCount > 1) {
    //       // 含有多个视频
    //       this.nzModal.error({
    //         nzTitle: '一次只能上传一个视频'
    //       });
    //     } else {

    //       this.onFileDropped(fileList);
    //       // 只有一个视频，将视频传给第二个页面
    //        this.store.dispatch(new VideoAction(fileList[i]));

    //        this.router.navigate(['/detect']);
    //     }
    //     return;
    //   }else{

    //     return alert("请上传视频，或修改上方导航按钮！")
    //   }


    // }

    // if (videoCount === 0) {
    //   // 没有视频，走图片逻辑
    //   if (fileList.length > 500) {
    //     // 限制一次最多上传500张
    //     this.nzModal.error({
    //       nzTitle: '单次最多上传20张'
    //     });

    //     this.clearFiles();
    //     return;
    //   }
    //   if (fileList.length > 0) {
    //     this.onFileDropped(fileList);
    //   }
    // }
  }

  clearFiles(): void {

    this.filesInputElm.nativeElement.value = '';
  }

  onPasteImage(evt: ClipboardEvent): void {
    if (!(evt.clipboardData && evt.clipboardData.items)) {
      // 粘贴板没东西
      return;
    }
    for (let i = 0, len = evt.clipboardData.items.length; i < len; i++) {
      const item = evt.clipboardData.items[i];
      if (item.kind === 'string') {
        // 粘贴网址
        // 这里的item.getAsString是异步的，所以需要用promise来做异步的处理??
        const promise = new Promise<string>((resolve, reject) => {
          item.getAsString((url) => {
            // 如果将 this.uploadWithUrl(imageUrl);写到这个里面，将会出现一个bug，这个bug是从detect的组件返回的时候，本组件的ngOnInit方法将不执行
            resolve(url);
          });
        });

        promise.then((imageUrl) => {
          this.uploadWithUrl(imageUrl);
        });
      } else if (item.kind === 'file'){
        const file = item.getAsFile();
        const formData = new FormData();
        formData.append('files', file);
        this.uploadWithFiles(formData);
      }
      // 只循环一次
      break;
    }
  }
  initEcharts2(data:any){
    const lineChartOption: any = {
      color: ['#357af6'],
grid: {
  top:10,
  left:'5%',
  bottom:10
},
      xAxis: {
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        splitLine: {
          show: false
        },
        axisLabel: {
          show: false
        }
      },
      yAxis: {
        data: ['', ''],
        type: 'category',
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        splitLine: {
          show: false
        },
        interval: 0
      },
      series: [
        {
          data: data,
          barWidth : 15,//柱图宽度
          type: 'bar',
          showBackground: true,
          backgroundStyle: {
            color: '#aaaaaa',
            borderRadius:15,
          },
          itemStyle: {
            normal: {
              barBorderRadius:15,
              
              label: {
                show: false,
                position: 'insideRight'
              }
            }
          }

        }
      ]
    };
    var lineEchart1 = echarts.init(document.getElementById("recommendecharts1"));
    lineEchart1.setOption(lineChartOption);
  }

initEcharts1(data:any){
    const lineChartOption: any = {
      color: ['#357af6'],
grid: {
  top:10,
  left:'5%',
  bottom:10
},
      xAxis: {
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        splitLine: {
          show: false
        },
        axisLabel: {
          show: false
        }
      },
      yAxis: {
        data: ['', ''],
        type: 'category',
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        splitLine: {
          show: false
        },
        interval: 0
      },
      series: [
        {
          data: data,
          barWidth : 15,//柱图宽度
          type: 'bar',
          showBackground: true,
          backgroundStyle: {
            color: '#aaaaaa',
            borderRadius:15,
          },
          itemStyle: {
            normal: {
              barBorderRadius:15,
              
              label: {
                show: false,
                position: 'insideRight'
              }
            }
          }

        }
      ]
    };
    var lineEchart = echarts.init(document.getElementById("recommendecharts"));
    lineEchart.setOption(lineChartOption);
  }

onFileDropped(fileList:FileList): void {

    var isTypeSame:boolean = true;
    var typeArr:any = [];
    var fileListArr:any = []
    const fileCount = fileList.length;
    var fileListArr2:any = []
    for(let i=0;i<fileList.length;i++){

      fileListArr2.push(fileList[i])
      typeArr.push(fileList[i].type.split("/")[0])
    }



if(!this.isAllEqual(typeArr,fileListArr2)){

   alert("请分开上传视频或图片格式（请勿上传gif/jfif图片）！")

   }else{

    const formData = new FormData();

  //  if( fileList.length >10  ) return alert('一次上传不能超过10个')
let fileBig = false
      if (fileList[0].type.split('/')[0] == 'video' && this.borderShow == 4) {

        for(let i=0;i<fileList.length;i++){

          if(fileList[i].size > 52428800){
            fileBig = true
           

          }else{

            formData.append('file', fileList[i]);

          }

        }

        // this.uploadWithVideoFiles(formData);
      if(!fileBig){
        this.videoService.sendVideoFile(fileList)

        this.router.navigate(['/video']);
      }else{
        alert("单个文件不能大于50M！")
      }


      }else if(fileList[0].type.split('/')[0] == 'image' && this.borderShow != 4  && this.borderShow != 5){

          if(typeArr.length>20){

            alert("单次最多上传20张")

          }else{

          for(let i=0;i<fileList.length;i++){

            formData.append('files', fileList[i]);

          }
          this.router.navigate(['/detect']);
            this.uploadWithFiles(formData);
          }

      }else if(fileList[0].type.split('/')[0] == 'image' && this.borderShow == 5){
      
     
        if(typeArr.length>1){

          alert("单次最多上传1张")

        }else{

        for(let i=0;i<fileList.length;i++){

          formData.append('files', fileList[i]);

        }
        this.router.navigate(['/detect']);
          this.uploadWithFiles(formData);
        }

    }else if(fileList[0].type.split('/')[0] == 'video' && this.borderShow != 4){

          var videoCount = 0;
          for (let i = 0; i < fileCount; i++) {

              // 含有视频
              videoCount++;
              if (fileCount > 1) {
                // 含有多个视频
                this.nzModal.error({
                  nzTitle: '一次只能上传一个视频'
                });
              } else {


                for(let i=0;i<fileList.length;i++){

                  formData.append('file', fileList[i]);

                }

                this.store.dispatch(new VideoAction(fileList[i]));

                 this.uploadWithFiles(formData);

               this.router.navigate(['/detect']);
              }
              return;

          }

      }else if(fileList[0].type.split('/')[0] != 'video' && this.borderShow == 4){

       alert("请上传视频，或修改上方导航按钮！")

      }else{

        alert("请上传视频或图片文件格式")

      }


}

this.clearFiles()

  }



isAllEqual(array:[string],fileListArr2):any{
    if (array.length > 0) {
        return !array.some(function (value, index) {

          var lastName = fileListArr2[index].name.split(".")[fileListArr2[index].name.split(".").length-1]
            // if(fileListArr2[index].type.split("/")[1] == 'gif'){
              
            //     return true;
 
            // }
            if(lastName == 'gif' || lastName == 'jfif'){
              return true;
            }
            return value !== array[0];
        });
    } else {
        return true;
    }
}

  uploadWithFiles(formData: FormData): void {
    this.isSpinning = true;
    this.http.post(`${environment.API_URL}/v1/detect/files`,formData).subscribe((result: HttpResult<string>) => {
      this.isSpinning = false;
      if (HttpResult.succeed(result.code)) {
        this.router.navigate(['/detect',{detectId: result.data,borderShow:this.borderShow}]);
      } else {
        this.nzModal.error({
          nzTitle: '上传失败',
          nzContent: result.message
        })
      }
    }, () => {
      this.isSpinning = false;
      this.clearFiles();
    });
  }

  uploadWithVideoFiles(frame:FormData): void {
    this.isSpinning = true;
    this.http.post(`${environment.API_URL}/v1/frame-detect/frameToImg`,frame).subscribe((result: HttpResult<string>) => {
      this.isSpinning = false;
      if (result.data.length!= 0 ||  result.data!=null) {
        // localStorage.setItem('videoData',JSON.stringify(result.data))
        // if(localStorage.getItem('videoData')){
        //   this.router.navigate(['/video', {detectId: result.data}]);
        // }
      } else {
        this.nzModal.error({
          nzTitle: '上传失败',
          nzContent: result.message
        })
      }
    }, () => {
      this.isSpinning = false;
      this.clearFiles();
    });
  }


  uploadWithUrl(url: string): void {
    this.isSpinning = true;
    this.http.post(`${environment.API_URL}/v1/detect/link`, {
      url
    }).subscribe((result: HttpResult<string>) => {
      this.isSpinning = false;
      if (HttpResult.succeed(result.code)) {
        this.router.navigate(['/detect', {detectId: result.data}]);
      } else {
        this.clearFiles();
        this.nzModal.error({
          nzTitle: '图片地址错误'
        });
        this.pasteText = '';
      }
    }, () => {
      this.isSpinning = false;
      this.clearFiles();

      this.nzModal.error({
        nzTitle: '网络错误，请稍后重试'
      });
      this.pasteText = '';
    });
  }

  loadHotspot() {
    this.http.get(`${environment.API_URL}/v1/hotspots`).subscribe((result: HttpResult<string[]>) => {
      if (HttpResult.succeed(result.code)) {
        this.hotspots = result.data;
      }
    });
  }

searchImg(){
    if(!$(".search-img").val()){
      this.message.error("请输入文字后查询", {
        nzDuration: 3000
      });
    }else{
      this.router.navigate(['/detect', {textSearch:$(".search-img").val(),borderShow:6}]);
    }

}


  detectHotspot(ossKey) {
    this.uploadWithUrl(this.ossPathPipe.transform(ossKey));
  }

  loadTypeTrainCount() {
    this.http.get(`${environment.API_URL}/v1/sample-oss-file/getTypeTrainCount`).subscribe((result: HttpResult<any>) => {
      if (HttpResult.succeed(result.code)) {

        for (let i = 0, len = result.data.length; i < len; i++) {
          if (result.data[i].hasOwnProperty("KJG")) {
            this.typeTrainCount.KJG = result.data[i].KJG;
          } else if (result.data[i].hasOwnProperty("HW")) {
            this.typeTrainCount.HW = result.data[i].HW;
          } else if (result.data[i].hasOwnProperty("YG")) {
            this.typeTrainCount.YG = result.data[i].YG;
          } else if (result.data[i].hasOwnProperty("SAR")) {
            this.typeTrainCount.SAR = result.data[i].SAR;
          }
        }
      }
    });
  }

  // toNews(key){

  // // window.open(window.location.host+`/news;iframe=${this.news[key].src}`)
  //   this.router.navigate(['/news', {iframe: this.news[key].src}]);
  //   console.log(window.location)
  // }

  deatailFormAction(data,key){
    
    if($(".modal-detaile").css("display") == 'none'){
        $(".modal").animate({left:'-200px'},200)
        $(".modal-detaile").css("display","block")
        $(".modal-detaile").animate({right:'-400px'},200)
        this.batchDiscernById(data.id)
    }else{
      this.batchDiscernById(data.id)
      }
      setTimeout(()=>{
        ImagePreview.removed()
        ImagePreview.init({id:$(".modal-detaile .deatile-content ul li img")})
      },300)
      $(`#modal-container > div > div > div.digital > nz-table > nz-spin > div > div > nz-table-inner-scroll > div > div.ant-table-body.ng-star-inserted > table > tbody > tr > td`).css("background","#03152e")
      $(`#modal-container > div > div > div.digital > nz-table > nz-spin > div > div > nz-table-inner-scroll > div > div.ant-table-body.ng-star-inserted > table > tbody > tr:nth-child(${key+2}) > td`).css("background","#072c4e")
    }

    stopFenxi(){
      clearInterval(this.winboxData.interVal)
      this.winboxData.fenxiButtonisShow = false
      let id = this.winboxData.tastkId
      if(this.winboxData.stopButtonValue =="暂停分析"){
        axios.post(`${environment.API_URL}/v1/label_task/suspendDistinguishBatchImg?id=${id}`,{
          id
        },{
      headers: {
        'Authorization':'Bearer '+localStorage.getItem('Bearer'),
        'TR-Role': 'TR-User'
      }
    })
    .then(data=>{
        if(data.data.code ==1){
          this.winboxData.stopButtonValue = "继续分析"
          this.winboxData.loding = true
        }
        this.requsetProgress1()
       
       })
      }else{
        axios.post(`${environment.API_URL}/v1/label_task/resumeDistinguishBatchImg?id=${id}`,{id},{
          headers: {
            'Authorization':'Bearer '+localStorage.getItem('Bearer'),
            'TR-Role': 'TR-User'
          }
        })
        .then(data=>{
          if(data.data.code ==1){
            this.winboxData.stopButtonValue = "暂停分析"
            this.winboxData.loding = true
          }
          this.requsetProgress1()
       
        })

      }
  
  
     
    }

    overFenxi(){
     
      clearInterval(this.winboxData.interVal)
      let id = this.winboxData.tastkId
      axios.post(`${environment.API_URL}/v1/label_task/stopDistinguishBatchImg?id=${id}`,{},{ headers: {
        'Authorization':'Bearer '+localStorage.getItem('Bearer'),
        'TR-Role': 'TR-User'
      }})
      .then(data=>{
        if(data.data.code == 1){
          this.winboxData.loding = true
         
      
        }
        this.requsetProgress1()
      })

    }

fenxi(){
 
    axios.get(`${environment.API_URL}/v1/label_task/checkBuildTask`,{
      headers: {
        'Authorization':'Bearer '+localStorage.getItem('Bearer'),
        'TR-Role': 'TR-User'
      }
    })
    .then(data=>{ 
      this.winboxData.loding = true
      clearInterval(this.winboxData.interVal)
      let requestData = JSON.parse(data.data.data)
      if(requestData.flag != "0000"){

        this.winboxData.fenxiButtonisShow = false
        this.winboxData.tastkId = requestData.list[0].id
        $("#dataContent .content").css({'display':'flex'});
        $("#dataContent .historyAna").animate({'top':'454px'}, 500 );
        this.winBoxCharts();
        this.requsetProgress1()

      }else{

        axios.get(`${environment.API_URL}/v1/label_task/buildTask`, {
          headers: {
            'Authorization':'Bearer '+localStorage.getItem('Bearer'),
            'TR-Role': 'TR-User'
          }
        })
        .then(data=>{
          this.winboxData.tastkId = data.data.data
          if(this.winboxData.tastkId){
            this.requsetProgress1()
            $("#dataContent .content").css({'display':'flex'});
            $("#dataContent .historyAna").animate({'top':'454px'}, 500 );
            this.winBoxCharts();
          }else{
            $("#dataContent .content").css({'display':'none'});
            $("#dataContent .historyAna").animate({'top':'80px'}, 500 );
          }
        })
      
      }
    })
    .catch(e=>{
      // if(e.response.status == 401){
      //   this.router.navigate(['/login']);
      // }
    })

  }


  nextList(){
    this.winboxData.historyPageIndex++;
    this.fenxiHistory()
  }
  perList(){
    this.winboxData.historyPageIndex--;
    this.fenxiHistory()
  }

  fenxiHistory(){
    axios.post(`${environment.API_URL}/v1/label_task/taskList?pageIndex=${this.winboxData.historyPageIndex}&pageSize=10&detectStatus=0`, {
      pageIndex: this.winboxData.historyPageIndex,
      pageSize:10,
      detectStatus:0
    },{
      headers: {
        'Authorization':'Bearer '+localStorage.getItem('Bearer'),
        'TR-Role': 'TR-User'
      }
    })
    .then(data=>{

this.winboxData.history = data.data.data.records

let total:number = data.data.data.total

if(this.winboxData.historyPageIndex*10 >=total){
  this.winboxData.nextButtonisShow = false
}else{
  this.winboxData.nextButtonisShow = true
}


 let fornum = 10-data.data.data.records.length
  for (let index = 0; index < fornum; index++) {
        this.winboxData.history.push({
          createTime:'-',
          updateTime:'-',
          imgCount:'-',
          accuracyRate:'0',
          errorRate:'0',
          lossRate:'0',
          result:'0'
        })
      }

      $.each(this.winboxData.history,function(i,n){
        n.createTime = n.createTime.replace("T","  ")
        n.updateTime = n.updateTime.replace("T","  ")
      })


    })



    .catch(e=>{
      // if(e.response.status == 401){
      //   this.router.navigate(['/login']);
      // }
    })
 }

  requsetProgress(){
       axios.get(`${environment.API_URL}/v1/label_task/checkBuildTask`,{
          headers: {
            'Authorization':'Bearer '+localStorage.getItem('Bearer'),
            'TR-Role': 'TR-User'
          }
        })
        .then(data=>{ 
          clearInterval(this.winboxData.interVal)
          let requestData = JSON.parse(data.data.data)
          if(requestData.flag != "0000"){
            this.winboxData.fenxiButtonisShow = false
            this.winboxData.tastkId = requestData.list[0].id
            this.requsetProgress1()
          }else{
            this.winboxData.tastkId = ''   
            this.winboxData.fenxiButtonisShow = true
          }
        })
        .catch(e=>{
          // if(e.response.status == 401){
          //   this.router.navigate(['/login']);
          // }
        })
  }

requsetProgress1(){
  this.winboxData.interVal =  setInterval(()=>{
      if(this.winboxData.tastkId){
        
        axios.post(`${environment.API_URL}/v1/label_task/queryProgressOfBatchImg?id=${this.winboxData.tastkId}`, {
          id: this.winboxData.tastkId
        },{
          headers: {
            'Authorization':'Bearer '+localStorage.getItem('Bearer'),
            'TR-Role': 'TR-User'
          }
        })
        .then(data=>{
          let requestData = JSON.parse(data.data.data)
          if(this.winboxData.loding == true) this.winboxData.loding = false
          if(requestData.detectStatus == -1){
            this.winboxData.status =  "排队中"
            this.dataAnaStatus = '排队中'
            this.winboxData.fenxiButtonisShow = false
            this.animationBoolean = false
          }else if(requestData.detectStatus == 1){
            this.winboxData.status =  "分析中"
             this.dataAnaStatus = '分析中'
             this.winboxData.fenxiButtonisShow = false
             this.animationBoolean = true
             $(".ant-progress-text").css("color","#fff")
          }else if(requestData.detectStatus == 2){
            this.winboxData.status =  "统计中"
            this.dataAnaStatus = '统计中'
            this.winboxData.fenxiButtonisShow = false
            this.animationBoolean = false
          }else if(requestData.detectStatus == 0){
            this.winboxData.status =  "完成"
            this.winboxData.tastkId = ''
            this.dataAnaStatus = ''
            if(this.winboxData.accuracyRate){
              this.winboxData.accuracyRate = (requestData.accuracyRate*100).toFixed(2)+'%'
            }else{
              this.winboxData.accuracyRate = 0
            }
            if(this.winboxData.errorRate){
              this.winboxData.errorRate = (requestData.errorRate*100).toFixed(2)+'%'
            }else{
              this.winboxData.errorRate = 0
            }
            this.winboxData.fenxiButtonisShow = true
            this.animationBoolean = false
            clearInterval(this.winboxData.interVal)
          }else if(requestData.detectStatus == 4){
            this.winboxData.status =  "已停止"
            this.dataAnaStatus = ''
            this.winboxData.fenxiButtonisShow = true
            clearInterval(this.winboxData.interVal)
            this.animationBoolean = false
          }else if(requestData.detectStatus == 3){
            this.winboxData.status =  "已暂停"
            this.dataAnaStatus = '已暂停'
            this.winboxData.stopButtonValue = "继续分析"
           this.animationBoolean = false
            // clearInterval(this.winboxData.interVal)
          }
          this.winboxData.count = requestData.imgCount
          this.winboxData.progress = (requestData.progress*100).toFixed(2)
        })
          .catch(e=>{
          // if(e.response.status == 401){
          //   this.router.navigate(['/login']);
          // }
        })
      }else{
        this.requsetProgress()
      }
    },1000)
  }


  setwinBoxCss(){
    
    $("#dataContent").css({
      width:"100%",
      height:"100%",
      overflow:"hidden"
    })

    $(".winbox").css({
      borderRadius:" 12px 12px 0 0",
      boxShadow:"0 0 65px #163e7f"
    })

    $(".wb-header").css({
      background:"linear-gradient(90deg, #12194f, #2b64c0,#12194f)",
      borderRadius:" 12px 12px 0 0"
    })

    $(".wb-full").css("display","none")
   

    // this.dataAnalysis = "存量数据 "
    // this.dataAnaStatus = '分析中'

  }


  winBoxCharts(){
    var chartDom = document.getElementById('WinBoxcharts');
    var myChart = echarts.init(chartDom);
    var option;
    option = {
   
      title:{
        text: '最\n近\n一\n周\n分\n析\n次\n数',
        textStyle: {
          color: "#fff", // 主标题文字的颜色。
          fontStyle: "normal", // 主标题文字字体的风格。 'normal'  'italic'  'oblique'
          fontWeight: "normal", // 主标题文字字体的粗细。 'normal' 'bold'  'bolder'  'lighter' 500|600
          fontFamily: "sans-serif", // 主标题文字的字体系列。
          fontSize: 15, // 字体大小
        },
        left:0, // 距离 left top right bottom
        top:'5'
     
      },
            tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label:{
            color:"rgba(14, 24, 142, 1)"
          }
        }
      },
      grid:{
        left :70,
        top :20,
        bottom:20,
        right:50
      },
      xAxis: {
        type: 'category',
        data: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'],
        axisLine:{
          symbol:['none','arrow'],
          lineStyle:{
            color:'#fff'
          }
        },
        axisTick:{
          show:false
        }
      },
      yAxis: {
        type: 'value',
        axisTick: {show:false},
        splitLine:{show:false},
        axisLine:{
          show:true,
          symbol:['none','arrow'],
          lineStyle:{
            color:'#fff'
          }
        },
      },
      series: [
        {
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line',
          smooth: true,
          itemStyle : {  
            normal : {  
                lineStyle:{  
                    color:'#00a0e9'  
                }  
            }  
        },
        }
      ]
    };
option && myChart.setOption(option);
}

errorCorrectionRequest(){
  axios.post(`${environment.API_URL}/v1/batchDiscern/errorCorrection?id=${this.winboxData.modalData.detail.id}&errorCorrectionMsg=${this.winboxData.modalData.errorCorrectionData.errorCorrectionMsg}`, {
    id:this.winboxData.modalData.detail.id,
    errorCorrectionMsg:this.winboxData.modalData.errorCorrectionData.errorCorrectionMsg
  },{
    headers: {
      'Authorization':'Bearer '+localStorage.getItem('Bearer'),
      'TR-Role': 'TR-User'
    }
  })
  .then(data=>{
    if(data.data.code ==1){
      this.message.success(data.data.message, {
        nzDuration: 3000
      });
    }
    $("#CorrectionErrorBox > div.wb-header > div.wb-icon > span.wb-close").click()
  })
  .catch(e=>{
    // if(e.response.status == 401){
    //   this.router.navigate(['/login']);
    // }
  })
}

errorCorrection(){
$("#CorrectionErrorBox > div.wb-header > div.wb-icon > span.wb-close").click()
  this.dataBoxCorrectionError = new WinBox({
    id: "CorrectionErrorBox",
    root:document.querySelector("#modal-container > div"),
    title: "纠错",
    x: "150px",
    y: "50px",
    width: "500px",
    height: "300px",
    mount: document.getElementById("errorCorrectionBox"),
    onresize: function(width, height){
        $("#CorrectionErrorBox").css({
          height:300+'px',
          width:500+'px'
        })
    },
  });
  
  $("#CorrectionErrorBox").css({
    'z-index': '999'
  })
  $("#CorrectionErrorBox .wb-full ,#CorrectionErrorBox .wb-min").css("display","none")
}

dataAna(): void {
 $("#dataWinBox > div.wb-header > div.wb-icon > span.wb-close").click()
 $("#modal-container").css("display","none")

 this.closeTable()
  this.dataBox = new WinBox({
      id:'dataWinBox',
      title: "存量数据分析",
      x: "center",
      y: "center",
      width: "100%",
      height: "100%",
      mount: document.getElementById("dataContent"),
      onresize: function(width, height){
          $(".winbox").css({
            height:height,
            width:width
          })
      },
    });
    this.setwinBoxCss();
    $("#dataContent").children("canvas").remove()
    this.dataBackground();
    this.fenxiHistory();
    this.requsetProgress();
    if(this.winboxData.tastkId){
      $("#dataContent .content").css({'display':'flex'});
      $("#dataContent .historyAna").animate({'top':'454px'}, 500 );
      this.winBoxCharts();
    }else{
      $("#dataContent .content").css({'display':'none'});
      $("#dataContent .historyAna").animate({'top':'80px'}, 500 );
    }

  }

  loadAllImageCount(): void {
    this.http.get(`${environment.API_URL}/v1/sample-oss-file/getAllImageCount`).subscribe((result: HttpResult<any>) => {
      if (HttpResult.succeed(result.code)) {
        this.imageAllCount = result.data;
        if(this.imageAllCount.yg/this.imageAllCount.kjg<1/10){
          var data1 = [ this.imageAllCount.kjg,this.imageAllCount.kjg/10]
        }else{
          var data1 = [ this.imageAllCount.kjg,this.imageAllCount.yg]
        }
        var data2 = [ this.imageAllCount.hw,this.imageAllCount.sar]
        this.initEcharts1(data1.reverse())
        this.initEcharts2(data2.reverse())
      }
    });


  }

  ngOnDestroy(): void {
    $(".wb-close").click()
    clearInterval(this.winboxData.interVal)
    this.keyboardSubscription.unsubscribe()
  }
}
