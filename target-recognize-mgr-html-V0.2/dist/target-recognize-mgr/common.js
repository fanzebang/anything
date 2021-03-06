(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/core/app-common.module.ts":
/*!*******************************************!*\
  !*** ./src/app/core/app-common.module.ts ***!
  \*******************************************/
/*! exports provided: AppCommonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppCommonModule", function() { return AppCommonModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_common_pipes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-common.pipes */ "./src/app/core/app-common.pipes.ts");



const COMMON_PIPES = [_app_common_pipes__WEBPACK_IMPORTED_MODULE_1__["OssPathPipe"], _app_common_pipes__WEBPACK_IMPORTED_MODULE_1__["KbPipe"], _app_common_pipes__WEBPACK_IMPORTED_MODULE_1__["LocalImgFilePipe"], _app_common_pipes__WEBPACK_IMPORTED_MODULE_1__["MarkedRectImagePipe"], _app_common_pipes__WEBPACK_IMPORTED_MODULE_1__["SampleTypeIdPathPipe"], _app_common_pipes__WEBPACK_IMPORTED_MODULE_1__["MarkStatusPipe"], _app_common_pipes__WEBPACK_IMPORTED_MODULE_1__["TrainStatusPipe"], _app_common_pipes__WEBPACK_IMPORTED_MODULE_1__["taskProgress"]];
class AppCommonModule {
}
AppCommonModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppCommonModule });
AppCommonModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppCommonModule_Factory(t) { return new (t || AppCommonModule)(); } });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppCommonModule, { declarations: [_app_common_pipes__WEBPACK_IMPORTED_MODULE_1__["OssPathPipe"], _app_common_pipes__WEBPACK_IMPORTED_MODULE_1__["KbPipe"], _app_common_pipes__WEBPACK_IMPORTED_MODULE_1__["LocalImgFilePipe"], _app_common_pipes__WEBPACK_IMPORTED_MODULE_1__["MarkedRectImagePipe"], _app_common_pipes__WEBPACK_IMPORTED_MODULE_1__["SampleTypeIdPathPipe"], _app_common_pipes__WEBPACK_IMPORTED_MODULE_1__["MarkStatusPipe"], _app_common_pipes__WEBPACK_IMPORTED_MODULE_1__["TrainStatusPipe"], _app_common_pipes__WEBPACK_IMPORTED_MODULE_1__["taskProgress"]], exports: [_app_common_pipes__WEBPACK_IMPORTED_MODULE_1__["OssPathPipe"], _app_common_pipes__WEBPACK_IMPORTED_MODULE_1__["KbPipe"], _app_common_pipes__WEBPACK_IMPORTED_MODULE_1__["LocalImgFilePipe"], _app_common_pipes__WEBPACK_IMPORTED_MODULE_1__["MarkedRectImagePipe"], _app_common_pipes__WEBPACK_IMPORTED_MODULE_1__["SampleTypeIdPathPipe"], _app_common_pipes__WEBPACK_IMPORTED_MODULE_1__["MarkStatusPipe"], _app_common_pipes__WEBPACK_IMPORTED_MODULE_1__["TrainStatusPipe"], _app_common_pipes__WEBPACK_IMPORTED_MODULE_1__["taskProgress"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppCommonModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [...COMMON_PIPES],
                exports: [...COMMON_PIPES]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/core/app-common.pipes.ts":
/*!******************************************!*\
  !*** ./src/app/core/app-common.pipes.ts ***!
  \******************************************/
/*! exports provided: OssPathPipe, taskProgress, KbPipe, LocalImgFilePipe, MarkStatusPipe, TrainStatusPipe, MarkedRectImagePipe, SampleTypeIdPathPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OssPathPipe", function() { return OssPathPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taskProgress", function() { return taskProgress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KbPipe", function() { return KbPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalImgFilePipe", function() { return LocalImgFilePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkStatusPipe", function() { return MarkStatusPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainStatusPipe", function() { return TrainStatusPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkedRectImagePipe", function() { return MarkedRectImagePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SampleTypeIdPathPipe", function() { return SampleTypeIdPathPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _http_entity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./http-entity */ "./src/app/core/http-entity.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");






class OssPathPipe {
    transform(tiem) {
        var bucketName = tiem.bucketName;
        var itemKey;
        switch (bucketName) {
            case "sample-resource":
                itemKey = "sampleResourcePath";
                break;
            case "target-recognize":
                itemKey = "targetRecognizePath";
                break;
            default:
                itemKey = "sampleResourcePath";
                break;
        }
        return localStorage.getItem(itemKey) + '/' + tiem.ossKey;
    }
}
OssPathPipe.ɵfac = function OssPathPipe_Factory(t) { return new (t || OssPathPipe)(); };
OssPathPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "ossPath", type: OssPathPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OssPathPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'ossPath' }]
    }], null, null); })();
class taskProgress {
    transform(taskProgress) {
        return taskProgress.toFixed(2);
    }
}
taskProgress.ɵfac = function taskProgress_Factory(t) { return new (t || taskProgress)(); };
taskProgress.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "taskProgress", type: taskProgress, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](taskProgress, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'taskProgress' }]
    }], null, null); })();
class KbPipe {
    transform(bytes) {
        return (Math.ceil(bytes / 1024)).toFixed(0) + 'KB';
    }
}
KbPipe.ɵfac = function KbPipe_Factory(t) { return new (t || KbPipe)(); };
KbPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "KB", type: KbPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KbPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'KB' }]
    }], null, null); })();
function getImageFileFromUrl(url, imageName) {
    return new Promise((resolve, reject) => {
        var blob = null;
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.setRequestHeader('Accept', 'image/png');
        xhr.responseType = "blob";
        // 加载时处理
        xhr.onload = () => {
            // 获取返回结果
            blob = xhr.response;
            let imgFile = new File([blob], imageName, { type: 'image/png' });
            // 返回结果
            resolve(imgFile);
        };
        xhr.onerror = (e) => {
            reject(e);
        };
        // 发送
        xhr.send();
    });
}
class LocalImgFilePipe {
    transform(file) {
        const subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        const fr = new FileReader();
        fr.onload = () => {
            subject.next(fr.result);
        };
        if (file.type.startsWith("image")) {
            fr.readAsDataURL(file);
        }
        else {
            let imageFile = null;
            getImageFileFromUrl("../assets/images/ysb.png", "ysb")
                .then((response) => {
                // 返回的是文件对象，使用变量接收即可
                imageFile = response;
                fr.readAsDataURL(imageFile);
            })
                .catch((e) => {
                console.error(e);
            });
            // let ysbFile = new File("../assets/images/photo.png", 'ysb.png', {type: 'image/png'});
            // 
        }
        return subject.asObservable();
    }
}
LocalImgFilePipe.ɵfac = function LocalImgFilePipe_Factory(t) { return new (t || LocalImgFilePipe)(); };
LocalImgFilePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "LocalImgFile", type: LocalImgFilePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LocalImgFilePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'LocalImgFile' }]
    }], null, null); })();
class MarkStatusPipe {
    transform(status) {
        if (status === 0) {
            return '未标注';
        }
        else if (status === 1) {
            return '已标注';
        }
        else if (status === 2) {
            return '标注错误';
        }
        else if (status === 3) {
            return '正确的标注(审核通过)';
        }
        else if (status == 4) {
            return '客户端图片检测纠错过来的数据';
        }
    }
}
MarkStatusPipe.ɵfac = function MarkStatusPipe_Factory(t) { return new (t || MarkStatusPipe)(); };
MarkStatusPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "marks", type: MarkStatusPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MarkStatusPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'marks' }]
    }], null, null); })();
class TrainStatusPipe {
    transform(file) {
        if (file.trainNumber == 0 && file.markStatus == 3) {
            return "是";
        }
        else {
            return "否";
        }
    }
}
TrainStatusPipe.ɵfac = function TrainStatusPipe_Factory(t) { return new (t || TrainStatusPipe)(); };
TrainStatusPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "trainStatus", type: TrainStatusPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TrainStatusPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'trainStatus' }]
    }], null, null); })();
class MarkedRectImagePipe {
    transform(rect, sampleFile) {
        const subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        const image = new Image();
        image.onload = () => {
            const clipWidth = rect.xmax - rect.xmin;
            const clipHeight = rect.ymax - rect.ymin;
            const tempCanvasElm = document.createElement('canvas');
            tempCanvasElm.width = clipWidth;
            tempCanvasElm.height = clipHeight;
            const ctx = tempCanvasElm.getContext('2d');
            //ctx.drawImage(image, rect.minX, rect.minY, clipWidth, clipHeight, 0, 0, clipWidth, clipHeight);
            ctx.drawImage(image, rect.xmin, rect.ymin, clipWidth, clipHeight, 0, 0, clipWidth, clipHeight);
            const dataURL = tempCanvasElm.toDataURL('image/jpeg');
            subject.next(dataURL);
        };
        console.log(sampleFile);
        var itemKey;
        switch (sampleFile.bucketName) {
            case "sample-resource":
                itemKey = "sampleResourcePath";
                break;
            case "target-recognize":
                itemKey = "targetRecognizePath";
                break;
            default:
                itemKey = "sampleResourcePath";
                break;
        }
        image.crossOrigin = 'anonymous';
        // image.src = localStorage.getItem('sampleResourcePath')+`/${sampleFile.ossKey}`;
        image.src = localStorage.getItem(itemKey) + `/${sampleFile.ossKey}`;
        return subject.asObservable();
    }
}
MarkedRectImagePipe.ɵfac = function MarkedRectImagePipe_Factory(t) { return new (t || MarkedRectImagePipe)(); };
MarkedRectImagePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "MarkedRectImage", type: MarkedRectImagePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MarkedRectImagePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'MarkedRectImage' }]
    }], null, null); })();
class SampleTypeIdPathPipe {
    constructor(http) {
        this.http = http;
    }
    transform(sampleId) {
        const subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL}/v1/sample-oss-types/${sampleId}`).subscribe((result) => {
            if (_http_entity__WEBPACK_IMPORTED_MODULE_3__["HttpResult"].succeed(result.code)) {
                subject.next(result.data.samplePath);
            }
        });
        return subject.asObservable();
    }
}
SampleTypeIdPathPipe.ɵfac = function SampleTypeIdPathPipe_Factory(t) { return new (t || SampleTypeIdPathPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
SampleTypeIdPathPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "SampleTypeIdPath", type: SampleTypeIdPathPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SampleTypeIdPathPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'SampleTypeIdPath' }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/http-entity.ts":
/*!*************************************!*\
  !*** ./src/app/core/http-entity.ts ***!
  \*************************************/
/*! exports provided: HttpResult, User, StatInfo, SampleOssType, SampleOssFile, ProgressDto, DataTrain, LabelTask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpResult", function() { return HttpResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatInfo", function() { return StatInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SampleOssType", function() { return SampleOssType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SampleOssFile", function() { return SampleOssFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressDto", function() { return ProgressDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTrain", function() { return DataTrain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabelTask", function() { return LabelTask; });
class HttpResult {
    static succeed(code) {
        return code === 1;
    }
}
class User {
}
class StatInfo {
}
class SampleOssType {
}
class SampleOssFile {
}
class ProgressDto {
}
class DataTrain {
}
class LabelTask {
}


/***/ })

}]);
//# sourceMappingURL=common.js.map