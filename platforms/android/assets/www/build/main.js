webpackJsonp([23],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProducerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_edit__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings_settings__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_customer_customer__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__detail_detail__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__allevents_allevents__ = __webpack_require__(71);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ProducerPage = (function () {
    function ProducerPage(navCtrl, events, toastCtrl, customer, formBuilder, navParams, loadingCtrl, http) {
        this.navCtrl = navCtrl;
        this.events = events;
        this.toastCtrl = toastCtrl;
        this.customer = customer;
        this.formBuilder = formBuilder;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.details = [];
        this.arr1 = [];
        this.pet = "Upcoming";
        this.getUser();
        this.upevent();
        this.pastevent();
        this.usrid = localStorage.getItem('user_id');
        this.vendorid = this.navParams.get('ID');
    }
    ProducerPage.prototype.upevent = function () {
        var _this = this;
        var loading1 = this.loadingCtrl.create({
            spinner: 'bubbles',
            showBackdrop: false,
            cssClass: 'loader'
        });
        loading1.present();
        var postdata = {
            user_id: this.navParams.get('ID'),
            getit: "user_upcomming",
        };
        var serialized_all = this.serializeObj(postdata);
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.http.post(this.customer.base_url + 'ticket.php', serialized_all, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (response) {
            loading1.dismiss();
            console.log(response);
            for (var _i = 0, response_1 = response; _i < response_1.length; _i++) {
                var data = response_1[_i];
                _this.details.push({
                    post_title: data.post_title,
                    Eventimage: data.Eventimage,
                    EventStartDate: data.EventStartdate,
                    Eventvanue: data.Eventvanue,
                    ID: data.ID
                });
            }
        });
    };
    ProducerPage.prototype.pastevent = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            showBackdrop: false,
            cssClass: 'loader'
        });
        loading.present();
        var postdata1 = {
            user_id: this.navParams.get('ID'),
            getit: "user_pastevent",
        };
        var serialized_all = this.serializeObj(postdata1);
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.http.post(this.customer.base_url + 'ticket.php', serialized_all, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            loading.dismiss();
            console.log(data);
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var data1 = data_1[_i];
                _this.arr1.push({
                    post_title: data1.post_title,
                    Eventimage: data1.Eventimage,
                    EventStartDate: data1.EventStartdate,
                    Eventvanue: data1.Eventvanue,
                });
            }
        });
    };
    ProducerPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    ProducerPage.prototype.getUser = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            showBackdrop: false,
            cssClass: 'loader'
        });
        loading.present();
        var postdata = {
            user_id: this.navParams.get('ID'),
            getit: "get_userdata",
            ID: this.navParams.get('ID'),
        };
        console.log(postdata);
        var serialized_all = this.serializeObj(postdata);
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.http.post(this.customer.base_url + 'user.php', serialized_all, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (response) {
            console.log(response);
            _this.name = response;
            console.log(_this.name);
            loading.dismissAll();
        });
    };
    ProducerPage.prototype.editPage = function (producerid) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__edit_edit__["a" /* EditPage */], {
            user_id: producerid
        }, { animate: false });
    };
    ProducerPage.prototype.edit = function (vendor) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__allevents_allevents__["a" /* AlleventsPage */], {
            user_id: vendor
        }, { animate: false });
    };
    ProducerPage.prototype.upcoming = function (idd) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__detail_detail__["a" /* DetailPage */], {
            event_id: idd
        });
    };
    ProducerPage.prototype.settingPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__settings_settings__["a" /* SettingsPage */], {}, { animate: false });
    };
    return ProducerPage;
}());
ProducerPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-producer',template:/*ion-inline-start:"/Volumes/D/customer/src/pages/producer/producer.html"*/'<ion-header>\n  <ion-navbar > \n      <ion-title>Event Organizer Profile</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n<ion-content style="background: #f0f0f0;">\n     <ion-refresher (ionRefresh)="doRefresh($event)">\n      <ion-refresher-content\n      pullingIcon="arrow-dropdown"\n      pullingText="Pull to refresh"\n      refreshingSpinner="circles"\n      refreshingText="Refreshing...">\n    </ion-refresher-content>\n  </ion-refresher>  \n  <div class="main">\n    <div class="pic" [innerHTML]=\'this?.name?.user_img\'>\n      \n        \n      <!--<img src="assets/img/event1.jpg" />-->\n    \n    </div>\n    <h3>{{name?.meta.first_name[0]}}</h3>\n    <p>{{name?.meta.description[0]}}</p>\n    <button ion-button icon-left clear small class="social" *ngIf="name?.meta.facebook != undefined">\n      <ion-icon name="logo-facebook" color="black"></ion-icon>\n      {{name?.meta.facebook[0]}}\n    </button>\n    <button ion-button icon-left clear small  class="social" *ngIf="name?.meta.instagram != undefined">\n        <ion-icon name="logo-instagram" color="black"></ion-icon>\n        {{name?.meta.instagram[0]}}\n    </button>\n    <div class="top">\n          <button [hidden]="usrid!=vendorid" ion-button color="dark" small (click)="edit(vendorid);">Edit Events</button>\n          <button [hidden]="usrid!=vendorid" ion-button color="dark" small (click)="editPage(vendorid);">Edit Profile</button>\n          <button [hidden]="usrid!=vendorid" ion-button color="dark" small (click)="settingPage();"><ion-icon ios="md-settings" md="md-settings"></ion-icon></button>\n    </div>\n  </div><!--main-->\n\n<div class="seg">\n  <ion-segment [(ngModel)]="pet">\n    <ion-segment-button value="Upcoming">\n      Upcoming Events\n    </ion-segment-button>\n    <ion-segment-button value="Past">\n      Past Events\n    </ion-segment-button>\n  </ion-segment>\n</div>\n\n<div class="seg_cnt">\n<div [ngSwitch]="pet">\n  <ion-list *ngSwitchCase="\'Upcoming\'" class="events">\n    <ion-item class="name" *ngFor="let item of details" (click)="upcoming(item.ID);">\n      <ion-thumbnail item-start>\n        <div class="image-container">\n        <img [src]=\'item.Eventimage\' />\n      </div>\n      </ion-thumbnail>\n          <h3>{{item.EventStartDate}}</h3>\n          <h2>{{item.post_title}}</h2>\n          <p>{{item.Eventvanue}}</p>\n        \n    </ion-item>\n\n  </ion-list><!--Upcoming end-->\n\n  <ion-list *ngSwitchCase="\'Past\'">\n    <ion-item class="name" *ngFor="let item1 of arr1">\n      <ion-thumbnail item-start>\n          <div class="image-container">\n        <img [src]=\'item1.Eventimage\' />\n        </div>\n      </ion-thumbnail>\n          <h3>{{item1.EventStartDate}}</h3>\n          <h2>{{item1.post_title}}</h2>\n          <p>{{item1.Eventvanue}}</p>\n      \n    </ion-item>\n  </ion-list><!--Past end-->\n\n</div>\n</div>\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/customer/src/pages/producer/producer.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */], __WEBPACK_IMPORTED_MODULE_5__providers_customer_customer__["a" /* CustomerProvider */],
        __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */]])
], ProducerPage);

//# sourceMappingURL=producer.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_edit__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings_settings__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_customer_customer__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__scan_scan__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__allevents_allevents__ = __webpack_require__(71);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ContactPage = (function () {
    function ContactPage(navCtrl, events, toastCtrl, customer, formBuilder, navParams, loadingCtrl, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.events = events;
        this.toastCtrl = toastCtrl;
        this.customer = customer;
        this.formBuilder = formBuilder;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.details = [];
        this.detailss = [];
        this.gettickets();
        this.pet = "Tickets";
        this.getUser();
        this.events.subscribe('user_updated', function (res) {
            _this.getUser();
        });
        this.likedevents();
    }
    ContactPage.prototype.scan = function (idd) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__scan_scan__["a" /* ScanPage */], {
            ID: idd
        }, { animate: false });
    };
    ContactPage.prototype.editPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__edit_edit__["a" /* EditPage */], {}, { animate: false });
    };
    ContactPage.prototype.edit = function (vendor) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__allevents_allevents__["a" /* AlleventsPage */], {
            user_id: vendor
        }, { animate: false });
    };
    ContactPage.prototype.settingPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__settings_settings__["a" /* SettingsPage */], {}, { animate: false });
    };
    ContactPage.prototype.doRefresh = function (refresher) {
        console.log('Begin async operation', refresher);
        this.getUser();
        this.likedevents();
        this.gettickets();
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    ContactPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    ContactPage.prototype.getUser = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            showBackdrop: false,
            cssClass: 'loader'
        });
        loading.present();
        var postdata = {
            user_id: localStorage.getItem('user_id'),
            getit: "get_userdata",
        };
        var serialized_all = this.serializeObj(postdata);
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.http.post(this.customer.base_url + 'user.php', serialized_all, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (response) {
            loading.dismiss();
            console.log(response);
            // this.id = response.user_data.caps.vendor
            _this.name = response;
            console.log(_this.name);
        });
    };
    ContactPage.prototype.gettickets = function () {
        var _this = this;
        var loading1 = this.loadingCtrl.create({
            spinner: 'bubbles',
            showBackdrop: false,
            cssClass: 'loader'
        });
        loading1.present();
        this.details = [];
        var postdata = {
            user_id: localStorage.getItem('user_id'),
            getit: "user_tickets",
        };
        var serialized_all = this.serializeObj(postdata);
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.http.post(this.customer.base_url + 'ticket.php', serialized_all, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            loading1.dismiss();
            console.log(data);
            if (data.length > 0) {
                if (data.events.length > 0) {
                    for (var _i = 0, _a = data.events; _i < _a.length; _i++) {
                        var data1 = _a[_i];
                        _this.details.push({
                            post_title: data1.post_title,
                            Eventimage: data1.Eventimage,
                            _EventStartDate: data1.event_meta._EventStartDate,
                            Eventvanue: data1.Eventvanue,
                            ticket: data1.ticket.length,
                            ID: data1.ID
                        });
                    }
                    console.log(_this.details);
                }
            }
        });
    };
    ContactPage.prototype.likedevents = function () {
        var _this = this;
        this.detailss = [];
        var postdata = {
            user_id: localStorage.getItem('user_id'),
            getit: "liked_events",
        };
        var serialized_all = this.serializeObj(postdata);
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.http.post(this.customer.base_url + 'ticket.php', serialized_all, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log(data);
            if (data.length > 0) {
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var data2 = data_1[_i];
                    _this.detailss.push({
                        post_title: data2.post_title,
                        Eventimage: data2.Eventimage,
                        post_date: data2.EventStartdate,
                        Eventvanue: data2.Eventvanue,
                        ID: data2.ID
                        // ticket : data2.ticket.length
                    });
                }
                console.log(_this.detailss);
            }
        });
    };
    ContactPage.prototype.poplike = function (post_id) {
        for (var i in this.detailss) {
            if (this.detailss[i].ID == post_id) {
                var toast = this.toastCtrl.create({
                    message: "Removed from Liked events",
                    duration: 3000,
                    position: 'bottom'
                });
                toast.present();
                this.detailss.splice(parseInt(i), 1);
            }
        }
        var postdata1 = {
            user_id: localStorage.getItem('user_id'),
            post_id: post_id,
            getit: "pstlike",
            status: 0,
        };
        var serialized_all = this.serializeObj(postdata1);
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.http.post(this.customer.base_url + 'user.php', serialized_all, options).map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log(data);
        });
    };
    return ContactPage;
}());
ContactPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-contact',template:/*ion-inline-start:"/Volumes/D/customer/src/pages/contact/contact.html"*/'\n<ion-content style="background: #f0f0f0;">\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n        <ion-refresher-content\n        pullingIcon="arrow-dropdown"\n        pullingText="Pull to refresh"\n        refreshingSpinner="circles"\n        refreshingText="Refreshing...">\n      </ion-refresher-content>\n    </ion-refresher>  \n     \n    <div class="main">\n      <div class="pic" [innerHTML]=\'this?.name?.user_img\'>\n        \n        <!--<img src="assets/img/event1.jpg" />-->\n      \n      </div>\n      <h3>{{name?.meta.first_name[0]}}</h3>\n      <p>{{name?.meta.description[0]}}</p>\n      <button ion-button icon-left clear small class="social" *ngIf="name?.meta.facebook != undefined">\n        <ion-icon name="logo-facebook" color="black"></ion-icon>\n        {{name?.meta.facebook[0]}}\n      </button>\n      <button ion-button icon-left clear small  class="social" *ngIf="name?.meta.instagram != undefined">\n          <ion-icon name="logo-instagram" color="black"></ion-icon>\n          {{name?.meta.instagram[0]}}\n      </button>\n      <div class="top">\n          <button [hidden]="name?.user_data?.caps?.vendor != true" ion-button color="" small (click)="edit(vendorid);">Edit Events</button>\n            <button ion-button color="dark" small (click)="editPage();">Edit Profile</button>\n            <button ion-button color="dark" small (click)="settingPage();"><ion-icon ios="md-settings" md="md-settings"></ion-icon></button>\n      </div>\n    </div><!--main-->\n  \n  <div class="seg">\n    <ion-segment [(ngModel)]="pet">\n      <ion-segment-button value="Tickets">\n        <!-- <span [hidden]="pet==\'Liked\'">{{pet}}</span> -->\n        Tickets\n      </ion-segment-button>\n      <ion-segment-button value="Liked">\n        <!-- <span [hidden]="pet==\'Tickets\'">{{pet}}</span> -->\n        Liked\n      </ion-segment-button>\n    </ion-segment>\n  </div>\n  \n  <div class="seg_cnt">\n  <div [ngSwitch]="pet">\n    <ion-list *ngSwitchCase="\'Tickets\'" class="events">\n      <ion-item class="name" *ngFor="let item of details" (click)="scan(item.ID);">\n        <ion-thumbnail item-start>\n          <div class="image-container">\n          <img [src] =\'item.Eventimage\' />\n        </div>\n        </ion-thumbnail>\n            <h3>{{item._EventStartDate}}</h3>\n            <h2>{{item.post_title}}</h2>\n            <p>{{item.Eventvanue}}</p>\n            <span class="ticket">{{item.ticket}} ticket</span>\n      </ion-item>\n    </ion-list>\n  \n    <ion-list *ngSwitchCase="\'Liked\'" class="events">\n      <ion-item class="name" *ngFor="let item1 of detailss">\n        <ion-thumbnail item-start>\n            <div class="image-container">\n          <img [src]=\'item1.Eventimage\' />\n          </div>\n        </ion-thumbnail>\n            <h3>{{item1.post_date}}</h3>\n            <h2>{{item1.post_title}}</h2>\n            <p>{{item1.Eventvanue}}</p>\n            <!-- <p>{{item._EventEndDate| date:\'MMM d,hh:mm a \'}}</p> -->\n            <!-- <span class="ticket">{{item1.ticket}}ticket</span> -->\n            <!-- <ion-icon name="ios-heart" class="heart"></ion-icon> -->\n            <div class="heart_img">\n                <!-- <object class="colorchange" data="assets/img/icn_heartactive.svg" type="image/svg+xml"  (click)="poplike(item1.ID)"> \n                  <img class="img2" src="assets/img/icn_heartactive.svg" />\n               </object> -->\n               <object class="colorchange" data="assets/img/icn_heart.svg" type="image/svg+xml" (click)="poplike(item1.ID)">\n                \n                 <img class="img2" src="assets/img/icn_heart.svg" />\n               </object>\n  \n              \n              </div><!--heart_img-->\n      </ion-item>\n    </ion-list><!--liked end-->\n  \n  </div>\n  </div>\n\n</ion-content>\n  '/*ion-inline-end:"/Volumes/D/customer/src/pages/contact/contact.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */], __WEBPACK_IMPORTED_MODULE_5__providers_customer_customer__["a" /* CustomerProvider */],
        __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */]])
], ContactPage);

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardmodalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_stripe__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_customer_customer__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







// import {disableDeprecatedForms, provideForms} from '@angular/forms';
var CardmodalPage = (function () {
    function CardmodalPage(navCtrl, navParams, stripe, viewCtrl, toastCtrl, http, customer, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.stripe = stripe;
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
        this.http = http;
        this.customer = customer;
        this.loadingCtrl = loadingCtrl;
        this.success = 0;
        this.cards = {
            number: '',
            cvc: '',
            expYearr: 0,
            name: '',
            address_line1: '',
            address_city: '',
            address_state: '',
            postal_code: ''
        };
        this.monthes = [];
        this.monthe();
    }
    CardmodalPage.prototype.monthe = function () {
        for (var i = 1; i <= 12; i++) {
            if (i < 10) {
                this.monthes.push("0" + i);
            }
            else {
                this.monthes.push(JSON.stringify(i));
            }
        }
    };
    CardmodalPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    CardmodalPage.prototype.updatedata = function (carddata) {
        var _this = this;
        return new Promise(function (resolve) {
            var loading = _this.loadingCtrl.create({
                spinner: 'bubbles',
                showBackdrop: false,
                cssClass: 'loader'
            });
            loading.present();
            console.log(carddata.value);
            var split = carddata.value.expYearr.split("-");
            _this.expYear = split[0];
            _this.expMonth = split[1];
            _this.card = {
                number: _this.cards.number,
                expMonth: _this.expMonth,
                expYear: _this.expYear,
                cvc: _this.cards.cvc,
                name: _this.cards.name,
                address_line1: _this.cards.address_line1,
                address_city: _this.cards.address_city,
                address_state: _this.cards.address_state,
                postal_code: _this.cards.postal_code
            };
            _this.stripe.setPublishableKey('pk_test_Ldj5kbIUV3FXI5cfoYZw9qfY');
            if (_this.success == 1) {
                _this.card.cvc = "";
                return false;
            }
            else {
                _this.stripe.validateCardNumber(_this.card.number).then(function (success) {
                    //alert('tanisha')
                    _this.stripe.validateCVC(_this.card.cvc).then(function (success1) {
                        _this.stripe.validateExpiryDate(_this.card.expMonth, _this.card.expYear).then(function (success2) {
                            _this.stripe.createCardToken(_this.card).then((function (token) {
                                _this.card.cvc = "";
                                var postdata = {
                                    user_id: localStorage.getItem('user_id'),
                                    getit: 'save_card',
                                    token: token.id
                                };
                                //                  alert(token.id)
                                console.log('token : ', token.id);
                                var serialized_all = _this.serializeObj(postdata);
                                var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
                                var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: headers });
                                _this.http.post(_this.customer.base_url + 'ticket.php', serialized_all, options).map(function (res) { return res.json(); })
                                    .subscribe(function (dataa) {
                                    loading.dismiss();
                                    _this.success = 1;
                                    console.log('ticked purchased');
                                    console.log(dataa);
                                    var toast = _this.toastCtrl.create({
                                        message: "The details of card are saved",
                                        duration: 3000,
                                        position: 'bottom'
                                    });
                                    toast.present();
                                    _this.card = {
                                        number: '',
                                        expMonth: '',
                                        expYear: '',
                                        cvc: '',
                                        name: '',
                                        address_line1: '',
                                        address_city: '',
                                        address_state: '',
                                        postal_code: ''
                                    };
                                    _this.viewCtrl.dismiss();
                                });
                            })).catch((function (error3) {
                                loading.dismiss();
                                var toast = _this.toastCtrl.create({
                                    message: JSON.stringify(error3),
                                    duration: 4000,
                                    position: 'bottom'
                                });
                                toast.present();
                            }));
                        }).catch((function (error2) {
                            loading.dismiss();
                            var toast = _this.toastCtrl.create({
                                message: JSON.stringify(error2),
                                duration: 4000,
                                position: 'bottom'
                            });
                            toast.present();
                        }));
                    }).catch(function (error1) {
                        loading.dismiss();
                        var toast = _this.toastCtrl.create({
                            message: JSON.stringify(error1),
                            duration: 4000,
                            position: 'bottom'
                        });
                        toast.present();
                    });
                }).catch(function (err_response) {
                    loading.dismiss();
                    _this.card.cvc = "";
                    var toast = _this.toastCtrl.create({
                        message: JSON.stringify(err_response),
                        duration: 4000,
                        position: 'bottom'
                    });
                    toast.present();
                    //      alert('Failed : ' + JSON.stringify(err_response));
                });
            }
            resolve(true);
        });
    };
    CardmodalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CardmodalPage');
    };
    return CardmodalPage;
}());
CardmodalPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-cardmodal',template:/*ion-inline-start:"/Volumes/D/customer/src/pages/cardmodal/cardmodal.html"*/'<ion-header>\n      <ion-navbar>   \n      <ion-title>Add a Card</ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content>\n\n    <div class="pick">\n      <img src="assets/img/credit-card.png">\n    </div>\n\n      <form #billForm=\'ngForm\' (ngSubmit)="updatedata(billForm)" class="frm">\n      <ion-list class="credit">\n          <ion-label>CARD DETAILS</ion-label>\n        <div class="fst">\n            <img src="assets/img/icn-credit-card.svg">\n\n             <ion-item>\n             <ion-input type="text" placeholder="Card number" [(ngModel)]="cards.number" name="number" maxlength="16" required></ion-input>\n          </ion-item>\n          </div>\n\n          <!-- <div class="frth">\n              <ion-item>\n                <ion-select  required [(ngModel)]="cards.expMonth" name="expMonth" placeholder="MM">\n                    <ion-option *ngFor="let monthesss of monthes" [value]="monthesss">{{monthesss}}</ion-option>\n                </ion-select>\n             </ion-item>\n             </div> -->\n\n          <div class="thrd">\n         <ion-item>\n             <ion-datetime displayFormat="MM/YY" pickerFormat="MM YY"  placeholder="MM/YY" max="2075-12-31"  [(ngModel)]="cards.expYearr" name="expYearr" required></ion-datetime>\n          </ion-item> \n          </div>\n\n         <div class="sec">\n            <ion-item>\n                <ion-input type="number" placeholder="CVC" [(ngModel)]="cards.cvc" name="cvc" maxlength="3" required></ion-input>\n            </ion-item>\n            </div>\n    </ion-list>\n\n       <ion-label>NAME AS APPEARS ON CARD </ion-label>\n       <ion-item class="name">\n        <ion-input type="text" [(ngModel)]="cards.name" name="name" placeholder="Name on card" required ></ion-input>\n      </ion-item>\n     \n      <ion-label>ADDRESS ASSOCIATED WITH CARD</ion-label>\n      <div class="bb">\n      <ion-item>\n       <ion-input type="text" [(ngModel)]="cards.address_line1" name="address_line1" placeholder="18 Main St Apt 5" required ></ion-input>\n      </ion-item>\n      <ion-item class="ff">\n        <ion-input type="text" [(ngModel)]="cards.address_city" name="address_city" placeholder="City" required ></ion-input>\n      </ion-item>\n      <ion-item class="tf">\n        <ion-input type="text" [(ngModel)]="cards.address_state" name="address_state" placeholder="State" required ></ion-input>\n      </ion-item>\n      <ion-item class="tw">\n        <ion-input type="number" [(ngModel)]="cards.postal_code" name="postal_code" placeholder="ZIP" required ></ion-input>\n      </ion-item>\n      </div>\n\n      <h4>Billing address outside of United States?</h4>\n\n      <div class="aa">\n      <input [disabled]="!billForm.valid" type="submit" ion-button class="submit_btn" small value="Done"> \n     </div>\n\n      </form>\n     \n  </ion-content>\n  \n    \n   \n\n'/*ion-inline-end:"/Volumes/D/customer/src/pages/cardmodal/cardmodal.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_stripe__["a" /* Stripe */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_3__providers_customer_customer__["a" /* CustomerProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */]])
], CardmodalPage);

//# sourceMappingURL=cardmodal.js.map

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryeventPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_customer_customer__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_social_sharing__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__detail_detail__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__about_about__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_clipboard__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var CategoryeventPage = (function () {
    function CategoryeventPage(navCtrl, navParams, toastCtrl, alertCtrl, customer, socialSharing, loadingCtrl, modalCtrl, http, actionSheetCtrl, events, geolocation, platform, clipboard, nav) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.customer = customer;
        this.socialSharing = socialSharing;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.http = http;
        this.actionSheetCtrl = actionSheetCtrl;
        this.events = events;
        this.geolocation = geolocation;
        this.platform = platform;
        this.clipboard = clipboard;
        this.nav = nav;
        this.eventss = [];
        this.even = [];
        this.week = [];
        this.totalpages = 0;
        this.i = 0;
        this.hasMoreData = true;
        this.titlee = this.navParams.get('title');
        // this.id = this.navParams.get('term_id')
        this.getevents();
        this.getlocations();
        if (localStorage.getItem('user_id') == null) {
            this.bit = 0;
        }
        else {
            this.bit = 1;
        }
    }
    // doRefresh(refresher) {
    //   console.log('Begin async operation', refresher);
    //   this.getevents();
    //   this.getlocations();
    //   setTimeout(() => {
    //     console.log('Async operation has ended');
    //     refresher.complete();
    //   }, 2000);
    // }
    CategoryeventPage.prototype.ngOnInit = function () {
        this.acService = new google.maps.places.AutocompleteService();
        this.geocoder = new google.maps.Geocoder();
        this.autocompleteItems = [];
        this.autocomplete = {
            query: ''
        };
    };
    CategoryeventPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    CategoryeventPage.prototype.getlocations = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.geolocation.getCurrentPosition().then(function (resp) {
            _this.currentLatitude = resp.coords.latitude;
            _this.currentLongitude = resp.coords.longitude;
            console.log(_this.currentLatitude);
            console.log(_this.currentLongitude);
            var latLng = new google.maps.LatLng(_this.currentLatitude, _this.currentLongitude);
            _this.geocoder.geocode({ 'latLng': latLng }, (function (results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    if (results[1]) {
                        _this.autocomplete.query = results[1].formatted_address;
                        _this.type = _this.autocomplete.query;
                    }
                }
            }));
        }).catch(function (error) {
            console.log('hii');
            console.log('Error getting location', error);
        });
        var watch = this.geolocation.watchPosition();
        watch.subscribe(function (data) {
        });
    };
    // prompt(venue)
    // {
    //   console.log(venue)
    //   this.navCtrl.push(AboutPage, {
    //     venue_address : venue,
    //   },{animate: false});
    // }
    CategoryeventPage.prototype.getevents = function () {
        this.eventss = [];
        this.i = 0;
        this.hasMoreData = true;
        this.fetchevents();
    };
    CategoryeventPage.prototype.fetchevents = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            showBackdrop: false,
            cssClass: 'loader'
        });
        loading.present();
        console.log(this.category_id);
        return new Promise(function (resolve) {
            _this.i++;
            var postdata1 = {
                getit: 'catageory_events',
                cat_id: _this.navParams.get('term_taxonomy_id'),
            };
            console.log(postdata1);
            console.log(_this.hasMoreData);
            var serialized_all = _this.serializeObj(postdata1);
            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
            var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
            _this.http.post(_this.customer.base_url + 'user.php', serialized_all, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                loading.dismiss();
                console.log(data);
                if (data.data.length == 0) {
                    var toast = _this.toastCtrl.create({
                        message: 'No such event for this particular category',
                        duration: 3000,
                        position: 'middle',
                    });
                    toast.present();
                }
                else {
                    _this.totalpages = data.totalpages;
                    for (var even in data.data) {
                        console.log(data.data[even]);
                        // this.venueadd = data.data[even].vanueaddress
                        _this.eventss.push(data.data[even]);
                    }
                }
                resolve(true);
                console.log(_this.eventss);
            });
        });
    };
    CategoryeventPage.prototype.detailPage = function (id) {
        console.log(id);
        this.nav.push(__WEBPACK_IMPORTED_MODULE_5__detail_detail__["a" /* DetailPage */], {
            event_id: id,
        }, { animate: false });
    };
    CategoryeventPage.prototype.poplike = function (post_id, status, event) {
        console.log(event);
        if (parseInt(status) == 1) {
            event.target.data = "assets/img/icn_heart.svg";
        }
        if (parseInt(status) == 0) {
            event.target.data = "assets/img/icn_heartactive.svg";
        }
        for (var b in this.eventss) {
            console.log(b);
            if (parseInt(this.eventss[b].ID) == parseInt(post_id)) {
                this.eventss[b].is_liked = status;
                // var loader=this.loadingCtrl.create({
                //   spinner: 'bubbles',
                //   showBackdrop: false,
                //   cssClass: 'loader',
                //    });
                //   loader.present();
            }
        }
        var postdata1 = {
            user_id: localStorage.getItem('user_id'),
            post_id: post_id,
            getit: "pstlike",
            status: status,
        };
        var serialized_all = this.serializeObj(postdata1);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.http.post(this.customer.base_url + 'user.php', serialized_all, options).map(function (res) { return res.json(); })
            .subscribe(function (data) {
            //loader.dismiss();
            console.log(data);
        });
    };
    CategoryeventPage.prototype.shareInfo = function (guid) {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            buttons: [
                {
                    text: 'Share to Facebook',
                    handler: function () {
                        _this.socialSharing.shareViaFacebook('message', null, 'http://www.google.com').then(function () {
                            var toast = _this.toastCtrl.create({
                                message: "Shared to facebook",
                                duration: 3000,
                                position: 'bottom'
                            });
                            toast.present();
                        }).catch(function () {
                            var toast = _this.toastCtrl.create({
                                message: "Not able to Share to facebook",
                                duration: 4000,
                                position: 'bottom'
                            });
                            toast.present();
                        });
                    }
                },
                {
                    text: 'Share to Messenger',
                    handler: function () {
                        _this.socialSharing.shareViaFacebook('message', null, 'http://www.google.com').then(function () {
                            var toast = _this.toastCtrl.create({
                                message: "Shared to Messenger",
                                duration: 4000,
                                position: 'bottom'
                            });
                            toast.present();
                        }).catch(function () {
                            var toast = _this.toastCtrl.create({
                                message: "Not able to share to messenger",
                                duration: 3000,
                                position: 'bottom'
                            });
                            toast.present();
                        });
                    }
                },
                {
                    text: 'Share to Whatsapp',
                    handler: function () {
                        _this.socialSharing.shareViaWhatsApp('message', null, 'http://www.google.com').then(function () {
                            var toast = _this.toastCtrl.create({
                                message: "Shared to Whatsapp",
                                duration: 4000,
                                position: 'bottom'
                            });
                            toast.present();
                        }).catch(function () {
                            var toast = _this.toastCtrl.create({
                                message: "Not able to share to whatsapp",
                                duration: 3000,
                                position: 'bottom'
                            });
                            toast.present();
                        });
                    }
                },
                {
                    text: 'Tweet',
                    handler: function () {
                        _this.socialSharing.shareViaTwitter('Hey gurl! Check out this amazing app and join this amazing event!', null, 'http://www.google.com').then(function () {
                            var toast = _this.toastCtrl.create({
                                message: "Shared to Twitter",
                                duration: 4000,
                                position: 'bottom'
                            });
                            toast.present();
                        }).catch(function () {
                            var toast = _this.toastCtrl.create({
                                message: "Not able to share to twitter",
                                duration: 4000,
                                position: 'bottom'
                            });
                            toast.present();
                        });
                    }
                },
                {
                    text: 'Copy Event Link',
                    handler: function () {
                        _this.clipboard.copy(guid);
                        var toast = _this.toastCtrl.create({
                            message: "link copied",
                            duration: 3000,
                            position: 'bottom'
                        });
                        toast.present();
                    }
                },
                {
                    text: 'Email Event',
                    handler: function () {
                        // Share via email
                        _this.socialSharing.shareViaEmail(guid, 'Subject', ['recipient@example.org']).then(function () {
                            // Success!
                        }).catch(function () {
                            // Error!
                        });
                        console.log('Archive clicked');
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    CategoryeventPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        console.log(infiniteScroll);
        this.fetchevents().then(function () {
            console.log(_this.totalpages + "//" + _this.i);
            if (_this.i >= _this.totalpages) {
                _this.hasMoreData = false;
            }
            else {
                _this.hasMoreData = true;
                infiniteScroll.complete();
            }
        });
    };
    CategoryeventPage.prototype.pressed = function (vanueaddress) {
        var alert = this.alertCtrl.create({
            title: vanueaddress,
            buttons: ['Dismiss']
        });
        alert.present();
    };
    CategoryeventPage.prototype.discover = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__about_about__["a" /* AboutPage */]);
    };
    CategoryeventPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CategoryeventPage');
    };
    return CategoryeventPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('map'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
], CategoryeventPage.prototype, "mapElement", void 0);
CategoryeventPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-categoryevent',template:/*ion-inline-start:"/Volumes/D/customer/src/pages/categoryevent/categoryevent.html"*/'\n<!-- <ion-header>\n\n  <ion-navbar>\n    <ion-title>Events</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content >\n    <ion-list> \n        \n         <ion-item *ngFor="let event of eventss">\n             <div (click)="detailPage(event.ID);">\n            <div class="pic"><img [src]=\'event.Eventimage\' (click)="detailPage(event.ID);"></div>\n             <ion-card-content class="name">\n               <h3>{{event.EventStartDate| date:\'MMM d,hh:mm a \'}}</h3>\n               <h2>{{event.post_title}} </h2>\n               <span>Views{{event.viewcount}}</span>\n               <p (tap)="prompt(event.vanueaddress)" >{{event.Eventvanue}}</p>\n            \n             </ion-card-content>\n             </div>\n     \n             <ion-row  class="hashtag">\n                <ion-col col-2 text-center >\n                  <button ion-button icon-left clear small class="icn"  *ngIf="event.is_liked==0" (click)="poplike(event.ID,1)" >\n                 <ion-icon style="padding: 0;" name="md-heart" [hidden]="this?.bit==0"></ion-icon>\n                 </button>\n                  <button ion-button icon-left clear small class="icn" *ngIf="event.is_liked==1" (click)="poplike(event.ID,0)" >\n                 <ion-icon style="color: #b76359;padding: 0;" name="md-heart" [hidden]="this?.bit==0"></ion-icon>\n                 </button>\n               </ion-col>\n               <ion-col col-2 text-left>\n                 <button ion-button icon-left clear small class="icn" (click)="shareInfo()">\n                   <ion-icon style="color:#262727;" name="ios-paper-plane-outline" [hidden]="this?.bit==0"></ion-icon>\n                 </button>\n               </ion-col>\n     \n             <ion-col col-4 >\n                 <div (click)="detailPage(event.ID);">\n                 <span class="hash" *ngIf="event.catageories.length > 0"> \n                     <ng-container *ngFor="let event1 of event.catageories">\n                   #{{event1}}\n                 </ng-container>\n                 </span>\n               </div>\n               </ion-col>\n     \n               <ion-col center text-center col-4>\n                 <button [hidden]="event?.rsvpticket?.length==0 || event?.wooticket?.length==0" ion-button class="tix" (click)="detailPage(event.ID);">GET TIX</button>\n               </ion-col>\n             </ion-row>\n     \n         </ion-item>\n       </ion-list>\n      \n     \n      <ion-infinite-scroll *ngIf="hasMoreData" (ionInfinite)="doInfinite($event)">\n         <!-- <ion-infinite-scroll-content\n           loadingText="Loading" loadingSpinner="dots"></ion-infinite-scroll-content> -->\n      <!-- </ion-infinite-scroll>\n     \n\n</ion-content> --> \n\n<ion-header>\n  \n    <ion-navbar>\n      <ion-title><img width="120px" src="assets/img/logob.png" class="headerimg"/></ion-title>\n    </ion-navbar>\n   <div class="center_box">\n     <h2>{{titlee}}</h2>\n     </div>\n  \n  </ion-header>\n  \n  <ion-content style="background: #f6f6f6;">\n      <!-- <ion-refresher (ionRefresh)="doRefresh($event)">\n          <ion-refresher-content\n          pullingIcon="arrow-dropdown"\n          pullingText="Pull to refresh"\n          refreshingSpinner="circles"\n          refreshingText="Refreshing...">\n        </ion-refresher-content>\n      </ion-refresher>   -->\n      <!-- <ion-list class="details"> \n          <ion-item *ngFor="let events of all_events">\n            <div *ngFor="let event of events">\n                <div (click)="detailPage(event.ID);">\n             <div class="pic"><img [src]=\'event.Eventimage\'></div>\n             <ion-card-content class="name">\n                <h3>{{event.EventStartDate| date:\'EE,MMM d,hh:mm a \'}}</h3>\n                <h2>{{event.post_title}} </h2>\n                <span>{{event.viewcount}} Views</span>\n                <p ion-long-press [interval]="400" (onPressStart)="pressed()">{{event.Eventvanue}}</p>\n             \n              </ion-card-content>\n              </div>\n      \n            </div>\n            <div class="hashtag likecomm">\n                <div class="button_left">\n      \n                  <div class="heart_img">\n                    <object class="colorchange" data="assets/img/icn_heartactive.svg" type="image/svg+xml" *ngIf="events.is_liked==0" (click)="poplike(event.ID,1)"> \n                   \n                    <img class="img2" src="assets/img/icn_heartactive.svg" />\n                  </object>\n      \n                  <object class="colorchange" data="assets/img/icn_heart.svg" type="image/svg+xml" *ngIf="events.is_liked==1" (click)="poplike(event.ID,0)">\n                    \n                     <img class="img2" src="assets/img/icn_heart.svg" />\n                   </object>\n                  \n                  </div>\n  \n  \n                  <button ion-button icon-left clear small class="icnb" (click)="shareInfo()">\n                      <ion-icon style="color:#444;" name="ios-paper-plane-outline"></ion-icon>\n                    </button>\n  \n              <button ion-button clear small class="icn" *ngIf="events.is_liked==0" (click)="poplike(events.ID,1)" >\n             \n                <div (click)="detailPage(events.ID);" class="tag">\n                    <span class="hash" *ngIf="events.catageories.length > 0"> \n                        <ng-container *ngFor="let event1 of events.catageories">\n                      #{{event1}}\n                    </ng-container>\n                    </span>\n                  </div>\n                </button>\n  \n                <div class="rightbutton">\n                    <button [hidden]="events.rsvpticket.length==0 || events.wooticket.length==0" ion-button class="tix" (click)="detailPage(events.ID);">GET TIX</button>\n                </div>\n                \n             \n            </div>\n  \n          </div>\n          </ion-item>\n        </ion-list>\n  \n         <ion-infinite-scroll *ngIf="hasMoreData" (ionInfinite)="doInfinite($event)">\n            <ion-infinite-scroll-content\n              loadingText="Loading" loadingSpinner="dots"></ion-infinite-scroll-content>\n         </ion-infinite-scroll> -->\n        \n         <ion-list class="details"> \n            \n             <ion-item *ngFor="let event of eventss">\n               <!-- <div *ngFor="let event1 of event"> -->\n                 <div>\n                <div (click)="detailPage(event.ID);" class="pic"><img [src]=\'event.Eventimage\' ></div>\n                <ion-card-content class="name">\n                   <h3>{{event.EventStartDate| date:\'EE,MMM d,hh:mm a \'}}</h3>\n                   <h2 (click)="detailPage(event.ID);">{{event.post_title}} </h2>\n                   <span>{{event.viewcount}} Views</span>\n                   <p ion-long-press [interval]="400" (onPressStart)="pressed(event.vanueaddress)">{{event.Eventvanue}}</p>\n                </ion-card-content>\n                 </div>\n         \n               \n         \n                 <div class="hashtag likecomm">\n                   <div class="button_left">\n         \n                     <div class="heart_img" [hidden]="bit==0">\n                       <object class="colorchange" data="assets/img/icn_heartactive.svg" type="image/svg+xml" *ngIf="event.is_liked==0" (click)="poplike(event.ID,1, $event)"> \n                      \n                       <!-- <img class="img2" src="assets/img/icn_heartactive.svg" /> -->\n                     </object>\n         \n                     <object class="colorchange" data="assets/img/icn_heart.svg" type="image/svg+xml" *ngIf="event.is_liked==1" (click)="poplike(event.ID,0, $event)">\n                       \n                        <!-- <img class="img2" src="assets/img/icn_heart.svg" /> -->\n                      </object>\n                     \n                     </div>\n         \n                         <button [hidden]="bit==0" ion-button icon-left clear small class="icnb" (click)="shareInfo(event.guid)">\n                             <ion-icon style="color:#444;" name="ios-paper-plane-outline"></ion-icon>\n                           </button>\n         \n                     <button ion-button clear small class="icn" *ngIf="event.is_liked==0" (click)="poplike(event.ID,1)" ></button>\n                       <!-- <ion-icon style="padding: 0;" name="md-heart"></ion-icon> -->\n                       <!-- <img src="assets/img/icn_heart.svg" /> -->\n         \n                       <!-- <ng-include  src="\'assets/img/icn_heart.svg\'"></ng-include>  -->\n                     \n                     <div  class="tag">\n                      <span class="hash" *ngIf="event.catageories.length > 0" (click)="discover();"> \n                          <ng-container *ngFor="let event2 of event.catageories">\n                        #{{event2}}\n                      </ng-container>\n                      </span>\n                    </div>\n         \n                    <div class="rightbutton">\n                      <button *ngIf ="event?.rsvpticket?.length > 0 || event?.wooticket?.length > 0" ion-button class="tix" (click)="detailPage(event.ID);">GET TIX</button>\n                  </div>\n                    \n                   </div>\n                 </div>\n                \n                <!-- </div> -->\n         \n             </ion-item>\n           </ion-list>\n         \n  </ion-content>\n  \n'/*ion-inline-end:"/Volumes/D/customer/src/pages/categoryevent/categoryevent.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_customer_customer__["a" /* CustomerProvider */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_social_sharing__["a" /* SocialSharing */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__["a" /* Geolocation */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_8__ionic_native_clipboard__["a" /* Clipboard */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Nav */]])
], CategoryeventPage);

//# sourceMappingURL=categoryevent.js.map

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditpagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_customer_customer__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__detail_detail__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var EditpagePage = (function () {
    function EditpagePage(navCtrl, navParams, barcodeScanner, modalCtrl, viewCtrl, customer, http, formBuilder, events, toastCtrl, actionSheetCtrl, camera, loadingCtrl, datepipe, nav) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.barcodeScanner = barcodeScanner;
        this.modalCtrl = modalCtrl;
        this.viewCtrl = viewCtrl;
        this.customer = customer;
        this.http = http;
        this.formBuilder = formBuilder;
        this.events = events;
        this.toastCtrl = toastCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.camera = camera;
        this.loadingCtrl = loadingCtrl;
        this.datepipe = datepipe;
        this.nav = nav;
        this.details = [];
        this.bit = 1;
        this.objectdata = Object.keys;
        this.eventimage = "assets/img/event1.jpg";
        this.image_data = "";
        this.name = [];
        this.data = {
            post_title: '',
            post_content: '',
            eventvaneid: '',
            eventstartdate: '',
            eventenddate: '',
            categoryy: '',
            eventcost: '',
            user_id: '',
            eventimage: ''
        };
        this.display();
        this.getevent();
    }
    EditpagePage.prototype.doRefresh = function (refresher) {
        console.log('Begin async operation', refresher);
        this.getevent();
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    EditpagePage.prototype.setenddate = function () {
        this.data.eventenddate = this.data.eventstartdate;
        this.bit = 0;
    };
    EditpagePage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    EditpagePage.prototype.display = function () {
        var _this = this;
        var postdata2 = {
            user_id: localStorage.getItem('user_id'),
            getit: 'vanues',
        };
        console.log(postdata2);
        var serialized_all1 = this.serializeObj(postdata2);
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.http.post(this.customer.base_url + 'ticket.php', serialized_all1, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (dataa) {
            console.log(dataa);
            _this.vanues = dataa.data;
        });
    };
    EditpagePage.prototype.getevent = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            showBackdrop: false,
            cssClass: 'loader'
        });
        loading.present();
        var aa = this;
        var postdata1 = {
            user_id: localStorage.getItem('user_id'),
            event_id: this.navParams.get('ID'),
            getit: "event_detail",
        };
        console.log(postdata1);
        var serialized_all = this.serializeObj(postdata1);
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.http.post(this.customer.base_url + 'user.php', serialized_all, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (dataa) {
            console.log(dataa);
            loading.dismiss();
            if (dataa.data[0].Eventpostmeta._EventCost.length > 0) {
                //                            alert(dataa.data[0].Eventpostmeta._EventCost[0])
                _this.data.eventcost = dataa.data[0].Eventpostmeta._EventCost[0];
            }
            _this.data.eventimage = dataa.data[0].Eventimage;
            _this.data.post_title = dataa.data[0].post_title;
            _this.data.eventvaneid = dataa.data[0].Eventvanue;
            console.log('hk');
            console.log(_this.vanues[0].ID);
            console.log(_this.data.eventvaneid);
            console.log('hk');
            _this.data.eventenddate = _this.datepipe.transform(dataa.data[0].EventEndDate, 'y-MM-ddTH:mm');
            _this.data.eventstartdate = _this.datepipe.transform(dataa.data[0].EventStartDate, 'y-MM-ddTH:mm');
            _this.data.post_content = dataa.data[0].post_content;
        });
    };
    EditpagePage.prototype.presentActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            buttons: [
                {
                    text: 'Choose Photo',
                    handler: function () {
                        _this.getPicture(0);
                    }
                }, {
                    text: 'Take Photo',
                    handler: function () {
                        _this.getPicture(1);
                    }
                }
            ]
        });
        actionSheet.present();
    };
    EditpagePage.prototype.getPicture = function (sourceType) {
        var _this = this;
        // You can check the values here:
        // https://github.com/driftyco/ionic-native/blob/master/src/plugins/camera.ts
        this.camera.getPicture({
            quality: 10,
            destinationType: 0,
            sourceType: sourceType,
            allowEdit: true,
            saveToPhotoAlbum: false,
            correctOrientation: true,
            targetHeight: 420,
            targetWidth: 940,
        }).then(function (imageData) {
            _this.image_data = imageData;
            _this.data.eventimage = 'data:image/jpeg;base64,' + imageData;
            //  alert(this.image_data)
        }, function (err) {
            var toast = _this.toastCtrl.create({
                message: JSON.stringify(err),
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
        });
    };
    EditpagePage.prototype.save = function () {
        var _this = this;
        if (this.data.post_title == "" || this.data.post_title == null || this.data.post_title == undefined) {
            var toast = this.toastCtrl.create({
                message: "Please fill the title above",
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
        }
        else if (this.data.post_content == "" || this.data.post_content == null || this.data.post_content == undefined) {
            var toast = this.toastCtrl.create({
                message: "Please fill the content above",
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
        }
        else if (this.data.eventvaneid == "" || this.data.eventvaneid == null || this.data.eventvaneid == undefined) {
            var toast = this.toastCtrl.create({
                message: "Please fill the event venue above",
                duration: 4000,
                position: 'bottom'
            });
            toast.present();
        }
        else if (this.data.eventstartdate == "" || this.data.eventstartdate == null || this.data.eventstartdate == undefined) {
            var toast = this.toastCtrl.create({
                message: "Please fill the start date above and check for starting and ending date",
                duration: 3000,
                position: 'middle'
            });
            toast.present();
        }
        else if (this.data.eventenddate == "" || this.data.eventenddate == null || this.data.eventenddate == undefined) {
            var toast = this.toastCtrl.create({
                message: "Please fill the end date above",
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
        }
        else if (this.data.eventcost == "" || this.data.eventcost == null || this.data.eventcost == undefined) {
            var toast = this.toastCtrl.create({
                message: "Please fill the price above",
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
        }
        else {
            var d1 = __WEBPACK_IMPORTED_MODULE_8_moment__(this.data.eventstartdate, 'MM/DD/YYYY');
            var d2 = __WEBPACK_IMPORTED_MODULE_8_moment__(this.data.eventenddate, 'MM/DD/YYYY');
            var duration;
            var fromDate = __WEBPACK_IMPORTED_MODULE_8_moment__["utc"](this.data.eventstartdate);
            // duration = moment.duration({'hour':2, 'minute':15});
            duration = __WEBPACK_IMPORTED_MODULE_8_moment__["duration"]({ 'hour': 0, 'minute': 0 });
            var toDate = __WEBPACK_IMPORTED_MODULE_8_moment__["utc"](this.data.eventenddate);
            console.log(fromDate.format('mmmm DD-MMM-YYYY hh:mm a'));
            console.log(toDate.format('mmmm DD-MMM-YYYY hh:mm a'));
            var hourDiff = toDate.diff(fromDate, 'hours');
            var minuteDiff = toDate.diff(fromDate, 'minutes');
            var hourDuration = Math.floor(minuteDiff / 60);
            var minuteDuration = minuteDiff % 60;
            console.log(hourDuration);
            console.log(minuteDuration);
            if (hourDuration == 0) {
                var toast = this.toastCtrl.create({
                    message: "Please check the dates and time specified",
                    duration: 3000,
                    position: 'bottom'
                });
                toast.present();
            }
            else {
                var loading1_1 = this.loadingCtrl.create({
                    spinner: 'bubbles',
                    showBackdrop: false,
                    cssClass: 'loader'
                });
                loading1_1.present();
                return new Promise(function (resolve) {
                    var postdata5 = {
                        user_id: localStorage.getItem('user_id'),
                        getit: 'edit_event',
                        event_id: _this.navParams.get('ID'),
                        eventstartdate: _this.data.eventstartdate,
                        eventenddate: _this.data.eventenddate,
                        eventvaneid: _this.data.eventvaneid,
                        eventcost: _this.data.eventcost,
                        post_title: _this.data.post_title,
                        post_content: _this.data.post_content
                    };
                    console.log(postdata5);
                    var serialized_all2 = _this.serializeObj(postdata5);
                    var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
                    var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: headers });
                    _this.http.post(_this.customer.base_url + 'user.php', serialized_all2, options)
                        .map(function (res) { return res.json(); })
                        .subscribe(function (dataaa) {
                        loading1_1.dismiss();
                        console.log(dataaa);
                        if (_this.image_data != "") {
                            // alert(this.image_data) 
                            var loader_1 = _this.loadingCtrl.create({
                                content: 'uploading image...',
                            });
                            var postdata7 = {
                                getit: 'save_eventimage',
                                event_id: _this.navParams.get('ID'),
                                image_data: _this.image_data
                            };
                            console.log(postdata7);
                            var serialized_all6 = _this.serializeObj(postdata7);
                            var headers_1 = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
                            var options_1 = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: headers_1 });
                            _this.http.post(_this.customer.base_url + 'ticket.php', serialized_all6, options_1)
                                .map(function (res) { return res.json(); })
                                .subscribe(function (dataa) {
                                console.log(dataa);
                                loader_1.dismiss();
                                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__detail_detail__["a" /* DetailPage */], {
                                    event_id: _this.navParams.get('ID')
                                }, { animate: false });
                            });
                        }
                        else {
                            var postd1 = {
                                getit: 'save_defaultimg',
                                event_id: _this.navParams.get('ID'),
                            };
                            console.log(postd1);
                            var serialized_all10 = _this.serializeObj(postd1);
                            var headers_2 = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
                            var options_2 = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: headers_2 });
                            _this.http.post(_this.customer.base_url + 'ticket.php', serialized_all10, options_2)
                                .map(function (res) { return res.json(); })
                                .subscribe(function (dat) {
                                console.log(dat);
                                _this.nav.push(__WEBPACK_IMPORTED_MODULE_9__detail_detail__["a" /* DetailPage */], {
                                    event_id: _this.navParams.get('ID')
                                }, { animate: false });
                            });
                        }
                    });
                    _this.date = new Date();
                    _this.data = {
                        post_title: '',
                        post_content: '',
                        eventvaneid: '',
                        eventstartdate: _this.datepipe.transform(_this.date, 'y-MM-ddTH:mm'),
                        eventenddate: '',
                        categoryy: '',
                        eventcost: '',
                        user_id: '',
                        eventimage: ''
                    };
                });
            }
        }
    };
    EditpagePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditpagePage');
    };
    return EditpagePage;
}());
EditpagePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-editpage',template:/*ion-inline-start:"/Volumes/D/customer/src/pages/editpage/editpage.html"*/'<ion-header>\n    \n      <ion-navbar>\n        <ion-title>Edit Event</ion-title>\n      </ion-navbar>\n    \n</ion-header>\n    \n    <ion-content style="background: #fafafa;">\n        <ion-refresher (ionRefresh)="doRefresh($event)">\n            <ion-refresher-content\n            pullingIcon="arrow-dropdown"\n            pullingText="Pull to refresh"\n            refreshingSpinner="circles"\n            refreshingText="Refreshing...">\n          </ion-refresher-content>\n        </ion-refresher>  \n      <ion-list class="pic">\n        <ion-item>\n          <ion-avatar item-start>\n            <img [src]="data.eventimage">\n          </ion-avatar>\n          <button ion-button clear color="primary" class="change" uplad ion-button block *ngIf="!srcImage" (click)="presentActionSheet()">Change Image</button>\n        </ion-item>\n      </ion-list>\n     \n      <ion-list class="titles">\n          <ion-item>\n            <ion-input type="text" placeholder="Event Title" [(ngModel)]="data.post_title" name="post_title" ></ion-input>\n          </ion-item>\n      </ion-list>\n    \n      <ion-list class="location">\n       <div class="time">\n          <div class="lft">\n            <h6>Starts</h6>\n             <ion-datetime displayFormat="MMM DD, YYYY HH:mm" [(ngModel)]="data.eventstartdate" name= "eventstartdate"  max="2075-12-31" min="{{data.eventstartdate}}" (ngModelChange)="setenddate()" placeholder="MM/DD/YYYY HH:MM"></ion-datetime>\n          </div>\n        \n          <div class="lft rt">\n            <h6>Ends</h6>\n             <ion-datetime [disabled]="bit==1" displayFormat="MMM DD, YYYY HH:mm" [(ngModel)]="data.eventenddate" name= "eventenddate" max="2075-12-31" min="{{data.eventenddate}}" placeholder="MM/DD/YYYY HH:MM"></ion-datetime> \n          </div>\n         \n        </div>\n         <ion-list class="loc">\n            <ion-item  *ngIf="vanues !=null" class="entr">\n              <ion-select [(ngModel)]="data.eventvaneid" #eventvaneid="ngModel" placeholder="{{data.eventvaneid}}" >\n                  <!-- <ion-option  [value]="Location">Location</ion-option> -->\n                <ion-option *ngFor="let item of vanues" [value]="item.ID">{{item?.post_name}}</ion-option>\n              </ion-select>\n            </ion-item>\n          </ion-list>\n          <ion-item>\n              <ion-input type="text" placeholder="Cost" [(ngModel)]="data.eventcost" name= "eventcost"></ion-input>\n          </ion-item>\n         <ion-item class="area">\n            <textarea placeholder="About Event" [(ngModel)]="data.post_content" name="post_content" ></textarea>\n          </ion-item>\n    </ion-list>\n    <!-- <ion-list style="margin-bottom:0px;"  class="clk" *ngIf="name !=undefined">\n      <ion-select  placeholder="Category" [(ngModel)]="data.categoryy" name =\'categoryy\'>\n           <ion-option *ngFor="let category of objectdata(name)" >{{name[category].name}}</ion-option> \n      </ion-select>\n    </ion-list> -->\n    \n    <!-- <ion-list class="location">\n      <ion-item>\n        <ion-input type="text" placeholder="User id" [(ngModel)]="data.user_id" name ="user_id"></ion-input>\n      </ion-item>\n    </ion-list> -->\n    <ion-footer class="botom">\n      <ion-toolbar color="primary">\n          <ion-buttons>\n              <button ion-button icon-right color="royal" (click)="save();" >Save Changes</button>\n            </ion-buttons>\n      </ion-toolbar>\n  </ion-footer>\n    </ion-content>\n'/*ion-inline-end:"/Volumes/D/customer/src/pages/editpage/editpage.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_customer_customer__["a" /* CustomerProvider */],
        __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_7__angular_common__["DatePipe"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Nav */]])
], EditpagePage);

//# sourceMappingURL=editpage.js.map

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_customer_customer__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the PasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PasswordPage = (function () {
    function PasswordPage(formBuilder, navCtrl, navParams, http, loadingCtrl, toastCtrl, customer) {
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.customer = customer;
        this.data = "";
        this.userdata = '';
        // this.userdata=JSON.parse(localStorage.getItem("user_data"));   
    }
    PasswordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PasswordPage');
    };
    PasswordPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    PasswordPage.prototype.Change = function (data) {
        var _this = this;
        console.log(data.value);
        var loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            showBackdrop: false,
            cssClass: 'loader'
        });
        if (data.value.new != data.value.cnew) {
            var toast = this.toastCtrl.create({
                message: " New password and confirm new password doesnot match!",
                duration: 5000,
                position: 'bottom'
            });
            toast.present();
        }
        else {
            loading.present();
            var postdata = {
                user_id: localStorage.getItem('user_id'),
                getit: "change_password",
                user_login: localStorage.getItem('user_login'),
                new_pass: data.value.new,
                old_pass: data.value.old,
            };
            var serialized_all = this.serializeObj(postdata);
            var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
            var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
            this.http.post(this.customer.base_url + 'user.php', serialized_all, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                console.log(data);
                //alert("babita");
                //alert(data.posts.msg);
                loading.dismissAll();
                if (data.code == 1) {
                    var toast = _this.toastCtrl.create({
                        message: data.msg,
                        duration: 5000,
                        position: 'bottom'
                    });
                    toast.present();
                }
                else {
                    var toast = _this.toastCtrl.create({
                        message: "You have entered wrong old password!",
                        duration: 5000,
                        position: 'bottom'
                    });
                    toast.present();
                }
                // if(response.posts.isSucess==true){
                //    localStorage.clear();
                //    this.navCtrl.push(LoginPage);
                //     }else{
                //           }
            });
        }
    };
    return PasswordPage;
}());
PasswordPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-password',template:/*ion-inline-start:"/Volumes/D/customer/src/pages/password/password.html"*/'<!--\n  Generated template for the PasswordPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    \n      <ion-navbar>\n        <ion-title></ion-title>\n      </ion-navbar>\n    \n    </ion-header>\n    \n    \n    <div class="int_edt" style="background: url(assets/img/back1.jpg) no-repeat center fixed; \n      background-size: cover;">\n     <div class="logo"><img src="assets/img/logo.png" /></div>\n    \n    <div class="heading">\n      <h2>Change Your Password</h2>\n      <p>Enter your new password</p>\n    </div>\n    \n     <form  #changeForm="ngForm">\n    \n      <ion-list class="log">\n        <ion-item>\n          <ion-input type="password" placeholder="Old Password"  [(ngModel)]="data.old" name="old" #old="ngModel"  required></ion-input>\n        </ion-item>\n        <div *ngIf="old.errors && (old.dirty || old.touched)" class="alert alert-danger">\n           <div [hidden]="!old.errors.required  " class="alert alert-danger">\n            Old Password is required\n            </div>\n        </div>\n        <ion-item>\n          <ion-input type="password" placeholder="New Password"  [(ngModel)]="data.new" name="new" #new="ngModel"  required></ion-input>\n        </ion-item>\n        <div *ngIf="new.errors && (new.dirty || new.touched)" class="alert alert-danger">\n           <div [hidden]="!new.errors.required  " class="alert alert-danger">\n           New Password is required\n            </div>\n        </div>\n        <ion-item>\n          <ion-input type="password" placeholder="Enter New Password" [(ngModel)]="data.cnew" name="cnew" #cnew="ngModel"  required></ion-input>\n        </ion-item>\n        <div *ngIf="cnew.errors && (cnew.dirty || cnew.touched)" class="alert alert-danger">\n           <div [hidden]="!cnew.errors.required  " class="alert alert-danger">\n          Confirm New Password is required\n            </div>\n        </div>\n      </ion-list>\n      <button ion-button full color="danger" class="submt" [disabled]="!changeForm.valid" type="submit" (click)="Change(changeForm)">Submit</button>\n     </form>\n    \n    </div>\n'/*ion-inline-end:"/Volumes/D/customer/src/pages/password/password.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */], __WEBPACK_IMPORTED_MODULE_5__providers_customer_customer__["a" /* CustomerProvider */]])
], PasswordPage);

//# sourceMappingURL=password.js.map

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeteventsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detail_detail__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_customer_customer__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_social_sharing__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__about_about__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_clipboard__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var GeteventsPage = (function () {
    function GeteventsPage(navCtrl, navParams, toastCtrl, alertCtrl, customer, socialSharing, loadingCtrl, modalCtrl, http, actionSheetCtrl, events, geolocation, platform, clipboard, nav) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.customer = customer;
        this.socialSharing = socialSharing;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.http = http;
        this.actionSheetCtrl = actionSheetCtrl;
        this.events = events;
        this.geolocation = geolocation;
        this.platform = platform;
        this.clipboard = clipboard;
        this.nav = nav;
        this.eventss = [];
        this.even = [];
        this.week = [];
        this.totalpages = 0;
        this.i = 0;
        this.hasMoreData = true;
        this.searchresult();
        this.getlocations();
    }
    GeteventsPage.prototype.doRefresh = function (refresher) {
        console.log('Begin async operation', refresher);
        this.searchresult();
        this.getlocations();
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    GeteventsPage.prototype.ngOnInit = function () {
        this.acService = new google.maps.places.AutocompleteService();
        this.geocoder = new google.maps.Geocoder();
        this.autocompleteItems = [];
        this.autocomplete = {
            query: ''
        };
        if (localStorage.getItem('user_id') == null) {
            this.showlike = 0;
        }
        else {
            this.showlike = 1;
        }
    };
    GeteventsPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    GeteventsPage.prototype.getlocations = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.geolocation.getCurrentPosition().then(function (resp) {
            _this.currentLatitude = resp.coords.latitude;
            _this.currentLongitude = resp.coords.longitude;
            console.log(_this.currentLatitude);
            console.log(_this.currentLongitude);
            var latLng = new google.maps.LatLng(_this.currentLatitude, _this.currentLongitude);
            _this.geocoder.geocode({ 'latLng': latLng }, (function (results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    if (results[1]) {
                        _this.autocomplete.query = results[1].formatted_address;
                        // alert( this.autocomplete.query)
                        _this.type = _this.autocomplete.query;
                    }
                }
            }));
        }).catch(function (error) {
            // console.log('hii')
            console.log('Error getting location', error);
        });
        var watch = this.geolocation.watchPosition();
        watch.subscribe(function (data) {
        });
    };
    GeteventsPage.prototype.searchresult = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            showBackdrop: false,
            cssClass: 'loader'
        });
        loading.present();
        this.latitude = this.navParams.get('lat');
        this.longitude = this.navParams.get('lng');
        console.log(this.latitude);
        console.log(this.longitude);
        var postdata1 = {
            getit: 'loc_events',
            lat: this.latitude,
            lng: this.longitude,
            user_id: localStorage.getItem('user_id'),
        };
        var serialized_all = this.serializeObj(postdata1);
        var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.http.post(this.customer.base_url + 'user.php', serialized_all, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (dataa) {
            loading.dismiss();
            console.log(dataa);
            if (dataa.length == 0) {
                var toast = _this.toastCtrl.create({
                    message: 'No such event for this particular category',
                    duration: 4000,
                    position: 'middle',
                });
                toast.present();
            }
            else {
                _this.all_events = dataa;
                for (var even in dataa) {
                    //  this.venueadd = dataa[even].vanueaddress
                    _this.eventss.push(dataa[even]);
                }
                console.log(_this.eventss);
            }
        });
    };
    // getevents(loc_events) {
    //   // console.log(loc_events)
    //   this.i = 0
    //   this.event_type = 'loc_events';
    //   this.hasMoreData = true;
    //   this.fetchevents(); 
    // }
    // fetchevents() {
    //   var loading = this.loadingCtrl.create({
    //     spinner: 'bubbles',
    //     showBackdrop: false,
    //     cssClass: 'loader'
    //   });
    //   loading.present()
    //   console.log(this.event_type)
    //   return new Promise(resolve => {
    //     this.i++;
    //     var postdata1 = {
    //       user_id: localStorage.getItem('user_id'),
    //       page: this.i,
    //       getit: this.event_type,
    //     }
    //     console.log(this.hasMoreData)
    //     var serialized_all = this.serializeObj(postdata1);
    //     let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
    //     let options = new RequestOptions({ headers: headers });
    //     this.http.post(this.customer.base_url + 'user.php', serialized_all, options)
    //       .map(res => res.json())
    //       .subscribe((data) => {
    //         loading.dismiss();
    //         console.log(data);
    //         this.totalpages = data.totalpages;
    //         for (let even in data.data) {
    //           console.log(data.data[even])
    //           this.eventss.push(data.data[even])
    //       }
    //         resolve(true);
    //         console.log(this.eventss)
    //       })
    //   })
    // }
    GeteventsPage.prototype.detailPage = function (id) {
        console.log(id);
        this.nav.push(__WEBPACK_IMPORTED_MODULE_2__detail_detail__["a" /* DetailPage */], {
            event_id: id,
        }, { animate: false });
    };
    GeteventsPage.prototype.poplike = function (post_id, status, event) {
        console.log(event);
        if (parseInt(status) == 1) {
            event.target.data = "assets/img/icn_heart.svg";
        }
        if (parseInt(status) == 0) {
            event.target.data = "assets/img/icn_heartactive.svg";
        }
        for (var b in this.eventss) {
            console.log(b);
            if (parseInt(this.eventss[b].ID) == parseInt(post_id)) {
                this.eventss[b].is_liked = status;
                // var loader=this.loadingCtrl.create({
                //   spinner: 'bubbles',
                //   showBackdrop: false,
                //   cssClass: 'loader',
                //    });
                //   loader.present();
            }
        }
        var postdata1 = {
            user_id: localStorage.getItem('user_id'),
            post_id: post_id,
            getit: "pstlike",
            status: status,
        };
        var serialized_all = this.serializeObj(postdata1);
        var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.http.post(this.customer.base_url + 'user.php', serialized_all, options).map(function (res) { return res.json(); })
            .subscribe(function (data) {
            //loader.dismiss();
            console.log(data);
            // if(data.code==1){
            // var toast = this.toastCtrl.create({
            //   message: "Added",
            //   duration: 3000,
            //   position: 'bottom'
            // });
            // toast.present();
            // }
        });
    };
    GeteventsPage.prototype.shareInfo = function (guid) {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            buttons: [
                {
                    text: 'Share to Facebook',
                    handler: function () {
                        _this.socialSharing.shareViaFacebook('message', null, 'http://www.google.com').then(function () {
                            var toast = _this.toastCtrl.create({
                                message: "Shared to facebook",
                                duration: 4000,
                                position: 'bottom'
                            });
                            toast.present();
                        }).catch(function () {
                            // alert(JSON.stringify(err))
                            var toast = _this.toastCtrl.create({
                                message: "Not able to Share to facebook",
                                duration: 4000,
                                position: 'bottom'
                            });
                            toast.present();
                        });
                    }
                },
                {
                    text: 'Share to Messenger',
                    handler: function () {
                        _this.socialSharing.shareViaFacebook('message', null, 'http://www.google.com').then(function () {
                            var toast = _this.toastCtrl.create({
                                message: "Shared to Messenger",
                                duration: 5000,
                                position: 'bottom'
                            });
                            toast.present();
                        }).catch(function () {
                            var toast = _this.toastCtrl.create({
                                message: "Not able to share to messenger",
                                duration: 4000,
                                position: 'bottom'
                            });
                            toast.present();
                        });
                    }
                },
                {
                    text: 'Share to Whatsapp',
                    handler: function () {
                        _this.socialSharing.shareViaWhatsApp('message', null, 'http://www.google.com').then(function () {
                            var toast = _this.toastCtrl.create({
                                message: "Shared to Whatsapp",
                                duration: 5000,
                                position: 'bottom'
                            });
                            toast.present();
                        }).catch(function () {
                            var toast = _this.toastCtrl.create({
                                message: "Not able to share to whatsapp",
                                duration: 4000,
                                position: 'bottom'
                            });
                            toast.present();
                        });
                    }
                },
                {
                    text: 'Tweet',
                    handler: function () {
                        _this.socialSharing.shareViaTwitter('Hey gurl! Check out this amazing app and join this amazing event!', null, 'http://www.google.com').then(function () {
                            var toast = _this.toastCtrl.create({
                                message: "Shared to Twitter",
                                duration: 5000,
                                position: 'bottom'
                            });
                            toast.present();
                        }).catch(function () {
                            var toast = _this.toastCtrl.create({
                                message: "Not able to share to twitter",
                                duration: 4000,
                                position: 'bottom'
                            });
                            toast.present();
                        });
                    }
                },
                {
                    text: 'Copy Event Link',
                    handler: function () {
                        _this.clipboard.copy(guid);
                        var toast = _this.toastCtrl.create({
                            message: "link copied",
                            duration: 3000,
                            position: 'bottom'
                        });
                        toast.present();
                    }
                },
                {
                    text: 'Email Event',
                    handler: function () {
                        // Share via email
                        _this.socialSharing.shareViaEmail(guid, 'Subject', ['recipient@example.org']).then(function () {
                            // Success!
                        }).catch(function () {
                            // Error!
                        });
                        console.log('Archive clicked');
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    // public doInfinite(infiniteScroll: any) {
    //   console.log(infiniteScroll)
    //   this.fetchevents().then(() => {
    //     console.log(this.totalpages + "//" + this.i)
    //     if (this.i >= this.totalpages) {
    //       this.hasMoreData = false;
    //     } else {
    //       this.hasMoreData = true;
    //       infiniteScroll.complete();
    //     }
    //   });
    //   }
    GeteventsPage.prototype.pressed = function (vanueaddress) {
        var alert = this.alertCtrl.create({
            title: vanueaddress,
            buttons: ['Dismiss']
        });
        alert.present();
    };
    GeteventsPage.prototype.discover = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__about_about__["a" /* AboutPage */]);
    };
    GeteventsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GeteventsPage');
    };
    return GeteventsPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('map'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"])
], GeteventsPage.prototype, "mapElement", void 0);
GeteventsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'page-getevents',template:/*ion-inline-start:"/Volumes/D/customer/src/pages/getevents/getevents.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title><img width="120px" src="assets/img/logob.png" class="headerimg" /></ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content style="background: #f6f6f6;">\n <ion-refresher (ionRefresh)="doRefresh($event)">\n          <ion-refresher-content\n          pullingIcon="arrow-dropdown"\n          pullingText="Pull to refresh"\n          refreshingSpinner="circles"\n          refreshingText="Refreshing...">\n        </ion-refresher-content>\n      </ion-refresher>  \n    <!-- <ion-list class="details"> \n        <ion-item *ngFor="let events of all_events">\n          <div *ngFor="let event of events">\n              <div (click)="detailPage(event.ID);">\n           <div class="pic"><img [src]=\'event.Eventimage\'></div>\n           <ion-card-content class="name">\n              <h3>{{event.EventStartDate| date:\'EE,MMM d,hh:mm a \'}}</h3>\n              <h2>{{event.post_title}} </h2>\n              <span>{{event.viewcount}} Views</span>\n              <p ion-long-press [interval]="400" (onPressStart)="pressed()">{{event.Eventvanue}}</p>\n           \n            </ion-card-content>\n            </div>\n    \n          </div>\n          <div class="hashtag likecomm">\n              <div class="button_left">\n    \n                <div class="heart_img">\n                  <object class="colorchange" data="assets/img/icn_heartactive.svg" type="image/svg+xml" *ngIf="events.is_liked==0" (click)="poplike(event.ID,1)"> \n                 \n                  <img class="img2" src="assets/img/icn_heartactive.svg" />\n                </object>\n    \n                <object class="colorchange" data="assets/img/icn_heart.svg" type="image/svg+xml" *ngIf="events.is_liked==1" (click)="poplike(event.ID,0)">\n                  \n                   <img class="img2" src="assets/img/icn_heart.svg" />\n                 </object>\n                \n                </div>\n\n\n                <button ion-button icon-left clear small class="icnb" (click)="shareInfo()">\n                    <ion-icon style="color:#444;" name="ios-paper-plane-outline"></ion-icon>\n                  </button>\n\n            <button ion-button clear small class="icn" *ngIf="events.is_liked==0" (click)="poplike(events.ID,1)" >\n           \n              <div (click)="detailPage(events.ID);" class="tag">\n                  <span class="hash" *ngIf="events.catageories.length > 0"> \n                      <ng-container *ngFor="let event1 of events.catageories">\n                    #{{event1}}\n                  </ng-container>\n                  </span>\n                </div>\n              </button>\n\n              <div class="rightbutton">\n                  <button [hidden]="events.rsvpticket.length==0 || events.wooticket.length==0" ion-button class="tix" (click)="detailPage(events.ID);">GET TIX</button>\n              </div>\n              \n           \n          </div>\n\n        </div>\n        </ion-item>\n      </ion-list>\n\n       <ion-infinite-scroll *ngIf="hasMoreData" (ionInfinite)="doInfinite($event)">\n          <ion-infinite-scroll-content\n            loadingText="Loading" loadingSpinner="dots"></ion-infinite-scroll-content>\n       </ion-infinite-scroll> -->\n      \n       <ion-list class="details"> \n         <ion-item *ngFor="let event of all_events">\n             <div *ngFor="let event1 of event">\n               <div >\n              <div (click)="detailPage(event1.ID);" class="pic"><img [src]=\'event1.Eventimage\' ></div>\n              <ion-card-content class="name">\n                 <h3>{{event1.EventStartDate| date:\'EE,MMM d,hh:mm a \'}}</h3>\n                 <h2 (click)="detailPage(event1.ID);">{{event1.post_title}} </h2>\n                 <span>{{event1.viewcount}} Views</span>\n                 <p ion-long-press [interval]="400" (onPressStart)="pressed(event1.vanueaddress)">{{event1.Eventvanue}}</p>\n              \n               </ion-card-content>\n               </div>\n       \n               <div class="hashtag likecomm">\n                 <div class="button_left">\n       \n                  <div class="heart_img" [hidden]="showlike==0">\n                    \n                        <object class="colorchange" *ngIf="event1.is_liked==0" (click)="poplike(event1.ID,1, $event)" data="assets/img/icn_heartactive.svg" type="image/svg+xml"  > \n                          \n                           <!-- <img class="img2" src="assets/img/icn_heartactive.svg" /> -->\n                         </object>   \n                \n                    <object *ngIf="event1.is_liked==1"  (click)="poplike(event1.ID,0, $event)" class="colorchange" data="assets/img/icn_heart.svg" type="image/svg+xml" >\n                         <!-- <img class="img2" src="assets/img/icn_heart.svg" /> -->\n                     </object>\n                  \n                    </div>\n       \n                       <button [hidden]="showlike==0" ion-button icon-left clear small class="icnb" (click)="shareInfo(event1.guid)">\n                           <ion-icon style="color:#444;" name="ios-paper-plane-outline"></ion-icon>\n                         </button>\n       \n                   <button ion-button clear small class="icn" *ngIf="event1.is_liked==0" (click)="poplike(event1.ID,1)" >\n                     <!-- <ion-icon style="padding: 0;" name="md-heart"></ion-icon> -->\n                     <!-- <img src="assets/img/icn_heart.svg" /> -->\n       \n                     <!-- <ng-include  src="\'assets/img/icn_heart.svg\'"></ng-include>  -->\n                    </button>\n                    <div  class="tag">\n                      <span class="hash" *ngIf="event1.catageories.length > 0" (click)="discover();"> \n                          <ng-container *ngFor="let event2 of event.catageories">\n                        #{{event2}}\n                      </ng-container>\n                      </span>\n                    </div>\n                    <div class="rightbutton">\n                      <button *ngIf ="event1?.rsvpticket?.length > 0 || event1?.wooticket?.length > 0" ion-button class="tix" (click)="detailPage(event1.ID);">GET TIX</button>\n                  </div>\n                  \n                 </div>\n               </div>\n            \n              </div>\n       \n           </ion-item>\n         </ion-list>\n       \n</ion-content>\n'/*ion-inline-end:"/Volumes/D/customer/src/pages/getevents/getevents.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["n" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["q" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_4__providers_customer_customer__["a" /* CustomerProvider */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_native_social_sharing__["a" /* SocialSharing */],
        __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["j" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["k" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["a" /* ActionSheetController */],
        __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["d" /* Events */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */],
        __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["o" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_8__ionic_native_clipboard__["a" /* Clipboard */],
        __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["l" /* Nav */]])
], GeteventsPage);

//# sourceMappingURL=getevents.js.map

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddticketPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_add__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_customer_customer__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_sqlite__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AddticketPage = (function () {
    function AddticketPage(navCtrl, navParams, events, customer, toastCtrl, http, datepipe, sqlite, platform) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
        this.customer = customer;
        this.toastCtrl = toastCtrl;
        this.http = http;
        this.datepipe = datepipe;
        this.sqlite = sqlite;
        this.platform = platform;
        this.itemss = [];
        this.username = '';
        this.data = {
            post_title: '',
            post_description: '',
            stock: '',
            price: '',
            startdate: '',
            enddate: ''
        };
        this.platform.ready().then(function () {
            _this.database = new __WEBPACK_IMPORTED_MODULE_7__ionic_native_sqlite__["a" /* SQLite */]();
            _this.databasequery = _this.database.create({
                name: 'data.db',
                location: 'default'
            });
            _this.setenddate();
        });
    }
    AddticketPage.prototype.setenddate = function () {
        var _this = this;
        var date = new Date();
        this.data.startdate = this.datepipe.transform(date, 'y-MM-ddTH:mm');
        this.databasequery.then(function (db) {
            db.executeSql("SELECT * FROM userdata1", {}).then(function (dataa) {
                console.log(dataa.rows.item);
                if (dataa.rows.length > 0) {
                    for (var i = 0; i < dataa.rows.length; i++) {
                        //               alert(dataa.rows.item(i).eventenddate)
                        _this.data.enddate = dataa.rows.item(i).eventenddate;
                    }
                }
            }, function (error) {
                console.log("ERROR: " + JSON.stringify(error));
            });
        });
    };
    AddticketPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    AddticketPage.prototype.saveticket = function () {
        var _this = this;
        if (this.data.post_title == "" || this.data.post_title == null || this.data.post_title == undefined) {
            var toast = this.toastCtrl.create({
                message: "Please fill the title above",
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
        }
        else if (this.data.post_description == "" || this.data.post_description == null || this.data.post_description == undefined) {
            var toast = this.toastCtrl.create({
                message: "Please fill the description above",
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
        }
        else if (this.data.stock == "" || this.data.stock == null || this.data.stock == undefined) {
            var toast = this.toastCtrl.create({
                message: "Please fill the stock field",
                duration: 3000,
                position: 'middle'
            });
            toast.present();
        }
        else if (this.data.price == "" || this.data.price == null || this.data.price == undefined) {
            var toast = this.toastCtrl.create({
                message: "Please fill the price above",
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
        }
        else if (this.data.startdate == "" || this.data.startdate == null || this.data.startdate == undefined) {
            var toast = this.toastCtrl.create({
                message: "Please fill the start date above",
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
        }
        else if (this.data.enddate == "" || this.data.enddate == null || this.data.enddate == undefined) {
            var toast = this.toastCtrl.create({
                message: "Please fill the end date above",
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
        }
        else if (parseInt(this.data.price) < 0) {
            var toast = this.toastCtrl.create({
                message: "Please fill the correct price above",
                duration: 4000,
                position: 'bottom'
            });
            toast.present();
        }
        else {
            console.log(this.data);
            var d = __WEBPACK_IMPORTED_MODULE_5_moment__(this.data.enddate).diff(this.data.startdate, 'days');
            console.log(d);
            if (d < 0) {
                var toast = this.toastCtrl.create({
                    message: "Please check the Dates specified",
                    duration: 5000,
                    position: 'bottom'
                });
                toast.present();
            }
            else {
                // this.itemss.push(this.data);
                // this.events.publish('tickets', this.itemss);
                this.databasequery.then(function (db) {
                    db.executeSql('CREATE TABLE IF NOT EXISTS userdata(id INTEGER PRIMARY KEY AUTOINCREMENT,post_title TEXT,post_description TEXT ,stock INTEGER,price INTEGER,startdate TEXT,enddate TEXT)', {})
                        .then(function (create) {
                        console.log(create);
                        //alert(this.data.post_title+"//"+this.data.post_description+"//"+this.data.stock+ "//"+this.data.price+"//"+this.data.startdate+"//"+this.data.enddate)
                        db.executeSql("INSERT INTO userdata (post_title,post_description,stock,price,startdate,enddate) VALUES ('" + _this.data.post_title + "', '" + _this.data.post_description + "', '" + _this.data.stock + "', '" + _this.data.price + "', '" + _this.data.startdate + "', '" + _this.data.enddate + "')", {})
                            .then(function (inserted) {
                            db.executeSql("SELECT * FROM userdata", {}).then(function (dataa) {
                                //console.log(data.rows.item[0])
                            }).catch(function (error) {
                                console.log("error2");
                                console.log(error);
                                var toast = _this.toastCtrl.create({
                                    message: "The details of ticket are saved",
                                    duration: 5000,
                                    position: 'bottom'
                                });
                                toast.present();
                                var date = new Date();
                                var newdate = _this.datepipe.transform(date, 'y-MM-ddTH:mm');
                                _this.data = {
                                    post_title: '',
                                    post_description: '',
                                    stock: '',
                                    price: '',
                                    startdate: newdate,
                                    enddate: ''
                                };
                            });
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__add_add__["a" /* AddPage */], {}, { animate: false });
                        }).catch(function (error) {
                            console.log("error1");
                            console.log(error);
                        });
                    })
                        .catch(function (error) {
                        console.log("error0");
                        console.log(error);
                    });
                });
            }
        }
    };
    AddticketPage.prototype.previous = function () {
        this.navCtrl.pop();
    };
    AddticketPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddticketPage');
    };
    return AddticketPage;
}());
AddticketPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-addticket',template:/*ion-inline-start:"/Volumes/D/customer/src/pages/addticket/addticket.html"*/'<ion-header>\n  \n    <ion-navbar>\n        <ion-buttons start left  primary class= "action">\n        <button ion-button color="black" clear (click)="previous();">\n          Cancel \n        </button>\n        </ion-buttons>\n      <ion-title>Create Ticket</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content  style="background: #fafafa;">\n      <h3 class="heading">Add event ticket</h3>\n      <ion-list class="location">\n  \n          <ion-item>\n            <ion-input type="text" placeholder="Ticket Name" [(ngModel)]="data.post_title" name= "post_title"></ion-input>\n          </ion-item>\n        \n          <ion-item>\n            <ion-input type="text" placeholder="Description" [(ngModel)]="data.post_description" name= "post_description"></ion-input>\n          </ion-item>\n  \n          <ion-item>\n            <ion-input type="number" placeholder="Price" [(ngModel)]="data.price" name= "price"></ion-input>\n          </ion-item>\n          \n          <ion-item>\n            <ion-input type="number" placeholder="Stock" [(ngModel)]="data.stock" name= "stock"></ion-input>\n          </ion-item>\n\n           <div class="time">\n              <div class="lft">\n<!--                <h6>Starts</h6>-->\n                <span><ion-datetime displayFormat="MMM DD, YYYY HH:mm" [(ngModel)]="data.startdate" name= "startdate" max="{{data.enddate}}" min="{{data.startdate}}"  placeholder="Sales Start"></ion-datetime></span>\n              </div>\n              <div class="lft rt">\n<!--                <h6>Ends</h6>-->\n                <span><ion-datetime  displayFormat="MMM DD, YYYY HH:mm" [(ngModel)]="data.enddate" name= "enddate" max="{{data.enddate}}" min="{{data.startdate}}" placeholder="Sales End"></ion-datetime></span>\n              </div>\n            </div>\n  \n      </ion-list>\n  </ion-content>\n  \n  <ion-footer class="botom">\n      <ion-toolbar color="primary">\n          <ion-buttons>\n              <button ion-button icon-right color="royal" (click)="saveticket();">Save Tickets</button>\n            </ion-buttons>\n      </ion-toolbar>\n  </ion-footer>\n'/*ion-inline-end:"/Volumes/D/customer/src/pages/addticket/addticket.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
        __WEBPACK_IMPORTED_MODULE_3__providers_customer_customer__["a" /* CustomerProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_6__angular_common__["DatePipe"],
        __WEBPACK_IMPORTED_MODULE_7__ionic_native_sqlite__["a" /* SQLite */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */]])
], AddticketPage);

//# sourceMappingURL=addticket.js.map

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_customer_customer__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = (function () {
    function RegisterPage(navCtrl, navParams, alertCtrl, customer, loadingCtrl, toastCtrl, http, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.customer = customer;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.http = http;
        this.formBuilder = formBuilder;
        this.submitted = false;
        this.data = '';
        this.Loader = this.loadingCtrl.create({
            content: 'Please wait...',
            dismissOnPageChange: true,
        });
    }
    RegisterPage.prototype.onSubmit = function () { this.submitted = true; };
    RegisterPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    RegisterPage.prototype.register = function (data) {
        var _this = this;
        if (data.value.password == undefined || data.value.cpassword == undefined || data.value.email == undefined || data.value.fname == undefined) {
            alert("All fields required");
        }
        else {
            var loading = this.loadingCtrl.create({
                spinner: 'bubbles',
                showBackdrop: false,
                cssClass: 'loader'
            });
            console.log(data.value);
            if (data.value.password != data.value.cpassword) {
                var alert1 = this.alertCtrl.create({
                    title: 'Error ',
                    subTitle: 'Passwords must match.',
                    buttons: ['Try Again']
                });
                alert1.present();
            }
            else {
                console.log(data);
                loading.present();
                var postdata = {
                    getit: "add_user",
                    username: data.value.fname,
                    email: data.value.email,
                    password: data.value.password
                };
                var serialized_all = this.serializeObj(postdata);
                var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
                var options = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["d" /* RequestOptions */]({ headers: headers });
                this.http.post(this.customer.base_url + 'user.php', serialized_all, options)
                    .map(function (res) { return res.json(); })
                    .subscribe(function (response) {
                    console.log(response);
                    loading.dismissAll();
                    if (response.code == 1) {
                        localStorage.setItem('user_id', response.user_id);
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]).then(function () {
                            var index = _this.navCtrl.getActive().index;
                            _this.navCtrl.remove(0, index);
                        });
                    }
                    else if (response.error == "Sorry, that email address is already used!") {
                        console.log(response.error);
                        var toast = _this.toastCtrl.create({
                            message: response.error,
                            duration: 5000,
                            position: 'bottom'
                        });
                        toast.present();
                    }
                    else {
                        var toast = _this.toastCtrl.create({
                            message: response.error,
                            duration: 5000,
                            position: 'bottom'
                        });
                        toast.present();
                    }
                });
            }
        }
    };
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    // tabPage(){
    //     this.navCtrl.push(TabsPage);
    //   }
    RegisterPage.prototype.loginPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    return RegisterPage;
}());
RegisterPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-register',template:/*ion-inline-start:"/Volumes/D/customer/src/pages/register/register.html"*/'<div class="int_edt" style="background: url(assets/img/bg.jpg) no-repeat center fixed; \n  background-size: cover;">\n  <div class="logo logo_gap" (click)="loginPage();"><img src="assets/img/logo.png" /></div>\n\n  <form (ngSubmit)="onSubmit()" #heroForm="ngForm" style="padding:8px;">\n\n    <ion-list class="log">\n      <ion-item>\n        <ion-input type="text" placeholder="Username" [(ngModel)]="data.fname" name="fname" #fname="ngModel"  required></ion-input>\n      </ion-item>\n<div *ngIf="fname.errors && (fname.dirty || fname.touched)" class="alert alert-danger">\n       <div [hidden]="!fname.errors.required" class="alert alert-danger">\n          Username is required\n        </div>\n    </div>\n      <ion-item>\n        <ion-input type="email" placeholder="Email" [(ngModel)]="data.email" name="email" #email="ngModel"  required pattern=\'^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$\'></ion-input>\n      </ion-item>\n<div *ngIf="email.errors && (email.dirty || email.touched)" class="alert alert-danger">\n    <div [hidden]="!email.errors.required" class="alert alert-danger">\n         Email Address is required\n        </div>\n         <div [hidden]="!email.errors.pattern" class="alert alert-danger">\n 				 Enter a valid Email Address\n        </div>\n    </div>\n      <ion-item>\n        <ion-input type="password" placeholder="Password"[(ngModel)]="data.password" name="password" #password="ngModel"  required minlength="5" maxlength="15"></ion-input>\n      </ion-item>\n <div *ngIf="password.errors && (password.dirty || password.touched)" class="alert alert-danger">\n       <div [hidden]="!password.errors.required  " class="alert alert-danger">\n        Password is required\n        </div>\n    </div>\n      <ion-item>\n        <ion-input type="password" placeholder="Confirm Password" [(ngModel)]="data.cpassword" name="cpassword" #cpassword="ngModel"  required></ion-input>\n      </ion-item>\n      <!--<div *ngIf= *ngIf="cpassword.errors && (cpassword.mismatch|| cpassword.touched)" class="alert alert-danger">\n       <div [hidden]="!cpassword.errors.mismatch " class="alert alert-danger">\n         Confirm Password is mismatch\n        </div>\n    </div>-->\n<div *ngIf="cpassword.errors && (cpassword.dirty || cpassword.touched)" class="alert alert-danger">\n       <div [hidden]="!cpassword.errors.required  " class="alert alert-danger">\n         Confirm Password is required\n        </div>\n    </div>\n    </ion-list>\n    <button ion-button block class="submit" [disabled]="!heroForm.valid"  type="submit" (click)="register(heroForm)">SIGN UP</button>\n  </form>\n <button ion-button block clear class="submit" (click)="loginPage();" color="light" style="text-transform: unset;">Already have an account? SIGN IN</button>\n</div>'/*ion-inline-end:"/Volumes/D/customer/src/pages/register/register.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_4__providers_customer_customer__["a" /* CustomerProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormBuilder */]])
], RegisterPage);

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgetpwPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_customer_customer__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the ForgetpwPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ForgetpwPage = (function () {
    function ForgetpwPage(formBuilder, navCtrl, navParams, http, loadingCtrl, customer, toastCtrl) {
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.customer = customer;
        this.toastCtrl = toastCtrl;
        this.data = "";
        this.userdata = '';
    }
    ForgetpwPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ForgetpwPage');
    };
    ForgetpwPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    ForgetpwPage.prototype.forgot = function (data) {
        var _this = this;
        console.log(data.value);
        var loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            showBackdrop: false,
            cssClass: 'loader'
        });
        loading.present();
        var postdata = {
            getit: "lostpw",
            user_login: data.value.email,
        };
        var serialized_all = this.serializeObj(postdata);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.http.post(this.customer.base_url + 'user.php', serialized_all, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log(data);
            // alert("babita");
            //alert(data);
            loading.dismissAll();
            var toast = _this.toastCtrl.create({
                message: data.msg,
                duration: 5000,
                position: 'bottom'
            });
            toast.present();
        });
    };
    return ForgetpwPage;
}());
ForgetpwPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-forgetpw',template:/*ion-inline-start:"/Volumes/D/customer/src/pages/forgetpw/forgetpw.html"*/'<ion-header>\n    \n      <ion-navbar>\n        <ion-title></ion-title>\n      </ion-navbar>\n    \n    </ion-header>\n    \n    \n    <ion-content class="int_edt" style="background: url(assets/img/bg.jpg) no-repeat center fixed; \n      background-size: cover;">\n     <div class="logo"><img src="assets/img/logo.png" /></div>\n    \n    \n    \n     <form  #changeForm="ngForm" style="float:left;width:100%;padding:16px;">\n    \n      <ion-list class="log">\n         <!--<ion-item>\n        <ion-input type="email" placeholder="Email" [(ngModel)]="data.email" name="email" #email="ngModel"  required pattern=\'^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$\'></ion-input>\n      </ion-item>\n<div *ngIf="email.errors && (email.dirty || email.touched)" class="alert alert-danger">\n    <div [hidden]="!email.errors.required" class="alert alert-danger">\n         Email Address is required\n        </div>-->\n        <ion-item>\n          <ion-input type="email" placeholder="Email"  [(ngModel)]="data.email" name="email" #email="ngModel"  required></ion-input>\n        </ion-item>\n        <div *ngIf="email.errors && (email.dirty || email.touched)" class="alert alert-danger">\n           <div [hidden]="!email.errors.required  " class="alert alert-danger">\n         Email is required\n            </div>\n        </div>\n      \n      </ion-list>\n      <button [disabled]="!changeForm.valid" ion-button full class="submit" type="submit" (ngSubmit)="forgot(changeForm)">Submit</button>\n     </form>\n    \n    </ion-content>\n\n'/*ion-inline-end:"/Volumes/D/customer/src/pages/forgetpw/forgetpw.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_5__providers_customer_customer__["a" /* CustomerProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */]])
], ForgetpwPage);

//# sourceMappingURL=forgetpw.js.map

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreatenewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_customer_customer__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__edit_edit__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CreatenewPage = (function () {
    // public Loader=this.loadingCtrl.create({
    // content: 'Please wait...',
    // dismissOnPageChange: true,
    // });
    function CreatenewPage(navCtrl, navParams, alertCtrl, customer, loadingCtrl, http, formBuilder, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.customer = customer;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.formBuilder = formBuilder;
        this.toastCtrl = toastCtrl;
        this.submitted = false;
        this.data = {
            email: ''
        };
        this.mail1();
        //  alert(this.navParams.get("email"))
    }
    CreatenewPage.prototype.onSubmit = function () { this.submitted = true; };
    CreatenewPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    CreatenewPage.prototype.mail1 = function () {
        this.data.email = this.navParams.get('email');
    };
    CreatenewPage.prototype.login = function (data) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            showBackdrop: false,
            cssClass: 'loader'
        });
        loading.present();
        var postdata1 = {
            username: data.value.username,
            last_name: data.value.lastname,
            getit: "add_user",
            password: data.value.password,
            email: data.value.email
        };
        console.log(postdata1);
        this.name = data.value.username + " " + data.value.lastname;
        console.log(this.name);
        var serialized_all = this.serializeObj(postdata1);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.http.post(this.customer.base_url + 'user.php', serialized_all, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            loading.dismiss();
            console.log(data);
            if (parseInt(data.code) == 0) {
                var toast = _this.toastCtrl.create({
                    message: data.error.toUpperCase(),
                    duration: 5000,
                    position: 'bottom'
                });
                toast.present();
            }
            else if (parseInt(data.code) == 1) {
                localStorage.setItem('user_id', data.user_id);
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__edit_edit__["a" /* EditPage */], { name: _this.name }, { animate: false });
            }
            //   if (data.errors != undefined) {
            //     for (var i in data.errors) {
            //       var errmsg=i.split('_');
            //        var toast = this.toastCtrl.create({
            //       message: errmsg[0].toUpperCase()+" "+errmsg[1].toUpperCase(),
            //       duration: 5000,
            //       position: 'bottom'
            //     });
            //     toast.present();
            //     }
            //   }  else if(data.roles[0]=="administrator") {
            //    console.log(data.roles[0]=="administrator")
            //  } else{
            //    console.log("user")
            //    localStorage.setItem('user_id', data.data.ID);
            //   this.navCtrl.push(TabsPage).then(() => {
            //     const index = this.navCtrl.getActive().index;
            //     this.navCtrl.remove(0, index);
            //   }); 
            //  }
            // localStorage.setItem('user_id',data.user_id);
            // this.navCtrl.push(EditPage,{name:this.name},{animate: false});
        });
    };
    CreatenewPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CreatenewPage');
    };
    return CreatenewPage;
}());
CreatenewPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-createnew',template:/*ion-inline-start:"/Volumes/D/customer/src/pages/createnew/createnew.html"*/'\n<div class="int_edt" style="background: #232123;width:100%;float:left;height:100%;">\n  <div class="logo" (click)="loginPage();"><img src="assets/img/logoc.png" /></div>\n  \n  <p class="line" color="primary">Create new account</p>\n\n<form padding (ngSubmit)="login(heroForm)" #heroForm="ngForm">\n\n  <ion-list class="log">\n   \n    <ion-item>\n      <ion-label>Email</ion-label>\n      <ion-input type="text" placeholder="Enter Email" [(ngModel)]="data.email" name="email" #email="ngModel" [readonly]="true" required ></ion-input>\n    </ion-item>\n    <!-- <div *ngIf="email.errors && (email.dirty || email.touched)" class="alert alert-danger">\n    <div [hidden]="!email.errors.required" class="alert alert-danger">\n       Email Address is required\n      </div>\n       <div [hidden]="!email.errors.pattern" class="alert alert-danger">\n        Enter a valid Email Address\n      </div>\n  </div> -->\n  <ion-item class="lft">\n      <ion-label>First name</ion-label>\n      <ion-input type="text" placeholder="Enter Firstname" [(ngModel)]="data.username" name="username" #password="ngModel" required ></ion-input>\n  </ion-item>\n  <ion-item class="lft">\n      <ion-label>Last name</ion-label>\n      <ion-input type="text" placeholder="Enter Lastname" [(ngModel)]="data.lastname" name="lastname" #password="ngModel" required ></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label>Password</ion-label>\n    <ion-input type="password" placeholder="Enter Password" [(ngModel)]="data.password" name="password" #password="ngModel"  required></ion-input>\n  </ion-item>\n    <div *ngIf="password.errors && (password.dirty || password.touched)" class="alert alert-danger">\n    <div [hidden]="!password.errors.required  " class="alert alert-danger">\n      Password is required\n    </div>\n  </div>\n</ion-list>\n\n<p class="terms">By signing up, I agree to OutBuzz\'s <span>terms of service</span>,<span>privacy policy</span>, and <span>community guidelines</span>.</p>\n\n<button ion-button block class="submit"  [disabled]="!heroForm.valid">SIGN UP</button>\n \n</form>\n \n</div>\n'/*ion-inline-end:"/Volumes/D/customer/src/pages/createnew/createnew.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_customer_customer__["a" /* CustomerProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */]])
], CreatenewPage);

//# sourceMappingURL=createnew.js.map

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_maps__ = __webpack_require__(416);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import {googlemaps} from 'googlemaps';

var LocationPage = (function () {
    function LocationPage(toastCtrl, navCtrl, geolocation, googleMaps, platform) {
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.geolocation = geolocation;
        this.googleMaps = googleMaps;
        this.platform = platform;
    }
    LocationPage.prototype.ngAfterViewInit = function () {
        console.log('hitted');
        this.loadMap();
    };
    LocationPage.prototype.loadMap = function () {
        var _this = this;
        var aa = this;
        this.geolocation.getCurrentPosition().then(function (resp) {
            // resp.coords.latitude
            // resp.coords.longitude
            console.log(resp);
            console.log(resp.coords.longitude);
            //  alert(resp.coords.latitude);
            //  alert(resp.coords.longitude);
            _this.latitude = resp.coords.latitude;
            _this.longitude = resp.coords.longitude;
            console.log(_this.latitude);
            var latLng = new google.maps.LatLng(_this.latitude, _this.longitude);
            var mapOptions = {
                center: latLng,
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
            };
            _this.map = new google.maps.Map(_this.mapElement.nativeElement, mapOptions);
            var marker = new google.maps.Marker({
                position: latLng,
                map: _this.map,
            });
            // var setDiv= new google.maps.setCompassEnabled({
            //   enabled: true,
            // })
            // domNode: any,
            // alert(this.latitude+'/'+this.longitude);
            console.log(_this.map);
        }).catch(function (error) {
            console.log('Error getting location', error);
            alert(error);
            var toast = aa.toastCtrl.create({
                message: 'Please on your location',
                duration: 3000,
                cssClass: 'toastCss',
                position: 'bottom',
            });
            toast.present();
            // this.diagnostic.switchToLocationSettings();
        });
    };
    LocationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LocationPage');
    };
    return LocationPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('map'),
    __metadata("design:type", Object)
], LocationPage.prototype, "mapElement", void 0);
LocationPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-location',template:/*ion-inline-start:"/Volumes/D/customer/src/pages/location/location.html"*/'<!--\n  Generated template for the LocationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>location</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n   <h2>LOCATION</h2>\n <div #map id="map" style="height:250px;position: initial;float:left;width:100%;"></div>\n  <ion-list style="margin: 0px 0 13px; padding: 0px 0;">\n  <ion-item style="min-height:100%;">\n   \n   \n </ion-item>\n</ion-list>\n\n  \n</ion-content>\n'/*ion-inline-end:"/Volumes/D/customer/src/pages/location/location.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_maps__["a" /* GoogleMaps */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */]])
], LocationPage);

//# sourceMappingURL=location.js.map

/***/ }),

/***/ 147:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 147;

/***/ }),

/***/ 189:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add/add.module": [
		468,
		22
	],
	"../pages/addticket/addticket.module": [
		469,
		21
	],
	"../pages/allevents/allevents.module": [
		471,
		20
	],
	"../pages/billingmodal/billingmodal.module": [
		461,
		19
	],
	"../pages/cardmodal/cardmodal.module": [
		462,
		18
	],
	"../pages/categoryevent/categoryevent.module": [
		478,
		17
	],
	"../pages/createnew/createnew.module": [
		481,
		16
	],
	"../pages/detail/detail.module": [
		476,
		15
	],
	"../pages/edit/edit.module": [
		473,
		14
	],
	"../pages/editpage/editpage.module": [
		470,
		13
	],
	"../pages/forgetpw/forgetpw.module": [
		480,
		12
	],
	"../pages/getevents/getevents.module": [
		477,
		11
	],
	"../pages/intro/intro.module": [
		483,
		10
	],
	"../pages/loc/loc.module": [
		466,
		9
	],
	"../pages/location/location.module": [
		467,
		8
	],
	"../pages/login/login.module": [
		482,
		7
	],
	"../pages/password/password.module": [
		472,
		6
	],
	"../pages/purchase/purchase.module": [
		475,
		5
	],
	"../pages/register/register.module": [
		479,
		4
	],
	"../pages/scan/scan.module": [
		474,
		3
	],
	"../pages/selectlocation/selectlocation.module": [
		465,
		2
	],
	"../pages/settings/settings.module": [
		464,
		1
	],
	"../pages/signup/signup.module": [
		463,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 189;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_customer_customer__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_social_sharing__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__purchase_purchase__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__signup_signup__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__producer_producer__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_clipboard__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var DetailPage = DetailPage_1 = (function () {
    function DetailPage(navCtrl, navParams, customer, toastCtrl, http, nav, socialSharing, geolocation, loadingCtrl, actionSheetCtrl, clipboard) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.customer = customer;
        this.toastCtrl = toastCtrl;
        this.http = http;
        this.nav = nav;
        this.socialSharing = socialSharing;
        this.geolocation = geolocation;
        this.loadingCtrl = loadingCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.clipboard = clipboard;
        this.vendordata = [];
        this.showmore = "180px";
        this.showmoremorepos = "absolute";
        this.readles = 1;
        this.details = [];
        this.lats = [];
        this.vendor = [];
        this.detailsss = [];
        this.setview();
        // this.getlocations()
        // this.counter=0;
        // alert('entered detail page')
        if (localStorage.getItem('user_id') == null) {
            this.bit = 0;
        }
        else {
            this.bit = 1;
        }
    }
    DetailPage.prototype.doRefresh = function (refresher) {
        console.log('Begin async operation', refresher);
        this.setview();
        this.detail();
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    DetailPage.prototype.setview = function () {
        var postsss = {
            post_id: this.navParams.get('event_id'),
            getit: "update_views"
        };
        console.log(postsss);
        var serialized_all = this.serializeObj(postsss);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.http.post(this.customer.base_url + 'ticket.php', serialized_all, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (dataa) {
            console.log(dataa);
        });
    };
    DetailPage.prototype.readmore = function () {
        this.showmore = "";
        this.showmoremorepos = "";
        this.readles = 0;
    };
    DetailPage.prototype.readless = function () {
        this.showmore = "120px";
        this.showmoremorepos = "absolute";
        this.readles = 1;
    };
    DetailPage.prototype.ionViewDidLoad = function () {
        this.detail();
        console.log('ionViewDidLoad DetailPage');
    };
    // bit = 0;
    DetailPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    DetailPage.prototype.ngOnInit = function () {
        this.acService = new google.maps.places.AutocompleteService();
        this.geocoder = new google.maps.Geocoder();
        this.autocompleteItems = [];
        this.autocomplete = {
            query: ''
        };
    };
    DetailPage.prototype.getlocations = function (lat, lng) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        //  headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        // let options = new RequestOptions({ headers: headers });
        var aa = this;
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.geolocation.getCurrentPosition().then(function (resp) {
            _this.currentLatitude = resp.coords.latitude;
            _this.currentLongitude = resp.coords.longitude;
            console.log(_this.currentLatitude);
            console.log(_this.currentLongitude);
            localStorage.setItem('lat1', _this.currentLatitude);
            localStorage.setItem('lon1', _this.currentLongitude);
            console.log(localStorage.getItem('lon1'));
            console.log(localStorage.getItem('lat1'));
            var latLng = new google.maps.LatLng(lat, lng);
            _this.geocoder.geocode({ 'latLng': latLng }, (function (results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    if (results[1]) {
                        _this.autocomplete.query = results[1].formatted_address;
                    }
                }
            }));
            var mapOptions = {
                center: latLng,
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                // gestureHandling: 'none',
                draggable: false,
                zoomControl: false,
                scrollwheel: false
            };
            _this.map = new google.maps.Map(aa.mapElement.nativeElement, mapOptions);
            var marker = new google.maps.Marker({
                position: latLng,
                draggable: false,
                map: _this.map,
                icon: 'assets/icon/pin.png',
            });
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
        var watch = this.geolocation.watchPosition();
        watch.subscribe(function (data) {
        });
        if (this.currentLongitude) {
            return this.LatLong = (this.currentLatitude, this.currentLongitude);
        }
    };
    DetailPage.prototype.getdistance = function (lat1, lon1, lat2, lon2, unit) {
        var radlat1 = Math.PI * lat1 / 180;
        var radlat2 = Math.PI * lat2 / 180;
        var theta = lon1 - lon2;
        var radtheta = Math.PI * theta / 180;
        var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
        dist = Math.acos(dist);
        dist = dist * 180 / Math.PI;
        dist = dist * 60 * 1.1515;
        if (unit == "K") {
            dist = dist * 1.609344;
        }
        if (unit == "N") {
            dist = dist * 0.8684;
        }
        var a = Math.round(dist);
        console.log(a);
        return a;
    };
    DetailPage.prototype.detail = function () {
        var _this = this;
        this.details = [];
        this.detailsss = [];
        var loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            showBackdrop: false,
            cssClass: 'loader'
        });
        loading.present();
        var aa = this;
        var postdata1 = {
            user_id: localStorage.getItem('user_id'),
            event_id: this.navParams.get('event_id'),
            getit: "event_detail",
        };
        console.log(postdata1);
        this.ID = this.navParams.get('event_id');
        var serialized_all = this.serializeObj(postdata1);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.http.post(this.customer.base_url + 'user.php', serialized_all, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (dataa) {
            console.log(dataa);
            loading.dismiss();
            _this.vendor = dataa.vendordata.image;
            _this.latitude = localStorage.getItem('lat1');
            _this.longitude = localStorage.getItem('lon1');
            _this.arr = dataa.vendordata;
            //  this.arr2=dataa.vendordata.meta.first_name[0];
            if (dataa.vendordata.vendorinfo != false) {
                _this.name = dataa.vendordata.vendorinfo.data.display_name;
            }
            for (var _i = 0, _a = dataa.data; _i < _a.length; _i++) {
                var data3 = _a[_i];
                if (data3.post_content.length < 100) {
                    _this.hidebutton = 1;
                }
                else {
                    _this.hidebutton = 0;
                }
                _this.details.push({
                    Eventimage: data3.Eventimage,
                    post_title: data3.post_title,
                    viewcount: data3.viewcount,
                    Eventvanue: data3.Eventvanue,
                    EventEndDate: data3.EventEndDate,
                    EventStartDate: data3.EventStartDate,
                    catageories: data3.catageories[0],
                    catageoriess: data3.catageories[1],
                    vanueaddress: data3.vanueaddress,
                    post_content: data3.post_content,
                    is_liked: data3.is_liked,
                    ID: data3.ID,
                    rsvpticket: data3.rsvpticket,
                    wooticket: data3.wooticket,
                });
                // console.log(this.counter + 'dat size'+ data3.post_content.length)
                // for(let i= this.counter+1 ; i< data3.post_content.length ;i++)
                // {
                // this.content.push(data3.post_content[i]);
                // if(i%10==0) {
                //   break;
                // }
                // else {
                //   this.counter+=10;
                // }
                // }
                _this.getlocations(data3.vanuelat, data3.vanuelng);
                _this.vanuelat = data3.vanuelat;
                _this.vanuelng = data3.vanuelng;
                console.log(_this.latitude, _this.longitude, data3.vanuelat, data3.vanuelng);
                _this.unit = true;
                var distance = _this.getdistance(_this.latitude, _this.longitude, data3.vanuelat, data3.vanuelng, 'K');
                _this.dis = distance + "KM";
            }
            console.log(_this.details);
            _this.liveevent = 0;
            for (var _b = 0, _c = dataa.upcomming; _b < _c.length; _b++) {
                var dataas = _c[_b];
                _this.detailsss.push({
                    "Eventimage": dataas.Eventimage,
                    "post_title": dataas.post_title,
                    "viewcount": dataas.viewcount,
                    "Eventvanue": dataas.Eventvanue,
                    "EventEndDate": dataas.EventEndDate,
                    "EventStartDate": dataas.EventStartDate,
                    "vanueaddress": dataas.vanueaddress,
                    "post_content": dataas.post_content,
                    "userticketcount": dataas.userticketcount,
                    "ID": dataas.ID
                });
                var datef = new Date();
                console.log('end date' + dataas.EventEndDate);
                console.log('start date' + dataas.EventStartDate);
                var d = __WEBPACK_IMPORTED_MODULE_9_moment__(dataas.EventEndDate).diff(datef, 'days');
                console.log(d);
                var d1 = __WEBPACK_IMPORTED_MODULE_9_moment__(datef).diff(dataas.EventStartDate, 'days');
                console.log(d1);
                if (d1 > 0 && d > 0) {
                    _this.liveevent = _this.liveevent + 1;
                    console.log(_this.liveevent);
                }
            }
            _this.length = _this.liveevent;
            //     var end=new Date(dataas.EventEndDate);
            //     var start= new Date(dataas.EventStartDate);
            //     console.log(new Date)
            //     console.log(end)
            //     console.log(start)
            //     var totalLiveEvents = [];
            //     var totalUpcomingEvents = [];
            //     if(start < datef && end> datef)
            //     {
            //      console.log("correct")
            //      totalLiveEvents.push(dataas)
            //     }
            //   console.log(this.detailsss);
            //  console.log(totalLiveEvents);
            //   console.log(totalLiveEvents.length);
            //   this.length=totalLiveEvents.length;
            // this.getdistance(this.currentLatitude,this.currentLongitude, dataa.data.vanuelat, dataa.data.vanuelng, dataa.units);
        });
    };
    DetailPage.prototype.toggledis = function () {
        this.unit = !this.unit;
        if (this.unit == true) {
            var distances = this.getdistance(this.latitude, this.longitude, this.vanuelat, this.vanuelng, 'N');
            this.dis = distances + "MI";
        }
        else {
            var distances = this.getdistance(this.latitude, this.longitude, this.vanuelat, this.vanuelng, 'K');
            this.dis = distances + "KM";
        }
    };
    DetailPage.prototype.poplike = function (post_id, status) {
        if (parseInt(this.details[0].ID) == parseInt(post_id)) {
            this.details[0].is_liked = status;
        }
        var postdata1 = {
            user_id: localStorage.getItem('user_id'),
            post_id: post_id,
            getit: "pstlike",
            status: status,
        };
        var serialized_all = this.serializeObj(postdata1);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.http.post(this.customer.base_url + 'user.php', serialized_all, options).map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log(data);
        });
    };
    DetailPage.prototype.shareInfo = function (guid) {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            buttons: [
                {
                    text: 'Share to Facebook',
                    handler: function () {
                        _this.socialSharing.shareViaFacebook('message', null, 'http://www.google.com').then(function () {
                            var toast = _this.toastCtrl.create({
                                message: "Shared to facebook",
                                duration: 5000,
                                position: 'bottom'
                            });
                            toast.present();
                        }).catch(function () {
                            // alert(JSON.stringify(err))
                            var toast = _this.toastCtrl.create({
                                message: "Not able to Share to facebook",
                                duration: 5000,
                                position: 'bottom'
                            });
                            toast.present();
                        });
                    }
                },
                {
                    text: 'Share to Messenger',
                    handler: function () {
                        _this.socialSharing.shareViaFacebook('message', null, 'http://www.google.com').then(function () {
                            var toast = _this.toastCtrl.create({
                                message: "Shared to Messenger",
                                duration: 5000,
                                position: 'bottom'
                            });
                            toast.present();
                        }).catch(function () {
                            var toast = _this.toastCtrl.create({
                                message: "Not able to share to messenger",
                                duration: 5000,
                                position: 'bottom'
                            });
                            toast.present();
                        });
                    }
                },
                {
                    text: 'Share to Whatsapp',
                    handler: function () {
                        _this.socialSharing.shareViaWhatsApp('message', null, 'http://www.google.com').then(function () {
                            var toast = _this.toastCtrl.create({
                                message: "Shared to Whatsapp",
                                duration: 5000,
                                position: 'bottom'
                            });
                            toast.present();
                        }).catch(function () {
                            var toast = _this.toastCtrl.create({
                                message: "Not able to share to whatsapp",
                                duration: 5000,
                                position: 'bottom'
                            });
                            toast.present();
                        });
                    }
                },
                {
                    text: 'Tweet',
                    handler: function () {
                        _this.socialSharing.shareViaTwitter('Hey gurl! Check out this amazing app and join this amazing event!', null, 'http://www.google.com').then(function () {
                            var toast = _this.toastCtrl.create({
                                message: "Shared to Twitter",
                                duration: 5000,
                                position: 'bottom'
                            });
                            toast.present();
                        }).catch(function () {
                            var toast = _this.toastCtrl.create({
                                message: "Not able to share to twitter",
                                duration: 5000,
                                position: 'bottom'
                            });
                            toast.present();
                        });
                    }
                },
                {
                    text: 'Copy Event Link',
                    handler: function () {
                        _this.clipboard.copy(guid);
                        var toast = _this.toastCtrl.create({
                            message: "link copied",
                            duration: 3000,
                            position: 'bottom'
                        });
                        toast.present();
                    }
                },
                {
                    text: 'Email Event',
                    handler: function () {
                        _this.socialSharing.shareViaEmail('Body', 'Subject', ['recipient@example.org']).then(function () {
                        }).catch(function () {
                        });
                        console.log('Archive clicked');
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    DetailPage.prototype.ticket = function (id) {
        console.log(id);
        if (this.bit == 0) {
            //this.navCtrl.push(SignupPage,{}, {animate: false})
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_7__signup_signup__["a" /* SignupPage */]);
            this.nav.popToRoot();
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__purchase_purchase__["a" /* PurchasePage */], {
                event_id: id,
            }, { animate: false });
        }
    };
    DetailPage.prototype.producer = function (idd) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__producer_producer__["a" /* ProducerPage */], {
            ID: idd,
        }, { animate: false });
    };
    DetailPage.prototype.scan = function (iid) {
        this.navCtrl.push(DetailPage_1, {
            event_id: iid,
        }, { animate: false });
    };
    return DetailPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('map'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
], DetailPage.prototype, "mapElement", void 0);
DetailPage = DetailPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-detail',template:/*ion-inline-start:"/Volumes/D/customer/src/pages/detail/detail.html"*/'\n<ion-header style="background: rgba(0,0,0,0.3);">\n  \n    <ion-navbar>\n      <ion-title></ion-title>\n  \n      <ion-buttons end style="margin-right: 6px;">\n            <!-- <button ion-button icon-only *ngIf="details[0]?.is_liked==1" (click)="poplike(details[0]?.ID,0)">\n              <ion-icon style="color: #b76359;padding: 0;" name="heart"></ion-icon>\n            </button>\n             <button ion-button icon-only *ngIf="details[0]?.is_liked==0" (click)="poplike(details[0]?.ID,1)" >\n              <ion-icon style="padding: 0;" name="heart"></ion-icon>\n              </button> -->\n              <div class="heart_img" [hidden]="bit==0">\n                \n                 <div style="width: 38px; float: left;" *ngIf="details[0]?.is_liked==0" (click)="poplike(details[0]?.ID,1)"> \n                  <object class="colorchange" data="assets/img/icn_heartactive.svg" type="image/svg+xml" > \n               \n                <img class="img2" src="assets/img/icn_heartactive.svg" />\n              </object>\n                 </div>\n              <div style="width: 38px; float: left;" *ngIf="details[0]?.is_liked==1" (click)="poplike(details[0]?.ID,0)">\n              <object class="colorchange" data="assets/img/icn_heart.svg" type="image/svg+xml" >\n                \n                 <img class="img2" src="assets/img/icn_heart.svg" />\n               </object>\n              </div>\n              </div>\n      </ion-buttons>\n  \n        <ion-buttons end>\n            <button [hidden]="bit==0" ion-button icon-only (click)="shareInfo(guid)">\n              <ion-icon style="font-size: 32px;" name="ios-paper-plane-outline"></ion-icon>\n            </button>\n        </ion-buttons>\n  \n        </ion-navbar>\n  \n        <!-- <ion-toolbar no-padding>\n            <div class="even" *ngFor="let eventsss of details">\n              <img [src]=\'eventsss.Eventimage\'>\n              <div class="overlay"></div>\n            </div>\n          </ion-toolbar> -->\n  \n  </ion-header>\n  \n  <ion-content class="main main1">\n     <ion-refresher (ionRefresh)="doRefresh($event)">\n          <ion-refresher-content\n          pullingIcon="arrow-dropdown"\n          pullingText="Pull to refresh"\n          refreshingSpinner="circles"\n          refreshingText="Refreshing...">\n        </ion-refresher-content>\n      </ion-refresher>    \n      <div class="even" *ngFor="let eventsss of details">\n          <img [src]=\'eventsss.Eventimage\'>\n        </div>\n\n      <ion-card no-margin class="txt" *ngFor="let eventsss of details" >\n      <div class="card-title">{{eventsss.EventStartDate| date:\'EE,MMM d,hh:mm a \'}} - {{eventsss.EventEndDate| date:\'EE,MMM d,hh:mm a \'}}</div>\n      <div class="card-subtitle">{{eventsss.post_title}}</div>\n      <div class="sidebar-box black" [ngStyle]="{\'max-height\': showmore}">\n          <p [innerHTML]=\'eventsss.post_content\'>Malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n          <span class="read-more" [ngStyle]="{\'position\':showmoremorepos}"></span>\n          <!-- <div (click)="isCollapsed =! isCollapsed">Read more</div> -->\n        </div>\n        <button *ngIf="readles==1 && hidebutton==0" ion-button color="black" clear class="read" (click)="readmore();" >Read More</button>\n        <button *ngIf="readles==0 && hidebutton==0" ion-button color="black" clear class="read" (click)="readless();" >Read Less</button>\n      <!-- <p class="cnt" [innerHTML]=\'eventsss.post_content\'></p> -->\n  \n        <!--<div class="mp"><img src="assets/img/map.png" /></div>-->\n        <div *ngIf="eventsss?.vanueaddress!=null" #map class="mp" ></div>\n    </ion-card >\n    <ion-list  *ngFor="let eventsss of details" class="km">\n        <ion-item *ngIf="eventsss?.vanueaddress!=null">\n          <h2>{{eventsss.Eventvanue}}</h2>\n          <!-- <h3>{{eventsss.vanueaddress}} </h3> -->\n          <ion-note item-end="" class="note" (click)="toggledis()" >{{dis}}</ion-note>\n          <!--<ion-note item-end="" class="note"  *ngIf=\'bit == 1\' >{{dista}}MI</ion-note>-->\n        </ion-item>\n      </ion-list>\n  \n      <div class="production">\n        <!-- <div  *ngFor="let i of arr"> -->\n          <div class="pink"  width="100px;" [innerHTML]=\'vendor\' (click)="producer(arr.vendorinfo.ID);">\n              <!--<img width="100px;" src="assets/img/pink.png" />-->\n          </div>\n        <!-- </div> -->\n          <h3>{{name}}</h3>\n          <!-- <span>{{length}} Events</span>  -->\n        </div>\n        \n  <div class="upcom"  >\n    <h4>UPCOMING EVENTS</h4>\n  <ion-list class="events" *ngFor="let eventssss of detailsss">\n      <ion-item class="name" (click)="scan(eventssss.ID);">\n        <ion-thumbnail item-start>\n          <div class="image-container">\n          <img [src]=\'eventssss.Eventimage\'>\n        </div>\n        </ion-thumbnail>\n            <h3>{{eventssss.EventStartDate}} {{eventssss.viewcount}}</h3>\n            <h2>{{eventssss.post_title}}</h2>\n            <p>{{eventssss.Eventvanue}}</p>\n            <span class="ticket">{{eventssss.userticketcount}} Ticket</span>\n      </ion-item>\n    </ion-list>\n\n    <!-- <div class="event01" *ngFor="let eventssss of detailsss">\n      <div class="img_box" (click)="scan(eventssss.ID);">\n        <img [src]=\'eventssss.Eventimage\'>\n      </div>\n      <div class="content00">\n        <h3>{{eventssss.EventStartDate}} {{eventssss.viewcount}}</h3>\n        <h2>{{eventssss.post_title}}</h2>\n        <p>{{eventssss.Eventvanue}}</p>\n        <span class="ticket">{{eventssss.userticketcount}}</span>\n      </div>\n    </div> -->\n\n  </div>\n\n  <div style="height:8vh; float:left;width:100%;"></div>\n  \n  </ion-content>\n  <ion-footer>\n    <ion-toolbar style="background: #000;"  *ngIf="details[0]?.rsvpticket?.length > 0 || details[0]?.wooticket?.length > 0" >\n        <button  ion-button block color="primary" class="submit"(click)="ticket(ID)" style="box-shadow:none; background-color:#3979ed;">GET TICKETS</button>\n    </ion-toolbar>\n  </ion-footer>\n\n\n \n  '/*ion-inline-end:"/Volumes/D/customer/src/pages/detail/detail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_customer_customer__["a" /* CustomerProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Nav */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_social_sharing__["a" /* SocialSharing */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__["a" /* Geolocation */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
        __WEBPACK_IMPORTED_MODULE_10__ionic_native_clipboard__["a" /* Clipboard */]])
], DetailPage);

var DetailPage_1;
//# sourceMappingURL=detail.js.map

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detail_detail__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_customer_customer__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_social_sharing__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__about_about__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_clipboard__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__loc_loc__ = __webpack_require__(72);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var HomePage = (function () {
    function HomePage(toastCtrl, alertCtrl, customer, socialSharing, loadingCtrl, modalCtrl, http, navCtrl, nav, actionSheetCtrl, events, geolocation, platform, clipboard, app) {
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.customer = customer;
        this.socialSharing = socialSharing;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.http = http;
        this.navCtrl = navCtrl;
        this.nav = nav;
        this.actionSheetCtrl = actionSheetCtrl;
        this.events = events;
        this.geolocation = geolocation;
        this.platform = platform;
        this.clipboard = clipboard;
        this.app = app;
        this.pet = "up_event";
        this.slides = [this.pet];
        this.eventss = [];
        this.even = [];
        this.week = [];
        this.totalpages = 0;
        this.i = 0;
        this.hasMoreData = true;
        this.getevents(this.pet);
        this.getlocations();
    }
    HomePage.prototype.doRefresh = function (refresher) {
        console.log('Begin async operation', refresher);
        this.getevents(this.pet);
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    HomePage.prototype.ngOnInit = function () {
        this.acService = new google.maps.places.AutocompleteService();
        this.geocoder = new google.maps.Geocoder();
        this.autocompleteItems = [];
        this.autocomplete = {
            query: ''
        };
        if (localStorage.getItem('user_id') == null) {
            this.showlike = 0;
        }
        else {
            this.showlike = 1;
        }
    };
    HomePage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    // public names
    HomePage.prototype.getlocations = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.geolocation.getCurrentPosition().then(function (resp) {
            _this.currentLatitude = resp.coords.latitude;
            _this.currentLongitude = resp.coords.longitude;
            console.log(_this.currentLatitude);
            console.log(_this.currentLongitude);
            var latLng = new google.maps.LatLng(_this.currentLatitude, _this.currentLongitude);
            _this.geocoder.geocode({ 'latLng': latLng }, (function (results, status) {
                console.log(results);
                if (status == google.maps.GeocoderStatus.OK) {
                    if (results[1]) {
                        _this.autocomplete.query = results[1].address_components[2].long_name;
                        console.log(_this.autocomplete.query);
                        _this.type = _this.autocomplete.query;
                    }
                }
            }));
        }).catch(function (error) {
            console.log('hii');
            console.log('Error getting location', error);
        });
        var watch = this.geolocation.watchPosition();
        watch.subscribe(function (data) {
        });
    };
    HomePage.prototype.getevents = function (eventtype) {
        // alert(eventtype)
        this.eventss = [];
        console.log(eventtype);
        this.i = 0;
        this.event_type = eventtype;
        this.hasMoreData = true;
        this.fetchevents();
    };
    HomePage.prototype.fetchevents = function () {
        var _this = this;
        console.log(this.event_type);
        return new Promise(function (resolve) {
            var loading = _this.loadingCtrl.create({
                spinner: 'bubbles',
                showBackdrop: false,
                cssClass: 'loader'
            });
            loading.present();
            _this.geolocation.getCurrentPosition().then(function (resp) {
                _this.currentLatitude = resp.coords.latitude;
                _this.currentLongitude = resp.coords.longitude;
                _this.i++;
                var postdata1 = {
                    user_id: localStorage.getItem('user_id'),
                    page: _this.i,
                    getit: _this.event_type,
                    lat: _this.currentLatitude,
                    lng: _this.currentLongitude,
                };
                console.log(postdata1);
                console.log(_this.hasMoreData);
                var serialized_all = _this.serializeObj(postdata1);
                var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
                var options = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["d" /* RequestOptions */]({ headers: headers });
                _this.http.post(_this.customer.base_url + 'user.php', serialized_all, options)
                    .map(function (res) { return res.json(); })
                    .subscribe(function (data) {
                    loading.dismiss();
                    console.log(data);
                    if (data.data.length > 0) {
                        _this.totalpages = data.totalpages;
                        for (var even in data.data) {
                            console.log(data.data[even]);
                            // this.venueadd = data.data[even].vanueaddress
                            _this.eventss.push(data.data[even]);
                        }
                        resolve(true);
                        console.log(_this.eventss);
                    }
                });
            });
        }).catch(function (message) {
            var toast = _this.toastCtrl.create({
                message: "No events found at this time",
                duration: 4000,
                position: 'middle'
            });
            toast.present();
        });
    };
    HomePage.prototype.detailPage = function (id) {
        console.log(id);
        this.nav.push(__WEBPACK_IMPORTED_MODULE_2__detail_detail__["a" /* DetailPage */], { event_id: id }, { animate: false });
    };
    HomePage.prototype.poplike = function (post_id, status, event) {
        var _this = this;
        console.log(event);
        if (parseInt(status) == 1) {
            event.target.data = "assets/img/icn_heart.svg";
        }
        if (parseInt(status) == 0) {
            event.target.data = "assets/img/icn_heartactive.svg";
        }
        for (var b in this.eventss) {
            console.log(b);
            if (parseInt(this.eventss[b].ID) == parseInt(post_id)) {
                this.eventss[b].is_liked = status;
            }
        }
        var postdata1 = {
            user_id: localStorage.getItem('user_id'),
            post_id: post_id,
            getit: "pstlike",
            status: status,
        };
        var serialized_all = this.serializeObj(postdata1);
        var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.http.post(this.customer.base_url + 'user.php', serialized_all, options).map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log(data);
            if (data.code == 1) {
                var toast = _this.toastCtrl.create({
                    message: "Added to liked events",
                    duration: 3000,
                    position: 'bottom'
                });
                toast.present();
            }
        });
    };
    HomePage.prototype.swipeEvent = function (e) {
        if (e.direction == '2') {
            if (this.pet == "up_event") {
                this.pet = "weekendevents";
                this.getevents("weekendevents");
            }
            else if (this.pet == "pop_event") {
                this.pet = "up_event";
                this.getevents("up_event");
            }
        }
        else if (e.direction == '4') {
            if (this.pet == "up_event") {
                this.pet = "pop_event";
                this.getevents("pop_event");
            }
            else if (this.pet == "weekendevents") {
                this.pet = "up_event";
                this.getevents("up_event");
            }
        }
    };
    HomePage.prototype.shareInfo = function (guid) {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            buttons: [
                {
                    text: 'Share to Facebook',
                    handler: function () {
                        _this.socialSharing.shareViaFacebook('message', null, 'http://www.google.com').then(function () {
                            var toast = _this.toastCtrl.create({
                                message: "Shared to facebook",
                                duration: 5000,
                                position: 'bottom'
                            });
                            toast.present();
                        }).catch(function () {
                            var toast = _this.toastCtrl.create({
                                message: "Not able to Share to facebook",
                                duration: 5000,
                                position: 'bottom'
                            });
                            toast.present();
                        });
                    }
                },
                {
                    text: 'Share to Messenger',
                    handler: function () {
                        _this.socialSharing.shareViaFacebook('message', null, 'http://www.google.com').then(function () {
                            var toast = _this.toastCtrl.create({
                                message: "Shared to Messenger",
                                duration: 5000,
                                position: 'bottom'
                            });
                            toast.present();
                        }).catch(function () {
                            var toast = _this.toastCtrl.create({
                                message: "Not able to share to messenger",
                                duration: 5000,
                                position: 'bottom'
                            });
                            toast.present();
                        });
                    }
                },
                {
                    text: 'Share to Whatsapp',
                    handler: function () {
                        _this.socialSharing.shareViaWhatsApp('message', null, 'http://www.google.com').then(function () {
                            var toast = _this.toastCtrl.create({
                                message: "Shared to Whatsapp",
                                duration: 5000,
                                position: 'bottom'
                            });
                            toast.present();
                        }).catch(function () {
                            var toast = _this.toastCtrl.create({
                                message: "Not able to share to whatsapp",
                                duration: 5000,
                                position: 'bottom'
                            });
                            toast.present();
                        });
                    }
                },
                {
                    text: 'Tweet',
                    handler: function () {
                        _this.socialSharing.shareViaTwitter('Hey gurl! Check out this amazing app and join this amazing event!', null, 'http://www.google.com').then(function () {
                            var toast = _this.toastCtrl.create({
                                message: "Shared to Twitter",
                                duration: 5000,
                                position: 'bottom'
                            });
                            toast.present();
                        }).catch(function () {
                            var toast = _this.toastCtrl.create({
                                message: "Not able to share to twitter",
                                duration: 5000,
                                position: 'bottom'
                            });
                            toast.present();
                        });
                    }
                },
                {
                    text: 'Copy Event Link',
                    handler: function () {
                        _this.clipboard.copy(guid);
                        var toast = _this.toastCtrl.create({
                            message: "link copied",
                            duration: 3000,
                            position: 'bottom'
                        });
                        toast.present();
                    }
                },
                {
                    text: 'Email Event',
                    handler: function () {
                        _this.socialSharing.shareViaEmail(guid, 'Subject', ['recipient@example.org']).then(function () {
                        }).catch(function () {
                        });
                        console.log('Archive clicked');
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    // public doInfinite(infiniteScroll: any) {
    //   console.log(infiniteScroll)
    //   this.fetchevents().then(() => {
    //     console.log(this.totalpages + "//" + this.i)
    //     if (this.i >= this.totalpages) {
    //       this.hasMoreData = false;
    //     } else {
    //       this.hasMoreData = true;
    //       infiniteScroll.complete();
    //     }
    //   });
    // }
    HomePage.prototype.pressed = function (vanueaddress) {
        var alert = this.alertCtrl.create({
            title: vanueaddress,
            buttons: ['OK']
        });
        alert.present();
    };
    HomePage.prototype.discover = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__about_about__["a" /* AboutPage */], {}, { animate: false });
    };
    HomePage.prototype.direct = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__loc_loc__["a" /* LocPage */], {}, { animate: false });
    };
    return HomePage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('map'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
], HomePage.prototype, "mapElement", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('mySlider'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Slides */])
], HomePage.prototype, "slider", void 0);
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-home',template:/*ion-inline-start:"/Volumes/D/customer/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title><img width="120px" src="assets/img/logob.png" /></ion-title>\n  </ion-navbar>\n  <ion-toolbar class="new">\n    <h2 class="heads" (click)="direct();">{{type}}</h2>\n  </ion-toolbar>\n  <div class="seg">\n    <ion-segment [(ngModel)]="pet">\n      <ion-segment-button (click)="getevents(pet)" value="pop_event">\n        POPULAR\n      </ion-segment-button>\n      <ion-segment-button (click)="getevents(pet)" value="up_event">\n        UPCOMING\n      </ion-segment-button>\n      <ion-segment-button  (click)="getevents(pet)" value="weekendevents">\n        THIS WEEKEND\n      </ion-segment-button>\n    </ion-segment>\n  </div>\n</ion-header>\n\n<ion-content style="background: #f6f6f6;">\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n        <ion-refresher-content\n        pullingIcon="arrow-dropdown"\n        pullingText="Pull to refresh"\n        refreshingSpinner="circles"\n        refreshingText="Refreshing...">\n      </ion-refresher-content>\n   </ion-refresher>  \n\n <ion-list class="details" (swipe)="swipeEvent($event)"> \n  <ion-item *ngFor="let event of eventss">\n      <div>\n       <div (click)="detailPage(event.ID);" class="pic"><img [src]=\'event.Eventimage\' ></div>\n       <ion-card-content class="name" >\n          <h3>{{event.EventStartDate| date:\'EE,MMM d,hh:mm a \'}}</h3>\n          <h2 (click)="detailPage(event.ID);">{{event.post_title}} </h2>\n          <span>{{event.viewcount}} Views</span>\n          <p ion-long-press [interval]="400" (onPressStart)="pressed(event.vanueaddress)" (click)="direct();">{{event.Eventvanue}}</p>\n       </ion-card-content> \n       </div>\n\n        <div class="get_box">\n        <div class="hashtag likecomm">\n          <div class="button_left" >\n\n            <div class="heart_img" [hidden]="showlike==0">\n                <div style="width: 38px; float: left;" *ngIf="event.is_liked==0" (click)="poplike(event.ID,1, $event)" >\n                <object class="colorchange" data="assets/img/icn_heartactive.svg" type="image/svg+xml"  > \n                  \n                   <!-- <img class="img2" src="assets/img/icn_heartactive.svg" /> -->\n                 </object>   \n                </div>\n                 <div style="width: 38px; float: left;" *ngIf="event.is_liked==1"  (click)="poplike(event.ID,0, $event)">\n                <object  class="colorchange" data="assets/img/icn_heart.svg" type="image/svg+xml" >\n                 <!-- <img class="img2" src="assets/img/icn_heart.svg" /> -->\n                </object>\n                 </div>\n          \n            </div>\n       \n\n            <button [hidden]="showlike==0" ion-button icon-left clear small class="icnb" (click)="shareInfo(event.guid)">\n                    <ion-icon style="color:#444;" name="ios-paper-plane-outline"></ion-icon>\n                  </button>\n\n            <button ion-button clear small class="icn" *ngIf="event.is_liked==0" (click)="poplike(event.ID,1)" ></button>\n\n              <div  class="tag">\n                <span class="hash" *ngIf="event.catageories.length > 0" (click)="discover();"> \n                <ng-container *ngFor="let event1 of event.catageories">\n                  #{{event1}}\n                </ng-container>\n                </span>\n              </div>\n              <div class="rightbutton">\n                <button *ngIf ="event?.rsvpticket?.length > 0 || event?.wooticket?.length > 0" ion-button class="tix" (click)="detailPage(event.ID);">GET TIX</button>\n            </div>\n\n          </div>\n        </div>\n      \n\n        </div>\n\n    </ion-item>\n  \n  </ion-list>\n  <!-- <ion-infinite-scroll  *ngIf="pet == \'pop_event\' && hasMoreData" (ionInfinite)="doInfinite($event)" >\n    <ion-infinite-scroll-content\n      loadingText="Loading...." loadingSpinner="dots"></ion-infinite-scroll-content>\n </ion-infinite-scroll>\n\n <ion-infinite-scroll *ngIf="pet == \'up_event\' && hasMoreData" (ionInfinite)="doInfinite($event)">\n    <ion-infinite-scroll-content\n      loadingText="Loading" loadingSpinner="dots"></ion-infinite-scroll-content>\n </ion-infinite-scroll>\n <ion-infinite-scroll *ngIf="pet == \'weekendevents\' && hasMoreData" (ionInfinite)="doInfinite($event)">\n  <ion-infinite-scroll-content\n    loadingText="Loading" loadingSpinner="dots"></ion-infinite-scroll-content>\n</ion-infinite-scroll> -->\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/customer/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_4__providers_customer_customer__["a" /* CustomerProvider */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_native_social_sharing__["a" /* SocialSharing */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Nav */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_8__ionic_native_clipboard__["a" /* Clipboard */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BillingmodalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_customer_customer__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var BillingmodalPage = (function () {
    function BillingmodalPage(navCtrl, navParams, modalCtrl, viewCtrl, customer, http, toastCtrl, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.viewCtrl = viewCtrl;
        this.customer = customer;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.formBuilder = formBuilder;
        this.obkeys = Object.keys;
        this.data = {
            billing_first_name: '',
            billing_last_name: '',
            billing_address_1: '',
            billing_address_2: '',
            billing_city: '',
            billing_email: '',
            billing_postcode: '',
            billing_phone: '',
            billing_country: ''
        };
        this.billForm();
    }
    BillingmodalPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    BillingmodalPage.prototype.billForm = function () {
        var _this = this;
        var postdata1 = {
            user_id: localStorage.getItem('user_id'),
            getit: 'billing_address',
        };
        console.log(postdata1);
        var serialized_all = this.serializeObj(postdata1);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.http.post(this.customer.base_url + 'ticket.php', serialized_all, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (dataa) {
            _this.countries = dataa.countries;
            console.log(dataa);
            _this.data.billing_first_name = dataa.billing_details.billing_first_name;
            _this.data.billing_last_name = dataa.billing_details.billing_last_name;
            _this.data.billing_address_1 = dataa.billing_details.billing_address_1;
            _this.data.billing_address_2 = dataa.billing_details.billing_address_2;
            _this.data.billing_city = dataa.billing_details.billing_city;
            _this.data.billing_postcode = dataa.billing_details.billing_postcode;
            _this.data.billing_phone = dataa.billing_details.billing_phone;
            _this.data.billing_email = dataa.billing_details.billing_email;
            _this.data.billing_country = dataa.billing_details.billing_country;
        });
        console.log(this.data);
        console.log(this.billingData);
    };
    BillingmodalPage.prototype.updatedata = function (billdata) {
        var _this = this;
        console.log(billdata.value);
        billdata.value.user_id = localStorage.getItem('user_id');
        billdata.value.getit = 'update_billing';
        console.log(billdata.value);
        var serialized_all = this.serializeObj(billdata.value);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.http.post(this.customer.base_url + 'ticket.php', serialized_all, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (dataa) {
            console.log(dataa);
            var toast = _this.toastCtrl.create({
                message: dataa.msg,
                duration: 3000,
                position: 'middle',
            });
            toast.present();
        });
    };
    BillingmodalPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    BillingmodalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BillingmodalPage');
    };
    return BillingmodalPage;
}());
BillingmodalPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-billingmodal',template:/*ion-inline-start:"/Volumes/D/customer/src/pages/billingmodal/billingmodal.html"*/'\n<ion-header>\n  \n    <ion-navbar>\n      <ion-title>Billing Details</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content >\n     \n  <div class="form_box">\n      <form #billForm=\'ngForm\' (ngSubmit)="updatedata(billForm)">\n  \n          <ion-list>\n        <ion-grid style="padding:0px;">\n            <ion-row>\n              <ion-col col-6>\n                  <h4>First Name<span>*</span></h4>\n                  <ion-item>\n                      <ion-input type="text" value="" placeholder="First Name" [(ngModel)]="data.billing_first_name" name= "billing_first_name" required></ion-input>\n                    </ion-item>\n              </ion-col>\n              <ion-col col-6>\n                  <h4>Last Name<span>*</span></h4>\n                <ion-item>\n                  <ion-input type="text" placeholder="Last Name" [(ngModel)]="data.billing_last_name" name= "billing_last_name" required></ion-input>\n                </ion-item></ion-col>\n  \n                <ion-col col-12 >\n                    <h4>Country<span>*</span></h4>\n                    <ion-list style="margin-bottom:0px;"  >\n                        <ion-item  *ngIf="countries !=null">\n                          <ion-select [(ngModel)]="data.billing_country" name= "billing_country" #billing_country="ngModel" required>\n                            <ion-option *ngFor="let item of obkeys(countries)" [value]="item">{{countries[item]}}</ion-option>\n                           \n                          </ion-select>\n                        </ion-item>\n                      </ion-list>\n                </ion-col>\n  \n                <ion-col col-12>\n                    <h4>Address 1:<span>*</span></h4>\n                  <ion-item>\n                    <ion-input type="text" placeholder="Address 1" [(ngModel)]="data.billing_address_1 " name= "billing_address_1" required></ion-input>\n                  </ion-item></ion-col>\n  \n                  <ion-col col-12>\n                      <h4>Address 2:<span>*</span></h4>\n                    <ion-item>\n                      <ion-input type="text" placeholder="Address 2" [(ngModel)]="data.billing_address_2" name= "billing_address_2" required></ion-input>\n                    </ion-item></ion-col>\n  \n                  <ion-col col-12>\n                      <h4>City/Town<span>*</span></h4>\n                    <ion-item>\n                      <ion-input type="text" placeholder="Town / City" [(ngModel)]="data.billing_city" name= "billing_city" required></ion-input>\n                    </ion-item></ion-col>\n  \n                    <!-- <ion-col col-12>\n                        <h4>State<span>*</span></h4>\n                        <ion-list style="margin-bottom:0px;">\n                            <ion-item>\n                              <ion-select [(ngModel)]="bill_state" name= "state">\n                                <ion-option value="nes">NES</ion-option>\n                                <ion-option value="n64">Nintendo64</ion-option>\n                                <ion-option value="ps">PlayStation</ion-option>\n                              </ion-select>\n                            </ion-item>\n                          </ion-list>\n                    </ion-col> -->\n  \n                    <ion-col col-12>\n                        <h4>PostCode<span>*</span></h4>\n                      <ion-item>\n                        <ion-input type="text" placeholder="ZIP" [(ngModel)]=" data.billing_postcode" name= "billing_postcode" required></ion-input>\n                      </ion-item></ion-col>\n  \n                      <ion-col col-6>\n                          <h4>Phone<span>*</span></h4>\n                          <ion-item>\n                              <ion-input type="number" value="" placeholder="Phone" [(ngModel)]= "data.billing_phone" name= "billing_phone" required></ion-input>\n                            </ion-item>\n                      </ion-col>\n                      <ion-col col-6>\n                          <h4>Email Address<span>*</span></h4>\n                        <ion-item>\n                          <ion-input type="text" placeholder="Email Address" [(ngModel)]="data.billing_email" name= "billing_email" required></ion-input>\n                        </ion-item></ion-col>\n            </ion-row>\n          </ion-grid>\n          </ion-list>\n  \n          <button [disabled]="!billForm.valid" ion-button block class="submit_btn" >Save</button>\n  \n          <div style="height:8vh;float:left;width:100%;"></div>\n  \n          </form>\n        </div>\n  \n    \n  </ion-content>\n  '/*ion-inline-end:"/Volumes/D/customer/src/pages/billingmodal/billingmodal.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_customer_customer__["a" /* CustomerProvider */],
        __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */]])
], BillingmodalPage);

//# sourceMappingURL=billingmodal.js.map

/***/ }),

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectlocationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__location_location__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_customer_customer__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var SelectlocationPage = (function () {
    function SelectlocationPage(navCtrl, customer, loadingCtrl, http, places, geolocation, viewCtrl, navParams, formBuilder, events) {
        this.navCtrl = navCtrl;
        this.customer = customer;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.places = places;
        this.geolocation = geolocation;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.events = events;
        this.placess = [];
        this.place();
    }
    SelectlocationPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    SelectlocationPage.prototype.ngOnInit = function () {
        this.acService = new google.maps.places.AutocompleteService();
        this.geocoder = new google.maps.Geocoder();
        this.autocompleteItems = [];
        this.autocomplete = {
            query: ''
        };
    };
    SelectlocationPage.prototype.getlocation = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            showBackdrop: false,
            cssClass: 'loader'
        });
        loading.present();
        var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.geolocation.getCurrentPosition().then(function (resp) {
            _this.currentLatitude = resp.coords.latitude;
            _this.currentLongitude = resp.coords.longitude;
            console.log(_this.currentLatitude);
            console.log(_this.currentLongitude);
            var latLng = new google.maps.LatLng(_this.currentLatitude, _this.currentLongitude);
            // alert("shk")
            _this.geocoder.geocode({ 'latLng': latLng }, (function (results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    if (results[1]) {
                        _this.autocomplete.query = results[1].formatted_address;
                    }
                }
            }));
            loading.dismiss();
        }).catch(function (error) {
            console.log('hii');
            console.log('Error getting location', error);
        });
        var watch = this.geolocation.watchPosition();
        watch.subscribe(function (data) {
        });
    };
    SelectlocationPage.prototype.updateSearch = function () {
        console.log('modal > updateSearch');
        if (this.autocomplete.query == '') {
            this.autocompleteItems = [];
            return;
        }
        var self = this;
        var config = {
            //types:  ['geocode'], // other types available in the API: 'establishment', 'regions', and 'cities'
            input: this.autocomplete.query,
            componentRestrictions: {}
        };
        this.acService.getPlacePredictions(config, function (predictions, status) {
            console.log('modal > getPlacePredictions > status > ', status);
            self.autocompleteItems = [];
            predictions.forEach(function (prediction) {
                self.autocompleteItems.push(prediction);
            });
        });
    };
    SelectlocationPage.prototype.loads = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__location_location__["a" /* LocationPage */]);
    };
    SelectlocationPage.prototype.chooseItem = function (item) {
        console.log(item);
        this.autocomplete.query = item.description;
        this.autocompleteItems = [];
        localStorage.setItem('user_location', item.description);
    };
    SelectlocationPage.prototype.place = function () {
        var _this = this;
        var postdata1 = {
            // event_id: this.navParams.get('event_id'),
            getit: "pop_places",
        };
        var serialized_all = this.serializeObj(postdata1);
        var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.http.post(this.customer.base_url + 'user.php', serialized_all, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (dataa) {
            console.log(dataa);
            for (var _i = 0, _a = dataa.data; _i < _a.length; _i++) {
                var data3 = _a[_i];
                _this.placess.push({
                    "post_title": data3.post_title,
                });
            }
        });
    };
    SelectlocationPage.prototype.closeModal = function () {
        this.events.publish('user_location');
        console.log(this.events);
        this.viewCtrl.dismiss({
            address: this.autocomplete.query,
        });
    };
    SelectlocationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SelectlocationPage');
    };
    return SelectlocationPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('map'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
], SelectlocationPage.prototype, "mapElement", void 0);
SelectlocationPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-selectlocation',template:/*ion-inline-start:"/Volumes/D/customer/src/pages/selectlocation/selectlocation.html"*/'\n<ion-content>\n  <div>\n <!--<form [formGroup]="search" (ngSubmit)="updateSearch(search)">-->\n  \n  <ion-searchbar [(ngModel)]="autocomplete.query" \n[showCancelButton]="true" \n(ionInput)="updateSearch()" \n(ionCancel)="dismiss()"\nplaceholder="Enter location "></ion-searchbar>\n \n <!--</form>-->\n <ion-list>\n<ion-item *ngFor="let item of autocompleteItems" \n(click)="chooseItem(item)">\n{{ item.description }}\n</ion-item>\n</ion-list>\n  <!--<form [formGroup]="search" (ngSubmit)="updateSearch(search)">-->\n    <ion-buttons end (click)="closeModal()">\n        <button clear ion-button>Save</button>\n    </ion-buttons>\n\n  <!--<div class="location">\n    <div class="inpt">\n        <ion-icon ios="ios-search" md="md-search"></ion-icon>\n      <ion-input type="text" placeholder="Username"></ion-input>\n    </div>\n  </div>-->\n\n  <a class="locat"   (click)="getlocation();"><ion-icon name="locate"></ion-icon>USE MY CURRENT LOCATION</a>\n\n  <ion-list style="margin: 0;">\n    <ion-item *ngFor="let item of items">\n      {{ item }}\n    </ion-item>\n  </ion-list>\n\n  <ion-item-group class="cat"  >\n    <ion-item-divider color="grey" class="nme" >POPULAR LOCATION</ion-item-divider>\n    <ion-list class="cat" *ngFor="let placess of placess">\n    <ion-item>{{placess.post_title}}</ion-item>\n    </ion-list>\n    <!--<ion-item>Business</ion-item>\n    <ion-item>Food Drink</ion-item>\n    <ion-item>Community</ion-item>\n    <ion-item>Arts</ion-item>\n    <ion-item>Film & Media</ion-item>\n    <ion-item>Sports & Fitness</ion-item>\n    <ion-item>Health</ion-item>\n    <ion-item>Science & Tech</ion-item>\n    <ion-item>Travel & Outdoor</ion-item>\n    <ion-item>Charty & Causes</ion-item>-->\n  </ion-item-group>\n</div>\n</ion-content>\n\n'/*ion-inline-end:"/Volumes/D/customer/src/pages/selectlocation/selectlocation.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_6__providers_customer_customer__["a" /* CustomerProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */]])
], SelectlocationPage);

//# sourceMappingURL=selectlocation.js.map

/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Intro; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the Intro page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Intro = (function () {
    function Intro(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Intro.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Intro');
    };
    Intro.prototype.loginPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    return Intro;
}());
Intro = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-intro',template:/*ion-inline-start:"/Volumes/D/customer/src/pages/intro/intro.html"*/'\n\n  <div  class="int_edt" style="background: url(assets/img/bg.jpg) no-repeat center fixed; \n  background-size: cover;">\n  <div class="logo" (click)="loginPage();"><img src="assets/img/logo.png" /></div>\n  </div>\n\n'/*ion-inline-end:"/Volumes/D/customer/src/pages/intro/intro.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
], Intro);

//# sourceMappingURL=intro.js.map

/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(384);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 384:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_password_password__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_location_location__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_register_register__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_detail_detail__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_edit_edit__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_intro_intro__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_settings_settings__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_selectlocation_selectlocation__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_add_add__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_status_bar__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_splash_screen__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_customer_customer__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_camera__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_ngx_qrcode2__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_barcode_scanner__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_forgetpw_forgetpw__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_geolocation__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_diagnostic__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_social_sharing__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_purchase_purchase__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_getevents_getevents__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_billingmodal_billingmodal__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_cardmodal_cardmodal__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__ionic_native_stripe__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_signup_signup__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_createnew_createnew__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_categoryevent_categoryevent__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_addticket_addticket__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_producer_producer__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_scan_scan__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__ionic_native_calendar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41_ionic_long_press__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41_ionic_long_press___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_41_ionic_long_press__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__angular_common__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_loc_loc__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__ionic_native_clipboard__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45_ionic_tooltips__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__angular_platform_browser_animations__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__pages_allevents_allevents__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__pages_editpage_editpage__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__ionic_native_sqlite__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















































// import { MomentModule } from 'angular2-moment';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_intro_intro__["a" /* Intro */],
            __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_detail_detail__["a" /* DetailPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_edit_edit__["a" /* EditPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_settings_settings__["a" /* SettingsPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_add_add__["a" /* AddPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_password_password__["a" /* PasswordPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_location_location__["a" /* LocationPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_forgetpw_forgetpw__["a" /* ForgetpwPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_selectlocation_selectlocation__["a" /* SelectlocationPage */],
            __WEBPACK_IMPORTED_MODULE_29__pages_purchase_purchase__["a" /* PurchasePage */],
            __WEBPACK_IMPORTED_MODULE_30__pages_getevents_getevents__["a" /* GeteventsPage */],
            __WEBPACK_IMPORTED_MODULE_31__pages_billingmodal_billingmodal__["a" /* BillingmodalPage */],
            __WEBPACK_IMPORTED_MODULE_32__pages_cardmodal_cardmodal__["a" /* CardmodalPage */],
            __WEBPACK_IMPORTED_MODULE_34__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_35__pages_createnew_createnew__["a" /* CreatenewPage */],
            __WEBPACK_IMPORTED_MODULE_36__pages_categoryevent_categoryevent__["a" /* CategoryeventPage */],
            __WEBPACK_IMPORTED_MODULE_37__pages_addticket_addticket__["a" /* AddticketPage */],
            __WEBPACK_IMPORTED_MODULE_38__pages_producer_producer__["a" /* ProducerPage */],
            __WEBPACK_IMPORTED_MODULE_39__pages_scan_scan__["a" /* ScanPage */],
            __WEBPACK_IMPORTED_MODULE_43__pages_loc_loc__["a" /* LocPage */],
            __WEBPACK_IMPORTED_MODULE_47__pages_allevents_allevents__["a" /* AlleventsPage */],
            __WEBPACK_IMPORTED_MODULE_48__pages_editpage_editpage__["a" /* EditpagePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/billingmodal/billingmodal.module#BillingmodalPageModule', name: 'BillingmodalPage', segment: 'billingmodal', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/cardmodal/cardmodal.module#CardmodalPageModule', name: 'CardmodalPage', segment: 'cardmodal', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/selectlocation/selectlocation.module#SelectlocationPageModule', name: 'SelectlocationPage', segment: 'selectlocation', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/loc/loc.module#LocPageModule', name: 'LocPage', segment: 'loc', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/location/location.module#LocationPageModule', name: 'LocationPage', segment: 'location', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/add/add.module#AddPageModule', name: 'AddPage', segment: 'add', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/addticket/addticket.module#AddticketPageModule', name: 'AddticketPage', segment: 'addticket', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/editpage/editpage.module#EditpagePageModule', name: 'EditpagePage', segment: 'editpage', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/allevents/allevents.module#AlleventsPageModule', name: 'AlleventsPage', segment: 'allevents', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/password/password.module#PasswordPageModule', name: 'PasswordPage', segment: 'password', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/edit/edit.module#EditPageModule', name: 'EditPage', segment: 'edit', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/scan/scan.module#ScanPageModule', name: 'ScanPage', segment: 'scan', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/purchase/purchase.module#PurchasePageModule', name: 'PurchasePage', segment: 'purchase', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/detail/detail.module#DetailPageModule', name: 'DetailPage', segment: 'detail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/getevents/getevents.module#GeteventsPageModule', name: 'GeteventsPage', segment: 'getevents', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/categoryevent/categoryevent.module#CategoryeventPageModule', name: 'CategoryeventPage', segment: 'categoryevent', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/forgetpw/forgetpw.module#ForgetpwPageModule', name: 'ForgetpwPage', segment: 'forgetpw', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/createnew/createnew.module#CreatenewPageModule', name: 'CreatenewPage', segment: 'createnew', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/intro/intro.module#IntroModule', name: 'Intro', segment: 'intro', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_18__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_23_ngx_qrcode2__["a" /* NgxQRCodeModule */],
            __WEBPACK_IMPORTED_MODULE_41_ionic_long_press__["LongPressModule"],
            __WEBPACK_IMPORTED_MODULE_45_ionic_tooltips__["a" /* TooltipsModule */],
            __WEBPACK_IMPORTED_MODULE_46__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_intro_intro__["a" /* Intro */],
            __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_detail_detail__["a" /* DetailPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_edit_edit__["a" /* EditPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_settings_settings__["a" /* SettingsPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_add_add__["a" /* AddPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_password_password__["a" /* PasswordPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_location_location__["a" /* LocationPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_forgetpw_forgetpw__["a" /* ForgetpwPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_selectlocation_selectlocation__["a" /* SelectlocationPage */],
            __WEBPACK_IMPORTED_MODULE_29__pages_purchase_purchase__["a" /* PurchasePage */],
            __WEBPACK_IMPORTED_MODULE_30__pages_getevents_getevents__["a" /* GeteventsPage */],
            __WEBPACK_IMPORTED_MODULE_31__pages_billingmodal_billingmodal__["a" /* BillingmodalPage */],
            __WEBPACK_IMPORTED_MODULE_32__pages_cardmodal_cardmodal__["a" /* CardmodalPage */],
            __WEBPACK_IMPORTED_MODULE_35__pages_createnew_createnew__["a" /* CreatenewPage */],
            __WEBPACK_IMPORTED_MODULE_34__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_36__pages_categoryevent_categoryevent__["a" /* CategoryeventPage */],
            __WEBPACK_IMPORTED_MODULE_37__pages_addticket_addticket__["a" /* AddticketPage */],
            __WEBPACK_IMPORTED_MODULE_38__pages_producer_producer__["a" /* ProducerPage */],
            __WEBPACK_IMPORTED_MODULE_39__pages_scan_scan__["a" /* ScanPage */],
            __WEBPACK_IMPORTED_MODULE_43__pages_loc_loc__["a" /* LocPage */],
            __WEBPACK_IMPORTED_MODULE_47__pages_allevents_allevents__["a" /* AlleventsPage */],
            __WEBPACK_IMPORTED_MODULE_48__pages_editpage_editpage__["a" /* EditpagePage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_19__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_20__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_21__providers_customer_customer__["a" /* CustomerProvider */],
            __WEBPACK_IMPORTED_MODULE_18__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_24__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
            __WEBPACK_IMPORTED_MODULE_22__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_26__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_27__ionic_native_diagnostic__["a" /* Diagnostic */],
            __WEBPACK_IMPORTED_MODULE_18__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_28__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_33__ionic_native_stripe__["a" /* Stripe */],
            __WEBPACK_IMPORTED_MODULE_40__ionic_native_calendar__["a" /* Calendar */],
            __WEBPACK_IMPORTED_MODULE_42__angular_common__["DatePipe"],
            __WEBPACK_IMPORTED_MODULE_44__ionic_native_clipboard__["a" /* Clipboard */],
            __WEBPACK_IMPORTED_MODULE_49__ionic_native_sqlite__["a" /* SQLite */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupPage = (function () {
    function SignupPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SignupPage.prototype.log = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    SignupPage.prototype.aboutPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__about_about__["a" /* AboutPage */]);
    };
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    return SignupPage;
}());
SignupPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-signup',template:/*ion-inline-start:"/Volumes/D/customer/src/pages/signup/signup.html"*/'\n<div class="int_edt" style="background: #232123;width:100%;float:left;height:100%;">\n\n<div class="logo"><img src="assets/img/logoc.png" /></div>\n\n<p class="line" color="primary">Log in to view your tickets,<br> profile & chats</p>\n\n<div class="go">\n    <button ion-button block class="submit" (click)="log();">Log In</button>\n    <button ion-button block class="submit" color="light" (click)="aboutPage();">Find Events</button>\n</div>\n\n</div>\n\n\n\n'/*ion-inline-end:"/Volumes/D/customer/src/pages/signup/signup.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
], SignupPage);

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 415:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 194,
	"./af.js": 194,
	"./ar": 195,
	"./ar-dz": 196,
	"./ar-dz.js": 196,
	"./ar-kw": 197,
	"./ar-kw.js": 197,
	"./ar-ly": 198,
	"./ar-ly.js": 198,
	"./ar-ma": 199,
	"./ar-ma.js": 199,
	"./ar-sa": 200,
	"./ar-sa.js": 200,
	"./ar-tn": 201,
	"./ar-tn.js": 201,
	"./ar.js": 195,
	"./az": 202,
	"./az.js": 202,
	"./be": 203,
	"./be.js": 203,
	"./bg": 204,
	"./bg.js": 204,
	"./bm": 205,
	"./bm.js": 205,
	"./bn": 206,
	"./bn.js": 206,
	"./bo": 207,
	"./bo.js": 207,
	"./br": 208,
	"./br.js": 208,
	"./bs": 209,
	"./bs.js": 209,
	"./ca": 210,
	"./ca.js": 210,
	"./cs": 211,
	"./cs.js": 211,
	"./cv": 212,
	"./cv.js": 212,
	"./cy": 213,
	"./cy.js": 213,
	"./da": 214,
	"./da.js": 214,
	"./de": 215,
	"./de-at": 216,
	"./de-at.js": 216,
	"./de-ch": 217,
	"./de-ch.js": 217,
	"./de.js": 215,
	"./dv": 218,
	"./dv.js": 218,
	"./el": 219,
	"./el.js": 219,
	"./en-au": 220,
	"./en-au.js": 220,
	"./en-ca": 221,
	"./en-ca.js": 221,
	"./en-gb": 222,
	"./en-gb.js": 222,
	"./en-ie": 223,
	"./en-ie.js": 223,
	"./en-nz": 224,
	"./en-nz.js": 224,
	"./eo": 225,
	"./eo.js": 225,
	"./es": 226,
	"./es-do": 227,
	"./es-do.js": 227,
	"./es-us": 228,
	"./es-us.js": 228,
	"./es.js": 226,
	"./et": 229,
	"./et.js": 229,
	"./eu": 230,
	"./eu.js": 230,
	"./fa": 231,
	"./fa.js": 231,
	"./fi": 232,
	"./fi.js": 232,
	"./fo": 233,
	"./fo.js": 233,
	"./fr": 234,
	"./fr-ca": 235,
	"./fr-ca.js": 235,
	"./fr-ch": 236,
	"./fr-ch.js": 236,
	"./fr.js": 234,
	"./fy": 237,
	"./fy.js": 237,
	"./gd": 238,
	"./gd.js": 238,
	"./gl": 239,
	"./gl.js": 239,
	"./gom-latn": 240,
	"./gom-latn.js": 240,
	"./gu": 241,
	"./gu.js": 241,
	"./he": 242,
	"./he.js": 242,
	"./hi": 243,
	"./hi.js": 243,
	"./hr": 244,
	"./hr.js": 244,
	"./hu": 245,
	"./hu.js": 245,
	"./hy-am": 246,
	"./hy-am.js": 246,
	"./id": 247,
	"./id.js": 247,
	"./is": 248,
	"./is.js": 248,
	"./it": 249,
	"./it.js": 249,
	"./ja": 250,
	"./ja.js": 250,
	"./jv": 251,
	"./jv.js": 251,
	"./ka": 252,
	"./ka.js": 252,
	"./kk": 253,
	"./kk.js": 253,
	"./km": 254,
	"./km.js": 254,
	"./kn": 255,
	"./kn.js": 255,
	"./ko": 256,
	"./ko.js": 256,
	"./ky": 257,
	"./ky.js": 257,
	"./lb": 258,
	"./lb.js": 258,
	"./lo": 259,
	"./lo.js": 259,
	"./lt": 260,
	"./lt.js": 260,
	"./lv": 261,
	"./lv.js": 261,
	"./me": 262,
	"./me.js": 262,
	"./mi": 263,
	"./mi.js": 263,
	"./mk": 264,
	"./mk.js": 264,
	"./ml": 265,
	"./ml.js": 265,
	"./mr": 266,
	"./mr.js": 266,
	"./ms": 267,
	"./ms-my": 268,
	"./ms-my.js": 268,
	"./ms.js": 267,
	"./my": 269,
	"./my.js": 269,
	"./nb": 270,
	"./nb.js": 270,
	"./ne": 271,
	"./ne.js": 271,
	"./nl": 272,
	"./nl-be": 273,
	"./nl-be.js": 273,
	"./nl.js": 272,
	"./nn": 274,
	"./nn.js": 274,
	"./pa-in": 275,
	"./pa-in.js": 275,
	"./pl": 276,
	"./pl.js": 276,
	"./pt": 277,
	"./pt-br": 278,
	"./pt-br.js": 278,
	"./pt.js": 277,
	"./ro": 279,
	"./ro.js": 279,
	"./ru": 280,
	"./ru.js": 280,
	"./sd": 281,
	"./sd.js": 281,
	"./se": 282,
	"./se.js": 282,
	"./si": 283,
	"./si.js": 283,
	"./sk": 284,
	"./sk.js": 284,
	"./sl": 285,
	"./sl.js": 285,
	"./sq": 286,
	"./sq.js": 286,
	"./sr": 287,
	"./sr-cyrl": 288,
	"./sr-cyrl.js": 288,
	"./sr.js": 287,
	"./ss": 289,
	"./ss.js": 289,
	"./sv": 290,
	"./sv.js": 290,
	"./sw": 291,
	"./sw.js": 291,
	"./ta": 292,
	"./ta.js": 292,
	"./te": 293,
	"./te.js": 293,
	"./tet": 294,
	"./tet.js": 294,
	"./th": 295,
	"./th.js": 295,
	"./tl-ph": 296,
	"./tl-ph.js": 296,
	"./tlh": 297,
	"./tlh.js": 297,
	"./tr": 298,
	"./tr.js": 298,
	"./tzl": 299,
	"./tzl.js": 299,
	"./tzm": 300,
	"./tzm-latn": 301,
	"./tzm-latn.js": 301,
	"./tzm.js": 300,
	"./uk": 302,
	"./uk.js": 302,
	"./ur": 303,
	"./ur.js": 303,
	"./uz": 304,
	"./uz-latn": 305,
	"./uz-latn.js": 305,
	"./uz.js": 304,
	"./vi": 306,
	"./vi.js": 306,
	"./x-pseudo": 307,
	"./x-pseudo.js": 307,
	"./yo": 308,
	"./yo.js": 308,
	"./zh-cn": 309,
	"./zh-cn.js": 309,
	"./zh-hk": 310,
	"./zh-hk.js": 310,
	"./zh-tw": 311,
	"./zh-tw.js": 311
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 415;

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_customer_customer__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__categoryevent_categoryevent__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__loc_loc__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__detail_detail__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var AboutPage = (function () {
    function AboutPage(navCtrl, formBuilder, http, geolocation, customer, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.http = http;
        this.geolocation = geolocation;
        this.customer = customer;
        this.loadingCtrl = loadingCtrl;
        this.objectdata = Object.keys;
        this.searchQuery = '';
        this.places = [];
        this.latitude = 0;
        this.longitude = 0;
        this.details = [];
        this.callback = [];
        this.display();
    }
    AboutPage.prototype.dismiss = function () {
        this.itemss = [];
    };
    AboutPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    AboutPage.prototype.display = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            showBackdrop: false,
            cssClass: 'loader'
        });
        loading.present();
        var postdata1 = {
            getit: "get_catageories",
        };
        var serialized_all = this.serializeObj(postdata1);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.http.post(this.customer.base_url + 'user.php', serialized_all, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (dataa) {
            loading.dismiss();
            console.log(dataa);
            _this.name = dataa;
        });
    };
    AboutPage.prototype.onKey = function (event) {
        var _this = this;
        // if (this.autocomplete.query == '') {
        //   this.autocompleteItems = [];
        //   return;
        //   }
        var postdata = {
            getit: 'searchevents',
            search: this.val
        };
        console.log(postdata);
        var serialized_all1 = this.serializeObj(postdata);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.http.post(this.customer.base_url + 'ticket.php', serialized_all1, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (dataa) {
            console.log(dataa);
            _this.itemss = dataa;
        });
    };
    AboutPage.prototype.exactevent = function (id, name1) {
        console.log(name1);
        console.log(id);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__categoryevent_categoryevent__["a" /* CategoryeventPage */], {
            term_taxonomy_id: id,
            title: name1
        });
    };
    // search: FormGroup;
    AboutPage.prototype.ngOnInit = function () {
        this.acService = new google.maps.places.AutocompleteService();
        // this.placesService = new google.maps.places.PlacesService(this);   
        this.infowindow = new google.maps.InfoWindow;
        this.geocoder = new google.maps.Geocoder;
        this.autocompleteItems = [];
        this.autocomplete = {
            query: ''
        };
        // this.search = this.formBuilder.group({
        // 'search': [''],
        // })
    };
    AboutPage.prototype.updateSearch = function () {
        console.log('modal > updateSearch');
        if (this.autocomplete.query == '') {
            this.autocompleteItems = [];
            return;
        }
        var self = this;
        var config = {
            input: this.autocomplete.query,
            componentRestrictions: {}
        };
        this.acService.getPlacePredictions(config, function (predictions, status) {
            console.log('modal > getPlacePredictions > status > ', status);
            self.autocompleteItems = [];
            predictions.forEach(function (prediction) {
                self.autocompleteItems.push(prediction);
            });
        });
        console.log(this.autocompleteItems);
    };
    AboutPage.prototype.selectPlace = function (iddd) {
        //  alert(iddd)
        this.val = '';
        this.itemss = [];
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__detail_detail__["a" /* DetailPage */], {
            event_id: iddd,
        }, { animate: false });
    };
    AboutPage.prototype.geoloc = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__loc_loc__["a" /* LocPage */], {}, { animate: false });
    };
    AboutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LocationPage');
    };
    return AboutPage;
}());
AboutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-about',template:/*ion-inline-start:"/Volumes/D/customer/src/pages/about/about.html"*/'\n<ion-content>\n  <div>\n <form class="myfrom">\n  \n  <!-- <ion-searchbar   \n  [(ngModel)]="autocomplete.query" \n  name = "location.name"\n  [showCancelButton]="true" \n  (ionInput)="updateSearch()" \n  (ionCancel)="dismiss()"\n  placeholder="Start typing and select ...">\n  </ion-searchbar> -->\n \n  <!-- <ion-list style="margin: 0px;">\n    <ion-item *ngFor="let place of autocompleteItems" \n    (click)="selectPlace(place)">\n    {{ place.description }}\n    </ion-item>\n  </ion-list> -->\n  <ion-list style="margin: 0px;">\n      <!-- <input (keyup)="onKey($event)"  [(ngModel)]="val" name=\'val\' placeholder="Search events" >  -->\n       <ion-searchbar   \n        (keyup)="onKey($event)"  [(ngModel)]="val" name=\'val\'\n        placeholder="Search events"\n        [showCancelButton]="true" \n        (ionCancel)="dismiss()"\n        class="mysearchbar">\n       </ion-searchbar>\n       \n     <ion-list style="margin: 0px;">\n        <ion-item *ngFor="let place of itemss" (click)="selectPlace(place.ID);">\n        {{place.post_title}}\n        </ion-item>\n      </ion-list>\n  </ion-list>\n\n </form>\n \n  <div class="location">\n    <div class="inpt">\n        <ion-icon name="md-locate"></ion-icon>\n      <!--<ion-input type="text" placeholder="Current Location"></ion-input>-->\n        <!-- <a class="locat" (click)="getlocation()"><ion-icon name="locate"></ion-icon>USE MY CURRENT LOCATION</a> -->\n      <button (click)="geoloc()">Current Location</button>\n    </div>\n  </div>\n\n  <ion-list style="margin: 0;">\n    <ion-item *ngFor="let item of items">\n      {{item}}\n    </ion-item>\n  </ion-list>\n\n  <ion-item-group class="cat">\n      <ion-item-divider color="grey" class="nme">DISCOVER</ion-item-divider>\n      <ion-list style="margin: 0;" *ngIf="name !=undefined">\n          <ion-item *ngFor="let category of objectdata(name)" (click)=\'exactevent(name[category]?.term_taxonomy_id,name[category]?.name)\'>\n            <p>{{name[category]?.name}}</p>\n            \n          </ion-item>\n        </ion-list>\n  </ion-item-group>\n  <!-- <ion-list style="margin-bottom:0px;"  class="clk" *ngIf="name !=undefined">\n      <ion-select  placeholder="Category" [(ngModel)]="data.categoryy" name =\'categoryy\'>\n           <ion-option *ngFor="let category of objectdata(name)" >{{name[category].name}}</ion-option> \n      </ion-select>\n    </ion-list> -->\n    \n    <!-- <ion-item>Music</ion-item>\n    <ion-item>Business</ion-item>\n    <ion-item>Food Drink</ion-item>\n    <ion-item>Community</ion-item>\n    <ion-item>Arts</ion-item>\n    <ion-item>Film & Media</ion-item>\n    <ion-item>Sports & Fitness</ion-item>\n    <ion-item>Health</ion-item>\n    <ion-item>Science & Tech</ion-item>\n    <ion-item>Travel & Outdoor</ion-item>\n    <ion-item>Charty & Causes</ion-item> -->\n  \n</div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/customer/src/pages/about/about.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */],
        __WEBPACK_IMPORTED_MODULE_5__providers_customer_customer__["a" /* CustomerProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */]])
], AboutPage);

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 433:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_customer_customer__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, customer, geolocation, events) {
        var _this = this;
        this.customer = customer;
        this.geolocation = geolocation;
        this.events = events;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            if (localStorage.getItem('userimage') != null) {
                var userimage = localStorage.getItem('userimage');
                _this.events.publish('userimage', userimage);
            }
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            platform.ready().then(function () {
                statusBar.styleDefault();
                splashScreen.hide();
                // this.rootPage = localStorage.getItem('user_id') != null ? TabsPage : LoginPage;
            });
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Volumes/D/customer/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Volumes/D/customer/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4__providers_customer_customer__["a" /* CustomerProvider */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contact_contact__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__add_add__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__signup_signup__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular_navigation_nav_params__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ionic_angular_components_tabs_tabs__ = __webpack_require__(63);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







// import { Tabs } from 'ionic-angular/navigation/nav-interfaces';


var TabsPage = (function () {
    function TabsPage(events, navCtrl, nav, navParams) {
        var _this = this;
        this.events = events;
        this.navCtrl = navCtrl;
        this.nav = nav;
        this.navParams = navParams;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__about_about__["a" /* AboutPage */];
        this.tab3Root = '';
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_3__contact_contact__["a" /* ContactPage */];
        this.id = localStorage.getItem('user_id');
        this.events.subscribe('usertab', function (vari) {
            _this.variable = vari;
        });
        if (localStorage.getItem('userimage')) {
            this.events.subscribe('userimage', function (image) {
                _this.userimage = localStorage.getItem('userimage');
            });
        }
        this.events.subscribe('userimage', function (image) {
            console.log(localStorage.getItem('userimage'));
            _this.userimage = localStorage.getItem('userimage');
            console.log(_this.userimage);
            var array = document.getElementsByClassName('tabbar');
            var tabbar = array[0];
            var element = tabbar.childNodes[tabbar.childElementCount - 1];
            if (element) {
                element.removeChild(element.childNodes[1]);
                var img = document.createElement("img");
                img.setAttribute("class", "tab-icon-custom tab-button-icon icon icon-md buszs");
                // make the image dynamic
                img.setAttribute("src", _this.userimage);
                element.insertBefore(img, element.childNodes[1]);
            }
        });
        this.events.subscribe('logout', function () {
            _this.updateAccountTab();
            localStorage.removeItem('userimage');
        });
    }
    TabsPage.prototype.ionViewDidEnter = function () {
        // alert(this.navParams.get('bitt'))
        if ((JSON.parse(localStorage.getItem('bitt')) == 3) && (localStorage.getItem('user_id') != null)) {
            this.tabRef.select(3);
        }
    };
    TabsPage.prototype.updateAccountTab = function () {
        var array = document.getElementsByClassName('tabbar');
        var tabbar = array[0];
        var element = tabbar.childNodes[tabbar.childElementCount - 1];
        if (element) {
            element.removeChild(element.childNodes[1]);
            var img = document.createElement("img");
            img.setAttribute("class", "tab-icon-custom tab-button-icon icon icon-md");
            // make the image dynamic
            img.setAttribute("src", '../assets/img/user.png');
            element.insertBefore(img, element.childNodes[1]);
        }
    };
    TabsPage.prototype.hide = function (event) {
        console.log(event.index);
        if (event.index == 2) {
            if (localStorage.getItem('user_id') == null) {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__signup_signup__["a" /* SignupPage */]);
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__signup_signup__["a" /* SignupPage */], {}, { animate: false });
            }
            else {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__add_add__["a" /* AddPage */], {}, { animate: false });
            }
        }
        else if (event.index == 3) {
            if (localStorage.getItem('user_id') == null) {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__signup_signup__["a" /* SignupPage */]);
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__signup_signup__["a" /* SignupPage */], {}, { animate: false });
            }
            else {
                this.tab4Root = __WEBPACK_IMPORTED_MODULE_3__contact_contact__["a" /* ContactPage */];
            }
        }
    };
    return TabsPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myTabs'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_8_ionic_angular_components_tabs_tabs__["a" /* Tabs */])
], TabsPage.prototype, "tabRef", void 0);
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Volumes/D/customer/src/pages/tabs/tabs.html"*/'<ion-tabs (ionChange)="hide($event)" #myTabs >\n  <ion-tab [root]="tab1Root"  tabIcon="flash1"></ion-tab>\n  <ion-tab [root]="tab2Root"  tabIcon="search1"></ion-tab>\n  <ion-tab  [root]="tab3Root"  tabIcon="chatbubbless1"></ion-tab>\n  <ion-tab [root]="tab4Root"  tabIcon="user1" ></ion-tab>\n  <!-- <ion-tab [root]="tab4Root"></ion-tab> -->\n</ion-tabs>\n\n'/*ion-inline-end:"/Volumes/D/customer/src/pages/tabs/tabs.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Nav */],
        __WEBPACK_IMPORTED_MODULE_7_ionic_angular_navigation_nav_params__["a" /* NavParams */]])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_customer_customer__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__password_password__ = __webpack_require__(132);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var EditPage = (function () {
    function EditPage(navCtrl, camera, events, toastCtrl, actionSheetCtrl, customer, navParams, formBuilder, loadingCtrl, http, alertCtrl) {
        this.navCtrl = navCtrl;
        this.camera = camera;
        this.events = events;
        this.toastCtrl = toastCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.customer = customer;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.eventimage = "assets/img/event1.jpg";
        this.image_data = "";
        this.userInfo = {
            fname: '',
            username: '',
            email: '',
            gender: '',
            description: '',
            identity: '',
            number: '',
            website: '',
            facebook: '',
            instagram: '',
        };
        this.even = [];
        // this.updateForm = formBuilder.group({
        //   'fname': [''],
        //   'username': [''],
        //   'email': [''],
        //   'gender': [''],
        //   'descripiton': [''],
        //    'identity':[''],
        //   'phone': [''],
        //   'website': ['']
        // })
        this.getuserdetail();
    }
    EditPage.prototype.doRefresh = function (refresher) {
        console.log('Begin async operation', refresher);
        this.getuserdetail();
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    EditPage.prototype.changeemail = function (email) {
        var _this = this;
        //alert(email)
        var alert = this.alertCtrl.create({
            title: 'Change Email',
            inputs: [
                {
                    name: 'email',
                    placeholder: 'Email',
                    value: email,
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Submit',
                    handler: function (data) {
                        console.log(data.email);
                        var postdata = {
                            getit: 'email_verificatin',
                            user_id: localStorage.getItem('user_id'),
                            email: data.email,
                        };
                        var serialized_all = _this.serializeObj(postdata);
                        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
                        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
                        _this.http.post(_this.customer.base_url + 'user.php', serialized_all, options)
                            .map(function (res) { return res.json(); })
                            .subscribe(function (data) {
                            console.log(data);
                            var toast = _this.toastCtrl.create({
                                message: data.msg,
                                duration: 5000,
                                position: 'bottom'
                            });
                            toast.present();
                        });
                        // if (User.isValid(data.username, data.password)) {
                        //   // logged in!
                        // } else {
                        //   // invalid login
                        //   return false;
                        // }
                    }
                }
            ]
        });
        alert.present();
    };
    EditPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    EditPage.prototype.getuserdetail = function () {
        var _this = this;
        this.userInfo.fname = this.navParams.get("name");
        localStorage.setItem(this.namee, this.userInfo.fname);
        var loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            showBackdrop: false,
            cssClass: 'loader'
        });
        loading.present();
        return new Promise(function (resolve) {
            var postdata = {
                user_id: localStorage.getItem('user_id'),
                getit: "get_userdata",
            };
            var serialized_all = _this.serializeObj(postdata);
            var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
            var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
            _this.http.post(_this.customer.base_url + 'user.php', serialized_all, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (response) {
                loading.dismiss();
                console.log(response);
                _this.userimagee = response.user_img;
                _this.id = response.user_data.data.ID;
                _this.userInfo.username = response.user_data.data.user_login;
                _this.userInfo.email = response.user_data.data.user_email;
                if (response.meta.first_name[0] == "") {
                    response.meta.first_name[0] = "";
                }
                if (response.user_data.data.user_url == "") {
                    response.user_data.data.user_url == "";
                }
                if (response.meta.phone == undefined) {
                    response.meta.phone = "";
                }
                else {
                    _this.userInfo.number = response.meta.phone[0];
                }
                if (response.meta.gender == undefined) {
                    response.meta.gender = '';
                }
                else {
                    _this.userInfo.gender = response.meta.gender[0];
                }
                if (response.meta.identity == undefined) {
                    response.meta.identity = '';
                }
                else {
                    _this.userInfo.identity = response.meta.identity[0];
                }
                if (response.meta.description == undefined) {
                    response.meta.description = '';
                }
                else {
                    _this.userInfo.description = response.meta.description[0];
                }
                if (response.meta.facebook == undefined) {
                    response.meta.facebook = '';
                }
                else {
                    _this.userInfo.facebook = response.meta.facebook[0];
                }
                if (response.meta.instagram == undefined) {
                    response.meta.instagram = '';
                }
                else {
                    _this.userInfo.instagram = response.meta.instagram[0];
                }
                _this.userInfo.username = response.user_data.data.user_login;
                // this.userInfo.email = response.user_data.data.user_email;
                _this.userInfo.number = response.meta.phone[0];
                _this.userInfo.description = response.meta.description[0];
                _this.userInfo.fname = response.meta.first_name[0] + " " + response.meta.last_name[0];
                _this.userInfo.website = response.user_data.data.user_url;
            });
        });
    };
    EditPage.prototype.updateprofile = function (data) {
        var _this = this;
        console.log(data.value);
        // console.log("babita");
        console.log(data.value);
        return new Promise(function (resolve) {
            data.value.getit = 'edit_profile';
            data.value.user_id = localStorage.getItem('user_id');
            var loading4 = _this.loadingCtrl.create({
                spinner: 'bubbles',
                showBackdrop: false,
                cssClass: 'loader'
            });
            loading4.present();
            var postdata = {
                user_id: localStorage.getItem('user_id'),
                getit: "edit_profile",
                phone: data.value.number,
                descripiton: data.value.description,
                fname: data.value.fname,
                gender: data.value.gender,
                website: data.value.website,
                username: data.value.username,
                user_email: data.value.email,
                identity: data.value.identity,
                facebook: data.value.facebook,
                instagram: data.value.instagram
            };
            var serialized_all = _this.serializeObj(postdata);
            var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
            var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
            _this.http.post(_this.customer.base_url + 'user.php', serialized_all, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (response) {
                loading4.dismiss();
                console.log(response);
                if (_this.image_data != "") {
                    var loader5_1 = _this.loadingCtrl.create({
                        spinner: 'bubbles',
                        showBackdrop: false,
                        cssClass: 'loader'
                    });
                    loader5_1.present();
                    console.log(_this.image_data);
                    var postdata1 = {
                        getit: 'save_avatar',
                        user_id: localStorage.getItem('user_id'),
                        img: _this.image_data
                    };
                    console.log(postdata1);
                    var serialized_all6 = _this.serializeObj(postdata1);
                    var headers_1 = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
                    var options_1 = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers_1 });
                    _this.http.post(_this.customer.base_url + 'ticket.php', serialized_all6, options_1)
                        .map(function (res) { return res.json(); })
                        .subscribe(function (dataa) {
                        loader5_1.dismiss();
                        console.log(dataa);
                    });
                    var toast = _this.toastCtrl.create({
                        message: "Profile updated successfully!",
                        duration: 5000,
                        position: 'bottom'
                    });
                    toast.present();
                    _this.events.publish('user_updated');
                }
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */], {}, { animate: false });
            });
        });
    };
    EditPage.prototype.presentActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            buttons: [
                {
                    text: 'Choose Photo',
                    handler: function () {
                        _this.getPicture(0); // 0 == Library
                    }
                }, {
                    text: 'Take Photo',
                    handler: function () {
                        _this.getPicture(1); // 1 == Camera
                    }
                }
            ]
        });
        actionSheet.present();
    };
    EditPage.prototype.getPicture = function (sourceType) {
        var _this = this;
        // You can check the values here:
        // https://github.com/driftyco/ionic-native/blob/master/src/plugins/camera.ts
        this.camera.getPicture({
            quality: 10,
            destinationType: 0,
            sourceType: sourceType,
            allowEdit: true,
            saveToPhotoAlbum: false,
            correctOrientation: true
        }).then(function (imageData) {
            _this.image_data = imageData;
            _this.eventimage = 'data:image/jpeg;base64,' + imageData;
            _this.postpic(imageData);
        }, function (err) {
            var toast = _this.toastCtrl.create({
                message: JSON.stringify(err),
                duration: 5000,
                position: 'bottom'
            });
            toast.present();
        });
    };
    EditPage.prototype.postpic = function (imageData) {
        var _this = this;
        // alert(JSON.stringify(imageData))
        var load = this.loadingCtrl.create({
            content: 'uploading image...',
            spinner: 'bubbles',
            showBackdrop: false,
            cssClass: 'loader'
        });
        load.present();
        var postdata = {
            getit: 'save_avatar',
            img: imageData,
            user_id: localStorage.getItem('user_id'),
        };
        var serialized_all = this.serializeObj(postdata);
        // alert(serialized_all)
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.http.post(this.customer.base_url + 'user.php', serialized_all, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            load.dismiss();
            _this.userimagee = data.user_img;
            var split = data.user_img.split('"');
            _this.userimage = split[1];
            // alert(this.userimage);
            localStorage.setItem('userimage', _this.userimage);
            _this.events.publish('userimage', _this.userimage);
            // alert("swd")
            // alert('res' + JSON.stringify(data));
            // alert(data.user_data.data.user_login)
        });
    };
    EditPage.prototype.confirm = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */], {}, { animate: false });
    };
    EditPage.prototype.passwordPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__password_password__["a" /* PasswordPage */], {}, { animate: false });
    };
    EditPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditPage');
    };
    return EditPage;
}());
EditPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-edit',template:/*ion-inline-start:"/Volumes/D/customer/src/pages/edit/edit.html"*/'<!-- <div class="position"> -->\n\n    <form #heroForm="ngForm" novalidate class="form_box">\n <ion-header>\n  <ion-navbar hideBackButton>\n          <ion-buttons primary class= "action">\n              <button (click)="confirm()" ion-button color="black" clear >\n                  Cancel\n                </button>\n            </ion-buttons>\n         <ion-title>\n        Edit Profile\n      </ion-title>\n      <ion-buttons end primary class= "action">\n      <button [disabled]="!heroForm.valid" (click)="updateprofile(heroForm)"  ion-button color="black" outline>\n          Done\n        </button>\n      </ion-buttons>\n\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content style="background: #f0f0f0;">\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n      <ion-refresher-content\n      pullingIcon="arrow-dropdown"\n      pullingText="Pull to refresh"\n      refreshingSpinner="circles"\n      refreshingText="Refreshing...">\n    </ion-refresher-content>\n  </ion-refresher>  \n  <div   class="pic" >\n    <ion-list style="height:65px;" [innerHTML]=\'userimagee\'>\n    </ion-list>\n   \n  <button ion-button clear color="primary" class="change" uplad ion-button block *ngIf="!srcImage" (click)="presentActionSheet()">Change Profile Photo</button>\n  \n      <!-- <button  [disabled]="!heroForm.valid" class="position_done" type="submit" (click)="updateprofile(heroForm)"  ion-button color="black" outline>\n        Done\n      </button>  -->\n    <ion-list class="edit" >\n    \n      <ion-item>\n            <ion-icon name="" item-start>\n            <img style="min-width:20px !important;" class="img2" src="assets/img/card.png" />\n          </ion-icon> \n      \n        <ion-input type="text" placeholder="Full Name*" [(ngModel)]="userInfo.fname" name="fname" #fname="ngModel"\n                       type="text" id="fname"  spellcheck="false" autocapitalize="off" required></ion-input>\n      </ion-item>\n      <ion-label  class="alert alert-danger" color="danger">\n        <div *ngIf="fname.errors && (fname.dirty || fname.touched)">\n       <div [hidden]="!fname.errors.required" >\n         Field is required\n        </div></div></ion-label>\n      \n      <ion-item>\n          <ion-icon name="" item-start>\n              <img class="img2" src="assets/img/user1.png" />\n            </ion-icon> \n        <ion-input type="text" placeholder="UserName*" [(ngModel)]="userInfo.username" name="username" #usernamename="ngModel"\n                       type="text" id="username" [readonly]="true" spellcheck="false" autocapitalize="off"></ion-input>\n      </ion-item>\n     \n       <ion-item>\n        <ion-icon name="ios-flag-outline" item-start></ion-icon>\n        <ion-input  placeholder="Website" [(ngModel)]="userInfo.website" name="website" #website="ngModel"\n                       type="url" id="url" spellcheck="false" autocapitalize="off" pattern="http?://.+" ></ion-input>\n      </ion-item>\n      <ion-label  class="alert alert-danger" color="danger">\n        <div *ngIf="website.errors && (website.dirty || website.touched)">\n       <!-- <div [hidden]="!website.errors.required" >\n         Field is required\n        </div> -->\n        <div [hidden]="!website.errors.pattern" class="alert alert-danger">\n          Enter a valid Website Address\n        </div>\n      </div>\n    </ion-label>\n    \n      <ion-item>\n          <ion-icon name="" item-start>\n              <img class="img2" src="assets/img/list.png" />\n            </ion-icon> \n        <ion-input  type="text" placeholder="This is my bio*"   [(ngModel)]="userInfo.description" name="description" #description="ngModel"\n                        spellcheck="false" required autocapitalize="off"></ion-input>\n      </ion-item>\n      <ion-label  class="alert alert-danger" color="danger">\n        <div *ngIf="description.errors && (description.dirty || description.touched)">\n       <div [hidden]="!description.errors.required" >\n         Field is required\n        </div></div></ion-label>\n    \n      <ion-item>\n          <ion-icon name="" item-start>\n              <img class="img2" src="assets/img/instagram.png" />\n            </ion-icon> \n        <ion-input type="text" placeholder="Instagram Profile" [(ngModel)]="userInfo.instagram" name="instagram" #instagram="ngModel"\n                      type="text" id="insta" spellcheck="false" autocapitalize="off"></ion-input>\n      </ion-item>\n      <!-- <ion-label  class="alert alert-danger" color="danger">\n        <div *ngIf="instagram.errors && (instagram.dirty || instagram.touched)">\n       <div [hidden]="!instagram.errors.required" >\n         Field is required\n        </div></div></ion-label> -->\n    \n      <ion-item>\n          <ion-icon name="" item-start>\n              <img class="img2" src="assets/img/facebook.png" />\n            </ion-icon> \n        <ion-input type="text" placeholder="Connect to Facebook" [(ngModel)]="userInfo.facebook" name="facebook" #facebook="ngModel"\n                      type="text" id="facebook" spellcheck="false" autocapitalize="off"></ion-input>\n      </ion-item>\n      <!-- <ion-label  class="alert alert-danger" color="danger">\n        <div *ngIf="facebook.errors && (facebook.dirty || facebook.touched)">\n       <div [hidden]="!facebook.errors.required" >\n         Field is required\n        </div>\n      </div>\n    </ion-label> -->\n    \n    <h4 class="head">private information</h4>\n        <div class="dff">\n          <ion-item>\n            <ion-icon name="" item-start>\n                <img style="min-width:20px !important;" class="img2" src="assets/img/message.png" />\n              </ion-icon> \n        <ion-input type="text" placeholder="Email Address" [(ngModel)]="userInfo.email" name="email" #email="ngModel"  [readonly]="true" ></ion-input>\n    \n      </ion-item>\n      <button class="change_email" (click)="changeemail(userInfo.email)">change email</button>\n      </div>\n      <!-- <div *ngIf="email.errors && (email.dirty || email.touched)" class="alert alert-danger">\n      <div [hidden]="!email.errors.required" class="alert alert-danger">\n           Email Address is required\n          </div>\n           <div [hidden]="!email.errors.pattern" class="alert alert-danger">\n            Enter a valid Email Address\n          </div>\n      </div> -->\n       <!-- <ion-item> -->\n        <ion-item>\n          <ion-icon ios="ios-phone-portrait" md="ios-phone-portrait" item-start></ion-icon>\n          <ion-input type="text" placeholder="Phone Number*"  [(ngModel)]="userInfo.number" name="number" #number="ngModel" pattern=\'[0-9]+\' minlength=\'8\' maxlength="15" required></ion-input>\n        </ion-item>\n          <ion-label class="alert alert-danger" color="danger">\n       \n                 <div *ngIf="number.errors && (number.dirty || number.touched)">\n                 <div [hidden]="!number.errors.required" >\n                   Field is required\n                  </div>\n                  <div [hidden]="!number.errors.pattern" >\n                    Enter a valid Phone Number\n                  </div>\n                   <div [hidden]="!number.errors.maxlength" >\n                   Maximum 15 digit number is accepted\n                  </div>\n              </div>\n          </ion-label>\n  \n        <!-- <div *ngIf="number.errors && (number.dirty || number.touched)" class="alert alert-danger">\n           <div [hidden]="!number.errors.required" class="alert alert-danger">\n             phone number is required\n            </div>\n             <div [hidden]="!number.errors.pattern" class="alert alert-danger">\n              Enter a valid Phone Number\n            </div>\n        </div> -->\n       \n      <!-- </ion-item> -->\n        \n      <ion-item>\n        <ion-label> <ion-icon ios="ios-transgender" md="ios-transgender" item-start></ion-icon>Gender</ion-label>\n        <!-- <ion-input type="text" placeholder="Male" [(ngModel)]="userInfo.gender" name="gender" #gender="ngModel"\n                       type="text" id="gender" spellcheck="false" autocapitalize="off"></ion-input> -->\n         <ion-select [(ngModel)]="userInfo.gender" name=\'gender\' #gender=\'ngModel\' required>\n               <ion-option value="male">Male</ion-option>\n               <ion-option value="female">Female</ion-option>\n               <ion-option value="ts">Trans</ion-option>\n               <ion-option value="uni">Unicorn</ion-option>\n               <ion-option value="not">Prefer not to say</ion-option>\n          </ion-select>              \n      </ion-item>\n     <!-- <ion-item>\n        <ion-icon ios="ios-transgender" md="ios-transgender" item-start></ion-icon>\n        <ion-input type="text" placeholder="identity" [(ngModel)]="userInfo.identity" name="identity" #identity="ngModel"\n          type="text" id="identity" spellcheck="false" autocapitalize="off"></ion-input>             \n      </ion-item> -->\n    \n      <ion-item style="border-bottom: none;"> \n        <ion-label> <ion-icon name="star-outline" style="font-size: 2.8rem;"></ion-icon> I identify as</ion-label>\n        <ion-select [(ngModel)]="userInfo.identity" name="identity" #identity="ngModel" required>\n          <ion-option value="nes">Gay</ion-option>\n          <ion-option value="n64">Straight</ion-option>\n          <ion-option value="ps">Bi</ion-option>\n          <ion-option value="genesis">Queer</ion-option>\n        </ion-select>\n        <!-- <p><span tooltip="We use this information to help you discover events that may be of interest to you">Why do you ask?</span></p> -->\n       \n      </ion-item> \n    </ion-list>\n    <button class="inputbtn" ion-button clear tooltip="We use this information to help you discover events that may be of interest to you" positionV="top" arrow>\n        Why do you ask?\n    </button>\n    \n      </div>\n    \n    </ion-content>\n\n  </form>   \n  \n  \n  \n  \n   '/*ion-inline-end:"/Volumes/D/customer/src/pages/edit/edit.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
        __WEBPACK_IMPORTED_MODULE_4__providers_customer_customer__["a" /* CustomerProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], EditPage);

//# sourceMappingURL=edit.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_customer_customer__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__forgetpw_forgetpw__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__createnew_createnew__ = __webpack_require__(137);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var LoginPage = (function () {
    function LoginPage(navCtrl, events, navParams, alertCtrl, customer, loadingCtrl, http, formBuilder, toastCtrl) {
        this.navCtrl = navCtrl;
        this.events = events;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.customer = customer;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.formBuilder = formBuilder;
        this.toastCtrl = toastCtrl;
        this.submitted = false;
        this.data = {
            email: '',
        };
        this.Loader = this.loadingCtrl.create({
            content: 'Please wait...',
            dismissOnPageChange: true,
        });
    }
    LoginPage.prototype.onSubmit = function () { this.submitted = true; };
    LoginPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    LoginPage.prototype.login = function (dataa) {
        var _this = this;
        var loader = this.loadingCtrl.create({
            spinner: 'bubbles',
            showBackdrop: false,
            cssClass: 'loader',
        });
        loader.present();
        var postdata1 = {
            username: dataa.value.email,
            password: dataa.value.password,
            getit: "signin",
        };
        var serialized_all = this.serializeObj(postdata1);
        var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.http.post(this.customer.base_url + 'user.php', serialized_all, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log(data);
            loader.dismiss();
            if (data.data.errors != undefined) {
                for (var i in data.data.errors) {
                    console.log(i);
                    if (i == "invalid_email") {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__createnew_createnew__["a" /* CreatenewPage */], { email: dataa.value.email }, { animate: false });
                    }
                    var errmsg = i.split('_');
                    var toast = _this.toastCtrl.create({
                        message: errmsg[0].toUpperCase() + " " + errmsg[1].toUpperCase(),
                        duration: 5000,
                        position: 'bottom'
                    });
                    toast.present();
                }
            }
            else if (data.roles[0] == "administrator") {
                console.log(data.roles[0] == "administrator");
            }
            else {
                console.log("user");
                localStorage.setItem('user_id', data.data.ID);
                _this.events.publish('usertab', true);
                _this.getuserdetail(data.data.ID);
                _this.bitt = 3;
                localStorage.setItem('bitt', _this.bitt);
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]).then(function () {
                    var index = _this.navCtrl.getActive().index;
                    _this.navCtrl.remove(0, index);
                });
            }
        });
    };
    LoginPage.prototype.getuserdetail = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            var postdata = {
                user_id: id,
                getit: "get_userdata",
            };
            var serialized_all = _this.serializeObj(postdata);
            var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
            var options = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["d" /* RequestOptions */]({ headers: headers });
            _this.http.post(_this.customer.base_url + 'user.php', serialized_all, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (response) {
                var split = response.user_img.split('"');
                _this.userimage = split[1].replace("#038;", "");
                // alert(this.userimage);
                localStorage.setItem('userimage', _this.userimage);
                _this.events.publish('userimage', _this.userimage);
            });
        });
    };
    // forgetPage()
    // {
    //  this.navCtrl.push(ForgetpwPage,{},{animate: false});
    // }
    // aboutPage(){
    //   this.navCtrl.push(AboutPage,{},{animate: false});
    // }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    // passwordPage()
    // {
    //   this.navCtrl.push(PasswordPage,{},{animate: false});
    // }
    LoginPage.prototype.tabPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */], {}, { animate: false });
    };
    LoginPage.prototype.registerPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */], {}, { animate: false });
    };
    LoginPage.prototype.goto = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__forgetpw_forgetpw__["a" /* ForgetpwPage */], {}, { animate: false });
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-login',template:/*ion-inline-start:"/Volumes/D/customer/src/pages/login/login.html"*/'<div class="int_edt" style="background: #232123;width:100%;float:left;height:100%;">\n<div class="logo logo_gap" (click)="loginPage();"><img src="assets/img/logoc.png" /></div>\n\n<p class="line" color="primary">Sign up or log in to get started</p>\n\n<form padding (ngSubmit)="login(heroForm)" #heroForm="ngForm">\n\n  <ion-list class="log">\n    <ion-item>\n      <ion-input type="text" placeholder="Username"[(ngModel)]="data.email" name="email" #email="ngModel"  required ></ion-input>\n    </ion-item>\n<div *ngIf="email.errors && (email.dirty || email.touched)" class="alert alert-danger">\n  <div [hidden]="!email.errors.required" class="alert alert-danger">\n       Email Address is required\n      </div>\n       <!-- <div [hidden]="!email.errors.pattern" class="alert alert-danger">\n        Enter a valid Email Address\n      </div> -->\n  </div>\n    <ion-item>\n      <ion-input type="password" placeholder="Password" [(ngModel)]="data.password" name="password" #password="ngModel" minlength="10"  required></ion-input>\n    </ion-item>\n    <span class="forgetpass" (click)="goto();">Forgot Password?</span>\n     <div *ngIf="password.errors && (password.dirty || password.touched)" class="alert alert-danger">\n     <div [hidden]="!password.errors.required  " class="alert alert-danger">\n      Password is required\n      </div>\n  </div>\n    <!--<div *ngIf="password.errors && (password.dirty || password.touched)" class="alert alert-danger">\n     <div [hidden]="!password.errors.required  " class="alert alert-danger">\n      Password is required\n      </div>\n  </div>-->\n  </ion-list>\n  \n  <button ion-button block class="submit" type="submit" >GO</button>\n  \n</form>\n\n <!-- <button ion-button block class="submit" (click)="aboutPage();">FIND EVENTS</button>  -->\n <!-- <button ion-button block clear class="submit" (click)="forgetPage();" color="light" >forgot password</button>  -->\n<!-- <button ion-button block clear class="submit" (click)="passwordPage();" color="light" >forgot password</button> -->\n<!-- <button ion-button block clear class="submit" (click)="registerPage();" color="light" style="text-transform: unset;">Don\'t have an account? SIGN UP</button> -->\n</div>\n'/*ion-inline-end:"/Volumes/D/customer/src/pages/login/login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_4__providers_customer_customer__["a" /* CustomerProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PurchasePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_customer_customer__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cardmodal_cardmodal__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__scan_scan__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__signup_signup__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PurchasePage = (function () {
    function PurchasePage(navCtrl, navParams, customer, http, modalCtrl, toastCtrl, loadingCtrl, platform, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.customer = customer;
        this.http = http;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.details = [];
        this.ticketss = [];
        this.x = 0;
        this.netamount = 0;
        this.coupon = 0;
        this.price = 0;
        this.pricee = 0;
        this.submitted = false;
        this.cartproduct = [];
        this.cartproduct1 = [];
        this.data = {
            select: [],
        };
        this.data1 = {
            card: '',
            promo: ''
        };
        this.usrdetail();
        this.tickets();
    }
    PurchasePage.prototype.onSubmit = function () {
        this.submitted = true;
    };
    PurchasePage.prototype.doRefresh = function (refresher) {
        console.log('Begin async operation', refresher);
        this.usrdetail();
        this.tickets();
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    //  presentProfileModal()
    //  {
    //     let myModal = this.modalCtrl.create(BillingmodalPage);
    //     myModal.present();
    //  }
    PurchasePage.prototype.signout = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__signup_signup__["a" /* SignupPage */]);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__signup_signup__["a" /* SignupPage */], {}, { animate: false });
    };
    PurchasePage.prototype.presentCardModal = function () {
        var _this = this;
        var Modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__cardmodal_cardmodal__["a" /* CardmodalPage */]);
        Modal.present();
        Modal.onDidDismiss(function (data) {
            var posval = {
                getit: "getcards",
                user_id: localStorage.getItem('user_id'),
            };
            var serialized_all = _this.serializeObj(posval);
            var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
            var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
            _this.http.post(_this.customer.base_url + 'ticket.php', serialized_all, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (dataa) {
                console.log(dataa);
                _this.cardss = dataa;
            });
        });
    };
    PurchasePage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    PurchasePage.prototype.apply_promo = function (promo) {
        var _this = this;
        if (this.data1.promo == "") {
            var alert_1 = this.alertCtrl.create({
                title: 'Promo Code',
                subTitle: 'Enter your promo code first',
                buttons: ['OK']
            });
            alert_1.present();
        }
        else {
            var load_1 = this.loadingCtrl.create({
                spinner: 'hide',
                content: 'Checking...'
            });
            load_1.present();
            var postpromo = {
                getit: "apply_coupon",
                user_id: localStorage.getItem('user_id'),
                product_id: this.cartproduct,
                promo: promo,
            };
            console.log(postpromo);
            var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
            var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
            this.http.post(this.customer.base_url + 'coupon_validation.php', postpromo, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (response) {
                load_1.dismiss();
                console.log(response);
                if (response.code == 1) {
                    var toast = _this.toastCtrl.create({
                        message: response.msg,
                        duration: 3000,
                        position: 'bottom'
                    });
                    toast.present();
                    _this.coupon = response.coupon_amount;
                    // this.netamount = response.cart_amount;
                    _this.price = parseInt(response.cart_amount);
                }
                else {
                    var toast = _this.toastCtrl.create({
                        message: response.msg,
                        duration: 3000,
                        position: 'bottom'
                    });
                    toast.present();
                    _this.coupon = 0;
                    // this.netamount = this.price;
                }
            });
        }
    };
    PurchasePage.prototype.usrdetail = function () {
        var _this = this;
        this.details = [];
        //    var loading = this.loadingCtrl.create({
        //      spinner: 'bubbles',
        //      showBackdrop: false,
        //      cssClass: 'loader'
        //    });
        //    loading.present()
        var postdata1 = {
            event_id: this.navParams.get('event_id'),
            getit: "event_detail",
        };
        var serialized_all = this.serializeObj(postdata1);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.http.post(this.customer.base_url + 'user.php', serialized_all, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (dataa) {
            //    loading.dismiss();
            console.log(dataa);
            for (var _i = 0, _a = dataa.data; _i < _a.length; _i++) {
                var data3 = _a[_i];
                _this.details.push({
                    "Eventimage": data3.Eventimage,
                    "post_title": data3.post_title,
                    "viewcount": data3.viewcount,
                    "Eventvanue": data3.Eventvanue,
                    "EventEndDate": data3.EventEndDate,
                    "EventStartDate": data3.EventStartDate,
                    "vanueaddress": data3.vanueaddress,
                });
            }
            console.log(_this.details);
        });
    };
    PurchasePage.prototype.tickets = function () {
        var _this = this;
        this.ticketss = [];
        var loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            showBackdrop: false,
            cssClass: 'loader'
        });
        loading.present();
        var postdata1 = {
            post_id: this.navParams.get('event_id'),
            getit: "tickets_details",
            user_id: localStorage.getItem('user_id'),
        };
        console.log(postdata1);
        var serialized_all = this.serializeObj(postdata1);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.http.post(this.customer.base_url + 'user.php', serialized_all, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (dataa) {
            loading.dismiss();
            console.log(dataa);
            _this.cardss = dataa.usercard;
            console.log(_this.cardss);
            if (dataa.usercard.length > 0) {
                _this.x = 1;
            }
            //  if(this.cardss.length > 0){
            //   console.log(this.cardss[0].id)
            //   this.data1 ={
            //     card : this.cardss[0].id
            //  }
            //   }
            if (dataa.rsvp.length > 0) {
                for (var j = 0; j < dataa.rsvp.length; j++) {
                    var quantity = void 0;
                    if (dataa.rsvp[j].ticketmeta._stock == undefined) {
                        quantity = 0;
                        var ticketdata = {
                            post_id: dataa.rsvp[j].post_id,
                            meta_id: dataa.rsvp[j].meta_id,
                            price: dataa.rsvp[j].ticketmeta._price[0],
                            ticket_name: dataa.rsvp[j].ticketdata.post_title,
                            detail: dataa.rsvp[j].ticketdata.post_excerpt,
                            //  quantity: dataa.rsvp[j].ticketmeta._stock[0],
                            ticket_tyoe: 'rsvpticket',
                            total_sales: dataa.rsvp[j].ticketmeta.total_sales[0],
                        };
                        _this.ticketss.push(ticketdata);
                        _this.data.select[dataa.rsvp[j].post_id] = "0";
                        _this.pri = dataa.rsvp[j].ticketmeta._price[0];
                    }
                    else {
                        var ticketdata = {
                            post_id: dataa.rsvp[j].post_id,
                            meta_id: dataa.rsvp[j].meta_id,
                            price: dataa.rsvp[j].ticketmeta._price[0],
                            ticket_name: dataa.rsvp[j].ticketdata.post_title,
                            detail: dataa.rsvp[j].ticketdata.post_excerpt,
                            quantity: dataa.rsvp[j].ticketmeta._stock[0],
                            ticket_tyoe: 'rsvpticket',
                            total_sales: dataa.rsvp[j].ticketmeta.total_sales[0],
                            remaning: parseInt(dataa.rsvp[j].ticketmeta._stock[0]) - parseInt(dataa.rsvp[j].ticketmeta.total_sales[0])
                        };
                        _this.ticketss.push(ticketdata);
                        _this.data.select[dataa.rsvp[j].post_id] = "0";
                        _this.pri = dataa.rsvp[j].ticketmeta._price[0];
                    }
                }
            }
            if (dataa.woocommerece.length > 0) {
                for (var k = 0; k < dataa.woocommerece.length; k++) {
                    var quantity = void 0;
                    if (dataa.woocommerece[k].ticketmeta._stock == undefined) {
                        quantity = 0;
                        var ticketdata = {
                            post_id: dataa.woocommerece[k].post_id,
                            meta_id: dataa.woocommerece[k].meta_id,
                            price: dataa.woocommerece[k].ticketmeta._price[0],
                            ticket_name: dataa.woocommerece[k].ticketdata.post_title,
                            detail: dataa.woocommerece[k].ticketdata.post_excerpt,
                            // quantity:  quantity,
                            ticket_tyoe: 'wooticket',
                            total_sales: dataa.woocommerece[k].ticketmeta.total_sales[0],
                        };
                        _this.ticketss.push(ticketdata);
                        _this.data.select[dataa.woocommerece[k].post_id] = "0";
                    }
                    else {
                        var ticketdata = {
                            post_id: dataa.woocommerece[k].post_id,
                            meta_id: dataa.woocommerece[k].meta_id,
                            price: dataa.woocommerece[k].ticketmeta._price[0],
                            ticket_name: dataa.woocommerece[k].ticketdata.post_title,
                            detail: dataa.woocommerece[k].ticketdata.post_excerpt,
                            quantity: dataa.woocommerece[k].ticketmeta._stock[0],
                            ticket_tyoe: 'wooticket',
                            total_sales: dataa.woocommerece[k].ticketmeta.total_sales[0],
                            remaning: parseInt(dataa.woocommerece[k].ticketmeta._stock[0]) - parseInt(dataa.woocommerece[k].ticketmeta.total_sales[0])
                        };
                        _this.ticketss.push(ticketdata);
                        _this.data.select[dataa.woocommerece[k].post_id] = "0";
                    }
                }
                _this.pricee = dataa.woocommerece[0].ticketmeta._price[0];
                // this.quant =  dataa.woocommerece[0].ticketmeta._stock[0];
                // this.postid = dataa.woocommerece[0].post_id;
                // alert(this.data.select[dataa.woocommerece[0].post_id].value)
                // this.qtysel = parseInt(this.data.select[dataa.woocommerece[0].post_id])* parseInt(dataa.woocommerece[0].ticketmeta._stock[0]);
                console.log(_this.data);
            }
        });
    };
    PurchasePage.prototype.pricecal = function (qty, pri, qtyr, name, type) {
        if (this.cartproduct.length > 0) {
            for (var i = 0; i < this.cartproduct.length; i++) {
                if (this.cartproduct1.indexOf(qty) != -1) {
                    if (this.cartproduct[i].post_id == qty && parseInt(qtyr) != 0) {
                        this.cartproduct[this.cartproduct1.indexOf(qty)].quantity = qtyr;
                    }
                    else if (this.cartproduct[i].post_id == qty && parseInt(qtyr) == 0) {
                        this.cartproduct.splice(i, 1);
                        this.cartproduct1.splice(this.cartproduct1.indexOf(qty), 1);
                    }
                }
                else {
                    this.cartproduct.push({ ticket_name: name, post_id: qty, price: pri, quantity: qtyr, ticket_type: type });
                    this.cartproduct1.push(qty);
                }
            }
        }
        else {
            this.cartproduct.push({ ticket_name: name, post_id: qty, price: pri, quantity: qtyr, ticket_type: type });
            this.cartproduct1.push(qty);
        }
        this.price = 0;
        if (this.cartproduct.length > 0) {
            console.log(this.cartproduct);
            console.log(this.cartproduct1);
            for (var i in this.cartproduct) {
                this.price = this.price + (parseInt(this.cartproduct[i].quantity) * parseInt(this.cartproduct[i].price)); // this.price+(qtyr* pri);
            }
        }
    };
    //  pay(formdata)
    //  {
    //    console.log(formdata.value);
    //    //if(formdata.quantity_post_id.length>0){
    //    console.log(this.cartproduct)
    //    console.log(this.data1.card)
    //    for(let i=0; i<this.ticketss.length;i++ ){
    //    for(let j=0;j< this.cartproduct.length;j++){
    //    if(this.ticketss[i].post_id== this.cartproduct[j].post_id){
    //       if(this.ticketss[i].ticket_tyoe=='rsvpticket')  {
    //        let daata= "quantity_"+this.cartproduct[j].post_id;
    //        console.log(daata)
    //        var post1={
    //         ticket_type :this.ticketss[i].ticket_tyoe,
    //         getit: "purchase_ticket",
    //         email: localStorage.getItem('email'),
    //         full_name: localStorage.getItem('name'),
    //         order_status:'' ,
    //         product_id: this.cartproduct[j].post_id,
    //         daata: this.cartproduct[j].quantity
    //        }
    //          console.log(post1)
    //    var serialized_all1 = this.serializeObj(post1);
    //    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
    //    let options = new RequestOptions({ headers: headers });
    //    this.http.post(this.customer.base_url + 'user.php', serialized_all1, options)
    //     .map(res=>res.json())
    //     .subscribe((dataa)=>{
    //                      console.log(dataa)
    //     })
    //     }
    //     else{
    //      var post2={
    //       getit: "wooticket",
    //       user_id :localStorage.getItem('user_id'),
    //       product_id: this.cartproduct[j].post_id,
    //       quantity: this.cartproduct[j].quantity,
    //       card_id: this.data1.card,
    //       promo :this.data1.promo
    //            }
    //        console.log(post2)
    //  var serialized_all2 = this.serializeObj(post2);
    //  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
    //  let options = new RequestOptions({ headers: headers });
    //  this.http.post(this.customer.base_url + 'user.php', serialized_all2, options)
    //   .map(res=>res.json())
    //   .subscribe((dataa)=>{
    //                    console.log(dataa)
    //   })
    //     }
    //     }
    //    } 
    //   }
    //   // var toast = this.toastCtrl.create({
    //   //   message: "Success! ticket purchased successfully",
    //   //   duration: 3000,
    //   //   position: 'Top'
    //   // });
    //   // toast.present();
    //  }
    PurchasePage.prototype.deletecard = function (customerid, cardid) {
        var _this = this;
        var loading1 = this.loadingCtrl.create({
            spinner: 'bubbles',
            showBackdrop: false,
            cssClass: 'loader'
        });
        loading1.present();
        var postsss = {
            stripe_user_id: customerid,
            card_id: cardid,
            getit: "delete_card",
            user_id: localStorage.getItem('user_id'),
        };
        console.log(postsss);
        var serialized_all = this.serializeObj(postsss);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.http.post(this.customer.base_url + 'ticket.php', serialized_all, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (dataaaa) {
            loading1.dismiss();
            console.log(dataaaa);
            if (dataaaa.status.deleted == true) {
                _this.cardss = dataaaa.usercard;
                var toast = _this.toastCtrl.create({
                    message: "Card has been successfully deleted",
                    duration: 3000,
                    position: 'Bottom'
                });
                toast.present();
            }
        });
    };
    PurchasePage.prototype.pay_new = function (formdata) {
        var _this = this;
        console.log(this.data1.card);
        console.log(this.cartproduct.length);
        if (this.cartproduct.length == 0) {
            var toast = this.toastCtrl.create({
                message: "Select a ticket",
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
        }
        else if (this.data1.card == "") {
            var toast = this.toastCtrl.create({
                message: "Select A Card For Payment",
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
        }
        else {
            var loader = this.loadingCtrl.create({
                spinner: 'bubbles',
                showBackdrop: false,
                cssClass: 'loader'
            });
            loader.present();
            console.log(this.cardss);
            console.log(formdata.value);
            console.log("nitin");
            console.log(this.ticketss);
            console.log("netin");
            console.log(this.cartproduct);
            var post2 = {
                getit: "wooticket",
                user_id: localStorage.getItem('user_id'),
                product_id: this.cartproduct,
                promo: this.data1.promo,
                card_id: this.data1.card,
            };
            this.event_id = this.navParams.get('event_id');
            var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
            var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
            this.http.post(this.customer.base_url + 'purchase.php', post2, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (response) {
                loader.dismiss();
                console.log(response);
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__scan_scan__["a" /* ScanPage */], { ID: _this.event_id }, { animate: false });
                _this.price = 0;
                _this.cartproduct = [];
                _this.coupon = 0;
                _this.data = {
                    select: []
                };
                _this.data1 = {
                    promo: '',
                    card: ''
                };
            });
        }
    };
    PurchasePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PurchasePage');
    };
    return PurchasePage;
}());
PurchasePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-purchase',template:/*ion-inline-start:"/Volumes/D/customer/src/pages/purchase/purchase.html"*/'<ion-header>\n  <ion-navbar>\n       <ion-title>Get Tickets</ion-title>\n    </ion-navbar>\n </ion-header>\n   <form  #heroForm="ngForm"  name= "form" style="height: 100%;">\n  <ion-content>\n      <ion-refresher (ionRefresh)="doRefresh($event)">\n          <ion-refresher-content\n          pullingIcon="arrow-dropdown"\n          pullingText="Pull to refresh"\n          refreshingSpinner="circles"\n          refreshingText="Refreshing...">\n        </ion-refresher-content>\n      </ion-refresher>  \n    \n\n      <div class="seven">\n        <div class="evnt" *ngFor="let eventsss of details">\n          <h2>{{eventsss.post_title}}</h2>\n          <h4>{{eventsss.Eventvanue}} <span>{{eventsss.vanueaddress}}</span></h4>\n          <p>{{eventsss.EventStartDate}} - {{eventsss.EventEndDate}}</p>\n        </div>\n  \n        <ion-grid style="padding: 0px;">\n          <ion-row class="qty">\n            <ion-col col-3>Qty</ion-col>\n            <ion-col col-3>Price</ion-col>\n            <ion-col col-6>Ticket Type</ion-col>\n          </ion-row>\n          <ion-row class="vp" *ngFor="let event of ticketss">\n            <ion-col col-3>\n              <ion-list style="margin: 0px;">\n                <ion-item class="slct">\n                  <ion-select [(ngModel)]="data?.select[event.post_id]" (ionChange)="pricecal(event.post_id,event.price,data?.select[event.post_id],event.ticket_name, event.ticket_tyoe)" name="quantity_{{event.post_id}}" required>\n                    <ion-option value="0">0</ion-option>\n                    <ion-option value="1">1</ion-option>\n                    <ion-option value="2">2</ion-option>\n                    <ion-option value="3">3</ion-option>\n                    <ion-option value="4">4</ion-option>\n                    <ion-option value="5">5</ion-option>\n                    <ion-option value="6">6</ion-option>\n                    <ion-option value="7">7</ion-option>\n                    <ion-option value="8">8</ion-option>\n                    <ion-option value="9">9</ion-option>\n                    <ion-option value="10">10</ion-option>\n                    <ion-option value="11">11</ion-option>\n                    <ion-option value="12">12</ion-option>\n                    <ion-option value="13">13</ion-option>\n                    <ion-option value="14">14</ion-option>\n                    <ion-option value="15">15</ion-option>\n                    <ion-option value="16">16</ion-option>\n                    <ion-option value="17">17</ion-option>\n                    <ion-option value="18">18</ion-option>\n                    <ion-option value="19">19</ion-option>\n                    <ion-option value="20">20</ion-option>\n                  </ion-select>\n                </ion-item>\n              </ion-list>\n            </ion-col>\n            <ion-col col-3><span>${{event.price}}</span></ion-col>\n            <ion-col col-6><span>{{event.ticket_name}}</span></ion-col>\n            <ion-col col-12 style="padding-top: 0px;padding-bottom: 0px;">\n              <!-- <span>{{event.remaning}} remain</span> -->\n              <p>{{event.detail}}</p>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n  \n        <ion-item-group class="promo">\n          <ion-item-divider color="light">\n            <ion-input type="text" [(ngModel)]="data1.promo" name=\'promo\' placeholder="Enter Promo Code" class="inpt"></ion-input>\n            <button [disabled]="cartproduct.length == 0" ion-button small clear item-end (click)="apply_promo(data1.promo)">\n              Apply\n           </button> \n          </ion-item-divider>\n        </ion-item-group>\n  \n        <ion-item-group>\n          <!-- <ion-item-divider color="light" style=" border-bottom: 1px solid #e5e5e6!important;">YOUR INFO \n            <button ion-button small clear item-end (click)="signout();">\n               Sign Out\n            </button> \n          </ion-item-divider>\n          <div>\n          <ion-label>enter emails</ion-label>\n          </div> -->\n\n          <ion-item-divider color="light" style=" border-bottom: 1px solid #e5e5e6!important;">MORE INFO</ion-item-divider>\n          <h3 class="how">How did you hear about this event?</h3>\n          <ion-item class="know" >\n            <ion-label>OutBuzz</ion-label>\n            <ion-checkbox color="dark"></ion-checkbox>\n          </ion-item>\n          <ion-item class="know" >\n            <ion-label>Promoter email</ion-label>\n            <ion-checkbox color="dark"></ion-checkbox>\n          </ion-item>\n          <ion-item class="know" >\n           <ion-label>Banner ad</ion-label>\n           <ion-checkbox color="dark"></ion-checkbox>\n            </ion-item>\n          <ion-item class="know" >\n           <ion-label>Social Media</ion-label>\n           <ion-checkbox color="dark"></ion-checkbox>\n          </ion-item>\n\n        </ion-item-group>\n  <div *ngIf= "x == 1">\n  <ion-item-divider color="light" style=" border-bottom: 1px solid #e5e5e6!important; border-top: 1px solid #e5e5e6!important;">PAYMENT INFO\n      <button class="chnge" ion-button small clear item-end (click)="presentCardModal()">Change <ion-icon name="arrow-forward"></ion-icon> </button>\n  </ion-item-divider>\n\n  <div *ngIf="cardss" class="crd">\n  <div class="credit">\n    <span [hidden]="cardss.length==0">\n      <ion-item-group>\n      <ion-list radio-group [(ngModel)]="data1.card" name="card" required>\n      <div *ngFor="let cards of cardss" class="main" >\n        <ion-icon class="card0" item-start name="ios-card"></ion-icon>\n        <ion-item style="width:auto;float:left">\n         <ion-label class="abc">Credit Card **** {{cards.last4}}</ion-label>\n         <ion-radio [value] =\'cards.id\'></ion-radio>\n         <button ion-button small clear item-end (click)="deletecard(cards.customer, cards.id);">Delete</button>\n       </ion-item>\n      </div>\n     </ion-list>\n    </ion-item-group>\n    </span>\n  </div>\n  </div>\n  </div>\n\n  <div *ngIf= "x == 0" class="crd1">\n    <ion-item-divider color="light" style=" border-bottom: 1px solid #e5e5e6!important; border-top: 1px solid #e5e5e6!important;">Enter Payment Info\n    <button ion-button small clear item-end (click)="presentCardModal()">\n      Add Card <ion-icon name="arrow-forward"></ion-icon>\n     </button>\n     </ion-item-divider>\n   <div *ngIf="cardss" class="crd">\n      <div class="credit">\n      <span [hidden]="cardss.length==0">\n      <ion-item-group>\n      <ion-list radio-group [(ngModel)]="data1.card" name="card" required>\n      <div *ngFor="let cards of cardss" class="main" >\n        <ion-icon class="card0" item-start name="ios-card"></ion-icon>\n        <ion-item style="width:auto;float:left">\n         <ion-label class="abc">Credit Card **** {{cards.last4}}</ion-label>\n         <ion-radio [value] =\'cards.id\'></ion-radio>\n         <button ion-button small clear item-end (click)="deletecard(cards.customer, cards.id);">Delete</button>\n       </ion-item>\n      </div>\n     </ion-list>\n    </ion-item-group>\n    </span>\n  </div>\n  </div>\n  </div>\n      <!-- <button ion-button full color="secondary" ion-button block class="submit"  (click)="presentProfileModal()" >Add Billing Details</button>  -->\n  \n        <ion-item-group>\n          <ion-item-divider color="light" style=" border-bottom: 1px solid #e5e5e6!important; border-top: 1px solid #e5e5e6!important;">SUMMARY</ion-item-divider>\n          <ion-list style="margin-bottom: 8px;" *ngFor="let task of cartproduct">\n            <ion-item class="tic" *ngIf="task.quantity != 0">\n              {{task.ticket_name}} X {{task.quantity}}\n              <ion-icon name="" item-end>${{task.quantity * task.price}}</ion-icon>\n            </ion-item>\n\n             <!-- <ion-item class="tic">\n                Processing fees\n                <ion-icon name="" item-end>${{0}}</ion-icon>\n              </ion-item> -->\n\n          </ion-list>\n        </ion-item-group>\n        <ion-item class="tic">\n          Coupon Amount\n         <ion-icon name="" item-end>${{coupon}}</ion-icon>\n        </ion-item> \n        <ion-item class="tic">\n            Total\n             <ion-icon name="" item-end>${{price}}</ion-icon>\n        </ion-item>\n    </div>\n<!--     <button [disabled]="!heroForm.valid" (ngSubmit)="pay_new(heroForm)" ion-button full color="secondary" ion-button block class="submit"  type="submit">Pay ${{price}} Securely</button>-->\n<!--</form>-->\n   </ion-content>\n  <ion-footer>\n<!--      <form  #heroForm="ngForm"  name= "form">-->\n    <ion-toolbar>\n    <button  (click)="pay_new(heroForm)" ion-button full color="secondary" ion-button block class="submit">Pay ${{price}} Securely</button>\n    </ion-toolbar>\n   </ion-footer>\n</form> \n'/*ion-inline-end:"/Volumes/D/customer/src/pages/purchase/purchase.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_customer_customer__["a" /* CustomerProvider */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], PurchasePage);

//# sourceMappingURL=purchase.js.map

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScanPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_customer_customer__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_calendar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_social_sharing__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__purchase_purchase__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__signup_signup__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__producer_producer__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_clipboard__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__tabs_tabs__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var ScanPage = (function () {
    function ScanPage(navCtrl, navParams, toastCtrl, customer, http, calendar, geolocation, loadingCtrl, actionSheetCtrl, socialSharing, clipboard) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.customer = customer;
        this.http = http;
        this.calendar = calendar;
        this.geolocation = geolocation;
        this.loadingCtrl = loadingCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.socialSharing = socialSharing;
        this.clipboard = clipboard;
        this.pet = "Tickets";
        this.vendordata = [];
        this.details = [];
        this.store = [];
        this.showmore = "120px";
        this.showmoremorepos = "absolute";
        this.readles = 1;
        this.lats = [];
        this.vendor = [];
        this.detailsss = [];
        this.gettickets();
        if (localStorage.getItem('user_id') == null) {
            this.bit = 0;
        }
        else {
            this.bit = 1;
        }
        this.detail();
    }
    ScanPage.prototype.readmore = function () {
        this.showmore = "";
        this.showmoremorepos = "";
        this.readles = 0;
    };
    ScanPage.prototype.readless = function () {
        this.showmore = "120px";
        this.showmoremorepos = "absolute";
        this.readles = 1;
    };
    // bit = 0;
    ScanPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    ScanPage.prototype.ngOnInit = function () {
        this.acService = new google.maps.places.AutocompleteService();
        this.geocoder = new google.maps.Geocoder();
        this.autocompleteItems = [];
        this.autocomplete = {
            query: ''
        };
    };
    ScanPage.prototype.getlocations = function (lat, lng) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        //  headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        // let options = new RequestOptions({ headers: headers });
        var aa = this;
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.geolocation.getCurrentPosition().then(function (resp) {
            _this.currentLatitude = resp.coords.latitude;
            _this.currentLongitude = resp.coords.longitude;
            console.log(_this.currentLatitude);
            console.log(_this.currentLongitude);
            localStorage.setItem('lat1', _this.currentLatitude);
            localStorage.setItem('lon1', _this.currentLongitude);
            console.log(localStorage.getItem('lon1'));
            console.log(localStorage.getItem('lat1'));
            var latLng = new google.maps.LatLng(lat, lng);
            _this.geocoder.geocode({ 'latLng': latLng }, (function (results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    if (results[1]) {
                        _this.autocomplete.query = results[1].formatted_address;
                    }
                }
            }));
            var mapOptions = {
                center: latLng,
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            _this.map = new google.maps.Map(aa.mapElement.nativeElement, mapOptions);
            var marker = new google.maps.Marker({
                position: latLng,
                draggable: false,
                map: _this.map,
                icon: 'assets/icon/pin.png',
            });
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
        var watch = this.geolocation.watchPosition();
        watch.subscribe(function (data) {
        });
        if (this.currentLongitude) {
            return this.LatLong = (this.currentLatitude, this.currentLongitude);
        }
    };
    ScanPage.prototype.getdistance = function (lat1, lon1, lat2, lon2, unit) {
        var radlat1 = Math.PI * lat1 / 180;
        var radlat2 = Math.PI * lat2 / 180;
        var theta = lon1 - lon2;
        var radtheta = Math.PI * theta / 180;
        var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
        dist = Math.acos(dist);
        dist = dist * 180 / Math.PI;
        dist = dist * 60 * 1.1515;
        if (unit == "K") {
            dist = dist * 1.609344;
        }
        if (unit == "N") {
            dist = dist * 0.8684;
        }
        var a = Math.round(dist);
        console.log(a);
        return a;
    };
    ScanPage.prototype.detail = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            showBackdrop: false,
            cssClass: 'loader'
        });
        loading.present();
        var aa = this;
        var postdata1 = {
            user_id: localStorage.getItem('user_id'),
            event_id: this.navParams.get('ID'),
            getit: "event_detail",
        };
        console.log(postdata1);
        this.ID = this.navParams.get('event_id');
        var serialized_all = this.serializeObj(postdata1);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.http.post(this.customer.base_url + 'user.php', serialized_all, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (dataa) {
            console.log(dataa);
            loading.dismiss();
            _this.vendor = dataa.vendordata.image;
            _this.latitude = localStorage.getItem('lat1');
            _this.longitude = localStorage.getItem('lon1');
            _this.arr = dataa.vendordata;
            //  this.arr2=dataa.vendordata.meta.first_name[0];
            _this.name = dataa.vendordata.vendorinfo.data.display_name;
            for (var _i = 0, _a = dataa.data; _i < _a.length; _i++) {
                var data3 = _a[_i];
                if (data3.post_content.length < 100) {
                    _this.hidebutton = 1;
                }
                else {
                    _this.hidebutton = 0;
                }
                _this.details.push({
                    Eventimage: data3.Eventimage,
                    post_title: data3.post_title,
                    viewcount: data3.viewcount,
                    Eventvanue: data3.Eventvanue,
                    EventEndDate: data3.EventEndDate,
                    EventStartDate: data3.EventStartDate,
                    catageories: data3.catageories[0],
                    catageoriess: data3.catageories[1],
                    vanueaddress: data3.vanueaddress,
                    post_content: data3.post_content,
                    is_liked: data3.is_liked,
                    ID: data3.ID,
                    rsvpticket: data3.rsvpticket,
                    wooticket: data3.wooticket,
                });
                _this.getlocations(data3.vanuelat, data3.vanuelng);
                _this.vanuelat = data3.vanuelat;
                _this.vanuelng = data3.vanuelng;
                console.log(_this.latitude, _this.longitude, data3.vanuelat, data3.vanuelng);
                _this.unit = true;
                var distance = _this.getdistance(_this.latitude, _this.longitude, data3.vanuelat, data3.vanuelng, 'K');
                _this.dis = distance + "KM";
            }
            console.log(_this.details);
            for (var _b = 0, _c = dataa.upcomming; _b < _c.length; _b++) {
                var dataas = _c[_b];
                _this.detailsss.push({
                    "Eventimage": dataas.Eventimage,
                    "post_title": dataas.post_title,
                    "viewcount": dataas.viewcount,
                    "Eventvanue": dataas.Eventvanue,
                    "EventEndDate": dataas.EventEndDate,
                    "EventStartDate": dataas.EventStartDate,
                    "vanueaddress": dataas.vanueaddress,
                    "post_content": dataas.post_content,
                    "userticketcount": dataas.userticketcount,
                    "ID": dataas.ID
                });
                var end = new Date(dataas.EventEndDate);
                var start = new Date(dataas.EventStartDate);
                var datef = new Date();
                console.log(new Date);
                console.log(end);
                console.log(start);
                var totalLiveEvents = [];
                var totalUpcomingEvents = [];
                if (start < datef && end > datef) {
                    console.log("correct");
                    totalLiveEvents.push(dataas);
                }
            }
            console.log(_this.detailsss);
            console.log(totalLiveEvents);
            console.log(totalLiveEvents.length);
            _this.length = totalLiveEvents.length;
            // this.getdistance(this.currentLatitude,this.currentLongitude, dataa.data.vanuelat, dataa.data.vanuelng, dataa.units);
        });
    };
    ScanPage.prototype.toggledis = function () {
        this.unit = !this.unit;
        if (this.unit == true) {
            var distances = this.getdistance(this.latitude, this.longitude, this.vanuelat, this.vanuelng, 'N');
            this.dis = distances + "MI";
        }
        else {
            var distances = this.getdistance(this.latitude, this.longitude, this.vanuelat, this.vanuelng, 'K');
            this.dis = distances + "KM";
        }
    };
    ScanPage.prototype.poplike = function (post_id, status) {
        if (parseInt(this.details[0].ID) == parseInt(post_id)) {
            this.details[0].is_liked = status;
        }
        var postdata1 = {
            user_id: localStorage.getItem('user_id'),
            post_id: post_id,
            getit: "pstlike",
            status: status,
        };
        var serialized_all = this.serializeObj(postdata1);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.http.post(this.customer.base_url + 'user.php', serialized_all, options).map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log(data);
        });
    };
    ScanPage.prototype.shareInfo = function (guid) {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            buttons: [
                {
                    text: 'Share to Facebook',
                    handler: function () {
                        _this.socialSharing.shareViaFacebook('message', null, 'http://www.google.com').then(function () {
                            var toast = _this.toastCtrl.create({
                                message: "Shared to facebook",
                                duration: 5000,
                                position: 'bottom'
                            });
                            toast.present();
                        }).catch(function () {
                            // alert(JSON.stringify(err))
                            var toast = _this.toastCtrl.create({
                                message: "Not able to Share to facebook",
                                duration: 5000,
                                position: 'bottom'
                            });
                            toast.present();
                        });
                    }
                },
                {
                    text: 'Share to Messenger',
                    handler: function () {
                        _this.socialSharing.shareViaFacebook('message', null, 'http://www.google.com').then(function () {
                            var toast = _this.toastCtrl.create({
                                message: "Shared to Messenger",
                                duration: 5000,
                                position: 'bottom'
                            });
                            toast.present();
                        }).catch(function () {
                            var toast = _this.toastCtrl.create({
                                message: "Not able to share to messenger",
                                duration: 5000,
                                position: 'bottom'
                            });
                            toast.present();
                        });
                    }
                },
                {
                    text: 'Share to Whatsapp',
                    handler: function () {
                        _this.socialSharing.shareViaWhatsApp('message', null, 'http://www.google.com').then(function () {
                            var toast = _this.toastCtrl.create({
                                message: "Shared to Whatsapp",
                                duration: 5000,
                                position: 'bottom'
                            });
                            toast.present();
                        }).catch(function () {
                            var toast = _this.toastCtrl.create({
                                message: "Not able to share to whatsapp",
                                duration: 5000,
                                position: 'bottom'
                            });
                            toast.present();
                        });
                    }
                },
                {
                    text: 'Tweet',
                    handler: function () {
                        _this.socialSharing.shareViaTwitter('Hey gurl! Check out this amazing app and join this amazing event!', null, 'http://www.google.com').then(function () {
                            var toast = _this.toastCtrl.create({
                                message: "Shared to Twitter",
                                duration: 5000,
                                position: 'bottom'
                            });
                            toast.present();
                        }).catch(function () {
                            var toast = _this.toastCtrl.create({
                                message: "Not able to share to twitter",
                                duration: 5000,
                                position: 'bottom'
                            });
                            toast.present();
                        });
                    }
                },
                {
                    text: 'Copy Event Link',
                    handler: function () {
                        _this.clipboard.copy(guid);
                        var toast = _this.toastCtrl.create({
                            message: "link copied",
                            duration: 3000,
                            position: 'bottom'
                        });
                        toast.present();
                    }
                },
                {
                    text: 'Email Event',
                    handler: function () {
                        _this.socialSharing.shareViaEmail(guid, 'Subject', ['recipient@example.org']).then(function () {
                        }).catch(function () {
                        });
                        console.log('Archive clicked');
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    ScanPage.prototype.ticket = function (id) {
        // alert(id)
        console.log(id);
        if (this.bit == 0) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__signup_signup__["a" /* SignupPage */], {}, { animate: false });
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__purchase_purchase__["a" /* PurchasePage */], {
                event_id: id,
            }, { animate: false });
        }
    };
    ScanPage.prototype.producer = function (idd) {
        // alert(idd)
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__producer_producer__["a" /* ProducerPage */], {
            ID: idd,
        }, { animate: false });
    };
    ScanPage.prototype.gettickets = function () {
        var _this = this;
        var postdata = {
            user_id: localStorage.getItem('user_id'),
            event_id: this.navParams.get('ID'),
            getit: "qr_tickets",
        };
        var serialized_all = this.serializeObj(postdata);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.http.post(this.customer.base_url + 'ticket.php', serialized_all, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log(data);
            // for(let j=0;j<data.length;j++)
            // {
            //   let store={
            //     _EventStartDate: data.events[0].event_meta._EventStartDate,
            //     post_title: data.events[0].post_title
            //   }
            // }
            if (data.events.length > 0) {
                _this.alldata = data.events[0];
                console.log(_this.alldata);
            }
            _this.baseurll = "simerjit.crystalbiltech.com/";
        });
    };
    ScanPage.prototype.invoke = function (titlename, ticketloc, dates, datee) {
        var _this = this;
        // console.log(titlename+'//'+ticketloc+'//'+dates+'//'+datee);
        this.calendar.createEventInteractively(titlename, ticketloc, '', dates, datee).then(function (msg) {
            console.log('event added to calendar!');
            var toast = _this.toastCtrl.create({
                message: "Event added to calendar",
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
        }, function (err) {
            console.log('Oops!Something wrong');
        });
    };
    ScanPage.prototype.share = function (guid) {
        var _this = this;
        this.socialSharing.shareViaEmail(guid, 'Tickets purchased', ['recipient@example.org']).then(function () {
            var toast = _this.toastCtrl.create({
                message: "Email sent",
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
            console.log('Successfully Done');
        }).catch(function () {
            var toast = _this.toastCtrl.create({
                message: 'Oops!Something wrong',
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
            console.log('Something is wrong');
        });
    };
    ScanPage.prototype.backtohome = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__tabs_tabs__["a" /* TabsPage */], {}, { animate: false });
    };
    return ScanPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["ViewChild"])('map'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__angular_core__["ElementRef"])
], ScanPage.prototype, "mapElement", void 0);
ScanPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
        selector: 'page-scan',template:/*ion-inline-start:"/Volumes/D/customer/src/pages/scan/scan.html"*/'<ion-header>\n  \n    <ion-navbar>\n        <ion-segment [(ngModel)]="pet">\n            <ion-segment-button value="Tickets">\n              Tickets\n            </ion-segment-button>\n            <ion-segment-button value="Info">\n              Info\n            </ion-segment-button>\n          </ion-segment>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content>\n\n      <div [ngSwitch]="pet">\n          <div *ngSwitchCase="\'Tickets\'" class="vip">\n            <div style="padding: 16px 16px 0px">\n                <div *ngIf="alldata?.ticket?.length>0">\n                    <div *ngFor="let ticketdata of alldata?.ticket"> \n                      <span *ngIf="ticketdata.ticketdata != null">\n                          <ngx-qrcode [qrc-value]=\'baseurll+"outbuzz/event_qr_code=1&ticket_id="+ticketdata.ticket_id+"&event_id="+alldata.ID\'></ngx-qrcode>\n                          \n                      </span>\n                  \n              <!-- <div class="scan"><img src="assets/img/scan.jpg" /></div> -->\n            \n              <h4>{{alldata.post_title}}</h4>\n              <h3 *ngIf="ticketdata.userdata!=false">{{ticketdata.userdata.data.display_name}}</h3>\n              <h2>{{ticketdata.ticketdata.post_title}}</h2>\n              <span>{{alldata.event_meta._EventStartDate}}</span>\n           \n      <div class="add">\n        <ion-list>\n          <!-- <ion-item>\n            <ion-icon name="" item-start><img src="assets/img/wallet.png" /></ion-icon>\n              Add to Apple Wallet\n          </ion-item> -->\n\n          <ion-item (click)="invoke(ticketdata?.ticketdata.post_title,detailsss[0]?.Eventvanue,detailsss[0]?.EventStartDate,detailsss[0]?.EventEndDate);">\n              <ion-icon name="" item-start><img src="assets/img/calendar.png" /></ion-icon>\n                Add to Calendar\n          </ion-item>\n\n          <ion-item (click)="share(alldata.guid);">\n                <ion-icon name="" item-start><img src="assets/img/message.png" /></ion-icon>\n                  Email\n          </ion-item>\n        </ion-list>\n      </div>\n          </div>\n          </div>\n        </div>\n        <button ion-button round outline (click)="backtohome();">Back to User Area</button>       \n          </div>\n        \n          <div *ngSwitchCase="\'Info\'">\n            <div class="even" *ngFor="let eventsss of details">\n              <img [src]=\'eventsss.Eventimage\'>\n            </div>\n    \n          <ion-card no-margin class="txt" *ngFor="let eventsss of details" >\n          <div class="card-title">{{eventsss.EventStartDate| date:\'EE,MMM d,hh:mm a \'}} - {{eventsss.EventEndDate| date:\'EE,MMM d,hh:mm a \'}}</div>\n          <div class="card-subtitle">{{eventsss.post_title}}</div>\n          <div class="sidebar-box black" [ngStyle]="{\'max-height\': showmore}">\n              <p [innerHTML]=\'eventsss.post_content\'>Malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n              <span class="read-more" [ngStyle]="{\'position\':showmoremorepos}"></span>\n              <!-- <div (click)="isCollapsed =! isCollapsed">Read more</div> -->\n            </div>\n            <button *ngIf="readles==1 && hidebutton==0" ion-button color="black" clear class="read" (click)="readmore();" >Read More</button>\n            <button *ngIf="readles==0 && hidebutton==0" ion-button color="black" clear class="read" (click)="readless();" >Read Less</button>\n          <!-- <p class="cnt" [innerHTML]=\'eventsss.post_content\'></p> -->\n      \n            <!--<div class="mp"><img src="assets/img/map.png" /></div>-->\n            <div *ngIf="eventsss?.vanueaddress!=null" #map class="mp" ></div>\n        </ion-card >\n        <ion-list  *ngFor="let eventsss of details" class="km">\n            <ion-item >\n              <h2>{{eventsss.Eventvanue}}</h2>\n              <!--<h3>{{eventsss.vanueaddress}} </h3>-->\n              <ion-note item-end="" class="note" (click)="toggledis()" >{{dis}}</ion-note>\n              <!--<ion-note item-end="" class="note"  *ngIf=\'bit == 1\' >{{dista}}MI</ion-note>-->\n            </ion-item>\n          </ion-list>\n      \n          <div class="production">\n            <!-- <div  *ngFor="let i of arr"> -->\n              <div class="pink"  width="100px;" [innerHTML]=\'vendor\' (click)="producer(arr.vendorinfo.ID);">\n                  <!--<img width="100px;" src="assets/img/pink.png" />-->\n              </div>\n            <!-- </div> -->\n              <h3>{{name}}</h3>\n              <!-- <span>{{length}} Events</span>  -->\n            </div>\n            \n      <div class="upcom"  >\n        <h4>UPCOMING EVENTS</h4>\n      <ion-list class="events" *ngFor="let eventssss of detailsss">\n          <ion-item class="name" (click)="scan(eventssss.ID);">\n            <ion-thumbnail item-start>\n                <div class="image-container">\n              <img [src]=\'eventssss.Eventimage\'>\n                </div>\n            </ion-thumbnail>\n                <h3>{{eventssss.EventStartDate}} {{eventssss.viewcount}}</h3>\n                <h2>{{eventssss.post_title}}</h2>\n                <p>{{eventssss.Eventvanue}}</p>\n                <span class="ticket">{{eventssss.userticketcount}}</span>\n          </ion-item>\n        </ion-list>\n      </div>\n      </div>\n     </div>\n  </ion-content>\n'/*ion-inline-end:"/Volumes/D/customer/src/pages/scan/scan.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["n" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["q" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1__providers_customer_customer__["a" /* CustomerProvider */],
        __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_calendar__["a" /* Calendar */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__["a" /* Geolocation */],
        __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["j" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["a" /* ActionSheetController */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_native_social_sharing__["a" /* SocialSharing */],
        __WEBPACK_IMPORTED_MODULE_10__ionic_native_clipboard__["a" /* Clipboard */]])
], ScanPage);

//# sourceMappingURL=scan.js.map

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_signup__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SettingsPage = (function () {
    function SettingsPage(navCtrl, nav, events, navParams, app) {
        this.navCtrl = navCtrl;
        this.nav = nav;
        this.events = events;
        this.navParams = navParams;
        this.app = app;
    }
    SettingsPage.prototype.logout = function () {
        localStorage.clear();
        this.events.publish('usertab', false);
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__signup_signup__["a" /* SignupPage */]);
        this.nav.popToRoot();
        // this.app.getRootNav().setRoot(SignupPage);
        this.events.publish('logout');
    };
    SettingsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettingsPage');
    };
    return SettingsPage;
}());
SettingsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-settings',template:/*ion-inline-start:"/Volumes/D/customer/src/pages/settings/settings.html"*/'<!--\n  Generated template for the SettingsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Settings</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<div class="gap">\n  <button ion-button class="signin_btn" (click)="logout();">LOG OUT</button>\n</div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/customer/src/pages/settings/settings.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Nav */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */]])
], SettingsPage);

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlleventsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_customer_customer__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_social_sharing__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_clipboard__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__editpage_editpage__ = __webpack_require__(131);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var AlleventsPage = (function () {
    function AlleventsPage(navCtrl, navParams, toastCtrl, alertCtrl, customer, socialSharing, loadingCtrl, modalCtrl, http, actionSheetCtrl, events, geolocation, platform, clipboard, nav) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.customer = customer;
        this.socialSharing = socialSharing;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.http = http;
        this.actionSheetCtrl = actionSheetCtrl;
        this.events = events;
        this.geolocation = geolocation;
        this.platform = platform;
        this.clipboard = clipboard;
        this.nav = nav;
        this.all_events = [];
        this.totalpages = 0;
        this.i = 0;
        this.hasMoreData = true;
        this.getlocations();
        this.getevents("come");
    }
    AlleventsPage.prototype.doRefresh = function (refresher) {
        console.log('Begin async operation', refresher);
        this.getlocations();
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    AlleventsPage.prototype.ngOnInit = function () {
        this.acService = new google.maps.places.AutocompleteService();
        this.geocoder = new google.maps.Geocoder();
        this.autocompleteItems = [];
        this.autocomplete = {
            query: ''
        };
        if (localStorage.getItem('user_id') == null) {
            this.showlike = 0;
        }
        else {
            this.showlike = 1;
        }
    };
    AlleventsPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    AlleventsPage.prototype.getlocations = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.geolocation.getCurrentPosition().then(function (resp) {
            _this.currentLatitude = resp.coords.latitude;
            _this.currentLongitude = resp.coords.longitude;
            console.log(_this.currentLatitude);
            console.log(_this.currentLongitude);
            var latLng = new google.maps.LatLng(_this.currentLatitude, _this.currentLongitude);
            _this.geocoder.geocode({ 'latLng': latLng }, (function (results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    if (results[1]) {
                        _this.autocomplete.query = results[1].formatted_address;
                        // alert( this.autocomplete.query)
                        _this.type = _this.autocomplete.query;
                    }
                }
            }));
        }).catch(function (error) {
            console.log('hii');
            console.log('Error getting location', error);
        });
        var watch = this.geolocation.watchPosition();
        watch.subscribe(function (data) {
        });
    };
    AlleventsPage.prototype.getevents = function (come) {
        this.eventss = [];
        console.log(come);
        this.i = 0;
        this.hasMoreData = true;
        this.searchresult();
    };
    AlleventsPage.prototype.searchresult = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            showBackdrop: false,
            cssClass: 'loader'
        });
        loading.present();
        return new Promise(function (resolve) {
            _this.i++;
            var postdata = {
                getit: 'user_events',
                page: _this.i,
                user_id: localStorage.getItem('user_id'),
            };
            console.log(postdata);
            var serialized_all = _this.serializeObj(postdata);
            var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
            var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: headers });
            _this.http.post(_this.customer.base_url + 'user.php', serialized_all, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (dataa) {
                loading.dismiss();
                console.log(dataa);
                _this.all_events = dataa.data;
                for (var even in dataa.data) {
                    _this.eventss.push(dataa.data[even]);
                }
                console.log(_this.eventss);
            });
        });
    };
    AlleventsPage.prototype.next = function (idd) {
        // alert(idd)
        this.nav.push(__WEBPACK_IMPORTED_MODULE_7__editpage_editpage__["a" /* EditpagePage */], {
            ID: idd
        }, { animate: false });
    };
    AlleventsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AlleventsPage');
    };
    return AlleventsPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('map'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"])
], AlleventsPage.prototype, "mapElement", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('mySlider'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["p" /* Slides */])
], AlleventsPage.prototype, "slider", void 0);
AlleventsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'page-allevents',template:/*ion-inline-start:"/Volumes/D/customer/src/pages/allevents/allevents.html"*/'\n<ion-header>\n  \n    <ion-navbar>\n      <ion-title><img width="120px" src="assets/img/logob.png" /></ion-title>\n    </ion-navbar>\n \n</ion-header>\n\n<ion-content >\n  <!-- <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content\n    pullingIcon="arrow-dropdown"\n    pullingText="Pull to refresh"\n    refreshingSpinner="circles"\n    refreshingText="Refreshing...">\n   </ion-refresher-content>\n  </ion-refresher>   -->\n  <div class="seg_cnt">\n      \n  <ion-list class="events" >\n      <ion-item class="name" *ngFor="let item of eventss" (click)="next(item.ID);">\n        <ion-thumbnail item-start>\n          <img [src] =\'item.Eventimage\' />\n        </ion-thumbnail>\n           <h3>{{item.post_title}}</h3>\n            <h3>Starts : {{item.EventStartDate}}</h3>\n            <h3>Ends :{{item.EventEndDate}}</h3>\n             <p>{{item.Eventvanue}}</p>\n            <!-- <span class="ticket">{{item.ticket}} ticket</span> -->\n      </ion-item>\n    </ion-list>\n     \n  </div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/customer/src/pages/allevents/allevents.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["n" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["q" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_customer_customer__["a" /* CustomerProvider */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_native_social_sharing__["a" /* SocialSharing */],
        __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["j" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["k" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["a" /* ActionSheetController */],
        __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["d" /* Events */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */],
        __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["o" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_native_clipboard__["a" /* Clipboard */],
        __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["l" /* Nav */]])
], AlleventsPage);

//# sourceMappingURL=allevents.js.map

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_customer_customer__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__getevents_getevents__ = __webpack_require__(133);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LocPage = (function () {
    function LocPage(navCtrl, navParams, viewCtrl, customer, http, geolocation) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.customer = customer;
        this.http = http;
        this.geolocation = geolocation;
        this.searchQuery = '';
        this.places = [];
        this.latitude = 0;
        this.longitude = 0;
        this.vanues = [];
        this.display();
    }
    LocPage.prototype.ngOnInit = function () {
        this.acService = new google.maps.places.AutocompleteService();
        // this.placesService = new google.maps.places.PlacesService(this);   
        this.infowindow = new google.maps.InfoWindow;
        this.geocoder = new google.maps.Geocoder;
        this.autocompleteItems = [];
        this.autocomplete = {
            query: ''
        };
    };
    LocPage.prototype.updateSearch = function () {
        console.log('modal > updateSearch');
        if (this.autocomplete.query == '') {
            this.autocompleteItems = [];
            return;
        }
        var self = this;
        var config = {
            input: this.autocomplete.query,
            componentRestrictions: {}
        };
        this.acService.getPlacePredictions(config, function (predictions, status) {
            console.log('modal > getPlacePredictions > status > ', status);
            self.autocompleteItems = [];
            predictions.forEach(function (prediction) {
                self.autocompleteItems.push(prediction);
            });
        });
        console.log(this.autocompleteItems);
    };
    LocPage.prototype.selectPlace = function (place) {
        var _this = this;
        console.log(place);
        this.autocomplete.query = place.description;
        var ID = place.place_id;
        console.log(ID);
        this.geocoder.geocode({ 'placeId': ID }, (function (results, status) {
            console.log(status);
            console.log(results);
            if (results[0]) {
                _this.latitude = results[0].geometry.location.lat();
                _this.longitude = results[0].geometry.location.lng();
                console.log(_this.latitude + ", " + _this.longitude);
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__getevents_getevents__["a" /* GeteventsPage */], {
                    lat: _this.latitude,
                    lng: _this.longitude,
                });
            }
        }));
        this.autocompleteItems = [];
    };
    LocPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    LocPage.prototype.display = function () {
        var _this = this;
        var postdata2 = {
            user_id: localStorage.getItem('user_id'),
            getit: 'vanues',
        };
        console.log(postdata2);
        var serialized_all1 = this.serializeObj(postdata2);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.http.post(this.customer.base_url + 'ticket.php', serialized_all1, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log(data);
            _this.vanues = data.cities;
            //  this.lat1 = data.cities.lat;
            //  this.long1 = data.cities.lng;
        });
    };
    //  onKey(event :any){
    //   var postdata={
    //       getit : 'searchevents',
    //        search : this.val
    //              }
    //                            console.log(postdata)
    //                            var serialized_all1 = this.serializeObj(postdata);
    //                            let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
    //                            let options = new RequestOptions({ headers : headers });
    //                            this.http.post(this.customer.base_url + 'ticket.php', serialized_all1, options)
    //                            .map(res=>res.json())
    //                            .subscribe((dataa)=>{ 
    //                             console.log(dataa)
    //                            this.autocompleteItems = dataa
    //                            })
    //     }
    LocPage.prototype.geoloc = function () {
        var _this = this;
        // alert('entered')
        this.geoloction = this.geolocation.getCurrentPosition();
        this.geoloction.then(function (resp) {
            _this.lat = resp.coords.latitude;
            _this.long = resp.coords.longitude;
            console.log(_this.lat + ", " + _this.long);
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__getevents_getevents__["a" /* GeteventsPage */], {
                lat: _this.lat,
                lng: _this.long,
            }, { animate: false });
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
    };
    LocPage.prototype.exactevent = function (lat1, long1) {
        console.log(lat1);
        console.log(long1);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__getevents_getevents__["a" /* GeteventsPage */], {
            lat: lat1,
            lng: long1,
        }, { animate: false });
    };
    LocPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LocPage');
    };
    return LocPage;
}());
LocPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-loc',template:/*ion-inline-start:"/Volumes/D/customer/src/pages/loc/loc.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title></ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <div>\n    <!-- <form style="padding-top: 20px;background: #000;">\n        \n        <ion-searchbar   \n        [(ngModel)]="autocomplete.query" \n        name = "location.name"\n        [showCancelButton]="true" \n        (ionInput)="updateSearch()" \n        (ionCancel)="dismiss()"\n        placeholder="Enter location">\n        </ion-searchbar>\n       \n        <ion-list style="margin: 0px;">\n          <ion-item *ngFor="let place of autocompleteItems" \n          (click)="selectPlace(place)">\n          {{ place.description }}\n          </ion-item>\n        </ion-list>\n    </form>\n    <div class="location">\n        <div class="inpt">\n            <ion-icon name="md-locate"></ion-icon>\n            <button (click)="geoloc()">USE MY CURRENT LOCATION</button>\n        </div>\n    </div> -->\n\n\n  <form class="myfrom">\n\n      <ion-list style="margin: 0px;">\n\n           <ion-searchbar   \n           [(ngModel)]="autocomplete.query" \n           name = "location.name"\n           [showCancelButton]="true" \n           (ionInput)="updateSearch()" \n           (ionCancel)="dismiss()"\n           placeholder="Enter location"\n          >\n           </ion-searchbar>\n           \n         <ion-list style="margin: 0px;">\n            <ion-item *ngFor="let place of autocompleteItems" \n            (click)="selectPlace(place)">\n            {{ place.description }}\n            </ion-item>\n          </ion-list>\n      </ion-list>\n    \n     </form>\n     \n      <div class="location">\n          <div class="inpt">\n              <ion-icon name="md-locate"></ion-icon>\n              <button (click)="geoloc()">USE MY CURRENT LOCATION</button>\n          </div>\n      </div>\n\n  <ion-item-group class="cat">\n    <ion-item-divider color="grey" class="nme">POPULAR LOCATIONS</ion-item-divider>\n    <ion-list style="margin: 0;">\n        <ion-item *ngFor="let item of vanues" (click)="exactevent(item?.lat, item?.lng);">\n          <p>{{item?.city}}</p>\n          \n        </ion-item>\n      </ion-list>\n</ion-item-group>\n</div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/customer/src/pages/loc/loc.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_customer_customer__["a" /* CustomerProvider */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */]])
], LocPage);

//# sourceMappingURL=loc.js.map

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_customer_customer__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__addticket_addticket__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_geolocation__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__detail_detail__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_sqlite__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var AddPage = (function () {
    function AddPage(barcodeScanner, navCtrl, navParams, modalCtrl, viewCtrl, customer, http, formBuilder, events, toastCtrl, actionSheetCtrl, camera, loadingCtrl, datepipe, geolocation, sqlite, platform) {
        var _this = this;
        this.barcodeScanner = barcodeScanner;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.viewCtrl = viewCtrl;
        this.customer = customer;
        this.http = http;
        this.formBuilder = formBuilder;
        this.events = events;
        this.toastCtrl = toastCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.camera = camera;
        this.loadingCtrl = loadingCtrl;
        this.datepipe = datepipe;
        this.geolocation = geolocation;
        this.sqlite = sqlite;
        this.platform = platform;
        this.min = 0;
        this.max = 0;
        this.searchQuery = '';
        this.places = [];
        this.latitude = 0;
        this.longitude = 0;
        this.bit = 1;
        this.objectdata = Object.keys;
        this.eventimage = "assets/img/eventcreatebox.png";
        this.image_data = "";
        this.eventsticket = [];
        this.eventsticket1 = [];
        this.data = {
            eventimage: "assets/img/eventcreatebox.png",
            post_title: '',
            post_content: '',
            eventstartdate: '',
            eventenddate: '',
            categoryy: '',
            eventcost: '',
            tag: '',
            eventvaneid: '',
        };
        // if(localStorage.getItem('user_id') == null){
        //   localStorage.clear();
        //   this.events.publish('usertab', false );
        //   this.nav.setRoot(LoginPage);
        //   this.nav.popToRoot();
        //   // this.navCtrl.push(LoginPage);
        // }
        this.display();
        this.display1();
        this.dateformats();
        this.platform.ready().then(function () {
            _this.database = new __WEBPACK_IMPORTED_MODULE_12__ionic_native_sqlite__["a" /* SQLite */]();
            _this.databasequery = _this.database.create({
                name: 'data.db',
                location: 'default'
            });
            _this.select();
            _this.select1();
        });
    }
    AddPage.prototype.select = function () {
        var _this = this;
        this.databasequery.then(function (db) {
            db.executeSql("SELECT * FROM userdata", {}).then(function (data) {
                console.log(data.rows.item);
                var prices = [];
                // alert(data.rows.length)
                if (data.rows.length > 0) {
                    for (var i = 0; i < data.rows.length; i++) {
                        prices.push(data.rows.item(i).price);
                        //   if(this.min<parseInt(data.rows.item(i).price) ){
                        //     this.max =data.rows.item(i).price
                        //     this.min = this.min
                        //     this.data.eventcost=JSON.stringify(this.min+"-"+this.max);
                        //   }
                        //  if(this.max>parseInt(data.rows.item(i).price)){
                        //     this.max=data.rows.item(i).price
                        //     this.data.eventcost=JSON.stringify(this.min+"-"+this.max);
                        //   }
                        //  this.data.eventcost=this.min+"-"+this.max;
                        //  this.data.eventcost = "200";
                        //  alert(data.rows.item(i).price)
                        _this.eventsticket.push({ post_title: data.rows.item(i).post_title,
                            post_description: data.rows.item(i).post_description,
                            stock: data.rows.item(i).stock,
                            price: data.rows.item(i).price,
                            startdate: data.rows.item(i).startdate,
                            enddate: data.rows.item(i).enddate });
                    }
                    if (prices.length > 1) {
                        _this.min = Math.min.apply(null, prices);
                        _this.max = Math.max.apply(null, prices);
                    }
                    else {
                        _this.min = 0;
                        _this.max = Math.max.apply(null, prices);
                    }
                    _this.data.eventcost = _this.min + "-" + _this.max;
                    // alert( this.data.eventcost)
                    _this.eventsticket1 = _this.eventsticket;
                }
            }, function (error) {
                console.log("ERROR: " + JSON.stringify(error));
            });
        });
    };
    AddPage.prototype.select1 = function () {
        var _this = this;
        this.databasequery.then(function (db) {
            db.executeSql("SELECT * FROM userdata1", {}).then(function (dataa) {
                console.log(dataa.rows.item);
                if (dataa.rows.length > 0) {
                    for (var i = 0; i < dataa.rows.length; i++) {
                        _this.data.post_title = dataa.rows.item(i).post_title;
                        _this.data.eventstartdate = dataa.rows.item(i).eventstartdate;
                        _this.data.eventenddate = dataa.rows.item(i).eventenddate;
                        _this.data.post_content = dataa.rows.item(i).post_content;
                        _this.data.categoryy = dataa.rows.item(i).categoryy;
                        _this.data.tag = dataa.rows.item(i).tag;
                        _this.autocomplete.query = dataa.rows.item(i).location_name;
                        _this.data.eventimage = dataa.rows.item(i).eventimage;
                        _this.data.eventvaneid = dataa.rows.item(i).eventvaneid;
                    }
                }
            }, function (error) {
                console.log("ERROR: " + JSON.stringify(error));
            });
        });
    };
    AddPage.prototype.ngOnInit = function () {
        this.acService = new google.maps.places.AutocompleteService();
        // this.placesService = new google.maps.places.PlacesService(this);   
        this.infowindow = new google.maps.InfoWindow;
        this.geocoder = new google.maps.Geocoder;
        this.autocompleteItems = [];
        this.autocomplete = {
            query: ''
        };
    };
    AddPage.prototype.updateSearch = function () {
        console.log('modal > updateSearch');
        if (this.autocomplete.query == '') {
            this.autocompleteItems = [];
            return;
        }
        var self = this;
        var config = {
            input: this.autocomplete.query,
            componentRestrictions: {}
        };
        this.acService.getPlacePredictions(config, function (predictions, status) {
            console.log('modal > getPlacePredictions > status > ', status);
            self.autocompleteItems = [];
            predictions.forEach(function (prediction) {
                self.autocompleteItems.push(prediction);
            });
        });
        console.log(this.autocompleteItems);
    };
    AddPage.prototype.selectPlace = function (place) {
        var _this = this;
        console.log(place);
        this.autocomplete.query = place.description;
        var ID = place.place_id;
        console.log(ID);
        this.geocoder.geocode({ 'placeId': ID }, (function (results, status) {
            console.log(status);
            console.log(results);
            if (results[0]) {
                _this.latitude = results[0].geometry.location.lat();
                _this.longitude = results[0].geometry.location.lng();
                console.log(_this.latitude + ", " + _this.longitude);
                // this.navCtrl.push(GeteventsPage, {
                //   lat: this.latitude,
                //   lng : this.longitude,
                // });
            }
        }));
        this.autocompleteItems = [];
    };
    AddPage.prototype.dateformats = function () {
        this.date = new Date();
        this.data.eventstartdate = this.datepipe.transform(this.date, 'y-MM-ddTH:mm');
    };
    AddPage.prototype.setenddate = function () {
        this.data.eventenddate = this.data.eventstartdate;
        this.bit = 0;
    };
    AddPage.prototype.display1 = function () {
        var _this = this;
        var postdata1 = {
            getit: "get_catageories",
        };
        var serialized_all = this.serializeObj(postdata1);
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.http.post(this.customer.base_url + 'user.php', serialized_all, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (dataa) {
            console.log(dataa);
            _this.name = dataa;
        });
    };
    AddPage.prototype.display = function () {
        var _this = this;
        var postdata2 = {
            user_id: localStorage.getItem('user_id'),
            getit: 'vanues',
        };
        console.log(postdata2);
        var serialized_all1 = this.serializeObj(postdata2);
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.http.post(this.customer.base_url + 'ticket.php', serialized_all1, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (dataa1) {
            console.log(dataa1);
            _this.vanues = dataa1.data;
        });
    };
    AddPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    AddPage.prototype.add = function (fmdataa) {
        var _this = this;
        console.log(fmdataa.value);
        if (fmdataa.value) {
            this.databasequery.then(function (db) {
                db.executeSql('CREATE TABLE IF NOT EXISTS userdata1(id INTEGER PRIMARY KEY AUTOINCREMENT,post_title TEXT,post_content TEXT ,tag TEXT,eventcost INTEGER,eventstartdate TEXT,eventenddate TEXT,categoryy TEXT,location_name TEXT,eventimage TEXT,eventvaneid TEXT)', {})
                    .then(function (create) {
                    console.log(create);
                    // alert(fmdataa.value.post_title+"//"+fmdataa.value.post_content+"//"+fmdataa.value.tag+ "//"+fmdataa.value.eventcost+"//"+fmdataa.value.eventstartdate+"//"+fmdataa.value.eventenddate+"//"+fmdataa.value.categoryy+"//"+fmdataa.value.location_name)
                    db.executeSql("INSERT INTO userdata1(post_title,post_content,tag,eventcost,eventstartdate,eventenddate,categoryy,location_name,eventimage,eventvaneid) VALUES ('" + fmdataa.value.post_title + "', '" + fmdataa.value.post_content + "', '" + fmdataa.value.tag + "', '" + fmdataa.value.eventcost + "', '" + fmdataa.value.eventstartdate + "', '" + fmdataa.value.eventenddate + "', '" + fmdataa.value.categoryy + "', '" + fmdataa.value.location_name + "','" + _this.data.eventimage + "', '" + fmdataa.value.eventvaneid + "')", {})
                        .then(function (inserted) {
                        db.executeSql("SELECT * FROM userdata1", {}).then(function (dataa) {
                            console.log(dataa.rows.item[0]);
                        }).catch(function (error) {
                            console.log("error2");
                            console.log(error);
                        });
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__addticket_addticket__["a" /* AddticketPage */], {}, { animate: false });
                    }).catch(function (error) {
                        console.log("error1");
                        console.log(error);
                    });
                })
                    .catch(function (error) {
                    console.log("error0");
                    console.log(error);
                });
            });
        }
    };
    AddPage.prototype.presentActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            buttons: [
                {
                    text: 'Choose Photo',
                    handler: function () {
                        _this.getPicture(0);
                    }
                }, {
                    text: 'Take Photo',
                    handler: function () {
                        _this.getPicture(1);
                    }
                }
            ]
        });
        actionSheet.present();
    };
    AddPage.prototype.getPicture = function (sourceType) {
        var _this = this;
        // You can check the values here:
        // https://github.com/driftyco/ionic-native/blob/master/src/plugins/camera.ts
        this.camera.getPicture({
            quality: 10,
            destinationType: 0,
            sourceType: sourceType,
            allowEdit: true,
            saveToPhotoAlbum: false,
            correctOrientation: true,
            targetHeight: 420,
            targetWidth: 940,
        }).then(function (imageData) {
            _this.image_data = imageData;
            _this.data.eventimage = 'data:image/jpeg;base64,' + imageData;
            //  alert(this.image_data)
        }, function (err) {
            var toast = _this.toastCtrl.create({
                message: JSON.stringify(err),
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
        });
    };
    AddPage.prototype.previous = function () {
        //  const index = this.viewCtrl.index;
        if (this.navCtrl.canGoBack()) {
            this.newbit = localStorage.getItem('bitt');
            this.newbit = 4;
            localStorage.setItem('bitt', this.newbit);
            this.navCtrl.pop();
        }
        else {
            var toast = this.toastCtrl.create({
                message: "Can't go back since there is no previous screen",
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
        }
    };
    AddPage.prototype.saveticket = function () {
        var _this = this;
        if (this.data.post_title == "" || this.data.post_title == null || this.data.post_title == undefined) {
            var toast = this.toastCtrl.create({
                message: "Please fill the title above",
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
        }
        else if (this.data.post_content == "" || this.data.post_content == null || this.data.post_content == undefined) {
            var toast = this.toastCtrl.create({
                message: "Please fill the content above",
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
        }
        else if (this.autocomplete.query == "" || this.autocomplete.query == null || this.autocomplete.query == undefined) {
            var toast = this.toastCtrl.create({
                message: "Please fill the event venue above",
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
        }
        else if (this.data.eventstartdate == "" || this.data.eventstartdate == null || this.data.eventstartdate == undefined) {
            var toast = this.toastCtrl.create({
                message: "Please fill the start date above and check for starting and ending date",
                duration: 3000,
                position: 'middle'
            });
            toast.present();
        }
        else if (this.data.eventenddate == "" || this.data.eventenddate == null || this.data.eventenddate == undefined) {
            var toast = this.toastCtrl.create({
                message: "Please fill the end date above",
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
        }
        else if (this.data.eventcost == "" || this.data.eventcost == null || this.data.eventcost == undefined) {
            var toast = this.toastCtrl.create({
                message: "Please fill the price above",
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
        }
        else if (this.data.tag == "" || this.data.tag == null || this.data.tag == undefined) {
            var toast = this.toastCtrl.create({
                message: "Please fill the tag above",
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
        }
        else if (this.data.eventvaneid == "" || this.data.eventvaneid == null || this.data.eventvaneid == undefined) {
            var toast = this.toastCtrl.create({
                message: "Please fill the tag above",
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
        }
        else {
            var d1 = __WEBPACK_IMPORTED_MODULE_9_moment__(this.data.eventstartdate, 'MM/DD/YYYY');
            var d2 = __WEBPACK_IMPORTED_MODULE_9_moment__(this.data.eventenddate, 'MM/DD/YYYY');
            var duration;
            var fromDate = __WEBPACK_IMPORTED_MODULE_9_moment__["utc"](this.data.eventstartdate);
            // duration = moment.duration({'hour':2, 'minute':15});
            duration = __WEBPACK_IMPORTED_MODULE_9_moment__["duration"]({ 'hour': 0, 'minute': 0 });
            var toDate = __WEBPACK_IMPORTED_MODULE_9_moment__["utc"](this.data.eventenddate);
            console.log(fromDate.format('mmmm DD-MMM-YYYY hh:mm a'));
            console.log(toDate.format('mmmm DD-MMM-YYYY hh:mm a'));
            var hourDiff = toDate.diff(fromDate, 'hours');
            var minuteDiff = toDate.diff(fromDate, 'minutes');
            var hourDuration = Math.floor(minuteDiff / 60);
            var minuteDuration = minuteDiff % 60;
            console.log(hourDuration);
            console.log(minuteDuration);
            if (hourDuration == 0) {
                var toast = this.toastCtrl.create({
                    message: "Please check the dates and time specified",
                    duration: 3000,
                    position: 'bottom'
                });
                toast.present();
            }
            else {
                var split = this.data.eventimage.split('base64,');
                this.eventimage = split[1];
                var loader_1 = this.loadingCtrl.create({
                    content: 'Saving event...',
                    dismissOnPageChange: true,
                });
                var postdata3 = {
                    user_id: localStorage.getItem('user_id'),
                    getit: 'save_event',
                    post_title: this.data.post_title,
                    post_content: this.data.post_content
                };
                console.log(postdata3);
                var serialized_all3 = this.serializeObj(postdata3);
                var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
                var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: headers });
                this.http.post(this.customer.base_url + 'ticket.php', serialized_all3, options)
                    .map(function (res) { return res.json(); })
                    .subscribe(function (dataa) {
                    console.log(dataa);
                    loader_1.dismiss();
                    // alert(this.eventimage)
                    var toast = _this.toastCtrl.create({
                        message: "The details of event are saved",
                        duration: 3000,
                        position: 'bottom'
                    });
                    toast.present();
                    if (_this.image_data != "") {
                        // alert(this.image_data) 
                        var loader_2 = _this.loadingCtrl.create({
                            content: 'uploading image...',
                            dismissOnPageChange: true,
                        });
                        // console.log(this.image_data);
                        var postdata7 = {
                            getit: 'save_eventimage',
                            event_id: dataa.data,
                            image_data: _this.eventimage
                        };
                        console.log(postdata7);
                        var serialized_all6 = _this.serializeObj(postdata7);
                        var headers_1 = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
                        var options_1 = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: headers_1 });
                        _this.http.post(_this.customer.base_url + 'ticket.php', serialized_all6, options_1)
                            .map(function (res) { return res.json(); })
                            .subscribe(function (dataaa) {
                            console.log(dataaa);
                            loader_2.dismiss();
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__detail_detail__["a" /* DetailPage */], {
                                event_id: dataa.data
                            }, { animate: false });
                        });
                    }
                    else {
                        var postd1 = {
                            getit: 'save_defaultimg',
                            event_id: dataa.data,
                        };
                        console.log(postd1);
                        var serialized_all10 = _this.serializeObj(postd1);
                        var headers_2 = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
                        var options_2 = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: headers_2 });
                        _this.http.post(_this.customer.base_url + 'ticket.php', serialized_all10, options_2)
                            .map(function (res) { return res.json(); })
                            .subscribe(function (dat) {
                            console.log(dat);
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__detail_detail__["a" /* DetailPage */], {
                                event_id: dataa.data
                            }, { animate: false });
                        });
                    }
                    if (_this.eventsticket.length > 0) {
                        for (var i = 0; i < _this.eventsticket.length; i++) {
                            var postdata6 = {
                                getit: 'save_ticket',
                                event_id: dataa.data,
                                post_description: _this.eventsticket[i].post_description,
                                stock: _this.eventsticket[i].stock,
                                price: _this.eventsticket[i].price,
                                startdate: _this.eventsticket[i].startdate,
                                enddate: _this.eventsticket[i].enddate,
                                post_title: _this.eventsticket[i].post_title,
                            };
                            console.log(postdata6);
                            var serialized_all30 = _this.serializeObj(postdata6);
                            var headers_3 = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
                            var options_3 = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: headers_3 });
                            _this.http.post(_this.customer.base_url + 'ticket.php', serialized_all30, options_3)
                                .map(function (res) { return res.json(); })
                                .subscribe(function (dataa) {
                                console.log(dataa);
                                _this.databasequery.then(function (db) {
                                    db.executeSql('DELETE FROM userdata', {})
                                        .then(function (DELETE) {
                                        console.log(DELETE);
                                    }).catch(function (error) {
                                        console.log(JSON.stringify(error));
                                    });
                                });
                            });
                        }
                    }
                    var postdata5 = {
                        user_id: localStorage.getItem('user_id'),
                        getit: 'set_eve_meta',
                        event_id: dataa.data,
                        eventstartdate: _this.data.eventstartdate,
                        eventenddate: _this.data.eventenddate,
                        eventvaneid: _this.data.eventvaneid,
                        eventlocation: _this.autocomplete.query,
                        eventcost: _this.data.eventcost
                    };
                    console.log(postdata5);
                    var serialized_all5 = _this.serializeObj(postdata5);
                    var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
                    var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: headers });
                    _this.http.post(_this.customer.base_url + 'ticket.php', serialized_all5, options)
                        .map(function (res) { return res.json(); })
                        .subscribe(function (eventmeta) {
                        console.log(eventmeta);
                        _this.databasequery.then(function (db) {
                            db.executeSql('DELETE FROM userdata1', {})
                                .then(function (DELETE) {
                                console.log(DELETE);
                            }).catch(function (error) {
                                console.log(JSON.stringify(error));
                            });
                        });
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__detail_detail__["a" /* DetailPage */], {
                            event_id: dataa.data
                        }, { animate: false });
                    });
                    _this.date = new Date();
                    _this.data = {
                        eventimage: '',
                        post_title: '',
                        post_content: '',
                        eventstartdate: _this.datepipe.transform(_this.date, 'y-MM-ddTH:mm'),
                        eventenddate: '',
                        categoryy: '',
                        eventcost: '',
                        tag: '',
                        eventvaneid: '',
                    };
                    _this.autocomplete.query = [];
                });
            }
        }
    };
    return AddPage;
}());
AddPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-add',template:/*ion-inline-start:"/Volumes/D/customer/src/pages/add/add.html"*/'\n     <ion-header>\n      <ion-navbar color="navyb" text="center" hideBackButton >\n       <ion-buttons start left  primary class= "action">\n        <button ion-button color="black" clear (click)="previous();">\n          Cancel \n        </button>\n        </ion-buttons>\n        <ion-buttons end>\n          \n        </ion-buttons>\n        <ion-title>Create Event</ion-title> \n      </ion-navbar>\n</ion-header>\n    \n  \n    <ion-content style="background: #fafafa;">\n        <form #addform=\'ngForm\' (ngSubmit)="add(addform)">  \n      <ion-list class="pic myeventdiv">\n        <ion-item (click)="presentActionSheet()" style="padding:0;">\n          <img [src]="data.eventimage" alt="eventavatar">\n         <!-- <button ion-button clear color="primary" class="change" uplad ion-button block *ngIf="!srcImage" >Change Image</button> -->\n        </ion-item>\n      </ion-list>\n         <ion-list class="titles">\n          <ion-item>\n            <ion-input type="text" placeholder="Event Title" [(ngModel)]="data.post_title" name="post_title"  #post_title="ngModel" required></ion-input>\n          </ion-item>\n      </ion-list>\n    \n      <ion-list class="location">\n        <div class="time">\n          <div class="lft">\n            <h6>Starts</h6>\n             <ion-datetime displayFormat="MMM DD, YYYY HH:mm" [(ngModel)]="data.eventstartdate" name= "eventstartdate"  #eventstartdate="ngModel"  max="2075-12-31" min="{{data.eventstartdate}}" (ngModelChange)="setenddate()" placeholder="MM/DD/YYYY HH:MM" required></ion-datetime>\n          </div>\n        \n          <div class="lft rt">\n            <h6>Ends</h6>\n             <ion-datetime [disabled]="bit==1" displayFormat="MMM DD, YYYY HH:mm" [(ngModel)]="data.eventenddate" name= "eventenddate"  #eventenddate="ngModel" max="2075-12-31" min="{{data.eventenddate}}" placeholder="MM/DD/YYYY HH:MM" required></ion-datetime> \n          </div>\n         \n        </div>\n       \n        <ion-list style="margin:0;">\n                    <ion-searchbar   \n                     [(ngModel)]="autocomplete.query" \n                     name = "location_name"\n                     [showCancelButton]="true" \n                     (ionInput)="updateSearch()" \n                     (ionCancel)="dismiss()"\n                     placeholder="Enter location">\n                     </ion-searchbar>\n                     \n                   <!-- <ion-list> -->\n                      <ion-item *ngFor="let place of autocompleteItems" \n                      (click)="selectPlace(place)">\n                      {{ place.description }}\n                      </ion-item>\n                    <!-- </ion-list> -->\n                </ion-list>\n\n                <ion-list class="loc">\n                  <ion-item  *ngIf="vanues !=null" class="entr">\n                    <ion-select [(ngModel)]="data.eventvaneid" #eventvaneid = "ngModel" name="eventvaneid" placeholder="Venue">\n                        <!-- <ion-option  [value]="Location">Location</ion-option> -->\n                      <ion-option *ngFor="let item of vanues " [value]="item.ID">{{item?.post_name}}</ion-option>\n                    </ion-select>\n                  </ion-item>\n                </ion-list>\n\n          <ion-item>\n              <ion-input type="text" placeholder="Cost" [(ngModel)]="data.eventcost" name= "eventcost"  #eventcost="ngModel" required></ion-input>\n          </ion-item>\n          <!-- <ion-item>\n            <ion-input type="text" placeholder="Location" [(ngModel)]="data.eventvaneid" name= "eventvaneid"></ion-input>\n          </ion-item> -->\n        \n          <ion-item class="area">\n            <textarea placeholder="About event..." [(ngModel)]="data.post_content" name="post_content" #post_content="ngModel" required></textarea>\n          </ion-item>\n    </ion-list>\n    <ion-list style="margin-bottom:0px;"  class="clk" *ngIf="name !=undefined">\n      <ion-select  placeholder="Event category" [(ngModel)]="data.categoryy" name =\'categoryy\' #categoryy="ngModel" required>\n           <ion-option *ngFor="let category of objectdata(name)" >{{name[category].name}}</ion-option> \n      </ion-select>\n    </ion-list>\n    \n    <ion-list class="location">\n    \n      <ion-item>\n        <ion-input type="text" placeholder="Add a tag like mixer, circuit, drag, karaoke, etc." [(ngModel)]="data.tag" name ="tag" #tag="ngModel" required></ion-input>\n      </ion-item>\n    </ion-list>\n \n    <h3 class="heading">Event Tickets</h3>\n    \n    <div class="ticket" >\n    <ion-grid *ngFor="let items of eventsticket1">\n      <ion-row>\n        <ion-col col-4>{{items.post_title}}</ion-col>\n        <ion-col col-4 >{{items.post_description}}</ion-col>\n        <ion-col col-2 >${{items.price}}</ion-col>\n        <ion-col col-2>{{items.stock}}</ion-col>\n      </ion-row>\n    </ion-grid>\n     <button [disabled]="!addform.valid" ion-button small type="submit"  style="margin-bottom:0px;margin-left: 8px;">Add Ticket</button>\n    </div>\n       </form>\n    </ion-content>\n    \n    <ion-footer class="botom">\n      <ion-toolbar color="primary">\n          <ion-buttons>\n              <button ion-button icon-right color="royal" (click)="saveticket();" >Create Event</button>\n            </ion-buttons>\n      </ion-toolbar>\n  </ion-footer>\n'/*ion-inline-end:"/Volumes/D/customer/src/pages/add/add.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_customer_customer__["a" /* CustomerProvider */],
        __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
        __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__["a" /* Camera */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_8__angular_common__["DatePipe"],
        __WEBPACK_IMPORTED_MODULE_10__ionic_native_geolocation__["a" /* Geolocation */],
        __WEBPACK_IMPORTED_MODULE_12__ionic_native_sqlite__["a" /* SQLite */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */]])
], AddPage);

//# sourceMappingURL=add.js.map

/***/ }),

/***/ 9:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the CustomerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var CustomerProvider = (function () {
    function CustomerProvider(http) {
        this.http = http;
        this.base_url = 'http://simerjit.crystalbiltech.com/outbuzz/api/';
        console.log('Hello CustomerProvider Provider');
    }
    return CustomerProvider;
}());
CustomerProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], CustomerProvider);

//# sourceMappingURL=customer.js.map

/***/ })

},[365]);
//# sourceMappingURL=main.js.map