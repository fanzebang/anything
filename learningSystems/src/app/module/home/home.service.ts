import { Injectable,ElementRef,Output,EventEmitter} from '@angular/core';
import axios from 'axios';
import { environment } from "../../../environments/environment";
import { Router } from '@angular/router';
import * as echarts from 'echarts';
@Injectable({
  providedIn: 'root'
})



export class HomeService {

 public centerData:any;

 public leftData:any;

 public rightData:any;

 public activeIndex:any;

 public isSend:any = false

 public eventbus:any;

@Output("homeCenter") homeCenter = new EventEmitter<any>();
@Output("homeElse") homeElse = new EventEmitter<any>();
@Output("homeElse1") homeElse1 = new EventEmitter<any>();
@Output("elseClick") elseClick = new EventEmitter<any>();

  constructor(private router:Router) {

   }

  textFun(data:any){
    this.homeCenter.emit(data)
  }

  textFun2(data:any){
    this.homeElse.emit(data)
  }

  textFun3(data:any){
    this.homeElse1.emit(data)
  }

  alertFun(obj:any,type:any){

    this.elseClick.emit({
      obj:obj,
      type:type,
      title:obj.equipment.title
    })

  }


  getHomeData(data:any,dataFlag:any){
  var that:any = this
    var collectionData:any  = localStorage.getItem("collectionData")
    var token:any = JSON.parse(collectionData).token
    var api:any = environment.requestIp+data

    if(dataFlag == "right" ){

      axios.get(api,{
        headers:{
          "Authorization": `Bearer ${token}`,
          "Accept": "application/json;charset=UTF-8",
        }
      })
      .then(function (response) {
        if(response.data.code == 401){
          that.router.navigate([`/login`])
        }else{
          that.rightData = response.data.data
        }
      })
      .catch(function (error) {
        console.log(error);
      }); 
    }else if(dataFlag == "left"){
      axios.post(api, {
      },{
        headers:{
          "Authorization": `Bearer ${token}`,
          "Accept": "application/json;charset=UTF-8",
        }
      })
      .then(function (response) {
        if(response.data.code == 401){
          that.router.navigate([`/login`])
        }else{
          that.leftData = response.data.data
        }
      })
      .catch(function (error) {
        console.log(error);
      }); 
    }else if(dataFlag == "center"){
      axios.post(api, {
      },{
        headers:{
          "Authorization": `Bearer ${token}`,
          "Accept": "application/json;charset=UTF-8",
        }
      })
      .then(function (response) {
        if(response.data.code == 401){
          that.router.navigate([`/login`])
        }else{

          that.centerData = response.data.data
  
     
  
        }
       
      
     
      })
      .catch(function (error) {
        console.log(error);
      }); 
      



    }
  
  }


}
