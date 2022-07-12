import {Component, OnInit,ViewChild,ElementRef, SystemJsNgModuleLoader} from '@angular/core';
import {NzMessageService, NzModalService,NzUploadChangeParam} from 'ng-zorro-antd';
import {AddTrainingComponent} from './add-training.component';
import {HttpClient, HttpParams} from '@angular/common/http';
import {DataTrain, HttpResult, ApiPage,SampleOssType} from 'src/app/core/http-entity';
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
  listOfData1:DataTrain[] = [];
  listOfData2:DataTrain[] = [];
  dataTrain: DataTrain;
  mapOfCheckedId: { [key: string]: boolean } = {};
  status = 'STATUS';
  compareDisplay:boolean = false
  rightComponent = false;
  recommend:String;
  leftTableData1:any=[];

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
  precision:number;
  selectList:String[] = ["全部"];
  selectData:any = "全部";
  intervalLoadTraining:any
  onItemChecked(id: number, checked: boolean): void {
    // this.updateCheckedSet(id, checked);
    // this.refreshCheckedStatus();
  }

  comparingDataTrainList: DataTrain[] = [];


  checkAll(value: boolean): void {


    if(!value){

      this.mapOfCheckedId = {};
    }else{
      // console.log(this.listOfData)
      this.listOfData.forEach(d => (this.mapOfCheckedId[String(d.id)] = value));
    }


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

  window.onresize = () => {
      this.lineChart2.resize();
  };

  }


  startInterval(){
    this.intervalLoadTraining =  setInterval(()=>{

      if(this.status == 'STATUS'){
        this.loadTraining1();
      }else{
        this.loadTraining();
      }

      if(this.dataTrain && (this.status == "STATUS" || this.status == "END" )) this.tableClick(this.dataTrain.id,'autoClick')

    },1000*2)
  }

  stopInterval(){
    clearInterval(this.intervalLoadTraining)
  }
  nzOpenChange(e:any){

    if(e){
      this.stopInterval();
    }else{
      this.startInterval();
    }
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.loadTraining1();
    this.startInterval()

  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.stopInterval();
  }

 downloadId:number;
  download1(e,d){
    this.isVisible2 = true;
    this.downloadId= d.id

  }

  download(type){
    let deployModelUrls;
    switch (type) {
      case 'cpu':
        for (let index = 0; index < this.listOfData.length; index++) {
          const element = this.listOfData[index];
            if(element.id == this.downloadId){
              deployModelUrls= JSON.parse(element.deployModelUrls)
            }
        }
        for (let index = 0; index < deployModelUrls.length; index++) {
          const element = deployModelUrls[index];
            if(element.type == "cpuUrl"){
              window.open(element.url,"_blank");
            }
        }


        break;
        case 'gpu':

          for (let index = 0; index < this.listOfData.length; index++) {
            const element = this.listOfData[index];
              if(element.id == this.downloadId){
                deployModelUrls= JSON.parse(element.deployModelUrls)



              }
          }

          for (let index = 0; index < deployModelUrls.length; index++) {
            const element = deployModelUrls[index];
              if(element.type == "gpuUrl"){
                window.open(element.url,"_blank");
              }
          }

          break;
          case 'hs':

            for (let index = 0; index < this.listOfData.length; index++) {
              const element = this.listOfData[index];
                if(element.id == this.downloadId){
                  deployModelUrls= JSON.parse(element.deployModelUrls)
                }
            }

            for (let index = 0; index < deployModelUrls.length; index++) {
              const element = deployModelUrls[index];
                if(element.type == "hisiliconUrl"){
                  window.open(element.url,"_blank");
                }
            }
            break;
            case 'zx':
            var formdata:any = new FormData();
            formdata.append("id",this.downloadId);
            let timeout = 1000*30;
            $("body").append('<div style="width: 100%;height: 100%;background: #15132d99;position: absolute;top:0;left:0;z-index:99999" id="loding"><div style="width:30px;height:30px;position: absolute;left:50%;top:50%"><img src="assets/images/loading.gif"></div></div>')
            axios.post(`${environment.API_URL}/v1/data_train/publishDataTrainModel`,formdata, {
              timeout: timeout,
              headers: {
                'Authorization':'Bearer '+localStorage.getItem('Bearer'),
                'TR-Role': 'TR-User'
              }
            })
            .then((result:any)=>{
              $("#loding").remove();
              if(result.data.code == 1){
                this.nzMessage.success(result.data.message);
              }else{
                this.nzMessage.error(result.data.message);
              }
            })
            .catch(e=>{
             if(e.code == "ECONNABORTED"){
              this.nzMessage.error("网络超时，发布失败");
             }
              $("#loding").remove();
            })
              break;
      default:
        break;
    }

    this.isVisible2 = false;
  }

  fileChange(){
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
    })
      .catch((e:any)=>{
        console.log(e)
    })
      .finally(()=>{
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

  loadTraining1() {
    var arr1 = [];
    var arr2 = []
      let params = new HttpParams().append('status', 'STATUS');
      this.http.get(`${environment.API_URL}/v1/data_train/`, {params}).subscribe((result: HttpResult<ApiPage<DataTrain>>) => {
        if (HttpResult.succeed(result.code)) {
        // this.listOfData = result.data.records;
        arr1 =  result.data.records
        let params = new HttpParams().append('status', 'END');
        this.http.get(`${environment.API_URL}/v1/data_train/`, {params}).subscribe((result: HttpResult<ApiPage<DataTrain>>) => {
          if (HttpResult.succeed(result.code)) {
          if(this.selectData == "全部") {
            for (let index = 0; index < result.data.records.length; index++) {
              const element = result.data.records[index];
              arr2.push(element)
            }
            this.dataTotal += result.data.total;
            this.pageIndex = result.data.current;
              // this.listOfData2 = this.listOfData
            }
            this.listOfData = arr1.concat(arr2)
            this.listOfData2 = this.listOfData
            if(this.listOfData.length>0 && !this.dataTrain) this.tableClick(this.listOfData[0].id,'handClick')

          }
        });

        }
      });





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

    if(this.status != 'STATUS'){
      this.http.get(`${environment.API_URL}/v1/data_train/`, {params}).subscribe((result: HttpResult<ApiPage<DataTrain>>) => {
        if (HttpResult.succeed(result.code)) {
        if(this.selectData == "全部") {
          this.listOfData = result.data.records;
          this.dataTotal = result.data.total;
          this.pageIndex = result.data.current;

          if(this.status != 'LINE_UP' && this.status != 'STATUS' && this.status != 'END'){
              this.loadSelectData(this.listOfData);
              
          }
            this.listOfData2 = this.listOfData
          }

          if(this.listOfData.length>0 && !this.dataTrain) this.tableClick( this.listOfData[0].id,"handClick" )

        }
      });

    }



  }

  loadSelectData(listOfData:Array<DataTrain>){
    this.selectList = this.selectList.splice(0,1)
    var lastClass = { };
  for (let index = 0; index < listOfData.length; index++) {
        const element = listOfData[index];
        lastClass[element.id]=[];
        if(element.taskSampleType.indexOf(",") == -1){
          this.http.get(`${environment.API_URL}/v1/sample-oss-types/${element.taskSampleType}`).subscribe((result: HttpResult<SampleOssType>) => {
            if (HttpResult.succeed(result.code)) {
              if(this.selectList.indexOf(result.data.sampleTypeName) == -1){
                this.selectList.push(result.data.sampleTypeName)
              }
              lastClass[element.id].push(result.data.sampleTypeName)
            }
          });
        }else{

        let elementArr = element.taskSampleType.split(",");
        for (let i = 0; i < elementArr.length; i++) {
            let value = elementArr[i];
            this.http.get(`${environment.API_URL}/v1/sample-oss-types/${value}`).subscribe((result: HttpResult<SampleOssType>) => {
              if (HttpResult.succeed(result.code)){
                lastClass[element.id].push(result.data.sampleTypeName)



              }
            });
        }
        }

        if(index == (listOfData.length-1)) {
          setTimeout(()=>{
            for (const key in lastClass) {
              var selectString =lastClass[key].sort().join(",")
              if(this.selectList.indexOf(selectString) == -1){
                this.selectList.push(selectString)
              }
              for (let index = 0; index < listOfData.length; index++) {
                const element = listOfData[index];
                if(element.id == (parseInt(key))){
                  element.lastClass = selectString
                }
              }
            }
          },400)
        }

        
      }
  
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
        this.loadTraining1();
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
    this.rightComponent = false;
    this.flag = flag;
    this.compareDisplay= false
    this.dataTrain = null;

    if(flag ==0){
      this.status = 'STATUS';
      console.log('点击进行中');
      this.selectData = "全部"
      this.loadTraining1();
    }
     if (flag ==1) {
      console.log('点击已经结束');
      this.selectList = this.selectList.splice(0,1)
      this.selectData = "全部"
      this.status = 'OVER';
      //加载进行中的数据
      this.loadTraining();
    }
    if (flag ==-1){
      this.status = 'LINE_UP';
      console.log('点击排队中');
      this.selectData = "全部"
      this.loadTraining();
    }




  }



  ngModelChange(){

    this.dataTrain = null;
    this.selectData  == "全部"? this.compareDisplay = false: this.compareDisplay = true
    this.listOfData1 = [];

    if(this.compareDisplay){

      for (let index = 0; index < this.listOfData2.length; index++) {
        const element = this.listOfData2[index];
        if(element.lastClass == this.selectData){
          this.listOfData1.push(element);
        }
      }

      this.listOfData = this.listOfData1

    }else{

      this.listOfData = this.listOfData2

    }

    if(this.listOfData.length>0 && !this.dataTrain) this.tableClick(this.listOfData[0].id,"handClick")

  }

  Training1Datax=[];
  Training1Datay=[];
  now = new Date();
  oneDay = 24 * 3600 * 1000;
  tableClick(id: number,type:string) {
  var  now =new Date();
  var timeName = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`+""
  let value = Math.random() * 1000;
  value = value + Math.random() * 21 - 10;

    if(type == "handClick"){
      this.lineChart2 = null;
      this.Training1Datax=[];
      this.Training1Datay=[];
    }else{
      if( this.Training1Datax.length>60){
        this.Training1Datax.shift()
        this.Training1Datay.shift()
        this.Training1Datax.push(timeName)
        this.Training1Datay.push(this.dataTrain.lossRate)
      }else{
        this.Training1Datax.push(timeName)
        this.Training1Datay.push(this.dataTrain.lossRate)

      }
    }

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

    //  this.listOfData[i].taskProgress = this.listOfData[i].taskProgress
        this.dataTrain = this.listOfData[i];
      }
    }
    var prCurve;
 if( this.dataTrain.prCurve) prCurve = this.dataTrain.prCurve.split(" ")
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

    if (this.status == "STATUS" || this.status == "END") {
      this.initModeLineCharts2(this.Training1Datax,this.Training1Datay)
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
        this.precision = result.precision.slice(0,5)
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
        var imgArr = JSON.parse(result.valErrorSample)
        for (let index = 0; index < imgArr.length; index++) {
          const element = imgArr[index];
          that.jdcurver.push(element.replace(",",""))
        }
      })
    },50)

  }

  tableData:any = [];
  //对比
  startCompare() {
    this.tableData = [];
    var checkedCameraIds = [];
    for (var k in this.mapOfCheckedId) {
      if (this.mapOfCheckedId[k]) {
        checkedCameraIds.push(k);
      }
    }



    if (checkedCameraIds.length < 1) {
      this.nzMessage.error('最少勾选一项');
      return;
    }

    for (let index = 0; index < this.listOfData.length; index++) {
      const element = this.listOfData[index];
        for (let index = 0; index < checkedCameraIds.length; index++) {
          const element2 = checkedCameraIds[index];
            if(element.id == element2){
              this.tableData.push(element)
            }
        }

    }

    var Arr1 = [];

var leftTableData:any = {
    id:"",
    data:[]
};

    for (let index = 0; index < checkedCameraIds.length; index++) {
      // checkedCameraIds[index]
      axios.post(`${environment.API_URL}/v1/data_train/queryTaskSampleType?taskId=${checkedCameraIds[index]}`,{taskId:checkedCameraIds[index]}, {
        headers: {
          'Authorization':'Bearer '+localStorage.getItem('Bearer'),
          'TR-Role': 'TR-User'
        }
      })
      .then((result:any)=>{

      let resultData = result.data.data
      let Arr2 = [];

      for (let index = 0; index < resultData.length; index++) {
        const element = resultData[index].sampleTypeName;
        Arr2.push(element)
        if(Arr1.indexOf(element) == -1) Arr1.push(element)
      }

      if( Arr1.join(",") != Arr2.join(",")){
        for (let i = 0; i < Arr1.length; i++) {
          const element = Arr1[i];
          if( Arr2.indexOf(element) == -1){
            Arr2.splice(i,0,"-")
          }
        }
      }

      leftTableData.id = resultData[0].taskId
      leftTableData.data = Arr2
      for (let i = 0; i < this.listOfData.length; i++) {
        const element = this.listOfData[i];
        if(element.id ==  leftTableData.id) element.leftTableData = leftTableData.data
      }
      })
    }
    this.isVisible1 = true
    var dataList = this.listOfData.map((item)=>{
      if(this.mapOfCheckedId[item.id]){
        return item
      }
    })
    this.initModeLineCharts1(dataList)

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
        this.loadTraining1();
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

  handleCancel2(){

    this.isVisible2 = false;
  }
  isVisible2:boolean = false;
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
        // name: x.data.taskName+'---'+x.data.typeSourceName,
        name: x.data.taskName+'-',
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

// preY 下底 nextY 上底 nextX-preX 高

var maxArea = -1;
var maxAreaIndex;
for (let i = 0; i < dataset.length; i++) {
  const element = dataset[i];
  var area = 0;
  element.source = element.source.reverse();
  for (let index = 0; index < (element.source.length-1); index++) {
    const element1 = element.source[index];
    const element2 = element.source[index+1];
    // console.log(element1,element2)
    area += ((element1[1]*1+element2[1]*1)*(element2[0]*1-element1[0]*1))/2
  }

  series[i].name += i;
  if(area>maxArea) {
    maxArea = area;
    maxAreaIndex = i;
  }

}

// this.recommend = series[maxAreaIndex].name.split("---")[0];
this.recommend = data[maxAreaIndex].id
series[maxAreaIndex].name += "(推荐)"
series[maxAreaIndex].itemStyle = {
  normal : {
  color:'red', //改变折线点的颜色
  lineStyle:{
  color:'red' //改变折线颜色
  }
  }
}

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



  initModeLineCharts2(datax:any,datay){
      var option = {
        grid:{
          bottom:50,
          top:40,
        },
         title: {
          text: 'loss曲线',
          textStyle: {
            color: "#fff", // 主标题文字的颜色。
            fontStyle: "normal", // 主标题文字字体的风格。 'normal'  'italic'  'oblique'
            fontWeight: "normal", // 主标题文字字体的粗细。 'normal' 'bold'  'bolder'  'lighter' 500|600
            fontFamily: "sans-serif", // 主标题文字的字体系列。
            fontSize: 15, // 字体大小
          },
          textAlign: "auto", //水平对齐'auto'、'left'、'right'、'center'
          textVerticalAlign: "top", // 垂直对齐  'auto'、'top'、'bottom'、'middle'
          left:'35%', // 距离 left top right bottom
          top:'10'
        },
        tooltip: {
          trigger: 'axis',
          formatter: function (params) {
            params = params[0];

            return ( params.axisValue +"/"+  params.data);
          },
          axisPointer: {
            animation: false
          }
        },
        xAxis: {
            name:'时间',
            type: 'category',
            data:datax,
            nameLocation: "middle",
            nameTextStyle: {
                    fontSize: 14,//正常是不用添加
                    padding: [5, 0, 0, 250]
          },
          splitLine:{
            　　　　show:false
            　　},
          axisLine:{
            symbol:['none','arrow'],
            lineStyle:{
              color:'#fff'
            }
          }
        },
        yAxis: {
          name:'loss',
          type: 'value',
          nameLocation: "end",
          nameTextStyle: {
              fontSize: 14,//正常是不用添加
            },
            　splitLine:{
              　　　　show:false
              　　},
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
            name: 'line',
            type: 'line',
            showSymbol: false,
            data: datay,
            smooth: true,
            itemStyle: {
              normal: {
                  color: '#0c6cc3', //改变折线点的颜色
                  lineStyle: {
                      color: '#0c6cc3' //改变折线颜色
                  }
              }
          }
          }
        ]
      };

      setTimeout(() => {

        if(!this.lineChart2) {
          this.lineChartsDom = document.getElementById("lineCharts2")
          this.lineChart2 =  echarts.init(this.lineChartsDom)
          this.lineChart2.setOption(option);
        }else{
          this.lineChart2.setOption(option);
        }
      }, 100);

    }

    lineChartsDom:any
    lineChart2:any
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
