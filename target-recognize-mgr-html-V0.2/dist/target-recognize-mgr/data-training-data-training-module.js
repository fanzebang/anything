(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["data-training-data-training-module"],{

/***/ "./src/app/pages/data-training/add-training.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/data-training/add-training.component.ts ***!
  \***************************************************************/
/*! exports provided: AddTrainingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTrainingComponent", function() { return AddTrainingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _core_http_entity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/http-entity */ "./src/app/core/http-entity.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd.js");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/grid */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-grid.js");









const _c0 = ["sampleTreeSelect"];
const _c1 = function () { return { "max-height": "300px" }; };
class AddTrainingComponent {
    constructor(fb, http, nzModalRef, msg) {
        this.fb = fb;
        this.http = http;
        this.nzModalRef = nzModalRef;
        this.msg = msg;
        this.nodes = [];
    }
    ngOnInit() {
        this.validateForm = this.fb.group({
            taskName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            taskDetail: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            taskPattern: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            normModel: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            taskMode: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            sampleCategory: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
        });
        this.initSampleTree();
    }
    initSampleTree() {
        this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API_URL}/v1/sample-oss-types`).subscribe((result) => {
            if (_core_http_entity__WEBPACK_IMPORTED_MODULE_3__["HttpResult"].succeed(result.code)) {
                const nodes = result.data.map((data) => {
                    return {
                        title: data.data.sampleTypeName,
                        value: data.data.id + '',
                        key: data.data.id + '',
                        isLeaf: data.isLeaf
                    };
                });
                this.nodes = nodes;
                if (this.trainId) {
                    this.loadTrain(this.trainId);
                }
            }
        });
    }
    checkTreePath(sampleUpId, sampleOssTypeStack) {
        this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API_URL}/v1/sample-oss-types/${sampleUpId}`).subscribe((result) => {
            if (_core_http_entity__WEBPACK_IMPORTED_MODULE_3__["HttpResult"].succeed(result.code)) {
                if (result.data.sampleUpId) { // 如果sampleUpId是null，则表示已经到了顶级了
                    // 还有上一级
                    sampleOssTypeStack.unshift(result.data); // 将当前分类插入到数组第一个位置
                    this.checkTreePath(result.data.sampleUpId + '', sampleOssTypeStack);
                }
                else {
                    // 没有上一级了
                    const rootNodes = this.nzTreeSelectComponent.getTreeNodes();
                    if (sampleOssTypeStack.length > 0) {
                        for (let i = 0; i < rootNodes.length; i++) {
                            if (+rootNodes[i].key == result.data.id) {
                                this.fillTreePathNode(rootNodes[i], sampleOssTypeStack, 0);
                                break;
                            }
                        }
                    }
                    else {
                        for (let i = 0; i < rootNodes.length; i++) {
                            if (+rootNodes[i].key == result.data.id) {
                                rootNodes[i].isChecked = true;
                                this.patchForm();
                                break;
                            }
                        }
                    }
                }
            }
        });
    }
    fillTreePathNode(parentNode, sampleOssTypeStack, idx) {
        if (idx < sampleOssTypeStack.length) {
            const targetSampleType = sampleOssTypeStack[idx];
            if (parentNode.children.length == 0) {
                const isHalfChecked = idx < sampleOssTypeStack.length - 1;
                const isChecked = idx == sampleOssTypeStack.length - 1;
                this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API_URL}/v1/sample-oss-types`, {
                    params: {
                        sampleUpId: parentNode.key
                    }
                }).subscribe((result) => {
                    if (_core_http_entity__WEBPACK_IMPORTED_MODULE_3__["HttpResult"].succeed(result.code)) {
                        const childrenNodes = result.data.map(data => {
                            return {
                                title: data.data.sampleTypeName,
                                value: data.data.id + '',
                                key: data.data.id + '',
                                isLeaf: data.isLeaf,
                                isHalfChecked: isHalfChecked,
                                isChecked: isChecked
                            };
                        });
                        parentNode.addChildren(childrenNodes);
                        console.log('parentNode is :', parentNode);
                        for (let i = 0; i < parentNode.children.length; i++) {
                            if (+parentNode.children[i].key == targetSampleType.id) {
                                this.fillTreePathNode(parentNode.children[i], sampleOssTypeStack, idx + 1);
                                this.patchForm();
                                break;
                            }
                        }
                    }
                });
            }
            else {
                for (let i = 0; i < parentNode.children.length; i++) {
                    if (+parentNode.children[i].key == targetSampleType.id) {
                        this.fillTreePathNode(parentNode.children[i], sampleOssTypeStack, idx + 1);
                        this.patchForm();
                        break;
                    }
                }
            }
        }
    }
    submitForm() {
        for (const i in this.validateForm.controls) {
            this.validateForm.controls[i].markAsDirty();
            this.validateForm.controls[i].updateValueAndValidity();
        }
        if (!this.validateForm.valid) {
            this.nzModalRef.updateConfig({
                nzOkLoading: true
            });
            const formValue = this.validateForm.value;
            let sampleIds = formValue.sampleCategory.join(',');
            if (this.trainId) {
                // 修改
                this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API_URL}/v1/data_train`, {
                    id: this.trainId,
                    taskName: formValue.taskName,
                    taskPattern: formValue.taskPattern,
                    normModel: formValue.normModel,
                    taskMode: formValue.taskMode,
                    taskSampleType: sampleIds
                }).subscribe((result) => {
                    if (_core_http_entity__WEBPACK_IMPORTED_MODULE_3__["HttpResult"].succeed(result.code)) {
                        this.msg.success('新增成功');
                        this.nzModalRef.close('1');
                    }
                    else {
                        this.msg.error(result.message);
                        this.nzModalRef.updateConfig({
                            nzOkLoading: false
                        });
                    }
                });
            }
            else {
                // 新增
                this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API_URL}/v1/data_train`, {
                    taskName: formValue.taskName,
                    taskPattern: formValue.taskPattern,
                    normModel: formValue.normModel,
                    taskMode: formValue.taskMode,
                    taskSampleType: sampleIds
                }).subscribe((result) => {
                    if (_core_http_entity__WEBPACK_IMPORTED_MODULE_3__["HttpResult"].succeed(result.code)) {
                        this.msg.success('新增成功');
                        this.nzModalRef.close('1');
                    }
                    else {
                        console.log(result);
                        this.msg.error(result.message);
                        this.nzModalRef.updateConfig({
                            nzOkLoading: false
                        });
                    }
                });
            }
        }
    }
    onExpandChange(event) {
        console.log(event);
        if (event.eventName === 'expand') {
            if (event.node.getChildren().length === 0 && event.node.isExpanded) {
                this.loadNode(event.node.key).subscribe(result => {
                    if (_core_http_entity__WEBPACK_IMPORTED_MODULE_3__["HttpResult"].succeed(result.code)) {
                        const childrenNodes = result.data.map((data) => {
                            return {
                                title: data.data.sampleTypeName,
                                value: data.data.id + '',
                                key: data.data.id + '',
                                isLeaf: data.isLeaf
                            };
                        });
                        event.node.addChildren(childrenNodes);
                    }
                });
            }
        }
    }
    loadNode(key) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API_URL}/v1/sample-oss-types`, {
            params: {
                sampleUpId: key
            }
        });
    }
    loadTrain(id) {
        this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API_URL}/v1/data_train/${id}`).subscribe((result) => {
            if (_core_http_entity__WEBPACK_IMPORTED_MODULE_3__["HttpResult"].succeed(result.code)) {
                this.dataTrain = result.data;
                // 需要回填树形数据
                const taskSampleType = this.dataTrain.taskSampleType.split(',');
                // this.validateForm.patchValue({
                //   taskName: this.dataTrain.taskName,
                //   taskPattern: this.dataTrain.taskPattern,
                //   normModel: this.dataTrain.normModel,
                //   taskMode: this.dataTrain.taskMode,
                //   sampleCategory: taskSampleType
                // });
                taskSampleType.forEach(sampleId => {
                    this.checkTreePath(sampleId, []);
                });
            }
        });
    }
    patchForm() {
        this.validateForm.patchValue({
            taskName: this.dataTrain.taskName,
            taskDetail: this.dataTrain.taskDetail,
            taskPattern: this.dataTrain.taskPattern,
            normModel: this.dataTrain.normModel,
            taskMode: this.dataTrain.taskMode,
            sampleCategory: this.dataTrain.taskSampleType.split(',')
        });
    }
}
AddTrainingComponent.ɵfac = function AddTrainingComponent_Factory(t) { return new (t || AddTrainingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzModalRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzMessageService"])); };
AddTrainingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddTrainingComponent, selectors: [["ng-component"]], viewQuery: function AddTrainingComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.nzTreeSelectComponent = _t.first);
    } }, inputs: { trainId: "trainId" }, decls: 34, vars: 28, consts: [["nz-form", "", 3, "formGroup", "ngSubmit"], ["nzSm", "6", 3, "nzXs"], ["nzErrorTip", "\u8BF7\u586B\u5199\u4EFB\u52A1\u540D\u79F0!", 3, "nzSm", "nzXs"], ["formControlName", "taskName", "nz-input", ""], ["nzErrorTip", "\u8BF7\u586B\u5199\u6A21\u578B\u8BF4\u660E!", 3, "nzSm", "nzXs"], ["formControlName", "taskPattern", "nz-input", "", "id", "taskPattern", "name", "taskPattern", "maxlength", "400"], ["nzErrorTip", "\u8BF7\u9009\u62E9\u57FA\u51C6\u6A21\u578B!", 3, "nzSm", "nzXs"], ["formControlName", "normModel"], ["nzLabel", "\u9AD8\u7CBE\u5EA6", 3, "nzValue"], ["nzLabel", "\u4F4E\u65F6\u5EF6", 3, "nzValue"], ["nzLabel", "\u5E73\u8861", 3, "nzValue"], ["nzLabel", "\u8FB9\u7F18", 3, "nzValue"], ["nzLabel", "\u7EC8\u7AEF", 3, "nzValue"], ["formControlName", "taskMode"], ["nzLabel", "\u589E\u91CF\u8BAD\u7EC3", 3, "nzValue"], ["nzLabel", "\u91CD\u65B0\u8BAD\u7EC3", 3, "nzValue"], ["formControlName", "sampleCategory", "nzCheckable", "", 2, "width", "275px", 3, "nzNodes", "nzDropdownMatchSelectWidth", "nzDropdownStyle", "nzAsyncData", "nzExpandChange"], ["sampleTreeSelect", ""]], template: function AddTrainingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddTrainingComponent_Template_form_ngSubmit_0_listener() { return ctx.submitForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-form-label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u4EFB\u52A1\u540D\u79F0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nz-form-control", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nz-form-label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u6A21\u578B\u8BF4\u660E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nz-form-control", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "nz-form-label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u5E94\u7528\u573A\u666F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "nz-form-control", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "nz-select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "nz-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "nz-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "nz-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "nz-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "nz-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "nz-form-label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u4EFB\u52A1\u65B9\u5F0F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "nz-form-control", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "nz-select", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "nz-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "nz-option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "nz-form-label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\u7C7B\u522B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "nz-form-control", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "nz-tree-select", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzExpandChange", function AddTrainingComponent_Template_nz_tree_select_nzExpandChange_32_listener($event) { return ctx.onExpandChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.validateForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 14)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 14)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 14)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 14)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 14)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzNodes", ctx.nodes)("nzDropdownMatchSelectWidth", true)("nzDropdownStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](27, _c1))("nzAsyncData", true);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzFormDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__["NzRowDirective"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzFormItemComponent"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__["NzColDirective"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzFormLabelComponent"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzFormControlComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzSelectComponent"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzOptionComponent"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzTreeSelectComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtdHJhaW5pbmcuY29tcG9uZW50Lmxlc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddTrainingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './add-training.component.html',
                styleUrls: ['./add-training.component.less']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }, { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzModalRef"] }, { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzMessageService"] }]; }, { trainId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzTreeSelectComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['sampleTreeSelect', { static: false }]
        }] }); })();
class TrainSelectedSample {
}


/***/ }),

/***/ "./src/app/pages/data-training/data-train.pipes.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/data-training/data-train.pipes.ts ***!
  \*********************************************************/
/*! exports provided: DataTrainPipes, DataTaskPatternPipes, DataTaskStatusPipes, DataTaskProgressPipes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTrainPipes", function() { return DataTrainPipes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTaskPatternPipes", function() { return DataTaskPatternPipes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTaskStatusPipes", function() { return DataTaskStatusPipes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTaskProgressPipes", function() { return DataTaskProgressPipes; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class DataTrainPipes {
    transform(taskMode) {
        // 1增量训练，2重新训练
        if (taskMode === 1) {
            return '增量训练';
        }
        else {
            return '重新训练';
        }
    }
}
DataTrainPipes.ɵfac = function DataTrainPipes_Factory(t) { return new (t || DataTrainPipes)(); };
DataTrainPipes.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "trainTaskMode", type: DataTrainPipes, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTrainPipes, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'trainTaskMode' }]
    }], null, null); })();
class DataTaskPatternPipes {
    transform(taskPattern) {
        if (taskPattern === 1) {
            return '手动训练';
        }
        else {
            return '自动训练';
        }
    }
}
DataTaskPatternPipes.ɵfac = function DataTaskPatternPipes_Factory(t) { return new (t || DataTaskPatternPipes)(); };
DataTaskPatternPipes.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "taskPattern", type: DataTaskPatternPipes, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTaskPatternPipes, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'taskPattern' }]
    }], null, null); })();
class DataTaskStatusPipes {
    transform(taskStatus) {
        // 0正在训练/1暂停训练/2训练完成/3 强制结束
        if (taskStatus === -1) {
            return '正在排队';
        }
        else if (taskStatus === 0) {
            return '正在训练';
        }
        else if (taskStatus === 1) {
            return '暂停训练';
        }
        else if (taskStatus === 2) {
            return '训练完成';
        }
        else if (taskStatus === 3) {
            return '强制结束';
        }
    }
}
DataTaskStatusPipes.ɵfac = function DataTaskStatusPipes_Factory(t) { return new (t || DataTaskStatusPipes)(); };
DataTaskStatusPipes.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "taskStatus", type: DataTaskStatusPipes, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTaskStatusPipes, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'taskStatus' }]
    }], null, null); })();
class DataTaskProgressPipes {
    transform(taskProgress) {
        if (!isNaN(+taskProgress)) {
            return +taskProgress * 100;
        }
        else {
            return 0;
        }
    }
}
DataTaskProgressPipes.ɵfac = function DataTaskProgressPipes_Factory(t) { return new (t || DataTaskProgressPipes)(); };
DataTaskProgressPipes.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "taskProgress", type: DataTaskProgressPipes, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTaskProgressPipes, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'taskProgress' }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/data-training/data-training-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/data-training/data-training-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: DataTrainingRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTrainingRoutingModule", function() { return DataTrainingRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _data_training_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data-training.component */ "./src/app/pages/data-training/data-training.component.ts");





class DataTrainingRoutingModule {
}
DataTrainingRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DataTrainingRoutingModule });
DataTrainingRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DataTrainingRoutingModule_Factory(t) { return new (t || DataTrainingRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                {
                    path: '', component: _data_training_component__WEBPACK_IMPORTED_MODULE_2__["DataTrainingComponent"]
                }
            ])], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DataTrainingRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTrainingRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                        {
                            path: '', component: _data_training_component__WEBPACK_IMPORTED_MODULE_2__["DataTrainingComponent"]
                        }
                    ])],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/data-training/data-training.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/data-training/data-training.component.ts ***!
  \****************************************************************/
/*! exports provided: DataTrainingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTrainingComponent", function() { return DataTrainingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _add_training_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-training.component */ "./src/app/pages/data-training/add-training.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var src_app_core_http_entity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/http-entity */ "./src/app/core/http-entity.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var echarts_map_js_china_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! echarts/map/js/china.js */ "./node_modules/echarts/map/js/china.js");
/* harmony import */ var echarts_map_js_china_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(echarts_map_js_china_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/icon */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-icon.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _data_train_pipes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./data-train.pipes */ "./src/app/pages/data-training/data-train.pipes.ts");





// import * as echarts from 'echarts';
// import {ECharts} from "echarts";
// import 'echarts/dist/extension/bmap.min.js';









function DataTrainingComponent_div_1_tr_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r19.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r19.age);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r19.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r19.address);
} }
function DataTrainingComponent_div_1_tr_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r20.name);
} }
function DataTrainingComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u6BD4\u5BF9\u7ED3\u679C ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataTrainingComponent_div_1_Template_i_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.handleCancel1(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u6A21\u578B\u7CBE\u5EA6\u66F2\u7EBF");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "nz-table", 39, 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\u8BAD\u7EC3\u7248\u672C");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u8BAD\u7EC3\u7CBE\u5EA6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Loss\u503C");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\u6570\u636E\u603B\u6570");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, DataTrainingComponent_div_1_tr_29_Template, 9, 4, "tr", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "\u5206\u7C7B\u6570\u636E\u8BE6\u60C5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "nz-table", 43, 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "test1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "test2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "test3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "test4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, DataTrainingComponent_div_1_tr_52_Template, 3, 1, "tr", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzData", ctx_r0.complarelistOfData1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _r13.data);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzData", ctx_r0.complarelistOfData2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _r13.data);
} }
function DataTrainingComponent_div_2_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r24, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function DataTrainingComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataTrainingComponent_div_2_Template_i_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.handleCancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nz-tabset", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzSelectChange", function DataTrainingComponent_div_2_Template_nz_tabset_nzSelectChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r27.tabChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nz-tab", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h2", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u8BC4\u4EF7\u6837\u672C\u5E93\u4E2D\u7684\u8BC6\u522B\u9519\u8BEF");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, DataTrainingComponent_div_2_div_13_Template, 2, 1, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "nz-tab", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u6D4B\u8BD5: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u6A21\u578B\u7CBE\u5EA6\uFF1A", ctx_r1.precision, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.jdcurver);
} }
function DataTrainingComponent_ng_container_14_nz_option_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-option", 65);
} if (rf & 2) {
    const item_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", item_r29)("nzLabel", item_r29);
} }
function DataTrainingComponent_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-select", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DataTrainingComponent_ng_container_14_Template_nz_select_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r30.selectData = $event; })("ngModelChange", function DataTrainingComponent_ng_container_14_Template_nz_select_ngModelChange_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r32.ngModelChange(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DataTrainingComponent_ng_container_14_nz_option_2_Template, 1, 2, "nz-option", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.selectData);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.selectList);
} }
function DataTrainingComponent_ng_container_15_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataTrainingComponent_ng_container_15_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r33.endTask(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u6682\u505C");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function DataTrainingComponent_ng_container_16_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataTrainingComponent_ng_container_16_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r35.startCompare(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u5F00\u59CB\u5BF9\u6BD4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function DataTrainingComponent_ng_container_17_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataTrainingComponent_ng_container_17_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r37.trainResume(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u7EE7\u7EED\u8BAD\u7EC3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function DataTrainingComponent_button_20_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataTrainingComponent_button_20_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r39.addTask(0); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u65B0\u5EFA\u4EFB\u52A1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DataTrainingComponent_th_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u64CD\u4F5C");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DataTrainingComponent_th_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u53D1\u5E03");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DataTrainingComponent_tr_42_td_18_Template(rf, ctx) { if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataTrainingComponent_tr_42_td_18_Template_button_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const data_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r45.checkModelPrecision($event, data_r41); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u6A21\u578B\u7CBE\u5EA6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DataTrainingComponent_tr_42_td_19_Template(rf, ctx) { if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataTrainingComponent_tr_42_td_19_Template_button_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49); const data_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r48.download($event, data_r41); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u4E0B\u8F7D");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DataTrainingComponent_tr_42_Template(rf, ctx) { if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataTrainingComponent_tr_42_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52); const data_r41 = ctx.$implicit; const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r51.tableClick(data_r41.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzCheckedChange", function DataTrainingComponent_tr_42_Template_td_nzCheckedChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52); const data_r41 = ctx.$implicit; const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return (ctx_r53.mapOfCheckedId[data_r41.id] = $event); })("nzCheckedChange", function DataTrainingComponent_tr_42_Template_td_nzCheckedChange_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52); const ids_r42 = ctx.index; const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r54.refreshStatus(ids_r42); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "trainTaskMode");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "taskPattern");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "taskStatus");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, DataTrainingComponent_tr_42_td_18_Template, 3, 0, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, DataTrainingComponent_tr_42_td_19_Template, 3, 0, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r41 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("current-row", (ctx_r10.dataTrain == null ? null : ctx_r10.dataTrain.id) === data_r41.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzChecked", ctx_r10.mapOfCheckedId[data_r41.id]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r41.taskName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r41.typeSourceName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 11, data_r41.taskMode));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 13, data_r41.taskPattern));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 15, data_r41.taskStatus));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](17, 17, data_r41.createdTime, "yyyy-MM-dd HH:mm:ss"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.flag === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.flag === 1);
} }
function DataTrainingComponent_ng_container_43_Template(rf, ctx) { if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u4EFB\u52A1\u8FDB\u5EA6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "nz-progress", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "taskProgress");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u8BE6\u7EC6\u4FE1\u606F");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u4EFB\u52A1\u540D\u79F0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u4EFB\u52A1\u8BF4\u660E");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\u7C7B\u522B");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\u5E94\u7528\u573A\u666F");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\u4EFB\u52A1\u6A21\u5F0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](37, "taskPattern");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "\u89E6\u53D1\u6761\u4EF6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "\u6BCF\u65E5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "\u4EFB\u52A1\u65B9\u5F0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](48, "trainTaskMode");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataTrainingComponent_ng_container_43_Template_button_click_49_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r56); const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r55.addTask(ctx_r55.dataTrain.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "\u7F16\u8F91");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzPercent", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 7, ctx_r11.dataTrain == null ? null : ctx_r11.dataTrain.taskProgress));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r11.dataTrain == null ? null : ctx_r11.dataTrain.taskName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r11.dataTrain == null ? null : ctx_r11.dataTrain.taskPattern);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r11.dataTrain == null ? null : ctx_r11.dataTrain.typeSourceName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r11.dataTrain == null ? null : ctx_r11.dataTrain.taskModeName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](37, 9, ctx_r11.dataTrain == null ? null : ctx_r11.dataTrain.taskPattern));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](48, 11, ctx_r11.dataTrain == null ? null : ctx_r11.dataTrain.taskMode));
} }
function DataTrainingComponent_div_49_Template(rf, ctx) { if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataTrainingComponent_div_49_Template_i_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59); const cdt_r57 = ctx.$implicit; const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r58.removeCompareItem(cdt_r57); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cdt_r57 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cdt_r57.compareName);
} }
class DataTrainingComponent {
    constructor(nzModal, http, nzMessage) {
        this.nzModal = nzModal;
        this.http = http;
        this.nzMessage = nzMessage;
        this.showCompare = false;
        this.tabIndex = 0;
        this.flag = 0;
        this.pageIndex = 1;
        this.pageSize = 10;
        this.dataTotal = 0;
        this.isVisible = false;
        this.isVisible1 = false;
        this.listOfData = [];
        this.mapOfCheckedId = {};
        this.status = 'STATUS';
        this.compareDisplay = false;
        this.rightComponent = false;
        // listOfData = [{
        //   taskName: 'Minie Ford',
        //   taskPattern: '自动',
        //   source: '可见光',
        //   taskMode: '增量训练',
        //   progress: '40%',
        //   startTime: '2018-06-23 15:36'
        // }, {
        //   taskName: 'Minie Ford',
        //   taskPattern: '自动',
        //   source: '可见光',
        //   taskMode: '增量训练',
        //   progress: '40%',
        //   startTime: '2018-06-23 15:36'
        // }, {
        //   taskName: 'Minie Ford',
        //   taskPattern: '自动',
        //   source: '可见光',
        //   taskMode: '增量训练',
        //   progress: '40%',
        //   startTime: '2018-06-23 15:36'
        // }];
        this.checked = false;
        this.indeterminate = false;
        this.setOfCheckedId = new Set();
        this.isAllDisplayDataChecked = false;
        this.isIndeterminate = false;
        this.numberOfChecked = 0;
        this.jdcurver = [];
        this.csPic = [];
        this.selectList = ["全部"];
        this.selectData = "全部";
        this.comparingDataTrainList = [];
    }
    onItemChecked(id, checked) {
        // this.updateCheckedSet(id, checked);
        // this.refreshCheckedStatus();
    }
    checkAll(value) {
        this.listOfData.forEach(d => (this.mapOfCheckedId[String(d.id)] = value));
        this.refreshStatus();
    }
    refreshStatus() {
        // if(arguments[0])
        // console.log(typeof arguments)
        this.isAllDisplayDataChecked = this.listOfData
            .every(item => this.mapOfCheckedId[String(item.id)]);
        this.isIndeterminate =
            this.listOfData.some(item => this.mapOfCheckedId[String(item.id)]) &&
                !this.isAllDisplayDataChecked;
        this.numberOfChecked = this.listOfData.filter(item => this.mapOfCheckedId[String(item.id)]).length;
    }
    ngOnInit() {
        this.loadTraining();
    }
    // addTask() {
    //   this.nzModal.create({
    //     nzTitle: '创建任务',
    //     nzContent: AddTrainingComponent,
    //     nzOkText: '提交请求',
    //     nzOnOk: (addComponent: AddTrainingComponent) => {
    //       addComponent.submitForm();
    //       return false;
    //     }
    //   });
    // }
    ngAfterViewInit() {
        //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
        //Add 'implements AfterViewInit' to the class.
        this.intervalLoadTraining = setInterval(() => {
            this.loadTraining();
        }, 1000 * 60);
    }
    ngOnDestroy() {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        clearInterval(this.intervalLoadTraining);
    }
    download(e, data) {
        axios__WEBPACK_IMPORTED_MODULE_6___default.a.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_URL}/v1/data_train/queryById?id=${data.id}`, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('Bearer'),
                'TR-Role': 'TR-User'
            }
        })
            .then((result) => {
            var result = result.data.data;
            window.open(result.trainUrl, "_blank");
        });
    }
    fileChange() {
        console.log(1111);
        var file = $("#imgInput")[0].files;
        var formData = new FormData();
        $.each(file, function (i, n) {
            let file2 = new window.File([n], n.name, { type: n.type });
            formData.append("files", file2);
        });
        var id = $(this).attr("data");
        formData.append("id", id);
        $("body").append('<div style="width: 100%;height: 100%;background: #15132d99;position: absolute;top:0;left:0;z-index:99999" id="loding"><div style="width:30px;height:30px;position: absolute;left:50%;top:50%"><img src="assets/images/loading.gif"></div></div>');
        axios__WEBPACK_IMPORTED_MODULE_6___default.a.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_URL}/v1/data_train/testModel`, formData, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('Bearer'),
                'TR-Role': 'TR-User'
            }
        })
            .then((result) => {
            $("#loding").remove();
            if (result.data.message == "测试失败") {
                alert(result.data.message);
            }
            else {
                if (result.data.code == 1) {
                    var imgData = JSON.parse(result.data.data);
                    $.each(imgData, function (i, n) {
                        $("#image-list1").append(`<div class="cover"><img src="${n}" alt=""></div>`);
                    });
                }
            }
            $("#imgInput").val("");
        });
    }
    tabChange(e) {
        var that = this;
        if (e.index == 1) {
            $('.image-list1').on('click', '.cover', function () {
                var this_ = $(this);
                var images = this_.parents('.image-list1').find('.cover');
                var imagesArr = new Array();
                $.each(images, function (i, image) {
                    imagesArr.push($(image).children('img').attr('src'));
                });
                $.pictureViewer({
                    images: imagesArr,
                    initImageIndex: this_.index() + 1,
                    scrollSwitch: true //是否使用鼠标滚轮切换图片，默认false
                });
            });
            $("#imgInput").attr("data", that.listData.id);
            $("#imgInput").on("change", that.fileChange);
        }
        else {
            that.fileChange = null;
        }
    }
    loadTraining() {
        let params;
        //不分页
        if (this.status === 'END') {
            params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().append('status', this.status).append('isOver', 'true');
        }
        else if (this.status === 'STATUS') {
            params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().append('status', this.status);
        }
        else {
            params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().append('status', this.status);
        }
        this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_URL}/v1/data_train/`, { params }).subscribe((result) => {
            if (src_app_core_http_entity__WEBPACK_IMPORTED_MODULE_3__["HttpResult"].succeed(result.code)) {
                this.listOfData = result.data.records;
                this.dataTotal = result.data.total;
                this.pageIndex = result.data.current;
                if (this.status != 'LINE_UP' && this.status != 'STATUS') {
                    this.loadSelectData(this.listOfData);
                }
            }
        });
    }
    loadSelectData(listOfData) {
        for (let index = 0; index < listOfData.length; index++) {
            const element = listOfData[index];
            this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_URL}/v1/sample-oss-types/${element.taskSampleType}`).subscribe((result) => {
                if (src_app_core_http_entity__WEBPACK_IMPORTED_MODULE_3__["HttpResult"].succeed(result.code)) {
                    this.selectList.push(result.data.sampleTypeName);
                }
            });
        }
    }
    // 暂停
    endTask() {
        const checkedCameraIds = [];
        for (const k in this.mapOfCheckedId) {
            if (this.mapOfCheckedId[k]) {
                checkedCameraIds.push(k);
            }
        }
        if (checkedCameraIds.length < 1) {
            this.nzMessage.error('最少勾选一项');
            return;
        }
        const controllerIds = checkedCameraIds.join(',');
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().append('ids', controllerIds);
        this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_URL}/v1/data_train/endTask`, null, { params }).subscribe((result) => {
            if (result.code) {
                this.checkAll(false);
                this.nzMessage.success('暂停成功');
                this.loadTraining();
            }
            else {
                this.nzMessage.error(result.message);
            }
        });
    }
    delete() {
        const checkedCameraIds = [];
        for (const k in this.mapOfCheckedId) {
            if (this.mapOfCheckedId[k]) {
                checkedCameraIds.push(k);
            }
        }
        if (checkedCameraIds.length < 1) {
            this.nzMessage.error('最少勾选一项');
            return;
        }
        const controllerIds = checkedCameraIds.join(',');
        this.http.delete(`${_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_URL}/v1/data_train/${controllerIds}`).subscribe((result) => {
            if (result.code) {
                this.nzMessage.success('删除成功');
                this.loadTraining();
            }
            else {
                this.nzMessage.error(result.message);
            }
        });
    }
    changeStatus(flag) {
        console.log(flag);
        this.flag = flag;
        if (flag == 0) {
            this.status = 'STATUS';
            console.log('点击进行中');
            this.loadTraining();
        }
        if (flag == 1) {
            console.log('点击已经结束');
            this.selectList = this.selectList.splice(0, 1);
            this.compareDisplay = false;
            this.status = 'OVER';
            //加载进行中的数据
            this.loadTraining();
        }
        if (flag == -1) {
            this.status = 'LINE_UP';
            console.log('点击排队中');
            this.loadTraining();
        }
    }
    ngModelChange() {
        this.selectData == "全部" ? this.compareDisplay = false : this.compareDisplay = true;
    }
    tableClick(id) {
        this.rightComponent = true;
        for (let i = 0; i < this.listOfData.length; i++) {
            if (this.listOfData[i].id === id) {
                switch (this.listOfData[i].taskMode) {
                    case 0:
                        this.listOfData[i].taskModeName = "高精度";
                        break;
                    case 1:
                        this.listOfData[i].taskModeName = "低延时";
                        break;
                    case 2:
                        this.listOfData[i].taskModeName = "平衡";
                        break;
                    case 3:
                        this.listOfData[i].taskModeName = "边缘";
                        break;
                    case 4:
                        this.listOfData[i].taskModeName = "终端";
                        break;
                    default: this.listOfData[i].taskModeName = "";
                }
                var taskProgress = this.listOfData[i].taskProgress * 1;
                taskProgress = taskProgress.toFixed(2);
                this.listOfData[i].taskProgress = taskProgress;
                this.dataTrain = this.listOfData[i];
            }
        }
    }
    addTask(id) {
        const modal = this.nzModal.create({
            nzTitle: id ? '修改任务' : '创建任务',
            nzContent: _add_training_component__WEBPACK_IMPORTED_MODULE_1__["AddTrainingComponent"],
            nzOkText: '提交请求',
            nzComponentParams: {
                'trainId': id,
            },
            nzOnOk: (addComponent) => {
                addComponent.submitForm();
                return false;
            }
        });
        modal.afterClose.subscribe(() => {
            this.loadTraining();
        });
    }
    checkModelPrecision(event, data) {
        var that = this;
        this.isVisible = true;
        setTimeout(() => {
            that.listData = data;
            $('.image-list').on('click', '.cover', function () {
                var this_ = $(this);
                var images = this_.parents('.image-list').find('.cover');
                var imagesArr = new Array();
                $.each(images, function (i, image) {
                    imagesArr.push($(image).children('img').attr('src'));
                });
                $.pictureViewer({
                    images: imagesArr,
                    initImageIndex: this_.index() + 1,
                    scrollSwitch: true //是否使用鼠标滚轮切换图片，默认false
                });
            });
            axios__WEBPACK_IMPORTED_MODULE_6___default.a.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_URL}/v1/data_train/queryById?id=${data.id}`, {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('Bearer'),
                    'TR-Role': 'TR-User'
                }
            })
                .then((result) => {
                var result = result.data.data;
                this.precision = result.precision.slice(0, 5) * 100 + '%';
                var prCurve = result.prCurve.split(" ");
                var aaa = [];
                var xdata = [];
                var ydata = [];
                var echartsData = [];
                $.each(prCurve, function (i, n) {
                    aaa.push(parseFloat(n.trim()));
                });
                $.each(aaa, function (i, n) {
                    if (i % 2) {
                        ydata.push(n);
                    }
                    else {
                        xdata.push(n);
                    }
                });
                $.each(xdata, function (i, n) {
                    echartsData.push([n, ydata[i]]);
                });
                that.initModeLineCharts(echartsData);
                that.jdcurver = JSON.parse(result.valErrorSample);
            });
        }, 50);
        // // console.log('data', data);
        // this.createTestTask(data.id);
        // // this.nzMessage.warning('正在创建测试任务.........');
        // event.stopPropagation();
        // this.nzModal.create({
        //   nzTitle: '模型精度',
        //   nzContent: ModelPrecisionComponent,
        //   nzOkText: '加入对比',
        //   nzComponentParams: {
        //     'trainId': data.id,
        //   },
        //   nzOnOk: (modelPrecisionComponent: ModelPrecisionComponent) => {
        //     // 判断是否重复添加
        //     let duplicated = false;
        //     for (let i = 0; i < this.comparingDataTrainList.length; i++) {
        //       if (this.comparingDataTrainList[i].id === modelPrecisionComponent.dataTrain.id) {
        //         duplicated = true;
        //         break;
        //       }
        //     }
        //     if (duplicated) {
        //       this.nzMessage.error('请勿重复添加');
        //       return false;
        //     } else if (this.comparingDataTrainList.length < 3) {
        //       let compareName: string;
        //       if (this.comparingDataTrainList.length == 0) {
        //         compareName = '模型一';
        //       } else if (this.comparingDataTrainList.length == 1) {
        //         compareName = '模型二';
        //       } else if (this.comparingDataTrainList.length == 2) {
        //         compareName = '模型三';
        //       }
        //       modelPrecisionComponent.dataTrain.compareName = compareName;
        //       this.comparingDataTrainList.push(modelPrecisionComponent.dataTrain);
        //       this.showCompare = true;
        //     } else {
        //       this.nzMessage.error('最多对比3个模型');
        //       return false;
        //     }
        //   },
        //   nzCancelText: '关闭'
        // });
    }
    startCompare() {
        this.isVisible1 = true;
        var dataList = this.listOfData.map((item) => {
            if (this.mapOfCheckedId[item.id]) {
                return item;
            }
        });
        this.initModeLineCharts1(dataList);
        // const modal = this.nzModal.create({
        //   nzTitle: '模型对比',
        //   nzContent: ModelCompareComponent,
        //   nzComponentParams: {
        //     comparingDataTrainList: this.comparingDataTrainList
        //   },
        //   nzOnOk: (modelCompareComponent: ModelCompareComponent) => {
        //     // return false;
        //   },
        //   nzCancelText: '关闭',
        //   nzOkText: null
        // });
        // modal.afterClose.subscribe(() => {
        //   // this.loadTraining();
        // });
    }
    clearCompare() {
        this.comparingDataTrainList = [];
    }
    closeCompare() {
        this.comparingDataTrainList = [];
        this.showCompare = false;
    }
    removeCompareItem(dataTrain) {
        for (let i = 0; i < this.comparingDataTrainList.length; i++) {
            if (dataTrain.id === this.comparingDataTrainList[i].id) {
                this.comparingDataTrainList.splice(i, 1);
                break;
            }
        }
    }
    trainResume() {
        const checkedCameraIds = [];
        for (const k in this.mapOfCheckedId) {
            if (this.mapOfCheckedId[k]) {
                checkedCameraIds.push(k);
            }
        }
        if (checkedCameraIds.length < 1) {
            this.nzMessage.error('最少勾选一项');
            return;
        }
        const controllerIds = checkedCameraIds.join(',');
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().append('ids', controllerIds);
        this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_URL}/v1/data_train/keepTask`, null, { params }).subscribe((result) => {
            if (result.code) {
                this.nzMessage.success('继续训练成功');
                this.checkAll(false);
                this.loadTraining();
            }
            else {
                this.nzMessage.error(result.message);
            }
        });
    }
    // 创建28分库的测试任务
    createTestTask(trainId) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().append('id', trainId);
        this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_URL}/v1/data_train/start-validate-task`, null, { params }).subscribe((result) => {
            if (result.code) {
                this.nzMessage.warning('创建测试任务成功.........');
            }
            else {
                this.nzMessage.error(result.message);
            }
        });
    }
    handleCancel() {
        this.isVisible = false;
    }
    handleCancel1() {
        this.isVisible1 = false;
    }
    initModeLineCharts1(data) {
        // var prCurve = result.prCurve.split(" ")
        var echartsData1 = [];
        for (let index = 0; index < data.length; index++) {
            const element = data[index];
            if (element) {
                var aaa = [];
                var xdata = [];
                var ydata = [];
                var echartsData = [];
                var prCurve = element.prCurve.split(" ");
                $.each(prCurve, function (i, n) {
                    aaa.push(parseFloat(n.trim()));
                });
                $.each(aaa, function (i, n) {
                    if (i % 2) {
                        ydata.push(n);
                    }
                    else {
                        xdata.push(n);
                    }
                });
                $.each(xdata, function (i, n) {
                    echartsData.push([n, ydata[i]]);
                });
                echartsData1.push({ echartsData, data: element });
            }
        }
        var dataset = [];
        var series = [];
        $.each(echartsData1, function (i, x) {
            let data1 = x.echartsData.map(y => {
                return y + "";
            });
            data1 = data1.map(x => {
                return x.split(",");
            });
            dataset.push({ source: data1 });
            series.push({
                name: x.data.taskName + '---' + x.data.typeSourceName,
                type: 'line',
                smooth: true,
                datasetIndex: i,
                symbolSize: 0.1,
                symbol: 'circle',
                label: { show: false, fontSize: 16 },
                labelLayout: { dx: -20 },
                encode: { label: 2, tooltip: 1 }
            });
        });
        var option = {
            dataset: dataset,
            legend: {
                show: true,
                type: 'scroll',
                orient: 'horizontal',
                itemWidth: 8,
                itemHeight: 8,
                textStyle: {
                    color: '#fff',
                    fontSize: 12
                },
                icon: 'rect' // 图例项的 icon。
            },
            title: {
                text: '模\n型\n精\n度\n曲\n线',
                textStyle: {
                    color: "#fff",
                    fontStyle: "normal",
                    fontWeight: "normal",
                    fontFamily: "sans-serif",
                    fontSize: 15,
                },
                textAlign: "auto",
                textVerticalAlign: "auto",
                left: 10,
                top: '40%'
            },
            tooltip: {
                // trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        color: "rgba(14, 24, 142, 1)"
                    }
                }
            },
            xAxis: {
                name: '召回率',
                nameLocation: "end",
                nameTextStyle: {
                    fontSize: 14,
                },
                splitLine: {
                    lineStyle: {
                        type: 'dashed'
                    }
                },
                axisLine: {
                    symbol: ['none', 'arrow'],
                    lineStyle: {
                        color: '#fff'
                    }
                }
            },
            yAxis: {
                name: '准确率',
                nameLocation: "end",
                nameTextStyle: {
                    fontSize: 14,
                },
                splitLine: {
                    lineStyle: {
                        type: 'dashed',
                    }
                },
                axisLine: {
                    symbol: ['none', 'arrow'],
                    lineStyle: {
                        color: '#fff'
                    }
                },
            },
            series: series
        };
        setTimeout(() => {
            var lineChartsDom = document.getElementById("lineCharts1");
            var lineChart = echarts.init(lineChartsDom);
            lineChart.setOption(option);
        }, 10);
    }
    initModeLineCharts(data) {
        let data1 = data.map(x => {
            return x + "";
        });
        data1 = data1.map(x => {
            return x.split(",");
        });
        // echarts.registerTransform(ecStat.transform.regression);
        var option = {
            dataset: [
                {
                    source: data1
                },
                {
                    transform: {
                        type: 'ecStat:regression',
                        config: {
                            method: 'exponential',
                        }
                    }
                }
            ],
            title: {
                text: '模\n型\n精\n度\n曲\n线',
                textStyle: {
                    color: "#fff",
                    fontStyle: "normal",
                    fontWeight: "normal",
                    fontFamily: "sans-serif",
                    fontSize: 15,
                },
                textAlign: "auto",
                textVerticalAlign: "auto",
                left: 10,
                top: '40%'
            },
            tooltip: {
                // trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        color: "rgba(14, 24, 142, 1)"
                    }
                }
            },
            xAxis: {
                name: '召回率',
                nameLocation: "end",
                nameTextStyle: {
                    fontSize: 14,
                },
                splitLine: {
                    lineStyle: {
                        type: 'dashed'
                    }
                },
                axisLine: {
                    symbol: ['none', 'arrow'],
                    lineStyle: {
                        color: '#fff'
                    }
                }
            },
            yAxis: {
                name: '准确率',
                nameLocation: "end",
                nameTextStyle: {
                    fontSize: 14,
                },
                splitLine: {
                    lineStyle: {
                        type: 'dashed',
                    }
                },
                axisLine: {
                    symbol: ['none', 'arrow'],
                    lineStyle: {
                        color: '#fff'
                    }
                },
            },
            series: [
                {
                    name: 'line',
                    type: 'line',
                    smooth: true,
                    datasetIndex: 0,
                    symbolSize: 5,
                    // symbol: 'circle',
                    // label: { show: true, fontSize: 16 },
                    labelLayout: { dx: -20 },
                    encode: { label: 2, tooltip: 1 }
                }
            ]
        };
        var lineChartsDom = document.getElementById("lineCharts");
        var lineChart = echarts.init(lineChartsDom);
        lineChart.setOption(option);
    }
    test() {
        console.log('触发');
    }
    ;
}
DataTrainingComponent.ɵfac = function DataTrainingComponent_Factory(t) { return new (t || DataTrainingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NzModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NzMessageService"])); };
DataTrainingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DataTrainingComponent, selectors: [["ng-component"]], decls: 57, vars: 27, consts: [[1, "flex-row", 2, "height", "100%"], ["nzTitle", "The first Modal", "class", "statistics-top flex-column", "style", "height: 80%;\nwidth:70%;\nposition: absolute;\nz-index: 9999;\nbackground: #031129;\nmargin: 50px 10%;\n", 4, "ngIf"], ["nzTitle", "The first Modal", "class", "statistics-top flex-column", "style", "height: 80%;\nwidth: 80%;\nposition: absolute;\nz-index: 9999;\nbackground: #031129;\nmargin: 50px 5%;\n", 4, "ngIf"], [1, "train-left", "flex-row"], [1, "train-area", "flex-column"], [1, "train-area-btns", "flex-row"], [1, "train-area-btn-item", 3, "click"], [1, "train-table-box"], [1, "train-btns", 2, "position", "relative"], [4, "ngIf"], [1, "btn", "btn-remove", 3, "click"], ["class", "btn btn-new-task", 3, "click", 4, "ngIf"], [1, "flex-column"], ["nzShowSizeChanger", "", 1, "blue-table", 3, "nzData", "nzShowPagination", "nzTotal", "nzPageIndex", "nzPageSize", "nzPageIndexChange", "nzPageSizeChange"], ["rowSelectionTable", ""], [3, "nzChecked", "nzIndeterminate", "nzCheckedChange"], [3, "current-row", "click", 4, "ngFor", "ngForOf"], [1, "model-compare"], [1, "model-compare-title"], ["nz-icon", "", "nzType", "close", "nzTheme", "outline", 3, "click"], ["class", "compare-model-row", 4, "ngFor", "ngForOf"], [1, "model-compare-btn"], [1, "btn", 3, "click"], [1, "model-compre-del"], ["nz-icon", "", "nzType", "delete", "nzTheme", "outline"], ["nz-button", "", "nzType", "link", 3, "click"], ["nzTitle", "The first Modal", 1, "statistics-top", "flex-column", 2, "height", "80%", "width", "70%", "position", "absolute", "z-index", "9999", "background", "#031129", "margin", "50px 10%"], [1, "statistics-title", 2, "position", "relative"], [1, "close", 2, "width", "30px", "height", "30px", "position", "absolute", "right", "0px", "top", "0px"], ["nz-icon", "", "nzType", "close", "nzTheme", "outline", 2, "cursor", "pointer", 3, "click"], [1, "dbcontent"], [1, "dbCharts"], [1, "dbtitle"], [1, "leftLine"], [1, "leftRect"], [1, "titleText"], [1, "rightRect"], [1, "rightLine"], ["id", "lineCharts1", 2, "width", "100%", "height", "80%"], ["nzBordered", "", 2, "margin-left", "20px", 3, "nzData"], ["basicTable", "", "borderedTable", ""], [4, "ngFor", "ngForOf"], [1, "dbTable"], ["nzBordered", "", 2, "margin-left", "20px", "margin-top", "20px", 3, "nzData"], ["nzBreakWord", ""], ["nzTitle", "The first Modal", 1, "statistics-top", "flex-column", 2, "height", "80%", "width", "80%", "position", "absolute", "z-index", "9999", "background", "#031129", "margin", "50px 5%"], ["nzType", "card", 3, "nzSelectChange"], ["nzTitle", "\u6A21\u578B\u7CBE\u5EA6\u66F2\u7EBF"], [1, "content"], ["id", "lineCharts", 1, "lineCharts"], ["id", "csImg1", 1, "main-content", "imgList"], [1, "title", 2, "font-size", "18px"], [1, "image-list", 2, "width", "100%", "max-height", "450px", "overflow-y", "auto"], ["class", "cover", 4, "ngFor", "ngForOf"], ["nzTitle", "\u6D4B  \u8BD5"], [1, "content", 2, "flex-wrap", "wrap"], [2, "flex", "0 0 100%", "margin-left", "20px"], ["for", "upload", 2, "color", "#fff", "margin-right", "10px"], ["type", "file", "multiple", "true", "accept", "image/*", "id", "imgInput", 2, "color", "#fff"], ["id", "csImg", 1, "main-content", "imgList"], ["id", "image-list1", 1, "image-list1", 2, "width", "100%", "max-height", "450px", "overflow-y", "auto"], [1, "cover"], ["alt", "", 3, "src"], [1, "select", 2, "position", "absolute", "left", "0", 3, "ngModel", "ngModelChange"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], [3, "nzValue", "nzLabel"], [1, "btn", "btn-new-task", 3, "click"], [3, "click"], ["nzShowCheckbox", "", 3, "nzChecked", "nzCheckedChange"], [1, "train-right", "flex-column"], [1, "train-classifies", "flex-column"], [1, "train-title"], [1, "echart-box"], ["nzType", "circle", "nzStrokeColor", "#159FFF", "nzStrokeWidth", "12", 3, "nzPercent"], [1, "train-images", "flex-column"], [1, "detail-info-box", "flex-column"], [1, "detail-info-type", "flex-row"], [1, "detail-info-param"], [1, "detail-info-value"], [1, "is_mark"], [1, "btn", "train-btn-edit", 3, "click"], [1, "compare-model-row"]], template: function DataTrainingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DataTrainingComponent_div_1_Template, 53, 4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DataTrainingComponent_div_2_Template, 22, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataTrainingComponent_Template_button_click_6_listener() { return ctx.changeStatus(0 - 1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u6392\u961F\u4E2D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataTrainingComponent_Template_button_click_8_listener() { return ctx.changeStatus(0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u8FDB\u884C\u4E2D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataTrainingComponent_Template_button_click_10_listener() { return ctx.changeStatus(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u5DF2\u7ED3\u675F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, DataTrainingComponent_ng_container_14_Template, 3, 2, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, DataTrainingComponent_ng_container_15_Template, 3, 0, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, DataTrainingComponent_ng_container_16_Template, 3, 0, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, DataTrainingComponent_ng_container_17_Template, 3, 0, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataTrainingComponent_Template_button_click_18_listener() { return ctx.delete(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u5220\u9664");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, DataTrainingComponent_button_20_Template, 2, 0, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "nz-table", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzPageIndexChange", function DataTrainingComponent_Template_nz_table_nzPageIndexChange_22_listener($event) { return ctx.pageIndex = $event; })("nzPageSizeChange", function DataTrainingComponent_Template_nz_table_nzPageSizeChange_22_listener($event) { return ctx.pageSize = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzCheckedChange", function DataTrainingComponent_Template_th_nzCheckedChange_26_listener($event) { return ctx.isAllDisplayDataChecked = $event; })("nzCheckedChange", function DataTrainingComponent_Template_th_nzCheckedChange_26_listener($event) { return ctx.checkAll($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\u4EFB\u52A1\u540D\u79F0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\u6570\u636E\u6E90");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\u65B9\u5F0F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\u6A21\u5F0F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "\u72B6\u6001");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "\u5F00\u59CB\u65F6\u95F4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, DataTrainingComponent_th_39_Template, 2, 0, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, DataTrainingComponent_th_40_Template, 2, 0, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, DataTrainingComponent_tr_42_Template, 20, 20, "tr", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, DataTrainingComponent_ng_container_43_Template, 51, 13, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "\u5BF9\u6BD4\u6846");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataTrainingComponent_Template_i_click_48_listener() { return ctx.closeCompare(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, DataTrainingComponent_div_49_Template, 4, 1, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataTrainingComponent_Template_button_click_51_listener() { return ctx.startCompare(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "\u5F00\u59CB\u5BF9\u6BD4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataTrainingComponent_Template_a_click_55_listener() { return ctx.clearCompare(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "\u6E05\u7A7A\u5BF9\u6BD4\u680F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isVisible1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.flag === 0 - 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.flag === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.flag === 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.flag === 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.flag === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.compareDisplay);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.flag === 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.status == "LINE_UP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzData", ctx.listOfData)("nzShowPagination", false)("nzTotal", ctx.dataTotal)("nzPageIndex", ctx.pageIndex)("nzPageSize", ctx.pageSize);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzChecked", ctx.isAllDisplayDataChecked)("nzIndeterminate", ctx.isIndeterminate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.flag === 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.flag === 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _r7.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.rightComponent);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("show-compare", ctx.showCompare);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.comparingDataTrainList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NzTableComponent"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NzTheadComponent"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NzTrDirective"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NzTableCellDirective"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NzThMeasureDirective"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NzThSelectionComponent"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NzTbodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_9__["NzIconDirective"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NzCellBreakWordDirective"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NzTabSetComponent"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NzTabComponent"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NzSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NzOptionComponent"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NzTdAddOnComponent"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NzProgressComponent"]], pipes: [_data_train_pipes__WEBPACK_IMPORTED_MODULE_11__["DataTrainPipes"], _data_train_pipes__WEBPACK_IMPORTED_MODULE_11__["DataTaskPatternPipes"], _data_train_pipes__WEBPACK_IMPORTED_MODULE_11__["DataTaskStatusPipes"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"], _data_train_pipes__WEBPACK_IMPORTED_MODULE_11__["DataTaskProgressPipes"]], styles: [".train-btns[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.train-btns[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 120px;\n  margin-left: 10px;\n}\n.train-btns[_ngcontent-%COMP%]   .btn-new-task[_ngcontent-%COMP%] {\n  background-color: #00a48c;\n}\n.dbcontent[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n}\n.dbcontent[_ngcontent-%COMP%]   .dbtitle[_ngcontent-%COMP%] {\n  width: 95%;\n  margin: 0 auto;\n  margin-top: 20px;\n  display: flex;\n}\n.dbcontent[_ngcontent-%COMP%]   .dbtitle[_ngcontent-%COMP%]   .titleText[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 18px;\n  text-align: center;\n}\n.dbcontent[_ngcontent-%COMP%]   .dbtitle[_ngcontent-%COMP%]   .leftLine[_ngcontent-%COMP%] {\n  flex: 0 0 36%;\n  height: 5px;\n  background: linear-gradient(to right, #031129, #095495);\n  margin: auto 0;\n}\n.dbcontent[_ngcontent-%COMP%]   .dbtitle[_ngcontent-%COMP%]   .leftRect[_ngcontent-%COMP%] {\n  width: 11px;\n  height: 11px;\n  transform: rotate(45deg);\n  background: #095495;\n  margin: auto 0;\n}\n.dbcontent[_ngcontent-%COMP%]   .dbtitle[_ngcontent-%COMP%]   .rightLine[_ngcontent-%COMP%] {\n  flex: 0 0 36%;\n  height: 5px;\n  background: linear-gradient(to left, #031129, #095495);\n  margin: auto 0;\n}\n.dbcontent[_ngcontent-%COMP%]   .dbtitle[_ngcontent-%COMP%]   .rightRect[_ngcontent-%COMP%] {\n  width: 11px;\n  height: 11px;\n  transform: rotate(45deg);\n  background: #095495;\n  margin: auto 0;\n}\n.dbcontent[_ngcontent-%COMP%]   .dbCharts[_ngcontent-%COMP%] {\n  flex: 0 0 48%;\n  height: 70%;\n}\n.dbcontent[_ngcontent-%COMP%]   .dbTable[_ngcontent-%COMP%] {\n  flex: 0 0 48%;\n  height: 100%;\n}\n.echart-box[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.echart-box[_ngcontent-%COMP%]   nz-progress[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.statistics-top[_ngcontent-%COMP%], .statistics-bottom[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 1;\n  padding: 1px;\n  border: 1px solid #094f8d;\n}\n.statistics-top[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  background: url('bg11.png') no-repeat 0 0 / 100% 100%;\n}\n.statistics-top-type[_ngcontent-%COMP%] {\n  background: url('bg13.png') no-repeat 0 0 / 100% 100%;\n}\n.statistics-top[_ngcontent-%COMP%]::before, .statistics-bottom[_ngcontent-%COMP%]::before, .statistics-main-top[_ngcontent-%COMP%]::before, .statistics-main-item[_ngcontent-%COMP%]::before {\n  content: '';\n  position: absolute;\n  left: -1px;\n  bottom: -1px;\n  width: 10px;\n  height: 10px;\n  border-left: 1px solid #00afdf;\n  border-bottom: 1px solid #00afdf;\n}\n.statistics-top[_ngcontent-%COMP%]::after, .statistics-bottom[_ngcontent-%COMP%]::after, .statistics-main-top[_ngcontent-%COMP%]::after, .statistics-main-item[_ngcontent-%COMP%]::after {\n  content: '';\n  position: absolute;\n  right: -1px;\n  bottom: -1px;\n  width: 10px;\n  height: 10px;\n  border-right: 1px solid #00afdf;\n  border-bottom: 1px solid #00afdf;\n}\n.statistics-title[_ngcontent-%COMP%] {\n  position: relative;\n  flex-basis: 40px;\n  line-height: 40px;\n  color: #fff;\n  font-size: 18px;\n  padding-left: 10px;\n  background: url('bg14.png') no-repeat 0 0 / 100% 100%;\n}\n.content[_ngcontent-%COMP%] {\n  width: 98.5%;\n  height: 96%;\n  display: flex;\n}\n.content[_ngcontent-%COMP%]   .lineCharts[_ngcontent-%COMP%] {\n  flex: 0 0 50%;\n  height: 100%;\n  min-height: 550px;\n}\n.content[_ngcontent-%COMP%]   .imgList[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 100%;\n  padding: 10px;\n  display: flex;\n  flex-wrap: wrap;\n}\n.content[_ngcontent-%COMP%]   .imgList[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  flex: 0 0 100%;\n  color: #fff;\n  text-align: center;\n  margin-top: 20px;\n}\n.content[_ngcontent-%COMP%]   .imgList[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  flex: 0 0 100%;\n  padding: 10px;\n  display: flex;\n  height: 100%;\n  max-height: 450px;\n  flex-wrap: wrap;\n  list-style: none;\n  overflow-y: auto;\n}\n.content[_ngcontent-%COMP%]   .imgList[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  flex: 0 0 25%;\n  padding: 5px;\n}\n.content[_ngcontent-%COMP%]   .imgList[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.content[_ngcontent-%COMP%]   .imgList1[_ngcontent-%COMP%] {\n  border: 1px solid red;\n  display: flex;\n  flex-wrap: wrap;\n}\n.content[_ngcontent-%COMP%]   .imgList1[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  flex: 0 0 25%;\n  border: 1px solid #fff;\n}\n[_nghost-%COMP%]     .ant-tabs-content {\n  height: 90%;\n}\n[_nghost-%COMP%]     .ant-tabs-nav {\n  margin-top: 10px;\n  margin-left: 10px;\n}\n[_nghost-%COMP%]     .ant-tabs-tab {\n  background: transparent !important;\n  color: #fff;\n}\n[_nghost-%COMP%]     .ant-tabs-tab-active {\n  background: #2984e4 !important;\n  border: 1px solid rgba(23, 71, 123, 0.666) !important;\n  color: #fff !important;\n}\n[_nghost-%COMP%]     .ant-tabs-bar {\n  border-bottom: 1px solid rgba(23, 71, 123, 0.666);\n}\n.statistics-title[_ngcontent-%COMP%]::before {\n  content: '';\n  position: absolute;\n  left: -2px;\n  top: -2px;\n  width: 10px;\n  height: 10px;\n  border-left: 1px solid #00afdf;\n  border-top: 1px solid #00afdf;\n}\n.statistics-title[_ngcontent-%COMP%]::after {\n  content: '';\n  position: absolute;\n  right: -2px;\n  top: -2px;\n  width: 10px;\n  height: 10px;\n  border-right: 1px solid #00afdf;\n  border-top: 1px solid #00afdf;\n}\n[_nghost-%COMP%]     .ant-progress-text {\n  color: white;\n}\n[_nghost-%COMP%]     .blue-table {\n  margin-top: 20px;\n}\n[_nghost-%COMP%]     .blue-table .ant-table {\n  border: solid 1px #0f366b;\n  font-size: 20px;\n  background: transparent;\n}\n[_nghost-%COMP%]     .blue-table .ant-table th {\n  font-size: 16px;\n}\n[_nghost-%COMP%]     .blue-table .ant-table th, [_nghost-%COMP%]     .blue-table .ant-table td {\n  color: #ffffff;\n  border-bottom-color: #0f366b;\n}\n[_nghost-%COMP%]     .blue-table .ant-table th .ant-checkbox-inner, [_nghost-%COMP%]     .blue-table .ant-table td .ant-checkbox-inner {\n  background-color: transparent;\n  border-color: #159fff;\n}\n[_nghost-%COMP%]     .blue-table .ant-table thead th {\n  background-color: transparent;\n}\n[_nghost-%COMP%]     .blue-table .ant-table .ant-table-tbody > tr.ant-table-row:hover > td, [_nghost-%COMP%]     .blue-table .ant-table .current-row > td {\n  background-color: #0d3365;\n}\n[_nghost-%COMP%] {\n  display: block;\n  position: relative;\n  height: 100%;\n}\n[_nghost-%COMP%]   .model-compare[_ngcontent-%COMP%] {\n  display: none;\n  border: 1px solid #159fff;\n  background-color: #0a2952;\n  color: white;\n  position: absolute;\n  right: 0px;\n  top: 0px;\n  width: 180px;\n}\n[_nghost-%COMP%]   .model-compare.show-compare[_ngcontent-%COMP%] {\n  display: block;\n}\n[_nghost-%COMP%]   .model-compare[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n}\n[_nghost-%COMP%]   .model-compare[_ngcontent-%COMP%]   .model-compare-title[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #159fff;\n  display: flex;\n  justify-content: space-between;\n  font-size: 16px;\n  font-weight: bold;\n}\n[_nghost-%COMP%]   .model-compare[_ngcontent-%COMP%]   .model-compare-btn[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #159fff;\n  text-align: center;\n}\n[_nghost-%COMP%]   .model-compare[_ngcontent-%COMP%]   .compare-model-row[_ngcontent-%COMP%] {\n  height: 60px;\n  border-bottom: 1px solid #159fff;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n[_nghost-%COMP%]   .model-compare[_ngcontent-%COMP%]   .compare-model-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], [_nghost-%COMP%]   .model-compare[_ngcontent-%COMP%]   .compare-model-row[_ngcontent-%COMP%]   i[nz-icon][_ngcontent-%COMP%] {\n  line-height: 43px;\n  font-size: 14px;\n}\n[_nghost-%COMP%]   .model-compare[_ngcontent-%COMP%]   .compare-model-row[_ngcontent-%COMP%]   i[nz-icon][_ngcontent-%COMP%] {\n  color: #148aed;\n}\n[_nghost-%COMP%]   .model-compare[_ngcontent-%COMP%]   .compare-model-row[_ngcontent-%COMP%]:hover {\n  background-color: #0d3365;\n}\n[_nghost-%COMP%]   .model-compare[_ngcontent-%COMP%]   .model-compre-del[_ngcontent-%COMP%] {\n  color: #b8753e;\n  text-align: center;\n}\n[_nghost-%COMP%]   .model-compare[_ngcontent-%COMP%]   .model-compre-del[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #b8753e;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6L2ZmL3RhcmdldC1yZWNvZ25pemUtbWdyLWh0bWwtVjAuMi9zcmMvYXBwL3BhZ2VzL2RhdGEtdHJhaW5pbmcvZGF0YS10cmFpbmluZy5jb21wb25lbnQubGVzcyIsImRhdGEtdHJhaW5pbmcuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtBQ0NGO0FERkE7RUFJSSxZQUFBO0VBQ0EsaUJBQUE7QUNDSjtBRE5BO0VBU0kseUJBQUE7QUNBSjtBRE1BO0VBRUUsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDTEY7QURDQTtFQU1JLFVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FDSko7QURMQTtFQVdNLE9BQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNITjtBRFZBO0VBaUJNLGFBQUE7RUFDQSxXQUFBO0VBQ0EsdURBQUE7RUFDQSxjQUFBO0FDSk47QURoQkE7RUF1QlEsV0FBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQ0pSO0FEdkJBO0VBOEJNLGFBQUE7RUFDQSxXQUFBO0VBQ0Esc0RBQUE7RUFDQSxjQUFBO0FDSk47QUQ3QkE7RUFvQ1EsV0FBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQ0pSO0FEcENBO0VBNkNJLGFBQUE7RUFDQSxXQUFBO0FDTko7QUR4Q0E7RUFpREksYUFBQTtFQUNBLFlBQUE7QUNOSjtBRFlBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUNWRjtBRE9BO0VBTUksa0JBQUE7QUNWSjtBRGNBOztFQUNFLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQ1hGO0FEY0E7RUFDRSxtQkFBQTtFQUNBLHFEQUFBO0FDWkY7QURlQTtFQUNFLHFEQUFBO0FDYkY7QURnQkE7Ozs7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQ0FBQTtBQ1hGO0FEY0E7Ozs7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtBQ1RGO0FEWUE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EscURBQUE7QUNWRjtBRFlBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FDVkY7QURPQTtFQUtHLGFBQUE7RUFDQyxZQUFBO0VBQ0EsaUJBQUE7QUNUSjtBREVBO0VBV0csT0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUNWSDtBRExBO0VBaUJLLGNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ1RMO0FEWEE7RUF5QkssY0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNYTDtBRHJCQTtFQWtDTyxhQUFBO0VBQ0EsWUFBQTtBQ1ZQO0FEekJBO0VBcUNTLFdBQUE7QUNUVDtBRDVCQTtFQTRDRyxxQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FDYkg7QURqQ0E7RUFnREksYUFBQTtFQUNBLHNCQUFBO0FDWko7QURpQkE7RUFHSSxXQUFBO0FDakJKO0FEY0E7RUFNSSxnQkFBQTtFQUNBLGlCQUFBO0FDakJKO0FEVUE7RUFVSSxrQ0FBQTtFQUNBLFdBQUE7QUNqQko7QURNQTtFQWNJLDhCQUFBO0VBQ0EscURBQUE7RUFDQSxzQkFBQTtBQ2pCSjtBRENBO0VBbUJJLGlEQUFBO0FDakJKO0FEc0JBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBQ0EsNkJBQUE7QUNwQkY7QUR1QkE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsK0JBQUE7RUFDQSw2QkFBQTtBQ3JCRjtBRHdCQTtFQUVHLFlBQUE7QUN2Qkg7QURxQkE7RUFNSSxnQkFBQTtBQ3hCSjtBRGtCQTtFQVNNLHlCQUFBO0VBQ0EsZUFBQTtFQUlBLHVCQUFBO0FDM0JOO0FEYUE7RUFpQlEsZUFBQTtBQzNCUjtBRFVBOztFQXFCUSxjQUFBO0VBQ0EsNEJBQUE7QUMzQlI7QURLQTs7RUF5QlUsNkJBQUE7RUFDQSxxQkFBQTtBQzFCVjtBREFBO0VBZ0NVLDZCQUFBO0FDN0JWO0FESEE7O0VBcUNRLHlCQUFBO0FDOUJSO0FEdUNBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ3JDRjtBRGtDQTtFQU1JLGFBQUE7RUFNQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0FDMUNKO0FEZ0NJO0VBQ0UsY0FBQTtBQzlCTjtBRHFCQTtFQXFCTSxpQkFBQTtBQ3ZDTjtBRGtCQTtFQXlCTSxnQ0FBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ3hDTjtBRFdBO0VBaUNNLGdDQUFBO0VBQ0Esa0JBQUE7QUN6Q047QURPQTtFQXNDTSxZQUFBO0VBQ0EsZ0NBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQzFDTjtBREFBOztFQTZDUSxpQkFBQTtFQUNBLGVBQUE7QUN6Q1I7QURMQTtFQWtEUSxjQUFBO0FDMUNSO0FENkNNO0VBQ0UseUJBQUE7QUMzQ1I7QURYQTtFQTJETSxjQUFBO0VBQ0Esa0JBQUE7QUM3Q047QURmQTtFQStEUSxjQUFBO0FDN0NSIiwiZmlsZSI6ImRhdGEtdHJhaW5pbmcuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudHJhaW4tYnRucyB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuXG4gIGJ1dHRvbiB7XG4gICAgd2lkdGg6IDEyMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB9XG5cbiAgLmJ0bi1uZXctdGFzayB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDE2NCwgMTQwKTtcbiAgfVxuXG59XG5cblxuLmRiY29udGVudHtcbiAgXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC5kYnRpdGxle1xuICAgIHdpZHRoOiA5NSU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC50aXRsZVRleHR7XG4gICAgICBmbGV4OiAxO1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgICAubGVmdExpbmV7XG4gIFxuICAgICAgZmxleDogMCAwIDM2JTtcbiAgICAgIGhlaWdodDogNXB4O1xuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCMwMzExMjksIzA5NTQ5NSk7XG4gICAgICBtYXJnaW46IGF1dG8gMDtcbiAgICB9XG4gICAgLmxlZnRSZWN0e1xuICAgICAgICB3aWR0aDogMTFweDtcbiAgICAgICAgaGVpZ2h0OiAxMXB4O1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgICAgIGJhY2tncm91bmQ6ICMwOTU0OTU7XG4gICAgICAgIG1hcmdpbjogYXV0byAwO1xuICAgIH1cbiAgICAucmlnaHRMaW5le1xuICAgICAgZmxleDogMCAwIDM2JTtcbiAgICAgIGhlaWdodDogNXB4O1xuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsIzAzMTEyOSwjMDk1NDk1KTtcbiAgICAgIG1hcmdpbjogYXV0byAwO1xuICAgIH1cbiAgICAucmlnaHRSZWN0e1xuICAgICAgICB3aWR0aDogMTFweDtcbiAgICAgICAgaGVpZ2h0OiAxMXB4O1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgICAgIGJhY2tncm91bmQ6ICMwOTU0OTU7XG4gICAgICAgIG1hcmdpbjogYXV0byAwO1xuICAgIH1cbiAgXG4gIH1cbiAgLmRiQ2hhcnRze1xuICAgIGZsZXg6IDAgMCA0OCU7XG4gICAgaGVpZ2h0OiA3MCU7XG4gIH1cbiAgLmRiVGFibGV7XG4gICAgZmxleDowIDAgNDglO1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuXG59XG5cblxuLmVjaGFydC1ib3gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICBuei1wcm9ncmVzcyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG59XG5cbi5zdGF0aXN0aWNzLXRvcCwgLnN0YXRpc3RpY3MtYm90dG9tIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbGV4OiAxO1xuICBwYWRkaW5nOiAxcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwOTRmOGQ7XG59XG5cbi5zdGF0aXN0aWNzLXRvcCB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9iZzExLnBuZycpIG5vLXJlcGVhdCAwIDAgflwiL1wiIDEwMCUgMTAwJTtcbn1cblxuLnN0YXRpc3RpY3MtdG9wLXR5cGUge1xuICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmcxMy5wbmcnKSBuby1yZXBlYXQgMCAwIH5cIi9cIiAxMDAlIDEwMCU7XG59XG5cbi5zdGF0aXN0aWNzLXRvcDo6YmVmb3JlLCAuc3RhdGlzdGljcy1ib3R0b206OmJlZm9yZSwgLnN0YXRpc3RpY3MtbWFpbi10b3A6OmJlZm9yZSwgLnN0YXRpc3RpY3MtbWFpbi1pdGVtOjpiZWZvcmUge1xuICBjb250ZW50OiAnJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAtMXB4O1xuICBib3R0b206IC0xcHg7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzAwYWZkZjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMGFmZGY7XG59XG5cbi5zdGF0aXN0aWNzLXRvcDo6YWZ0ZXIsIC5zdGF0aXN0aWNzLWJvdHRvbTo6YWZ0ZXIsIC5zdGF0aXN0aWNzLW1haW4tdG9wOjphZnRlciwgLnN0YXRpc3RpY3MtbWFpbi1pdGVtOjphZnRlciB7XG4gIGNvbnRlbnQ6ICcnO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAtMXB4O1xuICBib3R0b206IC0xcHg7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMwMGFmZGY7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDBhZmRmO1xufVxuXG4uc3RhdGlzdGljcy10aXRsZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxleC1iYXNpczogNDBweDtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDE4cHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2JnMTQucG5nJykgbm8tcmVwZWF0IDAgMCB+XCIvXCIgMTAwJSAxMDAlO1xufVxuLmNvbnRlbnR7XG4gIHdpZHRoOiA5OC41JTtcbiAgaGVpZ2h0Ojk2JTtcbiAgZGlzcGxheTogZmxleDtcbiAubGluZUNoYXJ0c3tcbiAgIGZsZXg6IDAgMCA1MCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDU1MHB4O1xuIH1cblxuIC5pbWdMaXN0e1xuICAgZmxleDogMTtcbiAgIGhlaWdodDogMTAwJTtcbiAgIHBhZGRpbmc6IDEwcHg7XG4gICBkaXNwbGF5OiBmbGV4O1xuICAgZmxleC13cmFwOiB3cmFwO1xuICAgaDJ7XG4gICAgIGZsZXg6IDAgMCAxMDAlO1xuICAgICBjb2xvcjogI2ZmZjtcbiAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICBcbiAgIH1cbiBcbiAgIHVse1xuICAgICBmbGV4OiAwIDAgMTAwJTtcbiAgICAgcGFkZGluZzogMTBweDtcbiAgICAgZGlzcGxheTogZmxleDtcbiAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICBtYXgtaGVpZ2h0OiA0NTBweDtcbiAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgICBsaXtcbiAgICAgICBmbGV4OiAwIDAgMjUlO1xuICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICBpbWd7XG4gICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICB9XG4gICAgIH1cbiAgIH1cbiB9XG5cbiAuaW1nTGlzdDF7XG4gICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG4gICBkaXNwbGF5OiBmbGV4O1xuICAgZmxleC13cmFwOiB3cmFwO1xuICAgaW1ne1xuICAgIGZsZXg6IDAgMCAyNSU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgIH1cbiB9XG5cbn1cbjpob3N0IDo6bmctZGVlcHtcbiAgLmFudC10YWJzLWNvbnRlbnR7XG5cbiAgICBoZWlnaHQ6IDkwJTtcbiAgfVxuICAuYW50LXRhYnMtbmF2e1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIH1cbiAgLmFudC10YWJzLXRhYntcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG4gIC5hbnQtdGFicy10YWItYWN0aXZle1xuICAgIGJhY2tncm91bmQ6IHJnYig0MSwgMTMyLCAyMjgpICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyMywgNzEsIDEyMywgMC42NjYpICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgfVxuICAuYW50LXRhYnMtYmFye1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDIzLCA3MSwgMTIzLCAwLjY2Nik7XG4gIH1cblxufVxuXG4uc3RhdGlzdGljcy10aXRsZTo6YmVmb3JlIHtcbiAgY29udGVudDogJyc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogLTJweDtcbiAgdG9wOiAtMnB4O1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiAxMHB4O1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICMwMGFmZGY7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMDBhZmRmO1xufVxuXG4uc3RhdGlzdGljcy10aXRsZTo6YWZ0ZXIge1xuICBjb250ZW50OiAnJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogLTJweDtcbiAgdG9wOiAtMnB4O1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiAxMHB4O1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMDBhZmRmO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgIzAwYWZkZjtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIHtcbiAgLmFudC1wcm9ncmVzcy10ZXh0IHtcbiAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuXG4gIC5ibHVlLXRhYmxlIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuXG4gICAgLmFudC10YWJsZSB7XG4gICAgICBib3JkZXI6IHNvbGlkIDFweCAjMGYzNjZiO1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgLy9ib3JkZXItdG9wOiAxcHggc29saWQgcmdiKDIxLCAxNTksIDI1NSk7XG4gICAgICAvL2JvcmRlci1sZWZ0OiAxcHggc29saWQgcmdiKDIxLCAxNTksIDI1NSk7XG4gICAgICAvL2JvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYigyMSwgMTU5LCAyNTUpO1xuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG5cbiAgICAgIHRoIHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgfVxuXG4gICAgICB0aCwgdGQge1xuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzBmMzY2YjtcblxuICAgICAgICAuYW50LWNoZWNrYm94LWlubmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICBib3JkZXItY29sb3I6IHJnYigyMSwgMTU5LCAyNTUpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoZWFkIHtcbiAgICAgICAgdGgge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5hbnQtdGFibGUtdGJvZHkgPiB0ci5hbnQtdGFibGUtcm93OmhvdmVyID4gdGQsIC5jdXJyZW50LXJvdyA+IHRkIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzLCA1MSwgMTAxKTtcbiAgICAgIH1cblxuICAgIH1cblxuICB9XG5cbn1cblxuOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwMCU7XG5cbiAgLm1vZGVsLWNvbXBhcmUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG5cbiAgICAmLnNob3ctY29tcGFyZSB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG5cbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMTU5ZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwYTI5NTI7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMHB4O1xuICAgIHRvcDogMHB4O1xuICAgIHdpZHRoOiAxODBweDtcblxuICAgID4gZGl2IHtcbiAgICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgIH1cblxuICAgIC5tb2RlbC1jb21wYXJlLXRpdGxlIHtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMTU5ZmZmO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cblxuICAgIC5tb2RlbC1jb21wYXJlLWJ0biB7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzE1OWZmZjtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG5cbiAgICAuY29tcGFyZS1tb2RlbC1yb3cge1xuICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMxNTlmZmY7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAgICAgc3BhbiwgaVtuei1pY29uXSB7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0M3B4O1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICB9XG5cbiAgICAgIGlbbnotaWNvbl0ge1xuICAgICAgICBjb2xvcjogcmdiKDIwLCAxMzgsIDIzNyk7XG4gICAgICB9XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTMsIDUxLCAxMDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5tb2RlbC1jb21wcmUtZGVsIHtcbiAgICAgIGNvbG9yOiByZ2IoMTg0LCAxMTcsIDYyKTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgICAgYSB7XG4gICAgICAgIGNvbG9yOiByZ2IoMTg0LCAxMTcsIDYyKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuIiwiLnRyYWluLWJ0bnMge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi50cmFpbi1idG5zIGJ1dHRvbiB7XG4gIHdpZHRoOiAxMjBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG4udHJhaW4tYnRucyAuYnRuLW5ldy10YXNrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwYTQ4Yztcbn1cbi5kYmNvbnRlbnQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmRiY29udGVudCAuZGJ0aXRsZSB7XG4gIHdpZHRoOiA5NSU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmRiY29udGVudCAuZGJ0aXRsZSAudGl0bGVUZXh0IHtcbiAgZmxleDogMTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZGJjb250ZW50IC5kYnRpdGxlIC5sZWZ0TGluZSB7XG4gIGZsZXg6IDAgMCAzNiU7XG4gIGhlaWdodDogNXB4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwMzExMjksICMwOTU0OTUpO1xuICBtYXJnaW46IGF1dG8gMDtcbn1cbi5kYmNvbnRlbnQgLmRidGl0bGUgLmxlZnRSZWN0IHtcbiAgd2lkdGg6IDExcHg7XG4gIGhlaWdodDogMTFweDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICBiYWNrZ3JvdW5kOiAjMDk1NDk1O1xuICBtYXJnaW46IGF1dG8gMDtcbn1cbi5kYmNvbnRlbnQgLmRidGl0bGUgLnJpZ2h0TGluZSB7XG4gIGZsZXg6IDAgMCAzNiU7XG4gIGhlaWdodDogNXB4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgIzAzMTEyOSwgIzA5NTQ5NSk7XG4gIG1hcmdpbjogYXV0byAwO1xufVxuLmRiY29udGVudCAuZGJ0aXRsZSAucmlnaHRSZWN0IHtcbiAgd2lkdGg6IDExcHg7XG4gIGhlaWdodDogMTFweDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICBiYWNrZ3JvdW5kOiAjMDk1NDk1O1xuICBtYXJnaW46IGF1dG8gMDtcbn1cbi5kYmNvbnRlbnQgLmRiQ2hhcnRzIHtcbiAgZmxleDogMCAwIDQ4JTtcbiAgaGVpZ2h0OiA3MCU7XG59XG4uZGJjb250ZW50IC5kYlRhYmxlIHtcbiAgZmxleDogMCAwIDQ4JTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmVjaGFydC1ib3gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5lY2hhcnQtYm94IG56LXByb2dyZXNzIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnN0YXRpc3RpY3MtdG9wLFxuLnN0YXRpc3RpY3MtYm90dG9tIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbGV4OiAxO1xuICBwYWRkaW5nOiAxcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwOTRmOGQ7XG59XG4uc3RhdGlzdGljcy10b3Age1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmcxMS5wbmcnKSBuby1yZXBlYXQgMCAwIC8gMTAwJSAxMDAlO1xufVxuLnN0YXRpc3RpY3MtdG9wLXR5cGUge1xuICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmcxMy5wbmcnKSBuby1yZXBlYXQgMCAwIC8gMTAwJSAxMDAlO1xufVxuLnN0YXRpc3RpY3MtdG9wOjpiZWZvcmUsXG4uc3RhdGlzdGljcy1ib3R0b206OmJlZm9yZSxcbi5zdGF0aXN0aWNzLW1haW4tdG9wOjpiZWZvcmUsXG4uc3RhdGlzdGljcy1tYWluLWl0ZW06OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICcnO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IC0xcHg7XG4gIGJvdHRvbTogLTFweDtcbiAgd2lkdGg6IDEwcHg7XG4gIGhlaWdodDogMTBweDtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjMDBhZmRmO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwYWZkZjtcbn1cbi5zdGF0aXN0aWNzLXRvcDo6YWZ0ZXIsXG4uc3RhdGlzdGljcy1ib3R0b206OmFmdGVyLFxuLnN0YXRpc3RpY3MtbWFpbi10b3A6OmFmdGVyLFxuLnN0YXRpc3RpY3MtbWFpbi1pdGVtOjphZnRlciB7XG4gIGNvbnRlbnQ6ICcnO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAtMXB4O1xuICBib3R0b206IC0xcHg7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMwMGFmZGY7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDBhZmRmO1xufVxuLnN0YXRpc3RpY3MtdGl0bGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsZXgtYmFzaXM6IDQwcHg7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9iZzE0LnBuZycpIG5vLXJlcGVhdCAwIDAgLyAxMDAlIDEwMCU7XG59XG4uY29udGVudCB7XG4gIHdpZHRoOiA5OC41JTtcbiAgaGVpZ2h0OiA5NiU7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uY29udGVudCAubGluZUNoYXJ0cyB7XG4gIGZsZXg6IDAgMCA1MCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWluLWhlaWdodDogNTUwcHg7XG59XG4uY29udGVudCAuaW1nTGlzdCB7XG4gIGZsZXg6IDE7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuLmNvbnRlbnQgLmltZ0xpc3QgaDIge1xuICBmbGV4OiAwIDAgMTAwJTtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5jb250ZW50IC5pbWdMaXN0IHVsIHtcbiAgZmxleDogMCAwIDEwMCU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMTAwJTtcbiAgbWF4LWhlaWdodDogNDUwcHg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cbi5jb250ZW50IC5pbWdMaXN0IHVsIGxpIHtcbiAgZmxleDogMCAwIDI1JTtcbiAgcGFkZGluZzogNXB4O1xufVxuLmNvbnRlbnQgLmltZ0xpc3QgdWwgbGkgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uY29udGVudCAuaW1nTGlzdDEge1xuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbi5jb250ZW50IC5pbWdMaXN0MSBpbWcge1xuICBmbGV4OiAwIDAgMjUlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5hbnQtdGFicy1jb250ZW50IHtcbiAgaGVpZ2h0OiA5MCU7XG59XG46aG9zdCA6Om5nLWRlZXAgLmFudC10YWJzLW5hdiB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5hbnQtdGFicy10YWIge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZjtcbn1cbjpob3N0IDo6bmctZGVlcCAuYW50LXRhYnMtdGFiLWFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICMyOTg0ZTQgIWltcG9ydGFudDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyMywgNzEsIDEyMywgMC42NjYpICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG46aG9zdCA6Om5nLWRlZXAgLmFudC10YWJzLWJhciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDIzLCA3MSwgMTIzLCAwLjY2Nik7XG59XG4uc3RhdGlzdGljcy10aXRsZTo6YmVmb3JlIHtcbiAgY29udGVudDogJyc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogLTJweDtcbiAgdG9wOiAtMnB4O1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiAxMHB4O1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICMwMGFmZGY7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMDBhZmRmO1xufVxuLnN0YXRpc3RpY3MtdGl0bGU6OmFmdGVyIHtcbiAgY29udGVudDogJyc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IC0ycHg7XG4gIHRvcDogLTJweDtcbiAgd2lkdGg6IDEwcHg7XG4gIGhlaWdodDogMTBweDtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzAwYWZkZjtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMwMGFmZGY7XG59XG46aG9zdCA6Om5nLWRlZXAgLmFudC1wcm9ncmVzcy10ZXh0IHtcbiAgY29sb3I6IHdoaXRlO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5ibHVlLXRhYmxlIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbjpob3N0IDo6bmctZGVlcCAuYmx1ZS10YWJsZSAuYW50LXRhYmxlIHtcbiAgYm9yZGVyOiBzb2xpZCAxcHggIzBmMzY2YjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbjpob3N0IDo6bmctZGVlcCAuYmx1ZS10YWJsZSAuYW50LXRhYmxlIHRoIHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5ibHVlLXRhYmxlIC5hbnQtdGFibGUgdGgsXG46aG9zdCA6Om5nLWRlZXAgLmJsdWUtdGFibGUgLmFudC10YWJsZSB0ZCB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItYm90dG9tLWNvbG9yOiAjMGYzNjZiO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5ibHVlLXRhYmxlIC5hbnQtdGFibGUgdGggLmFudC1jaGVja2JveC1pbm5lcixcbjpob3N0IDo6bmctZGVlcCAuYmx1ZS10YWJsZSAuYW50LXRhYmxlIHRkIC5hbnQtY2hlY2tib3gtaW5uZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWNvbG9yOiAjMTU5ZmZmO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5ibHVlLXRhYmxlIC5hbnQtdGFibGUgdGhlYWQgdGgge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbjpob3N0IDo6bmctZGVlcCAuYmx1ZS10YWJsZSAuYW50LXRhYmxlIC5hbnQtdGFibGUtdGJvZHkgPiB0ci5hbnQtdGFibGUtcm93OmhvdmVyID4gdGQsXG46aG9zdCA6Om5nLWRlZXAgLmJsdWUtdGFibGUgLmFudC10YWJsZSAuY3VycmVudC1yb3cgPiB0ZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwZDMzNjU7XG59XG46aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMTAwJTtcbn1cbjpob3N0IC5tb2RlbC1jb21wYXJlIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzE1OWZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBhMjk1MjtcbiAgY29sb3I6IHdoaXRlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwcHg7XG4gIHRvcDogMHB4O1xuICB3aWR0aDogMTgwcHg7XG59XG46aG9zdCAubW9kZWwtY29tcGFyZS5zaG93LWNvbXBhcmUge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbjpob3N0IC5tb2RlbC1jb21wYXJlID4gZGl2IHtcbiAgcGFkZGluZzogOHB4IDE2cHg7XG59XG46aG9zdCAubW9kZWwtY29tcGFyZSAubW9kZWwtY29tcGFyZS10aXRsZSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMTU5ZmZmO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG46aG9zdCAubW9kZWwtY29tcGFyZSAubW9kZWwtY29tcGFyZS1idG4ge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzE1OWZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuOmhvc3QgLm1vZGVsLWNvbXBhcmUgLmNvbXBhcmUtbW9kZWwtcm93IHtcbiAgaGVpZ2h0OiA2MHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzE1OWZmZjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuOmhvc3QgLm1vZGVsLWNvbXBhcmUgLmNvbXBhcmUtbW9kZWwtcm93IHNwYW4sXG46aG9zdCAubW9kZWwtY29tcGFyZSAuY29tcGFyZS1tb2RlbC1yb3cgaVtuei1pY29uXSB7XG4gIGxpbmUtaGVpZ2h0OiA0M3B4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG46aG9zdCAubW9kZWwtY29tcGFyZSAuY29tcGFyZS1tb2RlbC1yb3cgaVtuei1pY29uXSB7XG4gIGNvbG9yOiAjMTQ4YWVkO1xufVxuOmhvc3QgLm1vZGVsLWNvbXBhcmUgLmNvbXBhcmUtbW9kZWwtcm93OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBkMzM2NTtcbn1cbjpob3N0IC5tb2RlbC1jb21wYXJlIC5tb2RlbC1jb21wcmUtZGVsIHtcbiAgY29sb3I6ICNiODc1M2U7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbjpob3N0IC5tb2RlbC1jb21wYXJlIC5tb2RlbC1jb21wcmUtZGVsIGEge1xuICBjb2xvcjogI2I4NzUzZTtcbn1cbiJdfQ== */", "[_nghost-%COMP%]     .dbcontent .ant-table.ant-table-bordered .ant-table-container {\n  border: none;\n}\n[_nghost-%COMP%]     .dbcontent .ant-table-body {\n  overflow-y: auto !important;\n}\n[_nghost-%COMP%]     .dbcontent .ant-empty-normal {\n  color: #fff;\n}\n[_nghost-%COMP%]     .dbcontent .ant-table {\n  background: transparent;\n}\n[_nghost-%COMP%]     .dbcontent .ant-table-tbody > tr > td {\n  border: 1px solid #15a0ff;\n  border-top: none;\n}\n[_nghost-%COMP%]     .dbcontent .ant-table-tbody > tr.ant-table-placeholder:hover > td {\n  background: transparent;\n}\n[_nghost-%COMP%]     .dbcontent .ant-table-thead > tr > th {\n  text-align: center;\n  color: #fff;\n  background: #1d4384;\n  border-right: 1px solid #15a0ff;\n  border-top: 1px solid #15a0ff;\n  border-bottom: 1px solid #15a0ff;\n}\n[_nghost-%COMP%]     .dbcontent .ant-table-thead > tr > th:nth-child(1) {\n  border-left: 1px solid #15a0ff;\n}\n[_nghost-%COMP%]     .ant-select-selector {\n  background: transparent !important;\n  color: #Fff;\n}\n[_nghost-%COMP%]     .ant-select-arrow {\n  color: #fff;\n}\n[_nghost-%COMP%]     .train-left {\n  flex-basis: 80%;\n  border-right: 1px solid #149fff;\n  overflow: hidden;\n}\n[_nghost-%COMP%]     .train-area {\n  flex: 1;\n  margin: 10px;\n  overflow: hidden;\n}\n[_nghost-%COMP%]     .train-area-btns {\n  width: 280px;\n  height: 48px;\n  margin: 10px auto;\n  border: 1px solid #15a0ff;\n  border-radius: 6px;\n  overflow: hidden;\n}\n[_nghost-%COMP%]     .train-area-btn-item {\n  flex: 1;\n  color: #fff;\n  height: 48px;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  background-color: transparent;\n}\n[_nghost-%COMP%]     .train-area-btn-item.active {\n  background-color: #15a0ff;\n}\n[_nghost-%COMP%]     .train-table-box {\n  flex: 1;\n  overflow: hidden;\n}\n[_nghost-%COMP%]     .train-right {\n  flex: 20%;\n  overflow: hidden;\n}\n[_nghost-%COMP%]     .train-classifies {\n  flex-basis: 40%;\n  border-bottom: 1px dashed #1f60c2;\n  overflow: hidden;\n}\n[_nghost-%COMP%]     .train-title {\n  color: #fff;\n  padding: 13px 10px;\n  background: url('bg10.png') no-repeat 0 100%;\n}\n[_nghost-%COMP%]     .echart-box {\n  flex: 1;\n  overflow: hidden;\n}\n[_nghost-%COMP%]     .train-images {\n  flex-basis: 60%;\n  overflow: hidden;\n}\n[_nghost-%COMP%]     .detail-info-box {\n  flex: 1;\n  align-items: center;\n  padding: 0 10px;\n  color: #25b3e4;\n  overflow: hidden;\n}\n[_nghost-%COMP%]     .detail-info-type {\n  flex-basis: 30px;\n  align-items: center;\n  width: 100%;\n  padding: 0 20px;\n  margin-top: 10px;\n  background: url('bg08.png') no-repeat 0 0 / 100% 100%;\n}\n[_nghost-%COMP%]     .detail-info-param {\n  flex: 1;\n}\n[_nghost-%COMP%]     .is_mark {\n  color: #27f069;\n}\n[_nghost-%COMP%]     .train-btn-edit {\n  margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6L2ZmL3RhcmdldC1yZWNvZ25pemUtbWdyLWh0bWwtVjAuMi9zcmMvYXBwL3BhZ2VzL2RhdGEtdHJhaW5pbmcvdHJhaW4ubGVzcyIsInRyYWluLmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHTSxZQUFBO0FDRE47QURGQTtFQU1NLDJCQUFBO0FDRE47QURMQTtFQVNNLFdBQUE7QUNETjtBRFJBO0VBWU0sdUJBQUE7QUNETjtBRFhBO0VBZU0seUJBQUE7RUFDQSxnQkFBQTtBQ0ROO0FEZkE7RUFtQk0sdUJBQUE7QUNETjtBRGxCQTtFQXNCTSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLCtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQ0FBQTtBQ0ROO0FERU07RUFDRSw4QkFBQTtBQ0FSO0FEN0JBO0VBcUNJLGtDQUFBO0VBQ0EsV0FBQTtBQ0xKO0FEakNBO0VBMENJLFdBQUE7QUNOSjtBRHBDQTtFQTZDSSxlQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQkFBQTtBQ05KO0FEekNBO0VBbURJLE9BQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNQSjtBRDlDQTtFQXlESSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDUko7QUR0REE7RUFtRUksT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0FDVko7QURoRUE7RUE4RUkseUJBQUE7QUNYSjtBRG5FQTtFQWtGSSxPQUFBO0VBQ0EsZ0JBQUE7QUNaSjtBRHZFQTtFQXVGSSxTQUFBO0VBQ0EsZ0JBQUE7QUNiSjtBRDNFQTtFQTRGSSxlQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQkFBQTtBQ2RKO0FEaEZBO0VBa0dJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLDRDQUFBO0FDZko7QURyRkE7RUF3R0ksT0FBQTtFQUNBLGdCQUFBO0FDaEJKO0FEekZBO0VBNkdJLGVBQUE7RUFDQSxnQkFBQTtBQ2pCSjtBRDdGQTtFQWtISSxPQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDbEJKO0FEcEdBO0VBMEhJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscURBQUE7QUNuQko7QUQ1R0E7RUFtSUksT0FBQTtBQ3BCSjtBRC9HQTtFQXVJSSxjQUFBO0FDckJKO0FEbEhBO0VBMklJLFlBQUE7QUN0QkoiLCJmaWxlIjoidHJhaW4ubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IDo6bmctZGVlcCB7XG4gIC5kYmNvbnRlbnR7XG4gICAgLmFudC10YWJsZS5hbnQtdGFibGUtYm9yZGVyZWQgLmFudC10YWJsZS1jb250YWluZXJ7XG4gICAgICBib3JkZXI6bm9uZTtcbiAgICB9XG4gICAgLmFudC10YWJsZS1ib2R5e1xuICAgICAgb3ZlcmZsb3cteTogYXV0byAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAuYW50LWVtcHR5LW5vcm1hbHtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgIH1cbiAgICAuYW50LXRhYmxle1xuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgfVxuICAgIC5hbnQtdGFibGUtdGJvZHkgPiB0ciA+IHRke1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgIzE1YTBmZjtcbiAgICAgIGJvcmRlci10b3A6IG5vbmU7XG4gICAgfVxuICAgIC5hbnQtdGFibGUtdGJvZHkgPiB0ci5hbnQtdGFibGUtcGxhY2Vob2xkZXI6aG92ZXIgPiB0ZHtcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIH1cbiAgICAuYW50LXRhYmxlLXRoZWFkID4gdHIgPiB0aHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgYmFja2dyb3VuZDogIzFkNDM4NDtcbiAgICAgIGJvcmRlci1yaWdodDoxcHggc29saWQgIzE1YTBmZjtcbiAgICAgIGJvcmRlci10b3A6MXB4IHNvbGlkICMxNWEwZmY7XG4gICAgICBib3JkZXItYm90dG9tOjFweCBzb2xpZCAjMTVhMGZmO1xuICAgICAgJjpudGgtY2hpbGQoMSl7XG4gICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzE1YTBmZjtcbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuXG4gIC5hbnQtc2VsZWN0LXNlbGVjdG9ye1xuICAgIFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICNGZmY7XG4gICAgXG4gIH1cbiAgLmFudC1zZWxlY3QtYXJyb3d7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cbiAgLnRyYWluLWxlZnQge1xuICAgIGZsZXgtYmFzaXM6IDgwJTtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMTQ5ZmZmO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cblxuICAudHJhaW4tYXJlYSB7XG4gICAgZmxleDogMTtcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuXG4gIC50cmFpbi1hcmVhLWJ0bnMge1xuICAgIHdpZHRoOiAyODBweDtcbiAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzE1YTBmZjtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuXG5cbiAgLnRyYWluLWFyZWEtYnRuLWl0ZW0ge1xuICAgIGZsZXg6IDE7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgaGVpZ2h0OiA0OHB4O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIH1cblxuICAudHJhaW4tYXJlYS1idG4taXRlbS5hY3RpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNWEwZmY7XG4gIH1cblxuICAudHJhaW4tdGFibGUtYm94IHtcbiAgICBmbGV4OiAxO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cblxuICAudHJhaW4tcmlnaHQge1xuICAgIGZsZXg6IDIwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG5cbiAgLnRyYWluLWNsYXNzaWZpZXMge1xuICAgIGZsZXgtYmFzaXM6IDQwJTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICMxZjYwYzI7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuXG4gIC50cmFpbi10aXRsZSB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZzogMTNweCAxMHB4O1xuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9iZzEwLnBuZycpIG5vLXJlcGVhdCAwIDEwMCU7XG4gIH1cblxuICAuZWNoYXJ0LWJveCB7XG4gICAgZmxleDogMTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG5cbiAgLnRyYWluLWltYWdlcyB7XG4gICAgZmxleC1iYXNpczogNjAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cblxuICAuZGV0YWlsLWluZm8tYm94IHtcbiAgICBmbGV4OiAxO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMCAxMHB4O1xuICAgIGNvbG9yOiAjMjViM2U0O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cblxuICAuZGV0YWlsLWluZm8tdHlwZSB7XG4gICAgZmxleC1iYXNpczogMzBweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDAgMjBweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9iZzA4LnBuZycpIG5vLXJlcGVhdCAwIDAgflwiL1wiIDEwMCUgMTAwJTtcbiAgfVxuXG4gIC5kZXRhaWwtaW5mby1wYXJhbSB7XG4gICAgZmxleDogMTtcbiAgfVxuXG4gIC5pc19tYXJrIHtcbiAgICBjb2xvcjogIzI3ZjA2OTtcbiAgfVxuXG4gIC50cmFpbi1idG4tZWRpdCB7XG4gICAgbWFyZ2luOiAxMHB4O1xuICB9XG5cbn1cbiIsIjpob3N0IDo6bmctZGVlcCAuZGJjb250ZW50IC5hbnQtdGFibGUuYW50LXRhYmxlLWJvcmRlcmVkIC5hbnQtdGFibGUtY29udGFpbmVyIHtcbiAgYm9yZGVyOiBub25lO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5kYmNvbnRlbnQgLmFudC10YWJsZS1ib2R5IHtcbiAgb3ZlcmZsb3cteTogYXV0byAhaW1wb3J0YW50O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5kYmNvbnRlbnQgLmFudC1lbXB0eS1ub3JtYWwge1xuICBjb2xvcjogI2ZmZjtcbn1cbjpob3N0IDo6bmctZGVlcCAuZGJjb250ZW50IC5hbnQtdGFibGUge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbjpob3N0IDo6bmctZGVlcCAuZGJjb250ZW50IC5hbnQtdGFibGUtdGJvZHkgPiB0ciA+IHRkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzE1YTBmZjtcbiAgYm9yZGVyLXRvcDogbm9uZTtcbn1cbjpob3N0IDo6bmctZGVlcCAuZGJjb250ZW50IC5hbnQtdGFibGUtdGJvZHkgPiB0ci5hbnQtdGFibGUtcGxhY2Vob2xkZXI6aG92ZXIgPiB0ZCB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5kYmNvbnRlbnQgLmFudC10YWJsZS10aGVhZCA+IHRyID4gdGgge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiAjMWQ0Mzg0O1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMTVhMGZmO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgIzE1YTBmZjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMxNWEwZmY7XG59XG46aG9zdCA6Om5nLWRlZXAgLmRiY29udGVudCAuYW50LXRhYmxlLXRoZWFkID4gdHIgPiB0aDpudGgtY2hpbGQoMSkge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICMxNWEwZmY7XG59XG46aG9zdCA6Om5nLWRlZXAgLmFudC1zZWxlY3Qtc2VsZWN0b3Ige1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICBjb2xvcjogI0ZmZjtcbn1cbjpob3N0IDo6bmctZGVlcCAuYW50LXNlbGVjdC1hcnJvdyB7XG4gIGNvbG9yOiAjZmZmO1xufVxuOmhvc3QgOjpuZy1kZWVwIC50cmFpbi1sZWZ0IHtcbiAgZmxleC1iYXNpczogODAlO1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMTQ5ZmZmO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuOmhvc3QgOjpuZy1kZWVwIC50cmFpbi1hcmVhIHtcbiAgZmxleDogMTtcbiAgbWFyZ2luOiAxMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuOmhvc3QgOjpuZy1kZWVwIC50cmFpbi1hcmVhLWJ0bnMge1xuICB3aWR0aDogMjgwcHg7XG4gIGhlaWdodDogNDhweDtcbiAgbWFyZ2luOiAxMHB4IGF1dG87XG4gIGJvcmRlcjogMXB4IHNvbGlkICMxNWEwZmY7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbjpob3N0IDo6bmctZGVlcCAudHJhaW4tYXJlYS1idG4taXRlbSB7XG4gIGZsZXg6IDE7XG4gIGNvbG9yOiAjZmZmO1xuICBoZWlnaHQ6IDQ4cHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuOmhvc3QgOjpuZy1kZWVwIC50cmFpbi1hcmVhLWJ0bi1pdGVtLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNWEwZmY7XG59XG46aG9zdCA6Om5nLWRlZXAgLnRyYWluLXRhYmxlLWJveCB7XG4gIGZsZXg6IDE7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG46aG9zdCA6Om5nLWRlZXAgLnRyYWluLXJpZ2h0IHtcbiAgZmxleDogMjAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuOmhvc3QgOjpuZy1kZWVwIC50cmFpbi1jbGFzc2lmaWVzIHtcbiAgZmxleC1iYXNpczogNDAlO1xuICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICMxZjYwYzI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG46aG9zdCA6Om5nLWRlZXAgLnRyYWluLXRpdGxlIHtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDEzcHggMTBweDtcbiAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2JnMTAucG5nJykgbm8tcmVwZWF0IDAgMTAwJTtcbn1cbjpob3N0IDo6bmctZGVlcCAuZWNoYXJ0LWJveCB7XG4gIGZsZXg6IDE7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG46aG9zdCA6Om5nLWRlZXAgLnRyYWluLWltYWdlcyB7XG4gIGZsZXgtYmFzaXM6IDYwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbjpob3N0IDo6bmctZGVlcCAuZGV0YWlsLWluZm8tYm94IHtcbiAgZmxleDogMTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMCAxMHB4O1xuICBjb2xvcjogIzI1YjNlNDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbjpob3N0IDo6bmctZGVlcCAuZGV0YWlsLWluZm8tdHlwZSB7XG4gIGZsZXgtYmFzaXM6IDMwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwIDIwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9iZzA4LnBuZycpIG5vLXJlcGVhdCAwIDAgLyAxMDAlIDEwMCU7XG59XG46aG9zdCA6Om5nLWRlZXAgLmRldGFpbC1pbmZvLXBhcmFtIHtcbiAgZmxleDogMTtcbn1cbjpob3N0IDo6bmctZGVlcCAuaXNfbWFyayB7XG4gIGNvbG9yOiAjMjdmMDY5O1xufVxuOmhvc3QgOjpuZy1kZWVwIC50cmFpbi1idG4tZWRpdCB7XG4gIG1hcmdpbjogMTBweDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTrainingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './data-training.component.html',
                styleUrls: ['./data-training.component.less', './train.less']
            }]
    }], function () { return [{ type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NzModalService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NzMessageService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/data-training/data-training.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/data-training/data-training.module.ts ***!
  \*************************************************************/
/*! exports provided: DataTrainingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTrainingModule", function() { return DataTrainingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _data_training_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data-training-routing.module */ "./src/app/pages/data-training/data-training-routing.module.ts");
/* harmony import */ var _data_training_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data-training.component */ "./src/app/pages/data-training/data-training.component.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd.js");
/* harmony import */ var _add_training_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-training.component */ "./src/app/pages/data-training/add-training.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _data_train_pipes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./data-train.pipes */ "./src/app/pages/data-training/data-train.pipes.ts");
/* harmony import */ var _model_precision_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./model-precision.component */ "./src/app/pages/data-training/model-precision.component.ts");
/* harmony import */ var _icons_provider_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../icons-provider.module */ "./src/app/icons-provider.module.ts");
/* harmony import */ var _model_compare_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./model-compare.component */ "./src/app/pages/data-training/model-compare.component.ts");












const APP_COMPONENTS = [_data_training_component__WEBPACK_IMPORTED_MODULE_2__["DataTrainingComponent"], _add_training_component__WEBPACK_IMPORTED_MODULE_4__["AddTrainingComponent"], _model_precision_component__WEBPACK_IMPORTED_MODULE_8__["ModelPrecisionComponent"], _model_compare_component__WEBPACK_IMPORTED_MODULE_10__["ModelCompareComponent"]];
const NZ_MODULES = [ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzModalModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzFormModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzInputModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzSelectModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzTreeSelectModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzProgressModule"],
    ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzTableModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzTabsModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzUploadModule"]];
const NG_MODULES = [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]];
const APP_PIPES = [_data_train_pipes__WEBPACK_IMPORTED_MODULE_7__["DataTrainPipes"], _data_train_pipes__WEBPACK_IMPORTED_MODULE_7__["DataTaskPatternPipes"], _data_train_pipes__WEBPACK_IMPORTED_MODULE_7__["DataTaskStatusPipes"], _data_train_pipes__WEBPACK_IMPORTED_MODULE_7__["DataTaskProgressPipes"]];
class DataTrainingModule {
}
DataTrainingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DataTrainingModule });
DataTrainingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DataTrainingModule_Factory(t) { return new (t || DataTrainingModule)(); }, imports: [[_data_training_routing_module__WEBPACK_IMPORTED_MODULE_1__["DataTrainingRoutingModule"], ...NZ_MODULES, ...NG_MODULES, _icons_provider_module__WEBPACK_IMPORTED_MODULE_9__["IconsProviderModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DataTrainingModule, { declarations: [_data_training_component__WEBPACK_IMPORTED_MODULE_2__["DataTrainingComponent"], _add_training_component__WEBPACK_IMPORTED_MODULE_4__["AddTrainingComponent"], _model_precision_component__WEBPACK_IMPORTED_MODULE_8__["ModelPrecisionComponent"], _model_compare_component__WEBPACK_IMPORTED_MODULE_10__["ModelCompareComponent"], _data_train_pipes__WEBPACK_IMPORTED_MODULE_7__["DataTrainPipes"], _data_train_pipes__WEBPACK_IMPORTED_MODULE_7__["DataTaskPatternPipes"], _data_train_pipes__WEBPACK_IMPORTED_MODULE_7__["DataTaskStatusPipes"], _data_train_pipes__WEBPACK_IMPORTED_MODULE_7__["DataTaskProgressPipes"], _data_train_pipes__WEBPACK_IMPORTED_MODULE_7__["DataTrainPipes"]], imports: [_data_training_routing_module__WEBPACK_IMPORTED_MODULE_1__["DataTrainingRoutingModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzModalModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzFormModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzInputModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzSelectModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzTreeSelectModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzProgressModule"],
        ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzTableModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzTabsModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzUploadModule"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _icons_provider_module__WEBPACK_IMPORTED_MODULE_9__["IconsProviderModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTrainingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [...APP_COMPONENTS, ...APP_PIPES, _data_train_pipes__WEBPACK_IMPORTED_MODULE_7__["DataTrainPipes"]],
                imports: [_data_training_routing_module__WEBPACK_IMPORTED_MODULE_1__["DataTrainingRoutingModule"], ...NZ_MODULES, ...NG_MODULES, _icons_provider_module__WEBPACK_IMPORTED_MODULE_9__["IconsProviderModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/data-training/model-compare.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/data-training/model-compare.component.ts ***!
  \****************************************************************/
/*! exports provided: ModelCompareComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelCompareComponent", function() { return ModelCompareComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function ModelCompareComponent_tr_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const model_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](model_r1 == null ? null : model_r1.compareName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", model_r1 == null ? null : model_r1.recall, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", model_r1 == null ? null : model_r1.precision, "%");
} }
class ModelCompareComponent {
    constructor() {
        this.comparingDataTrainList = [];
    }
}
ModelCompareComponent.ɵfac = function ModelCompareComponent_Factory(t) { return new (t || ModelCompareComponent)(); };
ModelCompareComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModelCompareComponent, selectors: [["ng-component"]], inputs: { comparingDataTrainList: "comparingDataTrainList" }, decls: 11, vars: 1, consts: [[4, "ngFor", "ngForOf"]], template: function ModelCompareComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u53EC\u56DE\u7387");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u51C6\u786E\u7387");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ModelCompareComponent_tr_10_Template, 7, 3, "tr", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.comparingDataTrainList);
    } }, directives: [ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__["NzTheadComponent"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__["NzTrDirective"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__["NzTableCellDirective"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__["NzThMeasureDirective"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__["NzTbodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n  color: #FFF;\n  border: 1px solid #295995;\n}\ntable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background-color: #0d3365;\n}\ntable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 4px 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6L2ZmL3RhcmdldC1yZWNvZ25pemUtbWdyLWh0bWwtVjAuMi9zcmMvYXBwL3BhZ2VzL2RhdGEtdHJhaW5pbmcvbW9kZWwtY29tcGFyZS5jb21wb25lbnQubGVzcyIsIm1vZGVsLWNvbXBhcmUuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FDQ0Y7QURKQTtFQUtJLHlCQUFBO0FDRUo7QURQQTs7RUFTSSxnQkFBQTtBQ0VKIiwiZmlsZSI6Im1vZGVsLWNvbXBhcmUuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogI0ZGRjtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDQxLCA4OSwgMTQ5KTtcbiAgdGhlYWR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBkMzM2NTtcbiAgfVxuXG4gIHRoLCB0ZCB7XG4gICAgcGFkZGluZzogNHB4IDhweDtcbiAgfVxufVxuIiwidGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6ICNGRkY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMyOTU5OTU7XG59XG50YWJsZSB0aGVhZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwZDMzNjU7XG59XG50YWJsZSB0aCxcbnRhYmxlIHRkIHtcbiAgcGFkZGluZzogNHB4IDhweDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModelCompareComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './model-compare.component.html',
                styleUrls: ['./model-compare.component.less']
            }]
    }], null, { comparingDataTrainList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/pages/data-training/model-precision.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/data-training/model-precision.component.ts ***!
  \******************************************************************/
/*! exports provided: ModelPrecisionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelPrecisionComponent", function() { return ModelPrecisionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _core_http_entity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/http-entity */ "./src/app/core/http-entity.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






const _c0 = function (a0) { return { right: a0 }; };
class ModelPrecisionComponent {
    constructor(http) {
        this.http = http;
    }
    ngOnInit() {
        this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL}/v1/data_train/${this.trainId}`).subscribe((result) => {
            if (_core_http_entity__WEBPACK_IMPORTED_MODULE_2__["HttpResult"].succeed(result.code)) {
                this.dataTrain = result.data;
            }
        });
    }
}
ModelPrecisionComponent.ɵfac = function ModelPrecisionComponent_Factory(t) { return new (t || ModelPrecisionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
ModelPrecisionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModelPrecisionComponent, selectors: [["ng-component"]], inputs: { trainId: "trainId" }, decls: 17, vars: 8, consts: [[1, "flex-row"], [2, "word-break", "keep-all"], [1, "precision-progress-bar"], [2, "margin-left", "2px", "overflow", "hidden"], ["src", "assets/IMG_2555.PNG", 3, "ngStyle"], [2, "min-width", "60px"], [1, "flex-row", 2, "margin-top", "10px"]], template: function ModelPrecisionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u53EC\u56DE\u7387");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u51C6\u786E\u7387");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, 100 - (ctx.dataTrain == null ? null : ctx.dataTrain.recall) + "%"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.dataTrain == null ? null : ctx.dataTrain.recall, "% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, 100 - (ctx.dataTrain == null ? null : ctx.dataTrain.precision) + "%"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.dataTrain == null ? null : ctx.dataTrain.precision, "% ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"]], styles: ["[_nghost-%COMP%] {\n  color: #FFF;\n}\n[_nghost-%COMP%]   .precision-progress-bar[_ngcontent-%COMP%] {\n  overflow: hidden;\n  flex-grow: 1;\n  margin: 0 10px;\n  background-image: url('IMG_2557.PNG');\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position-y: 4px;\n}\n[_nghost-%COMP%]   .precision-progress-bar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6L2ZmL3RhcmdldC1yZWNvZ25pemUtbWdyLWh0bWwtVjAuMi9zcmMvYXBwL3BhZ2VzL2RhdGEtdHJhaW5pbmcvbW9kZWwtcHJlY2lzaW9uLmNvbXBvbmVudC5sZXNzIiwibW9kZWwtcHJlY2lzaW9uLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQ0NGO0FERkE7RUFJSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EscUNBQUE7RUFDQSw0QkFBQTtFQUNBLHdCQUFBO0VBQ0EsMEJBQUE7QUNDSjtBRFhBO0VBYU0sa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDQ04iLCJmaWxlIjoibW9kZWwtcHJlY2lzaW9uLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBjb2xvcjogI0ZGRjtcblxuICAucHJlY2lzaW9uLXByb2dyZXNzLWJhciB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgbWFyZ2luOiAwIDEwcHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL0lNR18yNTU3LlBOR1wiKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IDRweDtcblxuICAgIGltZyB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gICAgfVxuICB9XG59XG5cbjpob3N0IDo6bmctZGVlcCB7XG4gIC8vLmFudC1wcm9ncmVzcyB7XG4gIC8vICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgLy8gIG1hcmdpbi1ib3R0b206IDhweDtcbiAgLy8gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgLy99XG59XG5cbiIsIjpob3N0IHtcbiAgY29sb3I6ICNGRkY7XG59XG46aG9zdCAucHJlY2lzaW9uLXByb2dyZXNzLWJhciB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGZsZXgtZ3JvdzogMTtcbiAgbWFyZ2luOiAwIDEwcHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9JTUdfMjU1Ny5QTkdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiA0cHg7XG59XG46aG9zdCAucHJlY2lzaW9uLXByb2dyZXNzLWJhciBpbWcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModelPrecisionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './model-precision.component.html',
                styleUrls: ['./model-precision.component.less']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, { trainId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=data-training-data-training-module.js.map