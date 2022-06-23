(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-console-console-module"],{

/***/ "./src/app/pages/console/console-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/console/console-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ConsoleRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsoleRoutingModule", function() { return ConsoleRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _console_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./console.component */ "./src/app/pages/console/console.component.ts");





class ConsoleRoutingModule {
}
ConsoleRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ConsoleRoutingModule });
ConsoleRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ConsoleRoutingModule_Factory(t) { return new (t || ConsoleRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                {
                    path: '', component: _console_component__WEBPACK_IMPORTED_MODULE_2__["ConsoleComponent"],
                    children: [
                        {
                            path: 'data-manage',
                            loadChildren: () => Promise.all(/*! import() | data-manage-data-manage-module */[__webpack_require__.e("default~data-manage-data-manage-module~data-mark-data-mark-module~data-statistics-data-statistics-mo~d6bdf3a7"), __webpack_require__.e("default~data-manage-data-manage-module~data-mark-data-mark-module~data-training-data-training-module~e662891d"), __webpack_require__.e("default~data-manage-data-manage-module~data-mark-data-mark-module~data-statistics-data-statistics-mo~7f9fb08f"), __webpack_require__.e("default~data-manage-data-manage-module~data-statistics-data-statistics-module~data-training-data-tra~0cff5d88"), __webpack_require__.e("common"), __webpack_require__.e("data-manage-data-manage-module")]).then(__webpack_require__.bind(null, /*! ../data-manage/data-manage.module */ "./src/app/pages/data-manage/data-manage.module.ts")).then(m => m.DataManageModule)
                        }, {
                            path: 'data-mark',
                            loadChildren: () => Promise.all(/*! import() | data-mark-data-mark-module */[__webpack_require__.e("default~data-manage-data-manage-module~data-mark-data-mark-module~data-statistics-data-statistics-mo~d6bdf3a7"), __webpack_require__.e("default~data-manage-data-manage-module~data-mark-data-mark-module~data-training-data-training-module~e662891d"), __webpack_require__.e("default~data-manage-data-manage-module~data-mark-data-mark-module~data-statistics-data-statistics-mo~7f9fb08f"), __webpack_require__.e("common"), __webpack_require__.e("data-mark-data-mark-module")]).then(__webpack_require__.bind(null, /*! ../data-mark/data-mark.module */ "./src/app/pages/data-mark/data-mark.module.ts")).then(m => m.DataMarkModule)
                        }, {
                            path: 'data-verify',
                            loadChildren: () => Promise.all(/*! import() | data-verify-data-verify-module */[__webpack_require__.e("default~data-manage-data-manage-module~data-mark-data-mark-module~data-statistics-data-statistics-mo~d6bdf3a7"), __webpack_require__.e("default~data-manage-data-manage-module~data-mark-data-mark-module~data-training-data-training-module~e662891d"), __webpack_require__.e("common"), __webpack_require__.e("data-verify-data-verify-module")]).then(__webpack_require__.bind(null, /*! ../data-verify/data-verify.module */ "./src/app/pages/data-verify/data-verify.module.ts")).then(m => m.DataVerifyModule)
                        },
                        {
                            path: 'data-training',
                            loadChildren: () => Promise.all(/*! import() | data-training-data-training-module */[__webpack_require__.e("default~data-manage-data-manage-module~data-mark-data-mark-module~data-statistics-data-statistics-mo~d6bdf3a7"), __webpack_require__.e("default~data-manage-data-manage-module~data-mark-data-mark-module~data-training-data-training-module~e662891d"), __webpack_require__.e("default~data-manage-data-manage-module~data-mark-data-mark-module~data-statistics-data-statistics-mo~7f9fb08f"), __webpack_require__.e("default~data-manage-data-manage-module~data-statistics-data-statistics-module~data-training-data-tra~0cff5d88"), __webpack_require__.e("default~data-statistics-data-statistics-module~data-training-data-training-module"), __webpack_require__.e("data-training-data-training-module")]).then(__webpack_require__.bind(null, /*! ../data-training/data-training.module */ "./src/app/pages/data-training/data-training.module.ts")).then(m => m.DataTrainingModule)
                        },
                        {
                            path: 'data-statistics',
                            loadChildren: () => Promise.all(/*! import() | data-statistics-data-statistics-module */[__webpack_require__.e("default~data-manage-data-manage-module~data-mark-data-mark-module~data-statistics-data-statistics-mo~d6bdf3a7"), __webpack_require__.e("default~data-manage-data-manage-module~data-mark-data-mark-module~data-statistics-data-statistics-mo~7f9fb08f"), __webpack_require__.e("default~data-manage-data-manage-module~data-statistics-data-statistics-module~data-training-data-tra~0cff5d88"), __webpack_require__.e("default~data-statistics-data-statistics-module~data-training-data-training-module"), __webpack_require__.e("data-statistics-data-statistics-module")]).then(__webpack_require__.bind(null, /*! ../data-statistics/data-statistics.module */ "./src/app/pages/data-statistics/data-statistics.module.ts")).then(m => m.DataStatisticsModule)
                        }
                    ]
                }
            ])], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ConsoleRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConsoleRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                        {
                            path: '', component: _console_component__WEBPACK_IMPORTED_MODULE_2__["ConsoleComponent"],
                            children: [
                                {
                                    path: 'data-manage',
                                    loadChildren: () => Promise.all(/*! import() | data-manage-data-manage-module */[__webpack_require__.e("default~data-manage-data-manage-module~data-mark-data-mark-module~data-statistics-data-statistics-mo~d6bdf3a7"), __webpack_require__.e("default~data-manage-data-manage-module~data-mark-data-mark-module~data-training-data-training-module~e662891d"), __webpack_require__.e("default~data-manage-data-manage-module~data-mark-data-mark-module~data-statistics-data-statistics-mo~7f9fb08f"), __webpack_require__.e("default~data-manage-data-manage-module~data-statistics-data-statistics-module~data-training-data-tra~0cff5d88"), __webpack_require__.e("common"), __webpack_require__.e("data-manage-data-manage-module")]).then(__webpack_require__.bind(null, /*! ../data-manage/data-manage.module */ "./src/app/pages/data-manage/data-manage.module.ts")).then(m => m.DataManageModule)
                                }, {
                                    path: 'data-mark',
                                    loadChildren: () => Promise.all(/*! import() | data-mark-data-mark-module */[__webpack_require__.e("default~data-manage-data-manage-module~data-mark-data-mark-module~data-statistics-data-statistics-mo~d6bdf3a7"), __webpack_require__.e("default~data-manage-data-manage-module~data-mark-data-mark-module~data-training-data-training-module~e662891d"), __webpack_require__.e("default~data-manage-data-manage-module~data-mark-data-mark-module~data-statistics-data-statistics-mo~7f9fb08f"), __webpack_require__.e("common"), __webpack_require__.e("data-mark-data-mark-module")]).then(__webpack_require__.bind(null, /*! ../data-mark/data-mark.module */ "./src/app/pages/data-mark/data-mark.module.ts")).then(m => m.DataMarkModule)
                                }, {
                                    path: 'data-verify',
                                    loadChildren: () => Promise.all(/*! import() | data-verify-data-verify-module */[__webpack_require__.e("default~data-manage-data-manage-module~data-mark-data-mark-module~data-statistics-data-statistics-mo~d6bdf3a7"), __webpack_require__.e("default~data-manage-data-manage-module~data-mark-data-mark-module~data-training-data-training-module~e662891d"), __webpack_require__.e("common"), __webpack_require__.e("data-verify-data-verify-module")]).then(__webpack_require__.bind(null, /*! ../data-verify/data-verify.module */ "./src/app/pages/data-verify/data-verify.module.ts")).then(m => m.DataVerifyModule)
                                },
                                {
                                    path: 'data-training',
                                    loadChildren: () => Promise.all(/*! import() | data-training-data-training-module */[__webpack_require__.e("default~data-manage-data-manage-module~data-mark-data-mark-module~data-statistics-data-statistics-mo~d6bdf3a7"), __webpack_require__.e("default~data-manage-data-manage-module~data-mark-data-mark-module~data-training-data-training-module~e662891d"), __webpack_require__.e("default~data-manage-data-manage-module~data-mark-data-mark-module~data-statistics-data-statistics-mo~7f9fb08f"), __webpack_require__.e("default~data-manage-data-manage-module~data-statistics-data-statistics-module~data-training-data-tra~0cff5d88"), __webpack_require__.e("default~data-statistics-data-statistics-module~data-training-data-training-module"), __webpack_require__.e("data-training-data-training-module")]).then(__webpack_require__.bind(null, /*! ../data-training/data-training.module */ "./src/app/pages/data-training/data-training.module.ts")).then(m => m.DataTrainingModule)
                                },
                                {
                                    path: 'data-statistics',
                                    loadChildren: () => Promise.all(/*! import() | data-statistics-data-statistics-module */[__webpack_require__.e("default~data-manage-data-manage-module~data-mark-data-mark-module~data-statistics-data-statistics-mo~d6bdf3a7"), __webpack_require__.e("default~data-manage-data-manage-module~data-mark-data-mark-module~data-statistics-data-statistics-mo~7f9fb08f"), __webpack_require__.e("default~data-manage-data-manage-module~data-statistics-data-statistics-module~data-training-data-tra~0cff5d88"), __webpack_require__.e("default~data-statistics-data-statistics-module~data-training-data-training-module"), __webpack_require__.e("data-statistics-data-statistics-module")]).then(__webpack_require__.bind(null, /*! ../data-statistics/data-statistics.module */ "./src/app/pages/data-statistics/data-statistics.module.ts")).then(m => m.DataStatisticsModule)
                                }
                            ]
                        }
                    ])],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/console/console.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/console/console.component.ts ***!
  \****************************************************/
/*! exports provided: ConsoleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsoleComponent", function() { return ConsoleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_http_entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/http-entity */ "./src/app/core/http-entity.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");







class ConsoleComponent {
    constructor(route, store, router, httpClient) {
        this.route = route;
        this.store = store;
        this.router = router;
        this.httpClient = httpClient;
    }
    ngOnInit() {
        this.httpClient.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API_URL}/v1/users/0`).subscribe((result) => {
            if (_core_http_entity__WEBPACK_IMPORTED_MODULE_1__["HttpResult"].succeed(result.code)) {
                this.user = result.data;
                localStorage.setItem('userInfo', JSON.stringify(this.user));
            }
        });
    }
}
ConsoleComponent.ɵfac = function ConsoleComponent_Factory(t) { return new (t || ConsoleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"])); };
ConsoleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConsoleComponent, selectors: [["ng-component"]], decls: 31, vars: 1, consts: [["id", "app", 1, "flex-column"], ["src", "assets/images/top_bg.png", "alt", "\u667A\u80FD\u76EE\u6807\u68C0\u6D4B\u7CFB\u7EDF", 1, "img-responsive"], [1, "content", "flex-row"], [1, "content-left", "flex-column", "m-r"], [1, "userinfo", "flex-column"], ["src", "../assets/images/photo.png", "alt", "\u5934\u50CF", 1, "userinfo-photo"], [1, "userinfo-account"], [1, "menus"], ["routerLinkActive", "active", "routerLink", "/console/data-statistics", 1, "menu-item", "flex-row"], [1, "menu-item-icon", "amanisky", "amani-analyze"], [1, "menu-item-text"], ["routerLinkActive", "active", "routerLink", "/console/data-manage", 1, "menu-item", "flex-row"], [1, "menu-item-icon", "amanisky", "amani-data"], ["routerLink", "/console/data-mark", "routerLinkActive", "active", 1, "menu-item", "flex-row"], [1, "menu-item-icon", "amanisky", "amani-annotation"], ["routerLink", "/console/data-verify", "routerLinkActive", "active", 1, "menu-item", "flex-row"], [1, "menu-item-icon", "amanisky", "amani-audit"], ["routerLinkActive", "active", "routerLink", "/console/data-training", 1, "menu-item", "flex-row"], [1, "menu-item-icon", "amanisky", "amani-train"], [1, "content-right"]], template: function ConsoleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u670D\u52A1\u7EDF\u8BA1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u6570\u636E\u7BA1\u7406");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\u6570\u636E\u6807\u6CE8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\u6570\u636E\u5BA1\u6838");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\u6A21\u578B\u8BAD\u7EC3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user == null ? null : ctx.user.name);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi8uLi9jb25zb2xlL2NvbnNvbGUuY29tcG9uZW50Lmxlc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConsoleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './console.component.html',
                styleUrls: ['./console.component.less']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/console/console.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/console/console.module.ts ***!
  \*************************************************/
/*! exports provided: ConsoleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsoleModule", function() { return ConsoleModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _console_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./console.component */ "./src/app/pages/console/console.component.ts");
/* harmony import */ var _console_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./console-routing.module */ "./src/app/pages/console/console-routing.module.ts");




const APP_COMPONENT = [_console_component__WEBPACK_IMPORTED_MODULE_1__["ConsoleComponent"]];
class ConsoleModule {
}
ConsoleModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ConsoleModule });
ConsoleModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ConsoleModule_Factory(t) { return new (t || ConsoleModule)(); }, imports: [[_console_routing_module__WEBPACK_IMPORTED_MODULE_2__["ConsoleRoutingModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ConsoleModule, { declarations: [_console_component__WEBPACK_IMPORTED_MODULE_1__["ConsoleComponent"]], imports: [_console_routing_module__WEBPACK_IMPORTED_MODULE_2__["ConsoleRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConsoleModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [...APP_COMPONENT],
                imports: [_console_routing_module__WEBPACK_IMPORTED_MODULE_2__["ConsoleRoutingModule"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-console-console-module.js.map