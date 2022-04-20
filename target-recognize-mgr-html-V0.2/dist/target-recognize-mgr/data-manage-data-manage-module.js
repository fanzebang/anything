(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["data-manage-data-manage-module"],{

/***/ "./src/app/pages/data-manage/data-manage-add-sample.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/data-manage/data-manage-add-sample.component.ts ***!
  \***********************************************************************/
/*! exports provided: DataManageAddSampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataManageAddSampleComponent", function() { return DataManageAddSampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd.js");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/grid */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-grid.js");







class DataManageAddSampleComponent {
    constructor(http, fb) {
        this.http = http;
        this.fb = fb;
    }
    ngOnInit() {
        this.buildForm();
    }
    buildForm() {
        this.addForm = this.fb.group({
            sampleTypeName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(45)]],
            isLeaf: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
        });
    }
    getAddFormValue() {
        if (this.addForm.valid) {
            const formValue = this.addForm.value;
            return {
                imageCount: 0,
                isLeaf: false,
                id: formValue.id,
                sampleTypeNumber: 0,
                sampleTypeName: formValue.sampleTypeName,
                sampleUpId: this.sampleUpId,
                samplePath: formValue.samplePath
            };
        }
        return null;
    }
}
DataManageAddSampleComponent.ɵfac = function DataManageAddSampleComponent_Factory(t) { return new (t || DataManageAddSampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
DataManageAddSampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DataManageAddSampleComponent, selectors: [["ng-component"]], inputs: { sampleUpId: "sampleUpId" }, decls: 7, vars: 5, consts: [["nz-form", "", 3, "formGroup"], ["nzRequired", "", "nzFor", "sampleTypeName", 3, "nzXl", "nzMd"], [3, "nzXl", "nzMd"], ["nz-input", "", "formControlName", "sampleTypeName", "name", "sampleTypeName"]], template: function DataManageAddSampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nz-form-label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " \u5206\u7C7B\u540D\u79F0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nz-form-control", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.addForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzXl", 6)("nzMd", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzXl", 16)("nzMd", 16);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzFormDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_4__["NzRowDirective"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzFormItemComponent"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_4__["NzColDirective"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzFormLabelComponent"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzFormControlComponent"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: ["[_nghost-%COMP%]     .ant-radio-group {\n  margin-top: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGF0YS1tYW5hZ2UvRDovZmYvdGFyZ2V0LXJlY29nbml6ZS1tZ3ItaHRtbC1WMC4yL3NyYy9hcHAvcGFnZXMvZGF0YS1tYW5hZ2UvZGF0YS1tYW5hZ2UtYWRkLXNhbXBsZS5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvcGFnZXMvZGF0YS1tYW5hZ2UvZGF0YS1tYW5hZ2UtYWRkLXNhbXBsZS5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQVVJLGVBQUE7QUNSSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RhdGEtbWFuYWdlL2RhdGEtbWFuYWdlLWFkZC1zYW1wbGUuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA6Om5nLWRlZXAge1xuICAuYW50LXRyZWUtc2hvdy1saW5lIC5hbnQtdHJlZS1zd2l0Y2hlciB7XG4gICAgLy9iYWNrZ3JvdW5kOiAjMTg5MGZmO1xuICB9XG5cbiAgLmFudC10cmVlIHtcbiAgICAvL2JhY2tncm91bmQ6ICMxODkwZmY7XG4gIH1cblxuICAuYW50LXJhZGlvLWdyb3VwIHtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gIH1cbn1cbiIsIjpob3N0IDo6bmctZGVlcCAuYW50LXJhZGlvLWdyb3VwIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataManageAddSampleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './data-manage-add-sample.component.html',
                styleUrls: ['./data-manage-add-sample.component.less']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, { sampleUpId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/pages/data-manage/data-manage-detail.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/data-manage/data-manage-detail.component.ts ***!
  \*******************************************************************/
/*! exports provided: DataManageDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataManageDetailComponent", function() { return DataManageDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! echarts */ "./node_modules/echarts/index.js");
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(echarts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd.js");
/* harmony import */ var _core_app_common_pipes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/app-common.pipes */ "./src/app/core/app-common.pipes.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







const _c0 = ["lineEchart"];
class DataManageDetailComponent {
    constructor(http, nzMessage, nzModal) {
        this.http = http;
        this.nzMessage = nzMessage;
        this.nzModal = nzModal;
        this.secondaryData = [];
    }
    ngOnInit() {
        this.secondaryData.forEach((images) => {
            if (images.id === this.sampleOssId) {
                this.sampleOssFile = images;
                return;
            }
        });
    }
    ngAfterViewInit() {
        this.loadCharts();
    }
    nextImage() {
        for (let i = 0; i < this.secondaryData.length; i++) {
            if (this.secondaryData[i].id === this.sampleOssId) {
                if (i < this.secondaryData.length - 1) {
                    this.sampleOssFile = this.secondaryData[i + 1];
                    this.sampleOssId = this.secondaryData[i + 1].id;
                    return;
                }
                else {
                    this.nzMessage.error('已经是最后一张啦!');
                }
            }
        }
    }
    lastImage() {
        for (let i = 0; i < this.secondaryData.length; i++) {
            if (this.secondaryData[i].id === this.sampleOssId) {
                if (i === 0) {
                    this.nzMessage.error('已经是第一张啦!');
                }
                else {
                    this.sampleOssId = this.secondaryData[i - 1].id;
                    this.sampleOssFile = this.secondaryData[i - 1];
                    return;
                }
            }
        }
    }
    loadCharts() {
        const lineChartOption = {
            xAxis: {
                // data: [122, 130, 170],
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
                data: ['浏览次数', '下载次数', '训练次数'],
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
            grid: {
                x: 100
            },
            series: [
                {
                    data: [122, 130, 170],
                    type: 'bar',
                    itemStyle: {
                        normal: {
                            label: {
                                show: true,
                                position: 'insideRight'
                            },
                            color: (params) => {
                                console.log('params is :', params);
                                const colors = [{
                                        start: '#88c9ec',
                                        end: '#5599FF'
                                    }, {
                                        start: '#b0efb6',
                                        end: '#1ef50f'
                                    }, {
                                        start: '#7f8ae8',
                                        end: '#2e31ea'
                                    }];
                                return new echarts__WEBPACK_IMPORTED_MODULE_1__["graphic"].LinearGradient(0, 0, 1, 0, [
                                    { offset: 0, color: colors[params.dataIndex].start },
                                    { offset: 1, color: colors[params.dataIndex].end }
                                ]);
                            }
                        }
                    }
                }
            ]
        };
        if (!this.lineEchart) {
            this.lineEchart = echarts__WEBPACK_IMPORTED_MODULE_1__["init"](this.lineEchartElm.nativeElement);
        }
        this.lineEchart.setOption(lineChartOption);
    }
}
DataManageDetailComponent.ɵfac = function DataManageDetailComponent_Factory(t) { return new (t || DataManageDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzModalService"])); };
DataManageDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DataManageDetailComponent, selectors: [["ng-component"]], viewQuery: function DataManageDetailComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.lineEchartElm = _t.first);
    } }, inputs: { sampleOssId: "sampleOssId", secondaryData: "secondaryData" }, decls: 50, vars: 8, consts: [[1, "main", "flex-column"], [1, "search-form", "flex-row"], [1, "btn", "m-r"], [1, "btn", "btn-remove"], [1, "detail", "flex-column"], [1, "detail-image", "flex-row"], ["src", "assets/images/pre.png", "alt", "\u4E0A\u4E00\u5F20", 1, "pre", "pointer", 3, "click"], [1, "detail-box", "flex-column"], [1, "target-image", "flex-row"], ["alt", "\u56FE\u7247", 1, "img-responsive", 3, "src"], [1, "target-quantity"], ["src", "assets/images/next.png", "alt", "\u4E0B\u4E00\u5F20", 1, "next", "pointer", 3, "click"], [1, "detail-info", "flex-row"], [1, "detail-info-box", "flex-column", "m-r"], [1, "detail-info-type", "flex-row"], [1, "detail-info-param"], [1, "detail-info-value"], [1, "is_mark"], [1, "detail-info-box", "p-a"], [1, "echarts"], [1, "demo-chart", 2, "height", "240px"], ["lineEchart", ""]], template: function DataManageDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u9501\u5B9A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u5220\u9664");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataManageDetailComponent_Template_img_click_8_listener() { return ctx.lastImage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "ossPath");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "80 / 100");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataManageDetailComponent_Template_img_click_15_listener() { return ctx.nextImage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\u56FE\u5F62\u7C7B\u522B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\u9A71\u9010\u8230");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\u56FE\u7247\u5C3A\u5BF8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\u662F\u5426\u6807\u6CE8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\u662F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "\u4E0A\u4F20\u65F6\u95F4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](38, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "\u4E0A\u4F20\u4F5C\u8005");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Json");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "echarts \u7EDF\u8BA1\u56FE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "div", 20, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 3, ctx.sampleOssFile.ossKey), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.sampleOssFile.height + "*" + ctx.sampleOssFile.width);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](38, 5, ctx.sampleOssFile.createdTime, "yyyy-MM-dd HH:mm:ss"));
    } }, pipes: [_core_app_common_pipes__WEBPACK_IMPORTED_MODULE_4__["OssPathPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]], styles: ["[_nghost-%COMP%]     .prev-image, [_nghost-%COMP%]     .next-image {\n  position: absolute;\n  top: 50%;\n  background-color: rgba(0, 0, 0, 0.5);\n  width: 40px;\n  height: 40px;\n  line-height: 40px;\n  text-align: center;\n  border-radius: 50%;\n  padding: 5px;\n}\n[_nghost-%COMP%]     .prev-image > i, [_nghost-%COMP%]     .next-image > i {\n  font-size: 30px;\n  color: #FFF;\n}\n[_nghost-%COMP%]     .prev-image:hover, [_nghost-%COMP%]     .next-image:hover {\n  transform: scale(1.2);\n}\n[_nghost-%COMP%]     .prev-image {\n  left: 10px;\n}\n[_nghost-%COMP%]     .next-image {\n  right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGF0YS1tYW5hZ2UvRDovZmYvdGFyZ2V0LXJlY29nbml6ZS1tZ3ItaHRtbC1WMC4yL3NyYy9hcHAvcGFnZXMvZGF0YS1tYW5hZ2UvZGF0YS1tYW5hZ2UtZGV0YWlsLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9wYWdlcy9kYXRhLW1hbmFnZS9kYXRhLW1hbmFnZS1kZXRhaWwuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBR0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0Esb0NBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNBSjtBRFhBOztFQWNNLGVBQUE7RUFDQSxXQUFBO0FDQ047QURFSTs7RUFDRSxxQkFBQTtBQ0NOO0FEcEJBO0VBd0JJLFVBQUE7QUNESjtBRHZCQTtFQTRCSSxXQUFBO0FDRkoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9kYXRhLW1hbmFnZS9kYXRhLW1hbmFnZS1kZXRhaWwuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA6Om5nLWRlZXAge1xuXG4gIC5wcmV2LWltYWdlLCAubmV4dC1pbWFnZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBwYWRkaW5nOiA1cHg7XG5cbiAgICA+IGkge1xuICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgY29sb3I6ICNGRkY7XG4gICAgfVxuXG4gICAgJjpob3ZlciB7XG4gICAgICB0cmFuc2Zvcm06c2NhbGUoMS4yKTtcbiAgICB9XG4gIH1cblxuICAucHJldi1pbWFnZSB7XG4gICAgbGVmdDogMTBweDtcbiAgfVxuXG4gIC5uZXh0LWltYWdlIHtcbiAgICByaWdodDogMTBweDtcbiAgfVxufVxuIiwiOmhvc3QgOjpuZy1kZWVwIC5wcmV2LWltYWdlLFxuOmhvc3QgOjpuZy1kZWVwIC5uZXh0LWltYWdlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBsaW5lLWhlaWdodDogNDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBhZGRpbmc6IDVweDtcbn1cbjpob3N0IDo6bmctZGVlcCAucHJldi1pbWFnZSA+IGksXG46aG9zdCA6Om5nLWRlZXAgLm5leHQtaW1hZ2UgPiBpIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjb2xvcjogI0ZGRjtcbn1cbjpob3N0IDo6bmctZGVlcCAucHJldi1pbWFnZTpob3Zlcixcbjpob3N0IDo6bmctZGVlcCAubmV4dC1pbWFnZTpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbn1cbjpob3N0IDo6bmctZGVlcCAucHJldi1pbWFnZSB7XG4gIGxlZnQ6IDEwcHg7XG59XG46aG9zdCA6Om5nLWRlZXAgLm5leHQtaW1hZ2Uge1xuICByaWdodDogMTBweDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataManageDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './data-manage-detail.component.html',
                styleUrls: ['./data-manage-detail.component.less']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"] }, { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzModalService"] }]; }, { sampleOssId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], secondaryData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], lineEchartElm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['lineEchart']
        }] }); })();


/***/ }),

/***/ "./src/app/pages/data-manage/data-manage-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/data-manage/data-manage-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: DataManageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataManageRoutingModule", function() { return DataManageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _data_manage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data-manage.component */ "./src/app/pages/data-manage/data-manage.component.ts");
/* harmony import */ var _not_leaf_not_leaf_data_manage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./not-leaf/not-leaf.data-manage.component */ "./src/app/pages/data-manage/not-leaf/not-leaf.data-manage.component.ts");
/* harmony import */ var _leaf_leaf_data_manage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./leaf/leaf.data-manage.component */ "./src/app/pages/data-manage/leaf/leaf.data-manage.component.ts");
/* harmony import */ var _detail_detail_data_manage_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./detail/detail.data-manage.component */ "./src/app/pages/data-manage/detail/detail.data-manage.component.ts");
/* harmony import */ var _edit_edit_data_manage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit/edit.data-manage.component */ "./src/app/pages/data-manage/edit/edit.data-manage.component.ts");









class DataManageRoutingModule {
}
DataManageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DataManageRoutingModule });
DataManageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DataManageRoutingModule_Factory(t) { return new (t || DataManageRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{
                    path: '', component: _data_manage_component__WEBPACK_IMPORTED_MODULE_2__["DataManageComponent"],
                    children: [
                        {
                            path: 'not-leaf', component: _not_leaf_not_leaf_data_manage_component__WEBPACK_IMPORTED_MODULE_3__["NotLeafDataManageComponent"]
                        },
                        {
                            path: 'leaf', component: _leaf_leaf_data_manage_component__WEBPACK_IMPORTED_MODULE_4__["LeafDataManageComponent"]
                        },
                        {
                            path: 'edit', component: _edit_edit_data_manage_component__WEBPACK_IMPORTED_MODULE_6__["EditDataManageComponent"]
                        },
                        {
                            path: 'detail', component: _detail_detail_data_manage_component__WEBPACK_IMPORTED_MODULE_5__["DetailDataManageComponent"],
                            runGuardsAndResolvers: 'paramsChange',
                        }
                    ]
                }])], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DataManageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataManageRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{
                            path: '', component: _data_manage_component__WEBPACK_IMPORTED_MODULE_2__["DataManageComponent"],
                            children: [
                                {
                                    path: 'not-leaf', component: _not_leaf_not_leaf_data_manage_component__WEBPACK_IMPORTED_MODULE_3__["NotLeafDataManageComponent"]
                                },
                                {
                                    path: 'leaf', component: _leaf_leaf_data_manage_component__WEBPACK_IMPORTED_MODULE_4__["LeafDataManageComponent"]
                                },
                                {
                                    path: 'edit', component: _edit_edit_data_manage_component__WEBPACK_IMPORTED_MODULE_6__["EditDataManageComponent"]
                                },
                                {
                                    path: 'detail', component: _detail_detail_data_manage_component__WEBPACK_IMPORTED_MODULE_5__["DetailDataManageComponent"],
                                    runGuardsAndResolvers: 'paramsChange',
                                }
                            ]
                        }])],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/data-manage/data-manage-upload.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/data-manage/data-manage-upload.component.ts ***!
  \*******************************************************************/
/*! exports provided: DataManageUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataManageUploadComponent", function() { return DataManageUploadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd.js");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/icon */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-icon.js");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-transition-patch.js");









class DataManageUploadComponent {
    constructor(http, nzMessage, nzModalRef) {
        this.http = http;
        this.nzMessage = nzMessage;
        this.nzModalRef = nzModalRef;
        this.loading = false;
        this.showUploadList = {
            showPreviewIcon: true,
            showRemoveIcon: true,
            hidePreviewIconInNonImage: true
        };
        this.fileList = [];
        this.previewImage = '';
        this.previewVisible = false;
        this.imageJson = [];
        this.imageJsons = [];
        this.uploadDeviceImageTwo = ((item) => {
            const formData = new FormData();
            formData.append('files', item.file);
            let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().append('sampleTypeId', this.sampleUpId + '');
            return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL}/v1/sample-oss-file`, formData, {
                params: httpParams,
                reportProgress: true,
                responseType: 'text',
            }).subscribe((resp) => {
                item.onSuccess(resp, item.file, resp);
            });
        });
        this.beforeImageUpload = (file) => {
            return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((observer) => {
                const isJPG = file.type === 'image/jpeg';
                const isPNG = file.type === 'image/png';
                const isValidFormat = isJPG || isPNG;
                if (!isValidFormat) {
                    this.nzMessage.error('只能上传jpg或者png格式的图片');
                    observer.complete();
                    return;
                }
                const isLt2M = file.size / 1024 / 1024 < 2;
                if (!isLt2M) {
                    this.nzMessage.error('图片最多不能超过 2MB!');
                    observer.complete();
                    return;
                }
                // check height
                this.checkImageDimension(file).then(dimensionRes => {
                    if (!dimensionRes) {
                        this.nzMessage.error('图片尺寸至少 300x300 以上');
                        observer.complete();
                        return;
                    }
                    observer.next(isValidFormat && isLt2M && dimensionRes);
                    observer.complete();
                });
            });
        };
        this.handlePreview = (file) => {
            this.previewImage = file.url || file.thumbUrl;
            this.previewVisible = true;
        };
        this.removeHandle = (file) => {
            this.removeArray(this.fileList, file.uid);
            this.removeArray(this.imageJson, file.uid);
            this.imageJsons = [];
            this.handleImages(this.imageJson);
        };
    }
    getBase64(img, callback) {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result.toString()));
        reader.readAsDataURL(img);
    }
    checkImageDimension(file) {
        return new Promise(resolve => {
            const img = new Image(); // create image
            img.src = window.URL.createObjectURL(file);
            img.onload = () => {
                const width = img.naturalWidth;
                const height = img.naturalHeight;
                window.URL.revokeObjectURL(img.src);
                // resolve(width === height && width >= 300);
                resolve(true);
            };
        });
    }
    handleImageChange(info) {
        switch (info.file.status) {
            case 'uploading':
                this.loading = true;
                break;
            case 'done':
                // Get this url from response in real world.
                this.getBase64(info.file.originFileObj, (img) => {
                    this.loading = false;
                    this.deviceImageUrl = img;
                });
                break;
            case 'error':
                this.nzMessage.error('Network error');
                this.loading = false;
                break;
        }
    }
    removeArray(fileArray, uid) {
        fileArray.forEach(s => {
            if (s.uid === uid) {
                const indexOf = fileArray.indexOf(s);
                fileArray.splice(indexOf, 1);
            }
        });
    }
    handleImages(fileArray) {
        fileArray.forEach(s => {
            this.imageJsons.push(s.name);
        });
    }
    ngOnInit() {
    }
}
DataManageUploadComponent.ɵfac = function DataManageUploadComponent_Factory(t) { return new (t || DataManageUploadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzModalRef"])); };
DataManageUploadComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DataManageUploadComponent, selectors: [["ng-component"]], inputs: { sampleUpId: "sampleUpId" }, decls: 5, vars: 7, consts: [[1, "clearfix"], ["nzListType", "picture-card", 3, "nzCustomRequest", "nzBeforeUpload", "nzFileList", "nzShowButton", "nzRemove", "nzPreview", "nzMultiple", "nzChange", "nzFileListChange"], ["nz-icon", "", "nzType", "plus"], [1, "ant-upload-text"]], template: function DataManageUploadComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-upload", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzChange", function DataManageUploadComponent_Template_nz_upload_nzChange_1_listener($event) { return ctx.handleImageChange($event); })("nzFileListChange", function DataManageUploadComponent_Template_nz_upload_nzFileListChange_1_listener($event) { return ctx.fileList = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u4E0A\u4F20\u6587\u4EF6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzCustomRequest", ctx.uploadDeviceImageTwo)("nzBeforeUpload", ctx.beforeImageUpload)("nzFileList", ctx.fileList)("nzShowButton", ctx.fileList.length < 100)("nzRemove", ctx.removeHandle)("nzPreview", ctx.handlePreview)("nzMultiple", true);
    } }, directives: [ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzUploadComponent"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__["NzIconDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_6__["ɵNzTransitionPatchDirective"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataManageUploadComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './data-manage-upload.component.html',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"] }, { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzModalRef"] }]; }, { sampleUpId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/pages/data-manage/data-manage.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/data-manage/data-manage.component.ts ***!
  \************************************************************/
/*! exports provided: DataManageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataManageComponent", function() { return DataManageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd.js");
/* harmony import */ var _core_http_entity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/http-entity */ "./src/app/core/http-entity.ts");
/* harmony import */ var _data_manage_add_sample_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data-manage-add-sample.component */ "./src/app/pages/data-manage/data-manage-add-sample.component.ts");
/* harmony import */ var _data_manage_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./data-manage-detail.component */ "./src/app/pages/data-manage/data-manage-detail.component.ts");
/* harmony import */ var _data_manage_upload_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./data-manage-upload.component */ "./src/app/pages/data-manage/data-manage-upload.component.ts");
/* harmony import */ var _rename_sample_type_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./rename-sample-type.component */ "./src/app/pages/data-manage/rename-sample-type.component.ts");
/* harmony import */ var _state_rename_sample_oss_type_action__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../state/rename-sample-oss-type.action */ "./src/app/state/rename-sample-oss-type.action.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var _data_manage_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./data-manage.service */ "./src/app/pages/data-manage/data-manage.service.ts");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/icon */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-icon.js");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-transition-patch.js");


















const _c0 = ["nzTreeComponent"];
const _c1 = ["nzTreeComponentSar"];
const _c2 = ["nzTreeComponentRemote"];
const _c3 = ["nzTreeComponentInfrared"];
class DataManageComponent {
    constructor(http, nzMessage, nzModal, router, route, store, dataManageService) {
        this.http = http;
        this.nzMessage = nzMessage;
        this.nzModal = nzModal;
        this.router = router;
        this.route = route;
        this.store = store;
        this.dataManageService = dataManageService;
        this.visibleLight = [];
        this.infrared = [];
        this.sar = [];
        this.remoteSense = [];
        this.titleData = [];
        this.type = { KJG: 'KJG', HW: 'HW', SAR: 'SAR', YG: 'YG' };
        this.dataSet = [];
        //是否最后一级
        this.isEndType = true;
        this.secondaryData = [];
        this.secondaryTotal = 0;
        this.isOperateButton = false;
        this.checkOptionsOne = [];
        //选中类型
        this.chooseType = false;
        this.indeterminate = true;
        this.allChecked = false;
        this.visibleLightRootNode = new ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzTreeNode"]({
            title: '可见光',
            key: 'KJG',
            expanded: true,
            isSelected: true,
        });
        this.visibleLight.push(this.visibleLightRootNode);
        this.infraredRootNode = new ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzTreeNode"]({
            title: '红外',
            key: 'HW'
        });
        this.infrared.push(this.infraredRootNode);
        this.sarRootNode = new ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzTreeNode"]({
            title: 'SAR',
            key: 'SAR'
        });
        this.sar.push(this.sarRootNode);
        this.remoteSenseRootNode = new ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzTreeNode"]({
            title: '遥感',
            key: 'YG'
        });
        this.remoteSense.push(this.remoteSenseRootNode);
    }
    ngOnInit() {
        this.route.paramMap.subscribe((paramMap) => {
            if (paramMap.has('sampleUpId')) {
                console.log('this is sampleUpId' + paramMap.get('sampleUpId'));
            }
        });
        // this.checkOptionsOne.push();
        this.loadVisibleLightTree();
        // this.loadInfraredTree();
        // this.loadSarTree();
        // this.loadRemoteSenseTree();
        this.loadStatInfo();
    }
    loadVisibleLightTree() {
        const httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().append('sampleTypeName', this.type.KJG);
        this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API_URL}/v1/sample-oss-types`, { params: httpParams }).subscribe((result) => {
            var _a;
            if (_core_http_entity__WEBPACK_IMPORTED_MODULE_4__["HttpResult"].succeed(result.code)) {
                const visibleLight = result.data.map((samples) => {
                    return new ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzTreeNode"]({
                        title: samples.data.sampleTypeName + '    ' + samples.imageCount,
                        key: samples.data.id + '',
                        data: samples,
                        isLeaf: samples.data.isLeaf,
                    });
                });
                // this.titleData = visibleLight;
                if ((_a = this.nzTreeComponent.getTreeNodeByKey(this.type.KJG)) === null || _a === void 0 ? void 0 : _a.isExpanded) {
                    this.visibleLightRootNode.clearChildren();
                    this.visibleLightRootNode.addChildren(visibleLight);
                }
                this.router.navigate(['not-leaf', { 'sampleUpId': 'KJG' }], { relativeTo: this.route });
            }
        });
    }
    loadInfraredTree() {
        const httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().append('sampleTypeName', this.type.HW);
        this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API_URL}/v1/sample-oss-types`, { params: httpParams }).subscribe((result) => {
            var _a;
            if (_core_http_entity__WEBPACK_IMPORTED_MODULE_4__["HttpResult"].succeed(result.code)) {
                const infrared = result.data.map((samples) => {
                    return new ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzTreeNode"]({
                        title: samples.data.sampleTypeName + '    ' + samples.imageCount,
                        key: samples.data.id + '',
                        data: samples.data,
                        isLeaf: samples.data.isLeaf,
                    });
                });
                this.titleData = infrared;
                if ((_a = this.nzTreeComponentInfrared.getTreeNodeByKey(this.type.HW)) === null || _a === void 0 ? void 0 : _a.isExpanded) {
                    this.infraredRootNode.clearChildren();
                    this.infraredRootNode.addChildren(infrared);
                }
            }
        });
    }
    loadSarTree() {
        const httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().append('sampleTypeName', this.type.SAR);
        this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API_URL}/v1/sample-oss-types`, { params: httpParams }).subscribe((result) => {
            var _a;
            if (_core_http_entity__WEBPACK_IMPORTED_MODULE_4__["HttpResult"].succeed(result.code)) {
                if (result.data) {
                    const sar = result.data.map((samples) => {
                        return new ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzTreeNode"]({
                            title: samples.data.sampleTypeName + '    ' + samples.imageCount,
                            key: samples.data.id + '',
                            data: samples.data,
                            isLeaf: samples.data.isLeaf,
                        });
                    });
                    this.titleData = sar;
                    if ((_a = this.nzTreeComponentSar.getTreeNodeByKey(this.type.SAR)) === null || _a === void 0 ? void 0 : _a.isExpanded) {
                        this.sarRootNode.clearChildren();
                        this.sarRootNode.addChildren(sar);
                    }
                }
            }
        });
    }
    loadRemoteSenseTree() {
        const httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().append('sampleTypeName', this.type.YG);
        this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API_URL}/v1/sample-oss-types`, { params: httpParams }).subscribe((result) => {
            var _a;
            if (_core_http_entity__WEBPACK_IMPORTED_MODULE_4__["HttpResult"].succeed(result.code)) {
                if (result.data) {
                    const remote = result.data.map((samples) => {
                        return new ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzTreeNode"]({
                            title: samples.data.sampleTypeName + '    ' + samples.imageCount,
                            key: samples.data.id + '',
                            data: samples.data,
                            isLeaf: samples.data.isLeaf,
                        });
                    });
                    this.titleData = remote;
                    if ((_a = this.nzTreeComponentRemote.getTreeNodeByKey(this.type.YG)) === null || _a === void 0 ? void 0 : _a.isExpanded) {
                        this.remoteSenseRootNode.clearChildren();
                        this.remoteSenseRootNode.addChildren(remote);
                    }
                }
            }
        });
    }
    loadStatInfo() {
        this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API_URL}/v1/stat-infos/`).subscribe((result) => {
            if (_core_http_entity__WEBPACK_IMPORTED_MODULE_4__["HttpResult"].succeed(result.code)) {
                this.statInfo = result.data;
            }
        });
    }
    /**
     * 点击事件
     * @param event
     */
    nzEvent(event) {
        if (event.node.isLeaf) {
            // 袁攀 如果是最后一级
            this.router.navigate(['leaf', { 'sampleUpId': event.node.key }], { relativeTo: this.route });
        }
        else {
            // 袁攀 如果不是最后一级
            console.log('不是最后一级');
            this.router.navigate(['not-leaf', { 'sampleUpId': event.node.key }], { relativeTo: this.route });
        }
        let id = event.node.key;
        let node = event.node;
        this.currentNode = event.node;
        //展开叶子的时候去加载子节点
        console.log(event.eventName + '选中的是谁');
        if (event.eventName === 'click') {
            if (!isNaN(parseInt(id))) {
            }
            else {
                switch (id) {
                    case this.type.KJG:
                        this.sampleUpId = 1;
                        // this.mutexType(id);
                        this.loadVisibleLightTree();
                        return;
                    case this.type.YG:
                        // this.mutexType(id);
                        this.loadRemoteSenseTree();
                        this.sampleUpId = 2;
                        return;
                    case this.type.SAR:
                        // this.mutexType(id);
                        this.sampleUpId = 4;
                        this.loadSarTree();
                        return;
                    case this.type.HW:
                        // this.mutexType(id);
                        this.sampleUpId = 3;
                        this.loadInfraredTree();
                        return;
                }
            }
            if (event.node.isSelected) {
                this.sampleUpId = parseInt(event.node.key);
            }
            else {
                this.sampleUpId = null;
            }
        }
        //只加载树菜单
        if (event.eventName === 'expand' && event.node.isExpanded) {
            let params;
            if (!isNaN(parseInt(id))) {
                params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().append('sampleUpId', id);
            }
            else {
                params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().append('sampleTypeName', id);
            }
            this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API_URL}/v1/sample-oss-types`, { params: params }).subscribe((result) => {
                if (_core_http_entity__WEBPACK_IMPORTED_MODULE_4__["HttpResult"].succeed(result.code)) {
                    const data = result.data.map((samples) => {
                        return new ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzTreeNode"]({
                            markTitle: samples.data.sampleTypeName,
                            title: samples.data.sampleTypeName + '    ' + samples.imageCount,
                            key: samples.data.id + '',
                            data: samples.data,
                            isLeaf: samples.data.isLeaf,
                            id: samples.data.id
                        });
                    });
                    this.titleData = data;
                    if ((node === null || node === void 0 ? void 0 : node.getChildren().length) === 0) {
                        node.addChildren(data);
                    }
                }
            });
        }
    }
    //互斥click事件
    mutexType(type) {
        switch (type) {
            case this.type.KJG:
                this.nzTreeComponentSar.getTreeNodeByKey(this.type.SAR).setSelected(false);
                this.nzTreeComponentSar.getTreeNodeByKey(this.type.YG).setSelected(false);
                this.nzTreeComponentSar.getTreeNodeByKey(this.type.HW).setSelected(false);
                return;
            case this.type.SAR:
                this.nzTreeComponentSar.getTreeNodeByKey(this.type.KJG).setSelected(false);
                this.nzTreeComponentSar.getTreeNodeByKey(this.type.YG).setSelected(false);
                this.nzTreeComponentSar.getTreeNodeByKey(this.type.HW).setSelected(false);
                return;
            case this.type.YG:
                this.nzTreeComponentSar.getTreeNodeByKey(this.type.SAR).setSelected(false);
                this.nzTreeComponentSar.getTreeNodeByKey(this.type.KJG).setSelected(false);
                this.nzTreeComponentSar.getTreeNodeByKey(this.type.HW).setSelected(false);
                return;
            case this.type.HW:
                this.nzTreeComponentSar.getTreeNodeByKey(this.type.SAR).setSelected(false);
                this.nzTreeComponentSar.getTreeNodeByKey(this.type.KJG).setSelected(false);
                this.nzTreeComponentSar.getTreeNodeByKey(this.type.YG).setSelected(false);
                return;
        }
    }
    /**
     * 新增分类
     */
    addSampleType() {
        if (this.sampleUpId) {
            const addModal = this.nzModal.create({
                nzTitle: '新建下级分类',
                nzContent: _data_manage_add_sample_component__WEBPACK_IMPORTED_MODULE_5__["DataManageAddSampleComponent"],
                nzComponentParams: {
                    'sampleUpId': this.sampleUpId,
                },
                nzOnOk: (addComponent) => {
                    const formValue = addComponent.getAddFormValue();
                    if (formValue) {
                        this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API_URL}/v1/sample-oss-types`, formValue).subscribe((result) => {
                            //重新加载树 通过选择的key去加载树
                            if (_core_http_entity__WEBPACK_IMPORTED_MODULE_4__["HttpResult"].succeed(result.code)) {
                                // debugger;
                                // switch (this.sampleUpId) {
                                //   case 1:
                                //this.loadVisibleLightTree();
                                //     addModal.close();
                                //     return;
                                //   case 2:
                                //this.loadRemoteSenseTree();
                                //     addModal.close();
                                //     return;
                                //   case 4:
                                //this.loadSarTree();
                                //     addModal.close();
                                //     return;
                                //   case 3:
                                //this.loadInfraredTree();
                                addModal.close();
                                //     return;
                                // }
                                // console.log(result.data.isLeaf + 'issss');
                                // this.nzTreeComponent.getTreeNodeByKey(this.sampleUpId + '').addChildren([{
                                //   title: result.data.sampleTypeName,
                                //   key: result.data.id + '',
                                //   isLeaf: result.data.isLeaf,
                                // }]);
                                // this.currentNode. ([{
                                //   markTitle: samples.data.sampleTypeName,
                                //   title: samples.data.sampleTypeName + '    ' + samples.imageCount,
                                //   key: samples.data.id + '',
                                //   data: samples.data,
                                //   isLeaf: samples.data.isLeaf,
                                //   id:samples.data.id
                                // }])
                                this.currentNode.addChildren([new ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzTreeNode"]({
                                        markTitle: result.data.sampleTypeName,
                                        title: result.data.sampleTypeName + '    ' + result.data.imageCount,
                                        key: result.data.id + '',
                                        data: result.data,
                                        isLeaf: result.data.isLeaf,
                                        id: result.data.id
                                    })]);
                                if (this.currentNode.isLeaf) {
                                    this.currentNode.isLeaf = false;
                                }
                                else {
                                    let params;
                                    var id = this.sampleUpId + '';
                                    if (!isNaN(parseInt(id))) {
                                        params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().append('sampleUpId', id);
                                    }
                                    else {
                                        params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().append('sampleTypeName', id);
                                    }
                                    this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API_URL}/v1/sample-oss-types`, { params: params }).subscribe((result) => {
                                        if (_core_http_entity__WEBPACK_IMPORTED_MODULE_4__["HttpResult"].succeed(result.code)) {
                                            const data = result.data.map((samples) => {
                                                return new ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzTreeNode"]({
                                                    markTitle: samples.data.sampleTypeName,
                                                    title: samples.data.sampleTypeName + '    ' + samples.imageCount,
                                                    key: samples.data.id + '',
                                                    data: samples.data,
                                                    isLeaf: samples.data.isLeaf,
                                                    id: samples.data.id
                                                });
                                            });
                                            this.titleData = data;
                                            this.currentNode.clearChildren();
                                            this.currentNode.addChildren(data);
                                        }
                                    });
                                }
                                // addModal.close();
                            }
                            else {
                                this.nzMessage.error('新增失败！');
                            }
                        });
                    }
                    return false;
                },
            });
        }
        else {
            this.nzMessage.error('请先选择父级菜单！');
        }
    }
    delSampleType() {
        if (this.currentNode) {
            this.nzModal.confirm({
                nzTitle: '确定删除吗？',
                nzContent: `将要删除【${this.currentNode.title}】，是否要继续？`,
                nzOnOk: () => {
                    this.http.delete(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API_URL}/v1/sample-oss-types`, {
                        params: {
                            id: this.currentNode.key
                        }
                    }).subscribe(() => {
                        this.currentNode.remove();
                        this.currentNode = null;
                    });
                }
            });
        }
    }
    editSampleType() {
        if (this.currentNode) {
            // let targerData = this.currentNode.origin.data.data;
            // const nodeData;
            // if (!nodeData.isLeaf) {
            //   targerData = nodeData.data;
            // } else {
            //   targerData = nodeData;
            // }
            // const currentSampleType = nodeData;
            //查询一下具体的对象 免得要更新 树结构
            this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API_URL}/v1/sample-oss-types/${this.currentNode.key}`).subscribe((result) => {
                if (_core_http_entity__WEBPACK_IMPORTED_MODULE_4__["HttpResult"].succeed(result.code)) {
                    const currentSampleType = result.data;
                    console.log('currentSampleType is :', currentSampleType);
                    const addModal = this.nzModal.create({
                        nzTitle: '重命名分类',
                        nzContent: _rename_sample_type_component__WEBPACK_IMPORTED_MODULE_8__["RenameSampleTypeComponent"],
                        nzComponentParams: {
                            sampleTypeName: currentSampleType.sampleTypeName
                        },
                        nzOnOk: (renameComponent) => {
                            const newName = renameComponent.getNewName();
                            if (newName) {
                                this.http.patch(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API_URL}/v2/sample-oss-types/${currentSampleType.id}/sample-type-name`, {
                                    sampleTypeName: newName
                                }).subscribe((result) => {
                                    if (_core_http_entity__WEBPACK_IMPORTED_MODULE_4__["HttpResult"].succeed(result.code)) {
                                        this.nzMessage.success('修改成功');
                                        this.currentNode.title = newName + '    ' + result.data.imageCount;
                                        addModal.close();
                                        if (result.data.isLeaf) {
                                            this.store.dispatch(new _state_rename_sample_oss_type_action__WEBPACK_IMPORTED_MODULE_9__["RenameSampleOssTypeAction"](newName)).subscribe((aa) => {
                                                console.log('aa is :', aa);
                                            });
                                            // this.router.navigate(['leaf', {'sampleUpId': result.data.id}], {relativeTo: this.route});
                                        }
                                    }
                                    else {
                                        this.nzMessage.error(result.message);
                                    }
                                });
                            }
                            return false;
                        },
                    });
                }
            });
        }
    }
    loadImage(sampleUpId, sampleType) {
        let httpParams;
        if (!sampleType) {
            httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().append('enumTypeName', sampleType);
        }
        this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API_URL}/v1/sample-oss-file/type/${sampleUpId}`, { params: httpParams }).subscribe((result) => {
            if (_core_http_entity__WEBPACK_IMPORTED_MODULE_4__["HttpResult"].succeed(result.code)) {
                this.dataSet = result.data;
            }
        });
    }
    loadSecondaryImage(sampleUpId) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().append('typeId', sampleUpId + '');
        this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API_URL}/v1/sample-oss-file/getOssFilesByTypeId`, { params: params }).subscribe((result) => {
            this.secondaryData = result.data.records;
            this.secondaryTotal = result.data.total;
            const box = this.secondaryData.map((s) => {
                return [{ label: '', value: s.id, checked: false, typeId: s.sampleTypeId }];
            });
            this.checkOptionsOne = box;
        });
    }
    operateMgr(flag) {
        this.isOperateButton = flag;
    }
    //图片详情 包括上一张和下一张操作
    amplify(sampleOssId) {
        this.nzModal.create({
            nzWidth: 800,
            nzContent: _data_manage_detail_component__WEBPACK_IMPORTED_MODULE_6__["DataManageDetailComponent"],
            nzFooter: null,
            nzComponentParams: {
                'sampleOssId': sampleOssId,
                'secondaryData': this.secondaryData,
            },
            nzClosable: false,
            nzBodyStyle: {
                'padding': '0',
            },
        });
    }
    /**
     * 全选
     */
    updateAllChecked() {
        if (this.allChecked) {
            this.checkOptionsOne = this.checkOptionsOne.map(item => {
                return [Object.assign(Object.assign({}, item), { checked: false })];
            });
            this.allChecked = false;
        }
        else {
            this.checkOptionsOne = this.checkOptionsOne.map(item => {
                return [Object.assign(Object.assign({}, item), { checked: true })];
            });
            this.allChecked = true;
        }
    }
    /**
     * 单选
     */
    updateSingleChecked() {
        if (this.checkOptionsOne.every(item => !item.checked)) {
            this.allChecked = false;
            this.indeterminate = false;
        }
        else if (this.checkOptionsOne.every(item => item.checked)) {
            this.allChecked = true;
            this.indeterminate = false;
        }
        else {
            this.indeterminate = true;
        }
    }
    /**
     * 获取选中的图片
     */
    getChooseImage() {
        let ids = '';
        this.checkOptionsOne.map((s) => {
            if (s[0].checked) {
                console.log('被选中的id ' + s[0].typeId);
                ids = ids.concat(s[0].value + ',');
            }
        });
        console.log(ids);
        return ids;
    }
    /**
     * 获取选中的上级id
     */
    getChooseTypeId() {
        let sampleTypeId = '';
        this.checkOptionsOne.map((s) => {
            if (s[0].checked) {
                sampleTypeId = s[0].typeId;
            }
        });
        return sampleTypeId;
    }
    /**
     * 删除
     */
    delete() {
        let ids = this.getChooseImage();
        let sampleTypeId = this.getChooseTypeId();
        console.log('this is ' + ids + '------>' + sampleTypeId);
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().append('ids', ids).append('sampleTypeId', sampleTypeId).append('enumStatus', 'DELETE');
        this.http.patch(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API_URL}/v1/sample-oss-file/patch_status`, null, { params: params }).subscribe((result) => {
            console.log(result.code + '   code');
            if (_core_http_entity__WEBPACK_IMPORTED_MODULE_4__["HttpResult"].succeed(result.code)) {
                this.loadSecondaryImage(parseInt(sampleTypeId));
            }
            else {
                this.nzMessage.error(result.message);
            }
        });
    }
    move() {
        // this.nzMessage.error('');
    }
    lock() {
        let ids = this.getChooseImage();
        let sampleTypeId = this.getChooseTypeId();
        console.log('this is ' + ids + '------>' + sampleTypeId);
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().append('ids', ids).append('sampleTypeId', sampleTypeId).append('enumStatus', 'LOCK');
        this.http.patch(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API_URL}/v1/sample-oss-file/patch_status`, null, { params: params }).subscribe((result) => {
            console.log(result.code + '   code');
            if (_core_http_entity__WEBPACK_IMPORTED_MODULE_4__["HttpResult"].succeed(result.code)) {
                this.loadSecondaryImage(parseInt(sampleTypeId));
            }
            else {
                this.nzMessage.error(result.message);
            }
        });
    }
    uploadImages() {
        const modal = this.nzModal.create({
            nzWidth: 1000,
            nzContent: _data_manage_upload_component__WEBPACK_IMPORTED_MODULE_7__["DataManageUploadComponent"],
            nzFooter: null,
            nzComponentParams: {
                'sampleUpId': this.sampleUpId
            },
        });
        modal.afterClose.subscribe(() => {
            //重新加载图片
            this.loadSecondaryImage(this.sampleUpId);
        });
    }
}
DataManageComponent.ɵfac = function DataManageComponent_Factory(t) { return new (t || DataManageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_11__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_manage_service__WEBPACK_IMPORTED_MODULE_12__["DataManageService"])); };
DataManageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DataManageComponent, selectors: [["ng-component"]], viewQuery: function DataManageComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.nzTreeComponent = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.nzTreeComponentSar = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.nzTreeComponentRemote = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.nzTreeComponentInfrared = _t.first);
    } }, decls: 22, vars: 8, consts: [[1, "flex-row"], [1, "tree-box", "flex-column"], [1, "tree-top", 2, "text-align", "left"], [1, "tree-top-title"], [1, "tree-top-add", 3, "click"], ["nz-icon", "", "nzType", "edit", "nzTheme", "outline"], ["nz-icon", "", "nzType", "plus", "nzTheme", "outline"], ["nz-icon", "", "nzType", "minus", "nzTheme", "outline"], [2, "padding", "10px", "overflow", "scroll"], ["nzShowLine", "", "nzAsyncData", "", 2, "font-size", "18px", "color", "#65CAFF", "line-height", "28px", 3, "nzData", "nzShowIcon", "nzClick", "nzExpandChange"], ["nzTreeComponent", ""], ["nzTreeComponentSar", ""], ["nzTreeComponentRemote", ""], ["nzTreeComponentInfrared", ""], [1, "main"]], template: function DataManageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u6240\u6709\u5206\u7C7B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataManageComponent_Template_span_click_5_listener() { return ctx.editSampleType(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataManageComponent_Template_span_click_7_listener() { return ctx.addSampleType(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataManageComponent_Template_span_click_9_listener() { return ctx.delSampleType(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "nz-tree", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzClick", function DataManageComponent_Template_nz_tree_nzClick_12_listener($event) { return ctx.nzEvent($event); })("nzExpandChange", function DataManageComponent_Template_nz_tree_nzExpandChange_12_listener($event) { return ctx.nzEvent($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "nz-tree", 9, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzClick", function DataManageComponent_Template_nz_tree_nzClick_14_listener($event) { return ctx.nzEvent($event); })("nzExpandChange", function DataManageComponent_Template_nz_tree_nzExpandChange_14_listener($event) { return ctx.nzEvent($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "nz-tree", 9, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzClick", function DataManageComponent_Template_nz_tree_nzClick_16_listener($event) { return ctx.nzEvent($event); })("nzExpandChange", function DataManageComponent_Template_nz_tree_nzExpandChange_16_listener($event) { return ctx.nzEvent($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "nz-tree", 9, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzClick", function DataManageComponent_Template_nz_tree_nzClick_18_listener($event) { return ctx.nzEvent($event); })("nzExpandChange", function DataManageComponent_Template_nz_tree_nzExpandChange_18_listener($event) { return ctx.nzEvent($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzData", ctx.visibleLight)("nzShowIcon", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzData", ctx.sar)("nzShowIcon", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzData", ctx.remoteSense)("nzShowIcon", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzData", ctx.infrared)("nzShowIcon", false);
    } }, directives: [ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_13__["NzIconDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_14__["ɵNzTransitionPatchDirective"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzTreeComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterOutlet"]], styles: ["[_nghost-%COMP%]    > div[_ngcontent-%COMP%] {\n  height: 100%;\n}\n[_nghost-%COMP%]     .ant-tree-show-line .ant-tree-switcher {\n  background: #1890ff;\n}\n[_nghost-%COMP%]     .ant-pagination {\n  margin: 0 auto;\n}\n[_nghost-%COMP%]     .ant-tree-title {\n  color: #ffffff;\n  word-break: keep-all;\n  white-space: nowrap;\n}\n[_nghost-%COMP%]     .ant-tree-node-selected.active {\n  color: #275081;\n}\n[_nghost-%COMP%]     .ant-tree-title .ng-star-inserted {\n  color: #083899;\n}\n[_nghost-%COMP%]     .ant-tree-title.active {\n  color: #083899;\n}\n[_nghost-%COMP%]     .ant-tree-title.active {\n  color: red;\n}\n[_nghost-%COMP%]     .ant-tree-show-line .ant-tree-switcher {\n  background: #08172e !important;\n  color: #295995;\n}\n[_nghost-%COMP%]     .ant-tree-indent-unit::before {\n  border-color: #295995;\n}\n[_nghost-%COMP%]     .locked-image {\n  border: 2px solid red;\n}\n[_nghost-%COMP%]     .ant-tree .ant-tree-node-content-wrapper.ant-tree-node-selected {\n  background-color: #083899;\n}\n[_nghost-%COMP%]     .ant-tree .ant-tree-node-content-wrapper:hover {\n  background-color: #083899;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGF0YS1tYW5hZ2UvRDovZmYvdGFyZ2V0LXJlY29nbml6ZS1tZ3ItaHRtbC1WMC4yL3NyYy9hcHAvcGFnZXMvZGF0YS1tYW5hZ2UvZGF0YS1tYW5hZ2UuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL3BhZ2VzL2RhdGEtbWFuYWdlL2RhdGEtbWFuYWdlLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksWUFBQTtBQ0FKO0FEUUE7RUFFSSxtQkFBQTtBQ1BKO0FES0E7RUFVSSxjQUFBO0FDWko7QURFQTtFQWNJLGNBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0FDYko7QURIQTtFQXdCSSxjQUFBO0FDbEJKO0FETkE7RUE0QkksY0FBQTtBQ25CSjtBRFRBO0VBZ0NJLGNBQUE7QUNwQko7QURaQTtFQW9DRyxVQUFBO0FDckJIO0FEZkE7RUF5Q0ksOEJBQUE7RUFDQSxjQUFBO0FDdkJKO0FEbkJBO0VBOENJLHFCQUFBO0FDeEJKO0FEdEJBO0VBa0RJLHFCQUFBO0FDekJKO0FEekJBO0VBdURJLHlCQUFBO0FDM0JKO0FENUJBO0VBMERJLHlCQUFBO0FDM0JKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZGF0YS1tYW5hZ2UvZGF0YS1tYW5hZ2UuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gID4gZGl2IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cblxuICAvL256LXRyZWUge1xuICAvLyAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC8vfVxufVxuXG46aG9zdCA6Om5nLWRlZXAge1xuICAuYW50LXRyZWUtc2hvdy1saW5lIC5hbnQtdHJlZS1zd2l0Y2hlciB7XG4gICAgYmFja2dyb3VuZDogIzE4OTBmZjtcbiAgfVxuXG4gIC5hbnQtdHJlZSB7XG4gICAgLy8gYmFja2dyb3VuZDogIzE4OTBmZjtcbiAgXG4gIH1cbiAgLmFudC1wYWdpbmF0aW9ue1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICB9XG5cbiAgLmFudC10cmVlLXRpdGxlIHtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICB3b3JkLWJyZWFrOiBrZWVwLWFsbDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB9XG4gIC8vIC5hbnQtdHJlZS10aXRsZTpob3ZlcntcbiAgLy8gICBiYWNrZ3JvdW5kOiAjMTg5MGZmO1xuIFxuICAvLyB9XG5cbiAgLmFudC10cmVlLW5vZGUtc2VsZWN0ZWQuYWN0aXZlIHtcbiAgICBjb2xvcjogIzI3NTA4MTtcbiAgfVxuXG4gIC5hbnQtdHJlZS10aXRsZSAubmctc3Rhci1pbnNlcnRlZCB7XG4gICAgY29sb3I6ICMwODM4OTk7XG4gIH1cblxuICAuYW50LXRyZWUtdGl0bGUuYWN0aXZlIHtcbiAgICBjb2xvcjogIzA4Mzg5OTtcbiAgfVxuXG4gIC5hbnQtdHJlZS10aXRsZS5hY3RpdmV7XG4gICBjb2xvcjogcmVkO1xuICB9XG5cbiAgLmFudC10cmVlLXNob3ctbGluZSAuYW50LXRyZWUtc3dpdGNoZXIge1xuICAgIC8vYmFja2dyb3VuZDogcmdiKDQxLCA4OSwgMTQ5KSAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQ6IHJnYig4LCAyMywgNDYpICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6IHJnYig0MSwgODksIDE0OSk7XG4gIH1cblxuICAuYW50LXRyZWUtaW5kZW50LXVuaXQ6OmJlZm9yZSB7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoNDEsIDg5LCAxNDkpO1xuICB9XG5cbiAgLmxvY2tlZC1pbWFnZSB7XG4gICAgYm9yZGVyOiAycHggc29saWQgcmVkO1xuXG4gIH1cblxuICAuYW50LXRyZWUgLmFudC10cmVlLW5vZGUtY29udGVudC13cmFwcGVyLmFudC10cmVlLW5vZGUtc2VsZWN0ZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwODM4OTk7XG4gIH1cbiAgLmFudC10cmVlIC5hbnQtdHJlZS1ub2RlLWNvbnRlbnQtd3JhcHBlcjpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDgzODk5IDtcbiAgfVxufVxuIiwiOmhvc3QgPiBkaXYge1xuICBoZWlnaHQ6IDEwMCU7XG59XG46aG9zdCA6Om5nLWRlZXAgLmFudC10cmVlLXNob3ctbGluZSAuYW50LXRyZWUtc3dpdGNoZXIge1xuICBiYWNrZ3JvdW5kOiAjMTg5MGZmO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5hbnQtcGFnaW5hdGlvbiB7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5hbnQtdHJlZS10aXRsZSB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB3b3JkLWJyZWFrOiBrZWVwLWFsbDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbjpob3N0IDo6bmctZGVlcCAuYW50LXRyZWUtbm9kZS1zZWxlY3RlZC5hY3RpdmUge1xuICBjb2xvcjogIzI3NTA4MTtcbn1cbjpob3N0IDo6bmctZGVlcCAuYW50LXRyZWUtdGl0bGUgLm5nLXN0YXItaW5zZXJ0ZWQge1xuICBjb2xvcjogIzA4Mzg5OTtcbn1cbjpob3N0IDo6bmctZGVlcCAuYW50LXRyZWUtdGl0bGUuYWN0aXZlIHtcbiAgY29sb3I6ICMwODM4OTk7XG59XG46aG9zdCA6Om5nLWRlZXAgLmFudC10cmVlLXRpdGxlLmFjdGl2ZSB7XG4gIGNvbG9yOiByZWQ7XG59XG46aG9zdCA6Om5nLWRlZXAgLmFudC10cmVlLXNob3ctbGluZSAuYW50LXRyZWUtc3dpdGNoZXIge1xuICBiYWNrZ3JvdW5kOiAjMDgxNzJlICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjMjk1OTk1O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5hbnQtdHJlZS1pbmRlbnQtdW5pdDo6YmVmb3JlIHtcbiAgYm9yZGVyLWNvbG9yOiAjMjk1OTk1O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5sb2NrZWQtaW1hZ2Uge1xuICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XG59XG46aG9zdCA6Om5nLWRlZXAgLmFudC10cmVlIC5hbnQtdHJlZS1ub2RlLWNvbnRlbnQtd3JhcHBlci5hbnQtdHJlZS1ub2RlLXNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA4Mzg5OTtcbn1cbjpob3N0IDo6bmctZGVlcCAuYW50LXRyZWUgLmFudC10cmVlLW5vZGUtY29udGVudC13cmFwcGVyOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA4Mzg5OTtcbn1cbiJdfQ== */", "[_nghost-%COMP%]     .tree-box {\n  flex-basis: 16%;\n  overflow-x: hidden;\n  overflow-y: auto;\n  border-right: 1px solid #149fff;\n}\n[_nghost-%COMP%]     .tree-top {\n  height: 44px;\n  line-height: 44px;\n  padding-left: 20px;\n  font-size: 18px;\n  text-align: center;\n  color: #fff;\n  background: url('bg10.png') no-repeat 0 100%;\n}\n[_nghost-%COMP%]     .tree-top-add {\n  float: right;\n  font-size: 16px;\n  margin-right: 10px;\n  cursor: pointer;\n}\n[_nghost-%COMP%]     .tree {\n  flex: 1;\n  color: #0282ac;\n  padding: 10px;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n[_nghost-%COMP%]     .main {\n  flex: 1;\n  overflow: hidden;\n  padding: 10px;\n}\n[_nghost-%COMP%]     .analyze {\n  flex-basis: 114px;\n  align-items: center;\n  padding-top: 10px;\n  padding-bottom: 16px;\n  justify-content: space-evenly;\n  background: url('bg04.png') repeat-x 0 100%, url('bg06.png') repeat 0 0;\n}\n[_nghost-%COMP%]     .analyze-item {\n  flex-basis: 144px;\n  height: 120px;\n  text-align: center;\n  background: url('bg03.png') no-repeat 0 0 / 100%;\n  width: 220px;\n}\n[_nghost-%COMP%]     .analyze-item-title {\n  height: 36px;\n  line-height: 36px;\n  color: #23a6ec;\n}\n[_nghost-%COMP%]     .analyze-item-value {\n  height: 52px;\n  line-height: 52px;\n  font-size: 14px;\n  color: #01effd;\n}\n[_nghost-%COMP%]     .analyze-item-key {\n  color: #ffffff;\n  font-size: 24px;\n  margin: 0 5px;\n}\n[_nghost-%COMP%]     .pictures {\n  flex: 1;\n  overflow: hidden;\n}\n[_nghost-%COMP%]     .picture-bg-x {\n  background: url('bg04.png') repeat-x 0 100%;\n}\n[_nghost-%COMP%]     .picture-bg-y {\n  background: url('bg05.png') repeat-y 100% 0;\n}\n[_nghost-%COMP%]     .picture-left {\n  flex-basis: 41%;\n  overflow: hidden;\n}\n[_nghost-%COMP%]     .picture-left-top {\n  flex-basis: 60%;\n  overflow: hidden;\n}\n[_nghost-%COMP%]     .picture-left-bottom {\n  flex-basis: 40%;\n  overflow: hidden;\n}\n[_nghost-%COMP%]     .picture-right {\n  flex-basis: 59%;\n  overflow: hidden;\n}\n[_nghost-%COMP%]     .picture-right-top {\n  flex-basis: 40%;\n  overflow: hidden;\n}\n[_nghost-%COMP%]     .picture-right-top-item, [_nghost-%COMP%]     .picture-right-middle-item, [_nghost-%COMP%]     .picture-right-bottom-item {\n  flex: 1;\n  overflow: hidden;\n}\n[_nghost-%COMP%]     .picture-right-bottom, [_nghost-%COMP%]     .picture-right-middle {\n  flex-basis: 30%;\n  overflow: hidden;\n}\n[_nghost-%COMP%]     .picture-title {\n  line-height: 30px;\n  color: #fff;\n  font-size: 24px;\n  padding: 0 10px;\n}\n[_nghost-%COMP%]     .picture-quantity {\n  color: #00eb55;\n  font-size: 18px;\n  margin-left: 5px;\n}\n[_nghost-%COMP%]     .picture-item {\n  flex: 1;\n  display: flex;\n  flex-wrap: wrap;\n  align-content: flex-start;\n  padding: 10px 11px 11px 5px;\n  background: url('bg06.png') repeat-y 0 0;\n  overflow-y: auto;\n}\n[_nghost-%COMP%]     .leaf-picture-item {\n  height: 80%;\n}\n[_nghost-%COMP%]     .ant-pagination-options-quick-jumper {\n  color: #Fff;\n}\n[_nghost-%COMP%]     .picture {\n  width: 40px;\n  height: 40px;\n  margin: 5px;\n  cursor: pointer;\n}\n[_nghost-%COMP%]     .picture-m {\n  width: 50px;\n  height: 50px;\n  cursor: pointer;\n}\n[_nghost-%COMP%]     .picture-box {\n  position: relative;\n  width: 50px;\n  height: 50px;\n  margin: 5px;\n}\n[_nghost-%COMP%]     .picture-mark {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  width: 20px;\n  height: 20px;\n  cursor: pointer;\n}\n[_nghost-%COMP%]     .search-form {\n  padding: 10px 0;\n  align-items: center;\n}\n[_nghost-%COMP%]     .search-form-title {\n  flex: 1;\n  color: #fff;\n}\n[_nghost-%COMP%]     .search-form-quantity {\n  color: #4e6b91;\n  margin-left: 5px;\n}\n[_nghost-%COMP%]     .detail {\n  flex: 1;\n  overflow: hidden;\n}\n[_nghost-%COMP%]     .detail-image {\n  flex-basis: 70%;\n  align-items: center;\n  border-bottom: 1px dashed #1f60c2;\n  overflow: hidden;\n}\n[_nghost-%COMP%]     .detail-box {\n  flex: 1;\n  height: 100%;\n  margin: 0 10px;\n}\n[_nghost-%COMP%]     .pre, [_nghost-%COMP%]     .next {\n  width: 30px;\n  height: auto;\n}\n[_nghost-%COMP%]     .target-image {\n  flex: 1;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden;\n}\n[_nghost-%COMP%]     .target-quantity {\n  color: #fff;\n  text-align: center;\n  padding: 10px;\n}\n[_nghost-%COMP%]     .detail-info {\n  flex-basis: 30%;\n  overflow: hidden;\n}\n[_nghost-%COMP%]     .detail-info-box {\n  flex: 1;\n  height: 100%;\n  align-items: center;\n  justify-content: space-evenly;\n  color: #25b3e4;\n  overflow: hidden;\n}\n[_nghost-%COMP%]     .detail-info-type {\n  flex-basis: 30px;\n  align-items: center;\n  width: 100%;\n  padding: 0 20px;\n  background: url('bg08.png') no-repeat 0 0 / 100% 100%;\n}\n[_nghost-%COMP%]     .detail-info-param {\n  flex: 1;\n}\n[_nghost-%COMP%]     .is_mark {\n  color: #27f069;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGF0YS1tYW5hZ2UvRDovZmYvdGFyZ2V0LXJlY29nbml6ZS1tZ3ItaHRtbC1WMC4yL3NyYy9hcHAvcGFnZXMvZGF0YS1tYW5hZ2UvZGF0YS1tYW5hZ2VyLmxlc3MiLCJzcmMvYXBwL3BhZ2VzL2RhdGEtbWFuYWdlL2RhdGEtbWFuYWdlci5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQkFBQTtBQ0FKO0FETEE7RUFTSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSw0Q0FBQTtBQ0RKO0FEZEE7RUFtQkksWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNGSjtBRHBCQTtFQTBCSSxPQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDSEo7QUQzQkE7RUFrQ0ksT0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQ0pKO0FEaENBO0VBd0NJLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsNkJBQUE7RUFDQSx1RUFBQTtBQ0xKO0FEeENBO0VBaURJLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0RBQUE7RUFDQSxZQUFBO0FDTko7QUQvQ0E7RUF5REksWUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ1BKO0FEcERBO0VBK0RJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDUko7QUQxREE7RUFzRUksY0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FDVEo7QUQvREE7RUE0RUksT0FBQTtFQUNBLGdCQUFBO0FDVko7QURuRUE7RUFpRkksMkNBQUE7QUNYSjtBRHRFQTtFQXFGSSwyQ0FBQTtBQ1pKO0FEekVBO0VBeUZJLGVBQUE7RUFDQSxnQkFBQTtBQ2JKO0FEN0VBO0VBOEZJLGVBQUE7RUFDQSxnQkFBQTtBQ2RKO0FEakZBO0VBbUdJLGVBQUE7RUFDQSxnQkFBQTtBQ2ZKO0FEckZBO0VBd0dJLGVBQUE7RUFDQSxnQkFBQTtBQ2hCSjtBRHpGQTtFQTZHSSxlQUFBO0VBQ0EsZ0JBQUE7QUNqQko7QUQ3RkE7OztFQWtISSxPQUFBO0VBQ0EsZ0JBQUE7QUNoQko7QURuR0E7O0VBdUhJLGVBQUE7RUFDQSxnQkFBQTtBQ2hCSjtBRHhHQTtFQTRISSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQ2pCSjtBRDlHQTtFQW1JSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDbEJKO0FEbkhBO0VBeUlJLE9BQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsMkJBQUE7RUFDQSx3Q0FBQTtFQUNBLGdCQUFBO0FDbkJKO0FENUhBO0VBbUpJLFdBQUE7QUNwQko7QUQvSEE7RUFzSkksV0FBQTtBQ3BCSjtBRGxJQTtFQTBKSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDckJKO0FEeElBO0VBaUtJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ3RCSjtBRDdJQTtFQXVLSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ3ZCSjtBRG5KQTtFQStLSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDekJKO0FEM0pBO0VBd0xJLGVBQUE7RUFDQSxtQkFBQTtBQzFCSjtBRC9KQTtFQTZMSSxPQUFBO0VBQ0EsV0FBQTtBQzNCSjtBRG5LQTtFQWtNSSxjQUFBO0VBQ0EsZ0JBQUE7QUM1Qko7QUR2S0E7RUF1TUksT0FBQTtFQUNBLGdCQUFBO0FDN0JKO0FEM0tBO0VBNE1JLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGlDQUFBO0VBQ0EsZ0JBQUE7QUM5Qko7QURqTEE7RUFtTkksT0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FDL0JKO0FEdExBOztFQXlOSSxXQUFBO0VBQ0EsWUFBQTtBQy9CSjtBRDNMQTtFQThOSSxPQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDaENKO0FEak1BO0VBcU9JLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUNqQ0o7QUR0TUE7RUEyT0ksZUFBQTtFQUNBLGdCQUFBO0FDbENKO0FEMU1BO0VBZ1BJLE9BQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ25DSjtBRGxOQTtFQXlQSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxxREFBQTtBQ3BDSjtBRHpOQTtFQWlRSSxPQUFBO0FDckNKO0FENU5BO0VBcVFJLGNBQUE7QUN0Q0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9kYXRhLW1hbmFnZS9kYXRhLW1hbmFnZXIubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IDo6bmctZGVlcCB7XG4gIC50cmVlLWJveCB7XG4gICAgZmxleC1iYXNpczogMTYlO1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMxNDlmZmY7XG4gIH1cblxuICAudHJlZS10b3Age1xuICAgIGhlaWdodDogNDRweDtcbiAgICBsaW5lLWhlaWdodDogNDRweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmcxMC5wbmcnKSBuby1yZXBlYXQgMCAxMDAlO1xuICB9XG5cbiAgLnRyZWUtdG9wLWFkZCB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbiAgLnRyZWUge1xuICAgIGZsZXg6IDE7XG4gICAgY29sb3I6ICMwMjgyYWM7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgfVxuXG4gIC5tYWluIHtcbiAgICBmbGV4OiAxO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcGFkZGluZzogMTBweDtcbiAgfVxuXG4gIC5hbmFseXplIHtcbiAgICBmbGV4LWJhc2lzOiAxMTRweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9iZzA0LnBuZycpIHJlcGVhdC14IDAgMTAwJSwgdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2JnMDYucG5nJykgcmVwZWF0IDAgMDtcbiAgfVxuXG4gIC5hbmFseXplLWl0ZW0ge1xuICAgIGZsZXgtYmFzaXM6IDE0NHB4O1xuICAgIGhlaWdodDogMTIwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9iZzAzLnBuZycpIG5vLXJlcGVhdCAwIDAgflwiL1wiIDEwMCU7XG4gICAgd2lkdGg6IDIyMHB4O1xuICB9XG5cbiAgLmFuYWx5emUtaXRlbS10aXRsZSB7XG4gICAgaGVpZ2h0OiAzNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzNnB4O1xuICAgIGNvbG9yOiAjMjNhNmVjO1xuICB9XG5cbiAgLmFuYWx5emUtaXRlbS12YWx1ZSB7XG4gICAgaGVpZ2h0OiA1MnB4O1xuICAgIGxpbmUtaGVpZ2h0OiA1MnB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogIzAxZWZmZDtcbiAgfVxuXG4gIC5hbmFseXplLWl0ZW0ta2V5IHtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgbWFyZ2luOiAwIDVweDtcbiAgfVxuXG4gIC5waWN0dXJlcyB7XG4gICAgZmxleDogMTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG5cbiAgLnBpY3R1cmUtYmcteCB7XG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2JnMDQucG5nJykgcmVwZWF0LXggMCAxMDAlO1xuICB9XG5cbiAgLnBpY3R1cmUtYmcteSB7XG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2JnMDUucG5nJykgcmVwZWF0LXkgMTAwJSAwO1xuICB9XG5cbiAgLnBpY3R1cmUtbGVmdCB7XG4gICAgZmxleC1iYXNpczogNDElO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cblxuICAucGljdHVyZS1sZWZ0LXRvcCB7XG4gICAgZmxleC1iYXNpczogNjAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cblxuICAucGljdHVyZS1sZWZ0LWJvdHRvbSB7XG4gICAgZmxleC1iYXNpczogNDAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cblxuICAucGljdHVyZS1yaWdodCB7XG4gICAgZmxleC1iYXNpczogNTklO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cblxuICAucGljdHVyZS1yaWdodC10b3Age1xuICAgIGZsZXgtYmFzaXM6IDQwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG5cbiAgLnBpY3R1cmUtcmlnaHQtdG9wLWl0ZW0sIC5waWN0dXJlLXJpZ2h0LW1pZGRsZS1pdGVtLCAucGljdHVyZS1yaWdodC1ib3R0b20taXRlbSB7XG4gICAgZmxleDogMTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG5cbiAgLnBpY3R1cmUtcmlnaHQtYm90dG9tLCAucGljdHVyZS1yaWdodC1taWRkbGUge1xuICAgIGZsZXgtYmFzaXM6IDMwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG5cbiAgLnBpY3R1cmUtdGl0bGUge1xuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBwYWRkaW5nOiAwIDEwcHg7XG4gIH1cblxuICAucGljdHVyZS1xdWFudGl0eSB7XG4gICAgY29sb3I6ICMwMGViNTU7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIH1cblxuICAucGljdHVyZS1pdGVtIHtcbiAgICBmbGV4OiAxO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgcGFkZGluZzogMTBweCAxMXB4IDExcHggNXB4O1xuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9iZzA2LnBuZycpIHJlcGVhdC15IDAgMDtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgXG4gIH1cbiAgLmxlYWYtcGljdHVyZS1pdGVte1xuICAgIGhlaWdodDogODAlO1xuICB9XG4gIC5hbnQtcGFnaW5hdGlvbi1vcHRpb25zLXF1aWNrLWp1bXBlcntcbiAgICBjb2xvcjogI0ZmZjtcbiAgfVxuXG4gIC5waWN0dXJlIHtcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgbWFyZ2luOiA1cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbiAgLnBpY3R1cmUtbSB7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gIC5waWN0dXJlLWJveCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBtYXJnaW46IDVweDtcbiAgXG4gIH1cblxuICAucGljdHVyZS1tYXJrIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuICAuc2VhcmNoLWZvcm0ge1xuICAgIHBhZGRpbmc6IDEwcHggMDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG5cbiAgLnNlYXJjaC1mb3JtLXRpdGxlIHtcbiAgICBmbGV4OiAxO1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG5cbiAgLnNlYXJjaC1mb3JtLXF1YW50aXR5IHtcbiAgICBjb2xvcjogIzRlNmI5MTtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xuICB9XG5cbiAgLmRldGFpbCB7XG4gICAgZmxleDogMTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG5cbiAgLmRldGFpbC1pbWFnZSB7XG4gICAgZmxleC1iYXNpczogNzAlO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjMWY2MGMyO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cblxuICAuZGV0YWlsLWJveCB7XG4gICAgZmxleDogMTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWFyZ2luOiAwIDEwcHg7XG4gIH1cblxuICAucHJlLCAubmV4dCB7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG5cbiAgLnRhcmdldC1pbWFnZSB7XG4gICAgZmxleDogMTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cblxuICAudGFyZ2V0LXF1YW50aXR5IHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTBweDtcbiAgfVxuXG4gIC5kZXRhaWwtaW5mbyB7XG4gICAgZmxleC1iYXNpczogMzAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cblxuICAuZGV0YWlsLWluZm8tYm94IHtcbiAgICBmbGV4OiAxO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgIGNvbG9yOiAjMjViM2U0O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cblxuICAuZGV0YWlsLWluZm8tdHlwZSB7XG4gICAgZmxleC1iYXNpczogMzBweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDAgMjBweDtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmcwOC5wbmcnKSBuby1yZXBlYXQgMCAwIH5cIi9cIiAxMDAlIDEwMCU7XG4gIH1cblxuICAuZGV0YWlsLWluZm8tcGFyYW0ge1xuICAgIGZsZXg6IDE7XG4gIH1cblxuICAuaXNfbWFyayB7XG4gICAgY29sb3I6ICMyN2YwNjk7XG4gIH1cblxufVxuIiwiOmhvc3QgOjpuZy1kZWVwIC50cmVlLWJveCB7XG4gIGZsZXgtYmFzaXM6IDE2JTtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMTQ5ZmZmO1xufVxuOmhvc3QgOjpuZy1kZWVwIC50cmVlLXRvcCB7XG4gIGhlaWdodDogNDRweDtcbiAgbGluZS1oZWlnaHQ6IDQ0cHg7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmcxMC5wbmcnKSBuby1yZXBlYXQgMCAxMDAlO1xufVxuOmhvc3QgOjpuZy1kZWVwIC50cmVlLXRvcC1hZGQge1xuICBmbG9hdDogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG46aG9zdCA6Om5nLWRlZXAgLnRyZWUge1xuICBmbGV4OiAxO1xuICBjb2xvcjogIzAyODJhYztcbiAgcGFkZGluZzogMTBweDtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5tYWluIHtcbiAgZmxleDogMTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZzogMTBweDtcbn1cbjpob3N0IDo6bmctZGVlcCAuYW5hbHl6ZSB7XG4gIGZsZXgtYmFzaXM6IDExNHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDE2cHg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmcwNC5wbmcnKSByZXBlYXQteCAwIDEwMCUsIHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9iZzA2LnBuZycpIHJlcGVhdCAwIDA7XG59XG46aG9zdCA6Om5nLWRlZXAgLmFuYWx5emUtaXRlbSB7XG4gIGZsZXgtYmFzaXM6IDE0NHB4O1xuICBoZWlnaHQ6IDEyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9iZzAzLnBuZycpIG5vLXJlcGVhdCAwIDAgLyAxMDAlO1xuICB3aWR0aDogMjIwcHg7XG59XG46aG9zdCA6Om5nLWRlZXAgLmFuYWx5emUtaXRlbS10aXRsZSB7XG4gIGhlaWdodDogMzZweDtcbiAgbGluZS1oZWlnaHQ6IDM2cHg7XG4gIGNvbG9yOiAjMjNhNmVjO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5hbmFseXplLWl0ZW0tdmFsdWUge1xuICBoZWlnaHQ6IDUycHg7XG4gIGxpbmUtaGVpZ2h0OiA1MnB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMDFlZmZkO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5hbmFseXplLWl0ZW0ta2V5IHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbWFyZ2luOiAwIDVweDtcbn1cbjpob3N0IDo6bmctZGVlcCAucGljdHVyZXMge1xuICBmbGV4OiAxO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5waWN0dXJlLWJnLXgge1xuICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmcwNC5wbmcnKSByZXBlYXQteCAwIDEwMCU7XG59XG46aG9zdCA6Om5nLWRlZXAgLnBpY3R1cmUtYmcteSB7XG4gIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9iZzA1LnBuZycpIHJlcGVhdC15IDEwMCUgMDtcbn1cbjpob3N0IDo6bmctZGVlcCAucGljdHVyZS1sZWZ0IHtcbiAgZmxleC1iYXNpczogNDElO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5waWN0dXJlLWxlZnQtdG9wIHtcbiAgZmxleC1iYXNpczogNjAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5waWN0dXJlLWxlZnQtYm90dG9tIHtcbiAgZmxleC1iYXNpczogNDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5waWN0dXJlLXJpZ2h0IHtcbiAgZmxleC1iYXNpczogNTklO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5waWN0dXJlLXJpZ2h0LXRvcCB7XG4gIGZsZXgtYmFzaXM6IDQwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbjpob3N0IDo6bmctZGVlcCAucGljdHVyZS1yaWdodC10b3AtaXRlbSxcbjpob3N0IDo6bmctZGVlcCAucGljdHVyZS1yaWdodC1taWRkbGUtaXRlbSxcbjpob3N0IDo6bmctZGVlcCAucGljdHVyZS1yaWdodC1ib3R0b20taXRlbSB7XG4gIGZsZXg6IDE7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG46aG9zdCA6Om5nLWRlZXAgLnBpY3R1cmUtcmlnaHQtYm90dG9tLFxuOmhvc3QgOjpuZy1kZWVwIC5waWN0dXJlLXJpZ2h0LW1pZGRsZSB7XG4gIGZsZXgtYmFzaXM6IDMwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbjpob3N0IDo6bmctZGVlcCAucGljdHVyZS10aXRsZSB7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBwYWRkaW5nOiAwIDEwcHg7XG59XG46aG9zdCA6Om5nLWRlZXAgLnBpY3R1cmUtcXVhbnRpdHkge1xuICBjb2xvcjogIzAwZWI1NTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5waWN0dXJlLWl0ZW0ge1xuICBmbGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIHBhZGRpbmc6IDEwcHggMTFweCAxMXB4IDVweDtcbiAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2JnMDYucG5nJykgcmVwZWF0LXkgMCAwO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5sZWFmLXBpY3R1cmUtaXRlbSB7XG4gIGhlaWdodDogODAlO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5hbnQtcGFnaW5hdGlvbi1vcHRpb25zLXF1aWNrLWp1bXBlciB7XG4gIGNvbG9yOiAjRmZmO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5waWN0dXJlIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgbWFyZ2luOiA1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbjpob3N0IDo6bmctZGVlcCAucGljdHVyZS1tIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5waWN0dXJlLWJveCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgbWFyZ2luOiA1cHg7XG59XG46aG9zdCA6Om5nLWRlZXAgLnBpY3R1cmUtbWFyayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5zZWFyY2gtZm9ybSB7XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbjpob3N0IDo6bmctZGVlcCAuc2VhcmNoLWZvcm0tdGl0bGUge1xuICBmbGV4OiAxO1xuICBjb2xvcjogI2ZmZjtcbn1cbjpob3N0IDo6bmctZGVlcCAuc2VhcmNoLWZvcm0tcXVhbnRpdHkge1xuICBjb2xvcjogIzRlNmI5MTtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cbjpob3N0IDo6bmctZGVlcCAuZGV0YWlsIHtcbiAgZmxleDogMTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbjpob3N0IDo6bmctZGVlcCAuZGV0YWlsLWltYWdlIHtcbiAgZmxleC1iYXNpczogNzAlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICMxZjYwYzI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG46aG9zdCA6Om5nLWRlZXAgLmRldGFpbC1ib3gge1xuICBmbGV4OiAxO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjogMCAxMHB4O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5wcmUsXG46aG9zdCA6Om5nLWRlZXAgLm5leHQge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuOmhvc3QgOjpuZy1kZWVwIC50YXJnZXQtaW1hZ2Uge1xuICBmbGV4OiAxO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbjpob3N0IDo6bmctZGVlcCAudGFyZ2V0LXF1YW50aXR5IHtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweDtcbn1cbjpob3N0IDo6bmctZGVlcCAuZGV0YWlsLWluZm8ge1xuICBmbGV4LWJhc2lzOiAzMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG46aG9zdCA6Om5nLWRlZXAgLmRldGFpbC1pbmZvLWJveCB7XG4gIGZsZXg6IDE7XG4gIGhlaWdodDogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIGNvbG9yOiAjMjViM2U0O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5kZXRhaWwtaW5mby10eXBlIHtcbiAgZmxleC1iYXNpczogMzBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDAgMjBweDtcbiAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2JnMDgucG5nJykgbm8tcmVwZWF0IDAgMCAvIDEwMCUgMTAwJTtcbn1cbjpob3N0IDo6bmctZGVlcCAuZGV0YWlsLWluZm8tcGFyYW0ge1xuICBmbGV4OiAxO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5pc19tYXJrIHtcbiAgY29sb3I6ICMyN2YwNjk7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataManageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './data-manage.component.html',
                styleUrls: ['./data-manage.component.less', './data-manager.less']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"] }, { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzModalService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"] }, { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_11__["Store"] }, { type: _data_manage_service__WEBPACK_IMPORTED_MODULE_12__["DataManageService"] }]; }, { nzTreeComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['nzTreeComponent', { static: false }]
        }], nzTreeComponentSar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['nzTreeComponentSar', { static: false }]
        }], nzTreeComponentRemote: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['nzTreeComponentRemote', { static: false }]
        }], nzTreeComponentInfrared: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['nzTreeComponentInfrared', { static: false }]
        }] }); })();


/***/ }),

/***/ "./src/app/pages/data-manage/data-manage.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/data-manage/data-manage.module.ts ***!
  \*********************************************************/
/*! exports provided: DataManageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataManageModule", function() { return DataManageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _data_manage_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data-manage.component */ "./src/app/pages/data-manage/data-manage.component.ts");
/* harmony import */ var _data_manage_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data-manage-routing.module */ "./src/app/pages/data-manage/data-manage-routing.module.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd.js");
/* harmony import */ var _data_manage_add_sample_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data-manage-add-sample.component */ "./src/app/pages/data-manage/data-manage-add-sample.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _data_manage_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./data-manage-detail.component */ "./src/app/pages/data-manage/data-manage-detail.component.ts");
/* harmony import */ var _data_manage_upload_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./data-manage-upload.component */ "./src/app/pages/data-manage/data-manage-upload.component.ts");
/* harmony import */ var _not_leaf_not_leaf_data_manage_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./not-leaf/not-leaf.data-manage.component */ "./src/app/pages/data-manage/not-leaf/not-leaf.data-manage.component.ts");
/* harmony import */ var _leaf_leaf_data_manage_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./leaf/leaf.data-manage.component */ "./src/app/pages/data-manage/leaf/leaf.data-manage.component.ts");
/* harmony import */ var _detail_detail_data_manage_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./detail/detail.data-manage.component */ "./src/app/pages/data-manage/detail/detail.data-manage.component.ts");
/* harmony import */ var _edit_edit_data_manage_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./edit/edit.data-manage.component */ "./src/app/pages/data-manage/edit/edit.data-manage.component.ts");
/* harmony import */ var _icons_provider_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../icons-provider.module */ "./src/app/icons-provider.module.ts");
/* harmony import */ var _core_app_common_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../core/app-common.module */ "./src/app/core/app-common.module.ts");
/* harmony import */ var _rename_sample_type_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./rename-sample-type.component */ "./src/app/pages/data-manage/rename-sample-type.component.ts");
/* harmony import */ var _data_manage_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./data-manage.service */ "./src/app/pages/data-manage/data-manage.service.ts");


















const APP_COMPONENTS = [_data_manage_component__WEBPACK_IMPORTED_MODULE_1__["DataManageComponent"], _data_manage_add_sample_component__WEBPACK_IMPORTED_MODULE_4__["DataManageAddSampleComponent"], _data_manage_detail_component__WEBPACK_IMPORTED_MODULE_7__["DataManageDetailComponent"],
    _data_manage_upload_component__WEBPACK_IMPORTED_MODULE_8__["DataManageUploadComponent"], _not_leaf_not_leaf_data_manage_component__WEBPACK_IMPORTED_MODULE_9__["NotLeafDataManageComponent"], _leaf_leaf_data_manage_component__WEBPACK_IMPORTED_MODULE_10__["LeafDataManageComponent"], _edit_edit_data_manage_component__WEBPACK_IMPORTED_MODULE_12__["EditDataManageComponent"],
    _detail_detail_data_manage_component__WEBPACK_IMPORTED_MODULE_11__["DetailDataManageComponent"], _rename_sample_type_component__WEBPACK_IMPORTED_MODULE_15__["RenameSampleTypeComponent"]];
const NG_MODULES = [_angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _icons_provider_module__WEBPACK_IMPORTED_MODULE_13__["IconsProviderModule"]];
const NZ_MODULES = [ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzFormModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzSelectModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzTreeModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzInputModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzModalModule"],
    ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzCheckboxModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzButtonModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzUploadModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzDividerModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzRadioModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzProgressModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzPaginationModule"]];
class DataManageModule {
}
DataManageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DataManageModule });
DataManageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DataManageModule_Factory(t) { return new (t || DataManageModule)(); }, providers: [_data_manage_service__WEBPACK_IMPORTED_MODULE_16__["DataManageService"]], imports: [[_data_manage_routing_module__WEBPACK_IMPORTED_MODULE_2__["DataManageRoutingModule"], ...NG_MODULES, ...NZ_MODULES, _core_app_common_module__WEBPACK_IMPORTED_MODULE_14__["AppCommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DataManageModule, { declarations: [_data_manage_component__WEBPACK_IMPORTED_MODULE_1__["DataManageComponent"], _data_manage_add_sample_component__WEBPACK_IMPORTED_MODULE_4__["DataManageAddSampleComponent"], _data_manage_detail_component__WEBPACK_IMPORTED_MODULE_7__["DataManageDetailComponent"],
        _data_manage_upload_component__WEBPACK_IMPORTED_MODULE_8__["DataManageUploadComponent"], _not_leaf_not_leaf_data_manage_component__WEBPACK_IMPORTED_MODULE_9__["NotLeafDataManageComponent"], _leaf_leaf_data_manage_component__WEBPACK_IMPORTED_MODULE_10__["LeafDataManageComponent"], _edit_edit_data_manage_component__WEBPACK_IMPORTED_MODULE_12__["EditDataManageComponent"],
        _detail_detail_data_manage_component__WEBPACK_IMPORTED_MODULE_11__["DetailDataManageComponent"], _rename_sample_type_component__WEBPACK_IMPORTED_MODULE_15__["RenameSampleTypeComponent"]], imports: [_data_manage_routing_module__WEBPACK_IMPORTED_MODULE_2__["DataManageRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _icons_provider_module__WEBPACK_IMPORTED_MODULE_13__["IconsProviderModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzFormModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzSelectModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzTreeModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzInputModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzModalModule"],
        ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzCheckboxModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzButtonModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzUploadModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzDividerModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzRadioModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzProgressModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzPaginationModule"], _core_app_common_module__WEBPACK_IMPORTED_MODULE_14__["AppCommonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataManageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_data_manage_routing_module__WEBPACK_IMPORTED_MODULE_2__["DataManageRoutingModule"], ...NG_MODULES, ...NZ_MODULES, _core_app_common_module__WEBPACK_IMPORTED_MODULE_14__["AppCommonModule"]],
                declarations: [...APP_COMPONENTS],
                providers: [_data_manage_service__WEBPACK_IMPORTED_MODULE_16__["DataManageService"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/data-manage/data-manage.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/data-manage/data-manage.service.ts ***!
  \**********************************************************/
/*! exports provided: DataManageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataManageService", function() { return DataManageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class DataManageService {
    constructor() { }
    delect(data1, data2) {
        this.num = data1;
        this.name = data2;
        $.each($(`nz-tree-node-title span`), function (i, n) {
            if (n.innerText.indexOf(data2) != -1) {
                $(`nz-tree-node-title span`)[i].innerText = `${data2}    ${data1}`;
            }
        });
    }
}
DataManageService.ɵfac = function DataManageService_Factory(t) { return new (t || DataManageService)(); };
DataManageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DataManageService, factory: DataManageService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataManageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/data-manage/detail/detail.data-manage.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/data-manage/detail/detail.data-manage.component.ts ***!
  \**************************************************************************/
/*! exports provided: DetailDataManageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailDataManageComponent", function() { return DetailDataManageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _core_http_entity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/http-entity */ "./src/app/core/http-entity.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd.js");
/* harmony import */ var _data_manage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../data-manage.service */ "./src/app/pages/data-manage/data-manage.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _core_app_common_pipes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../core/app-common.pipes */ "./src/app/core/app-common.pipes.ts");












const _c0 = ["lineEchart"];
function DetailDataManageComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DetailDataManageComponent_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailDataManageComponent_button_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.setFaceModel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u8BBE\u7F6E\u4E3A\u4EBA\u8138\u6A21\u677F");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DetailDataManageComponent_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailDataManageComponent_button_10_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.removeFaceModel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u5220\u9664\u4EBA\u8138\u6A21\u677F");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class DetailDataManageComponent {
    constructor(route, http, nzMessage, nzModal, router, dataManageService) {
        this.route = route;
        this.http = http;
        this.nzMessage = nzMessage;
        this.nzModal = nzModal;
        this.router = router;
        this.dataManageService = dataManageService;
        this.isFaceModel = false;
        this.isExist = false;
    }
    ngOnInit() {
        // 从路由中获取当前图片这一层级的
        this.route.paramMap.subscribe((params) => {
            if (params.has('imageId')) {
                this.imageId = +params.get('imageId');
                console.log('执行-->');
            }
        });
        this.updateBrowseNumber();
        this.loadImages();
        this.loadImageCount();
    }
    ngAfterViewInit() {
    }
    saveRect() {
        const reqBody = {};
        var that = this;
        let featuresArr = [];
        $.each(this.aiLabel.layers[1].features, function (i, rect) {
            featuresArr.push(rect);
        });
        $.each(featuresArr, function (i, rect) {
            rect.props.text = that.aiLabel.layers[2].texts[i].textInfo.text;
            rect.id = that.sampleOssFile.sampleTypeId;
            rect.props.name = that.sampleOssFile.sampleTypeId;
            delete rect.layer;
            rect.shape.x = rect.shape.x / that.mutliple;
            rect.shape.y = rect.shape.y / that.mutliple;
            rect.shape.width = rect.shape.width / that.mutliple;
            rect.shape.height = rect.shape.height / that.mutliple;
            // let xmin = parseInt(rect.shape.x) 
            // let ymin = parseInt(rect.shape.y) ;
            // let xmax = parseInt(rect.shape.x) + parseInt(rect.shape.width);
            // let ymax = parseInt(rect.shape.y) + parseInt(rect.shape.height);
            //   reqBody[rect.id] = {
            //     "xmin": xmin,
            //     "ymin": ymin,
            //     "xmax": xmax,
            //     "ymax": ymax
            //   }
        });
        let saveData = JSON.stringify(featuresArr);
        let sampleOssTypeId = featuresArr[0].id ? featuresArr[0].id : featuresArr[0].props.textId;
        this.http.patch(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL}/v1/sample-oss-file/patch_mark_status`, saveData, {
            params: {
                fileId: this.imageId + '',
                sampleOssTypeId: sampleOssTypeId + '',
                labelMessageObject: saveData
            }
        }).subscribe((result) => {
            if (_core_http_entity__WEBPACK_IMPORTED_MODULE_2__["HttpResult"].succeed(result.code)) {
                this.nzMessage.success("保存成功");
                this.loadImages();
            }
        });
    }
    creatAILabel(Imgdata) {
        var that = this;
        let coordinateData = JSON.parse(Imgdata.labelMessage);
        let ossKey = Imgdata.ossKey;
        let imgUrl = localStorage.getItem('sampleResourcePath') + '/' + ossKey;
        let text = Imgdata.samplePath.split("/")[Imgdata.samplePath.split("/").length - 2];
        let img = new Image();
        img.src = imgUrl;
        if (img.complete) {
            console.log(img);
            var imgWidth = img.width * 1;
            var imgHeight = img.height * 1;
            let zoomWidth = $("#detailLabel").css("width").replace(/[^\d.]/ig, "");
            let zoomHeight = $("#detailLabel").css("height").replace(/[^\d.]/ig, "");
            let labelZoom;
            if (imgWidth >= imgHeight) {
                this.mutliple = zoomWidth / imgWidth;
                imgHeight = imgHeight * this.mutliple;
                imgWidth = zoomWidth;
                labelZoom = imgWidth * 3;
            }
            else {
                this.mutliple = zoomHeight / imgHeight;
                imgWidth = imgWidth * this.mutliple;
                labelZoom = imgHeight * 3;
                imgHeight = zoomHeight;
            }
            // let coordinateData1 = coordinateData.data
            $("#detailLabel").empty();
            this.aiLabel = new AILabel.Map(`detailLabel`, {
                center: { x: imgWidth / 2, y: imgHeight / 2 },
                zoom: labelZoom,
                mode: 'RECT',
                refreshDelayWhenZooming: false,
                zoomWhenDrawing: true,
                panWhenDrawing: false,
                featureCaptureWhenMove: true,
                zoomWheelRatio: 5,
                withHotKeys: true,
                zoomMax: imgWidth * 10,
                zoomMin: imgWidth / 10
            });
            var imageLayer = new AILabel.Layer.Image('img', // id
            {
                src: imgUrl,
                width: imgWidth,
                height: imgHeight,
                crossOrigin: true,
                position: {
                    x: 0,
                    y: 0
                },
            }, { name: '第一个图片图层' }, { zIndex: 1 });
            that.aiLabel.addLayer(imageLayer);
            this.gfeatureLayer = new AILabel.Layer.Feature(`feature`, { name: '第一个矢量图层' }, { zIndex: 19 });
            this.aiLabel.addLayer(this.gfeatureLayer);
            var gFirstTextLayer = new AILabel.Layer.Text('first-layer-text', // id
            { name: '第一个文本图层' }, // props
            { zIndex: 12, opacity: 1 } // style
            );
            this.aiLabel.addLayer(gFirstTextLayer);
            for (let i = 0; i < coordinateData.length; i++) {
                var testData = coordinateData[i];
                var id = +new Date();
                if (null == testData.id)
                    testData.id = id;
                if (null == testData.props.text)
                    testData.props.text = text;
                if (null == testData.props.textId)
                    testData.props.textId = id;
                testData.shape.height = testData.shape.height * 1 * this.mutliple;
                testData.shape.width = testData.shape.width * 1 * this.mutliple;
                testData.shape.x = testData.shape.x * 1 * this.mutliple;
                testData.shape.y = testData.shape.y * 1 * this.mutliple;
                if (null == testData.style)
                    testData.style = { fill: true, fillStyle: "#0f0", globalAlpha: 0, lineWidth: 1, opacity: 1, stroke: true, strokeStyle: "red" };
                var feature = new AILabel.Feature.Rect(testData.id, testData.shape, testData.props, testData.style);
                that.gfeatureLayer.addFeature(feature);
                var { x: ltx, y: lty } = feature.shape;
                var gFirstText = new AILabel.Text(testData.props.textId, // id
                { text: text, position: { x: ltx, y: lty }, offset: { x: 0, y: 0 } }, // shape, 左上角
                { name: '第一个文本对象' }, // props
                { fillStyle: '#15a0ff', strokeStyle: '#f0f8ff00', background: true, globalAlpha: 1, fontColor: '#fff' } // style
                );
                that.aiLabel.layers[2].addText(gFirstText);
            }
            this.aiLabel.events.on('featureSelected', (feature) => {
                this.aiLabel.setActiveFeature(feature);
            });
            this.aiLabel.events.on('featureUnselected', () => {
                this.aiLabel.setActiveFeature(null);
            });
            this.aiLabel.events.on('featureUpdated', (feature, shape) => {
                feature.updateShape(shape);
                const markerId = feature.props.deleteMarkerId;
                const textId = feature.props.textId;
                // 更新text位置
                const targetText = gFirstTextLayer.getTextById(textId);
                targetText.updatePosition(feature.getPoints()[0]);
            });
        }
        else {
            setTimeout(() => {
                this.creatAILabel(Imgdata);
            }, 200);
        }
    }
    loadImages() {
        this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL}/v1/sample-oss-file/${this.imageId}`)
            .subscribe((result) => {
            if (_core_http_entity__WEBPACK_IMPORTED_MODULE_2__["HttpResult"].succeed(result.code)) {
                this.sampleOssFiles = result.data;
                this.countImg = result.data.length;
                let str = $(".search-form-title")[0].innerText;
                let str1 = str.slice(0, str.indexOf(str.match('共[0-9]+个结果|共个结果')[0]));
                if (str1.length > 0) {
                    this.dataManageService.delect(this.countImg, str1);
                }
                for (let i = 0; i < result.data.length; i++) {
                    if (result.data[i].id === this.imageId) {
                        // debugger;
                        // console.log(images.browseNumber + 'images');
                        this.sampleOssFile = result.data[i];
                        if (i === 0) {
                            this.presentIdx = 1;
                        }
                        else {
                            this.presentIdx = i + 1;
                        }
                        this.loadChars();
                        this.creatAILabel(result.data[i]);
                        //  this.queryFaceDetectModel()
                        return;
                    }
                }
                result.data.forEach((images) => {
                    if (images.id === this.imageId) {
                        this.sampleOssFile = images;
                        this.loadChars();
                        return;
                    }
                });
            }
        });
    }
    queryFaceDetectModel() {
        axios__WEBPACK_IMPORTED_MODULE_4___default.a.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL}/v1/face_detect/queryFaceDetectModel?id=${this.imageId}`, { id: this.imageId }, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('Bearer'),
                'TR-Role': 'TR-User'
            }
        })
            .then((result) => {
            let data = JSON.parse(result.data.data);
            if (data.isExist) {
                this.isExist = true;
            }
            else {
                this.isExist = false;
            }
            if (data.faceStatus) {
                this.isFaceModel = true;
            }
            else {
                this.isFaceModel = false;
            }
        });
    }
    setFaceModel() {
        axios__WEBPACK_IMPORTED_MODULE_4___default.a.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL}/v1/face_detect/saveFaceDetectModel?id=${this.imageId}`, { id: this.imageId }, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('Bearer'),
                'TR-Role': 'TR-User'
            }
        })
            .then((result) => {
            if (result.data.code == 1) {
                this.nzMessage.success(result.data.message);
                this.isFaceModel = true;
            }
            else {
                this.nzMessage.error(result.data.message);
            }
        });
    }
    removeFaceModel() {
        axios__WEBPACK_IMPORTED_MODULE_4___default.a.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL}/v1/face_detect/deleteFaceDetectModel?id=${this.imageId}`, { id: this.imageId }, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('Bearer'),
                'TR-Role': 'TR-User'
            }
        })
            .then((result) => {
            if (result.data.code == 1) {
                this.isFaceModel = false;
                this.nzMessage.success(result.data.message);
            }
            else {
                this.nzMessage.error(result.data.message);
            }
        });
    }
    nextImage() {
        for (let i = 0; i < this.sampleOssFiles.length; i++) {
            if (this.sampleOssFiles[i].id === this.imageId) {
                if (i < this.sampleOssFiles.length - 1) {
                    this.sampleOssFile = this.sampleOssFiles[i + 1];
                    this.imageId = this.sampleOssFiles[i + 1].id;
                    // this.presentIdx = i;
                    if (this.presentIdx > 0) {
                        this.presentIdx = this.presentIdx + 1;
                    }
                    this.updateBrowseNumber();
                    this.loadOne(this.imageId).subscribe((result) => {
                        if (_core_http_entity__WEBPACK_IMPORTED_MODULE_2__["HttpResult"].succeed(result.code)) {
                            this.creatAILabel(result.data);
                            this.sampleOssFile = result.data;
                            this.loadChars();
                        }
                    });
                    return;
                }
                else {
                    this.nzMessage.error('已经是最后一张啦!');
                }
            }
        }
    }
    lastImage() {
        for (let i = 0; i < this.sampleOssFiles.length; i++) {
            if (this.sampleOssFiles[i].id === this.imageId) {
                if (i === 0) {
                    this.nzMessage.error('已经是第一张啦!');
                }
                else {
                    this.imageId = this.sampleOssFiles[i - 1].id;
                    this.sampleOssFile = this.sampleOssFiles[i - 1];
                    this.updateBrowseNumber();
                    this.loadOne(this.imageId).subscribe((result) => {
                        if (_core_http_entity__WEBPACK_IMPORTED_MODULE_2__["HttpResult"].succeed(result.code)) {
                            this.sampleOssFile = result.data;
                            this.creatAILabel(result.data);
                        }
                    });
                    if (this.presentIdx > 0) {
                        this.presentIdx = this.presentIdx - 1;
                    }
                    return;
                }
            }
        }
    }
    // onChartInit(ec): void {
    //   this.echartsInstance = ec;
    // }
    loadChars() {
        const lineChartOption = {
            xAxis: {
                // data: [122, 130, 170],
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
                data: ['训练次数', '下载次数', '浏览次数'],
                type: 'category',
                axisLabel: {
                    color: '#27bef0',
                    // fontWeight: 600,
                    fontSize: 16
                },
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
            grid: {
                x: 100,
                y: 0,
                y2: 0,
                x2: 0
            },
            series: [
                {
                    data: [this.sampleOssFile.trainNumber === null ? 0 : this.sampleOssFile.trainNumber,
                        this.sampleOssFile.downloadNumber === null ? 0 : this.sampleOssFile.downloadNumber, this.sampleOssFile.browseNumber + 1],
                    type: 'bar',
                    barCategoryGap: '50%',
                    itemStyle: {
                        normal: {
                            label: {
                                show: true,
                                position: 'right',
                                fontSize: 14,
                                color: '#FFFFFF'
                            },
                            color: (params) => {
                                const colors = [{
                                        start: '#7f8ae8',
                                        end: '#2e31ea'
                                    }, {
                                        start: '#01b698',
                                        end: '#1BDDEB'
                                    }, {
                                        start: '#2924B3',
                                        end: '#504AD7'
                                    }];
                                return new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                                    { offset: 0, color: colors[params.dataIndex].start },
                                    { offset: 1, color: colors[params.dataIndex].end }
                                ]);
                            }
                        }
                    }
                }
            ]
        };
        if (!this.lineEchart) {
            this.lineEchart = echarts.init(this.lineEchartElm.nativeElement);
        }
        this.lineEchart.setOption(lineChartOption);
    }
    // lock(): void {
    //   const params = new HttpParams().append('ids', this.imageId + '').append('sampleTypeId', this.sampleOssFile.sampleTypeId + '').append('enumStatus', 'LOCK');
    //   this.http.patch(`${environment.API_URL}/v1/sample-oss-file/patch_status`, null, {params})
    //     .subscribe((result: HttpResult<SampleOssFile[]>) => {
    //       if (HttpResult.succeed(result.code)) {
    //         this.nzMessage.success('锁定成功');
    //         this.loadSecondaryImage(+this.imageId);
    //       } else {
    //         this.nzMessage.error(result.message);
    //       }
    //     });
    // }
    delete() {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().append('ids', this.imageId + '').append('sampleTypeId', this.sampleOssFile.sampleTypeId + '').append('enumStatus', 'DELETE');
        this.http.patch(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL}/v1/sample-oss-file/patch_status`, null, { params })
            .subscribe((result) => {
            if (_core_http_entity__WEBPACK_IMPORTED_MODULE_2__["HttpResult"].succeed(result.code)) {
                this.nzMessage.success('删除成功');
                this.loadImages();
                this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL}/v1/sample-oss-file/${this.imageId}`)
                    .subscribe((result) => {
                    if (_core_http_entity__WEBPACK_IMPORTED_MODULE_2__["HttpResult"].succeed(result.code)) {
                        console.log(this.sampleOssType, result.data.length);
                    }
                });
                for (let i = 0; i < this.sampleOssFiles.length; i++) {
                    if (this.sampleOssFiles[i].id === this.imageId) {
                        if (i === 0 && this.sampleOssFiles.length === 1) {
                            // this.route.
                            this.router.navigate(['../leaf', { 'sampleUpId': this.sampleOssFiles[0].sampleTypeId }], { relativeTo: this.route });
                        }
                        else if (i === this.sampleOssFiles.length - 1) {
                            // this.presentIdx = i + 1;
                            this.imageId = this.sampleOssFiles[i - 1].id;
                            this.updateBrowseNumber();
                            this.loadOne(this.imageId).subscribe((rs) => {
                                if (_core_http_entity__WEBPACK_IMPORTED_MODULE_2__["HttpResult"].succeed(rs.code)) {
                                    this.sampleOssFile = rs.data;
                                    this.loadChars();
                                    this.presentIdx = this.presentIdx - 1;
                                    this.sampleOssFiles.splice(i, 1);
                                }
                            });
                            return;
                        }
                        else if (i < this.sampleOssFiles.length - 1) {
                            // this.imageId = this.sampleOssFiles[i + 1].id;
                            this.imageId = this.sampleOssFiles[i + 1].id;
                            this.updateBrowseNumber();
                            this.loadOne(this.imageId).subscribe((rs) => {
                                if (_core_http_entity__WEBPACK_IMPORTED_MODULE_2__["HttpResult"].succeed(rs.code)) {
                                    this.sampleOssFile = rs.data;
                                    this.loadChars();
                                    // this.presentIdx = this.presentIdx + 1;
                                    this.sampleOssFiles.splice(i, 1);
                                }
                            });
                            return;
                        }
                    }
                }
            }
            else {
                this.nzMessage.error(result.message);
            }
        });
    }
    loadSecondaryImage(sampleUpId) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().append('typeId', sampleUpId + '');
        this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL}/v1/sample-oss-file/getOssFilesByTypeId`, { params })
            .subscribe((result) => {
            this.sampleOssFiles = result.data.records;
            // this.secondaryTotal = result.data.total;
            // const box = this.secondaryData.map((s) => {
            //   return [{label: '', value: s.id, checked: false, typeId: s.sampleTypeId}];
            // });
            // this.checkOptionsOne = box;
        });
    }
    updateBrowseNumber() {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().append('ids', this.imageId + '');
        this.http.patch(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL}/v1/sample-oss-file/browse-number`, null, { params })
            .subscribe((result) => {
            this.queryFaceDetectModel();
        });
    }
    loadImageCount() {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().append('imageId', this.imageId + '');
        this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL}/v1/sample-oss-types/getTypeByImageId`, { params })
            .subscribe((result) => {
            if (_core_http_entity__WEBPACK_IMPORTED_MODULE_2__["HttpResult"].succeed(result.code)) {
                this.sampleOssType = result.data;
            }
        });
    }
    loadOne(imageId) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL}/v1/sample-oss-file/getOne/${imageId}`);
    }
}
DetailDataManageComponent.ɵfac = function DetailDataManageComponent_Factory(t) { return new (t || DetailDataManageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzMessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_manage_service__WEBPACK_IMPORTED_MODULE_7__["DataManageService"])); };
DetailDataManageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DetailDataManageComponent, selectors: [["ng-component"]], viewQuery: function DetailDataManageComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.lineEchartElm = _t.first);
    } }, decls: 55, vars: 17, consts: [[1, "flex-column", 2, "height", "100%"], [1, "search-form", "flex-row"], [1, "search-form-title"], [1, "search-form-quantity"], ["class", "Standard-model", "title", "\u5F53\u524D\u56FE\u7247\u4E3A\u4EBA\u8138\u6A21\u677F", "style", "object-fit: contain;align-items: center;", 4, "ngIf"], [1, "btn", 2, "margin-right", "12px", 3, "click"], ["class", "btn", "style", "margin-right: 12px;", 3, "click", 4, "ngIf"], ["class", "btn btn-remove", "style", "margin-right: 12px;", 3, "click", 4, "ngIf"], [1, "btn", "btn-remove", 3, "click"], [1, "detail", "flex-column"], [1, "detail-image", "flex-row"], ["src", "assets/images/pre.png", "alt", "\u4E0A\u4E00\u5F20", 1, "pre", "pointer", 3, "click"], [1, "detail-box", "flex-column"], [1, "target-image", "flex-row", 2, "position", "relative"], ["id", "detailLabel", 1, "canvas-container", "ai-label", 2, "height", "100%", "width", "100%", "object-fit", "contain", "align-items", "center"], [1, "target-quantity"], ["src", "assets/images/next.png", "alt", "\u4E0B\u4E00\u5F20", 1, "next", "pointer", 3, "click"], [1, "detail-info", "flex-row"], [1, "detail-info-box", "flex-column", "m-r"], [1, "detail-info-type", "flex-row"], [1, "detail-info-param"], [1, "detail-info-value"], [1, "is_mark"], [1, "detail-info-box", "p-a"], [2, "height", "100%", "position", "relative"], [2, "position", "absolute", "left", "0", "right", "0", "top", "0", "bottom", "0"], ["lineEchart", ""], ["title", "\u5F53\u524D\u56FE\u7247\u4E3A\u4EBA\u8138\u6A21\u677F", 1, "Standard-model", 2, "object-fit", "contain", "align-items", "center"], ["t", "1646357872681", "viewBox", "0 0 1024 1024", "version", "1.1", "p-id", "691", "width", "30", "height", "30", 1, "icon", 2, "position", "relative", "top", "7px"], ["d", "M210.285714 320.091429c20.205714 0 36.571429 16.365714 36.571429 36.571428s-16.365714 36.571429-36.571429 36.571429-36.571429-16.365714-36.571428-36.571429 16.365714-36.571429 36.571428-36.571428m0-36.571429c-40.411429 0-73.142857 32.731429-73.142857 73.142857s32.731429 73.142857 73.142857 73.142857 73.142857-32.731429 73.142857-73.142857-32.731429-73.142857-73.142857-73.142857zM813.714286 320.091429c20.205714 0 36.571429 16.365714 36.571428 36.571428s-16.365714 36.571429-36.571428 36.571429-36.571429-16.365714-36.571429-36.571429 16.365714-36.571429 36.571429-36.571428m0-36.571429c-40.411429 0-73.142857 32.731429-73.142857 73.142857s32.731429 73.142857 73.142857 73.142857 73.142857-32.731429 73.142857-73.142857-32.731429-73.142857-73.142857-73.142857zM512 832.091429c20.205714 0 36.571429 16.365714 36.571429 36.571428s-16.365714 36.571429-36.571429 36.571429-36.571429-16.365714-36.571429-36.571429 16.365714-36.571429 36.571429-36.571428m0-36.571429c-40.411429 0-73.142857 32.731429-73.142857 73.142857s32.731429 73.142857 73.142857 73.142857 73.142857-32.731429 73.142857-73.142857-32.731429-73.142857-73.142857-73.142857z", "fill", "#248BFF", "p-id", "692"], ["d", "M301.714286 644.662857m-36.571429 0a36.571429 36.571429 0 1 0 73.142857 0 36.571429 36.571429 0 1 0-73.142857 0Z", "fill", "#B4D7FE", "p-id", "693"], ["d", "M483.474286 522.88l-173.714286-84.571429c-2.56-1.188571-5.302857-1.828571-8.045714-1.828571s-5.485714 0.64-8.045715 1.828571l-173.714285 84.571429c-6.308571 3.017143-10.24 9.417143-10.24 16.457143v210.742857c0 7.04 4.022857 13.348571 10.24 16.457143l173.714285 84.571428c2.56 1.188571 5.302857 1.828571 8.045715 1.828572s5.485714-0.64 8.045714-1.828572l173.714286-84.571428c6.217143-3.108571 10.24-9.508571 10.24-16.457143V539.337143c0-7.04-4.022857-13.44-10.24-16.457143zM457.142857 738.651429l-155.428571 75.702857-155.428572-75.702857V550.765714l155.428572-75.702857 155.428571 75.702857v187.885715z", "fill", "#248BFF", "p-id", "694"], ["d", "M228.571429 644.662857c0 40.411429 32.731429 73.142857 73.142857 73.142857s73.142857-32.731429 73.142857-73.142857-32.731429-73.142857-73.142857-73.142857-73.142857 32.731429-73.142857 73.142857z m109.714285 0c0 20.205714-16.365714 36.571429-36.571428 36.571429s-36.571429-16.365714-36.571429-36.571429 16.365714-36.571429 36.571429-36.571428 36.571429 16.457143 36.571428 36.571428z", "fill", "#248BFF", "p-id", "695"], ["d", "M722.285714 644.662857m-36.571428 0a36.571429 36.571429 0 1 0 73.142857 0 36.571429 36.571429 0 1 0-73.142857 0Z", "fill", "#B4D7FE", "p-id", "696"], ["d", "M693.76 166.308571l-173.714286-84.571428c-2.56-1.28-5.302857-1.828571-8.045714-1.828572s-5.485714 0.64-8.045714 1.828572l-173.714286 84.571428c-6.308571 3.017143-10.24 9.417143-10.24 16.457143v210.742857c0 7.04 4.022857 13.348571 10.24 16.457143l173.714286 84.571429c2.56 1.188571 5.302857 1.828571 8.045714 1.828571s5.485714-0.64 8.045714-1.828571l173.714286-84.571429c6.217143-3.108571 10.24-9.508571 10.24-16.457143V182.765714c0-7.04-4.022857-13.44-10.24-16.457143zM512 324.662857c-20.205714 0-36.571429-16.365714-36.571429-36.571428s16.365714-36.571429 36.571429-36.571429 36.571429 16.365714 36.571429 36.571429-16.365714 36.571429-36.571429 36.571428z m155.428571 57.417143l-137.142857 66.742857v-89.965714c31.542857-8.137143 54.857143-36.662857 54.857143-70.765714 0-40.411429-32.731429-73.142857-73.142857-73.142858s-73.142857 32.731429-73.142857 73.142858c0 34.102857 23.314286 62.628571 54.857143 70.765714v89.965714l-137.142857-66.742857V194.194286l155.428571-75.702857 155.428571 75.702857v187.885714z", "fill", "#248BFF", "p-id", "697"], ["d", "M512 288.091429m-36.571429 0a36.571429 36.571429 0 1 0 73.142858 0 36.571429 36.571429 0 1 0-73.142858 0Z", "fill", "#B4D7FE", "p-id", "698"], ["d", "M356.571429 630.948571c-6.308571 0-12.434286-3.291429-15.817143-9.051428-5.12-8.685714-2.102857-19.931429 6.582857-25.051429l109.714286-64c8.777143-5.12 19.931429-2.102857 25.051428 6.582857s2.102857 19.931429-6.582857 25.051429l-109.714286 64c-2.925714 1.737143-6.125714 2.468571-9.234285 2.468571z", "fill", "#248BFF", "p-id", "699"], ["d", "M904.045714 522.88l-173.714285-84.571429c-2.56-1.188571-5.302857-1.828571-8.045715-1.828571s-5.485714 0.64-8.045714 1.828571l-173.714286 84.571429c-6.308571 3.017143-10.24 9.417143-10.24 16.457143v210.742857c0 7.04 4.022857 13.348571 10.24 16.457143l173.714286 84.571428c2.56 1.188571 5.302857 1.828571 8.045714 1.828572s5.485714-0.64 8.045715-1.828572l173.714285-84.571428c6.308571-3.017143 10.24-9.417143 10.24-16.457143V539.337143c0-7.04-4.022857-13.44-10.24-16.457143zM877.714286 738.651429l-155.428572 75.702857-155.428571-75.702857V575.177143l85.12 49.645714c-1.828571 6.308571-2.834286 12.982857-2.834286 19.84 0 40.411429 32.731429 73.142857 73.142857 73.142857s73.142857-32.731429 73.142857-73.142857a73.124571 73.124571 0 0 0-125.074285-51.474286l-86.765715-50.651428L722.285714 475.062857l155.428572 75.702857v187.885715zM685.714286 644.662857c0-20.205714 16.365714-36.571429 36.571428-36.571428s36.571429 16.365714 36.571429 36.571428-16.365714 36.571429-36.571429 36.571429-36.571429-16.365714-36.571428-36.571429z", "fill", "#248BFF", "p-id", "700"], [1, "btn", "btn-remove", 2, "margin-right", "12px", 3, "click"]], template: function DetailDataManageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DetailDataManageComponent_div_6_Template, 11, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailDataManageComponent_Template_button_click_7_listener() { return ctx.saveRect(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u4FDD\u5B58\u6807\u6CE8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, DetailDataManageComponent_button_9_Template, 2, 0, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, DetailDataManageComponent_button_10_Template, 2, 0, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailDataManageComponent_Template_button_click_11_listener() { return ctx.delete(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u5220\u9664");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailDataManageComponent_Template_img_click_15_listener() { return ctx.lastImage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailDataManageComponent_Template_img_click_21_listener() { return ctx.nextImage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\u56FE\u5F62\u7C7B\u522B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\u56FE\u7247\u5C3A\u5BF8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "\u662F\u5426\u6807\u6CE8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](39, "marks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "\u4E0A\u4F20\u65F6\u95F4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](45, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "\u4E0A\u4F20\u4F5C\u8005");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "div", 25, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.sampleOssType == null ? null : ctx.sampleOssType.sampleTypeName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u5171", ctx.countImg, "\u4E2A\u7ED3\u679C ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isFaceModel && ctx.isExist);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isFaceModel && ctx.isExist);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isFaceModel && ctx.isExist);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.presentIdx, " / ", ctx.sampleOssFiles == null ? null : ctx.sampleOssFiles.length, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.sampleOssType == null ? null : ctx.sampleOssType.sampleTypeName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((ctx.sampleOssFile == null ? null : ctx.sampleOssFile.height) + "*" + (ctx.sampleOssFile == null ? null : ctx.sampleOssFile.width));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](39, 12, ctx.sampleOssFile == null ? null : ctx.sampleOssFile.markStatus));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](45, 14, ctx.sampleOssFile == null ? null : ctx.sampleOssFile.createdTime, "yyyy-MM-dd HH:mm:ss"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.sampleOssFile == null ? null : ctx.sampleOssFile.createdName);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"]], pipes: [_core_app_common_pipes__WEBPACK_IMPORTED_MODULE_9__["MarkStatusPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]], styles: [".Standard-model[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  display: inline-block;\n  margin-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGF0YS1tYW5hZ2UvZGV0YWlsL0Q6L2ZmL3RhcmdldC1yZWNvZ25pemUtbWdyLWh0bWwtVjAuMi9zcmMvYXBwL3BhZ2VzL2RhdGEtbWFuYWdlL2RldGFpbC9kZXRhaWwuZGF0YS1tYW5hZ2UuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL3BhZ2VzL2RhdGEtbWFuYWdlL2RldGFpbC9kZXRhaWwuZGF0YS1tYW5hZ2UuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RhdGEtbWFuYWdlL2RldGFpbC9kZXRhaWwuZGF0YS1tYW5hZ2UuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuU3RhbmRhcmQtbW9kZWx7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgLy8gYm90dG9tOiAwO1xuICAgIC8vIGxlZnQ6IDE1MHB4O1xufSIsIi5TdGFuZGFyZC1tb2RlbCB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetailDataManageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './detail.data-manage.component.html',
                styleUrls: ['./detail.data-manage.component.less']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzMessageService"] }, { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzModalService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _data_manage_service__WEBPACK_IMPORTED_MODULE_7__["DataManageService"] }]; }, { lineEchartElm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['lineEchart']
        }] }); })();


/***/ }),

/***/ "./src/app/pages/data-manage/edit/edit.data-manage.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/data-manage/edit/edit.data-manage.component.ts ***!
  \**********************************************************************/
/*! exports provided: EditDataManageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditDataManageComponent", function() { return EditDataManageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class EditDataManageComponent {
}
EditDataManageComponent.ɵfac = function EditDataManageComponent_Factory(t) { return new (t || EditDataManageComponent)(); };
EditDataManageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditDataManageComponent, selectors: [["ng-component"]], decls: 107, vars: 0, consts: [[1, "search-form", "flex-row"], [1, "search-form-title"], [1, "search-form-quantity"], ["type", "text", 1, "keyword", "m-r"], [1, "btn", "m-r"], [1, "btn", "btn-remove", "m-r"], [1, "btn", "btn-batch"], [1, "picture-item"], [1, "picture-box"], ["src", "assets/images/img01.png", "alt", "\u56FE\u7247", 1, "picture-m"], ["src", "assets/images/question.png", "alt", "\u95EE\u9898\u56FE\u7247", 1, "picture-mark"], ["src", "assets/images/remove.png", "alt", "\u95EE\u9898\u56FE\u7247", 1, "picture-mark"], ["src", "assets/images/lock.png", "alt", "\u95EE\u9898\u56FE\u7247", 1, "picture-mark"], ["src", "assets/images/right.png", "alt", "\u95EE\u9898\u56FE\u7247", 1, "picture-mark"]], template: function EditDataManageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u822A\u7A7A\u6BCD\u8230");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u5171168\u4E2A\u7ED3\u679C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u5168\u9009");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u9501\u5B9A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u79FB\u52A8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u5220\u9664");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u5B8C\u6210");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RhdGEtbWFuYWdlL2VkaXQvZWRpdC5kYXRhLW1hbmFnZS5jb21wb25lbnQubGVzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditDataManageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './edit.data-manage.component.html',
                styleUrls: ['./edit.data-manage.component.less']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/data-manage/leaf/leaf.data-manage.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/data-manage/leaf/leaf.data-manage.component.ts ***!
  \**********************************************************************/
/*! exports provided: LeafDataManageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeafDataManageComponent", function() { return LeafDataManageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _core_http_entity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/http-entity */ "./src/app/core/http-entity.ts");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var _state_rename_sample_oss_type_state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../state/rename-sample-oss-type.state */ "./src/app/state/rename-sample-oss-type.state.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd.js");
/* harmony import */ var _data_manage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../data-manage.service */ "./src/app/pages/data-manage/data-manage.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/icon */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-icon.js");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-transition-patch.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _core_app_common_pipes__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../core/app-common.pipes */ "./src/app/core/app-common.pipes.ts");

















const _c0 = ["filesInput"];
function LeafDataManageComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\u5BFC\u5165");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 17, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function LeafDataManageComponent_ng_container_8_Template_input_change_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.uploadImages($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
function LeafDataManageComponent_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LeafDataManageComponent_ng_container_9_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r10.updateAllChecked(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u5168\u9009");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LeafDataManageComponent_ng_container_9_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r12.lock(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\u9501\u5B9A");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LeafDataManageComponent_ng_container_9_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r13.download(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\u4E0B\u8F7D");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LeafDataManageComponent_ng_container_9_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r14.delete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "\u5220\u9664");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
function LeafDataManageComponent_ng_container_10_div_2_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 32);
} }
function LeafDataManageComponent_ng_container_10_div_2_i_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 33);
} }
function LeafDataManageComponent_ng_container_10_div_2_i_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 34);
} }
function LeafDataManageComponent_ng_container_10_div_2_i_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 35);
} }
function LeafDataManageComponent_ng_container_10_div_2_i_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 36);
} }
function LeafDataManageComponent_ng_container_10_div_2_i_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 37);
} }
function LeafDataManageComponent_ng_container_10_div_2_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "svg", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "path", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "path", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "path", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "path", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "path", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "path", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "path", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "path", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "path", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LeafDataManageComponent_ng_container_10_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LeafDataManageComponent_ng_container_10_div_2_Template_img_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26); const item_r16 = ctx.$implicit; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r25.amplify(item_r16.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "ossPath");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, LeafDataManageComponent_ng_container_10_div_2_img_3_Template, 1, 0, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, LeafDataManageComponent_ng_container_10_div_2_i_4_Template, 1, 0, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, LeafDataManageComponent_ng_container_10_div_2_i_5_Template, 1, 0, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, LeafDataManageComponent_ng_container_10_div_2_i_6_Template, 1, 0, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, LeafDataManageComponent_ng_container_10_div_2_i_7_Template, 1, 0, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, LeafDataManageComponent_ng_container_10_div_2_i_8_Template, 1, 0, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, LeafDataManageComponent_ng_container_10_div_2_div_9_Template, 11, 0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 8, item_r16.ossKey), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r16.sampleStatus === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r16.markStatus == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r16.markStatus == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r16.markStatus == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r16.markStatus == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r16.markStatus == 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r16.faceStatus == 1);
} }
function LeafDataManageComponent_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, LeafDataManageComponent_ng_container_10_div_2_Template, 10, 10, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.secondaryData);
} }
function LeafDataManageComponent_ng_container_11_div_2_img_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 32);
} }
function LeafDataManageComponent_ng_container_11_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nz-checkbox-group", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LeafDataManageComponent_ng_container_11_div_2_Template_nz_checkbox_group_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r32); const idx_r29 = ctx.index; const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return (ctx_r31.checkOptionsOne[idx_r29] = $event); })("ngModelChange", function LeafDataManageComponent_ng_container_11_div_2_Template_nz_checkbox_group_ngModelChange_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r32); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r33.updateSingleChecked(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LeafDataManageComponent_ng_container_11_div_2_Template_img_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r32); const item_r28 = ctx.$implicit; const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r34.amplify(item_r28.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "ossPath");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, LeafDataManageComponent_ng_container_11_div_2_img_4_Template, 1, 0, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r28 = ctx.$implicit;
    const idx_r29 = ctx.index;
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r27.checkOptionsOne[idx_r29]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 3, item_r28.ossKey), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r28.sampleStatus === 1);
} }
function LeafDataManageComponent_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, LeafDataManageComponent_ng_container_11_div_2_Template, 5, 5, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.secondaryData);
} }
function LeafDataManageComponent_i_19_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LeafDataManageComponent_i_19_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r36); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r35.hideUploadingProgress = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LeafDataManageComponent_i_20_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "i", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LeafDataManageComponent_i_20_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r38); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r37.hideUploadingProgress = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LeafDataManageComponent_div_25_i_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 59);
} }
function LeafDataManageComponent_div_25_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", item_r39.progress, "%");
} }
function LeafDataManageComponent_div_25_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u7B49\u5F85\u4E2D");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LeafDataManageComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "LocalImgFile");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "KB");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, LeafDataManageComponent_div_25_i_11_Template, 1, 0, "i", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, LeafDataManageComponent_div_25_span_12_Template, 2, 1, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, LeafDataManageComponent_div_25_span_13_Template, 2, 0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 6, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 8, item_r39.file)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r39.file.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 10, item_r39.file.size));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r39.progress === 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r39.progress > 0 && item_r39.progress < 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r39.progress === 0);
} }
class LeafDataManageComponent {
    constructor(route, http, nzMessage, nzModal, router, dataManageService) {
        this.route = route;
        this.http = http;
        this.nzMessage = nzMessage;
        this.nzModal = nzModal;
        this.router = router;
        this.dataManageService = dataManageService;
        this.secondaryData = [];
        this.secondaryTotal = 0;
        this.isOperateButton = true;
        // sampleTitle: string;
        this.checkOptionsOne = [];
        this.indeterminate = true;
        this.allChecked = false;
        this.pageIndex = 1;
        this.imgNum = 300;
        this.current = 1;
        // files: ProgressDto[] = [];
        this.hideUploadingProgress = true;
        this.hideUploadingPanel = true;
        // uploadingFiles: File[] = [];
        this.uploadingFiles = [];
        /**
         * 全选
         */
        this.allSelect = false;
    }
    ngOnInit() {
        this.route.paramMap.subscribe((params) => {
            if (params.has('sampleUpId')) {
                this.sampleUpId = +params.get('sampleUpId');
                this.loadSecondaryImage(this.sampleUpId);
                this.loadSampleType(this.sampleUpId);
            }
        });
        this.sampleOssTypeName$.subscribe(renameModel => {
            if (renameModel.name) {
                this.sampleOssType.sampleTypeName = renameModel.name;
            }
        });
    }
    // operateMgr(flag: boolean): void {
    //   this.isOperateButton = flag;
    // }
    loadSecondaryImage(sampleUpId) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().append('typeId', sampleUpId + '').append('pageSize', 300 + '').append('pageIndex', this.pageIndex + '');
        this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL}/v1/sample-oss-file/getOssFilesByTypeId`, { params })
            .subscribe((result) => {
            this.secondaryData = result.data.records;
            this.secondaryTotal = result.data.total;
            this.imgNum = this.secondaryData.length;
            let str = $(".search-form-title")[0].innerText;
            let str1 = str.slice(0, str.indexOf(str.match('共[0-9]+个')[0]));
            if (str1.length > 0) {
                this.dataManageService.delect(this.secondaryTotal, str1);
            }
            const box = this.secondaryData.map((s) => {
                return [{ label: '', value: s.id, checked: false, typeId: s.sampleTypeId }];
            });
            this.checkOptionsOne = box;
            this.allSelect = false;
        });
    }
    nzPageIndexChange() {
        this.loadSecondaryImage(this.sampleUpId);
    }
    loadSampleType(sampleUpId) {
        // 根据类型查上级id的typename
        this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL}/v1/sample-oss-types/${sampleUpId}`)
            .subscribe((result) => {
            if (_core_http_entity__WEBPACK_IMPORTED_MODULE_4__["HttpResult"].succeed(result.code)) {
                this.sampleOssType = result.data;
            }
        });
    }
    amplify(imageId) {
        this.router.navigate(['../detail', { imageId }], { relativeTo: this.route });
    }
    updateAllChecked() {
        if (this.allSelect) {
            this.checkOptionsOne = this.checkOptionsOne.map(item => {
                return [Object.assign(Object.assign({}, item[0]), { checked: false })];
            });
            this.allChecked = false;
            this.allSelect = false;
        }
        else {
            this.checkOptionsOne = this.checkOptionsOne.map(item => {
                return [Object.assign(Object.assign({}, item[0]), { checked: true })];
            });
            this.allChecked = true;
            this.allSelect = true;
        }
    }
    /**
     * 单选
     */
    updateSingleChecked() {
        this.allSelect = false;
        if (this.checkOptionsOne.every(item => !item.checked)) {
            this.allChecked = false;
            this.indeterminate = false;
        }
        else if (this.checkOptionsOne.every(item => item.checked)) {
            this.allChecked = true;
            this.indeterminate = false;
        }
        else {
            this.indeterminate = true;
        }
    }
    /**
     * 获取选中的图片
     */
    getChooseImage() {
        let ids = [];
        $.each(this.checkOptionsOne, function (i, n) {
            if (n[0].checked) {
                ids.push(n[0].value);
            }
        });
        // let ids = '';
        // this.checkOptionsOne.map((s) => {
        //   console.log(this.allSelect)
        //   if (s[0].checked && !this.allSelect) {
        //     ids = ids.concat(s[0].value + ',');
        //   }
        //   if (s[0].checked && this.allSelect) {
        //     ids = ids.concat(s[0][0].value + ',');
        //   }
        // });
        return ids;
    }
    /**
     * 获取选中的上级id
     */
    getChooseTypeId() {
        let sampleTypeId = '';
        this.checkOptionsOne.map((s) => {
            if (s[0].checked && !this.allSelect) {
                sampleTypeId = s[0].typeId;
            }
            if (s[0].checked && this.allSelect) {
                sampleTypeId = s[0].typeId;
            }
        });
        return sampleTypeId;
    }
    lock() {
        const ids = this.getChooseImage();
        const sampleTypeId = this.getChooseTypeId();
        if (ids === '' && sampleTypeId === '') {
            this.nzMessage.error('请勾选需要操作的图片！');
            return;
        }
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().append('ids', ids).append('sampleTypeId', sampleTypeId).append('enumStatus', 'LOCK');
        this.http.patch(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL}/v1/sample-oss-file/patch_status`, null, { params })
            .subscribe((result) => {
            console.log(result.code + '   code');
            if (_core_http_entity__WEBPACK_IMPORTED_MODULE_4__["HttpResult"].succeed(result.code)) {
                this.nzMessage.success('锁定成功');
                this.loadSecondaryImage(+sampleTypeId);
            }
            else {
                this.nzMessage.error(result.message);
            }
        });
    }
    download() {
        const ids = this.getChooseImage();
        const sampleTypeId = this.getChooseTypeId();
        if (ids === '' && sampleTypeId === '') {
            this.nzMessage.error('请勾选需要操作的图片！');
            return;
        }
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().append('ids', ids).append('sampleTypeId', sampleTypeId).append('enumStatus', '3');
        this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL}/v1/sample-oss-file/downloadFile`, null, { params })
            .subscribe((result) => {
            if (_core_http_entity__WEBPACK_IMPORTED_MODULE_4__["HttpResult"].succeed(result.code)) {
                this.nzMessage.success('下载成功');
                window.open(result.data);
                // this.loadSecondaryImage(+sampleTypeId);
            }
            else {
                this.nzMessage.error(result.message);
            }
        });
    }
    delete() {
        const ids = this.getChooseImage();
        const sampleTypeId = this.getChooseTypeId();
        if (ids === '' && sampleTypeId === '') {
            this.nzMessage.error('请勾选需要操作的图片！');
            return;
        }
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().append('ids', ids).append('sampleTypeId', sampleTypeId).append('enumStatus', 'DELETE');
        this.http.patch(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL}/v1/sample-oss-file/patch_status`, null, { params })
            .subscribe((result) => {
            if (_core_http_entity__WEBPACK_IMPORTED_MODULE_4__["HttpResult"].succeed(result.code)) {
                //
                this.nzMessage.success('删除成功');
                this.loadSecondaryImage(+sampleTypeId);
            }
            else {
                this.nzMessage.error(result.message);
            }
        });
    }
    // uploadImages(): void {
    //   const modal = this.nzModal.create({
    //     nzWidth: 1000,
    //     nzContent: DataManageUploadComponent,
    //     nzFooter: null,
    //     nzComponentParams: {
    //       sampleUpId: this.sampleUpId
    //     },
    //   });
    //   modal.afterClose.subscribe(() => {
    //     // 重新加载图片
    //     this.loadSecondaryImage(this.sampleUpId);
    //   });
    // }
    uploadImages(evt) {
        this.hideUploadingProgress = false;
        this.hideUploadingPanel = false;
        const fileList = evt.target.files;
        if (fileList.length > 500) {
            // 限制一次最多上传20张
            this.nzModal.error({
                nzTitle: '单次最多上传500张'
            });
            this.clearFiles();
            return;
        }
        if (fileList.length > 0) {
            const fileCount = fileList.length;
            const uploadingFiles = [];
            for (let i = 0; i < fileCount; i++) {
                // 每个文件单个上传，这样才能对每个文件有进度条
                let type = fileList[i].type;
                if (type == "image/png" || type == "image/jpeg") {
                    uploadingFiles.push({
                        file: fileList[i],
                        progress: 0
                    });
                }
                else {
                    this.nzMessage.error('文件格式不正确');
                }
            }
            this.uploadingFiles = uploadingFiles;
            this.uploadingFiles.forEach((file, index) => {
                const formData = new FormData();
                formData.append('files', file.file);
                this.uploadWithFiles(index, formData);
            });
            const completeInterval = setInterval(() => {
                let complete = true;
                for (let j = 0; j < this.uploadingFiles.length; j++) {
                    if (this.uploadingFiles[j].progress < 100) {
                        complete = false;
                        break;
                    }
                }
                if (complete) {
                    clearInterval(completeInterval);
                    this.clearFiles();
                    this.loadSecondaryImage(this.sampleUpId);
                    this.loadSampleType(this.sampleUpId);
                }
            }, 1000);
        }
    }
    clearFiles() {
        this.filesInputElm.nativeElement.value = '';
    }
    uploadWithFiles(index, formData) {
        this.tile = true;
        const httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().append('sampleTypeId', this.sampleUpId + '');
        this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL}/v1/sample-oss-file`, formData, {
            params: httpParams,
            reportProgress: true,
            responseType: 'text',
            observe: 'events',
        }).subscribe((event) => {
            if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpEventType"].UploadProgress) {
                console.log('upload event is :', event);
                // 根据每个文件进度
                // const map = formData.getAll('files').map((f: File) => {
                //   // this.files = [];
                //   return {name: f.name, jd: event.loaded, id: f.lastModified};
                // });
                // this.files = map;
                // console.log(event.loaded / event.total + '未付费');
                this.uploadingFiles[index].progress = Math.ceil(event.loaded * 100 / event.total);
            }
            else if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpEventType"].Response) {
                // console.log('上传完成', event.body);
                this.uploadingFiles[index].progress = 100;
            }
            // this.nzMessage.success('图片已经上传，进度条还没有完，手动刷新.....未完待续');
        });
    }
}
LeafDataManageComponent.ɵfac = function LeafDataManageComponent_Factory(t) { return new (t || LeafDataManageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ng_zorro_antd__WEBPACK_IMPORTED_MODULE_8__["NzMessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ng_zorro_antd__WEBPACK_IMPORTED_MODULE_8__["NzModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_data_manage_service__WEBPACK_IMPORTED_MODULE_9__["DataManageService"])); };
LeafDataManageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LeafDataManageComponent, selectors: [["ng-component"]], viewQuery: function LeafDataManageComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.filesInputElm = _t.first);
    } }, decls: 26, vars: 18, consts: [[1, "main", "flex-column", 2, "height", "100%"], [1, "search-form", "flex-row"], [1, "search-form-title"], [1, "search-form-quantity"], [2, "margin-left", "30px"], [4, "ngIf"], ["nzShowQuickJumper", "", "nzHideOnSinglePage", "", 3, "nzPageIndex", "nzTotal", "nzPageSize", "nzPageIndexChange"], [1, "uploading-progress-wrap"], [1, "flex-row", "uploading-title"], ["nz-icon", "", "nzType", "border", "nzTheme", "outline", 3, "click", 4, "ngIf"], ["nz-icon", "", "nzType", "minus", "nzTheme", "outline", 3, "click", 4, "ngIf"], ["nz-icon", "", "nzType", "close", "nzTheme", "outline", 3, "click"], [1, "upload-remark"], [1, "uploading-files"], ["class", "uploading-file", 4, "ngFor", "ngForOf"], [1, "import-samples-btn-wrap"], [1, "btn", "m-r", "upload"], ["type", "file", "value", "\u672C\u5730\u4E0A\u4F20", "multiple", "", 3, "change"], ["filesInput", ""], [1, "btn", "m-r", 3, "click"], [1, "btn", "btn-remove", "m-r", 3, "click"], [1, "picture-item", "leaf-picture-item"], ["class", "picture-box", 4, "ngFor", "ngForOf"], [1, "picture-box"], ["alt", "\u56FE\u7247", 1, "picture-m", 3, "src", "click"], ["class", "picture-mark", "src", "assets/images/lock.png", "alt", "\u95EE\u9898\u56FE\u7247", 4, "ngIf"], ["nz-icon", "", "nzType", "clock-circle", "nzTheme", "fill", "style", "color: rgb(19, 111, 182);position: absolute;bottom: 0;right: 0;", 4, "ngIf"], ["nz-icon", "", "nzType", "minus-circle", "nzTheme", "fill", "style", "color: rgb(230, 98, 182);position: absolute;bottom: 0;right: 0;", 4, "ngIf"], ["nz-icon", "", "nzType", "info-circle", "nzTheme", "fill", "style", "color: rgb(197, 134, 17);position: absolute;bottom: 0;right: 0;", 4, "ngIf"], ["nz-icon", "", "nzType", "check-circle", "nzTheme", "fill", "style", "color: rgb(22, 187, 63);position: absolute;bottom: 0;right: 0;", 4, "ngIf"], ["nz-icon", "", "nzType", "close-circle", "nzTheme", "fill", "style", "color: red;position: absolute;bottom: 0;right: 0;", 4, "ngIf"], ["style", "color: red;position: absolute;top: -10px;left: -5px;width: 10px;height: 10px;", "title", "\u6B64\u56FE\u7247\u4E3A\u4EBA\u8138\u6A21\u677F", 4, "ngIf"], ["src", "assets/images/lock.png", "alt", "\u95EE\u9898\u56FE\u7247", 1, "picture-mark"], ["nz-icon", "", "nzType", "clock-circle", "nzTheme", "fill", 2, "color", "rgb(19, 111, 182)", "position", "absolute", "bottom", "0", "right", "0"], ["nz-icon", "", "nzType", "minus-circle", "nzTheme", "fill", 2, "color", "rgb(230, 98, 182)", "position", "absolute", "bottom", "0", "right", "0"], ["nz-icon", "", "nzType", "info-circle", "nzTheme", "fill", 2, "color", "rgb(197, 134, 17)", "position", "absolute", "bottom", "0", "right", "0"], ["nz-icon", "", "nzType", "check-circle", "nzTheme", "fill", 2, "color", "rgb(22, 187, 63)", "position", "absolute", "bottom", "0", "right", "0"], ["nz-icon", "", "nzType", "close-circle", "nzTheme", "fill", 2, "color", "red", "position", "absolute", "bottom", "0", "right", "0"], ["title", "\u6B64\u56FE\u7247\u4E3A\u4EBA\u8138\u6A21\u677F", 2, "color", "red", "position", "absolute", "top", "-10px", "left", "-5px", "width", "10px", "height", "10px"], ["t", "1646357872681", "viewBox", "0 0 1024 1024", "version", "1.1", "p-id", "691", "width", "20", "height", "20", 1, "icon", 2, "position", "relative", "top", "7px"], ["d", "M210.285714 320.091429c20.205714 0 36.571429 16.365714 36.571429 36.571428s-16.365714 36.571429-36.571429 36.571429-36.571429-16.365714-36.571428-36.571429 16.365714-36.571429 36.571428-36.571428m0-36.571429c-40.411429 0-73.142857 32.731429-73.142857 73.142857s32.731429 73.142857 73.142857 73.142857 73.142857-32.731429 73.142857-73.142857-32.731429-73.142857-73.142857-73.142857zM813.714286 320.091429c20.205714 0 36.571429 16.365714 36.571428 36.571428s-16.365714 36.571429-36.571428 36.571429-36.571429-16.365714-36.571429-36.571429 16.365714-36.571429 36.571429-36.571428m0-36.571429c-40.411429 0-73.142857 32.731429-73.142857 73.142857s32.731429 73.142857 73.142857 73.142857 73.142857-32.731429 73.142857-73.142857-32.731429-73.142857-73.142857-73.142857zM512 832.091429c20.205714 0 36.571429 16.365714 36.571429 36.571428s-16.365714 36.571429-36.571429 36.571429-36.571429-16.365714-36.571429-36.571429 16.365714-36.571429 36.571429-36.571428m0-36.571429c-40.411429 0-73.142857 32.731429-73.142857 73.142857s32.731429 73.142857 73.142857 73.142857 73.142857-32.731429 73.142857-73.142857-32.731429-73.142857-73.142857-73.142857z", "fill", "#248BFF", "p-id", "692"], ["d", "M301.714286 644.662857m-36.571429 0a36.571429 36.571429 0 1 0 73.142857 0 36.571429 36.571429 0 1 0-73.142857 0Z", "fill", "#B4D7FE", "p-id", "693"], ["d", "M483.474286 522.88l-173.714286-84.571429c-2.56-1.188571-5.302857-1.828571-8.045714-1.828571s-5.485714 0.64-8.045715 1.828571l-173.714285 84.571429c-6.308571 3.017143-10.24 9.417143-10.24 16.457143v210.742857c0 7.04 4.022857 13.348571 10.24 16.457143l173.714285 84.571428c2.56 1.188571 5.302857 1.828571 8.045715 1.828572s5.485714-0.64 8.045714-1.828572l173.714286-84.571428c6.217143-3.108571 10.24-9.508571 10.24-16.457143V539.337143c0-7.04-4.022857-13.44-10.24-16.457143zM457.142857 738.651429l-155.428571 75.702857-155.428572-75.702857V550.765714l155.428572-75.702857 155.428571 75.702857v187.885715z", "fill", "#248BFF", "p-id", "694"], ["d", "M228.571429 644.662857c0 40.411429 32.731429 73.142857 73.142857 73.142857s73.142857-32.731429 73.142857-73.142857-32.731429-73.142857-73.142857-73.142857-73.142857 32.731429-73.142857 73.142857z m109.714285 0c0 20.205714-16.365714 36.571429-36.571428 36.571429s-36.571429-16.365714-36.571429-36.571429 16.365714-36.571429 36.571429-36.571428 36.571429 16.457143 36.571428 36.571428z", "fill", "#248BFF", "p-id", "695"], ["d", "M722.285714 644.662857m-36.571428 0a36.571429 36.571429 0 1 0 73.142857 0 36.571429 36.571429 0 1 0-73.142857 0Z", "fill", "#B4D7FE", "p-id", "696"], ["d", "M693.76 166.308571l-173.714286-84.571428c-2.56-1.28-5.302857-1.828571-8.045714-1.828572s-5.485714 0.64-8.045714 1.828572l-173.714286 84.571428c-6.308571 3.017143-10.24 9.417143-10.24 16.457143v210.742857c0 7.04 4.022857 13.348571 10.24 16.457143l173.714286 84.571429c2.56 1.188571 5.302857 1.828571 8.045714 1.828571s5.485714-0.64 8.045714-1.828571l173.714286-84.571429c6.217143-3.108571 10.24-9.508571 10.24-16.457143V182.765714c0-7.04-4.022857-13.44-10.24-16.457143zM512 324.662857c-20.205714 0-36.571429-16.365714-36.571429-36.571428s16.365714-36.571429 36.571429-36.571429 36.571429 16.365714 36.571429 36.571429-16.365714 36.571429-36.571429 36.571428z m155.428571 57.417143l-137.142857 66.742857v-89.965714c31.542857-8.137143 54.857143-36.662857 54.857143-70.765714 0-40.411429-32.731429-73.142857-73.142857-73.142858s-73.142857 32.731429-73.142857 73.142858c0 34.102857 23.314286 62.628571 54.857143 70.765714v89.965714l-137.142857-66.742857V194.194286l155.428571-75.702857 155.428571 75.702857v187.885714z", "fill", "#248BFF", "p-id", "697"], ["d", "M512 288.091429m-36.571429 0a36.571429 36.571429 0 1 0 73.142858 0 36.571429 36.571429 0 1 0-73.142858 0Z", "fill", "#B4D7FE", "p-id", "698"], ["d", "M356.571429 630.948571c-6.308571 0-12.434286-3.291429-15.817143-9.051428-5.12-8.685714-2.102857-19.931429 6.582857-25.051429l109.714286-64c8.777143-5.12 19.931429-2.102857 25.051428 6.582857s2.102857 19.931429-6.582857 25.051429l-109.714286 64c-2.925714 1.737143-6.125714 2.468571-9.234285 2.468571z", "fill", "#248BFF", "p-id", "699"], ["d", "M904.045714 522.88l-173.714285-84.571429c-2.56-1.188571-5.302857-1.828571-8.045715-1.828571s-5.485714 0.64-8.045714 1.828571l-173.714286 84.571429c-6.308571 3.017143-10.24 9.417143-10.24 16.457143v210.742857c0 7.04 4.022857 13.348571 10.24 16.457143l173.714286 84.571428c2.56 1.188571 5.302857 1.828571 8.045714 1.828572s5.485714-0.64 8.045715-1.828572l173.714285-84.571428c6.308571-3.017143 10.24-9.417143 10.24-16.457143V539.337143c0-7.04-4.022857-13.44-10.24-16.457143zM877.714286 738.651429l-155.428572 75.702857-155.428571-75.702857V575.177143l85.12 49.645714c-1.828571 6.308571-2.834286 12.982857-2.834286 19.84 0 40.411429 32.731429 73.142857 73.142857 73.142857s73.142857-32.731429 73.142857-73.142857a73.124571 73.124571 0 0 0-125.074285-51.474286l-86.765715-50.651428L722.285714 475.062857l155.428572 75.702857v187.885715zM685.714286 644.662857c0-20.205714 16.365714-36.571429 36.571428-36.571428s36.571429 16.365714 36.571429 36.571428-16.365714 36.571429-36.571429 36.571429-36.571429-16.365714-36.571428-36.571429z", "fill", "#248BFF", "p-id", "700"], [1, "picture-item", "leaf-picture-item", 2, "overflow-y", "scroll"], [2, "position", "absolute", "left", "2px", 3, "ngModel", "ngModelChange"], ["nz-icon", "", "nzType", "border", "nzTheme", "outline", 3, "click"], ["nz-icon", "", "nzType", "minus", "nzTheme", "outline", 3, "click"], [1, "uploading-file"], [1, "uploading-file-img"], [3, "src"], [1, "uploading-file-size"], [1, "uploading-file-progress"], ["nz-icon", "", "nzType", "check-circle", "nzTheme", "outline", 4, "ngIf"], ["nz-icon", "", "nzType", "check-circle", "nzTheme", "outline"]], template: function LeafDataManageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, LeafDataManageComponent_ng_container_8_Template, 6, 0, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, LeafDataManageComponent_ng_container_9_Template, 9, 0, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, LeafDataManageComponent_ng_container_10_Template, 3, 1, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, LeafDataManageComponent_ng_container_11_Template, 3, 1, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "nz-pagination", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("nzPageIndexChange", function LeafDataManageComponent_Template_nz_pagination_nzPageIndexChange_13_listener($event) { return ctx.pageIndex = $event; })("nzPageIndexChange", function LeafDataManageComponent_Template_nz_pagination_nzPageIndexChange_13_listener() { return ctx.nzPageIndexChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "\u5BFC\u5165");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, LeafDataManageComponent_i_19_Template, 1, 0, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, LeafDataManageComponent_i_20_Template, 1, 0, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LeafDataManageComponent_Template_i_click_21_listener() { return ctx.hideUploadingPanel = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, " \u53EA\u80FD\u4E0A\u4F20jpg/png\u683C\u5F0F\u7684\u56FE\u7247\uFF0C\u4E14\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC710M ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, LeafDataManageComponent_div_25_Template, 14, 12, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.sampleOssType == null ? null : ctx.sampleOssType.sampleTypeName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\u5171", ctx.secondaryTotal, "\u4E2A");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("\u5F53\u524D\u7B2C ", ctx.pageIndex, " \u9875\u5171 ", ctx.imgNum, " \u4E2A");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isOperateButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isOperateButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isOperateButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isOperateButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzPageIndex", ctx.pageIndex)("nzTotal", ctx.secondaryTotal)("nzPageSize", 300);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("hide-progress-panel", ctx.hideUploadingPanel);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.hideUploadingProgress);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.hideUploadingProgress);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("fold", ctx.hideUploadingProgress);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.uploadingFiles);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_8__["NzPaginationComponent"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_11__["NzIconDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_12__["ɵNzTransitionPatchDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_8__["NzCheckboxGroupComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgModel"]], pipes: [_core_app_common_pipes__WEBPACK_IMPORTED_MODULE_14__["OssPathPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["AsyncPipe"], _core_app_common_pipes__WEBPACK_IMPORTED_MODULE_14__["LocalImgFilePipe"], _core_app_common_pipes__WEBPACK_IMPORTED_MODULE_14__["KbPipe"]], styles: [".import-samples-btn-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  margin-right: 10px;\n}\n.import-samples-btn-wrap[_ngcontent-%COMP%]   .upload[_ngcontent-%COMP%]    + input[_ngcontent-%COMP%] {\n  position: absolute;\n  display: block;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 30px;\n  opacity: 0;\n}\n.uploading-progress-wrap[_ngcontent-%COMP%] {\n  background-color: #051d3c;\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  width: 600px;\n  border-top-left-radius: 10px;\n  box-shadow: -4px -4px 10px #202731;\n}\n.uploading-progress-wrap.hide-progress-panel[_ngcontent-%COMP%] {\n  display: none;\n}\n.uploading-progress-wrap[_ngcontent-%COMP%]   .uploading-title[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  color: white;\n  font-size: 16px;\n  justify-content: space-between;\n}\n.uploading-progress-wrap[_ngcontent-%COMP%]   .uploading-title[_ngcontent-%COMP%]   i[nz-icon][_ngcontent-%COMP%] {\n  color: white;\n  margin-left: 10px;\n}\n.uploading-progress-wrap[_ngcontent-%COMP%]   .upload-remark[_ngcontent-%COMP%] {\n  background-color: #0a425f;\n  color: white;\n  font-size: 12px;\n  padding: 5px 20px;\n}\n.uploading-progress-wrap[_ngcontent-%COMP%]   .uploading-files[_ngcontent-%COMP%] {\n  height: 580px;\n  margin-top: 4px;\n  overflow-y: scroll;\n  color: white;\n}\n.uploading-progress-wrap[_ngcontent-%COMP%]   .uploading-files.fold[_ngcontent-%COMP%] {\n  height: 0;\n}\n.uploading-progress-wrap[_ngcontent-%COMP%]   .uploading-files[_ngcontent-%COMP%]   .uploading-file[_ngcontent-%COMP%] {\n  padding: 4px 8px;\n  display: flex;\n  border-bottom: 1px solid #183780;\n}\n.uploading-progress-wrap[_ngcontent-%COMP%]   .uploading-files[_ngcontent-%COMP%]   .uploading-file[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  margin-right: 5px;\n}\n.uploading-progress-wrap[_ngcontent-%COMP%]   .uploading-files[_ngcontent-%COMP%]   .uploading-file[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  font-size: 14px;\n  line-height: 40px;\n}\n.uploading-progress-wrap[_ngcontent-%COMP%]   .uploading-files[_ngcontent-%COMP%]   .uploading-file[_ngcontent-%COMP%]   .uploading-file-progress[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.uploading-progress-wrap[_ngcontent-%COMP%]   .uploading-files[_ngcontent-%COMP%]   .uploading-file[_ngcontent-%COMP%]   .uploading-file-progress[_ngcontent-%COMP%]   i[nz-icon][_ngcontent-%COMP%] {\n  color: greenyellow;\n}\n[_nghost-%COMP%] {\n  display: block;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGF0YS1tYW5hZ2UvbGVhZi9EOi9mZi90YXJnZXQtcmVjb2duaXplLW1nci1odG1sLVYwLjIvc3JjL2FwcC9wYWdlcy9kYXRhLW1hbmFnZS9sZWFmL2xlYWYuZGF0YS1tYW5hZ2UuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL3BhZ2VzL2RhdGEtbWFuYWdlL2xlYWYvbGVhZi5kYXRhLW1hbmFnZS5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0NGO0FEYUk7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQ1hOO0FEZ0JBO0VBS0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUdBLDRCQUFBO0VBQ0Esa0NBQUE7QUNwQkY7QURRRTtFQUNFLGFBQUE7QUNOSjtBRElBO0VBZ0JJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtBQ2pCSjtBREZBO0VBc0JNLFlBQUE7RUFDQSxpQkFBQTtBQ2pCTjtBRE5BO0VBNEJJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ25CSjtBRFpBO0VBbUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFNQSxZQUFBO0FDekJKO0FEcUJJO0VBQ0UsU0FBQTtBQ25CTjtBRHJCQTtFQThDTSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxnQ0FBQTtBQ3RCTjtBRDFCQTtFQW1EUSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDdEJSO0FEL0JBO0VBeURRLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUN2QlI7QURwQ0E7RUErRFEsaUJBQUE7QUN4QlI7QUR2Q0E7RUFrRVUsa0JBQUE7QUN4QlY7QUQrQkE7RUFDRSxjQUFBO0VBQ0EsWUFBQTtBQzdCRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RhdGEtbWFuYWdlL2xlYWYvbGVhZi5kYXRhLW1hbmFnZS5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbXBvcnQtc2FtcGxlcy1idG4td3JhcCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuXG4gIC51cGxvYWQge1xuICAgIC8vIGRpc3BsYXk6IGJsb2NrO1xuICAgIC8vIHdpZHRoOiA4OHB4O1xuICAgIC8vIGhlaWdodDogMzBweDtcbiAgICAvLyB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgLy8gY29sb3I6ICNmZmY7XG4gICAgLy8gYm9yZGVyOiBub25lO1xuICAgIC8vIG91dGxpbmU6IG5vbmU7XG4gICAgLy8gY3Vyc29yOiBwb2ludGVyO1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICMzNTdhZjY7XG4gICAgLy8gYm9yZGVyLXJhZGl1czogNHB4O1xuXG4gICAgJiArIGlucHV0IHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHRvcDogMDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gIH1cbn1cblxuLnVwbG9hZGluZy1wcm9ncmVzcy13cmFwIHtcbiAgJi5oaWRlLXByb2dyZXNzLXBhbmVsIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUsIDI5LCA2MCk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDYwMHB4O1xuICAvL2hlaWdodDogNjAwcHg7XG5cbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcbiAgYm94LXNoYWRvdzogLTRweCAtNHB4IDEwcHggcmdiKDMyLCAzOSwgNDkpO1xuXG4gIC51cGxvYWRpbmctdGl0bGUge1xuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAgIGlbbnotaWNvbl0ge1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgfVxuICB9XG5cbiAgLnVwbG9hZC1yZW1hcmsge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMCwgNjYsIDk1KTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIHBhZGRpbmc6IDVweCAyMHB4O1xuICB9XG5cbiAgLnVwbG9hZGluZy1maWxlcyB7XG4gICAgaGVpZ2h0OiA1ODBweDtcbiAgICBtYXJnaW4tdG9wOiA0cHg7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuXG4gICAgJi5mb2xkIHtcbiAgICAgIGhlaWdodDogMDtcbiAgICB9XG5cbiAgICBjb2xvcjogd2hpdGU7XG5cbiAgICAudXBsb2FkaW5nLWZpbGUge1xuICAgICAgcGFkZGluZzogNHB4IDhweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDI0LCA1NSwgMTI4KTtcblxuICAgICAgaW1nIHtcbiAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICB9XG5cbiAgICAgID4gZGl2IHtcbiAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgICAgfVxuXG4gICAgICAudXBsb2FkaW5nLWZpbGUtcHJvZ3Jlc3Mge1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcblxuICAgICAgICBpW256LWljb25dIHtcbiAgICAgICAgICBjb2xvcjogZ3JlZW55ZWxsb3c7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiAxMDAlO1xufVxuIiwiLmltcG9ydC1zYW1wbGVzLWJ0bi13cmFwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4uaW1wb3J0LXNhbXBsZXMtYnRuLXdyYXAgLnVwbG9hZCArIGlucHV0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzMHB4O1xuICBvcGFjaXR5OiAwO1xufVxuLnVwbG9hZGluZy1wcm9ncmVzcy13cmFwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA1MWQzYztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogNjAwcHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XG4gIGJveC1zaGFkb3c6IC00cHggLTRweCAxMHB4ICMyMDI3MzE7XG59XG4udXBsb2FkaW5nLXByb2dyZXNzLXdyYXAuaGlkZS1wcm9ncmVzcy1wYW5lbCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4udXBsb2FkaW5nLXByb2dyZXNzLXdyYXAgLnVwbG9hZGluZy10aXRsZSB7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi51cGxvYWRpbmctcHJvZ3Jlc3Mtd3JhcCAudXBsb2FkaW5nLXRpdGxlIGlbbnotaWNvbl0ge1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuLnVwbG9hZGluZy1wcm9ncmVzcy13cmFwIC51cGxvYWQtcmVtYXJrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBhNDI1ZjtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDEycHg7XG4gIHBhZGRpbmc6IDVweCAyMHB4O1xufVxuLnVwbG9hZGluZy1wcm9ncmVzcy13cmFwIC51cGxvYWRpbmctZmlsZXMge1xuICBoZWlnaHQ6IDU4MHB4O1xuICBtYXJnaW4tdG9wOiA0cHg7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgY29sb3I6IHdoaXRlO1xufVxuLnVwbG9hZGluZy1wcm9ncmVzcy13cmFwIC51cGxvYWRpbmctZmlsZXMuZm9sZCB7XG4gIGhlaWdodDogMDtcbn1cbi51cGxvYWRpbmctcHJvZ3Jlc3Mtd3JhcCAudXBsb2FkaW5nLWZpbGVzIC51cGxvYWRpbmctZmlsZSB7XG4gIHBhZGRpbmc6IDRweCA4cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMTgzNzgwO1xufVxuLnVwbG9hZGluZy1wcm9ncmVzcy13cmFwIC51cGxvYWRpbmctZmlsZXMgLnVwbG9hZGluZy1maWxlIGltZyB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuLnVwbG9hZGluZy1wcm9ncmVzcy13cmFwIC51cGxvYWRpbmctZmlsZXMgLnVwbG9hZGluZy1maWxlID4gZGl2IHtcbiAgZmxleC1ncm93OiAxO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xufVxuLnVwbG9hZGluZy1wcm9ncmVzcy13cmFwIC51cGxvYWRpbmctZmlsZXMgLnVwbG9hZGluZy1maWxlIC51cGxvYWRpbmctZmlsZS1wcm9ncmVzcyB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLnVwbG9hZGluZy1wcm9ncmVzcy13cmFwIC51cGxvYWRpbmctZmlsZXMgLnVwbG9hZGluZy1maWxlIC51cGxvYWRpbmctZmlsZS1wcm9ncmVzcyBpW256LWljb25dIHtcbiAgY29sb3I6IGdyZWVueWVsbG93O1xufVxuOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiAxMDAlO1xufVxuIl19 */"] });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Select"])(_state_rename_sample_oss_type_state__WEBPACK_IMPORTED_MODULE_6__["RenameSampleOssTypeState"])
], LeafDataManageComponent.prototype, "sampleOssTypeName$", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LeafDataManageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                templateUrl: './leaf.data-manage.component.html',
                styleUrls: ['./leaf.data-manage.component.less']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_8__["NzMessageService"] }, { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_8__["NzModalService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }, { type: _data_manage_service__WEBPACK_IMPORTED_MODULE_9__["DataManageService"] }]; }, { filesInputElm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['filesInput']
        }], sampleOssTypeName$: [] }); })();


/***/ }),

/***/ "./src/app/pages/data-manage/not-leaf/not-leaf.data-manage.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/data-manage/not-leaf/not-leaf.data-manage.component.ts ***!
  \******************************************************************************/
/*! exports provided: NotLeafDataManageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotLeafDataManageComponent", function() { return NotLeafDataManageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _core_http_entity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/http-entity */ "./src/app/core/http-entity.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/icon */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-icon.js");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-transition-patch.js");
/* harmony import */ var _core_app_common_pipes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../core/app-common.pipes */ "./src/app/core/app-common.pipes.ts");












function NotLeafDataManageComponent_ng_container_51_div_1_i_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 33);
} }
function NotLeafDataManageComponent_ng_container_51_div_1_i_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 34);
} }
function NotLeafDataManageComponent_ng_container_51_div_1_i_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 35);
} }
function NotLeafDataManageComponent_ng_container_51_div_1_i_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 36);
} }
function NotLeafDataManageComponent_ng_container_51_div_1_i_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 37);
} }
function NotLeafDataManageComponent_ng_container_51_div_1_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NotLeafDataManageComponent_ng_container_51_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotLeafDataManageComponent_ng_container_51_div_1_Template_img_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.toDetail(item_r11.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "ossPath");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NotLeafDataManageComponent_ng_container_51_div_1_i_3_Template, 1, 0, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NotLeafDataManageComponent_ng_container_51_div_1_i_4_Template, 1, 0, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NotLeafDataManageComponent_ng_container_51_div_1_i_5_Template, 1, 0, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NotLeafDataManageComponent_ng_container_51_div_1_i_6_Template, 1, 0, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NotLeafDataManageComponent_ng_container_51_div_1_i_7_Template, 1, 0, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NotLeafDataManageComponent_ng_container_51_div_1_div_8_Template, 11, 0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", item_r11.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", item_r11.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", item_r11.markStatusText);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 10, item_r11.ossKey), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r11.markStatus == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r11.markStatus == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r11.markStatus == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r11.markStatus == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r11.markStatus == 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r11.faceStatus == 1);
} }
function NotLeafDataManageComponent_ng_container_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NotLeafDataManageComponent_ng_container_51_div_1_Template, 9, 12, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r11 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r11.samplePath.indexOf((ctx_r0.titleData[0] == null ? null : ctx_r0.titleData[0].origin.data.sampleTypeName) + "/") != 0 - 1);
} }
function NotLeafDataManageComponent_ng_container_58_div_1_i_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 33);
} }
function NotLeafDataManageComponent_ng_container_58_div_1_i_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 34);
} }
function NotLeafDataManageComponent_ng_container_58_div_1_i_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 35);
} }
function NotLeafDataManageComponent_ng_container_58_div_1_i_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 36);
} }
function NotLeafDataManageComponent_ng_container_58_div_1_i_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 37);
} }
function NotLeafDataManageComponent_ng_container_58_div_1_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NotLeafDataManageComponent_ng_container_58_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotLeafDataManageComponent_ng_container_58_div_1_Template_img_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r33.toDetail(item_r24.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "ossPath");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NotLeafDataManageComponent_ng_container_58_div_1_i_3_Template, 1, 0, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NotLeafDataManageComponent_ng_container_58_div_1_i_4_Template, 1, 0, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NotLeafDataManageComponent_ng_container_58_div_1_i_5_Template, 1, 0, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NotLeafDataManageComponent_ng_container_58_div_1_i_6_Template, 1, 0, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NotLeafDataManageComponent_ng_container_58_div_1_i_7_Template, 1, 0, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NotLeafDataManageComponent_ng_container_58_div_1_div_8_Template, 11, 0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", item_r24.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", item_r24.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", item_r24.markStatusText);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 10, item_r24.ossKey), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r24.markStatus == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r24.markStatus == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r24.markStatus == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r24.markStatus == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r24.markStatus == 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r24.faceStatus == 1);
} }
function NotLeafDataManageComponent_ng_container_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NotLeafDataManageComponent_ng_container_58_div_1_Template, 9, 12, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r24 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r24.samplePath.indexOf((ctx_r1.titleData[1] == null ? null : ctx_r1.titleData[1].origin.data.sampleTypeName) + "/") != 0 - 1);
} }
function NotLeafDataManageComponent_ng_container_67_div_1_i_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 33);
} }
function NotLeafDataManageComponent_ng_container_67_div_1_i_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 34);
} }
function NotLeafDataManageComponent_ng_container_67_div_1_i_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 35);
} }
function NotLeafDataManageComponent_ng_container_67_div_1_i_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 36);
} }
function NotLeafDataManageComponent_ng_container_67_div_1_i_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 37);
} }
function NotLeafDataManageComponent_ng_container_67_div_1_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NotLeafDataManageComponent_ng_container_67_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotLeafDataManageComponent_ng_container_67_div_1_Template_img_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48); const item_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r46.toDetail(item_r37.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "ossPath");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NotLeafDataManageComponent_ng_container_67_div_1_i_3_Template, 1, 0, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NotLeafDataManageComponent_ng_container_67_div_1_i_4_Template, 1, 0, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NotLeafDataManageComponent_ng_container_67_div_1_i_5_Template, 1, 0, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NotLeafDataManageComponent_ng_container_67_div_1_i_6_Template, 1, 0, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NotLeafDataManageComponent_ng_container_67_div_1_i_7_Template, 1, 0, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NotLeafDataManageComponent_ng_container_67_div_1_div_8_Template, 11, 0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", item_r37.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", item_r37.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", item_r37.markStatusText);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 10, item_r37.ossKey), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r37.markStatus == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r37.markStatus == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r37.markStatus == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r37.markStatus == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r37.markStatus == 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r37.faceStatus == 1);
} }
function NotLeafDataManageComponent_ng_container_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NotLeafDataManageComponent_ng_container_67_div_1_Template, 9, 12, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r37 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r37.samplePath.indexOf((ctx_r2.titleData[2] == null ? null : ctx_r2.titleData[2].origin.data.sampleTypeName) + "/") != 0 - 1);
} }
function NotLeafDataManageComponent_ng_container_74_div_1_i_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 33);
} }
function NotLeafDataManageComponent_ng_container_74_div_1_i_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 34);
} }
function NotLeafDataManageComponent_ng_container_74_div_1_i_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 35);
} }
function NotLeafDataManageComponent_ng_container_74_div_1_i_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 36);
} }
function NotLeafDataManageComponent_ng_container_74_div_1_i_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 37);
} }
function NotLeafDataManageComponent_ng_container_74_div_1_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NotLeafDataManageComponent_ng_container_74_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotLeafDataManageComponent_ng_container_74_div_1_Template_img_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r61); const item_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r59.toDetail(item_r50.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "ossPath");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NotLeafDataManageComponent_ng_container_74_div_1_i_3_Template, 1, 0, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NotLeafDataManageComponent_ng_container_74_div_1_i_4_Template, 1, 0, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NotLeafDataManageComponent_ng_container_74_div_1_i_5_Template, 1, 0, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NotLeafDataManageComponent_ng_container_74_div_1_i_6_Template, 1, 0, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NotLeafDataManageComponent_ng_container_74_div_1_i_7_Template, 1, 0, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NotLeafDataManageComponent_ng_container_74_div_1_div_8_Template, 11, 0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", item_r50.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", item_r50.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", item_r50.markStatusText);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 10, item_r50.ossKey), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r50.markStatus == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r50.markStatus == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r50.markStatus == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r50.markStatus == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r50.markStatus == 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r50.faceStatus == 1);
} }
function NotLeafDataManageComponent_ng_container_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NotLeafDataManageComponent_ng_container_74_div_1_Template, 9, 12, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r50 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r50.samplePath.indexOf((ctx_r3.titleData[3] == null ? null : ctx_r3.titleData[3].origin.data.sampleTypeName) + "/") != 0 - 1);
} }
function NotLeafDataManageComponent_ng_container_82_div_1_i_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 33);
} }
function NotLeafDataManageComponent_ng_container_82_div_1_i_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 34);
} }
function NotLeafDataManageComponent_ng_container_82_div_1_i_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 35);
} }
function NotLeafDataManageComponent_ng_container_82_div_1_i_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 36);
} }
function NotLeafDataManageComponent_ng_container_82_div_1_i_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 37);
} }
function NotLeafDataManageComponent_ng_container_82_div_1_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NotLeafDataManageComponent_ng_container_82_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotLeafDataManageComponent_ng_container_82_div_1_Template_img_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r74); const item_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r72.toDetail(item_r63.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "ossPath");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NotLeafDataManageComponent_ng_container_82_div_1_i_3_Template, 1, 0, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NotLeafDataManageComponent_ng_container_82_div_1_i_4_Template, 1, 0, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NotLeafDataManageComponent_ng_container_82_div_1_i_5_Template, 1, 0, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NotLeafDataManageComponent_ng_container_82_div_1_i_6_Template, 1, 0, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NotLeafDataManageComponent_ng_container_82_div_1_i_7_Template, 1, 0, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NotLeafDataManageComponent_ng_container_82_div_1_div_8_Template, 11, 0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", item_r63.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", item_r63.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", item_r63.markStatusText);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 10, item_r63.ossKey), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r63.markStatus == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r63.markStatus == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r63.markStatus == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r63.markStatus == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r63.markStatus == 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r63.faceStatus == 1);
} }
function NotLeafDataManageComponent_ng_container_82_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NotLeafDataManageComponent_ng_container_82_div_1_Template, 9, 12, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r63 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r63.samplePath.indexOf((ctx_r4.titleData[4] == null ? null : ctx_r4.titleData[4].origin.data.sampleTypeName) + "/") != 0 - 1);
} }
function NotLeafDataManageComponent_ng_container_89_div_1_i_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 33);
} }
function NotLeafDataManageComponent_ng_container_89_div_1_i_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 34);
} }
function NotLeafDataManageComponent_ng_container_89_div_1_i_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 35);
} }
function NotLeafDataManageComponent_ng_container_89_div_1_i_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 36);
} }
function NotLeafDataManageComponent_ng_container_89_div_1_i_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 37);
} }
function NotLeafDataManageComponent_ng_container_89_div_1_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NotLeafDataManageComponent_ng_container_89_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotLeafDataManageComponent_ng_container_89_div_1_Template_img_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r87); const item_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r85.toDetail(item_r76.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "ossPath");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NotLeafDataManageComponent_ng_container_89_div_1_i_3_Template, 1, 0, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NotLeafDataManageComponent_ng_container_89_div_1_i_4_Template, 1, 0, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NotLeafDataManageComponent_ng_container_89_div_1_i_5_Template, 1, 0, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NotLeafDataManageComponent_ng_container_89_div_1_i_6_Template, 1, 0, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NotLeafDataManageComponent_ng_container_89_div_1_i_7_Template, 1, 0, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NotLeafDataManageComponent_ng_container_89_div_1_div_8_Template, 11, 0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", item_r76.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", item_r76.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", item_r76.markStatusText);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 10, item_r76.ossKey), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r76.markStatus == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r76.markStatus == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r76.markStatus == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r76.markStatus == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r76.markStatus == 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r76.faceStatus == 1);
} }
function NotLeafDataManageComponent_ng_container_89_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NotLeafDataManageComponent_ng_container_89_div_1_Template, 9, 12, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r76 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r76.samplePath.indexOf((ctx_r5.titleData[5] == null ? null : ctx_r5.titleData[5].origin.data.sampleTypeName) + "/") != 0 - 1);
} }
function NotLeafDataManageComponent_ng_container_96_div_1_i_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 33);
} }
function NotLeafDataManageComponent_ng_container_96_div_1_i_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 34);
} }
function NotLeafDataManageComponent_ng_container_96_div_1_i_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 35);
} }
function NotLeafDataManageComponent_ng_container_96_div_1_i_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 36);
} }
function NotLeafDataManageComponent_ng_container_96_div_1_i_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 37);
} }
function NotLeafDataManageComponent_ng_container_96_div_1_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NotLeafDataManageComponent_ng_container_96_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r100 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotLeafDataManageComponent_ng_container_96_div_1_Template_img_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r100); const item_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r98.toDetail(item_r89.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "ossPath");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NotLeafDataManageComponent_ng_container_96_div_1_i_3_Template, 1, 0, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NotLeafDataManageComponent_ng_container_96_div_1_i_4_Template, 1, 0, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NotLeafDataManageComponent_ng_container_96_div_1_i_5_Template, 1, 0, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NotLeafDataManageComponent_ng_container_96_div_1_i_6_Template, 1, 0, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NotLeafDataManageComponent_ng_container_96_div_1_i_7_Template, 1, 0, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NotLeafDataManageComponent_ng_container_96_div_1_div_8_Template, 11, 0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", item_r89.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", item_r89.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", item_r89.markStatusText);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 10, item_r89.ossKey), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r89.markStatus == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r89.markStatus == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r89.markStatus == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r89.markStatus == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r89.markStatus == 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r89.faceStatus == 1);
} }
function NotLeafDataManageComponent_ng_container_96_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NotLeafDataManageComponent_ng_container_96_div_1_Template, 9, 12, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r89 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r89.samplePath.indexOf((ctx_r6.titleData[6] == null ? null : ctx_r6.titleData[6].origin.data.sampleTypeName) + "/") != 0 - 1);
} }
function NotLeafDataManageComponent_ng_container_104_div_1_i_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 33);
} }
function NotLeafDataManageComponent_ng_container_104_div_1_i_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 34);
} }
function NotLeafDataManageComponent_ng_container_104_div_1_i_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 35);
} }
function NotLeafDataManageComponent_ng_container_104_div_1_i_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 36);
} }
function NotLeafDataManageComponent_ng_container_104_div_1_i_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 37);
} }
function NotLeafDataManageComponent_ng_container_104_div_1_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NotLeafDataManageComponent_ng_container_104_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r113 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotLeafDataManageComponent_ng_container_104_div_1_Template_img_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r113); const item_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r111.toDetail(item_r102.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "ossPath");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NotLeafDataManageComponent_ng_container_104_div_1_i_3_Template, 1, 0, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NotLeafDataManageComponent_ng_container_104_div_1_i_4_Template, 1, 0, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NotLeafDataManageComponent_ng_container_104_div_1_i_5_Template, 1, 0, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NotLeafDataManageComponent_ng_container_104_div_1_i_6_Template, 1, 0, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NotLeafDataManageComponent_ng_container_104_div_1_i_7_Template, 1, 0, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NotLeafDataManageComponent_ng_container_104_div_1_div_8_Template, 11, 0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", item_r102.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", item_r102.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", item_r102.markStatusText);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 10, item_r102.ossKey), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r102.markStatus == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r102.markStatus == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r102.markStatus == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r102.markStatus == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r102.markStatus == 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r102.faceStatus == 1);
} }
function NotLeafDataManageComponent_ng_container_104_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NotLeafDataManageComponent_ng_container_104_div_1_Template, 9, 12, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r102 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r102.samplePath.indexOf((ctx_r7.titleData[7] == null ? null : ctx_r7.titleData[7].origin.data.sampleTypeName) + "/") != 0 - 1);
} }
function NotLeafDataManageComponent_ng_container_111_div_1_i_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 33);
} }
function NotLeafDataManageComponent_ng_container_111_div_1_i_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 34);
} }
function NotLeafDataManageComponent_ng_container_111_div_1_i_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 35);
} }
function NotLeafDataManageComponent_ng_container_111_div_1_i_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 36);
} }
function NotLeafDataManageComponent_ng_container_111_div_1_i_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 37);
} }
function NotLeafDataManageComponent_ng_container_111_div_1_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NotLeafDataManageComponent_ng_container_111_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotLeafDataManageComponent_ng_container_111_div_1_Template_img_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r126); const item_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r124 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r124.toDetail(item_r115.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "ossPath");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NotLeafDataManageComponent_ng_container_111_div_1_i_3_Template, 1, 0, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NotLeafDataManageComponent_ng_container_111_div_1_i_4_Template, 1, 0, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NotLeafDataManageComponent_ng_container_111_div_1_i_5_Template, 1, 0, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NotLeafDataManageComponent_ng_container_111_div_1_i_6_Template, 1, 0, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NotLeafDataManageComponent_ng_container_111_div_1_i_7_Template, 1, 0, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NotLeafDataManageComponent_ng_container_111_div_1_div_8_Template, 11, 0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", item_r115.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", item_r115.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", item_r115.markStatusText);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 10, item_r115.ossKey), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r115.markStatus == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r115.markStatus == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r115.markStatus == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r115.markStatus == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r115.markStatus == 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r115.faceStatus == 1);
} }
function NotLeafDataManageComponent_ng_container_111_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NotLeafDataManageComponent_ng_container_111_div_1_Template, 9, 12, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r115 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r115.samplePath.indexOf((ctx_r8.titleData[8] == null ? null : ctx_r8.titleData[8].origin.data.sampleTypeName) + "/") != 0 - 1);
} }
function NotLeafDataManageComponent_ng_container_118_div_1_i_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 33);
} }
function NotLeafDataManageComponent_ng_container_118_div_1_i_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 34);
} }
function NotLeafDataManageComponent_ng_container_118_div_1_i_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 35);
} }
function NotLeafDataManageComponent_ng_container_118_div_1_i_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 36);
} }
function NotLeafDataManageComponent_ng_container_118_div_1_i_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 37);
} }
function NotLeafDataManageComponent_ng_container_118_div_1_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NotLeafDataManageComponent_ng_container_118_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r139 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotLeafDataManageComponent_ng_container_118_div_1_Template_img_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r139); const item_r128 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r137 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r137.toDetail(item_r128.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "ossPath");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NotLeafDataManageComponent_ng_container_118_div_1_i_3_Template, 1, 0, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NotLeafDataManageComponent_ng_container_118_div_1_i_4_Template, 1, 0, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NotLeafDataManageComponent_ng_container_118_div_1_i_5_Template, 1, 0, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NotLeafDataManageComponent_ng_container_118_div_1_i_6_Template, 1, 0, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NotLeafDataManageComponent_ng_container_118_div_1_i_7_Template, 1, 0, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NotLeafDataManageComponent_ng_container_118_div_1_div_8_Template, 11, 0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r128 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", item_r128.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", item_r128.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", item_r128.markStatusText);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 10, item_r128.ossKey), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r128.markStatus == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r128.markStatus == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r128.markStatus == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r128.markStatus == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r128.markStatus == 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r128.faceStatus == 1);
} }
function NotLeafDataManageComponent_ng_container_118_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NotLeafDataManageComponent_ng_container_118_div_1_Template, 9, 12, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r128 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r128.samplePath.indexOf((ctx_r9.titleData[9] == null ? null : ctx_r9.titleData[9].origin.data.sampleTypeName) + "/") != 0 - 1);
} }
function NotLeafDataManageComponent_ng_container_125_div_1_i_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 33);
} }
function NotLeafDataManageComponent_ng_container_125_div_1_i_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 34);
} }
function NotLeafDataManageComponent_ng_container_125_div_1_i_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 35);
} }
function NotLeafDataManageComponent_ng_container_125_div_1_i_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 36);
} }
function NotLeafDataManageComponent_ng_container_125_div_1_i_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 37);
} }
function NotLeafDataManageComponent_ng_container_125_div_1_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NotLeafDataManageComponent_ng_container_125_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r152 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotLeafDataManageComponent_ng_container_125_div_1_Template_img_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r152); const item_r141 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r150 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r150.toDetail(item_r141.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "ossPath");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NotLeafDataManageComponent_ng_container_125_div_1_i_3_Template, 1, 0, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NotLeafDataManageComponent_ng_container_125_div_1_i_4_Template, 1, 0, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NotLeafDataManageComponent_ng_container_125_div_1_i_5_Template, 1, 0, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NotLeafDataManageComponent_ng_container_125_div_1_i_6_Template, 1, 0, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NotLeafDataManageComponent_ng_container_125_div_1_i_7_Template, 1, 0, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NotLeafDataManageComponent_ng_container_125_div_1_div_8_Template, 11, 0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r141 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", item_r141.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", item_r141.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", item_r141.markStatusText);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 10, item_r141.ossKey), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r141.markStatus == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r141.markStatus == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r141.markStatus == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r141.markStatus == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r141.markStatus == 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r141.faceStatus == 1);
} }
function NotLeafDataManageComponent_ng_container_125_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NotLeafDataManageComponent_ng_container_125_div_1_Template, 9, 12, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r141 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r141.samplePath.indexOf((ctx_r10.titleData[10] == null ? null : ctx_r10.titleData[10].origin.data.sampleTypeName) + "/") != 0 - 1);
} }
class NotLeafDataManageComponent {
    constructor(route, http, router) {
        this.route = route;
        this.http = http;
        this.router = router;
        this.dataSet = [];
        this.titleData = [];
    }
    ngOnInit() {
        this.route.paramMap.subscribe((params) => {
            if (params.has('sampleUpId')) {
                this.sampleUpId = params.get('sampleUpId');
                this.loadInitialize();
                this.loadImage();
            }
        });
        this.loadStatInfo();
    }
    // 携带一个分类ID 去查询
    loadImage() {
        let httpParams;
        if (isNaN(+this.sampleUpId)) {
            httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().append('sampleTypeName', 'KJG');
            this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL}/v1/sample-oss-file/type/0`, { params: httpParams })
                .subscribe((result) => {
                if (_core_http_entity__WEBPACK_IMPORTED_MODULE_4__["HttpResult"].succeed(result.code)) {
                    this.dataSet = result.data;
                    this.dataSet.forEach((x) => {
                        if (x.markStatus == 0) {
                            x.markStatusText = "未标注";
                        }
                        else if (x.markStatus == 1) {
                            x.markStatusText = "已标注";
                        }
                        else if (x.markStatus == 2) {
                            x.markStatusText = "标注错误";
                        }
                        else if (x.markStatus == 3) {
                            x.markStatusText = "正确的标注(审核通过)";
                        }
                        else if (x.markStatus == 4) {
                            x.markStatusText = "客户端图片检测纠错过来的数据";
                        }
                    });
                }
            });
        }
        else {
            this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL}/v1/sample-oss-file/type/${this.sampleUpId}`)
                .subscribe((result) => {
                if (_core_http_entity__WEBPACK_IMPORTED_MODULE_4__["HttpResult"].succeed(result.code)) {
                    this.dataSet = result.data;
                    this.dataSet.forEach((x) => {
                        if (x.markStatus == 0) {
                            x.markStatusText = "未标注";
                        }
                        else if (x.markStatus == 1) {
                            x.markStatusText = "已标注";
                        }
                        else if (x.markStatus == 2) {
                            x.markStatusText = "标注错误";
                        }
                        else if (x.markStatus == 3) {
                            x.markStatusText = "正确的标注(审核通过)";
                        }
                        else if (x.markStatus == 4) {
                            x.markStatusText = "客户端图片检测纠错过来的数据";
                        }
                    });
                }
            });
        }
    }
    loadInitialize() {
        let httpParams;
        if (isNaN(+this.sampleUpId)) {
            httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().append('sampleTypeName', 'KJG');
        }
        else {
            httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().append('sampleUpId', this.sampleUpId);
        }
        this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL}/v1/sample-oss-types`, { params: httpParams })
            .subscribe((result) => {
            if (_core_http_entity__WEBPACK_IMPORTED_MODULE_4__["HttpResult"].succeed(result.code)) {
                const visibleLight = result.data.map((samples) => {
                    return new ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzTreeNode"]({
                        title: samples.data.sampleTypeName + '    ' + samples.count,
                        key: samples.data.id + '',
                        data: samples.data,
                        isLeaf: samples.data.isLeaf,
                        imageCount: samples.imageCount,
                    });
                });
                this.titleData = visibleLight;
            }
        });
    }
    loadStatInfo() {
        this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL}/v1/stat-infos/`).subscribe((result) => {
            if (_core_http_entity__WEBPACK_IMPORTED_MODULE_4__["HttpResult"].succeed(result.code)) {
                this.statInfo = result.data;
            }
        });
    }
    scrollChange(event, key) {
        const id = event.target.children[event.target.childElementCount - 1].id;
        const clientHeight = event.target.clientHeight;
        const scrollTop = event.target.scrollTop;
        const scrollHeight = event.target.scrollHeight;
        // console.log(Math.ceil(scrollTop + clientHeight) + ' ---->' + scrollHeight);
        if (Math.ceil(scrollTop + clientHeight) >= scrollHeight) {
            const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().append('typeId', key);
            this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL}/v1/sample-oss-file/${id}`, { params }).subscribe((result) => {
                if (_core_http_entity__WEBPACK_IMPORTED_MODULE_4__["HttpResult"].succeed(result.code)) {
                    result.data.map((s) => {
                        if (s.markStatus == 0) {
                            s.markStatusText = "未标注";
                        }
                        else if (s.markStatus == 1) {
                            s.markStatusText = "已标注";
                        }
                        else if (s.markStatus == 2) {
                            s.markStatusText = "标注错误";
                        }
                        else if (s.markStatus == 3) {
                            s.markStatusText = "正确的标注(审核通过)";
                        }
                        else if (s.markStatus == 4) {
                            s.markStatusText = "客户端图片检测纠错过来的数据";
                        }
                        this.dataSet.push(s);
                    });
                }
            });
        }
    }
    toDetail(imageId) {
        this.router.navigate(['../detail', { imageId }], { relativeTo: this.route });
        console.log('点击了', imageId);
    }
}
NotLeafDataManageComponent.ɵfac = function NotLeafDataManageComponent_Factory(t) { return new (t || NotLeafDataManageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
NotLeafDataManageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotLeafDataManageComponent, selectors: [["ng-component"]], decls: 126, vars: 40, consts: [[1, "flex-column", 2, "height", "100%"], [1, "analyze", "flex-row"], [1, "analyze-item"], [1, "analyze-item-title"], [1, "analyze-item-value"], [1, "analyze-item-key"], [1, "pictures", "flex-row"], [1, "picture-left", "picture-bg-y", "flex-column"], [1, "picture-left-top", "picture-bg-x", "flex-column"], [1, "picture-title"], [1, "picture-quantity"], [1, "picture-item", 3, "scroll"], [4, "ngFor", "ngForOf"], [1, "picture-left-bottom", "flex-column"], [1, "picture-right", "flex-column"], [1, "picture-right-top", "picture-bg-x", "flex-row"], [1, "picture-right-top-item", "flex-column", "picture-bg-y"], [1, "picture-right-top-item", "flex-column"], [1, "picture-right-middle", "picture-bg-x", "flex-row"], [1, "picture-right-middle-item", "flex-column", "picture-bg-y"], [1, "picture-right-middle-item", "flex-column"], [1, "picture-right-bottom", "flex-row"], [1, "picture-right-bottom-item", "flex-column", "picture-bg-y"], [1, "picture-right-bottom-item", "flex-column"], ["style", "position: relative;", 3, "id", 4, "ngIf"], [2, "position", "relative", 3, "id"], ["alt", "\u56FE\u7247", 1, "picture", 3, "src", "id", "title", "click"], ["nz-icon", "", "nzType", "clock-circle", "nzTheme", "fill", "style", "color: rgb(19, 111, 182);position: absolute;bottom: 0;right: 0;", 4, "ngIf"], ["nz-icon", "", "nzType", "minus-circle", "nzTheme", "fill", "style", "color: rgb(230, 98, 182);position: absolute;bottom: 0;right: 0;", 4, "ngIf"], ["nz-icon", "", "nzType", "info-circle", "nzTheme", "fill", "style", "color: rgb(197, 134, 17);position: absolute;bottom: 0;right: 0;", 4, "ngIf"], ["nz-icon", "", "nzType", "check-circle", "nzTheme", "fill", "style", "color: rgb(22, 187, 63);position: absolute;bottom: 0;right: 0;", 4, "ngIf"], ["nz-icon", "", "nzType", "close-circle", "nzTheme", "fill", "style", "color: red;position: absolute;bottom: 0;right: 0;", 4, "ngIf"], ["style", "color: red;position: absolute;top: -10px;left: -5px;width: 10px;height: 10px;", "title", "\u6B64\u56FE\u7247\u4E3A\u4EBA\u8138\u6A21\u677F", 4, "ngIf"], ["nz-icon", "", "nzType", "clock-circle", "nzTheme", "fill", 2, "color", "rgb(19, 111, 182)", "position", "absolute", "bottom", "0", "right", "0"], ["nz-icon", "", "nzType", "minus-circle", "nzTheme", "fill", 2, "color", "rgb(230, 98, 182)", "position", "absolute", "bottom", "0", "right", "0"], ["nz-icon", "", "nzType", "info-circle", "nzTheme", "fill", 2, "color", "rgb(197, 134, 17)", "position", "absolute", "bottom", "0", "right", "0"], ["nz-icon", "", "nzType", "check-circle", "nzTheme", "fill", 2, "color", "rgb(22, 187, 63)", "position", "absolute", "bottom", "0", "right", "0"], ["nz-icon", "", "nzType", "close-circle", "nzTheme", "fill", 2, "color", "red", "position", "absolute", "bottom", "0", "right", "0"], ["title", "\u6B64\u56FE\u7247\u4E3A\u4EBA\u8138\u6A21\u677F", 2, "color", "red", "position", "absolute", "top", "-10px", "left", "-5px", "width", "10px", "height", "10px"], ["t", "1646357872681", "viewBox", "0 0 1024 1024", "version", "1.1", "p-id", "691", "width", "20", "height", "20", 1, "icon", 2, "position", "relative", "top", "7px"], ["d", "M210.285714 320.091429c20.205714 0 36.571429 16.365714 36.571429 36.571428s-16.365714 36.571429-36.571429 36.571429-36.571429-16.365714-36.571428-36.571429 16.365714-36.571429 36.571428-36.571428m0-36.571429c-40.411429 0-73.142857 32.731429-73.142857 73.142857s32.731429 73.142857 73.142857 73.142857 73.142857-32.731429 73.142857-73.142857-32.731429-73.142857-73.142857-73.142857zM813.714286 320.091429c20.205714 0 36.571429 16.365714 36.571428 36.571428s-16.365714 36.571429-36.571428 36.571429-36.571429-16.365714-36.571429-36.571429 16.365714-36.571429 36.571429-36.571428m0-36.571429c-40.411429 0-73.142857 32.731429-73.142857 73.142857s32.731429 73.142857 73.142857 73.142857 73.142857-32.731429 73.142857-73.142857-32.731429-73.142857-73.142857-73.142857zM512 832.091429c20.205714 0 36.571429 16.365714 36.571429 36.571428s-16.365714 36.571429-36.571429 36.571429-36.571429-16.365714-36.571429-36.571429 16.365714-36.571429 36.571429-36.571428m0-36.571429c-40.411429 0-73.142857 32.731429-73.142857 73.142857s32.731429 73.142857 73.142857 73.142857 73.142857-32.731429 73.142857-73.142857-32.731429-73.142857-73.142857-73.142857z", "fill", "#248BFF", "p-id", "692"], ["d", "M301.714286 644.662857m-36.571429 0a36.571429 36.571429 0 1 0 73.142857 0 36.571429 36.571429 0 1 0-73.142857 0Z", "fill", "#B4D7FE", "p-id", "693"], ["d", "M483.474286 522.88l-173.714286-84.571429c-2.56-1.188571-5.302857-1.828571-8.045714-1.828571s-5.485714 0.64-8.045715 1.828571l-173.714285 84.571429c-6.308571 3.017143-10.24 9.417143-10.24 16.457143v210.742857c0 7.04 4.022857 13.348571 10.24 16.457143l173.714285 84.571428c2.56 1.188571 5.302857 1.828571 8.045715 1.828572s5.485714-0.64 8.045714-1.828572l173.714286-84.571428c6.217143-3.108571 10.24-9.508571 10.24-16.457143V539.337143c0-7.04-4.022857-13.44-10.24-16.457143zM457.142857 738.651429l-155.428571 75.702857-155.428572-75.702857V550.765714l155.428572-75.702857 155.428571 75.702857v187.885715z", "fill", "#248BFF", "p-id", "694"], ["d", "M228.571429 644.662857c0 40.411429 32.731429 73.142857 73.142857 73.142857s73.142857-32.731429 73.142857-73.142857-32.731429-73.142857-73.142857-73.142857-73.142857 32.731429-73.142857 73.142857z m109.714285 0c0 20.205714-16.365714 36.571429-36.571428 36.571429s-36.571429-16.365714-36.571429-36.571429 16.365714-36.571429 36.571429-36.571428 36.571429 16.457143 36.571428 36.571428z", "fill", "#248BFF", "p-id", "695"], ["d", "M722.285714 644.662857m-36.571428 0a36.571429 36.571429 0 1 0 73.142857 0 36.571429 36.571429 0 1 0-73.142857 0Z", "fill", "#B4D7FE", "p-id", "696"], ["d", "M693.76 166.308571l-173.714286-84.571428c-2.56-1.28-5.302857-1.828571-8.045714-1.828572s-5.485714 0.64-8.045714 1.828572l-173.714286 84.571428c-6.308571 3.017143-10.24 9.417143-10.24 16.457143v210.742857c0 7.04 4.022857 13.348571 10.24 16.457143l173.714286 84.571429c2.56 1.188571 5.302857 1.828571 8.045714 1.828571s5.485714-0.64 8.045714-1.828571l173.714286-84.571429c6.217143-3.108571 10.24-9.508571 10.24-16.457143V182.765714c0-7.04-4.022857-13.44-10.24-16.457143zM512 324.662857c-20.205714 0-36.571429-16.365714-36.571429-36.571428s16.365714-36.571429 36.571429-36.571429 36.571429 16.365714 36.571429 36.571429-16.365714 36.571429-36.571429 36.571428z m155.428571 57.417143l-137.142857 66.742857v-89.965714c31.542857-8.137143 54.857143-36.662857 54.857143-70.765714 0-40.411429-32.731429-73.142857-73.142857-73.142858s-73.142857 32.731429-73.142857 73.142858c0 34.102857 23.314286 62.628571 54.857143 70.765714v89.965714l-137.142857-66.742857V194.194286l155.428571-75.702857 155.428571 75.702857v187.885714z", "fill", "#248BFF", "p-id", "697"], ["d", "M512 288.091429m-36.571429 0a36.571429 36.571429 0 1 0 73.142858 0 36.571429 36.571429 0 1 0-73.142858 0Z", "fill", "#B4D7FE", "p-id", "698"], ["d", "M356.571429 630.948571c-6.308571 0-12.434286-3.291429-15.817143-9.051428-5.12-8.685714-2.102857-19.931429 6.582857-25.051429l109.714286-64c8.777143-5.12 19.931429-2.102857 25.051428 6.582857s2.102857 19.931429-6.582857 25.051429l-109.714286 64c-2.925714 1.737143-6.125714 2.468571-9.234285 2.468571z", "fill", "#248BFF", "p-id", "699"], ["d", "M904.045714 522.88l-173.714285-84.571429c-2.56-1.188571-5.302857-1.828571-8.045715-1.828571s-5.485714 0.64-8.045714 1.828571l-173.714286 84.571429c-6.308571 3.017143-10.24 9.417143-10.24 16.457143v210.742857c0 7.04 4.022857 13.348571 10.24 16.457143l173.714286 84.571428c2.56 1.188571 5.302857 1.828571 8.045714 1.828572s5.485714-0.64 8.045715-1.828572l173.714285-84.571428c6.308571-3.017143 10.24-9.417143 10.24-16.457143V539.337143c0-7.04-4.022857-13.44-10.24-16.457143zM877.714286 738.651429l-155.428572 75.702857-155.428571-75.702857V575.177143l85.12 49.645714c-1.828571 6.308571-2.834286 12.982857-2.834286 19.84 0 40.411429 32.731429 73.142857 73.142857 73.142857s73.142857-32.731429 73.142857-73.142857a73.124571 73.124571 0 0 0-125.074285-51.474286l-86.765715-50.651428L722.285714 475.062857l155.428572 75.702857v187.885715zM685.714286 644.662857c0-20.205714 16.365714-36.571429 36.571428-36.571428s36.571429 16.365714 36.571429 36.571428-16.365714 36.571429-36.571429 36.571429-36.571429-16.365714-36.571428-36.571429z", "fill", "#248BFF", "p-id", "700"]], template: function NotLeafDataManageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u7C7B \u522B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u5927\u7C7B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u5C0F\u7C7B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u6570 \u91CF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u5F20");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\u6807 \u6CE8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\u5F20");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\u6A21 \u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\u7C7B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "\u4E2A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "\u7528 \u6237");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "\u4E2A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function NotLeafDataManageComponent_Template_div_scroll_50_listener($event) { return ctx.scrollChange($event, ctx.titleData[0] == null ? null : ctx.titleData[0].origin.key); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, NotLeafDataManageComponent_ng_container_51_Template, 2, 1, "ng-container", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function NotLeafDataManageComponent_Template_div_scroll_57_listener($event) { return ctx.scrollChange($event, ctx.titleData[1] == null ? null : ctx.titleData[1].origin.key); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, NotLeafDataManageComponent_ng_container_58_Template, 2, 1, "ng-container", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function NotLeafDataManageComponent_Template_div_scroll_66_listener($event) { return ctx.scrollChange($event, ctx.titleData[2] == null ? null : ctx.titleData[2].origin.key); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](67, NotLeafDataManageComponent_ng_container_67_Template, 2, 1, "ng-container", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function NotLeafDataManageComponent_Template_div_scroll_73_listener($event) { return ctx.scrollChange($event, ctx.titleData[3] == null ? null : ctx.titleData[3].origin.key); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](74, NotLeafDataManageComponent_ng_container_74_Template, 2, 1, "ng-container", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function NotLeafDataManageComponent_Template_div_scroll_81_listener($event) { return ctx.scrollChange($event, ctx.titleData[4] == null ? null : ctx.titleData[4].origin.key); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](82, NotLeafDataManageComponent_ng_container_82_Template, 2, 1, "ng-container", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function NotLeafDataManageComponent_Template_div_scroll_88_listener($event) { return ctx.scrollChange($event, ctx.titleData[5] == null ? null : ctx.titleData[5].origin.key); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](89, NotLeafDataManageComponent_ng_container_89_Template, 2, 1, "ng-container", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function NotLeafDataManageComponent_Template_div_scroll_95_listener($event) { return ctx.scrollChange($event, ctx.titleData[6] == null ? null : ctx.titleData[6].origin.key); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](96, NotLeafDataManageComponent_ng_container_96_Template, 2, 1, "ng-container", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function NotLeafDataManageComponent_Template_div_scroll_103_listener($event) { return ctx.scrollChange($event, ctx.titleData[7] == null ? null : ctx.titleData[7].origin.key); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](104, NotLeafDataManageComponent_ng_container_104_Template, 2, 1, "ng-container", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function NotLeafDataManageComponent_Template_div_scroll_110_listener($event) { return ctx.scrollChange($event, ctx.titleData[8] == null ? null : ctx.titleData[8].origin.key); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](111, NotLeafDataManageComponent_ng_container_111_Template, 2, 1, "ng-container", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function NotLeafDataManageComponent_Template_div_scroll_117_listener($event) { return ctx.scrollChange($event, ctx.titleData[9] == null ? null : ctx.titleData[9].origin.key); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](118, NotLeafDataManageComponent_ng_container_118_Template, 2, 1, "ng-container", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function NotLeafDataManageComponent_Template_div_scroll_124_listener($event) { return ctx.scrollChange($event, ctx.titleData[10] == null ? null : ctx.titleData[10].origin.key); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](125, NotLeafDataManageComponent_ng_container_125_Template, 2, 1, "ng-container", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.statInfo == null ? null : ctx.statInfo.largeTypeNum);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.statInfo == null ? null : ctx.statInfo.smallTypeNum);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.statInfo == null ? null : ctx.statInfo.totalNum);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.statInfo == null ? null : ctx.statInfo.markNum);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.statInfo == null ? null : ctx.statInfo.modelTypeNum);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.statInfo == null ? null : ctx.statInfo.modelNum);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.statInfo == null ? null : ctx.statInfo.totalUserNum);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.titleData[0] == null ? null : ctx.titleData[0].origin.data.sampleTypeName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(\u5171", ctx.titleData[0] == null ? null : ctx.titleData[0].origin.imageCount, "\u4E2A)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.dataSet);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.titleData[1] == null ? null : ctx.titleData[1].origin.data.sampleTypeName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(\u5171", ctx.titleData[1] == null ? null : ctx.titleData[1].origin.imageCount, "\u4E2A)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.dataSet);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.titleData[2] == null ? null : ctx.titleData[2].origin.data.sampleTypeName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(\u5171", ctx.titleData[2] == null ? null : ctx.titleData[2].origin.imageCount, "\u4E2A)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.dataSet);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.titleData[3] == null ? null : ctx.titleData[3].origin.data.sampleTypeName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(\u5171", ctx.titleData[3] == null ? null : ctx.titleData[3].origin.imageCount, "\u4E2A)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.dataSet);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.titleData[4] == null ? null : ctx.titleData[4].origin.data.sampleTypeName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(\u5171", ctx.titleData[4] == null ? null : ctx.titleData[4].origin.imageCount, "\u4E2A)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.dataSet);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.titleData[5] == null ? null : ctx.titleData[5].origin.data.sampleTypeName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(\u5171", ctx.titleData[5] == null ? null : ctx.titleData[5].origin.imageCount, "\u4E2A)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.dataSet);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.titleData[6] == null ? null : ctx.titleData[6].origin.data.sampleTypeName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(\u5171", ctx.titleData[6] == null ? null : ctx.titleData[6].origin.imageCount, "\u4E2A)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.dataSet);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.titleData[7] == null ? null : ctx.titleData[7].origin.data.sampleTypeName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(\u5171", ctx.titleData[7] == null ? null : ctx.titleData[7].origin.imageCount, "\u4E2A)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.dataSet);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.titleData[8] == null ? null : ctx.titleData[8].origin.data.sampleTypeName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(\u5171", ctx.titleData[8] == null ? null : ctx.titleData[8].origin.imageCount, "\u4E2A)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.dataSet);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.titleData[9] == null ? null : ctx.titleData[9].origin.data.sampleTypeName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(\u5171", ctx.titleData[9] == null ? null : ctx.titleData[9].origin.imageCount, "\u4E2A)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.dataSet);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.titleData[10] == null ? null : ctx.titleData[10].origin.data.sampleTypeName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(\u5171", ctx.titleData[10] == null ? null : ctx.titleData[10].origin.imageCount, "\u4E2A)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.dataSet);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__["NzIconDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__["ɵNzTransitionPatchDirective"]], pipes: [_core_app_common_pipes__WEBPACK_IMPORTED_MODULE_9__["OssPathPipe"]], styles: [".analyze-item-title[_ngcontent-%COMP%] {\n  font-size: 30px;\n  font-weight: bold;\n  color: #ffffff;\n  width: 220px;\n  line-height: 44px;\n}\n.analyze-item-value[_ngcontent-%COMP%] {\n  font-size: 35px;\n  color: #eea200;\n  line-height: 88px;\n  height: 88px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGF0YS1tYW5hZ2Uvbm90LWxlYWYvRDovZmYvdGFyZ2V0LXJlY29nbml6ZS1tZ3ItaHRtbC1WMC4yL3NyYy9hcHAvcGFnZXMvZGF0YS1tYW5hZ2Uvbm90LWxlYWYvbm90LWxlYWYuZGF0YS1tYW5hZ2UuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL3BhZ2VzL2RhdGEtbWFuYWdlL25vdC1sZWFmL25vdC1sZWFmLmRhdGEtbWFuYWdlLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFFQSxpQkFBQTtBQ0FGO0FES0E7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ0hGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZGF0YS1tYW5hZ2Uvbm90LWxlYWYvbm90LWxlYWYuZGF0YS1tYW5hZ2UuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYW5hbHl6ZS1pdGVtLXRpdGxlIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHdpZHRoOiAyMjBweDtcbiAgLy9oZWlnaHQ6IDQ0cHg7XG4gIGxpbmUtaGVpZ2h0OiA0NHB4O1xuICAvL2hlaWdodDogMTIwcHg7XG4gIC8vYmFja2dyb3VuZC1jb2xvcjogIzY1Q0FGRjtcbn1cblxuLmFuYWx5emUtaXRlbS12YWx1ZSB7XG4gIGZvbnQtc2l6ZTogMzVweDtcbiAgY29sb3I6ICNlZWEyMDA7XG4gIGxpbmUtaGVpZ2h0OiA4OHB4O1xuICBoZWlnaHQ6IDg4cHg7XG59XG4iLCIuYW5hbHl6ZS1pdGVtLXRpdGxlIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHdpZHRoOiAyMjBweDtcbiAgbGluZS1oZWlnaHQ6IDQ0cHg7XG59XG4uYW5hbHl6ZS1pdGVtLXZhbHVlIHtcbiAgZm9udC1zaXplOiAzNXB4O1xuICBjb2xvcjogI2VlYTIwMDtcbiAgbGluZS1oZWlnaHQ6IDg4cHg7XG4gIGhlaWdodDogODhweDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotLeafDataManageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './not-leaf.data-manage.component.html',
                styleUrls: ['./not-leaf.data-manage.component.less']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/data-manage/rename-sample-type.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/data-manage/rename-sample-type.component.ts ***!
  \*******************************************************************/
/*! exports provided: RenameSampleTypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenameSampleTypeComponent", function() { return RenameSampleTypeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd.js");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/grid */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-grid.js");







class RenameSampleTypeComponent {
    constructor(http, fb) {
        this.http = http;
        this.fb = fb;
    }
    ngOnInit() {
        this.buildForm();
    }
    buildForm() {
        this.addForm = this.fb.group({
            sampleTypeName: [this.sampleTypeName, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(45)]],
        });
    }
    getNewName() {
        for (const i in this.addForm.controls) {
            this.addForm.controls[i].markAsDirty();
            this.addForm.controls[i].updateValueAndValidity();
        }
        if (this.addForm.valid) {
            return this.addForm.value.sampleTypeName;
        }
        return null;
    }
}
RenameSampleTypeComponent.ɵfac = function RenameSampleTypeComponent_Factory(t) { return new (t || RenameSampleTypeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
RenameSampleTypeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RenameSampleTypeComponent, selectors: [["ng-component"]], inputs: { sampleTypeName: "sampleTypeName" }, decls: 7, vars: 5, consts: [["nz-form", "", 3, "formGroup"], ["nzRequired", "", "nzFor", "sampleTypeName", 3, "nzXl", "nzMd"], [3, "nzXl", "nzMd"], ["nz-input", "", "formControlName", "sampleTypeName", "name", "sampleTypeName"]], template: function RenameSampleTypeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nz-form-label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " \u5206\u7C7B\u540D\u79F0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nz-form-control", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.addForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzXl", 6)("nzMd", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzXl", 16)("nzMd", 16);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzFormDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_4__["NzRowDirective"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzFormItemComponent"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_4__["NzColDirective"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzFormLabelComponent"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzFormControlComponent"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RhdGEtbWFuYWdlL3JlbmFtZS1zYW1wbGUtdHlwZS5jb21wb25lbnQubGVzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RenameSampleTypeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './rename-sample-type.component.html',
                styleUrls: ['./rename-sample-type.component.less']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, { sampleTypeName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=data-manage-data-manage-module.js.map