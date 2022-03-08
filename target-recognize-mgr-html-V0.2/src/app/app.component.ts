import {Component, OnInit} from '@angular/core';
import {Store} from '@ngxs/store';
import {LoginAction} from './state/login.action';
import {ActivatedRoute, Router} from '@angular/router';
import {environment} from "../environments/environment";
import {HttpClient, HttpParams} from '@angular/common/http';
import {HttpResult} from './core/http-entity';
var $:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  constructor(private store: Store, private router: Router, private route: ActivatedRoute,public http:HttpClient) {
  }

  ngOnInit(): void {
    // const heard = location.search;
    // if (heard) {
    //   if (heard.concat('jwt')) {
    //     localStorage.setItem('Bearer', heard.split('=')[1]);
    //     this.store.dispatch(new LoginAction(heard.split('=')[1])).subscribe(() => {
    //       this.router.navigate(['/console/data-manage']);
    //     });
    //   }
    // }

    var heard:any = location.search;
    var access_token:any = heard.substring(1).split("=")[0]
     var pointLogin:any = heard.substring(1).split("=")
 
 
     if (heard && access_token != 'access_token') {
        //  if(heard.indexOf("result") != -1){
        //    var loginData:any = heard.split('&')[1].substr(7).substr(1);
        //     loginData = loginData.substr(0,loginData.length-1).split(',')
        //    loginData = loginData.map(x=>{
        //         if(x.startsWith("%20")){
        //           return x.substr(3)
        //         }else{
        //           return x
        //         }
        //     })
        //     loginData.forEach((x)=>{
        //        let itemKey = x.split('=')[0]
        //        let itemValue = x.split('=')[1]
        //        localStorage.setItem(itemKey,itemValue)
        //     })
        //  }
       if (heard.concat('jwt')) {
         let Bearer = heard.split('=')[1];
        
         localStorage.setItem('Bearer', Bearer);

         setTimeout(() => {
          this.getUrlPath()
        }, 10);

       }
     }else if(access_token == 'access_token'){
       window.location.href= `${environment.API_URL}/v1/sso/welcome-mgr?access_token=${pointLogin[2]}`
     }


    const jwt = localStorage.getItem('Bearer');
    if (jwt) {
      this.store.dispatch(new LoginAction(jwt));
    }

    document.oncontextmenu =function () {return false; };

  }


  getUrlPath(){
    this.http.get(`${environment.API_URL}/v1/login/getUrlPath`).subscribe((loginResult: HttpResult<string>) => {
        var data=JSON.stringify(loginResult);
              var str=JSON.parse(data); 
              var sampleResourcePath=JSON.stringify(str.sampleResourcePath);
                  sampleResourcePath=sampleResourcePath.substring(1,sampleResourcePath.length-1);
               localStorage.setItem('sampleResourcePath',sampleResourcePath);
            this.store.dispatch(new LoginAction( localStorage.getItem('Bearer'))).subscribe(() => {
                this.router.navigate(['/console/data-manage']);
          });
    })
  }

 


}
