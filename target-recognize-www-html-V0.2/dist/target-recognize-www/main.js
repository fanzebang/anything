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
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_detect_detect_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/detect/detect.component */ "./src/app/pages/detect/detect.component.ts");
/* harmony import */ var _pages_sso_sso_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/sso/sso.component */ "./src/app/pages/sso/sso.component.ts");
/* harmony import */ var _pages_video_video_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/video/video.component */ "./src/app/pages/video/video.component.ts");
/* harmony import */ var _pages_show_model_model_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/show/model/model.component */ "./src/app/pages/show/model/model.component.ts");
/* harmony import */ var _pages_show_target_target_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/show/target/target.component */ "./src/app/pages/show/target/target.component.ts");
/* harmony import */ var _pages_show_target1_target1_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/show/target1/target1.component */ "./src/app/pages/show/target1/target1.component.ts");
/* harmony import */ var _pages_show_target2_target2_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/show/target2/target2.component */ "./src/app/pages/show/target2/target2.component.ts");
/* harmony import */ var _pages_news_news_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/news/news.component */ "./src/app/pages/news/news.component.ts");
/* harmony import */ var _pages_home2_home2_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/home2/home2.component */ "./src/app/pages/home2/home2.component.ts");
/* harmony import */ var _pages_detect2_detect2_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/detect2/detect2.component */ "./src/app/pages/detect2/detect2.component.ts");















const routes = [
    {
        path: 'login', loadChildren: () => Promise.all(/*! import() | pages-login-login-module */[__webpack_require__.e("default~pages-login-login-module~pages-sign-up-sign-up-module"), __webpack_require__.e("pages-login-login-module")]).then(__webpack_require__.bind(null, /*! ./pages/login/login.module */ "./src/app/pages/login/login.module.ts")).then(m => m.LoginModule)
    },
    {
        path: 'sign-up', loadChildren: () => Promise.all(/*! import() | pages-sign-up-sign-up-module */[__webpack_require__.e("default~pages-login-login-module~pages-sign-up-sign-up-module"), __webpack_require__.e("pages-sign-up-sign-up-module")]).then(__webpack_require__.bind(null, /*! ./pages/sign-up/sign-up.module */ "./src/app/pages/sign-up/sign-up.module.ts")).then(m => m.SignUpModule)
    },
    {
        path: 'home', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    },
    {
        path: 'detect', component: _pages_detect_detect_component__WEBPACK_IMPORTED_MODULE_3__["DetectComponent"]
    },
    {
        path: 'home2', component: _pages_home2_home2_component__WEBPACK_IMPORTED_MODULE_11__["Home2Component"]
    },
    {
        path: 'detect2', component: _pages_detect2_detect2_component__WEBPACK_IMPORTED_MODULE_12__["Detect2Component"]
    },
    {
        path: '', redirectTo: 'home', pathMatch: 'full'
    },
    {
        path: 'sso', component: _pages_sso_sso_component__WEBPACK_IMPORTED_MODULE_4__["SsoComponent"]
    },
    {
        path: 'video', component: _pages_video_video_component__WEBPACK_IMPORTED_MODULE_5__["VideoComponent"]
    },
    {
        path: 'target', component: _pages_show_target_target_component__WEBPACK_IMPORTED_MODULE_7__["TargetComponent"]
    },
    {
        path: 'target1', component: _pages_show_target1_target1_component__WEBPACK_IMPORTED_MODULE_8__["Target1Component"]
    },
    {
        path: 'target2', component: _pages_show_target2_target2_component__WEBPACK_IMPORTED_MODULE_9__["Target2Component"]
    },
    {
        path: 'model', component: _pages_show_model_model_component__WEBPACK_IMPORTED_MODULE_6__["ModelComponent"]
    },
    {
        path: 'news', component: _pages_news_news_component__WEBPACK_IMPORTED_MODULE_10__["NewsComponent"]
    }
];
class AppRoutingModule {
}
AppRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppRoutingModule, [{
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
/* harmony import */ var _state_recognize_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./state/recognize.action */ "./src/app/state/recognize.action.ts");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var _core_websocket_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/websocket.service */ "./src/app/core/websocket.service.ts");
/* harmony import */ var _ffdec_wasm_loader_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ffdec-wasm-loader.service */ "./src/app/ffdec-wasm-loader.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");











// private cs: CommunicateService
class AppComponent {
    constructor(store, ws, ffdecWasmLoaderService, router, route, http) {
        this.store = store;
        this.ws = ws;
        this.ffdecWasmLoaderService = ffdecWasmLoaderService;
        this.router = router;
        this.route = route;
        this.http = http;
        this.ffdecWasmLoaderService.load();
        axios__WEBPACK_IMPORTED_MODULE_4___default.a.interceptors.response.use(response => {
            return response;
        }, (error) => {
            if (error.response.status == 401) {
                this.router.navigate(['/login']);
            }
            return Promise.resolve(error.response);
        });
    }
    ngOnInit() {
        var heard = location.search;
        var access_token = heard.substring(1).split("=")[0];
        var pointLogin = heard.substring(1).split("=");
        if (heard && access_token != 'access_token') {
            if (heard.concat('jwt')) {
                let Bearer = heard.split('=')[1];
                localStorage.setItem('Bearer', Bearer);
                setTimeout(() => {
                    this.getUrlPath();
                }, 200);
            }
        }
        else if (access_token == 'access_token') {
            window.location.href = `${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API_URL}/v1/sso/welcome-detect?access_token=${pointLogin[1]}`;
        }
        const jwt = localStorage.getItem('Bearer');
        if (jwt) {
            this.store.dispatch(new _state_login_action__WEBPACK_IMPORTED_MODULE_1__["LoginAction"](jwt));
        }
        this.ws.connect(`${localStorage.getItem("wsPath")}/v1/detect-socket`).subscribe((data) => {
            console.log('data is :', JSON.parse(data));
            let data1 = JSON.parse(data);
            try {
                data1.borderShow = window.location.pathname.split(";")[2].split("=")[1];
            }
            catch (e) {
            }
            this.store.dispatch(new _state_recognize_action__WEBPACK_IMPORTED_MODULE_3__["RecognizeAction"](JSON.stringify(data1)));
        });
    }
    getUrlPath() {
        this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API_URL}/v1/login/getUrlPath`).subscribe((loginResult) => {
            // if (HttpResult.succeed(loginResult.code)) {
            var data = JSON.stringify(loginResult);
            var str = JSON.parse(data);
            var mgrPath = JSON.stringify(str.mgrPath);
            mgrPath = mgrPath.substring(1, mgrPath.length - 1);
            var dataCountHeaderPath = JSON.stringify(str.mgrPath);
            dataCountHeaderPath = dataCountHeaderPath.substring(1, dataCountHeaderPath.length - 5);
            var sampleResourcePath = JSON.stringify(str.sampleResourcePath);
            sampleResourcePath = sampleResourcePath.substring(1, sampleResourcePath.length - 1);
            var targetRecognizePath = JSON.stringify(str.targetRecognizePath);
            targetRecognizePath = targetRecognizePath.substring(1, targetRecognizePath.length - 1);
            var wsPath = JSON.stringify(str.wsPath);
            wsPath = wsPath.substring(1, wsPath.length - 1);
            var sfUrl = JSON.stringify(str.sfUrl);
            sfUrl = sfUrl.substring(1, sfUrl.length - 1);
            localStorage.setItem('mgrPath', mgrPath);
            localStorage.setItem('dataCountHeaderPath', dataCountHeaderPath);
            localStorage.setItem('sampleResourcePath', sampleResourcePath);
            localStorage.setItem('targetRecognizePath', targetRecognizePath);
            localStorage.setItem('wsPath', wsPath);
            localStorage.setItem('sfUrl', sfUrl);
            localStorage.setItem('homeLink', 'www.baidu.com');
            this.store.dispatch(new _state_login_action__WEBPACK_IMPORTED_MODULE_1__["LoginAction"](localStorage.getItem('Bearer'))).subscribe(() => {
                this.router.navigate(['/home']);
            });
        });
    }
}
AppComponent.??fac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_core_websocket_service__WEBPACK_IMPORTED_MODULE_6__["WebsocketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ffdec_wasm_loader_service__WEBPACK_IMPORTED_MODULE_7__["FfdecWasmLoaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"])); };
AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9hcHAvYXBwLmNvbXBvbmVudC5sZXNzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.less']
            }]
    }], function () { return [{ type: _ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"] }, { type: _core_websocket_service__WEBPACK_IMPORTED_MODULE_6__["WebsocketService"] }, { type: _ffdec_wasm_loader_service__WEBPACK_IMPORTED_MODULE_7__["FfdecWasmLoaderService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"] }]; }, null); })();


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
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_detect_detect_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/detect/detect.component */ "./src/app/pages/detect/detect.component.ts");
/* harmony import */ var _pages_detect_personage_personage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/detect/personage/personage.component */ "./src/app/pages/detect/personage/personage.component.ts");
/* harmony import */ var _pages_detect_warship_warship_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/detect/warship/warship.component */ "./src/app/pages/detect/warship/warship.component.ts");
/* harmony import */ var _pages_detect_jet_jet_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/detect/jet/jet.component */ "./src/app/pages/detect/jet/jet.component.ts");
/* harmony import */ var _state_login_state__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./state/login.state */ "./src/app/state/login.state.ts");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/i18n */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-i18n.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _core_auth_interceptor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./core/auth.interceptor */ "./src/app/core/auth.interceptor.ts");
/* harmony import */ var _icons_provider_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./icons-provider.module */ "./src/app/icons-provider.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _directives_drag_drop_upload_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./directives/drag-drop-upload.directive */ "./src/app/directives/drag-drop-upload.directive.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd.js");
/* harmony import */ var _state_detect_state__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./state/detect.state */ "./src/app/state/detect.state.ts");
/* harmony import */ var _core_websocket_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./core/websocket.service */ "./src/app/core/websocket.service.ts");
/* harmony import */ var _app_pipes__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./app.pipes */ "./src/app/app.pipes.ts");
/* harmony import */ var _state_recognize_state__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./state/recognize.state */ "./src/app/state/recognize.state.ts");
/* harmony import */ var _state_video_state__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./state/video.state */ "./src/app/state/video.state.ts");
/* harmony import */ var _ffdec_wasm_loader_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./ffdec-wasm-loader.service */ "./src/app/ffdec-wasm-loader.service.ts");
/* harmony import */ var _video_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./video.service */ "./src/app/video.service.ts");
/* harmony import */ var _pages_detect_video_canvas_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./pages/detect/video-canvas.component */ "./src/app/pages/detect/video-canvas.component.ts");
/* harmony import */ var _pages_sso_sso_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./pages/sso/sso.component */ "./src/app/pages/sso/sso.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _pages_video_video_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./pages/video/video.component */ "./src/app/pages/video/video.component.ts");
/* harmony import */ var _pages_video_video_list_video_list_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./pages/video/video-list/video-list.component */ "./src/app/pages/video/video-list/video-list.component.ts");
/* harmony import */ var _pages_video_accordion_accordion_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./pages/video/accordion/accordion.component */ "./src/app/pages/video/accordion/accordion.component.ts");
/* harmony import */ var ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ng-zorro-antd/collapse */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-collapse.js");
/* harmony import */ var _pages_video_keyobject_keyobject_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./pages/video/keyobject/keyobject.component */ "./src/app/pages/video/keyobject/keyobject.component.ts");
/* harmony import */ var _pages_video_label_label_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./pages/video/label/label.component */ "./src/app/pages/video/label/label.component.ts");
/* harmony import */ var _pages_video_chart_chart_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./pages/video/chart/chart.component */ "./src/app/pages/video/chart/chart.component.ts");
/* harmony import */ var _pages_show_model_model_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./pages/show/model/model.component */ "./src/app/pages/show/model/model.component.ts");
/* harmony import */ var _pages_show_target_target_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./pages/show/target/target.component */ "./src/app/pages/show/target/target.component.ts");
/* harmony import */ var _pages_show_target2_target2_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./pages/show/target2/target2.component */ "./src/app/pages/show/target2/target2.component.ts");
/* harmony import */ var _pages_show_service_service__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./pages/show/service.service */ "./src/app/pages/show/service.service.ts");
/* harmony import */ var ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ng-zorro-antd/tabs */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-tabs.js");
/* harmony import */ var _pages_show_target2_obj_obj_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./pages/show/target2/obj/obj.component */ "./src/app/pages/show/target2/obj/obj.component.ts");
/* harmony import */ var _pages_show_target2_world_world_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./pages/show/target2/world/world.component */ "./src/app/pages/show/target2/world/world.component.ts");
/* harmony import */ var _pages_show_target2_key_key_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./pages/show/target2/key/key.component */ "./src/app/pages/show/target2/key/key.component.ts");
/* harmony import */ var _pages_show_target2_sence_sence_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./pages/show/target2/sence/sence.component */ "./src/app/pages/show/target2/sence/sence.component.ts");
/* harmony import */ var _pages_show_target2_time_time_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./pages/show/target2/time/time.component */ "./src/app/pages/show/target2/time/time.component.ts");
/* harmony import */ var _pages_show_target2_target2_label_target2_label_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./pages/show/target2/target2-label/target2-label.component */ "./src/app/pages/show/target2/target2-label/target2-label.component.ts");
/* harmony import */ var _pages_show_target1_target1_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./pages/show/target1/target1.component */ "./src/app/pages/show/target1/target1.component.ts");
/* harmony import */ var ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ng-zorro-antd/progress */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-progress.js");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ng-zorro-antd/input */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-input.js");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ng-zorro-antd/grid */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-grid.js");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ng-zorro-antd/button */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-button.js");
/* harmony import */ var _pages_news_news_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./pages/news/news.component */ "./src/app/pages/news/news.component.ts");
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ng-zorro-antd/radio */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-radio.js");
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ng-zorro-antd/select */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-select.js");
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ng-zorro-antd/table */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-table.js");
/* harmony import */ var ng_zorro_antd_pagination__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ng-zorro-antd/pagination */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-pagination.js");
/* harmony import */ var _pages_home2_home2_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./pages/home2/home2.component */ "./src/app/pages/home2/home2.component.ts");
/* harmony import */ var _pages_detect2_detect2_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./pages/detect2/detect2.component */ "./src/app/pages/detect2/detect2.component.ts");






























































class AppModule {
}
AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        {
            provide: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_12__["NZ_I18N"], useValue: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_12__["zh_CN"]
        },
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HTTP_INTERCEPTORS"], useClass: _core_auth_interceptor__WEBPACK_IMPORTED_MODULE_14__["AuthInterceptor"], multi: true
        },
        _core_websocket_service__WEBPACK_IMPORTED_MODULE_20__["WebsocketService"], _ffdec_wasm_loader_service__WEBPACK_IMPORTED_MODULE_24__["FfdecWasmLoaderService"], _video_service__WEBPACK_IMPORTED_MODULE_25__["VideoService"],
        _app_pipes__WEBPACK_IMPORTED_MODULE_21__["OssPathPipe"], _pages_show_service_service__WEBPACK_IMPORTED_MODULE_39__["ServiceService"], _app_pipes__WEBPACK_IMPORTED_MODULE_21__["VideoInfoPipe"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _icons_provider_module__WEBPACK_IMPORTED_MODULE_15__["IconsProviderModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["BrowserAnimationsModule"],
            _ngxs_store__WEBPACK_IMPORTED_MODULE_10__["NgxsModule"].forRoot([_state_login_state__WEBPACK_IMPORTED_MODULE_9__["LoginState"], _state_detect_state__WEBPACK_IMPORTED_MODULE_19__["DetectState"], _state_recognize_state__WEBPACK_IMPORTED_MODULE_22__["RecognizeState"], _state_video_state__WEBPACK_IMPORTED_MODULE_23__["VideoState"]], {
                developmentMode: !_environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].production
            }),
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_18__["NzSpinModule"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_54__["NzSelectModule"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_55__["NzTableModule"], ng_zorro_antd_pagination__WEBPACK_IMPORTED_MODULE_56__["NzPaginationModule"], ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_53__["NzRadioModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_18__["NzMessageModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_18__["NzModalModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_28__["FormsModule"], ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_32__["NzCollapseModule"], ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_40__["NzTabsModule"], ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_48__["NzProgressModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_28__["ReactiveFormsModule"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_49__["NzInputModule"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_50__["NzGridModule"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_51__["NzButtonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _pages_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], _pages_detect_detect_component__WEBPACK_IMPORTED_MODULE_5__["DetectComponent"], _pages_detect_personage_personage_component__WEBPACK_IMPORTED_MODULE_6__["PersonageComponent"], _pages_detect_warship_warship_component__WEBPACK_IMPORTED_MODULE_7__["WarshipComponent"], _pages_detect_jet_jet_component__WEBPACK_IMPORTED_MODULE_8__["JetComponent"], _pages_sso_sso_component__WEBPACK_IMPORTED_MODULE_27__["SsoComponent"],
        _directives_drag_drop_upload_directive__WEBPACK_IMPORTED_MODULE_17__["DragDropUploadDirective"], _app_pipes__WEBPACK_IMPORTED_MODULE_21__["OssPathPipe"], _app_pipes__WEBPACK_IMPORTED_MODULE_21__["SceneTypePipe"], _app_pipes__WEBPACK_IMPORTED_MODULE_21__["SafePipe"], _pages_detect_video_canvas_component__WEBPACK_IMPORTED_MODULE_26__["VideoCanvasComponent"], _app_pipes__WEBPACK_IMPORTED_MODULE_21__["SampleOssPathPipe"], _app_pipes__WEBPACK_IMPORTED_MODULE_21__["AdminUrlPipe"], _app_pipes__WEBPACK_IMPORTED_MODULE_21__["VideoInfoPipe"], _pages_video_video_component__WEBPACK_IMPORTED_MODULE_29__["VideoComponent"], _pages_video_video_list_video_list_component__WEBPACK_IMPORTED_MODULE_30__["VideoListComponent"], _pages_video_accordion_accordion_component__WEBPACK_IMPORTED_MODULE_31__["AccordionComponent"], _pages_video_keyobject_keyobject_component__WEBPACK_IMPORTED_MODULE_33__["KeyobjectComponent"], _pages_video_label_label_component__WEBPACK_IMPORTED_MODULE_34__["LabelComponent"], _pages_video_chart_chart_component__WEBPACK_IMPORTED_MODULE_35__["ChartComponent"], _pages_show_model_model_component__WEBPACK_IMPORTED_MODULE_36__["ModelComponent"], _pages_show_target_target_component__WEBPACK_IMPORTED_MODULE_37__["TargetComponent"], _pages_show_target2_target2_component__WEBPACK_IMPORTED_MODULE_38__["Target2Component"], _pages_show_target2_obj_obj_component__WEBPACK_IMPORTED_MODULE_41__["ObjComponent"], _pages_show_target2_world_world_component__WEBPACK_IMPORTED_MODULE_42__["WorldComponent"], _pages_show_target2_key_key_component__WEBPACK_IMPORTED_MODULE_43__["KeyComponent"], _pages_show_target2_sence_sence_component__WEBPACK_IMPORTED_MODULE_44__["SenceComponent"], _pages_show_target2_time_time_component__WEBPACK_IMPORTED_MODULE_45__["TimeComponent"], _pages_show_target2_target2_label_target2_label_component__WEBPACK_IMPORTED_MODULE_46__["Target2LabelComponent"], _pages_show_target1_target1_component__WEBPACK_IMPORTED_MODULE_47__["Target1Component"], _pages_news_news_component__WEBPACK_IMPORTED_MODULE_52__["NewsComponent"], _pages_home2_home2_component__WEBPACK_IMPORTED_MODULE_57__["Home2Component"], _pages_detect2_detect2_component__WEBPACK_IMPORTED_MODULE_58__["Detect2Component"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _icons_provider_module__WEBPACK_IMPORTED_MODULE_15__["IconsProviderModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["BrowserAnimationsModule"], _ngxs_store__WEBPACK_IMPORTED_MODULE_10__["??j"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_18__["NzSpinModule"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_54__["NzSelectModule"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_55__["NzTableModule"], ng_zorro_antd_pagination__WEBPACK_IMPORTED_MODULE_56__["NzPaginationModule"], ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_53__["NzRadioModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_18__["NzMessageModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_18__["NzModalModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_28__["FormsModule"], ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_32__["NzCollapseModule"], ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_40__["NzTabsModule"], ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_48__["NzProgressModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_28__["ReactiveFormsModule"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_49__["NzInputModule"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_50__["NzGridModule"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_51__["NzButtonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _pages_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], _pages_detect_detect_component__WEBPACK_IMPORTED_MODULE_5__["DetectComponent"], _pages_detect_personage_personage_component__WEBPACK_IMPORTED_MODULE_6__["PersonageComponent"], _pages_detect_warship_warship_component__WEBPACK_IMPORTED_MODULE_7__["WarshipComponent"], _pages_detect_jet_jet_component__WEBPACK_IMPORTED_MODULE_8__["JetComponent"], _pages_sso_sso_component__WEBPACK_IMPORTED_MODULE_27__["SsoComponent"],
                    _directives_drag_drop_upload_directive__WEBPACK_IMPORTED_MODULE_17__["DragDropUploadDirective"], _app_pipes__WEBPACK_IMPORTED_MODULE_21__["OssPathPipe"], _app_pipes__WEBPACK_IMPORTED_MODULE_21__["SceneTypePipe"], _app_pipes__WEBPACK_IMPORTED_MODULE_21__["SafePipe"], _pages_detect_video_canvas_component__WEBPACK_IMPORTED_MODULE_26__["VideoCanvasComponent"], _app_pipes__WEBPACK_IMPORTED_MODULE_21__["SampleOssPathPipe"], _app_pipes__WEBPACK_IMPORTED_MODULE_21__["AdminUrlPipe"], _app_pipes__WEBPACK_IMPORTED_MODULE_21__["VideoInfoPipe"], _pages_video_video_component__WEBPACK_IMPORTED_MODULE_29__["VideoComponent"], _pages_video_video_list_video_list_component__WEBPACK_IMPORTED_MODULE_30__["VideoListComponent"], _pages_video_accordion_accordion_component__WEBPACK_IMPORTED_MODULE_31__["AccordionComponent"], _pages_video_keyobject_keyobject_component__WEBPACK_IMPORTED_MODULE_33__["KeyobjectComponent"], _pages_video_label_label_component__WEBPACK_IMPORTED_MODULE_34__["LabelComponent"], _pages_video_chart_chart_component__WEBPACK_IMPORTED_MODULE_35__["ChartComponent"], _pages_show_model_model_component__WEBPACK_IMPORTED_MODULE_36__["ModelComponent"], _pages_show_target_target_component__WEBPACK_IMPORTED_MODULE_37__["TargetComponent"], _pages_show_target2_target2_component__WEBPACK_IMPORTED_MODULE_38__["Target2Component"], _pages_show_target2_obj_obj_component__WEBPACK_IMPORTED_MODULE_41__["ObjComponent"], _pages_show_target2_world_world_component__WEBPACK_IMPORTED_MODULE_42__["WorldComponent"], _pages_show_target2_key_key_component__WEBPACK_IMPORTED_MODULE_43__["KeyComponent"], _pages_show_target2_sence_sence_component__WEBPACK_IMPORTED_MODULE_44__["SenceComponent"], _pages_show_target2_time_time_component__WEBPACK_IMPORTED_MODULE_45__["TimeComponent"], _pages_show_target2_target2_label_target2_label_component__WEBPACK_IMPORTED_MODULE_46__["Target2LabelComponent"], _pages_show_target1_target1_component__WEBPACK_IMPORTED_MODULE_47__["Target1Component"], _pages_news_news_component__WEBPACK_IMPORTED_MODULE_52__["NewsComponent"], _pages_home2_home2_component__WEBPACK_IMPORTED_MODULE_57__["Home2Component"], _pages_detect2_detect2_component__WEBPACK_IMPORTED_MODULE_58__["Detect2Component"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _icons_provider_module__WEBPACK_IMPORTED_MODULE_15__["IconsProviderModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["BrowserAnimationsModule"],
                    _ngxs_store__WEBPACK_IMPORTED_MODULE_10__["NgxsModule"].forRoot([_state_login_state__WEBPACK_IMPORTED_MODULE_9__["LoginState"], _state_detect_state__WEBPACK_IMPORTED_MODULE_19__["DetectState"], _state_recognize_state__WEBPACK_IMPORTED_MODULE_22__["RecognizeState"], _state_video_state__WEBPACK_IMPORTED_MODULE_23__["VideoState"]], {
                        developmentMode: !_environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].production
                    }),
                    ng_zorro_antd__WEBPACK_IMPORTED_MODULE_18__["NzSpinModule"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_54__["NzSelectModule"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_55__["NzTableModule"], ng_zorro_antd_pagination__WEBPACK_IMPORTED_MODULE_56__["NzPaginationModule"], ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_53__["NzRadioModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_18__["NzMessageModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_18__["NzModalModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_28__["FormsModule"], ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_32__["NzCollapseModule"], ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_40__["NzTabsModule"], ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_48__["NzProgressModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_28__["ReactiveFormsModule"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_49__["NzInputModule"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_50__["NzGridModule"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_51__["NzButtonModule"]
                ],
                providers: [
                    {
                        provide: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_12__["NZ_I18N"], useValue: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_12__["zh_CN"]
                    },
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HTTP_INTERCEPTORS"], useClass: _core_auth_interceptor__WEBPACK_IMPORTED_MODULE_14__["AuthInterceptor"], multi: true
                    },
                    _core_websocket_service__WEBPACK_IMPORTED_MODULE_20__["WebsocketService"], _ffdec_wasm_loader_service__WEBPACK_IMPORTED_MODULE_24__["FfdecWasmLoaderService"], _video_service__WEBPACK_IMPORTED_MODULE_25__["VideoService"],
                    _app_pipes__WEBPACK_IMPORTED_MODULE_21__["OssPathPipe"], _pages_show_service_service__WEBPACK_IMPORTED_MODULE_39__["ServiceService"], _app_pipes__WEBPACK_IMPORTED_MODULE_21__["VideoInfoPipe"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.pipes.ts":
/*!******************************!*\
  !*** ./src/app/app.pipes.ts ***!
  \******************************/
/*! exports provided: OssPathPipe, SampleOssPathPipe, SceneTypePipe, SafePipe, AdminUrlPipe, VideoInfoPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OssPathPipe", function() { return OssPathPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SampleOssPathPipe", function() { return SampleOssPathPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SceneTypePipe", function() { return SceneTypePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafePipe", function() { return SafePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminUrlPipe", function() { return AdminUrlPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoInfoPipe", function() { return VideoInfoPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");



class OssPathPipe {
    transform(ossKey) {
        return `${localStorage.getItem('targetRecognizePath')}/` + ossKey;
    }
}
OssPathPipe.??fac = function OssPathPipe_Factory(t) { return new (t || OssPathPipe)(); };
OssPathPipe.??pipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????definePipe"]({ name: "ossPath", type: OssPathPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](OssPathPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'ossPath' }]
    }], null, null); })();
class SampleOssPathPipe {
    transform(ossKey) {
        return `${localStorage.getItem('sampleResourcePath')}/` + ossKey;
    }
}
SampleOssPathPipe.??fac = function SampleOssPathPipe_Factory(t) { return new (t || SampleOssPathPipe)(); };
SampleOssPathPipe.??pipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????definePipe"]({ name: "sampleOssPath", type: SampleOssPathPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](SampleOssPathPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'sampleOssPath' }]
    }], null, null); })();
class SceneTypePipe {
    transform(sceneType) {
        switch (sceneType) {
            case '0':
                return '?????????';
            case '1':
                return '??????';
            case '2':
                return 'SAR';
            case '3':
                return '??????';
        }
        return '??????';
    }
}
SceneTypePipe.??fac = function SceneTypePipe_Factory(t) { return new (t || SceneTypePipe)(); };
SceneTypePipe.??pipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????definePipe"]({ name: "sceneType", type: SceneTypePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](SceneTypePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'sceneType' }]
    }], null, null); })();
class SafePipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
}
SafePipe.??fac = function SafePipe_Factory(t) { return new (t || SafePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"])); };
SafePipe.??pipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????definePipe"]({ name: "safe", type: SafePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](SafePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'safe' }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"] }]; }, null); })();
class AdminUrlPipe {
    transform(url) {
        const bearer = localStorage.getItem("Bearer");
        const sampleResourcePath = localStorage.getItem("sampleResourcePath");
        const targetRecognizePath = localStorage.getItem("targetRecognizePath");
        return `${localStorage.getItem("mgrPath")}#${bearer}#${sampleResourcePath}#${targetRecognizePath}`;
    }
}
AdminUrlPipe.??fac = function AdminUrlPipe_Factory(t) { return new (t || AdminUrlPipe)(); };
AdminUrlPipe.??pipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????definePipe"]({ name: "adminUrl", type: AdminUrlPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AdminUrlPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'adminUrl' }]
    }], null, null); })();
class VideoInfoPipe {
    transform(videoInfo) {
        return `${videoInfo.ext2}--${videoInfo.ext4} -- ${videoInfo.ext5}`;
    }
}
VideoInfoPipe.??fac = function VideoInfoPipe_Factory(t) { return new (t || VideoInfoPipe)(); };
VideoInfoPipe.??pipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????definePipe"]({ name: "videoInfo", type: VideoInfoPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](VideoInfoPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'videoInfo' }]
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
    constructor(router) {
        this.router = router;
        this.jwt$.subscribe(loginStateModel => {
            this.jwt = loginStateModel.jwt;
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
        const heard = location.search;
        // const access_token = heard.substring(1).split("=")[0]
        // let pointLogin = heard.substring(1).split("=")
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(err => {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"]) {
                switch (err.status) {
                    case 401:
                        localStorage.removeItem("Bearer");
                        this.jwt = null;
                        this.router.navigate(['/login']);
                        break;
                }
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(err);
        }));
    }
}
AuthInterceptor.??fac = function AuthInterceptor_Factory(t) { return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"])); };
AuthInterceptor.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"]({ token: AuthInterceptor, factory: AuthInterceptor.??fac });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_6__["Select"])(_state_login_state__WEBPACK_IMPORTED_MODULE_5__["LoginState"])
], AuthInterceptor.prototype, "jwt$", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](AuthInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }]; }, { jwt$: [] }); })();


/***/ }),

/***/ "./src/app/core/http-entity.ts":
/*!*************************************!*\
  !*** ./src/app/core/http-entity.ts ***!
  \*************************************/
/*! exports provided: HttpResult, User, DetectHistory, VideoFrame, Kms */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpResult", function() { return HttpResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetectHistory", function() { return DetectHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoFrame", function() { return VideoFrame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Kms", function() { return Kms; });
class HttpResult {
    static succeed(code) {
        return code === 1;
    }
}
class User {
}
class DetectHistory {
    constructor() {
        this.piecesOssKey = [];
    }
}
class VideoFrame {
    constructor(dataURL, detectHistory, frameWidth, frameHeight, x, y) {
        this.dataURL = dataURL;
        this.detectHistory = detectHistory;
        this.frameWidth = frameWidth;
        this.frameHeight = frameHeight;
        this.x = x;
        this.y = y;
    }
}
class Kms {
}


/***/ }),

/***/ "./src/app/core/websocket.service.ts":
/*!*******************************************!*\
  !*** ./src/app/core/websocket.service.ts ***!
  \*******************************************/
/*! exports provided: WebsocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsocketService", function() { return WebsocketService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




class WebsocketService {
    constructor() {
        this.period = 60 * 1000 * 10; // 10??????????????????
        this.connectSuccess = false;
        this.reconnectFlag = false;
        this.reconnectPeriod = 5 * 1000; // ????????????,???5??????????????????
        this.runTimePeriod = 60 * 10000; // ????????????????????????
        this.messageSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        console.log('??????????????????');
        this.heartCheckStart();
    }
    /**
     * ??????????????????
     */
    heartCheckStart() {
        this.serverTimeoutSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(this.period).subscribe((val) => {
            if (this.websocket !== null && this.websocket.readyState === 1) {
                console.log(val, '???????????????????????????????????????');
            }
            else {
                // ????????????
                this.heartCheckStop();
                // ????????????
                this.reconnect();
                console.log('??????????????????????????????');
            }
        });
    }
    /**
     * ??????????????????
     */
    heartCheckStop() {
        if (this.serverTimeoutSubscription !== undefined && this.serverTimeoutSubscription !== null) {
            this.serverTimeoutSubscription.unsubscribe();
        }
    }
    /**
     * ??????????????????
     */
    reconnect() {
        // ???????????????,?????????return,??????????????????
        if (this.connectSuccess) {
            this.stopReconnect();
            console.log('?????????????????????????????????');
            return;
        }
        // ?????????????????????,?????????return,??????????????????????????????
        if (this.reconnectFlag) {
            console.log('????????????,????????????');
            return;
        }
        // ????????????
        this.reconnectFlag = true;
        //  ????????????????????????,???????????????
        this.reconnectSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(this.reconnectPeriod).subscribe((val) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(`??????:${val}???`);
            const url = this.url;
            // ????????????
            this.connect(url);
        }));
    }
    /**
     * ????????????
     */
    stopReconnect() {
        // ??????????????????false
        this.reconnectFlag = false;
        // ????????????
        if (this.reconnectSubscription !== undefined && this.reconnectSubscription !== null) {
            this.reconnectSubscription.unsubscribe();
        }
    }
    /**
     * ???????????????
     * @param url
     */
    connect(url) {
        if (!!url) {
            this.url = url;
        }
        // ??????websocket??????
        return this.createWebSocket();
    }
    /**
     * ??????websocket
     */
    createWebSocket() {
        // ?????????????????????????????????????????????????????????????????????
        // this.websocket = new WebSocket();
        this.websocket = new WebSocket(this.url);
        // ??????????????????
        this.websocket.onopen = (e) => this.onOpen(e);
        this.websocket.onmessage = (e) => this.onMessage(e);
        this.websocket.onclose = (e) => this.onClose(e);
        this.websocket.onerror = (e) => this.onError(e);
        return this.messageSubject;
    }
    /**
     * ????????????
     */
    onOpen(ev) {
        console.log('websocket ?????????');
        // ??????????????????
        this.connectSuccess = true;
        // ??????????????????
        if (this.reconnectFlag) {
            // 1.????????????
            this.stopReconnect();
            // 2.??????????????????
            this.heartCheckStart();
            // 3.??????????????????????????????
            this.calcRunTime();
        }
    }
    /**
     * ????????????
     */
    onMessage(ev) {
        // console.log('??????????????????', ev.data);
        // ?????????????????????????????????
        // console.log('?????????????????????', new Date().getTime());
        this.messageSubject.next(ev.data);
    }
    onClose(ev) {
        console.log('????????????', ev);
        this.connectSuccess = false;
        this.websocket.close();
        // ?????????????????????
        this.reconnect();
        this.stopRunTime();
    }
    onError(ev) {
        // ???????????????????????????onClose,????????????onClose?????????????????????
        console.log('????????????', ev);
        this.connectSuccess = false;
    }
    /**
     * ????????????????????????
     */
    calcRunTime() {
        this.runTimeSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(this.runTimePeriod).subscribe(period => {
            console.log('????????????', `${period}??????`);
        });
    }
    /**
     * ????????????????????????
     */
    stopRunTime() {
        if (this.runTimeSubscription !== undefined && this.runTimeSubscription !== null) {
            this.runTimeSubscription.unsubscribe();
        }
    }
}
WebsocketService.??fac = function WebsocketService_Factory(t) { return new (t || WebsocketService)(); };
WebsocketService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"]({ token: WebsocketService, factory: WebsocketService.??fac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](WebsocketService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/directives/drag-drop-upload.directive.ts":
/*!**********************************************************!*\
  !*** ./src/app/directives/drag-drop-upload.directive.ts ***!
  \**********************************************************/
/*! exports provided: DragDropUploadDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragDropUploadDirective", function() { return DragDropUploadDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class DragDropUploadDirective {
    constructor() {
        this.fileDropped = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    // Dragover listener
    onDragOver(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.fileOver = true;
    }
    // Dragleave listener
    onDragLeave(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.fileOver = false;
    }
    // Drop listener
    ondrop(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.fileOver = false;
        let files = evt.dataTransfer.files;
        if (files.length > 0) {
            this.fileDropped.emit(files);
        }
    }
}
DragDropUploadDirective.??fac = function DragDropUploadDirective_Factory(t) { return new (t || DragDropUploadDirective)(); };
DragDropUploadDirective.??dir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineDirective"]({ type: DragDropUploadDirective, selectors: [["", "appDragDropUpload", ""]], hostVars: 2, hostBindings: function DragDropUploadDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("dragover", function DragDropUploadDirective_dragover_HostBindingHandler($event) { return ctx.onDragOver($event); })("dragleave", function DragDropUploadDirective_dragleave_HostBindingHandler($event) { return ctx.onDragLeave($event); })("drop", function DragDropUploadDirective_drop_HostBindingHandler($event) { return ctx.ondrop($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("fileover", ctx.fileOver);
    } }, outputs: { fileDropped: "fileDropped" } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](DragDropUploadDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appDragDropUpload]'
            }]
    }], null, { fileOver: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.fileover']
        }], fileDropped: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], onDragOver: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['dragover', ['$event']]
        }], onDragLeave: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['dragleave', ['$event']]
        }], ondrop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['drop', ['$event']]
        }] }); })();


/***/ }),

/***/ "./src/app/ffdec-wasm-loader.service.ts":
/*!**********************************************!*\
  !*** ./src/app/ffdec-wasm-loader.service.ts ***!
  \**********************************************/
/*! exports provided: FfdecWasmLoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FfdecWasmLoaderService", function() { return FfdecWasmLoaderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



class FfdecWasmLoaderService {
    constructor(_document) {
        this._document = _document;
        this._SCRIPT_ID = 'ffdec-wasm-script';
    }
    load() {
        const winRef = window;
        if (winRef.ffdecjs) {
            console.log('window ????????????ffdecjs?????????');
            return Promise.resolve();
        }
        if (this._scriptLoadingPromise) {
            return this._scriptLoadingPromise;
        }
        const scriptOnPage = this._document.getElementById(this._SCRIPT_ID);
        if (scriptOnPage) {
            this._assignScriptLoadingPromise(scriptOnPage);
            return this._scriptLoadingPromise;
        }
        const script = this._document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.defer = true;
        script.id = this._SCRIPT_ID;
        script.src = 'assets/ffdec-1.0.0.min.js';
        this._assignScriptLoadingPromise(script);
        this._document.body.appendChild(script);
        return this._scriptLoadingPromise;
    }
    _assignScriptLoadingPromise(scriptElem) {
        this._scriptLoadingPromise = new Promise((resolve, reject) => {
            scriptElem.onload = () => {
                resolve();
            };
            scriptElem.onerror = (error) => {
                reject(error);
            };
        });
    }
}
FfdecWasmLoaderService.??fac = function FfdecWasmLoaderService_Factory(t) { return new (t || FfdecWasmLoaderService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])); };
FfdecWasmLoaderService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: FfdecWasmLoaderService, factory: FfdecWasmLoaderService.??fac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](FfdecWasmLoaderService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
            }] }]; }, null); })();


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




const icons = [
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__["MenuFoldOutline"], _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__["MenuUnfoldOutline"], _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__["DashboardOutline"], _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__["FormOutline"], _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__["QuestionCircleOutline"], _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__["ReloadOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__["UserOutline"], _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__["LockOutline"]
];
class IconsProviderModule {
}
IconsProviderModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: IconsProviderModule });
IconsProviderModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function IconsProviderModule_Factory(t) { return new (t || IconsProviderModule)(); }, providers: [
        { provide: ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_1__["NZ_ICONS"], useValue: icons }
    ], imports: [[ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_1__["NzIconModule"]], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_1__["NzIconModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](IconsProviderModule, { imports: [ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_1__["NzIconModule"]], exports: [ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_1__["NzIconModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](IconsProviderModule, [{
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

/***/ "./src/app/pages/detect/detect.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/detect/detect.component.ts ***!
  \**************************************************/
/*! exports provided: DetectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetectComponent", function() { return DetectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _state_detect_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../state/detect.state */ "./src/app/state/detect.state.ts");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var _core_http_entity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/http-entity */ "./src/app/core/http-entity.ts");
/* harmony import */ var _state_recognize_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../state/recognize.state */ "./src/app/state/recognize.state.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _state_video_state__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../state/video.state */ "./src/app/state/video.state.ts");
/* harmony import */ var _state_video_action__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../state/video.action */ "./src/app/state/video.action.ts");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd.js");
/* harmony import */ var _core_websocket_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../core/websocket.service */ "./src/app/core/websocket.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/icon */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-icon.js");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-transition-patch.js");
/* harmony import */ var ng_zorro_antd_pagination__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/pagination */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-pagination.js");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/grid */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-grid.js");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/input */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-input.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/button */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-button.js");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-wave.js");
/* harmony import */ var _video_canvas_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./video-canvas.component */ "./src/app/pages/detect/video-canvas.component.ts");
/* harmony import */ var _app_pipes__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../app.pipes */ "./src/app/app.pipes.ts");




























const _c0 = ["targetImg"];
const _c1 = ["clipTargetContainer"];
const _c2 = ["markedImage"];
const _c3 = ["videoFrameCanvas"];
const _c4 = function () { return { minRows: 3, maxRows: 5 }; };
function DetectComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](2, "h1", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "label", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](6, "\u56FE\u7247id\uFF1A");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](8, "input", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "label", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](12, "\u9519\u8BEF\u4FE1\u606F\uFF1A");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "textarea", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function DetectComponent_div_10_Template_textarea_ngModelChange_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r8.misForm.errorCorrectionMsg = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function DetectComponent_div_10_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r10.submit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](18, "\u63D0\u4EA4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("value", ctx_r0.detectHistory[ctx_r0.pageIndex].id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("nzAutosize", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](3, _c4))("ngModel", ctx_r0.misForm.errorCorrectionMsg);
} }
function DetectComponent_button_15_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function DetectComponent_button_15_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r11.mismatch(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](1, "i", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3, "\u7EA0\u9519");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function DetectComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("frameRecognized", function DetectComponent_div_30_Template_div_frameRecognized_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r14.onFrameRecognized($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](2, "canvas", null, 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("video", ctx_r2.video);
} }
function DetectComponent_span_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " \u68C0\u6D4B\u5931\u8D25 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function DetectComponent_span_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](2, "sceneType");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind1"](2, 1, ctx_r4.currentDetectResult.sceneType));
} }
function DetectComponent_div_38_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function DetectComponent_div_38_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r19); const targetPolygon_r16 = ctx.$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r18.selectTargetPolygon(targetPolygon_r16); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](1, "img", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const targetPolygon_r16 = ctx.$implicit;
    const idx_r17 = ctx.index;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????classProp"]("target-selected", ctx_r5.selectedTargetPolygon == targetPolygon_r16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("src", ctx_r5.targetsImageBase64[idx_r17], _angular_core__WEBPACK_IMPORTED_MODULE_1__["????sanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](targetPolygon_r16.categoryCn);
} }
function DetectComponent_img_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](0, "img", 68);
} }
const _c5 = function (a0) { return { "picSearch": a0 }; };
function DetectComponent_div_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](1, "img", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](2, "sampleOssPath");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const similarImg_r20 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction1"](4, _c5, ctx_r7.searchClass == 5));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind1"](2, 2, similarImg_r20.ossKey), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????sanitizeUrl"]);
} }
const _c6 = function () { return ["/home"]; };
class DetectComponent {
    constructor(router, http, nzMessage, route, store, ws) {
        this.router = router;
        this.http = http;
        this.nzMessage = nzMessage;
        this.route = route;
        this.store = store;
        this.ws = ws;
        this.detectHistory = [{ id: "" }];
        this.pageIndex = 0; // ???0????????????
        this.total = 0;
        this.currentDetectResult = new _core_http_entity__WEBPACK_IMPORTED_MODULE_4__["DetectHistory"]();
        this.kmsResult = [];
        this.kms = [];
        this.similarity = 0;
        this.baiKeUrl = "assets/jianchuan/junjian.html";
        this.baiKeUrl1 = "";
        this.targetsImageBase64 = [];
        this.isPic = false;
        this.detectingSceneType = 0;
        this.ishomeToDetect = false;
        this.similarTargets = [];
        this.imgPageIndex = 1;
        this.imgPageSize = 51;
        this.searchClassIsRight = true;
        this.isSlectTab = false;
        this.misForm = {
            id: " ",
            errorCorrectionMsg: " "
        };
        this.route.paramMap.subscribe((paramMap) => {
            if (paramMap.has('borderShow')) {
                this.searchClass = paramMap.get('borderShow');
                if (this.searchClass == "5") {
                    $(".content-right").css("display", "none");
                }
            }
            if (paramMap.has('detectId')) {
                // ???????????????
                const detectId = paramMap.get('detectId');
                this.imgId = detectId;
                this.loadDetectHistory(detectId);
                if (paramMap.has('homeToDetect')) {
                    this.ishomeToDetect = true;
                    setTimeout(() => {
                        setTimeout(() => {
                            this.drwReact(this.currentDetectResult.targetJson[0]);
                        }, 1000);
                    }, 200);
                }
            }
            else if (paramMap.has('textSearch')) {
                // ????????????
                let imgtext = paramMap.get('textSearch');
                console.log(imgtext);
                axios__WEBPACK_IMPORTED_MODULE_10___default.a.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].API_URL}/v1/similar-targets-api?typeName=${imgtext}`, {
                    headers: {
                        'Authorization': 'Bearer 123456',
                        // 'Authorization':'Bearer '+localStorage.getItem('Bearer'),
                        'TR-Role': 'TR-Api'
                    }
                })
                    .then((result) => {
                    var that = this;
                    $(".content-right").css("display", "none");
                    $(".effect").css("display", "none");
                    $(".similar-title")[0].innerHTML = `?????????????????? ???${result.data.data.length}???`;
                    // $(".content-bottom").css("overflow","auto")
                    $(".content-bottom").css("min-height", "100%");
                    $(".similar").css("min-height", "100%");
                    $(".effect-content, .similar-content").css("flex", "0 0 auto");
                    $.each(result.data.data, function (i, n) {
                        that.similarTargets.push({
                            ossKey: JSON.parse(n).url.split("sample-resource/")[1]
                        });
                    });
                    setTimeout(() => {
                        ImagePreview.removed();
                        ImagePreview.init({ id: $("#similarImg img") });
                    }, 300);
                })
                    .catch(e => {
                    console.log(e);
                });
            }
        });
    }
    changeSelect() {
        this.isSlectTab = false;
    }
    changeSelect1() {
        this.isSlectTab = true;
    }
    ngOnInit() {
        const startTime = new Date().getTime();
        this.detectingInterval = setInterval(() => {
            // ??????????????????loading???
            if (this.detectingSceneType >= 3) {
                this.detectingSceneType = 0;
            }
            else {
                this.detectingSceneType++;
            }
            this.currentDetectResult.sceneType = this.detectingSceneType + '';
            if (new Date().getTime() - startTime > 60000) {
                // ??????1????????????loading???
                clearInterval(this.detectingInterval);
            }
        }, 200);
        this.videoSubscription = this.video$.subscribe((videoStateModel) => {
            if (videoStateModel.video != null) {
                this.video = videoStateModel.video;
            }
        });
    }
    ngAfterViewInit() {
        this.recognizeSubscription = this.recognize$.subscribe((recognizeStateModel) => {
            if (recognizeStateModel == null || recognizeStateModel.recognizeJson == null) {
                return;
            }
            const recognizeData = JSON.parse(recognizeStateModel.recognizeJson);
            for (let i = 0, len = this.detectHistory.length; i < len; i++) {
                if (recognizeData.id === this.detectHistory[i].id) {
                    this.detectHistory[i] = recognizeData;
                    break;
                }
            }
            if (this.currentDetectResult && this.currentDetectResult.id === recognizeData.id) {
                this.currentDetectResult = recognizeData;
                this.showDetectResult();
            }
        });
    }
    ngOnDestroy() {
        $(".wb-close").click();
        this.store.dispatch(new _state_video_action__WEBPACK_IMPORTED_MODULE_9__["VideoAction"](null));
        // ??????????????????????????????????????????????????? this.detectSubscription.unsubscribe();
        this.recognizeSubscription.unsubscribe();
        this.videoSubscription.unsubscribe();
        ImagePreview.removed();
        this.isPic = true;
        // localStorage.removeItem("detectResult")
    }
    loadDetectHistory(detectId) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpParams"]()
            .append('pageIndex', '1')
            .append('pageSize', '500')
            .append('detectId', detectId);
        this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].API_URL}/v1/detect-history`, {
            params
        }).subscribe((result) => {
            if (_core_http_entity__WEBPACK_IMPORTED_MODULE_4__["HttpResult"].succeed(result.code)) {
                this.detectHistory = result.data.records;
                this.total = result.data.total;
                if (this.total > 0) {
                    this.currentDetectResult = this.detectHistory[0];
                    this.showDetectResult();
                }
            }
        });
    }
    borderShowHidden(detectResult) {
        // var Item = localStorage.getItem("detectResult")
        // var Item2 = JSON.parse(Item)[this.pageIndex]
        // var detectResult = JSON.parse(Item2)
        if (this.searchClass == "2" || this.searchClass == "1" || this.searchClass == "3" || this.searchClass == "5") {
            if (detectResult.sampleTypeName != "wuqi" && this.searchClass == "2") {
                this.searchClassIsRight = false;
                $(".similar-content").empty();
                $(".content-item iframe").remove();
                $(".effect").empty();
            }
            else if (detectResult.sampleTypeName != "person" && this.searchClass == "1") {
                this.searchClassIsRight = false;
                $(".similar-content").empty();
                $(".content-item iframe").remove();
                $(".effect").empty();
            }
            else if (detectResult.sceneType != "1" && this.searchClass == "3") {
                this.searchClassIsRight = false;
                // setTimeout(()=>{
                $(".similar-content").empty();
                $(".content-item iframe").remove();
                $(".effect").empty();
                // },100)
            }
            if (this.searchClass == "5") {
                this.isPic = false;
                $(".content-top").css("display", "none");
                $(".content-bottom").css("min-height", "100%");
                $(".effect-content").css("flex", "none");
                $(".similar-content").css("flex", "none");
                $(".content-bottom").css("min-height", "100%");
                $(".effect").css("max-height", "30%");
                // $(".similar").css("overflow","auto")
            }
        }
        this.baiKeUrl = detectResult.baiKeUrl;
        setTimeout(() => {
            ImagePreview.removed();
            ImagePreview.init({ id: $("#similarImg img") });
        }, 300);
    }
    prevImage() {
        if (this.pageIndex > 0) {
            $(".bigImg canvas").remove();
            this.pageIndex--;
            this.currentDetectResult = this.detectHistory[this.pageIndex];
            this.showDetectResult();
        }
    }
    nextImage() {
        if (this.pageIndex < this.total - 1) {
            $(".bigImg canvas").remove();
            this.pageIndex++;
            this.currentDetectResult = this.detectHistory[this.pageIndex];
            this.showDetectResult();
        }
    }
    //???
    showDetectResult() {
        this.isPic = true;
        clearInterval(this.detectingInterval);
        if (this.currentDetectResult.sampleTypeName) {
            this.borderShowHidden(this.currentDetectResult);
            if (this.searchClass == 5) {
                $(".content-right").hide();
            }
        }
        this.drawMarkedLines(this.currentDetectResult);
        this.drwReact1(this.currentDetectResult.targetJson);
        if (this.currentDetectResult.targetJson.length != 0) {
            this.drawTargetsPolygon(this.currentDetectResult.targetJson);
        }
    }
    selectTarget(selectedTarget) {
        this.selectedTarget = selectedTarget;
    }
    selectTargetPolygon(targetPolygon) {
        this.selectedTargetPolygon = targetPolygon;
        $(".similarImg").remove();
        if (this.selectedTargetPolygon) {
            this.similarity = Math.round(this.selectedTargetPolygon.similarity * 100.00);
        }
        this.drwReact(targetPolygon);
        this.getLikeImg();
    }
    pageIndexChange() {
        this.getLikeImg();
    }
    getLikeImg() {
        if (this.selectedTargetPolygon) {
            this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].API_URL}/v1/sample-oss-file/getByTypeName?pageIndex=${this.imgPageIndex}&pageSize=${this.imgPageSize}`, {
                params: {
                    typeName: this.selectedTargetPolygon.categoryCn,
                }
            }).subscribe((result) => {
                if (_core_http_entity__WEBPACK_IMPORTED_MODULE_4__["HttpResult"].succeed(result.code)) {
                    if (result.data.records.length > 0) {
                        if (result.data.records.length > 5 && this.searchClass != "5") {
                            this.similarTargets = result.data.records.slice(0, 5);
                            this.imgTotal = 5;
                        }
                        else {
                            this.similarTargets = result.data.records;
                        }
                        if (this.searchClass == 5) {
                            this.countNum = `    ???${result.data.total}???`;
                            this.imgTotal = result.data.total;
                        }
                        else {
                            this.countNum = null;
                        }
                    }
                    setTimeout(() => {
                        ImagePreview.removed();
                        ImagePreview.init({ id: $("#similarImg img") });
                    }, 300);
                }
            });
            if (!(this.selectedTargetPolygon.categoryCn === '?????????')) {
                this.kmsSearch(this.currentDetectResult.id + '', this.selectedTargetPolygon.categoryCn);
            }
        }
    }
    drwReact(selectedTargetPolygon) {
        let imgUrl = `${localStorage.getItem('targetRecognizePath')}/` + this.currentDetectResult.ossKey;
        let img = new Image();
        img.src = imgUrl;
        setTimeout(() => {
            $(".bigImg #aiLable").remove();
            var bigImgDom = document.querySelector(".bigImg");
            var image = document.querySelector(".showImg");
            image.style.display = "none";
            var labelDiv = document.createElement("div");
            labelDiv.id = "aiLable";
            bigImgDom.appendChild(labelDiv);
            $("#aiLable").css({
                width: "100%",
                height: "100%",
                overflow: "hidden",
                position: "relative",
            });
            let zoomWidth = $("#aiLable").css("width").replace(/[^\d.]/ig, "");
            let zoomHeight = $("#aiLable").css("height").replace(/[^\d.]/ig, "");
            let imgWidth = img.width;
            let imgHeight = img.height;
            let imgSrc = image.src;
            let mutliple;
            let labelZoom;
            if (imgWidth >= imgHeight) {
                mutliple = zoomWidth / imgWidth;
                imgHeight = imgHeight * mutliple;
                imgWidth = zoomWidth;
                labelZoom = imgWidth * 1.3;
            }
            else {
                mutliple = zoomHeight / imgHeight;
                imgWidth = imgWidth * mutliple;
                labelZoom = imgHeight * 1.3;
                imgHeight = zoomHeight;
            }
            this.gMapArr = new AILabel.Map(`aiLable`, {
                center: { x: imgWidth / 2, y: imgHeight / 2 },
                zoom: labelZoom,
                mode: 'PAN',
                refreshDelayWhenZooming: false,
                zoomWhenDrawing: true,
                panWhenDrawing: false,
                featureCaptureWhenMove: true,
                zoomWheelRatio: 5,
                withHotKeys: true,
                zoomMax: zoomWidth * 10,
                zoomMin: zoomWidth / 10
            });
            var imageLayer = new AILabel.Layer.Image('img', // id
            {
                src: imgSrc,
                width: imgWidth,
                height: imgHeight,
                crossOrigin: false,
                position: {
                    x: 0,
                    y: 0
                },
            }, { name: '?????????????????????' }, { zIndex: 1 });
            this.gMapArr.addLayer(imageLayer);
            this.gfeatureLayer = new AILabel.Layer.Feature(`feature`, { name: '?????????????????????' }, { zIndex: 19 });
            this.gMapArr.addLayer(this.gfeatureLayer);
            let x, y, height, width;
            x = selectedTargetPolygon.minX * mutliple;
            y = selectedTargetPolygon.minY * mutliple;
            height = (selectedTargetPolygon.maxY - selectedTargetPolygon.minY) * mutliple;
            width = (selectedTargetPolygon.maxX - selectedTargetPolygon.minX) * mutliple;
            // console.log(selectedTargetPolygon,x,y,height,width)
            var feature = new AILabel.Feature.Rect(this.imgId, { height, width, x, y }, { name: '123', textId: "" }, { fill: true,
                fillStyle: "#0f0",
                globalAlpha: 0,
                lineWidth: 1,
                opacity: 1,
                stroke: true,
                strokeStyle: "red" });
            this.gfeatureLayer.addFeature(feature);
        }, 1000);
    }
    drwReact1(selectedTargetPolygonArr) {
        let imgUrl = `${localStorage.getItem('targetRecognizePath')}/` + this.currentDetectResult.ossKey;
        let img = new Image();
        img.src = imgUrl;
        this.kmsSearch(this.currentDetectResult.id + '', selectedTargetPolygonArr[0].categoryCn);
        this.selectedTargetPolygon = this.currentDetectResult.targetJson[0];
        this.getLikeImg();
        setTimeout(() => {
            // $(".bigImg #aiLable").remove()
            var bigImgDom = document.querySelector(".bigImg");
            var image = document.querySelector(".showImg");
            image.style.display = "none";
            var labelDiv = document.createElement("div");
            labelDiv.id = "aiLable";
            bigImgDom.appendChild(labelDiv);
            $("#aiLable").css({
                width: "100%",
                height: "100%",
                overflow: "hidden",
                position: "relative",
            });
            let zoomWidth = $("#aiLable").css("width").replace(/[^\d.]/ig, "");
            let zoomHeight = $("#aiLable").css("height").replace(/[^\d.]/ig, "");
            let imgWidth = img.width;
            let imgHeight = img.height;
            let imgSrc = image.src;
            let mutliple;
            let labelZoom;
            if (imgWidth >= imgHeight) {
                mutliple = zoomWidth / imgWidth;
                imgHeight = imgHeight * mutliple;
                imgWidth = zoomWidth;
                labelZoom = imgWidth * 1.3;
            }
            else {
                mutliple = zoomHeight / imgHeight;
                imgWidth = imgWidth * mutliple;
                labelZoom = imgHeight * 1.3;
                imgHeight = zoomHeight;
            }
            this.gMapArr = new AILabel.Map(`aiLable`, {
                center: { x: imgWidth / 2, y: imgHeight / 2 },
                zoom: labelZoom,
                mode: 'PAN',
                refreshDelayWhenZooming: false,
                zoomWhenDrawing: true,
                panWhenDrawing: false,
                featureCaptureWhenMove: true,
                zoomWheelRatio: 5,
                withHotKeys: true,
                zoomMax: zoomWidth * 10,
                zoomMin: zoomWidth / 10
            });
            var imageLayer = new AILabel.Layer.Image('img', // id
            {
                src: imgSrc,
                width: imgWidth,
                height: imgHeight,
                crossOrigin: false,
                position: {
                    x: 0,
                    y: 0
                },
            }, { name: '?????????????????????' }, { zIndex: 1 });
            this.gMapArr.addLayer(imageLayer);
            this.gfeatureLayer = new AILabel.Layer.Feature(`feature`, { name: '?????????????????????' }, { zIndex: 19 });
            this.gMapArr.addLayer(this.gfeatureLayer);
            let x, y, height, width;
            for (let index = 0; index < selectedTargetPolygonArr.length; index++) {
                let selectedTargetPolygon = selectedTargetPolygonArr[index];
                x = selectedTargetPolygon.minX * mutliple;
                y = selectedTargetPolygon.minY * mutliple;
                height = (selectedTargetPolygon.maxY - selectedTargetPolygon.minY) * mutliple;
                width = (selectedTargetPolygon.maxX - selectedTargetPolygon.minX) * mutliple;
                // console.log(selectedTargetPolygon,x,y,height,width)
                var feature = new AILabel.Feature.Rect(this.imgId, { height, width, x, y }, { name: '123', textId: "" }, { fill: true,
                    fillStyle: "#0f0",
                    globalAlpha: 0,
                    lineWidth: 1,
                    opacity: 1,
                    stroke: true,
                    strokeStyle: "red" });
                this.gfeatureLayer.addFeature(feature);
            }
        }, 1000);
    }
    mismatch() {
        $(".wb-close").click();
        this.misBox = new WinBox({
            title: "?????????????????????",
            x: "center",
            y: "center",
            width: "50%",
            height: "50%",
            mount: document.getElementById("content")
        });
    }
    submit() {
        this.misForm.id = this.detectHistory[this.pageIndex].id;
        this.misForm.errorCorrectionMsg = this.misForm.errorCorrectionMsg.trim();
        if (!this.misForm.errorCorrectionMsg) {
            return this.nzMessage.error("??????????????????????????????");
        }
        this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].API_URL}/v1/detect-history/mismatched?id=${this.misForm.id}&errorCorrectionMsg=${this.misForm.errorCorrectionMsg}`, this.misForm).subscribe((result) => {
            if (result.code == 1) {
                $(".wb-close").click();
                this.nzMessage.success('????????????');
            }
            else {
                this.nzMessage.error(result.message);
            }
        });
    }
    drawMarkedLines(detectHistory) {
        if (detectHistory.status !== 3) {
            // ????????????????????????????????????
            return;
        }
        const img = new Image();
        img.onload = () => {
            const testcanvasElm = document.createElement('canvas');
            testcanvasElm.width = detectHistory.originWidth;
            testcanvasElm.height = detectHistory.originHeight;
            /*?????????????????? ??????????????????*/
            const ctx = testcanvasElm.getContext('2d');
            ctx.drawImage(img, 0, 0);
            // ctx.fillStyle = 'transparent';
            ctx.strokeStyle = '#f00';
            detectHistory.targetJson.forEach(targetPolygon => {
                ctx.beginPath();
                ctx.moveTo(targetPolygon.x1, targetPolygon.y1);
                ctx.lineTo(targetPolygon.x2, targetPolygon.y2);
                ctx.lineTo(targetPolygon.x3, targetPolygon.y3);
                ctx.lineTo(targetPolygon.x4, targetPolygon.y4);
                ctx.closePath();
                ctx.stroke();
                // ctx.fill();
            });
            const ext = img.src.substring(img.src.lastIndexOf('.') + 1).toLowerCase();
            const dataURL = testcanvasElm.toDataURL('image/' + ext);
            // setTimeout(() => {
            //   // ???????????????????????????
            //   // this.markedImageElmRef.nativeElement.src = dataURL;
            //   // this.showDetectResult();
            // }, 1000);
        };
        img.crossOrigin = 'anonymous';
        img.src = `${localStorage.getItem('targetRecognizePath')}/${detectHistory.ossKey}`;
    }
    drawTargetsPolygon(targetJson) {
        this.targetsImageBase64 = [];
        // ??????????????????????????????????????????????????????????????????????????????????????????????????????
        // for (let i = 0, len = targetJson.length; i < len; i++) {
        //   this.appendClipTargetImage(targetJson[i], `${environment.OSS_URL}/${this.currentDetectResult.ossKey}`);
        // }
        // ??????????????????
        this.appendClipTargetImage(targetJson, `${localStorage.getItem("targetRecognizePath")}/${this.currentDetectResult.ossKey}`, 0);
    }
    appendClipTargetImage(targetJson, imgPath, targetIdx) {
        //  console.log("imgPath->"+imgPath)
        if (targetIdx >= targetJson.length) {
            // ????????????????????????
            return;
        }
        const targetPolygon = targetJson[targetIdx];
        /* ?????????????????????X Y*/
        const minX = Math.min(targetPolygon.x1, targetPolygon.x2, targetPolygon.x3, targetPolygon.x4);
        const maxX = Math.max(targetPolygon.x1, targetPolygon.x2, targetPolygon.x3, targetPolygon.x4);
        const minY = Math.min(targetPolygon.y1, targetPolygon.y2, targetPolygon.y3, targetPolygon.y4);
        const maxY = Math.max(targetPolygon.y1, targetPolygon.y2, targetPolygon.y3, targetPolygon.y4);
        const clipWidth = maxX - minX;
        const clipHeight = maxY - minY;
        /*???????????????*/
        const img = new Image();
        img.onload = () => {
            const testcanvasElm = document.createElement('canvas');
            testcanvasElm.width = clipWidth;
            testcanvasElm.height = clipHeight;
            /*?????????????????? ??????????????????*/
            const ctx = testcanvasElm.getContext('2d');
            ctx.drawImage(img, minX, minY, clipWidth, clipHeight, 0, 0, clipWidth, clipHeight);
            const ext = img.src.substring(img.src.lastIndexOf('.') + 1).toLowerCase();
            const dataURL = testcanvasElm.toDataURL('image/' + ext);
            // // ?????????????????????
            // const clipTargetImageElm = document.createElement('img');
            // clipTargetImageElm.id = id + '';
            // clipTargetImageElm.src = testcanvasElm.toDataURL();
            // clipTargetImageElm.style.width = '200px';
            // clipTargetImageElm.style.height = '100px';
            // clipTargetImageElm.style.justifyContent = 'center';
            // clipTargetImageElm.style.objectFit = 'contain';
            // clipTargetImageElm.style.backgroundColor = '#000';
            // // ????????????
            // this.clipTargetContainerElmRef.nativeElement.appendChild(clipTargetImageElm);
            this.targetsImageBase64.push(dataURL);
            //console.log("aaa",`${environment.OSS_URL}/${this.currentDetectResult.ossKey}`)
            // ??????????????????   
            this.appendClipTargetImage(targetJson, `${localStorage.getItem("targetRecognizePath")}/${this.currentDetectResult.ossKey}`, targetIdx + 1);
        };
        img.crossOrigin = 'anonymous';
        img.src = imgPath;
    }
    onFrameRecognized(videoFrame) {
        clearInterval(this.detectingInterval);
        this.videoFrameCanvasElmRef.nativeElement.setAttribute('width', videoFrame.frameWidth);
        this.videoFrameCanvasElmRef.nativeElement.setAttribute('height', videoFrame.frameHeight);
        this.videoFrameCanvasElmRef.nativeElement.style.position = 'absolute';
        this.videoFrameCanvasElmRef.nativeElement.style.left = videoFrame.x + 'px';
        this.videoFrameCanvasElmRef.nativeElement.style.bottom = videoFrame.y + 13 + 'px';
        const img = new Image();
        img.onload = () => {
            const ctx = this.videoFrameCanvasElmRef.nativeElement.getContext('2d');
            ctx.drawImage(img, 0, 0);
            ctx.strokeStyle = '#f00';
            videoFrame.detectHistory.targetJson.forEach(targetPolygon => {
                ctx.beginPath();
                ctx.moveTo(targetPolygon.x1, targetPolygon.y1);
                ctx.lineTo(targetPolygon.x2, targetPolygon.y2);
                ctx.lineTo(targetPolygon.x3, targetPolygon.y3);
                ctx.lineTo(targetPolygon.x4, targetPolygon.y4);
                ctx.closePath();
                ctx.stroke();
            });
        };
        img.src = videoFrame.dataURL;
        if (this.currentDetectResult == null || this.currentDetectResult.id !== videoFrame.detectHistory.id) {
            this.currentDetectResult = videoFrame.detectHistory;
            this.selectTargetPolygon(this.currentDetectResult.targetJson[0]);
            this.drawTargetsPolygon(this.currentDetectResult.targetJson);
        }
    }
    baikeClick() {
        if (this.kms[0].sfUrl == null || this.kms[0].sfUrl == "") {
            this.nzMessage.error("????????????????????????????????????");
            return false;
        }
    }
    kmsSearch(historyId, name) {
        var that = this;
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpParams"]().append('historyId', historyId).append('name', name);
        this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].API_URL}/v1/kms/detect-kms`, { params }).subscribe((result) => {
            this.kms = result.data;
            $("#ifmBox iframe").eq(1).attr("src", "");
            $("#ifmBox iframe").eq(0).attr("src", "");
            let baiKeUrl1 = this.kms[0].url;
            this.baiKeUrl1 = this.kms[0].sfUrl;
            // let sfUrl = this.kms[0].sfUrl;
            setTimeout(() => {
                $("#ifmBox iframe").eq(0).attr("src", baiKeUrl1);
                // $("#ifmBox iframe").eq(0).attr("src",sfUrl)
            }, 1000);
        });
    }
}
DetectComponent.??fac = function DetectComponent_Factory(t) { return new (t || DetectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](ng_zorro_antd__WEBPACK_IMPORTED_MODULE_12__["NzMessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_core_websocket_service__WEBPACK_IMPORTED_MODULE_13__["WebsocketService"])); };
DetectComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: DetectComponent, selectors: [["ng-component"]], viewQuery: function DetectComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????viewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????viewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????viewQuery"](_c2, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????viewQuery"](_c3, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????loadQuery"]()) && (ctx.targetImgElmRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????loadQuery"]()) && (ctx.clipTargetContainerElmRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????loadQuery"]()) && (ctx.markedImageElmRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????loadQuery"]()) && (ctx.videoFrameCanvasElmRef = _t.first);
    } }, decls: 61, vars: 26, consts: [[1, "container", "flex-column"], [1, "header"], ["src", "assets/images/bg02.png", "alt", "\u667A\u80FD\u56FE\u50CF\u68C0\u6D4B\u670D\u52A1", 1, "img-responsive"], [1, "detectHeader", 2, "height", "80px", "text-align", "center"], [1, "title"], ["src", "assets/images/detectHeader.png", "alt", "", 2, "width", "100%"], [2, "color", "#fff", "position", "relative", "bottom", "60px", "letter-spacing", "8px"], [1, "operations", "flex-row"], ["id", "backstore", "style", "display: none", 4, "ngIf"], [1, "mismatching", 2, "right", "150px", 3, "routerLink"], ["nz-icon", "", "nzType", "left", 2, "font-size", "20px", "padding", "inherit", "color", "#fff"], [2, "font-size", "15px", "margin-left", "10px", "color", "#fff"], ["class", "mismatching", 3, "click", 4, "ngIf"], [1, "contents", "flex-row"], [1, "content-left", "flex-column"], [1, "content-top", "flex-column", "border-bottom", 3, "hidden"], [1, "slide", "flex-row", 2, "width", "850px"], [1, "slide-prev", "flex-row"], ["src", "assets/images/prev.png", "alt", "\u4E0A\u4E00\u5F20", 1, "pointer", 3, "click"], [1, "slide-current", "flex-row", "bigImg"], [1, "img-responsive", "showImg", 3, "src"], [1, "scan-line"], [1, "slide-next", "flex-row"], ["src", "assets/images/next.png", "alt", "\u4E0B\u4E00\u5F20", 1, "pointer", 3, "click"], [1, "quantity"], ["class", "content-top border-bottom", "style", "position:relative;", 4, "ngIf"], [1, "content-bottom", "flex-column", 2, "min-height", "400px"], [1, "effect", "flex-column"], [1, "effect-title"], [4, "ngIf"], ["style", "top: 6px", 4, "ngIf"], [1, "effect-content", "flex-row", 2, "flex-wrap", "wrap", "overflow", "auto"], ["class", "effect-item flex-column", "style", "height: auto;", 3, "target-selected", "click", 4, "ngFor", "ngForOf"], ["src", "assets\\images\\detecting.gif", "style", "object-fit: contain", 4, "ngIf"], [1, "similar", "flex-column", "sameTarget"], [1, "similar-title", 2, "display", "flex"], [2, "padding", "10px"], ["nzShowQuickJumper", "", 3, "nzPageIndex", "nzPageSize", "nzTotal", "nzSize", "nzHideOnSinglePage", "nzPageIndexChange", "nzPageSizeChange"], [1, "similar-content", "flex-row", "pictures"], ["class", "similar-item flex-row similarImg", "id", "similarImg", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "content-right", "flex-column"], [1, "border"], [1, "rightContent"], [1, "tab"], ["target", "_blank", 1, "baikeLi", 3, "href", "click"], [1, "slectTab"], ["id", "ifmBox", 1, "content-item", "flex-column"], ["src", "", "frameborder", "0", 1, "result", 3, "hidden"], ["id", "backstore", 2, "display", "none"], ["id", "content"], [2, "text-align", "center"], ["nz-row", "", 2, "padding", "10px"], ["nz-col", "", "nzSpan", "10", 2, "text-align", "right", "line-height", "30px"], ["for", "imgId"], ["nz-col", "", "nzSpan", "14"], ["nz-input", "", "placeholder", "Basic usage", "disabled", "", 2, "width", "40%", 3, "value"], ["nz-input", "", "placeholder", "\u8BF7\u586B\u5199\u9519\u8BEF\u4FE1\u606F", 2, "width", "80%", "height", "100px", 3, "nzAutosize", "ngModel", "ngModelChange"], ["nz-col", "", "nzSpan", "24", 2, "text-align", "center"], ["nz-button", "", "nzType", "primary", 3, "click"], [1, "mismatching", 3, "click"], ["nz-icon", "", "nzType", "edit", 2, "font-size", "20px", "padding", "inherit", "color", "#fff"], [1, "content-top", "border-bottom", 2, "position", "relative"], ["app-video-canvas", "", 2, "position", "absolute", "left", "0", "right", "0", "top", "0", "bottom", "0", 3, "video", "frameRecognized"], ["videoFrameCanvas", ""], [2, "top", "6px"], [1, "effect-item", "flex-column", 2, "height", "auto", 3, "click"], [1, "", 2, "object-fit", "contain", "height", "76px", 3, "src"], [2, "color", "white", "text-align", "center", "font-size", "16px"], ["src", "assets\\images\\detecting.gif", 2, "object-fit", "contain"], ["id", "similarImg", 1, "similar-item", "flex-row", "similarImg", 3, "ngClass"], ["alt", "\u56FE\u7247", 1, "img-responsive", 3, "src"]], template: function DetectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](5, "\u76EE\u6807\u68C0\u6D4B\u5BF9\u8C61");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](8, "\u667A\u80FD\u76EE\u6807\u68C0\u6D4B\u7CFB\u7EDF");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](10, DetectComponent_div_10_Template, 19, 4, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](12, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](14, "\u8FD4\u56DE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](15, DetectComponent_button_15_Template, 4, 0, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](18, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](19, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](20, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](21, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function DetectComponent_Template_img_click_21_listener() { return ctx.prevImage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](22, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](23, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](24, "ossPath");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](25, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](26, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](27, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function DetectComponent_Template_img_click_27_listener() { return ctx.nextImage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](28, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](30, DetectComponent_div_30_Template, 4, 1, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](31, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](32, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](33, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](34, " \u76EE\u6807\u68C0\u6D4B\u7ED3\u679C ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](35, DetectComponent_span_35_Template, 2, 0, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](36, DetectComponent_span_36_Template, 3, 3, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](37, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](38, DetectComponent_div_38_Template, 4, 4, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](39, DetectComponent_img_39_Template, 1, 0, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](40, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](41, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](42, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](43, " \u76F8\u4F3C\u56FE\u7247\u76EE\u6807");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](44, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](46, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](47, "nz-pagination", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("nzPageIndexChange", function DetectComponent_Template_nz_pagination_nzPageIndexChange_47_listener($event) { return ctx.imgPageIndex = $event; })("nzPageSizeChange", function DetectComponent_Template_nz_pagination_nzPageSizeChange_47_listener($event) { return ctx.imgPageSize = $event; })("nzPageIndexChange", function DetectComponent_Template_nz_pagination_nzPageIndexChange_47_listener() { return ctx.pageIndexChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](48, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](49, DetectComponent_div_49_Template, 3, 6, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](50, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](51, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](52, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](53, "ul", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](54, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](55, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function DetectComponent_Template_a_click_55_listener() { return ctx.baikeClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](56, "\u767E\u79D1\u5339\u914D\u7ED3\u679C");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](57, "li", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](58, "\u56FE\u8C31\u5339\u914D\u7ED3\u679C");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](59, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](60, "iframe", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.video == null);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](25, _c6));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.video == null);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("hidden", !ctx.isPic);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????classProp"]("scaning", ctx.currentDetectResult.status === 1 || ctx.currentDetectResult.status === 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind1"](24, 23, ctx.currentDetectResult.ossKey), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????sanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate2"]("", ctx.pageIndex + 1, " / ", ctx.total, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.video != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.currentDetectResult.status === 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.currentDetectResult.status !== 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx.currentDetectResult.targetJson);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.currentDetectResult.status !== 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx.countNum);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("nzPageIndex", ctx.imgPageIndex)("nzPageSize", ctx.imgPageSize)("nzTotal", ctx.imgTotal)("nzSize", "small")("nzHideOnSinglePage", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx.similarTargets);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("href", ctx.baiKeUrl1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["????sanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("hidden", ctx.isSlectTab);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterLink"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_15__["NzIconDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_16__["??NzTransitionPatchDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], ng_zorro_antd_pagination__WEBPACK_IMPORTED_MODULE_17__["NzPaginationComponent"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_18__["NzRowDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_18__["NzColDirective"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_19__["NzInputDirective"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_19__["NzAutosizeDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_20__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_20__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_20__["NgModel"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_21__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_22__["NzWaveDirective"], _video_canvas_component__WEBPACK_IMPORTED_MODULE_23__["VideoCanvasComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgClass"]], pipes: [_app_pipes__WEBPACK_IMPORTED_MODULE_24__["OssPathPipe"], _app_pipes__WEBPACK_IMPORTED_MODULE_24__["SceneTypePipe"], _app_pipes__WEBPACK_IMPORTED_MODULE_24__["SampleOssPathPipe"]], styles: [".header[_ngcontent-%COMP%] {\n  display: none;\n}\n.target-selected[_ngcontent-%COMP%] {\n  border: 2px solid #E29426;\n}\n.sameTarget[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.sameTarget[_ngcontent-%COMP%]   .pictures[_ngcontent-%COMP%] {\n  padding-bottom: 50px;\n  height: 100%;\n  overflow: auto;\n}\n.scaning[_ngcontent-%COMP%] {\n  position: relative;\n  background: url('scan-area.png') no-repeat;\n  background-size: 100% 100%;\n  border: 1px solid #b0f9e4;\n}\n.scaning[_ngcontent-%COMP%]   .scan-line[_ngcontent-%COMP%] {\n  display: block;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: url('scan-line.png') no-repeat;\n  background-size: 100% 100%;\n  animation: move 1.5s ease-in-out infinite;\n  -webkit-animation: move 1.5s ease-in-out infinite;\n}\n.scan-line[_ngcontent-%COMP%] {\n  display: none;\n}\n@keyframes move {\n  from {\n    top: -100%;\n  }\n  to {\n    top: 0;\n  }\n}\n.result-info-progress[_ngcontent-%COMP%] {\n  width: 502px;\n  overflow: hidden;\n}\n.result-info-progress[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  object-fit: contain;\n  position: relative;\n  left: 0;\n  bottom: 2px;\n}\n.slide-prev[_ngcontent-%COMP%] {\n  flex: 0 0 40px;\n}\n.tab[_ngcontent-%COMP%] {\n  color: #0082c4;\n  font-size: 24px;\n  font-family: Arial, Helvetica, sans-serif;\n  display: flex;\n  list-style: none;\n  position: relative;\n  z-index: 10;\n}\n.tab[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(1) {\n  padding-right: 20px;\n  border-right: 1px solid #0082c4;\n}\n.tab[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-right: 20px;\n  cursor: pointer;\n}\n.slectTab[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.detectHeader[_ngcontent-%COMP%] {\n  position: relative;\n}\n.detectHeader[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  left: 60px;\n  bottom: 5px;\n  font-size: 20px;\n  color: #fff;\n  position: absolute;\n  font-family: Arial, Helvetica, sans-serif;\n}\n.picSearch[_ngcontent-%COMP%] {\n  max-height: 30%;\n}\n[_nghost-%COMP%]     .ant-pagination {\n  color: #fff;\n}\n[_nghost-%COMP%]     .ant-pagination li a {\n  color: #Fff;\n}\n[_nghost-%COMP%]     .ant-pagination-item-active {\n  background: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC9wYWdlcy9kZXRlY3QvRDovZmYvdGFyZ2V0LXJlY29nbml6ZS13d3ctaHRtbC1WMC4yL3NyYy9hcHAvcGFnZXMvZGV0ZWN0L2RldGVjdC5jb21wb25lbnQubGVzcyIsIi4uL2FwcC9wYWdlcy9kZXRlY3QvZGV0ZWN0LmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsYUFBQTtBQ0FGO0FERUE7RUFDRSx5QkFBQTtBQ0FGO0FER0E7RUFDRSxnQkFBQTtBQ0RGO0FEQUE7RUFHSSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FDQUo7QURJQTtFQUNFLGtCQUFBO0VBQ0EsMENBQUE7RUFDQSwwQkFBQTtFQUNBLHlCQUFBO0FDRkY7QURGQTtFQVFJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMENBQUE7RUFDQSwwQkFBQTtFQUNBLHlDQUFBO0VBQ0EsaURBQUE7QUNISjtBRE9BO0VBQ0UsYUFBQTtBQ0xGO0FEU0E7RUFDRTtJQUNFLFVBQUE7RUNQRjtFRFNBO0lBQ0UsTUFBQTtFQ1BGO0FBQ0Y7QURtQkE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7QUNqQkY7QURlQTtFQUtJLG1CQUFBO0VBQ0Esa0JBQUE7RUFHQSxPQUFBO0VBQ0EsV0FBQTtBQ25CSjtBRHNCQTtFQUNFLGNBQUE7QUNwQkY7QUR1QkE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHlDQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDckJGO0FEY0E7RUFTSSxtQkFBQTtFQUNBLCtCQUFBO0FDcEJKO0FEVUE7RUFhSSxrQkFBQTtFQUNBLGVBQUE7QUNwQko7QUR3QkE7RUFDRSxXQUFBO0FDdEJGO0FEd0JBO0VBQ0Usa0JBQUE7QUN0QkY7QURxQkE7RUFHSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx5Q0FBQTtBQ3JCSjtBRHlCQTtFQUNFLGVBQUE7QUN2QkY7QUQwQkE7RUFFSSxXQUFBO0FDekJKO0FEdUJBO0VBS1EsV0FBQTtBQ3pCUjtBRG9CQTtFQVdJLHVCQUFBO0FDNUJKIiwiZmlsZSI6Ii4uL2FwcC9wYWdlcy9kZXRlY3QvZGV0ZWN0LmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uaGVhZGVye1xuICBkaXNwbGF5OiBub25lO1xufVxuLnRhcmdldC1zZWxlY3RlZCB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNFMjk0MjY7XG59XG5cbi5zYW1lVGFyZ2V0e1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICAucGljdHVyZXN7XG4gICAgcGFkZGluZy1ib3R0b206IDUwcHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICB9XG59XG5cbi5zY2FuaW5nIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3NjYW4tYXJlYS5wbmdcIikgbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2IwZjllNDtcblxuXG4gIC5zY2FuLWxpbmUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9zY2FuLWxpbmUucG5nXCIpIG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgICBhbmltYXRpb246IG1vdmUgMS41cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogbW92ZSAxLjVzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xuICB9XG59XG5cbi5zY2FuLWxpbmUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5cbkBrZXlmcmFtZXMgbW92ZSB7XG4gIGZyb20ge1xuICAgIHRvcDogLTEwMCVcbiAgfVxuICB0byB7XG4gICAgdG9wOiAwXG4gIH1cbn1cblxuXG4ubWF0Y2gtZGVncmVlIHtcblxuICAvL2JhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1hZ2VzL3Byb2dyZXNzLWJnLnBuZ1wiKTtcbiAgLy9iYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAvL2JhY2tncm91bmQtc2l6ZTogY29udGFpbjtcblxufVxuXG4ucmVzdWx0LWluZm8tcHJvZ3Jlc3Mge1xuICB3aWR0aDogNTAycHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgaW1nIHtcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAvL3dpZHRoOiAxMDAlO1xuICAgIC8vaGVpZ2h0OiAxMDAlO1xuICAgIGxlZnQ6IDA7XG4gICAgYm90dG9tOiAycHg7XG4gIH1cbn1cbi5zbGlkZS1wcmV2e1xuICBmbGV4OiAwIDAgNDBweDtcbn1cblxuLnRhYntcbiAgY29sb3I6ICMwMDgyYzQ7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgZGlzcGxheTogZmxleDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxMDtcbiAgbGk6bnRoLWNoaWxkKDEpe1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzAwODJjNDtcbiAgfVxuICBsaXtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG59XG5cbi5zbGVjdFRhYntcbiAgY29sb3I6ICNmZmY7XG59XG4uZGV0ZWN0SGVhZGVye1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC50aXRsZXtcbiAgICBsZWZ0OiA2MHB4O1xuICAgIGJvdHRvbTogNXB4O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIH1cbn1cblxuLnBpY1NlYXJjaHtcbiAgbWF4LWhlaWdodDogMzAlO1xufVxuXG46aG9zdCA6Om5nLWRlZXB7XG4gIC5hbnQtcGFnaW5hdGlvbntcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBsaXtcbiAgICAgIGF7XG4gICAgICAgIGNvbG9yOiAjRmZmO1xuICAgICAgfVxuICAgICAgXG4gICAgfVxuICB9XG4gIC5hbnQtcGFnaW5hdGlvbi1pdGVtLWFjdGl2ZXtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgfVxuXG59XG5cblxuIiwiLmhlYWRlciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4udGFyZ2V0LXNlbGVjdGVkIHtcbiAgYm9yZGVyOiAycHggc29saWQgI0UyOTQyNjtcbn1cbi5zYW1lVGFyZ2V0IHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5zYW1lVGFyZ2V0IC5waWN0dXJlcyB7XG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuLnNjYW5pbmcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvc2Nhbi1hcmVhLnBuZ1wiKSBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjYjBmOWU0O1xufVxuLnNjYW5pbmcgLnNjYW4tbGluZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvc2Nhbi1saW5lLnBuZ1wiKSBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICBhbmltYXRpb246IG1vdmUgMS41cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbiAgLXdlYmtpdC1hbmltYXRpb246IG1vdmUgMS41cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbn1cbi5zY2FuLWxpbmUge1xuICBkaXNwbGF5OiBub25lO1xufVxuQGtleWZyYW1lcyBtb3ZlIHtcbiAgZnJvbSB7XG4gICAgdG9wOiAtMTAwJTtcbiAgfVxuICB0byB7XG4gICAgdG9wOiAwO1xuICB9XG59XG4ucmVzdWx0LWluZm8tcHJvZ3Jlc3Mge1xuICB3aWR0aDogNTAycHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ucmVzdWx0LWluZm8tcHJvZ3Jlc3MgaW1nIHtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDJweDtcbn1cbi5zbGlkZS1wcmV2IHtcbiAgZmxleDogMCAwIDQwcHg7XG59XG4udGFiIHtcbiAgY29sb3I6ICMwMDgyYzQ7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTA7XG59XG4udGFiIGxpOm50aC1jaGlsZCgxKSB7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMwMDgyYzQ7XG59XG4udGFiIGxpIHtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uc2xlY3RUYWIge1xuICBjb2xvcjogI2ZmZjtcbn1cbi5kZXRlY3RIZWFkZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZGV0ZWN0SGVhZGVyIC50aXRsZSB7XG4gIGxlZnQ6IDYwcHg7XG4gIGJvdHRvbTogNXB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xufVxuLnBpY1NlYXJjaCB7XG4gIG1heC1oZWlnaHQ6IDMwJTtcbn1cbjpob3N0IDo6bmctZGVlcCAuYW50LXBhZ2luYXRpb24ge1xuICBjb2xvcjogI2ZmZjtcbn1cbjpob3N0IDo6bmctZGVlcCAuYW50LXBhZ2luYXRpb24gbGkgYSB7XG4gIGNvbG9yOiAjRmZmO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5hbnQtcGFnaW5hdGlvbi1pdGVtLWFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuIl19 */"] });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Select"])(_state_detect_state__WEBPACK_IMPORTED_MODULE_2__["DetectState"])
], DetectComponent.prototype, "detect$", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Select"])(_state_recognize_state__WEBPACK_IMPORTED_MODULE_5__["RecognizeState"])
], DetectComponent.prototype, "recognize$", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Select"])(_state_video_state__WEBPACK_IMPORTED_MODULE_8__["VideoState"])
], DetectComponent.prototype, "video$", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](DetectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                templateUrl: './detect.component.html',
                styleUrls: ['./detect.component.less']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] }, { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_12__["NzMessageService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"] }, { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }, { type: _core_websocket_service__WEBPACK_IMPORTED_MODULE_13__["WebsocketService"] }]; }, { detect$: [], recognize$: [], video$: [], targetImgElmRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['targetImg']
        }], clipTargetContainerElmRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['clipTargetContainer']
        }], markedImageElmRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['markedImage']
        }], videoFrameCanvasElmRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['videoFrameCanvas']
        }] }); })();


/***/ }),

/***/ "./src/app/pages/detect/jet/jet.component.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/detect/jet/jet.component.ts ***!
  \***************************************************/
/*! exports provided: JetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JetComponent", function() { return JetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var _state_recognize_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../state/recognize.state */ "./src/app/state/recognize.state.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






const _c0 = ["app-jet", ""];
function JetComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](2, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](5, "\u5EFA\u9020\u65F6\u95F4\uFF1A1986\u5E747\u6708");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](7, "\u4E0B\u6C34\u65F6\u95F4\uFF1A1989\u5E749\u6708");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](9, "\u670D\u5F79\u65F6\u95F4\uFF1A1991\u5E747\u6708");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](11, "\u73B0\u72B6\uFF1A\u73B0\u5F79");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](13, "\u524D\u578B\uFF1A\u7EAA\u5FB7\u7EA7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](15, "\u6B21\u578B\uFF1A\u6731\u59C6\u6C83\u5C14\u7279\u7EA7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](17, "\u5236\u9020\u5382\uFF1A\u5DF4\u65AF\u94A2\u94C1\u5382\uFF0C\u82F1\u6208\u5C14\u65AF\u9020\u8239\u5382");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function JetComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](6, "\u4E58\u5458");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](8, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](10, "\u4EBA");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](14, "\u673A\u957F");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](16, "15.38");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](18, "\u7C73");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](19, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](20, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](21, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](22, "\u7FFC\u5C55");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](23, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](24, "10.65");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](25, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](26, "\u7C73");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](27, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](28, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](29, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](30, "\u673A\u9AD8");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](31, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](32, "5.28");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](33, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](34, "\u7C73");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](35, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](36, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](37, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](38, "\u7A7A\u91CD");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](39, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](40, "13300");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](41, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](42, "\u5343\u514B");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](43, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](44, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](45, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](46, "\u6700\u5927\u8D77\u98DE\u91CD\u91CF");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](47, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](48, "31800");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](49, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](50, "\u5343\u514B");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](51, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](52, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](53, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](54, "\u6700\u5927\u98DE\u884C\u901F\u5EA6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](55, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](56, "2000");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](57, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](58, "\u5343\u7C73/\u5C0F\u65F6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](59, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](60, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](61, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](62, "\u6700\u5927\u822A\u7A0B");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](63, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](64, "1000");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](65, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](66, "\u5343\u7C73");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](67, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function JetComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](2, "img", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](6, "img", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](8, "\u201C\u6218\u65A7\u201D\u5DE1\u822A\u5BFC\u5F39\u5DE1\u822A\u5BFC\u5F39\u5DE1\u822A\u5BFC\u5F39\u5DE1\u822A\u5BFC\u5F39\u5DE1\u822A\u5BFC\u5F39");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](11, "img", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](13, "\u201C\u6218\u65A7\u201D\u5DE1\u822A\u5BFC\u5F39");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](16, "img", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](18, "\u201C\u6218\u65A7\u201D\u5DE1\u822A\u5BFC\u5F39");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](19, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](20, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](21, "img", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](22, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](23, "\u201C\u6218\u65A7\u201D\u5DE1\u822A\u5BFC\u5F39\u5DE1\u822A\u5BFC\u5F39\u5DE1\u822A\u5BFC\u5F39\u5DE1\u822A\u5BFC\u5F39\u5DE1\u822A\u5BFC\u5F39");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](24, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](25, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](26, "img", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](27, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](28, "\u201C\u6218\u65A7\u201D\u5DE1\u822A\u5BFC\u5F39");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](29, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](30, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](31, "img", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](32, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](33, "\u201C\u6218\u65A7\u201D\u5DE1\u822A\u5BFC\u5F39");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function JetComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2, " F-35\u7684\u9690\u8EAB\u8BBE\u8BA1\u501F\u9274\u4E86F-22\u7684\u5F88\u591A\u6280\u672F\u4E0E\u7ECF\u9A8C\uFF0C\u663E\u793A\u88C5\u7F6E\u521B\u9020\u6027\u5730\u4F7F\u7528\u4E86\u89E6\u6478\u5F0F\u663E\u793A\u6280\u672F\u3002F-35\u663E\u793A\u754C\u9762\u7684\u5148\u8FDB\u6027\u662F\u7531\u5176\u590D\u6742\u7684\u4EFB\u52A1\u51B3\u5B9A\u7684\u3002 \u4E0E\u4E89\u593A\u7A7A\u4E2D\u4F18\u52BF\u7684F-22\u4E0D\u540C\uFF0CF-35\u7684\u4EFB\u52A1\u6DB5\u76D6\u8303\u56F4\u66F4\u5E7F\u3002\u98DE\u884C\u5458\u4E0D\u518D\u662F\u7B80\u5355\u7684\u9A7E\u9A76\u5458\uFF0C\u800C\u662F\u66F4\u9AD8\u7EA7\u7684\u7A7A\u4E2D\u6218\u672F\u51B3\u7B56\u8005\u3002 F-35\u7684\u8BBE\u8BA1\u8005\u8BA4\u4E3A\uFF0C\u6218\u6597\u673A\u8D8A\u6765\u8D8A\u590D\u6742\uFF0C\u5411\u98DE\u884C\u5458\u5C55\u793A\u6240\u6709\u7CFB\u7EDF\u7684\u60C5\u51B5\u548C\u5DE5\u4F5C\u72B6\u6001\u53EA\u80FD\u4F7F\u4EBA\u75B2\u4E8E\u5954\u547D\u3002 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function JetComponent_div_32_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "a", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
} if (rf & 2) {
    const data_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????propertyInterpolate"]("href", data_r5 == null ? null : data_r5.url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["????sanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](data_r5.name);
} }
function JetComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](1, JetComponent_div_32_ng_container_1_Template, 3, 2, "ng-container", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const data_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", (data_r5 == null ? null : data_r5.url) !== undefined && (data_r5 == null ? null : data_r5.url) !== null && (data_r5 == null ? null : data_r5.url) !== "");
} }
class JetComponent {
    constructor() {
        this.selectedTab = 1;
        this.kms = [];
    }
    ngOnInit() {
        this.recognizeSubscription = this.recognize$.subscribe((recognizeStateModel) => {
            if (recognizeStateModel == null || recognizeStateModel.recognizeJson == null) {
                return;
            }
            this.kms = JSON.parse(recognizeStateModel.recognizeJson);
            // console.log('----->kms', recognizeData);
        });
    }
}
JetComponent.??fac = function JetComponent_Factory(t) { return new (t || JetComponent)(); };
JetComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: JetComponent, selectors: [["", "app-jet", ""]], attrs: _c0, decls: 34, vars: 13, consts: [[1, "content-top", "flex-column", "border"], [1, "result", "flex-row"], [1, "result-image", "flex-row"], ["src", "assets/demo/feiji-avatar.jpg", "alt", "\u56FE\u7247", 1, "img-responsive"], [1, "result-info", "flex-column"], [1, "result-info-title"], [1, "result-info-main", "flex-row"], [1, "result-info-text"], [1, "result-info-progress"], [1, "result-progress", 2, "width", "100%"], [1, "result-info-number"], [1, "tabs", "flex-column"], [1, "tabs-header", "flex-row"], [1, "tab-item", 3, "click"], [1, "tabs-content"], ["class", "tabs-content-info flex-row ", 4, "ngIf"], ["class", "tabs-content-technology flex-row ", 4, "ngIf"], ["class", "tabs-content-equip flex-row ", 4, "ngIf"], ["class", "tabs-content-feature ", 4, "ngIf"], [1, "content-bottom", "flex-column"], [1, "content-title", "matching"], ["class", "information flex-column", 4, "ngFor", "ngForOf"], [1, "trimming"], [1, "tabs-content-info", "flex-row"], [1, "fighter-image", "flex-row"], ["src", "assets/images/img02.png", "alt", "\u56FE\u7247", 1, "img-responsive"], [1, "fighter-list", "flex-column"], [1, "info-list-item"], [1, "tabs-content-technology", "flex-row"], [1, "technology-left"], [1, "technology-main", "flex-row"], [1, "technology-main-item"], [1, "technology-main-info", "flex-column"], [1, "technology-title"], [1, "technology-number"], [1, "technology-unit"], [1, "technology-right"], [1, "tabs-content-equip", "flex-row"], [1, "fighter-left", "flex-row"], ["src", "assets/images/img03.png", "alt", "\u56FE\u7247", 1, "fighter-img-responsive"], [1, "equip-right", "flex-row"], [1, "equip-right-item", "flex-column"], [1, "equip-right-image", "fighter-right-image"], ["src", "assets/images/img04.png", "alt", "\u56FE\u7247"], [1, "equip-right-text", "ellipsis"], [1, "tabs-content-feature"], [1, "m-b"], [1, "information", "flex-column"], [4, "ngIf"], ["target", "_blank", 1, "information-item", 3, "href"]], template: function JetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](6, "F35A\u201C\u95EA\u7535\u2161\u201D\u6218\u6597\u673A");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](9, "\u5339\u914D\u5EA6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](13, "95%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function JetComponent_Template_div_click_16_listener() { return ctx.selectedTab = 1; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](17, "\u57FA\u672C\u4FE1\u606F");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function JetComponent_Template_div_click_18_listener() { return ctx.selectedTab = 2; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](19, "\u6280\u672F\u6570\u636E");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function JetComponent_Template_div_click_20_listener() { return ctx.selectedTab = 3; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](21, "\u6B66\u5668\u88C5\u5907");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function JetComponent_Template_div_click_22_listener() { return ctx.selectedTab = 4; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](23, "\u7ED3\u6784\u7279\u70B9");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](24, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](25, JetComponent_div_25_Template, 18, 0, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](26, JetComponent_div_26_Template, 68, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](27, JetComponent_div_27_Template, 34, 0, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](28, JetComponent_div_28_Template, 3, 0, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](29, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](30, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](31, "\u6269\u5C55\u8D44\u6599");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](32, JetComponent_div_32_Template, 2, 1, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](33, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????classProp"]("active", ctx.selectedTab === 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????classProp"]("active", ctx.selectedTab === 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????classProp"]("active", ctx.selectedTab === 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????classProp"]("active", ctx.selectedTab === 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.selectedTab === 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.selectedTab === 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.selectedTab === 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.selectedTab === 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx.kms);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["[_nghost-%COMP%]   .jet-info-tab[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n[_nghost-%COMP%]   .jet-info-tab[_ngcontent-%COMP%]    > div.selected[_ngcontent-%COMP%] {\n  background-color: cornflowerblue;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC9wYWdlcy9kZXRlY3QvamV0L0Q6L2ZmL3RhcmdldC1yZWNvZ25pemUtd3d3LWh0bWwtVjAuMi9zcmMvYXBwL3BhZ2VzL2RldGVjdC9qZXQvamV0LmNvbXBvbmVudC5sZXNzIiwiLi4vYXBwL3BhZ2VzL2RldGVjdC9qZXQvamV0LmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR0ksYUFBQTtFQUNBLDhCQUFBO0FDREo7QURHTTtFQUNFLGdDQUFBO0VBQ0EsWUFBQTtBQ0RSIiwiZmlsZSI6Ii4uL2FwcC9wYWdlcy9kZXRlY3QvamV0L2pldC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcblxuICAuamV0LWluZm8tdGFiIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICA+IGRpdiB7XG4gICAgICAmLnNlbGVjdGVkIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogY29ybmZsb3dlcmJsdWU7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuXG5cblxufVxuIiwiOmhvc3QgLmpldC1pbmZvLXRhYiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbjpob3N0IC5qZXQtaW5mby10YWIgPiBkaXYuc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcbiAgY29sb3I6IHdoaXRlO1xufVxuIl19 */"] });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Select"])(_state_recognize_state__WEBPACK_IMPORTED_MODULE_3__["RecognizeState"])
], JetComponent.prototype, "recognize$", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](JetComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: '[app-jet]',
                templateUrl: './jet.component.html',
                styleUrls: ['./jet.component.less']
            }]
    }], null, { recognize$: [] }); })();


/***/ }),

/***/ "./src/app/pages/detect/personage/personage.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/detect/personage/personage.component.ts ***!
  \***************************************************************/
/*! exports provided: PersonageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonageComponent", function() { return PersonageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var _state_recognize_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../state/recognize.state */ "./src/app/state/recognize.state.ts");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _app_pipes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../app.pipes */ "./src/app/app.pipes.ts");








const _c0 = ["app-personage", ""];
function PersonageComponent_div_6_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
} if (rf & 2) {
    const data_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????propertyInterpolate"]("href", data_r1 == null ? null : data_r1.url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["????sanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](data_r1.name);
} }
function PersonageComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](1, PersonageComponent_div_6_ng_container_1_Template, 3, 2, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const data_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", (data_r1 == null ? null : data_r1.url) !== undefined && (data_r1 == null ? null : data_r1.url) !== null && (data_r1 == null ? null : data_r1.url) !== "" && (data_r1 == null ? null : data_r1.url) !== "undefined");
} }
class PersonageComponent {
    constructor() {
        this.kms = [];
    }
    ngOnInit() {
        console.log(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__["environment"]);
        this.recognizeSubscription = this.recognize$.subscribe((recognizeStateModel) => {
            if (recognizeStateModel == null || recognizeStateModel.recognizeJson == null) {
                return;
            }
            this.kms = JSON.parse(recognizeStateModel.recognizeJson);
            if (this.kms[0]) {
                console.log('??????', this.kms[0]);
                if (!this.kmsUrl) {
                    // this.kmsUrl = environment.KMS_URL + this.kms[0].id;
                    console.log('??????', this.kmsUrl);
                }
            }
        });
    }
}
PersonageComponent.??fac = function PersonageComponent_Factory(t) { return new (t || PersonageComponent)(); };
PersonageComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: PersonageComponent, selectors: [["", "app-personage", ""]], attrs: _c0, decls: 8, vars: 4, consts: [[1, "content-top", "flex-column", "border"], [2, "height", "100%", 3, "src"], [1, "content-bottom", "flex-column", 2, "overflow", "scroll"], [1, "content-title", "matching"], ["class", "information flex-column", 4, "ngFor", "ngForOf"], [1, "trimming"], [1, "information", "flex-column"], [4, "ngIf"], ["target", "_blank", 1, "information-item", 3, "href"]], template: function PersonageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](1, "iframe", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](2, "safe");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](5, "\u6269\u5C55\u8D44\u6599");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](6, PersonageComponent_div_6_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind1"](2, 2, ctx.kmsUrl), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????sanitizeResourceUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx.kms);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], pipes: [_app_pipes__WEBPACK_IMPORTED_MODULE_6__["SafePipe"]], styles: ["[_nghost-%COMP%]   .personage-info-tab[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n[_nghost-%COMP%]   .personage-info-tab[_ngcontent-%COMP%]    > div.selected[_ngcontent-%COMP%] {\n  background-color: cornflowerblue;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC9wYWdlcy9kZXRlY3QvcGVyc29uYWdlL0Q6L2ZmL3RhcmdldC1yZWNvZ25pemUtd3d3LWh0bWwtVjAuMi9zcmMvYXBwL3BhZ2VzL2RldGVjdC9wZXJzb25hZ2UvcGVyc29uYWdlLmNvbXBvbmVudC5sZXNzIiwiLi4vYXBwL3BhZ2VzL2RldGVjdC9wZXJzb25hZ2UvcGVyc29uYWdlLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR0ksYUFBQTtFQUNBLDhCQUFBO0FDREo7QURHTTtFQUNFLGdDQUFBO0VBQ0EsWUFBQTtBQ0RSIiwiZmlsZSI6Ii4uL2FwcC9wYWdlcy9kZXRlY3QvcGVyc29uYWdlL3BlcnNvbmFnZS5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcblxuICAucGVyc29uYWdlLWluZm8tdGFiIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICA+IGRpdiB7XG4gICAgICAmLnNlbGVjdGVkIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogY29ybmZsb3dlcmJsdWU7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIjpob3N0IC5wZXJzb25hZ2UtaW5mby10YWIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG46aG9zdCAucGVyc29uYWdlLWluZm8tdGFiID4gZGl2LnNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogY29ybmZsb3dlcmJsdWU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbiJdfQ== */"] });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Select"])(_state_recognize_state__WEBPACK_IMPORTED_MODULE_3__["RecognizeState"])
], PersonageComponent.prototype, "recognize$", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](PersonageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: '[app-personage]',
                templateUrl: './personage.component.html',
                styleUrls: ['./personage.component.less']
            }]
    }], null, { recognize$: [] }); })();


/***/ }),

/***/ "./src/app/pages/detect/video-canvas.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/detect/video-canvas.component.ts ***!
  \********************************************************/
/*! exports provided: VideoCanvasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoCanvasComponent", function() { return VideoCanvasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _core_http_entity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/http-entity */ "./src/app/core/http-entity.ts");
/* harmony import */ var _ffdec_wasm_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ffdec-wasm-loader.service */ "./src/app/ffdec-wasm-loader.service.ts");
/* harmony import */ var _video_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../video.service */ "./src/app/video.service.ts");








const _c0 = ["videoCanvas"];
const _c1 = ["app-video-canvas", ""];
class VideoCanvasComponent {
    constructor(ffdecWasmLoaderService, videoService, http) {
        this.ffdecWasmLoaderService = ffdecWasmLoaderService;
        this.videoService = videoService;
        this.http = http;
        this.frameRecognized = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.retryGetFrameTimes = 0;
        this.lastVideoFrameIndex = 0;
        this.lastVideoFrameDetectIndex = 0;
        this.stop = false;
    }
    ngOnDestroy() {
        // console.log('????????????');
        this.stop = true;
    }
    ngOnInit() {
        console.log('video is :', this.video);
        if (this.video == null) {
            return;
        }
        // ??????????????????
        console.log('??????????????????');
        this.ffdecWasmLoaderService.load().then(() => {
            this.gl = this.videoCanvasElmRef.nativeElement.getContext('experimental-webgl');
            this.program = this.videoService.createProgramFromScripts(this.gl);
            this.gl.useProgram(this.program);
            // ???glsl???????????????
            this.texture_y = this.gl.getUniformLocation(this.program, 'texture_y');
            this.texture_u = this.gl.getUniformLocation(this.program, 'texture_u');
            this.texture_v = this.gl.getUniformLocation(this.program, 'texture_v');
            this.vertex_screen = this.gl.getAttribLocation(this.program, 'vertex_screen');
            this.vertex_tex = this.gl.getAttribLocation(this.program, 'vertex_texture');
            // ??????y,u,v??????
            this.tex_id_y = this.gl.createTexture();
            this.gl.bindTexture(this.gl.TEXTURE_2D, this.tex_id_y);
            this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, this.gl.LINEAR);
            this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, this.gl.LINEAR);
            this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_S, this.gl.CLAMP_TO_EDGE);
            this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_T, this.gl.CLAMP_TO_EDGE);
            this.tex_id_u = this.gl.createTexture();
            this.gl.bindTexture(this.gl.TEXTURE_2D, this.tex_id_u);
            this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, this.gl.LINEAR);
            this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, this.gl.LINEAR);
            this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_S, this.gl.CLAMP_TO_EDGE);
            this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_T, this.gl.CLAMP_TO_EDGE);
            this.tex_id_v = this.gl.createTexture();
            this.gl.bindTexture(this.gl.TEXTURE_2D, this.tex_id_v);
            this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, this.gl.LINEAR);
            this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, this.gl.LINEAR);
            this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_S, this.gl.CLAMP_TO_EDGE);
            this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_T, this.gl.CLAMP_TO_EDGE);
            // ????????????(???8); ????????????(???8)
            this.buffer = this.gl.createBuffer();
            this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.buffer);
            this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array([
                0.0, 1.0,
                1.0, 1.0,
                0.0, 0.0,
                1.0, 0.0,
                -1.0, -1.0,
                1.0, -1.0,
                -1.0, 1.0,
                1.0, 1.0
            ]), this.gl.STATIC_DRAW);
            this.gl.bindBuffer(this.gl.ARRAY_BUFFER, null);
            this.gl.validateProgram(this.program);
            console.log('ffdecjs.postRun is ready');
            if (this.videoService.existDataDir()) {
                console.log('/data ?????????????????????????????????');
            }
            else {
                FS.mkdir('/data'); // ??????"/data"??????, ?????????????????????????????????
                // ??????????????????????????????
                this.videoService.mkDataDir(true);
            }
            const reader = new FileReader();
            reader.onload = () => {
                console.log('??????????????????');
                // TODO. ???????????????????????????, ????????????, ????????????????????????????????????
                var binary = new Uint8Array(reader.result);
                //console.log("binary", binary);
                var stream = FS.open('/data/xxxx', 'w+');
                FS.write(stream, binary, 0, binary.length);
                FS.close(stream);
                //ffdecjs.print_file('/data/playFile.mp4');
                ffdecjs.open('/data/xxxx', '');
                //console.log("frame:", frame);
                // frame.time = 0x8000000000000000 ????????????
                setTimeout(() => {
                    this.recognizeVideoFrame();
                }, 33);
            };
            reader.readAsArrayBuffer(this.video);
        });
    }
    recognizeVideoFrame() {
        // console.log('this.stop is :', this.stop);
        if (this.stop) {
            return;
        }
        const frame = ffdecjs.get_next_frame();
        //var frame = yuv_init();
        if (frame) {
            this.retryGetFrameTimes = 0;
            this.lastVideoFrameIndex++;
            const containerWidth = this.videoCanvasElmRef.nativeElement.parentElement.clientWidth;
            const containerHeight = this.videoCanvasElmRef.nativeElement.parentElement.clientHeight;
            let viewpointWidth;
            let viewpointHeight;
            let viewpointX;
            let viewpointY;
            if (frame.w > containerWidth || frame.h > containerHeight) {
                // canvas???????????????????????????????????????????????????
                const heightRatio = containerHeight / frame.h;
                const widthRatio = containerWidth / frame.w;
                const ratio = widthRatio > heightRatio ? heightRatio : widthRatio;
                viewpointWidth = frame.w * ratio;
                viewpointHeight = frame.h * ratio;
                viewpointX = (containerWidth - viewpointWidth) / 2;
                viewpointY = (containerHeight - viewpointHeight) / 2;
            }
            else {
                // canvas??????????????????
                viewpointWidth = frame.w;
                viewpointHeight = frame.h;
                viewpointX = (containerWidth - frame.w) / 2;
                viewpointY = (containerHeight - frame.h) / 2;
            }
            this.videoCanvasElmRef.nativeElement.setAttribute('width', viewpointWidth);
            this.videoCanvasElmRef.nativeElement.setAttribute('height', viewpointHeight);
            this.videoCanvasElmRef.nativeElement.style.position = 'relative';
            this.videoCanvasElmRef.nativeElement.style.left = viewpointX + 'px';
            this.videoCanvasElmRef.nativeElement.style.bottom = viewpointY + 'px';
            this.retryGetFrameTimes = 0;
            // gl.viewport(viewpointX, viewpointY, viewpointWidth, viewpointHeight); // ?????????????????????????????????????????????,????????????????????????
            this.gl.viewport(0, 0, viewpointWidth, viewpointHeight); // ?????????????????????????????????????????????,????????????????????????
            this.videoService.draw_begin(this.gl);
            this.videoService.draw_yuv(this.gl, this.program, this.buffer, this.vertex_screen, this.vertex_tex, this.tex_id_y, this.texture_y, this.tex_id_u, this.tex_id_v, this.texture_v, this.texture_u, frame);
            this.videoService.draw_end();
            const dataURL = this.videoCanvasElmRef.nativeElement.toDataURL("image/jpeg");
            if ((this.lastVideoFrameIndex - 1) % 24 !== 0) {
                // ??????8??????????????????
                this.frameRecognized.emit(new _core_http_entity__WEBPACK_IMPORTED_MODULE_3__["VideoFrame"](dataURL, this.lastDetectHistory, viewpointWidth, viewpointHeight, viewpointX, viewpointY));
                this.recognizeVideoFrame();
            }
            else {
                const blob = this.videoService.dataURLToBlob(dataURL);
                const formData = new FormData();
                formData.append("file", blob);
                let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
                if (this.lastDetectHistory) {
                    httpParams = httpParams.append("videoDetectId", this.lastDetectHistory.detectId);
                }
                this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API_URL}/v1/frame-detect/frameToImg`, formData, {
                    params: httpParams
                }).subscribe((result) => {
                    if (_core_http_entity__WEBPACK_IMPORTED_MODULE_3__["HttpResult"].succeed(result.code)) {
                        this.lastVideoFrameDetectIndex++;
                        this.lastDetectHistory = result.data;
                        this.frameRecognized.emit(new _core_http_entity__WEBPACK_IMPORTED_MODULE_3__["VideoFrame"](dataURL, result.data, viewpointWidth, viewpointHeight, viewpointX, viewpointY));
                        // this.loadVideoDetectHistory(this.videoDetectId, this.lastVideoFrameDetectIndex).then(() => {
                        //
                        this.recognizeVideoFrame();
                        // });
                    }
                });
            }
        }
        else {
            this.retryGetFrameTimes++;
            if (this.retryGetFrameTimes < 10) {
                setTimeout(() => {
                    this.recognizeVideoFrame();
                }, 33);
            }
            else {
                // ???10????????????????????????????????????????????????
                // if (this.total > 0) {
                //   this.video = null;
                //
                //   this.currentDetectResult = this.detectHistory[0];
                //
                //   this.showDetectResult();
                //
                // }
            }
        }
    }
}
VideoCanvasComponent.??fac = function VideoCanvasComponent_Factory(t) { return new (t || VideoCanvasComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ffdec_wasm_loader_service__WEBPACK_IMPORTED_MODULE_4__["FfdecWasmLoaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_video_service__WEBPACK_IMPORTED_MODULE_5__["VideoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
VideoCanvasComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: VideoCanvasComponent, selectors: [["", "app-video-canvas", ""]], viewQuery: function VideoCanvasComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.videoCanvasElmRef = _t.first);
    } }, inputs: { video: "video" }, outputs: { frameRecognized: "frameRecognized" }, attrs: _c1, decls: 2, vars: 0, consts: [["videoCanvas", ""]], template: function VideoCanvasComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "canvas", null, 0);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9hcHAvcGFnZXMvZGV0ZWN0L3ZpZGVvLWNhbnZhcy5jb21wb25lbnQubGVzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](VideoCanvasComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: '[app-video-canvas]',
                templateUrl: './video-canvas.component.html',
                styleUrls: ['./video-canvas.component.less']
            }]
    }], function () { return [{ type: _ffdec_wasm_loader_service__WEBPACK_IMPORTED_MODULE_4__["FfdecWasmLoaderService"] }, { type: _video_service__WEBPACK_IMPORTED_MODULE_5__["VideoService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, { video: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], frameRecognized: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], videoCanvasElmRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['videoCanvas']
        }] }); })();


/***/ }),

/***/ "./src/app/pages/detect/warship/warship.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/detect/warship/warship.component.ts ***!
  \***********************************************************/
/*! exports provided: WarshipComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarshipComponent", function() { return WarshipComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var _state_recognize_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../state/recognize.state */ "./src/app/state/recognize.state.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






const _c0 = ["app-warship", ""];
function WarshipComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](2, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](5, "\u5EFA\u9020\u65F6\u95F4\uFF1A1986\u5E747\u6708");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](7, "\u4E0B\u6C34\u65F6\u95F4\uFF1A1989\u5E749\u6708");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](9, "\u670D\u5F79\u65F6\u95F4\uFF1A1991\u5E747\u6708");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](11, "\u73B0\u72B6\uFF1A\u73B0\u5F79");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](13, "\u524D\u578B\uFF1A\u7EAA\u5FB7\u7EA7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](15, "\u6B21\u578B\uFF1A\u6731\u59C6\u6C83\u5C14\u7279\u7EA7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](17, "\u5236\u9020\u5382\uFF1A\u5DF4\u65AF\u94A2\u94C1\u5382\uFF0C\u82F1\u6208\u5C14\u65AF\u9020\u8239\u5382");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function WarshipComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](6, "\u7F16\u5236");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](8, "300");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](10, "\u4EBA");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](14, "\u8230\u957F");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](16, "153.8");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](18, "\u7C73");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](19, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](20, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](21, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](22, "\u578B\u5BBD");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](23, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](24, "20.4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](25, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](26, "\u7C73");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](27, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](28, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](29, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](30, "\u6EE1\u8F7D\u6392\u6C34\u91CF");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](31, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](32, "8315");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](33, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](34, "\u5428");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](35, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](36, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](37, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](38, "\u7EED\u822A\u8DDD\u79BB");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](39, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](40, "4400");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](41, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](42, "\u82F1\u91CC/20\u8282");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](43, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](44, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](45, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](46, "\u822A\u901F");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](47, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](48, "32");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](49, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](50, "\u8282");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](51, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](52, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](53, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](54, "\u6EE1\u6392\u5428\u4F4D");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](55, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](56, "5000-10000");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](57, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](58, "\u5428");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](59, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function WarshipComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](2, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](3, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](4, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](5, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](6, "img", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](10, "img", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](12, "\u201C\u6218\u65A7\u201D\u5DE1\u822A\u5BFC\u5F39");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](15, "img", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](17, "SM-2ER\u9632\u7A7A\u5BFC\u5F39");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](18, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](19, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](20, "img", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](21, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](22, "SH-60B-F\u76F4\u5347\u673A");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](23, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](24, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](25, "img", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](26, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](27, "54MK-45Mod 1\u8230\u70AE");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](28, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](29, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](30, "img", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](31, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](32, "54MK-45Mod 1\u8230\u70AE");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](33, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](34, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](35, "img", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](36, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](37, "\u53CD\u6F5C\u76F4\u5347\u673A");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](38, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](39, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](40, "img", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](41, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](42, "Mk46Mod5\u578B\u9C7C\u96F7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](43, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](44, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](45, "img", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](46, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](47, "SLQ-95AEB\u8BF1\u9975\u88C5\u7F6E");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](48, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](49, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](50, "img", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](51, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](52, "\u201C\u6218\u65A7\u201D\u5DE1\u822A\u5BFC\u5F39");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function WarshipComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2, " \u9AD8\u8230\u9996\uFF0C\u8D2F\u901A\u5F0F\u4E3B\u7532\u677F\u7531\u8230\u9996\u5EF6\u4F38\u81F3\u8230\u5C3E\u98DE\u884C\u7532\u677F\uFF1B\u524D\u7532\u677F\u660E\u663E\u7684\u6B66\u5668\u88C5\u5907\u4EC5\u6709\u7684\u6B66\u5668\u88C5\u5907--5\u82F1\u5BF8\u53E3\u5F84\u8230\u70AE\u5B89\u88C5\u8230\u9996\u4E0E\u8230\u6865\u4E4B\u95F4\uFF1B\u5BFC\u5F39\u5782\u76F4\u53D1\u5C04\u7CFB\u7EDF\u4F4D\u4E8E\u524D\u8230\u70AE\u548C\u8230\u6865\u4EE5\u53CA\u98DE\u884C\u7532\u677F\u524D\u65B9\u4F4D\u7F6E\uFF1B\u9AD8\u5927\u7684\u524D\u4E0A\u5C42\u5EFA\u7B51\u9876\u90E8\u5B89\u88C5\u6709\u5411\u540E\u503E\u659C\u7684\u67F1\u72B6\u4E3B\u6845\uFF1B2\u5EA7\u72EC\u7279\u7684\u5927\u578B\u65B9\u5F62\u70DF\u56F1\u6A2A\u622A\u9762\u4E3A\u65B9\u5F62\uFF0C\u88C5\u4E8E\u8230\u822F\u90E8\u4E24\u4FA7\uFF0C\u9ED1\u8272\u6392\u6C14\u53E3\u7A81\u51FA\u5B89\u88C5\u5728\u9876\u90E8\uFF1B\u8FD1\u7A0B\u9632\u5FA1\u7CFB\u7EDF\u4F4D\u4E8E\u8230\u6865\u524D\u65B9\u4E0A\u5347\u5E73\u53F0\u4EE5\u53CA\u201C\u9C7C\u53C9\u201D\u53CD\u8230\u5BFC\u5F39\u53D1\u5C04\u88C5\u7F6E\u524D\u7F18\u3002\u98DE\u884C\u7532\u677F\u4F4D\u4E8E\u5C3E\u90E8\u3002 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4, "\u5907\u6CE8\uFF1A\u8BE5\u7EA7\u8230\u7684FlighIIA\u578B\u4E0A\u7684\u76F4\u5347\u673A\u5E93\u7A7A\u95F4\u548C\u98DE\u884C\u7532\u677F\u66F4\u5927\uFF1B\u65E5\u672C\u6D77\u4E0A\u81EA\u536B\u961F\u88C5\u5907\u4E86\u8BE5\u7EA7\u8230\u7684\u653E\u5927\u7248\u201C\u91D1\u521A\u201D\u7EA7\u9A71\u9010\u8230\u3002");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function WarshipComponent_div_32_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "a", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
} if (rf & 2) {
    const data_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????propertyInterpolate"]("href", data_r5 == null ? null : data_r5.url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["????sanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](data_r5.name);
} }
function WarshipComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](1, WarshipComponent_div_32_ng_container_1_Template, 3, 2, "ng-container", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const data_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", (data_r5 == null ? null : data_r5.url) !== undefined && (data_r5 == null ? null : data_r5.url) !== null && (data_r5 == null ? null : data_r5.url) !== "");
} }
class WarshipComponent {
    constructor() {
        this.kms = [];
        this.selectedTab = 1;
    }
    ngOnInit() {
        this.recognizeSubscription = this.recognize$.subscribe((recognizeStateModel) => {
            if (recognizeStateModel == null || recognizeStateModel.recognizeJson == null) {
                return;
            }
            this.kms = JSON.parse(recognizeStateModel.recognizeJson);
            // console.log('----->kms', recognizeData);
        });
    }
}
WarshipComponent.??fac = function WarshipComponent_Factory(t) { return new (t || WarshipComponent)(); };
WarshipComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: WarshipComponent, selectors: [["", "app-warship", ""]], attrs: _c0, decls: 34, vars: 13, consts: [[1, "content-top", "flex-column", "border"], [1, "result", "flex-row"], [1, "result-image", "flex-row"], ["src", "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595260824678&di=21b03cf39f1918ad547d2a13ba1d5165&imgtype=0&src=http%3A%2F%2Fhimg2.huanqiu.com%2Fattachment2010%2F2014%2F0822%2F20140822032412123.jpg", "alt", "\u56FE\u7247", 1, "img-responsive"], [1, "result-info", "flex-column"], [1, "result-info-title"], [1, "result-info-main", "flex-row"], [1, "result-info-text"], [1, "result-info-progress"], [1, "result-progress", 2, "width", "100%"], [1, "result-info-number"], [1, "tabs", "flex-column"], [1, "tabs-header", "flex-row"], [1, "tab-item", 3, "click"], [1, "tabs-content"], ["class", "tabs-content-info flex-row ", 4, "ngIf"], ["class", "tabs-content-technology flex-row ", 4, "ngIf"], ["class", "tabs-content-equip flex-row ", 4, "ngIf"], ["class", "tabs-content-feature ", 4, "ngIf"], [1, "content-bottom", "flex-column", 2, "overflow", "scroll"], [1, "content-title", "matching"], ["class", "information flex-column", 4, "ngFor", "ngForOf"], [1, "trimming"], [1, "tabs-content-info", "flex-row"], [1, "info-image", "flex-row"], ["src", "assets/demo/warship-1.jpg", "alt", "\u56FE\u7247", 1, "img-responsive"], [1, "info-list", "flex-column"], [1, "info-list-item"], [1, "tabs-content-technology", "flex-row"], [1, "technology-left"], [1, "technology-main", "flex-row"], [1, "technology-main-item"], [1, "technology-main-info", "flex-column"], [1, "technology-title"], [1, "technology-number"], [1, "technology-unit"], [1, "technology-right"], [1, "tabs-content-equip", "flex-row"], [1, "equip-left", "flex-row"], [1, "equip-top-bd"], [1, "equip-right-bd"], [1, "equip-bottom-bd"], [1, "equip-left-bd"], ["src", "assets/demo2/ship.png", "alt", "\u56FE\u7247", 1, "img-responsive"], [1, "equip-right", "flex-row"], [1, "equip-right-item", "flex-column"], [1, "equip-right-image"], ["src", "assets/demo2/ship1.png", "alt", "\u56FE\u7247", 1, "img-responsive"], [1, "equip-right-text", "ellipsis"], ["src", "assets/demo2/ship2.png", "alt", "\u56FE\u7247", 1, "img-responsive"], ["src", "assets/demo2/ship3.png", "alt", "\u56FE\u7247", 1, "img-responsive"], ["src", "assets/demo2/ship4.png", "alt", "\u56FE\u7247", 1, "img-responsive"], ["src", "assets/demo2/ship5.png", "alt", "\u56FE\u7247", 1, "img-responsive"], ["src", "assets/demo2/ship6.png", "alt", "\u56FE\u7247", 1, "img-responsive"], ["src", "assets/demo2/ship7.png", "alt", "\u56FE\u7247", 1, "img-responsive"], ["src", "assets/demo2/ship8.png", "alt", "\u56FE\u7247", 1, "img-responsive"], ["src", "assets/demo2/ship9.png", "alt", "\u56FE\u7247", 1, "img-responsive"], [1, "tabs-content-feature"], [1, "m-b"], [1, "information", "flex-column"], [4, "ngIf"], ["target", "_blank", 1, "information-item", 3, "href"]], template: function WarshipComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](6, "\u201C\u963F\u5229\u00B7\u4F2F\u514B\u201D\u7EA7\u5BFC\u5F39\u9A71\u9010\u8230");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](9, "\u5339\u914D\u5EA6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](13, "95%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function WarshipComponent_Template_div_click_16_listener() { return ctx.selectedTab = 1; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](17, "\u57FA\u672C\u4FE1\u606F");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function WarshipComponent_Template_div_click_18_listener() { return ctx.selectedTab = 2; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](19, "\u6280\u672F\u6570\u636E");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function WarshipComponent_Template_div_click_20_listener() { return ctx.selectedTab = 3; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](21, "\u6B66\u5668\u88C5\u5907");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function WarshipComponent_Template_div_click_22_listener() { return ctx.selectedTab = 4; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](23, "\u7ED3\u6784\u7279\u70B9");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](24, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](25, WarshipComponent_div_25_Template, 18, 0, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](26, WarshipComponent_div_26_Template, 60, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](27, WarshipComponent_div_27_Template, 53, 0, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](28, WarshipComponent_div_28_Template, 5, 0, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](29, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](30, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](31, "\u6269\u5C55\u8D44\u6599");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](32, WarshipComponent_div_32_Template, 2, 1, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](33, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????classProp"]("active", ctx.selectedTab === 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????classProp"]("active", ctx.selectedTab === 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????classProp"]("active", ctx.selectedTab === 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????classProp"]("active", ctx.selectedTab === 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.selectedTab === 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.selectedTab === 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.selectedTab === 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.selectedTab === 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx.kms);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9hcHAvcGFnZXMvZGV0ZWN0L3dhcnNoaXAvd2Fyc2hpcC5jb21wb25lbnQubGVzcyJ9 */"] });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Select"])(_state_recognize_state__WEBPACK_IMPORTED_MODULE_3__["RecognizeState"])
], WarshipComponent.prototype, "recognize$", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](WarshipComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: '[app-warship]',
                templateUrl: './warship.component.html',
                styleUrls: ['./warship.component.less']
            }]
    }], null, { recognize$: [] }); })();


/***/ }),

/***/ "./src/app/pages/detect2/detect2.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/detect2/detect2.component.ts ***!
  \****************************************************/
/*! exports provided: Detect2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Detect2Component", function() { return Detect2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _core_http_entity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/http-entity */ "./src/app/core/http-entity.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/button */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-button.js");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-wave.js");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-transition-patch.js");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/icon */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-icon.js");











class Detect2Component {
    constructor(router, route, http) {
        this.router = router;
        this.route = route;
        this.http = http;
    }
    drwReact(drwData) {
        let imgUrl = `${localStorage.getItem('targetRecognizePath')}/` + drwData[0].ossKey;
        let img = new Image();
        img.src = imgUrl;
        if (img.complete) {
            var aiLableDom = document.querySelector(".detect2_aiLabel");
            aiLableDom.style.width = img.width + "px";
            let zoomWidth = img.width;
            let imgWidth = img.width;
            let imgHeight = img.height;
            let imgSrc = img.src;
            this.gMapArr = new AILabel.Map(`aiLabel2`, {
                center: { x: imgWidth / 2, y: imgHeight / 2 },
                zoom: imgWidth * 2,
                mode: 'PAN',
                refreshDelayWhenZooming: false,
                zoomWhenDrawing: true,
                panWhenDrawing: false,
                featureCaptureWhenMove: true,
                zoomWheelRatio: 5,
                withHotKeys: true,
                zoomMax: zoomWidth * 10,
                zoomMin: zoomWidth / 10
            });
            var imageLayer = new AILabel.Layer.Image('img', // id
            {
                src: imgSrc,
                width: imgWidth,
                height: imgHeight,
                crossOrigin: true,
                position: {
                    x: 0,
                    y: 0
                },
            }, { name: '?????????????????????' }, { zIndex: 1 });
            this.gMapArr.addLayer(imageLayer);
            this.gfeatureLayer = new AILabel.Layer.Feature(`feature`, { name: '?????????????????????' }, { zIndex: 19 });
            this.gMapArr.addLayer(this.gfeatureLayer);
            this.gFirstTextLayer = new AILabel.Layer.Text('first-layer-text', { name: '?????????????????????' }, { zIndex: 12, opacity: 1 });
            this.gMapArr.addLayer(this.gFirstTextLayer);
            drwData[0].targetJson.forEach(element => {
                var id = `${+new Date()}`;
                let x, y, height, width;
                x = element.minX;
                y = element.minY;
                height = element.maxY - y;
                width = element.maxX - x;
                var feature = new AILabel.Feature.Rect(id, { height, width, x, y }, { name: '123', textId: id }, { fill: true,
                    fillStyle: "#0f0",
                    globalAlpha: 0,
                    lineWidth: 1,
                    opacity: 1,
                    stroke: true,
                    strokeStyle: "red" });
                this.gfeatureLayer.addFeature(feature);
                // ??????feature?????????
                const { x: ltx, y: lty } = { x, y };
                var gFirstText = new AILabel.Text(id, // id
                { text: element.categoryCn, position: { x: ltx, y: lty }, offset: { x: 0, y: 0 } }, // shape, ?????????
                { name: '?????????????????????' }, // props
                { fillStyle: '#15a0ff', strokeStyle: '#f0f8ff00', background: true, globalAlpha: 1, fontColor: '#fff' } // style
                );
                this.gFirstTextLayer.addText(gFirstText);
            });
        }
        else {
            setTimeout(() => {
                this.drwReact(drwData);
            }, 500);
        }
        // var aiLableDom:any = document.querySelector(".detect2_aiLabel")
        // aiLableDom.style.width = imgDom.width+"px";
        //  setTimeout(()=>{
        //       let zoomWidth = imgDom.width
        //       let imgWidth = imgDom.width
        //        let imgHeight =  imgDom.height
        //        let imgSrc  = imgDom.src;
        //       this.gMapArr= new AILabel.Map(`aiLabel2`,{
        //         center: {x: imgWidth/2, y: imgHeight/2}, // ?????????????????????
        //         zoom: imgWidth*2,
        //         mode: 'PAN', // ????????????
        //         refreshDelayWhenZooming: false, // ????????????????????????????????????????????????
        //         zoomWhenDrawing: true,
        //         panWhenDrawing: false,
        //         featureCaptureWhenMove:true,
        //         zoomWheelRatio: 5 , // ????????????????????????[0, 10), ??????????????????????????????????????????
        //         withHotKeys: true ,// ???????????????
        //         zoomMax: zoomWidth * 10,
        //         zoomMin: zoomWidth / 10
        //     }) 
        //     var imageLayer = new AILabel.Layer.Image(
        //       'img', // id
        //       {
        //         src: imgSrc,
        //         width: imgWidth,
        //         height: imgHeight,
        //         crossOrigin: true, // ????????????????????????????????????true
        //         position: { // ????????????????????????????????????
        //             x: 0,
        //             y: 0
        //         },
        //       },
        //       {name: '?????????????????????'},
        //       {zIndex: 1} 
        //     );
        //     this.gMapArr.addLayer(imageLayer)
        //     this.gfeatureLayer = new AILabel.Layer.Feature(`feature`, {name: '?????????????????????'}, {zIndex:19});
        //     this.gMapArr.addLayer(this.gfeatureLayer)
        //     let x,y,height,width;
        //     x = 100
        //     y = 200
        //     height = 150
        //     width = 50
        //       var feature = new AILabel.Feature.Rect(Math.round(Math.random()*100000), 
        //       {height,width,x,y}, 
        //       {name:'123',textId: ""}, 
        //       {fill: true,
        //         fillStyle: "#0f0",
        //         globalAlpha: 0,
        //         lineWidth: 1,
        //         opacity: 1,
        //         stroke: true,
        //         strokeStyle: "red"}
        //     );
        //     this.gfeatureLayer.addFeature(feature)
        //       },1000)
    }
    ngOnInit() {
        this.route.paramMap.subscribe((paramMap) => {
            if (paramMap.has("detectId")) {
                var detectId = paramMap.params.detectId;
                const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
                    .append('pageIndex', '1')
                    .append('pageSize', '500')
                    .append('detectId', detectId);
                this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API_URL}/v1/detect-history`, {
                    params
                }).subscribe((result) => {
                    if (_core_http_entity__WEBPACK_IMPORTED_MODULE_3__["HttpResult"].succeed(result.code)) {
                        console.log();
                        var resultData = result.data.records;
                        this.drwReact(resultData);
                        // this.detectHistory = result.data.records;
                        // this.total = result.data.total;
                        // if (this.total > 0) {
                        //   this.currentDetectResult = this.detectHistory[0];
                        //   this.showDetectResult();
                        // }
                    }
                });
            }
        });
        // this.drwReact();
    }
    toHome2() {
        this.router.navigate(['/home2']);
    }
}
Detect2Component.??fac = function Detect2Component_Factory(t) { return new (t || Detect2Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
Detect2Component.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: Detect2Component, selectors: [["app-detect2"]], decls: 6, vars: 0, consts: [[1, "detect2"], ["nz-button", "", "nzType", "primary", 2, "z-index", "9999", "margin-top", "50px", 3, "click"], ["nz-icon", "", "nzType", "left"], ["src", "../../../assets/images/2.jpg", "alt", "", 2, "display", "none"], ["id", "aiLabel2", 1, "detect2_aiLabel"]], template: function Detect2Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function Detect2Component_Template_button_click_1_listener() { return ctx.toHome2(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, " Go back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, directives: [ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_6__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_7__["??NzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_8__["NzIconDirective"]], styles: [".detect2[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.detect2[_ngcontent-%COMP%]   .detect2_aiLabel[_ngcontent-%COMP%] {\n  width: 500px;\n  height: 500px;\n  margin: 0 auto;\n  margin-top: 50px;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC9wYWdlcy9kZXRlY3QyL0Q6L2ZmL3RhcmdldC1yZWNvZ25pemUtd3d3LWh0bWwtVjAuMi9zcmMvYXBwL3BhZ2VzL2RldGVjdDIvZGV0ZWN0Mi5jb21wb25lbnQubGVzcyIsIi4uL2FwcC9wYWdlcy9kZXRlY3QyL2RldGVjdDIuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxrQkFBQTtBQ0FKO0FERkE7RUFJUSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDQ1IiLCJmaWxlIjoiLi4vYXBwL3BhZ2VzL2RldGVjdDIvZGV0ZWN0Mi5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZXRlY3Qye1xuXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIC5kZXRlY3QyX2FpTGFiZWx7XG4gICAgICAgIHdpZHRoOiA1MDBweDtcbiAgICAgICAgaGVpZ2h0OiA1MDBweDtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgfVxufSIsIi5kZXRlY3QyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmRldGVjdDIgLmRldGVjdDJfYWlMYWJlbCB7XG4gIHdpZHRoOiA1MDBweDtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](Detect2Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-detect2',
                templateUrl: './detect2.component.html',
                styleUrls: ['./detect2.component.less']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _core_http_entity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/http-entity */ "./src/app/core/http-entity.ts");
/* harmony import */ var _state_video_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../state/video.action */ "./src/app/state/video.action.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! echarts */ "./node_modules/echarts/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd.js");
/* harmony import */ var _app_pipes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../app.pipes */ "./src/app/app.pipes.ts");
/* harmony import */ var src_app_video_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/video.service */ "./src/app/video.service.ts");
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/message */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-message.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/grid */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-grid.js");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/input */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-input.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/button */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-button.js");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-wave.js");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-transition-patch.js");
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/select */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-select.js");
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/table */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-table.js");
/* harmony import */ var ng_zorro_antd_pagination__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng-zorro-antd/pagination */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-pagination.js");
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng-zorro-antd/radio */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-radio.js");
/* harmony import */ var _directives_drag_drop_upload_directive__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../directives/drag-drop-upload.directive */ "./src/app/directives/drag-drop-upload.directive.ts");
/* harmony import */ var ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ng-zorro-antd/progress */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-progress.js");




























const _c0 = ["filesInput"];
function HomeComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "\u8BF7\u7A0D\u5019....");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function HomeComponent_tr_63_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "td", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "td", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HomeComponent_tr_63_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r23); const data_r20 = ctx.$implicit; const key_r21 = ctx.index; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r22.deatailFormAction(data_r20, key_r21); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "\u8BE6\u60C5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const data_r20 = ctx.$implicit;
    const key_r21 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](key_r21 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](data_r20.discernName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](data_r20.standardName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](data_r20.status == "1" ? "\u8BC6\u522B\u9519\u8BEF" : "\u6F0F\u68C0");
} }
function HomeComponent_label_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "label", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const item_r24 = ctx.$implicit;
    const key_r25 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzValue", key_r25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](item_r24);
} }
function HomeComponent_label_80_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "label", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const item_r26 = ctx.$implicit;
    const key_r27 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzValue", key_r27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](item_r26);
} }
function HomeComponent_button_100_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HomeComponent_button_100_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r28.fenxi(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "\u5F00\u59CB\u5206\u6790");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function HomeComponent_button_101_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HomeComponent_button_101_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r30.stopFenxi(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r6.winboxData.stopButtonValue);
} }
function HomeComponent_button_102_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HomeComponent_button_102_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r32.overFenxi(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "\u505C\u6B62\u5206\u6790");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function HomeComponent_div_111_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "\u5206\u6790\u8FDB\u5EA6\uFF1A");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "nz-progress", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzPercent", ctx_r8.winboxData.progress);
} }
function HomeComponent_p_112_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("\u51C6\u786E\u7387\uFF1A", ctx_r9.winboxData.accuracyRate, "");
} }
function HomeComponent_p_113_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("\u8BEF\u68C0\u7387\uFF1A", ctx_r10.winboxData.errorRate, "");
} }
function HomeComponent_p_114_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("\u6F0F\u68C0\u7387\uFF1A", ctx_r11.winboxData.lossRate, "");
} }
function HomeComponent_div_117_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HomeComponent_div_117_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r35); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r34.perList(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "svg", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "path", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function HomeComponent_div_118_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HomeComponent_div_118_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r37); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r36.nextList(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "svg", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "path", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
const _c1 = function (a0) { return { "select": a0 }; };
function HomeComponent_li_189_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HomeComponent_li_189_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r41); const key_r39 = ctx.index; const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r40.changeBorderShow(key_r39); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "img", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "div", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const item_r38 = ctx.$implicit;
    const key_r39 = ctx.index;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](3, _c1, key_r39 == ctx_r15.borderShow));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("src", item_r38.icon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", item_r38.text, " ");
} }
function HomeComponent_li_204_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HomeComponent_li_204_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r45); const key_r43 = ctx.index; const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r44.toShow(key_r43); })("mouseover", function HomeComponent_li_204_Template_li_mouseover_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r45); const key_r43 = ctx.index; const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r46.liMouseOver(key_r43); })("mouseleave", function HomeComponent_li_204_Template_li_mouseleave_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r45); const key_r43 = ctx.index; const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r47.liMouseLeave(key_r43); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const item_r42 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", item_r42.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](item_r42.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](item_r42.text);
} }
function HomeComponent_li_210_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const item_r48 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", item_r48.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](item_r48.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](item_r48.text);
} }
function HomeComponent_li_256_Template(rf, ctx) { if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "img", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HomeComponent_li_256_Template_img_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r51); const hotImg_r49 = ctx.$implicit; const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r50.detectHotspot(hotImg_r49); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](2, "ossPath");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const hotImg_r49 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](2, 1, hotImg_r49), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
} }
function HomeComponent_li_264_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const newsItem_r52 = ctx.$implicit;
    const key_r53 = ctx.index;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("href", "/news;iframe=", ctx_r19.news[key_r53].src, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", newsItem_r52.text, "");
} }
const _c2 = function () { return { minRows: 3, maxRows: 5 }; };
const _c3 = function () { return { x: "", y: "680px" }; };
const _c4 = function () { return [10, 50, 100, 500]; };
class HomeComponent {
    constructor(http, store, router, nzModal, ossPathPipe, videoService, message) {
        this.http = http;
        this.store = store;
        this.router = router;
        this.nzModal = nzModal;
        this.ossPathPipe = ossPathPipe;
        this.videoService = videoService;
        this.message = message;
        this.homeLink = localStorage.getItem("homeLink");
        this.isSpinning = false;
        this.formatOne = (percent) => `${percent} Days`;
        this.formatTwo = () => `Done`;
        this.hotspots = [];
        this.news = [{ text: "???????????????????????????????????????......", src: "../../../assets/news/1/1.html" }, { text: "???????????????????????????????????????......", src: "../../../assets/news/2/2.html" }, { text: "???????????????????????????F-35??????......", src: "../../../assets/news/3/3.html" }, { text: "??????????????????160M????????????......", src: "../../../assets/news/4/4.html" }];
        this.typeTrainCount = {
            KJG: 0,
            YG: 0,
            HW: 0,
            SAR: 0
        };
        this.current = 1;
        this.winboxData = {
            tastkId: '',
            status: '',
            count: 0,
            progress: 0,
            historySelect: 0,
            interVal: '',
            isOpen: false,
            accuracyRate: '99%',
            errorRate: '0.1%',
            lossRate: '0',
            historyPageIndex: 1,
            historyTotal: 0,
            nextButtonisShow: true,
            fenxiButtonisShow: true,
            stopButtonValue: "????????????",
            loding: false,
            history: [{
                    id: "",
                    createTime: '2022/1/25 17:40',
                    updateTime: '2022/1/25 17:40',
                    imgCount: 0,
                    accuracyRate: '99%',
                    errorRate: '0.1%',
                    lossRate: '0',
                    result: 'A+'
                }],
            modalData: {
                list: {
                    pageIndex: 1,
                    pageSize: 50,
                    standardName: '',
                    status: '',
                    total: 0,
                    listOfData: []
                },
                radioValue: 0,
                radioValue1: 0,
                detail: {
                    discernName: [],
                    discernType: [],
                    standardName: "",
                    imgUrl: ""
                },
                errorCorrectionData: {
                    errorCorrectionMsg: ""
                }
            },
        };
        this.progress = 30;
        this.imageAllCount = {
            kjg: 0,
            yg: 0,
            hw: 0,
            sar: 0
        };
        this.dataAnalysis = "??????????????????";
        this.dataAnaStatus = "";
        // ossPath:any = "http://microismile.cn:9000/target-recognize";
        this.navArr = [
            {
                icon: "assets/images/analys1.png",
                text: "????????????"
            },
            {
                icon: "assets/images/persion.png",
                text: "????????????"
            },
            {
                icon: "assets/images/arms.png",
                text: "????????????"
            },
            {
                icon: "assets/images/safe.png",
                text: "????????????"
            },
            {
                icon: "assets/images/video.png",
                text: "????????????"
            },
            {
                icon: "assets/images/img.png",
                text: "????????????"
            }
        ];
        this.borderShow = 0;
        // public listOfData: Array<{ name: string; age: number; address: string }> = [];
        this.resultList = [
            {
                src: 'assets/images/tragetPic.png',
                title: '???????????????',
                text: '???????????????????????????SAR?????????4??????500?????????????????????100???+???'
            },
            {
                src: 'assets/images/detectModel.png',
                title: '???????????????',
                text: '???????????????????????????????????????????????????????????????'
            },
            {
                src: 'assets/images/videoPic.png',
                title: '???????????????',
                text: '??????????????????????????????'
            },
            {
                src: 'assets/images/analysisPic.png',
                title: '???????????????',
                text: '???????????????????????????????????????'
            }
        ];
        this.animationBoolean = false;
        this.serverList = [
            {
                src: 'assets/images/web.png',
                title: '??????',
                text: '?????????????????????PC?????????'
            },
            {
                src: 'assets/images/mobile.png',
                title: '?????????',
                text: '??????App?????????????????????'
            },
            {
                src: 'assets/images/equipment.png',
                title: '??????',
                text: '????????????????????????????????????'
            },
            {
                src: 'assets/images/SDK.png',
                title: 'SDK',
                text: '????????????API????????????????????????????????????'
            }
        ];
        this.labeArr = [];
        localStorage.removeItem('videoData');
    }
    ngOnInit() {
        localStorage.setItem("detectResult", "[]");
        var that = this;
        axios__WEBPACK_IMPORTED_MODULE_5___default.a.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL}/v1/detect-history/detect-search-status`, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('Bearer'),
                'TR-Role': 'TR-User'
            }
        })
            .then((response) => {
            this.labeArr = [];
            $.each(response.data.data, function (i, n) {
                if (n.sampleTypeEnName) {
                    that.labeArr.push(n.sampleTypeEnName);
                }
            });
        });
        this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL}/v1/users/0`).subscribe((result) => {
            if (_core_http_entity__WEBPACK_IMPORTED_MODULE_2__["HttpResult"].succeed(result.code)) {
                this.user = result.data;
            }
        });
        this.loadHotspot();
        this.loadAllImageCount();
        this.keyboardSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])(window, 'keydown').subscribe((event) => {
            if (event.keyCode == 13) {
                this.searchImg();
            }
        });
    }
    thumbnail(index) {
        $('.thumbnail li').removeClass('active');
        $('.thumbnail li').eq(index).addClass('active');
        this.workShow();
        this.winboxData.historySelect = index;
    }
    workShow() {
        var obj = $('.thumbnail li.active img');
        $(".board-img").find('img').removeClass('board-ani');
        $(".board-img").find('a').attr('href', obj.attr('url'));
        $(".board-img").find('div').remove();
        setTimeout(function () {
            $(".board-img").find('img').attr('src', obj.attr('data'));
            $(".board-img").find('img').addClass('board-ani');
            $(".board-img").find('img').after('<div class="board-text-ani">' + obj.attr('alt') + '</div>');
        }, 100);
    }
    batchDiscern(isDetailOpen) {
        if (isDetailOpen == 'true') {
            this.winboxData.modalData.list.pageIndex = 1;
        }
        axios__WEBPACK_IMPORTED_MODULE_5___default.a.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL}/v1/batchDiscern/queryPage?pageIndex=${this.winboxData.modalData.list.pageIndex}&pageSize=${this.winboxData.modalData.list.pageSize}&standardName=${this.winboxData.modalData.list.standardName}&status=${this.winboxData.modalData.list.status}&disernLogId=${this.winboxData.history[this.winboxData.historySelect].id}`, {
            pageIndex: this.winboxData.modalData.list.pageIndex,
            pageSize: this.winboxData.modalData.list.pageSize,
            standardName: this.winboxData.modalData.list.standardName,
            status: this.winboxData.modalData.list.status,
            disernLogId: this.winboxData.history[this.winboxData.historySelect].id
        }, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('Bearer'),
                'TR-Role': 'TR-User'
            }
        })
            .then(data => {
            this.winboxData.modalData.list.listOfData = data.data.data.records;
            this.winboxData.modalData.list.total = data.data.data.total;
            if (this.winboxData.modalData.list.total > 0) {
                $(".ant-table-placeholder").css("display", "none");
            }
            document.querySelector("#modal-container > div > div > div.digital > nz-table > nz-spin > div > div > nz-table-inner-scroll > div > div.ant-table-body.ng-star-inserted").scrollTop = 0;
        })
            .catch(e => {
            // if(e.response.status == 401){
            //   this.router.navigate(['/login']);
            // }
        });
    }
    batchDiscernById(id) {
        axios__WEBPACK_IMPORTED_MODULE_5___default.a.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL}/v1/batchDiscern/queryById?id=${id}`, {
            id
        }, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('Bearer'),
                'TR-Role': 'TR-User'
            }
        })
            .then(data => {
            this.winboxData.modalData.detail = JSON.parse(data.data.data);
            this.winboxData.modalData.detail.discernName = JSON.parse(this.winboxData.modalData.detail.discernName);
            this.winboxData.modalData.errorCorrectionData.errorCorrectionMsg = this.winboxData.modalData.detail.standardName;
            if (this.winboxData.modalData.detail)
                this.winboxData.modalData.detail.discernType = JSON.parse(this.winboxData.modalData.detail.ext1);
        })
            .catch(e => {
            // if(e.response.status == 401){
            //   this.router.navigate(['/login']);
            // }
        });
    }
    setanothername() {
        // console.log(this.winboxData.modalData.deatile)
        let discernType;
        try {
            discernType = this.winboxData.modalData.detail.discernType[this.winboxData.modalData.radioValue1];
        }
        catch (e) {
            discernType = "";
        }
        axios__WEBPACK_IMPORTED_MODULE_5___default.a.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL}/v1/batchDiscern/insertSampleOssType?standardName=${this.winboxData.modalData.detail.standardName}&discernName=${this.winboxData.modalData.detail.discernName[this.winboxData.modalData.radioValue]}&discernType=${discernType}`, {
            standardName: this.winboxData.modalData.detail.standardName,
            discernName: this.winboxData.modalData.detail.discernName[this.winboxData.modalData.radioValue],
            discernType: discernType,
        }, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('Bearer'),
                'TR-Role': 'TR-User'
            }
        })
            .then(data => {
            // console.log(data.data.code)
            if (data.data.code == 1) {
                this.message.success(data.data.message, {
                    nzDuration: 3000
                });
            }
        })
            .catch(e => {
            // if(e.response.status == 401){
            //   this.router.navigate(['/login']);
            // }
        });
        // alert(this.winboxData.modalData.detail.discernName[this.winboxData.modalData.radioValue])
    }
    comparisonDeatil(event) {
        this.winboxData.modalData.list.pageIndex = 1;
        $("#modal-container").css("display", "table");
        var buttonId = event.target.id;
        $('#modal-container').removeAttr('class').addClass(buttonId);
        $('body').addClass('modal-active');
        this.batchDiscern('false');
    }
    closeTable() {
        $('#modal-container').addClass('out');
        $('body').removeClass('modal-active');
        $(".modal-detaile").css("display", "none");
        $(".modal").css({ left: '0' });
        $("#CorrectionErrorBox > div.wb-header > div.wb-icon > span.wb-close").click();
    }
    dataBackground() {
        var container = document.getElementById('dataContent');
        try {
            $("#dataContent>canvas").remove();
        }
        catch (e) { }
        var renderer = new FSS.CanvasRenderer();
        var scene = new FSS.Scene();
        var light = new FSS.Light('#192539', '#416296');
        var width = $("#dataContent").css("width").split("px")[0];
        var height = $("#dataContent").css("height").split("px")[0];
        var that = this;
        var geometry = new FSS.Plane(width, height, 24, 12);
        var material = new FSS.Material('#FFFFFF', '#FFFFFF');
        var mesh = new FSS.Mesh(geometry, material);
        var now, start = Date.now();
        function initialise() {
            scene.add(mesh);
            scene.add(light);
            container.appendChild(renderer.element);
            window.addEventListener('resize', resize);
        }
        function resize() {
            renderer.setSize(container.offsetWidth, container.offsetHeight);
        }
        function animate() {
            now = Date.now() - start;
            light.setPosition(300 * Math.sin(now * 0.001), 200 * Math.cos(now * 0.0005), 60);
            renderer.render(scene);
            requestAnimationFrame(animate);
        }
        initialise();
        resize();
        animate();
        this.workShow();
        console.log();
    }
    starCanvas() {
        setTimeout(() => {
            var canvas = document.getElementById('canvas'), ctx = canvas.getContext('2d'), w = canvas.width = window.innerWidth, h = canvas.height = window.innerHeight, hue = 217, stars = [], count = 0, maxStars = 1300; //????????????
            var canvas2 = document.createElement('canvas'), ctx2 = canvas2.getContext('2d');
            canvas2.width = 100;
            canvas2.height = 100;
            var half = canvas2.width / 2, gradient2 = ctx2.createRadialGradient(half, half, 0, half, half, half);
            gradient2.addColorStop(0.025, '#CCC');
            gradient2.addColorStop(0.1, 'hsl(' + hue + ', 61%, 33%)');
            gradient2.addColorStop(0.25, 'hsl(' + hue + ', 64%, 6%)');
            gradient2.addColorStop(1, 'transparent');
            ctx2.fillStyle = gradient2;
            ctx2.beginPath();
            ctx2.arc(half, half, half, 0, Math.PI * 2);
            ctx2.fill();
            // End cache
            function random(...args) {
                if (args.length < 2) {
                    args[1] = args[0];
                    args[0] = 0;
                }
                if (args[0] > args[1]) {
                    var hold = args[1];
                    args[1] = args[0];
                    args[0] = hold;
                }
                return Math.floor(Math.random() * (args[1] - args[0] + 1)) + args[0];
            }
            function maxOrbit(x, y) {
                var max = Math.max(x, y), diameter = Math.round(Math.sqrt(max * max + max * max));
                return diameter / 2;
                //?????????????????????????????????????????????
            }
            var Star = function () {
                this.orbitRadius = random(maxOrbit(w, h));
                this.radius = random(60, this.orbitRadius) / 8;
                //????????????
                this.orbitX = w / 2;
                this.orbitY = h / 2;
                this.timePassed = random(0, maxStars);
                this.speed = random(this.orbitRadius) / 500000;
                //??????????????????
                this.alpha = random(2, 10) / 10;
                count++;
                stars[count] = this;
            };
            Star.prototype.draw = function () {
                var x = Math.sin(this.timePassed) * this.orbitRadius + this.orbitX, y = Math.cos(this.timePassed) * this.orbitRadius + this.orbitY, twinkle = random(10);
                if (twinkle === 1 && this.alpha > 0) {
                    this.alpha -= 0.05;
                }
                else if (twinkle === 2 && this.alpha < 1) {
                    this.alpha += 0.05;
                }
                ctx.globalAlpha = this.alpha;
                ctx.drawImage(canvas2, x - this.radius / 2, y - this.radius / 2, this.radius, this.radius);
                this.timePassed += this.speed;
            };
            for (var i = 0; i < maxStars; i++) {
                new Star();
            }
            function animation() {
                ctx.globalCompositeOperation = 'source-over';
                ctx.globalAlpha = 0.5; //??????
                ctx.fillStyle = 'hsla(' + hue + ', 64%, 6%, 2)';
                ctx.fillRect(0, 0, w, h);
                ctx.globalCompositeOperation = 'lighter';
                for (var i = 1, l = stars.length; i < l; i++) {
                    stars[i].draw();
                }
                ;
                window.requestAnimationFrame(animation);
            }
            animation();
        }, 500);
    }
    ngAfterViewInit() {
        //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
        //Add 'implements AfterViewInit' to the class.
        this.starCanvas();
        try {
            var detectId = window.location.pathname.split(";")[1].split("=").indexOf("detectId") != -1;
            if (detectId) {
                var arr = window.location.pathname.split(";")[1].split("=");
                this.router.navigate(['/detect']);
                this.router.navigate(['/detect', { detectId: arr[1], homeToDetect: true, borderShow: this.borderShow }]);
            }
        }
        catch (e) {
            console.log("detectId is undefind");
        }
        this.requsetProgress();
    }
    liMouseLeave(key) {
        $(".achievements li").find("h3")[key].style.color = "#fff";
        $(".achievements li").find("h3")[key].style.bottom = "0px";
        let selectIcon = this.resultList[key].src;
        if (selectIcon.split(".")[0].endsWith("1")) {
            let s1 = selectIcon.split(".")[0];
            this.resultList[key].src = s1.substring(0, s1.length - 1) + "." + selectIcon.split(".")[1];
        }
    }
    liMouseOver(key) {
        $(".achievements li").find("h3")[key].style.color = "#357af6";
        $(".achievements li").find("h3")[key].style.bottom = "100px";
        let selectIcon = this.resultList[key].src;
        if (!selectIcon.split(".")[0].endsWith("1")) {
            let s1 = selectIcon.split(".")[0];
            this.resultList[key].src = s1 + "1." + selectIcon.split(".")[1];
        }
    }
    toShow(key) {
        if (key == 1) {
            this.router.navigate(['/model']);
        }
        else if (key == 2) {
            this.router.navigate(['/target2']);
        }
        else if (key == 0) {
            var sampleResourcePath = localStorage.getItem("sampleResourcePath");
            var bee = localStorage.getItem("Bearer");
            window.location.href = `${localStorage.getItem("mgrPath")}#${bee}#${sampleResourcePath}`;
        }
        else {
            var sampleResourcePath = localStorage.getItem("sampleResourcePath");
            var bee = localStorage.getItem("Bearer");
            window.location.href = `${localStorage.getItem("dataCountHeaderPath")}/console/data-statistics#${bee}#${sampleResourcePath}`;
        }
    }
    changeBorderShow(key) {
        this.borderShow = key;
        this.navArr.forEach((x) => {
            let incon = x.icon;
            if (incon.split(".")[0].endsWith("1")) {
                let s = incon.split(".")[0];
                x.icon = s.substring(0, s.length - 1) + "." + incon.split(".")[1];
            }
        });
        let selectIcon = this.navArr[key].icon;
        if (!selectIcon.split(".")[0].endsWith("1")) {
            let s1 = selectIcon.split(".")[0];
            this.navArr[key].icon = s1 + "1." + selectIcon.split(".")[1];
        }
    }
    fileUpload(evt) {
        const fileList = evt.target.files;
        const fileCount = fileList.length;
        this.onFileDropped(fileList);
        // ?????????????????????????????????
        // let videoCount = 0;
        // for (let i = 0; i < fileCount; i++) {
        //   if (fileList[i].type.split('/')[0] == 'video'){
        //     // ????????????
        //     videoCount++;
        //     if (fileCount > 1) {
        //       // ??????????????????
        //       this.nzModal.error({
        //         nzTitle: '??????????????????????????????'
        //       });
        //     } else {
        //       this.onFileDropped(fileList);
        //       // ???????????????????????????????????????????????????
        //        this.store.dispatch(new VideoAction(fileList[i]));
        //        this.router.navigate(['/detect']);
        //     }
        //     return;
        //   }else{
        //     return alert("????????????????????????????????????????????????")
        //   }
        // }
        // if (videoCount === 0) {
        //   // ??????????????????????????????
        //   if (fileList.length > 500) {
        //     // ????????????????????????500???
        //     this.nzModal.error({
        //       nzTitle: '??????????????????20???'
        //     });
        //     this.clearFiles();
        //     return;
        //   }
        //   if (fileList.length > 0) {
        //     this.onFileDropped(fileList);
        //   }
        // }
    }
    clearFiles() {
        this.filesInputElm.nativeElement.value = '';
    }
    onPasteImage(evt) {
        if (!(evt.clipboardData && evt.clipboardData.items)) {
            // ??????????????????
            return;
        }
        for (let i = 0, len = evt.clipboardData.items.length; i < len; i++) {
            const item = evt.clipboardData.items[i];
            if (item.kind === 'string') {
                // ????????????
                // ?????????item.getAsString??????????????????????????????promise???????????????????????
                const promise = new Promise((resolve, reject) => {
                    item.getAsString((url) => {
                        // ????????? this.uploadWithUrl(imageUrl);???????????????????????????????????????bug?????????bug??????detect???????????????????????????????????????ngOnInit??????????????????
                        resolve(url);
                    });
                });
                promise.then((imageUrl) => {
                    this.uploadWithUrl(imageUrl);
                });
            }
            else if (item.kind === 'file') {
                const file = item.getAsFile();
                const formData = new FormData();
                formData.append('files', file);
                this.uploadWithFiles(formData);
            }
            // ???????????????
            break;
        }
    }
    initEcharts2(data) {
        const lineChartOption = {
            color: ['#357af6'],
            grid: {
                top: 10,
                left: '5%',
                bottom: 10
            },
            xAxis: {
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                axisLabel: {
                    show: false
                }
            },
            yAxis: {
                data: ['', ''],
                type: 'category',
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                interval: 0
            },
            series: [
                {
                    data: data,
                    barWidth: 15,
                    type: 'bar',
                    showBackground: true,
                    backgroundStyle: {
                        color: '#aaaaaa',
                        borderRadius: 15,
                    },
                    itemStyle: {
                        normal: {
                            barBorderRadius: 15,
                            label: {
                                show: false,
                                position: 'insideRight'
                            }
                        }
                    }
                }
            ]
        };
        var lineEchart1 = echarts__WEBPACK_IMPORTED_MODULE_6__["init"](document.getElementById("recommendecharts1"));
        lineEchart1.setOption(lineChartOption);
    }
    initEcharts1(data) {
        const lineChartOption = {
            color: ['#357af6'],
            grid: {
                top: 10,
                left: '5%',
                bottom: 10
            },
            xAxis: {
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                axisLabel: {
                    show: false
                }
            },
            yAxis: {
                data: ['', ''],
                type: 'category',
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                interval: 0
            },
            series: [
                {
                    data: data,
                    barWidth: 15,
                    type: 'bar',
                    showBackground: true,
                    backgroundStyle: {
                        color: '#aaaaaa',
                        borderRadius: 15,
                    },
                    itemStyle: {
                        normal: {
                            barBorderRadius: 15,
                            label: {
                                show: false,
                                position: 'insideRight'
                            }
                        }
                    }
                }
            ]
        };
        var lineEchart = echarts__WEBPACK_IMPORTED_MODULE_6__["init"](document.getElementById("recommendecharts"));
        lineEchart.setOption(lineChartOption);
    }
    onFileDropped(fileList) {
        var isTypeSame = true;
        var typeArr = [];
        var fileListArr = [];
        const fileCount = fileList.length;
        var fileListArr2 = [];
        for (let i = 0; i < fileList.length; i++) {
            fileListArr2.push(fileList[i]);
            typeArr.push(fileList[i].type.split("/")[0]);
        }
        if (!this.isAllEqual(typeArr, fileListArr2)) {
            alert("???????????????????????????????????????????????????gif/jfif????????????");
        }
        else {
            const formData = new FormData();
            //  if( fileList.length >10  ) return alert('????????????????????????10???')
            let fileBig = false;
            if (fileList[0].type.split('/')[0] == 'video' && this.borderShow == 4) {
                for (let i = 0; i < fileList.length; i++) {
                    if (fileList[i].size > 52428800) {
                        fileBig = true;
                    }
                    else {
                        formData.append('file', fileList[i]);
                    }
                }
                if (!fileBig) {
                    this.videoService.sendVideoFile(fileList);
                    this.router.navigate(['/video']);
                }
                else {
                    alert("????????????????????????50M???");
                }
            }
            else if (fileList[0].type.split('/')[0] == 'image' && this.borderShow != 4 && this.borderShow != 5) {
                if (typeArr.length > 20) {
                    alert("??????????????????20???");
                }
                else {
                    for (let i = 0; i < fileList.length; i++) {
                        formData.append('files', fileList[i]);
                    }
                    this.router.navigate(['/detect']);
                    this.uploadWithFiles(formData);
                }
            }
            else if (fileList[0].type.split('/')[0] == 'image' && this.borderShow == 5) {
                if (typeArr.length > 1) {
                    alert("??????????????????1???");
                }
                else {
                    for (let i = 0; i < fileList.length; i++) {
                        formData.append('files', fileList[i]);
                    }
                    this.router.navigate(['/detect']);
                    this.uploadWithFiles(formData);
                }
            }
            else if (fileList[0].type.split('/')[0] == 'video' && this.borderShow != 4) {
                var videoCount = 0;
                for (let i = 0; i < fileCount; i++) {
                    // ????????????
                    videoCount++;
                    if (fileCount > 1) {
                        // ??????????????????
                        this.nzModal.error({
                            nzTitle: '??????????????????????????????'
                        });
                    }
                    else {
                        for (let i = 0; i < fileList.length; i++) {
                            formData.append('file', fileList[i]);
                        }
                        this.store.dispatch(new _state_video_action__WEBPACK_IMPORTED_MODULE_3__["VideoAction"](fileList[i]));
                        this.uploadWithFiles(formData);
                        this.router.navigate(['/detect']);
                    }
                    return;
                }
            }
            else if (fileList[0].type.split('/')[0] != 'video' && this.borderShow == 4) {
                alert("????????????????????????????????????????????????");
            }
            else {
                alert("????????????????????????????????????");
            }
        }
        this.clearFiles();
    }
    isAllEqual(array, fileListArr2) {
        if (array.length > 0) {
            return !array.some(function (value, index) {
                var lastName = fileListArr2[index].name.split(".")[fileListArr2[index].name.split(".").length - 1];
                // if(fileListArr2[index].type.split("/")[1] == 'gif'){
                //     return true;
                // }
                if (lastName == 'gif' || lastName == 'jfif') {
                    return true;
                }
                return value !== array[0];
            });
        }
        else {
            return true;
        }
    }
    uploadWithFiles(formData) {
        this.isSpinning = true;
        this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL}/v1/detect/files`, formData).subscribe((result) => {
            this.isSpinning = false;
            if (_core_http_entity__WEBPACK_IMPORTED_MODULE_2__["HttpResult"].succeed(result.code)) {
                this.router.navigate(['/detect', { detectId: result.data, borderShow: this.borderShow }]);
            }
            else {
                this.nzModal.error({
                    nzTitle: '????????????',
                    nzContent: result.message
                });
            }
        }, () => {
            this.isSpinning = false;
            this.clearFiles();
        });
    }
    uploadWithVideoFiles(frame) {
        this.isSpinning = true;
        this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL}/v1/frame-detect/frameToImg`, frame).subscribe((result) => {
            this.isSpinning = false;
            if (result.data.length != 0 || result.data != null) {
                // localStorage.setItem('videoData',JSON.stringify(result.data))
                // if(localStorage.getItem('videoData')){
                //   this.router.navigate(['/video', {detectId: result.data}]);
                // }
            }
            else {
                this.nzModal.error({
                    nzTitle: '????????????',
                    nzContent: result.message
                });
            }
        }, () => {
            this.isSpinning = false;
            this.clearFiles();
        });
    }
    uploadWithUrl(url) {
        this.isSpinning = true;
        this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL}/v1/detect/link`, {
            url
        }).subscribe((result) => {
            this.isSpinning = false;
            if (_core_http_entity__WEBPACK_IMPORTED_MODULE_2__["HttpResult"].succeed(result.code)) {
                this.router.navigate(['/detect', { detectId: result.data }]);
            }
            else {
                this.clearFiles();
                this.nzModal.error({
                    nzTitle: '??????????????????'
                });
                this.pasteText = '';
            }
        }, () => {
            this.isSpinning = false;
            this.clearFiles();
            this.nzModal.error({
                nzTitle: '??????????????????????????????'
            });
            this.pasteText = '';
        });
    }
    loadHotspot() {
        this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL}/v1/hotspots`).subscribe((result) => {
            if (_core_http_entity__WEBPACK_IMPORTED_MODULE_2__["HttpResult"].succeed(result.code)) {
                this.hotspots = result.data;
            }
        });
    }
    searchImg() {
        if ($("#dataWinBox").length == 0) {
            if (!$(".search-img").val()) {
                this.message.error("????????????????????????", {
                    nzDuration: 3000
                });
            }
            else {
                this.router.navigate(['/detect', { textSearch: $(".search-img").val(), borderShow: 6 }]);
            }
        }
    }
    detectHotspot(ossKey) {
        this.uploadWithUrl(this.ossPathPipe.transform(ossKey));
    }
    loadTypeTrainCount() {
        this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL}/v1/sample-oss-file/getTypeTrainCount`).subscribe((result) => {
            if (_core_http_entity__WEBPACK_IMPORTED_MODULE_2__["HttpResult"].succeed(result.code)) {
                for (let i = 0, len = result.data.length; i < len; i++) {
                    if (result.data[i].hasOwnProperty("KJG")) {
                        this.typeTrainCount.KJG = result.data[i].KJG;
                    }
                    else if (result.data[i].hasOwnProperty("HW")) {
                        this.typeTrainCount.HW = result.data[i].HW;
                    }
                    else if (result.data[i].hasOwnProperty("YG")) {
                        this.typeTrainCount.YG = result.data[i].YG;
                    }
                    else if (result.data[i].hasOwnProperty("SAR")) {
                        this.typeTrainCount.SAR = result.data[i].SAR;
                    }
                }
            }
        });
    }
    // toNews(key){
    // // window.open(window.location.host+`/news;iframe=${this.news[key].src}`)
    //   this.router.navigate(['/news', {iframe: this.news[key].src}]);
    //   console.log(window.location)
    // }
    deatailFormAction(data, key) {
        if ($(".modal-detaile").css("display") == 'none') {
            $(".modal").animate({ left: '-200px' }, 200);
            $(".modal-detaile").css("display", "block");
            $(".modal-detaile").animate({ right: '-400px' }, 200);
            this.batchDiscernById(data.id);
        }
        else {
            this.batchDiscernById(data.id);
        }
        setTimeout(() => {
            ImagePreview.removed();
            ImagePreview.init({ id: $(".modal-detaile .deatile-content ul li img") });
        }, 300);
        $(`#modal-container > div > div > div.digital > nz-table > nz-spin > div > div > nz-table-inner-scroll > div > div.ant-table-body.ng-star-inserted > table > tbody > tr > td`).css("background", "#03152e");
        $(`#modal-container > div > div > div.digital > nz-table > nz-spin > div > div > nz-table-inner-scroll > div > div.ant-table-body.ng-star-inserted > table > tbody > tr:nth-child(${key + 2}) > td`).css("background", "#072c4e");
    }
    stopFenxi() {
        clearInterval(this.winboxData.interVal);
        this.winboxData.fenxiButtonisShow = false;
        let id = this.winboxData.tastkId;
        if (this.winboxData.stopButtonValue == "????????????") {
            axios__WEBPACK_IMPORTED_MODULE_5___default.a.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL}/v1/label_task/suspendDistinguishBatchImg?id=${id}`, {
                id
            }, {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('Bearer'),
                    'TR-Role': 'TR-User'
                }
            })
                .then(data => {
                if (data.data.code == 1) {
                    this.winboxData.stopButtonValue = "????????????";
                    this.winboxData.loding = true;
                }
                this.requsetProgress1();
            });
        }
        else {
            axios__WEBPACK_IMPORTED_MODULE_5___default.a.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL}/v1/label_task/resumeDistinguishBatchImg?id=${id}`, { id }, {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('Bearer'),
                    'TR-Role': 'TR-User'
                }
            })
                .then(data => {
                if (data.data.code == 1) {
                    this.winboxData.stopButtonValue = "????????????";
                    this.winboxData.loding = true;
                }
                this.requsetProgress1();
            });
        }
    }
    overFenxi() {
        clearInterval(this.winboxData.interVal);
        let id = this.winboxData.tastkId;
        axios__WEBPACK_IMPORTED_MODULE_5___default.a.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL}/v1/label_task/stopDistinguishBatchImg?id=${id}`, {}, { headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('Bearer'),
                'TR-Role': 'TR-User'
            } })
            .then(data => {
            if (data.data.code == 1) {
                this.winboxData.loding = true;
            }
            this.requsetProgress1();
        });
    }
    fenxi() {
        axios__WEBPACK_IMPORTED_MODULE_5___default.a.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL}/v1/label_task/checkBuildTask`, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('Bearer'),
                'TR-Role': 'TR-User'
            }
        })
            .then(data => {
            this.winboxData.loding = true;
            clearInterval(this.winboxData.interVal);
            let requestData = JSON.parse(data.data.data);
            if (requestData.flag != "0000") {
                this.winboxData.fenxiButtonisShow = false;
                this.winboxData.tastkId = requestData.list[0].id;
                $("#dataContent .content").css({ 'display': 'flex' });
                $("#dataContent .historyAna").animate({ 'top': '454px' }, 500);
                this.winBoxCharts();
                this.requsetProgress1();
            }
            else {
                axios__WEBPACK_IMPORTED_MODULE_5___default.a.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL}/v1/label_task/buildTask`, {
                    headers: {
                        'Authorization': 'Bearer ' + localStorage.getItem('Bearer'),
                        'TR-Role': 'TR-User'
                    }
                })
                    .then(data => {
                    this.winboxData.tastkId = data.data.data;
                    if (this.winboxData.tastkId) {
                        this.requsetProgress1();
                        $("#dataContent .content").css({ 'display': 'flex' });
                        $("#dataContent .historyAna").animate({ 'top': '454px' }, 500);
                        this.winBoxCharts();
                    }
                    else {
                        $("#dataContent .content").css({ 'display': 'none' });
                        $("#dataContent .historyAna").animate({ 'top': '80px' }, 500);
                    }
                });
            }
        })
            .catch(e => {
            // if(e.response.status == 401){
            //   this.router.navigate(['/login']);
            // }
        });
    }
    nextList() {
        this.winboxData.historyPageIndex++;
        this.fenxiHistory();
    }
    perList() {
        this.winboxData.historyPageIndex--;
        this.fenxiHistory();
    }
    fenxiHistory() {
        axios__WEBPACK_IMPORTED_MODULE_5___default.a.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL}/v1/label_task/taskList?pageIndex=${this.winboxData.historyPageIndex}&pageSize=10&detectStatus=0`, {
            pageIndex: this.winboxData.historyPageIndex,
            pageSize: 10,
            detectStatus: 0
        }, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('Bearer'),
                'TR-Role': 'TR-User'
            }
        })
            .then(data => {
            this.winboxData.history = data.data.data.records;
            let total = data.data.data.total;
            if (this.winboxData.historyPageIndex * 10 >= total) {
                this.winboxData.nextButtonisShow = false;
            }
            else {
                this.winboxData.nextButtonisShow = true;
            }
            let fornum = 10 - data.data.data.records.length;
            for (let index = 0; index < fornum; index++) {
                this.winboxData.history.push({
                    createTime: '-',
                    updateTime: '-',
                    imgCount: '-',
                    accuracyRate: '0',
                    errorRate: '0',
                    lossRate: '0',
                    result: '0'
                });
            }
            $.each(this.winboxData.history, function (i, n) {
                n.createTime = n.createTime.replace("T", "  ");
                n.updateTime = n.updateTime.replace("T", "  ");
            });
        })
            .catch(e => {
            // if(e.response.status == 401){
            //   this.router.navigate(['/login']);
            // }
        });
    }
    requsetProgress() {
        axios__WEBPACK_IMPORTED_MODULE_5___default.a.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL}/v1/label_task/checkBuildTask`, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('Bearer'),
                'TR-Role': 'TR-User'
            }
        })
            .then(data => {
            clearInterval(this.winboxData.interVal);
            let requestData = JSON.parse(data.data.data);
            if (requestData.flag != "0000") {
                this.winboxData.fenxiButtonisShow = false;
                this.winboxData.tastkId = requestData.list[0].id;
                this.requsetProgress1();
            }
            else {
                this.winboxData.tastkId = '';
                this.winboxData.fenxiButtonisShow = true;
            }
        })
            .catch(e => {
            // if(e.response.status == 401){
            //   this.router.navigate(['/login']);
            // }
        });
    }
    requsetProgress1() {
        this.winboxData.interVal = setInterval(() => {
            if (this.winboxData.tastkId) {
                axios__WEBPACK_IMPORTED_MODULE_5___default.a.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL}/v1/label_task/queryProgressOfBatchImg?id=${this.winboxData.tastkId}`, {
                    id: this.winboxData.tastkId
                }, {
                    headers: {
                        'Authorization': 'Bearer ' + localStorage.getItem('Bearer'),
                        'TR-Role': 'TR-User'
                    }
                })
                    .then(data => {
                    let requestData = JSON.parse(data.data.data);
                    if (this.winboxData.loding == true)
                        this.winboxData.loding = false;
                    if (requestData.detectStatus == -1) {
                        this.winboxData.status = "?????????";
                        this.dataAnaStatus = '?????????';
                        this.winboxData.fenxiButtonisShow = false;
                        this.animationBoolean = false;
                    }
                    else if (requestData.detectStatus == 1) {
                        this.winboxData.status = "?????????";
                        this.dataAnaStatus = '?????????';
                        this.winboxData.fenxiButtonisShow = false;
                        this.animationBoolean = true;
                        $(".ant-progress-text").css("color", "#fff");
                    }
                    else if (requestData.detectStatus == 2) {
                        this.winboxData.status = "?????????";
                        this.dataAnaStatus = '?????????';
                        this.winboxData.fenxiButtonisShow = false;
                        this.animationBoolean = false;
                    }
                    else if (requestData.detectStatus == 0) {
                        this.winboxData.status = "??????";
                        this.winboxData.tastkId = '';
                        this.dataAnaStatus = '';
                        if (this.winboxData.accuracyRate) {
                            this.winboxData.accuracyRate = (requestData.accuracyRate * 100).toFixed(2) + '%';
                        }
                        else {
                            this.winboxData.accuracyRate = 0;
                        }
                        if (this.winboxData.errorRate) {
                            this.winboxData.errorRate = (requestData.errorRate * 100).toFixed(2) + '%';
                        }
                        else {
                            this.winboxData.errorRate = 0;
                        }
                        this.winboxData.fenxiButtonisShow = true;
                        this.animationBoolean = false;
                        clearInterval(this.winboxData.interVal);
                    }
                    else if (requestData.detectStatus == 4) {
                        this.winboxData.status = "?????????";
                        this.dataAnaStatus = '';
                        this.winboxData.fenxiButtonisShow = true;
                        clearInterval(this.winboxData.interVal);
                        this.animationBoolean = false;
                    }
                    else if (requestData.detectStatus == 3) {
                        this.winboxData.status = "?????????";
                        this.dataAnaStatus = '?????????';
                        this.winboxData.stopButtonValue = "????????????";
                        this.animationBoolean = false;
                        // clearInterval(this.winboxData.interVal)
                    }
                    this.winboxData.count = requestData.imgCount;
                    this.winboxData.progress = (requestData.progress * 100).toFixed(2);
                })
                    .catch(e => {
                    // if(e.response.status == 401){
                    //   this.router.navigate(['/login']);
                    // }
                });
            }
            else {
                this.requsetProgress();
            }
        }, 1000);
    }
    setwinBoxCss() {
        $("#dataContent").css({
            width: "100%",
            height: "100%",
            overflow: "hidden"
        });
        $(".winbox").css({
            borderRadius: " 12px 12px 0 0",
            boxShadow: "0 0 65px #163e7f"
        });
        $(".wb-header").css({
            background: "linear-gradient(90deg, #12194f, #2b64c0,#12194f)",
            borderRadius: " 12px 12px 0 0"
        });
        $(".wb-full").css("display", "none");
        // this.dataAnalysis = "???????????? "
        // this.dataAnaStatus = '?????????'
    }
    winBoxCharts() {
        var chartDom = document.getElementById('WinBoxcharts');
        var myChart = echarts__WEBPACK_IMPORTED_MODULE_6__["init"](chartDom);
        var option;
        option = {
            title: {
                text: '???\n???\n???\n???\n???\n???\n???\n???',
                textStyle: {
                    color: "#fff",
                    fontStyle: "normal",
                    fontWeight: "normal",
                    fontFamily: "sans-serif",
                    fontSize: 15,
                },
                left: 0,
                top: '5'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        color: "rgba(14, 24, 142, 1)"
                    }
                }
            },
            grid: {
                left: 70,
                top: 20,
                bottom: 20,
                right: 50
            },
            xAxis: {
                type: 'category',
                data: ['?????????', '?????????', '?????????', '?????????', '?????????', '?????????', '?????????'],
                axisLine: {
                    symbol: ['none', 'arrow'],
                    lineStyle: {
                        color: '#fff'
                    }
                },
                axisTick: {
                    show: false
                }
            },
            yAxis: {
                type: 'value',
                axisTick: { show: false },
                splitLine: { show: false },
                axisLine: {
                    show: true,
                    symbol: ['none', 'arrow'],
                    lineStyle: {
                        color: '#fff'
                    }
                },
            },
            series: [
                {
                    data: [820, 932, 901, 934, 1290, 1330, 1320],
                    type: 'line',
                    smooth: true,
                    itemStyle: {
                        normal: {
                            lineStyle: {
                                color: '#00a0e9'
                            }
                        }
                    },
                }
            ]
        };
        option && myChart.setOption(option);
    }
    errorCorrectionRequest() {
        this.winboxData.modalData.errorCorrectionData.errorCorrectionMsg = this.winboxData.modalData.errorCorrectionData.errorCorrectionMsg.trim();
        if (!this.winboxData.modalData.errorCorrectionData.errorCorrectionMsg)
            return this.message.error("??????????????????????????????");
        axios__WEBPACK_IMPORTED_MODULE_5___default.a.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL}/v1/batchDiscern/errorCorrection?id=${this.winboxData.modalData.detail.id}&errorCorrectionMsg=${this.winboxData.modalData.errorCorrectionData.errorCorrectionMsg}`, {
            id: this.winboxData.modalData.detail.id,
            errorCorrectionMsg: this.winboxData.modalData.errorCorrectionData.errorCorrectionMsg
        }, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('Bearer'),
                'TR-Role': 'TR-User'
            }
        })
            .then(data => {
            if (data.data.code == 1) {
                this.message.success(data.data.message, {
                    nzDuration: 3000
                });
            }
            $("#CorrectionErrorBox > div.wb-header > div.wb-icon > span.wb-close").click();
        })
            .catch(e => {
            // if(e.response.status == 401){
            //   this.router.navigate(['/login']);
            // }
        });
    }
    errorCorrection() {
        $("#CorrectionErrorBox > div.wb-header > div.wb-icon > span.wb-close").click();
        this.dataBoxCorrectionError = new WinBox({
            id: "CorrectionErrorBox",
            root: document.querySelector("#modal-container > div"),
            title: "??????",
            x: '30%',
            y: '30%',
            width: "500px",
            height: "300px",
            mount: document.getElementById("errorCorrectionBox"),
            onresize: function (width, height) {
                $("#CorrectionErrorBox").css({
                    height: 300 + 'px',
                    width: 500 + 'px'
                });
            },
        });
        $("#CorrectionErrorBox").css({
            'z-index': '999'
        });
        $("#CorrectionErrorBox .wb-full ,#CorrectionErrorBox .wb-min").css("display", "none");
    }
    dataAna() {
        $("#dataWinBox > div.wb-header > div.wb-icon > span.wb-close").click();
        $("#modal-container").css("display", "none");
        this.closeTable();
        this.dataBox = new WinBox({
            id: 'dataWinBox',
            title: "??????????????????",
            x: "center",
            y: "center",
            width: "100%",
            height: "100%",
            mount: document.getElementById("dataContent"),
            onresize: function (width, height) {
                $(".winbox").css({
                    height: height,
                    width: width
                });
            },
        });
        this.setwinBoxCss();
        $("#dataContent").children("canvas").remove();
        this.dataBackground();
        this.fenxiHistory();
        this.requsetProgress();
        if (this.winboxData.tastkId) {
            $("#dataContent .content").css({ 'display': 'flex' });
            $("#dataContent .historyAna").animate({ 'top': '454px' }, 500);
            this.winBoxCharts();
        }
        else {
            $("#dataContent .content").css({ 'display': 'none' });
            $("#dataContent .historyAna").animate({ 'top': '80px' }, 500);
        }
    }
    loadAllImageCount() {
        this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL}/v1/sample-oss-file/getAllImageCount`).subscribe((result) => {
            if (_core_http_entity__WEBPACK_IMPORTED_MODULE_2__["HttpResult"].succeed(result.code)) {
                this.imageAllCount = result.data;
                if (this.imageAllCount.yg / this.imageAllCount.kjg < 1 / 10) {
                    var data1 = [this.imageAllCount.kjg, this.imageAllCount.kjg / 10];
                }
                else {
                    var data1 = [this.imageAllCount.kjg, this.imageAllCount.yg];
                }
                var data2 = [this.imageAllCount.hw, this.imageAllCount.sar];
                this.initEcharts1(data1.reverse());
                this.initEcharts2(data2.reverse());
            }
        });
    }
    ngOnDestroy() {
        $(".wb-close").click();
        clearInterval(this.winboxData.interVal);
        this.keyboardSubscription.unsubscribe();
    }
}
HomeComponent.??fac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_8__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](ng_zorro_antd__WEBPACK_IMPORTED_MODULE_10__["NzModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_app_pipes__WEBPACK_IMPORTED_MODULE_11__["OssPathPipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_video_service__WEBPACK_IMPORTED_MODULE_12__["VideoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_13__["NzMessageService"])); };
HomeComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: HomeComponent, selectors: [["ng-component"]], viewQuery: function HomeComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.filesInputElm = _t.first);
    } }, decls: 265, vars: 58, consts: [[2, "overflow", "hidden", "height", "100%", 3, "nzSpinning"], [1, "home", 2, "overflow-x", "hidden", "overflow-y", "scroll"], ["id", "backstore", 2, "display", "none"], ["id", "dataContent"], ["class", "loding", "style", "width: 100%;height: 100%;z-index: 99999;background: rgba(0, 0, 0, 0.384);position: absolute;color: #fff;text-align: center;line-height: 30em;", 4, "ngIf"], ["id", "modal-container"], [1, "modal-background"], [1, "modal"], ["id", "backstore1", 2, "display", "none"], ["id", "errorCorrectionBox"], ["id", "errorCorrectioncontent"], [2, "text-align", "center"], ["nz-row", "", 2, "padding", "10px"], ["nz-col", "", "nzSpan", "10", 2, "text-align", "right", "line-height", "30px"], ["for", "imgId"], ["nz-col", "", "nzSpan", "14"], ["nz-input", "", "disabled", "", 2, "width", "40%", 3, "placeholder", "value"], ["nz-input", "", "placeholder", "\u8BF7\u586B\u5199\u7EA0\u9519\u4FE1\u606F", 2, "width", "80%", "height", "100px", "background-color", "none", 3, "ngModel", "nzAutosize", "ngModelChange"], ["nz-col", "", "nzSpan", "24", 2, "text-align", "center"], ["nz-button", "", "nzType", "primary", 3, "click"], [1, "digital"], [1, "digital-form"], [1, "digital-form-status"], ["nzSize", "small", 3, "ngModel", "ngModelChange"], ["nzValue", "", "nzLabel", "\u5168\u90E8"], ["nzValue", "1", "nzLabel", "\u8BC6\u522B\u9519\u8BEF"], ["nzValue", "0", "nzLabel", "\u6F0F\u68C0"], [1, "digital-form-name"], ["nz-input", "", "nzSize", "small", 2, "width", "120px", "background-color", "#03050f", "color", "#b6bdd7", "font-size", "11px", "font-weight", "700", "border-radius", "4px", "border", "1px solid rgba(225, 225, 225, 0.3)", 3, "ngModel", "ngModelChange"], [1, "digital-form-button", 2, "margin-left", "20px"], ["nz-button", "", "nzType", "primary", "nzSize", "small", 1, "updateName", 3, "click"], [3, "nzData", "nzScroll", "nzShowPagination"], ["fixedTable", ""], ["nzWidth", "50px"], ["nzWidth", "80px"], ["nzWidth", "75px"], [1, "close", 3, "click"], ["t", "1646276553731", "viewBox", "0 0 1024 1024", "version", "1.1", "p-id", "3119", "width", "25", "height", "25", 1, "icon"], ["d", "M507.168 473.232L716.48 263.936a16 16 0 0 1 22.624 0l11.312 11.312a16 16 0 0 1 0 22.624L541.12 507.168 750.4 716.48a16 16 0 0 1 0 22.624l-11.312 11.312a16 16 0 0 1-22.624 0L507.168 541.12 297.872 750.4a16 16 0 0 1-22.624 0l-11.312-11.312a16 16 0 0 1 0-22.624l209.296-209.312-209.296-209.296a16 16 0 0 1 0-22.624l11.312-11.312a16 16 0 0 1 22.624 0l209.296 209.296z", "p-id", "3120"], [4, "ngFor", "ngForOf"], [1, "pagination"], ["nzShowSizeChanger", "", "nzShowQuickJumper", "", 3, "nzPageIndex", "nzPageSize", "nzTotal", "nzSize", "nzPageSizeOptions", "nzPageIndexChange", "nzPageSizeChange"], [1, "modal-detaile"], [1, "detaile-title"], [1, "deatile-content"], [2, "margin-top", "15px"], ["nzSize", "small", 2, "margin-left", "10px", "overflow-y", "auto", "max-height", "200px", 3, "ngModel", "ngModelChange"], ["nz-radio", "", "style", "color: rgb(230, 140, 38);", "nzSize", "small", 3, "nzValue", 4, "ngFor", "ngForOf"], [2, "color", "rgb(230, 140, 38)"], [3, "src"], [1, "detaile-btn"], ["nz-button", "", "nzType", "primary", 1, "errorCorrection", 3, "click"], ["nz-button", "", "nzType", "primary", 1, "updateName", 3, "click"], [1, "nowAna"], [1, "title", 2, "display", "flex", "padding", "20px 0px 10px 30px"], [2, "flex", "0 0 70%", "color", "#fff", "font-size", "17px"], [2, "flex", "1"], ["nz-button", "", "nzType", "primary", "class", "fenxiButton", 3, "click", 4, "ngIf"], ["nz-button", "", "nzType", "primary", "nzDanger", "", "class", "fenxiButton", "style", "border: 1px solid rgb(230, 178, 10);background: rgb(230, 178, 10);margin-right: 15px;", 3, "click", 4, "ngIf"], ["nz-button", "", "nzType", "primary", "nzDanger", "", "class", "fenxiButton", 3, "click", 4, "ngIf"], [1, "content"], [1, "left", "box"], [2, "color", "rgb(230, 178, 10)"], ["style", "display: flex;", 4, "ngIf"], [4, "ngIf"], ["id", "WinBoxcharts", 1, "right", "box"], [1, "historyAna"], ["class", "perList changeList", 3, "click", 4, "ngIf"], ["class", "nextList changeList", 3, "click", 4, "ngIf"], [1, "title", 2, "padding", "0px 0px 10px 30px", "color", "#fff", "font-size", "17px"], [1, "historyContent", 2, "height", "100%", "padding", "0 56px"], [1, "wrap", "wrap-center"], [1, "wrap-inner-center"], [1, "works"], [1, "board"], [1, "board-img", 2, "padding", "15px"], [1, "board-img1", 2, "padding", "15px"], [2, "position", "absolute", "bottom", "10px", "right", "20px"], ["nz-button", "", "nzType", "primary", "id", "one", 1, "button", 3, "click"], [1, "thumbnail"], [1, "active", 3, "click"], ["src", "assets/images/historyAna/01.jpg", "data", "assets/images/historyAna/01.jpg", "url", "", "alt", ""], [3, "click"], ["src", "assets/images/historyAna/02.jpg", "data", "assets/images/historyAna/02.jpg", "url", "", "alt", ""], ["src", "assets/images/historyAna/03.jpg", "data", "assets/images/historyAna/03.jpg", "url", "", "alt", ""], ["src", "assets/images/historyAna/04.jpg", "data", "assets/images/historyAna/04.jpg", "url", "", "alt", ""], ["src", "assets/images/historyAna/05.jpg", "data", "assets/images/historyAna/05.jpg", "url", "", "alt", ""], ["src", "assets/images/historyAna/06.jpg", "data", "assets/images/historyAna/06.jpg", "url", "", "alt", ""], ["src", "assets/images/historyAna/07.jpg", "data", "assets/images/historyAna/07.jpg", "url", "", "alt", ""], ["src", "assets/images/historyAna/08.jpg", "data", "assets/images/historyAna/08.jpg", "url", "", "alt", ""], ["src", "assets/images/historyAna/09.jpg", "data", "assets/images/historyAna/09.jpg", "url", "", "alt", ""], ["src", "assets/images/historyAna/10.jpg", "data", "assets/images/historyAna/10.jpg", "url", "", "alt", ""], ["id", "canvas"], [1, "content", 2, "z-index", "2"], [1, "header"], [1, "account"], [1, "dataAna", 3, "click"], [1, "status"], ["target", "_blank", 1, "mgr-link", 3, "href"], [2, "font-size", "20px"], [1, "search", "flex-row"], [1, "search-left"], [1, "upload"], ["type", "file", "value", "\u672C\u5730\u4E0A\u4F20", "multiple", "", 3, "change"], ["filesInput", ""], [1, "search-right", "flex-column", 2, "position", "relative", "bottom", "43px"], [1, "nav"], [3, "ngClass", "click", 4, "ngFor", "ngForOf"], [2, "clear", "both"], [1, "search-input", 2, "position", "relative"], ["type", "text", "placeholder", "\u622A\u56FE\u540E\uFF0C\u5728\u8F93\u5165\u6846Ctrl+V\u5373\u53EF\u4EE5\u56FE\u641C\u56FE", 1, "search-img", 3, "ngModel", "paste", "ngModelChange"], [2, "position", "absolute", "top", "10px", "right", "10px", "font-size", "10px", "cursor", "pointer", 3, "click"], ["t", "1646902467113", "viewBox", "0 0 1024 1024", "version", "1.1", "p-id", "2070", "width", "20", "height", "20", 1, "icon"], ["d", "M704 627.2h-40.8l-14.4-14.4c50.4-58.4 80-133.6 80-216C728.8 212.8 580 64 396 64S64.8 213.6 64.8 396.8s148.8 332.8 332.8 332.8c82.4 0 158.4-30.4 216-80l14.4 14.4v40l256 255.2 76-76c-0.8 0-256-256-256-256z m-307.2 0c-127.2 0-230.4-103.2-230.4-230.4s103.2-230.4 230.4-230.4 230.4 103.2 230.4 230.4-103.2 230.4-230.4 230.4z", "p-id", "2071", "fill", "#ffffff"], ["appDragDropUpload", "", 1, "search-drag", "flex-row", 3, "fileDropped"], [1, "sAnda"], [1, "achievements"], [1, "recommend-title"], [2, "width", "60px", "height", "2px", "background", "#357af6", "margin", "0 auto"], ["style", "cursor: pointer;", 3, "click", "mouseover", "mouseleave", 4, "ngFor", "ngForOf"], [1, "server_style", "achievements"], [1, "recommend"], [1, "recommend-pictures", "flex-row"], [1, "recommend-picture", 2, "text-align", "right"], [1, "pic"], ["src", "assets/images/kjg.png", "alt", ""], ["src", "assets/images/yg.png", "alt", ""], ["id", "recommendecharts", 1, "echarts"], [1, "num"], ["src", "assets/images/hw.png", "alt", ""], ["src", "assets/images/sar.png", "alt", ""], ["id", "recommendecharts1", 1, "echarts"], [1, "hotPic"], [1, "title"], [1, "text"], [2, "width", "80px", "height", "2px", "background", "#357af6", "position", "absolute", "right", "50%", "transform", "translateX(50%)"], [1, "detail"], ["align", "center", 4, "ngFor", "ngForOf"], [1, "news"], ["align", "left", 4, "ngFor", "ngForOf"], [1, "loding", 2, "width", "100%", "height", "100%", "z-index", "99999", "background", "rgba(0, 0, 0, 0.384)", "position", "absolute", "color", "#fff", "text-align", "center", "line-height", "30em"], ["nzBreakWord", ""], ["nz-radio", "", "nzSize", "small", 2, "color", "rgb(230, 140, 38)", 3, "nzValue"], ["nz-button", "", "nzType", "primary", 1, "fenxiButton", 3, "click"], ["nz-button", "", "nzType", "primary", "nzDanger", "", 1, "fenxiButton", 2, "border", "1px solid rgb(230, 178, 10)", "background", "rgb(230, 178, 10)", "margin-right", "15px", 3, "click"], ["nz-button", "", "nzType", "primary", "nzDanger", "", 1, "fenxiButton", 3, "click"], [2, "display", "flex"], [2, "flex", "0 0 25%"], [2, "flex", "1", "color", "#fff"], [3, "nzPercent"], [1, "perList", "changeList", 3, "click"], ["t", "1648025467503", "viewBox", "0 0 1024 1024", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", "p-id", "2211", "width", "40", "height", "40", 1, "icon"], ["d", "M469.749538 512 737.1371 962.254727 286.863924 512 737.1371 61.745273Z", "p-id", "2212", "fill", "#ffffff"], [1, "nextList", "changeList", 3, "click"], ["t", "1648025504899", "viewBox", "0 0 1024 1024", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", "p-id", "2389", "width", "40", "height", "40", 1, "icon"], ["d", "M554.250462 512 286.863924 61.745273 737.1371 512 286.863924 962.254727Z", "p-id", "2390", "fill", "#ffffff"], [3, "ngClass", "click"], ["alt", "", 3, "src"], [1, "line", 2, "height", "2px", "background", "#357af6"], [2, "cursor", "pointer", 3, "click", "mouseover", "mouseleave"], ["align", "center"], ["alt", "\u56FE\u7247", 3, "src", "click"], ["align", "left"], ["target", "_blank", 3, "href"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "nz-spin", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, HomeComponent_div_4_Template, 2, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "h1", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "\u9519\u8BEFid\uFF1A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "\u7EA0\u9519\u4FE1\u606F\uFF1A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "textarea", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function HomeComponent_Template_textarea_ngModelChange_23_listener($event) { return ctx.winboxData.modalData.errorCorrectionData.errorCorrectionMsg = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HomeComponent_Template_button_click_26_listener() { return ctx.errorCorrectionRequest(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "\u63D0\u4EA4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "\u5206\u6790\u72B6\u6001\uFF1A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "nz-select", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function HomeComponent_Template_nz_select_ngModelChange_33_listener($event) { return ctx.winboxData.modalData.list.status = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](34, "nz-option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](35, "nz-option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](36, "nz-option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "\u76EE\u6807\u540D\u79F0\uFF1A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function HomeComponent_Template_input_ngModelChange_40_listener($event) { return ctx.winboxData.modalData.list.standardName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HomeComponent_Template_button_click_42_listener() { return ctx.batchDiscern("true"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "\u67E5\u8BE2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "nz-table", 31, 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "th", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "\u5E8F\u53F7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, "\u8BC6\u522B\u7ED3\u679C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, "\u6B63\u786E\u5BF9\u8C61\u540D\u79F0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "th", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, "\u72B6\u6001");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "th", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, "\u8BE6\u60C5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "th", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HomeComponent_Template_div_click_59_listener() { return ctx.closeTable(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "svg", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](61, "path", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](63, HomeComponent_tr_63_Template, 13, 4, "tr", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "nz-pagination", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("nzPageIndexChange", function HomeComponent_Template_nz_pagination_nzPageIndexChange_65_listener($event) { return ctx.winboxData.modalData.list.pageIndex = $event; })("nzPageSizeChange", function HomeComponent_Template_nz_pagination_nzPageSizeChange_65_listener($event) { return ctx.winboxData.modalData.list.pageSize = $event; })("nzPageIndexChange", function HomeComponent_Template_nz_pagination_nzPageIndexChange_65_listener() { return ctx.batchDiscern("flase"); })("nzPageSizeChange", function HomeComponent_Template_nz_pagination_nzPageSizeChange_65_listener() { return ctx.batchDiscern("true"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68, "\u76EE\u6807\u5BF9\u8C61\u8BE6\u60C5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "li", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](73, "\u8BC6\u522B\u7ED3\u679C\uFF1A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "nz-radio-group", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function HomeComponent_Template_nz_radio_group_ngModelChange_74_listener($event) { return ctx.winboxData.modalData.radioValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](75, HomeComponent_label_75_Template, 2, 2, "label", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "li", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](78, "\u76EE\u6807\u7C7B\u578B\uFF1A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "nz-radio-group", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function HomeComponent_Template_nz_radio_group_ngModelChange_79_listener($event) { return ctx.winboxData.modalData.radioValue1 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](80, HomeComponent_label_80_Template, 2, 2, "label", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "li", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](83, "\u6B63\u786E\u5BF9\u8C61\u540D\u79F0\uFF1A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "span", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "li", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](88, "\u56FE\u7247:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](89, "img", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "button", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HomeComponent_Template_button_click_91_listener() { return ctx.errorCorrection(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](92, "\u7EA0\u9519");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "button", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HomeComponent_Template_button_click_93_listener() { return ctx.setanothername(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](94, "\u8BBE\u4E3A\u522B\u540D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "span", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](98, " \u5F53\u524D\u5206\u6790 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](100, HomeComponent_button_100_Template, 2, 0, "button", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](101, HomeComponent_button_101_Template, 2, 1, "button", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](102, HomeComponent_button_102_Template, 2, 0, "button", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](106, "\u5206\u6790\u72B6\u6001\uFF1A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](111, HomeComponent_div_111_Template, 5, 1, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](112, HomeComponent_p_112_Template, 2, 1, "p", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](113, HomeComponent_p_113_Template, 2, 1, "p", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](114, HomeComponent_p_114_Template, 2, 1, "p", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](115, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](117, HomeComponent_div_117_Template, 3, 0, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](118, HomeComponent_div_118_Template, 3, 0, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](119, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](120, " \u5206\u6790\u5386\u53F2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](121, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](122, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](123, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](124, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](125, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](126, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](127, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](128);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](129, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](130, " \u5206\u6790\u603B\u91CF\uFF1A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](131, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](132);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](133, " | \u51C6\u786E\u7387\uFF1A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](134, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](135);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](136, " | \u8BEF\u68C0\u7387\uFF1A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](137, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](138);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](139, " | \u6F0F\u68C0\u7387\uFF1A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](140, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](141);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](142, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](143, "button", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HomeComponent_Template_button_click_143_listener($event) { return ctx.comparisonDeatil($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](144, "\u6BD4\u5BF9\u8BE6\u60C5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](145, "ul", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](146, "li", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HomeComponent_Template_li_click_146_listener() { return ctx.thumbnail(0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](147, "img", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](148, "li", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HomeComponent_Template_li_click_148_listener() { return ctx.thumbnail(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](149, "img", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](150, "li", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HomeComponent_Template_li_click_150_listener() { return ctx.thumbnail(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](151, "img", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](152, "li", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HomeComponent_Template_li_click_152_listener() { return ctx.thumbnail(3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](153, "img", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](154, "li", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HomeComponent_Template_li_click_154_listener() { return ctx.thumbnail(4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](155, "img", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](156, "li", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HomeComponent_Template_li_click_156_listener() { return ctx.thumbnail(5); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](157, "img", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](158, "li", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HomeComponent_Template_li_click_158_listener() { return ctx.thumbnail(6); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](159, "img", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](160, "li", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HomeComponent_Template_li_click_160_listener() { return ctx.thumbnail(7); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](161, "img", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](162, "li", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HomeComponent_Template_li_click_162_listener() { return ctx.thumbnail(8); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](163, "img", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](164, "li", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HomeComponent_Template_li_click_164_listener() { return ctx.thumbnail(9); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](165, "img", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](166, "canvas", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](167, "div", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](168, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](169, "\u667A\u80FD\u56FE\u50CF\u68C0\u6D4B\u670D\u52A1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](170, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](171, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](172, "div", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HomeComponent_Template_div_click_172_listener() { return ctx.dataAna(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](173);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](174, "span", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](175);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](176, "a", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](177, "adminUrl");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](178, "\u6570\u636E\u7BA1\u7406");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](179, "span", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](180);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](181, "div", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](182, "div", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](183, "button", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](184, "\u672C\u5730\u4E0A\u4F20");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](185, "input", 103, 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function HomeComponent_Template_input_change_185_listener($event) { return ctx.fileUpload($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](187, "div", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](188, "ul", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](189, HomeComponent_li_189_Template, 4, 5, "li", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](190, "div", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](191, "div", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](192, "input", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("paste", function HomeComponent_Template_input_paste_192_listener($event) { return ctx.onPasteImage($event); })("ngModelChange", function HomeComponent_Template_input_ngModelChange_192_listener($event) { return ctx.pasteText = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](193, "div", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HomeComponent_Template_div_click_193_listener() { return ctx.searchImg(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](194, "svg", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](195, "path", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](196, "div", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("fileDropped", function HomeComponent_Template_div_fileDropped_196_listener($event) { return ctx.onFileDropped($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](197, " \u4F60\u4E5F\u53EF\u4EE5\u5C06\u56FE\u7247\u62D6\u62FD\u81F3\u6B64\u5904\u641C\u56FE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](198, "div", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](199, "div", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](200, "div", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](201, "\u5178\u578B\u6210\u679C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](202, "div", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](203, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](204, HomeComponent_li_204_Template, 7, 3, "li", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](205, "div", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](206, "div", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](207, "\u670D\u52A1\u6837\u5F0F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](208, "div", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](209, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](210, HomeComponent_li_210_Template, 7, 3, "li", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](211, "div", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](212, "div", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](213, "\u6837\u672C\u56FE\u7247");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](214, "div", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](215, "div", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](216, "div", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](217, "ul", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](218, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](219, "img", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](220, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](221, "img", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](222, "div", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](223, "ul", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](224, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](225, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](226);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](227, "\u4E2A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](228, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](229, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](230);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](231, "\u4E2A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](232, "div", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](233, "ul", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](234, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](235, "img", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](236, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](237, "img", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](238, "div", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](239, "ul", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](240, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](241, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](242);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](243, "\u4E2A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](244, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](245, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](246);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](247, "\u4E2A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](248, "div", 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](249, "div", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](250, "div", 133);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](251, "div", 134);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](252, "\u70ED\u70B9\u56FE\u7247");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](253, "div", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](254, "div", 136);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](255, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](256, HomeComponent_li_256_Template, 3, 3, "li", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](257, "div", 138);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](258, "div", 133);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](259, "div", 134);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](260, "\u65B0\u95FB\u70ED\u70B9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](261, "div", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](262, "div", 136);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](263, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](264, HomeComponent_li_264_Template, 3, 2, "li", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzSpinning", ctx.isSpinning);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.winboxData.loding);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("placeholder", ctx.winboxData.modalData.detail.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.winboxData.modalData.errorCorrectionData.errorCorrectionMsg)("nzAutosize", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](55, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.winboxData.modalData.list.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.winboxData.modalData.list.standardName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzData", ctx.winboxData.listOfData)("nzScroll", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](56, _c3))("nzShowPagination", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.winboxData.modalData.list.listOfData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzPageIndex", ctx.winboxData.modalData.list.pageIndex)("nzPageSize", ctx.winboxData.modalData.list.pageSize)("nzTotal", ctx.winboxData.modalData.list.total)("nzSize", "small")("nzPageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](57, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.winboxData.modalData.radioValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.winboxData.modalData.detail.discernName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.winboxData.modalData.radioValue1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.winboxData.modalData.detail.discernType);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.winboxData.modalData.detail.standardName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", ctx.winboxData.modalData.detail.imgUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.winboxData.fenxiButtonisShow);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.winboxData.fenxiButtonisShow);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.winboxData.fenxiButtonisShow);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.winboxData.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("\u5206\u6790\u603B\u91CF\uFF1A", ctx.winboxData.count, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.winboxData.status == "\u5206\u6790\u4E2D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.winboxData.status == "\u5B8C\u6210");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.winboxData.status == "\u5B8C\u6210");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.winboxData.status == "\u5B8C\u6210");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !(ctx.winboxData.historyPageIndex <= 1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.winboxData.nextButtonisShow);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"](" \u521B\u5EFA\u65F6\u95F4\uFF1A", ctx.winboxData.history[ctx.winboxData.historySelect].createTime, " | \u7ED3\u675F\u65F6\u95F4\uFF1A", ctx.winboxData.history[ctx.winboxData.historySelect].updateTime, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.winboxData.history[ctx.winboxData.historySelect].imgCount);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", (ctx.winboxData.history[ctx.winboxData.historySelect].accuracyRate * 100).toFixed(2), "% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", (ctx.winboxData.history[ctx.winboxData.historySelect].errorRate * 100).toFixed(2), "% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", (ctx.winboxData.history[ctx.winboxData.historySelect].lossRate * 100).toFixed(2), "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.dataAnalysis);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.dataAnaStatus);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("href", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](177, 53, ""), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.user == null ? null : ctx.user.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.navArr);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.pasteText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.resultList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.serverList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.imageAllCount.kjg);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.imageAllCount.yg);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.imageAllCount.hw);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.imageAllCount.sar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.hotspots);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.news);
    } }, directives: [ng_zorro_antd__WEBPACK_IMPORTED_MODULE_10__["NzSpinComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_15__["NzRowDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_15__["NzColDirective"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_16__["NzInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["DefaultValueAccessor"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_16__["NzAutosizeDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["NgModel"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_18__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_19__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_20__["??NzTransitionPatchDirective"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_21__["NzSelectComponent"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_21__["NzOptionComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_22__["NzTableComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_22__["NzTheadComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_22__["NzTrDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_22__["NzTableCellDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_22__["NzThMeasureDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_22__["NzTbodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], ng_zorro_antd_pagination__WEBPACK_IMPORTED_MODULE_23__["NzPaginationComponent"], ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_24__["NzRadioGroupComponent"], _directives_drag_drop_upload_directive__WEBPACK_IMPORTED_MODULE_25__["DragDropUploadDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_22__["NzCellBreakWordDirective"], ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_24__["NzRadioComponent"], ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_26__["NzProgressComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgClass"]], pipes: [_app_pipes__WEBPACK_IMPORTED_MODULE_11__["AdminUrlPipe"], _app_pipes__WEBPACK_IMPORTED_MODULE_11__["OssPathPipe"]], styles: [".home[_ngcontent-%COMP%] {\n  height: 100%;\n  background: url('bg01.png') no-repeat 0 0 / cover;\n  z-index: 2;\n}\n[_nghost-%COMP%]     .ant-progress-text {\n  color: #fff !important;\n}\n.winbox[_ngcontent-%COMP%] {\n  background: linear-gradient(90deg, #ff00f0, #0050ff);\n  box-shadow: none;\n  border-radius: 12px 12px 0 0;\n}\n#dataContent[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  position: relative;\n}\n#dataContent[_ngcontent-%COMP%]   .nowAna[_ngcontent-%COMP%] {\n  flex: 0 0 100%;\n  width: 100%;\n  height: 55%;\n  position: absolute;\n  top: 0;\n}\n#dataContent[_ngcontent-%COMP%]   .nowAna[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  height: 70%;\n  display: none;\n}\n#dataContent[_ngcontent-%COMP%]   .nowAna[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n  padding: 0 40px;\n  flex: 0 0 40%;\n  height: 100%;\n  color: #Fff;\n}\n#dataContent[_ngcontent-%COMP%]   .nowAna[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 100%;\n}\n#dataContent[_ngcontent-%COMP%]   .historyAna[_ngcontent-%COMP%] {\n  height: 45%;\n  width: 100%;\n  top: 80px;\n  flex: 0 0 100%;\n  position: absolute;\n  border-top: 1px solid #fff;\n}\n#dataContent[_ngcontent-%COMP%]   .historyAna[_ngcontent-%COMP%]   .changeList[_ngcontent-%COMP%] {\n  position: absolute;\n  color: #fff;\n  top: 50%;\n  cursor: pointer;\n}\n#dataContent[_ngcontent-%COMP%]   .historyAna[_ngcontent-%COMP%]   .perList[_ngcontent-%COMP%] {\n  left: 20px;\n}\n#dataContent[_ngcontent-%COMP%]   .historyAna[_ngcontent-%COMP%]   .nextList[_ngcontent-%COMP%] {\n  right: 20px;\n}\n#dataContent[_ngcontent-%COMP%]   .historyAna[_ngcontent-%COMP%]   .historyContent[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%] {\n  top: -8px;\n  height: 70%;\n  position: relative;\n}\n#dataContent[_ngcontent-%COMP%]   .historyAna[_ngcontent-%COMP%]   .historyContent[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   .wrap-inner-center[_ngcontent-%COMP%] {\n  height: 100%;\n  border-top: solid 1px var(--decoration);\n  border-bottom: solid 1px var(--decoration);\n  position: relative;\n  box-sizing: border-box;\n}\n#dataContent[_ngcontent-%COMP%]   .historyAna[_ngcontent-%COMP%]   .historyContent[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   .wrap-inner-center[_ngcontent-%COMP%]   .works[_ngcontent-%COMP%] {\n  height: 100%;\n  box-sizing: border-box;\n}\n#dataContent[_ngcontent-%COMP%]   .historyAna[_ngcontent-%COMP%]   .historyContent[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   .wrap-inner-center[_ngcontent-%COMP%]   .works[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%] {\n  height: 25%;\n  list-style: none;\n  display: flex;\n  justify-content: space-between;\n  padding: 0;\n  width: 90%;\n  margin: 2% auto 0;\n}\n#dataContent[_ngcontent-%COMP%]   .historyAna[_ngcontent-%COMP%]   .historyContent[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   .wrap-inner-center[_ngcontent-%COMP%]   .works[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  width: calc(10% - 10px);\n  padding: 5px;\n  margin: 0 5px;\n  box-sizing: border-box;\n  background: linear-gradient(135deg, transparent 5px, var(--decoration) 0) top left, linear-gradient(-135deg, transparent 5px, var(--decoration) 0) top right, linear-gradient(-45deg, transparent 5px, var(--decoration) 0) bottom right, linear-gradient(45deg, transparent 5px, var(--decoration) 0) bottom left;\n  background-size: 50% 50%;\n  background-repeat: no-repeat;\n  cursor: pointer;\n}\n#dataContent[_ngcontent-%COMP%]   .historyAna[_ngcontent-%COMP%]   .historyContent[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   .wrap-inner-center[_ngcontent-%COMP%]   .works[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover, #dataContent[_ngcontent-%COMP%]   .historyAna[_ngcontent-%COMP%]   .historyContent[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   .wrap-inner-center[_ngcontent-%COMP%]   .works[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, transparent 5px, var(--bright) 0) top left, linear-gradient(-135deg, transparent 5px, var(--bright) 0) top right, linear-gradient(-45deg, transparent 5px, var(--bright) 0) bottom right, linear-gradient(45deg, transparent 5px, var(--bright) 0) bottom left;\n  background-size: 50% 50%;\n  background-repeat: no-repeat;\n}\n#dataContent[_ngcontent-%COMP%]   .historyAna[_ngcontent-%COMP%]   .historyContent[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   .wrap-inner-center[_ngcontent-%COMP%]   .works[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%], #dataContent[_ngcontent-%COMP%]   .historyAna[_ngcontent-%COMP%]   .historyContent[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   .wrap-inner-center[_ngcontent-%COMP%]   .works[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  filter: none;\n  opacity: 1;\n}\n#dataContent[_ngcontent-%COMP%]   .historyAna[_ngcontent-%COMP%]   .historyContent[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   .wrap-inner-center[_ngcontent-%COMP%]   .works[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-of-type(2), #dataContent[_ngcontent-%COMP%]   .historyAna[_ngcontent-%COMP%]   .historyContent[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   .wrap-inner-center[_ngcontent-%COMP%]   .works[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-of-type(9) {\n  height: calc(100% + 20px);\n  margin: -20px 5px 0;\n}\n#dataContent[_ngcontent-%COMP%]   .historyAna[_ngcontent-%COMP%]   .historyContent[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   .wrap-inner-center[_ngcontent-%COMP%]   .works[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-of-type(3), #dataContent[_ngcontent-%COMP%]   .historyAna[_ngcontent-%COMP%]   .historyContent[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   .wrap-inner-center[_ngcontent-%COMP%]   .works[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-of-type(4), #dataContent[_ngcontent-%COMP%]   .historyAna[_ngcontent-%COMP%]   .historyContent[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   .wrap-inner-center[_ngcontent-%COMP%]   .works[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-of-type(5), #dataContent[_ngcontent-%COMP%]   .historyAna[_ngcontent-%COMP%]   .historyContent[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   .wrap-inner-center[_ngcontent-%COMP%]   .works[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-of-type(6), #dataContent[_ngcontent-%COMP%]   .historyAna[_ngcontent-%COMP%]   .historyContent[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   .wrap-inner-center[_ngcontent-%COMP%]   .works[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-of-type(7), #dataContent[_ngcontent-%COMP%]   .historyAna[_ngcontent-%COMP%]   .historyContent[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   .wrap-inner-center[_ngcontent-%COMP%]   .works[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-of-type(8) {\n  height: calc(100% + 30px);\n  margin: -30px 5px 0;\n}\n#dataContent[_ngcontent-%COMP%]   .historyAna[_ngcontent-%COMP%]   .historyContent[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   .wrap-inner-center[_ngcontent-%COMP%]   .works[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 60%;\n  height: 60%;\n  object-fit: cover;\n  -webkit-clip-path: polygon(0 5px, 5px 0, calc(100% - 5px) 0, 100% 5px, 100% calc(100% - 5px), calc(100% - 5px) 100%, 5px 100%, 0 calc(100% - 5px));\n  filter: grayscale();\n  opacity: 0.3;\n}\n#dataContent[_ngcontent-%COMP%]   .historyAna[_ngcontent-%COMP%]   .historyContent[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   .board[_ngcontent-%COMP%] {\n  height: 85%;\n  background-size: 100% 100%;\n  position: relative;\n  --decoration: #2d4e68;\n  --decorationBorder: rgba(255, 255, 255, 0.5);\n}\n#dataContent[_ngcontent-%COMP%]   .historyAna[_ngcontent-%COMP%]   .historyContent[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   .board[_ngcontent-%COMP%]   .board-img[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 14px;\n  line-height: 30px;\n  width: 92%;\n  height: 84%;\n  box-sizing: border-box;\n  background: linear-gradient(135deg, transparent 15px, #555555 0) top left, linear-gradient(-135deg, transparent 15px, #555555 0) top right, linear-gradient(-45deg, transparent 15px, #555555 0) bottom right, linear-gradient(45deg, transparent 15px, #555555 0) bottom left;\n  background-size: 50% 50%;\n  background-repeat: no-repeat;\n  position: absolute;\n  top: 40%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  overflow: hidden;\n}\n#dataContent[_ngcontent-%COMP%]   .historyAna[_ngcontent-%COMP%]   .historyContent[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   .board[_ngcontent-%COMP%]   .board-img1[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 14px;\n  line-height: 30px;\n  width: 91%;\n  height: 79%;\n  box-sizing: border-box;\n  background: linear-gradient(135deg, transparent 15px, var(--decoration) 0) top left, linear-gradient(-135deg, transparent 15px, var(--decoration) 0) top right, linear-gradient(-45deg, transparent 15px, var(--decoration) 0) bottom right, linear-gradient(45deg, transparent 15px, var(--decoration) 0) bottom left;\n  background-size: 50% 50%;\n  background-repeat: no-repeat;\n  position: absolute;\n  top: 40%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  overflow: hidden;\n}\n#dataContent[_ngcontent-%COMP%]   .historyAna[_ngcontent-%COMP%]   .historyContent[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   .board[_ngcontent-%COMP%]   .board-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  -webkit-clip-path: polygon(0 14px, 14px 0, calc(100% - 14px) 0, 100% 14px, 100% calc(100% - 14px), calc(100% - 14px) 100%, 14px 100%, 0 calc(100% - 14px));\n}\n#dataContent[_ngcontent-%COMP%]   .historyAna[_ngcontent-%COMP%]   .historyContent[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   .board[_ngcontent-%COMP%]   .board-ani[_ngcontent-%COMP%] {\n  animation: board-ani 1 4000ms ease;\n  animation-fill-mode: both;\n}\n@keyframes board-ani {\n  0% {\n    transform: scaleY(0) translateX(0);\n    filter: grayscale();\n    opacity: 0;\n  }\n  4% {\n    transform: scaleY(1) translateX(0);\n    filter: none;\n    opacity: 1;\n  }\n  10%,\n  22%,\n  24%,\n  41%,\n  43%,\n  81%,\n  83% {\n    filter: grayscale();\n    transform: translateX(1px) scaleY(1);\n    opacity: 1;\n  }\n  11%,\n  21%,\n  23%,\n  25%,\n  40%,\n  42%,\n  44%,\n  80%,\n  82%,\n  84%,\n  100% {\n    filter: none;\n    transform: translateX(-1px) scaleY(1);\n    opacity: 1;\n  }\n}\n#dataContent[_ngcontent-%COMP%]   .historyAna[_ngcontent-%COMP%]   .historyContent[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   .board[_ngcontent-%COMP%]   .board-ani-infinite[_ngcontent-%COMP%] {\n  animation: board-ani-infinite infinite 4000ms ease;\n  animation-fill-mode: both;\n}\n@keyframes board-ani-infinite {\n  0% {\n    transform: translateX(0);\n    filter: grayscale();\n  }\n  9% {\n    transform: translateX(0);\n    filter: none;\n  }\n  10%,\n  22%,\n  24%,\n  41%,\n  43%,\n  81%,\n  83% {\n    filter: grayscale();\n    transform: translateX(1px);\n  }\n  11%,\n  21%,\n  23%,\n  25%,\n  40%,\n  42%,\n  44%,\n  80%,\n  82%,\n  84%,\n  100% {\n    filter: none;\n    transform: translateX(-1px);\n  }\n}\n#dataContent[_ngcontent-%COMP%]   .historyAna[_ngcontent-%COMP%]   .historyContent[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   .board[_ngcontent-%COMP%]   .board-img[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50%;\n  bottom: 30px;\n  background: var(--textBlack);\n  color: var(--bright);\n  padding: 5px 10px;\n  box-shadow: 0 0 0 5px rgba(0, 0, 0, 0.1);\n  border-radius: 50px;\n  white-space: nowrap;\n  animation: board-text-ani 1 4000ms ease;\n  animation-fill-mode: both;\n  transition: all 200ms linear;\n}\n#dataContent[_ngcontent-%COMP%]   .historyAna[_ngcontent-%COMP%]   .historyContent[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   .board[_ngcontent-%COMP%]   .board-img[_ngcontent-%COMP%]:hover   div[_ngcontent-%COMP%] {\n  box-shadow: 0 0 0 5px rgba(0, 0, 0, 0.3);\n}\n@keyframes board-text-ani {\n  0% {\n    opacity: 0;\n    transform: translateX(-50%) scaleY(0);\n  }\n  5%,\n  100% {\n    opacity: 0.6;\n    transform: translateX(-50%) scaleY(1);\n  }\n}\n#canvas[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: inline-block;\n  position: absolute;\n  z-index: -1;\n}\n[_nghost-%COMP%]    .ant-spin-container {\n  height: 100%;\n}\n.header[_ngcontent-%COMP%] {\n  height: 65px;\n  text-indent: -99999px;\n  background: url('bg-01.png') no-repeat 0 0 / 100% auto;\n}\n.account[_ngcontent-%COMP%] {\n  height: 30px;\n  text-align: right;\n  color: #fff;\n  padding-right: 60px;\n  display: flex;\n}\n.account[_ngcontent-%COMP%]   .dataAna[_ngcontent-%COMP%] {\n  color: #3aa9ff;\n  font-size: 20px;\n  font-weight: 500;\n  cursor: pointer;\n  position: relative;\n  flex: 0 0 10%;\n}\n.account[_ngcontent-%COMP%]   .dataAna[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%] {\n  color: #eea200;\n}\n.account[_ngcontent-%COMP%]   .dataAna[_ngcontent-%COMP%]:hover {\n  color: #eea200;\n}\n.account[_ngcontent-%COMP%]   a.mgr-link[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin-left: 20px;\n  color: #3aa9ff;\n  margin-right: 10px;\n  flex: 0 0 7%;\n}\n.account[_ngcontent-%COMP%]   a.mgr-link[_ngcontent-%COMP%]:hover {\n  color: #eea200;\n}\n.search[_ngcontent-%COMP%] {\n  height: 200px;\n  width: 100%;\n  margin: 20px auto 0;\n  margin-left: 400px;\n}\n.search-left[_ngcontent-%COMP%] {\n  flex-basis: 150px;\n  margin-right: 10px;\n  overflow: hidden;\n  position: relative;\n}\n.upload[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 50px;\n  text-align: center;\n  color: #fff;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  background-color: #357af6;\n  font-size: 20px;\n}\n.upload[_ngcontent-%COMP%]    + input[_ngcontent-%COMP%] {\n  position: absolute;\n  display: block;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 50px;\n  opacity: 0;\n}\n.search-right[_ngcontent-%COMP%] {\n  flex: 0 0 41%;\n}\n.search-input[_ngcontent-%COMP%] {\n  flex-basis: 50px;\n  margin-bottom: 20px;\n  overflow: hidden;\n}\n.search-img[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100%;\n  color: #fff;\n  padding: 10px 52px 10px 10px;\n  outline: none;\n  border: 2px solid #346ad3;\n  background: transparent;\n}\n.search-drag[_ngcontent-%COMP%] {\n  height: 110px;\n  justify-content: center;\n  align-items: center;\n  color: #fff;\n  font-size: 16px;\n  border: 2px dashed #346ad3;\n}\n.recommend[_ngcontent-%COMP%], .concern[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0 auto;\n  overflow: hidden;\n}\n.recommend-title[_ngcontent-%COMP%], .concern-title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: #ffffff;\n  margin-bottom: 10px;\n}\n.ant-progress[_ngcontent-%COMP%] {\n  margin-right: 8px;\n  margin-bottom: 8px;\n  display: inline-block;\n}\n.recommend-pictures[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-wrap: wrap;\n}\n.recommend-picture[_ngcontent-%COMP%] {\n  flex: 0 0 50%;\n  height: 120px;\n  overflow: hidden;\n  position: relative;\n  display: flex;\n}\n.recommend-picture[_ngcontent-%COMP%]   .pic[_ngcontent-%COMP%] {\n  flex: 0 0 15%;\n  padding: 5px;\n}\n.recommend-picture[_ngcontent-%COMP%]   .pic[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 2px;\n}\n.recommend-picture[_ngcontent-%COMP%]   .echarts[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 100%;\n}\n.recommend-picture[_ngcontent-%COMP%]   .num[_ngcontent-%COMP%] {\n  flex: 0 0 30%;\n  padding: 5px;\n  list-style: none;\n}\n.recommend-picture[_ngcontent-%COMP%]   .num[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 2px;\n  color: #fff;\n  margin-top: 8px;\n  font-size: 14px;\n}\n.recommend-picture[_ngcontent-%COMP%]   .num[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #df9a19;\n  font-size: 24px;\n  font-weight: 800;\n  margin-right: 20px;\n}\n.concern-contents[_ngcontent-%COMP%] {\n  flex-flow: wrap;\n}\n.concern-content[_ngcontent-%COMP%] {\n  height: 46px;\n  line-height: 46px;\n  color: #ffffff;\n  font-size: 16px;\n  margin: 0 10px 10px 0;\n  padding: 0 20px;\n  background-color: #357af6;\n}\n.concern-content[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background-color: #3a70cc;\n}\n.type-train-count[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 20px;\n  bottom: 20px;\n}\n.type-train-count[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  font-family: \"Microsoft YaHei\", \"\u5FAE\u8F6F\u96C5\u9ED1\", \"Helvetica Neue\", Helvetica, \"PingFang SC\", \"Hiragino Sans GB\", Arial, sans-serif;\n  font-size: 40px;\n}\n.type-train-count[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  margin-left: 10px;\n  font-size: 20px;\n}\n[_nghost-%COMP%]   .hot-image-container[_ngcontent-%COMP%] {\n  background-color: #000;\n  display: flex;\n}\n.nav[_ngcontent-%COMP%] {\n  width: 110%;\n  list-style: none;\n  color: #fff;\n  display: flex;\n  font-size: 16px;\n}\n.nav[_ngcontent-%COMP%]   .select[_ngcontent-%COMP%] {\n  color: #357af6;\n}\n.nav[_ngcontent-%COMP%]   .select[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%] {\n  left: 0%;\n  width: 100%;\n}\n.nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  color: #357af6;\n}\n.nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   .line[_ngcontent-%COMP%] {\n  left: 0%;\n  width: 100%;\n}\n.nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-right: 30px;\n  cursor: pointer;\n  position: relative;\n}\n.nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 18px;\n  margin-right: 3px;\n  margin-bottom: 3px;\n}\n.nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%] {\n  width: 0;\n  height: 3px;\n  background: #357af6;\n  position: absolute;\n  top: 100%;\n  left: 50%;\n  transition: all 0.4s;\n}\n.sAnda[_ngcontent-%COMP%] {\n  position: relative;\n  top: -20px;\n  width: 80%;\n  height: 100%;\n  width: 60%;\n  margin: 0 auto;\n  display: flex;\n  flex-wrap: wrap;\n}\n.sAnda[_ngcontent-%COMP%]   .hotPic[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0 auto;\n  overflow: hidden;\n  display: flex;\n  height: 170px;\n}\n.sAnda[_ngcontent-%COMP%]   .hotPic[_ngcontent-%COMP%]   .pic[_ngcontent-%COMP%] {\n  flex: 0 0 50%;\n  display: flex;\n  flex-wrap: wrap;\n}\n.sAnda[_ngcontent-%COMP%]   .hotPic[_ngcontent-%COMP%]   .pic[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0 auto;\n  border-radius: 10px;\n  padding: 10px;\n  position: relative;\n}\n.sAnda[_ngcontent-%COMP%]   .hotPic[_ngcontent-%COMP%]   .pic[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #fff;\n  font-size: 18px;\n  font-weight: 600;\n}\n.sAnda[_ngcontent-%COMP%]   .hotPic[_ngcontent-%COMP%]   .pic[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%] {\n  color: #fff;\n  margin-top: 15px;\n  font-size: 14px;\n  text-indent: 2em;\n}\n.sAnda[_ngcontent-%COMP%]   .hotPic[_ngcontent-%COMP%]   .pic[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  flex: 0 0 100%;\n  display: flex;\n  list-style: none;\n}\n.sAnda[_ngcontent-%COMP%]   .hotPic[_ngcontent-%COMP%]   .pic[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  border: 1px solid #fff;\n  margin: 0 5px;\n  background: black;\n  height: 65px;\n  width: 20%;\n  padding: 5px 0;\n}\n.sAnda[_ngcontent-%COMP%]   .hotPic[_ngcontent-%COMP%]   .pic[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  object-fit: cover;\n  width: 100%;\n  height: 100%;\n  cursor: pointer;\n}\n.sAnda[_ngcontent-%COMP%]   .hotPic[_ngcontent-%COMP%]   .news[_ngcontent-%COMP%] {\n  flex: 0 0 50%;\n  display: flex;\n  flex-wrap: wrap;\n  padding-left: 60px;\n}\n.sAnda[_ngcontent-%COMP%]   .hotPic[_ngcontent-%COMP%]   .news[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0 auto;\n  border-radius: 10px;\n  padding: 10px;\n  position: relative;\n}\n.sAnda[_ngcontent-%COMP%]   .hotPic[_ngcontent-%COMP%]   .news[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #fff;\n  font-size: 18px;\n  font-weight: 600;\n}\n.sAnda[_ngcontent-%COMP%]   .hotPic[_ngcontent-%COMP%]   .news[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%] {\n  color: #fff;\n  margin-top: 15px;\n  font-size: 14px;\n  text-indent: 2em;\n}\n.sAnda[_ngcontent-%COMP%]   .hotPic[_ngcontent-%COMP%]   .news[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding: 10px;\n  list-style: none;\n  display: flex;\n  flex-wrap: wrap;\n}\n.sAnda[_ngcontent-%COMP%]   .hotPic[_ngcontent-%COMP%]   .news[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  flex: 0 0 50%;\n  padding: 5px 0;\n}\n.sAnda[_ngcontent-%COMP%]   .hotPic[_ngcontent-%COMP%]   .news[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-align: center;\n  text-decoration: underline;\n}\n.sAnda[_ngcontent-%COMP%]   .recommend-title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  text-align: center;\n}\n.sAnda[_ngcontent-%COMP%]   .achievements[_ngcontent-%COMP%] {\n  flex: 0 0 50%;\n}\n.sAnda[_ngcontent-%COMP%]   .achievements[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: flex;\n  list-style: none;\n  flex-wrap: wrap;\n  margin-bottom: 0;\n}\n.sAnda[_ngcontent-%COMP%]   .achievements[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   p[_ngcontent-%COMP%] {\n  bottom: -10px;\n  display: block;\n}\n.sAnda[_ngcontent-%COMP%]   .achievements[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(1):after {\n  content: \"\";\n  width: 2px;\n  height: 100%;\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  background: linear-gradient(180deg, rgba(255, 0, 0, 0), #357af6);\n}\n.sAnda[_ngcontent-%COMP%]   .achievements[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(1):before {\n  content: \"\";\n  width: 100%;\n  height: 2px;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  background: linear-gradient(-270deg, rgba(255, 0, 0, 0), #357af6);\n}\n.sAnda[_ngcontent-%COMP%]   .achievements[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(2) {\n  border-bottom: 2px solid #357af6;\n}\n.sAnda[_ngcontent-%COMP%]   .achievements[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(2):after {\n  content: \"\";\n  width: 2px;\n  height: 100%;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  background: linear-gradient(180deg, rgba(255, 0, 0, 0), #357af6);\n}\n.sAnda[_ngcontent-%COMP%]   .achievements[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(2):before {\n  content: \"\";\n  width: 2px;\n  height: 100%;\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  background: linear-gradient(180deg, rgba(255, 0, 0, 0), #357af6);\n}\n.sAnda[_ngcontent-%COMP%]   .achievements[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(3):before {\n  content: \"\";\n  width: 100%;\n  height: 2px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  background: linear-gradient(-270deg, rgba(255, 0, 0, 0), #357af6);\n}\n.sAnda[_ngcontent-%COMP%]   .achievements[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(3):after {\n  content: \"\";\n  width: 2px;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  right: 0;\n  background: linear-gradient(0deg, rgba(255, 0, 0, 0), #357af6);\n}\n.sAnda[_ngcontent-%COMP%]   .achievements[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(4):after {\n  content: \"\";\n  width: 2px;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  background: linear-gradient(0deg, rgba(255, 0, 0, 0), #357af6);\n}\n.sAnda[_ngcontent-%COMP%]   .achievements[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(4):before {\n  content: \"\";\n  width: 2px;\n  height: 100%;\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  background: linear-gradient(0deg, rgba(255, 0, 0, 0), #357af6);\n}\n.sAnda[_ngcontent-%COMP%]   .achievements[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(4) {\n  border-top: 2px solid #357af6;\n}\n.sAnda[_ngcontent-%COMP%]   .achievements[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  flex: 0 0 50%;\n  margin: 0 auto;\n  position: relative;\n  padding: 20px 0 0 0;\n}\n.sAnda[_ngcontent-%COMP%]   .achievements[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #fff;\n  text-align: center;\n  position: relative;\n}\n.sAnda[_ngcontent-%COMP%]   .achievements[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  position: absolute;\n  background: rgba(0, 0, 0, 0.679);\n  width: 100%;\n  font-size: 10px;\n  line-height: 17px;\n  color: #ffffff;\n  padding: 10px;\n  display: none;\n  pointer-events: none;\n}\n.sAnda[_ngcontent-%COMP%]   .server_style[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(1):before {\n  content: \"\";\n  width: 2px;\n  height: 100%;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  background: linear-gradient(180deg, rgba(255, 0, 0, 0), #357af6);\n}\n.sAnda[_ngcontent-%COMP%]   .server_style[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(1) {\n  border-bottom: 2px solid #357af6;\n}\n.sAnda[_ngcontent-%COMP%]   .server_style[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(2):before {\n  content: \"\";\n  width: 100%;\n  height: 2px;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  background: linear-gradient(270deg, rgba(255, 0, 0, 0), #357af6);\n}\n.sAnda[_ngcontent-%COMP%]   .server_style[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(2) {\n  border-top: none;\n  border-bottom: none;\n}\n.sAnda[_ngcontent-%COMP%]   .server_style[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(3):before {\n  content: \"\";\n  width: 2px;\n  height: 100%;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  background: linear-gradient(0deg, rgba(255, 0, 0, 0), #357af6);\n}\n.sAnda[_ngcontent-%COMP%]   .server_style[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(3) {\n  border-top: 2px solid #357af6;\n}\n.sAnda[_ngcontent-%COMP%]   .server_style[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(4):before {\n  content: \"\";\n  width: 100%;\n  height: 2px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  background: linear-gradient(270deg, rgba(255, 0, 0, 0), #357af6);\n}\n.sAnda[_ngcontent-%COMP%]   .server_style[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(4) {\n  border-top: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC9wYWdlcy9ob21lL0Q6L2ZmL3RhcmdldC1yZWNvZ25pemUtd3d3LWh0bWwtVjAuMi9zcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQubGVzcyIsIi4uL2FwcC9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsaURBQUE7RUFDQSxVQUFBO0FDQ0Y7QURJQTtFQUVNLHNCQUFBO0FDSE47QURhQTtFQUNFLG9EQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtBQ1hGO0FEYUE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDWEY7QURRQTtFQU1JLGNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtBQ1hKO0FEQ0E7RUFjTSxXQUFBO0VBQ0EsYUFBQTtBQ1pOO0FESEE7RUFvQlEsZUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ2RSO0FEVEE7RUEwQlEsT0FBQTtFQUNBLFlBQUE7QUNkUjtBRGJBO0VBaUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUVBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0FDbEJKO0FEckJBO0VBeUNNLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0FDakJOO0FEM0JBO0VBK0NNLFVBQUE7QUNqQk47QUQ5QkE7RUFrRE0sV0FBQTtBQ2pCTjtBRGpDQTtFQXNEUSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDbEJSO0FEdENBO0VBMERVLFlBQUE7RUFDQSx1Q0FBQTtFQUNBLDBDQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQ2pCVjtBRDdDQTtFQWdFWSxZQUFBO0VBQ0Esc0JBQUE7QUNoQlo7QURqREE7RUFtRWMsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtBQ2ZkO0FEMURBO0VBNEVjLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtUQUFBO0VBS0Esd0JBQUE7RUFDQSw0QkFBQTtFQUNBLGVBQUE7QUNuQmQ7QURwRUE7O0VBMkZjLGtTQUFBO0VBS0Esd0JBQUE7RUFDQSw0QkFBQTtBQ3ZCZDtBRDFFQTs7RUFxR2MsWUFBQTtFQUNBLFVBQUE7QUN2QmQ7QUQvRUE7O0VBMEdjLHlCQUFBO0VBQ0EsbUJBQUE7QUN2QmQ7QURwRkE7Ozs7OztFQW1IYyx5QkFBQTtFQUNBLG1CQUFBO0FDdkJkO0FEN0ZBO0VBdUhjLFVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrSkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ3ZCZDtBRHJHQTtFQWlJVSxXQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNENBQUE7QUN6QlY7QUQ1R0E7RUF1SVksV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSw4UUFBQTtFQUtBLHdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtBQzVCWjtBRDVIQTtFQTRKVSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLHNUQUFBO0VBS0Esd0JBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLGdCQUFBO0FDakNWO0FENUlBO0VBaUxVLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSwwSkFBQTtBQ2xDVjtBRGxKQTtFQXVMUSxrQ0FBQTtFQUNBLHlCQUFBO0FDbENSO0FEb0NJO0VBQ0k7SUFBSSxrQ0FBQTtJQUFvQyxtQkFBQTtJQUFxQixVQUFBO0VDL0JuRTtFRGdDTTtJQUFJLGtDQUFBO0lBQW9DLFlBQUE7SUFBYyxVQUFBO0VDM0I1RDtFRDRCTTs7Ozs7OztJQUE2QixtQkFBQTtJQUFxQixvQ0FBQTtJQUFzQyxVQUFBO0VDakI5RjtFRGtCTTs7Ozs7Ozs7Ozs7SUFBOEMsWUFBQTtJQUFjLHFDQUFBO0lBQXVDLFVBQUE7RUNIekc7QUFDRjtBRDVMQTtFQWlNUSxrREFBQTtFQUNBLHlCQUFBO0FDRlI7QURJSTtFQUNJO0lBQUksd0JBQUE7SUFBMEIsbUJBQUE7RUNBcEM7RURDTTtJQUFJLHdCQUFBO0lBQTBCLFlBQUE7RUNHcEM7RURGTTs7Ozs7OztJQUE2QixtQkFBQTtJQUFxQiwwQkFBQTtFQ1l4RDtFRFhNOzs7Ozs7Ozs7OztJQUE4QyxZQUFBO0lBQWMsMkJBQUE7RUN5QmxFO0FBQ0Y7QURsT0E7RUEyTVEsa0JBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLHdDQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVDQUFBO0VBQ0EseUJBQUE7RUFDQSw0QkFBQTtBQzBCUjtBRGhQQTtFQXlOUSx3Q0FBQTtBQzBCUjtBRHhCSTtFQUNJO0lBQUksVUFBQTtJQUFZLHFDQUFBO0VDNEJ0QjtFRDNCTTs7SUFBUyxZQUFBO0lBQWMscUNBQUE7RUNnQzdCO0FBQ0Y7QUR0QkE7RUFDQyxXQUFBO0VBQ0MsWUFBQTtFQUNELHFCQUFBO0VBQ0Esa0JBQUE7RUFDQyxXQUFBO0FDd0JGO0FEcEJBO0VBQ0ksWUFBQTtBQ3NCSjtBRGxCQTtFQUNFLFlBQUE7RUFDQSxxQkFBQTtFQUNBLHNEQUFBO0FDb0JGO0FEakJBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQ21CRjtBRHhCQTtFQVFJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FDbUJKO0FEaENBO0VBZU0sY0FBQTtBQ29CTjtBRG5DQTtFQW1CSSxjQUFBO0FDbUJKO0FEdENBO0VBc0JJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNtQko7QUQ3Q0E7RUE4QkksY0FBQTtBQ2tCSjtBRFhBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDYUY7QURWQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDWUY7QURUQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQ1dGO0FEUkE7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQ1VGO0FEUEE7RUFDRSxhQUFBO0FDU0Y7QUROQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ1FGO0FETEE7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtBQ09GO0FESEE7RUFFRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7QUNJRjtBREFBOztFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNHRjtBRENBOztFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUNFRjtBRENBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FDQ0Y7QURFQTtFQUNFLE9BQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQ0FGO0FER0E7RUFDRSxhQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FDREY7QURKQTtFQU9JLGFBQUE7RUFDQSxZQUFBO0FDQUo7QURSQTtFQVVNLFlBQUE7QUNDTjtBRFhBO0VBY0ksT0FBQTtFQUNBLFlBQUE7QUNBSjtBRGZBO0VBa0JJLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNBSjtBRHBCQTtFQXNCTSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FDQ047QUQxQkE7RUEyQlEsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDRVI7QURJQTtFQUNFLGVBQUE7QUNGRjtBREtBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQ0hGO0FETUE7RUFDRSxXQUFBO0VBQ0EseUJBQUE7QUNKRjtBRFFBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ05GO0FEU0k7RUFDRSx5SEFBQTtFQUNBLGVBQUE7QUNQTjtBRFVJO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0FDUk47QURjQTtFQUVJLHNCQUFBO0VBQ0EsYUFBQTtBQ2JKO0FEa0JBO0VBQ0UsV0FBQTtFQUVBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FDakJGO0FEV0E7RUFTSSxjQUFBO0FDakJKO0FEUUE7RUFXTSxRQUFBO0VBQ0EsV0FBQTtBQ2hCTjtBRElBO0VBaUJJLGNBQUE7QUNsQko7QURDQTtFQW1CTSxRQUFBO0VBQ0EsV0FBQTtBQ2pCTjtBREhBO0VBeUJJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDbkJKO0FEUkE7RUE2Qk0sV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNsQk47QURiQTtFQWtDTSxRQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLG9CQUFBO0FDbEJOO0FEMEJBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFFQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FDekJGO0FEZ0JBO0VBYUksV0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0FDMUJKO0FEU0E7RUFxQk0sYUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FDM0JOO0FESUE7RUF5QlEsV0FBQTtFQUdBLGNBQUE7RUFDQSxtQkFBQTtFQUVBLGFBQUE7RUFDQSxrQkFBQTtBQzdCUjtBREhBO0VBa0NVLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQzVCVjtBRFRBO0VBd0NVLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQzVCVjtBRGZBO0VBK0NRLGNBQUE7RUFFQSxhQUFBO0VBR0EsZ0JBQUE7QUNoQ1I7QURwQkE7RUF1RFUsc0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7QUNoQ1Y7QUQ1QkE7RUE4RFksaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUMvQlo7QURsQ0E7RUF1RU0sYUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNsQ047QUR4Q0E7RUE0RVEsV0FBQTtFQUdBLGNBQUE7RUFDQSxtQkFBQTtFQUVBLGFBQUE7RUFDQSxrQkFBQTtBQ3BDUjtBRC9DQTtFQXFGVSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNuQ1Y7QURyREE7RUEyRlUsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDbkNWO0FEM0RBO0VBd0hRLGFBQUE7RUFFQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FDM0RSO0FEakVBO0VBOEhVLGFBQUE7RUFDQSxjQUFBO0FDMURWO0FEckVBO0VBaUlZLGtCQUFBO0VBQ0EsMEJBQUE7QUN6RFo7QUR6RUE7RUF5SUksZUFBQTtFQUNBLGtCQUFBO0FDN0RKO0FEN0VBO0VBNklJLGFBQUE7QUM3REo7QURoRkE7RUErSUksYUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDNURKO0FEdEZBO0VBcUpRLGFBQUE7RUFDQSxjQUFBO0FDNURSO0FEMUZBO0VBMkpNLFdBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxnRUFBQTtBQzlETjtBRG5HQTtFQXFLTSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsaUVBQUE7QUMvRE47QUQ1R0E7RUE4S00sZ0NBQUE7QUMvRE47QUQvR0E7RUFpTE0sV0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLGdFQUFBO0FDL0ROO0FEeEhBO0VBMExNLFdBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxnRUFBQTtBQy9ETjtBRGpJQTtFQXFNTSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsaUVBQUE7QUNqRU47QUQxSUE7RUFnTk0sV0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLDhEQUFBO0FDbkVOO0FEbkpBO0VBMk5NLFdBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSw4REFBQTtBQ3JFTjtBRDVKQTtFQXNPTSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsOERBQUE7QUN2RU47QURyS0E7RUFpUE0sNkJBQUE7QUN6RU47QUR4S0E7RUF1UFEsYUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDNUVSO0FEOUtBO0VBNFBVLGVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQzNFVjtBRHBMQTtFQWtRVSxrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0FDM0VWO0FEL0xBO0VBb1JRLFdBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxnRUFBQTtBQ2xGUjtBRHhNQTtFQTZSUSxnQ0FBQTtBQ2xGUjtBRDNNQTtFQWdTUSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsZ0VBQUE7QUNsRlI7QURwTkE7RUF5U1EsZ0JBQUE7RUFDQSxtQkFBQTtBQ2xGUjtBRHhOQTtFQTZTUSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsOERBQUE7QUNsRlI7QURqT0E7RUFzVFEsNkJBQUE7QUNsRlI7QURwT0E7RUF5VFEsV0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLGdFQUFBO0FDbEZSO0FEN09BO0VBa1VRLGdCQUFBO0FDbEZSIiwiZmlsZSI6Ii4uL2FwcC9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaG9tZSB7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2JnMDEucG5nJykgbm8tcmVwZWF0IDAgMCB+XCIvXCIgY292ZXI7XG4gIHotaW5kZXg6IDI7XG5cblxuXG59XG46aG9zdCA6Om5nLWRlZXB7XG4gIC5hbnQtcHJvZ3Jlc3MtdGV4dHtcbiAgICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIH1cbiBcbiBcbn1cblxuLmZlbnhpQnV0dG9ue1xuICBcbn1cblxuLndpbmJveCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2ZmMDBmMCwgIzAwNTBmZik7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDEycHggMTJweCAwIDA7XG59XG4jZGF0YUNvbnRlbnR7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gIC5ub3dBbmF7XG4gICAgZmxleDogMCAwIDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA1NSU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcblxuICAgIC5jb250ZW50e1xuICAgICAgLy8gZGlzcGxheTogZmxleDtcbiAgICAgIGhlaWdodDogNzAlO1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIC8vIC5ib3h7XG4gICAgICAvLyAgIHBhZGRpbmc6IDAgNDBweDtcbiAgICAgIC8vIH1cbiAgICAgIC5sZWZ0e1xuICAgICAgICBwYWRkaW5nOiAwIDQwcHg7XG4gICAgICAgIGZsZXg6ICAwIDAgNDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGNvbG9yOiAjRmZmIFxuICAgICAgfTtcbiAgICAgIC5yaWdodHtcbiAgICAgICAgZmxleDogMTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgfVxuICAgIH1cblxuICB9XG4gIC5oaXN0b3J5QW5he1xuICAgIGhlaWdodDogNDUlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRvcDogODBweDtcbiAgICAvLyBib3R0b206IDA7XG4gICAgZmxleDogMCAwIDEwMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvcmRlci10b3A6MXB4IHNvbGlkICNmZmY7XG4gICAgLmNoYW5nZUxpc3R7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIHRvcDogNTAlO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgICAucGVyTGlzdHtcbiAgICAgIGxlZnQ6IDIwcHg7XG4gICAgfVxuICAgIC5uZXh0TGlzdHtcbiAgICAgIHJpZ2h0OiAyMHB4O1xuICAgIH1cbiAgICAuaGlzdG9yeUNvbnRlbnR7XG4gICAgICAud3JhcCB7XG4gICAgICAgIHRvcDogLThweDtcbiAgICAgICAgaGVpZ2h0OiA3MCU7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgLndyYXAtaW5uZXItY2VudGVyIHtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgYm9yZGVyLXRvcDogc29saWQgMXB4IHZhcigtLWRlY29yYXRpb24pO1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCB2YXIoLS1kZWNvcmF0aW9uKTtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAud29ya3Mge1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIC50aHVtYm5haWwge1xuICAgICAgICAgICAgICBoZWlnaHQ6IDI1JTtcbiAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICAgICAgICBtYXJnaW46IDIlIGF1dG8gMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnRodW1ibmFpbCBsaSB7XG4gICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwJSAtIDEwcHgpO1xuICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICAgIG1hcmdpbjogMCA1cHg7XG4gICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IFxuICAgICAgICAgICAgICAgICAgbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdHJhbnNwYXJlbnQgNXB4LCB2YXIoLS1kZWNvcmF0aW9uKSAwKSB0b3AgbGVmdCxcbiAgICAgICAgICAgICAgICAgIGxpbmVhci1ncmFkaWVudCgtMTM1ZGVnLCB0cmFuc3BhcmVudCA1cHgsIHZhcigtLWRlY29yYXRpb24pIDApIHRvcCByaWdodCxcbiAgICAgICAgICAgICAgICAgIGxpbmVhci1ncmFkaWVudCgtNDVkZWcsIHRyYW5zcGFyZW50IDVweCwgdmFyKC0tZGVjb3JhdGlvbikgMCkgYm90dG9tIHJpZ2h0LFxuICAgICAgICAgICAgICAgICAgbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCB0cmFuc3BhcmVudCA1cHgsIHZhcigtLWRlY29yYXRpb24pIDApIGJvdHRvbSBsZWZ0O1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDUwJSA1MCU7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnRodW1ibmFpbCBsaTpob3ZlcixcbiAgICAgICAgICAudGh1bWJuYWlsIGxpLmFjdGl2ZSB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IFxuICAgICAgICAgICAgICAgICAgbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdHJhbnNwYXJlbnQgNXB4LCB2YXIoLS1icmlnaHQpIDApIHRvcCBsZWZ0LFxuICAgICAgICAgICAgICAgICAgbGluZWFyLWdyYWRpZW50KC0xMzVkZWcsIHRyYW5zcGFyZW50IDVweCwgdmFyKC0tYnJpZ2h0KSAwKSB0b3AgcmlnaHQsXG4gICAgICAgICAgICAgICAgICBsaW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCB0cmFuc3BhcmVudCA1cHgsIHZhcigtLWJyaWdodCkgMCkgYm90dG9tIHJpZ2h0LFxuICAgICAgICAgICAgICAgICAgbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCB0cmFuc3BhcmVudCA1cHgsIHZhcigtLWJyaWdodCkgMCkgYm90dG9tIGxlZnQ7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogNTAlIDUwJTtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnRodW1ibmFpbCBsaTpob3ZlciBpbWcsXG4gICAgICAgICAgLnRodW1ibmFpbCBsaS5hY3RpdmUgaW1nIHtcbiAgICAgICAgICAgICAgZmlsdGVyOiBub25lO1xuICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICAudGh1bWJuYWlsIGxpOm50aC1vZi10eXBlKDIpLFxuICAgICAgICAgIC50aHVtYm5haWwgbGk6bnRoLW9mLXR5cGUoOSkge1xuICAgICAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSArIDIwcHgpO1xuICAgICAgICAgICAgICBtYXJnaW46IC0yMHB4IDVweCAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAudGh1bWJuYWlsIGxpOm50aC1vZi10eXBlKDMpLFxuICAgICAgICAgIC50aHVtYm5haWwgbGk6bnRoLW9mLXR5cGUoNCksXG4gICAgICAgICAgLnRodW1ibmFpbCBsaTpudGgtb2YtdHlwZSg1KSxcbiAgICAgICAgICAudGh1bWJuYWlsIGxpOm50aC1vZi10eXBlKDYpLFxuICAgICAgICAgIC50aHVtYm5haWwgbGk6bnRoLW9mLXR5cGUoNyksXG4gICAgICAgICAgLnRodW1ibmFpbCBsaTpudGgtb2YtdHlwZSg4KSB7XG4gICAgICAgICAgICAgIGhlaWdodDogY2FsYygxMDAlICsgMzBweCk7XG4gICAgICAgICAgICAgIG1hcmdpbjogLTMwcHggNXB4IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC50aHVtYm5haWwgbGkgaW1nIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDYwJTtcbiAgICAgICAgICAgICAgaGVpZ2h0OiA2MCU7XG4gICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgICAgICAtd2Via2l0LWNsaXAtcGF0aDogcG9seWdvbigwIDVweCwgNXB4IDAsIGNhbGMoMTAwJSAtIDVweCkgMCwgMTAwJSA1cHgsIDEwMCUgY2FsYygxMDAlIC0gNXB4KSwgY2FsYygxMDAlIC0gNXB4KSAxMDAlLCA1cHggMTAwJSwgMCBjYWxjKDEwMCUgLSA1cHgpKTtcbiAgICAgICAgICAgICAgZmlsdGVyOiBncmF5c2NhbGUoKTtcbiAgICAgICAgICAgICAgb3BhY2l0eTogMC4zO1xuICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmJvYXJkIHtcbiAgICAgICAgICBoZWlnaHQ6IDg1JTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgLS1kZWNvcmF0aW9uOiAjMmQ0ZTY4O1xuICAgICAgICAgIC0tZGVjb3JhdGlvbkJvcmRlcjogcmdiYSgyNTUsIDI1NSwgMjU1LCA1MCUpO1xuICAgICAgICAgIC5ib2FyZC1pbWcge1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICAgICAgICAgIHdpZHRoOiA5MiU7XG4gICAgICAgICAgICBoZWlnaHQ6IDg0JTtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBcbiAgICAgICAgICAgICAgICBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB0cmFuc3BhcmVudCAxNXB4LCAjNTU1NTU1IDApIHRvcCBsZWZ0LFxuICAgICAgICAgICAgICAgIGxpbmVhci1ncmFkaWVudCgtMTM1ZGVnLCB0cmFuc3BhcmVudCAxNXB4LCAjNTU1NTU1IDApIHRvcCByaWdodCxcbiAgICAgICAgICAgICAgICBsaW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCB0cmFuc3BhcmVudCAxNXB4LCAjNTU1NTU1IDApIGJvdHRvbSByaWdodCxcbiAgICAgICAgICAgICAgICBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHRyYW5zcGFyZW50IDE1cHgsICM1NTU1NTUgMCkgYm90dG9tIGxlZnQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDUwJSA1MCU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiA0MCU7XG4gICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgXG4gICAgICAgIH1cbiAgICAgICAgLmJvYXJkLWltZzEge1xuICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICAgICAgICB3aWR0aDogOTElO1xuICAgICAgICAgIGhlaWdodDogNzklO1xuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgYmFja2dyb3VuZDogXG4gICAgICAgICAgICAgIGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHRyYW5zcGFyZW50IDE1cHgsIHZhcigtLWRlY29yYXRpb24pIDApIHRvcCBsZWZ0LFxuICAgICAgICAgICAgICBsaW5lYXItZ3JhZGllbnQoLTEzNWRlZywgdHJhbnNwYXJlbnQgMTVweCwgdmFyKC0tZGVjb3JhdGlvbikgMCkgdG9wIHJpZ2h0LFxuICAgICAgICAgICAgICBsaW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCB0cmFuc3BhcmVudCAxNXB4LCB2YXIoLS1kZWNvcmF0aW9uKSAwKSBib3R0b20gcmlnaHQsXG4gICAgICAgICAgICAgIGxpbmVhci1ncmFkaWVudCg0NWRlZywgdHJhbnNwYXJlbnQgMTVweCwgdmFyKC0tZGVjb3JhdGlvbikgMCkgYm90dG9tIGxlZnQ7XG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiA1MCUgNTAlO1xuICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogNDAlO1xuICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgIFxuICAgICAgICB9XG4gICAgICAgIC5ib2FyZC1pbWcgaW1nIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgICAgLXdlYmtpdC1jbGlwLXBhdGg6IHBvbHlnb24oMCAxNHB4LCAxNHB4IDAsIGNhbGMoMTAwJSAtIDE0cHgpIDAsIDEwMCUgMTRweCwgMTAwJSBjYWxjKDEwMCUgLSAxNHB4KSwgY2FsYygxMDAlIC0gMTRweCkgMTAwJSwgMTRweCAxMDAlLCAwIGNhbGMoMTAwJSAtIDE0cHgpKTtcbiAgICAgIH1cbiAgICAgIC5ib2FyZC1hbmkge1xuICAgICAgICBhbmltYXRpb246IGJvYXJkLWFuaSAxIDQwMDBtcyBlYXNlO1xuICAgICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xuICAgIH1cbiAgICBAa2V5ZnJhbWVzIGJvYXJkLWFuaSB7XG4gICAgICAgIDAlIHt0cmFuc2Zvcm06IHNjYWxlWSgwKSB0cmFuc2xhdGVYKDApOyBmaWx0ZXI6IGdyYXlzY2FsZSgpOyBvcGFjaXR5OiAwO31cbiAgICAgICAgNCUge3RyYW5zZm9ybTogc2NhbGVZKDEpIHRyYW5zbGF0ZVgoMCk7IGZpbHRlcjogbm9uZTsgb3BhY2l0eTogMTt9XG4gICAgICAgIDEwJSwyMiUsMjQlLDQxJSw0MyUsODElLDgzJSB7ZmlsdGVyOiBncmF5c2NhbGUoKTsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDFweCkgc2NhbGVZKDEpOyBvcGFjaXR5OiAxO31cbiAgICAgICAgMTElLDIxJSwyMyUsMjUlLDQwJSw0MiUsNDQlLDgwJSw4MiUsODQlLDEwMCUge2ZpbHRlcjogbm9uZTsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xcHgpIHNjYWxlWSgxKTsgb3BhY2l0eTogMTt9XG4gICAgfVxuICAgIC5ib2FyZC1hbmktaW5maW5pdGUge1xuICAgICAgICBhbmltYXRpb246IGJvYXJkLWFuaS1pbmZpbml0ZSBpbmZpbml0ZSA0MDAwbXMgZWFzZTtcbiAgICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbiAgICB9XG4gICAgQGtleWZyYW1lcyBib2FyZC1hbmktaW5maW5pdGUge1xuICAgICAgICAwJSB7dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApOyBmaWx0ZXI6IGdyYXlzY2FsZSgpO31cbiAgICAgICAgOSUge3RyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgZmlsdGVyOiBub25lO31cbiAgICAgICAgMTAlLDIyJSwyNCUsNDElLDQzJSw4MSUsODMlIHtmaWx0ZXI6IGdyYXlzY2FsZSgpOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMXB4KTt9XG4gICAgICAgIDExJSwyMSUsMjMlLDI1JSw0MCUsNDIlLDQ0JSw4MCUsODIlLDg0JSwxMDAlIHtmaWx0ZXI6IG5vbmU7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMXB4KTt9XG4gICAgfVxuICAgIC5ib2FyZC1pbWcgZGl2IHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIGJvdHRvbTogMzBweDtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tdGV4dEJsYWNrKTtcbiAgICAgICAgY29sb3I6IHZhcigtLWJyaWdodCk7XG4gICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgICAgICBib3gtc2hhZG93OiAwIDAgMCA1cHggcmdiYSgwLDAsMCwwLjEpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICBhbmltYXRpb246IGJvYXJkLXRleHQtYW5pIDEgNDAwMG1zIGVhc2U7XG4gICAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAyMDBtcyBsaW5lYXI7XG4gICAgfVxuICAgIC5ib2FyZC1pbWc6aG92ZXIgZGl2IHtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgNXB4IHJnYmEoMCwwLDAsMC4zKTtcbiAgICB9XG4gICAgQGtleWZyYW1lcyBib2FyZC10ZXh0LWFuaSB7XG4gICAgICAgIDAlIHtvcGFjaXR5OiAwOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgc2NhbGVZKDApO31cbiAgICAgICAgNSUsMTAwJSB7b3BhY2l0eTogMC42OyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgc2NhbGVZKDEpO31cbiAgICB9XG5cbiAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG59XG5cblxuI2NhbnZhcyB7XG5cdHdpZHRoOjEwMCU7XG4gIGhlaWdodDogMTAwJTtcblx0ZGlzcGxheTppbmxpbmUtYmxvY2s7XG5cdHBvc2l0aW9uOmFic29sdXRlO1xuICB6LWluZGV4OiAtMTtcblxuXHR9XG5cbjpob3N0IDo6bmctZGVlcC5hbnQtc3Bpbi1jb250YWluZXJ7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG5cbi5oZWFkZXIge1xuICBoZWlnaHQ6IDY1cHg7XG4gIHRleHQtaW5kZW50OiAtOTk5OTlweDtcbiAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2JnLTAxLnBuZycpIG5vLXJlcGVhdCAwIDAgflwiL1wiIDEwMCUgYXV0bztcbn1cblxuLmFjY291bnQge1xuICBoZWlnaHQ6IDMwcHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZy1yaWdodDogNjBweDtcbiAgZGlzcGxheTogZmxleDtcblxuICAuZGF0YUFuYXtcbiAgICBjb2xvcjogIzNhYTlmZjtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZsZXg6MCAwIDEwJTtcbiAgICAuc3RhdHVze1xuICAgICAgY29sb3I6ICNlZWEyMDA7XG4gICAgfVxuICB9XG4gLmRhdGFBbmE6aG92ZXIge1xuICAgIGNvbG9yOiAjZWVhMjAwO1xuICB9XG4gIGEubWdyLWxpbmsge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICBjb2xvcjogIzNhYTlmZjtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgZmxleDogMCAwIDclO1xuICB9XG4gIFxuICBhLm1nci1saW5rOmhvdmVyIHtcbiAgICBjb2xvcjogI2VlYTIwMDtcbiAgfVxuICBcbn1cblxuXG5cbi5zZWFyY2gge1xuICBoZWlnaHQ6IDIwMHB4O1xuICB3aWR0aDoxMDAlO1xuICBtYXJnaW46IDIwcHggYXV0byAwO1xuICBtYXJnaW4tbGVmdDogNDAwcHg7XG59XG5cbi5zZWFyY2gtbGVmdCB7XG4gIGZsZXgtYmFzaXM6IDE1MHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnVwbG9hZCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM1N2FmNjtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4udXBsb2FkICsgaW5wdXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwcHg7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5zZWFyY2gtcmlnaHQge1xuICBmbGV4OiAwIDAgNDElO1xufVxuXG4uc2VhcmNoLWlucHV0IHtcbiAgZmxleC1iYXNpczogNTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnNlYXJjaC1pbWcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDEwcHggNTJweCAxMHB4IDEwcHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMzNDZhZDM7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAvLyBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvc2VhcmNoLnBuZycpIG5vLXJlcGVhdCA3MDhweCA1MCU7XG59XG5cbi5zZWFyY2gtZHJhZyB7XG4gIC8vIGZsZXg6IDE7XG4gIGhlaWdodDogMTEwcHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBib3JkZXI6IDJweCBkYXNoZWQgIzM0NmFkMztcbn1cblxuXG4ucmVjb21tZW5kLCAuY29uY2VybiB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcblxufVxuXG4ucmVjb21tZW5kLXRpdGxlLCAuY29uY2Vybi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG5cbn1cbi5hbnQtcHJvZ3Jlc3Mge1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5yZWNvbW1lbmQtcGljdHVyZXMge1xuICBmbGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5yZWNvbW1lbmQtcGljdHVyZSB7XG4gIGZsZXg6MCAwIDUwJTtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICAucGlje1xuICAgIGZsZXg6IDAgMCAxNSU7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGxpe1xuICAgICAgcGFkZGluZzogMnB4O1xuICAgIH1cbiAgfVxuICAuZWNoYXJ0c3tcbiAgICBmbGV4OiAxO1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuICAubnVte1xuICAgIGZsZXg6IDAgMCAzMCU7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgbGl7XG4gICAgICBwYWRkaW5nOiAycHg7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIHNwYW57XG4gICAgICAgIGNvbG9yOiAjZGY5YTE5O1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLmNvbmNlcm4tY29udGVudHMge1xuICBmbGV4LWZsb3c6IHdyYXA7XG59XG5cbi5jb25jZXJuLWNvbnRlbnQge1xuICBoZWlnaHQ6IDQ2cHg7XG4gIGxpbmUtaGVpZ2h0OiA0NnB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW46IDAgMTBweCAxMHB4IDA7XG4gIHBhZGRpbmc6IDAgMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM1N2FmNjtcbn1cblxuLmNvbmNlcm4tY29udGVudDpob3ZlciB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2E3MGNjO1xufVxuXG5cbi50eXBlLXRyYWluLWNvdW50IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMjBweDtcbiAgYm90dG9tOiAyMHB4O1xuXG4gIHNwYW4ge1xuICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgZm9udC1mYW1pbHk6IFwiTWljcm9zb2Z0IFlhSGVpXCIsIFwi5b6u6L2v6ZuF6buRXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBcIlBpbmdGYW5nIFNDXCIsIFwiSGlyYWdpbm8gU2FucyBHQlwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICB9XG5cbiAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgfVxuICB9XG59XG5cblxuOmhvc3Qge1xuICAuaG90LWltYWdlLWNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG59XG5cblxuLm5hdntcbiAgd2lkdGg6IDExMCU7XG4gIC8vIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgY29sb3I6ICNmZmY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZvbnQtc2l6ZTogMTZweDtcblxuICAuc2VsZWN0e1xuICAgIGNvbG9yOiAjMzU3YWY2O1xuICAgIC5saW5le1xuICAgICAgbGVmdDogMCU7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gIH1cbiAgXG4gIGxpOmhvdmVye1xuICAgIGNvbG9yOiAjMzU3YWY2O1xuICAgIC5saW5le1xuICAgICAgbGVmdDogMCU7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gIH1cbiAgXG4gIGxpe1xuICAgIG1hcmdpbi1yaWdodDogMzBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGltZ3tcbiAgICAgIHdpZHRoOiAxOHB4O1xuICAgICAgbWFyZ2luLXJpZ2h0OiAzcHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAzcHg7XG4gICAgfVxuICAgIC5saW5le1xuICAgICAgd2lkdGg6IDA7XG4gICAgICBoZWlnaHQ6IDNweDtcbiAgICAgIGJhY2tncm91bmQ6ICMzNTdhZjY7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDEwMCU7XG4gICAgICBsZWZ0OiA1MCU7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgLjRzO1xuICAgIH1cbiAgXG4gIH1cbn1cblxuXG5cbi5zQW5kYXtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0yMHB4O1xuICB3aWR0aDogODAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIC8vIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbiAgd2lkdGg6IDYwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgXG4gIC5ob3RQaWN7XG4gICAgLy8gYm9yZGVyOiAxcHggc29saWQgcmVkO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBoZWlnaHQ6IDE3MHB4O1xuICAgIC8vIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gICAgLy8gbWFyZ2luLWxlZnQ6IDE1MHB4O1xuICAgIC5waWN7XG4gICAgICBmbGV4OiAwIDAgNTAlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgIC50aXRsZXtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIC8vIGZsZXg6IDAgMCA0MCU7XG4gICAgICAgIC8vIGhlaWdodDogMTAwJTtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIC8vIGJhY2tncm91bmQ6ICM0NjQ5NGY7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgLnRleHR7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICB9XG4gICAgICAgIC5kZXRhaWx7XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgdGV4dC1pbmRlbnQ6IDJlbTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdWx7XG4gICAgICAgIGZsZXg6IDAgMCAxMDAlO1xuICAgICAgICAvLyBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIC8vIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgLy8gbWFyZ2luLWxlZnQ6IDMwcHg7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgIGxpe1xuICAgICAgICAgIC8vIGZsZXg6IDAgMCAzMCU7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgICAgICAgICBtYXJnaW46IDAgNXB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xuICAgICAgICAgIGhlaWdodDogNjVweDtcbiAgICAgICAgICB3aWR0aDogMjAlO1xuICAgICAgICAgIHBhZGRpbmc6IDVweCAwO1xuICAgICAgICAgIGltZ3tcbiAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC5uZXdze1xuICAgICAgZmxleDogMCAwIDUwJTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICBwYWRkaW5nLWxlZnQ6NjBweDtcbiAgICAgIC50aXRsZXtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIC8vIGZsZXg6IDAgMCA0MCU7XG4gICAgICAgIC8vIGhlaWdodDogMTAwJTtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIC8vIGJhY2tncm91bmQ6ICM0NjQ5NGY7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgLnRleHR7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICB9XG4gICAgICAgIC5kZXRhaWx7XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgdGV4dC1pbmRlbnQ6IDJlbTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8gZmxleDogMTtcbiAgICAgIC8vIGRpc3BsYXk6IGZsZXg7XG4gICAgICAvLyAudGl0bGV7XG4gICAgICAvLyAgIGZsZXg6IDAgMCAyMCU7XG4gICAgICAvLyAgIGhlaWdodDogMTAwJTtcbiAgICAgIC8vICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgIC8vICAgLy8gYmFja2dyb3VuZDogIzQ2NDk0ZjtcbiAgICAgIC8vICAgcGFkZGluZzogMTBweDtcbiAgICAgIC8vICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgLy8gICAudGV4dHtcbiAgICAgIC8vICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgIC8vICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIC8vICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAvLyAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIC8vICAgfVxuICAgICAgLy8gICAuZGV0YWlse1xuICAgICAgLy8gICAgIGNvbG9yOiAjZmZmO1xuICAgICAgLy8gICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgICAvLyAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgLy8gICAgIHRleHQtaW5kZW50OiAyZW07XG4gICAgICAvLyAgIH1cbiAgICAgIC8vIH1cbiAgICAgIHVse1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAvLyBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgbGl7XG4gICAgICAgICAgZmxleDogMCAwIDUwJTtcbiAgICAgICAgICBwYWRkaW5nOiA1cHggMDtcbiAgICAgICAgICBhe1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC5yZWNvbW1lbmQtdGl0bGV7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAuYWNoaWV2ZW1lbnRzIHtcbiAgICBmbGV4OiAwIDAgNTAlO1xuICAgIHVse1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBsaTpob3ZlcntcbiAgICAgIHB7XG4gICAgICAgIGJvdHRvbTogLTEwcHg7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuXG4gICAgICB9XG4gICAgfVxuICAgIGxpOm50aC1jaGlsZCgxKTphZnRlcntcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICB3aWR0aDogMnB4O1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgYm90dG9tOiAwO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLHJnYmEoMjU1LCAwLCAwLCAwKSwjMzU3YWY2KSA7XG4gIFxuICAgIH1cbiAgICBsaTpudGgtY2hpbGQoMSk6YmVmb3Jle1xuICAgICAgY29udGVudDogXCJcIjtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAycHg7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBib3R0b206IDA7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KC0yNzBkZWcscmdiYSgyNTUsIDAsIDAsIDApLCMzNTdhZjYpIDtcbiAgICB9XG4gICAgbGk6bnRoLWNoaWxkKDIpe1xuICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMzNTdhZjY7XG4gICAgfVxuICAgIGxpOm50aC1jaGlsZCgyKTphZnRlcntcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICB3aWR0aDogMnB4O1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgYm90dG9tOiAwO1xuICAgICAgbGVmdDogMDtcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcscmdiYSgyNTUsIDAsIDAsIDApLCMzNTdhZjYpIDtcbiAgICB9XG4gICAgbGk6bnRoLWNoaWxkKDIpOmJlZm9yZXtcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICB3aWR0aDogMnB4O1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgYm90dG9tOiAwO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLHJnYmEoMjU1LCAwLCAwLCAwKSwjMzU3YWY2KSA7XG4gIFxuICAgIH1cblxuICAgIGxpOm50aC1jaGlsZCgzKTpiZWZvcmV7XG4gICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDJweDtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoLTI3MGRlZyxyZ2JhKDI1NSwgMCwgMCwgMCksIzM1N2FmNikgO1xuICBcbiAgICB9XG5cbiAgICBsaTpudGgtY2hpbGQoMyk6YWZ0ZXJ7XG4gICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgd2lkdGg6IDJweDtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMDtcbiAgICAgIHJpZ2h0OiAwO1xuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcscmdiYSgyNTUsIDAsIDAsIDApLCMzNTdhZjYpIDtcbiAgXG4gICAgfVxuXG4gICAgbGk6bnRoLWNoaWxkKDQpOmFmdGVye1xuICAgICAgY29udGVudDogXCJcIjtcbiAgICAgIHdpZHRoOiAycHg7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDA7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcscmdiYSgyNTUsIDAsIDAsIDApLCMzNTdhZjYpIDtcbiAgXG4gICAgfVxuXG4gICAgbGk6bnRoLWNoaWxkKDQpOmJlZm9yZXtcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICB3aWR0aDogMnB4O1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgYm90dG9tOiAwO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZyxyZ2JhKDI1NSwgMCwgMCwgMCksIzM1N2FmNikgO1xuICBcbiAgICB9XG5cbiAgICBsaTpudGgtY2hpbGQoNCl7XG4gICAgICBib3JkZXItdG9wOiAycHggc29saWQgIzM1N2FmNjtcbiAgICAgIFxuICAgIH1cbiAgIFxuICAgICAgbGl7XG4gICAgICAgIC8vIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XG4gICAgICAgIGZsZXg6IDAgMCA1MCU7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHBhZGRpbmc6ICAyMHB4IDAgMCAwO1xuICAgICAgICBoM3tcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgfVxuICAgICAgICBwe1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNjc5KTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDE3cHg7XG4gICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICBcbiAgfVxuXG4gIC5zZXJ2ZXJfc3R5bGV7XG4gICAgdWx7XG4gICAgICBsaTpudGgtY2hpbGQoMSk6YmVmb3Jle1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICB3aWR0aDogMnB4O1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLHJnYmEoMjU1LCAwLCAwLCAwKSwjMzU3YWY2KSA7XG4gICAgICB9XG4gICAgICBsaTpudGgtY2hpbGQoMSl7XG4gICAgICAgIGJvcmRlci1ib3R0b206MnB4IHNvbGlkICMzNTdhZjZcbiAgICAgIH1cbiAgICAgIGxpOm50aC1jaGlsZCgyKTpiZWZvcmV7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDJweDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyNzBkZWcscmdiYSgyNTUsIDAsIDAsIDApLCMzNTdhZjYpIDtcbiAgICAgIH1cbiAgICAgIGxpOm50aC1jaGlsZCgyKXtcbiAgICAgICAgYm9yZGVyLXRvcDpub25lO1xuICAgICAgICBib3JkZXItYm90dG9tOm5vbmVcbiAgICAgIH1cbiAgICAgIGxpOm50aC1jaGlsZCgzKTpiZWZvcmV7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgIHdpZHRoOiAycHg7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLHJnYmEoMjU1LCAwLCAwLCAwKSwjMzU3YWY2KSA7XG4gICAgICB9XG4gICAgICBsaTpudGgtY2hpbGQoMyl7XG4gICAgICAgIGJvcmRlci10b3A6MnB4IHNvbGlkICMzNTdhZjZcbiAgICAgIH1cbiAgICAgIGxpOm50aC1jaGlsZCg0KTpiZWZvcmV7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDJweDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyNzBkZWcscmdiYSgyNTUsIDAsIDAsIDApLCMzNTdhZjYpIDtcbiAgICAgIH1cbiAgICAgIGxpOm50aC1jaGlsZCg0KXtcbiAgICAgICAgYm9yZGVyLXRvcDpub25lXG4gICAgICAgIFxuICAgICAgfVxuICAgIH1cbiBcbiAgXG4gIH1cblxufVxuXG5cblxuXG5cbiIsIi5ob21lIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmcwMS5wbmcnKSBuby1yZXBlYXQgMCAwIC8gY292ZXI7XG4gIHotaW5kZXg6IDI7XG59XG46aG9zdCA6Om5nLWRlZXAgLmFudC1wcm9ncmVzcy10ZXh0IHtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn1cbi53aW5ib3gge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNmZjAwZjAsICMwMDUwZmYpO1xuICBib3gtc2hhZG93OiBub25lO1xuICBib3JkZXItcmFkaXVzOiAxMnB4IDEycHggMCAwO1xufVxuI2RhdGFDb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4jZGF0YUNvbnRlbnQgLm5vd0FuYSB7XG4gIGZsZXg6IDAgMCAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1NSU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xufVxuI2RhdGFDb250ZW50IC5ub3dBbmEgLmNvbnRlbnQge1xuICBoZWlnaHQ6IDcwJTtcbiAgZGlzcGxheTogbm9uZTtcbn1cbiNkYXRhQ29udGVudCAubm93QW5hIC5jb250ZW50IC5sZWZ0IHtcbiAgcGFkZGluZzogMCA0MHB4O1xuICBmbGV4OiAwIDAgNDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGNvbG9yOiAjRmZmO1xufVxuI2RhdGFDb250ZW50IC5ub3dBbmEgLmNvbnRlbnQgLnJpZ2h0IHtcbiAgZmxleDogMTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuI2RhdGFDb250ZW50IC5oaXN0b3J5QW5hIHtcbiAgaGVpZ2h0OiA0NSU7XG4gIHdpZHRoOiAxMDAlO1xuICB0b3A6IDgwcHg7XG4gIGZsZXg6IDAgMCAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZmZmO1xufVxuI2RhdGFDb250ZW50IC5oaXN0b3J5QW5hIC5jaGFuZ2VMaXN0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb2xvcjogI2ZmZjtcbiAgdG9wOiA1MCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiNkYXRhQ29udGVudCAuaGlzdG9yeUFuYSAucGVyTGlzdCB7XG4gIGxlZnQ6IDIwcHg7XG59XG4jZGF0YUNvbnRlbnQgLmhpc3RvcnlBbmEgLm5leHRMaXN0IHtcbiAgcmlnaHQ6IDIwcHg7XG59XG4jZGF0YUNvbnRlbnQgLmhpc3RvcnlBbmEgLmhpc3RvcnlDb250ZW50IC53cmFwIHtcbiAgdG9wOiAtOHB4O1xuICBoZWlnaHQ6IDcwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuI2RhdGFDb250ZW50IC5oaXN0b3J5QW5hIC5oaXN0b3J5Q29udGVudCAud3JhcCAud3JhcC1pbm5lci1jZW50ZXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci10b3A6IHNvbGlkIDFweCB2YXIoLS1kZWNvcmF0aW9uKTtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IHZhcigtLWRlY29yYXRpb24pO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4jZGF0YUNvbnRlbnQgLmhpc3RvcnlBbmEgLmhpc3RvcnlDb250ZW50IC53cmFwIC53cmFwLWlubmVyLWNlbnRlciAud29ya3Mge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4jZGF0YUNvbnRlbnQgLmhpc3RvcnlBbmEgLmhpc3RvcnlDb250ZW50IC53cmFwIC53cmFwLWlubmVyLWNlbnRlciAud29ya3MgLnRodW1ibmFpbCB7XG4gIGhlaWdodDogMjUlO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDA7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbjogMiUgYXV0byAwO1xufVxuI2RhdGFDb250ZW50IC5oaXN0b3J5QW5hIC5oaXN0b3J5Q29udGVudCAud3JhcCAud3JhcC1pbm5lci1jZW50ZXIgLndvcmtzIC50aHVtYm5haWwgbGkge1xuICB3aWR0aDogY2FsYygxMCUgLSAxMHB4KTtcbiAgcGFkZGluZzogNXB4O1xuICBtYXJnaW46IDAgNXB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB0cmFuc3BhcmVudCA1cHgsIHZhcigtLWRlY29yYXRpb24pIDApIHRvcCBsZWZ0LCBsaW5lYXItZ3JhZGllbnQoLTEzNWRlZywgdHJhbnNwYXJlbnQgNXB4LCB2YXIoLS1kZWNvcmF0aW9uKSAwKSB0b3AgcmlnaHQsIGxpbmVhci1ncmFkaWVudCgtNDVkZWcsIHRyYW5zcGFyZW50IDVweCwgdmFyKC0tZGVjb3JhdGlvbikgMCkgYm90dG9tIHJpZ2h0LCBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHRyYW5zcGFyZW50IDVweCwgdmFyKC0tZGVjb3JhdGlvbikgMCkgYm90dG9tIGxlZnQ7XG4gIGJhY2tncm91bmQtc2l6ZTogNTAlIDUwJTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuI2RhdGFDb250ZW50IC5oaXN0b3J5QW5hIC5oaXN0b3J5Q29udGVudCAud3JhcCAud3JhcC1pbm5lci1jZW50ZXIgLndvcmtzIC50aHVtYm5haWwgbGk6aG92ZXIsXG4jZGF0YUNvbnRlbnQgLmhpc3RvcnlBbmEgLmhpc3RvcnlDb250ZW50IC53cmFwIC53cmFwLWlubmVyLWNlbnRlciAud29ya3MgLnRodW1ibmFpbCBsaS5hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB0cmFuc3BhcmVudCA1cHgsIHZhcigtLWJyaWdodCkgMCkgdG9wIGxlZnQsIGxpbmVhci1ncmFkaWVudCgtMTM1ZGVnLCB0cmFuc3BhcmVudCA1cHgsIHZhcigtLWJyaWdodCkgMCkgdG9wIHJpZ2h0LCBsaW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCB0cmFuc3BhcmVudCA1cHgsIHZhcigtLWJyaWdodCkgMCkgYm90dG9tIHJpZ2h0LCBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHRyYW5zcGFyZW50IDVweCwgdmFyKC0tYnJpZ2h0KSAwKSBib3R0b20gbGVmdDtcbiAgYmFja2dyb3VuZC1zaXplOiA1MCUgNTAlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuI2RhdGFDb250ZW50IC5oaXN0b3J5QW5hIC5oaXN0b3J5Q29udGVudCAud3JhcCAud3JhcC1pbm5lci1jZW50ZXIgLndvcmtzIC50aHVtYm5haWwgbGk6aG92ZXIgaW1nLFxuI2RhdGFDb250ZW50IC5oaXN0b3J5QW5hIC5oaXN0b3J5Q29udGVudCAud3JhcCAud3JhcC1pbm5lci1jZW50ZXIgLndvcmtzIC50aHVtYm5haWwgbGkuYWN0aXZlIGltZyB7XG4gIGZpbHRlcjogbm9uZTtcbiAgb3BhY2l0eTogMTtcbn1cbiNkYXRhQ29udGVudCAuaGlzdG9yeUFuYSAuaGlzdG9yeUNvbnRlbnQgLndyYXAgLndyYXAtaW5uZXItY2VudGVyIC53b3JrcyAudGh1bWJuYWlsIGxpOm50aC1vZi10eXBlKDIpLFxuI2RhdGFDb250ZW50IC5oaXN0b3J5QW5hIC5oaXN0b3J5Q29udGVudCAud3JhcCAud3JhcC1pbm5lci1jZW50ZXIgLndvcmtzIC50aHVtYm5haWwgbGk6bnRoLW9mLXR5cGUoOSkge1xuICBoZWlnaHQ6IGNhbGMoMTAwJSArIDIwcHgpO1xuICBtYXJnaW46IC0yMHB4IDVweCAwO1xufVxuI2RhdGFDb250ZW50IC5oaXN0b3J5QW5hIC5oaXN0b3J5Q29udGVudCAud3JhcCAud3JhcC1pbm5lci1jZW50ZXIgLndvcmtzIC50aHVtYm5haWwgbGk6bnRoLW9mLXR5cGUoMyksXG4jZGF0YUNvbnRlbnQgLmhpc3RvcnlBbmEgLmhpc3RvcnlDb250ZW50IC53cmFwIC53cmFwLWlubmVyLWNlbnRlciAud29ya3MgLnRodW1ibmFpbCBsaTpudGgtb2YtdHlwZSg0KSxcbiNkYXRhQ29udGVudCAuaGlzdG9yeUFuYSAuaGlzdG9yeUNvbnRlbnQgLndyYXAgLndyYXAtaW5uZXItY2VudGVyIC53b3JrcyAudGh1bWJuYWlsIGxpOm50aC1vZi10eXBlKDUpLFxuI2RhdGFDb250ZW50IC5oaXN0b3J5QW5hIC5oaXN0b3J5Q29udGVudCAud3JhcCAud3JhcC1pbm5lci1jZW50ZXIgLndvcmtzIC50aHVtYm5haWwgbGk6bnRoLW9mLXR5cGUoNiksXG4jZGF0YUNvbnRlbnQgLmhpc3RvcnlBbmEgLmhpc3RvcnlDb250ZW50IC53cmFwIC53cmFwLWlubmVyLWNlbnRlciAud29ya3MgLnRodW1ibmFpbCBsaTpudGgtb2YtdHlwZSg3KSxcbiNkYXRhQ29udGVudCAuaGlzdG9yeUFuYSAuaGlzdG9yeUNvbnRlbnQgLndyYXAgLndyYXAtaW5uZXItY2VudGVyIC53b3JrcyAudGh1bWJuYWlsIGxpOm50aC1vZi10eXBlKDgpIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgKyAzMHB4KTtcbiAgbWFyZ2luOiAtMzBweCA1cHggMDtcbn1cbiNkYXRhQ29udGVudCAuaGlzdG9yeUFuYSAuaGlzdG9yeUNvbnRlbnQgLndyYXAgLndyYXAtaW5uZXItY2VudGVyIC53b3JrcyAudGh1bWJuYWlsIGxpIGltZyB7XG4gIHdpZHRoOiA2MCU7XG4gIGhlaWdodDogNjAlO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgLXdlYmtpdC1jbGlwLXBhdGg6IHBvbHlnb24oMCA1cHgsIDVweCAwLCBjYWxjKDEwMCUgLSA1cHgpIDAsIDEwMCUgNXB4LCAxMDAlIGNhbGMoMTAwJSAtIDVweCksIGNhbGMoMTAwJSAtIDVweCkgMTAwJSwgNXB4IDEwMCUsIDAgY2FsYygxMDAlIC0gNXB4KSk7XG4gIGZpbHRlcjogZ3JheXNjYWxlKCk7XG4gIG9wYWNpdHk6IDAuMztcbn1cbiNkYXRhQ29udGVudCAuaGlzdG9yeUFuYSAuaGlzdG9yeUNvbnRlbnQgLndyYXAgLmJvYXJkIHtcbiAgaGVpZ2h0OiA4NSU7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC0tZGVjb3JhdGlvbjogIzJkNGU2ODtcbiAgLS1kZWNvcmF0aW9uQm9yZGVyOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG59XG4jZGF0YUNvbnRlbnQgLmhpc3RvcnlBbmEgLmhpc3RvcnlDb250ZW50IC53cmFwIC5ib2FyZCAuYm9hcmQtaW1nIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiA5MiU7XG4gIGhlaWdodDogODQlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB0cmFuc3BhcmVudCAxNXB4LCAjNTU1NTU1IDApIHRvcCBsZWZ0LCBsaW5lYXItZ3JhZGllbnQoLTEzNWRlZywgdHJhbnNwYXJlbnQgMTVweCwgIzU1NTU1NSAwKSB0b3AgcmlnaHQsIGxpbmVhci1ncmFkaWVudCgtNDVkZWcsIHRyYW5zcGFyZW50IDE1cHgsICM1NTU1NTUgMCkgYm90dG9tIHJpZ2h0LCBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHRyYW5zcGFyZW50IDE1cHgsICM1NTU1NTUgMCkgYm90dG9tIGxlZnQ7XG4gIGJhY2tncm91bmQtc2l6ZTogNTAlIDUwJTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDQwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbiNkYXRhQ29udGVudCAuaGlzdG9yeUFuYSAuaGlzdG9yeUNvbnRlbnQgLndyYXAgLmJvYXJkIC5ib2FyZC1pbWcxIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiA5MSU7XG4gIGhlaWdodDogNzklO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB0cmFuc3BhcmVudCAxNXB4LCB2YXIoLS1kZWNvcmF0aW9uKSAwKSB0b3AgbGVmdCwgbGluZWFyLWdyYWRpZW50KC0xMzVkZWcsIHRyYW5zcGFyZW50IDE1cHgsIHZhcigtLWRlY29yYXRpb24pIDApIHRvcCByaWdodCwgbGluZWFyLWdyYWRpZW50KC00NWRlZywgdHJhbnNwYXJlbnQgMTVweCwgdmFyKC0tZGVjb3JhdGlvbikgMCkgYm90dG9tIHJpZ2h0LCBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHRyYW5zcGFyZW50IDE1cHgsIHZhcigtLWRlY29yYXRpb24pIDApIGJvdHRvbSBsZWZ0O1xuICBiYWNrZ3JvdW5kLXNpemU6IDUwJSA1MCU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA0MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4jZGF0YUNvbnRlbnQgLmhpc3RvcnlBbmEgLmhpc3RvcnlDb250ZW50IC53cmFwIC5ib2FyZCAuYm9hcmQtaW1nIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICAtd2Via2l0LWNsaXAtcGF0aDogcG9seWdvbigwIDE0cHgsIDE0cHggMCwgY2FsYygxMDAlIC0gMTRweCkgMCwgMTAwJSAxNHB4LCAxMDAlIGNhbGMoMTAwJSAtIDE0cHgpLCBjYWxjKDEwMCUgLSAxNHB4KSAxMDAlLCAxNHB4IDEwMCUsIDAgY2FsYygxMDAlIC0gMTRweCkpO1xufVxuI2RhdGFDb250ZW50IC5oaXN0b3J5QW5hIC5oaXN0b3J5Q29udGVudCAud3JhcCAuYm9hcmQgLmJvYXJkLWFuaSB7XG4gIGFuaW1hdGlvbjogYm9hcmQtYW5pIDEgNDAwMG1zIGVhc2U7XG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG59XG5Aa2V5ZnJhbWVzIGJvYXJkLWFuaSB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgwKSB0cmFuc2xhdGVYKDApO1xuICAgIGZpbHRlcjogZ3JheXNjYWxlKCk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICA0JSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoMSkgdHJhbnNsYXRlWCgwKTtcbiAgICBmaWx0ZXI6IG5vbmU7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICAxMCUsXG4gIDIyJSxcbiAgMjQlLFxuICA0MSUsXG4gIDQzJSxcbiAgODElLFxuICA4MyUge1xuICAgIGZpbHRlcjogZ3JheXNjYWxlKCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDFweCkgc2NhbGVZKDEpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgMTElLFxuICAyMSUsXG4gIDIzJSxcbiAgMjUlLFxuICA0MCUsXG4gIDQyJSxcbiAgNDQlLFxuICA4MCUsXG4gIDgyJSxcbiAgODQlLFxuICAxMDAlIHtcbiAgICBmaWx0ZXI6IG5vbmU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xcHgpIHNjYWxlWSgxKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG4jZGF0YUNvbnRlbnQgLmhpc3RvcnlBbmEgLmhpc3RvcnlDb250ZW50IC53cmFwIC5ib2FyZCAuYm9hcmQtYW5pLWluZmluaXRlIHtcbiAgYW5pbWF0aW9uOiBib2FyZC1hbmktaW5maW5pdGUgaW5maW5pdGUgNDAwMG1zIGVhc2U7XG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG59XG5Aa2V5ZnJhbWVzIGJvYXJkLWFuaS1pbmZpbml0ZSB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgZmlsdGVyOiBncmF5c2NhbGUoKTtcbiAgfVxuICA5JSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgIGZpbHRlcjogbm9uZTtcbiAgfVxuICAxMCUsXG4gIDIyJSxcbiAgMjQlLFxuICA0MSUsXG4gIDQzJSxcbiAgODElLFxuICA4MyUge1xuICAgIGZpbHRlcjogZ3JheXNjYWxlKCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDFweCk7XG4gIH1cbiAgMTElLFxuICAyMSUsXG4gIDIzJSxcbiAgMjUlLFxuICA0MCUsXG4gIDQyJSxcbiAgNDQlLFxuICA4MCUsXG4gIDgyJSxcbiAgODQlLFxuICAxMDAlIHtcbiAgICBmaWx0ZXI6IG5vbmU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xcHgpO1xuICB9XG59XG4jZGF0YUNvbnRlbnQgLmhpc3RvcnlBbmEgLmhpc3RvcnlDb250ZW50IC53cmFwIC5ib2FyZCAuYm9hcmQtaW1nIGRpdiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICBib3R0b206IDMwcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLXRleHRCbGFjayk7XG4gIGNvbG9yOiB2YXIoLS1icmlnaHQpO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgYm94LXNoYWRvdzogMCAwIDAgNXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgYW5pbWF0aW9uOiBib2FyZC10ZXh0LWFuaSAxIDQwMDBtcyBlYXNlO1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xuICB0cmFuc2l0aW9uOiBhbGwgMjAwbXMgbGluZWFyO1xufVxuI2RhdGFDb250ZW50IC5oaXN0b3J5QW5hIC5oaXN0b3J5Q29udGVudCAud3JhcCAuYm9hcmQgLmJvYXJkLWltZzpob3ZlciBkaXYge1xuICBib3gtc2hhZG93OiAwIDAgMCA1cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xufVxuQGtleWZyYW1lcyBib2FyZC10ZXh0LWFuaSB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSBzY2FsZVkoMCk7XG4gIH1cbiAgNSUsXG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDAuNjtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgc2NhbGVZKDEpO1xuICB9XG59XG4jY2FudmFzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IC0xO1xufVxuOmhvc3QgOjpuZy1kZWVwLmFudC1zcGluLWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5oZWFkZXIge1xuICBoZWlnaHQ6IDY1cHg7XG4gIHRleHQtaW5kZW50OiAtOTk5OTlweDtcbiAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2JnLTAxLnBuZycpIG5vLXJlcGVhdCAwIDAgLyAxMDAlIGF1dG87XG59XG4uYWNjb3VudCB7XG4gIGhlaWdodDogMzBweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nLXJpZ2h0OiA2MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmFjY291bnQgLmRhdGFBbmEge1xuICBjb2xvcjogIzNhYTlmZjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxleDogMCAwIDEwJTtcbn1cbi5hY2NvdW50IC5kYXRhQW5hIC5zdGF0dXMge1xuICBjb2xvcjogI2VlYTIwMDtcbn1cbi5hY2NvdW50IC5kYXRhQW5hOmhvdmVyIHtcbiAgY29sb3I6ICNlZWEyMDA7XG59XG4uYWNjb3VudCBhLm1nci1saW5rIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgY29sb3I6ICMzYWE5ZmY7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgZmxleDogMCAwIDclO1xufVxuLmFjY291bnQgYS5tZ3ItbGluazpob3ZlciB7XG4gIGNvbG9yOiAjZWVhMjAwO1xufVxuLnNlYXJjaCB7XG4gIGhlaWdodDogMjAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDIwcHggYXV0byAwO1xuICBtYXJnaW4tbGVmdDogNDAwcHg7XG59XG4uc2VhcmNoLWxlZnQge1xuICBmbGV4LWJhc2lzOiAxNTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4udXBsb2FkIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzU3YWY2O1xuICBmb250LXNpemU6IDIwcHg7XG59XG4udXBsb2FkICsgaW5wdXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwcHg7XG4gIG9wYWNpdHk6IDA7XG59XG4uc2VhcmNoLXJpZ2h0IHtcbiAgZmxleDogMCAwIDQxJTtcbn1cbi5zZWFyY2gtaW5wdXQge1xuICBmbGV4LWJhc2lzOiA1MHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLnNlYXJjaC1pbWcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDEwcHggNTJweCAxMHB4IDEwcHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMzNDZhZDM7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuLnNlYXJjaC1kcmFnIHtcbiAgaGVpZ2h0OiAxMTBweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGJvcmRlcjogMnB4IGRhc2hlZCAjMzQ2YWQzO1xufVxuLnJlY29tbWVuZCxcbi5jb25jZXJuIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLnJlY29tbWVuZC10aXRsZSxcbi5jb25jZXJuLXRpdGxlIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5hbnQtcHJvZ3Jlc3Mge1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4ucmVjb21tZW5kLXBpY3R1cmVzIHtcbiAgZmxleDogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuLnJlY29tbWVuZC1waWN0dXJlIHtcbiAgZmxleDogMCAwIDUwJTtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLnJlY29tbWVuZC1waWN0dXJlIC5waWMge1xuICBmbGV4OiAwIDAgMTUlO1xuICBwYWRkaW5nOiA1cHg7XG59XG4ucmVjb21tZW5kLXBpY3R1cmUgLnBpYyBsaSB7XG4gIHBhZGRpbmc6IDJweDtcbn1cbi5yZWNvbW1lbmQtcGljdHVyZSAuZWNoYXJ0cyB7XG4gIGZsZXg6IDE7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5yZWNvbW1lbmQtcGljdHVyZSAubnVtIHtcbiAgZmxleDogMCAwIDMwJTtcbiAgcGFkZGluZzogNXB4O1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuLnJlY29tbWVuZC1waWN0dXJlIC5udW0gbGkge1xuICBwYWRkaW5nOiAycHg7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5yZWNvbW1lbmQtcGljdHVyZSAubnVtIGxpIHNwYW4ge1xuICBjb2xvcjogI2RmOWExOTtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogODAwO1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG4uY29uY2Vybi1jb250ZW50cyB7XG4gIGZsZXgtZmxvdzogd3JhcDtcbn1cbi5jb25jZXJuLWNvbnRlbnQge1xuICBoZWlnaHQ6IDQ2cHg7XG4gIGxpbmUtaGVpZ2h0OiA0NnB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW46IDAgMTBweCAxMHB4IDA7XG4gIHBhZGRpbmc6IDAgMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM1N2FmNjtcbn1cbi5jb25jZXJuLWNvbnRlbnQ6aG92ZXIge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNhNzBjYztcbn1cbi50eXBlLXRyYWluLWNvdW50IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMjBweDtcbiAgYm90dG9tOiAyMHB4O1xufVxuLnR5cGUtdHJhaW4tY291bnQgc3BhbjpmaXJzdC1jaGlsZCB7XG4gIGZvbnQtZmFtaWx5OiBcIk1pY3Jvc29mdCBZYUhlaVwiLCBcIuW+rui9r+mbhem7kVwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgXCJQaW5nRmFuZyBTQ1wiLCBcIkhpcmFnaW5vIFNhbnMgR0JcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogNDBweDtcbn1cbi50eXBlLXRyYWluLWNvdW50IHNwYW46bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBmb250LXNpemU6IDIwcHg7XG59XG46aG9zdCAuaG90LWltYWdlLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ubmF2IHtcbiAgd2lkdGg6IDExMCU7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGNvbG9yOiAjZmZmO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmb250LXNpemU6IDE2cHg7XG59XG4ubmF2IC5zZWxlY3Qge1xuICBjb2xvcjogIzM1N2FmNjtcbn1cbi5uYXYgLnNlbGVjdCAubGluZSB7XG4gIGxlZnQ6IDAlO1xuICB3aWR0aDogMTAwJTtcbn1cbi5uYXYgbGk6aG92ZXIge1xuICBjb2xvcjogIzM1N2FmNjtcbn1cbi5uYXYgbGk6aG92ZXIgLmxpbmUge1xuICBsZWZ0OiAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG4ubmF2IGxpIHtcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5uYXYgbGkgaW1nIHtcbiAgd2lkdGg6IDE4cHg7XG4gIG1hcmdpbi1yaWdodDogM3B4O1xuICBtYXJnaW4tYm90dG9tOiAzcHg7XG59XG4ubmF2IGxpIC5saW5lIHtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogM3B4O1xuICBiYWNrZ3JvdW5kOiAjMzU3YWY2O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTAwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cztcbn1cbi5zQW5kYSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMjBweDtcbiAgd2lkdGg6IDgwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogNjAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuLnNBbmRhIC5ob3RQaWMge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMTcwcHg7XG59XG4uc0FuZGEgLmhvdFBpYyAucGljIHtcbiAgZmxleDogMCAwIDUwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuLnNBbmRhIC5ob3RQaWMgLnBpYyAudGl0bGUge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5zQW5kYSAuaG90UGljIC5waWMgLnRpdGxlIC50ZXh0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLnNBbmRhIC5ob3RQaWMgLnBpYyAudGl0bGUgLmRldGFpbCB7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtaW5kZW50OiAyZW07XG59XG4uc0FuZGEgLmhvdFBpYyAucGljIHVsIHtcbiAgZmxleDogMCAwIDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG4uc0FuZGEgLmhvdFBpYyAucGljIHVsIGxpIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgbWFyZ2luOiAwIDVweDtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG4gIGhlaWdodDogNjVweDtcbiAgd2lkdGg6IDIwJTtcbiAgcGFkZGluZzogNXB4IDA7XG59XG4uc0FuZGEgLmhvdFBpYyAucGljIHVsIGxpIGltZyB7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uc0FuZGEgLmhvdFBpYyAubmV3cyB7XG4gIGZsZXg6IDAgMCA1MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgcGFkZGluZy1sZWZ0OiA2MHB4O1xufVxuLnNBbmRhIC5ob3RQaWMgLm5ld3MgLnRpdGxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uc0FuZGEgLmhvdFBpYyAubmV3cyAudGl0bGUgLnRleHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uc0FuZGEgLmhvdFBpYyAubmV3cyAudGl0bGUgLmRldGFpbCB7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtaW5kZW50OiAyZW07XG59XG4uc0FuZGEgLmhvdFBpYyAubmV3cyB1bCB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbi5zQW5kYSAuaG90UGljIC5uZXdzIHVsIGxpIHtcbiAgZmxleDogMCAwIDUwJTtcbiAgcGFkZGluZzogNXB4IDA7XG59XG4uc0FuZGEgLmhvdFBpYyAubmV3cyB1bCBsaSBhIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cbi5zQW5kYSAucmVjb21tZW5kLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uc0FuZGEgLmFjaGlldmVtZW50cyB7XG4gIGZsZXg6IDAgMCA1MCU7XG59XG4uc0FuZGEgLmFjaGlldmVtZW50cyB1bCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi5zQW5kYSAuYWNoaWV2ZW1lbnRzIHVsIGxpOmhvdmVyIHAge1xuICBib3R0b206IC0xMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5zQW5kYSAuYWNoaWV2ZW1lbnRzIHVsIGxpOm50aC1jaGlsZCgxKTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiAycHg7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDI1NSwgMCwgMCwgMCksICMzNTdhZjYpO1xufVxuLnNBbmRhIC5hY2hpZXZlbWVudHMgdWwgbGk6bnRoLWNoaWxkKDEpOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDJweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgtMjcwZGVnLCByZ2JhKDI1NSwgMCwgMCwgMCksICMzNTdhZjYpO1xufVxuLnNBbmRhIC5hY2hpZXZlbWVudHMgdWwgbGk6bnRoLWNoaWxkKDIpIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMzNTdhZjY7XG59XG4uc0FuZGEgLmFjaGlldmVtZW50cyB1bCBsaTpudGgtY2hpbGQoMik6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogMnB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDI1NSwgMCwgMCwgMCksICMzNTdhZjYpO1xufVxuLnNBbmRhIC5hY2hpZXZlbWVudHMgdWwgbGk6bnRoLWNoaWxkKDIpOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiAycHg7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDI1NSwgMCwgMCwgMCksICMzNTdhZjYpO1xufVxuLnNBbmRhIC5hY2hpZXZlbWVudHMgdWwgbGk6bnRoLWNoaWxkKDMpOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDJweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgtMjcwZGVnLCByZ2JhKDI1NSwgMCwgMCwgMCksICMzNTdhZjYpO1xufVxuLnNBbmRhIC5hY2hpZXZlbWVudHMgdWwgbGk6bnRoLWNoaWxkKDMpOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDJweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDI1NSwgMCwgMCwgMCksICMzNTdhZjYpO1xufVxuLnNBbmRhIC5hY2hpZXZlbWVudHMgdWwgbGk6bnRoLWNoaWxkKDQpOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDJweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMjU1LCAwLCAwLCAwKSwgIzM1N2FmNik7XG59XG4uc0FuZGEgLmFjaGlldmVtZW50cyB1bCBsaTpudGgtY2hpbGQoNCk6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDJweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDI1NSwgMCwgMCwgMCksICMzNTdhZjYpO1xufVxuLnNBbmRhIC5hY2hpZXZlbWVudHMgdWwgbGk6bnRoLWNoaWxkKDQpIHtcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICMzNTdhZjY7XG59XG4uc0FuZGEgLmFjaGlldmVtZW50cyB1bCBsaSB7XG4gIGZsZXg6IDAgMCA1MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDIwcHggMCAwIDA7XG59XG4uc0FuZGEgLmFjaGlldmVtZW50cyB1bCBsaSBoMyB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnNBbmRhIC5hY2hpZXZlbWVudHMgdWwgbGkgcCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjY3OSk7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxN3B4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgcGFkZGluZzogMTBweDtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG4uc0FuZGEgLnNlcnZlcl9zdHlsZSB1bCBsaTpudGgtY2hpbGQoMSk6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDJweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiYSgyNTUsIDAsIDAsIDApLCAjMzU3YWY2KTtcbn1cbi5zQW5kYSAuc2VydmVyX3N0eWxlIHVsIGxpOm50aC1jaGlsZCgxKSB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMzU3YWY2O1xufVxuLnNBbmRhIC5zZXJ2ZXJfc3R5bGUgdWwgbGk6bnRoLWNoaWxkKDIpOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDJweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyNzBkZWcsIHJnYmEoMjU1LCAwLCAwLCAwKSwgIzM1N2FmNik7XG59XG4uc0FuZGEgLnNlcnZlcl9zdHlsZSB1bCBsaTpudGgtY2hpbGQoMikge1xuICBib3JkZXItdG9wOiBub25lO1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuLnNBbmRhIC5zZXJ2ZXJfc3R5bGUgdWwgbGk6bnRoLWNoaWxkKDMpOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiAycHg7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDI1NSwgMCwgMCwgMCksICMzNTdhZjYpO1xufVxuLnNBbmRhIC5zZXJ2ZXJfc3R5bGUgdWwgbGk6bnRoLWNoaWxkKDMpIHtcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICMzNTdhZjY7XG59XG4uc0FuZGEgLnNlcnZlcl9zdHlsZSB1bCBsaTpudGgtY2hpbGQoNCk6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDI3MGRlZywgcmdiYSgyNTUsIDAsIDAsIDApLCAjMzU3YWY2KTtcbn1cbi5zQW5kYSAuc2VydmVyX3N0eWxlIHVsIGxpOm50aC1jaGlsZCg0KSB7XG4gIGJvcmRlci10b3A6IG5vbmU7XG59XG4iXX0= */", ".fileover[_ngcontent-%COMP%] {\n  animation: shake 1s;\n  animation-iteration-count: infinite;\n}\n\n@keyframes shake {\n  0% {\n    transform: translate(1px, 1px) rotate(0deg);\n  }\n  10% {\n    transform: translate(-1px, -2px) rotate(-1deg);\n  }\n  20% {\n    transform: translate(-3px, 0px) rotate(1deg);\n  }\n  30% {\n    transform: translate(3px, 2px) rotate(0deg);\n  }\n  40% {\n    transform: translate(1px, -1px) rotate(1deg);\n  }\n  50% {\n    transform: translate(-1px, 2px) rotate(-1deg);\n  }\n  60% {\n    transform: translate(-3px, 1px) rotate(0deg);\n  }\n  70% {\n    transform: translate(3px, 1px) rotate(-1deg);\n  }\n  80% {\n    transform: translate(-1px, -1px) rotate(1deg);\n  }\n  90% {\n    transform: translate(1px, 2px) rotate(0deg);\n  }\n  100% {\n    transform: translate(1px, -2px) rotate(-1deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC9wYWdlcy9ob21lL0Q6L2ZmL3RhcmdldC1yZWNvZ25pemUtd3d3LWh0bWwtVjAuMi9zcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS11cGxvYWQubGVzcyIsIi4uL2FwcC9wYWdlcy9ob21lL2hvbWUtdXBsb2FkLmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtFQUNBLG1DQUFBO0FDQ0Y7QUFDQSxvQkFBb0I7QURDcEI7RUFDRTtJQUNFLDJDQUFBO0VDQ0Y7RURFQTtJQUNFLDhDQUFBO0VDQUY7RURHQTtJQUNFLDRDQUFBO0VDREY7RURJQTtJQUNFLDJDQUFBO0VDRkY7RURLQTtJQUNFLDRDQUFBO0VDSEY7RURNQTtJQUNFLDZDQUFBO0VDSkY7RURPQTtJQUNFLDRDQUFBO0VDTEY7RURRQTtJQUNFLDRDQUFBO0VDTkY7RURTQTtJQUNFLDZDQUFBO0VDUEY7RURVQTtJQUNFLDJDQUFBO0VDUkY7RURXQTtJQUNFLDZDQUFBO0VDVEY7QUFDRiIsImZpbGUiOiIuLi9hcHAvcGFnZXMvaG9tZS9ob21lLXVwbG9hZC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmZpbGVvdmVyIHtcbiAgYW5pbWF0aW9uOiBzaGFrZSAxcztcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG59XG4vKiBTaGFrZSBhbmltYXRpb24gKi9cbkBrZXlmcmFtZXMgc2hha2Uge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMXB4LCAxcHgpIHJvdGF0ZSgwZGVnKTtcbiAgfVxuXG4gIDEwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTFweCwgLTJweCkgcm90YXRlKC0xZGVnKTtcbiAgfVxuXG4gIDIwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTNweCwgMHB4KSByb3RhdGUoMWRlZyk7XG4gIH1cblxuICAzMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDNweCwgMnB4KSByb3RhdGUoMGRlZyk7XG4gIH1cblxuICA0MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDFweCwgLTFweCkgcm90YXRlKDFkZWcpO1xuICB9XG5cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMXB4LCAycHgpIHJvdGF0ZSgtMWRlZyk7XG4gIH1cblxuICA2MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0zcHgsIDFweCkgcm90YXRlKDBkZWcpO1xuICB9XG5cbiAgNzAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgzcHgsIDFweCkgcm90YXRlKC0xZGVnKTtcbiAgfVxuXG4gIDgwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTFweCwgLTFweCkgcm90YXRlKDFkZWcpO1xuICB9XG5cbiAgOTAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxcHgsIDJweCkgcm90YXRlKDBkZWcpO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMXB4LCAtMnB4KSByb3RhdGUoLTFkZWcpO1xuICB9XG59XG4iLCIuZmlsZW92ZXIge1xuICBhbmltYXRpb246IHNoYWtlIDFzO1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbn1cbi8qIFNoYWtlIGFuaW1hdGlvbiAqL1xuQGtleWZyYW1lcyBzaGFrZSB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxcHgsIDFweCkgcm90YXRlKDBkZWcpO1xuICB9XG4gIDEwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTFweCwgLTJweCkgcm90YXRlKC0xZGVnKTtcbiAgfVxuICAyMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0zcHgsIDBweCkgcm90YXRlKDFkZWcpO1xuICB9XG4gIDMwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoM3B4LCAycHgpIHJvdGF0ZSgwZGVnKTtcbiAgfVxuICA0MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDFweCwgLTFweCkgcm90YXRlKDFkZWcpO1xuICB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTFweCwgMnB4KSByb3RhdGUoLTFkZWcpO1xuICB9XG4gIDYwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTNweCwgMXB4KSByb3RhdGUoMGRlZyk7XG4gIH1cbiAgNzAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgzcHgsIDFweCkgcm90YXRlKC0xZGVnKTtcbiAgfVxuICA4MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xcHgsIC0xcHgpIHJvdGF0ZSgxZGVnKTtcbiAgfVxuICA5MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDFweCwgMnB4KSByb3RhdGUoMGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMXB4LCAtMnB4KSByb3RhdGUoLTFkZWcpO1xuICB9XG59XG4iXX0= */", ".digital[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 40px auto 0;\n}\n.digital[_ngcontent-%COMP%]   .digital-form[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  width: 100%;\n  height: 40px;\n  padding: 5px;\n  display: flex;\n  padding-left: 10px;\n  padding-top: 10px;\n  text-align: left;\n}\n.digital[_ngcontent-%COMP%]   .digital-form[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #8385b4;\n  font-size: 12px;\n  font-weight: 700;\n}\n.digital[_ngcontent-%COMP%]   .digital-form[_ngcontent-%COMP%]   .digital-form-status[_ngcontent-%COMP%] {\n  flex: 0 0 45%;\n}\n.digital[_ngcontent-%COMP%]   .digital-form[_ngcontent-%COMP%]   .digital-form-status[_ngcontent-%COMP%]   nz-select[_ngcontent-%COMP%] {\n  width: 120px;\n  background-color: #03152E;\n}\n.modal-detaile[_ngcontent-%COMP%] {\n  display: none;\n  width: 400px;\n  height: 90%;\n  background: #fff;\n  border-radius: 15px;\n  position: absolute;\n  right: -200px;\n  top: 40px;\n  box-shadow: rgb(22 62 127) 0px 0px 65px;\n  overflow: hidden;\n}\n.modal-detaile[_ngcontent-%COMP%]   .detaile-title[_ngcontent-%COMP%] {\n  height: 5%;\n  width: 100%;\n  color: #03152e;\n  text-align: left;\n  padding: 10px;\n  font-size: 14px;\n  font-weight: 500;\n}\n.modal-detaile[_ngcontent-%COMP%]   .deatile-content[_ngcontent-%COMP%] {\n  height: 100%;\n  background: #03152e;\n  padding: 10px;\n  color: #fff;\n  text-align: left;\n  font-size: 14px;\n  display: flex;\n  flex-wrap: wrap;\n  overflow: auto;\n}\n.modal-detaile[_ngcontent-%COMP%]   .deatile-content[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  margin-top: 40px;\n}\n.modal-detaile[_ngcontent-%COMP%]   .deatile-content[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n  margin-left: 10px;\n}\n.modal-detaile[_ngcontent-%COMP%]   .deatile-content[_ngcontent-%COMP%]   .detaile-btn[_ngcontent-%COMP%] {\n  flex: 0 0 100%;\n  height: 10%;\n  text-align: center;\n}\n.modal-detaile[_ngcontent-%COMP%]   .deatile-content[_ngcontent-%COMP%]   .detaile-btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n.digitalTitle[_ngcontent-%COMP%] {\n  height: 60px;\n  line-height: 60px;\n  font-size: 16px;\n}\n.CAButtonS[_ngcontent-%COMP%] {\n  margin: 20px 0;\n}\ntable.dataTable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%], .reseachIput[_ngcontent-%COMP%], #tablesLength[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%]    > select[_ngcontent-%COMP%], #tablesPageinate[_ngcontent-%COMP%]   .pageinateBtn[_ngcontent-%COMP%] {\n  background: #03152E;\n}\n.requestBtn[_ngcontent-%COMP%] {\n  vertical-align: baseline;\n  margin-left: 16px;\n}\n#userImportTable[_ngcontent-%COMP%] {\n  background: #003975;\n  color: #fff;\n  border: none!important;\n  text-align: center;\n  margin: 20px 0;\n}\n.pagination[_ngcontent-%COMP%] {\n  padding: 10px;\n  padding-left: 0px;\n  text-align: right;\n}\n  .ant-pagination-item-ellipsis {\n  color: #fff !important;\n}\n  .ant-pagination {\n  color: #fff;\n}\n  .ant-pagination-prev a,   .ant-pagination-next a,   .ant-pagination-item a {\n  color: #fff !important;\n}\n  .ant-pagination-prev a:hover,   .ant-pagination-next a:hover,   .ant-pagination-item a:hover {\n  color: #1890ff !important;\n}\n  .ant-pagination-item-active {\n  background: #0589e0;\n}\n  .ant-table-thead > tr > th {\n  background: #003975;\n  color: #fff;\n  padding: 10px;\n}\n  .ant-table-tbody > tr > td {\n  padding: 10px;\n  background: #03152e;\n  color: #fff;\n  border: none;\n}\n  .ant-table-tbody > tr:hover:not(.ant-table-expanded-row) > td,   .ant-table-tbody .ant-table-row-hover,   .ant-table-tbody .ant-table-row-hover > td {\n  background: #072c4e !important;\n}\n  .ant-select-single:not(.ant-select-customize-input) .ant-select-selector,   .ant-pagination-options-quick-jumper input {\n  background-color: #03050f;\n  color: #b6bdd7;\n  font-size: 11px;\n  font-weight: 700;\n  border-radius: 4px;\n  border: 1px solid rgba(225, 225, 225, 0.3);\n}\n  .ant-select-arrow {\n  color: #fff;\n}\n  .ant-radio-inner {\n  background: none;\n}\n#errorCorrectionBox[_ngcontent-%COMP%]     .ant-pagination-options-quick-jumper input {\n  background-color: none !important;\n}\n#userImportTable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:first-child {\n  height: 80px;\n}\n#userImportTable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  height: 40px !important;\n}\n.close[_ngcontent-%COMP%] {\n  width: 25px;\n  height: 25px;\n  border-radius: 5px;\n  background: #bfbfbf;\n  cursor: pointer;\n  font-size: 18px;\n  text-align: center;\n  line-height: 25px;\n  color: #031129;\n}\n#modal-container[_ngcontent-%COMP%] {\n  position: absolute;\n  display: table;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  transform: scale(0);\n  z-index: 1;\n  border-radius: 15px;\n  box-shadow: rgb(22 62 127) 0px 0px 65px;\n}\n#modal-container.one[_ngcontent-%COMP%] {\n  transform: scaleY(0.01) scaleX(0);\n  animation: unfoldIn 1s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;\n}\n#modal-container.one[_ngcontent-%COMP%]   .modal-background[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%] {\n  width: 60%;\n  height: 90%;\n  transform: scale(0);\n  animation: zoomIn 0.5s 0.8s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;\n}\n#modal-container.one.out[_ngcontent-%COMP%] {\n  transform: scale(1);\n  animation: unfoldOut 1s 0.3s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;\n}\n#modal-container.one.out[_ngcontent-%COMP%]   .modal-background[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%] {\n  animation: zoomOut 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;\n}\n#modal-container.two[_ngcontent-%COMP%] {\n  transform: scale(1);\n}\n#modal-container.two[_ngcontent-%COMP%]   .modal-background[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0);\n  animation: fadeIn 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;\n}\n#modal-container.two[_ngcontent-%COMP%]   .modal-background[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%] {\n  opacity: 0;\n  animation: scaleUp 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;\n}\n#modal-container.two[_ngcontent-%COMP%]    + .content[_ngcontent-%COMP%] {\n  animation: scaleBack 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;\n}\n#modal-container.two.out[_ngcontent-%COMP%] {\n  animation: quickScaleDown 0s 0.5s linear forwards;\n}\n#modal-container.two.out[_ngcontent-%COMP%]   .modal-background[_ngcontent-%COMP%] {\n  animation: fadeOut 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;\n}\n#modal-container.two.out[_ngcontent-%COMP%]   .modal-background[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%] {\n  animation: scaleDown 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;\n}\n#modal-container.two.out[_ngcontent-%COMP%]    + .content[_ngcontent-%COMP%] {\n  animation: scaleForward 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;\n}\n#modal-container.three[_ngcontent-%COMP%] {\n  z-index: 0;\n  transform: scale(1);\n}\n#modal-container.three[_ngcontent-%COMP%]   .modal-background[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.6);\n}\n#modal-container.three[_ngcontent-%COMP%]   .modal-background[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%] {\n  animation: moveUp 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;\n}\n#modal-container.three[_ngcontent-%COMP%]    + .content[_ngcontent-%COMP%] {\n  z-index: 1;\n  animation: slideUpLarge 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;\n}\n#modal-container.three.out[_ngcontent-%COMP%]   .modal-background[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%] {\n  animation: moveDown 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;\n}\n#modal-container.three.out[_ngcontent-%COMP%]    + .content[_ngcontent-%COMP%] {\n  animation: slideDownLarge 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;\n}\n#modal-container.four[_ngcontent-%COMP%] {\n  z-index: 0;\n  transform: scale(1);\n}\n#modal-container.four[_ngcontent-%COMP%]   .modal-background[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.7);\n}\n#modal-container.four[_ngcontent-%COMP%]   .modal-background[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%] {\n  animation: blowUpModal 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;\n}\n#modal-container.four[_ngcontent-%COMP%]    + .content[_ngcontent-%COMP%] {\n  z-index: 1;\n  animation: blowUpContent 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;\n}\n#modal-container.four.out[_ngcontent-%COMP%]   .modal-background[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%] {\n  animation: blowUpModalTwo 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;\n}\n#modal-container.four.out[_ngcontent-%COMP%]    + .content[_ngcontent-%COMP%] {\n  animation: blowUpContentTwo 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;\n}\n#modal-container.five[_ngcontent-%COMP%] {\n  transform: scale(1);\n}\n#modal-container.five[_ngcontent-%COMP%]   .modal-background[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0);\n  animation: fadeIn 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;\n}\n#modal-container.five[_ngcontent-%COMP%]   .modal-background[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%] {\n  transform: translateX(-1500px);\n  animation: roadRunnerIn 0.3s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;\n}\n#modal-container.five.out[_ngcontent-%COMP%] {\n  animation: quickScaleDown 0s 0.5s linear forwards;\n}\n#modal-container.five.out[_ngcontent-%COMP%]   .modal-background[_ngcontent-%COMP%] {\n  animation: fadeOut 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;\n}\n#modal-container.five.out[_ngcontent-%COMP%]   .modal-background[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%] {\n  animation: roadRunnerOut 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;\n}\n#modal-container.six[_ngcontent-%COMP%] {\n  transform: scale(1);\n}\n#modal-container.six[_ngcontent-%COMP%]   .modal-background[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0);\n  animation: fadeIn 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;\n}\n#modal-container.six[_ngcontent-%COMP%]   .modal-background[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%] {\n  background-color: transparent;\n  animation: modalFadeIn 0.5s 0.8s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;\n}\n#modal-container.six[_ngcontent-%COMP%]   .modal-background[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], #modal-container.six[_ngcontent-%COMP%]   .modal-background[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  opacity: 0;\n  position: relative;\n  animation: modalContentFadeIn 0.5s 1s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;\n}\n#modal-container.six[_ngcontent-%COMP%]   .modal-background[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-svg[_ngcontent-%COMP%]   rect[_ngcontent-%COMP%] {\n  animation: sketchIn 0.5s 0.3s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;\n}\n#modal-container.six.out[_ngcontent-%COMP%] {\n  animation: quickScaleDown 0s 0.5s linear forwards;\n}\n#modal-container.six.out[_ngcontent-%COMP%]   .modal-background[_ngcontent-%COMP%] {\n  animation: fadeOut 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;\n}\n#modal-container.six.out[_ngcontent-%COMP%]   .modal-background[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%] {\n  animation: modalFadeOut 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;\n}\n#modal-container.six.out[_ngcontent-%COMP%]   .modal-background[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], #modal-container.six.out[_ngcontent-%COMP%]   .modal-background[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  animation: modalContentFadeOut 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;\n}\n#modal-container.six.out[_ngcontent-%COMP%]   .modal-background[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-svg[_ngcontent-%COMP%]   rect[_ngcontent-%COMP%] {\n  animation: sketchOut 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;\n}\n#modal-container.seven[_ngcontent-%COMP%] {\n  transform: scale(1);\n}\n#modal-container.seven[_ngcontent-%COMP%]   .modal-background[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0);\n  animation: fadeIn 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;\n}\n#modal-container.seven[_ngcontent-%COMP%]   .modal-background[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%] {\n  height: 75px;\n  width: 75px;\n  border-radius: 75px;\n  overflow: hidden;\n  animation: bondJamesBond 1.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;\n}\n#modal-container.seven[_ngcontent-%COMP%]   .modal-background[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], #modal-container.seven[_ngcontent-%COMP%]   .modal-background[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  opacity: 0;\n  position: relative;\n  animation: modalContentFadeIn 0.5s 1.4s linear forwards;\n}\n#modal-container.seven.out[_ngcontent-%COMP%] {\n  animation: slowFade 0.5s 1.5s linear forwards;\n}\n#modal-container.seven.out[_ngcontent-%COMP%]   .modal-background[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.7);\n  animation: fadeToRed 2s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;\n}\n#modal-container.seven.out[_ngcontent-%COMP%]   .modal-background[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%] {\n  border-radius: 3px;\n  height: 162px;\n  width: 227px;\n  animation: killShot 1s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;\n}\n#modal-container.seven.out[_ngcontent-%COMP%]   .modal-background[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], #modal-container.seven.out[_ngcontent-%COMP%]   .modal-background[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  animation: modalContentFadeOut 0.5s 0.5 cubic-bezier(0.165, 0.84, 0.44, 1) forwards;\n}\n#modal-container[_ngcontent-%COMP%]   .modal-background[_ngcontent-%COMP%] {\n  display: table-cell;\n  background: rgba(0, 0, 0, 0.3);\n  text-align: center;\n  vertical-align: middle;\n}\n#modal-container[_ngcontent-%COMP%]   .modal-background[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%] {\n  background: #031129;\n  \n  display: inline-block;\n  border-radius: 15px;\n  font-weight: 300;\n  position: relative;\n}\n#modal-container[_ngcontent-%COMP%]   .modal-background[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 25px;\n  line-height: 25px;\n  margin-bottom: 15px;\n}\n#modal-container[_ngcontent-%COMP%]   .modal-background[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n  line-height: 22px;\n}\n#modal-container[_ngcontent-%COMP%]   .modal-background[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-svg[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  border-radius: 3px;\n}\n#modal-container[_ngcontent-%COMP%]   .modal-background[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-svg[_ngcontent-%COMP%]   rect[_ngcontent-%COMP%] {\n  stroke: #fff;\n  stroke-width: 2px;\n  stroke-dasharray: 778;\n  stroke-dashoffset: 778;\n}\n@keyframes unfoldIn {\n  0% {\n    transform: scaleY(0.005) scaleX(0);\n  }\n  50% {\n    transform: scaleY(0.005) scaleX(1);\n  }\n  100% {\n    transform: scaleY(1) scaleX(1);\n  }\n}\n@keyframes unfoldOut {\n  0% {\n    transform: scaleY(1) scaleX(1);\n  }\n  50% {\n    transform: scaleY(0.005) scaleX(1);\n  }\n  100% {\n    transform: scaleY(0.005) scaleX(0);\n  }\n}\n@keyframes zoomIn {\n  0% {\n    transform: scale(0);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@keyframes zoomOut {\n  0% {\n    transform: scale(1);\n  }\n  100% {\n    transform: scale(0);\n  }\n}\n@keyframes fadeIn {\n  0% {\n    background: rgba(0, 0, 0, 0);\n  }\n  100% {\n    background: rgba(0, 0, 0, 0.7);\n  }\n}\n@keyframes fadeOut {\n  0% {\n    background: rgba(0, 0, 0, 0.7);\n  }\n  100% {\n    background: rgba(0, 0, 0, 0);\n  }\n}\n@keyframes scaleUp {\n  0% {\n    transform: scale(0.8) translateY(1000px);\n    opacity: 0;\n  }\n  100% {\n    transform: scale(1) translateY(0px);\n    opacity: 1;\n  }\n}\n@keyframes scaleDown {\n  0% {\n    transform: scale(1) translateY(0px);\n    opacity: 1;\n  }\n  100% {\n    transform: scale(0.8) translateY(1000px);\n    opacity: 0;\n  }\n}\n@keyframes scaleBack {\n  0% {\n    transform: scale(1);\n  }\n  100% {\n    transform: scale(0.85);\n  }\n}\n@keyframes scaleForward {\n  0% {\n    transform: scale(0.85);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@keyframes quickScaleDown {\n  0% {\n    transform: scale(1);\n  }\n  99.9% {\n    transform: scale(1);\n  }\n  100% {\n    transform: scale(0);\n  }\n}\n@keyframes slideUpLarge {\n  0% {\n    transform: translateY(0%);\n  }\n  100% {\n    transform: translateY(-100%);\n  }\n}\n@keyframes slideDownLarge {\n  0% {\n    transform: translateY(-100%);\n  }\n  100% {\n    transform: translateY(0%);\n  }\n}\n@keyframes moveUp {\n  0% {\n    transform: translateY(150px);\n  }\n  100% {\n    transform: translateY(0);\n  }\n}\n@keyframes moveDown {\n  0% {\n    transform: translateY(0px);\n  }\n  100% {\n    transform: translateY(150px);\n  }\n}\n@keyframes blowUpContent {\n  0% {\n    transform: scale(1);\n    opacity: 1;\n  }\n  99.9% {\n    transform: scale(2);\n    opacity: 0;\n  }\n  100% {\n    transform: scale(0);\n  }\n}\n@keyframes blowUpContentTwo {\n  0% {\n    transform: scale(2);\n    opacity: 0;\n  }\n  100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n@keyframes blowUpModal {\n  0% {\n    transform: scale(0);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@keyframes blowUpModalTwo {\n  0% {\n    transform: scale(1);\n    opacity: 1;\n  }\n  100% {\n    transform: scale(0);\n    opacity: 0;\n  }\n}\n@keyframes roadRunnerIn {\n  0% {\n    transform: translateX(-1500px) skewX(30deg) scaleX(1.3);\n  }\n  70% {\n    transform: translateX(30px) skewX(0deg) scaleX(0.9);\n  }\n  100% {\n    transform: translateX(0px) skewX(0deg) scaleX(1);\n  }\n}\n@keyframes roadRunnerOut {\n  0% {\n    transform: translateX(0px) skewX(0deg) scaleX(1);\n  }\n  30% {\n    transform: translateX(-30px) skewX(-5deg) scaleX(0.9);\n  }\n  100% {\n    transform: translateX(1500px) skewX(30deg) scaleX(1.3);\n  }\n}\n@keyframes sketchIn {\n  0% {\n    stroke-dashoffset: 778;\n  }\n  100% {\n    stroke-dashoffset: 0;\n  }\n}\n@keyframes sketchOut {\n  0% {\n    stroke-dashoffset: 0;\n  }\n  100% {\n    stroke-dashoffset: 778;\n  }\n}\n@keyframes modalFadeIn {\n  0% {\n    background-color: transparent;\n  }\n  100% {\n    background-color: white;\n  }\n}\n@keyframes modalFadeOut {\n  0% {\n    background-color: white;\n  }\n  100% {\n    background-color: transparent;\n  }\n}\n@keyframes modalContentFadeIn {\n  0% {\n    opacity: 0;\n    top: -20px;\n  }\n  100% {\n    opacity: 1;\n    top: 0;\n  }\n}\n@keyframes modalContentFadeOut {\n  0% {\n    opacity: 1;\n    top: 0px;\n  }\n  100% {\n    opacity: 0;\n    top: -20px;\n  }\n}\n@keyframes bondJamesBond {\n  0% {\n    transform: translateX(1000px);\n  }\n  80% {\n    transform: translateX(0px);\n    border-radius: 75px;\n    height: 75px;\n    width: 75px;\n  }\n  90% {\n    border-radius: 3px;\n    height: 182px;\n    width: 247px;\n  }\n  100% {\n    border-radius: 3px;\n    height: 162px;\n    width: 227px;\n  }\n}\n@keyframes killShot {\n  0% {\n    transform: translateY(0) rotate(0deg);\n    opacity: 1;\n  }\n  100% {\n    transform: translateY(300px) rotate(45deg);\n    opacity: 0;\n  }\n}\n@keyframes fadeToRed {\n  0% {\n    box-shadow: inset 0 0 0 rgba(201, 24, 24, 0.8);\n  }\n  100% {\n    box-shadow: inset 0 2000px 0 rgba(201, 24, 24, 0.8);\n  }\n}\n@keyframes slowFade {\n  0% {\n    opacity: 1;\n  }\n  99.9% {\n    opacity: 0;\n    transform: scale(1);\n  }\n  100% {\n    transform: scale(0);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC9wYWdlcy9ob21lL0Q6L2ZmL3RhcmdldC1yZWNvZ25pemUtd3d3LWh0bWwtVjAuMi9zcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS10YWJsZS5sZXNzIiwiLi4vYXBwL3BhZ2VzL2hvbWUvaG9tZS10YWJsZS5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0FDQ0o7QURIQTtFQUlNLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNFTjtBRGRBO0VBY1EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0dSO0FEbkJBO0VBbUJRLGFBQUE7QUNHUjtBRHRCQTtFQXFCVSxZQUFBO0VBQ0EseUJBQUE7QUNJVjtBRFVBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7RUFDQSx1Q0FBQTtFQUNBLGdCQUFBO0FDUko7QURGQTtFQVlJLFVBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ1BKO0FEWEE7RUFxQkksWUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNQSjtBRHRCQTtFQStCTSxnQkFBQTtBQ05OO0FEekJBO0VBaUNRLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUNMUjtBRDlCQTtFQTBDTSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDVE47QURuQ0E7RUE4Q1EsZ0JBQUE7QUNSUjtBRGlCQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNmSjtBRGlCQTtFQUNJLGNBQUE7QUNmSjtBRGtCQTs7OztFQUNJLG1CQUFBO0FDYko7QURlQTtFQUNJLHdCQUFBO0VBQ0EsaUJBQUE7QUNiSjtBRGVBO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNiSjtBRGVBO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNiRjtBRGdCQTtFQUNFLHNCQUFBO0FDZEY7QURpQkU7RUFDRSxXQUFBO0FDZko7QURpQkU7OztFQUNFLHNCQUFBO0FDYko7QURnQkU7OztFQUNFLHlCQUFBO0FDWko7QURjRTtFQUNFLG1CQUFBO0FDWko7QURjRTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUNaSjtBRGNFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNaSjtBRGNFOzs7RUFFSSw4QkFBQTtBQ1hOO0FEY0U7O0VBQ0UseUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQ0FBQTtBQ1hKO0FEYUU7RUFDRSxXQUFBO0FDWEo7QURjRTtFQUNFLGdCQUFBO0FDWko7QURnQkU7RUFDRSxpQ0FBQTtBQ2RKO0FEZ0JBO0VBQ0ksWUFBQTtBQ2RKO0FEZ0JBO0VBQ0ksdUJBQUE7QUNkSjtBRGlCQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNmSjtBRGtCQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLHVDQUFBO0FDaEJKO0FEa0JFO0VBQ0UsaUNBQUE7RUFDQSxrRUFBQTtBQ2hCSjtBRGtCRTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSx1RUFBQTtBQ2hCSjtBRGtCRTtFQUNFLG1CQUFBO0VBQ0Esd0VBQUE7QUNoQko7QURrQkU7RUFDRSxtRUFBQTtBQ2hCSjtBRGtCRTtFQUNFLG1CQUFBO0FDaEJKO0FEa0JFO0VBRUUsNEJBQUE7RUFDQSxrRUFBQTtBQ2pCSjtBRG1CRTtFQUNFLFVBQUE7RUFDQSxtRUFBQTtBQ2pCSjtBRG1CRTtFQUNFLHFFQUFBO0FDakJKO0FEbUJFO0VBQ0UsaURBQUE7QUNqQko7QURtQkU7RUFDRSxtRUFBQTtBQ2pCSjtBRG1CRTtFQUNFLHFFQUFBO0FDakJKO0FEbUJFO0VBQ0Usd0VBQUE7QUNqQko7QURtQkU7RUFDRSxVQUFBO0VBQ0EsbUJBQUE7QUNqQko7QURtQkU7RUFDRSw4QkFBQTtBQ2pCSjtBRG1CRTtFQUNFLGtFQUFBO0FDakJKO0FEbUJFO0VBQ0UsVUFBQTtFQUNBLHdFQUFBO0FDakJKO0FEbUJFO0VBQ0Usb0VBQUE7QUNqQko7QURtQkU7RUFDRSwwRUFBQTtBQ2pCSjtBRG1CRTtFQUNFLFVBQUE7RUFDQSxtQkFBQTtBQ2pCSjtBRG1CRTtFQUNFLDhCQUFBO0FDakJKO0FEbUJFO0VBQ0UsdUVBQUE7QUNqQko7QURtQkU7RUFDRSxVQUFBO0VBQ0EseUVBQUE7QUNqQko7QURtQkU7RUFDRSwwRUFBQTtBQ2pCSjtBRG1CRTtFQUNFLDRFQUFBO0FDakJKO0FEbUJFO0VBQ0UsbUJBQUE7QUNqQko7QURtQkU7RUFDRSw0QkFBQTtFQUNBLGtFQUFBO0FDakJKO0FEbUJFO0VBQ0UsOEJBQUE7RUFDQSx3RUFBQTtBQ2pCSjtBRG1CRTtFQUNFLGlEQUFBO0FDakJKO0FEbUJFO0VBQ0UsbUVBQUE7QUNqQko7QURtQkU7RUFDRSx5RUFBQTtBQ2pCSjtBRG1CRTtFQUNFLG1CQUFBO0FDakJKO0FEbUJFO0VBQ0UsNEJBQUE7RUFDQSxrRUFBQTtBQ2pCSjtBRG1CRTtFQUNFLDZCQUFBO0VBQ0EsNEVBQUE7QUNqQko7QURtQkU7O0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUZBQUE7QUNoQko7QURrQkU7RUFDRSx5RUFBQTtBQ2hCSjtBRGtCRTtFQUNFLGlEQUFBO0FDaEJKO0FEa0JFO0VBQ0UsbUVBQUE7QUNoQko7QURrQkU7RUFDRSx3RUFBQTtBQ2hCSjtBRGtCRTs7RUFDRSwrRUFBQTtBQ2ZKO0FEaUJFO0VBQ0UscUVBQUE7QUNmSjtBRGlCRTtFQUNFLG1CQUFBO0FDZko7QURpQkU7RUFDRSw0QkFBQTtFQUNBLGtFQUFBO0FDZko7QURpQkU7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5RUFBQTtBQ2ZKO0FEaUJFOztFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLHVEQUFBO0FDZEo7QURnQkU7RUFDRSw2Q0FBQTtBQ2RKO0FEZ0JFO0VBQ0Usb0NBQUE7RUFDQSxtRUFBQTtBQ2RKO0FEZ0JFO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtFQUFBO0FDZEo7QURnQkU7O0VBQ0UsbUZBQUE7QUNiSjtBRGVFO0VBRUUsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUNkSjtBRGdCRTtFQUNFLG1CQUFBO0VDZEYsbUJBQW1CO0VEZ0JqQixxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ2RKO0FEZ0JFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNkSjtBRGdCRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQ2RKO0FEZ0JFO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNkSjtBRGdCRTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7QUNkSjtBRG1CRTtFQUNFO0lBQ0Usa0NBQUE7RUNqQko7RURtQkU7SUFDRSxrQ0FBQTtFQ2pCSjtFRG1CRTtJQUNFLDhCQUFBO0VDakJKO0FBQ0Y7QURtQkU7RUFDRTtJQUNFLDhCQUFBO0VDakJKO0VEbUJFO0lBQ0Usa0NBQUE7RUNqQko7RURtQkU7SUFDRSxrQ0FBQTtFQ2pCSjtBQUNGO0FEbUJFO0VBQ0U7SUFDRSxtQkFBQTtFQ2pCSjtFRG1CRTtJQUNFLG1CQUFBO0VDakJKO0FBQ0Y7QURtQkU7RUFDRTtJQUNFLG1CQUFBO0VDakJKO0VEbUJFO0lBQ0UsbUJBQUE7RUNqQko7QUFDRjtBRG1CRTtFQUNFO0lBQ0UsNEJBQUE7RUNqQko7RURtQkU7SUFDRSw4QkFBQTtFQ2pCSjtBQUNGO0FEbUJFO0VBQ0U7SUFDRSw4QkFBQTtFQ2pCSjtFRG1CRTtJQUNFLDRCQUFBO0VDakJKO0FBQ0Y7QURtQkU7RUFDRTtJQUNFLHdDQUFBO0lBQ0EsVUFBQTtFQ2pCSjtFRG1CRTtJQUNFLG1DQUFBO0lBQ0EsVUFBQTtFQ2pCSjtBQUNGO0FEbUJFO0VBQ0U7SUFDRSxtQ0FBQTtJQUNBLFVBQUE7RUNqQko7RURtQkU7SUFDRSx3Q0FBQTtJQUNBLFVBQUE7RUNqQko7QUFDRjtBRG1CRTtFQUNFO0lBQ0UsbUJBQUE7RUNqQko7RURtQkU7SUFDRSxzQkFBQTtFQ2pCSjtBQUNGO0FEbUJFO0VBQ0U7SUFDRSxzQkFBQTtFQ2pCSjtFRG1CRTtJQUNFLG1CQUFBO0VDakJKO0FBQ0Y7QURtQkU7RUFDRTtJQUNFLG1CQUFBO0VDakJKO0VEbUJFO0lBQ0UsbUJBQUE7RUNqQko7RURtQkU7SUFDRSxtQkFBQTtFQ2pCSjtBQUNGO0FEbUJFO0VBQ0U7SUFDRSx5QkFBQTtFQ2pCSjtFRG1CRTtJQUNFLDRCQUFBO0VDakJKO0FBQ0Y7QURtQkU7RUFDRTtJQUNFLDRCQUFBO0VDakJKO0VEbUJFO0lBQ0UseUJBQUE7RUNqQko7QUFDRjtBRG1CRTtFQUNFO0lBQ0UsNEJBQUE7RUNqQko7RURtQkU7SUFDRSx3QkFBQTtFQ2pCSjtBQUNGO0FEbUJFO0VBQ0U7SUFDRSwwQkFBQTtFQ2pCSjtFRG1CRTtJQUNFLDRCQUFBO0VDakJKO0FBQ0Y7QURtQkU7RUFDRTtJQUNFLG1CQUFBO0lBQ0EsVUFBQTtFQ2pCSjtFRG1CRTtJQUNFLG1CQUFBO0lBQ0EsVUFBQTtFQ2pCSjtFRG1CRTtJQUNFLG1CQUFBO0VDakJKO0FBQ0Y7QURtQkU7RUFDRTtJQUNFLG1CQUFBO0lBQ0EsVUFBQTtFQ2pCSjtFRG1CRTtJQUNFLG1CQUFBO0lBQ0EsVUFBQTtFQ2pCSjtBQUNGO0FEbUJFO0VBQ0U7SUFDRSxtQkFBQTtFQ2pCSjtFRG1CRTtJQUNFLG1CQUFBO0VDakJKO0FBQ0Y7QURtQkU7RUFDRTtJQUNFLG1CQUFBO0lBQ0EsVUFBQTtFQ2pCSjtFRG1CRTtJQUNFLG1CQUFBO0lBQ0EsVUFBQTtFQ2pCSjtBQUNGO0FEbUJFO0VBQ0U7SUFDRSx1REFBQTtFQ2pCSjtFRG1CRTtJQUNFLG1EQUFBO0VDakJKO0VEbUJFO0lBQ0UsZ0RBQUE7RUNqQko7QUFDRjtBRG1CRTtFQUNFO0lBQ0UsZ0RBQUE7RUNqQko7RURtQkU7SUFDRSxxREFBQTtFQ2pCSjtFRG1CRTtJQUNFLHNEQUFBO0VDakJKO0FBQ0Y7QURtQkU7RUFDRTtJQUNFLHNCQUFBO0VDakJKO0VEbUJFO0lBQ0Usb0JBQUE7RUNqQko7QUFDRjtBRG1CRTtFQUNFO0lBQ0Usb0JBQUE7RUNqQko7RURtQkU7SUFDRSxzQkFBQTtFQ2pCSjtBQUNGO0FEbUJFO0VBQ0U7SUFDRSw2QkFBQTtFQ2pCSjtFRG1CRTtJQUNFLHVCQUFBO0VDakJKO0FBQ0Y7QURtQkU7RUFDRTtJQUNFLHVCQUFBO0VDakJKO0VEbUJFO0lBQ0UsNkJBQUE7RUNqQko7QUFDRjtBRG1CRTtFQUNFO0lBQ0UsVUFBQTtJQUNBLFVBQUE7RUNqQko7RURtQkU7SUFDRSxVQUFBO0lBQ0EsTUFBQTtFQ2pCSjtBQUNGO0FEbUJFO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsUUFBQTtFQ2pCSjtFRG1CRTtJQUNFLFVBQUE7SUFDQSxVQUFBO0VDakJKO0FBQ0Y7QURtQkU7RUFDRTtJQUNFLDZCQUFBO0VDakJKO0VEbUJFO0lBQ0UsMEJBQUE7SUFDQSxtQkFBQTtJQUNBLFlBQUE7SUFDQSxXQUFBO0VDakJKO0VEbUJFO0lBQ0Usa0JBQUE7SUFDQSxhQUFBO0lBQ0EsWUFBQTtFQ2pCSjtFRG1CRTtJQUNFLGtCQUFBO0lBQ0EsYUFBQTtJQUNBLFlBQUE7RUNqQko7QUFDRjtBRG1CRTtFQUNFO0lBQ0UscUNBQUE7SUFDQSxVQUFBO0VDakJKO0VEbUJFO0lBQ0UsMENBQUE7SUFDQSxVQUFBO0VDakJKO0FBQ0Y7QURtQkU7RUFDRTtJQUNFLDhDQUFBO0VDakJKO0VEbUJFO0lBQ0UsbURBQUE7RUNqQko7QUFDRjtBRG1CRTtFQUNFO0lBQ0UsVUFBQTtFQ2pCSjtFRG1CRTtJQUNFLFVBQUE7SUFDQSxtQkFBQTtFQ2pCSjtFRG1CRTtJQUNFLG1CQUFBO0VDakJKO0FBQ0YiLCJmaWxlIjoiLi4vYXBwL3BhZ2VzL2hvbWUvaG9tZS10YWJsZS5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpZ2l0YWx7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOjQwcHggYXV0byAwO1xuICAgIC5kaWdpdGFsLWZvcm17XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDA7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogNDBweDtcbiAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICBzcGFue1xuICAgICAgICBjb2xvcjogIzgzODViNDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgfVxuICAgICAgLmRpZ2l0YWwtZm9ybS1zdGF0dXN7XG4gICAgICAgIGZsZXg6IDAgMCA0NSU7XG4gICAgICAgIG56LXNlbGVjdHtcbiAgICAgICAgICB3aWR0aDogMTIwcHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAzMTUyRTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbn1cblxuOmhvc3QgOjpuZy1kZWVwLmFudC1zZWxlY3Qtc2luZ2xlIC5hbnQtc2VsZWN0LXNlbGVjdG9ye1xuXG4gIFxuXG59XG5cblxuXG4ubW9kYWwtZGV0YWlsZXtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHdpZHRoOiA0MDBweDtcbiAgICBoZWlnaHQ6IDkwJTtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAtMjAwcHg7XG4gICAgdG9wOiA0MHB4O1xuICAgIGJveC1zaGFkb3c6IHJnYigyMiA2MiAxMjcpIDBweCAwcHggNjVweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAuZGV0YWlsZS10aXRsZXtcbiAgICBoZWlnaHQ6IDUlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGNvbG9yOiAjMDMxNTJlO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxuICAuZGVhdGlsZS1jb250ZW50e1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiAjMDMxNTJlO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgPnVsPmxpe1xuICAgICAgbWFyZ2luLXRvcDogNDBweDtcbiAgICAgIGltZ3tcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICBcblxuICAgIC5kZXRhaWxlLWJ0bntcbiAgICAgIGZsZXg6IDAgMCAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMCU7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBidXR0b257XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbn1cblxuXG5cbi5kaWdpdGFsVGl0bGV7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIGxpbmUtaGVpZ2h0OiA2MHB4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5DQUJ1dHRvblN7XG4gICAgbWFyZ2luOiAyMHB4IDA7XG59XG5cbnRhYmxlLmRhdGFUYWJsZSB0Ym9keSB0ciwucmVzZWFjaElwdXQsI3RhYmxlc0xlbmd0aD5sYWJlbD5zZWxlY3QsI3RhYmxlc1BhZ2VpbmF0ZSAucGFnZWluYXRlQnRue1xuICAgIGJhY2tncm91bmQ6ICMwMzE1MkU7XG59XG4ucmVxdWVzdEJ0bntcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG4gICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG59XG4jdXNlckltcG9ydFRhYmxle1xuICAgIGJhY2tncm91bmQ6ICMwMDM5NzU7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyOiBub25lIWltcG9ydGFudDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAyMHB4IDA7XG59XG4ucGFnaW5hdGlvbntcbiAgcGFkZGluZzogMTBweDtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4vZGVlcC8uYW50LXBhZ2luYXRpb24taXRlbS1lbGxpcHNpc3tcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn1cblxuICAvZGVlcC8uYW50LXBhZ2luYXRpb257XG4gICAgY29sb3I6ICNmZmZcbiAgfVxuICAvZGVlcC8uYW50LXBhZ2luYXRpb24tcHJldiBhLC9kZWVwLy5hbnQtcGFnaW5hdGlvbi1uZXh0IGEsL2RlZXAvLmFudC1wYWdpbmF0aW9uLWl0ZW0gYXtcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICB9XG4gXG4gIC9kZWVwLy5hbnQtcGFnaW5hdGlvbi1wcmV2IGE6aG92ZXIsL2RlZXAvLmFudC1wYWdpbmF0aW9uLW5leHQgYTpob3ZlciwvZGVlcC8uYW50LXBhZ2luYXRpb24taXRlbSBhOmhvdmVye1xuICAgIGNvbG9yOiAjMTg5MGZmICFpbXBvcnRhbnQ7XG4gIH1cbiAgL2RlZXAvLmFudC1wYWdpbmF0aW9uLWl0ZW0tYWN0aXZle1xuICAgIGJhY2tncm91bmQ6ICMwNTg5ZTA7XG4gIH1cbiAgL2RlZXAvLmFudC10YWJsZS10aGVhZCA+IHRyID4gdGh7XG4gICAgYmFja2dyb3VuZDogIzAwMzk3NTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICB9XG4gIC9kZWVwLy5hbnQtdGFibGUtdGJvZHkgPiB0ciA+IHRke1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYmFja2dyb3VuZDogIzAzMTUyZTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBib3JkZXI6IG5vbmU7XG4gIH1cbiAgL2RlZXAvLmFudC10YWJsZS10Ym9keXtcbiAgICAgID4gdHI6aG92ZXI6bm90KC5hbnQtdGFibGUtZXhwYW5kZWQtcm93KSA+IHRkLC5hbnQtdGFibGUtcm93LWhvdmVyLC5hbnQtdGFibGUtcm93LWhvdmVyPnRke1xuICAgICAgYmFja2dyb3VuZDojMDcyYzRlIWltcG9ydGFudDtcbiAgICB9XG4gIH1cbiAgL2RlZXAvLmFudC1zZWxlY3Qtc2luZ2xlOm5vdCguYW50LXNlbGVjdC1jdXN0b21pemUtaW5wdXQpIC5hbnQtc2VsZWN0LXNlbGVjdG9yLC9kZWVwLy5hbnQtcGFnaW5hdGlvbi1vcHRpb25zLXF1aWNrLWp1bXBlciBpbnB1dHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDMwNTBmIDtcbiAgICBjb2xvcjogI2I2YmRkNztcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyMjUsIDIyNSwgMjI1LCAwLjMpO1xuICB9XG4gIC9kZWVwLy5hbnQtc2VsZWN0LWFycm93e1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG5cbiAgL2RlZXAvLmFudC1yYWRpby1pbm5lcntcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICB9XG5cbiAgLy8gXG4gICNlcnJvckNvcnJlY3Rpb25Cb3ggL2RlZXAvLmFudC1wYWdpbmF0aW9uLW9wdGlvbnMtcXVpY2stanVtcGVyIGlucHV0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbiN1c2VySW1wb3J0VGFibGUgdHI6Zmlyc3QtY2hpbGR7XG4gICAgaGVpZ2h0OiA4MHB4O1xufVxuI3VzZXJJbXBvcnRUYWJsZSB0aGVhZCB0cntcbiAgICBoZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcbn1cblxuLmNsb3Nle1xuICAgIHdpZHRoOiAyNXB4O1xuICAgIGhlaWdodDogMjVweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYmFja2dyb3VuZDogI2JmYmZiZjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBsaW5lLWhlaWdodDogMjVweDtcbiAgICBjb2xvcjogIzAzMTEyOTtcbn1cblxuI21vZGFsLWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgei1pbmRleDogMTtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIGJveC1zaGFkb3c6IHJnYigyMiA2MiAxMjcpIDBweCAwcHggNjVweDtcbiAgfVxuICAjbW9kYWwtY29udGFpbmVyLm9uZSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoMC4wMSkgc2NhbGVYKDApO1xuICAgIGFuaW1hdGlvbjogdW5mb2xkSW4gMXMgY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjg0LCAwLjQ0LCAxKSBmb3J3YXJkcztcbiAgfVxuICAjbW9kYWwtY29udGFpbmVyLm9uZSAubW9kYWwtYmFja2dyb3VuZCAubW9kYWwge1xuICAgIHdpZHRoOiA2MCU7XG4gICAgaGVpZ2h0OiA5MCU7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICBhbmltYXRpb246IHpvb21JbiAwLjVzIDAuOHMgY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjg0LCAwLjQ0LCAxKSBmb3J3YXJkcztcbiAgfVxuICAjbW9kYWwtY29udGFpbmVyLm9uZS5vdXQge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgYW5pbWF0aW9uOiB1bmZvbGRPdXQgMXMgMC4zcyBjdWJpYy1iZXppZXIoMC4xNjUsIDAuODQsIDAuNDQsIDEpIGZvcndhcmRzO1xuICB9XG4gICNtb2RhbC1jb250YWluZXIub25lLm91dCAubW9kYWwtYmFja2dyb3VuZCAubW9kYWwge1xuICAgIGFuaW1hdGlvbjogem9vbU91dCAwLjVzIGN1YmljLWJlemllcigwLjE2NSwgMC44NCwgMC40NCwgMSkgZm9yd2FyZHM7XG4gIH1cbiAgI21vZGFsLWNvbnRhaW5lci50d28ge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbiAgI21vZGFsLWNvbnRhaW5lci50d28gLm1vZGFsLWJhY2tncm91bmQge1xuXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwKTtcbiAgICBhbmltYXRpb246IGZhZGVJbiAwLjVzIGN1YmljLWJlemllcigwLjE2NSwgMC44NCwgMC40NCwgMSkgZm9yd2FyZHM7XG4gIH1cbiAgI21vZGFsLWNvbnRhaW5lci50d28gLm1vZGFsLWJhY2tncm91bmQgLm1vZGFsIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIGFuaW1hdGlvbjogc2NhbGVVcCAwLjVzIGN1YmljLWJlemllcigwLjE2NSwgMC44NCwgMC40NCwgMSkgZm9yd2FyZHM7XG4gIH1cbiAgI21vZGFsLWNvbnRhaW5lci50d28gKyAuY29udGVudCB7XG4gICAgYW5pbWF0aW9uOiBzY2FsZUJhY2sgMC41cyBjdWJpYy1iZXppZXIoMC4xNjUsIDAuODQsIDAuNDQsIDEpIGZvcndhcmRzO1xuICB9XG4gICNtb2RhbC1jb250YWluZXIudHdvLm91dCB7XG4gICAgYW5pbWF0aW9uOiBxdWlja1NjYWxlRG93biAwcyAuNXMgbGluZWFyIGZvcndhcmRzO1xuICB9XG4gICNtb2RhbC1jb250YWluZXIudHdvLm91dCAubW9kYWwtYmFja2dyb3VuZCB7XG4gICAgYW5pbWF0aW9uOiBmYWRlT3V0IDAuNXMgY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjg0LCAwLjQ0LCAxKSBmb3J3YXJkcztcbiAgfVxuICAjbW9kYWwtY29udGFpbmVyLnR3by5vdXQgLm1vZGFsLWJhY2tncm91bmQgLm1vZGFsIHtcbiAgICBhbmltYXRpb246IHNjYWxlRG93biAwLjVzIGN1YmljLWJlemllcigwLjE2NSwgMC44NCwgMC40NCwgMSkgZm9yd2FyZHM7XG4gIH1cbiAgI21vZGFsLWNvbnRhaW5lci50d28ub3V0ICsgLmNvbnRlbnQge1xuICAgIGFuaW1hdGlvbjogc2NhbGVGb3J3YXJkIDAuNXMgY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjg0LCAwLjQ0LCAxKSBmb3J3YXJkcztcbiAgfVxuICAjbW9kYWwtY29udGFpbmVyLnRocmVlIHtcbiAgICB6LWluZGV4OiAwO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbiAgI21vZGFsLWNvbnRhaW5lci50aHJlZSAubW9kYWwtYmFja2dyb3VuZCB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjYpO1xuICB9XG4gICNtb2RhbC1jb250YWluZXIudGhyZWUgLm1vZGFsLWJhY2tncm91bmQgLm1vZGFsIHtcbiAgICBhbmltYXRpb246IG1vdmVVcCAwLjVzIGN1YmljLWJlemllcigwLjE2NSwgMC44NCwgMC40NCwgMSkgZm9yd2FyZHM7XG4gIH1cbiAgI21vZGFsLWNvbnRhaW5lci50aHJlZSArIC5jb250ZW50IHtcbiAgICB6LWluZGV4OiAxO1xuICAgIGFuaW1hdGlvbjogc2xpZGVVcExhcmdlIDAuNXMgY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjg0LCAwLjQ0LCAxKSBmb3J3YXJkcztcbiAgfVxuICAjbW9kYWwtY29udGFpbmVyLnRocmVlLm91dCAubW9kYWwtYmFja2dyb3VuZCAubW9kYWwge1xuICAgIGFuaW1hdGlvbjogbW92ZURvd24gMC41cyBjdWJpYy1iZXppZXIoMC4xNjUsIDAuODQsIDAuNDQsIDEpIGZvcndhcmRzO1xuICB9XG4gICNtb2RhbC1jb250YWluZXIudGhyZWUub3V0ICsgLmNvbnRlbnQge1xuICAgIGFuaW1hdGlvbjogc2xpZGVEb3duTGFyZ2UgMC41cyBjdWJpYy1iZXppZXIoMC4xNjUsIDAuODQsIDAuNDQsIDEpIGZvcndhcmRzO1xuICB9XG4gICNtb2RhbC1jb250YWluZXIuZm91ciB7XG4gICAgei1pbmRleDogMDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG4gICNtb2RhbC1jb250YWluZXIuZm91ciAubW9kYWwtYmFja2dyb3VuZCB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjcpO1xuICB9XG4gICNtb2RhbC1jb250YWluZXIuZm91ciAubW9kYWwtYmFja2dyb3VuZCAubW9kYWwge1xuICAgIGFuaW1hdGlvbjogYmxvd1VwTW9kYWwgMC41cyBjdWJpYy1iZXppZXIoMC4xNjUsIDAuODQsIDAuNDQsIDEpIGZvcndhcmRzO1xuICB9XG4gICNtb2RhbC1jb250YWluZXIuZm91ciArIC5jb250ZW50IHtcbiAgICB6LWluZGV4OiAxO1xuICAgIGFuaW1hdGlvbjogYmxvd1VwQ29udGVudCAwLjVzIGN1YmljLWJlemllcigwLjE2NSwgMC44NCwgMC40NCwgMSkgZm9yd2FyZHM7XG4gIH1cbiAgI21vZGFsLWNvbnRhaW5lci5mb3VyLm91dCAubW9kYWwtYmFja2dyb3VuZCAubW9kYWwge1xuICAgIGFuaW1hdGlvbjogYmxvd1VwTW9kYWxUd28gMC41cyBjdWJpYy1iZXppZXIoMC4xNjUsIDAuODQsIDAuNDQsIDEpIGZvcndhcmRzO1xuICB9XG4gICNtb2RhbC1jb250YWluZXIuZm91ci5vdXQgKyAuY29udGVudCB7XG4gICAgYW5pbWF0aW9uOiBibG93VXBDb250ZW50VHdvIDAuNXMgY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjg0LCAwLjQ0LCAxKSBmb3J3YXJkcztcbiAgfVxuICAjbW9kYWwtY29udGFpbmVyLmZpdmUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbiAgI21vZGFsLWNvbnRhaW5lci5maXZlIC5tb2RhbC1iYWNrZ3JvdW5kIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDApO1xuICAgIGFuaW1hdGlvbjogZmFkZUluIDAuNXMgY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjg0LCAwLjQ0LCAxKSBmb3J3YXJkcztcbiAgfVxuICAjbW9kYWwtY29udGFpbmVyLmZpdmUgLm1vZGFsLWJhY2tncm91bmQgLm1vZGFsIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTE1MDBweCk7XG4gICAgYW5pbWF0aW9uOiByb2FkUnVubmVySW4gMC4zcyBjdWJpYy1iZXppZXIoMC4xNjUsIDAuODQsIDAuNDQsIDEpIGZvcndhcmRzO1xuICB9XG4gICNtb2RhbC1jb250YWluZXIuZml2ZS5vdXQge1xuICAgIGFuaW1hdGlvbjogcXVpY2tTY2FsZURvd24gMHMgLjVzIGxpbmVhciBmb3J3YXJkcztcbiAgfVxuICAjbW9kYWwtY29udGFpbmVyLmZpdmUub3V0IC5tb2RhbC1iYWNrZ3JvdW5kIHtcbiAgICBhbmltYXRpb246IGZhZGVPdXQgMC41cyBjdWJpYy1iZXppZXIoMC4xNjUsIDAuODQsIDAuNDQsIDEpIGZvcndhcmRzO1xuICB9XG4gICNtb2RhbC1jb250YWluZXIuZml2ZS5vdXQgLm1vZGFsLWJhY2tncm91bmQgLm1vZGFsIHtcbiAgICBhbmltYXRpb246IHJvYWRSdW5uZXJPdXQgMC41cyBjdWJpYy1iZXppZXIoMC4xNjUsIDAuODQsIDAuNDQsIDEpIGZvcndhcmRzO1xuICB9XG4gICNtb2RhbC1jb250YWluZXIuc2l4IHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG4gICNtb2RhbC1jb250YWluZXIuc2l4IC5tb2RhbC1iYWNrZ3JvdW5kIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDApO1xuICAgIGFuaW1hdGlvbjogZmFkZUluIDAuNXMgY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjg0LCAwLjQ0LCAxKSBmb3J3YXJkcztcbiAgfVxuICAjbW9kYWwtY29udGFpbmVyLnNpeCAubW9kYWwtYmFja2dyb3VuZCAubW9kYWwge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGFuaW1hdGlvbjogbW9kYWxGYWRlSW4gMC41cyAwLjhzIGN1YmljLWJlemllcigwLjE2NSwgMC44NCwgMC40NCwgMSkgZm9yd2FyZHM7XG4gIH1cbiAgI21vZGFsLWNvbnRhaW5lci5zaXggLm1vZGFsLWJhY2tncm91bmQgLm1vZGFsIGgyLCAjbW9kYWwtY29udGFpbmVyLnNpeCAubW9kYWwtYmFja2dyb3VuZCAubW9kYWwgcCB7XG4gICAgb3BhY2l0eTogMDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYW5pbWF0aW9uOiBtb2RhbENvbnRlbnRGYWRlSW4gMC41cyAxcyBjdWJpYy1iZXppZXIoMC4xNjUsIDAuODQsIDAuNDQsIDEpIGZvcndhcmRzO1xuICB9XG4gICNtb2RhbC1jb250YWluZXIuc2l4IC5tb2RhbC1iYWNrZ3JvdW5kIC5tb2RhbCAubW9kYWwtc3ZnIHJlY3Qge1xuICAgIGFuaW1hdGlvbjogc2tldGNoSW4gMC41cyAwLjNzIGN1YmljLWJlemllcigwLjE2NSwgMC44NCwgMC40NCwgMSkgZm9yd2FyZHM7XG4gIH1cbiAgI21vZGFsLWNvbnRhaW5lci5zaXgub3V0IHtcbiAgICBhbmltYXRpb246IHF1aWNrU2NhbGVEb3duIDBzIC41cyBsaW5lYXIgZm9yd2FyZHM7XG4gIH1cbiAgI21vZGFsLWNvbnRhaW5lci5zaXgub3V0IC5tb2RhbC1iYWNrZ3JvdW5kIHtcbiAgICBhbmltYXRpb246IGZhZGVPdXQgMC41cyBjdWJpYy1iZXppZXIoMC4xNjUsIDAuODQsIDAuNDQsIDEpIGZvcndhcmRzO1xuICB9XG4gICNtb2RhbC1jb250YWluZXIuc2l4Lm91dCAubW9kYWwtYmFja2dyb3VuZCAubW9kYWwge1xuICAgIGFuaW1hdGlvbjogbW9kYWxGYWRlT3V0IDAuNXMgY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjg0LCAwLjQ0LCAxKSBmb3J3YXJkcztcbiAgfVxuICAjbW9kYWwtY29udGFpbmVyLnNpeC5vdXQgLm1vZGFsLWJhY2tncm91bmQgLm1vZGFsIGgyLCAjbW9kYWwtY29udGFpbmVyLnNpeC5vdXQgLm1vZGFsLWJhY2tncm91bmQgLm1vZGFsIHAge1xuICAgIGFuaW1hdGlvbjogbW9kYWxDb250ZW50RmFkZU91dCAwLjVzIGN1YmljLWJlemllcigwLjE2NSwgMC44NCwgMC40NCwgMSkgZm9yd2FyZHM7XG4gIH1cbiAgI21vZGFsLWNvbnRhaW5lci5zaXgub3V0IC5tb2RhbC1iYWNrZ3JvdW5kIC5tb2RhbCAubW9kYWwtc3ZnIHJlY3Qge1xuICAgIGFuaW1hdGlvbjogc2tldGNoT3V0IDAuNXMgY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjg0LCAwLjQ0LCAxKSBmb3J3YXJkcztcbiAgfVxuICAjbW9kYWwtY29udGFpbmVyLnNldmVuIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG4gICNtb2RhbC1jb250YWluZXIuc2V2ZW4gLm1vZGFsLWJhY2tncm91bmQge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMCk7XG4gICAgYW5pbWF0aW9uOiBmYWRlSW4gMC41cyBjdWJpYy1iZXppZXIoMC4xNjUsIDAuODQsIDAuNDQsIDEpIGZvcndhcmRzO1xuICB9XG4gICNtb2RhbC1jb250YWluZXIuc2V2ZW4gLm1vZGFsLWJhY2tncm91bmQgLm1vZGFsIHtcbiAgICBoZWlnaHQ6IDc1cHg7XG4gICAgd2lkdGg6IDc1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNzVweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGFuaW1hdGlvbjogYm9uZEphbWVzQm9uZCAxLjVzIGN1YmljLWJlemllcigwLjE2NSwgMC44NCwgMC40NCwgMSkgZm9yd2FyZHM7XG4gIH1cbiAgI21vZGFsLWNvbnRhaW5lci5zZXZlbiAubW9kYWwtYmFja2dyb3VuZCAubW9kYWwgaDIsICNtb2RhbC1jb250YWluZXIuc2V2ZW4gLm1vZGFsLWJhY2tncm91bmQgLm1vZGFsIHAge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGFuaW1hdGlvbjogbW9kYWxDb250ZW50RmFkZUluIC41cyAxLjRzIGxpbmVhciBmb3J3YXJkcztcbiAgfVxuICAjbW9kYWwtY29udGFpbmVyLnNldmVuLm91dCB7XG4gICAgYW5pbWF0aW9uOiBzbG93RmFkZSAuNXMgMS41cyBsaW5lYXIgZm9yd2FyZHM7XG4gIH1cbiAgI21vZGFsLWNvbnRhaW5lci5zZXZlbi5vdXQgLm1vZGFsLWJhY2tncm91bmQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgICBhbmltYXRpb246IGZhZGVUb1JlZCAycyBjdWJpYy1iZXppZXIoMC4xNjUsIDAuODQsIDAuNDQsIDEpIGZvcndhcmRzO1xuICB9XG4gICNtb2RhbC1jb250YWluZXIuc2V2ZW4ub3V0IC5tb2RhbC1iYWNrZ3JvdW5kIC5tb2RhbCB7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGhlaWdodDogMTYycHg7XG4gICAgd2lkdGg6IDIyN3B4O1xuICAgIGFuaW1hdGlvbjoga2lsbFNob3QgMXMgY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjg0LCAwLjQ0LCAxKSBmb3J3YXJkcztcbiAgfVxuICAjbW9kYWwtY29udGFpbmVyLnNldmVuLm91dCAubW9kYWwtYmFja2dyb3VuZCAubW9kYWwgaDIsICNtb2RhbC1jb250YWluZXIuc2V2ZW4ub3V0IC5tb2RhbC1iYWNrZ3JvdW5kIC5tb2RhbCBwIHtcbiAgICBhbmltYXRpb246IG1vZGFsQ29udGVudEZhZGVPdXQgMC41cyAwLjUgY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjg0LCAwLjQ0LCAxKSBmb3J3YXJkcztcbiAgfVxuICAjbW9kYWwtY29udGFpbmVyIC5tb2RhbC1iYWNrZ3JvdW5kIHtcbiAgICAgIFxuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB9XG4gICNtb2RhbC1jb250YWluZXIgLm1vZGFsLWJhY2tncm91bmQgLm1vZGFsIHtcbiAgICBiYWNrZ3JvdW5kOiAjMDMxMTI5O1xuICAgIC8qIHBhZGRpbmc6IDUwcHg7ICovXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgI21vZGFsLWNvbnRhaW5lciAubW9kYWwtYmFja2dyb3VuZCAubW9kYWwgaDIge1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBsaW5lLWhlaWdodDogMjVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICB9XG4gICNtb2RhbC1jb250YWluZXIgLm1vZGFsLWJhY2tncm91bmQgLm1vZGFsIHAge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgfVxuICAjbW9kYWwtY29udGFpbmVyIC5tb2RhbC1iYWNrZ3JvdW5kIC5tb2RhbCAubW9kYWwtc3ZnIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgfVxuICAjbW9kYWwtY29udGFpbmVyIC5tb2RhbC1iYWNrZ3JvdW5kIC5tb2RhbCAubW9kYWwtc3ZnIHJlY3Qge1xuICAgIHN0cm9rZTogI2ZmZjtcbiAgICBzdHJva2Utd2lkdGg6IDJweDtcbiAgICBzdHJva2UtZGFzaGFycmF5OiA3Nzg7XG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDc3ODtcbiAgfVxuICBcbiBcbiAgXG4gIEBrZXlmcmFtZXMgdW5mb2xkSW4ge1xuICAgIDAlIHtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGVZKDAuMDA1KSBzY2FsZVgoMCk7XG4gICAgfVxuICAgIDUwJSB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlWSgwLjAwNSkgc2NhbGVYKDEpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGVZKDEpIHNjYWxlWCgxKTtcbiAgICB9XG4gIH1cbiAgQGtleWZyYW1lcyB1bmZvbGRPdXQge1xuICAgIDAlIHtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGVZKDEpIHNjYWxlWCgxKTtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGVZKDAuMDA1KSBzY2FsZVgoMSk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZVkoMC4wMDUpIHNjYWxlWCgwKTtcbiAgICB9XG4gIH1cbiAgQGtleWZyYW1lcyB6b29tSW4ge1xuICAgIDAlIHtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB9XG4gIH1cbiAgQGtleWZyYW1lcyB6b29tT3V0IHtcbiAgICAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgfVxuICB9XG4gIEBrZXlmcmFtZXMgZmFkZUluIHtcbiAgICAwJSB7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDApO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgICB9XG4gIH1cbiAgQGtleWZyYW1lcyBmYWRlT3V0IHtcbiAgICAwJSB7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwKTtcbiAgICB9XG4gIH1cbiAgQGtleWZyYW1lcyBzY2FsZVVwIHtcbiAgICAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOCkgdHJhbnNsYXRlWSgxMDAwcHgpO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpIHRyYW5zbGF0ZVkoMHB4KTtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICB9XG4gIEBrZXlmcmFtZXMgc2NhbGVEb3duIHtcbiAgICAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpIHRyYW5zbGF0ZVkoMHB4KTtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpIHRyYW5zbGF0ZVkoMTAwMHB4KTtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICB9XG4gIEBrZXlmcmFtZXMgc2NhbGVCYWNrIHtcbiAgICAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC44NSk7XG4gICAgfVxuICB9XG4gIEBrZXlmcmFtZXMgc2NhbGVGb3J3YXJkIHtcbiAgICAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuODUpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgfVxuICB9XG4gIEBrZXlmcmFtZXMgcXVpY2tTY2FsZURvd24ge1xuICAgIDAlIHtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgfVxuICAgIDk5LjklIHtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICB9XG4gIH1cbiAgQGtleWZyYW1lcyBzbGlkZVVwTGFyZ2Uge1xuICAgIDAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcbiAgICB9XG4gIH1cbiAgQGtleWZyYW1lcyBzbGlkZURvd25MYXJnZSB7XG4gICAgMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xuICAgIH1cbiAgfVxuICBAa2V5ZnJhbWVzIG1vdmVVcCB7XG4gICAgMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDE1MHB4KTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgfVxuICB9XG4gIEBrZXlmcmFtZXMgbW92ZURvd24ge1xuICAgIDAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxNTBweCk7XG4gICAgfVxuICB9XG4gIEBrZXlmcmFtZXMgYmxvd1VwQ29udGVudCB7XG4gICAgMCUge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICAgIDk5LjklIHtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMik7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgfVxuICB9XG4gIEBrZXlmcmFtZXMgYmxvd1VwQ29udGVudFR3byB7XG4gICAgMCUge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgyKTtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICB9XG4gIEBrZXlmcmFtZXMgYmxvd1VwTW9kYWwge1xuICAgIDAlIHtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB9XG4gIH1cbiAgQGtleWZyYW1lcyBibG93VXBNb2RhbFR3byB7XG4gICAgMCUge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICB9XG4gIEBrZXlmcmFtZXMgcm9hZFJ1bm5lckluIHtcbiAgICAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTE1MDBweCkgc2tld1goMzBkZWcpIHNjYWxlWCgxLjMpO1xuICAgIH1cbiAgICA3MCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDMwcHgpIHNrZXdYKDBkZWcpIHNjYWxlWCgwLjkpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpIHNrZXdYKDBkZWcpIHNjYWxlWCgxKTtcbiAgICB9XG4gIH1cbiAgQGtleWZyYW1lcyByb2FkUnVubmVyT3V0IHtcbiAgICAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KSBza2V3WCgwZGVnKSBzY2FsZVgoMSk7XG4gICAgfVxuICAgIDMwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTMwcHgpIHNrZXdYKC01ZGVnKSBzY2FsZVgoMC45KTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTUwMHB4KSBza2V3WCgzMGRlZykgc2NhbGVYKDEuMyk7XG4gICAgfVxuICB9XG4gIEBrZXlmcmFtZXMgc2tldGNoSW4ge1xuICAgIDAlIHtcbiAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiA3Nzg7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7XG4gICAgfVxuICB9XG4gIEBrZXlmcmFtZXMgc2tldGNoT3V0IHtcbiAgICAwJSB7XG4gICAgICBzdHJva2UtZGFzaG9mZnNldDogMDtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICBzdHJva2UtZGFzaG9mZnNldDogNzc4O1xuICAgIH1cbiAgfVxuICBAa2V5ZnJhbWVzIG1vZGFsRmFkZUluIHtcbiAgICAwJSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICB9XG4gIH1cbiAgQGtleWZyYW1lcyBtb2RhbEZhZGVPdXQge1xuICAgIDAlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIH1cbiAgfVxuICBAa2V5ZnJhbWVzIG1vZGFsQ29udGVudEZhZGVJbiB7XG4gICAgMCUge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHRvcDogLTIwcHg7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIHRvcDogMDtcbiAgICB9XG4gIH1cbiAgQGtleWZyYW1lcyBtb2RhbENvbnRlbnRGYWRlT3V0IHtcbiAgICAwJSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgdG9wOiAwcHg7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHRvcDogLTIwcHg7XG4gICAgfVxuICB9XG4gIEBrZXlmcmFtZXMgYm9uZEphbWVzQm9uZCB7XG4gICAgMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMDBweCk7XG4gICAgfVxuICAgIDgwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDc1cHg7XG4gICAgICBoZWlnaHQ6IDc1cHg7XG4gICAgICB3aWR0aDogNzVweDtcbiAgICB9XG4gICAgOTAlIHtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgIGhlaWdodDogMTgycHg7XG4gICAgICB3aWR0aDogMjQ3cHg7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgaGVpZ2h0OiAxNjJweDtcbiAgICAgIHdpZHRoOiAyMjdweDtcbiAgICB9XG4gIH1cbiAgQGtleWZyYW1lcyBraWxsU2hvdCB7XG4gICAgMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHJvdGF0ZSgwZGVnKTtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDMwMHB4KSByb3RhdGUoNDVkZWcpO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gIH1cbiAgQGtleWZyYW1lcyBmYWRlVG9SZWQge1xuICAgIDAlIHtcbiAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIHJnYmEoMjAxLCAyNCwgMjQsIDAuOCk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAyMDAwcHggMCByZ2JhKDIwMSwgMjQsIDI0LCAwLjgpO1xuICAgIH1cbiAgfVxuICBAa2V5ZnJhbWVzIHNsb3dGYWRlIHtcbiAgICAwJSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgICA5OS45JSB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgIH1cbiAgfSIsIi5kaWdpdGFsIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogNDBweCBhdXRvIDA7XG59XG4uZGlnaXRhbCAuZGlnaXRhbC1mb3JtIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQwcHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5kaWdpdGFsIC5kaWdpdGFsLWZvcm0gc3BhbiB7XG4gIGNvbG9yOiAjODM4NWI0O1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG4uZGlnaXRhbCAuZGlnaXRhbC1mb3JtIC5kaWdpdGFsLWZvcm0tc3RhdHVzIHtcbiAgZmxleDogMCAwIDQ1JTtcbn1cbi5kaWdpdGFsIC5kaWdpdGFsLWZvcm0gLmRpZ2l0YWwtZm9ybS1zdGF0dXMgbnotc2VsZWN0IHtcbiAgd2lkdGg6IDEyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDMxNTJFO1xufVxuLm1vZGFsLWRldGFpbGUge1xuICBkaXNwbGF5OiBub25lO1xuICB3aWR0aDogNDAwcHg7XG4gIGhlaWdodDogOTAlO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAtMjAwcHg7XG4gIHRvcDogNDBweDtcbiAgYm94LXNoYWRvdzogcmdiKDIyIDYyIDEyNykgMHB4IDBweCA2NXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLm1vZGFsLWRldGFpbGUgLmRldGFpbGUtdGl0bGUge1xuICBoZWlnaHQ6IDUlO1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6ICMwMzE1MmU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5tb2RhbC1kZXRhaWxlIC5kZWF0aWxlLWNvbnRlbnQge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICMwMzE1MmU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG4ubW9kYWwtZGV0YWlsZSAuZGVhdGlsZS1jb250ZW50ID4gdWwgPiBsaSB7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG59XG4ubW9kYWwtZGV0YWlsZSAuZGVhdGlsZS1jb250ZW50ID4gdWwgPiBsaSBpbWcge1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMjAwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuLm1vZGFsLWRldGFpbGUgLmRlYXRpbGUtY29udGVudCAuZGV0YWlsZS1idG4ge1xuICBmbGV4OiAwIDAgMTAwJTtcbiAgaGVpZ2h0OiAxMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5tb2RhbC1kZXRhaWxlIC5kZWF0aWxlLWNvbnRlbnQgLmRldGFpbGUtYnRuIGJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG4uZGlnaXRhbFRpdGxlIHtcbiAgaGVpZ2h0OiA2MHB4O1xuICBsaW5lLWhlaWdodDogNjBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLkNBQnV0dG9uUyB7XG4gIG1hcmdpbjogMjBweCAwO1xufVxudGFibGUuZGF0YVRhYmxlIHRib2R5IHRyLFxuLnJlc2VhY2hJcHV0LFxuI3RhYmxlc0xlbmd0aCA+IGxhYmVsID4gc2VsZWN0LFxuI3RhYmxlc1BhZ2VpbmF0ZSAucGFnZWluYXRlQnRuIHtcbiAgYmFja2dyb3VuZDogIzAzMTUyRTtcbn1cbi5yZXF1ZXN0QnRuIHtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xuICBtYXJnaW4tbGVmdDogMTZweDtcbn1cbiN1c2VySW1wb3J0VGFibGUge1xuICBiYWNrZ3JvdW5kOiAjMDAzOTc1O1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiBub25lIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDIwcHggMDtcbn1cbi5wYWdpbmF0aW9uIHtcbiAgcGFkZGluZzogMTBweDtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuIC9kZWVwLyAuYW50LXBhZ2luYXRpb24taXRlbS1lbGxpcHNpcyB7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG4gL2RlZXAvIC5hbnQtcGFnaW5hdGlvbiB7XG4gIGNvbG9yOiAjZmZmO1xufVxuIC9kZWVwLyAuYW50LXBhZ2luYXRpb24tcHJldiBhLFxuIC9kZWVwLyAuYW50LXBhZ2luYXRpb24tbmV4dCBhLFxuIC9kZWVwLyAuYW50LXBhZ2luYXRpb24taXRlbSBhIHtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn1cbiAvZGVlcC8gLmFudC1wYWdpbmF0aW9uLXByZXYgYTpob3ZlcixcbiAvZGVlcC8gLmFudC1wYWdpbmF0aW9uLW5leHQgYTpob3ZlcixcbiAvZGVlcC8gLmFudC1wYWdpbmF0aW9uLWl0ZW0gYTpob3ZlciB7XG4gIGNvbG9yOiAjMTg5MGZmICFpbXBvcnRhbnQ7XG59XG4gL2RlZXAvIC5hbnQtcGFnaW5hdGlvbi1pdGVtLWFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICMwNTg5ZTA7XG59XG4gL2RlZXAvIC5hbnQtdGFibGUtdGhlYWQgPiB0ciA+IHRoIHtcbiAgYmFja2dyb3VuZDogIzAwMzk3NTtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4gL2RlZXAvIC5hbnQtdGFibGUtdGJvZHkgPiB0ciA+IHRkIHtcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZDogIzAzMTUyZTtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogbm9uZTtcbn1cbiAvZGVlcC8gLmFudC10YWJsZS10Ym9keSA+IHRyOmhvdmVyOm5vdCguYW50LXRhYmxlLWV4cGFuZGVkLXJvdykgPiB0ZCxcbiAvZGVlcC8gLmFudC10YWJsZS10Ym9keSAuYW50LXRhYmxlLXJvdy1ob3ZlcixcbiAvZGVlcC8gLmFudC10YWJsZS10Ym9keSAuYW50LXRhYmxlLXJvdy1ob3ZlciA+IHRkIHtcbiAgYmFja2dyb3VuZDogIzA3MmM0ZSAhaW1wb3J0YW50O1xufVxuIC9kZWVwLyAuYW50LXNlbGVjdC1zaW5nbGU6bm90KC5hbnQtc2VsZWN0LWN1c3RvbWl6ZS1pbnB1dCkgLmFudC1zZWxlY3Qtc2VsZWN0b3IsXG4gL2RlZXAvIC5hbnQtcGFnaW5hdGlvbi1vcHRpb25zLXF1aWNrLWp1bXBlciBpbnB1dCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMzA1MGY7XG4gIGNvbG9yOiAjYjZiZGQ3O1xuICBmb250LXNpemU6IDExcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyMjUsIDIyNSwgMjI1LCAwLjMpO1xufVxuIC9kZWVwLyAuYW50LXNlbGVjdC1hcnJvdyB7XG4gIGNvbG9yOiAjZmZmO1xufVxuIC9kZWVwLyAuYW50LXJhZGlvLWlubmVyIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn1cbiNlcnJvckNvcnJlY3Rpb25Cb3ggL2RlZXAvIC5hbnQtcGFnaW5hdGlvbi1vcHRpb25zLXF1aWNrLWp1bXBlciBpbnB1dCB7XG4gIGJhY2tncm91bmQtY29sb3I6IG5vbmUgIWltcG9ydGFudDtcbn1cbiN1c2VySW1wb3J0VGFibGUgdHI6Zmlyc3QtY2hpbGQge1xuICBoZWlnaHQ6IDgwcHg7XG59XG4jdXNlckltcG9ydFRhYmxlIHRoZWFkIHRyIHtcbiAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XG59XG4uY2xvc2Uge1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQ6ICNiZmJmYmY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICBjb2xvcjogIzAzMTEyOTtcbn1cbiNtb2RhbC1jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIG1hcmdpbjogYXV0bztcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgei1pbmRleDogMTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgYm94LXNoYWRvdzogcmdiKDIyIDYyIDEyNykgMHB4IDBweCA2NXB4O1xufVxuI21vZGFsLWNvbnRhaW5lci5vbmUge1xuICB0cmFuc2Zvcm06IHNjYWxlWSgwLjAxKSBzY2FsZVgoMCk7XG4gIGFuaW1hdGlvbjogdW5mb2xkSW4gMXMgY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjg0LCAwLjQ0LCAxKSBmb3J3YXJkcztcbn1cbiNtb2RhbC1jb250YWluZXIub25lIC5tb2RhbC1iYWNrZ3JvdW5kIC5tb2RhbCB7XG4gIHdpZHRoOiA2MCU7XG4gIGhlaWdodDogOTAlO1xuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICBhbmltYXRpb246IHpvb21JbiAwLjVzIDAuOHMgY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjg0LCAwLjQ0LCAxKSBmb3J3YXJkcztcbn1cbiNtb2RhbC1jb250YWluZXIub25lLm91dCB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIGFuaW1hdGlvbjogdW5mb2xkT3V0IDFzIDAuM3MgY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjg0LCAwLjQ0LCAxKSBmb3J3YXJkcztcbn1cbiNtb2RhbC1jb250YWluZXIub25lLm91dCAubW9kYWwtYmFja2dyb3VuZCAubW9kYWwge1xuICBhbmltYXRpb246IHpvb21PdXQgMC41cyBjdWJpYy1iZXppZXIoMC4xNjUsIDAuODQsIDAuNDQsIDEpIGZvcndhcmRzO1xufVxuI21vZGFsLWNvbnRhaW5lci50d28ge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xufVxuI21vZGFsLWNvbnRhaW5lci50d28gLm1vZGFsLWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDApO1xuICBhbmltYXRpb246IGZhZGVJbiAwLjVzIGN1YmljLWJlemllcigwLjE2NSwgMC44NCwgMC40NCwgMSkgZm9yd2FyZHM7XG59XG4jbW9kYWwtY29udGFpbmVyLnR3byAubW9kYWwtYmFja2dyb3VuZCAubW9kYWwge1xuICBvcGFjaXR5OiAwO1xuICBhbmltYXRpb246IHNjYWxlVXAgMC41cyBjdWJpYy1iZXppZXIoMC4xNjUsIDAuODQsIDAuNDQsIDEpIGZvcndhcmRzO1xufVxuI21vZGFsLWNvbnRhaW5lci50d28gKyAuY29udGVudCB7XG4gIGFuaW1hdGlvbjogc2NhbGVCYWNrIDAuNXMgY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjg0LCAwLjQ0LCAxKSBmb3J3YXJkcztcbn1cbiNtb2RhbC1jb250YWluZXIudHdvLm91dCB7XG4gIGFuaW1hdGlvbjogcXVpY2tTY2FsZURvd24gMHMgMC41cyBsaW5lYXIgZm9yd2FyZHM7XG59XG4jbW9kYWwtY29udGFpbmVyLnR3by5vdXQgLm1vZGFsLWJhY2tncm91bmQge1xuICBhbmltYXRpb246IGZhZGVPdXQgMC41cyBjdWJpYy1iZXppZXIoMC4xNjUsIDAuODQsIDAuNDQsIDEpIGZvcndhcmRzO1xufVxuI21vZGFsLWNvbnRhaW5lci50d28ub3V0IC5tb2RhbC1iYWNrZ3JvdW5kIC5tb2RhbCB7XG4gIGFuaW1hdGlvbjogc2NhbGVEb3duIDAuNXMgY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjg0LCAwLjQ0LCAxKSBmb3J3YXJkcztcbn1cbiNtb2RhbC1jb250YWluZXIudHdvLm91dCArIC5jb250ZW50IHtcbiAgYW5pbWF0aW9uOiBzY2FsZUZvcndhcmQgMC41cyBjdWJpYy1iZXppZXIoMC4xNjUsIDAuODQsIDAuNDQsIDEpIGZvcndhcmRzO1xufVxuI21vZGFsLWNvbnRhaW5lci50aHJlZSB7XG4gIHotaW5kZXg6IDA7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG59XG4jbW9kYWwtY29udGFpbmVyLnRocmVlIC5tb2RhbC1iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjYpO1xufVxuI21vZGFsLWNvbnRhaW5lci50aHJlZSAubW9kYWwtYmFja2dyb3VuZCAubW9kYWwge1xuICBhbmltYXRpb246IG1vdmVVcCAwLjVzIGN1YmljLWJlemllcigwLjE2NSwgMC44NCwgMC40NCwgMSkgZm9yd2FyZHM7XG59XG4jbW9kYWwtY29udGFpbmVyLnRocmVlICsgLmNvbnRlbnQge1xuICB6LWluZGV4OiAxO1xuICBhbmltYXRpb246IHNsaWRlVXBMYXJnZSAwLjVzIGN1YmljLWJlemllcigwLjE2NSwgMC44NCwgMC40NCwgMSkgZm9yd2FyZHM7XG59XG4jbW9kYWwtY29udGFpbmVyLnRocmVlLm91dCAubW9kYWwtYmFja2dyb3VuZCAubW9kYWwge1xuICBhbmltYXRpb246IG1vdmVEb3duIDAuNXMgY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjg0LCAwLjQ0LCAxKSBmb3J3YXJkcztcbn1cbiNtb2RhbC1jb250YWluZXIudGhyZWUub3V0ICsgLmNvbnRlbnQge1xuICBhbmltYXRpb246IHNsaWRlRG93bkxhcmdlIDAuNXMgY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjg0LCAwLjQ0LCAxKSBmb3J3YXJkcztcbn1cbiNtb2RhbC1jb250YWluZXIuZm91ciB7XG4gIHotaW5kZXg6IDA7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG59XG4jbW9kYWwtY29udGFpbmVyLmZvdXIgLm1vZGFsLWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG59XG4jbW9kYWwtY29udGFpbmVyLmZvdXIgLm1vZGFsLWJhY2tncm91bmQgLm1vZGFsIHtcbiAgYW5pbWF0aW9uOiBibG93VXBNb2RhbCAwLjVzIGN1YmljLWJlemllcigwLjE2NSwgMC44NCwgMC40NCwgMSkgZm9yd2FyZHM7XG59XG4jbW9kYWwtY29udGFpbmVyLmZvdXIgKyAuY29udGVudCB7XG4gIHotaW5kZXg6IDE7XG4gIGFuaW1hdGlvbjogYmxvd1VwQ29udGVudCAwLjVzIGN1YmljLWJlemllcigwLjE2NSwgMC44NCwgMC40NCwgMSkgZm9yd2FyZHM7XG59XG4jbW9kYWwtY29udGFpbmVyLmZvdXIub3V0IC5tb2RhbC1iYWNrZ3JvdW5kIC5tb2RhbCB7XG4gIGFuaW1hdGlvbjogYmxvd1VwTW9kYWxUd28gMC41cyBjdWJpYy1iZXppZXIoMC4xNjUsIDAuODQsIDAuNDQsIDEpIGZvcndhcmRzO1xufVxuI21vZGFsLWNvbnRhaW5lci5mb3VyLm91dCArIC5jb250ZW50IHtcbiAgYW5pbWF0aW9uOiBibG93VXBDb250ZW50VHdvIDAuNXMgY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjg0LCAwLjQ0LCAxKSBmb3J3YXJkcztcbn1cbiNtb2RhbC1jb250YWluZXIuZml2ZSB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG59XG4jbW9kYWwtY29udGFpbmVyLmZpdmUgLm1vZGFsLWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDApO1xuICBhbmltYXRpb246IGZhZGVJbiAwLjVzIGN1YmljLWJlemllcigwLjE2NSwgMC44NCwgMC40NCwgMSkgZm9yd2FyZHM7XG59XG4jbW9kYWwtY29udGFpbmVyLmZpdmUgLm1vZGFsLWJhY2tncm91bmQgLm1vZGFsIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xNTAwcHgpO1xuICBhbmltYXRpb246IHJvYWRSdW5uZXJJbiAwLjNzIGN1YmljLWJlemllcigwLjE2NSwgMC44NCwgMC40NCwgMSkgZm9yd2FyZHM7XG59XG4jbW9kYWwtY29udGFpbmVyLmZpdmUub3V0IHtcbiAgYW5pbWF0aW9uOiBxdWlja1NjYWxlRG93biAwcyAwLjVzIGxpbmVhciBmb3J3YXJkcztcbn1cbiNtb2RhbC1jb250YWluZXIuZml2ZS5vdXQgLm1vZGFsLWJhY2tncm91bmQge1xuICBhbmltYXRpb246IGZhZGVPdXQgMC41cyBjdWJpYy1iZXppZXIoMC4xNjUsIDAuODQsIDAuNDQsIDEpIGZvcndhcmRzO1xufVxuI21vZGFsLWNvbnRhaW5lci5maXZlLm91dCAubW9kYWwtYmFja2dyb3VuZCAubW9kYWwge1xuICBhbmltYXRpb246IHJvYWRSdW5uZXJPdXQgMC41cyBjdWJpYy1iZXppZXIoMC4xNjUsIDAuODQsIDAuNDQsIDEpIGZvcndhcmRzO1xufVxuI21vZGFsLWNvbnRhaW5lci5zaXgge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xufVxuI21vZGFsLWNvbnRhaW5lci5zaXggLm1vZGFsLWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDApO1xuICBhbmltYXRpb246IGZhZGVJbiAwLjVzIGN1YmljLWJlemllcigwLjE2NSwgMC44NCwgMC40NCwgMSkgZm9yd2FyZHM7XG59XG4jbW9kYWwtY29udGFpbmVyLnNpeCAubW9kYWwtYmFja2dyb3VuZCAubW9kYWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYW5pbWF0aW9uOiBtb2RhbEZhZGVJbiAwLjVzIDAuOHMgY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjg0LCAwLjQ0LCAxKSBmb3J3YXJkcztcbn1cbiNtb2RhbC1jb250YWluZXIuc2l4IC5tb2RhbC1iYWNrZ3JvdW5kIC5tb2RhbCBoMixcbiNtb2RhbC1jb250YWluZXIuc2l4IC5tb2RhbC1iYWNrZ3JvdW5kIC5tb2RhbCBwIHtcbiAgb3BhY2l0eTogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBhbmltYXRpb246IG1vZGFsQ29udGVudEZhZGVJbiAwLjVzIDFzIGN1YmljLWJlemllcigwLjE2NSwgMC44NCwgMC40NCwgMSkgZm9yd2FyZHM7XG59XG4jbW9kYWwtY29udGFpbmVyLnNpeCAubW9kYWwtYmFja2dyb3VuZCAubW9kYWwgLm1vZGFsLXN2ZyByZWN0IHtcbiAgYW5pbWF0aW9uOiBza2V0Y2hJbiAwLjVzIDAuM3MgY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjg0LCAwLjQ0LCAxKSBmb3J3YXJkcztcbn1cbiNtb2RhbC1jb250YWluZXIuc2l4Lm91dCB7XG4gIGFuaW1hdGlvbjogcXVpY2tTY2FsZURvd24gMHMgMC41cyBsaW5lYXIgZm9yd2FyZHM7XG59XG4jbW9kYWwtY29udGFpbmVyLnNpeC5vdXQgLm1vZGFsLWJhY2tncm91bmQge1xuICBhbmltYXRpb246IGZhZGVPdXQgMC41cyBjdWJpYy1iZXppZXIoMC4xNjUsIDAuODQsIDAuNDQsIDEpIGZvcndhcmRzO1xufVxuI21vZGFsLWNvbnRhaW5lci5zaXgub3V0IC5tb2RhbC1iYWNrZ3JvdW5kIC5tb2RhbCB7XG4gIGFuaW1hdGlvbjogbW9kYWxGYWRlT3V0IDAuNXMgY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjg0LCAwLjQ0LCAxKSBmb3J3YXJkcztcbn1cbiNtb2RhbC1jb250YWluZXIuc2l4Lm91dCAubW9kYWwtYmFja2dyb3VuZCAubW9kYWwgaDIsXG4jbW9kYWwtY29udGFpbmVyLnNpeC5vdXQgLm1vZGFsLWJhY2tncm91bmQgLm1vZGFsIHAge1xuICBhbmltYXRpb246IG1vZGFsQ29udGVudEZhZGVPdXQgMC41cyBjdWJpYy1iZXppZXIoMC4xNjUsIDAuODQsIDAuNDQsIDEpIGZvcndhcmRzO1xufVxuI21vZGFsLWNvbnRhaW5lci5zaXgub3V0IC5tb2RhbC1iYWNrZ3JvdW5kIC5tb2RhbCAubW9kYWwtc3ZnIHJlY3Qge1xuICBhbmltYXRpb246IHNrZXRjaE91dCAwLjVzIGN1YmljLWJlemllcigwLjE2NSwgMC44NCwgMC40NCwgMSkgZm9yd2FyZHM7XG59XG4jbW9kYWwtY29udGFpbmVyLnNldmVuIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbn1cbiNtb2RhbC1jb250YWluZXIuc2V2ZW4gLm1vZGFsLWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDApO1xuICBhbmltYXRpb246IGZhZGVJbiAwLjVzIGN1YmljLWJlemllcigwLjE2NSwgMC44NCwgMC40NCwgMSkgZm9yd2FyZHM7XG59XG4jbW9kYWwtY29udGFpbmVyLnNldmVuIC5tb2RhbC1iYWNrZ3JvdW5kIC5tb2RhbCB7XG4gIGhlaWdodDogNzVweDtcbiAgd2lkdGg6IDc1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDc1cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGFuaW1hdGlvbjogYm9uZEphbWVzQm9uZCAxLjVzIGN1YmljLWJlemllcigwLjE2NSwgMC44NCwgMC40NCwgMSkgZm9yd2FyZHM7XG59XG4jbW9kYWwtY29udGFpbmVyLnNldmVuIC5tb2RhbC1iYWNrZ3JvdW5kIC5tb2RhbCBoMixcbiNtb2RhbC1jb250YWluZXIuc2V2ZW4gLm1vZGFsLWJhY2tncm91bmQgLm1vZGFsIHAge1xuICBvcGFjaXR5OiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGFuaW1hdGlvbjogbW9kYWxDb250ZW50RmFkZUluIDAuNXMgMS40cyBsaW5lYXIgZm9yd2FyZHM7XG59XG4jbW9kYWwtY29udGFpbmVyLnNldmVuLm91dCB7XG4gIGFuaW1hdGlvbjogc2xvd0ZhZGUgMC41cyAxLjVzIGxpbmVhciBmb3J3YXJkcztcbn1cbiNtb2RhbC1jb250YWluZXIuc2V2ZW4ub3V0IC5tb2RhbC1iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xuICBhbmltYXRpb246IGZhZGVUb1JlZCAycyBjdWJpYy1iZXppZXIoMC4xNjUsIDAuODQsIDAuNDQsIDEpIGZvcndhcmRzO1xufVxuI21vZGFsLWNvbnRhaW5lci5zZXZlbi5vdXQgLm1vZGFsLWJhY2tncm91bmQgLm1vZGFsIHtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBoZWlnaHQ6IDE2MnB4O1xuICB3aWR0aDogMjI3cHg7XG4gIGFuaW1hdGlvbjoga2lsbFNob3QgMXMgY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjg0LCAwLjQ0LCAxKSBmb3J3YXJkcztcbn1cbiNtb2RhbC1jb250YWluZXIuc2V2ZW4ub3V0IC5tb2RhbC1iYWNrZ3JvdW5kIC5tb2RhbCBoMixcbiNtb2RhbC1jb250YWluZXIuc2V2ZW4ub3V0IC5tb2RhbC1iYWNrZ3JvdW5kIC5tb2RhbCBwIHtcbiAgYW5pbWF0aW9uOiBtb2RhbENvbnRlbnRGYWRlT3V0IDAuNXMgMC41IGN1YmljLWJlemllcigwLjE2NSwgMC44NCwgMC40NCwgMSkgZm9yd2FyZHM7XG59XG4jbW9kYWwtY29udGFpbmVyIC5tb2RhbC1iYWNrZ3JvdW5kIHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjMpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4jbW9kYWwtY29udGFpbmVyIC5tb2RhbC1iYWNrZ3JvdW5kIC5tb2RhbCB7XG4gIGJhY2tncm91bmQ6ICMwMzExMjk7XG4gIC8qIHBhZGRpbmc6IDUwcHg7ICovXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuI21vZGFsLWNvbnRhaW5lciAubW9kYWwtYmFja2dyb3VuZCAubW9kYWwgaDIge1xuICBmb250LXNpemU6IDI1cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuI21vZGFsLWNvbnRhaW5lciAubW9kYWwtYmFja2dyb3VuZCAubW9kYWwgcCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG59XG4jbW9kYWwtY29udGFpbmVyIC5tb2RhbC1iYWNrZ3JvdW5kIC5tb2RhbCAubW9kYWwtc3ZnIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cbiNtb2RhbC1jb250YWluZXIgLm1vZGFsLWJhY2tncm91bmQgLm1vZGFsIC5tb2RhbC1zdmcgcmVjdCB7XG4gIHN0cm9rZTogI2ZmZjtcbiAgc3Ryb2tlLXdpZHRoOiAycHg7XG4gIHN0cm9rZS1kYXNoYXJyYXk6IDc3ODtcbiAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDc3ODtcbn1cbkBrZXlmcmFtZXMgdW5mb2xkSW4ge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoMC4wMDUpIHNjYWxlWCgwKTtcbiAgfVxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGVZKDAuMDA1KSBzY2FsZVgoMSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoMSkgc2NhbGVYKDEpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHVuZm9sZE91dCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgxKSBzY2FsZVgoMSk7XG4gIH1cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgwLjAwNSkgc2NhbGVYKDEpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGVZKDAuMDA1KSBzY2FsZVgoMCk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgem9vbUluIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxufVxuQGtleWZyYW1lcyB6b29tT3V0IHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgfVxufVxuQGtleWZyYW1lcyBmYWRlSW4ge1xuICAwJSB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwKTtcbiAgfVxuICAxMDAlIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZmFkZU91dCB7XG4gIDAlIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwKTtcbiAgfVxufVxuQGtleWZyYW1lcyBzY2FsZVVwIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC44KSB0cmFuc2xhdGVZKDEwMDBweCk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpIHRyYW5zbGF0ZVkoMHB4KTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHNjYWxlRG93biB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpIHRyYW5zbGF0ZVkoMHB4KTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC44KSB0cmFuc2xhdGVZKDEwMDBweCk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuQGtleWZyYW1lcyBzY2FsZUJhY2sge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuODUpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHNjYWxlRm9yd2FyZCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuODUpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgcXVpY2tTY2FsZURvd24ge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxuICA5OS45JSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHNsaWRlVXBMYXJnZSB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc2xpZGVEb3duTGFyZ2Uge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIG1vdmVVcCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTUwcHgpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgfVxufVxuQGtleWZyYW1lcyBtb3ZlRG93biB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTUwcHgpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGJsb3dVcENvbnRlbnQge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIDk5LjklIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDIpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgfVxufVxuQGtleWZyYW1lcyBibG93VXBDb250ZW50VHdvIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMik7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbkBrZXlmcmFtZXMgYmxvd1VwTW9kYWwge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGJsb3dVcE1vZGFsVHdvIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbkBrZXlmcmFtZXMgcm9hZFJ1bm5lckluIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTUwMHB4KSBza2V3WCgzMGRlZykgc2NhbGVYKDEuMyk7XG4gIH1cbiAgNzAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMzBweCkgc2tld1goMGRlZykgc2NhbGVYKDAuOSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCkgc2tld1goMGRlZykgc2NhbGVYKDEpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHJvYWRSdW5uZXJPdXQge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCkgc2tld1goMGRlZykgc2NhbGVYKDEpO1xuICB9XG4gIDMwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0zMHB4KSBza2V3WCgtNWRlZykgc2NhbGVYKDAuOSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE1MDBweCkgc2tld1goMzBkZWcpIHNjYWxlWCgxLjMpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHNrZXRjaEluIHtcbiAgMCUge1xuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiA3Nzg7XG4gIH1cbiAgMTAwJSB7XG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc2tldGNoT3V0IHtcbiAgMCUge1xuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiA3Nzg7XG4gIH1cbn1cbkBrZXlmcmFtZXMgbW9kYWxGYWRlSW4ge1xuICAwJSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIH1cbiAgMTAwJSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIH1cbn1cbkBrZXlmcmFtZXMgbW9kYWxGYWRlT3V0IHtcbiAgMCUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB9XG4gIDEwMCUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB9XG59XG5Aa2V5ZnJhbWVzIG1vZGFsQ29udGVudEZhZGVJbiB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRvcDogLTIwcHg7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0b3A6IDA7XG4gIH1cbn1cbkBrZXlmcmFtZXMgbW9kYWxDb250ZW50RmFkZU91dCB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRvcDogMHB4O1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdG9wOiAtMjBweDtcbiAgfVxufVxuQGtleWZyYW1lcyBib25kSmFtZXNCb25kIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAwcHgpO1xuICB9XG4gIDgwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XG4gICAgYm9yZGVyLXJhZGl1czogNzVweDtcbiAgICBoZWlnaHQ6IDc1cHg7XG4gICAgd2lkdGg6IDc1cHg7XG4gIH1cbiAgOTAlIHtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgaGVpZ2h0OiAxODJweDtcbiAgICB3aWR0aDogMjQ3cHg7XG4gIH1cbiAgMTAwJSB7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGhlaWdodDogMTYycHg7XG4gICAgd2lkdGg6IDIyN3B4O1xuICB9XG59XG5Aa2V5ZnJhbWVzIGtpbGxTaG90IHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSByb3RhdGUoMGRlZyk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMzAwcHgpIHJvdGF0ZSg0NWRlZyk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuQGtleWZyYW1lcyBmYWRlVG9SZWQge1xuICAwJSB7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgcmdiYSgyMDEsIDI0LCAyNCwgMC44KTtcbiAgfVxuICAxMDAlIHtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDIwMDBweCAwIHJnYmEoMjAxLCAyNCwgMjQsIDAuOCk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc2xvd0ZhZGUge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICA5OS45JSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.less', './home-upload.less', './home-table.less'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].Emulated,
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"] }, { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_8__["Store"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] }, { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_10__["NzModalService"] }, { type: _app_pipes__WEBPACK_IMPORTED_MODULE_11__["OssPathPipe"] }, { type: src_app_video_service__WEBPACK_IMPORTED_MODULE_12__["VideoService"] }, { type: ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_13__["NzMessageService"] }]; }, { filesInputElm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['filesInput']
        }] }); })();


/***/ }),

/***/ "./src/app/pages/home2/home2.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/home2/home2.component.ts ***!
  \************************************************/
/*! exports provided: Home2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Home2Component", function() { return Home2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/select */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-select.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/button */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-button.js");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-wave.js");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-transition-patch.js");













function Home2Component_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "nz-spin", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
class Home2Component {
    constructor(router, http, nzModal) {
        this.router = router;
        this.http = http;
        this.nzModal = nzModal;
        this.select1 = "??????";
        this.select2 = "?????????";
        this.spin = false;
    }
    ngOnInit() {
    }
    inputClick() {
        var inputDom = document.querySelector("#fileInput");
        inputDom.click();
    }
    getFile(e) {
        this.spin = true;
        let files = e.target.files;
        ;
        var formData = new FormData();
        formData.append("files", files[0]);
        formData.append("algorithmType", this.select1);
        formData.append("modelType", this.select2);
        // ?algorithmType=${this.select1}&modelType=${this.select2}
        axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL}/v1/detect-api/personalDetect`, formData, {
            headers: {
                'Authorization': 'Bearer 123456',
                'TR-Role': 'TR-Api'
            }
        })
            .then((result) => {
            if (result.data.code == 1) {
                var resultData = JSON.parse(result.data.data);
                var detectId = resultData[0].detectId;
                this.router.navigate(['/detect2', { detectId: detectId, home2ToDetect2: true }]);
            }
            else {
                this.nzModal.error({
                    nzTitle: '????????????',
                    nzContent: result.data.message
                });
            }
            var inputDom = document.querySelector("#fileInput");
            inputDom.value = "";
        })
            .catch(e => {
            console.log(e);
        })
            .finally(() => {
            this.spin = false;
        });
    }
}
Home2Component.??fac = function Home2Component_Factory(t) { return new (t || Home2Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzModalService"])); };
Home2Component.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: Home2Component, selectors: [["app-home2"]], decls: 22, vars: 3, consts: [[1, "select"], ["style", "width: 100%;height:100%;background-color: rgba(0, 0, 0, .5);position: absolute;top: -50px;left: 0;z-index: 99999;", 4, "ngIf"], [2, "flex", "0 0 49%", "text-align", "right"], [2, "min-width", "50px", 3, "ngModel", "ngModelChange"], ["nzValue", "\u901A\u7528", "nzLabel", "\u901A\u7528"], ["nzValue", "\u4EBA\u7269", "nzLabel", "\u4EBA\u7269"], ["nzValue", "\u6B66\u5668", "nzLabel", "\u6B66\u5668"], ["nzValue", "\u536B\u7247", "nzLabel", "\u536B\u7247"], ["nzValue", "\u8230\u8239", "nzLabel", "\u8230\u8239"], ["nzValue", "\u98DE\u673A", "nzLabel", "\u98DE\u673A"], ["nzValue", "\u5766\u514B", "nzLabel", "\u5766\u514B "], [2, "flex", "0 0 45%", "text-align", "left", "margin-left", "30px"], ["nzValue", "\u9AD8\u7CBE\u5EA6", "nzLabel", "\u9AD8\u7CBE\u5EA6"], ["nzValue", "\u9AD8\u6027\u80FD", "nzLabel", "\u9AD8\u6027\u80FD"], ["nzValue", "\u5E73\u8861", "nzLabel", "\u5E73\u8861"], ["nzValue", "\u8FB9\u7F18", "nzLabel", "\u8FB9\u7F18"], ["nzValue", "\u7EC8\u7AEF", "nzLabel", "\u7EC8\u7AEF"], [2, "text-align", "center", "width", "100%"], ["nz-button", "", "nzType", "primary", 3, "click"], ["type", "file", "id", "fileInput", "accept", "image/jpeg,image/png", 2, "display", "none", 3, "change"], [2, "width", "100%", "height", "100%", "background-color", "rgba(0, 0, 0, .5)", "position", "absolute", "top", "-50px", "left", "0", "z-index", "99999"], ["nzTip", "Loading...", 2, "margin-top", "25%"]], template: function Home2Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, Home2Component_div_1_Template, 2, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "nz-select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function Home2Component_Template_nz_select_ngModelChange_3_listener($event) { return ctx.select1 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "nz-option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "nz-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "nz-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "nz-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "nz-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "nz-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "nz-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "nz-select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function Home2Component_Template_nz_select_ngModelChange_12_listener($event) { return ctx.select2 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "nz-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](14, "nz-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "nz-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "nz-option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "nz-option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function Home2Component_Template_button_click_19_listener() { return ctx.inputClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "\u4E0A\u4F20\u56FE\u7247");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function Home2Component_Template_input_change_21_listener($event) { return ctx.getFile($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.spin);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.select1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.select2);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_7__["NzSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_7__["NzOptionComponent"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_9__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_10__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_11__["??NzTransitionPatchDirective"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzSpinComponent"]], styles: [".select[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 50px;\n  display: flex;\n  flex-wrap: wrap;\n}\n.select[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  margin-top: 50px;\n}\n.select[_ngcontent-%COMP%]   [nz-button][_ngcontent-%COMP%] {\n  margin-right: 8px;\n  margin-bottom: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC9wYWdlcy9ob21lMi9EOi9mZi90YXJnZXQtcmVjb2duaXplLXd3dy1odG1sLVYwLjIvc3JjL2FwcC9wYWdlcy9ob21lMi9ob21lMi5jb21wb25lbnQubGVzcyIsIi4uL2FwcC9wYWdlcy9ob21lMi9ob21lMi5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQ0NKO0FETEE7RUFNUSxnQkFBQTtBQ0VSO0FEUkE7RUFTUSxpQkFBQTtFQUNBLG1CQUFBO0FDRVIiLCJmaWxlIjoiLi4vYXBwL3BhZ2VzL2hvbWUyL2hvbWUyLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlbGVjdHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBkaXZ7XG4gICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgfVxuICAgIFtuei1idXR0b25dIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7XG4gICAgICB9XG59IiwiLnNlbGVjdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuLnNlbGVjdCBkaXYge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuLnNlbGVjdCBbbnotYnV0dG9uXSB7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](Home2Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home2',
                templateUrl: './home2.component.html',
                styleUrls: ['./home2.component.less']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }, { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzModalService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/news/news.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/news/news.component.ts ***!
  \**********************************************/
/*! exports provided: NewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsComponent", function() { return NewsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class NewsComponent {
    constructor(route, router) {
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
        var iframeDom = document.querySelector("iframe");
        this.route.paramMap.subscribe((params) => {
            var iframeDom = document.querySelector("iframe");
            iframeDom.src = params.params.iframe;
        });
        if (iframeDom.src.split('/')[(iframeDom.src.split('/').length) - 1] == 'undefined') {
            this.router.navigate(['/home']);
        }
    }
}
NewsComponent.??fac = function NewsComponent_Factory(t) { return new (t || NewsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
NewsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: NewsComponent, selectors: [["app-news"]], decls: 3, vars: 0, consts: [[1, "news"], ["src", "assets/news/img/hb.png", "alt", "", 1, "right_top"], ["src", "", "frameborder", "0"]], template: function NewsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "iframe", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, styles: [".news[_ngcontent-%COMP%] {\n  position: relative;\n}\n.news[_ngcontent-%COMP%]   .right_top[_ngcontent-%COMP%] {\n  position: absolute;\n  right: -500px;\n  top: -400px;\n}\n.news[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 940px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC9wYWdlcy9uZXdzL0Q6L2ZmL3RhcmdldC1yZWNvZ25pemUtd3d3LWh0bWwtVjAuMi9zcmMvYXBwL3BhZ2VzL25ld3MvbmV3cy5jb21wb25lbnQubGVzcyIsIi4uL2FwcC9wYWdlcy9uZXdzL25ld3MuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQ0NKO0FERkE7RUFHUSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FDRVI7QURQQTtFQVFRLFdBQUE7RUFDQSxhQUFBO0FDRVIiLCJmaWxlIjoiLi4vYXBwL3BhZ2VzL25ld3MvbmV3cy5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uZXdze1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAucmlnaHRfdG9we1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiAtNTAwcHg7XG4gICAgICAgIHRvcDogLTQwMHB4O1xuICAgIH1cbiAgICBpZnJhbWV7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDk0MHB4O1xuICAgIH1cbn0iLCIubmV3cyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5uZXdzIC5yaWdodF90b3Age1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAtNTAwcHg7XG4gIHRvcDogLTQwMHB4O1xufVxuLm5ld3MgaWZyYW1lIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogOTQwcHg7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](NewsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-news',
                templateUrl: './news.component.html',
                styleUrls: ['./news.component.less']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/show/model/model.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/show/model/model.component.ts ***!
  \*****************************************************/
/*! exports provided: ModelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelComponent", function() { return ModelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service.service */ "./src/app/pages/show/service.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





const _c0 = ["triangle"];
const _c1 = function (a0) { return { "select": a0 }; };
function ModelComponent_div_1_li_14_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ModelComponent_div_1_li_14_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r7); const key_r5 = ctx.index; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2); return ctx_r6.slecet(key_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](3, _c1, item_r4.isSelect));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", item_r4.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](item_r4.text);
} }
function ModelComponent_div_1_li_21_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ModelComponent_div_1_li_21_Template_li_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2); return ctx_r9.derect($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", item_r8, " ");
} }
function ModelComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "\u9996\u9875 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, " / \u68C0\u6D4B\u6A21\u578B\u5E93");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "\u68C0\u6D4B\u6A21\u578B\u5E93");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "\u652F\u6301260\u6765\u79CD\u76EE\u6807\u7684\u8BC6\u522B\uFF0C\u4E5F\u53EF\u4EE5\u7528\u6765\u8BAD\u7EC3\u79C1\u6709\u7684\u5B50\u7C7B\u8BC6\u522B\u6A21\u578B\u3002\u4EFB\u4F55\u4E00\u79CD\u6A21\u578B\u652F\u6301\u9AD8\u7CBE\u5EA6\u3001\u4F4E\u65F6\u5EF6\u3001\u5E73\u8861\u3001\u8FB9\u7F18\u548C\u7EC8\u7AEF5\u7C7B\u8BA1\u7B97\u573A\u666F\uFF0C\u53EF\u4EE5\u652F\u6301\u6D4F\u89C8\u5668\u3001\u79FB\u52A8\u7EC8\u7AEF\u548C\u88C5\u59073\u79CD\u670D\u52A1\u6837\u5F0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](14, ModelComponent_div_1_li_14_Template, 4, 5, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "div", 8, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](21, ModelComponent_div_1_li_21_Template, 2, 1, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r0.navList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r0.theValue.text);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r0.theValue.label);
} }
class ModelComponent {
    constructor(router, ServiceService) {
        this.router = router;
        this.ServiceService = ServiceService;
        this.navList = [
            {
                img: "assets/images/persion-select.png",
                text: "????????????",
                isSelect: true
            },
            {
                img: "assets/images/facilities-normal.png",
                text: "????????????",
                isSelect: false
            },
            {
                img: "assets/images/equipment-normal.png",
                text: "????????????",
                isSelect: false
            }
        ];
        this.introduceContent = [
            {
                text: '?????????????????????????????????????????????????????????150?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????1???N???????????????',
                label: ['????????????', '????????????', '????????????', '????????????', '????????????', '????????????', '????????????']
            },
            {
                text: '???????????????????????????????????????????????????????????????????????????????????????',
                label: ['???  ???', '???  ???', '??????????????????']
            },
            {}
        ];
        this.theValue = {
            text: '?????????????????????????????????????????????????????????150?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????1???N???????????????',
            label: ['????????????', '????????????', '????????????', '????????????', '????????????', '????????????', '????????????']
        };
        this.selectNum = 0;
        this.hidden = true;
    }
    ngOnInit() {
    }
    slecet(key) {
        for (var i = 0; i < this.navList.length; i++) {
            this.navList[i].isSelect = false;
            this.navList[i].img = this.navList[i].img.split('-')[0] + '-normal.png';
        }
        this.navList[key].isSelect = true;
        this.navList[key].img = this.navList[key].img.split('-')[0] + '-select.png';
        this.triangle.nativeElement.style.left = (200 + (key * 400)) + 'px';
        this.theValue = this.introduceContent[key];
        this.selectNum = key;
    }
    derect(e) {
        var keyWord = e.target.innerText;
        var obj = {
            keyWord: keyWord,
            label: this.theValue.label
        };
        if (this.selectNum == 0) {
            this.ServiceService.modelSaveData(obj);
            this.router.navigate(['/target']);
        }
        else if (this.selectNum == 1) {
            this.router.navigate(['/target1']);
        }
    }
}
ModelComponent.??fac = function ModelComponent_Factory(t) { return new (t || ModelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_service_service__WEBPACK_IMPORTED_MODULE_2__["ServiceService"])); };
ModelComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: ModelComponent, selectors: [["app-model"]], viewQuery: function ModelComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.triangle = _t.first);
    } }, decls: 2, vars: 1, consts: [["style", "background: #fff;height: 100%;", 4, "ngIf"], [2, "background", "#fff", "height", "100%"], [1, "location"], ["href", "/home", 2, "display", "inline", "color", "#fff"], ["src", "assets/images/modelBanner.png", "alt", "  "], [1, "text"], [1, "content"], [3, "ngClass", "click", 4, "ngFor", "ngForOf"], [2, "width", "20px", "height", "20px", "background", "#f5f7fa", "border-top", "1px solid #e5e8ed", "border-left", "1px solid #e5e8ed", "left", "200px", "bottom", "-24px", "position", "absolute", "transform", "rotate(45deg )"], ["triangle", ""], [1, "introduce"], [3, "click", 4, "ngFor", "ngForOf"], [3, "ngClass", "click"], ["alt", "", 3, "src"], [3, "click"]], template: function ModelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, ModelComponent_div_1_Template, 22, 3, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.hidden);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]], styles: ["header[_ngcontent-%COMP%] {\n  position: relative;\n}\nheader[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  left: 200px;\n  color: #fff;\n}\nheader[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 165px;\n  left: 360px;\n  width: 680px;\n}\nheader[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #fff;\n  margin-bottom: 20px;\n}\nheader[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.content[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  padding-left: 18%;\n}\n.content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: flex;\n  list-style: none;\n  margin-top: 15px;\n  position: relative;\n}\n.content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  width: 400px;\n  border: 1px solid #e5e8ed;\n  position: relative;\n  height: 114px;\n  cursor: pointer;\n}\n.content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 122px;\n  top: 40px;\n}\n.content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 180px;\n  top: 50px;\n  color: #808080;\n}\n.content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .select[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #0080ff;\n}\n.content[_ngcontent-%COMP%]   .introduce[_ngcontent-%COMP%] {\n  width: 1200px;\n  height: 300px;\n  background: #f5f7fa;\n  border: 1px solid #e5e8ed;\n  margin-bottom: 100px;\n}\n.content[_ngcontent-%COMP%]   .introduce[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #333a;\n  padding: 26px 18px;\n  font-size: 15px;\n  text-align: left;\n}\n.content[_ngcontent-%COMP%]   .introduce[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding: 0px 18px;\n}\n.content[_ngcontent-%COMP%]   .introduce[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  width: 160px;\n  height: 48px;\n  margin-left: 20px;\n  background: #fff;\n  line-height: 48px;\n  color: #0080ff;\n  font-size: 20px;\n}\n.content[_ngcontent-%COMP%]   .introduce[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  box-shadow: 0px 0px 10px rgba(22, 22, 22, 0.233);\n  transition: all 0.5s ease-in-out;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC9wYWdlcy9zaG93L21vZGVsL0Q6L2ZmL3RhcmdldC1yZWNvZ25pemUtd3d3LWh0bWwtVjAuMi9zcmMvYXBwL3BhZ2VzL3Nob3cvbW9kZWwvbW9kZWwuY29tcG9uZW50Lmxlc3MiLCIuLi9hcHAvcGFnZXMvc2hvdy9tb2RlbC9tb2RlbC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FDQ0o7QURGQTtFQUdRLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FDRVI7QURSQTtFQVNRLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDRVI7QURkQTtFQWVRLFdBQUE7RUFDQSxtQkFBQTtBQ0VSO0FEbEJBO0VBbUJRLFdBQUE7QUNFUjtBREVBO0VBQ0ksV0FBQTtFQUVBLGtCQUFBO0VBQ0EsaUJBQUE7QUNESjtBREhBO0VBT1EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0RSO0FEVEE7RUFZWSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FDQVo7QURoQkE7RUFtQmdCLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUNBaEI7QURyQkE7RUF3QmdCLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0FDQWhCO0FEM0JBO0VBaUNjLGNBQUE7QUNIZDtBRDlCQTtFQXdDUSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtBQ1BSO0FEckNBO0VBK0NZLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ1BaO0FEM0NBO0VBcURZLGlCQUFBO0FDUFo7QUQ5Q0E7RUF1RGdCLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNOaEI7QUR2REE7RUFpRWdCLGdEQUFBO0VBQ0EsZ0NBQUE7QUNQaEIiLCJmaWxlIjoiLi4vYXBwL3BhZ2VzL3Nob3cvbW9kZWwvbW9kZWwuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoZWFkZXJ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC5sb2NhdGlvbntcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDEwcHg7XG4gICAgICAgIGxlZnQ6IDIwMHB4O1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICB9XG4gICAgLnRleHR7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAxNjVweDtcbiAgICAgICAgbGVmdDogMzYwcHg7XG4gICAgICAgIHdpZHRoOiA2ODBweDtcbiAgICB9XG4gICAgaDF7XG4gICAgICAgIGNvbG9yOiAjZmZmOyBcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB9XG4gICAgcHtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgXG4gICAgfVxufVxuLmNvbnRlbnR7XG4gICAgd2lkdGg6IDEwMCU7XG4gXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmctbGVmdDogMTglO1xuICAgIHVse1xuICAgICAgICBcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBsaXtcbiAgICAgICAgICAgIHdpZHRoOiA0MDBweDtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNWU4ZWQ7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBoZWlnaHQ6IDExNHB4O1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICBcbiAgICAgICAgICAgIGltZ3tcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgbGVmdDogMTIycHg7XG4gICAgICAgICAgICAgICAgdG9wOiA0MHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaDJ7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDE4MHB4O1xuICAgICAgICAgICAgICAgIHRvcDogNTBweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzgwODA4MDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgLnNlbGVjdHtcbiAgICAgICAgICAgIGgye1xuICAgICAgICAgICAgICBjb2xvcjogIzAwODBmZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5pbnRyb2R1Y2V7XG5cbiAgICAgICAgd2lkdGg6IDEyMDBweDtcbiAgICAgICAgaGVpZ2h0OiAzMDBweDtcbiAgICAgICAgYmFja2dyb3VuZDogI2Y1ZjdmYTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2U1ZThlZDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XG5cbiAgICAgICAgcHtcbiAgICAgICAgICAgIGNvbG9yOiAjMzMzYTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDI2cHggMThweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIH1cbiAgICAgICAgdWx7XG4gICAgICAgICAgICBwYWRkaW5nOiAwcHggMThweDtcbiAgICAgICAgICAgIGxpe1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxNjBweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNDhweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwODBmZjtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxpOmhvdmVye1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCByZ2JhKDIyLCAyMiwgMjIsIDAuMjMzKTtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjVzIGVhc2UtaW4tb3V0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG59IiwiaGVhZGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuaGVhZGVyIC5sb2NhdGlvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMHB4O1xuICBsZWZ0OiAyMDBweDtcbiAgY29sb3I6ICNmZmY7XG59XG5oZWFkZXIgLnRleHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTY1cHg7XG4gIGxlZnQ6IDM2MHB4O1xuICB3aWR0aDogNjgwcHg7XG59XG5oZWFkZXIgaDEge1xuICBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbmhlYWRlciBwIHtcbiAgY29sb3I6ICNmZmY7XG59XG4uY29udGVudCB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctbGVmdDogMTglO1xufVxuLmNvbnRlbnQgdWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uY29udGVudCB1bCBsaSB7XG4gIHdpZHRoOiA0MDBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U1ZThlZDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDExNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY29udGVudCB1bCBsaSBpbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDEyMnB4O1xuICB0b3A6IDQwcHg7XG59XG4uY29udGVudCB1bCBsaSBoMiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMTgwcHg7XG4gIHRvcDogNTBweDtcbiAgY29sb3I6ICM4MDgwODA7XG59XG4uY29udGVudCB1bCAuc2VsZWN0IGgyIHtcbiAgY29sb3I6ICMwMDgwZmY7XG59XG4uY29udGVudCAuaW50cm9kdWNlIHtcbiAgd2lkdGg6IDEyMDBweDtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgYmFja2dyb3VuZDogI2Y1ZjdmYTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U1ZThlZDtcbiAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XG59XG4uY29udGVudCAuaW50cm9kdWNlIHAge1xuICBjb2xvcjogIzMzM2E7XG4gIHBhZGRpbmc6IDI2cHggMThweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLmNvbnRlbnQgLmludHJvZHVjZSB1bCB7XG4gIHBhZGRpbmc6IDBweCAxOHB4O1xufVxuLmNvbnRlbnQgLmludHJvZHVjZSB1bCBsaSB7XG4gIHdpZHRoOiAxNjBweDtcbiAgaGVpZ2h0OiA0OHB4O1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgbGluZS1oZWlnaHQ6IDQ4cHg7XG4gIGNvbG9yOiAjMDA4MGZmO1xuICBmb250LXNpemU6IDIwcHg7XG59XG4uY29udGVudCAuaW50cm9kdWNlIHVsIGxpOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IHJnYmEoMjIsIDIyLCAyMiwgMC4yMzMpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ModelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-model',
                templateUrl: './model.component.html',
                styleUrls: ['./model.component.less']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _service_service__WEBPACK_IMPORTED_MODULE_2__["ServiceService"] }]; }, { triangle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['triangle']
        }] }); })();


/***/ }),

/***/ "./src/app/pages/show/service.service.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/show/service.service.ts ***!
  \***********************************************/
/*! exports provided: ServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceService", function() { return ServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ServiceService {
    constructor() {
        this.targetData = {
            keyWord: '',
            label: []
        };
    }
    modelSaveData(obj) {
        this.targetData.keyWord = obj.keyWord;
        this.targetData.label = obj.label;
    }
    targetGetData() {
        return this.targetData;
    }
}
ServiceService.??fac = function ServiceService_Factory(t) { return new (t || ServiceService)(); };
ServiceService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: ServiceService, factory: ServiceService.??fac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ServiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/show/target/target.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/show/target/target.component.ts ***!
  \*******************************************************/
/*! exports provided: TargetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TargetComponent", function() { return TargetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service.service */ "./src/app/pages/show/service.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/tabs */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-tabs.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/collapse */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-collapse.js");









function TargetComponent_nz_tab_17_li_6_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function TargetComponent_nz_tab_17_li_6_Template_img_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r7); const key_r5 = ctx.index; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2); return ctx_r6.getImg($event, key_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", item_r4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
} }
function TargetComponent_nz_tab_17_nz_collapse_panel_9_div_1_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const item2_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("src", item2_r14.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](item2_r14.text);
} }
function TargetComponent_nz_tab_17_nz_collapse_panel_9_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, TargetComponent_nz_tab_17_nz_collapse_panel_9_div_1_li_2_Template, 4, 2, "li", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const panel_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", panel_r8.imgArr);
} }
function TargetComponent_nz_tab_17_nz_collapse_panel_9_div_2_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const item2_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", item2_r18.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](item2_r18.text);
} }
function TargetComponent_nz_tab_17_nz_collapse_panel_9_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, TargetComponent_nz_tab_17_nz_collapse_panel_9_div_2_li_2_Template, 4, 2, "li", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const panel_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", panel_r8.imgArr);
} }
function TargetComponent_nz_tab_17_nz_collapse_panel_9_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "iframe", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", ctx_r12.scenceSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeResourceUrl"]);
} }
function TargetComponent_nz_tab_17_nz_collapse_panel_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "nz-collapse-panel", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, TargetComponent_nz_tab_17_nz_collapse_panel_9_div_1_Template, 3, 1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, TargetComponent_nz_tab_17_nz_collapse_panel_9_div_2_Template, 3, 1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, TargetComponent_nz_tab_17_nz_collapse_panel_9_div_3_Template, 2, 1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const panel_r8 = ctx.$implicit;
    const key_r9 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzHeader", panel_r8.name)("nzActive", panel_r8.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", key_r9 == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", key_r9 == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", key_r9 == 2);
} }
function TargetComponent_nz_tab_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "nz-tab", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, TargetComponent_nz_tab_17_li_6_Template, 2, 1, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "nz-collapse", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](9, TargetComponent_nz_tab_17_nz_collapse_panel_9_Template, 4, 5, "nz-collapse-panel", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzTitle", item_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", ctx_r0.selectImg || "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r0.content[ctx_r0.selectIndex].imgUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r0.content[ctx_r0.selectIndex].panels);
} }
class TargetComponent {
    constructor(router, ServiceService, http) {
        this.router = router;
        this.ServiceService = ServiceService;
        this.http = http;
        this.items = [];
        this.selectIndex = 0;
        this.imgKey = 0;
        this.content = [
            {
                "imgUrl": [],
                "panels": [
                    {
                        "active": "true",
                        "name": "??????????????????",
                        "imgArr": []
                    },
                    {
                        "active": "false",
                        "name": "??????????????????",
                        "imgArr": []
                    },
                    {
                        "active": "false", "name": "????????????",
                        "imgArr": []
                    }
                ]
            },
            {
                "imgUrl": [],
                "panels": [
                    {
                        "active": "true", "name": "??????????????????",
                        "imgArr": []
                    },
                    {
                        "active": "false", "name": "??????????????????",
                        "imgArr": []
                    },
                    {
                        "active": "false", "name": "????????????",
                        "imgArr": []
                    }
                ]
            },
            {
                "imgUrl": [],
                "panels": [
                    {
                        "active": "true", "name": "??????????????????",
                        "imgArr": []
                    },
                    {
                        "active": "false", "name": "??????????????????",
                        "imgArr": []
                    },
                    {
                        "active": "false", "name": "????????????",
                        "imgArr": []
                    }
                ]
            },
            {
                "imgUrl": [],
                "panels": [
                    {
                        "active": "true", "name": "??????????????????",
                        "imgArr": []
                    },
                    {
                        "active": "false", "name": "??????????????????",
                        "imgArr": []
                    },
                    {
                        "active": "false", "name": "????????????",
                        "imgArr": []
                    }
                ]
            },
            {
                "imgUrl": [],
                "panels": [
                    {
                        "active": "true", "name": "??????????????????",
                        "imgArr": []
                    },
                    {
                        "active": "false", "name": "??????????????????",
                        "imgArr": []
                    },
                    {
                        "active": "false", "name": "????????????",
                        "imgArr": []
                    }
                ]
            },
            {
                "imgUrl": [],
                "panels": [
                    {
                        "active": "true", "name": "??????????????????",
                        "imgArr": []
                    },
                    {
                        "active": "false", "name": "??????????????????",
                        "imgArr": []
                    },
                    {
                        "active": "false", "name": "????????????",
                        "imgArr": []
                    }
                ]
            },
            {
                "imgUrl": [],
                "panels": [
                    {
                        "active": "true",
                        "name": "??????????????????",
                        "imgArr": []
                    },
                    {
                        "active": "false",
                        "name": "??????????????????",
                        "imgArr": []
                    },
                    {
                        "active": "false",
                        "name": "????????????",
                        "imgArr": []
                    }
                ]
            }
        ];
        this.selectImg = this.content[this.selectIndex].imgUrl[0];
        this.scenceSrc = "assets/html/yuesefu_baideng.html";
        this.requestData = [];
    }
    ngOnInit() {
        if (this.ServiceService.targetGetData().label.length != 0) {
            this.items = this.ServiceService.targetGetData().label;
        }
        else {
            this.items = ["????????????", "????????????", "????????????", "????????????", "????????????", "????????????", "????????????"];
        }
        if (this.ServiceService.targetGetData().keyWord) {
            this.keyWorld = this.ServiceService.targetGetData().keyWord;
        }
        else {
            this.keyWorld = "????????????";
        }
        if (this.items.indexOf(this.keyWorld) != -1) {
            this.selectIndex = this.items.indexOf(this.keyWorld);
        }
        else {
            this.selectIndex = 0;
        }
        this.changeRequestData();
    }
    changePanels() {
        for (let index = 0; index < this.content[this.selectIndex].panels.length; index++) {
            const element = this.content[this.selectIndex].panels[index];
            element.imgArr = [];
            if (element.name == "??????????????????") {
                element.imgArr.push({ src: this.requestData[this.imgKey].url + '/' + JSON.parse(this.requestData[this.imgKey].checkResult).ossKey, text: JSON.parse(this.requestData[this.imgKey].checkResult).typeName });
            }
            else if (element.name == "??????????????????") {
                element.imgArr = JSON.parse(this.requestData[this.imgKey].resembleImages).map(x => { return { src: `${x}` }; });
            }
            else if (element.name == "????????????") {
                var iframeDom = document.querySelector(".scence iframe");
                iframeDom.src = this.requestData[this.imgKey].matchingResult;
                // this.scenceSrc = `${this.requestData[this.imgKey].matchingResult}`
            }
        }
    }
    changeRequestData() {
        var api = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL}/v1/frame-detect/instructions?typeName=img&targetType=${this.items[this.selectIndex]}&pageIndex=1&pageSize=5`;
        // var api = `${environment.API_URL}/v1/frame-detect/instructions?typeName=img&targetType=??????`
        this.http.post(api, {}).subscribe((res) => {
            this.content[this.selectIndex].imgUrl = [];
            var bigImgDom = document.querySelector(".picBig img");
            if (res.data.records) {
                this.requestData = res.data.records;
                for (let index = 0; index < this.requestData.length; index++) {
                    const element = this.requestData[index];
                    this.content[this.selectIndex].imgUrl.push(element.url + '/' + element.targetPath);
                }
                bigImgDom.src = res.data.records[0].url + '/' + res.data.records[0].targetPath;
                this.changePanels();
            }
            else {
                console.log("??????????????????");
            }
        });
    }
    ngAfterViewInit() {
        var bigImgDom = document.querySelector(".picBig img");
        bigImgDom.src = this.content[this.selectIndex].imgUrl[0];
        // if(window.parent.length>0){window.parent.document.all.newtest.style.height=document.body.scrollHeight;}
    }
    getImg(e, key) {
        console.log(e.target.currentSrc);
        this.selectImg = e.target.currentSrc;
        var imgDom = document.querySelectorAll(".img ul img");
        for (let index = 0; index < imgDom.length; index++) {
            imgDom[index].style.border = "none";
        }
        imgDom[key].style.border = "3px solid #e29426";
        this.imgKey = key;
        this.changePanels();
    }
    changeTab(e) {
        this.imgKey = 0;
        this.selectIndex = e;
        var bigImgDom = document.querySelector(".picBig img");
        bigImgDom.src = this.content[this.selectIndex].imgUrl[0];
        this.changeRequestData();
    }
}
TargetComponent.??fac = function TargetComponent_Factory(t) { return new (t || TargetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_service_service__WEBPACK_IMPORTED_MODULE_3__["ServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
TargetComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: TargetComponent, selectors: [["app-target"]], decls: 18, vars: 2, consts: [[2, "height", "120%", "background", "#fff"], [1, "location"], ["href", "/home", 2, "display", "inline", "color", "#fff"], ["href", "/model", 2, "display", "inline", "color", "#fff"], ["src", "assets/images/personBanner.png", "alt", ""], [1, "text"], [1, "content"], ["nzTabBarGutter", "50", 3, "nzSelectedIndex", "nzSelectedIndexChange"], [3, "nzTitle", 4, "ngFor", "ngForOf"], [3, "nzTitle"], [2, "display", "flex", "width", "100%", "height", "500px"], [1, "img"], [1, "picBig"], ["alt", "", 3, "src"], [4, "ngFor", "ngForOf"], [1, "accrdion"], ["nzAccordion", "", 2, "height", "700px"], [3, "nzHeader", "nzActive", 4, "ngFor", "ngForOf"], ["alt", "", 3, "src", "click"], [3, "nzHeader", "nzActive"], ["style", "max-height: 378px;overflow-y: auto;padding-top: 10px;", "class", "world", 4, "ngIf"], ["style", "max-height: 378px;overflow-y: auto;padding-top: 10px;", "class", "keyframe", 4, "ngIf"], ["style", "max-height: 678px;overflow-y: auto;", "class", "scence", 4, "ngIf"], [1, "world", 2, "max-height", "378px", "overflow-y", "auto", "padding-top", "10px"], ["class", "imgLi", 4, "ngFor", "ngForOf"], [1, "imgLi"], ["alt", "", "crossOrigin", "anonymous", 3, "src"], [1, "keyframe", 2, "max-height", "378px", "overflow-y", "auto", "padding-top", "10px"], [1, "scence", 2, "max-height", "678px", "overflow-y", "auto"], [2, "width", "100%", "height", "309px", "padding", "10px", "background", "#000937", "overflow", "auto", 3, "src"]], template: function TargetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "\u9996\u9875 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, " / ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "\u68C0\u6D4B\u6A21\u578B\u5E93 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, " / \u4EBA\u7269\u8BC6\u522B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "\u4EBA\u7269\u8BC6\u522B\u6A21\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "\u5FEB\u901F\u68C0\u6D4B\u4EBA\u8138\u5E76\u8FD4\u56DE\u4EBA\u8138\u6846\u4F4D\u7F6E\uFF0C\u8F93\u51FA\u4EBA\u8138150\u4E2A\u5173\u952E\u70B9\u5750\u6807\uFF0C\u51C6\u786E\u8BC6\u522B\u591A\u79CD\u5C5E\u6027\u4FE1\u606F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "nz-tabset", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("nzSelectedIndexChange", function TargetComponent_Template_nz_tabset_nzSelectedIndexChange_16_listener($event) { return ctx.changeTab($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](17, TargetComponent_nz_tab_17_Template, 10, 4, "nz-tab", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzSelectedIndex", ctx.selectIndex);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.items);
    } }, directives: [ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_5__["NzTabSetComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_5__["NzTabComponent"], ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_7__["NzCollapseComponent"], ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_7__["NzCollapsePanelComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], styles: ["header[_ngcontent-%COMP%] {\n  position: relative;\n}\nheader[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  left: 200px;\n  color: #fff;\n}\nheader[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 165px;\n  left: 360px;\n  width: 680px;\n}\nheader[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #fff;\n  margin-bottom: 20px;\n}\nheader[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.content[_ngcontent-%COMP%] {\n  margin: 50px auto;\n  width: 75%;\n}\n  .ant-tabs-nav {\n  width: 700px;\n  display: block;\n  margin: 0 auto;\n}\n.img[_ngcontent-%COMP%] {\n  flex: 0 0 700px;\n  display: flex;\n  flex-wrap: wrap;\n  background: #ebebeb;\n}\n.img[_ngcontent-%COMP%]   .picBig[_ngcontent-%COMP%] {\n  width: 100%;\n  overflow: hidden;\n}\n.img[_ngcontent-%COMP%]   .picBig[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 400px;\n  width: 700px;\n}\n.img[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  height: 80%;\n  flex: 0 0 100%;\n}\n.img[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  height: 20%;\n  flex: 1;\n  display: flex;\n  list-style: none;\n}\n.img[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 5px;\n  cursor: pointer;\n  height: 77px;\n  max-width: 150px;\n}\n.img[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 95%;\n  max-width: 150px;\n  height: 100%;\n}\n.img[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child   img[_ngcontent-%COMP%] {\n  border: 3px solid #e29426;\n}\n.accrdion[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.world[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .keyframe[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .scence[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  display: flex;\n  flex-wrap: wrap;\n}\n.world[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .keyframe[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .scence[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  width: 150px;\n  flex: 1;\n  margin: 0 10px;\n}\n.world[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .keyframe[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .scence[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC9wYWdlcy9zaG93L3RhcmdldC9EOi9mZi90YXJnZXQtcmVjb2duaXplLXd3dy1odG1sLVYwLjIvc3JjL2FwcC9wYWdlcy9zaG93L3RhcmdldC90YXJnZXQuY29tcG9uZW50Lmxlc3MiLCIuLi9hcHAvcGFnZXMvc2hvdy90YXJnZXQvdGFyZ2V0LmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUNDSjtBREZBO0VBR1Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUNFUjtBRFJBO0VBU1Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNFUjtBRGRBO0VBZVEsV0FBQTtFQUNBLG1CQUFBO0FDRVI7QURsQkE7RUFtQlEsV0FBQTtBQ0VSO0FERUE7RUFDSSxpQkFBQTtFQUNBLFVBQUE7QUNBSjtBREVBO0VBQ0ksWUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FDQUo7QURFQTtFQUVJLGVBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDREo7QURKQTtFQU9RLFdBQUE7RUFDQSxnQkFBQTtBQ0FSO0FEUkE7RUFVZSxhQUFBO0VBQ0EsWUFBQTtBQ0NmO0FEWkE7RUFlUSxXQUFBO0VBQ0EsY0FBQTtBQ0FSO0FEaEJBO0VBbUJRLFdBQUE7RUFDQSxPQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FDQVI7QUR0QkE7RUF3QlksT0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDQ1o7QUQ3QkE7RUE4QmdCLFVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUNFaEI7QURBWTtFQUVRLHlCQUFBO0FDQ3BCO0FEVUE7RUFDSSxPQUFBO0FDUko7QURXQTs7O0VBRVksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQ1JaO0FESUE7OztFQU1nQixZQUFBO0VBQ0EsT0FBQTtFQUNBLGNBQUE7QUNMaEI7QURIQTs7O0VBVW9CLFlBQUE7RUFDQSxhQUFBO0FDRnBCIiwiZmlsZSI6Ii4uL2FwcC9wYWdlcy9zaG93L3RhcmdldC90YXJnZXQuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoZWFkZXJ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC5sb2NhdGlvbntcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDEwcHg7XG4gICAgICAgIGxlZnQ6IDIwMHB4O1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICB9XG4gICAgLnRleHR7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAxNjVweDtcbiAgICAgICAgbGVmdDogMzYwcHg7XG4gICAgICAgIHdpZHRoOiA2ODBweDtcbiAgICB9XG4gICAgaDF7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIH1cbiAgICBwe1xuICAgICAgICBjb2xvcjogI2ZmZjtcblxuICAgIH1cbn1cbi5jb250ZW50e1xuICAgIG1hcmdpbjogNTBweCBhdXRvO1xuICAgIHdpZHRoOiA3NSU7XG59XG4vZGVlcC8gLmFudC10YWJzLW5hdiB7XG4gICAgd2lkdGg6IDcwMHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogMCBhdXRvO1xufVxuLmltZ3tcblxuICAgIGZsZXg6IDAgMCA3MDBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBiYWNrZ3JvdW5kOiAjZWJlYmViO1xuICAgIC5waWNCaWd7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBpbWd7XG4gICAgICAgICAgICAgICBoZWlnaHQ6IDQwMHB4O1xuICAgICAgICAgICAgICAgd2lkdGg6IDcwMHB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIGRpdntcbiAgICAgICAgaGVpZ2h0OiA4MCU7XG4gICAgICAgIGZsZXg6IDAgMCAxMDAlO1xuICAgIH1cbiAgICB1bHtcbiAgICAgICAgaGVpZ2h0OiAyMCU7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgIGxpe1xuICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIGhlaWdodDogNzdweDtcbiAgICAgICAgICAgIG1heC13aWR0aDogMTUwcHg7XG4gICAgICAgICAgICBpbWd7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDk1JTtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDE1MHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICY6Zmlyc3QtY2hpbGR7XG4gICAgICAgICAgICAgICAgaW1ne1xuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDNweCBzb2xpZCAjZTI5NDI2O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cblxuXG4gICAgfVxuXG59XG4uYWNjcmRpb257XG4gICAgZmxleDogMTtcblxufVxuLndvcmxkLC5rZXlmcmFtZSwuc2NlbmNle1xuICAgICAgICB1bHtcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgICAgbGl7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIDEwcHg7XG4gICAgICAgICAgICAgICAgaW1ne1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTUwcHg7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG59XG4iLCJoZWFkZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5oZWFkZXIgLmxvY2F0aW9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwcHg7XG4gIGxlZnQ6IDIwMHB4O1xuICBjb2xvcjogI2ZmZjtcbn1cbmhlYWRlciAudGV4dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxNjVweDtcbiAgbGVmdDogMzYwcHg7XG4gIHdpZHRoOiA2ODBweDtcbn1cbmhlYWRlciBoMSB7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuaGVhZGVyIHAge1xuICBjb2xvcjogI2ZmZjtcbn1cbi5jb250ZW50IHtcbiAgbWFyZ2luOiA1MHB4IGF1dG87XG4gIHdpZHRoOiA3NSU7XG59XG4gL2RlZXAvIC5hbnQtdGFicy1uYXYge1xuICB3aWR0aDogNzAwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5pbWcge1xuICBmbGV4OiAwIDAgNzAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgYmFja2dyb3VuZDogI2ViZWJlYjtcbn1cbi5pbWcgLnBpY0JpZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmltZyAucGljQmlnIGltZyB7XG4gIGhlaWdodDogNDAwcHg7XG4gIHdpZHRoOiA3MDBweDtcbn1cbi5pbWcgZGl2IHtcbiAgaGVpZ2h0OiA4MCU7XG4gIGZsZXg6IDAgMCAxMDAlO1xufVxuLmltZyB1bCB7XG4gIGhlaWdodDogMjAlO1xuICBmbGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuLmltZyB1bCBsaSB7XG4gIGZsZXg6IDE7XG4gIHBhZGRpbmc6IDVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBoZWlnaHQ6IDc3cHg7XG4gIG1heC13aWR0aDogMTUwcHg7XG59XG4uaW1nIHVsIGxpIGltZyB7XG4gIHdpZHRoOiA5NSU7XG4gIG1heC13aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5pbWcgdWwgbGk6Zmlyc3QtY2hpbGQgaW1nIHtcbiAgYm9yZGVyOiAzcHggc29saWQgI2UyOTQyNjtcbn1cbi5hY2NyZGlvbiB7XG4gIGZsZXg6IDE7XG59XG4ud29ybGQgdWwsXG4ua2V5ZnJhbWUgdWwsXG4uc2NlbmNlIHVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuLndvcmxkIHVsIGxpLFxuLmtleWZyYW1lIHVsIGxpLFxuLnNjZW5jZSB1bCBsaSB7XG4gIHdpZHRoOiAxNTBweDtcbiAgZmxleDogMTtcbiAgbWFyZ2luOiAwIDEwcHg7XG59XG4ud29ybGQgdWwgbGkgaW1nLFxuLmtleWZyYW1lIHVsIGxpIGltZyxcbi5zY2VuY2UgdWwgbGkgaW1nIHtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](TargetComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-target",
                templateUrl: "./target.component.html",
                styleUrls: ["./target.component.less"],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].Emulated,
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _service_service__WEBPACK_IMPORTED_MODULE_3__["ServiceService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/show/target1/target1.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/show/target1/target1.component.ts ***!
  \*********************************************************/
/*! exports provided: Target1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Target1Component", function() { return Target1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service.service */ "./src/app/pages/show/service.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/tabs */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-tabs.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/collapse */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-collapse.js");









function Target1Component_nz_tab_17_li_6_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function Target1Component_nz_tab_17_li_6_Template_img_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r7); const key_r5 = ctx.index; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2); return ctx_r6.getImg($event, key_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", item_r4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
} }
function Target1Component_nz_tab_17_nz_collapse_panel_9_div_1_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const item2_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("src", item2_r14.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](item2_r14.text);
} }
function Target1Component_nz_tab_17_nz_collapse_panel_9_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, Target1Component_nz_tab_17_nz_collapse_panel_9_div_1_li_2_Template, 4, 2, "li", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const panel_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", panel_r8.imgArr);
} }
function Target1Component_nz_tab_17_nz_collapse_panel_9_div_2_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const item2_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", item2_r18.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](item2_r18.text);
} }
function Target1Component_nz_tab_17_nz_collapse_panel_9_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, Target1Component_nz_tab_17_nz_collapse_panel_9_div_2_li_2_Template, 4, 2, "li", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const panel_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", panel_r8.imgArr);
} }
function Target1Component_nz_tab_17_nz_collapse_panel_9_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "iframe", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", ctx_r12.scenceSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeResourceUrl"]);
} }
function Target1Component_nz_tab_17_nz_collapse_panel_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "nz-collapse-panel", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, Target1Component_nz_tab_17_nz_collapse_panel_9_div_1_Template, 3, 1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, Target1Component_nz_tab_17_nz_collapse_panel_9_div_2_Template, 3, 1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, Target1Component_nz_tab_17_nz_collapse_panel_9_div_3_Template, 2, 1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const panel_r8 = ctx.$implicit;
    const key_r9 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzHeader", panel_r8.name)("nzActive", panel_r8.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", key_r9 == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", key_r9 == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", key_r9 == 2);
} }
function Target1Component_nz_tab_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "nz-tab", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, Target1Component_nz_tab_17_li_6_Template, 2, 1, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "nz-collapse", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](9, Target1Component_nz_tab_17_nz_collapse_panel_9_Template, 4, 5, "nz-collapse-panel", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzTitle", item_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", ctx_r0.selectImg, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r0.content[ctx_r0.selectIndex].imgUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r0.content[ctx_r0.selectIndex].panels);
} }
class Target1Component {
    constructor(router, ServiceService, http) {
        this.router = router;
        this.ServiceService = ServiceService;
        this.http = http;
        this.items = [];
        this.selectIndex = 0;
        this.imgKey = 0;
        this.content = [
            {
                "imgUrl": [],
                "panels": [
                    {
                        "active": "true",
                        "name": "??????????????????",
                        "imgArr": [
                            {
                                "text": "",
                                "src": ""
                            }
                        ]
                    },
                    {
                        "active": "false",
                        "name": "??????????????????",
                        "imgArr": []
                    },
                    {
                        "active": "false", "name": "????????????",
                        "imgArr": []
                    }
                ]
            },
            {
                "imgUrl": [],
                "panels": [
                    {
                        "active": "true", "name": "??????????????????",
                        "imgArr": []
                    },
                    {
                        "active": "false", "name": "??????????????????",
                        "imgArr": []
                    },
                    {
                        "active": "false", "name": "????????????",
                        "imgArr": []
                    }
                ]
            },
            {
                "imgUrl": [],
                "panels": [
                    {
                        "active": "true", "name": "??????????????????",
                        "imgArr": []
                    },
                    {
                        "active": "false", "name": "??????????????????",
                        "imgArr": []
                    },
                    {
                        "active": "false", "name": "????????????",
                        "imgArr": []
                    }
                ]
            },
        ];
        this.selectImg = this.content[this.selectIndex].imgUrl[0];
        this.scenceSrc = "assets/html/yuesefu_baideng.html";
        this.requestData = [];
    }
    ngOnInit() {
        if (this.ServiceService.targetGetData().label.length != 0) {
            this.items = this.ServiceService.targetGetData().label;
        }
        else {
            this.items = ['??????', '??????', '??????????????????'];
        }
        if (this.ServiceService.targetGetData().keyWord) {
            this.keyWorld = this.ServiceService.targetGetData().keyWord;
        }
        else {
            this.keyWorld = "??????";
        }
        if (this.items.indexOf(this.keyWorld) != -1) {
            this.selectIndex = this.items.indexOf(this.keyWorld);
        }
        else {
            this.selectIndex = 0;
        }
        this.changeRequestData();
    }
    changePanels() {
        for (let index = 0; index < this.content[this.selectIndex].panels.length; index++) {
            const element = this.content[this.selectIndex].panels[index];
            element.imgArr = [];
            if (element.name == "??????????????????") {
                element.imgArr.push({ src: this.requestData[this.imgKey].url + '/' + JSON.parse(this.requestData[this.imgKey].checkResult).ossKey, text: JSON.parse(this.requestData[this.imgKey].checkResult).typeName });
            }
            else if (element.name == "??????????????????") {
                element.imgArr = JSON.parse(this.requestData[this.imgKey].resembleImages).map(x => { return { src: `${x}` }; });
            }
            else if (element.name == "????????????") {
                var iframeDom = document.querySelector(".scence iframe");
                iframeDom.src = this.requestData[this.imgKey].matchingResult;
                // this.scenceSrc = `${this.requestData[this.imgKey].matchingResult}`
            }
        }
    }
    changeRequestData() {
        var api = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL}/v1/frame-detect/instructions?typeName=img&targetType=${this.items[this.selectIndex]}`;
        // var api = `${environment.API_URL}/v1/frame-detect/instructions?typeName=img&targetType=??????`
        this.http.post(api, {}).subscribe((res) => {
            this.content[this.selectIndex].imgUrl = [];
            var bigImgDom = document.querySelector(".picBig img");
            if (res.data) {
                this.requestData = res.data;
                for (let index = 0; index < this.requestData.length; index++) {
                    const element = this.requestData[index];
                    var url = localStorage.getItem("targetRecognizePath");
                    this.content[this.selectIndex].imgUrl.push(url + '/' + element.targetPath);
                }
                bigImgDom.src = res.data[0].url + '/' + res.data[0].targetPath;
                this.changePanels();
            }
            else {
                console.log("??????????????????");
            }
        });
    }
    ngAfterViewInit() {
        var bigImgDom = document.querySelector(".picBig img");
        bigImgDom.src = this.content[this.selectIndex].imgUrl[0];
        // if(window.parent.length>0){window.parent.document.all.newtest.style.height=document.body.scrollHeight;}
    }
    getImg(e, key) {
        this.selectImg = e.toElement.attributes[2].nodeValue;
        var imgDom = document.querySelectorAll(".img ul img");
        for (let index = 0; index < imgDom.length; index++) {
            imgDom[index].style.border = "none";
        }
        imgDom[key].style.border = "3px solid #e29426";
        this.imgKey = key;
        this.changePanels();
    }
    changeTab(e) {
        this.selectIndex = e;
        var bigImgDom = document.querySelector(".picBig img");
        bigImgDom.src = this.content[this.selectIndex].imgUrl[0];
        this.changeRequestData();
    }
}
Target1Component.??fac = function Target1Component_Factory(t) { return new (t || Target1Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_service_service__WEBPACK_IMPORTED_MODULE_3__["ServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
Target1Component.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: Target1Component, selectors: [["app-target1"]], decls: 18, vars: 2, consts: [[2, "height", "120%", "background", "#fff"], [1, "location"], ["href", "/home", 2, "display", "inline", "color", "#fff"], ["href", "/model", 2, "display", "inline", "color", "#fff"], ["src", "assets/images/personBanner.png", "alt", ""], [1, "text"], [1, "content"], ["nzTabBarGutter", "50", 3, "nzSelectedIndex", "nzSelectedIndexChange"], [3, "nzTitle", 4, "ngFor", "ngForOf"], [3, "nzTitle"], [2, "display", "flex", "width", "100%", "height", "500px"], [1, "img"], [1, "picBig"], ["alt", "", 3, "src"], [4, "ngFor", "ngForOf"], [1, "accrdion"], ["nzAccordion", "", 2, "height", "700px"], [3, "nzHeader", "nzActive", 4, "ngFor", "ngForOf"], ["alt", "", 3, "src", "click"], [3, "nzHeader", "nzActive"], ["style", "max-height: 378px;overflow-y: auto;padding-top: 10px;", "class", "world", 4, "ngIf"], ["style", "max-height: 378px;overflow-y: auto;padding-top: 10px;", "class", "keyframe", 4, "ngIf"], ["style", "max-height: 678px;overflow-y: auto;", "class", "scence", 4, "ngIf"], [1, "world", 2, "max-height", "378px", "overflow-y", "auto", "padding-top", "10px"], ["class", "imgLi", 4, "ngFor", "ngForOf"], [1, "imgLi"], ["alt", "", "crossOrigin", "anonymous", 3, "src"], [1, "keyframe", 2, "max-height", "378px", "overflow-y", "auto", "padding-top", "10px"], [1, "scence", 2, "max-height", "678px", "overflow-y", "auto"], [2, "width", "100%", "height", "309px", "padding", "10px", "background", "#000937", "overflow", "auto", 3, "src"]], template: function Target1Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "\u9996\u9875 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, " / ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "\u68C0\u6D4B\u6A21\u578B\u5E93 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, " / \u88C5\u5907\u8BC6\u522B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "\u88C5\u5907\u8BC6\u522B\u6A21\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "\u5FEB\u901F\u68C0\u6D4B\u88C5\u5907\u4F4D\u7F6E\uFF0C\u8F93\u51FA\u5177\u4F53\u578B\u53F7\u4FE1\u606F\uFF0C\u51C6\u786E\u8BC6\u522B\u591A\u79CD\u5C5E\u6027\u4FE1\u606F\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "nz-tabset", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("nzSelectedIndexChange", function Target1Component_Template_nz_tabset_nzSelectedIndexChange_16_listener($event) { return ctx.changeTab($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](17, Target1Component_nz_tab_17_Template, 10, 4, "nz-tab", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzSelectedIndex", ctx.selectIndex);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.items);
    } }, directives: [ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_5__["NzTabSetComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_5__["NzTabComponent"], ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_7__["NzCollapseComponent"], ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_7__["NzCollapsePanelComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], styles: ["header[_ngcontent-%COMP%] {\n  position: relative;\n}\nheader[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  left: 200px;\n  color: #fff;\n}\nheader[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 165px;\n  left: 360px;\n  width: 680px;\n}\nheader[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #fff;\n  margin-bottom: 20px;\n}\nheader[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.content[_ngcontent-%COMP%] {\n  margin: 50px auto;\n  width: 75%;\n}\n  .ant-tabs-nav {\n  width: 700px;\n  display: block;\n  margin: 0 auto;\n}\n.img[_ngcontent-%COMP%] {\n  flex: 0 0 700px;\n  display: flex;\n  flex-wrap: wrap;\n  background: #ebebeb;\n}\n.img[_ngcontent-%COMP%]   .picBig[_ngcontent-%COMP%] {\n  width: 100%;\n  overflow: hidden;\n}\n.img[_ngcontent-%COMP%]   .picBig[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 400px;\n  width: 700px;\n}\n.img[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  height: 80%;\n  flex: 0 0 100%;\n}\n.img[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  height: 20%;\n  flex: 1;\n  display: flex;\n  list-style: none;\n}\n.img[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 5px;\n  cursor: pointer;\n  height: 77px;\n  max-width: 150px;\n}\n.img[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 95%;\n  max-width: 150px;\n  height: 100%;\n}\n.img[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child   img[_ngcontent-%COMP%] {\n  border: 3px solid #e29426;\n}\n.accrdion[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.world[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .keyframe[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .scence[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  display: flex;\n  flex-wrap: wrap;\n}\n.world[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .keyframe[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .scence[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  width: 150px;\n  flex: 1;\n  margin: 0 10px;\n}\n.world[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .keyframe[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .scence[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC9wYWdlcy9zaG93L3RhcmdldDEvRDovZmYvdGFyZ2V0LXJlY29nbml6ZS13d3ctaHRtbC1WMC4yL3NyYy9hcHAvcGFnZXMvc2hvdy90YXJnZXQxL3RhcmdldDEuY29tcG9uZW50Lmxlc3MiLCIuLi9hcHAvcGFnZXMvc2hvdy90YXJnZXQxL3RhcmdldDEuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQ0NKO0FERkE7RUFHUSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQ0VSO0FEUkE7RUFTUSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0VSO0FEZEE7RUFlUSxXQUFBO0VBQ0EsbUJBQUE7QUNFUjtBRGxCQTtFQW1CUSxXQUFBO0FDRVI7QURFQTtFQUNJLGlCQUFBO0VBQ0EsVUFBQTtBQ0FKO0FERUE7RUFDSSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUNBSjtBREVBO0VBRUksZUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNESjtBREpBO0VBT1EsV0FBQTtFQUNBLGdCQUFBO0FDQVI7QURSQTtFQVVlLGFBQUE7RUFDQSxZQUFBO0FDQ2Y7QURaQTtFQWVRLFdBQUE7RUFDQSxjQUFBO0FDQVI7QURoQkE7RUFtQlEsV0FBQTtFQUNBLE9BQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUNBUjtBRHRCQTtFQXdCWSxPQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNDWjtBRDdCQTtFQThCZ0IsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ0VoQjtBREFZO0VBRVEseUJBQUE7QUNDcEI7QURVQTtFQUNJLE9BQUE7QUNSSjtBRFdBOzs7RUFFWSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FDUlo7QURJQTs7O0VBTWdCLFlBQUE7RUFDQSxPQUFBO0VBQ0EsY0FBQTtBQ0xoQjtBREhBOzs7RUFVb0IsWUFBQTtFQUNBLGFBQUE7QUNGcEIiLCJmaWxlIjoiLi4vYXBwL3BhZ2VzL3Nob3cvdGFyZ2V0MS90YXJnZXQxLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiaGVhZGVye1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAubG9jYXRpb257XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAxMHB4O1xuICAgICAgICBsZWZ0OiAyMDBweDtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgfVxuICAgIC50ZXh0e1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMTY1cHg7XG4gICAgICAgIGxlZnQ6IDM2MHB4O1xuICAgICAgICB3aWR0aDogNjgwcHg7XG4gICAgfVxuICAgIGgxe1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB9XG4gICAgcHtcbiAgICAgICAgY29sb3I6ICNmZmY7XG5cbiAgICB9XG59XG4uY29udGVudHtcbiAgICBtYXJnaW46IDUwcHggYXV0bztcbiAgICB3aWR0aDogNzUlO1xufVxuL2RlZXAvIC5hbnQtdGFicy1uYXYge1xuICAgIHdpZHRoOiA3MDBweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDAgYXV0bztcbn1cbi5pbWd7XG5cbiAgICBmbGV4OiAwIDAgNzAwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgYmFja2dyb3VuZDogI2ViZWJlYjtcbiAgICAucGljQmlne1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgaW1ne1xuICAgICAgICAgICAgICAgaGVpZ2h0OiA0MDBweDtcbiAgICAgICAgICAgICAgIHdpZHRoOiA3MDBweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBkaXZ7XG4gICAgICAgIGhlaWdodDogODAlO1xuICAgICAgICBmbGV4OiAwIDAgMTAwJTtcbiAgICB9XG4gICAgdWx7XG4gICAgICAgIGhlaWdodDogMjAlO1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICBsaXtcbiAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBoZWlnaHQ6IDc3cHg7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDE1MHB4O1xuICAgICAgICAgICAgaW1ne1xuICAgICAgICAgICAgICAgIHdpZHRoOiA5NSU7XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxNTBweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmOmZpcnN0LWNoaWxke1xuICAgICAgICAgICAgICAgIGltZ3tcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAzcHggc29saWQgI2UyOTQyNjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG5cblxuICAgIH1cblxufVxuLmFjY3JkaW9ue1xuICAgIGZsZXg6IDE7XG5cbn1cbi53b3JsZCwua2V5ZnJhbWUsLnNjZW5jZXtcbiAgICAgICAgdWx7XG4gICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICAgIGxpe1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMCAxMHB4O1xuICAgICAgICAgICAgICAgIGltZ3tcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxufVxuIiwiaGVhZGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuaGVhZGVyIC5sb2NhdGlvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMHB4O1xuICBsZWZ0OiAyMDBweDtcbiAgY29sb3I6ICNmZmY7XG59XG5oZWFkZXIgLnRleHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTY1cHg7XG4gIGxlZnQ6IDM2MHB4O1xuICB3aWR0aDogNjgwcHg7XG59XG5oZWFkZXIgaDEge1xuICBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbmhlYWRlciBwIHtcbiAgY29sb3I6ICNmZmY7XG59XG4uY29udGVudCB7XG4gIG1hcmdpbjogNTBweCBhdXRvO1xuICB3aWR0aDogNzUlO1xufVxuIC9kZWVwLyAuYW50LXRhYnMtbmF2IHtcbiAgd2lkdGg6IDcwMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4uaW1nIHtcbiAgZmxleDogMCAwIDcwMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGJhY2tncm91bmQ6ICNlYmViZWI7XG59XG4uaW1nIC5waWNCaWcge1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5pbWcgLnBpY0JpZyBpbWcge1xuICBoZWlnaHQ6IDQwMHB4O1xuICB3aWR0aDogNzAwcHg7XG59XG4uaW1nIGRpdiB7XG4gIGhlaWdodDogODAlO1xuICBmbGV4OiAwIDAgMTAwJTtcbn1cbi5pbWcgdWwge1xuICBoZWlnaHQ6IDIwJTtcbiAgZmxleDogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbi5pbWcgdWwgbGkge1xuICBmbGV4OiAxO1xuICBwYWRkaW5nOiA1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgaGVpZ2h0OiA3N3B4O1xuICBtYXgtd2lkdGg6IDE1MHB4O1xufVxuLmltZyB1bCBsaSBpbWcge1xuICB3aWR0aDogOTUlO1xuICBtYXgtd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uaW1nIHVsIGxpOmZpcnN0LWNoaWxkIGltZyB7XG4gIGJvcmRlcjogM3B4IHNvbGlkICNlMjk0MjY7XG59XG4uYWNjcmRpb24ge1xuICBmbGV4OiAxO1xufVxuLndvcmxkIHVsLFxuLmtleWZyYW1lIHVsLFxuLnNjZW5jZSB1bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbi53b3JsZCB1bCBsaSxcbi5rZXlmcmFtZSB1bCBsaSxcbi5zY2VuY2UgdWwgbGkge1xuICB3aWR0aDogMTUwcHg7XG4gIGZsZXg6IDE7XG4gIG1hcmdpbjogMCAxMHB4O1xufVxuLndvcmxkIHVsIGxpIGltZyxcbi5rZXlmcmFtZSB1bCBsaSBpbWcsXG4uc2NlbmNlIHVsIGxpIGltZyB7XG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](Target1Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-target1',
                templateUrl: './target1.component.html',
                styleUrls: ['./target1.component.less'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].Emulated,
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _service_service__WEBPACK_IMPORTED_MODULE_3__["ServiceService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/show/target2/key/key.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/show/target2/key/key.component.ts ***!
  \*********************************************************/
/*! exports provided: KeyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyComponent", function() { return KeyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function KeyComponent_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "img", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", item_r1.imgSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", item_r1.key, "\"");
} }
class KeyComponent {
    constructor() { }
    ngOnInit() {
        console.log(this.list);
    }
}
KeyComponent.??fac = function KeyComponent_Factory(t) { return new (t || KeyComponent)(); };
KeyComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: KeyComponent, selectors: [["app-key"]], inputs: { list: "list" }, decls: 2, vars: 1, consts: [[4, "ngFor", "ngForOf"], ["alt", "", 3, "src"]], template: function KeyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, KeyComponent_li_1_Template, 4, 2, "li", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.list);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["*[_ngcontent-%COMP%] {\n  list-style: none;\n}\nul[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  flex: 0 0 200px;\n  padding: 15px;\n  position: relative;\n}\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 105px;\n}\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 800;\n  width: 85%;\n  background: rgba(0, 0, 0, 0.404);\n  position: absolute;\n  bottom: 0px;\n  color: #fff;\n  text-align: right;\n  padding-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC9wYWdlcy9zaG93L3RhcmdldDIva2V5L0Q6L2ZmL3RhcmdldC1yZWNvZ25pemUtd3d3LWh0bWwtVjAuMi9zcmMvYXBwL3BhZ2VzL3Nob3cvdGFyZ2V0Mi9rZXkva2V5LmNvbXBvbmVudC5sZXNzIiwiLi4vYXBwL3BhZ2VzL3Nob3cvdGFyZ2V0Mi9rZXkva2V5LmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUNDSjtBRENBO0VBQ0ksYUFBQTtFQUNBLGVBQUE7QUNDSjtBREhBO0VBSVEsZUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ0VSO0FEUkE7RUFRWSxXQUFBO0VBQ0EsYUFBQTtBQ0daO0FEWkE7RUFZWSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDR1oiLCJmaWxlIjoiLi4vYXBwL3BhZ2VzL3Nob3cvdGFyZ2V0Mi9rZXkva2V5LmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiKntcbiAgICBsaXN0LXN0eWxlOiBub25lO1xufVxudWx7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgbGl7XG4gICAgICAgIGZsZXg6IDAgMCAyMDBweDtcbiAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBpbWd7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTA1cHg7XG4gICAgICAgIH1cbiAgICAgICAgcHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgICAgICAgICB3aWR0aDogMTAwJS0xNXB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjQwNCk7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBib3R0b206IDBweDtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgICAgICB9XG4gICAgfVxufSIsIioge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxudWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG51bCBsaSB7XG4gIGZsZXg6IDAgMCAyMDBweDtcbiAgcGFkZGluZzogMTVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxudWwgbGkgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTA1cHg7XG59XG51bCBsaSBwIHtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgd2lkdGg6IDg1JTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjQwNCk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](KeyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-key',
                templateUrl: './key.component.html',
                styleUrls: ['./key.component.less']
            }]
    }], function () { return []; }, { list: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/pages/show/target2/obj/obj.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/show/target2/obj/obj.component.ts ***!
  \*********************************************************/
/*! exports provided: ObjComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjComponent", function() { return ObjComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function ObjComponent_li_1_li_4_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ObjComponent_li_1_li_4_Template_li_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2); return ctx_r4.getTime($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const item2_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", item2_r3, "\" ");
} }
function ObjComponent_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "ul", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, ObjComponent_li_1_li_4_Template, 2, 1, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](item_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", item_r1.key);
} }
class ObjComponent {
    constructor() {
        this.outer = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.getThisTime = 0;
    }
    ngOnInit() {
    }
    getTime(e) {
        var liDom = document.querySelectorAll('.label li');
        for (var i = 0; i < liDom.length; i++) {
            liDom[i].style.background = "#e6e6e6";
            liDom[i].style.color = "#0a6deb";
        }
        e.srcElement.style.background = "#0a6deb";
        e.srcElement.style.color = "#fff";
        var value = e.srcElement.innerText.replace(/[\"\']+/, "");
        this.getThisTime = value * 1;
        var that = this;
        this.outer.emit(that.getThisTime);
    }
}
ObjComponent.??fac = function ObjComponent_Factory(t) { return new (t || ObjComponent)(); };
ObjComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: ObjComponent, selectors: [["app-obj"]], inputs: { list: "list" }, outputs: { outer: "outer" }, decls: 2, vars: 1, consts: [["class", "outerLi", 4, "ngFor", "ngForOf"], [1, "outerLi"], [1, "label"], [3, "click", 4, "ngFor", "ngForOf"], [3, "click"]], template: function ObjComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, ObjComponent_li_1_Template, 5, 2, "li", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.list);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["*[_ngcontent-%COMP%] {\n  list-style: none;\n}\n.outerLi[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 10px ;\n  flex-wrap: wrap;\n}\n.outerLi[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  max-width: 80px;\n  flex: 1;\n  background: #e6e6e6;\n  color: #0a6deb;\n  padding: 5px 15px;\n  margin-left: 25px;\n  margin-top: 10px;\n  min-width: 80px;\n  text-align: center;\n  font-size: 16px;\n  font-weight: 600;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC9wYWdlcy9zaG93L3RhcmdldDIvb2JqL0Q6L2ZmL3RhcmdldC1yZWNvZ25pemUtd3d3LWh0bWwtVjAuMi9zcmMvYXBwL3BhZ2VzL3Nob3cvdGFyZ2V0Mi9vYmovb2JqLmNvbXBvbmVudC5sZXNzIiwiLi4vYXBwL3BhZ2VzL3Nob3cvdGFyZ2V0Mi9vYmovb2JqLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUNDSjtBRENBO0VBR1EsYUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FDRFI7QURKQTtFQU9ZLGVBQUE7RUFDQSxPQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0FaIiwiZmlsZSI6Ii4uL2FwcC9wYWdlcy9zaG93L3RhcmdldDIvb2JqL29iai5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIip7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbi5vdXRlckxpe1xuXG4gICAgLmxhYmVse1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBtYXJnaW46IDEwcHggO1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIGxpe1xuICAgICAgICAgICAgbWF4LXdpZHRoOiA4MHB4O1xuICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlNmU2ZTY7XG4gICAgICAgICAgICBjb2xvcjogIzBhNmRlYjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxNXB4O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDI1cHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgbWluLXdpZHRoOiA4MHB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbn0iLCIqIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbi5vdXRlckxpIC5sYWJlbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMTBweCA7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbi5vdXRlckxpIC5sYWJlbCBsaSB7XG4gIG1heC13aWR0aDogODBweDtcbiAgZmxleDogMTtcbiAgYmFja2dyb3VuZDogI2U2ZTZlNjtcbiAgY29sb3I6ICMwYTZkZWI7XG4gIHBhZGRpbmc6IDVweCAxNXB4O1xuICBtYXJnaW4tbGVmdDogMjVweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWluLXdpZHRoOiA4MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ObjComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-obj',
                templateUrl: './obj.component.html',
                styleUrls: ['./obj.component.less']
            }]
    }], function () { return []; }, { list: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], outer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/pages/show/target2/sence/sence.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/show/target2/sence/sence.component.ts ***!
  \*************************************************************/
/*! exports provided: SenceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SenceComponent", function() { return SenceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class SenceComponent {
    constructor() { }
    ngOnInit() {
    }
}
SenceComponent.??fac = function SenceComponent_Factory(t) { return new (t || SenceComponent)(); };
SenceComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: SenceComponent, selectors: [["app-sence"]], decls: 0, vars: 0, template: function SenceComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9hcHAvcGFnZXMvc2hvdy90YXJnZXQyL3NlbmNlL3NlbmNlLmNvbXBvbmVudC5sZXNzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](SenceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sence',
                templateUrl: './sence.component.html',
                styleUrls: ['./sence.component.less']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/show/target2/target2-label/target2-label.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/show/target2/target2-label/target2-label.component.ts ***!
  \*****************************************************************************/
/*! exports provided: Target2LabelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Target2LabelComponent", function() { return Target2LabelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function Target2LabelComponent_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", item_r1, " ");
} }
class Target2LabelComponent {
    constructor() { }
    ngOnInit() {
        console.log(this.list);
    }
}
Target2LabelComponent.??fac = function Target2LabelComponent_Factory(t) { return new (t || Target2LabelComponent)(); };
Target2LabelComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: Target2LabelComponent, selectors: [["app-target2-label"]], inputs: { list: "list" }, decls: 2, vars: 1, consts: [[4, "ngFor", "ngForOf"], [1, "border_table", "border_table_left_top"], [1, "border_table", "border_table_right_top"], [1, "border_table", "border_table_left_bottom"], [1, "border_table", "border_table_right_bottom"]], template: function Target2LabelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, Target2LabelComponent_li_1_Template, 6, 1, "li", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.list);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["ul[_ngcontent-%COMP%] {\n  padding: 10px;\n  margin-top: 20px;\n  height: 280px;\n  overflow-y: a;\n}\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  float: left;\n  list-style: none;\n  padding: 5px 30px;\n  margin-left: 30px;\n  margin-bottom: 30px;\n  background: #5081ca;\n  position: relative;\n  color: #fff;\n  cursor: pointer;\n}\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .border_table[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 10px;\n  height: 10px;\n}\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .border_table_left_top[_ngcontent-%COMP%] {\n  top: -5px;\n  left: -5px;\n  border-top: 2px solid #5081ca;\n  border-left: 2px solid #5081ca;\n}\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .border_table_right_top[_ngcontent-%COMP%] {\n  top: -5px;\n  right: -5px;\n  border-top: 2px solid #5081ca;\n  border-right: 2px solid #5081ca;\n}\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .border_table_left_bottom[_ngcontent-%COMP%] {\n  bottom: -5px;\n  left: -5px;\n  border-bottom: 2px solid #5081ca;\n  border-left: 2px solid #5081ca;\n}\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .border_table_right_bottom[_ngcontent-%COMP%] {\n  bottom: -5px;\n  right: -5px;\n  border-bottom: 2px solid #5081ca;\n  border-right: 2px solid #5081ca;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC9wYWdlcy9zaG93L3RhcmdldDIvdGFyZ2V0Mi1sYWJlbC9EOi9mZi90YXJnZXQtcmVjb2duaXplLXd3dy1odG1sLVYwLjIvc3JjL2FwcC9wYWdlcy9zaG93L3RhcmdldDIvdGFyZ2V0Mi1sYWJlbC90YXJnZXQyLWxhYmVsLmNvbXBvbmVudC5sZXNzIiwiLi4vYXBwL3BhZ2VzL3Nob3cvdGFyZ2V0Mi90YXJnZXQyLWxhYmVsL3RhcmdldDItbGFiZWwuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtBQ0NKO0FETEE7RUFNUSxXQUFBO0VBQ0MsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNFVDtBRGhCQTtFQWdCYSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDR2I7QURyQkE7RUFzQmEsU0FBQTtFQUNBLFVBQUE7RUFDQSw2QkFBQTtFQUNBLDhCQUFBO0FDRWI7QUQzQkE7RUE0QmEsU0FBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtFQUNBLCtCQUFBO0FDRWI7QURqQ0E7RUFrQ2EsWUFBQTtFQUNBLFVBQUE7RUFDQSxnQ0FBQTtFQUNBLDhCQUFBO0FDRWI7QUR2Q0E7RUF3Q2EsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQ0FBQTtFQUNBLCtCQUFBO0FDRWIiLCJmaWxlIjoiLi4vYXBwL3BhZ2VzL3Nob3cvdGFyZ2V0Mi90YXJnZXQyLWxhYmVsL3RhcmdldDItbGFiZWwuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ1bHtcbiAgICBwYWRkaW5nOjEwcHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBoZWlnaHQ6IDI4MHB4O1xuICAgIG92ZXJmbG93LXk6IGE7XG4gICAgIGxpe1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICBwYWRkaW5nOiA1cHggMzBweDtcbiAgICAgICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgICAgIGJhY2tncm91bmQ6ICM1MDgxY2E7XG4gICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgIC5ib3JkZXJfdGFibGV7XG4gICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgIHdpZHRoOiAxMHB4O1xuICAgICAgICAgICAgIGhlaWdodDogMTBweDtcbiAgICAgICAgICAgICBcbiAgICAgICAgIH1cbiAgICAgICAgIC5ib3JkZXJfdGFibGVfbGVmdF90b3B7XG4gICAgICAgICAgICAgdG9wOiAtNXB4O1xuICAgICAgICAgICAgIGxlZnQ6LTVweDtcbiAgICAgICAgICAgICBib3JkZXItdG9wOiAycHggc29saWQgIzUwODFjYTtcbiAgICAgICAgICAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkICM1MDgxY2E7XG4gICAgICAgICB9XG4gICAgICAgICAuYm9yZGVyX3RhYmxlX3JpZ2h0X3RvcHtcbiAgICAgICAgICAgICB0b3A6IC01cHg7XG4gICAgICAgICAgICAgcmlnaHQ6LTVweDtcbiAgICAgICAgICAgICBib3JkZXItdG9wOiAycHggc29saWQgIzUwODFjYTtcbiAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjNTA4MWNhO1xuICAgICAgICAgfVxuICAgICAgICAgLmJvcmRlcl90YWJsZV9sZWZ0X2JvdHRvbXtcbiAgICAgICAgICAgICBib3R0b206IC01cHg7XG4gICAgICAgICAgICAgbGVmdDotNXB4O1xuICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNTA4MWNhO1xuICAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgIzUwODFjYTtcbiAgICAgICAgIH1cbiAgICAgICAgIC5ib3JkZXJfdGFibGVfcmlnaHRfYm90dG9te1xuICAgICAgICAgICAgIGJvdHRvbTogLTVweDtcbiAgICAgICAgICAgICByaWdodDotNXB4O1xuICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNTA4MWNhO1xuICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICM1MDgxY2E7XG4gICAgICAgICB9XG4gICAgIH1cbiB9IiwidWwge1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBoZWlnaHQ6IDI4MHB4O1xuICBvdmVyZmxvdy15OiBhO1xufVxudWwgbGkge1xuICBmbG9hdDogbGVmdDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzogNXB4IDMwcHg7XG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICBiYWNrZ3JvdW5kOiAjNTA4MWNhO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGNvbG9yOiAjZmZmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG51bCBsaSAuYm9yZGVyX3RhYmxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiAxMHB4O1xufVxudWwgbGkgLmJvcmRlcl90YWJsZV9sZWZ0X3RvcCB7XG4gIHRvcDogLTVweDtcbiAgbGVmdDogLTVweDtcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICM1MDgxY2E7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgIzUwODFjYTtcbn1cbnVsIGxpIC5ib3JkZXJfdGFibGVfcmlnaHRfdG9wIHtcbiAgdG9wOiAtNXB4O1xuICByaWdodDogLTVweDtcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICM1MDgxY2E7XG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICM1MDgxY2E7XG59XG51bCBsaSAuYm9yZGVyX3RhYmxlX2xlZnRfYm90dG9tIHtcbiAgYm90dG9tOiAtNXB4O1xuICBsZWZ0OiAtNXB4O1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzUwODFjYTtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjNTA4MWNhO1xufVxudWwgbGkgLmJvcmRlcl90YWJsZV9yaWdodF9ib3R0b20ge1xuICBib3R0b206IC01cHg7XG4gIHJpZ2h0OiAtNXB4O1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzUwODFjYTtcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgIzUwODFjYTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](Target2LabelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-target2-label',
                templateUrl: './target2-label.component.html',
                styleUrls: ['./target2-label.component.less']
            }]
    }], function () { return []; }, { list: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/pages/show/target2/target2.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/show/target2/target2.component.ts ***!
  \*********************************************************/
/*! exports provided: Target2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Target2Component", function() { return Target2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service.service */ "./src/app/pages/show/service.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_pipes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../app.pipes */ "./src/app/app.pipes.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _obj_obj_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./obj/obj.component */ "./src/app/pages/show/target2/obj/obj.component.ts");
/* harmony import */ var _world_world_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./world/world.component */ "./src/app/pages/show/target2/world/world.component.ts");
/* harmony import */ var _key_key_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./key/key.component */ "./src/app/pages/show/target2/key/key.component.ts");
/* harmony import */ var _sence_sence_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sence/sence.component */ "./src/app/pages/show/target2/sence/sence.component.ts");
/* harmony import */ var _target2_label_target2_label_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./target2-label/target2-label.component */ "./src/app/pages/show/target2/target2-label/target2-label.component.ts");
/* harmony import */ var _time_time_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./time/time.component */ "./src/app/pages/show/target2/time/time.component.ts");














function Target2Component_li_25_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function Target2Component_li_25_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r11); const key_r9 = ctx.index; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r10.changeLi(key_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    const key_r9 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("hidden", key_r9 == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", item_r8.title, " ");
} }
function Target2Component_p_27_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "app-obj", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("outer", function Target2Component_p_27_Template_app_obj_outer_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r12.changeVideoTime($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("list", ctx_r1.videoArr[ctx_r1.videoSelect].items[ctx_r1.itemSelect].list);
} }
function Target2Component_p_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "app-world", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("list", ctx_r2.videoArr[ctx_r2.videoSelect].items[ctx_r2.itemSelect].list);
} }
function Target2Component_p_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "app-key", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("list", ctx_r3.videoArr[ctx_r3.videoSelect].items[ctx_r3.itemSelect].list);
} }
function Target2Component_p_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "app-sence");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function Target2Component_p_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "app-target2-label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("list", ctx_r5.videoArr[ctx_r5.videoSelect].items[ctx_r5.itemSelect].list);
} }
function Target2Component_p_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "app-time", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("list", ctx_r6.videoArr[ctx_r6.videoSelect].items[ctx_r6.itemSelect].list);
} }
function Target2Component_div_36_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function Target2Component_div_36_Template_div_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r17); const key_r15 = ctx.index; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r16.changeVideoUrl($event, key_r15); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "video", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](4, "videoInfo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const item_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", item_r14.videoSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](4, 2, item_r14));
} }
class Target2Component {
    constructor(ServiceService, http, OssPathPipe) {
        this.ServiceService = ServiceService;
        this.http = http;
        this.OssPathPipe = OssPathPipe;
        this.videoArr = [];
        this.isreuqest = true;
        this.videoSelect = 0;
        this.itemSelect = 0;
    }
    ngOnInit() {
        this.changeRequestData();
    }
    ngAfterViewInit() {
        this.getVideoPic();
        $(".content .top .left video").mouseover(function () {
            $(".content .top .left .video-info").animate({ top: "0" }, 200);
        }).mouseleave(function () {
            let height = "-" + $(".content .top .left .video-info").css("height");
            $(".content .top .left .video-info").animate({ top: height }, 200);
        });
    }
    changeLi(key) {
        if (key == this.itemSelect) {
            return;
        }
        else {
            var tabLi = document.querySelectorAll(".right li");
            for (let i = 0; i < tabLi.length; i++) {
                tabLi[i].style.background = "#e1ecf8";
                tabLi[i].style.color = '#0a6deb';
            }
            tabLi[key].style.background = "#0a6deb";
            tabLi[key].style.color = '#fff';
            this.itemSelect = key;
        }
    }
    getVideoPic() {
        var videoDom = document.querySelectorAll('.bottom video');
        var i = 0;
        for (let i = 0; i < videoDom.length; i++) {
            const element = videoDom[i];
            element.currentTime = 3;
        }
    }
    changeVideoUrl(e, key) {
        if (this.videoSelect == key)
            return;
        var liDom = document.querySelectorAll('.bottom .swiper-slide');
        var videoDom = document.querySelector('.left video');
        for (let i = 0; i < liDom.length; i++) {
            const element = liDom[i];
            element.style.border = 'none';
        }
        liDom[key].style.border = '2px solid #e29426';
        this.videoSelect = key;
        this.changeLi(0);
        videoDom.play();
    }
    changeVideoTime(time) {
        var videoDom = document.querySelector('.left video');
        videoDom.currentTime = time;
    }
    changeRequestData() {
        var api = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL}/v1/frame-detect/instructions?typeName=video&pageIndex=1&pageSize=100`;
        this.http.post(api, {}).subscribe((res) => {
            // console.log(res.data.records)
            res.data.records.forEach(element => {
                for (var key in element) {
                    if (key == 'keyObjectList' || key == 'objectStartTimeVoList' || key == 'labelVoList') {
                        element[key] = JSON.parse(element[key]);
                    }
                    else if (key == 'keyWordVoList' || key == 'keyFrameVoList') {
                        element[key] = JSON.parse(element[key]);
                        element[key].forEach(x => {
                            x.imgUrl = element.url + '/' + x.imgUrl;
                        });
                    }
                }
            });
            // .records
            var data = res.data.records;
            var dataArr = [];
            var url = localStorage.getItem("targetRecognizePath");
            for (let index = 0; index < data.length; index++) {
                let dataIndex = data[index];
                dataArr.push({
                    videoSrc: url + '/' + dataIndex.targetPath,
                    imgSrc: '',
                    ext2: dataIndex.ext2,
                    ext4: dataIndex.ext4,
                    ext5: dataIndex.ext5,
                    items: []
                });
                dataArr.videoSrc = dataIndex.url + '/' + dataIndex.targetPath;
                let dataInfo = {};
                let dataInfoArr = [];
                dataIndex.keyObjectList.forEach((item, index) => {
                    let { objectName } = item;
                    if (!dataInfo[objectName]) {
                        dataInfo[objectName] = {
                            name: '',
                            key: [],
                        };
                    }
                    dataInfo[objectName].key.push(item.appearTime);
                    dataInfo[objectName].name = item.objectName;
                });
                var list = Object.values(dataInfo); // list ?????????????????????
                list.forEach(function (x) {
                    for (var key in x) {
                        if (key == 'key') {
                            var arr = [];
                            x[key].forEach(element => {
                                var arr2 = element.split(':');
                                arr.push(arr2[0] * 60 * 60 + arr2[1] * 60 + arr2[2] * 1 + '\'');
                            });
                            x[key] = arr;
                        }
                    }
                });
                for (var key in dataInfo) {
                    dataInfoArr.push(dataInfo[key]);
                }
                let dataText = [];
                dataIndex.keyWordVoList.forEach((x) => {
                    let obj = {
                        text: x.word,
                        imgSrc: x.imgUrl,
                        key: 0,
                    };
                    let time = x.wordTime.split(":");
                    obj.key = (time[0] * 60 * 60 + time[1] * 60 + time[2]) * 1;
                    dataText.push(obj);
                });
                let dataFrame = [];
                dataIndex.keyFrameVoList.forEach((x) => {
                    let obj = {
                        imgSrc: x.imgUrl,
                        key: 0
                    };
                    let time = x.startTime.split(":");
                    obj.key = (time[0] * 60 * 60 + time[1] * 60 + time[2]) * 1;
                    dataFrame.push(obj);
                });
                let dataTimeCount = [];
                dataIndex.objectStartTimeVoList.forEach((x) => {
                    let obj = {
                        name: x.targetName,
                        time: x.startTimeCount,
                    };
                    dataTimeCount.push(obj);
                });
                dataArr[index].items.push({
                    title: '????????????',
                    list: dataInfoArr
                }, {
                    title: '??????',
                    list: dataText
                }, {
                    title: '?????????',
                    list: dataFrame
                }, {
                    title: '??????',
                }, {
                    title: '??????',
                    list: dataIndex.labelVoList
                }, {
                    title: '??????????????????',
                    list: dataTimeCount
                });
            }
            dataArr.forEach(element => {
                this.videoArr.push(element);
            });
            setTimeout(() => {
                this.initSwiper();
            }, 200);
        });
    }
    initSwiper() {
        var that = this;
        this.isreuqest = true;
        this.swiper = new Swiper(".mySwiper", {
            slidesPerView: 5,
            centeredSlides: false,
            spaceBetween: 30,
            grabCursor: true,
            on: {
                setTranslate: function (translate) {
                    //???????????????
                    //  console.log(that.swiper,translate)
                },
            }
        });
        // this.swiper.setTranslate(0);//??????????????????????????????
        // that.swiper.translate = 0
        // console.log(that.swiper.previousTranslate)
    }
}
Target2Component.??fac = function Target2Component_Factory(t) { return new (t || Target2Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_service_service__WEBPACK_IMPORTED_MODULE_2__["ServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_app_pipes__WEBPACK_IMPORTED_MODULE_4__["OssPathPipe"])); };
Target2Component.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: Target2Component, selectors: [["app-target2"]], decls: 37, vars: 13, consts: [[1, "target2"], ["href", "/home", 2, "display", "inline", "color", "#fff"], ["src", "assets/images/videoBanner.png", "alt", ""], [1, "content"], [1, "top"], [1, "left"], [1, "video-info"], [1, "video-title"], [1, "video-time"], [1, "video-antor"], ["controls", "", "data-setup", "{}", "type", "video/mp4", "ngDefaultControl", "", 3, "src"], [1, "right"], [3, "hidden", "click", 4, "ngFor", "ngForOf"], [3, "ngSwitch"], ["style", "overflow: auto; height: 354px;", 4, "ngSwitchCase"], ["style", "overflow-y: auto; height: 354px;", 4, "ngSwitchCase"], [1, "bottom"], [1, "swiper", "mySwiper"], [1, "swiper-wrapper"], ["class", "swiper-slide", 3, "click", 4, "ngFor", "ngForOf"], [3, "hidden", "click"], [2, "overflow", "auto", "height", "354px"], [3, "list", "outer"], [2, "overflow-y", "auto", "height", "354px"], [3, "list"], [1, "swiper-slide", 3, "click"], [1, "video", 2, "width", "100%", "height", "100%", 3, "src"], [2, "bottom", "0px", "position", "absolute", "width", "100%", "background", "rgba(0,0,0,.5)", "color", "#fff", "font-size", "14px", "text-align", "center"]], template: function Target2Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "\u9996\u9875 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, " / \u5F71\u50CF\u6574\u7F16\u5E93 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "\u5F71\u50CF\u5206\u6790\u6A21\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "\u5FEB\u901F\u68C0\u6D4B\u4EBA\u8138\u5E76\u8FD4\u56DE\u4EBA\u8138\u6846\u4F4D\u7F6E\uFF0C\u8F93\u51FA\u4EBA\u8138150\u4E2A\u5173\u952E\u70B9\u5750\u6807\uFF0C\u51C6\u786E\u8BC6\u522B\u591A\u79CD\u5C5E\u6027\u4FE1\u606F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](22, "video", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](25, Target2Component_li_25_Template, 2, 2, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](27, Target2Component_p_27_Template, 2, 1, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](28, Target2Component_p_28_Template, 2, 1, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](29, Target2Component_p_29_Template, 2, 1, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](30, Target2Component_p_30_Template, 2, 0, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](31, Target2Component_p_31_Template, 2, 1, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](32, Target2Component_p_32_Template, 2, 1, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](36, Target2Component_div_36_Template, 5, 4, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.videoArr[ctx.videoSelect].ext2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("\u4E0A\u4F20\u65F6\u95F4\uFF1A", ctx.videoArr[ctx.videoSelect].ext4, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" \u4F5C\u8005\uFF1A", ctx.videoArr[ctx.videoSelect].ext5, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", ctx.videoArr[ctx.videoSelect].videoSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.videoArr[ctx.videoSelect].items);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngSwitch", ctx.itemSelect);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngSwitchCase", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngSwitchCase", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngSwitchCase", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngSwitchCase", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngSwitchCase", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngSwitchCase", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.videoArr);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgSwitchCase"], _obj_obj_component__WEBPACK_IMPORTED_MODULE_7__["ObjComponent"], _world_world_component__WEBPACK_IMPORTED_MODULE_8__["WorldComponent"], _key_key_component__WEBPACK_IMPORTED_MODULE_9__["KeyComponent"], _sence_sence_component__WEBPACK_IMPORTED_MODULE_10__["SenceComponent"], _target2_label_target2_label_component__WEBPACK_IMPORTED_MODULE_11__["Target2LabelComponent"], _time_time_component__WEBPACK_IMPORTED_MODULE_12__["TimeComponent"]], pipes: [_app_pipes__WEBPACK_IMPORTED_MODULE_4__["VideoInfoPipe"]], styles: [".target2[_ngcontent-%COMP%] {\n  padding-bottom: 50px;\n  background: #fff;\n}\n.target2[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] {\n  color: #fff;\n  position: relative;\n  overflow: hidden;\n}\n.target2[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  left: 200px;\n}\n.target2[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 165px;\n  left: 360px;\n  width: 680px;\n}\n.target2[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #fff;\n  margin-bottom: 20px;\n}\n.target2[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  position: relative;\n  left: 0;\n}\n.target2[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  width: 80%;\n  height: 680px;\n  margin: 20px auto;\n  display: flex;\n  flex-wrap: wrap;\n}\n.target2[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%] {\n  flex: 0 0 100%;\n  height: 70%;\n  display: flex;\n  border: 1px solid #dcdcdc;\n  background: #fafafa;\n}\n.target2[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n  flex: 0 0 45%;\n  background: black;\n  padding: 1px;\n  position: relative;\n  overflow: hidden;\n}\n.target2[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .video-info[_ngcontent-%COMP%] {\n  padding: 5px;\n  width: 100%;\n  color: #fff;\n  position: absolute;\n  top: -500px;\n  left: 0;\n  background: rgba(0, 0, 0, 0.5);\n}\n.target2[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .video-info[_ngcontent-%COMP%]   .video-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.target2[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .video-info[_ngcontent-%COMP%]   .video-time[_ngcontent-%COMP%], .target2[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .video-info[_ngcontent-%COMP%]   .video-antor[_ngcontent-%COMP%] {\n  color: #cacaca;\n  font-size: 12px;\n}\n.target2[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  margin: auto 0;\n}\n.target2[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.target2[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: flex;\n  list-style: none;\n  margin: 27px 50px;\n}\n.target2[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  background: #e1ecf8;\n  color: #0a6deb;\n  text-align: center;\n  padding: 10px 15px;\n  font-size: 14px;\n  cursor: pointer;\n  min-width: 86px;\n}\n.target2[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child {\n  background: #0a6deb;\n  color: #fff;\n}\n.target2[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 30px;\n  padding-top: 20px;\n}\n.target2[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%] {\n  border: 1px solid #ebebeb;\n  background: #ebebeb;\n  width: 100%;\n  overflow: hidden;\n  height: 30%;\n  position: relative;\n}\n.target2[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   .swiper[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n.target2[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 18px;\n  background: #fff;\n  \n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.target2[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%]:first-child {\n  border: 2px solid #e29426;\n}\n.target2[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC9wYWdlcy9zaG93L3RhcmdldDIvRDovZmYvdGFyZ2V0LXJlY29nbml6ZS13d3ctaHRtbC1WMC4yL3NyYy9hcHAvcGFnZXMvc2hvdy90YXJnZXQyL3RhcmdldDIuY29tcG9uZW50Lmxlc3MiLCIuLi9hcHAvcGFnZXMvc2hvdy90YXJnZXQyL3RhcmdldDIuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxvQkFBQTtFQUVBLGdCQUFBO0FDREo7QURGQTtFQUtRLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDQVI7QURQQTtFQVNZLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUNDWjtBRFpBO0VBY1ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDWjtBRGxCQTtFQW1CZ0IsV0FBQTtFQUNBLG1CQUFBO0FDRWhCO0FEdEJBO0VBdUJnQixrQkFBQTtFQUNBLE9BQUE7QUNFaEI7QUQxQkE7RUErQlEsVUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FDRlI7QURqQ0E7RUFxQ1ksY0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQ0RaO0FEeENBO0VBMkNnQixhQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0FoQjtBRC9DQTtFQWlEb0IsWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsT0FBQTtFQUNBLDhCQUFBO0FDQ3BCO0FEeERBO0VBeUR3QixlQUFBO0FDRXhCO0FEM0RBOztFQTREd0IsY0FBQTtFQUNBLGVBQUE7QUNHeEI7QURoRUE7RUFpRW9CLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQ0VwQjtBRHJFQTtFQXVFZ0IsT0FBQTtBQ0NoQjtBRHhFQTtFQXlFb0IsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNFcEI7QUQ3RUE7RUE2RXdCLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQ0d4QjtBREZ3QjtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQ0l4QjtBRDNGQTtFQTZGd0IsWUFBQTtFQUNBLGlCQUFBO0FDQ3hCO0FEL0ZBO0VBcUdZLHlCQUFBO0VBQ0EsbUJBQUE7RUFFQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNKWjtBRHZHQTtFQTZHZ0IsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0hoQjtBRDVHQTtFQWtIZ0Isa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUNIZCxpQ0FBaUM7RURRbkIsYUFBQTtFQUlBLHVCQUFBO0VBSUEsbUJBQUE7QUNIaEI7QURJZ0I7RUFDUSx5QkFBQTtBQ0Z4QjtBRGpJQTtFQXVJZ0IsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNIaEIiLCJmaWxlIjoiLi4vYXBwL3BhZ2VzL3Nob3cvdGFyZ2V0Mi90YXJnZXQyLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiXG4udGFyZ2V0MntcbiAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcbiAgICAvLyBoZWlnaHQ6IDEzMCU7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBoZWFkZXJ7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDEwcHg7XG4gICAgICAgICAgICBsZWZ0OiAyMDBweDtcbiAgICAgICAgfVxuICAgICAgICBkaXZ7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDE2NXB4O1xuICAgICAgICAgICAgbGVmdDogMzYwcHg7XG4gICAgICAgICAgICB3aWR0aDogNjgwcHg7XG4gICAgICAgICAgICBoMXtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjsgXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgXG4gICBcbiAgICAuY29udGVudHtcbiAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgaGVpZ2h0OiA2ODBweDtcbiAgICAgICAgbWFyZ2luOiAyMHB4IGF1dG87XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgLnRvcHtcbiAgICAgICAgICAgIGZsZXg6IDAgMCAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiA3MCU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RjZGNkYztcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmYWZhZmE7XG4gICAgICAgICAgICAubGVmdHtcbiAgICAgICAgICAgICAgICBmbGV4OiAwIDAgNDUlO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICAudmlkZW8taW5mb3tcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAtNTAwcHg7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsLjUpO1xuICAgICAgICAgICAgICAgICAgICAudmlkZW8tdGl0bGV7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnZpZGVvLXRpbWUsLnZpZGVvLWFudG9ye1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJnYigyMDIsIDIwMiwgMjAyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2aWRlb3tcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG8gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucmlnaHR7XG4gICAgICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICAgICAgICB1bHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAyN3B4IDUwcHg7XG4gICAgICAgICAgICAgICAgICAgIGxpe1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2UxZWNmODtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMGE2ZGViO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAxNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiA4NnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgJjpmaXJzdC1jaGlsZHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwYTZkZWI7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzcGFue1xuICAgICAgICAgICAgICAgICAgICBwe1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICAuYm90dG9te1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ViZWJlYjtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlYmViZWI7XG4gICAgICAgICAgICAvLyBmbGV4OiAxO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgaGVpZ2h0OiAzMCU7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAuc3dpcGVyIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuc3dpcGVyLXNsaWRlIHtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgICAgICAgLyogQ2VudGVyIHNsaWRlIHRleHQgdmVydGljYWxseSAqL1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgJjpmaXJzdC1jaGlsZHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNlMjk0MjY7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuc3dpcGVyLXNsaWRlIHZpZGVvIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gdWx7XG4gICAgICAgICAgICAvLyAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgIC8vICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgLy8gICAgIG92ZXJmbG93LXg6IGF1dG87XG4gICAgICAgICAgICAvLyAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAvLyAgICAgcGFkZGluZzogMTBweCA1cHg7XG4gICAgICAgICAgICAvLyAgICAgbGl7XG4gICAgICAgICAgICAvLyAgICAgICAgIGZsZXg6MCAwIDIwJTtcbiAgICAgICAgICAgIC8vICAgICAgICAgaGVpZ2h0OiAxODBweDtcbiAgICAgICAgICAgIC8vICAgICAgICAgbWFyZ2luOiA1cHggMjBweDtcbiAgICAgICAgICAgIC8vICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgLy8gICAgICAgICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgICAgICAgICAgIC8vICAgICAgICAgcGFkZGluZzogMXB4O1xuICAgICAgICAgICAgLy8gICAgICAgICAmOmZpcnN0LWNoaWxke1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2UyOTQyNjtcbiAgICAgICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG4gICAgXG5cblxufSIsIi50YXJnZXQyIHtcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG4udGFyZ2V0MiBoZWFkZXIge1xuICBjb2xvcjogI2ZmZjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLnRhcmdldDIgaGVhZGVyIHAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTBweDtcbiAgbGVmdDogMjAwcHg7XG59XG4udGFyZ2V0MiBoZWFkZXIgZGl2IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE2NXB4O1xuICBsZWZ0OiAzNjBweDtcbiAgd2lkdGg6IDY4MHB4O1xufVxuLnRhcmdldDIgaGVhZGVyIGRpdiBoMSB7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLnRhcmdldDIgaGVhZGVyIGRpdiBwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAwO1xufVxuLnRhcmdldDIgLmNvbnRlbnQge1xuICB3aWR0aDogODAlO1xuICBoZWlnaHQ6IDY4MHB4O1xuICBtYXJnaW46IDIwcHggYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuLnRhcmdldDIgLmNvbnRlbnQgLnRvcCB7XG4gIGZsZXg6IDAgMCAxMDAlO1xuICBoZWlnaHQ6IDcwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RjZGNkYztcbiAgYmFja2dyb3VuZDogI2ZhZmFmYTtcbn1cbi50YXJnZXQyIC5jb250ZW50IC50b3AgLmxlZnQge1xuICBmbGV4OiAwIDAgNDUlO1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgcGFkZGluZzogMXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4udGFyZ2V0MiAuY29udGVudCAudG9wIC5sZWZ0IC52aWRlby1pbmZvIHtcbiAgcGFkZGluZzogNXB4O1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6ICNmZmY7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtNTAwcHg7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cbi50YXJnZXQyIC5jb250ZW50IC50b3AgLmxlZnQgLnZpZGVvLWluZm8gLnZpZGVvLXRpdGxlIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuLnRhcmdldDIgLmNvbnRlbnQgLnRvcCAubGVmdCAudmlkZW8taW5mbyAudmlkZW8tdGltZSxcbi50YXJnZXQyIC5jb250ZW50IC50b3AgLmxlZnQgLnZpZGVvLWluZm8gLnZpZGVvLWFudG9yIHtcbiAgY29sb3I6ICNjYWNhY2E7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi50YXJnZXQyIC5jb250ZW50IC50b3AgLmxlZnQgdmlkZW8ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW46IGF1dG8gMDtcbn1cbi50YXJnZXQyIC5jb250ZW50IC50b3AgLnJpZ2h0IHtcbiAgZmxleDogMTtcbn1cbi50YXJnZXQyIC5jb250ZW50IC50b3AgLnJpZ2h0IHVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luOiAyN3B4IDUwcHg7XG59XG4udGFyZ2V0MiAuY29udGVudCAudG9wIC5yaWdodCB1bCBsaSB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgYmFja2dyb3VuZDogI2UxZWNmODtcbiAgY29sb3I6ICMwYTZkZWI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweCAxNXB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWluLXdpZHRoOiA4NnB4O1xufVxuLnRhcmdldDIgLmNvbnRlbnQgLnRvcCAucmlnaHQgdWwgbGk6Zmlyc3QtY2hpbGQge1xuICBiYWNrZ3JvdW5kOiAjMGE2ZGViO1xuICBjb2xvcjogI2ZmZjtcbn1cbi50YXJnZXQyIC5jb250ZW50IC50b3AgLnJpZ2h0IHNwYW4gcCB7XG4gIG1hcmdpbjogMzBweDtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG59XG4udGFyZ2V0MiAuY29udGVudCAuYm90dG9tIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ViZWJlYjtcbiAgYmFja2dyb3VuZDogI2ViZWJlYjtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGhlaWdodDogMzAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4udGFyZ2V0MiAuY29udGVudCAuYm90dG9tIC5zd2lwZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLnRhcmdldDIgLmNvbnRlbnQgLmJvdHRvbSAuc3dpcGVyLXNsaWRlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIC8qIENlbnRlciBzbGlkZSB0ZXh0IHZlcnRpY2FsbHkgKi9cbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcbiAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnRhcmdldDIgLmNvbnRlbnQgLmJvdHRvbSAuc3dpcGVyLXNsaWRlOmZpcnN0LWNoaWxkIHtcbiAgYm9yZGVyOiAycHggc29saWQgI2UyOTQyNjtcbn1cbi50YXJnZXQyIC5jb250ZW50IC5ib3R0b20gLnN3aXBlci1zbGlkZSB2aWRlbyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](Target2Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-target2',
                templateUrl: './target2.component.html',
                styleUrls: ['./target2.component.less']
            }]
    }], function () { return [{ type: _service_service__WEBPACK_IMPORTED_MODULE_2__["ServiceService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _app_pipes__WEBPACK_IMPORTED_MODULE_4__["OssPathPipe"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/show/target2/time/time.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/show/target2/time/time.component.ts ***!
  \***********************************************************/
/*! exports provided: TimeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeComponent", function() { return TimeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! echarts */ "./node_modules/echarts/index.js");



class TimeComponent {
    constructor() {
        this.legendData = [];
        this.series = [];
        this.xAxisData = [];
        this.yAxisData = [];
    }
    ngOnInit() {
        for (let index = 0; index < this.list.length; index++) {
            this.xAxisData.push(this.list[index].name);
            // this.yAxisData.push(this.list[index].time)
            this.legendData.push(this.list[index].name);
            this.series.push({
                name: this.list[index].name,
                type: 'bar',
                emphasis: {
                    focus: 'series'
                },
                data: [this.list[index].time]
            });
        }
        console.log(this.xAxisData, this.legendData, this.series);
    }
    ngAfterContentInit() {
        this.initCharts();
    }
    initCharts() {
        const ec = echarts__WEBPACK_IMPORTED_MODULE_1__;
        const barChart = ec.init(document.getElementById('barChart1'));
        const barChartOption = {
            tooltip: {
                trigger: 'item',
                triggerOn: 'mousemove',
                enterable: true,
                formatter: (parmas) => {
                    return `<span style="position: relative;top: 10px;padding:0 5px;">${parmas.value}</span>`;
                },
            },
            grid: {
                right: '20%',
            },
            title: {
                text: '???????????????',
                x: 'left',
                y: '25px',
                backgroundColor: 'rgba(0,0,0,0)',
                borderColor: '#ccc',
                borderWidth: 0,
                padding: [5, 15],
                itemGap: 10,
                textStyle: {
                    fontSize: 13,
                    color: '#000'
                },
                subtextStyle: {
                    color: '#aaa'
                }
            },
            label: {
                show: true,
                position: 'bottom',
                formatter: '{a}',
                color: '#2f4554',
                rotate: 45,
                offset: [0, 0],
                align: 'right',
                fontSize: 11,
            },
            // dataZoom: [
            //   {
            //     type: 'inside',
            //     start :0,
            //     end:100,
            //     bottom: '10px'
            //   },
            //   {
            //     type: 'slider',
            //     bottom: '10%',
            //     height: 0,
            //   },
            // ],
            xAxis: {
                type: 'category',
                data: [""],
                axisLabel: {
                    show: true,
                    interval: 0,
                    textStyle: {
                        color: '#000'
                    }
                },
            },
            yAxis: {
                type: 'value',
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#000'
                    }
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: ['#1f216d'],
                        width: 1,
                        type: 'solid'
                    },
                }
            },
            series: this.series,
            legend: {
                show: true,
                type: 'scroll',
                orient: 'vertical',
                right: 0,
                top: 10,
                bottom: 10,
                textStyle: { color: "#2f4554" }
            }
        };
        barChart.setOption(barChartOption);
    }
}
TimeComponent.??fac = function TimeComponent_Factory(t) { return new (t || TimeComponent)(); };
TimeComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: TimeComponent, selectors: [["app-time"]], inputs: { list: "list" }, decls: 1, vars: 0, consts: [["id", "barChart1", 2, "width", "100%", "height", "100%", "position", "relative", "top", "-30px"]], template: function TimeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "div", 0);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9hcHAvcGFnZXMvc2hvdy90YXJnZXQyL3RpbWUvdGltZS5jb21wb25lbnQubGVzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](TimeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-time',
                templateUrl: './time.component.html',
                styleUrls: ['./time.component.less']
            }]
    }], function () { return []; }, { list: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/pages/show/target2/world/world.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/show/target2/world/world.component.ts ***!
  \*************************************************************/
/*! exports provided: WorldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorldComponent", function() { return WorldComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function WorldComponent_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "img", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", item_r1.imgSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", item_r1.key, "\"");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](item_r1.text);
} }
class WorldComponent {
    constructor() { }
    ngOnInit() {
    }
}
WorldComponent.??fac = function WorldComponent_Factory(t) { return new (t || WorldComponent)(); };
WorldComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: WorldComponent, selectors: [["app-world"]], inputs: { list: "list" }, decls: 2, vars: 1, consts: [[4, "ngFor", "ngForOf"], ["alt", "", 3, "src"]], template: function WorldComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, WorldComponent_li_1_Template, 6, 3, "li", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.list);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["*[_ngcontent-%COMP%] {\n  list-style: none;\n}\nul[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  height: 320px;\n  overflow-y: auto;\n}\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  flex: 0 0 200px;\n  text-align: center;\n  position: relative;\n  padding: 15px;\n}\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 105px;\n}\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 15px;\n  top: 15px;\n  background: #3a71ef;\n  padding: 0 10px;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC9wYWdlcy9zaG93L3RhcmdldDIvd29ybGQvRDovZmYvdGFyZ2V0LXJlY29nbml6ZS13d3ctaHRtbC1WMC4yL3NyYy9hcHAvcGFnZXMvc2hvdy90YXJnZXQyL3dvcmxkL3dvcmxkLmNvbXBvbmVudC5sZXNzIiwiLi4vYXBwL3BhZ2VzL3Nob3cvdGFyZ2V0Mi93b3JsZC93b3JsZC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FDQ0o7QURDQTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FDQ0o7QURMQTtFQU1RLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQ0VSO0FEWEE7RUFXWSxXQUFBO0VBQ0EsYUFBQTtBQ0daO0FEZkE7RUFlWSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQ0daIiwiZmlsZSI6Ii4uL2FwcC9wYWdlcy9zaG93L3RhcmdldDIvd29ybGQvd29ybGQuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqe1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG51bHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBoZWlnaHQ6IDMyMHB4O1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgbGl7XG4gICAgICAgIGZsZXg6IDAgMCAyMDBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgIGltZ3tcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDVweDtcbiAgICAgICAgfVxuICAgICAgICBwe1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgcmlnaHQ6IDE1cHg7XG4gICAgICAgICAgICB0b3A6IDE1cHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjM2E3MWVmO1xuICAgICAgICAgICAgcGFkZGluZzogMCAxMHB4O1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIH1cbiAgICB9XG59IiwiKiB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG51bCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgaGVpZ2h0OiAzMjBweDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cbnVsIGxpIHtcbiAgZmxleDogMCAwIDIwMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMTVweDtcbn1cbnVsIGxpIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwNXB4O1xufVxudWwgbGkgcCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDE1cHg7XG4gIHRvcDogMTVweDtcbiAgYmFja2dyb3VuZDogIzNhNzFlZjtcbiAgcGFkZGluZzogMCAxMHB4O1xuICBjb2xvcjogI2ZmZjtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](WorldComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-world',
                templateUrl: './world.component.html',
                styleUrls: ['./world.component.less']
            }]
    }], function () { return []; }, { list: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");




class SsoComponent {
    constructor(route, store, router) {
        this.route = route;
        this.store = store;
        this.router = router;
    }
    ngOnInit() {
        this.route.queryParamMap.subscribe(paramMap => {
            // console.log(paramMap)
            // if (paramMap.has('jwt')) {
            //   const jwt = paramMap.get('jwt');
            //   localStorage.setItem('Bearer', jwt);
            //   this.store.dispatch(new LoginAction(jwt)).subscribe(() => {
            //     this.router.navigate(['/home']);
            //   });
            // }
        });
    }
}
SsoComponent.??fac = function SsoComponent_Factory(t) { return new (t || SsoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
SsoComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: SsoComponent, selectors: [["ng-component"]], decls: 2, vars: 0, consts: [[2, "color", "white"]], template: function SsoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "\u767B\u5F55\u4E2D....");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](SsoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                template: `<div style="color: white;">?????????....</div>`
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/video/accordion/accordion.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/video/accordion/accordion.component.ts ***!
  \**************************************************************/
/*! exports provided: AccordionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionComponent", function() { return AccordionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_video_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/video.service */ "./src/app/video.service.ts");
/* harmony import */ var ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/collapse */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-collapse.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");






function AccordionComponent_nz_collapse_panel_1_div_1_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const item2_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("src", item2_r8.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](item2_r8.wordTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](item2_r8.word);
} }
function AccordionComponent_nz_collapse_panel_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, AccordionComponent_nz_collapse_panel_1_div_1_li_2_Template, 6, 3, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r4.imgArr);
} }
function AccordionComponent_nz_collapse_panel_1_div_2_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const item3_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("src", item3_r11.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](item3_r11.startTime);
} }
function AccordionComponent_nz_collapse_panel_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, AccordionComponent_nz_collapse_panel_1_div_2_li_2_Template, 4, 2, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r5.frameArr);
} }
function AccordionComponent_nz_collapse_panel_1_div_3_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const item4_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("src", item4_r13.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](item4_r13.frame);
} }
function AccordionComponent_nz_collapse_panel_1_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, AccordionComponent_nz_collapse_panel_1_div_3_li_2_Template, 4, 2, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r6.scenceArr);
} }
function AccordionComponent_nz_collapse_panel_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "nz-collapse-panel", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, AccordionComponent_nz_collapse_panel_1_div_1_Template, 3, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, AccordionComponent_nz_collapse_panel_1_div_2_Template, 3, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, AccordionComponent_nz_collapse_panel_1_div_3_Template, 3, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const panel_r2 = ctx.$implicit;
    const key_r3 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzHeader", panel_r2.name)("nzActive", panel_r2.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", key_r3 == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", key_r3 == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", key_r3 == 2);
} }
class AccordionComponent {
    constructor(videoService, el) {
        this.videoService = videoService;
        this.el = el;
        this.videoUrl = '';
        this.panels = [
            {
                active: false,
                name: '??????',
                nn: '<app-video-list></app-video-list>'
            },
            {
                active: true,
                name: '?????????',
                nn: '<app-video-list></app-video-list>'
            }
        ];
        this.imgArr = [];
        this.frameArr = [];
        this.scenceArr = [
            {
                src: 'assets/demo2/policy3.png',
                frame: '2\'27\'',
            },
            {
                src: 'assets/demo2/policy3.png',
                frame: '27\'',
            },
            {
                src: 'assets/demo2/policy3.png',
                frame: '27\'',
            },
            {
                src: 'assets/demo2/policy3.png',
                frame: '27\'',
            },
            {
                src: 'assets/demo2/policy3.png',
                frame: '27\'',
            },
            {
                src: 'assets/demo2/policy3.png',
                frame: '27\'',
            },
            {
                src: 'assets/demo2/policy3.png',
                frame: '27\'',
            },
            {
                src: 'assets/demo2/policy3.png',
                frame: '27\'',
            },
            {
                src: 'assets/demo2/policy3.png',
                frame: '2\'27\'',
            },
            {
                src: 'assets/demo2/policy3.png',
                frame: '27\'',
            },
            {
                src: 'assets/demo2/policy3.png',
                frame: '27\'',
            },
            {
                src: 'assets/demo2/policy3.png',
                frame: '27\'',
            },
            {
                src: 'assets/demo2/policy3.png',
                frame: '27\'',
            },
            {
                src: 'assets/demo2/policy3.png',
                frame: '27\'',
            },
            {
                src: 'assets/demo2/policy3.png',
                frame: '27\'',
            },
            {
                src: 'assets/demo2/policy3.png',
                frame: '27\'',
            },
        ];
        this.count = 0;
        this.videoData = JSON.parse(localStorage.getItem('videoData'));
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        const orignalSetItem = localStorage.setItem; // ?????????setItem??????
        localStorage.setItem = function (key, newValue) {
            if (key == 'videoData') {
                const setItemEvent = new Event('setItemEvent');
                setItemEvent[key] = newValue; // ??????????????????
                orignalSetItem.apply(this, arguments); // ???????????????setItem??????
                window.dispatchEvent(setItemEvent); // ???????????????
            }
        };
        window.addEventListener('setItemEvent', (e) => {
            this.count++;
            if (this.count == 1) {
                this.imgArr = JSON.parse(e.videoData)[0].keyWordVoList;
                this.frameArr = JSON.parse(e.videoData)[0].keyFrameVoList;
            }
        });
        this.videoService.aClickedEvent
            .subscribe((data) => {
            this.imgArr = JSON.parse(localStorage.getItem('videoData'))[data].keyWordVoList;
            this.frameArr = JSON.parse(localStorage.getItem('videoData'))[data].keyFrameVoList;
        });
    }
}
AccordionComponent.??fac = function AccordionComponent_Factory(t) { return new (t || AccordionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_video_service__WEBPACK_IMPORTED_MODULE_1__["VideoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
AccordionComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: AccordionComponent, selectors: [["app-accordion"]], decls: 5, vars: 3, consts: [["nzAccordion", ""], [3, "nzHeader", "nzActive", 4, "ngFor", "ngForOf"], ["width", "343", "height", "200", "id", "canvas1", 2, "position", "absolute", "top", "10px", "display", "none"], ["controls", "", "type", "video/mp4", "id", "AccorVideo", "type", "video/mp4", "ngDefaultControl", "", "crossOrigin", "anonymous", 2, "width", "300px", "height", "200px", "position", "absolute", "top", "100px", "border", "1px solid red", "display", "none", 3, "src", "ngModel", "ngModelChange"], ["AccorVideo", ""], [3, "nzHeader", "nzActive"], ["style", "max-height: 378px;overflow-y: auto;padding-top: 10px;", "class", "world", 4, "ngIf"], ["style", "max-height: 378px;overflow-y: auto;padding-top: 10px;", "class", "keyframe", 4, "ngIf"], ["style", "max-height: 378px;overflow-y: auto;padding-top: 10px;display: none;", "class", "scence", 4, "ngIf"], [1, "world", 2, "max-height", "378px", "overflow-y", "auto", "padding-top", "10px"], ["class", "imgLi", 4, "ngFor", "ngForOf"], [1, "imgLi"], ["alt", "", "crossOrigin", "anonymous", 3, "src"], [1, "keyframe", 2, "max-height", "378px", "overflow-y", "auto", "padding-top", "10px"], ["class", "frameLi", 4, "ngFor", "ngForOf"], [1, "frameLi"], ["alt", "", 3, "src"], [1, "scence", 2, "max-height", "378px", "overflow-y", "auto", "padding-top", "10px", "display", "none"], [4, "ngFor", "ngForOf"]], template: function AccordionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "nz-collapse", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, AccordionComponent_nz_collapse_panel_1_Template, 4, 5, "nz-collapse-panel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "canvas", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "video", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function AccordionComponent_Template_video_ngModelChange_3_listener($event) { return ctx.videoUrl = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.panels);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", ctx.videoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"])("ngModel", ctx.videoUrl);
    } }, directives: [ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_2__["NzCollapseComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_2__["NzCollapsePanelComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["[_nghost-%COMP%]    .ant-collapse-header {\n  height: 30px;\n  color: #fff;\n  background: linear-gradient(to right, #074f8d, transparent);\n  padding-left: 20px;\n}\n[_nghost-%COMP%]    .ant-collapse > .ant-collapse-item > .ant-collapse-header .ant-collapse-arrow {\n  left: auto;\n  right: 16px;\n}\n[_nghost-%COMP%]    .ant-collapse {\n  background-color: transparent;\n  border: none;\n  color: #fff;\n}\n[_nghost-%COMP%]    .ant-collapse > .ant-collapse-item {\n  border: none;\n  margin-bottom: 10px;\n}\n[_nghost-%COMP%]    .ant-collapse-content {\n  background: transparent;\n  color: #fff;\n  border: none;\n}\n[_nghost-%COMP%]    .ant-collapse > .ant-collapse-item > .ant-collapse-header {\n  color: #fff;\n}\n[_nghost-%COMP%]    .ant-collapse > .ant-collapse-item > .ant-collapse-header {\n  padding: 0;\n  padding-left: 20px;\n  line-height: 30px;\n}\n[_nghost-%COMP%]    .ant-collapse-content > .ant-collapse-content-box {\n  padding: 0px 16px;\n}\n*[_ngcontent-%COMP%] {\n  list-style: none;\n}\n.world[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin-left: 20px;\n}\n.world[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-left: 20px;\n  width: 200px;\n  float: left;\n}\n.world[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.world[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  color: #fff;\n  position: relative;\n  top: -20px;\n  text-align: right;\n  background: rgba(0, 0, 0, 0.432);\n}\n.world[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #fff;\n  position: -30px;\n}\n.keyframe[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n  float: left;\n  width: 120px;\n  margin-left: 20px;\n  border: 1px solid #fff;\n  position: relative;\n  margin-bottom: 10px;\n}\n.keyframe[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.keyframe[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  background: #1396d9;\n  padding: 0px 10px;\n  color: #fff;\n  float: left;\n  position: absolute;\n  bottom: 0px;\n}\n.scence[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n  float: left;\n  width: 120px;\n  margin-left: 20px;\n  border: 1px solid #fff;\n  position: relative;\n  margin-bottom: 10px;\n}\n.scence[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.scence[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  background: #1396d9;\n  padding: 0px 10px;\n  color: #fff;\n  float: left;\n  position: absolute;\n  bottom: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC9wYWdlcy92aWRlby9hY2NvcmRpb24vRDovZmYvdGFyZ2V0LXJlY29nbml6ZS13d3ctaHRtbC1WMC4yL3NyYy9hcHAvcGFnZXMvdmlkZW8vYWNjb3JkaW9uL2FjY29yZGlvbi5jb21wb25lbnQubGVzcyIsIi4uL2FwcC9wYWdlcy92aWRlby9hY2NvcmRpb24vYWNjb3JkaW9uLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSwyREFBQTtFQUNBLGtCQUFBO0FDQ0o7QURDQTtFQUNJLFVBQUE7RUFDQSxXQUFBO0FDQ0o7QURDQTtFQUNJLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNDSjtBRENBO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0FDQ0o7QURDQTtFQUNJLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDSjtBRENBO0VBQ0ksV0FBQTtBQ0NKO0FEQ0E7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ0NKO0FEQ0E7RUFDSSxpQkFBQTtBQ0NKO0FEQ0E7RUFDSSxnQkFBQTtBQ0NKO0FEQ0E7RUFHUSxpQkFBQTtBQ0RSO0FERkE7RUFLWSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDQVo7QURQQTtFQVNnQixXQUFBO0FDQ2hCO0FEVkE7RUFZZ0IsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0NBQUE7QUNDaEI7QURqQkE7RUFtQmdCLFdBQUE7RUFDQSxlQUFBO0FDQ2hCO0FESUE7RUFHWSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNKWjtBRExBO0VBV2dCLFdBQUE7QUNIaEI7QURSQTtFQWNnQixtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNIaEI7QURRQTtFQUdZLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ1JaO0FEREE7RUFXZ0IsV0FBQTtBQ1BoQjtBREpBO0VBY2dCLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ1BoQiIsImZpbGUiOiIuLi9hcHAvcGFnZXMvdmlkZW8vYWNjb3JkaW9uL2FjY29yZGlvbi5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IDo6bmctZGVlcC5hbnQtY29sbGFwc2UtaGVhZGVye1xuICAgIGhlaWdodDogMzBweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIzA3NGY4ZCx0cmFuc3BhcmVudCk7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuOmhvc3QgOjpuZy1kZWVwLmFudC1jb2xsYXBzZSA+IC5hbnQtY29sbGFwc2UtaXRlbSA+IC5hbnQtY29sbGFwc2UtaGVhZGVyIC5hbnQtY29sbGFwc2UtYXJyb3d7XG4gICAgbGVmdDogYXV0bztcbiAgICByaWdodDogMTZweDtcbn1cbjpob3N0IDo6bmctZGVlcC5hbnQtY29sbGFwc2V7XG4gICAgYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6bm9uZTtcbiAgICBjb2xvcjogI2ZmZjtcbn1cbjpob3N0IDo6bmctZGVlcC5hbnQtY29sbGFwc2U+LmFudC1jb2xsYXBzZS1pdGVte1xuICAgIGJvcmRlcjpub25lO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG46aG9zdCA6Om5nLWRlZXAuYW50LWNvbGxhcHNlLWNvbnRlbnR7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyOiBub25lO1xufVxuOmhvc3QgOjpuZy1kZWVwLmFudC1jb2xsYXBzZSA+IC5hbnQtY29sbGFwc2UtaXRlbSA+IC5hbnQtY29sbGFwc2UtaGVhZGVye1xuICAgIGNvbG9yOiAjZmZmO1xufVxuOmhvc3QgOjpuZy1kZWVwLmFudC1jb2xsYXBzZSA+IC5hbnQtY29sbGFwc2UtaXRlbSA+IC5hbnQtY29sbGFwc2UtaGVhZGVye1xuICAgIHBhZGRpbmc6IDA7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xufVxuOmhvc3QgOjpuZy1kZWVwLmFudC1jb2xsYXBzZS1jb250ZW50ID4gLmFudC1jb2xsYXBzZS1jb250ZW50LWJveHtcbiAgICBwYWRkaW5nOiAwcHggMTZweDtcbn1cbip7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbi53b3JsZHtcblxuICAgIHVse1xuICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgICAgbGl7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgaW1ne1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGl2e1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICB0b3A6IC0yMHB4O1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC40MzIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogLTMwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4ua2V5ZnJhbWV7XG4gICAgdWx7XG4gICAgICAgIGxpe1xuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgd2lkdGg6IDEyMHB4O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgIGltZ3tcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRpdntcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMTM5NmQ5O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweCAxMHB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBib3R0b206IDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbi5zY2VuY2V7XG4gICAgdWx7XG4gICAgICAgIGxpe1xuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgd2lkdGg6IDEyMHB4O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgIGltZ3tcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRpdntcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMTM5NmQ5O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweCAxMHB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBib3R0b206IDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuIiwiOmhvc3QgOjpuZy1kZWVwLmFudC1jb2xsYXBzZS1oZWFkZXIge1xuICBoZWlnaHQ6IDMwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwNzRmOGQsIHRyYW5zcGFyZW50KTtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuOmhvc3QgOjpuZy1kZWVwLmFudC1jb2xsYXBzZSA+IC5hbnQtY29sbGFwc2UtaXRlbSA+IC5hbnQtY29sbGFwc2UtaGVhZGVyIC5hbnQtY29sbGFwc2UtYXJyb3cge1xuICBsZWZ0OiBhdXRvO1xuICByaWdodDogMTZweDtcbn1cbjpob3N0IDo6bmctZGVlcC5hbnQtY29sbGFwc2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogI2ZmZjtcbn1cbjpob3N0IDo6bmctZGVlcC5hbnQtY29sbGFwc2UgPiAuYW50LWNvbGxhcHNlLWl0ZW0ge1xuICBib3JkZXI6IG5vbmU7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG46aG9zdCA6Om5nLWRlZXAuYW50LWNvbGxhcHNlLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogbm9uZTtcbn1cbjpob3N0IDo6bmctZGVlcC5hbnQtY29sbGFwc2UgPiAuYW50LWNvbGxhcHNlLWl0ZW0gPiAuYW50LWNvbGxhcHNlLWhlYWRlciB7XG4gIGNvbG9yOiAjZmZmO1xufVxuOmhvc3QgOjpuZy1kZWVwLmFudC1jb2xsYXBzZSA+IC5hbnQtY29sbGFwc2UtaXRlbSA+IC5hbnQtY29sbGFwc2UtaGVhZGVyIHtcbiAgcGFkZGluZzogMDtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbn1cbjpob3N0IDo6bmctZGVlcC5hbnQtY29sbGFwc2UtY29udGVudCA+IC5hbnQtY29sbGFwc2UtY29udGVudC1ib3gge1xuICBwYWRkaW5nOiAwcHggMTZweDtcbn1cbioge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuLndvcmxkIHVsIHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG4ud29ybGQgdWwgbGkge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgd2lkdGg6IDIwMHB4O1xuICBmbG9hdDogbGVmdDtcbn1cbi53b3JsZCB1bCBsaSBpbWcge1xuICB3aWR0aDogMTAwJTtcbn1cbi53b3JsZCB1bCBsaSBkaXYge1xuICBjb2xvcjogI2ZmZjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0yMHB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjQzMik7XG59XG4ud29ybGQgdWwgbGkgcCB7XG4gIGNvbG9yOiAjZmZmO1xuICBwb3NpdGlvbjogLTMwcHg7XG59XG4ua2V5ZnJhbWUgdWwgbGkge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDEyMHB4O1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLmtleWZyYW1lIHVsIGxpIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmtleWZyYW1lIHVsIGxpIGRpdiB7XG4gIGJhY2tncm91bmQ6ICMxMzk2ZDk7XG4gIHBhZGRpbmc6IDBweCAxMHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwcHg7XG59XG4uc2NlbmNlIHVsIGxpIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAxMjBweDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5zY2VuY2UgdWwgbGkgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uc2NlbmNlIHVsIGxpIGRpdiB7XG4gIGJhY2tncm91bmQ6ICMxMzk2ZDk7XG4gIHBhZGRpbmc6IDBweCAxMHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwcHg7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AccordionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-accordion',
                templateUrl: './accordion.component.html',
                styleUrls: ['./accordion.component.less'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].Emulated,
            }]
    }], function () { return [{ type: src_app_video_service__WEBPACK_IMPORTED_MODULE_1__["VideoService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/video/chart/chart.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/video/chart/chart.component.ts ***!
  \******************************************************/
/*! exports provided: ChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartComponent", function() { return ChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! echarts */ "./node_modules/echarts/index.js");
/* harmony import */ var src_app_video_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/video.service */ "./src/app/video.service.ts");




class ChartComponent {
    constructor(videoService) {
        this.videoService = videoService;
        this.xAxisData = [];
        this.yAxisData = [];
        this.count = 0;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
        //Add 'implements AfterViewInit' to the class.
        const orignalSetItem = localStorage.setItem; // ?????????setItem??????
        localStorage.setItem = function (key, newValue) {
            if (key == 'videoData') {
                const setItemEvent = new Event('setItemEvent');
                setItemEvent[key] = newValue; // ??????????????????
                orignalSetItem.apply(this, arguments); // ???????????????setItem??????
                window.dispatchEvent(setItemEvent); // ???????????????
            }
        };
        window.addEventListener('setItemEvent', (e) => {
            this.count++;
            if (this.count == 1) {
                var objectStartTimeVoList = JSON.parse(localStorage.getItem("videoData"))[0].objectStartTimeVoList;
                objectStartTimeVoList.forEach(element => {
                    this.xAxisData.push(element.targetName);
                    this.yAxisData.push(element.startTimeCount * 1);
                });
                this.initCharts();
            }
        });
        this.videoService.aClickedEvent
            .subscribe((data) => {
            var objectStartTimeVoList = JSON.parse(localStorage.getItem("videoData"))[data].objectStartTimeVoList;
            this.xAxisData = [];
            this.yAxisData = [];
            objectStartTimeVoList.forEach(element => {
                this.xAxisData.push(element.targetName);
                this.yAxisData.push(element.startTimeCount * 1);
            });
            this.initCharts();
        });
    }
    initCharts() {
        const ec = echarts__WEBPACK_IMPORTED_MODULE_1__;
        const barChart = ec.init(document.getElementById('barChart'));
        const barChartOption = {
            tooltip: {
                trigger: 'item',
                triggerOn: 'mousemove',
                enterable: true,
                formatter: (parmas) => {
                    return `<span style="position: relative;top: 10px;padding:0 5px;">${parmas.value}</span>`;
                },
            },
            grid: {
                bottom: '20%',
            },
            title: {
                text: '???????????????',
                x: 'left',
                y: '25px',
                backgroundColor: 'rgba(0,0,0,0)',
                borderColor: '#ccc',
                borderWidth: 0,
                padding: [5, 15],
                itemGap: 10,
                textStyle: {
                    fontSize: 13,
                    color: '#fff'
                },
                subtextStyle: {
                    color: '#aaa'
                }
            },
            dataZoom: [
                {
                    type: 'inside',
                    start: 0,
                    end: 100,
                    bottom: '10px'
                },
                {
                    type: 'slider',
                    bottom: '10%',
                    height: 12,
                },
            ],
            xAxis: {
                type: 'category',
                data: this.xAxisData,
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#fff'
                    }
                },
            },
            yAxis: {
                type: 'value',
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#fff'
                    }
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: ['#1f216d'],
                        width: 1,
                        type: 'solid'
                    },
                }
            },
            series: [{
                    data: this.yAxisData,
                    itemStyle: {
                        normal: {
                            color: function (params) {
                                var color = ['#ff7f50', '#87cefa', '#da70d6', '#32cd32', '#6495ed',
                                    '#ff69b4', '#ba55d3', '#cd5c5c', '#ffa500', '#40e0d0',
                                    '#1e90ff', '#ff6347', '#7b68ee', '#00fa9a', '#ffd700',
                                    '#6699FF', '#ff6666', '#3cb371', '#b8860b', '#30e0e0'];
                                return color[params.dataIndex];
                            }
                        },
                    },
                    type: 'bar',
                }]
        };
        barChart.setOption(barChartOption);
    }
}
ChartComponent.??fac = function ChartComponent_Factory(t) { return new (t || ChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_video_service__WEBPACK_IMPORTED_MODULE_2__["VideoService"])); };
ChartComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: ChartComponent, selectors: [["app-chart"]], decls: 3, vars: 0, consts: [["id", "barChart", 2, "width", "100%", "height", "100%", "position", "relative", "top", "-30px"]], template: function ChartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "\u76EE\u6807\u51FA\u73B0\u65F6\u957F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "div", 0);
    } }, styles: ["header[_ngcontent-%COMP%] {\n  flex: 0 0 100%;\n  height: 30px;\n  line-height: 30px;\n  color: #fff;\n  background: linear-gradient(to right, #074f8d, transparent);\n  padding-left: 20px;\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC9wYWdlcy92aWRlby9jaGFydC9EOi9mZi90YXJnZXQtcmVjb2duaXplLXd3dy1odG1sLVYwLjIvc3JjL2FwcC9wYWdlcy92aWRlby9jaGFydC9jaGFydC5jb21wb25lbnQubGVzcyIsIi4uL2FwcC9wYWdlcy92aWRlby9jaGFydC9jaGFydC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsMkRBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDQ0oiLCJmaWxlIjoiLi4vYXBwL3BhZ2VzL3ZpZGVvL2NoYXJ0L2NoYXJ0LmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiaGVhZGVye1xuICAgIGZsZXg6IDAgMCAxMDAlO1xuICAgIGhlaWdodDogMzBweDtcbiAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIzA3NGY4ZCx0cmFuc3BhcmVudCk7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59IiwiaGVhZGVyIHtcbiAgZmxleDogMCAwIDEwMCU7XG4gIGhlaWdodDogMzBweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwNzRmOGQsIHRyYW5zcGFyZW50KTtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ChartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-chart',
                templateUrl: './chart.component.html',
                styleUrls: ['./chart.component.less']
            }]
    }], function () { return [{ type: src_app_video_service__WEBPACK_IMPORTED_MODULE_2__["VideoService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/video/keyobject/keyobject.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/video/keyobject/keyobject.component.ts ***!
  \**************************************************************/
/*! exports provided: KeyobjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyobjectComponent", function() { return KeyobjectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_video_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/video.service */ "./src/app/video.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function KeyobjectComponent_li_6_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function KeyobjectComponent_li_6_Template_input_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r5); const key_r3 = ctx.index; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r4.checkBox(key_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const key_r3 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("id", "checkbox", key_r3, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("for", "checkbox", key_r3, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](item_r2.text);
} }
function KeyobjectComponent_li_9_li_4_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function KeyobjectComponent_li_9_li_4_Template_li_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2); return ctx_r11.getTime($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const item2_r9 = ctx.$implicit;
    const key2_r10 = ctx.index;
    const key_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate2"]("id", "keytime", key_r7, "_", key2_r10, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](item2_r9);
} }
function KeyobjectComponent_li_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, KeyobjectComponent_li_9_li_4_Template, 2, 3, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const key_r7 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("id", "outer", key_r7, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("hidden", !item_r6.checked);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](item_r6.text);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", item_r6.keyTime);
} }
class KeyobjectComponent {
    constructor(videoService) {
        // this.keyObj.push(this.changeList(keyObjectList))
        this.videoService = videoService;
        this.keyObj = [];
        this.count = 0;
    }
    changeList(arr) {
        let dataInfo = {};
        arr.forEach((item, index) => {
            let { objectName } = item;
            if (!dataInfo[objectName]) {
                dataInfo[objectName] = {
                    objectName,
                    keyTime: [],
                    checked: 'true'
                };
            }
            dataInfo[objectName].keyTime.push(item.appearTime);
        });
        var list = Object.values(dataInfo); // list ?????????????????????
        list.forEach(function (x) {
            for (var key in x) {
                if (key == 'objectName') {
                    x.text = x[key];
                }
                if (key == 'keyTime') {
                    var arr = [];
                    x[key].forEach(element => {
                        var arr2 = element.split(':');
                        arr.push(arr2[0] * 60 * 60 + arr2[1] * 60 + arr2[2] * 1 + '\'');
                    });
                    x[key] = arr;
                }
            }
        });
        this.keyObj = list;
    }
    ngOnInit() {
    }
    checkBox(key) {
        var outer = document.getElementById('outer' + key);
        if (this.keyObj[key].checked == 'true') {
            this.keyObj[key].checked = 'false';
            outer.style.display = 'none';
        }
        else {
            this.keyObj[key].checked = 'true';
            outer.style.display = 'flex';
        }
    }
    ngAfterViewInit() {
        const orignalSetItem = localStorage.setItem; // ?????????setItem??????
        localStorage.setItem = function (key, newValue) {
            if (key == 'videoData') {
                const setItemEvent = new Event('setItemEvent');
                setItemEvent[key] = newValue; // ??????????????????
                orignalSetItem.apply(this, arguments); // ???????????????setItem??????
                window.dispatchEvent(setItemEvent); // ???????????????
            }
        };
        window.addEventListener('setItemEvent', (e) => {
            this.count++;
            if (this.count == 1) {
                var keyObjectList = JSON.parse(localStorage.getItem("videoData"))[0].keyObjectList;
                this.changeList(keyObjectList);
            }
        });
        this.videoService.aClickedEvent
            .subscribe((data) => {
            var keyObjectList = JSON.parse(localStorage.getItem("videoData"))[data].keyObjectList;
            this.changeList(keyObjectList);
        });
    }
    getTime(e) {
        var data = e.srcElement.innerText.replace('\'', "");
        this.videoService.getObjectTime(data);
    }
}
KeyobjectComponent.??fac = function KeyobjectComponent_Factory(t) { return new (t || KeyobjectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_video_service__WEBPACK_IMPORTED_MODULE_1__["VideoService"])); };
KeyobjectComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: KeyobjectComponent, selectors: [["app-keyobject"]], decls: 10, vars: 2, consts: [[1, "label"], [2, "color", "#fff"], [4, "ngFor", "ngForOf"], [2, "width", "100%", "border-bottom", "1px solid #1a2d72", "margin-bottom", "10px", "position", "relative", "top", "-3px"], [1, "outerUl"], ["class", "text", 3, "hidden", "id", 4, "ngFor", "ngForOf"], ["type", "checkbox", "name", "checkbox2", "checked", "", 3, "id", "click"], [2, "color", "#fff", 3, "for"], [1, "text", 3, "hidden", "id"], ["class", "key_time", 3, "id", "click", 4, "ngFor", "ngForOf"], [1, "key_time", 3, "id", "click"]], template: function KeyobjectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "\u5173\u952E\u5BF9\u8C61");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "\u5BF9\u8C61:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, KeyobjectComponent_li_6_Template, 5, 3, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](9, KeyobjectComponent_li_9_Template, 5, 4, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.keyObj);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.keyObj);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["header[_ngcontent-%COMP%] {\n  flex: 0 0 100%;\n  height: 30px;\n  line-height: 30px;\n  color: #fff;\n  background: linear-gradient(to right, #074f8d, transparent);\n  padding-left: 20px;\n  margin-bottom: 10px;\n}\n.label[_ngcontent-%COMP%] {\n  display: flex;\n  margin-left: 30px;\n  position: relative;\n}\n.label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.label[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: inline-block;\n  min-height: 10px;\n  max-height: 50px;\n  overflow: auto;\n}\n.label[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n  float: left;\n  color: #fff;\n  margin-right: 10px;\n  margin-left: 10px;\n}\n.outerUl[_ngcontent-%COMP%] {\n  height: 240px;\n  overflow-y: auto;\n  margin-left: -20px;\n  padding-bottom: 80px;\n}\n.outerUl[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n  color: #fff;\n}\n.outerUl[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  font-size: 15px;\n  text-align: left;\n  margin-bottom: 10px;\n  display: flex;\n  flex-wrap: wrap;\n}\n.outerUl[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: left;\n  margin-left: 50px;\n  margin-bottom: 10px;\n  width: 100%;\n}\n.outerUl[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin-left: 30px;\n}\n.outerUl[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  background: #032582;\n  margin-bottom: 10px;\n  margin-left: 20px;\n  line-height: 30px;\n  width: 60px;\n  text-align: center;\n  border: 1px solid #4c6eca;\n  float: left;\n  height: 30px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC9wYWdlcy92aWRlby9rZXlvYmplY3QvRDovZmYvdGFyZ2V0LXJlY29nbml6ZS13d3ctaHRtbC1WMC4yL3NyYy9hcHAvcGFnZXMvdmlkZW8va2V5b2JqZWN0L2tleW9iamVjdC5jb21wb25lbnQubGVzcyIsIi4uL2FwcC9wYWdlcy92aWRlby9rZXlvYmplY3Qva2V5b2JqZWN0LmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSwyREFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNDSjtBREVBO0VBQ0ksYUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNBSjtBREhBO0VBS1EsV0FBQTtBQ0NSO0FETkE7RUFRTyxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDSCxjQUFBO0FDQ0o7QURaQTtFQWFZLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDRVo7QURLQTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUNISjtBRERBO0VBTVEsZ0JBQUE7RUFDQSxXQUFBO0FDRlI7QURMQTtFQVdRLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUNIUjtBRFpBO0VBaUJZLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUNGWjtBRGxCQTtFQXVCWSxpQkFBQTtBQ0ZaO0FEckJBO0VBMEJnQixtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDRmhCIiwiZmlsZSI6Ii4uL2FwcC9wYWdlcy92aWRlby9rZXlvYmplY3Qva2V5b2JqZWN0LmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiaGVhZGVye1xuICAgIGZsZXg6IDAgMCAxMDAlO1xuICAgIGhlaWdodDogMzBweDtcbiAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIzA3NGY4ZCx0cmFuc3BhcmVudCk7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5sYWJlbHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBzcGFue1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICB9XG4gICAgdWx7XG4gICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgIG1pbi1oZWlnaHQ6IDEwcHg7XG4gICAgICAgbWF4LWhlaWdodDogNTBweDtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgICAgbGl7XG4gICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gXG59XG5cbi5vdXRlclVse1xuICAgIGhlaWdodDogMjQwcHg7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICBtYXJnaW4tbGVmdDogLTIwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDgwcHg7XG4gICAgbGl7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgIH1cblxuICAgIC50ZXh0e1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgcHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNTBweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgICB1bHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xuXG4gICAgICAgICAgICBsaXtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDMyNTgyO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDYwcHg7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM0YzZlY2E7XG4gICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iLCJoZWFkZXIge1xuICBmbGV4OiAwIDAgMTAwJTtcbiAgaGVpZ2h0OiAzMHB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzA3NGY4ZCwgdHJhbnNwYXJlbnQpO1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4ubGFiZWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tbGVmdDogMzBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmxhYmVsIHNwYW4ge1xuICBjb2xvcjogI2ZmZjtcbn1cbi5sYWJlbCB1bCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWluLWhlaWdodDogMTBweDtcbiAgbWF4LWhlaWdodDogNTBweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG4ubGFiZWwgdWwgbGkge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBmbG9hdDogbGVmdDtcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG4ub3V0ZXJVbCB7XG4gIGhlaWdodDogMjQwcHg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiAtMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDgwcHg7XG59XG4ub3V0ZXJVbCBsaSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGNvbG9yOiAjZmZmO1xufVxuLm91dGVyVWwgLnRleHQge1xuICBmb250LXNpemU6IDE1cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbi5vdXRlclVsIC50ZXh0IHAge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW4tbGVmdDogNTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG4ub3V0ZXJVbCAudGV4dCB1bCB7XG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xufVxuLm91dGVyVWwgLnRleHQgdWwgbGkge1xuICBiYWNrZ3JvdW5kOiAjMDMyNTgyO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiA2MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM0YzZlY2E7XG4gIGZsb2F0OiBsZWZ0O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](KeyobjectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-keyobject',
                templateUrl: './keyobject.component.html',
                styleUrls: ['./keyobject.component.less']
            }]
    }], function () { return [{ type: src_app_video_service__WEBPACK_IMPORTED_MODULE_1__["VideoService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/video/label/label.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/video/label/label.component.ts ***!
  \******************************************************/
/*! exports provided: LabelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabelComponent", function() { return LabelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_video_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/video.service */ "./src/app/video.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function LabelComponent_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", item_r1, " ");
} }
class LabelComponent {
    constructor(videoService) {
        this.videoService = videoService;
        this.labelArr = [];
        this.count = 0;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        const orignalSetItem = localStorage.setItem; // ?????????setItem??????
        localStorage.setItem = function (key, newValue) {
            if (key == 'videoData') {
                const setItemEvent = new Event('setItemEvent');
                setItemEvent[key] = newValue; // ??????????????????
                orignalSetItem.apply(this, arguments); // ???????????????setItem??????
                window.dispatchEvent(setItemEvent); // ???????????????
            }
        };
        window.addEventListener('setItemEvent', (e) => {
            this.count++;
            if (this.count == 1) {
                var labelArr = JSON.parse(localStorage.getItem("videoData"))[0].labelVoList;
                this.labelArr = labelArr;
            }
        });
        this.videoService.aClickedEvent
            .subscribe((data) => {
            var labelArr = JSON.parse(localStorage.getItem("videoData"))[data].labelVoList;
            this.labelArr = labelArr;
        });
    }
}
LabelComponent.??fac = function LabelComponent_Factory(t) { return new (t || LabelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_video_service__WEBPACK_IMPORTED_MODULE_1__["VideoService"])); };
LabelComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: LabelComponent, selectors: [["app-label"]], decls: 4, vars: 1, consts: [[4, "ngFor", "ngForOf"], [1, "border_table", "border_table_left_top"], [1, "border_table", "border_table_right_top"], [1, "border_table", "border_table_left_bottom"], [1, "border_table", "border_table_right_bottom"]], template: function LabelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "\u6807\u7B7E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, LabelComponent_li_3_Template, 6, 1, "li", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.labelArr);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["*[_ngcontent-%COMP%] {\n  color: #fff;\n}\nheader[_ngcontent-%COMP%] {\n  flex: 0 0 100%;\n  height: 30px;\n  line-height: 30px;\n  color: #fff;\n  background: linear-gradient(to right, #074f8d, transparent);\n  padding-left: 20px;\n}\nul[_ngcontent-%COMP%] {\n  padding: 10px;\n  margin-top: 20px;\n  height: 280px;\n  overflow-y: a;\n}\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  float: left;\n  list-style: none;\n  padding: 5px 30px;\n  margin-left: 30px;\n  margin-bottom: 30px;\n  background: #0f2649;\n  background-image: url('labelBg.png');\n  position: relative;\n}\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .border_table[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 10px;\n  height: 10px;\n}\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .border_table_left_top[_ngcontent-%COMP%] {\n  top: -5px;\n  left: -5px;\n  border-top: 2px solid #254f7d;\n  border-left: 2px solid #254f7d;\n}\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .border_table_right_top[_ngcontent-%COMP%] {\n  top: -5px;\n  right: -5px;\n  border-top: 2px solid #254f7d;\n  border-right: 2px solid #254f7d;\n}\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .border_table_left_bottom[_ngcontent-%COMP%] {\n  bottom: -5px;\n  left: -5px;\n  border-bottom: 2px solid #254f7d;\n  border-left: 2px solid #254f7d;\n}\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .border_table_right_bottom[_ngcontent-%COMP%] {\n  bottom: -5px;\n  right: -5px;\n  border-bottom: 2px solid #254f7d;\n  border-right: 2px solid #254f7d;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC9wYWdlcy92aWRlby9sYWJlbC9EOi9mZi90YXJnZXQtcmVjb2duaXplLXd3dy1odG1sLVYwLjIvc3JjL2FwcC9wYWdlcy92aWRlby9sYWJlbC9sYWJlbC5jb21wb25lbnQubGVzcyIsIi4uL2FwcC9wYWdlcy92aWRlby9sYWJlbC9sYWJlbC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUNDSjtBRENBO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSwyREFBQTtFQUNBLGtCQUFBO0FDQ0o7QURDQTtFQUNHLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0FDQ0g7QURMQTtFQU1PLFdBQUE7RUFDQyxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtBQ0VSO0FEZkE7RUFlWSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDR1o7QURwQkE7RUFxQlksU0FBQTtFQUNBLFVBQUE7RUFDQSw2QkFBQTtFQUNBLDhCQUFBO0FDRVo7QUQxQkE7RUEyQlksU0FBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtFQUNBLCtCQUFBO0FDRVo7QURoQ0E7RUFpQ1ksWUFBQTtFQUNBLFVBQUE7RUFDQSxnQ0FBQTtFQUNBLDhCQUFBO0FDRVo7QUR0Q0E7RUF1Q1ksWUFBQTtFQUNBLFdBQUE7RUFDQSxnQ0FBQTtFQUNBLCtCQUFBO0FDRVoiLCJmaWxlIjoiLi4vYXBwL3BhZ2VzL3ZpZGVvL2xhYmVsL2xhYmVsLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiKntcbiAgICBjb2xvcjogI2ZmZjtcbn1cbmhlYWRlcntcbiAgICBmbGV4OiAwIDAgMTAwJTtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCMwNzRmOGQsdHJhbnNwYXJlbnQpO1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbn1cbnVse1xuICAgcGFkZGluZzoxMHB4O1xuICAgbWFyZ2luLXRvcDogMjBweDtcbiAgIGhlaWdodDogMjgwcHg7XG4gICBvdmVyZmxvdy15OiBhO1xuICAgIGxpe1xuICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICBwYWRkaW5nOiA1cHggMzBweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICMwZjI2NDk7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2xhYmVsQmcucG5nKTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAuYm9yZGVyX3RhYmxle1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgd2lkdGg6IDEwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwcHg7XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICAuYm9yZGVyX3RhYmxlX2xlZnRfdG9we1xuICAgICAgICAgICAgdG9wOiAtNXB4O1xuICAgICAgICAgICAgbGVmdDotNXB4O1xuICAgICAgICAgICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICMyNTRmN2Q7XG4gICAgICAgICAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkICMyNTRmN2Q7XG4gICAgICAgIH1cbiAgICAgICAgLmJvcmRlcl90YWJsZV9yaWdodF90b3B7XG4gICAgICAgICAgICB0b3A6IC01cHg7XG4gICAgICAgICAgICByaWdodDotNXB4O1xuICAgICAgICAgICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICMyNTRmN2Q7XG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjMjU0ZjdkO1xuICAgICAgICB9XG4gICAgICAgIC5ib3JkZXJfdGFibGVfbGVmdF9ib3R0b217XG4gICAgICAgICAgICBib3R0b206IC01cHg7XG4gICAgICAgICAgICBsZWZ0Oi01cHg7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzI1NGY3ZDtcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgIzI1NGY3ZDtcbiAgICAgICAgfVxuICAgICAgICAuYm9yZGVyX3RhYmxlX3JpZ2h0X2JvdHRvbXtcbiAgICAgICAgICAgIGJvdHRvbTogLTVweDtcbiAgICAgICAgICAgIHJpZ2h0Oi01cHg7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzI1NGY3ZDtcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICMyNTRmN2Q7XG4gICAgICAgIH1cbiAgICB9XG59IiwiKiB7XG4gIGNvbG9yOiAjZmZmO1xufVxuaGVhZGVyIHtcbiAgZmxleDogMCAwIDEwMCU7XG4gIGhlaWdodDogMzBweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwNzRmOGQsIHRyYW5zcGFyZW50KTtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxudWwge1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBoZWlnaHQ6IDI4MHB4O1xuICBvdmVyZmxvdy15OiBhO1xufVxudWwgbGkge1xuICBmbG9hdDogbGVmdDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzogNXB4IDMwcHg7XG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICBiYWNrZ3JvdW5kOiAjMGYyNjQ5O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9sYWJlbEJnLnBuZyk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbnVsIGxpIC5ib3JkZXJfdGFibGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDEwcHg7XG59XG51bCBsaSAuYm9yZGVyX3RhYmxlX2xlZnRfdG9wIHtcbiAgdG9wOiAtNXB4O1xuICBsZWZ0OiAtNXB4O1xuICBib3JkZXItdG9wOiAycHggc29saWQgIzI1NGY3ZDtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjMjU0ZjdkO1xufVxudWwgbGkgLmJvcmRlcl90YWJsZV9yaWdodF90b3Age1xuICB0b3A6IC01cHg7XG4gIHJpZ2h0OiAtNXB4O1xuICBib3JkZXItdG9wOiAycHggc29saWQgIzI1NGY3ZDtcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgIzI1NGY3ZDtcbn1cbnVsIGxpIC5ib3JkZXJfdGFibGVfbGVmdF9ib3R0b20ge1xuICBib3R0b206IC01cHg7XG4gIGxlZnQ6IC01cHg7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMjU0ZjdkO1xuICBib3JkZXItbGVmdDogMnB4IHNvbGlkICMyNTRmN2Q7XG59XG51bCBsaSAuYm9yZGVyX3RhYmxlX3JpZ2h0X2JvdHRvbSB7XG4gIGJvdHRvbTogLTVweDtcbiAgcmlnaHQ6IC01cHg7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMjU0ZjdkO1xuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjMjU0ZjdkO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](LabelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-label',
                templateUrl: './label.component.html',
                styleUrls: ['./label.component.less']
            }]
    }], function () { return [{ type: src_app_video_service__WEBPACK_IMPORTED_MODULE_1__["VideoService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/video/video-list/video-list.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/video/video-list/video-list.component.ts ***!
  \****************************************************************/
/*! exports provided: VideoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoListComponent", function() { return VideoListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_video_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/video.service */ "./src/app/video.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/progress */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-progress.js");






function VideoListComponent_li_6_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "\u7B49\u5F85\u4E0A\u4F20...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function VideoListComponent_li_6_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, VideoListComponent_li_6_div_1_Template, 2, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "video", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function VideoListComponent_li_6_Template_video_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r5); const key_r2 = ctx.index; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r4.imgclick(key_r2); })("outer", function VideoListComponent_li_6_Template_video_outer_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r6.listClick($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "nz-progress", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", item_r1.files.progress != "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", item_r1.files.videoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nzPercent", item_r1.progress);
} }
class VideoListComponent {
    constructor(el, VideoService) {
        this.el = el;
        this.VideoService = VideoService;
        this.checkedBack = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.imageArr = [];
        this.videoUrl = '';
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.imageArr = this.VideoService.getVideoFile();
        this.VideoService.objectTime.subscribe((key) => {
            var video = document.querySelector("#my-video");
            video.currentTime = key;
        });
    }
    imgclick(key) {
        var changeData = JSON.parse(localStorage.getItem("videoData"))[key];
        var imglist = document.querySelectorAll('li');
        for (let i = 0; i < imglist.length; i++) {
            imglist[i].style.border = 'none';
        }
        imglist[key].style.border = "1px solid #fff";
        this.videoUrl = changeData.vedioUrl;
        this.VideoService.changeAccordion(key);
    }
}
VideoListComponent.??fac = function VideoListComponent_Factory(t) { return new (t || VideoListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_video_service__WEBPACK_IMPORTED_MODULE_1__["VideoService"])); };
VideoListComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: VideoListComponent, selectors: [["app-video-list"]], outputs: { checkedBack: "checked" }, decls: 12, vars: 2, consts: [[1, "content"], [1, "left"], [4, "ngFor", "ngForOf"], [1, "right"], [1, "header"], ["type", "text", "placeholder", "\u8BF7\u8F93\u5165\u76EE\u6807\u540D\u79F0"], ["src", "assets/images/search.png", "alt", ""], ["id", "my-video", "controls", "", "width", "100%", "data-setup", "{}", "type", "video/mp4", "ngDefaultControl", "", 1, "video-js", "vjs-default-skin", "vjs-big-play-centered", 3, "src"], ["class", "mask", "style", "color: #fff;text-align: center;line-height:500%;", 4, "ngIf"], [1, "video", 2, "width", "100%", "height", "100%", 3, "src", "click", "outer"], [3, "nzPercent"], [1, "mask", 2, "color", "#fff", "text-align", "center", "line-height", "500%"]], template: function VideoListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "\u89C6\u9891\u5217\u8868");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, VideoListComponent_li_6_Template, 4, 3, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "video", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.imageArr);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", ctx.videoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_4__["NzProgressComponent"]], styles: [".content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n.content[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] {\n  flex: 0 0 100%;\n  height: 30px;\n  line-height: 30px;\n  color: #fff;\n  background: linear-gradient(to right, #074f8d, transparent);\n  padding-left: 20px;\n}\n.content[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 455px;\n  overflow-y: auto;\n  padding: 5px 10px;\n}\n.content[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 15px 0;\n  box-shadow: 0 0 10px rgba(2, 2, 2, 0.733);\n  position: relative;\n  cursor: pointer;\n}\n.content[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child {\n  border: 1px solid #fff;\n}\n.content[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.content[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .mask[_ngcontent-%COMP%] {\n  width: 100%;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  height: 100%;\n  background: rgba(2, 2, 2, 0.658);\n}\n.content[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n  flex: 0 0 80%;\n  position: relative;\n  padding: 10px;\n}\n.content[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.content[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 40px;\n  background: none;\n  border-radius: 5px;\n  border: 1px solid #26326e;\n  color: #fff;\n}\n.content[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0px;\n  transform: translate(-50%, 50%);\n  cursor: pointer;\n}\n.content[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\n  object-fit: fill;\n  height: 390px;\n}\n[_nghost-%COMP%]     .ant-progress-text {\n  color: #Fff;\n}\n[_nghost-%COMP%]     .ant-progress-line {\n  width: 87%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC9wYWdlcy92aWRlby92aWRlby1saXN0L0Q6L2ZmL3RhcmdldC1yZWNvZ25pemUtd3d3LWh0bWwtVjAuMi9zcmMvYXBwL3BhZ2VzL3ZpZGVvL3ZpZGVvLWxpc3QvdmlkZW8tbGlzdC5jb21wb25lbnQubGVzcyIsIi4uL2FwcC9wYWdlcy92aWRlby92aWRlby1saXN0L3ZpZGVvLWxpc3QuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxhQUFBO0VBQ0EsZUFBQTtBQ0FKO0FERkE7RUFJUSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLDJEQUFBO0VBQ0Esa0JBQUE7QUNDUjtBRFZBO0VBWUksT0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDQ0o7QURoQkE7RUFtQlksY0FBQTtFQUNBLHlDQUFBO0VBQ0Esa0JBQUE7RUFJQSxlQUFBO0FDSFo7QURBWTtFQUNJLHNCQUFBO0FDRWhCO0FEekJBO0VBMkJnQixXQUFBO0FDQ2hCO0FENUJBO0VBOEJnQixXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtBQ0NoQjtBRHBDQTtFQXlDRSxhQUFBO0VBQ0Qsa0JBQUE7RUFDQyxhQUFBO0FDRkY7QUR6Q0E7RUE2Q1EsbUJBQUE7QUNEUjtBRDVDQTtFQStDWSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7QUNBWjtBRHBEQTtFQXVEWSxrQkFBQTtFQUNBLFVBQUE7RUFDQSwrQkFBQTtFQUNBLGVBQUE7QUNBWjtBRDFEQTtFQWdFUSxnQkFBQTtFQUNBLGFBQUE7QUNIUjtBRFVBO0VBRVEsV0FBQTtBQ1RSO0FET0E7RUFLUSxVQUFBO0FDVFIiLCJmaWxlIjoiLi4vYXBwL3BhZ2VzL3ZpZGVvL3ZpZGVvLWxpc3QvdmlkZW8tbGlzdC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmNvbnRlbnR7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgaGVhZGVye1xuICAgICAgICBmbGV4OiAwIDAgMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwjMDc0ZjhkLHRyYW5zcGFyZW50KTtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIH1cbiAgICAubGVmdHtcbiAgICBmbGV4OiAxO1xuICAgIGhlaWdodDogNDU1cHg7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICB1bHtcbiAgICAgICAgXG4gICAgICAgIGxpe1xuICAgICAgICAgICAgbWFyZ2luOiAxNXB4IDA7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDIsIDIsIDIsIDAuNzMzKTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICY6Zmlyc3QtY2hpbGR7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIGltZ3tcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tYXNre1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB0b3A6IDBweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAwcHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMiwgMiwgMiwgMC42NTgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIH1cbiAgICAucmlnaHR7XG4gIGZsZXg6IDAgMCA4MCU7XG4gcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAxMHB4O1xuICAgIC5oZWFkZXJ7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIGlucHV0e1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzI2MzI2ZTtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICB9XG4gICAgICAgIGltZ3tcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLDUwJSk7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cblxuICAgIH1cbiAgIFxuICAgIHZpZGVve1xuICAgICAgICBvYmplY3QtZml0OmZpbGw7XG4gICAgICAgIGhlaWdodDogMzkwcHg7XG4gICAgXG4gICAgfVxuICAgIH1cbiAgICAvLyBcbn1cblxuOmhvc3QgOjpuZy1kZWVwe1xuICAgIC5hbnQtcHJvZ3Jlc3MtdGV4dHtcbiAgICAgICAgY29sb3I6ICNGZmY7XG4gICAgfVxuICAgIC5hbnQtcHJvZ3Jlc3MtbGluZXtcbiAgICAgICAgd2lkdGg6IDg3JTtcbiAgICB9XG5cbn0iLCIuY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbi5jb250ZW50IGhlYWRlciB7XG4gIGZsZXg6IDAgMCAxMDAlO1xuICBoZWlnaHQ6IDMwcHg7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMDc0ZjhkLCB0cmFuc3BhcmVudCk7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbn1cbi5jb250ZW50IC5sZWZ0IHtcbiAgZmxleDogMTtcbiAgaGVpZ2h0OiA0NTVweDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgcGFkZGluZzogNXB4IDEwcHg7XG59XG4uY29udGVudCAubGVmdCB1bCBsaSB7XG4gIG1hcmdpbjogMTVweCAwO1xuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDIsIDIsIDIsIDAuNzMzKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY29udGVudCAubGVmdCB1bCBsaTpmaXJzdC1jaGlsZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XG59XG4uY29udGVudCAubGVmdCB1bCBsaSBpbWcge1xuICB3aWR0aDogMTAwJTtcbn1cbi5jb250ZW50IC5sZWZ0IHVsIGxpIC5tYXNrIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIsIDIsIDIsIDAuNjU4KTtcbn1cbi5jb250ZW50IC5yaWdodCB7XG4gIGZsZXg6IDAgMCA4MCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5jb250ZW50IC5yaWdodCAuaGVhZGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5jb250ZW50IC5yaWdodCAuaGVhZGVyIGlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDBweDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMjYzMjZlO1xuICBjb2xvcjogI2ZmZjtcbn1cbi5jb250ZW50IC5yaWdodCAuaGVhZGVyIGltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDBweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgNTAlKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmNvbnRlbnQgLnJpZ2h0IHZpZGVvIHtcbiAgb2JqZWN0LWZpdDogZmlsbDtcbiAgaGVpZ2h0OiAzOTBweDtcbn1cbjpob3N0IDo6bmctZGVlcCAuYW50LXByb2dyZXNzLXRleHQge1xuICBjb2xvcjogI0ZmZjtcbn1cbjpob3N0IDo6bmctZGVlcCAuYW50LXByb2dyZXNzLWxpbmUge1xuICB3aWR0aDogODclO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](VideoListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-video-list',
                templateUrl: './video-list.component.html',
                styleUrls: ['./video-list.component.less']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: src_app_video_service__WEBPACK_IMPORTED_MODULE_1__["VideoService"] }]; }, { checkedBack: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['checked']
        }] }); })();


/***/ }),

/***/ "./src/app/pages/video/video.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/video/video.component.ts ***!
  \************************************************/
/*! exports provided: VideoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoComponent", function() { return VideoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_video_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/video.service */ "./src/app/video.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd.js");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/icon */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-icon.js");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-transition-patch.js");
/* harmony import */ var _video_list_video_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./video-list/video-list.component */ "./src/app/pages/video/video-list/video-list.component.ts");
/* harmony import */ var _accordion_accordion_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./accordion/accordion.component */ "./src/app/pages/video/accordion/accordion.component.ts");
/* harmony import */ var _keyobject_keyobject_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./keyobject/keyobject.component */ "./src/app/pages/video/keyobject/keyobject.component.ts");
/* harmony import */ var _label_label_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./label/label.component */ "./src/app/pages/video/label/label.component.ts");
/* harmony import */ var _chart_chart_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./chart/chart.component */ "./src/app/pages/video/chart/chart.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

















function VideoComponent_nz_spin_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "nz-spin", 22);
} }
// declare var $:any;
class VideoComponent {
    constructor(el, router, activateInfo, videoService, http, nzModal) {
        this.el = el;
        this.router = router;
        this.activateInfo = activateInfo;
        this.videoService = videoService;
        this.http = http;
        this.nzModal = nzModal;
        this.run = true;
        this.isSpinning = false;
        this.hotspots = [];
        this.videoData = [];
        this.count = 0;
    }
    ngOnInit() {
        this.getdata(0);
    }
    cutPicture(i) {
        this.isSpinning = true;
        var canvas = this.el.nativeElement.querySelector('#canvas1');
        var AccorVideo = this.el.nativeElement.querySelector('#AccorVideo');
        var ctx = canvas.getContext('2d');
        var that = this;
        if (this.imgArr.length == 0) {
            this.isSpinning = false;
            return;
        }
        else {
            var time1 = this.imgArr[i].wordTime.split(':');
            var time = time1[0] * 60 * 60 + time1[1] * 60 + time1[2] * 1;
            AccorVideo.currentTime = time;
            if (AccorVideo.duration >= time) {
                setTimeout(function () {
                    ctx.drawImage(AccorVideo, 0, 0, 400, 250);
                    that.el.nativeElement.querySelectorAll('.imgLi img')[i].src = canvas.toDataURL('image/jpeg');
                    i++;
                    if (i < that.imgArr.length) {
                        that.cutPicture(i);
                    }
                    else {
                        ctx.clearRect(0, 0, 400, 250);
                        clearTimeout();
                        return that.isSpinning = false;
                    }
                }, 400);
            }
            else {
                ctx.clearRect(0, 0, 400, 250);
                that.el.nativeElement.querySelectorAll('.imgLi img')[i].src = canvas.toDataURL('image/jpeg');
                i++;
                if (i < that.imgArr.length) {
                    that.cutPicture(i);
                }
                else {
                    clearTimeout();
                    return that.isSpinning = false;
                }
            }
        }
    }
    cutFrameKey(i, canvas, AccorVideo) {
        var ctx = canvas.getContext('2d');
        var that = this;
        var time1 = this.frameArr[i].startTime.split(':');
        var time = time1[0] * 60 * 60 + time1[1] * 60 + time1[2] * 1;
        AccorVideo.currentTime = time;
        ctx.fillStyle = "#000000";
        ctx.beginPath();
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.closePath();
        if (AccorVideo.duration >= time) {
            setTimeout(function () {
                if (time == AccorVideo.currentTime) {
                    ctx.drawImage(AccorVideo, 0, 0, 400, 250);
                    that.el.nativeElement.querySelectorAll('.frameLi img')[i].src = canvas.toDataURL('image/jpeg');
                }
                else {
                    AccorVideo.currentTime = time;
                    ctx.drawImage(AccorVideo, 0, 0, 400, 250);
                    that.el.nativeElement.querySelectorAll('.frameLi img')[i].src = canvas.toDataURL('image/jpeg');
                }
                i++;
                if (i < that.frameArr.length) {
                    that.cutFrameKey(i, canvas, AccorVideo);
                }
                else {
                }
            }, 400);
        }
        else {
            ctx.fillStyle = "#000000";
            ctx.beginPath();
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.closePath();
            that.el.nativeElement.querySelectorAll('.frameLi img')[i].src = canvas.toDataURL('image/jpeg');
            i++;
            if (i < that.frameArr.length) {
                that.cutFrameKey(i, canvas, AccorVideo);
            }
            else {
            }
        }
    }
    ngAfterViewInit() {
        var AccorVideo = this.el.nativeElement.querySelector('#AccorVideo');
        var canvas = this.el.nativeElement.querySelector('#canvas1');
        var that = this;
        AccorVideo.onloadedmetadata = function () {
            that.cutPicture(0);
            that.cutFrameKey(0, canvas, AccorVideo);
        };
        this.videoService.aClickedEvent
            .subscribe((data) => {
            this.imgArr = JSON.parse(localStorage.getItem('videoData'))[data].keyWordVoList;
            this.frameArr = JSON.parse(localStorage.getItem('videoData'))[data].keyFrameVoList;
            AccorVideo.src = jquery__WEBPACK_IMPORTED_MODULE_3__(".left li .video").eq(data).attr('src');
            AccorVideo.onloadedmetadata = function () {
                that.cutPicture(0);
                that.cutFrameKey(0, canvas, AccorVideo);
            };
        });
    }
    ngOnDestroy() {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        clearInterval(this.intervalVideo);
    }
    getdata(i) {
        var fileList = this.videoService.getVideoFile();
        // .forEach(element => {
        //   fileList.push(element.files)
        // });
        // var fileList = this.videoService.getVideoFile()
        var api = `${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API_URL}/v1/frame-detect/frame`; //--------------------------??????????????????????????????
        if (i < fileList.length) {
            var formData = new FormData();
            formData.append('files', fileList[i].files);
            axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(api, formData, {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('Bearer'),
                    'TR-Role': 'TR-User'
                },
                onUploadProgress: progressEvent => {
                    let complete = (progressEvent.loaded / progressEvent.total * 100 | 0);
                    let jd = 10;
                    if (complete == 100) {
                        var t = setInterval(() => {
                            if (jd < 100) {
                                jquery__WEBPACK_IMPORTED_MODULE_3__('.left ul li .mask').eq(i).text(`????????????${jd += 10}%...`);
                            }
                            else {
                                jquery__WEBPACK_IMPORTED_MODULE_3__('.left ul li .mask').eq(i).css('color', '#fff');
                                jquery__WEBPACK_IMPORTED_MODULE_3__('.left ul li .mask').eq(i).text(`??????????????????..`);
                                clearInterval(t);
                            }
                        }, 10);
                    }
                    else {
                        jquery__WEBPACK_IMPORTED_MODULE_3__('.left ul li .mask').eq(i).text(`????????????${complete}%...`);
                    }
                }
            })
                .then((response) => {
                var requestData = JSON.parse(response.data.data);
                setTimeout(() => {
                    if (response.data.code == 1 && requestData.length > 0) {
                        jquery__WEBPACK_IMPORTED_MODULE_3__('.left ul li .mask').eq(i).css('color', '#fff');
                        jquery__WEBPACK_IMPORTED_MODULE_3__('.left ul li .mask').eq(i).text(`???????????????...`);
                        this.setVideoProgress(i, requestData[0].detectId);
                    }
                    else {
                        jquery__WEBPACK_IMPORTED_MODULE_3__('.left ul li .mask').eq(i).css('color', 'red');
                        jquery__WEBPACK_IMPORTED_MODULE_3__('.left ul li .mask').eq(i).text(`?????????????????????`);
                        i++;
                        this.getdata(i);
                    }
                }, 1000);
            })
                .catch(err => {
                jquery__WEBPACK_IMPORTED_MODULE_3__('.left ul li .mask').eq(i).css('color', 'red');
                jquery__WEBPACK_IMPORTED_MODULE_3__('.left ul li .mask').eq(i).text(`???????????????`);
                console.log(err);
                i++;
                this.getdata(i);
            });
        }
        else {
            return;
        }
    }
    setVideoProgress(i, detectId) {
        var p = 0;
        this.videoService.setVideoFile(i, p, 'progress');
        var videoUrl;
        if (p != 100) {
            var api = `${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API_URL}/v1/frame-detect/queryProgress?detectId=${detectId}`;
            var api2 = `${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API_URL}/v1/frame-detect/getVideoDetectResult?detectId=${detectId}`;
            this.intervalVideo = setInterval(() => {
                axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(api, { detectId }, {
                    headers: {
                        'Authorization': 'Bearer ' + localStorage.getItem('Bearer'),
                        'TR-Role': 'TR-User'
                    }
                })
                    .then(result => {
                    let resultData = JSON.parse(result.data.data);
                    // process
                    let progress = (resultData.process * 1).toFixed(4);
                    p = (progress * 100).toFixed(4);
                    this.videoService.setVideoFile(i, p, 'progress');
                    if (p == 100) {
                        axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(api2, { detectId }, {
                            headers: {
                                'Authorization': 'Bearer ' + localStorage.getItem('Bearer'),
                                'TR-Role': 'TR-User'
                            }
                        })
                            .then((result1) => {
                            var requestData = result1.data.data;
                            clearInterval(this.intervalVideo);
                            if (requestData && requestData.length != 0) {
                                jquery__WEBPACK_IMPORTED_MODULE_3__('.left ul li .mask').eq(i).text(`?????????????????????`);
                                this.count++;
                                setTimeout(() => {
                                    jquery__WEBPACK_IMPORTED_MODULE_3__('.left ul li .mask').eq(i - 1).css('display', 'none');
                                    this.videoData.push(requestData);
                                    localStorage.setItem('videoData', JSON.stringify(this.videoData));
                                    videoUrl = JSON.parse(localStorage.getItem('videoData'))[i - 1].vedioUrl;
                                    jquery__WEBPACK_IMPORTED_MODULE_3__('.left ul li video').eq(i - 1).attr('src', videoUrl);
                                    if (this.count == 1) {
                                        jquery__WEBPACK_IMPORTED_MODULE_3__('#my-video').attr('src', JSON.parse(localStorage.getItem('videoData'))[i - 1].vedioUrl);
                                        jquery__WEBPACK_IMPORTED_MODULE_3__('#AccorVideo').attr('src', JSON.parse(localStorage.getItem('videoData'))[i - 1].vedioUrl);
                                        this.imgArr = JSON.parse(localStorage.getItem('videoData'))[i - 1].keyWordVoList;
                                        this.frameArr = JSON.parse(localStorage.getItem('videoData'))[i - 1].keyFrameVoList;
                                    }
                                }, 500);
                            }
                            else {
                                jquery__WEBPACK_IMPORTED_MODULE_3__('.left ul li .mask').eq(i).css('color', 'red');
                                jquery__WEBPACK_IMPORTED_MODULE_3__('.left ul li .mask').eq(i).text(`?????????????????????`);
                            }
                            i++;
                            this.getdata(i);
                        })
                            .catch((e) => {
                            clearInterval(this.intervalVideo);
                            i++;
                            this.getdata(i);
                        });
                    }
                });
            }, 1000 * 1);
        }
    }
    setArr(key) {
        this.imgArr = JSON.parse(localStorage.getItem('videoData'))[key][0].keyWordVoList;
        this.frameArr = JSON.parse(localStorage.getItem('videoData'))[key][0].keyFrameVoList;
    }
}
VideoComponent.??fac = function VideoComponent_Factory(t) { return new (t || VideoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_video_service__WEBPACK_IMPORTED_MODULE_5__["VideoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NzModalService"])); };
VideoComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: VideoComponent, selectors: [["app-video"]], decls: 45, vars: 1, consts: [[1, "container", "flex-column"], [1, "header"], ["src", "assets/images/bg02.png", "alt", "\u667A\u80FD\u56FE\u50CF\u68C0\u6D4B\u670D\u52A1", 1, "img-responsive"], [1, "operations", "flex-row"], [1, "goback"], ["routerLink", "/home"], [1, "mismatching"], ["nz-icon", "", "nzType", "edit", 2, "font-size", "20px", "padding", "inherit"], [2, "font-size", "15px", "margin-left", "10px"], [1, "contents", "flex-row"], [1, "top"], [1, "topBox", "top_left"], [1, "leftTop", "box"], [1, "rightTop", "box"], [1, "leftBot", "box"], [1, "rightBot", "box"], [1, "topBox", "top_right"], [1, "bottom"], [1, "botBox", "bot_left"], [1, "botBox", "bot_center"], [1, "botBox", "bot_right"], ["style", "overflow-y: auto;width: 100%;height: 100%;position: absolute;background: rgba(36, 36, 36, 0.56);", 4, "ngIf"], [2, "overflow-y", "auto", "width", "100%", "height", "100%", "position", "absolute", "background", "rgba(36, 36, 36, 0.56)"]], template: function VideoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "\u8FD4\u56DE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "\u7EA0\u9519");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](18, "app-video-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](22, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](23, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "app-accordion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](27, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](28, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](29, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](30, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](31, "app-keyobject");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](33, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](34, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](35, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](36, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](37, "app-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](39, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](40, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](41, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](42, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](43, "app-chart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](44, VideoComponent_nz_spin_44_Template, 1, 0, "nz-spin", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.isSpinning);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_8__["NzIconDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_9__["??NzTransitionPatchDirective"], _video_list_video_list_component__WEBPACK_IMPORTED_MODULE_10__["VideoListComponent"], _accordion_accordion_component__WEBPACK_IMPORTED_MODULE_11__["AccordionComponent"], _keyobject_keyobject_component__WEBPACK_IMPORTED_MODULE_12__["KeyobjectComponent"], _label_label_component__WEBPACK_IMPORTED_MODULE_13__["LabelComponent"], _chart_chart_component__WEBPACK_IMPORTED_MODULE_14__["ChartComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgIf"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NzSpinComponent"]], styles: [".target-selected[_ngcontent-%COMP%] {\n  border: 2px solid #E29426;\n}\n.mismatching[_ngcontent-%COMP%] {\n  display: none;\n}\n.goback[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 30px;\n  left: 30px;\n}\n.scaning[_ngcontent-%COMP%] {\n  position: relative;\n  background: url('scan-area.png') no-repeat;\n  background-size: 100% 100%;\n  border: 1px solid #b0f9e4;\n}\n.scaning[_ngcontent-%COMP%]   .scan-line[_ngcontent-%COMP%] {\n  display: block;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: url('scan-line.png') no-repeat;\n  background-size: 100% 100%;\n  animation: move 1.5s ease-in-out infinite;\n  -webkit-animation: move 1.5s ease-in-out infinite;\n}\n.scan-line[_ngcontent-%COMP%] {\n  display: none;\n}\n@keyframes move {\n  from {\n    top: -100%;\n  }\n  to {\n    top: 0;\n  }\n}\n.result-info-progress[_ngcontent-%COMP%] {\n  width: 502px;\n  overflow: hidden;\n}\n.result-info-progress[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  object-fit: contain;\n  position: relative;\n  left: 0;\n  bottom: 2px;\n}\n.contents[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n}\n.contents[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  position: absolute;\n}\n.contents[_ngcontent-%COMP%]   .leftTop[_ngcontent-%COMP%] {\n  border-top: 2px solid #1285da;\n  border-left: 2px solid #1285da;\n}\n.contents[_ngcontent-%COMP%]   .rightTop[_ngcontent-%COMP%] {\n  right: 0;\n  border-top: 2px solid #1285da;\n  border-right: 2px solid #1285da;\n}\n.contents[_ngcontent-%COMP%]   .leftBot[_ngcontent-%COMP%] {\n  bottom: 0;\n  border-bottom: 2px solid #1285da;\n  border-left: 2px solid #1285da;\n}\n.contents[_ngcontent-%COMP%]   .rightBot[_ngcontent-%COMP%] {\n  bottom: 0;\n  right: 0;\n  border-bottom: 2px solid #1285da;\n  border-right: 2px solid #1285da;\n}\n.contents[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%] {\n  flex: 0 0 100%;\n  height: 500px;\n  display: flex;\n}\n.contents[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .topBox[_ngcontent-%COMP%] {\n  overflow: hidden;\n  border: 1px solid #153983;\n  box-shadow: 0px 0px 35px 18px #06184b inset;\n  margin: 5px;\n  position: relative;\n}\n.contents[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .top_right[_ngcontent-%COMP%] {\n  flex: 0 0 45%;\n}\n.contents[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .top_left[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.contents[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%] {\n  flex: 0 0 100%;\n  height: 360px;\n  display: flex;\n}\n.contents[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   .botBox[_ngcontent-%COMP%] {\n  overflow: hidden;\n  border: 1px solid #153983;\n  box-shadow: 0px 0px 35px 18px #06184b inset;\n  margin: 5px;\n  position: relative;\n}\n.contents[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   .bot_left[_ngcontent-%COMP%] {\n  flex: 0 0 33.33%;\n}\n.contents[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   .bot_right[_ngcontent-%COMP%] {\n  flex: 0 0 33.33%;\n}\n.contents[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   .bot_center[_ngcontent-%COMP%] {\n  flex: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC9wYWdlcy92aWRlby9EOi9mZi90YXJnZXQtcmVjb2duaXplLXd3dy1odG1sLVYwLjIvc3JjL2FwcC9wYWdlcy92aWRlby92aWRlby5jb21wb25lbnQubGVzcyIsIi4uL2FwcC9wYWdlcy92aWRlby92aWRlby5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0FDQ0o7QURFRTtFQUNFLGFBQUE7QUNBSjtBREVFO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ0FKO0FER0U7RUFDRSxrQkFBQTtFQUNBLDBDQUFBO0VBQ0EsMEJBQUE7RUFDQSx5QkFBQTtBQ0RKO0FESEU7RUFRSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUVBLDBDQUFBO0VBQ0EsMEJBQUE7RUFFQSx5Q0FBQTtFQUNBLGlEQUFBO0FDSk47QURRRTtFQUNFLGFBQUE7QUNOSjtBRFVFO0VBQ0U7SUFDRSxVQUFBO0VDUko7RURVRTtJQUNFLE1BQUE7RUNSSjtBQUNGO0FEb0JFO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0FDbEJKO0FEZ0JFO0VBS0ksbUJBQUE7RUFDQSxrQkFBQTtFQUdBLE9BQUE7RUFDQSxXQUFBO0FDcEJOO0FEdUJFO0VBQ0UsZUFBQTtBQ3JCSjtBRG9CRTtFQUdJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNwQk47QURlRTtFQVFJLDZCQUFBO0VBQ0EsOEJBQUE7QUNwQk47QURXRTtFQVlJLFFBQUE7RUFDQSw2QkFBQTtFQUNBLCtCQUFBO0FDcEJOO0FETUU7RUFpQkksU0FBQTtFQUNBLGdDQUFBO0VBQ0EsOEJBQUE7QUNwQk47QURDRTtFQXNCSSxTQUFBO0VBQ0EsUUFBQTtFQUNBLGdDQUFBO0VBQ0EsK0JBQUE7QUNwQk47QURMRTtFQTRCSSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7QUNwQk47QURWRTtFQWtDTSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMkNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNyQlI7QURqQkU7RUF5Q1EsYUFBQTtBQ3JCVjtBRHBCRTtFQTZDUSxPQUFBO0FDdEJWO0FEdkJFO0VBMkRJLGNBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtBQ2pDTjtBRDVCRTtFQWdFTSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMkNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNqQ1I7QURuQ0U7RUF1RVEsZ0JBQUE7QUNqQ1Y7QUR0Q0U7RUEwRU0sZ0JBQUE7QUNqQ1I7QUR6Q0U7RUE2RVUsT0FBQTtBQ2pDWiIsImZpbGUiOiIuLi9hcHAvcGFnZXMvdmlkZW8vdmlkZW8uY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFyZ2V0LXNlbGVjdGVkIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjRTI5NDI2O1xuICB9XG4gIFxuICAubWlzbWF0Y2hpbmd7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAuZ29iYWNre1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6MzBweDtcbiAgICBsZWZ0OiAzMHB4O1xuICB9XG4gIFxuICAuc2NhbmluZyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvc2Nhbi1hcmVhLnBuZ1wiKSBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2IwZjllNDtcbiAgXG4gIFxuICAgIC5zY2FuLWxpbmUge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgXG4gICAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3NjYW4tbGluZS5wbmdcIikgbm8tcmVwZWF0O1xuICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gIFxuICAgICAgYW5pbWF0aW9uOiBtb3ZlIDEuNXMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG4gICAgICAtd2Via2l0LWFuaW1hdGlvbjogbW92ZSAxLjVzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xuICAgIH1cbiAgfVxuICBcbiAgLnNjYW4tbGluZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICBcbiAgXG4gIEBrZXlmcmFtZXMgbW92ZSB7XG4gICAgZnJvbSB7XG4gICAgICB0b3A6IC0xMDAlXG4gICAgfVxuICAgIHRvIHtcbiAgICAgIHRvcDogMFxuICAgIH1cbiAgfVxuICBcbiAgXG4gIC5tYXRjaC1kZWdyZWUge1xuICBcbiAgICAvL2JhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1hZ2VzL3Byb2dyZXNzLWJnLnBuZ1wiKTtcbiAgICAvL2JhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgLy9iYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIFxuICB9XG4gIFxuICAucmVzdWx0LWluZm8tcHJvZ3Jlc3Mge1xuICAgIHdpZHRoOiA1MDJweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICBcbiAgICBpbWcge1xuICAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIC8vd2lkdGg6IDEwMCU7XG4gICAgICAvL2hlaWdodDogMTAwJTtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICBib3R0b206IDJweDtcbiAgICB9XG4gIH1cbiAgLmNvbnRlbnRze1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAuYm94e1xuICAgICAgd2lkdGg6IDEwcHg7XG4gICAgICBoZWlnaHQ6IDEwcHg7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgfVxuICAgIC5sZWZ0VG9we1xuICAgICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICMxMjg1ZGE7XG4gICAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkICMxMjg1ZGE7XG4gICAgfVxuICAgIC5yaWdodFRvcHtcbiAgICAgIHJpZ2h0OiAwO1xuICAgICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICMxMjg1ZGE7XG4gICAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjMTI4NWRhO1xuICAgIH1cbiAgICAubGVmdEJvdHtcbiAgICAgIGJvdHRvbTogMDtcbiAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMTI4NWRhO1xuICAgICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjMTI4NWRhO1xuICAgIH1cbiAgICAucmlnaHRCb3R7XG4gICAgICBib3R0b206IDA7XG4gICAgICByaWdodDogMDtcbiAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMTI4NWRhO1xuICAgICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgIzEyODVkYTtcbiAgICB9XG4gICAgLnRvcHtcbiAgICAgIGZsZXg6IDAgMCAxMDAlO1xuICAgICAgaGVpZ2h0OiA1MDBweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBcbiAgICAgIC50b3BCb3h7XG4gICAgICBcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzE1Mzk4MztcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAzNXB4IDE4cHggIzA2MTg0YiBpbnNldDtcbiAgICAgICAgbWFyZ2luOiA1cHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIH1cbiAgICAgIC50b3BfcmlnaHR7XG4gICAgICAgICAgZmxleDowIDAgNDUlO1xuXG4gICAgICB9XG4gICAgICAudG9wX2xlZnR7XG4gICAgICAgICAgZmxleDogMTtcbiAgICAgICAgXG4gICAgICAgIC8vICAgLnRvcF9sZWZ0THtcbiAgICAgICAgLy8gICAgIGZsZXg6IDAgMCAyMCU7XG4gICAgICAgIC8vICAgICBib3JkZXI6IDFweCBzb2xpZCAjRTI5NDI2O1xuICAgICAgICAvLyAgIH1cbiAgICAgICAgLy8gICAudG9wX2xlZnRSe1xuICAgICAgICAvLyAgICAgZmxleDogMTtcbiAgICAgICAgLy8gICAgIGJvcmRlcjogMXB4IHNvbGlkICNFMjk0MjY7XG4gICAgICAgIC8vICAgfVxuICAgICAgfVxuICAgIFxuICAgIH1cbiAgICAuYm90dG9te1xuICAgICAgZmxleDogMCAwIDEwMCU7XG4gICAgICBoZWlnaHQ6IDM2MHB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICBcbiAgICAgIC5ib3RCb3h7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMxNTM5ODM7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMzVweCAxOHB4ICMwNjE4NGIgaW5zZXQ7XG4gICAgICAgIG1hcmdpbjogNXB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG4gICAgICAuYm90X2xlZnR7XG4gICAgICAgICAgZmxleDogMCAwIDMzLjMzJTtcbiAgICAgIH1cbiAgICAgIC5ib3RfcmlnaHR7XG4gICAgICAgIGZsZXg6IDAgMCAzMy4zMyU7XG4gICAgfVxuICAgICAgICAuYm90X2NlbnRlcntcbiAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gIH1cbiAgXG4gICIsIi50YXJnZXQtc2VsZWN0ZWQge1xuICBib3JkZXI6IDJweCBzb2xpZCAjRTI5NDI2O1xufVxuLm1pc21hdGNoaW5nIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5nb2JhY2sge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMzBweDtcbiAgbGVmdDogMzBweDtcbn1cbi5zY2FuaW5nIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3NjYW4tYXJlYS5wbmdcIikgbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2IwZjllNDtcbn1cbi5zY2FuaW5nIC5zY2FuLWxpbmUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3NjYW4tbGluZS5wbmdcIikgbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgYW5pbWF0aW9uOiBtb3ZlIDEuNXMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBtb3ZlIDEuNXMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG59XG4uc2Nhbi1saW5lIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbkBrZXlmcmFtZXMgbW92ZSB7XG4gIGZyb20ge1xuICAgIHRvcDogLTEwMCU7XG4gIH1cbiAgdG8ge1xuICAgIHRvcDogMDtcbiAgfVxufVxuLnJlc3VsdC1pbmZvLXByb2dyZXNzIHtcbiAgd2lkdGg6IDUwMnB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLnJlc3VsdC1pbmZvLXByb2dyZXNzIGltZyB7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAycHg7XG59XG4uY29udGVudHMge1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG4uY29udGVudHMgLmJveCB7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbi5jb250ZW50cyAubGVmdFRvcCB7XG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCAjMTI4NWRhO1xuICBib3JkZXItbGVmdDogMnB4IHNvbGlkICMxMjg1ZGE7XG59XG4uY29udGVudHMgLnJpZ2h0VG9wIHtcbiAgcmlnaHQ6IDA7XG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCAjMTI4NWRhO1xuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjMTI4NWRhO1xufVxuLmNvbnRlbnRzIC5sZWZ0Qm90IHtcbiAgYm90dG9tOiAwO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzEyODVkYTtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjMTI4NWRhO1xufVxuLmNvbnRlbnRzIC5yaWdodEJvdCB7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMTI4NWRhO1xuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjMTI4NWRhO1xufVxuLmNvbnRlbnRzIC50b3Age1xuICBmbGV4OiAwIDAgMTAwJTtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5jb250ZW50cyAudG9wIC50b3BCb3gge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMTUzOTgzO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDM1cHggMThweCAjMDYxODRiIGluc2V0O1xuICBtYXJnaW46IDVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmNvbnRlbnRzIC50b3AgLnRvcF9yaWdodCB7XG4gIGZsZXg6IDAgMCA0NSU7XG59XG4uY29udGVudHMgLnRvcCAudG9wX2xlZnQge1xuICBmbGV4OiAxO1xufVxuLmNvbnRlbnRzIC5ib3R0b20ge1xuICBmbGV4OiAwIDAgMTAwJTtcbiAgaGVpZ2h0OiAzNjBweDtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5jb250ZW50cyAuYm90dG9tIC5ib3RCb3gge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMTUzOTgzO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDM1cHggMThweCAjMDYxODRiIGluc2V0O1xuICBtYXJnaW46IDVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmNvbnRlbnRzIC5ib3R0b20gLmJvdF9sZWZ0IHtcbiAgZmxleDogMCAwIDMzLjMzJTtcbn1cbi5jb250ZW50cyAuYm90dG9tIC5ib3RfcmlnaHQge1xuICBmbGV4OiAwIDAgMzMuMzMlO1xufVxuLmNvbnRlbnRzIC5ib3R0b20gLmJvdF9jZW50ZXIge1xuICBmbGV4OiAxO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](VideoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-video',
                templateUrl: './video.component.html',
                styleUrls: ['./video.component.less']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: src_app_video_service__WEBPACK_IMPORTED_MODULE_5__["VideoService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] }, { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NzModalService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/state/detect.action.ts":
/*!****************************************!*\
  !*** ./src/app/state/detect.action.ts ***!
  \****************************************/
/*! exports provided: DetectAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetectAction", function() { return DetectAction; });
class DetectAction {
    constructor(detectHistory) {
        this.detectHistory = detectHistory;
    }
}
DetectAction.type = '[Detect] Detect';


/***/ }),

/***/ "./src/app/state/detect.state.ts":
/*!***************************************!*\
  !*** ./src/app/state/detect.state.ts ***!
  \***************************************/
/*! exports provided: DetectState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetectState", function() { return DetectState; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var _detect_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detect.action */ "./src/app/state/detect.action.ts");





let DetectState = class DetectState {
    detect(ctx, action) {
        const state = ctx.getState();
        ctx.setState(Object.assign(Object.assign({}, state), { detectHistory: action.detectHistory }));
    }
};
DetectState.??fac = function DetectState_Factory(t) { return new (t || DetectState)(); };
DetectState.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"]({ token: DetectState, factory: DetectState.??fac });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Action"])(_detect_action__WEBPACK_IMPORTED_MODULE_3__["DetectAction"])
], DetectState.prototype, "detect", null);
DetectState = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["State"])({
        name: 'detect',
        defaults: {
            detectHistory: []
        }
    })
], DetectState);

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](DetectState, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], null, { detect: [] }); })();


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
LoginState.??fac = function LoginState_Factory(t) { return new (t || LoginState)(); };
LoginState.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"]({ token: LoginState, factory: LoginState.??fac });
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

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](LoginState, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], null, { login: [] }); })();


/***/ }),

/***/ "./src/app/state/recognize.action.ts":
/*!*******************************************!*\
  !*** ./src/app/state/recognize.action.ts ***!
  \*******************************************/
/*! exports provided: RecognizeAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecognizeAction", function() { return RecognizeAction; });
class RecognizeAction {
    constructor(recognizeJson) {
        this.recognizeJson = recognizeJson;
    }
}
RecognizeAction.type = '[RECOGNIZE] Finish';


/***/ }),

/***/ "./src/app/state/recognize.state.ts":
/*!******************************************!*\
  !*** ./src/app/state/recognize.state.ts ***!
  \******************************************/
/*! exports provided: RecognizeState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecognizeState", function() { return RecognizeState; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var _recognize_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./recognize.action */ "./src/app/state/recognize.action.ts");





let RecognizeState = class RecognizeState {
    recognize(ctx, action) {
        console.log('RecognizeAction is :', action);
        let detectResult = JSON.parse(localStorage.getItem("detectResult"));
        detectResult.push(action.recognizeJson);
        localStorage.setItem("detectResult", JSON.stringify(detectResult));
        const state = ctx.getState();
        ctx.setState(Object.assign(Object.assign({}, state), { recognizeJson: action.recognizeJson }));
    }
};
RecognizeState.??fac = function RecognizeState_Factory(t) { return new (t || RecognizeState)(); };
RecognizeState.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"]({ token: RecognizeState, factory: RecognizeState.??fac });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Action"])(_recognize_action__WEBPACK_IMPORTED_MODULE_3__["RecognizeAction"])
], RecognizeState.prototype, "recognize", null);
RecognizeState = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["State"])({
        name: 'recognize',
        defaults: {
            recognizeJson: null
        }
    })
], RecognizeState);

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](RecognizeState, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], null, { recognize: [] }); })();


/***/ }),

/***/ "./src/app/state/video.action.ts":
/*!***************************************!*\
  !*** ./src/app/state/video.action.ts ***!
  \***************************************/
/*! exports provided: VideoAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoAction", function() { return VideoAction; });
class VideoAction {
    constructor(video) {
        this.video = video;
    }
}
VideoAction.type = '[Video] Video';


/***/ }),

/***/ "./src/app/state/video.state.ts":
/*!**************************************!*\
  !*** ./src/app/state/video.state.ts ***!
  \**************************************/
/*! exports provided: VideoState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoState", function() { return VideoState; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var _video_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./video.action */ "./src/app/state/video.action.ts");





let VideoState = class VideoState {
    video(ctx, action) {
        const state = ctx.getState();
        ctx.setState(Object.assign(Object.assign({}, state), { video: action.video }));
    }
};
VideoState.??fac = function VideoState_Factory(t) { return new (t || VideoState)(); };
VideoState.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"]({ token: VideoState, factory: VideoState.??fac });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Action"])(_video_action__WEBPACK_IMPORTED_MODULE_3__["VideoAction"])
], VideoState.prototype, "video", null);
VideoState = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["State"])({
        name: 'video',
        defaults: {
            video: null
        }
    })
], VideoState);

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](VideoState, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], null, { video: [] }); })();


/***/ }),

/***/ "./src/app/video.service.ts":
/*!**********************************!*\
  !*** ./src/app/video.service.ts ***!
  \**********************************/
/*! exports provided: VideoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoService", function() { return VideoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class VideoService {
    constructor() {
        this.aClickedEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.objectTime = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dataDirMaked = false;
        this.videoArr = [];
    }
    /**
     * ??????glsl??????
     * @param gl
     */
    createProgramFromScripts(gl) {
        const vertex = `
        precision mediump float;
        attribute vec4 vertex_screen;
        attribute vec2 vertex_texture;
        varying vec2 texture_pos;
        void main(void)
        {
          gl_Position = vertex_screen;
          texture_pos = vertex_texture;
        }
    `;
        const fragment = `
        precision mediump float;
        varying vec2 texture_pos;
        uniform sampler2D texture_y;
        uniform sampler2D texture_u;
        uniform sampler2D texture_v;
        void main(void)
        {
          vec3 yuv;
          vec3 rgb;
          yuv.x = texture2D(texture_y, texture_pos).x;
          yuv.y = texture2D(texture_u, texture_pos).x-0.5;
          yuv.z = texture2D(texture_v, texture_pos).y-0.5;
          rgb = mat3(1,1,1,
                    0,-0.39465,2.03211,
                    1.13983,-0.58060,0) * yuv;
          gl_FragColor = vec4(rgb, 1);
        }
    `;
        var program = gl.createProgram();
        var shader1 = this.create_shader(gl, gl.VERTEX_SHADER, vertex);
        var shader2 = this.create_shader(gl, gl.FRAGMENT_SHADER, fragment);
        gl.attachShader(program, shader1);
        gl.attachShader(program, shader2);
        gl.linkProgram(program);
        return program;
    }
    create_shader(gl, t, source) {
        //console.log("create_shader", t, source);
        var shader = gl.createShader(t); // gl.VERTEX_SHADER, gl.FRAGMENT_SHADER
        gl.shaderSource(shader, source);
        gl.compileShader(shader);
        // glGetShaderiv, compiled
        // TODO. error?
        return shader;
    }
    draw_begin(gl) {
        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.clearColor(0.3, 0.3, 0.3, 1.0);
    }
    draw_end() {
    }
    draw_yuv(gl, program, buffer, vertex_screen, vertex_tex, tex_id_y, texture_y, tex_id_u, tex_id_v, texture_v, texture_u, frame) {
        var w = frame.w;
        var h = frame.h;
        var y = frame.y;
        var u = frame.u;
        var v = frame.v;
        var pitch_y = frame.pitch_y;
        var pitch_u = frame.pitch_u;
        var pitch_v = frame.pitch_v;
        gl.useProgram(program);
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        // ??????
        gl.vertexAttribPointer(vertex_screen, 2, gl.FLOAT, false, 8, 32);
        gl.enableVertexAttribArray(vertex_screen);
        gl.vertexAttribPointer(vertex_tex, 2, gl.FLOAT, false, 8, 0);
        gl.enableVertexAttribArray(vertex_tex);
        // Y
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, tex_id_y);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.LUMINANCE, pitch_y, h, 0, gl.LUMINANCE, gl.UNSIGNED_BYTE, y);
        gl.uniform1i(texture_y, 0);
        // U
        gl.activeTexture(gl.TEXTURE1);
        gl.bindTexture(gl.TEXTURE_2D, tex_id_u);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.LUMINANCE, pitch_u, h / 2, 0, gl.LUMINANCE, gl.UNSIGNED_BYTE, u);
        gl.uniform1i(texture_u, 1);
        // V
        gl.activeTexture(gl.TEXTURE2);
        gl.bindTexture(gl.TEXTURE_2D, tex_id_v);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.LUMINANCE, pitch_v, h / 2, 0, gl.LUMINANCE, gl.UNSIGNED_BYTE, v);
        gl.uniform1i(texture_v, 2);
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
        gl.disableVertexAttribArray(vertex_tex);
        gl.disableVertexAttribArray(vertex_screen);
        gl.bindBuffer(gl.ARRAY_BUFFER, null);
        gl.validateProgram(program);
    }
    mkDataDir(dataDirMaked) {
        this.dataDirMaked = dataDirMaked;
    }
    existDataDir() {
        return this.dataDirMaked;
    }
    dataURLToBlob(dataurl) {
        var arr = dataurl.split(',');
        var mime = arr[0].match(/:(.*?);/)[1];
        var bstr = atob(arr[1]);
        var n = bstr.length;
        var u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new Blob([u8arr], { type: mime });
    }
    sendVideoFile(fileList) {
        this.videoArr = [];
        for (let i = 0; i < fileList.length; i++) {
            const element = fileList[i];
            this.videoArr.push({ files: element, progress: 0, detectId: "" });
        }
    }
    getVideoFile() {
        return this.videoArr;
    }
    setVideoFile(key, value, field) {
        this.videoArr[key][field] = value;
    }
    changeAccordion(key) {
        this.imgArr = JSON.parse(localStorage.getItem('videoData'))[key].keyWordVoList;
        this.frameArr = JSON.parse(localStorage.getItem('videoData'))[key].keyFrameVoList;
        this.aClickedEvent.emit(key);
    }
    getObjectTime(key) {
        this.objectTime.emit(key);
    }
}
VideoService.??fac = function VideoService_Factory(t) { return new (t || VideoService)(); };
VideoService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: VideoService, factory: VideoService.??fac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](VideoService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, { aClickedEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['aClickedEvent']
        }], objectTime: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['objectTime']
        }] }); })();


/***/ }),

/***/ "./src/environments/environment.prod.ts":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: false,
    API_URL: '/api'
};
// export const environment = {
//   production: false,
//   API_URL: 'http://192.168.0.228:8083',
//   // MGR_URL: 'http://yxdengstar.eicp.net:8087',
//   MGR_URL: 'http://microismile.cn:8087/sso',
//   WS_URL: 'ws://microismile.cn:8083',
//   OSS_URL: 'http://microismile.cn:9000/target-recognize',
//   SAMPLE_OSS_URL: 'http://microismile.cn:9000/sample-resource',
//  // KMS_URL: 'http://demo.kgtdata.com:18001/kgintegrationweb/#/Index?search_id=b8871fe143a4471480e7ae16ad725b86&kgId=fdce9fd6-4731-11ea-a899-0242ac110005&instanceId='
//   KMS_URL: 'http://bms.hczy.top:16200/kms.wiki/#/detail?keyword='
// };


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
//   API_URL: 'http://192.168.0.200:8083',
// // API_URL: 'http://microismile.cn:8083',
//   // MGR_URL: 'http://yxdengstar.eicp.net:8087',
//   MGR_URL: 'http://microismile.cn:8087/sso',
//   WS_URL: 'ws://microismile.cn:8083',
//   OSS_URL: 'http://microismile.cn:9000/target-recognize',
//   SAMPLE_OSS_URL: 'http://microismile.cn:9000/sample-resource',
//  // KMS_URL: 'http://demo.kgtdata.com:18001/kgintegrationweb/#/Index?search_id=b8871fe143a4471480e7ae16ad725b86&kgId=fdce9fd6-4731-11ea-a899-0242ac110005&instanceId='
//   KMS_URL: 'http://bms.hczy.top:16200/kms.wiki/#/detail?keyword='
// };


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

module.exports = __webpack_require__(/*! D:\ff\target-recognize-www-html-V0.2\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map