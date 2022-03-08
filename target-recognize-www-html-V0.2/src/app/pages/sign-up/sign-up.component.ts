import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import sha256 from 'crypto-js/sha256';
import Hex from 'crypto-js/enc-hex';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {HttpResult} from '../../core/http-entity';
import {NzModalService} from 'ng-zorro-antd';
import {Router} from '@angular/router';

@Component({
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.less']
})
export class SignUpComponent implements OnInit {

  agreed = false;

  constructor(private fb: FormBuilder, private http: HttpClient, private nzModal: NzModalService, private router: Router) {
  }

  validateForm!: FormGroup;

  confirmationValidator = ((control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return {required: true};
    } else if (control.value !== this.validateForm.controls.password.value) {
      return {confirm: true, error: true};
    }
    return {};
  });

  submitForm(): void {
    // tslint:disable-next-line:forin
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    if (this.agreed && this.validateForm.valid) {
      // 将密码做sha256加密
      const hashHex = Hex.stringify(sha256(this.validateForm.controls.password.value));

      this.http.post(`${environment.API_URL}/v1/sign-up`, {
        loginName: this.validateForm.controls.loginName.value,
        passwd: hashHex,
        name: this.validateForm.controls.name.value
      }).subscribe((result: HttpResult<any>) => {
        if (HttpResult.succeed(result.code)) {
          this.nzModal.success({
            nzContent: '注册成功',
            nzOnOk: () => {
              this.router.navigate(['/login']);
            }
          });

        } else {
          this.nzModal.error({
            nzContent: result.message
          });
        }
      });

    }
  }

  updateConfirmValidator(): void {
    /** wait for refresh value */
    Promise.resolve().then(() => this.validateForm.controls.checkPassword.updateValueAndValidity());
  }

  getCaptcha(e: MouseEvent): void {
    e.preventDefault();
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      // email: [null, [Validators.email, Validators.required]],
      loginName: [null, [Validators.minLength(1), Validators.maxLength(45), Validators.required]],
      password: [null, [Validators.required]],
      checkPassword: [null, [Validators.required, this.confirmationValidator]],
      name: [null, [Validators.required]],
      // phoneNumberPrefix: ['+86'],
      // phoneNumber: [null, [Validators.required]],
      // website: [null, [Validators.required]],
      // captcha: [null, [Validators.required]],
      agree: [false]
    });

    this.validateForm.controls.agree.valueChanges.subscribe((value: boolean) => {
      this.agreed = value;
    });
  }
}
