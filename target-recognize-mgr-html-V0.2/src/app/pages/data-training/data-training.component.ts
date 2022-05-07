import {Component, OnInit} from '@angular/core';
import {NzMessageService, NzModalService,NzUploadChangeParam} from 'ng-zorro-antd';
import {AddTrainingComponent} from './add-training.component';
import {HttpClient, HttpParams} from '@angular/common/http';
import {DataTrain, HttpResult, ApiPage} from 'src/app/core/http-entity';
import {environment} from '../../../environments/environment';
import {ModelPrecisionComponent} from './model-precision.component';
import {ModelCompareComponent} from './model-compare.component';
// import * as echarts from 'echarts';
// import {ECharts} from "echarts";
// import 'echarts/dist/extension/bmap.min.js';

import 'echarts/map/js/china.js';


import axios from "axios"

 
declare var $:any;
declare var echarts:any
declare var ecStat:any
@Component({
  templateUrl: './data-training.component.html',
  styleUrls: ['./data-training.component.less', './train.less']
})
export class DataTrainingComponent implements OnInit {
  showCompare = false;
  tabIndex = 0;
  flag = 0;
  pageIndex = 1;
  pageSize = 10;
  dataTotal = 0;
  isVisible = false;
  isVisible1 = false;
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
  jdcurver:any = [];
  csPic:any = []
  precision:any;
  intervalLoadTraining:any
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

    

    // if(arguments[0])

    // console.log(typeof arguments)

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

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.

   this.intervalLoadTraining =  setInterval(()=>{

      this.loadTraining();

    },1000*2)
    
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    clearInterval(this.intervalLoadTraining)
  }

  download(e:any,data:any){


    axios.get(`${environment.API_URL}/v1/data_train/queryById?id=${data.id}`, {
      headers: {
        'Authorization':'Bearer '+localStorage.getItem('Bearer'),
        'TR-Role': 'TR-User'
      }
    })
    .then((result:any)=>{
      
      var result = result.data.data
      window.open(result.trainUrl,"_blank"); 

    })
  }
  
  fileChange(){
    console.log(1111)
    var file = $("#imgInput")[0].files
    var formData = new FormData()
    $.each(file,function(i,n){
      let file2 = new window.File([n], n.name, {type: n.type})
       formData.append("files",file2)
    })
    var id =$(this).attr("data")
    formData.append("id",id)
    $("body").append('<div style="width: 100%;height: 100%;background: #15132d99;position: absolute;top:0;left:0;z-index:99999" id="loding"><div style="width:30px;height:30px;position: absolute;left:50%;top:50%"><img src="assets/images/loading.gif"></div></div>')
    axios.post(`${environment.API_URL}/v1/data_train/testModel`,formData, {
      headers: {
        'Authorization':'Bearer '+localStorage.getItem('Bearer'),
        'TR-Role': 'TR-User'
      }
    })
    .then((result:any)=>{
      $("#loding").remove()
      if(result.data.message == "测试失败"){
          alert(result.data.message)    
      }else{
        if(result.data.code == 1){
          var imgData = JSON.parse(result.data.data)
          $.each(imgData,function(i,n){
            $("#image-list1").append(`<div class="cover"><img src="${n}" alt=""></div>`)
          })
        }
    
      }
      $("#imgInput").val("")
    })
  }
  tabChange(e:any){
    var that = this
    if(e.index == 1){
  	$('.image-list1').on('click', '.cover', function () {
      var this_ = $(this);
      var images = this_.parents('.image-list1').find('.cover');
      var imagesArr = new Array();
      $.each(images, function (i, image) {
        imagesArr.push($(image).children('img').attr('src'));
      });
      $.pictureViewer({
        images: imagesArr, //需要查看的图片，数据类型为数组
        initImageIndex: this_.index() + 1, //初始查看第几张图片，默认1
        scrollSwitch: true //是否使用鼠标滚轮切换图片，默认false
      });
    });
    $("#imgInput").attr("data",that.listData.id)
    $("#imgInput").on("change",that.fileChange)
    }else{
      that.fileChange = null
    }
  }

  loadTraining() {
    let params;
    //不分页
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
       
        switch(this.listOfData[i].taskMode) {
          case 0:
            this.listOfData[i].taskModeName = "高精度"
             break;
          case 1:
            this.listOfData[i].taskModeName = "低延时"
             break;
             case 2:
              this.listOfData[i].taskModeName = "平衡"
               break;
               case 3:
                this.listOfData[i].taskModeName = "边缘"
                 break;
                 case 4:
                  this.listOfData[i].taskModeName = "终端"
                   break;
          default:   this.listOfData[i].taskModeName = ""
             
     } 
     var taskProgress:any = this.listOfData[i].taskProgress*1
     taskProgress = taskProgress.toFixed(2)
     this.listOfData[i].taskProgress = taskProgress
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
  
listData:any
  checkModelPrecision(event: any, data: any) {
    var that = this
    this.isVisible = true
    setTimeout(()=>{
      that.listData = data
      $('.image-list').on('click', '.cover', function () {
        var this_ = $(this);
        var images = this_.parents('.image-list').find('.cover');
        var imagesArr = new Array();
        $.each(images, function (i, image) {
          imagesArr.push($(image).children('img').attr('src'));
        });
        $.pictureViewer({
          images: imagesArr, //需要查看的图片，数据类型为数组
          initImageIndex: this_.index() + 1, //初始查看第几张图片，默认1
          scrollSwitch: true //是否使用鼠标滚轮切换图片，默认false
        });
      });

      axios.get(`${environment.API_URL}/v1/data_train/queryById?id=${data.id}`, {
        headers: {
          'Authorization':'Bearer '+localStorage.getItem('Bearer'),
          'TR-Role': 'TR-User'
        }
      })
      .then((result:any)=>{
        var result = result.data.data
        this.precision = result.precision.slice(0,5)*100+'%'
        var prCurve = result.prCurve.split(" ")
        var aaa:any = [];
        var xdata:any = [];
        var ydata:any = [];
        
        var echartsData = []
  
        $.each(prCurve,function(i,n){
          aaa.push(parseFloat(n.trim()))
        })
      
        $.each(aaa,function(i,n){
            if(i%2){
              ydata.push(n)
            }else{
                xdata.push(n)
            }
        })

        $.each(xdata,function(i,n){
          echartsData.push([n,ydata[i]])

        })

       
        
      

        that.initModeLineCharts(echartsData)
        that.jdcurver = JSON.parse(result.valErrorSample)
 


       
      })
    },50)
   
    // // console.log('data', data);
    // this.createTestTask(data.id);
    // // this.nzMessage.warning('正在创建测试任务.........');
    // event.stopPropagation();
    // this.nzModal.create({
    //   nzTitle: '模型精度',
    //   nzContent: ModelPrecisionComponent,
    //   nzOkText: '加入对比',
    //   nzComponentParams: {
    //     'trainId': data.id,
    //   },
    //   nzOnOk: (modelPrecisionComponent: ModelPrecisionComponent) => {

    //     // 判断是否重复添加
    //     let duplicated = false;
    //     for (let i = 0; i < this.comparingDataTrainList.length; i++) {
    //       if (this.comparingDataTrainList[i].id === modelPrecisionComponent.dataTrain.id) {
    //         duplicated = true;
    //         break;
    //       }
    //     }

    //     if (duplicated) {
    //       this.nzMessage.error('请勿重复添加');
    //       return false;
    //     } else if (this.comparingDataTrainList.length < 3) {

    //       let compareName: string;
    //       if (this.comparingDataTrainList.length == 0) {
    //         compareName = '模型一';
    //       } else if (this.comparingDataTrainList.length == 1) {
    //         compareName = '模型二';
    //       } else if (this.comparingDataTrainList.length == 2) {
    //         compareName = '模型三';
    //       }
    //       modelPrecisionComponent.dataTrain.compareName = compareName;

    //       this.comparingDataTrainList.push(modelPrecisionComponent.dataTrain);

    //       this.showCompare = true;

    //     } else {
    //       this.nzMessage.error('最多对比3个模型');
    //       return false;
    //     }
    //   },
    //   nzCancelText: '关闭'
    // });
  }

  startCompare() {

    this.isVisible1 = true

    var dataList = this.listOfData.map((item)=>{
      if(this.mapOfCheckedId[item.id]){ 
        return item
      }
    })

    this.initModeLineCharts1(dataList)

    // const modal = this.nzModal.create({
    //   nzTitle: '模型对比',
    //   nzContent: ModelCompareComponent,
    //   nzComponentParams: {
    //     comparingDataTrainList: this.comparingDataTrainList
    //   },
    //   nzOnOk: (modelCompareComponent: ModelCompareComponent) => {
    //     // return false;
    //   },
    //   nzCancelText: '关闭',
    //   nzOkText: null
    // });
    // modal.afterClose.subscribe(() => {
    //   // this.loadTraining();
    // });
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
  handleCancel(){
    this.isVisible = false;
  }

  handleCancel1(){
    this.isVisible1 = false;
  }

  initModeLineCharts1(data:any){

    // var prCurve = result.prCurve.split(" ")

var echartsData1 = []
  for (let index = 0; index < data.length; index++) {
    const element = data[index];
    
    if(element){

      var aaa:any = [];
      var xdata:any = [];
      var ydata:any = [];
      var echartsData = []
      var prCurve =  element.prCurve.split(" ")
     $.each(prCurve,function(i,n){
      aaa.push(parseFloat(n.trim()))
      })

      $.each(aaa,function(i,n){
        if(i%2){
          ydata.push(n)
        }else{
         xdata.push(n)
        }
    })

       $.each(xdata,function(i,n){
      echartsData.push([n,ydata[i]])

     })

     echartsData1.push({echartsData,data:element})


    }

    
  }



   var dataset = [];
   var series = []
  $.each(echartsData1,function(i,x){

    let data1 =  x.echartsData.map(y=>{
      return y+""
    })
       data1 = data1.map(x=>{
         
      return x.split(",")
     
     })

    dataset.push(

        {source: data1}

      )

      series.push(
      {
        name: x.data.taskName+'---'+x.data.typeSourceName,
        type: 'line',
        smooth: true,
        datasetIndex: i,
        symbolSize: 0.1,
        symbol: 'circle',
        label: { show: false, fontSize: 16 },
        labelLayout: { dx: -20 },
        encode: { label: 2, tooltip: 1 }
      })
   })


var option = {
    dataset:dataset,
    legend: {
      show: true, // 是否显示图例
        type: 'scroll', // 可滚动翻页的图例。当图例数量较多时可以使用。
        orient:'horizontal', // 图例列表的布局朝向。
        itemWidth: 8, // 图例标记的图形宽度。
        itemHeight: 8, // 图例标记的图形高度。
        textStyle: { // 图例的公用文本样式。
          color: '#fff',
          fontSize: 12
        },
        icon: 'rect' // 图例项的 icon。
      },
     title: {
      text: '模\n型\n精\n度\n曲\n线',
      textStyle: {
        color: "#fff", // 主标题文字的颜色。
        fontStyle: "normal", // 主标题文字字体的风格。 'normal'  'italic'  'oblique'
        fontWeight: "normal", // 主标题文字字体的粗细。 'normal' 'bold'  'bolder'  'lighter' 500|600
        fontFamily: "sans-serif", // 主标题文字的字体系列。
        fontSize: 15, // 字体大小
      },
      textAlign: "auto", //水平对齐'auto'、'left'、'right'、'center'
      textVerticalAlign: "auto", // 垂直对齐  'auto'、'top'、'bottom'、'middle'
      left:10, // 距离 left top right bottom
      top:'40%'
    },
    tooltip: {
      // trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label:{
          color:"rgba(14, 24, 142, 1)"
        }
      }
    },
    xAxis: {
        name:'召回率',
        nameLocation: "end",
        nameTextStyle: {
                fontSize: 14,//正常是不用添加
      },
      splitLine: {
        lineStyle: {
          type: 'dashed'
        }
      },
      axisLine:{
        symbol:['none','arrow'],
        lineStyle:{
          color:'#fff'
        }
      }
    },
    yAxis: {
      name:'准确率',
        
      nameLocation: "end",
      
      nameTextStyle: {
              fontSize: 14,//正常是不用添加
        },
      splitLine: {
        lineStyle: {
          type: 'dashed',
         
        }
      },
      axisLine:{
        symbol:['none','arrow'],
        lineStyle:{
          color:'#fff'
        }
      },
    },
    series: series
  };

  setTimeout(()=>{
    var lineChartsDom:any = document.getElementById("lineCharts1")
      var lineChart:any =  echarts.init(lineChartsDom)
   lineChart.setOption(option);
  },10)


 

  }



  initModeLineCharts(data:any){

    
  let data1 =  data.map(x=>{
     return x+""
   })
      data1 = data1.map(x=>{
        
     return x.split(",")
    
    })

  

    // echarts.registerTransform(ecStat.transform.regression);

    var option = {
      dataset: [
        {
          source: data1
        },
        {
          transform: {
            type: 'ecStat:regression',
            config: {
              method: 'exponential',
              // 'end' by default
              // formulaOn: 'start'
            }
          }
        }
        
      ],
       title: {
        text: '模\n型\n精\n度\n曲\n线',
        textStyle: {
          color: "#fff", // 主标题文字的颜色。
          fontStyle: "normal", // 主标题文字字体的风格。 'normal'  'italic'  'oblique'
          fontWeight: "normal", // 主标题文字字体的粗细。 'normal' 'bold'  'bolder'  'lighter' 500|600
          fontFamily: "sans-serif", // 主标题文字的字体系列。
          fontSize: 15, // 字体大小
        },
        textAlign: "auto", //水平对齐'auto'、'left'、'right'、'center'
        textVerticalAlign: "auto", // 垂直对齐  'auto'、'top'、'bottom'、'middle'
        left:10, // 距离 left top right bottom
        top:'40%'
      },
      tooltip: {
        // trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label:{
            color:"rgba(14, 24, 142, 1)"
          }
        }
      },
      xAxis: {
          name:'召回率',
          nameLocation: "end",
          nameTextStyle: {
                  fontSize: 14,//正常是不用添加
        },
        splitLine: {
          lineStyle: {
            type: 'dashed'
          }
        },
        axisLine:{
          symbol:['none','arrow'],
          lineStyle:{
            color:'#fff'
          }
        }
      },
      yAxis: {
        name:'准确率',
          
        nameLocation: "end",
        
        nameTextStyle: {
                fontSize: 14,//正常是不用添加
          },
        splitLine: {
          lineStyle: {
            type: 'dashed',
           
          }
        },
        axisLine:{
          symbol:['none','arrow'],
          lineStyle:{
            color:'#fff'
          }
        },
      },
      series: [
        {
          name: 'line',
          type: 'line',
          smooth: true,
          datasetIndex: 0,
          symbolSize:5,
          // symbol: 'circle',
          // label: { show: true, fontSize: 16 },
          labelLayout: { dx: -20 },
          encode: { label: 2, tooltip: 1 }
        }
      ]
    };


    var lineChartsDom:any = document.getElementById("lineCharts")
    var lineChart:any =  echarts.init(lineChartsDom)
    lineChart.setOption(option);
  }



  test(): void {
    console.log('触发');
  };

}
