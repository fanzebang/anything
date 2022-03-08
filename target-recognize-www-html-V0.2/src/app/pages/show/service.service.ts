import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  public targetData:any={
    keyWord:'',
    label:[]
  }
  
  constructor() { }

  modelSaveData(obj:any){

    this.targetData.keyWord = obj.keyWord
    this.targetData.label = obj.label

  }

  targetGetData(){

    return this.targetData

  }

}
