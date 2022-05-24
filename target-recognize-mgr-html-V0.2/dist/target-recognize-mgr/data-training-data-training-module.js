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
        this.computePlatform = 1;
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
            computePlatform: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
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
            var computePlatform;
            switch (formValue.computePlatform) {
                case 1:
                    computePlatform = "GPU";
                    break;
                case 2:
                    computePlatform = "CPU";
                    break;
                case 3:
                    computePlatform = "hisilicon asic";
                    break;
                case 4:
                    computePlatform = "online";
                    break;
                default:
                    computePlatform = "GPU";
                    break;
            }
            if (this.trainId) {
                // 修改
                this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API_URL}/v1/data_train`, {
                    id: this.trainId,
                    taskName: formValue.taskName,
                    taskPattern: formValue.taskPattern,
                    normModel: formValue.normModel,
                    taskMode: formValue.taskMode,
                    taskSampleType: sampleIds,
                    computePlatform
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
                    taskSampleType: sampleIds,
                    computePlatform
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
                console.log();
                switch (result.data.computePlatform) {
                    case "GPU":
                        this.computePlatform = 1;
                        break;
                    case "CPU":
                        this.computePlatform = 2;
                        break;
                    case "hisilicon asic":
                        this.computePlatform = 3;
                        break;
                    case "online":
                        this.computePlatform = 4;
                        break;
                    default:
                        this.computePlatform = 1;
                        break;
                }
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
    } }, inputs: { trainId: "trainId" }, decls: 43, vars: 36, consts: [["nz-form", "", 3, "formGroup", "ngSubmit"], ["nzSm", "6", 3, "nzXs"], ["nzErrorTip", "\u8BF7\u586B\u5199\u4EFB\u52A1\u540D\u79F0!", 3, "nzSm", "nzXs"], ["formControlName", "taskName", "nz-input", ""], ["nzErrorTip", "\u8BF7\u586B\u5199\u6A21\u578B\u8BF4\u660E!", 3, "nzSm", "nzXs"], ["formControlName", "taskPattern", "nz-input", "", "id", "taskPattern", "name", "taskPattern", "maxlength", "400"], ["nzErrorTip", "\u8BF7\u9009\u62E9\u57FA\u51C6\u6A21\u578B!", 3, "nzSm", "nzXs"], ["formControlName", "normModel"], ["nzLabel", "\u9AD8\u7CBE\u5EA6", 3, "nzValue"], ["nzLabel", "\u4F4E\u65F6\u5EF6", 3, "nzValue"], ["nzLabel", "\u5E73\u8861", 3, "nzValue"], ["nzLabel", "\u8FB9\u7F18", 3, "nzValue"], ["nzLabel", "\u7EC8\u7AEF", 3, "nzValue"], ["formControlName", "taskMode"], ["nzLabel", "\u589E\u91CF\u8BAD\u7EC3", 3, "nzValue"], ["nzLabel", "\u91CD\u65B0\u8BAD\u7EC3", 3, "nzValue"], ["nzErrorTip", "\u8BF7\u9009\u62E9\u8BA1\u7B97\u5E73\u53F0!", 3, "nzSm", "nzXs"], ["formControlName", "computePlatform", 3, "ngModel", "ngModelChange"], ["nzLabel", "gpu", 3, "nzValue"], ["nzLabel", "cpu", 3, "nzValue"], ["nzLabel", "hisilicon asic", 3, "nzValue"], ["nzLabel", "online", 3, "nzValue"], ["formControlName", "sampleCategory", "nzCheckable", "", 2, "width", "275px", 3, "nzNodes", "nzDropdownMatchSelectWidth", "nzDropdownStyle", "nzAsyncData", "nzExpandChange"], ["sampleTreeSelect", ""]], template: function AddTrainingComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\u8BA1\u7B97\u5E73\u53F0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "nz-form-control", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "nz-select", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddTrainingComponent_Template_nz_select_ngModelChange_32_listener($event) { return ctx.computePlatform = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "nz-option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "nz-option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "nz-option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "nz-option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "nz-form-label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "\u6570\u636E\u7C7B\u522B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "nz-form-control", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "nz-tree-select", 22, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzExpandChange", function AddTrainingComponent_Template_nz_tree_select_nzExpandChange_41_listener($event) { return ctx.onExpandChange($event); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.computePlatform);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 14)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzNodes", ctx.nodes)("nzDropdownMatchSelectWidth", true)("nzDropdownStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](35, _c1))("nzAsyncData", true);
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









const _c0 = function (a0) { return { "recomend": a0 }; };
function DataTrainingComponent_div_1_tr_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r19 = ctx.$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, data_r19.taskName == ctx_r15.recommend));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r19.taskName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r19.precision);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r19.lossRate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r19.samplesTotal);
} }
function DataTrainingComponent_div_1_th_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r20 = ctx.$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, item_r20.taskName == ctx_r17.recommend));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r20.taskName);
} }
function DataTrainingComponent_div_1_td_44_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r23);
} }
function DataTrainingComponent_div_1_td_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DataTrainingComponent_div_1_td_44_div_1_Template, 3, 1, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const items_r21 = ctx.$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, items_r21.taskName == ctx_r18.recommend));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", items_r21.leftTableData);
} }
const _c1 = function () { return { x: "", y: "100px" }; };
const _c2 = function () { return { x: "", y: "500px" }; };
function DataTrainingComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u6BD4\u5BF9\u7ED3\u679C ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataTrainingComponent_div_1_Template_i_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.handleCancel1(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u6A21\u578B\u7CBE\u5EA6\u66F2\u7EBF");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "nz-table", 40, 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\u8BAD\u7EC3\u7248\u672C");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\u8BAD\u7EC3\u7CBE\u5EA6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Loss\u503C");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\u6570\u636E\u603B\u6570");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, DataTrainingComponent_div_1_tr_28_Template, 9, 7, "tr", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\u5206\u7C7B\u6570\u636E\u8BE6\u60C5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "nz-table", 44, 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, DataTrainingComponent_div_1_th_41_Template, 2, 4, "th", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, DataTrainingComponent_div_1_td_44_Template, 2, 4, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](38);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzData", ctx_r0.tableData)("nzFrontPagination", false)("nzScroll", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _r14.data);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzData", ctx_r0.tableData)("nzFrontPagination", false)("nzScroll", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.tableData);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _r16.data);
} }
function DataTrainingComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u4E0B\u8F7D ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataTrainingComponent_div_2_Template_i_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r26.handleCancel2(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "svg", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataTrainingComponent_div_2_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r28.download("cpu"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "CPU\u8BA1\u7B97");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "svg", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "path", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "path", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "path", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "path", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "path", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataTrainingComponent_div_2_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r29.download("gpu"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "GPU\u8BA1\u7B97");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "svg", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "path", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataTrainingComponent_div_2_Template_button_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r30.download("hs"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\u6D77\u601DNNIE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "svg", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "path", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataTrainingComponent_div_2_Template_button_click_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r31.download("zx"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\u5728\u7EBF\u670D\u52A1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DataTrainingComponent_div_3_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r33, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function DataTrainingComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataTrainingComponent_div_3_Template_i_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r34.handleCancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nz-tabset", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzSelectChange", function DataTrainingComponent_div_3_Template_nz_tabset_nzSelectChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r36.tabChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nz-tab", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h2", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u8BC4\u4EF7\u6837\u672C\u5E93\u4E2D\u7684\u8BC6\u522B\u9519\u8BEF");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, DataTrainingComponent_div_3_div_13_Template, 2, 1, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "nz-tab", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u6D4B\u8BD5: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u6A21\u578B\u7CBE\u5EA6\uFF1A", ctx_r2.precision, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.jdcurver);
} }
function DataTrainingComponent_ng_container_15_nz_option_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-option", 88);
} if (rf & 2) {
    const item_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", item_r38)("nzLabel", item_r38);
} }
function DataTrainingComponent_ng_container_15_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-select", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DataTrainingComponent_ng_container_15_Template_nz_select_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r39.selectData = $event; })("nzOpenChange", function DataTrainingComponent_ng_container_15_Template_nz_select_nzOpenChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r41.nzOpenChange($event); })("ngModelChange", function DataTrainingComponent_ng_container_15_Template_nz_select_ngModelChange_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r42.ngModelChange(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DataTrainingComponent_ng_container_15_nz_option_2_Template, 1, 2, "nz-option", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.selectData);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.selectList);
} }
function DataTrainingComponent_ng_container_16_Template(rf, ctx) { if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataTrainingComponent_ng_container_16_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r43.endTask(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u6682\u505C");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function DataTrainingComponent_ng_container_17_Template(rf, ctx) { if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataTrainingComponent_ng_container_17_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r45.startCompare(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u5F00\u59CB\u5BF9\u6BD4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function DataTrainingComponent_ng_container_18_Template(rf, ctx) { if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataTrainingComponent_ng_container_18_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r47.trainResume(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u7EE7\u7EED\u8BAD\u7EC3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function DataTrainingComponent_button_21_Template(rf, ctx) { if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataTrainingComponent_button_21_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r50); const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r49.addTask(0); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u65B0\u5EFA\u4EFB\u52A1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DataTrainingComponent_th_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u64CD\u4F5C");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DataTrainingComponent_th_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u53D1\u5E03");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DataTrainingComponent_tr_43_td_18_Template(rf, ctx) { if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataTrainingComponent_tr_43_td_18_Template_button_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r56); const data_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r55.checkModelPrecision($event, data_r51); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u6A21\u578B\u7CBE\u5EA6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DataTrainingComponent_tr_43_td_19_Template(rf, ctx) { if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataTrainingComponent_tr_43_td_19_Template_button_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59); const data_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r58.download1($event, data_r51); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u53D1\u5E03\u4E3A");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DataTrainingComponent_tr_43_Template(rf, ctx) { if (rf & 1) {
    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataTrainingComponent_tr_43_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r62); const data_r51 = ctx.$implicit; const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r61.tableClick(data_r51.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzCheckedChange", function DataTrainingComponent_tr_43_Template_td_nzCheckedChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r62); const data_r51 = ctx.$implicit; const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return (ctx_r63.mapOfCheckedId[data_r51.id] = $event); })("nzCheckedChange", function DataTrainingComponent_tr_43_Template_td_nzCheckedChange_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r62); const ids_r52 = ctx.index; const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r64.refreshStatus(ids_r52); });
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, DataTrainingComponent_tr_43_td_18_Template, 3, 0, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, DataTrainingComponent_tr_43_td_19_Template, 3, 0, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r51 = ctx.$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("current-row", (ctx_r11.dataTrain == null ? null : ctx_r11.dataTrain.id) === data_r51.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzChecked", ctx_r11.mapOfCheckedId[data_r51.id]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r51.taskName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r51.typeSourceName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 11, data_r51.taskMode));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 13, data_r51.taskPattern));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 15, data_r51.taskStatus));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](17, 17, data_r51.createdTime, "yyyy-MM-dd HH:mm:ss"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.flag === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.flag === 1);
} }
function DataTrainingComponent_ng_container_44_Template(rf, ctx) { if (rf & 1) {
    const _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u4EFB\u52A1\u8FDB\u5EA6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "nz-progress", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "taskProgress");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u8BE6\u7EC6\u4FE1\u606F");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u4EFB\u52A1\u540D\u79F0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u4EFB\u52A1\u8BF4\u660E");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\u7C7B\u522B");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\u5E94\u7528\u573A\u666F");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\u4EFB\u52A1\u6A21\u5F0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](37, "taskPattern");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "\u89E6\u53D1\u6761\u4EF6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "\u6BCF\u65E5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "\u4EFB\u52A1\u65B9\u5F0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](48, "trainTaskMode");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataTrainingComponent_ng_container_44_Template_button_click_49_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r66); const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r65.addTask(ctx_r65.dataTrain.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "\u7F16\u8F91");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzPercent", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 7, ctx_r12.dataTrain == null ? null : ctx_r12.dataTrain.taskProgress));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r12.dataTrain == null ? null : ctx_r12.dataTrain.taskName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r12.dataTrain == null ? null : ctx_r12.dataTrain.taskPattern);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r12.dataTrain == null ? null : ctx_r12.dataTrain.typeSourceName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r12.dataTrain == null ? null : ctx_r12.dataTrain.taskModeName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](37, 9, ctx_r12.dataTrain == null ? null : ctx_r12.dataTrain.taskPattern));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](48, 11, ctx_r12.dataTrain == null ? null : ctx_r12.dataTrain.taskMode));
} }
function DataTrainingComponent_div_50_Template(rf, ctx) { if (rf & 1) {
    const _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataTrainingComponent_div_50_Template_i_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r69); const cdt_r67 = ctx.$implicit; const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r68.removeCompareItem(cdt_r67); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cdt_r67 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cdt_r67.compareName);
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
        this.listOfData1 = [];
        this.listOfData2 = [];
        this.mapOfCheckedId = {};
        this.status = 'STATUS';
        this.compareDisplay = false;
        this.rightComponent = false;
        this.leftTableData1 = [];
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
        this.tableData = [];
        this.isVisible2 = false;
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
    startInterval() {
        this.intervalLoadTraining = setInterval(() => {
            if (this.status == 'STATUS') {
                this.loadTraining1();
            }
            else {
                this.loadTraining();
            }
        }, 1000 * 30);
    }
    stopInterval() {
        clearInterval(this.intervalLoadTraining);
    }
    nzOpenChange(e) {
        if (e) {
            this.stopInterval();
        }
        else {
            this.startInterval();
        }
    }
    ngAfterViewInit() {
        //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
        //Add 'implements AfterViewInit' to the class.
        this.loadTraining1();
        this.startInterval();
    }
    ngOnDestroy() {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.stopInterval();
    }
    download1(e, d) {
        this.isVisible2 = true;
        this.downloadId = d.id;
    }
    download(type) {
        let deployModelUrls;
        switch (type) {
            case 'cpu':
                for (let index = 0; index < this.listOfData.length; index++) {
                    const element = this.listOfData[index];
                    if (element.id == this.downloadId) {
                        deployModelUrls = JSON.parse(element.deployModelUrls);
                    }
                }
                for (let index = 0; index < deployModelUrls.length; index++) {
                    const element = deployModelUrls[index];
                    if (element.type == "cpuUrl") {
                        window.open(element.url, "_blank");
                    }
                }
                break;
            case 'gpu':
                for (let index = 0; index < this.listOfData.length; index++) {
                    const element = this.listOfData[index];
                    if (element.id == this.downloadId) {
                        deployModelUrls = JSON.parse(element.deployModelUrls);
                    }
                }
                for (let index = 0; index < deployModelUrls.length; index++) {
                    const element = deployModelUrls[index];
                    if (element.type == "gpuUrl") {
                        window.open(element.url, "_blank");
                    }
                }
                break;
            case 'hs':
                for (let index = 0; index < this.listOfData.length; index++) {
                    const element = this.listOfData[index];
                    if (element.id == this.downloadId) {
                        deployModelUrls = JSON.parse(element.deployModelUrls);
                    }
                }
                for (let index = 0; index < deployModelUrls.length; index++) {
                    const element = deployModelUrls[index];
                    if (element.type == "hisiliconUrl") {
                        window.open(element.url, "_blank");
                    }
                }
                break;
            case 'zx':
                for (let index = 0; index < this.listOfData.length; index++) {
                    const element = this.listOfData[index];
                    if (element.id == this.downloadId) {
                        deployModelUrls = JSON.parse(element.deployModelUrls);
                    }
                }
                for (let index = 0; index < deployModelUrls.length; index++) {
                    const element = deployModelUrls[index];
                    if (element.type == "onlineUrl") {
                        window.open(element.url, "_blank");
                    }
                }
                break;
            default:
                break;
        }
        this.isVisible2 = false;
    }
    fileChange() {
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
    loadTraining1() {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().append('status', 'STATUS');
        this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_URL}/v1/data_train/`, { params }).subscribe((result) => {
            if (src_app_core_http_entity__WEBPACK_IMPORTED_MODULE_3__["HttpResult"].succeed(result.code)) {
                this.listOfData = result.data.records;
                // if(this.selectData == "全部") {
                //   this.listOfData = result.data.records;
                //   this.dataTotal = result.data.total;
                //   this.pageIndex = result.data.current;
                //   if(this.status != 'LINE_UP' && this.status != 'STATUS' ){
                //       this.loadSelectData(this.listOfData);
                //   }
                //     this.listOfData2 = this.listOfData 
                //   }
                let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().append('status', 'END');
                this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_URL}/v1/data_train/`, { params }).subscribe((result) => {
                    if (src_app_core_http_entity__WEBPACK_IMPORTED_MODULE_3__["HttpResult"].succeed(result.code)) {
                        if (this.selectData == "全部") {
                            for (let index = 0; index < result.data.records.length; index++) {
                                const element = result.data.records[index];
                                this.listOfData.push(element);
                            }
                            this.dataTotal += result.data.total;
                            this.pageIndex = result.data.current;
                            this.listOfData2 = this.listOfData;
                        }
                        console.log(this.listOfData);
                    }
                });
            }
        });
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
        if (this.status != 'STATUS') {
            this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_URL}/v1/data_train/`, { params }).subscribe((result) => {
                if (src_app_core_http_entity__WEBPACK_IMPORTED_MODULE_3__["HttpResult"].succeed(result.code)) {
                    if (this.selectData == "全部") {
                        this.listOfData = result.data.records;
                        this.dataTotal = result.data.total;
                        this.pageIndex = result.data.current;
                        if (this.status != 'LINE_UP' && this.status != 'STATUS' && this.status != 'END') {
                            this.loadSelectData(this.listOfData);
                        }
                        this.listOfData2 = this.listOfData;
                    }
                }
            });
        }
    }
    loadSelectData(listOfData) {
        this.selectList = this.selectList.splice(0, 1);
        var lastClass = {};
        for (let index = 0; index < listOfData.length; index++) {
            const element = listOfData[index];
            lastClass[element.id] = [];
            if (element.taskSampleType.indexOf(",") == -1) {
                this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_URL}/v1/sample-oss-types/${element.taskSampleType}`).subscribe((result) => {
                    if (src_app_core_http_entity__WEBPACK_IMPORTED_MODULE_3__["HttpResult"].succeed(result.code)) {
                        if (this.selectList.indexOf(result.data.sampleTypeName) == -1) {
                            this.selectList.push(result.data.sampleTypeName);
                        }
                        lastClass[element.id].push(result.data.sampleTypeName);
                    }
                });
            }
            else {
                let elementArr = element.taskSampleType.split(",");
                for (let i = 0; i < elementArr.length; i++) {
                    let value = elementArr[i];
                    this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_URL}/v1/sample-oss-types/${value}`).subscribe((result) => {
                        if (src_app_core_http_entity__WEBPACK_IMPORTED_MODULE_3__["HttpResult"].succeed(result.code)) {
                            lastClass[element.id].push(result.data.sampleTypeName);
                        }
                    });
                }
            }
            if (index == (listOfData.length - 1)) {
                setTimeout(() => {
                    for (const key in lastClass) {
                        var selectString = lastClass[key].sort().join(",");
                        if (this.selectList.indexOf(selectString) == -1) {
                            this.selectList.push(selectString);
                        }
                        for (let index = 0; index < listOfData.length; index++) {
                            const element = listOfData[index];
                            if (element.id == (parseInt(key))) {
                                element.lastClass = selectString;
                            }
                        }
                    }
                }, 200);
            }
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
                this.loadTraining1();
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
        this.flag = flag;
        this.compareDisplay = false;
        if (flag == 0) {
            this.status = 'STATUS';
            console.log('点击进行中');
            this.selectData = "全部";
            this.loadTraining1();
        }
        if (flag == 1) {
            console.log('点击已经结束');
            this.selectList = this.selectList.splice(0, 1);
            this.selectData = "全部";
            this.status = 'OVER';
            //加载进行中的数据
            this.loadTraining();
        }
        if (flag == -1) {
            this.status = 'LINE_UP';
            console.log('点击排队中');
            this.selectData = "全部";
            this.loadTraining();
        }
    }
    ngModelChange() {
        this.selectData == "全部" ? this.compareDisplay = false : this.compareDisplay = true;
        this.listOfData1 = [];
        if (this.compareDisplay) {
            for (let index = 0; index < this.listOfData2.length; index++) {
                const element = this.listOfData2[index];
                if (element.lastClass == this.selectData) {
                    this.listOfData1.push(element);
                }
            }
            this.listOfData = this.listOfData1;
        }
        else {
            this.listOfData = this.listOfData2;
        }
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
    //对比
    startCompare() {
        this.tableData = [];
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
        for (let index = 0; index < this.listOfData.length; index++) {
            const element = this.listOfData[index];
            for (let index = 0; index < checkedCameraIds.length; index++) {
                const element2 = checkedCameraIds[index];
                if (element.id == element2) {
                    this.tableData.push(element);
                }
            }
        }
        var Arr1 = [];
        var leftTableData = {
            id: "",
            data: []
        };
        for (let index = 0; index < checkedCameraIds.length; index++) {
            // checkedCameraIds[index]
            axios__WEBPACK_IMPORTED_MODULE_6___default.a.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_URL}/v1/data_train/queryTaskSampleType?taskId=${checkedCameraIds[index]}`, { taskId: checkedCameraIds[index] }, {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('Bearer'),
                    'TR-Role': 'TR-User'
                }
            })
                .then((result) => {
                let resultData = result.data.data;
                let Arr2 = [];
                for (let index = 0; index < resultData.length; index++) {
                    const element = resultData[index].sampleTypeName;
                    Arr2.push(element);
                    if (Arr1.indexOf(element) == -1)
                        Arr1.push(element);
                }
                if (Arr1.join(",") != Arr2.join(",")) {
                    for (let i = 0; i < Arr1.length; i++) {
                        const element = Arr1[i];
                        if (Arr2.indexOf(element) == -1) {
                            Arr2.splice(i, 0, "-");
                        }
                    }
                }
                leftTableData.id = resultData[0].taskId;
                leftTableData.data = Arr2;
                for (let i = 0; i < this.listOfData.length; i++) {
                    const element = this.listOfData[i];
                    if (element.id == leftTableData.id)
                        element.leftTableData = leftTableData.data;
                }
            });
        }
        this.isVisible1 = true;
        var dataList = this.listOfData.map((item) => {
            if (this.mapOfCheckedId[item.id]) {
                return item;
            }
        });
        this.initModeLineCharts1(dataList);
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
                this.loadTraining1();
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
    handleCancel2() {
        this.isVisible2 = false;
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
        // preY 下底 nextY 上底 nextX-preX 高 
        var maxArea = -1;
        var maxAreaIndex;
        for (let i = 0; i < dataset.length; i++) {
            const element = dataset[i];
            var area = 0;
            element.source = element.source.reverse();
            for (let index = 0; index < (element.source.length - 1); index++) {
                const element1 = element.source[index];
                const element2 = element.source[index + 1];
                // console.log(element1,element2)
                area += ((element1[1] * 1 + element2[1] * 1) * (element2[0] * 1 - element1[0] * 1)) / 2;
            }
            if (area > maxArea)
                maxArea = area;
            maxAreaIndex = i;
        }
        this.recommend = series[maxAreaIndex].name.split("---")[0];
        series[maxAreaIndex].name += "(推荐)";
        series[maxAreaIndex].itemStyle = {
            normal: {
                color: 'red',
                lineStyle: {
                    color: 'red' //改变折线颜色
                }
            }
        };
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
DataTrainingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DataTrainingComponent, selectors: [["ng-component"]], decls: 58, vars: 28, consts: [[1, "flex-row", 2, "height", "100%"], ["nzTitle", "The first Modal", "class", "statistics-top flex-column", "style", "height: 80%;\nwidth:70%;\nposition: absolute;\nz-index: 9999;\nbackground: #031129;\nmargin: 50px 10%;\n", 4, "ngIf"], ["nzTitle", "The first Modal", "class", "statistics-top flex-column", "style", "height: 50%;\nwidth: 80%;\nposition: absolute;\nz-index: 9999;\nbackground: #031129;\nmargin: 15% 5%;\ndisplay: flex;\n", 4, "ngIf"], ["nzTitle", "The first Modal", "class", "statistics-top flex-column", "style", "height: 80%;\nwidth: 80%;\nposition: absolute;\nz-index: 9999;\nbackground: #031129;\nmargin: 50px 5%;\n", 4, "ngIf"], [1, "train-left", "flex-row"], [1, "train-area", "flex-column"], [1, "train-area-btns", "flex-row"], [1, "train-area-btn-item", 3, "click"], [1, "train-table-box"], [1, "train-btns", 2, "position", "relative"], [4, "ngIf"], [1, "btn", "btn-remove", 3, "click"], ["class", "btn btn-new-task", 3, "click", 4, "ngIf"], [1, "flex-column"], ["nzShowSizeChanger", "", 1, "blue-table", 3, "nzData", "nzShowPagination", "nzTotal", "nzPageIndex", "nzPageSize", "nzPageIndexChange", "nzPageSizeChange"], ["rowSelectionTable", ""], [3, "nzChecked", "nzIndeterminate", "nzCheckedChange"], [3, "current-row", "click", 4, "ngFor", "ngForOf"], [1, "model-compare"], [1, "model-compare-title"], ["nz-icon", "", "nzType", "close", "nzTheme", "outline", 3, "click"], ["class", "compare-model-row", 4, "ngFor", "ngForOf"], [1, "model-compare-btn"], [1, "btn", 3, "click"], [1, "model-compre-del"], ["nz-icon", "", "nzType", "delete", "nzTheme", "outline"], ["nz-button", "", "nzType", "link", 3, "click"], ["nzTitle", "The first Modal", 1, "statistics-top", "flex-column", 2, "height", "80%", "width", "70%", "position", "absolute", "z-index", "9999", "background", "#031129", "margin", "50px 10%"], [1, "statistics-title", 2, "position", "relative"], [1, "close", 2, "width", "30px", "height", "30px", "position", "absolute", "right", "0px", "top", "0px"], ["nz-icon", "", "nzType", "close", "nzTheme", "outline", 2, "cursor", "pointer", 3, "click"], [1, "dbcontent"], [1, "dbCharts"], [1, "dbtitle"], [1, "leftLine"], [1, "leftRect"], [1, "titleText"], [1, "rightRect"], [1, "rightLine"], ["id", "lineCharts1", 2, "width", "100%", "height", "70%"], [2, "margin-left", "20px", "text-align", "center", 3, "nzData", "nzFrontPagination", "nzScroll"], ["basicTable", ""], [3, "ngClass", 4, "ngFor", "ngForOf"], [1, "dbTable"], [2, "margin-left", "20px", "margin-top", "20px", 3, "nzData", "nzFrontPagination", "nzScroll"], ["basicTable1", ""], ["nzBreakWord", "", "style", "padding: 0;", 3, "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass"], ["nzBreakWord", ""], ["nzBreakWord", "", 2, "padding", "0", 3, "ngClass"], ["style", "border-bottom: 1px solid #15a0ff;min-height:70px;text-align: center;", 4, "ngFor", "ngForOf"], [2, "border-bottom", "1px solid #15a0ff", "min-height", "70px", "text-align", "center"], [2, "display", "inline-block", "margin", "15% 0"], ["nzTitle", "The first Modal", 1, "statistics-top", "flex-column", 2, "height", "50%", "width", "80%", "position", "absolute", "z-index", "9999", "background", "#031129", "margin", "15% 5%", "display", "flex"], [1, "content"], [2, "flex", "0 0 25%", "padding", "2%", "text-align", "center"], [1, "img", 2, "margin-bottom", "10px", "width", "100%", "height", "80%"], ["t", "1653127658106", "viewBox", "0 0 1024 1024", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", "p-id", "8122", "width", "200", "height", "200", 1, "icon"], ["d", "M719.768116 237.449275H304.231884a59.362319 59.362319 0 0 0-59.362319 59.362319v415.536232a59.362319 59.362319 0 0 0 59.362319 59.362319h415.536232a59.362319 59.362319 0 0 0 59.362319-59.362319V296.811594a59.362319 59.362319 0 0 0-59.362319-59.362319z m0 474.898551H304.231884V296.811594h415.536232v415.536232z m267.130435-237.449275a29.681159 29.681159 0 0 0 0-59.362319h-103.884058v-89.043478h103.884058a29.681159 29.681159 0 0 0 0-59.362319h-103.884058v-50.265044A78.313739 78.313739 0 0 0 801.391304 133.565217H764.289855V29.681159a29.681159 29.681159 0 0 0-59.362319 0v103.884058h-89.043478V29.681159a29.681159 29.681159 0 0 0-59.362319 0v103.884058h-89.043478V29.681159a29.681159 29.681159 0 0 0-59.362319 0v103.884058h-89.043478V29.681159a29.681159 29.681159 0 0 0-59.362319 0v103.884058h-37.101449C173.516058 133.565217 126.144928 167.698551 126.144928 216.865391V267.130435H37.101449a29.681159 29.681159 0 0 0 0 59.362319h89.043479v89.043478H37.101449a29.681159 29.681159 0 0 0 0 59.362319h89.043479v89.043478H37.101449a29.681159 29.681159 0 0 0 0 59.362319h89.043479v89.043478H37.101449a29.681159 29.681159 0 0 0 0 59.362319h89.043479v23.937855A100.826899 100.826899 0 0 0 222.608696 890.434783H259.710145v103.884058a29.681159 29.681159 0 0 0 59.362319 0v-103.884058h89.043478v103.884058a29.681159 29.681159 0 0 0 59.362319 0v-103.884058h89.043478v103.884058a29.681159 29.681159 0 0 0 59.362319 0v-103.884058h89.043478v103.884058a29.681159 29.681159 0 0 0 59.362319 0v-103.884058h37.101449c49.092638 0 81.623188-45.694145 81.623189-94.786783V771.710145h103.884058a29.681159 29.681159 0 0 0 0-59.362319h-103.884058v-89.043478h103.884058a29.681159 29.681159 0 0 0 0-59.362319h-103.884058v-89.043478h103.884058zM823.652174 801.391304a29.681159 29.681159 0 0 1-29.68116 29.68116H215.188406a29.681159 29.681159 0 0 1-29.68116-29.68116V222.608696a29.681159 29.681159 0 0 1 29.68116-29.68116h578.782608a29.681159 29.681159 0 0 1 29.68116 29.68116v578.782608z", "p-id", "8123", "fill", "#3f4b61"], ["t", "1653127701971", "viewBox", "0 0 1024 1024", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", "p-id", "9077", "width", "200", "height", "200", 1, "icon"], ["d", "M651.9 120.8l114.7 114.7-21.2 21.2 28.3 28.3 41.8 41.8 28.3 28.3 21-21 28.6 28.6-35.4 35.4-28.3 28.3 21.3 21.3-241.8 241.7-21.3-21.3-28.3 28.3-35.3 35.3-28.3 28.4 21.3 21.3-121.2 121.2-263-263 518.8-518.8m-0.1-56.6l-21.3 21.3 0.1 0.1-554 554 298.3 298.3 21.3 21.3L574 781.4l-21.3-21.3 35.3-35.3 21.3 21.3 298.4-298.4-21.3-21.3 42.5-42.5 0.1-0.1 21-21-85.1-85.1-21 21-41.9-41.9 21.2-21.2L651.8 64.2z", "p-id", "9078", "fill", "#3f4b61"], ["d", "M374.9 528.8c29.6 0 57.4 11.5 78.3 32.4s32.4 48.7 32.4 78.3-11.5 57.4-32.4 78.3-48.7 32.4-78.3 32.4-57.4-11.5-78.3-32.4-32.4-48.7-32.4-78.3 11.5-57.4 32.4-78.3 48.7-32.4 78.3-32.4m0-40c-38.6 0-77.1 14.7-106.6 44.1-58.9 58.9-58.9 154.3 0 213.1 29.4 29.4 68 44.1 106.6 44.1S452 775.4 481.5 746c58.9-58.9 58.9-154.3 0-213.1-29.5-29.4-68.1-44.1-106.6-44.1z", "p-id", "9079", "fill", "#3f4b61"], ["d", "M374.9 639.5m-82.6 0a82.6 82.6 0 1 0 165.2 0 82.6 82.6 0 1 0-165.2 0Z", "p-id", "9080", "fill", "#3f4b61"], ["d", "M630.6 273.1c29.6 0 57.4 11.5 78.3 32.4s32.4 48.7 32.4 78.3-11.5 57.4-32.4 78.3-48.7 32.4-78.3 32.4-57.4-11.5-78.3-32.4-32.4-48.7-32.4-78.3 11.5-57.4 32.4-78.3 48.7-32.4 78.3-32.4m0-40c-38.6 0-77.1 14.7-106.6 44.1-58.9 58.9-58.9 154.3 0 213.1 29.4 29.4 68 44.1 106.6 44.1s77.1-14.7 106.6-44.1c58.9-58.9 58.9-154.3 0-213.1-29.4-29.4-68-44.1-106.6-44.1z", "p-id", "9081", "fill", "#3f4b61"], ["d", "M630.6 383.8m-82.6 0a82.6 82.6 0 1 0 165.2 0 82.6 82.6 0 1 0-165.2 0Z", "p-id", "9082", "fill", "#3f4b61"], ["t", "1653127773031", "viewBox", "0 0 1024 1024", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", "p-id", "10102", "width", "200", "height", "200", 1, "icon"], ["d", "M870.4 661.312H960v59.712h-89.6v89.6c0 41.216-18.496 59.712-59.712 59.712h-89.6V960h-59.712v-89.6H541.888V960h-59.776v-89.6H362.688V960h-59.776v-89.6h-89.6c-41.216 0-59.712-18.496-59.712-59.712v-89.6H64v-59.712h89.6V541.888H64v-59.776h89.6V362.688H64v-59.712h89.6v-89.6c0-41.28 18.496-59.776 59.712-59.776h89.6V64h59.712v89.6h119.488V64h59.712v89.6h119.488V64h59.712v89.6h89.6c41.216 0 59.712 18.496 59.712 59.712v89.6H960v59.712h-89.6v119.488H960v59.712h-89.6v119.488z m-59.712-448H213.312v597.312h597.312V213.312zM332.8 302.912h358.4c20.608 0 29.888 9.216 29.888 29.888v358.4c0 20.608-9.28 29.888-29.888 29.888H332.8c-20.608 0-29.888-9.28-29.888-29.888V332.8c0-20.608 9.28-29.888 29.888-29.888z", "p-id", "10103", "fill", "#3f4b61"], ["t", "1653127811070", "viewBox", "0 0 1448 1024", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", "p-id", "11047", "width", "200", "height", "200", 1, "icon"], ["d", "M960 268.8c-26.88-34.56-62.72-64-102.4-84.48-40.96-20.48-85.76-30.72-133.12-30.72-79.36 0-153.6 30.72-209.92 87.04-53.76 53.76-84.48 125.44-87.04 202.24-56.32 0-110.08 21.76-149.76 62.72-39.68 39.68-62.72 93.44-62.72 149.76 0 56.32 21.76 110.08 62.72 149.76 39.68 39.68 93.44 62.72 149.76 62.72h213.76c19.2 0 33.28-15.36 33.28-33.28 0-19.2-15.36-33.28-33.28-33.28H427.52c-38.4 0-74.24-15.36-101.12-42.24-26.88-26.88-42.24-64-42.24-101.12 0-38.4 15.36-74.24 42.24-101.12 26.88-26.88 64-42.24 101.12-42.24h34.56c8.96 0 17.92-3.84 25.6-11.52 6.4-7.68 8.96-16.64 8.96-25.6-1.28-7.68-1.28-15.36-1.28-23.04 0-61.44 24.32-119.04 66.56-162.56 43.52-43.52 101.12-66.56 162.56-66.56 35.84 0 70.4 7.68 102.4 24.32 30.72 15.36 57.6 38.4 78.08 65.28 6.4 8.96 16.64 12.8 26.88 12.8 7.68 0 14.08-2.56 20.48-7.68 7.68-5.12 11.52-14.08 12.8-23.04 2.56-12.8 0-21.76-5.12-28.16z m192 186.88c0-2.56-1.28-5.12-2.56-8.96l-1.28-2.56c-5.12-10.24-16.64-17.92-28.16-19.2H792.32c-14.08 0-25.6 7.68-32 19.2l-1.28 3.84c-1.28 2.56-1.28 5.12-2.56 7.68l-66.56 234.24c10.24-2.56 20.48-5.12 30.72-5.12h467.2c10.24 0 20.48 2.56 30.72 5.12L1152 455.68z m38.4 253.44H723.2c-25.6 0-46.08 20.48-46.08 44.8s20.48 57.6 46.08 57.6h467.2c25.6 0 46.08-32 46.08-57.6 1.28-24.32-20.48-44.8-46.08-44.8z m-47.36 75.52c-14.08 0-25.6-11.52-25.6-24.32 0-14.08 11.52-24.32 25.6-24.32s25.6 11.52 25.6 24.32-11.52 24.32-25.6 24.32z", "p-id", "11048", "fill", "#3f4b61"], ["nzTitle", "The first Modal", 1, "statistics-top", "flex-column", 2, "height", "80%", "width", "80%", "position", "absolute", "z-index", "9999", "background", "#031129", "margin", "50px 5%"], ["nzType", "card", 3, "nzSelectChange"], ["nzTitle", "\u6A21\u578B\u7CBE\u5EA6\u66F2\u7EBF"], ["id", "lineCharts", 1, "lineCharts"], ["id", "csImg1", 1, "main-content", "imgList"], [1, "title", 2, "font-size", "18px"], [1, "image-list", 2, "width", "100%", "max-height", "450px", "overflow-y", "auto"], ["class", "cover", 4, "ngFor", "ngForOf"], ["nzTitle", "\u6D4B  \u8BD5"], [1, "content", 2, "flex-wrap", "wrap"], [2, "flex", "0 0 100%", "margin-left", "20px"], ["for", "upload", 2, "color", "#fff", "margin-right", "10px"], ["type", "file", "multiple", "true", "accept", "image/*", "id", "imgInput", 2, "color", "#fff"], ["id", "csImg", 1, "main-content", "imgList"], ["id", "image-list1", 1, "image-list1", 2, "width", "100%", "max-height", "450px", "overflow-y", "auto"], [1, "cover"], ["alt", "", 3, "src"], [1, "select", 2, "position", "absolute", "left", "0", 3, "ngModel", "ngModelChange", "nzOpenChange"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], [3, "nzValue", "nzLabel"], [1, "btn", "btn-new-task", 3, "click"], [3, "click"], ["nzShowCheckbox", "", 3, "nzChecked", "nzCheckedChange"], [1, "train-right", "flex-column"], [1, "train-classifies", "flex-column"], [1, "train-title"], [1, "echart-box"], ["nzType", "circle", "nzStrokeColor", "#159FFF", "nzStrokeWidth", "12", 3, "nzPercent"], [1, "train-images", "flex-column"], [1, "detail-info-box", "flex-column"], [1, "detail-info-type", "flex-row"], [1, "detail-info-param"], [1, "detail-info-value"], [1, "is_mark"], [1, "btn", "train-btn-edit", 3, "click"], [1, "compare-model-row"]], template: function DataTrainingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DataTrainingComponent_div_1_Template, 45, 11, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DataTrainingComponent_div_2_Template, 34, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DataTrainingComponent_div_3_Template, 22, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataTrainingComponent_Template_button_click_7_listener() { return ctx.changeStatus(0 - 1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u6392\u961F\u4E2D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataTrainingComponent_Template_button_click_9_listener() { return ctx.changeStatus(0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u8FDB\u884C\u4E2D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataTrainingComponent_Template_button_click_11_listener() { return ctx.changeStatus(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u5DF2\u7ED3\u675F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, DataTrainingComponent_ng_container_15_Template, 3, 2, "ng-container", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, DataTrainingComponent_ng_container_16_Template, 3, 0, "ng-container", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, DataTrainingComponent_ng_container_17_Template, 3, 0, "ng-container", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, DataTrainingComponent_ng_container_18_Template, 3, 0, "ng-container", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataTrainingComponent_Template_button_click_19_listener() { return ctx.delete(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\u5220\u9664");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, DataTrainingComponent_button_21_Template, 2, 0, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "nz-table", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzPageIndexChange", function DataTrainingComponent_Template_nz_table_nzPageIndexChange_23_listener($event) { return ctx.pageIndex = $event; })("nzPageSizeChange", function DataTrainingComponent_Template_nz_table_nzPageSizeChange_23_listener($event) { return ctx.pageSize = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzCheckedChange", function DataTrainingComponent_Template_th_nzCheckedChange_27_listener($event) { return ctx.isAllDisplayDataChecked = $event; })("nzCheckedChange", function DataTrainingComponent_Template_th_nzCheckedChange_27_listener($event) { return ctx.checkAll($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\u4EFB\u52A1\u540D\u79F0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\u6570\u636E\u6E90");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\u65B9\u5F0F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "\u6A21\u5F0F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "\u72B6\u6001");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "\u5F00\u59CB\u65F6\u95F4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, DataTrainingComponent_th_40_Template, 2, 0, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, DataTrainingComponent_th_41_Template, 2, 0, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, DataTrainingComponent_tr_43_Template, 20, 20, "tr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, DataTrainingComponent_ng_container_44_Template, 51, 13, "ng-container", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "\u5BF9\u6BD4\u6846");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataTrainingComponent_Template_i_click_49_listener() { return ctx.closeCompare(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, DataTrainingComponent_div_50_Template, 4, 1, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataTrainingComponent_Template_button_click_52_listener() { return ctx.startCompare(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "\u5F00\u59CB\u5BF9\u6BD4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataTrainingComponent_Template_a_click_56_listener() { return ctx.clearCompare(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "\u6E05\u7A7A\u5BF9\u6BD4\u680F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isVisible1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isVisible2);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.flag === 0);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listOfData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.rightComponent);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("show-compare", ctx.showCompare);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.comparingDataTrainList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NzTableComponent"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NzTheadComponent"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NzTrDirective"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NzTableCellDirective"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NzThMeasureDirective"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NzThSelectionComponent"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NzTbodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_9__["NzIconDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NzCellBreakWordDirective"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NzTabSetComponent"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NzTabComponent"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NzSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NzOptionComponent"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NzTdAddOnComponent"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NzProgressComponent"]], pipes: [_data_train_pipes__WEBPACK_IMPORTED_MODULE_11__["DataTrainPipes"], _data_train_pipes__WEBPACK_IMPORTED_MODULE_11__["DataTaskPatternPipes"], _data_train_pipes__WEBPACK_IMPORTED_MODULE_11__["DataTaskStatusPipes"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"], _data_train_pipes__WEBPACK_IMPORTED_MODULE_11__["DataTaskProgressPipes"]], styles: [".train-btns[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.train-btns[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 120px;\n  margin-left: 10px;\n}\n.train-btns[_ngcontent-%COMP%]   .btn-new-task[_ngcontent-%COMP%] {\n  background-color: #00a48c;\n}\n.dbcontent[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n}\n.dbcontent[_ngcontent-%COMP%]   .recomend[_ngcontent-%COMP%] {\n  color: red;\n}\n.dbcontent[_ngcontent-%COMP%]   .dbtitle[_ngcontent-%COMP%] {\n  width: 95%;\n  margin: 0 auto;\n  margin-top: 20px;\n  display: flex;\n}\n.dbcontent[_ngcontent-%COMP%]   .dbtitle[_ngcontent-%COMP%]   .titleText[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 18px;\n  text-align: center;\n}\n.dbcontent[_ngcontent-%COMP%]   .dbtitle[_ngcontent-%COMP%]   .leftLine[_ngcontent-%COMP%] {\n  flex: 0 0 36%;\n  height: 5px;\n  background: linear-gradient(to right, #031129, #095495);\n  margin: auto 0;\n}\n.dbcontent[_ngcontent-%COMP%]   .dbtitle[_ngcontent-%COMP%]   .leftRect[_ngcontent-%COMP%] {\n  width: 11px;\n  height: 11px;\n  transform: rotate(45deg);\n  background: #095495;\n  margin: auto 0;\n}\n.dbcontent[_ngcontent-%COMP%]   .dbtitle[_ngcontent-%COMP%]   .rightLine[_ngcontent-%COMP%] {\n  flex: 0 0 36%;\n  height: 5px;\n  background: linear-gradient(to left, #031129, #095495);\n  margin: auto 0;\n}\n.dbcontent[_ngcontent-%COMP%]   .dbtitle[_ngcontent-%COMP%]   .rightRect[_ngcontent-%COMP%] {\n  width: 11px;\n  height: 11px;\n  transform: rotate(45deg);\n  background: #095495;\n  margin: auto 0;\n}\n.dbcontent[_ngcontent-%COMP%]   .dbCharts[_ngcontent-%COMP%] {\n  width: 48%;\n  height: 95%;\n}\n.dbcontent[_ngcontent-%COMP%]   .dbTable[_ngcontent-%COMP%] {\n  width: 48%;\n  height: 100%;\n}\n.echart-box[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.echart-box[_ngcontent-%COMP%]   nz-progress[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.statistics-top[_ngcontent-%COMP%], .statistics-bottom[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 1;\n  padding: 1px;\n  border: 1px solid #094f8d;\n}\n.statistics-top[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  background: url('bg11.png') no-repeat 0 0 / 100% 100%;\n}\n.statistics-top-type[_ngcontent-%COMP%] {\n  background: url('bg13.png') no-repeat 0 0 / 100% 100%;\n}\n.statistics-top[_ngcontent-%COMP%]::before, .statistics-bottom[_ngcontent-%COMP%]::before, .statistics-main-top[_ngcontent-%COMP%]::before, .statistics-main-item[_ngcontent-%COMP%]::before {\n  content: '';\n  position: absolute;\n  left: -1px;\n  bottom: -1px;\n  width: 10px;\n  height: 10px;\n  border-left: 1px solid #00afdf;\n  border-bottom: 1px solid #00afdf;\n}\n.statistics-top[_ngcontent-%COMP%]::after, .statistics-bottom[_ngcontent-%COMP%]::after, .statistics-main-top[_ngcontent-%COMP%]::after, .statistics-main-item[_ngcontent-%COMP%]::after {\n  content: '';\n  position: absolute;\n  right: -1px;\n  bottom: -1px;\n  width: 10px;\n  height: 10px;\n  border-right: 1px solid #00afdf;\n  border-bottom: 1px solid #00afdf;\n}\n.statistics-title[_ngcontent-%COMP%] {\n  position: relative;\n  flex-basis: 40px;\n  line-height: 40px;\n  color: #fff;\n  font-size: 18px;\n  padding-left: 10px;\n  background: url('bg14.png') no-repeat 0 0 / 100% 100%;\n}\n.content[_ngcontent-%COMP%] {\n  width: 98.5%;\n  height: 96%;\n  display: flex;\n}\n.content[_ngcontent-%COMP%]   .lineCharts[_ngcontent-%COMP%] {\n  flex: 0 0 50%;\n  height: 100%;\n  min-height: 550px;\n}\n.content[_ngcontent-%COMP%]   .imgList[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 100%;\n  padding: 10px;\n  display: flex;\n  flex-wrap: wrap;\n}\n.content[_ngcontent-%COMP%]   .imgList[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  flex: 0 0 100%;\n  color: #fff;\n  text-align: center;\n  margin-top: 20px;\n}\n.content[_ngcontent-%COMP%]   .imgList[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  flex: 0 0 100%;\n  padding: 10px;\n  display: flex;\n  height: 100%;\n  max-height: 450px;\n  flex-wrap: wrap;\n  list-style: none;\n  overflow-y: auto;\n}\n.content[_ngcontent-%COMP%]   .imgList[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  flex: 0 0 25%;\n  padding: 5px;\n}\n.content[_ngcontent-%COMP%]   .imgList[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.content[_ngcontent-%COMP%]   .imgList1[_ngcontent-%COMP%] {\n  border: 1px solid red;\n  display: flex;\n  flex-wrap: wrap;\n}\n.content[_ngcontent-%COMP%]   .imgList1[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  flex: 0 0 25%;\n  border: 1px solid #fff;\n}\n[_nghost-%COMP%]     .ant-tabs-content {\n  height: 90%;\n}\n[_nghost-%COMP%]     .ant-tabs-nav {\n  margin-top: 10px;\n  margin-left: 10px;\n}\n[_nghost-%COMP%]     .ant-tabs-tab {\n  background: transparent !important;\n  color: #fff;\n}\n[_nghost-%COMP%]     .ant-tabs-tab-active {\n  background: #2984e4 !important;\n  border: 1px solid rgba(23, 71, 123, 0.666) !important;\n  color: #fff !important;\n}\n[_nghost-%COMP%]     .ant-tabs-bar {\n  border-bottom: 1px solid rgba(23, 71, 123, 0.666);\n}\n.statistics-title[_ngcontent-%COMP%]::before {\n  content: '';\n  position: absolute;\n  left: -2px;\n  top: -2px;\n  width: 10px;\n  height: 10px;\n  border-left: 1px solid #00afdf;\n  border-top: 1px solid #00afdf;\n}\n.statistics-title[_ngcontent-%COMP%]::after {\n  content: '';\n  position: absolute;\n  right: -2px;\n  top: -2px;\n  width: 10px;\n  height: 10px;\n  border-right: 1px solid #00afdf;\n  border-top: 1px solid #00afdf;\n}\n[_nghost-%COMP%]     .ant-progress-text {\n  color: white;\n}\n[_nghost-%COMP%]     .blue-table {\n  margin-top: 20px;\n}\n[_nghost-%COMP%]     .blue-table .ant-table {\n  border: solid 1px #0f366b;\n  font-size: 20px;\n  background: transparent;\n}\n[_nghost-%COMP%]     .blue-table .ant-table th {\n  font-size: 16px;\n}\n[_nghost-%COMP%]     .blue-table .ant-table th, [_nghost-%COMP%]     .blue-table .ant-table td {\n  color: #ffffff;\n  border-bottom-color: #0f366b;\n}\n[_nghost-%COMP%]     .blue-table .ant-table th .ant-checkbox-inner, [_nghost-%COMP%]     .blue-table .ant-table td .ant-checkbox-inner {\n  background-color: transparent;\n  border-color: #159fff;\n}\n[_nghost-%COMP%]     .blue-table .ant-table thead th {\n  background-color: transparent;\n}\n[_nghost-%COMP%]     .blue-table .ant-table .ant-table-tbody > tr.ant-table-row:hover > td, [_nghost-%COMP%]     .blue-table .ant-table .current-row > td {\n  background-color: #0d3365;\n}\n[_nghost-%COMP%] {\n  display: block;\n  position: relative;\n  height: 100%;\n}\n[_nghost-%COMP%]   .model-compare[_ngcontent-%COMP%] {\n  display: none;\n  border: 1px solid #159fff;\n  background-color: #0a2952;\n  color: white;\n  position: absolute;\n  right: 0px;\n  top: 0px;\n  width: 180px;\n}\n[_nghost-%COMP%]   .model-compare.show-compare[_ngcontent-%COMP%] {\n  display: block;\n}\n[_nghost-%COMP%]   .model-compare[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n}\n[_nghost-%COMP%]   .model-compare[_ngcontent-%COMP%]   .model-compare-title[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #159fff;\n  display: flex;\n  justify-content: space-between;\n  font-size: 16px;\n  font-weight: bold;\n}\n[_nghost-%COMP%]   .model-compare[_ngcontent-%COMP%]   .model-compare-btn[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #159fff;\n  text-align: center;\n}\n[_nghost-%COMP%]   .model-compare[_ngcontent-%COMP%]   .compare-model-row[_ngcontent-%COMP%] {\n  height: 60px;\n  border-bottom: 1px solid #159fff;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n[_nghost-%COMP%]   .model-compare[_ngcontent-%COMP%]   .compare-model-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], [_nghost-%COMP%]   .model-compare[_ngcontent-%COMP%]   .compare-model-row[_ngcontent-%COMP%]   i[nz-icon][_ngcontent-%COMP%] {\n  line-height: 43px;\n  font-size: 14px;\n}\n[_nghost-%COMP%]   .model-compare[_ngcontent-%COMP%]   .compare-model-row[_ngcontent-%COMP%]   i[nz-icon][_ngcontent-%COMP%] {\n  color: #148aed;\n}\n[_nghost-%COMP%]   .model-compare[_ngcontent-%COMP%]   .compare-model-row[_ngcontent-%COMP%]:hover {\n  background-color: #0d3365;\n}\n[_nghost-%COMP%]   .model-compare[_ngcontent-%COMP%]   .model-compre-del[_ngcontent-%COMP%] {\n  color: #b8753e;\n  text-align: center;\n}\n[_nghost-%COMP%]   .model-compare[_ngcontent-%COMP%]   .model-compre-del[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #b8753e;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6L2ZmL3RhcmdldC1yZWNvZ25pemUtbWdyLWh0bWwtVjAuMi9zcmMvYXBwL3BhZ2VzL2RhdGEtdHJhaW5pbmcvZGF0YS10cmFpbmluZy5jb21wb25lbnQubGVzcyIsImRhdGEtdHJhaW5pbmcuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtBQ0NGO0FERkE7RUFJSSxZQUFBO0VBQ0EsaUJBQUE7QUNDSjtBRE5BO0VBU0kseUJBQUE7QUNBSjtBRE1BO0VBRUUsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDTEY7QURDQTtFQU1JLFVBQUE7QUNKSjtBREZBO0VBU0ksVUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUNKSjtBRFJBO0VBY00sT0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0hOO0FEYkE7RUFvQk0sYUFBQTtFQUNBLFdBQUE7RUFDQSx1REFBQTtFQUNBLGNBQUE7QUNKTjtBRG5CQTtFQTBCUSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDSlI7QUQxQkE7RUFpQ00sYUFBQTtFQUNBLFdBQUE7RUFDQSxzREFBQTtFQUNBLGNBQUE7QUNKTjtBRGhDQTtFQXVDUSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDSlI7QUR2Q0E7RUFpREksVUFBQTtFQUNBLFdBQUE7QUNQSjtBRDNDQTtFQXNESSxVQUFBO0VBQ0EsWUFBQTtBQ1JKO0FEY0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQ1pGO0FEU0E7RUFNSSxrQkFBQTtBQ1pKO0FEZ0JBOztFQUNFLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQ2JGO0FEZ0JBO0VBQ0UsbUJBQUE7RUFDQSxxREFBQTtBQ2RGO0FEaUJBO0VBQ0UscURBQUE7QUNmRjtBRGtCQTs7OztFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtFQUNBLGdDQUFBO0FDYkY7QURnQkE7Ozs7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtBQ1hGO0FEY0E7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EscURBQUE7QUNaRjtBRGNBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FDWkY7QURTQTtFQUtHLGFBQUE7RUFDQyxZQUFBO0VBQ0EsaUJBQUE7QUNYSjtBRElBO0VBV0csT0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUNaSDtBREhBO0VBaUJLLGNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ1hMO0FEVEE7RUF5QkssY0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNiTDtBRG5CQTtFQWtDTyxhQUFBO0VBQ0EsWUFBQTtBQ1pQO0FEdkJBO0VBcUNTLFdBQUE7QUNYVDtBRDFCQTtFQTRDRyxxQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FDZkg7QUQvQkE7RUFnREksYUFBQTtFQUNBLHNCQUFBO0FDZEo7QURtQkE7RUFHSSxXQUFBO0FDbkJKO0FEZ0JBO0VBTUksZ0JBQUE7RUFDQSxpQkFBQTtBQ25CSjtBRFlBO0VBVUksa0NBQUE7RUFDQSxXQUFBO0FDbkJKO0FEUUE7RUFjSSw4QkFBQTtFQUNBLHFEQUFBO0VBQ0Esc0JBQUE7QUNuQko7QURHQTtFQW1CSSxpREFBQTtBQ25CSjtBRHdCQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtFQUNBLDZCQUFBO0FDdEJGO0FEeUJBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLCtCQUFBO0VBQ0EsNkJBQUE7QUN2QkY7QUQwQkE7RUFFRyxZQUFBO0FDekJIO0FEdUJBO0VBTUksZ0JBQUE7QUMxQko7QURvQkE7RUFTTSx5QkFBQTtFQUNBLGVBQUE7RUFJQSx1QkFBQTtBQzdCTjtBRGVBO0VBaUJRLGVBQUE7QUM3QlI7QURZQTs7RUFxQlEsY0FBQTtFQUNBLDRCQUFBO0FDN0JSO0FET0E7O0VBeUJVLDZCQUFBO0VBQ0EscUJBQUE7QUM1QlY7QURFQTtFQWdDVSw2QkFBQTtBQy9CVjtBRERBOztFQXFDUSx5QkFBQTtBQ2hDUjtBRHlDQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUN2Q0Y7QURvQ0E7RUFNSSxhQUFBO0VBTUEseUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtBQzVDSjtBRGtDSTtFQUNFLGNBQUE7QUNoQ047QUR1QkE7RUFxQk0saUJBQUE7QUN6Q047QURvQkE7RUF5Qk0sZ0NBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUMxQ047QURhQTtFQWlDTSxnQ0FBQTtFQUNBLGtCQUFBO0FDM0NOO0FEU0E7RUFzQ00sWUFBQTtFQUNBLGdDQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUM1Q047QURFQTs7RUE2Q1EsaUJBQUE7RUFDQSxlQUFBO0FDM0NSO0FESEE7RUFrRFEsY0FBQTtBQzVDUjtBRCtDTTtFQUNFLHlCQUFBO0FDN0NSO0FEVEE7RUEyRE0sY0FBQTtFQUNBLGtCQUFBO0FDL0NOO0FEYkE7RUErRFEsY0FBQTtBQy9DUiIsImZpbGUiOiJkYXRhLXRyYWluaW5nLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLnRyYWluLWJ0bnMge1xuICB0ZXh0LWFsaWduOiByaWdodDtcblxuICBidXR0b24ge1xuICAgIHdpZHRoOiAxMjBweDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgfVxuXG4gIC5idG4tbmV3LXRhc2sge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAxNjQsIDE0MCk7XG4gIH1cblxufVxuXG5cbi5kYmNvbnRlbnR7XG4gIFxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICAucmVjb21lbmR7XG4gICAgY29sb3I6IHJlZDtcbiAgfVxuICAuZGJ0aXRsZXtcbiAgICB3aWR0aDogOTUlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAudGl0bGVUZXh0e1xuICAgICAgZmxleDogMTtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gICAgLmxlZnRMaW5le1xuICBcbiAgICAgIGZsZXg6IDAgMCAzNiU7XG4gICAgICBoZWlnaHQ6IDVweDtcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwjMDMxMTI5LCMwOTU0OTUpO1xuICAgICAgbWFyZ2luOiBhdXRvIDA7XG4gICAgfVxuICAgIC5sZWZ0UmVjdHtcbiAgICAgICAgd2lkdGg6IDExcHg7XG4gICAgICAgIGhlaWdodDogMTFweDtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMDk1NDk1O1xuICAgICAgICBtYXJnaW46IGF1dG8gMDtcbiAgICB9XG4gICAgLnJpZ2h0TGluZXtcbiAgICAgIGZsZXg6IDAgMCAzNiU7XG4gICAgICBoZWlnaHQ6IDVweDtcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCMwMzExMjksIzA5NTQ5NSk7XG4gICAgICBtYXJnaW46IGF1dG8gMDtcbiAgICB9XG4gICAgLnJpZ2h0UmVjdHtcbiAgICAgICAgd2lkdGg6IDExcHg7XG4gICAgICAgIGhlaWdodDogMTFweDtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMDk1NDk1O1xuICAgICAgICBtYXJnaW46IGF1dG8gMDtcbiAgICB9XG4gIFxuICB9XG4gIC5kYkNoYXJ0c3tcbiAgICAvLyBmbGV4OiAwIDAgNDglO1xuICAgIHdpZHRoOiA0OCU7XG4gICAgaGVpZ2h0Ojk1JTtcbiAgfVxuICAuZGJUYWJsZXtcbiAgICAvLyBmbGV4OjAgMCA0OCU7XG4gICAgd2lkdGg6IDQ4JTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cblxufVxuXG5cbi5lY2hhcnQtYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgbnotcHJvZ3Jlc3Mge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufVxuXG4uc3RhdGlzdGljcy10b3AsIC5zdGF0aXN0aWNzLWJvdHRvbSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxleDogMTtcbiAgcGFkZGluZzogMXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDk0ZjhkO1xufVxuXG4uc3RhdGlzdGljcy10b3Age1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmcxMS5wbmcnKSBuby1yZXBlYXQgMCAwIH5cIi9cIiAxMDAlIDEwMCU7XG59XG5cbi5zdGF0aXN0aWNzLXRvcC10eXBlIHtcbiAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2JnMTMucG5nJykgbm8tcmVwZWF0IDAgMCB+XCIvXCIgMTAwJSAxMDAlO1xufVxuXG4uc3RhdGlzdGljcy10b3A6OmJlZm9yZSwgLnN0YXRpc3RpY3MtYm90dG9tOjpiZWZvcmUsIC5zdGF0aXN0aWNzLW1haW4tdG9wOjpiZWZvcmUsIC5zdGF0aXN0aWNzLW1haW4taXRlbTo6YmVmb3JlIHtcbiAgY29udGVudDogJyc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogLTFweDtcbiAgYm90dG9tOiAtMXB4O1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiAxMHB4O1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICMwMGFmZGY7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDBhZmRmO1xufVxuXG4uc3RhdGlzdGljcy10b3A6OmFmdGVyLCAuc3RhdGlzdGljcy1ib3R0b206OmFmdGVyLCAuc3RhdGlzdGljcy1tYWluLXRvcDo6YWZ0ZXIsIC5zdGF0aXN0aWNzLW1haW4taXRlbTo6YWZ0ZXIge1xuICBjb250ZW50OiAnJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogLTFweDtcbiAgYm90dG9tOiAtMXB4O1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiAxMHB4O1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMDBhZmRmO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwYWZkZjtcbn1cblxuLnN0YXRpc3RpY3MtdGl0bGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsZXgtYmFzaXM6IDQwcHg7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9iZzE0LnBuZycpIG5vLXJlcGVhdCAwIDAgflwiL1wiIDEwMCUgMTAwJTtcbn1cbi5jb250ZW50e1xuICB3aWR0aDogOTguNSU7XG4gIGhlaWdodDo5NiU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gLmxpbmVDaGFydHN7XG4gICBmbGV4OiAwIDAgNTAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiA1NTBweDtcbiB9XG5cbiAuaW1nTGlzdHtcbiAgIGZsZXg6IDE7XG4gICBoZWlnaHQ6IDEwMCU7XG4gICBwYWRkaW5nOiAxMHB4O1xuICAgZGlzcGxheTogZmxleDtcbiAgIGZsZXgtd3JhcDogd3JhcDtcbiAgIGgye1xuICAgICBmbGV4OiAwIDAgMTAwJTtcbiAgICAgY29sb3I6ICNmZmY7XG4gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgXG4gICB9XG4gXG4gICB1bHtcbiAgICAgZmxleDogMCAwIDEwMCU7XG4gICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgIGhlaWdodDogMTAwJTtcbiAgICAgbWF4LWhlaWdodDogNDUwcHg7XG4gICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICAgbGl7XG4gICAgICAgZmxleDogMCAwIDI1JTtcbiAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgaW1ne1xuICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgfVxuICAgICB9XG4gICB9XG4gfVxuXG4gLmltZ0xpc3Qxe1xuICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xuICAgZGlzcGxheTogZmxleDtcbiAgIGZsZXgtd3JhcDogd3JhcDtcbiAgIGltZ3tcbiAgICBmbGV4OiAwIDAgMjUlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XG4gICB9XG4gfVxuXG59XG46aG9zdCA6Om5nLWRlZXB7XG4gIC5hbnQtdGFicy1jb250ZW50e1xuXG4gICAgaGVpZ2h0OiA5MCU7XG4gIH1cbiAgLmFudC10YWJzLW5hdntcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB9XG4gIC5hbnQtdGFicy10YWJ7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuICAuYW50LXRhYnMtdGFiLWFjdGl2ZXtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNDEsIDEzMiwgMjI4KSAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjMsIDcxLCAxMjMsIDAuNjY2KSAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmFudC10YWJzLWJhcntcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyMywgNzEsIDEyMywgMC42NjYpO1xuICB9XG5cbn1cblxuLnN0YXRpc3RpY3MtdGl0bGU6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICcnO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IC0ycHg7XG4gIHRvcDogLTJweDtcbiAgd2lkdGg6IDEwcHg7XG4gIGhlaWdodDogMTBweDtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjMDBhZmRmO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgIzAwYWZkZjtcbn1cblxuLnN0YXRpc3RpY3MtdGl0bGU6OmFmdGVyIHtcbiAgY29udGVudDogJyc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IC0ycHg7XG4gIHRvcDogLTJweDtcbiAgd2lkdGg6IDEwcHg7XG4gIGhlaWdodDogMTBweDtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzAwYWZkZjtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMwMGFmZGY7XG59XG5cbjpob3N0IDo6bmctZGVlcCB7XG4gIC5hbnQtcHJvZ3Jlc3MtdGV4dCB7XG4gICBjb2xvcjogd2hpdGU7XG4gIH1cblxuICAuYmx1ZS10YWJsZSB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcblxuICAgIC5hbnQtdGFibGUge1xuICAgICAgYm9yZGVyOiBzb2xpZCAxcHggIzBmMzY2YjtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIC8vYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYigyMSwgMTU5LCAyNTUpO1xuICAgICAgLy9ib3JkZXItbGVmdDogMXB4IHNvbGlkIHJnYigyMSwgMTU5LCAyNTUpO1xuICAgICAgLy9ib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2IoMjEsIDE1OSwgMjU1KTtcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuXG4gICAgICB0aCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIH1cblxuICAgICAgdGgsIHRkIHtcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICMwZjM2NmI7XG5cbiAgICAgICAgLmFudC1jaGVja2JveC1pbm5lciB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiByZ2IoMjEsIDE1OSwgMjU1KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGVhZCB7XG4gICAgICAgIHRoIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuYW50LXRhYmxlLXRib2R5ID4gdHIuYW50LXRhYmxlLXJvdzpob3ZlciA+IHRkLCAuY3VycmVudC1yb3cgPiB0ZCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMywgNTEsIDEwMSk7XG4gICAgICB9XG5cbiAgICB9XG5cbiAgfVxuXG59XG5cbjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuXG4gIC5tb2RlbC1jb21wYXJlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuXG4gICAgJi5zaG93LWNvbXBhcmUge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzE1OWZmZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGEyOTUyO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDBweDtcbiAgICB0b3A6IDBweDtcbiAgICB3aWR0aDogMTgwcHg7XG5cbiAgICA+IGRpdiB7XG4gICAgICBwYWRkaW5nOiA4cHggMTZweDtcbiAgICB9XG5cbiAgICAubW9kZWwtY29tcGFyZS10aXRsZSB7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzE1OWZmZjtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG5cbiAgICAubW9kZWwtY29tcGFyZS1idG4ge1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMxNTlmZmY7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLmNvbXBhcmUtbW9kZWwtcm93IHtcbiAgICAgIGhlaWdodDogNjBweDtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMTU5ZmZmO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgICAgIHNwYW4sIGlbbnotaWNvbl0ge1xuICAgICAgICBsaW5lLWhlaWdodDogNDNweDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgfVxuXG4gICAgICBpW256LWljb25dIHtcbiAgICAgICAgY29sb3I6IHJnYigyMCwgMTM4LCAyMzcpO1xuICAgICAgfVxuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzLCA1MSwgMTAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAubW9kZWwtY29tcHJlLWRlbCB7XG4gICAgICBjb2xvcjogcmdiKDE4NCwgMTE3LCA2Mik7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgIGEge1xuICAgICAgICBjb2xvcjogcmdiKDE4NCwgMTE3LCA2Mik7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbiIsIi50cmFpbi1idG5zIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4udHJhaW4tYnRucyBidXR0b24ge1xuICB3aWR0aDogMTIwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuLnRyYWluLWJ0bnMgLmJ0bi1uZXctdGFzayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGE0OGM7XG59XG4uZGJjb250ZW50IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5kYmNvbnRlbnQgLnJlY29tZW5kIHtcbiAgY29sb3I6IHJlZDtcbn1cbi5kYmNvbnRlbnQgLmRidGl0bGUge1xuICB3aWR0aDogOTUlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5kYmNvbnRlbnQgLmRidGl0bGUgLnRpdGxlVGV4dCB7XG4gIGZsZXg6IDE7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmRiY29udGVudCAuZGJ0aXRsZSAubGVmdExpbmUge1xuICBmbGV4OiAwIDAgMzYlO1xuICBoZWlnaHQ6IDVweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMDMxMTI5LCAjMDk1NDk1KTtcbiAgbWFyZ2luOiBhdXRvIDA7XG59XG4uZGJjb250ZW50IC5kYnRpdGxlIC5sZWZ0UmVjdCB7XG4gIHdpZHRoOiAxMXB4O1xuICBoZWlnaHQ6IDExcHg7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgYmFja2dyb3VuZDogIzA5NTQ5NTtcbiAgbWFyZ2luOiBhdXRvIDA7XG59XG4uZGJjb250ZW50IC5kYnRpdGxlIC5yaWdodExpbmUge1xuICBmbGV4OiAwIDAgMzYlO1xuICBoZWlnaHQ6IDVweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICMwMzExMjksICMwOTU0OTUpO1xuICBtYXJnaW46IGF1dG8gMDtcbn1cbi5kYmNvbnRlbnQgLmRidGl0bGUgLnJpZ2h0UmVjdCB7XG4gIHdpZHRoOiAxMXB4O1xuICBoZWlnaHQ6IDExcHg7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgYmFja2dyb3VuZDogIzA5NTQ5NTtcbiAgbWFyZ2luOiBhdXRvIDA7XG59XG4uZGJjb250ZW50IC5kYkNoYXJ0cyB7XG4gIHdpZHRoOiA0OCU7XG4gIGhlaWdodDogOTUlO1xufVxuLmRiY29udGVudCAuZGJUYWJsZSB7XG4gIHdpZHRoOiA0OCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5lY2hhcnQtYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uZWNoYXJ0LWJveCBuei1wcm9ncmVzcyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5zdGF0aXN0aWNzLXRvcCxcbi5zdGF0aXN0aWNzLWJvdHRvbSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxleDogMTtcbiAgcGFkZGluZzogMXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDk0ZjhkO1xufVxuLnN0YXRpc3RpY3MtdG9wIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2JnMTEucG5nJykgbm8tcmVwZWF0IDAgMCAvIDEwMCUgMTAwJTtcbn1cbi5zdGF0aXN0aWNzLXRvcC10eXBlIHtcbiAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2JnMTMucG5nJykgbm8tcmVwZWF0IDAgMCAvIDEwMCUgMTAwJTtcbn1cbi5zdGF0aXN0aWNzLXRvcDo6YmVmb3JlLFxuLnN0YXRpc3RpY3MtYm90dG9tOjpiZWZvcmUsXG4uc3RhdGlzdGljcy1tYWluLXRvcDo6YmVmb3JlLFxuLnN0YXRpc3RpY3MtbWFpbi1pdGVtOjpiZWZvcmUge1xuICBjb250ZW50OiAnJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAtMXB4O1xuICBib3R0b206IC0xcHg7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzAwYWZkZjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMGFmZGY7XG59XG4uc3RhdGlzdGljcy10b3A6OmFmdGVyLFxuLnN0YXRpc3RpY3MtYm90dG9tOjphZnRlcixcbi5zdGF0aXN0aWNzLW1haW4tdG9wOjphZnRlcixcbi5zdGF0aXN0aWNzLW1haW4taXRlbTo6YWZ0ZXIge1xuICBjb250ZW50OiAnJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogLTFweDtcbiAgYm90dG9tOiAtMXB4O1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiAxMHB4O1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMDBhZmRmO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwYWZkZjtcbn1cbi5zdGF0aXN0aWNzLXRpdGxlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbGV4LWJhc2lzOiA0MHB4O1xuICBsaW5lLWhlaWdodDogNDBweDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmcxNC5wbmcnKSBuby1yZXBlYXQgMCAwIC8gMTAwJSAxMDAlO1xufVxuLmNvbnRlbnQge1xuICB3aWR0aDogOTguNSU7XG4gIGhlaWdodDogOTYlO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmNvbnRlbnQgLmxpbmVDaGFydHMge1xuICBmbGV4OiAwIDAgNTAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDU1MHB4O1xufVxuLmNvbnRlbnQgLmltZ0xpc3Qge1xuICBmbGV4OiAxO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbi5jb250ZW50IC5pbWdMaXN0IGgyIHtcbiAgZmxleDogMCAwIDEwMCU7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG4uY29udGVudCAuaW1nTGlzdCB1bCB7XG4gIGZsZXg6IDAgMCAxMDAlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDQ1MHB4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG4uY29udGVudCAuaW1nTGlzdCB1bCBsaSB7XG4gIGZsZXg6IDAgMCAyNSU7XG4gIHBhZGRpbmc6IDVweDtcbn1cbi5jb250ZW50IC5pbWdMaXN0IHVsIGxpIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmNvbnRlbnQgLmltZ0xpc3QxIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG4uY29udGVudCAuaW1nTGlzdDEgaW1nIHtcbiAgZmxleDogMCAwIDI1JTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbn1cbjpob3N0IDo6bmctZGVlcCAuYW50LXRhYnMtY29udGVudCB7XG4gIGhlaWdodDogOTAlO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5hbnQtdGFicy1uYXYge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbjpob3N0IDo6bmctZGVlcCAuYW50LXRhYnMtdGFiIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmY7XG59XG46aG9zdCA6Om5nLWRlZXAgLmFudC10YWJzLXRhYi1hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiAjMjk4NGU0ICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjMsIDcxLCAxMjMsIDAuNjY2KSAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5hbnQtdGFicy1iYXIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyMywgNzEsIDEyMywgMC42NjYpO1xufVxuLnN0YXRpc3RpY3MtdGl0bGU6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICcnO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IC0ycHg7XG4gIHRvcDogLTJweDtcbiAgd2lkdGg6IDEwcHg7XG4gIGhlaWdodDogMTBweDtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjMDBhZmRmO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgIzAwYWZkZjtcbn1cbi5zdGF0aXN0aWNzLXRpdGxlOjphZnRlciB7XG4gIGNvbnRlbnQ6ICcnO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAtMnB4O1xuICB0b3A6IC0ycHg7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMwMGFmZGY7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMDBhZmRmO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5hbnQtcHJvZ3Jlc3MtdGV4dCB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbjpob3N0IDo6bmctZGVlcCAuYmx1ZS10YWJsZSB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG46aG9zdCA6Om5nLWRlZXAgLmJsdWUtdGFibGUgLmFudC10YWJsZSB7XG4gIGJvcmRlcjogc29saWQgMXB4ICMwZjM2NmI7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG46aG9zdCA6Om5nLWRlZXAgLmJsdWUtdGFibGUgLmFudC10YWJsZSB0aCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbjpob3N0IDo6bmctZGVlcCAuYmx1ZS10YWJsZSAuYW50LXRhYmxlIHRoLFxuOmhvc3QgOjpuZy1kZWVwIC5ibHVlLXRhYmxlIC5hbnQtdGFibGUgdGQge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzBmMzY2Yjtcbn1cbjpob3N0IDo6bmctZGVlcCAuYmx1ZS10YWJsZSAuYW50LXRhYmxlIHRoIC5hbnQtY2hlY2tib3gtaW5uZXIsXG46aG9zdCA6Om5nLWRlZXAgLmJsdWUtdGFibGUgLmFudC10YWJsZSB0ZCAuYW50LWNoZWNrYm94LWlubmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1jb2xvcjogIzE1OWZmZjtcbn1cbjpob3N0IDo6bmctZGVlcCAuYmx1ZS10YWJsZSAuYW50LXRhYmxlIHRoZWFkIHRoIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG46aG9zdCA6Om5nLWRlZXAgLmJsdWUtdGFibGUgLmFudC10YWJsZSAuYW50LXRhYmxlLXRib2R5ID4gdHIuYW50LXRhYmxlLXJvdzpob3ZlciA+IHRkLFxuOmhvc3QgOjpuZy1kZWVwIC5ibHVlLXRhYmxlIC5hbnQtdGFibGUgLmN1cnJlbnQtcm93ID4gdGQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGQzMzY1O1xufVxuOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG46aG9zdCAubW9kZWwtY29tcGFyZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMxNTlmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwYTI5NTI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMHB4O1xuICB0b3A6IDBweDtcbiAgd2lkdGg6IDE4MHB4O1xufVxuOmhvc3QgLm1vZGVsLWNvbXBhcmUuc2hvdy1jb21wYXJlIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG46aG9zdCAubW9kZWwtY29tcGFyZSA+IGRpdiB7XG4gIHBhZGRpbmc6IDhweCAxNnB4O1xufVxuOmhvc3QgLm1vZGVsLWNvbXBhcmUgLm1vZGVsLWNvbXBhcmUtdGl0bGUge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzE1OWZmZjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuOmhvc3QgLm1vZGVsLWNvbXBhcmUgLm1vZGVsLWNvbXBhcmUtYnRuIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMxNTlmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbjpob3N0IC5tb2RlbC1jb21wYXJlIC5jb21wYXJlLW1vZGVsLXJvdyB7XG4gIGhlaWdodDogNjBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMxNTlmZmY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbjpob3N0IC5tb2RlbC1jb21wYXJlIC5jb21wYXJlLW1vZGVsLXJvdyBzcGFuLFxuOmhvc3QgLm1vZGVsLWNvbXBhcmUgLmNvbXBhcmUtbW9kZWwtcm93IGlbbnotaWNvbl0ge1xuICBsaW5lLWhlaWdodDogNDNweDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuOmhvc3QgLm1vZGVsLWNvbXBhcmUgLmNvbXBhcmUtbW9kZWwtcm93IGlbbnotaWNvbl0ge1xuICBjb2xvcjogIzE0OGFlZDtcbn1cbjpob3N0IC5tb2RlbC1jb21wYXJlIC5jb21wYXJlLW1vZGVsLXJvdzpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwZDMzNjU7XG59XG46aG9zdCAubW9kZWwtY29tcGFyZSAubW9kZWwtY29tcHJlLWRlbCB7XG4gIGNvbG9yOiAjYjg3NTNlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG46aG9zdCAubW9kZWwtY29tcGFyZSAubW9kZWwtY29tcHJlLWRlbCBhIHtcbiAgY29sb3I6ICNiODc1M2U7XG59XG4iXX0= */", "[_nghost-%COMP%]     .dbcontent .ant-table.ant-table-bordered .ant-table-container {\n  border: none;\n}\n[_nghost-%COMP%]     .dbcontent .ant-table table {\n  color: #fff;\n}\n[_nghost-%COMP%]     .dbcontent .ant-table-body {\n  overflow-y: auto !important;\n}\n[_nghost-%COMP%]     .dbcontent .ant-empty-normal {\n  color: #fff;\n}\n[_nghost-%COMP%]     .dbcontent .ant-table {\n  background: transparent;\n}\n[_nghost-%COMP%]     .dbcontent .ant-table-tbody > tr:hover:not(.ant-table-expanded-row) > td, [_nghost-%COMP%]     .dbcontent .ant-table-tbody .ant-table-row-hover, [_nghost-%COMP%]     .dbcontent .ant-table-tbody .ant-table-row-hover > td {\n  background: none !important;\n}\n[_nghost-%COMP%]     .dbcontent .ant-table-tbody > tr > td {\n  padding: 8px;\n  border-right: 1px solid #15a0ff;\n  border-bottom: 1px solid #15a0ff;\n  text-align: center;\n  border-top: none;\n}\n[_nghost-%COMP%]     .dbcontent .ant-table-tbody > tr > td:first-child {\n  border-left: 1px solid #15a0ff;\n}\n[_nghost-%COMP%]     .dbcontent .ant-table-tbody > tr.ant-table-placeholder:hover > td {\n  background: transparent;\n}\n[_nghost-%COMP%]     .dbcontent .ant-table-thead > tr > th {\n  text-align: center;\n  color: #fff;\n  background: #1d4384;\n  border-right: 1px solid #15a0ff;\n  border-top: 1px solid #15a0ff;\n  border-bottom: 1px solid #15a0ff;\n}\n[_nghost-%COMP%]     .dbcontent .ant-table-thead > tr > th:nth-child(1) {\n  border-left: 1px solid #15a0ff;\n}\n[_nghost-%COMP%]     .ant-select-selector {\n  background: transparent !important;\n  color: #Fff;\n}\n[_nghost-%COMP%]     .ant-select-arrow {\n  color: #fff;\n}\n[_nghost-%COMP%]     .train-left {\n  flex-basis: 80%;\n  border-right: 1px solid #149fff;\n  overflow: hidden;\n}\n[_nghost-%COMP%]     .train-area {\n  flex: 1;\n  margin: 10px;\n  overflow: hidden;\n}\n[_nghost-%COMP%]     .train-area-btns {\n  width: 280px;\n  height: 48px;\n  margin: 10px auto;\n  border: 1px solid #15a0ff;\n  border-radius: 6px;\n  overflow: hidden;\n}\n[_nghost-%COMP%]     .train-area-btn-item {\n  flex: 1;\n  color: #fff;\n  height: 48px;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  background-color: transparent;\n}\n[_nghost-%COMP%]     .train-area-btn-item.active {\n  background-color: #15a0ff;\n}\n[_nghost-%COMP%]     .train-table-box {\n  flex: 1;\n  overflow: hidden;\n}\n[_nghost-%COMP%]     .train-right {\n  flex: 20%;\n  overflow: hidden;\n}\n[_nghost-%COMP%]     .train-classifies {\n  flex-basis: 40%;\n  border-bottom: 1px dashed #1f60c2;\n  overflow: hidden;\n}\n[_nghost-%COMP%]     .train-title {\n  color: #fff;\n  padding: 13px 10px;\n  background: url('bg10.png') no-repeat 0 100%;\n}\n[_nghost-%COMP%]     .echart-box {\n  flex: 1;\n  overflow: hidden;\n}\n[_nghost-%COMP%]     .train-images {\n  flex-basis: 60%;\n  overflow: hidden;\n}\n[_nghost-%COMP%]     .detail-info-box {\n  flex: 1;\n  align-items: center;\n  padding: 0 10px;\n  color: #25b3e4;\n  overflow: hidden;\n}\n[_nghost-%COMP%]     .detail-info-type {\n  flex-basis: 30px;\n  align-items: center;\n  width: 100%;\n  padding: 0 20px;\n  margin-top: 10px;\n  background: url('bg08.png') no-repeat 0 0 / 100% 100%;\n}\n[_nghost-%COMP%]     .detail-info-param {\n  flex: 1;\n}\n[_nghost-%COMP%]     .is_mark {\n  color: #27f069;\n}\n[_nghost-%COMP%]     .train-btn-edit {\n  margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6L2ZmL3RhcmdldC1yZWNvZ25pemUtbWdyLWh0bWwtVjAuMi9zcmMvYXBwL3BhZ2VzL2RhdGEtdHJhaW5pbmcvdHJhaW4ubGVzcyIsInRyYWluLmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHTSxZQUFBO0FDRE47QURGQTtFQU9NLFdBQUE7QUNGTjtBRExBO0VBVU0sMkJBQUE7QUNGTjtBRFJBO0VBYU0sV0FBQTtBQ0ZOO0FEWEE7RUFnQk0sdUJBQUE7QUNGTjtBRGRBOzs7RUFvQk0sMkJBQUE7QUNETjtBRG5CQTtFQTBCTSxZQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNKTjtBREtNO0VBQ0UsOEJBQUE7QUNIUjtBRDdCQTtFQW9DTSx1QkFBQTtBQ0pOO0FEaENBO0VBdUNNLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsK0JBQUE7RUFDQSw2QkFBQTtFQUNBLGdDQUFBO0FDSk47QURLTTtFQUNFLDhCQUFBO0FDSFI7QUQzQ0E7RUFzREksa0NBQUE7RUFDQSxXQUFBO0FDUko7QUQvQ0E7RUEyREksV0FBQTtBQ1RKO0FEbERBO0VBOERJLGVBQUE7RUFDQSwrQkFBQTtFQUNBLGdCQUFBO0FDVEo7QUR2REE7RUFvRUksT0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ1ZKO0FENURBO0VBMEVJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNYSjtBRHBFQTtFQW9GSSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7QUNiSjtBRDlFQTtFQStGSSx5QkFBQTtBQ2RKO0FEakZBO0VBbUdJLE9BQUE7RUFDQSxnQkFBQTtBQ2ZKO0FEckZBO0VBd0dJLFNBQUE7RUFDQSxnQkFBQTtBQ2hCSjtBRHpGQTtFQTZHSSxlQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQkFBQTtBQ2pCSjtBRDlGQTtFQW1ISSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSw0Q0FBQTtBQ2xCSjtBRG5HQTtFQXlISSxPQUFBO0VBQ0EsZ0JBQUE7QUNuQko7QUR2R0E7RUE4SEksZUFBQTtFQUNBLGdCQUFBO0FDcEJKO0FEM0dBO0VBbUlJLE9BQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNyQko7QURsSEE7RUEySUksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxREFBQTtBQ3RCSjtBRDFIQTtFQW9KSSxPQUFBO0FDdkJKO0FEN0hBO0VBd0pJLGNBQUE7QUN4Qko7QURoSUE7RUE0SkksWUFBQTtBQ3pCSiIsImZpbGUiOiJ0cmFpbi5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgOjpuZy1kZWVwIHtcbiAgLmRiY29udGVudHtcbiAgICAuYW50LXRhYmxlLmFudC10YWJsZS1ib3JkZXJlZCAuYW50LXRhYmxlLWNvbnRhaW5lcntcbiAgICAgIGJvcmRlcjpub25lO1xuICAgIH1cblxuICAgIC5hbnQtdGFibGUgdGFibGV7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICB9XG4gICAgLmFudC10YWJsZS1ib2R5e1xuICAgICAgb3ZlcmZsb3cteTogYXV0byAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAuYW50LWVtcHR5LW5vcm1hbHtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgIH1cbiAgICAuYW50LXRhYmxle1xuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgfVxuIC5hbnQtdGFibGUtdGJvZHl7XG4gICAgICA+IHRyOmhvdmVyOm5vdCguYW50LXRhYmxlLWV4cGFuZGVkLXJvdykgPiB0ZCwuYW50LXRhYmxlLXJvdy1ob3ZlciwuYW50LXRhYmxlLXJvdy1ob3Zlcj50ZHtcbiAgICAgIGJhY2tncm91bmQ6bm9uZSAhaW1wb3J0YW50O1xuICAgICAgLy/ov5nph4zmmK/lsIbpvKDmoIfnp7vlhaXml7bnmoTog4zmma/oibLlj5bmtojmjonkuoZcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuYW50LXRhYmxlLXRib2R5ID4gdHIgPiB0ZHtcbiAgICAgIHBhZGRpbmc6OHB4O1xuICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzE1YTBmZjtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMTVhMGZmO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgICAgICY6Zmlyc3QtY2hpbGR7XG4gICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzE1YTBmZjtcbiAgICAgIH1cbiAgICB9XG4gICAgLmFudC10YWJsZS10Ym9keSA+IHRyLmFudC10YWJsZS1wbGFjZWhvbGRlcjpob3ZlciA+IHRke1xuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgfVxuICAgIC5hbnQtdGFibGUtdGhlYWQgPiB0ciA+IHRoe1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgICBiYWNrZ3JvdW5kOiAjMWQ0Mzg0O1xuICAgICAgYm9yZGVyLXJpZ2h0OjFweCBzb2xpZCAjMTVhMGZmO1xuICAgICAgYm9yZGVyLXRvcDoxcHggc29saWQgIzE1YTBmZjtcbiAgICAgIGJvcmRlci1ib3R0b206MXB4IHNvbGlkICMxNWEwZmY7XG4gICAgICAmOm50aC1jaGlsZCgxKXtcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjMTVhMGZmO1xuICAgICAgfVxuICAgIH1cblxuICB9XG5cbiAgLmFudC1zZWxlY3Qtc2VsZWN0b3J7XG4gICAgXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICBjb2xvcjogI0ZmZjtcbiAgICBcbiAgfVxuICAuYW50LXNlbGVjdC1hcnJvd3tcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuICAudHJhaW4tbGVmdCB7XG4gICAgZmxleC1iYXNpczogODAlO1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMxNDlmZmY7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuXG4gIC50cmFpbi1hcmVhIHtcbiAgICBmbGV4OiAxO1xuICAgIG1hcmdpbjogMTBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG5cbiAgLnRyYWluLWFyZWEtYnRucyB7XG4gICAgd2lkdGg6IDI4MHB4O1xuICAgIGhlaWdodDogNDhweDtcbiAgICBtYXJnaW46IDEwcHggYXV0bztcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMTVhMGZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG5cblxuICAudHJhaW4tYXJlYS1idG4taXRlbSB7XG4gICAgZmxleDogMTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgfVxuXG4gIC50cmFpbi1hcmVhLWJ0bi1pdGVtLmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE1YTBmZjtcbiAgfVxuXG4gIC50cmFpbi10YWJsZS1ib3gge1xuICAgIGZsZXg6IDE7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuXG4gIC50cmFpbi1yaWdodCB7XG4gICAgZmxleDogMjAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cblxuICAudHJhaW4tY2xhc3NpZmllcyB7XG4gICAgZmxleC1iYXNpczogNDAlO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgIzFmNjBjMjtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG5cbiAgLnRyYWluLXRpdGxlIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBwYWRkaW5nOiAxM3B4IDEwcHg7XG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2JnMTAucG5nJykgbm8tcmVwZWF0IDAgMTAwJTtcbiAgfVxuXG4gIC5lY2hhcnQtYm94IHtcbiAgICBmbGV4OiAxO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cblxuICAudHJhaW4taW1hZ2VzIHtcbiAgICBmbGV4LWJhc2lzOiA2MCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuXG4gIC5kZXRhaWwtaW5mby1ib3gge1xuICAgIGZsZXg6IDE7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgY29sb3I6ICMyNWIzZTQ7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuXG4gIC5kZXRhaWwtaW5mby10eXBlIHtcbiAgICBmbGV4LWJhc2lzOiAzMHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMCAyMHB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2JnMDgucG5nJykgbm8tcmVwZWF0IDAgMCB+XCIvXCIgMTAwJSAxMDAlO1xuICB9XG5cbiAgLmRldGFpbC1pbmZvLXBhcmFtIHtcbiAgICBmbGV4OiAxO1xuICB9XG5cbiAgLmlzX21hcmsge1xuICAgIGNvbG9yOiAjMjdmMDY5O1xuICB9XG5cbiAgLnRyYWluLWJ0bi1lZGl0IHtcbiAgICBtYXJnaW46IDEwcHg7XG4gIH1cblxufVxuIiwiOmhvc3QgOjpuZy1kZWVwIC5kYmNvbnRlbnQgLmFudC10YWJsZS5hbnQtdGFibGUtYm9yZGVyZWQgLmFudC10YWJsZS1jb250YWluZXIge1xuICBib3JkZXI6IG5vbmU7XG59XG46aG9zdCA6Om5nLWRlZXAgLmRiY29udGVudCAuYW50LXRhYmxlIHRhYmxlIHtcbiAgY29sb3I6ICNmZmY7XG59XG46aG9zdCA6Om5nLWRlZXAgLmRiY29udGVudCAuYW50LXRhYmxlLWJvZHkge1xuICBvdmVyZmxvdy15OiBhdXRvICFpbXBvcnRhbnQ7XG59XG46aG9zdCA6Om5nLWRlZXAgLmRiY29udGVudCAuYW50LWVtcHR5LW5vcm1hbCB7XG4gIGNvbG9yOiAjZmZmO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5kYmNvbnRlbnQgLmFudC10YWJsZSB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5kYmNvbnRlbnQgLmFudC10YWJsZS10Ym9keSA+IHRyOmhvdmVyOm5vdCguYW50LXRhYmxlLWV4cGFuZGVkLXJvdykgPiB0ZCxcbjpob3N0IDo6bmctZGVlcCAuZGJjb250ZW50IC5hbnQtdGFibGUtdGJvZHkgLmFudC10YWJsZS1yb3ctaG92ZXIsXG46aG9zdCA6Om5nLWRlZXAgLmRiY29udGVudCAuYW50LXRhYmxlLXRib2R5IC5hbnQtdGFibGUtcm93LWhvdmVyID4gdGQge1xuICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XG59XG46aG9zdCA6Om5nLWRlZXAgLmRiY29udGVudCAuYW50LXRhYmxlLXRib2R5ID4gdHIgPiB0ZCB7XG4gIHBhZGRpbmc6IDhweDtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzE1YTBmZjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMxNWEwZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXRvcDogbm9uZTtcbn1cbjpob3N0IDo6bmctZGVlcCAuZGJjb250ZW50IC5hbnQtdGFibGUtdGJvZHkgPiB0ciA+IHRkOmZpcnN0LWNoaWxkIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjMTVhMGZmO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5kYmNvbnRlbnQgLmFudC10YWJsZS10Ym9keSA+IHRyLmFudC10YWJsZS1wbGFjZWhvbGRlcjpob3ZlciA+IHRkIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG46aG9zdCA6Om5nLWRlZXAgLmRiY29udGVudCAuYW50LXRhYmxlLXRoZWFkID4gdHIgPiB0aCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQ6ICMxZDQzODQ7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMxNWEwZmY7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMTVhMGZmO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzE1YTBmZjtcbn1cbjpob3N0IDo6bmctZGVlcCAuZGJjb250ZW50IC5hbnQtdGFibGUtdGhlYWQgPiB0ciA+IHRoOm50aC1jaGlsZCgxKSB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzE1YTBmZjtcbn1cbjpob3N0IDo6bmctZGVlcCAuYW50LXNlbGVjdC1zZWxlY3RvciB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjRmZmO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5hbnQtc2VsZWN0LWFycm93IHtcbiAgY29sb3I6ICNmZmY7XG59XG46aG9zdCA6Om5nLWRlZXAgLnRyYWluLWxlZnQge1xuICBmbGV4LWJhc2lzOiA4MCU7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMxNDlmZmY7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG46aG9zdCA6Om5nLWRlZXAgLnRyYWluLWFyZWEge1xuICBmbGV4OiAxO1xuICBtYXJnaW46IDEwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG46aG9zdCA6Om5nLWRlZXAgLnRyYWluLWFyZWEtYnRucyB7XG4gIHdpZHRoOiAyODBweDtcbiAgaGVpZ2h0OiA0OHB4O1xuICBtYXJnaW46IDEwcHggYXV0bztcbiAgYm9yZGVyOiAxcHggc29saWQgIzE1YTBmZjtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuOmhvc3QgOjpuZy1kZWVwIC50cmFpbi1hcmVhLWJ0bi1pdGVtIHtcbiAgZmxleDogMTtcbiAgY29sb3I6ICNmZmY7XG4gIGhlaWdodDogNDhweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG46aG9zdCA6Om5nLWRlZXAgLnRyYWluLWFyZWEtYnRuLWl0ZW0uYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE1YTBmZjtcbn1cbjpob3N0IDo6bmctZGVlcCAudHJhaW4tdGFibGUtYm94IHtcbiAgZmxleDogMTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbjpob3N0IDo6bmctZGVlcCAudHJhaW4tcmlnaHQge1xuICBmbGV4OiAyMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG46aG9zdCA6Om5nLWRlZXAgLnRyYWluLWNsYXNzaWZpZXMge1xuICBmbGV4LWJhc2lzOiA0MCU7XG4gIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgIzFmNjBjMjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbjpob3N0IDo6bmctZGVlcCAudHJhaW4tdGl0bGUge1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMTNweCAxMHB4O1xuICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmcxMC5wbmcnKSBuby1yZXBlYXQgMCAxMDAlO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5lY2hhcnQtYm94IHtcbiAgZmxleDogMTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbjpob3N0IDo6bmctZGVlcCAudHJhaW4taW1hZ2VzIHtcbiAgZmxleC1iYXNpczogNjAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5kZXRhaWwtaW5mby1ib3gge1xuICBmbGV4OiAxO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIGNvbG9yOiAjMjViM2U0O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5kZXRhaWwtaW5mby10eXBlIHtcbiAgZmxleC1iYXNpczogMzBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDAgMjBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2JnMDgucG5nJykgbm8tcmVwZWF0IDAgMCAvIDEwMCUgMTAwJTtcbn1cbjpob3N0IDo6bmctZGVlcCAuZGV0YWlsLWluZm8tcGFyYW0ge1xuICBmbGV4OiAxO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5pc19tYXJrIHtcbiAgY29sb3I6ICMyN2YwNjk7XG59XG46aG9zdCA6Om5nLWRlZXAgLnRyYWluLWJ0bi1lZGl0IHtcbiAgbWFyZ2luOiAxMHB4O1xufVxuIl19 */"] });
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