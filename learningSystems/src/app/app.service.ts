import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from "../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class AppService {

homeData:any = [];

  constructor() { }

  alertFun(data:string){
    var alertDom:any = document.querySelector(".header .alert")
    alertDom.style.display = "block"
    var pDom:any = document.querySelector(".header .alert p")
    setTimeout(()=>{
      pDom.innerHTML = data
    },10)
  


  }
  

getData(url:any,data:any,method:any,postData:any){
  this.homeData = []
    var collectionData:any  = localStorage.getItem("collectionData")
    var token:any = JSON.parse(collectionData).token
    var api:any = environment.requestIp+url+data
 if(method == "post"){
    return   axios.post(api, postData,{
        headers:{
          "Authorization": `Bearer ${token}`,
          "Accept": "application/json;charset=UTF-8",
        }
      })
    }else if(method == "get"){

      return   axios.get(api,{
            headers:{
              "Authorization": `Bearer ${token}`,
              "Accept": "application/json;charset=UTF-8",
            }
          })
    }else{

      return   axios.get("api")

    }


  }

 
}
