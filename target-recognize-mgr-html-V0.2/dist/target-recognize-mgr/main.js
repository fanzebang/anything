(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _pages_sso_sso_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/sso/sso.component */ "./src/app/pages/sso/sso.component.ts");





const routes = [
    { path: '', pathMatch: 'full', redirectTo: '/console/data-manage' },
    {
        path: 'console',
        loadChildren: () => Promise.all(/*! import() | pages-console-console-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-console-console-module")]).then(__webpack_require__.bind(null, /*! ./pages/console/console.module */ "./src/app/pages/console/console.module.ts")).then(m => m.ConsoleModule)
    },
    {
        path: 'login',
        loadChildren: () => Promise.all(/*! import() | pages-login-login-module */[__webpack_require__.e("default~data-manage-data-manage-module~data-mark-data-mark-module~data-statistics-data-statistics-mo~d6bdf3a7"), __webpack_require__.e("default~data-manage-data-manage-module~data-mark-data-mark-module~data-training-data-training-module~e662891d"), __webpack_require__.e("common"), __webpack_require__.e("pages-login-login-module")]).then(__webpack_require__.bind(null, /*! ./pages/login/login.module */ "./src/app/pages/login/login.module.ts")).then(m => m.LoginModule)
    },
    {
        path: 'sso', component: _pages_sso_sso_component__WEBPACK_IMPORTED_MODULE_2__["SsoComponent"]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _state_login_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state/login.action */ "./src/app/state/login.action.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");







var $;
class AppComponent {
    constructor(store, router, route, http) {
        this.store = store;
        this.router = router;
        this.route = route;
        this.http = http;
    }
    ngOnInit() {
        // const heard = location.search;
        // if (heard) {
        //   if (heard.concat('jwt')) {
        //     localStorage.setItem('Bearer', heard.split('=')[1]);
        //     this.store.dispatch(new LoginAction(heard.split('=')[1])).subscribe(() => {
        //       this.router.navigate(['/console/data-manage']);
        //     });
        //   }
        // }
        var heard = location.search;
        var access_token = heard.substring(1).split("=")[0];
        var pointLogin = heard.substring(1).split("=");
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
                    this.getUrlPath();
                }, 200);
            }
        }
        else if (access_token == 'access_token') {
            window.location.href = `${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API_URL}/v1/sso/welcome-mgr?access_token=${pointLogin[1]}`;
        }
        const jwt = localStorage.getItem('Bearer');
        if (jwt) {
            this.store.dispatch(new _state_login_action__WEBPACK_IMPORTED_MODULE_1__["LoginAction"](jwt));
        }
        document.oncontextmenu = function () { return false; };
    }
    getUrlPath() {
        this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API_URL}/v1/login/getUrlPath`).subscribe((loginResult) => {
            var data = JSON.stringify(loginResult);
            var str = JSON.parse(data);
            var sampleResourcePath = JSON.stringify(str.sampleResourcePath);
            sampleResourcePath = sampleResourcePath.substring(1, sampleResourcePath.length - 1);
            localStorage.setItem('sampleResourcePath', sampleResourcePath);
            this.store.dispatch(new _state_login_action__WEBPACK_IMPORTED_MODULE_1__["LoginAction"](localStorage.getItem('Bearer'))).subscribe(() => {
                this.router.navigate(['/console/data-manage']);
            });
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50Lmxlc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.less']
            }]
    }], function () { return [{ type: _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _icons_provider_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icons-provider.module */ "./src/app/icons-provider.module.ts");
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/layout */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-layout.js");
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/menu */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-menu.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/i18n */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-i18n.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/locales/zh */ "./node_modules/@angular/common/locales/zh.js");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _state_login_state__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./state/login.state */ "./src/app/state/login.state.ts");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _core_auth_interceptor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./core/auth.interceptor */ "./src/app/core/auth.interceptor.ts");
/* harmony import */ var _pages_sso_sso_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/sso/sso.component */ "./src/app/pages/sso/sso.component.ts");
/* harmony import */ var _state_rename_sample_oss_type_state__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./state/rename-sample-oss-type.state */ "./src/app/state/rename-sample-oss-type.state.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");






















Object(_angular_common__WEBPACK_IMPORTED_MODULE_10__["registerLocaleData"])(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_11___default.a);
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        {
            provide: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_9__["NZ_I18N"], useValue: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_9__["zh_CN"]
        },
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"], useClass: _core_auth_interceptor__WEBPACK_IMPORTED_MODULE_15__["AuthInterceptor"], multi: true
        }
    ], imports: [[
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _icons_provider_module__WEBPACK_IMPORTED_MODULE_4__["IconsProviderModule"],
            ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_5__["NzLayoutModule"],
            ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_6__["NzMenuModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
            _ngxs_store__WEBPACK_IMPORTED_MODULE_13__["NgxsModule"].forRoot([_state_login_state__WEBPACK_IMPORTED_MODULE_12__["LoginState"], _state_rename_sample_oss_type_state__WEBPACK_IMPORTED_MODULE_17__["RenameSampleOssTypeState"]], {
                developmentMode: !_environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].production
            }),
            _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _pages_sso_sso_component__WEBPACK_IMPORTED_MODULE_16__["SsoComponent"]], imports: [_app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _icons_provider_module__WEBPACK_IMPORTED_MODULE_4__["IconsProviderModule"],
        ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_5__["NzLayoutModule"],
        ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_6__["NzMenuModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"], _ngxs_store__WEBPACK_IMPORTED_MODULE_13__["ɵj"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _pages_sso_sso_component__WEBPACK_IMPORTED_MODULE_16__["SsoComponent"]
                ],
                imports: [
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _icons_provider_module__WEBPACK_IMPORTED_MODULE_4__["IconsProviderModule"],
                    ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_5__["NzLayoutModule"],
                    ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_6__["NzMenuModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                    _ngxs_store__WEBPACK_IMPORTED_MODULE_13__["NgxsModule"].forRoot([_state_login_state__WEBPACK_IMPORTED_MODULE_12__["LoginState"], _state_rename_sample_oss_type_state__WEBPACK_IMPORTED_MODULE_17__["RenameSampleOssTypeState"]], {
                        developmentMode: !_environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].production
                    }),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"],
                ],
                providers: [
                    {
                        provide: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_9__["NZ_I18N"], useValue: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_9__["zh_CN"]
                    },
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"], useClass: _core_auth_interceptor__WEBPACK_IMPORTED_MODULE_15__["AuthInterceptor"], multi: true
                    }
                ],
                exports: [],
                // providers: [{ provide: NZ_I18N, useValue: zh_CN }],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/core/auth.interceptor.ts":
/*!******************************************!*\
  !*** ./src/app/core/auth.interceptor.ts ***!
  \******************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _state_login_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../state/login.state */ "./src/app/state/login.state.ts");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");









class AuthInterceptor {
    constructor(router, route) {
        this.router = router;
        this.route = route;
        // debugger;
        this.jwt$.subscribe(loginStateModel => {
            this.jwt = loginStateModel.jwt;
        });
        this.route.queryParamMap.subscribe(paramMap => {
            if (paramMap.has('jwt')) {
                // const jwt = paramMap.get('jwt');
                localStorage.setItem('Bearer', paramMap.get('jwt'));
                // this.store.dispatch(new LoginAction(jwt)).subscribe(() => {
                //   this.router.navigate(['/console/data-manage']);
                // });
            }
        });
    }
    intercept(req, next) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        if (this.jwt) {
            // const authReq = req.clone({
            //   headers: req.headers.set('Authorization', 'Bearer ' + this.jwt).set('TR-Role', 'TR-User')
            // });
            // return this.doIntercept(authReq, next);
            headers = headers.append('Authorization', 'Bearer ' + this.jwt).append('TR-Role', 'TR-User');
        }
        else {
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
    doIntercept(req, next) {
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(err => {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"]) {
                switch (err.status) {
                    case 401:
                        localStorage.removeItem('Bearer');
                        this.jwt = null;
                        this.router.navigate(['/login']);
                        break;
                }
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(err);
        }));
    }
}
AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) { return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"])); };
AuthInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthInterceptor, factory: AuthInterceptor.ɵfac });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_6__["Select"])(_state_login_state__WEBPACK_IMPORTED_MODULE_5__["LoginState"])
], AuthInterceptor.prototype, "jwt$", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }]; }, { jwt$: [] }); })();


/***/ }),

/***/ "./src/app/icons-provider.module.ts":
/*!******************************************!*\
  !*** ./src/app/icons-provider.module.ts ***!
  \******************************************/
/*! exports provided: IconsProviderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconsProviderModule", function() { return IconsProviderModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/icon */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-icon.js");
/* harmony import */ var _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons-angular/icons */ "./node_modules/@ant-design/icons-angular/__ivy_ngcc__/fesm2015/ant-design-icons-angular-icons.js");




const icons = [_ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__["MenuFoldOutline"], _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__["MenuUnfoldOutline"], _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__["DashboardOutline"], _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__["FormOutline"]];
class IconsProviderModule {
}
IconsProviderModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: IconsProviderModule });
IconsProviderModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function IconsProviderModule_Factory(t) { return new (t || IconsProviderModule)(); }, providers: [
        { provide: ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_1__["NZ_ICONS"], useValue: icons }
    ], imports: [[ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_1__["NzIconModule"]], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_1__["NzIconModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](IconsProviderModule, { imports: [ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_1__["NzIconModule"]], exports: [ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_1__["NzIconModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IconsProviderModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_1__["NzIconModule"]],
                exports: [ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_1__["NzIconModule"]],
                providers: [
                    { provide: ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_1__["NZ_ICONS"], useValue: icons }
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/sso/sso.component.ts":
/*!********************************************!*\
  !*** ./src/app/pages/sso/sso.component.ts ***!
  \********************************************/
/*! exports provided: SsoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SsoComponent", function() { return SsoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _state_login_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../state/login.action */ "./src/app/state/login.action.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");





class SsoComponent {
    constructor(route, store, router) {
        this.route = route;
        this.store = store;
        this.router = router;
    }
    ngOnInit() {
        this.route.queryParamMap.subscribe(paramMap => {
            if (paramMap.has('jwt')) {
                const jwt = paramMap.get('jwt');
                localStorage.setItem('Bearer', jwt);
                this.store.dispatch(new _state_login_action__WEBPACK_IMPORTED_MODULE_1__["LoginAction"](jwt)).subscribe(() => {
                    this.router.navigate(['/console/data-manage']);
                });
            }
        });
        this.route.fragment.subscribe(fragments => {
            console.log('fragments is :', fragments.split("#"));
            var fragments1 = fragments.split("#");
            localStorage.setItem('sampleResourcePath', fragments1[1]);
            localStorage.setItem('Bearer', fragments1[0]);
            this.store.dispatch(new _state_login_action__WEBPACK_IMPORTED_MODULE_1__["LoginAction"](fragments1[0])).subscribe(() => {
                this.router.navigate(['/console/data-manage']);
            });
        });
    }
}
SsoComponent.ɵfac = function SsoComponent_Factory(t) { return new (t || SsoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
SsoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SsoComponent, selectors: [["ng-component"]], decls: 2, vars: 0, consts: [[2, "color", "white"]], template: function SsoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u767B\u5F55\u4E2D....");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SsoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                template: `
    <div style="color: white;">登录中....</div>`
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/state/login.action.ts":
/*!***************************************!*\
  !*** ./src/app/state/login.action.ts ***!
  \***************************************/
/*! exports provided: LoginAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginAction", function() { return LoginAction; });
class LoginAction {
    constructor(jwt) {
        this.jwt = jwt;
    }
}
LoginAction.type = '[User] Login';


/***/ }),

/***/ "./src/app/state/login.state.ts":
/*!**************************************!*\
  !*** ./src/app/state/login.state.ts ***!
  \**************************************/
/*! exports provided: LoginState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginState", function() { return LoginState; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var _login_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.action */ "./src/app/state/login.action.ts");





let LoginState = class LoginState {
    login(ctx, action) {
        const state = ctx.getState();
        ctx.setState(Object.assign(Object.assign({}, state), { jwt: action.jwt }));
    }
};
LoginState.ɵfac = function LoginState_Factory(t) { return new (t || LoginState)(); };
LoginState.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: LoginState, factory: LoginState.ɵfac });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Action"])(_login_action__WEBPACK_IMPORTED_MODULE_3__["LoginAction"])
], LoginState.prototype, "login", null);
LoginState = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["State"])({
        name: 'login',
        defaults: {
            jwt: ''
        }
    })
], LoginState);

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LoginState, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], null, { login: [] }); })();


/***/ }),

/***/ "./src/app/state/rename-sample-oss-type.action.ts":
/*!********************************************************!*\
  !*** ./src/app/state/rename-sample-oss-type.action.ts ***!
  \********************************************************/
/*! exports provided: RenameSampleOssTypeAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenameSampleOssTypeAction", function() { return RenameSampleOssTypeAction; });
class RenameSampleOssTypeAction {
    constructor(name) {
        this.name = name;
    }
}
RenameSampleOssTypeAction.type = '[SampleOssType] Rename';


/***/ }),

/***/ "./src/app/state/rename-sample-oss-type.state.ts":
/*!*******************************************************!*\
  !*** ./src/app/state/rename-sample-oss-type.state.ts ***!
  \*******************************************************/
/*! exports provided: RenameSampleOssTypeState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenameSampleOssTypeState", function() { return RenameSampleOssTypeState; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var _rename_sample_oss_type_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rename-sample-oss-type.action */ "./src/app/state/rename-sample-oss-type.action.ts");





let RenameSampleOssTypeState = class RenameSampleOssTypeState {
    rename(ctx, action) {
        const state = ctx.getState();
        ctx.setState(Object.assign(Object.assign({}, state), { name: action.name }));
    }
};
RenameSampleOssTypeState.ɵfac = function RenameSampleOssTypeState_Factory(t) { return new (t || RenameSampleOssTypeState)(); };
RenameSampleOssTypeState.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: RenameSampleOssTypeState, factory: RenameSampleOssTypeState.ɵfac });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Action"])(_rename_sample_oss_type_action__WEBPACK_IMPORTED_MODULE_3__["RenameSampleOssTypeAction"])
], RenameSampleOssTypeState.prototype, "rename", null);
RenameSampleOssTypeState = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["State"])({
        name: 'rename',
        defaults: {
            name: ''
        }
    })
], RenameSampleOssTypeState);

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RenameSampleOssTypeState, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], null, { rename: [] }); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    API_URL: '/api'
};
// export const environment = {
//   production: false,
// //  API_URL: 'http://192.168.0.228:8083',
//    API_URL: 'http://microismile.cn:8083',
//   OSS_URL: 'http://microismile.cn:9000/sample-resource',
// };
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\ff\target-recognize-mgr-html-V0.2\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map