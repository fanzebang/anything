import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {HttpResult} from '../../core/http-entity';
import sha256 from 'crypto-js/sha256';
import Hex from 'crypto-js/enc-hex';
import {Router} from '@angular/router';
import {Store} from '@ngxs/store';
import {LoginAction} from '../../state/login.action';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  validateForm!: FormGroup;
  errMsg: string;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router, private store: Store) {
  }

  submitForm(): void {
    // tslint:disable-next-line:forin
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    if (this.validateForm.valid) {
      const loginName = this.validateForm.controls.userName.value;
      const saltUrlParams = new HttpParams().append('loginName', loginName);
      // 先拿盐
      this.http.get(`${environment.API_URL}/v1/login/salt`, {
        params: saltUrlParams
      }).subscribe((saltResult: HttpResult<string>) => {
        if (HttpResult.succeed(saltResult.code)) {
          // 将密码加盐后传给后台登录
          const salt = saltResult.data;
          const passwdHashHex = Hex.stringify(sha256(this.validateForm.controls.password.value));
          const saltPasswdHashHex = Hex.stringify(sha256(loginName + passwdHashHex + salt));

          this.http.post(`${environment.API_URL}/v1/login`, {
            loginName,
            passwd: saltPasswdHashHex
          }).subscribe((loginResult: HttpResult<string>) => {
            if (HttpResult.succeed(loginResult.code)) {
              // 登录成功
              var data = JSON.stringify(loginResult.data);
                var data=JSON.stringify(loginResult.data);
                var str=JSON.parse(data);
                var jwt=JSON.stringify(str.jwt);
                    jwt=jwt.substring(1,jwt.length-1);
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
                localStorage.setItem('Bearer', jwt);
                localStorage.setItem('mgrPath', mgrPath);
               localStorage.setItem('dataCountHeaderPath', dataCountHeaderPath);
                 localStorage.setItem('sampleResourcePath', sampleResourcePath);
                localStorage.setItem('targetRecognizePath',targetRecognizePath);
                localStorage.setItem('wsPath',wsPath);
                localStorage.setItem('sfUrl',sfUrl);
                localStorage.setItem('homeLink','www.baidu.com');

            //  alert("打印是的："+localStorage.getItem('wsPath'));
              this.store.dispatch(new LoginAction(jwt)).subscribe(() => {
                this.router.navigate(['/home']);
              });

            } else {
              this.errMsg = loginResult.message;
            }
          });
        } else {
          this.errMsg = saltResult.message;
        }

      });

    }
  }


  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }
}
