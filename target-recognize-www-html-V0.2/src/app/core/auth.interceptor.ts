import {Injectable} from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import {observable, Observable, Subject, throwError} from 'rxjs';
import {Router} from '@angular/router';
import {catchError} from 'rxjs/operators';
import {LoginState, LoginStateModel} from '../state/login.state';
import {Select} from '@ngxs/store';
import {LoginAction} from "../state/login.action";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  jwt: string;
  @Select(LoginState) jwt$: Observable<LoginStateModel>;

  constructor(private router: Router) {
    this.jwt$.subscribe(loginStateModel => {
      this.jwt = loginStateModel.jwt;
    });
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {


    let headers = new HttpHeaders();
    if (this.jwt) {
      // const authReq = req.clone({
      //   headers: req.headers.set('Authorization', 'Bearer ' + this.jwt).set('TR-Role', 'TR-User')
      // });
      // return this.doIntercept(authReq, next);

      headers = headers.append('Authorization', 'Bearer ' + this.jwt).append('TR-Role', 'TR-User');
    } else {
      headers = headers.append('TR-Role', 'TR-Anonymous');
    }

    const cloneReq = req.clone({
      headers
    });

    // const reqHeaders = cloneReq.headers;
    // const keys = reqHeaders.keys();
    // console.log('keys is :', keys);
    // keys.forEach(k => {
    //   console.log(`k = ${k}, value = ${reqHeaders.get(k)}`);
    // });

    return this.doIntercept(cloneReq, next);
  }

  doIntercept(req: HttpRequest<any>, next: HttpHandler): any {
    const heard = location.search;
    // const access_token = heard.substring(1).split("=")[0]
    // let pointLogin = heard.substring(1).split("=")
    return next.handle(req).pipe(catchError(err => {
      if (err instanceof HttpErrorResponse) {
        switch ((err as HttpErrorResponse).status) {
          case 401:
             localStorage.removeItem("Bearer");
            this.jwt = null;

             this.router.navigate(['/login']);
            break;
        }
      }
      return throwError(err);
    }));
  }
  // doIntercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  //   console.log(req)
  //   return next.handle(req).pipe(catchError(err => {
  //     if (err instanceof HttpErrorResponse) {
  //       switch ((err as HttpErrorResponse).status) {
  //         case 401:
  //           localStorage.removeItem("Bearer");
  //           this.jwt = null;

  //           this.router.navigate(['/login']);
  //           break;
  //       }
  //     }
  //     return throwError(err);
  //   }));
  // }
}
