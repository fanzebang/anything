import {Component, OnInit} from '@angular/core';
import {Store} from "@ngxs/store";
import {LoginAction} from "./state/login.action";
import {WebsocketService} from "./core/websocket.service";
import {environment} from "../environments/environment";
import {RecognizeAction} from "./state/recognize.action";
import {FfdecWasmLoaderService} from "./ffdec-wasm-loader.service";
import {ActivatedRoute, Router} from "@angular/router";
import axios from 'axios';
import {HttpClient, HttpParams} from '@angular/common/http';
// ../core/http-entity
import {HttpResult} from './core/http-entity';
// private cs: CommunicateService
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  constructor(private store: Store, private ws: WebsocketService,
              private ffdecWasmLoaderService: FfdecWasmLoaderService, private router: Router, private route: ActivatedRoute,public http:HttpClient) {
    this.ffdecWasmLoaderService.load();
  }

  ngOnInit(): void {

  var heard:any = location.search;
  var access_token:any = heard.substring(1).split("=")[0]
  var pointLogin:any = heard.substring(1).split("=")
    if (heard && access_token != 'access_token') {
      if (heard.concat('jwt')) {
        let Bearer = heard.split('=')[1];
      
        localStorage.setItem('Bearer', Bearer);

        setTimeout(() => {
          this.getUrlPath()
        }, 10);
       

      }
    }else if(access_token == 'access_token'){
      window.location.href= `${environment.API_URL}/v1/sso/welcome-detect?access_token=${pointLogin[2]}`

    }

    const jwt = localStorage.getItem('Bearer');
    if (jwt) {
      this.store.dispatch(new LoginAction(jwt));
    }

    this.ws.connect(`${localStorage.getItem("wsPath")}/v1/detect-socket`).subscribe((data: string) => {
          console.log('data is :', JSON.parse(data));
          let data1 = JSON.parse(data)
         try{
          data1.borderShow = window.location.pathname.split(";")[2].split("=")[1]
         }catch(e){

         }

          this.store.dispatch(new RecognizeAction(JSON.stringify(data1)));

    });

  }
  getUrlPath(){
    this.http.get(`${environment.API_URL}/v1/login/getUrlPath`).subscribe((loginResult: HttpResult<string>) => {
      // if (HttpResult.succeed(loginResult.code)) {
          var data=JSON.stringify(loginResult);
          var str=JSON.parse(data);
          var mgrPath=JSON.stringify(str.mgrPath);
              mgrPath=mgrPath.substring(1,mgrPath.length-1);
          var dataCountHeaderPath=JSON.stringify(str.mgrPath);
              dataCountHeaderPath=dataCountHeaderPath.substring(1,dataCountHeaderPath.length-5);
          var sampleResourcePath=JSON.stringify(str.sampleResourcePath);
              sampleResourcePath=sampleResourcePath.substring(1,sampleResourcePath.length-1);
          var targetRecognizePath=JSON.stringify(str.targetRecognizePath);
              targetRecognizePath=targetRecognizePath.substring(1,targetRecognizePath.length-1);
          var wsPath=JSON.stringify(str.wsPath);
              wsPath=wsPath.substring(1,wsPath.length-1);
          var sfUrl=JSON.stringify(str.sfUrl);
              sfUrl=sfUrl.substring(1,sfUrl.length-1);
          localStorage.setItem('mgrPath', mgrPath);
          localStorage.setItem('dataCountHeaderPath', dataCountHeaderPath);
          localStorage.setItem('sampleResourcePath', sampleResourcePath);
          localStorage.setItem('targetRecognizePath',targetRecognizePath);
          localStorage.setItem('wsPath',wsPath);
          localStorage.setItem('sfUrl',sfUrl);
          localStorage.setItem('homeLink','www.baidu.com');
            this.store.dispatch(new LoginAction(localStorage.getItem('Bearer'))).subscribe(() => {
              this.router.navigate(['/home']);
          });
    })
  }
 
}
