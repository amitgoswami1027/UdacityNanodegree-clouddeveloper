(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/feed/feed-item/feed-item.component.html":
/*!*********************************************************!*\
  !*** ./src/app/feed/feed-item/feed-item.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-card class=\"photo-card\" *ngIf=\"feedItem\">\n  <ion-img [src]=\"feedItem.url\"></ion-img>\n  <!-- <ion-card-header>\n    <ion-card-subtitle>Get Started</ion-card-subtitle>\n    <ion-card-title></ion-card-title>\n  </ion-card-header> -->\n  <ion-card-content>\n    <p>{{feedItem.caption}}</p>\n  </ion-card-content>\n</ion-card>"

/***/ }),

/***/ "./src/app/feed/feed-item/feed-item.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/feed/feed-item/feed-item.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".photo-card {\n  max-width: 500px;\n  overflow: hidden;\n  background: var(--ion-color-primary-contrast);\n  margin: 30px 0px; }\n\n.photo-card ion-img {\n  max-height: 532px;\n  overflow: hidden;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2VjMi11c2VyL2Nsb3VkX2RldmVsb3Blcl9uYW5vZGVncmVlL3VkYWNpdHlfcHJvamVjdDMvbGVzc29uLTEtQmVzdC1QcmFjdGljZXMvZXhlcmNpc2VzL3VkYWNpdHktYzMtZnJvbnRlbmQvc3JjL2FwcC9mZWVkL2ZlZWQtaXRlbS9mZWVkLWl0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLDZDQUE2QztFQUM3QyxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9mZWVkL2ZlZWQtaXRlbS9mZWVkLWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGhvdG8tY2FyZHtcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QpO1xuICAgIG1hcmdpbjogMzBweCAwcHg7XG4gIH1cblxuLnBob3RvLWNhcmQgaW9uLWltZyB7XG4gIG1heC1oZWlnaHQ6IDUzMnB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgIFxufVxuIl19 */"

/***/ }),

/***/ "./src/app/feed/feed-item/feed-item.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/feed/feed-item/feed-item.component.ts ***!
  \*******************************************************/
/*! exports provided: FeedItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedItemComponent", function() { return FeedItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FeedItemComponent = /** @class */ (function () {
    function FeedItemComponent() {
    }
    FeedItemComponent.prototype.ngOnInit = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FeedItemComponent.prototype, "feedItem", void 0);
    FeedItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-feed-item',
            template: __webpack_require__(/*! ./feed-item.component.html */ "./src/app/feed/feed-item/feed-item.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./feed-item.component.scss */ "./src/app/feed/feed-item/feed-item.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FeedItemComponent);
    return FeedItemComponent;
}());



/***/ }),

/***/ "./src/app/feed/feed-list/feed-list.component.html":
/*!*********************************************************!*\
  !*** ./src/app/feed/feed-list/feed-list.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"feed\">\n  <app-feed-item \n    *ngFor=\"let item of feedItems\"\n    [feedItem]=\"item\">\n  </app-feed-item>\n</div>"

/***/ }),

/***/ "./src/app/feed/feed-list/feed-list.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/feed/feed-list/feed-list.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".feed {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background: var(--ion-color-light-tint); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2VjMi11c2VyL2Nsb3VkX2RldmVsb3Blcl9uYW5vZGVncmVlL3VkYWNpdHlfcHJvamVjdDMvbGVzc29uLTEtQmVzdC1QcmFjdGljZXMvZXhlcmNpc2VzL3VkYWNpdHktYzMtZnJvbnRlbmQvc3JjL2FwcC9mZWVkL2ZlZWQtbGlzdC9mZWVkLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1Q0FBdUMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2ZlZWQvZmVlZC1saXN0L2ZlZWQtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAuZmVlZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXRpbnQpO1xuICB9Il19 */"

/***/ }),

/***/ "./src/app/feed/feed-list/feed-list.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/feed/feed-list/feed-list.component.ts ***!
  \*******************************************************/
/*! exports provided: FeedListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedListComponent", function() { return FeedListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_feed_provider_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/feed.provider.service */ "./src/app/feed/services/feed.provider.service.ts");



var FeedListComponent = /** @class */ (function () {
    function FeedListComponent(feed) {
        this.feed = feed;
        this.subscriptions = [];
    }
    FeedListComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.subscriptions.push(this.feed.currentFeed$.subscribe(function (items) {
                            _this.feedItems = items;
                        }));
                        return [4 /*yield*/, this.feed.getFeed()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FeedListComponent.prototype.ngOnDestroy = function () {
        for (var _i = 0, _a = this.subscriptions; _i < _a.length; _i++) {
            var subscription = _a[_i];
            subscription.unsubscribe();
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], FeedListComponent.prototype, "feedItems", void 0);
    FeedListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-feed-list',
            template: __webpack_require__(/*! ./feed-list.component.html */ "./src/app/feed/feed-list/feed-list.component.html"),
            styles: [__webpack_require__(/*! ./feed-list.component.scss */ "./src/app/feed/feed-list/feed-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_feed_provider_service__WEBPACK_IMPORTED_MODULE_2__["FeedProviderService"]])
    ], FeedListComponent);
    return FeedListComponent;
}());



/***/ }),

/***/ "./src/app/feed/feed-upload/feed-upload-button/feed-upload-button.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/feed/feed-upload/feed-upload-button/feed-upload-button.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-button \n  color=\"primary\" \n  type=\"submit\"\n  [disabled]=\"!isLoggedIn\"\n  (click)=\"presentUploadForm($event)\">\n  Create a New Post\n</ion-button>"

/***/ }),

/***/ "./src/app/feed/feed-upload/feed-upload-button/feed-upload-button.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/feed/feed-upload/feed-upload-button/feed-upload-button.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlZWQvZmVlZC11cGxvYWQvZmVlZC11cGxvYWQtYnV0dG9uL2ZlZWQtdXBsb2FkLWJ1dHRvbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/feed/feed-upload/feed-upload-button/feed-upload-button.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/feed/feed-upload/feed-upload-button/feed-upload-button.component.ts ***!
  \*************************************************************************************/
/*! exports provided: FeedUploadButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedUploadButtonComponent", function() { return FeedUploadButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _feed_upload_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../feed-upload.component */ "./src/app/feed/feed-upload/feed-upload.component.ts");
/* harmony import */ var src_app_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/auth/services/auth.service */ "./src/app/auth/services/auth.service.ts");





var FeedUploadButtonComponent = /** @class */ (function () {
    function FeedUploadButtonComponent(modalController, auth) {
        this.modalController = modalController;
        this.auth = auth;
    }
    FeedUploadButtonComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.currentUser$.subscribe(function (user) {
            _this.isLoggedIn = user !== null;
        });
    };
    FeedUploadButtonComponent.prototype.ngOnDestroy = function () {
        if (this.loginSub) {
            this.loginSub.unsubscribe();
        }
    };
    FeedUploadButtonComponent.prototype.presentUploadForm = function (ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _feed_upload_component__WEBPACK_IMPORTED_MODULE_3__["FeedUploadComponent"],
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    FeedUploadButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-feed-upload-button',
            template: __webpack_require__(/*! ./feed-upload-button.component.html */ "./src/app/feed/feed-upload/feed-upload-button/feed-upload-button.component.html"),
            styles: [__webpack_require__(/*! ./feed-upload-button.component.scss */ "./src/app/feed/feed-upload/feed-upload-button/feed-upload-button.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], src_app_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], FeedUploadButtonComponent);
    return FeedUploadButtonComponent;
}());



/***/ }),

/***/ "./src/app/feed/feed-upload/feed-upload.component.html":
/*!*************************************************************!*\
  !*** ./src/app/feed/feed-upload/feed-upload.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"uploadForm\" (submit)=\"onSubmit($event)\">`\n    <label>\n        <input type=\"file\" (change)=\"selectImage($event)\" accept=\"image/*\" style=\"display:none\"/>\n        <img *ngIf=\"previewDataUrl\" [src]=\"previewDataUrl\" style=\"width:50px; height: 50px;\" />\n        <a *ngIf=\"!previewDataUrl\" ion-button color=\"secondary\">\n            Select a Photo\n        </a>\n    </label>\n    <ion-item>\n        <ion-label position=\"floating\" color=\"primary\">Caption</ion-label>\n        <ion-input type=\"text\" formControlName=\"caption\" required></ion-input>\n      </ion-item>\n      <ion-button \n        color=\"primary\" \n        type=\"submit\"\n        [disabled]=\"!uploadForm.valid || !file\">\n        Post\n      </ion-button>\n</form>\n"

/***/ }),

/***/ "./src/app/feed/feed-upload/feed-upload.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/feed/feed-upload/feed-upload.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlZWQvZmVlZC11cGxvYWQvZmVlZC11cGxvYWQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/feed/feed-upload/feed-upload.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/feed/feed-upload/feed-upload.component.ts ***!
  \***********************************************************/
/*! exports provided: FeedUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedUploadComponent", function() { return FeedUploadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_feed_provider_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/feed.provider.service */ "./src/app/feed/services/feed.provider.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var FeedUploadComponent = /** @class */ (function () {
    function FeedUploadComponent(feed, formBuilder, loadingController, modalController) {
        this.feed = feed;
        this.formBuilder = formBuilder;
        this.loadingController = loadingController;
        this.modalController = modalController;
    }
    FeedUploadComponent.prototype.ngOnInit = function () {
        this.uploadForm = this.formBuilder.group({
            caption: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    };
    FeedUploadComponent.prototype.setPreviewDataUrl = function (file) {
        var _this = this;
        var reader = new FileReader();
        reader.onloadend = function () {
            _this.previewDataUrl = reader.result;
        };
        reader.readAsDataURL(file);
    };
    FeedUploadComponent.prototype.selectImage = function (event) {
        var file = event.srcElement.files;
        if (!file) {
            return;
        }
        this.file = file[0];
        this.setPreviewDataUrl(this.file);
    };
    FeedUploadComponent.prototype.onSubmit = function ($event) {
        var _this = this;
        $event.preventDefault();
        this.loadingController.create();
        if (!this.uploadForm.valid || !this.file) {
            return;
        }
        this.feed.uploadFeedItem(this.uploadForm.controls.caption.value, this.file)
            .then(function (result) {
            _this.modalController.dismiss();
            _this.loadingController.dismiss();
        });
    };
    FeedUploadComponent.prototype.cancel = function () {
        this.modalController.dismiss();
    };
    FeedUploadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-feed-upload',
            template: __webpack_require__(/*! ./feed-upload.component.html */ "./src/app/feed/feed-upload/feed-upload.component.html"),
            styles: [__webpack_require__(/*! ./feed-upload.component.scss */ "./src/app/feed/feed-upload/feed-upload.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_feed_provider_service__WEBPACK_IMPORTED_MODULE_3__["FeedProviderService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]])
    ], FeedUploadComponent);
    return FeedUploadComponent;
}());



/***/ }),

/***/ "./src/app/feed/feed.module.ts":
/*!*************************************!*\
  !*** ./src/app/feed/feed.module.ts ***!
  \*************************************/
/*! exports provided: FeedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedModule", function() { return FeedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _feed_list_feed_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./feed-list/feed-list.component */ "./src/app/feed/feed-list/feed-list.component.ts");
/* harmony import */ var _feed_item_feed_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./feed-item/feed-item.component */ "./src/app/feed/feed-item/feed-item.component.ts");
/* harmony import */ var _feed_upload_feed_upload_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./feed-upload/feed-upload.component */ "./src/app/feed/feed-upload/feed-upload.component.ts");
/* harmony import */ var _feed_upload_feed_upload_button_feed_upload_button_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./feed-upload/feed-upload-button/feed-upload-button.component */ "./src/app/feed/feed-upload/feed-upload-button/feed-upload-button.component.ts");
/* harmony import */ var _services_feed_provider_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/feed.provider.service */ "./src/app/feed/services/feed.provider.service.ts");










var entryComponents = [_feed_upload_feed_upload_component__WEBPACK_IMPORTED_MODULE_7__["FeedUploadComponent"]];
var components = [_feed_list_feed_list_component__WEBPACK_IMPORTED_MODULE_5__["FeedListComponent"], _feed_item_feed_item_component__WEBPACK_IMPORTED_MODULE_6__["FeedItemComponent"], _feed_upload_feed_upload_component__WEBPACK_IMPORTED_MODULE_7__["FeedUploadComponent"], _feed_upload_feed_upload_button_feed_upload_button_component__WEBPACK_IMPORTED_MODULE_8__["FeedUploadButtonComponent"]];
var FeedModule = /** @class */ (function () {
    function FeedModule() {
    }
    FeedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            declarations: components,
            exports: components,
            entryComponents: entryComponents,
            providers: [_services_feed_provider_service__WEBPACK_IMPORTED_MODULE_9__["FeedProviderService"]]
        })
    ], FeedModule);
    return FeedModule;
}());



/***/ }),

/***/ "./src/app/feed/services/feed.provider.service.ts":
/*!********************************************************!*\
  !*** ./src/app/feed/services/feed.provider.service.ts ***!
  \********************************************************/
/*! exports provided: FeedProviderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedProviderService", function() { return FeedProviderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _api_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/api.service */ "./src/app/api/api.service.ts");




var FeedProviderService = /** @class */ (function () {
    function FeedProviderService(api) {
        this.api = api;
        this.currentFeed$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
    }
    FeedProviderService.prototype.getFeed = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var req, items;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api.get('/feed')];
                    case 1:
                        req = _a.sent();
                        items = req.rows;
                        this.currentFeed$.next(items);
                        return [2 /*return*/, Promise.resolve(this.currentFeed$)];
                }
            });
        });
    };
    FeedProviderService.prototype.uploadFeedItem = function (caption, file) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var res, feed;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api.upload('/feed', file, { caption: caption, url: file.name })];
                    case 1:
                        res = _a.sent();
                        feed = [res].concat(this.currentFeed$.value);
                        this.currentFeed$.next(feed);
                        return [2 /*return*/, res];
                }
            });
        });
    };
    FeedProviderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
    ], FeedProviderService);
    return FeedProviderService;
}());

// async getFeed() {
//   const url = `${API_HOST}/feed`;
//   const req = this.http.get(url, this.httpOptions).pipe(
//     map(this.extractData));
//     // catchError(this.handleError));
//   const resp = <any> (await req.toPromise());
//   return resp.rows;
// }


/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _feed_feed_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../feed/feed.module */ "./src/app/feed/feed.module.ts");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");








var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _feed_feed_module__WEBPACK_IMPORTED_MODULE_6__["FeedModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_7__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_7__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.html":
/*!*************************************!*\
  !*** ./src/app/home/home.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n    <app-feed-upload-button></app-feed-upload-button>\n    <app-feed-list></app-feed-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");



var HomePage = /** @class */ (function () {
    function HomePage() {
        this.appName = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].appName;
    }
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        })
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map