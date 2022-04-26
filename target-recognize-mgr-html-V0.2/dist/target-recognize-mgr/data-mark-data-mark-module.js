(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["data-mark-data-mark-module"],{

/***/ "./src/app/pages/data-mark/data-mark-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/data-mark/data-mark-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: DataMarkRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataMarkRoutingModule", function() { return DataMarkRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _data_mark_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data-mark.component */ "./src/app/pages/data-mark/data-mark.component.ts");





class DataMarkRoutingModule {
}
DataMarkRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DataMarkRoutingModule });
DataMarkRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DataMarkRoutingModule_Factory(t) { return new (t || DataMarkRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{
                    path: '', component: _data_mark_component__WEBPACK_IMPORTED_MODULE_2__["DataMarkComponent"]
                }])], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DataMarkRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataMarkRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{
                            path: '', component: _data_mark_component__WEBPACK_IMPORTED_MODULE_2__["DataMarkComponent"]
                        }])],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/data-mark/data-mark.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/data-mark/data-mark.component.ts ***!
  \********************************************************/
/*! exports provided: DataMarkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataMarkComponent", function() { return DataMarkComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _core_http_entity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/http-entity */ "./src/app/core/http-entity.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd.js");
/* harmony import */ var _data_mark_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./data-mark.service */ "./src/app/pages/data-mark/data-mark.service.ts");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-wave.js");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-transition-patch.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");












const _c0 = ["imgCanvasElement"];
const _c1 = ["drawCanvasElement"];
const _c2 = function (a0, a1, a2) { return { "classify-item-desc-active": a0, "classify-item-desc-hiden": a1, "classify-item-desc-select": a2 }; };
function DataMarkComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataMarkComponent_div_32_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const idx_r3 = ctx.index; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.labelShowAlone(idx_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataMarkComponent_div_32_Template_span_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const idx_r3 = ctx.index; const fileSample_r2 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.editRect(idx_r3, fileSample_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataMarkComponent_div_32_Template_span_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const idx_r3 = ctx.index; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.delRect(idx_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const fileSample_r2 = ctx.$implicit;
    const idx_r3 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](2, _c2, idx_r3 == ctx_r0.selectClassIndex1, ctx_r0.featuresAllHiden, fileSample_r2.select));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](fileSample_r2.samplePath);
} }
function DataMarkComponent_div_43_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataMarkComponent_div_43_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const i_r9 = ctx.index; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.selectAllocFile(i_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const allotFile_r8 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active-allot-file", (ctx_r1.currentAllotFile == null ? null : ctx_r1.currentAllotFile.id) === allotFile_r8.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", allotFile_r8.file.imgSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
const _c3 = function (a0, a1) { return { "isuninterested": a0, "interested": a1 }; };
class DataMarkComponent {
    constructor(http, nzMessage, dataMarkService) {
        this.http = http;
        this.nzMessage = nzMessage;
        this.dataMarkService = dataMarkService;
        this.allotFiles = [];
        this.uninterested = false;
        this.drawingRects = [];
        this.setImgSizeInfo = {
            isBigImg: false,
            src: "assets/images/icon06.png",
            title: '原比例查看图片'
        };
        this.markcountData = {
            stayMarkNum: 25,
            MarkedNum: 25,
            MarkProgress: 50,
        };
        this.drawing = false;
        this.markMode = 'manual';
        this.markData = {
            dataArr: [],
            theFeatureId: "",
        };
        this.singleTarget = false;
        this.selectClassIndex1 = -1;
        this.featuresAllHiden = false;
    }
    ngOnInit() {
        this.listenKeyboard(); // 注册键盘监听
        this.listenKeyboard2();
        // var interval
        // window.onfocus=function(){interval=window.setInterval("clipboardData.setData('text','')",100);}
        // window.onblur=function(){window.clearInterval(interval);}
    }
    ngAfterViewInit() {
        this.loadSampleFiles();
        this.reqMarkCountData();
        this.intervalLoadSampleFiles = setInterval(() => {
            var thisTime = new Date();
            if ((thisTime - this.listenTime) / 1000 >= 1 * 60 * 10) {
                this.loadSampleFiles();
            }
        }, 1000);
    }
    reqMarkCountData() {
        axios__WEBPACK_IMPORTED_MODULE_4___default.a.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL}/v1/mark-detect/markStatistics`, {}, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('Bearer'),
                'TR-Role': 'TR-User'
            }
        })
            .then((result) => {
            if (result.data.code == 1) {
                let prseData = JSON.parse(result.data.data);
                this.markcountData.stayMarkNum = prseData.NotMark;
                this.markcountData.MarkedNum = prseData.isMark;
                this.markcountData.MarkProgress = ((this.markcountData.MarkedNum / (this.markcountData.MarkedNum + this.markcountData.stayMarkNum)) * 100).toFixed(1);
            }
        });
    }
    listenKeyboard() {
        this.keyboardSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(window, 'keydown').subscribe((event) => {
            if (event.keyCode == 39) {
                this.nextAllocFile();
            }
            else if (event.keyCode == 37) {
                this.prevAllocFile();
            }
            else if (event.keyCode == 32) {
                this.gMapArr.setMode("PAN");
            }
            else if (event.keyCode == 46) {
                try {
                    if (this.gMapArr.getActiveFeature().props.name == "uninterested") {
                        this.gfeatureLayer.removeFeatureById(this.gMapArr.getActiveFeature().id);
                    }
                    else if (this.gMapArr.getActiveFeature().props.name == "123") {
                        var that = this;
                        let idx;
                        let textId = this.gMapArr.getActiveFeature().props.textId;
                        $.each(that.drawingRects, function (i, n) {
                            if (that.drawingRects[i].relatedTextId == textId) {
                                idx = i;
                            }
                        });
                        this.delRect(idx);
                    }
                }
                catch (e) {
                    console.log(e);
                }
            }
            if (event.ctrlKey) {
                if (event.keyCode == 83) {
                    event.preventDefault();
                    this.saveRect();
                }
            }
        });
        this.keyboardUp = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(window, 'keyup').subscribe((event) => {
            if (event.keyCode == 32) {
                this.gMapArr.setMode("RECT");
            }
        });
    }
    gMapActive(index) {
        let feature = this.gMapArr.layers[1].features[index];
        // if(element.props.name != "uninterested"){
        this.gMapArr.setActiveFeature(feature);
        // }
        for (let index = 0; index < feature.layer.features.length; index++) {
            const element = feature.layer.features[index];
            if (element.props.name != "uninterested") {
                this.drawingRects[index].select = false;
                if (element.id == feature.id) {
                    this.drawingRects[index].select = true;
                    // console.log(this.drawingRects)
                }
            }
        }
    }
    listenKeyboard2() {
        this.keyboardVerifySubscription2 = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(window, 'keydown').subscribe((event) => {
            if (event.keyCode == 192) {
                if (!this.singleTarget && this.gMapArr.layers[1].features.length > 0) {
                    this.singleTarget = true;
                    this.gMapActive(0);
                    // this.listenKeyboard();
                    // this.changeClassIndex(0)
                }
                else {
                    let feature = this.gMapArr.getActiveFeature();
                    // let featuresLength = 0;
                    for (let index = 0; index < this.gMapArr.layers[1].features.length; index++) {
                        const element = this.gMapArr.layers[1].features[index];
                        try {
                            if (element.id == feature.id) {
                                this.gMapActive(index + 1);
                            }
                        }
                        catch (e) {
                            this.gMapActive(0);
                        }
                    }
                    // if(this.selectClassIndex1-1>=0){
                    //   this.changeClassIndex(this.selectClassIndex1-1)
                    // }else if(this.selectClassIndex1+1<featuresLength){
                    //   this.changeClassIndex(this.selectClassIndex1+1)
                    // }
                    // return false
                }
            }
        });
    }
    removeKeyboard() {
        this.keyboardSubscription.unsubscribe();
        this.keyboardUp.unsubscribe();
        if (this.keyboarChangeFeature)
            this.keyboarChangeFeature.unsubscribe();
        if (this.keyboardVerifySubscription2)
            this.keyboardVerifySubscription2.unsubscribe();
    }
    ngOnDestroy() {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.removeKeyboard();
        clearInterval(this.intervalLoadSampleFiles);
    }
    loadSampleFiles() {
        this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL}/v1/sample-oss-file/allot`).subscribe((result) => {
            if (_core_http_entity__WEBPACK_IMPORTED_MODULE_2__["HttpResult"].succeed(result.code)) {
                this.allotFiles = result.data.map((file) => {
                    if (localStorage.getItem('sampleResourcePath').split("/")[3] != file.bucketName) {
                        file.imgSrc = `${localStorage.getItem('sampleResourcePath').split("/")[0]}//${localStorage.getItem('sampleResourcePath').split("/")[2]}/${file.bucketName}/${file.ossKey}`;
                    }
                    else {
                        file.imgSrc = localStorage.getItem('sampleResourcePath') + '/' + file.ossKey;
                    }
                    if (file.markStatus == 4) {
                        file.samplePath = file.errorCorrectionMsg;
                        file.sampleTypeId = 501;
                    }
                    return {
                        id: file.id,
                        rects: [],
                        file,
                        scaleRatio: 1,
                        relatedTextId: []
                    };
                });
                // 对象型数组去重
                const deWeight = (arr, ...arguements) => {
                    function getBoolean(o, m) {
                        let list = arguements.map(x => o[x] == m[x]);
                        return list.every(i => i);
                    }
                    let result = [];
                    // 总数组与新数组比较，遍历总数组时用新数组的some方法进行判断
                    arr.map(o => !result.some(m => getBoolean(o, m)) ? result.push(o) : '');
                    return result;
                };
                // 使用时是这样
                let arr2 = deWeight(this.allotFiles, 'id');
                this.allotFiles = arr2;
                if (this.allotFiles.length > 0) {
                    this.currentAllotFile = this.allotFiles[0];
                    this.currentIndex = 0;
                    setTimeout(() => {
                        this.drawFileInCanvas(this.currentAllotFile);
                    }, 100);
                }
            }
        });
    }
    loadSy() {
        var config = {
            tw: 300,
            th: 150,
            c: 80 // 为了避免页面下方有多余的空白, 少显示一行。所以在计算每个水印高度的时候，需要加个差值，使水印分布的更均匀（一般为内容高度的一半即可）
        };
        var dom = document.getElementById("sy");
        var userInfo = JSON.parse(localStorage.getItem("userInfo"));
        var date = new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate();
        var data = {
            name: userInfo.name + '-' + userInfo.id + '-' + date,
            code: '',
            day: ''
        };
        var width = dom.offsetWidth;
        dom.style.width = width + "px";
        var height = dom.offsetHeight;
        dom.style.height = height + "px";
        var wnum = width / config.tw || 1;
        wnum = parseInt(wnum);
        var hnum = height / config.th || 1;
        wnum = parseInt(hnum);
        var wc = (width - wnum * config.tw) / wnum - 1 || 0;
        var hc = (height - hnum * config.th + config.c) / hnum - 1 || 0;
        var num = wnum * (hnum - 1);
        var html = [];
        for (var i = 0; i < num; i++) {
            html.push('<div style="width: ' + (config.tw + wc) + 'px;height: ' + (config.th + hc) + 'px">', data.name, '<br/>', data.code, '<br/>', data.day, '</div>');
        }
        dom.innerHTML = html.join("");
        $(".table-sy div").css({
            'display': 'flex',
            'align-items': 'center',
            'justify-content': 'center',
            'transform': 'rotate(-40deg)',
            'float': 'left'
        });
    }
    drawFileInCanvas(allotFile) {
        $("#aiLabel").empty();
        this.setImgSizeInfo = {
            isBigImg: false,
            src: "assets/images/icon06.png",
            title: '原比例查看图片'
        };
        this.listenTime = new Date();
        this.drawingRects = [];
        var that = this;
        var drawingStyle;
        var imgSrc = localStorage.getItem('sampleResourcePath') + `/${allotFile.file.ossKey}`;
        if (localStorage.getItem('sampleResourcePath').split("/")[3] != allotFile.file.bucketName) {
            imgSrc = `${localStorage.getItem('sampleResourcePath').split("/")[0]}//${localStorage.getItem('sampleResourcePath').split("/")[2]}/${allotFile.file.bucketName}/${allotFile.file.ossKey}`;
        }
        var img = new Image();
        img.src = imgSrc;
        if (img.complete) {
            const imgWidth = img.width;
            const imgHeight = img.height;
            this.gMapArr = new AILabel.Map(`aiLabel`, {
                center: { x: imgWidth / 2, y: imgHeight / 2 },
                zoom: imgWidth * 2,
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
            $(".canvas-container").append("<div id='sy' class='table-sy' style= 'width: 100%;height: 100%;position: absolute;pointer-events: none; /*主要是这个属性*/color:rgba(210, 214, 217,.2);z-index: 99999999999;opacity: .5;'></div>");
            this.loadSy();
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
            }, { name: '第一个图片图层' }, { zIndex: 1 });
            that.gMapArr.addLayer(imageLayer);
            that.gfeatureLayer = new AILabel.Layer.Feature(`feature`, { name: '第一个矢量图层' }, { zIndex: 19 });
            that.gMapArr.addLayer(that.gfeatureLayer);
            const gFirstTextLayer = new AILabel.Layer.Text('first-layer-text', // id
            { name: '第一个文本图层' }, // props
            { zIndex: 12, opacity: 1 } // style
            );
            that.gMapArr.addLayer(gFirstTextLayer);
            that.gMapArr.events.on('drawDone', (type, data, data1) => {
                var feature;
                const relatedTextId = `label-text-id-${+new Date()}`;
                const relatedDeleteMarkerId = `label-marker-id-${+new Date()}`;
                if (type === 'RECT') {
                    // 添加feature
                    if (!that.uninterested) {
                        feature = new AILabel.Feature.Rect(`${+new Date}`, // id
                        data, // shape
                        { name: '', textId: relatedTextId }, // props
                        { strokeStyle: '#00f', fillStyle: '#0f0', globalAlpha: 0.2, lineWidth: 1, fill: true, stroke: true } // style
                        );
                    }
                    else {
                        feature = new AILabel.Feature.Rect(`${+new Date}`, // id
                        data, // shape
                        { name: 'uninterested', textId: relatedTextId }, // props
                        { strokeStyle: '#031129', fillStyle: '#031129', globalAlpha: 1, lineWidth: 1, fill: true, stroke: true } // style
                        );
                    }
                    that.gfeatureLayer.addFeature(feature);
                    var text;
                    that.allotFiles.forEach(x => {
                        if (x.id == allotFile.id) {
                            var arr = x.file.samplePath.split("/");
                            if (arr.length != 1) {
                                var length = arr.length - 2;
                                text = arr[length];
                            }
                            else {
                                text = arr[0];
                            }
                            if (!that.uninterested) {
                                x.relatedTextId.push(relatedTextId);
                            }
                        }
                    });
                    // 添加feature标签名
                    const { x: ltx, y: lty } = data;
                    const gFirstText = new AILabel.Text(relatedTextId, // id
                    { text: text, position: { x: ltx, y: lty }, offset: { x: 0, y: 0 } }, // shape, 左上角
                    { name: '第一个文本对象' }, // props
                    { fillStyle: '#15a0ff', strokeStyle: '#f0f8ff00', background: true, globalAlpha: 1, fontColor: '#fff' } // style
                    );
                    if (!that.uninterested) {
                        gFirstTextLayer.addText(gFirstText);
                    }
                }
                else if (type === 'POLYGON') {
                    feature = new AILabel.Feature.Polygon(`${+new Date}`, // id
                    { points: data }, // shape
                    { name: '123' }, // props
                    drawingStyle // style
                    );
                    that.gfeatureLayer.addFeature(feature);
                }
                that.markData.dataArr = [];
                $.each(that.gMapArr.layers[1].features, function (i, x) {
                    that.markData.dataArr.push({
                        style: x.style,
                        type: x.type,
                        shape: x.shape,
                        id: x.id
                    });
                });
                that.markData.theFeatureId = feature.id;
                // this.initDrawingCanvas();
                $.each(that.allotFiles, function (i, x) {
                    if (x.id == allotFile.id) {
                        var arr = x.file.samplePath.split("/");
                        var length = arr.length - 2;
                        if (arr.length != 1) {
                            length = arr.length - 2;
                            text = arr[length];
                        }
                        else {
                            length = 0;
                            text = arr[length];
                        }
                        if (!that.uninterested) {
                            axios__WEBPACK_IMPORTED_MODULE_4___default.a.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL}/v1/sample-oss-file/relationQueryCatalogue?sampleTypeName=${text}`, { sampleTypeName: text }, {
                                headers: {
                                    'Authorization': 'Bearer ' + localStorage.getItem('Bearer'),
                                    'TR-Role': 'TR-User'
                                }
                            })
                                .then((result) => {
                                if (result.data.data.length > 0) {
                                    result.data.data[0].relatedTextId = x.relatedTextId;
                                    feature.props.name = result.data.data[0].id;
                                    that.drawingRects.push({
                                        id: result.data.data[0].id,
                                        samplePath: result.data.data[0].samplePath,
                                        markData: result.data.data[0],
                                        relatedTextId
                                    });
                                }
                                else {
                                    that.drawingRects.push({
                                        id: x.file.id,
                                        samplePath: x.file.samplePath,
                                        markData: x,
                                        relatedTextId
                                    });
                                }
                            });
                        }
                    }
                });
            });
            that.gMapArr.events.on('featureSelected', (feature) => {
                let index;
                for (let i = 0; i < feature.layer.features.length; i++) {
                    const element = feature.layer.features[i];
                    if (element.props.name != "uninterested") {
                        this.drawingRects[i].select = false;
                        if (element.id == feature.id) {
                            index = i;
                        }
                    }
                }
                that.gMapActive(index);
                // that.gMapArr.setActiveFeature(feature);
                // console.log(feature.layer.features)
            });
            that.gMapArr.events.on('featureUnselected', () => {
                // that.gMapArr.setActiveFeature(null);
                that.gMapUnactive();
            });
            that.gMapArr.events.on('featureUpdated', (feature, shape) => {
                feature.updateShape(shape);
                const markerId = feature.props.deleteMarkerId;
                const textId = feature.props.textId;
                // 更新text位置
                const targetText = gFirstTextLayer.getTextById(textId);
                targetText.updatePosition(feature.getPoints()[0]);
                that.markData.dataArr = [];
                $.each(that.gMapArr.layers[1].features, function (i, x) {
                    that.markData.dataArr.push({
                        style: x.style,
                        type: x.type,
                        shape: x.shape,
                        id: x.id
                    });
                });
            });
            // 判断是否人机协同标注
            if (that.markMode === 'auto') {
                that.autoMark();
            }
        }
        else {
            setTimeout(() => {
                this.drawFileInCanvas(allotFile);
            }, 200);
        }
    }
    redraw(points) {
        this.gfeatureLayer.removeFeatureById(this.markData.theFeatureId);
    }
    cancelRect() {
        if (this.drawingRects.length > 0) {
            this.drawingRects.splice(0, this.drawingRects.length);
            this.gfeatureLayer.removeAllFeatures();
            // 删除对应text
            this.gMapArr.layers[2].removeAllTexts();
        }
    }
    saveRect() {
        if (this.gMapArr.layers[1].features.length < 1) {
            this.nzMessage.error("请先标注");
            return;
        }
        this.currentAllotFile.rects = this.drawingRects;
        const reqBody = {};
        var that = this;
        let featuresArr = [];
        var dataRight = true;
        $.each(this.gMapArr.layers[1].features, function (i, rect) {
            if (rect.props.name != "uninterested") {
                delete rect.layer;
                if (!rect.style.stroke) {
                    rect.style.globalAlpha = 0.2;
                    rect.style.stroke = true;
                }
                featuresArr.push(rect);
            }
        });
        $.each(featuresArr, function (i, rect) {
            if (!rect.props.name)
                dataRight = false;
            rect.props.text = that.gMapArr.layers[2].texts[i].textInfo.text;
            let xmin = parseInt(rect.shape.x);
            let ymin = parseInt(rect.shape.y);
            let xmax = parseInt(rect.shape.x) + parseInt(rect.shape.width);
            let ymax = parseInt(rect.shape.y) + parseInt(rect.shape.height);
            if (that.drawingRects[i].id) {
                reqBody[that.drawingRects[i].id] = {
                    "xmin": xmin,
                    "ymin": ymin,
                    "xmax": xmax,
                    "ymax": ymax
                };
            }
            else {
                reqBody[that.currentAllotFile.file.sampleTypeId] = {
                    "xmin": xmin,
                    "ymin": ymin,
                    "xmax": xmax,
                    "ymax": ymax
                };
            }
        });
        let saveData = JSON.stringify(featuresArr);
        if (!dataRight)
            return this.nzMessage.error("保存失败,数据库中未查询到当前分类名");
        this.http.patch(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL}/v1/sample-oss-file/patch_mark_status`, {}, {
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'Accept': '*!/'
            },
            params: {
                fileId: this.currentAllotFile.id + '',
                sampleOssTypeId: this.drawingRects[0].id + '',
                labelMessageObject: saveData
            }
        })
            .subscribe((result) => {
            if (_core_http_entity__WEBPACK_IMPORTED_MODULE_2__["HttpResult"].succeed(result.code)) {
                this.nzMessage.success("保存成功");
                // 在数组中删除当前这个
                // 判断是否还有下一张
                if (this.allotFiles.length > 1) {
                    // 移除当前这个已经保存的
                    // this.allotFiles = this.allotFiles.filter(file => file.id !== this.currentAllotFile.id);
                    this.allotFiles.splice(this.currentIndex, 1);
                    this.currentAllotFile = this.allotFiles[this.currentIndex];
                    setTimeout(() => {
                        this.drawFileInCanvas(this.currentAllotFile);
                    }, 100);
                    this.drawingRects = [];
                }
                else {
                    $("#aiLabel").empty();
                    this.loadSampleFiles();
                }
                this.reqMarkCountData();
            }
        });
        this.listenTime = new Date();
    }
    setImgSize() {
        if (!this.setImgSizeInfo.isBigImg) {
            let imgWidth = this.currentAllotFile.file.width;
            if (!imgWidth) {
                let img = new Image();
                img.src = this.currentAllotFile.file.imgSrc;
                imgWidth = img.width;
            }
            this.gMapArr.zoomTo(imgWidth * 2 / (1 / this.gMapArr.getScale()));
            this.setImgSizeInfo.src = "assets/images/icon07.png";
            this.setImgSizeInfo.title = "图片自适应大小";
            this.setImgSizeInfo.isBigImg = true;
        }
        else {
            let imgWidth = this.currentAllotFile.file.width;
            if (!imgWidth) {
                let img = new Image();
                img.src = this.currentAllotFile.file.imgSrc;
                imgWidth = img.width;
            }
            this.gMapArr.zoomTo(imgWidth * 2 / (1 / this.gMapArr.getScale()));
            this.setImgSizeInfo.src = "assets/images/icon06.png";
            this.setImgSizeInfo.title = "原比例查看图片";
            this.setImgSizeInfo.isBigImg = false;
        }
    }
    removeImg() {
        this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL}/v1/label_task/deleteImg?id=${this.currentAllotFile.id}`, {}).subscribe((result) => {
            if (_core_http_entity__WEBPACK_IMPORTED_MODULE_2__["HttpResult"].succeed(result.code)) {
                this.allotFiles.splice(this.currentIndex, 1);
                this.nzMessage.success("删除成功");
                if (this.allotFiles.length > 1) {
                    this.currentAllotFile = this.allotFiles[this.currentIndex];
                    setTimeout(() => {
                        this.drawFileInCanvas(this.currentAllotFile);
                    }, 100);
                    this.drawingRects = [];
                }
                else {
                    this.loadSampleFiles();
                }
                this.reqMarkCountData();
            }
            else {
                this.nzMessage.error("删除失败");
            }
        });
    }
    nextAllocFile() {
        if (this.currentIndex < this.allotFiles.length - 1) {
            this.currentIndex = this.currentIndex + 1;
            this.currentAllotFile = this.allotFiles[this.currentIndex];
            setTimeout(() => {
                this.drawFileInCanvas(this.currentAllotFile);
            }, 100);
            this.redraw();
        }
    }
    selectAllocFile(index) {
        this.currentIndex = index;
        // this.currentIndex = this.currentIndex + 1;
        this.currentAllotFile = this.allotFiles[index];
        setTimeout(() => {
            this.drawFileInCanvas(this.currentAllotFile);
        }, 100);
        this.redraw();
    }
    prevAllocFile() {
        if (this.currentIndex > 0) {
            this.currentIndex = this.currentIndex - 1;
            this.currentAllotFile = this.allotFiles[this.currentIndex];
            setTimeout(() => {
                this.drawFileInCanvas(this.currentAllotFile);
            }, 100);
            this.redraw();
        }
    }
    delRect(idx) {
        // console.log(idx,this.gMapArr.layers[1].features,this.selectClassIndex1)
        if (idx == this.selectClassIndex1)
            this.labelShowAlone(this.selectClassIndex1 - 1);
        this.gfeatureLayer.removeFeatureById(this.gMapArr.layers[1].features[idx].id);
        // 删除对应text
        this.gMapArr.layers[2].removeTextById(this.gMapArr.layers[2].texts[idx].id);
        if (this.drawingRects.length != 0) {
            this.drawingRects[idx].markData.relatedTextId.splice(idx - 1, 1);
        }
        this.drawingRects.splice(idx, 1);
    }
    editRect(idx, fileSample) {
        this.drawingRects[idx].markData.rects = [];
        localStorage.setItem("markData", JSON.stringify(this.drawingRects[idx].markData));
        //oo
        this.gMapArr.getActiveFeature();
        // this.keyboardSubscription.unsubscribe()
        this.removeKeyboard();
        this.dataMarkService.creatNzModal(this, idx, fileSample);
    }
    autoMark() {
        if (this.currentAllotFile) {
            this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL}/v1/mark-detect`, {
                "ossKey": this.currentAllotFile.file.ossKey
            }).subscribe((result) => {
                if (_core_http_entity__WEBPACK_IMPORTED_MODULE_2__["HttpResult"].succeed(result.code)) {
                    const marks = result.data;
                    const rects = [];
                    if (marks.length == 0) {
                        this.nzMessage.error("无法识别");
                    }
                    else {
                        this.nzMessage.success("识别成功");
                        for (let i = 0; i < marks.length; i++) {
                            rects.push({
                                startX: Math.floor(marks[i].markPolygon.minX * this.currentAllotFile.scaleRatio),
                                startY: Math.floor(marks[i].markPolygon.minY * this.currentAllotFile.scaleRatio),
                                endX: Math.floor(marks[i].markPolygon.maxX * this.currentAllotFile.scaleRatio),
                                endY: Math.floor(marks[i].markPolygon.maxY * this.currentAllotFile.scaleRatio),
                                saved: false,
                                sampleId: marks[i].sampleOssType.id,
                                samplePath: marks[i].sampleOssType.sampleTypeName
                            });
                            const relatedTextId = `label-text-id-${marks[i].sampleOssType.id}${i}`;
                            var feature = new AILabel.Feature.Rect(marks[i].sampleOssType.id + "_" + i, { height: marks[i].markPolygon.maxY - marks[i].markPolygon.minY, width: marks[i].markPolygon.maxX - marks[i].markPolygon.minX, x: marks[i].markPolygon.minX, y: marks[i].markPolygon.minY }, { name: '123', textId: relatedTextId }, { fill: true,
                                fillStyle: "#0f0",
                                globalAlpha: 0.2,
                                lineWidth: 1,
                                opacity: 1,
                                stroke: true,
                                strokeStyle: "red" });
                            this.gfeatureLayer.addFeature(feature);
                            const { x: ltx, y: lty } = feature.shape;
                            const gFirstText = new AILabel.Text(relatedTextId, // id
                            { text: marks[i].markPolygon.categoryCn, position: { x: ltx, y: lty }, offset: { x: 0, y: 0 } }, // shape, 左上角
                            { name: '第一个文本对象' }, // props
                            { fillStyle: '#15a0ff', strokeStyle: '#f0f8ff00', background: true, globalAlpha: 1, fontColor: '#fff' } // style
                            );
                            this.gMapArr.layers[2].addText(gFirstText);
                            this.currentAllotFile.relatedTextId.push(relatedTextId);
                            this.drawingRects.push({
                                id: marks[i].sampleOssType.id,
                                markData: this.currentAllotFile,
                                samplePath: marks[i].sampleOssType.samplePath,
                                relatedTextId
                            });
                        }
                    }
                }
            });
        }
    }
    changeMarkMode(markMode) {
        this.markMode = markMode;
        if (this.markMode === 'auto') {
            // 人机协同标注
            this.autoMark();
        }
        else {
            // 手动标注
            this.drawingRects = [];
            this.redraw();
        }
    }
    changeUninterested() {
        if (this.uninterested) {
            this.uninterested = false;
        }
        else {
            this.uninterested = true;
        }
    }
    keyBoardOfFeature() {
        this.keyboarChangeFeature = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(window, 'keydown').subscribe((event) => {
            if (event.keyCode == 40) {
                if ((this.selectClassIndex1 + 1) <= 0 || (this.selectClassIndex1 + 1) >= this.gMapArr.layers[1].features.length)
                    return;
                this.labelShowAlone(this.selectClassIndex1 + 1);
            }
            else if (event.keyCode == 38) {
                if ((this.selectClassIndex1 - 1) < 0 || (this.selectClassIndex1 - 1) >= this.gMapArr.layers[1].features.length)
                    return;
                this.labelShowAlone(this.selectClassIndex1 - 1);
            }
        });
    }
    gMapUnactive() {
        this.gMapArr.setActiveFeature(null);
        for (let index = 0; index < this.gMapArr.layers[1].features.length; index++) {
            const element = this.gMapArr.layers[1].features[index];
            if (element.props.name != "uninterested") {
                this.drawingRects[index].select = false;
            }
        }
    }
    allFeaturesHide() {
        this.gMapUnactive();
        this.labelShowAlone(-1);
        this.featuresAllHiden = true;
        if (this.keyboarChangeFeature || !this.keyboarChangeFeature.closed)
            this.keyboarChangeFeature.unsubscribe();
        for (let index = 0; index < this.gMapArr.layers[1].features.length; index++) {
            let rectFeature = this.gMapArr.layers[1].features[index];
            let textFeature = this.gMapArr.layers[2].texts[index];
            if (rectFeature.props.name != "uninterested") {
                if (rectFeature.style.stroke == true) {
                    rectFeature.style.stroke = false;
                    rectFeature.style.globalAlpha = 0;
                    textFeature.style.fontColor = "rgba(225,225,225,0)";
                    textFeature.style.globalAlpha = 0;
                }
            }
        }
        this.gMapArr.refresh();
    }
    allFeatures() {
        this.featuresAllHiden = false;
        this.labelShowAlone(-1);
        if (this.keyboarChangeFeature || !this.keyboarChangeFeature.closed)
            this.keyboarChangeFeature.unsubscribe();
        if (this.keyboardVerifySubscription2) {
            this.keyboardVerifySubscription2.unsubscribe();
        }
        this.listenKeyboard2();
        for (let index = 0; index < this.gMapArr.layers[1].features.length; index++) {
            let rectFeature = this.gMapArr.layers[1].features[index];
            let textFeature = this.gMapArr.layers[2].texts[index];
            if (rectFeature.props.name != "uninterested") {
                if (rectFeature.style.stroke == false) {
                    rectFeature.style.stroke = true;
                    rectFeature.style.globalAlpha = 0.2;
                    textFeature.style.fontColor = "#fff";
                    textFeature.style.globalAlpha = 1;
                }
            }
        }
        this.gMapArr.refresh();
    }
    labelShowAlone(key) {
        this.featuresAllHiden = false;
        this.gMapUnactive();
        if (!this.keyboarChangeFeature || this.keyboarChangeFeature.closed)
            this.keyBoardOfFeature();
        if (this.keyboardVerifySubscription2)
            this.keyboardVerifySubscription2.unsubscribe();
        this.selectClassIndex1 = key;
        // this.keyBoardOfFeature()
        for (let index = 0; index < this.gMapArr.layers[1].features.length; index++) {
            let rectFeature = this.gMapArr.layers[1].features[index];
            let textFeature = this.gMapArr.layers[2].texts[index];
            if (rectFeature.props.name != "uninterested") {
                if (key != index) {
                    rectFeature.style.stroke = false;
                    rectFeature.style.globalAlpha = 0;
                    textFeature.style.fontColor = "rgba(225,225,225,0)";
                    textFeature.style.globalAlpha = 0;
                }
                else {
                    rectFeature.style.stroke = true;
                    rectFeature.style.globalAlpha = 0.2;
                    textFeature.style.fontColor = "#fff";
                    textFeature.style.globalAlpha = 1;
                }
            }
        }
        this.gMapArr.refresh();
    }
}
DataMarkComponent.ɵfac = function DataMarkComponent_Factory(t) { return new (t || DataMarkComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzMessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_mark_service__WEBPACK_IMPORTED_MODULE_7__["DataMarkService"])); };
DataMarkComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DataMarkComponent, selectors: [["ng-component"]], viewQuery: function DataMarkComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.imgCanvasElmRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.drawCanvasElmRef = _t.first);
    } }, decls: 72, vars: 19, consts: [[1, "flex-row"], [1, "annotation-left", "flex-row"], [1, "annotation-operates", "flex-column", 2, "margin-bottom", "100px"], [1, "annotation-operate-item", 2, "margin-top", "90px", 3, "click"], ["src", "assets/images/icon05.png", "alt", "\u64CD\u4F5C", "title", "\u5220\u9664\u56FE\u7247", 1, "img-responsive", "pointer"], [1, "annotation-operate-item", 3, "click"], ["src", "assets/images/icon04.jpg", "alt", "\u64CD\u4F5C", "title", "\u6E05\u9664\u6807\u6CE8", 1, "img-responsive", "pointer"], ["alt", "\u64CD\u4F5C", 1, "img-responsive", "pointer", 3, "src", "title"], ["src", "assets/images/icon05.jpg", "alt", "\u64CD\u4F5C", "title", "\u4FDD\u5B58\u56FE\u7247(\u5FEB\u6377\u952E\uFF1Actrl+s)", 1, "img-responsive", "pointer"], [1, "anootation-area", "flex-column"], [1, "anootation-area-btns", "flex-row"], [1, "anootation-area-btn-item", 3, "click"], [1, "anootation-area-operate", "canvas-group", 2, "width", "100%", "left", "0"], [1, "annotation-operate-item", 2, "line-height", "50", "border", "none", "position", "absolute", "left", "0", "z-index", "9999"], ["src", "assets/images/pre.png", "alt", "\u64CD\u4F5C", "title", "\u4E0A\u4E00\u5F20(\u5FEB\u6377\u952E\uFF1A\u5DE6\u65B9\u5411\u952E)", 1, "img-responsive", "pointer", 3, "click"], [1, "annotation-operate-item", 2, "line-height", "50", "position", "absolute", "right", "0", "border", "none", "z-index", "9999"], ["src", "assets/images/next.png", "alt", "\u64CD\u4F5C", "title", "\u4E0B\u4E00\u5F20(\u5FEB\u6377\u952E\uFF1A\u53F3\u65B9\u5411\u952E)", 1, "img-responsive", "pointer", 3, "click"], ["id", "aiLabel", 1, "canvas-container", "ai-label", 2, "width", "85%", "left", "7.5%", "border", "1px solid #fff"], [1, "annotation-right", "flex-column"], [1, "annotation-classifies", "flex-column"], [1, "annotation-title"], ["nz-button", "", "nzType", "primary", "nzSize", "small", 2, "margin-left", "10px", 3, "click"], ["nz-button", "", "nzDanger", "", "nzType", "primary", "nzSize", "small", 2, "margin-left", "10px", 3, "click"], [1, "classifies", 2, "overflow", "scroll"], ["class", "classify-item flex-row", 4, "ngFor", "ngForOf"], [1, "annotation-uninterested", "flex-column", 2, "height", "200px"], [1, "uninterested", 2, "padding", "10px", "text-align", "center"], ["nz-button", "", "nzType", "default", 3, "ngClass", "click"], [1, "annotation-images", "flex-column"], [1, "annotation-images-box", "flex-row"], ["class", "annotation-image-item", 3, "active-allot-file", "click", 4, "ngFor", "ngForOf"], [1, "annotation-markData", "flex-column"], [1, "content", 2, "padding", "10px"], [1, "subTitle"], [1, "data"], [1, "progressBox"], ["id", "markCharts", 2, "position", "relative"], ["nzStrokeColor", "#52c41a", 3, "nzPercent"], [2, "position", "absolute", "top", "5px", "right", "-8px", "color", "#fff"], ["id", "markProgress", 2, "position", "relative"], ["nzStrokeColor", "#52c41a", "nzStatus", "active", 3, "nzPercent"], [1, "classify-item", "flex-row"], [1, "classify-item-desc", 3, "ngClass", "click"], [1, "amanisky", "amani-edit", 3, "click"], [1, "amanisky", "amani-delete", 3, "click"], [1, "annotation-image-item", 3, "click"], [2, "width", "100%", "height", "100%", 3, "src"]], template: function DataMarkComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataMarkComponent_Template_div_click_3_listener() { return ctx.removeImg(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataMarkComponent_Template_div_click_5_listener() { return ctx.cancelRect(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataMarkComponent_Template_div_click_7_listener() { return ctx.setImgSize(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataMarkComponent_Template_div_click_9_listener() { return ctx.saveRect(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataMarkComponent_Template_button_click_13_listener() { return ctx.changeMarkMode("manual"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " \u624B\u52A8\u6807\u6CE8 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataMarkComponent_Template_button_click_15_listener() { return ctx.changeMarkMode("auto"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " \u4EBA\u673A\u534F\u540C\u6807\u6CE8 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataMarkComponent_Template_img_click_19_listener() { return ctx.prevAllocFile(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataMarkComponent_Template_img_click_21_listener() { return ctx.nextAllocFile(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\u5206\u7C7B ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataMarkComponent_Template_button_click_27_listener() { return ctx.allFeatures(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\u5168\u90E8\u663E\u793A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataMarkComponent_Template_button_click_29_listener() { return ctx.allFeaturesHide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\u5168\u90E8\u9690\u85CF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, DataMarkComponent_div_32_Template, 5, 6, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "\u8BBE\u7F6E\u4E0D\u611F\u5174\u8DA3\u533A\u57DF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataMarkComponent_Template_button_click_37_listener() { return ctx.changeUninterested(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "\u4E0D\u611F\u5174\u8DA3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "\u56FE\u50CF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, DataMarkComponent_div_43_Template, 2, 3, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "\u6807\u6CE8\u6570\u636E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "\u5F85\u6807\u6CE8\u56FE\u7247\u6570\u91CF:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "\u5DF2\u6807\u6CE8\u56FE\u7247\u6570\u91CF:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "\u5360\u6BD4:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "nz-progress", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "\u8FDB\u5EA6:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "p", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "nz-progress", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.setImgSizeInfo.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("title", ctx.setImgSizeInfo.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.markMode === "manual");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.markMode === "auto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.drawingRects);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](16, _c3, ctx.uninterested, !ctx.uninterested));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.allotFiles);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.markcountData.stayMarkNum);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.markcountData.MarkedNum);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzPercent", ctx.markcountData.MarkProgress);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.markcountData.stayMarkNum, ":", ctx.markcountData.MarkedNum, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzPercent", ctx.markcountData.MarkProgress);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.markcountData.MarkProgress, "%");
    } }, directives: [ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_8__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_9__["ɵNzTransitionPatchDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgClass"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzProgressComponent"]], styles: ["[_nghost-%COMP%]    > div[_ngcontent-%COMP%] {\n  position: relative;\n  height: 100%;\n}\n.canvas-group[_ngcontent-%COMP%] {\n  position: relative;\n}\n.canvas-group[_ngcontent-%COMP%]   .canvas-container[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 10px;\n  right: 10px;\n  top: 10px;\n  bottom: 10px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.canvas-group[_ngcontent-%COMP%]   .canvas-container[_ngcontent-%COMP%]   .table-sy[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  pointer-events: none;\n  \n  color: #d2d6d9;\n  z-index: 99999999999;\n  border: 1px solid red;\n}\n.canvas-group[_ngcontent-%COMP%]   .canvas-container[_ngcontent-%COMP%]   .mark-canvas[_ngcontent-%COMP%]:hover {\n  cursor: crosshair;\n}\n.annotation-image-item.active-allot-file[_ngcontent-%COMP%] {\n  padding: 5px;\n  border: 1px solid #ffc230;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2RhdGEtbWFyay9EOi9mZi90YXJnZXQtcmVjb2duaXplLW1nci1odG1sLVYwLjIvc3JjL2FwcC9wYWdlcy9kYXRhLW1hcmsvZGF0YS1tYXJrLmNvbXBvbmVudC5sZXNzIiwicGFnZXMvZGF0YS1tYXJrL2RhdGEtbWFyay5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGtCQUFBO0VBQ0EsWUFBQTtBQ0FKO0FESUE7RUFDRSxrQkFBQTtBQ0ZGO0FEQ0E7RUFJSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFFQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDSEo7QURWQTtFQWdCTSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUNISixVQUFVO0VESU4sY0FBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7QUNGTjtBRFFNO0VBQ0UsaUJBQUE7QUNOUjtBRGNFO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0FDWkoiLCJmaWxlIjoicGFnZXMvZGF0YS1tYXJrL2RhdGEtbWFyay5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgPiBkaXYge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbn1cblxuLmNhbnZhcy1ncm91cCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAuY2FudmFzLWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDEwcHg7XG4gICAgcmlnaHQ6IDEwcHg7XG4gICAgdG9wOiAxMHB4O1xuICAgIGJvdHRvbTogMTBweDtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgLnRhYmxlLXN5IHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7IC8q5Li76KaB5piv6L+Z5Liq5bGe5oCnKi9cbiAgICAgIGNvbG9yOiNkMmQ2ZDk7XG4gICAgICB6LWluZGV4OiA5OTk5OTk5OTk5OTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbiAgICAgIH1cblxuICBcblxuICAgIC5tYXJrLWNhbnZhcyB7XG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgY3Vyc29yOiBjcm9zc2hhaXI7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cblxuLmFubm90YXRpb24taW1hZ2UtaXRlbSB7XG4gICYuYWN0aXZlLWFsbG90LWZpbGUge1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjU1LCAxOTQsIDQ4KTtcbiAgfVxufVxuXG5cbiIsIjpob3N0ID4gZGl2IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uY2FudmFzLWdyb3VwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmNhbnZhcy1ncm91cCAuY2FudmFzLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMTBweDtcbiAgcmlnaHQ6IDEwcHg7XG4gIHRvcDogMTBweDtcbiAgYm90dG9tOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5jYW52YXMtZ3JvdXAgLmNhbnZhcy1jb250YWluZXIgLnRhYmxlLXN5IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgLyrkuLvopoHmmK/ov5nkuKrlsZ7mgKcqL1xuICBjb2xvcjogI2QyZDZkOTtcbiAgei1pbmRleDogOTk5OTk5OTk5OTk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbn1cbi5jYW52YXMtZ3JvdXAgLmNhbnZhcy1jb250YWluZXIgLm1hcmstY2FudmFzOmhvdmVyIHtcbiAgY3Vyc29yOiBjcm9zc2hhaXI7XG59XG4uYW5ub3RhdGlvbi1pbWFnZS1pdGVtLmFjdGl2ZS1hbGxvdC1maWxlIHtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmZjMjMwO1xufVxuIl19 */", "[_nghost-%COMP%]     .annotation-left {\n  flex-basis: 80%;\n  border-right: 1px solid #149fff;\n  overflow: hidden;\n}\n[_nghost-%COMP%]     .ant-progress-text {\n  display: none;\n  color: #fff;\n}\n[_nghost-%COMP%]     .annotation-operates {\n  flex-basis: 100px;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden;\n}\n[_nghost-%COMP%]     .annotation-operate-item {\n  flex-basis: 50px;\n  width: 50px;\n  padding: 5px;\n  margin: 5px 0;\n  border: 1px solid #1a507f;\n}\n[_nghost-%COMP%]     .anootation-area {\n  flex: 1;\n  margin: 10px 10px 10px 0;\n  overflow: hidden;\n}\n[_nghost-%COMP%]     .anootation-area-btns {\n  width: 280px;\n  height: 36px;\n  margin: 10px auto;\n  border: 1px solid #57ACF4;\n  border-radius: 6px;\n  overflow: hidden;\n}\n[_nghost-%COMP%]     .anootation-area-btn-item {\n  flex: 1;\n  color: #fff;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  font-size: 20px;\n  background-color: transparent;\n}\n[_nghost-%COMP%]     .anootation-area-btn-item.active {\n  background-color: #15a0ff;\n}\n[_nghost-%COMP%]     .anootation-area-operate {\n  flex: 1;\n}\n[_nghost-%COMP%]     .annotation-right {\n  flex: 20%;\n  overflow: hidden;\n}\n[_nghost-%COMP%]     .annotation-classifies {\n  flex-basis: 30%;\n  overflow: hidden;\n}\n[_nghost-%COMP%]     .interested {\n  color: rgba(0, 0, 0, 0.65);\n  background-color: #fff;\n}\n[_nghost-%COMP%]     .isuninterested {\n  color: #fff;\n  background-color: #327dd3;\n}\n[_nghost-%COMP%]     .annotation-uninterested {\n  flex-basis: 10%;\n  overflow: hidden;\n}\n[_nghost-%COMP%]     .annotation-title {\n  color: #fff;\n  padding: 13px 10px;\n  background: url('bg10.png') no-repeat 0 100%;\n}\n[_nghost-%COMP%]     .classifies {\n  flex: 1;\n  overflow-y: auto;\n}\n[_nghost-%COMP%]     .classify-item {\n  height: 36px;\n  line-height: 36px;\n  color: #0282ac;\n  padding: 0 10px;\n}\n[_nghost-%COMP%]     .classify-item:nth-child(even) {\n  background-color: #051934;\n}\n[_nghost-%COMP%]     .classify-item-desc {\n  flex: 1;\n  padding-right: 10px;\n  font-size: 12px;\n  white-space: nowrap;\n  word-break: keep-all;\n  cursor: pointer;\n}\n[_nghost-%COMP%]     .classify-item-desc-active {\n  color: #fff;\n}\n[_nghost-%COMP%]     .classify-item-desc-hiden {\n  color: #7c7c7c !important;\n}\n[_nghost-%COMP%]     .classify-item-desc-select {\n  color: #9e2828 !important;\n}\n[_nghost-%COMP%]     .classify-item .amanisky {\n  color: #15a0ff;\n  cursor: pointer;\n}\n[_nghost-%COMP%]     .classify-item .amani-edit {\n  margin-right: 10px;\n}\n[_nghost-%COMP%]     .annotation-images {\n  flex-basis: 30%;\n  overflow: hidden;\n}\n[_nghost-%COMP%]     .annotation-markData {\n  flex-basis: 30%;\n  overflow: hidden;\n}\n[_nghost-%COMP%]     .annotation-markData .content {\n  display: flex;\n  flex-wrap: wrap;\n}\n[_nghost-%COMP%]     .annotation-markData .content div {\n  width: 99%;\n  height: 25%;\n}\n[_nghost-%COMP%]     .annotation-markData .content div .data {\n  margin-left: 20px;\n  color: #f0720b;\n}\n[_nghost-%COMP%]     .annotation-markData .content .progressBox {\n  display: flex;\n}\n[_nghost-%COMP%]     .annotation-markData .content .progressBox .subTitle {\n  flex: 0 0 20%;\n  padding-top: 3px;\n}\n[_nghost-%COMP%]     .annotation-markData .content .progressBox p {\n  flex: 1;\n  height: 2000px;\n}\n[_nghost-%COMP%]     .annotation-images-box {\n  flex: 1;\n  flex-wrap: wrap;\n  align-content: flex-start;\n  padding: 5px;\n  overflow-y: auto;\n}\n[_nghost-%COMP%]     .annotation-image-item {\n  flex-basis: 50px;\n  height: 50px;\n  margin: 5px;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2RhdGEtbWFyay9EOi9mZi90YXJnZXQtcmVjb2duaXplLW1nci1odG1sLVYwLjIvc3JjL2FwcC9wYWdlcy9kYXRhLW1hcmsvYW5ub3RhdGlvbi5sZXNzIiwicGFnZXMvZGF0YS1tYXJrL2Fubm90YXRpb24ubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGVBQUE7RUFDQSwrQkFBQTtFQUNBLGdCQUFBO0FDQUo7QURKQTtFQVFJLGFBQUE7RUFDQSxXQUFBO0FDREo7QURSQTtFQWVJLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDSko7QURkQTtFQXNCSSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0FDTEo7QURyQkE7RUE4QkksT0FBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7QUNOSjtBRDFCQTtFQW9DSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDUEo7QURsQ0E7RUE2Q0ksT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7QUNSSjtBRDNDQTtFQXdESyx5QkFBQTtBQ1ZMO0FEOUNBO0VBNERJLE9BQUE7QUNYSjtBRGpEQTtFQXFFSSxTQUFBO0VBQ0EsZ0JBQUE7QUNqQko7QURyREE7RUEwRUksZUFBQTtFQUNBLGdCQUFBO0FDbEJKO0FEekRBO0VBK0VJLDBCQUFBO0VBQ0Esc0JBQUE7QUNuQko7QUQ3REE7RUFtRkksV0FBQTtFQUNBLHlCQUFBO0FDbkJKO0FEakVBO0VBeUZJLGVBQUE7RUFDQSxnQkFBQTtBQ3JCSjtBRHJFQTtFQThGSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSw0Q0FBQTtBQ3RCSjtBRDFFQTtFQW9HSSxPQUFBO0VBQ0EsZ0JBQUE7QUN2Qko7QUQ5RUE7RUEwR0ksWUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUN6Qko7QURwRkE7RUFpSEkseUJBQUE7QUMxQko7QUR2RkE7RUFxSEksT0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0FDM0JKO0FEL0ZBO0VBNkhFLFdBQUE7QUMzQkY7QURsR0E7RUFnSUUseUJBQUE7QUMzQkY7QURyR0E7RUFtSUUseUJBQUE7QUMzQkY7QUR4R0E7RUFzSUksY0FBQTtFQUNBLGVBQUE7QUMzQko7QUQ1R0E7RUEySUksa0JBQUE7QUM1Qko7QUQvR0E7RUFpSkksZUFBQTtFQUNBLGdCQUFBO0FDL0JKO0FEbkhBO0VBcUpJLGVBQUE7RUFDQSxnQkFBQTtBQy9CSjtBRHZIQTtFQXdKTSxhQUFBO0VBQ0EsZUFBQTtBQzlCTjtBRDNIQTtFQTJKUSxVQUFBO0VBQ0EsV0FBQTtBQzdCUjtBRC9IQTtFQThKVSxpQkFBQTtFQUNBLGNBQUE7QUM1QlY7QURuSUE7RUFtS1EsYUFBQTtBQzdCUjtBRHRJQTtFQXFLVSxhQUFBO0VBQ0EsZ0JBQUE7QUM1QlY7QUQxSUE7RUF5S1UsT0FBQTtFQUNBLGNBQUE7QUM1QlY7QUQ5SUE7RUFpTEksT0FBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ2hDSjtBRHJKQTtFQXlMSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNqQ0oiLCJmaWxlIjoicGFnZXMvZGF0YS1tYXJrL2Fubm90YXRpb24ubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IDo6bmctZGVlcCB7XG4gIC5hbm5vdGF0aW9uLWxlZnQge1xuICAgIGZsZXgtYmFzaXM6IDgwJTtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMTQ5ZmZmO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cblxuICAuYW50LXByb2dyZXNzLXRleHR7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBjb2xvcjogI2ZmZjtcbiBcbiAgfVxuIFxuXG4gIC5hbm5vdGF0aW9uLW9wZXJhdGVzIHtcbiAgICBmbGV4LWJhc2lzOiAxMDBweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cblxuICAuYW5ub3RhdGlvbi1vcGVyYXRlLWl0ZW0ge1xuICAgIGZsZXgtYmFzaXM6IDUwcHg7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIG1hcmdpbjogNXB4IDA7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzFhNTA3ZjtcbiAgfVxuXG4gIC5hbm9vdGF0aW9uLWFyZWEge1xuICAgIGZsZXg6IDE7XG4gICAgbWFyZ2luOiAxMHB4IDEwcHggMTBweCAwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cblxuICAuYW5vb3RhdGlvbi1hcmVhLWJ0bnMge1xuICAgIHdpZHRoOiAyODBweDtcbiAgICBoZWlnaHQ6IDM2cHg7XG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzU3QUNGNDtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuXG4gIC5hbm9vdGF0aW9uLWFyZWEtYnRuLWl0ZW0ge1xuICAgIGZsZXg6IDE7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgfVxuXG4gIC5hbm9vdGF0aW9uLWFyZWEtYnRuLWl0ZW0uYWN0aXZlIHtcbiAgICAvL2JhY2tncm91bmQtY29sb3I6ICMxNWEwZmY7XG4gICAgIGJhY2tncm91bmQtY29sb3I6ICMxNWEwZmY7XG4gIH1cblxuICAuYW5vb3RhdGlvbi1hcmVhLW9wZXJhdGUge1xuICAgIGZsZXg6IDE7XG4gICAgLy9qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAvL2FsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLy9ib3JkZXI6IDFweCBkb3R0ZWQgIzI5NTk5NTtcbiAgICAvL3BhZGRpbmc6IDEwcHg7XG4gICAgLy9vdmVyZmxvdzogaGlkZGVuO1xuICB9XG5cbiAgLmFubm90YXRpb24tcmlnaHQge1xuICAgIGZsZXg6IDIwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG5cbiAgLmFubm90YXRpb24tY2xhc3NpZmllcyB7XG4gICAgZmxleC1iYXNpczogMzAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cblxuICAuaW50ZXJlc3RlZHtcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjY1KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB9XG4gIC5pc3VuaW50ZXJlc3RlZHtcbiAgICBjb2xvcjojZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMjdkZDM7XG4gIH1cbiBcblxuICAuYW5ub3RhdGlvbi11bmludGVyZXN0ZWQge1xuICAgIGZsZXgtYmFzaXM6IDEwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG5cbiAgLmFubm90YXRpb24tdGl0bGUge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmc6IDEzcHggMTBweDtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmcxMC5wbmcnKSBuby1yZXBlYXQgMCAxMDAlO1xuICB9XG5cbiAgLmNsYXNzaWZpZXMge1xuICAgIGZsZXg6IDE7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgfVxuXG4gXG4gIC5jbGFzc2lmeS1pdGVtIHtcbiAgICBoZWlnaHQ6IDM2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDM2cHg7XG4gICAgY29sb3I6ICMwMjgyYWM7XG4gICAgcGFkZGluZzogMCAxMHB4O1xuICB9XG5cbiAgLmNsYXNzaWZ5LWl0ZW06bnRoLWNoaWxkKGV2ZW4pIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDUxOTM0O1xuICB9XG5cbiAgLmNsYXNzaWZ5LWl0ZW0tZGVzYyB7XG4gICAgZmxleDogMTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHdvcmQtYnJlYWs6IGtlZXAtYWxsO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuLmNsYXNzaWZ5LWl0ZW0tZGVzYy1hY3RpdmV7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmNsYXNzaWZ5LWl0ZW0tZGVzYy1oaWRlbntcbiAgY29sb3I6IHJnYigxMjQsIDEyNCwgMTI0KSAhaW1wb3J0YW50O1xufVxuLmNsYXNzaWZ5LWl0ZW0tZGVzYy1zZWxlY3R7XG4gIGNvbG9yOiByZ2IoMTU4LCA0MCwgNDApICFpbXBvcnRhbnQ7XG59XG4gIC5jbGFzc2lmeS1pdGVtIC5hbWFuaXNreSB7XG4gICAgY29sb3I6ICMxNWEwZmY7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbiAgLmNsYXNzaWZ5LWl0ZW0gLmFtYW5pLWVkaXQge1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgfVxuXG4gIFxuXG4gIC5hbm5vdGF0aW9uLWltYWdlcyB7XG4gICAgZmxleC1iYXNpczogMzAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cbiAgLmFubm90YXRpb24tbWFya0RhdGF7XG4gICAgZmxleC1iYXNpczozMCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAuY29udGVudHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICBkaXZ7XG4gICAgICAgIHdpZHRoOiA5OSU7XG4gICAgICAgIGhlaWdodDogMjUlO1xuICAgICAgICAuZGF0YXtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgICAgICBjb2xvcjogI2YwNzIwYjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLnByb2dyZXNzQm94e1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAuc3ViVGl0bGV7XG4gICAgICAgICAgZmxleDogMCAwIDIwJTtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogM3B4O1xuICAgICAgICB9XG4gICAgICAgIHB7XG4gICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICBoZWlnaHQ6IDIwMDBweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5hbm5vdGF0aW9uLWltYWdlcy1ib3gge1xuICAgIGZsZXg6IDE7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gIH1cblxuICAuYW5ub3RhdGlvbi1pbWFnZS1pdGVtIHtcbiAgICBmbGV4LWJhc2lzOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBtYXJnaW46IDVweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG5cbn1cbiIsIjpob3N0IDo6bmctZGVlcCAuYW5ub3RhdGlvbi1sZWZ0IHtcbiAgZmxleC1iYXNpczogODAlO1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMTQ5ZmZmO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5hbnQtcHJvZ3Jlc3MtdGV4dCB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGNvbG9yOiAjZmZmO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5hbm5vdGF0aW9uLW9wZXJhdGVzIHtcbiAgZmxleC1iYXNpczogMTAwcHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5hbm5vdGF0aW9uLW9wZXJhdGUtaXRlbSB7XG4gIGZsZXgtYmFzaXM6IDUwcHg7XG4gIHdpZHRoOiA1MHB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIG1hcmdpbjogNXB4IDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMxYTUwN2Y7XG59XG46aG9zdCA6Om5nLWRlZXAgLmFub290YXRpb24tYXJlYSB7XG4gIGZsZXg6IDE7XG4gIG1hcmdpbjogMTBweCAxMHB4IDEwcHggMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbjpob3N0IDo6bmctZGVlcCAuYW5vb3RhdGlvbi1hcmVhLWJ0bnMge1xuICB3aWR0aDogMjgwcHg7XG4gIGhlaWdodDogMzZweDtcbiAgbWFyZ2luOiAxMHB4IGF1dG87XG4gIGJvcmRlcjogMXB4IHNvbGlkICM1N0FDRjQ7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbjpob3N0IDo6bmctZGVlcCAuYW5vb3RhdGlvbi1hcmVhLWJ0bi1pdGVtIHtcbiAgZmxleDogMTtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5hbm9vdGF0aW9uLWFyZWEtYnRuLWl0ZW0uYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE1YTBmZjtcbn1cbjpob3N0IDo6bmctZGVlcCAuYW5vb3RhdGlvbi1hcmVhLW9wZXJhdGUge1xuICBmbGV4OiAxO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5hbm5vdGF0aW9uLXJpZ2h0IHtcbiAgZmxleDogMjAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5hbm5vdGF0aW9uLWNsYXNzaWZpZXMge1xuICBmbGV4LWJhc2lzOiAzMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG46aG9zdCA6Om5nLWRlZXAgLmludGVyZXN0ZWQge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjY1KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cbjpob3N0IDo6bmctZGVlcCAuaXN1bmludGVyZXN0ZWQge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMyN2RkMztcbn1cbjpob3N0IDo6bmctZGVlcCAuYW5ub3RhdGlvbi11bmludGVyZXN0ZWQge1xuICBmbGV4LWJhc2lzOiAxMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG46aG9zdCA6Om5nLWRlZXAgLmFubm90YXRpb24tdGl0bGUge1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMTNweCAxMHB4O1xuICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmcxMC5wbmcnKSBuby1yZXBlYXQgMCAxMDAlO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5jbGFzc2lmaWVzIHtcbiAgZmxleDogMTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cbjpob3N0IDo6bmctZGVlcCAuY2xhc3NpZnktaXRlbSB7XG4gIGhlaWdodDogMzZweDtcbiAgbGluZS1oZWlnaHQ6IDM2cHg7XG4gIGNvbG9yOiAjMDI4MmFjO1xuICBwYWRkaW5nOiAwIDEwcHg7XG59XG46aG9zdCA6Om5nLWRlZXAgLmNsYXNzaWZ5LWl0ZW06bnRoLWNoaWxkKGV2ZW4pIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA1MTkzNDtcbn1cbjpob3N0IDo6bmctZGVlcCAuY2xhc3NpZnktaXRlbS1kZXNjIHtcbiAgZmxleDogMTtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB3b3JkLWJyZWFrOiBrZWVwLWFsbDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5jbGFzc2lmeS1pdGVtLWRlc2MtYWN0aXZlIHtcbiAgY29sb3I6ICNmZmY7XG59XG46aG9zdCA6Om5nLWRlZXAgLmNsYXNzaWZ5LWl0ZW0tZGVzYy1oaWRlbiB7XG4gIGNvbG9yOiAjN2M3YzdjICFpbXBvcnRhbnQ7XG59XG46aG9zdCA6Om5nLWRlZXAgLmNsYXNzaWZ5LWl0ZW0tZGVzYy1zZWxlY3Qge1xuICBjb2xvcjogIzllMjgyOCAhaW1wb3J0YW50O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5jbGFzc2lmeS1pdGVtIC5hbWFuaXNreSB7XG4gIGNvbG9yOiAjMTVhMGZmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG46aG9zdCA6Om5nLWRlZXAgLmNsYXNzaWZ5LWl0ZW0gLmFtYW5pLWVkaXQge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG46aG9zdCA6Om5nLWRlZXAgLmFubm90YXRpb24taW1hZ2VzIHtcbiAgZmxleC1iYXNpczogMzAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5hbm5vdGF0aW9uLW1hcmtEYXRhIHtcbiAgZmxleC1iYXNpczogMzAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5hbm5vdGF0aW9uLW1hcmtEYXRhIC5jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5hbm5vdGF0aW9uLW1hcmtEYXRhIC5jb250ZW50IGRpdiB7XG4gIHdpZHRoOiA5OSU7XG4gIGhlaWdodDogMjUlO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5hbm5vdGF0aW9uLW1hcmtEYXRhIC5jb250ZW50IGRpdiAuZGF0YSB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBjb2xvcjogI2YwNzIwYjtcbn1cbjpob3N0IDo6bmctZGVlcCAuYW5ub3RhdGlvbi1tYXJrRGF0YSAuY29udGVudCAucHJvZ3Jlc3NCb3gge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5hbm5vdGF0aW9uLW1hcmtEYXRhIC5jb250ZW50IC5wcm9ncmVzc0JveCAuc3ViVGl0bGUge1xuICBmbGV4OiAwIDAgMjAlO1xuICBwYWRkaW5nLXRvcDogM3B4O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5hbm5vdGF0aW9uLW1hcmtEYXRhIC5jb250ZW50IC5wcm9ncmVzc0JveCBwIHtcbiAgZmxleDogMTtcbiAgaGVpZ2h0OiAyMDAwcHg7XG59XG46aG9zdCA6Om5nLWRlZXAgLmFubm90YXRpb24taW1hZ2VzLWJveCB7XG4gIGZsZXg6IDE7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcbiAgcGFkZGluZzogNXB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5hbm5vdGF0aW9uLWltYWdlLWl0ZW0ge1xuICBmbGV4LWJhc2lzOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIG1hcmdpbjogNXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataMarkComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './data-mark.component.html',
                styleUrls: ['./data-mark.component.less', './annotation.less']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }, { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzMessageService"] }, { type: _data_mark_service__WEBPACK_IMPORTED_MODULE_7__["DataMarkService"] }]; }, { imgCanvasElmRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['imgCanvasElement']
        }], drawCanvasElmRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['drawCanvasElement']
        }] }); })();


/***/ }),

/***/ "./src/app/pages/data-mark/data-mark.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/data-mark/data-mark.module.ts ***!
  \*****************************************************/
/*! exports provided: DataMarkModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataMarkModule", function() { return DataMarkModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd.js");
/* harmony import */ var _data_mark_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data-mark-routing.module */ "./src/app/pages/data-mark/data-mark-routing.module.ts");
/* harmony import */ var _data_mark_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data-mark.component */ "./src/app/pages/data-mark/data-mark.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _core_app_common_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/app-common.module */ "./src/app/core/app-common.module.ts");
/* harmony import */ var _mark_sample_tree_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mark-sample-tree.component */ "./src/app/pages/data-mark/mark-sample-tree.component.ts");
/* harmony import */ var ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/spin */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-spin.js");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/button */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-button.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _data_mark_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./data-mark.service */ "./src/app/pages/data-mark/data-mark.service.ts");












const APP_COMPONENTS = [_data_mark_component__WEBPACK_IMPORTED_MODULE_3__["DataMarkComponent"], _mark_sample_tree_component__WEBPACK_IMPORTED_MODULE_6__["MarkSampleTreeComponent"]];
const NZ_MODULES = [ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__["NzTreeModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__["NzModalModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__["NzMessageModule"], ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_7__["NzSpinModule"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_8__["NzButtonModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__["NzInputModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__["NzIconModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__["NzDropDownModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__["NzProgressModule"]];
const NG_MODULES = [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"]];
class DataMarkModule {
}
DataMarkModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DataMarkModule });
DataMarkModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DataMarkModule_Factory(t) { return new (t || DataMarkModule)(); }, providers: [_data_mark_service__WEBPACK_IMPORTED_MODULE_10__["DataMarkService"]], imports: [[_data_mark_routing_module__WEBPACK_IMPORTED_MODULE_2__["DataMarkRoutingModule"], ...NZ_MODULES, ...NG_MODULES, _core_app_common_module__WEBPACK_IMPORTED_MODULE_5__["AppCommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DataMarkModule, { declarations: [_data_mark_component__WEBPACK_IMPORTED_MODULE_3__["DataMarkComponent"], _mark_sample_tree_component__WEBPACK_IMPORTED_MODULE_6__["MarkSampleTreeComponent"]], imports: [_data_mark_routing_module__WEBPACK_IMPORTED_MODULE_2__["DataMarkRoutingModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__["NzTreeModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__["NzModalModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__["NzMessageModule"], ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_7__["NzSpinModule"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_8__["NzButtonModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__["NzInputModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__["NzIconModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__["NzDropDownModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__["NzProgressModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _core_app_common_module__WEBPACK_IMPORTED_MODULE_5__["AppCommonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataMarkModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [...APP_COMPONENTS],
                imports: [_data_mark_routing_module__WEBPACK_IMPORTED_MODULE_2__["DataMarkRoutingModule"], ...NZ_MODULES, ...NG_MODULES, _core_app_common_module__WEBPACK_IMPORTED_MODULE_5__["AppCommonModule"]],
                providers: [_data_mark_service__WEBPACK_IMPORTED_MODULE_10__["DataMarkService"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/data-mark/data-mark.service.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/data-mark/data-mark.service.ts ***!
  \******************************************************/
/*! exports provided: DataMarkService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataMarkService", function() { return DataMarkService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _mark_sample_tree_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mark-sample-tree.component */ "./src/app/pages/data-mark/mark-sample-tree.component.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd.js");




class DataMarkService {
    constructor(nzModal) {
        this.nzModal = nzModal;
        this.idsArr = [];
        this.isTree = true;
    }
    creatNzModal(that, idx, fileSample) {
        this.nzModal.create({
            nzTitle: '标注',
            nzContent: _mark_sample_tree_component__WEBPACK_IMPORTED_MODULE_1__["MarkSampleTreeComponent"],
            nzOnOk: (markSampleTreeComponent) => {
                let sampleId;
                let classValue;
                if (markSampleTreeComponent.selectedSampleId) {
                    sampleId = markSampleTreeComponent.selectedSampleId;
                    classValue = markSampleTreeComponent.classValue;
                }
                else {
                    return this.nzModal.openModals[0].triggerCancel();
                }
                if (sampleId && markSampleTreeComponent.nzTreeComponent && this.isTree) {
                    const samplePath = markSampleTreeComponent.selectedSamplePath;
                    that.drawingRects[idx].sampleId = sampleId;
                    that.drawingRects[idx].samplePath = samplePath.split("/")[samplePath.split("/").length - 2];
                    var albelText = that.drawingRects[idx].samplePath;
                    let arr = [];
                    $.each(that.gMapArr.layers[1].features, function (i, n) {
                        if (n.props.name != "uninterested") {
                            arr.push(n);
                        }
                    });
                    that.gMapArr.layers[1].features[idx].props.name = fileSample.sampleId; //保存分类id到ailabel
                    // 删除对应text
                    that.drawingRects[idx].id = markSampleTreeComponent.selectedSampleId;
                    that.gMapArr.layers[2].removeTextById(fileSample.markData.relatedTextId[idx]);
                    //添加对应text
                    const { x: ltx, y: lty } = arr[idx].shape;
                    const relatedTextId = `label-text-id-${arr[idx].id}`;
                    const gFirstText = new AILabel.Text(relatedTextId, // id
                    { text: albelText, position: { x: ltx, y: lty }, offset: { x: 0, y: 0 } }, // shape, 左上角
                    { name: '第一个文本对象' }, // props
                    { fillStyle: '#15a0ff', strokeStyle: '#f0f8ff00', background: true, globalAlpha: 1, fontColor: '#fff' } // style
                    );
                    that.gMapArr.layers[2].addText(gFirstText);
                }
                else {
                    var samplePath;
                    let ix = 0;
                    // const sampleId = markSampleTreeComponent.classListInfo[0].id;
                    $.each(markSampleTreeComponent.classListInfo, function (i, n) {
                        if (n.id == sampleId) {
                            ix = i;
                            samplePath = markSampleTreeComponent.classListInfo[i].samplePath;
                        }
                    });
                    that.drawingRects[idx].sampleId = sampleId;
                    that.drawingRects[idx].samplePath = samplePath;
                    var albelText = that.drawingRects[idx].samplePath;
                    let arr = [];
                    $.each(that.gMapArr.layers[1].features, function (i, n) {
                        if (n.props.name != "uninterested") {
                            arr.push(n);
                        }
                    });
                    that.gMapArr.layers[1].features[idx].props.name = fileSample.sampleId; //保存分类id到ailabel
                    // 删除对应text
                    markSampleTreeComponent.classListInfo[ix].relatedTextId = fileSample.markData.relatedTextId;
                    fileSample.markData = markSampleTreeComponent.classListInfo[ix];
                    that.drawingRects[idx].id = fileSample.markData.id;
                    that.gMapArr.layers[2].removeTextById(fileSample.markData.relatedTextId[idx]);
                    //添加对应text
                    const { x: ltx, y: lty } = arr[idx].shape;
                    const relatedTextId = `label-text-id-${arr[idx].id}`;
                    const gFirstText = new AILabel.Text(relatedTextId, // id
                    { text: albelText, position: { x: ltx, y: lty }, offset: { x: 0, y: 0 } }, // shape, 左上角
                    { name: '第一个文本对象' }, // props
                    { fillStyle: '#15a0ff', strokeStyle: '#f0f8ff00', background: true, globalAlpha: 1, fontColor: '#fff' } // style
                    );
                    that.gMapArr.layers[2].addText(gFirstText);
                }
                that.listenKeyboard();
                that.keyBoardOfFeature();
            },
            nzOnCancel: () => {
                that.listenKeyboard();
                that.keyBoardOfFeature();
            }
        });
    }
}
DataMarkService.ɵfac = function DataMarkService_Factory(t) { return new (t || DataMarkService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzModalService"])); };
DataMarkService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DataMarkService, factory: DataMarkService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataMarkService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzModalService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/data-mark/mark-sample-tree.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/data-mark/mark-sample-tree.component.ts ***!
  \***************************************************************/
/*! exports provided: MarkSampleTreeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkSampleTreeComponent", function() { return MarkSampleTreeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _core_http_entity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/http-entity */ "./src/app/core/http-entity.ts");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _data_mark_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./data-mark.service */ "./src/app/pages/data-mark/data-mark.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/menu */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-menu.js");
/* harmony import */ var ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/spin */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-spin.js");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-transition-patch.js");














const _c0 = ["nzTreeComponent"];
function MarkSampleTreeComponent_nz_spin_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-spin", 6);
} }
const _c1 = function (a0) { return { "isSelect": a0 }; };
function MarkSampleTreeComponent_li_4_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MarkSampleTreeComponent_li_4_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const item_r3 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.selectClass(item_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, ctx_r1.slectNum == i_r4));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3);
} }
function MarkSampleTreeComponent_nz_tree_5_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-tree", 8, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzClick", function MarkSampleTreeComponent_nz_tree_5_Template_nz_tree_nzClick_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.selectSample($event, ""); })("nzExpandChange", function MarkSampleTreeComponent_nz_tree_5_Template_nz_tree_nzExpandChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.expandSampleNode($event, "handClick"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzData", ctx_r2.nodes)("nzCheckedKeys", ctx_r2.defaultCheckedKeys)("nzExpandedKeys", ctx_r2.defaultExpandedKeys)("nzSelectedKeys", ctx_r2.defaultSelectedKeys);
} }
class MarkSampleTreeComponent {
    constructor(http, dataMarkService) {
        this.http = http;
        this.dataMarkService = dataMarkService;
        this.defaultCheckedKeys = [];
        this.defaultSelectedKeys = [];
        this.defaultExpandedKeys = [];
        this.nodes = [];
        this.isRequsetAll = false;
        this.classValue = "";
        this.classList = [];
        this.classListInfo = [];
        this.slectNum = -1;
        this.dataMarkService.isTree = true;
    }
    listenKeyboard() {
        this.keyboardTreeSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])(window, 'keydown').subscribe((event) => {
            if (event.keyCode == 40) {
                if (this.slectNum < this.classList.length - 1) {
                    this.slectNum += 1;
                }
                else {
                    this.slectNum = this.classList.length - 1;
                }
            }
            else if (event.keyCode == 38) {
                if (this.slectNum > 0) {
                    this.slectNum -= 1;
                }
                else {
                    this.slectNum = 0;
                }
            }
            else if (event.keyCode == 13) {
                this.selectClass(this.classList[this.slectNum]);
            }
        });
    }
    removeKeyboard() {
        this.keyboardTreeSubscription.unsubscribe();
    }
    ngOnInit() {
        let markData = JSON.parse(localStorage.getItem("markData"));
        let imgId;
        try {
            imgId = markData.file.sampleTypeId;
            this.classValue = markData.file.samplePath;
        }
        catch (e) {
            imgId = markData.id;
            this.classValue = markData.sampleTypeName;
        }
        this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL}/v1/sample-oss-types`).subscribe((result) => {
            if (_core_http_entity__WEBPACK_IMPORTED_MODULE_2__["HttpResult"].succeed(result.code)) {
                this.nodes = result.data.map((data) => {
                    return {
                        title: data.data.sampleTypeName,
                        key: data.data.id + "",
                        isLeaf: data.isLeaf,
                        samplePath: data.data.samplePath
                    };
                });
                this.expandSampleNode("", imgId);
                this.listenKeyboard();
            }
        });
    }
    ngOnDestroy() {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.removeKeyboard();
    }
    expandSampleNode(event, type) {
        if (event.eventName === 'expand' && type == "handClick") {
            if (event.node.isExpanded && event.node.children.length === 0) {
                // 异步加载下个节点
                this.loadChildrenSamples(event.node.key).subscribe((result) => {
                    if (_core_http_entity__WEBPACK_IMPORTED_MODULE_2__["HttpResult"].succeed(result.code)) {
                        const childrenNodes = result.data.map(data => {
                            return {
                                title: data.data.sampleTypeName,
                                key: data.data.id + "",
                                isLeaf: data.isLeaf,
                                samplePath: data.data.samplePath
                            };
                        });
                        event.node.addChildren(childrenNodes);
                    }
                });
            }
        }
        else {
            this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL}/v1/sample-oss-types/getTypeMap?id=${type}`)
                .subscribe((result) => {
                if (!result.data) {
                    this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL}/v1/sample-oss-types`).subscribe((result) => {
                        if (_core_http_entity__WEBPACK_IMPORTED_MODULE_2__["HttpResult"].succeed(result.code)) {
                            this.nodes = result.data.map((data) => {
                                return {
                                    title: data.data.sampleTypeName,
                                    key: data.data.id + "",
                                    isLeaf: data.isLeaf,
                                    samplePath: data.data.samplePath
                                };
                            });
                            this.isRequsetAll = true;
                        }
                    });
                }
                else {
                    let data = JSON.parse(result.data);
                    var that = this;
                    let arr = [];
                    let arr2 = [];
                    getArr(data);
                    let index1 = arr.length - 1;
                    for (let index = 0; index < this.nodes.length; index++) {
                        const element = this.nodes[index];
                        if (element.key == arr[arr.length - 1]) {
                            element.expanded = false;
                            element.children = [];
                        }
                    }
                    request(index1);
                    function request(index) {
                        const element = arr[index];
                        that.loadChildrenSamples(element).subscribe((result) => {
                            if (_core_http_entity__WEBPACK_IMPORTED_MODULE_2__["HttpResult"].succeed(result.code)) {
                                var childrenNodes;
                                if (arr[index - 1]) {
                                    childrenNodes = result.data.map(data => {
                                        return {
                                            title: data.data.sampleTypeName,
                                            key: data.data.id + "",
                                            isLeaf: data.isLeaf,
                                            samplePath: data.data.samplePath,
                                            expanded: false,
                                            children: [],
                                        };
                                    });
                                    arr2.push({
                                        data: childrenNodes,
                                        key: arr[index - 1] + ""
                                    });
                                }
                                else {
                                    childrenNodes = result.data.map(data => {
                                        return {
                                            title: data.data.sampleTypeName,
                                            key: data.data.id + "",
                                            isLeaf: data.isLeaf,
                                            samplePath: data.data.samplePath
                                        };
                                    });
                                    arr2.push({
                                        data: childrenNodes,
                                        key: arr[0] + ""
                                    });
                                }
                                index1--;
                                if (index1 >= 0) {
                                    request(index1);
                                }
                                else {
                                    // var fastTree:any = arr2
                                    for (let index = 0; index < arr2.length; index++) {
                                        const element = arr2[index];
                                        for (let index1 = 0; index1 < element.data.length; index1++) {
                                            const element2 = element.data[index1];
                                            if (element.key == element2.key) {
                                                element2.children = arr2[index + 1].data;
                                            }
                                        }
                                    }
                                    for (let index = 0; index < that.nodes.length; index++) {
                                        const element = that.nodes[index];
                                        if (element.key == arr[arr.length - 1]) {
                                            element.children = arr2[0].data;
                                        }
                                    }
                                    let selectSampleArr = [];
                                    selectSampleArr[0] = data.id;
                                    selectSampleArr[1] = data.samplePath;
                                    selectSampleArr[2] = arr;
                                    that.selectSample('', selectSampleArr);
                                }
                            }
                        });
                    }
                    function getArr(data) {
                        if (data.sampleOssType) {
                            arr.push(data.sampleUpId);
                            return getArr(data.sampleOssType);
                        }
                        else {
                            return false;
                        }
                    }
                }
            });
        }
    }
    loadChildrenSamples(sampleUpId) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL}/v1/sample-oss-types`, {
            params: {
                sampleUpId
            }
        });
    }
    changeSelected(nodes) {
        var that = this;
        $.each(nodes, function (i, n) {
            n.selected = false;
            if (n.children && n.children.length != 0) {
                that.changeSelected(n.children);
            }
        });
    }
    changeNodeSelected(nodes, event) {
        this.changeSelected(nodes);
        // 只有一个选中的  
        event.node.origin.selected = true;
    }
    selectSample(event, type) {
        if (!type) {
            this.selectedSampleId = event.node.key;
            this.selectedSamplePath = event.node.origin.samplePath;
            console.log(this.selectedSampleId, this.selectedSamplePath);
            this.changeNodeSelected(this.nodes, event);
        }
        else {
            this.selectedSampleId = type[0] + "";
            this.selectedSamplePath = type[1];
            this.defaultCheckedKeys = [];
            let arr = type[2].reverse();
            arr = arr.map((data) => {
                return data + "";
            });
            for (let index = 0; index < arr.length; index++) {
                const element = arr[index];
                this.defaultExpandedKeys.push(element);
            }
            this.defaultSelectedKeys.push(this.selectedSampleId);
            this.isRequsetAll = true;
        }
        var arr = [this.nodes[this.defaultExpandedKeys[0] - 1]];
        this.nodes = arr;
    }
    ngAfterViewInit() {
        //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
        //Add 'implements AfterViewInit' to the class.
    }
    classSeach() {
        this.classList = [];
        this.classListInfo = [];
        axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL}/v1/sample-oss-file/relationQueryCatalogue?sampleTypeName=${this.classValue}`, { sampleTypeName: this.classValue }, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('Bearer'),
                'TR-Role': 'TR-User'
            }
        })
            .then((result) => {
            result.data.data.forEach(element => {
                this.classList.push(element.sampleTypeName);
                this.classListInfo.push(element);
                this.slectNum = 0;
            });
        });
    }
    selectClass(val) {
        var that = this;
        this.classValue = val;
        $.each(this.classListInfo, function (i, n) {
            if (n.sampleTypeName == val) {
                that.selectedSampleId = n.id;
                console.log(n);
            }
        });
        console.log(that.selectedSampleId);
        this.dataMarkService.isTree = false;
        this.dataMarkService.nzModal.openModals[0].triggerOk();
    }
}
MarkSampleTreeComponent.ɵfac = function MarkSampleTreeComponent_Factory(t) { return new (t || MarkSampleTreeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_mark_service__WEBPACK_IMPORTED_MODULE_6__["DataMarkService"])); };
MarkSampleTreeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MarkSampleTreeComponent, selectors: [["ng-component"]], viewQuery: function MarkSampleTreeComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.nzTreeComponent = _t.first);
    } }, decls: 6, vars: 4, consts: [["nzTip", "Loading...", 4, "ngIf"], [1, "inputGroup", 2, "position", "absolute", "top", "14px", "left", "130px", "width", "200px"], ["type", "text", "nz-input", "", "placeholder", "\u8BF7\u8F93\u5165\u5206\u7C7B\u5173\u952E\u5B57", "id", "classSeach", "autocomplete", "off", 3, "ngModel", "ngModelChange"], ["nz-menu", "", "nzSelectable", ""], ["nz-menu-item", "", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [3, "nzData", "nzCheckedKeys", "nzExpandedKeys", "nzSelectedKeys", "nzClick", "nzExpandChange", 4, "ngIf"], ["nzTip", "Loading..."], ["nz-menu-item", "", 3, "ngClass", "click"], [3, "nzData", "nzCheckedKeys", "nzExpandedKeys", "nzSelectedKeys", "nzClick", "nzExpandChange"], ["nzTreeComponent", ""]], template: function MarkSampleTreeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MarkSampleTreeComponent_nz_spin_0_Template, 1, 0, "nz-spin", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MarkSampleTreeComponent_Template_input_ngModelChange_2_listener($event) { return ctx.classValue = $event; })("ngModelChange", function MarkSampleTreeComponent_Template_input_ngModelChange_2_listener() { return ctx.classSeach(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MarkSampleTreeComponent_li_4_Template, 2, 4, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MarkSampleTreeComponent_nz_tree_5_Template, 2, 4, "nz-tree", 5);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isRequsetAll);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.classValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.classList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isRequsetAll);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_8__["NzInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_10__["NzMenuDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_11__["NzSpinComponent"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_12__["ɵNzTransitionPatchDirective"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_10__["NzMenuItemDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_8__["NzTreeComponent"]], styles: [".ant-spin-dot-item {\n  background-color: #fff !important;\n}\n  .ant-spin {\n  color: #fff !important;\n}\n.inputGroup[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  border-radius: 5px;\n  background: transparent;\n  border: none;\n}\n.inputGroup[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 5px;\n  margin-bottom: -3px;\n}\n.inputGroup[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .isSelect[_ngcontent-%COMP%] {\n  color: #fff;\n  background: #2d83c9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2RhdGEtbWFyay9EOi9mZi90YXJnZXQtcmVjb2duaXplLW1nci1odG1sLVYwLjIvc3JjL2FwcC9wYWdlcy9kYXRhLW1hcmsvbWFyay1zYW1wbGUtdHJlZS5jb21wb25lbnQubGVzcyIsInBhZ2VzL2RhdGEtbWFyay9tYXJrLXNhbXBsZS10cmVlLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVFO0VBQ0UsaUNBQUE7QUNESjtBREtFO0VBQ0Usc0JBQUE7QUNISjtBREtFO0VBRUksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQ0pOO0FEREU7RUFPTSxnQkFBQTtFQUNBLGtCQUFBO0VBRUEsbUJBQUE7QUNKUjtBRE5FO0VBaUJNLFdBQUE7RUFDQSxtQkFBQTtBQ1JSIiwiZmlsZSI6InBhZ2VzL2RhdGEtbWFyay9tYXJrLXNhbXBsZS10cmVlLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbiAgOjpuZy1kZWVwIC5hbnQtc3Bpbi1kb3QtaXRlbSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICB9XG5cbiAgXG4gIDo6bmctZGVlcCAuYW50LXNwaW57XG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgfVxuICAuaW5wdXRHcm91cHtcbiAgICB1bHtcbiAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGxpe1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIC8vIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoODMsIDgzLCA4Myk7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IC0zcHg7XG4gICAgICB9XG4gICAgICAvLyBsaTpob3ZlcntcbiAgICAgIC8vICAgY29sb3I6ICNmZmY7XG4gICAgICAvLyAgIGJhY2tncm91bmQ6IHJnYig0NSwgMTMxLCAyMDEpO1xuICAgICAgLy8gfVxuICAgICAgLmlzU2VsZWN0e1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiKDQ1LCAxMzEsIDIwMSk7XG4gICAgICB9XG4gICAgfVxuICB9IiwiOjpuZy1kZWVwIC5hbnQtc3Bpbi1kb3QtaXRlbSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAuYW50LXNwaW4ge1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufVxuLmlucHV0R3JvdXAgdWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG59XG4uaW5wdXRHcm91cCB1bCBsaSB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogLTNweDtcbn1cbi5pbnB1dEdyb3VwIHVsIC5pc1NlbGVjdCB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiAjMmQ4M2M5O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MarkSampleTreeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './mark-sample-tree.component.html',
                styleUrls: ['./mark-sample-tree.component.less']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }, { type: _data_mark_service__WEBPACK_IMPORTED_MODULE_6__["DataMarkService"] }]; }, { nzTreeComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['nzTreeComponent', { static: false }]
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=data-mark-data-mark-module.js.map