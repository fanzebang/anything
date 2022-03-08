import { CanActivate } from "@angular/router";


export class  CanActivateGuard implements CanActivate{
  canActivate(){
      var collectionData:any = localStorage.getItem("collectionData")
      var token :any = JSON.parse(collectionData)
      return token?true:false;
  }
}
