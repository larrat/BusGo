webpackJsonp([1],{

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(148);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MapsPage = /** @class */ (function () {
    function MapsPage(navCtrl, geolocation, platform) {
        this.navCtrl = navCtrl;
        this.geolocation = geolocation;
        this.platform = platform;
        this.estabelecimentos = [
            {
                nome: 'Estabelecimento1',
                endereco: 'Endereço1',
                latitude: -15.5837031,
                longitude: -56.084949
            },
            {
                nome: 'Estabelecimento2',
                endereco: 'Endereço2',
                latitude: -15.574358,
                longitude: -56.0880802
            }
        ];
    }
    MapsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.initPage();
        });
    };
    MapsPage.prototype.initPage = function () {
        var _this = this;
        this.newMethod().then(function (result) {
            _this.loadMap(result.coords.latitude, result.coords.longitude);
        });
    };
    MapsPage.prototype.newMethod = function () {
        return this.geolocation.getCurrentPosition();
    };
    MapsPage.prototype.loadMap = function (lat, lng) {
        var latLng = new google.maps.LatLng(lat, lng);
        var mapOptions = {
            center: latLng,
            zoom: 14,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            disableDefaultUI: true,
        };
        var element = document.getElementById('map');
        this.map = new google.maps.Map(element, mapOptions);
        var marker = new google.maps.Marker({
            position: latLng,
            title: 'Minha Localização',
            icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'
        });
        var content = "\n      <div id=\"myid\"  class=\"item item-thumbnail-left item-text-wrap\">\n        <ion-item>\n          <ion-row>\n            <h6>" + marker.title + "</h6>\n          </ion-row>\n        </ion-item>\n      </div>\n      ";
        this.addInfoWindow(marker, content);
        marker.setMap(this.map);
        this.loadPoints();
    };
    MapsPage.prototype.loadPoints = function () {
        this.markers = [];
        for (var _i = 0, _a = Object.keys(this.estabelecimentos); _i < _a.length; _i++) {
            var key = _a[_i];
            console.log(this.estabelecimentos[key].nome);
            var latLng = new google.maps.LatLng(this.estabelecimentos[key].latitude, this.estabelecimentos[key].longitude);
            var marker = new google.maps.Marker({
                position: latLng,
                title: this.estabelecimentos[key].nome
            });
            var content = "\n        <div id=\"myid\"  class=\"item item-thumbnail-left item-text-wrap\">\n          <ion-item>\n            <ion-row>\n              <h6>" + this.estabelecimentos[key].nome + "</h6>\n            </ion-row>\n          </ion-item>\n        </div>\n        ";
            this.addInfoWindow(marker, content);
            marker.setMap(this.map);
        }
        return this.markers;
    };
    MapsPage.prototype.addInfoWindow = function (marker, content) {
        var _this = this;
        var infoWindow = new google.maps.InfoWindow({
            content: content
        });
        google.maps.event.addListener(marker, 'click', function () {
            infoWindow.open(_this.map, marker);
            google.maps.event.addListenerOnce(infoWindow, 'domready', function () {
                document.getElementById('myid').addEventListener('click', function () {
                    _this.goToEmpresa(marker);
                });
            });
        });
    };
    MapsPage.prototype.goToEmpresa = function (empresa) {
        alert('Click');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], MapsPage.prototype, "mapElement", void 0);
    MapsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-maps',template:/*ion-inline-start:"C:\Users\Douglas M\Desktop\BusGo_Mobilealpha\BusGo_Mobile\src\pages\maps\maps.html"*/'<ion-header>\n  <ion-navbar color=\'navbarColor\'>\n    <ion-title>\n        <img src="../../assets/imgs/logobus.png" width="40px" style="display:inline-block" height="40px"/>\n        Início\n    </ion-title>\n    <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n  </ion-navbar>\n</ion-header>\n<ion-content >\n  <ion-row>\n    <div>\n      <ion-badge class="badgeOri">Sua localização</ion-badge>\n    </div>\n  </ion-row>\n  <div id="map">\n\n  </div>\n  </ion-content>'/*ion-inline-end:"C:\Users\Douglas M\Desktop\BusGo_Mobilealpha\BusGo_Mobile\src\pages\maps\maps.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */]])
    ], MapsPage);
    return MapsPage;
}());

//# sourceMappingURL=maps.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardOnibusPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__informa_es_informa_es__ = __webpack_require__(259);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CardOnibusPage = /** @class */ (function () {
    function CardOnibusPage(navCtrl, http, navParams) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.navParams = navParams;
        this.onibusDB = [];
    }
    CardOnibusPage.prototype.ionViewDidLoad = function () {
        this.pegarDadosFirebase();
    };
    CardOnibusPage.prototype.pegarDadosFirebase = function () {
        var _this = this;
        this.http.get('https://aplicativo-onibus.firebaseio.com/onibus.json')
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            if (data !== null && data != undefined) {
                _this.trataDados(data);
            }
        });
    };
    CardOnibusPage.prototype.trataDados = function (dados) {
        this.onibusDB = Object.keys(dados).map(function (i) {
            dados[i]._id = i;
            return dados[i];
        });
        console.log(this.onibusDB);
    };
    CardOnibusPage.prototype.trazID = function (dados) {
        this.onibusDB = Object.keys(dados).map(function (i) {
            dados[i]._id = i;
            return i;
        });
    };
    CardOnibusPage.prototype.itemclicked = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__informa_es_informa_es__["a" /* InformaEsPage */], item);
        console.log(item);
    };
    CardOnibusPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-card-onibus',template:/*ion-inline-start:"C:\Users\Douglas M\Desktop\BusGo_Mobilealpha\BusGo_Mobile\src\pages\card-onibus\card-onibus.html"*/'\n<ion-header>\n  <ion-navbar color=\'navbarColor\'>\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n      <ion-title>\n        <img src="../../assets/imgs/logobus.png" width="40px" style="display:inline-block" height="40px"/>\n          Pesquisa por Ônibus\n      </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  \n  <div *ngIf="onibusDB.length > 0; else estadoVazio">\n  \n  <button outline ion-item *ngFor="let onibus of onibusDB" style="background-color: #FFDAEA !important" (click)="itemclicked(onibus)">\n    <ion-card>  \n      <ion-list>\n        <ion-item style="color: rgb(248, 14, 14)" id="cardOnibus-list-item35">\n          <ion-icon name="bus" item-left></ion-icon>\n          {{onibus.lotacao}}\n        </ion-item>\n        <div id="cardOnibus-markdown26" style="text-align:center;" class="show-list-numbers-and-dots">\n          <p style="margin-top:0px;margin-left:10px;margin-right:10px;color:#000000;font-size:17px;" text-wrap>\n            Número: {{onibus.n}} <br/>\n            {{onibus.descricao}} <br/>\n            Placa: {{onibus.placa}}\n          </p>\n        </div>\n      </ion-list>\n    </ion-card>\n  </button>\n\n  \n  \n</div>\n <ng-template #estadoVazio>\n  <h2>Carregando...</h2>\n </ng-template>\n</ion-content>'/*ion-inline-end:"C:\Users\Douglas M\Desktop\BusGo_Mobilealpha\BusGo_Mobile\src\pages\card-onibus\card-onibus.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], CardOnibusPage);
    return CardOnibusPage;
}());

//# sourceMappingURL=card-onibus.js.map

/***/ }),

/***/ 213:
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
webpackEmptyAsyncContext.id = 213;

/***/ }),

/***/ 258:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/card-onibus/card-onibus.module": [
		839,
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
webpackAsyncContext.id = 258;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InformaEsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(148);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InformaEsPage = /** @class */ (function () {
    function InformaEsPage(navCtrl, http, navParams, _geolocation, platform) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.navParams = navParams;
        this._geolocation = _geolocation;
        this.platform = platform;
        this.onibusInfo = this.navParams.data;
    }
    Object.defineProperty(InformaEsPage.prototype, "geolocation", {
        get: function () {
            return this._geolocation;
        },
        set: function (value) {
            this._geolocation = value;
        },
        enumerable: true,
        configurable: true
    });
    InformaEsPage.prototype.ionViewDidLoad = function () {
        console.log(this.navParams.get(this.onibusInfo));
        //this.pegarDadosFirebase();
    };
    /*
      pegarDadosFirebase(){
        this.http.get('https://aplicativo-onibus.firebaseio.com/onibus.json')
        .map(res => res.json())
        .subscribe(data => {
          this.trataDados(data);
        })
      }
    
      trataDados(dados){
       // this.onibusDB = Object.keys(dados).map(i => dados[i]);
        //console.log(this.onibusDB)
      }*/
    InformaEsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.initPage();
        });
    };
    InformaEsPage.prototype.initPage = function () {
        var _this = this;
        this.newMethod().then(function (result) {
            _this.loadMap(result.coords.latitude, result.coords.longitude);
        });
    };
    InformaEsPage.prototype.newMethod = function () {
        return this.geolocation.getCurrentPosition();
    };
    InformaEsPage.prototype.loadMap = function (lat, lng) {
        var latLng = new google.maps.LatLng(lat, lng);
        var mapOptions = {
            center: latLng,
            zoom: 12,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            disableDefaultUI: true,
        };
        var element = document.getElementById('map');
        this.map = new google.maps.Map(element, mapOptions);
        var marker = new google.maps.Marker({
            position: latLng,
            title: 'Minha Localização',
            icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'
        });
        var content = "\n      <div id=\"myid\"  class=\"item item-thumbnail-left item-text-wrap\">\n        <ion-item>\n          <ion-row>\n            <h6>" + marker.title + "</h6>\n          </ion-row>\n        </ion-item>\n      </div>\n      ";
        this.addInfoWindow(marker, content);
        marker.setMap(this.map);
        this.loadPoints();
    };
    InformaEsPage.prototype.loadPoints = function () {
        this.markers = [];
        for (var _i = 0, _a = Object.keys(this.onibusInfo); _i < _a.length; _i++) {
            var key = _a[_i];
            console.log(this.onibusInfo.descricao);
            var latLng = new google.maps.LatLng(this.onibusInfo.Lat, this.onibusInfo.Lng);
            var marker = new google.maps.Marker({
                position: latLng,
                title: this.onibusInfo.descricao
            });
            var content = "\n        <div id=\"myid\"  class=\"item item-thumbnail-left item-text-wrap\">\n          <ion-item>\n            <ion-row>\n              <h6>" + this.onibusInfo.descricao + "</h6>\n            </ion-row>\n          </ion-item>\n        </div>\n        ";
            this.addInfoWindow(marker, content);
            marker.setMap(this.map);
        }
        return this.markers;
    };
    InformaEsPage.prototype.addInfoWindow = function (marker, content) {
        var _this = this;
        var infoWindow = new google.maps.InfoWindow({
            content: content
        });
        google.maps.event.addListener(marker, 'click', function () {
            infoWindow.open(_this.map, marker);
            google.maps.event.addListenerOnce(infoWindow, 'domready', function () {
                document.getElementById('myid').addEventListener('click', function () {
                    _this.goToEmpresa(marker);
                });
            });
        });
    };
    InformaEsPage.prototype.goToEmpresa = function (empresa) {
        alert('Click');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], InformaEsPage.prototype, "mapElement", void 0);
    InformaEsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-informa-es',template:/*ion-inline-start:"C:\Users\Douglas M\Desktop\BusGo_Mobilealpha\BusGo_Mobile\src\pages\informa-es\informa-es.html"*/'<ion-header>\n  <ion-navbar color=\'navbarColor\'>\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n      <ion-title>\n        <img src="../../assets/imgs/logobus.png" width="40px" style="display:inline-block" height="40px"/>\n          Informação do Ônibus\n      </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding id="page9">\n    <ion-row>\n        <div>\n          <ion-badge class="badgeOri">Sua localização</ion-badge>\n        </div>\n        <div>\n          <ion-badge class="badgeDest">Ônibus</ion-badge>\n        </div>\n      </ion-row>\n      <div id="map"></div>\n  <ion-card>\n        <form id="informaEs-form8">\n          <ion-item>\n            <ion-label style="color:#000000;font-size: x-large;text-align:center;" text-wrap>\n              {{onibusInfo.n}}<br/>{{onibusInfo.descricao}}</ion-label>\n          </ion-item>\n          <ion-item>\n              <ion-label style="color:#000000;text-align:left;">\n               Placa: {{onibusInfo.placa}}</ion-label>\n            </ion-item>\n          <ion-item id="informaEs-list-item21" style="color:#ff1111">\n            <ion-icon name="bus" item-left></ion-icon>\n              {{onibusInfo.lotacao}}\n          </ion-item>\n          <ion-item>\n            <p style="color:#000000;font-size:16px;">\n              <strong>\n                Horario de funcionamento:\n              </strong>\n              <br />\n              <strong>\n                {{onibusInfo.hora}}\n              </strong>\n            </p>\n          </ion-item>\n          <ion-item ><ion-label text-wrap>{{onibusInfo.parada1}}</ion-label></ion-item>\n          <ion-item ><ion-label text-wrap>{{onibusInfo.parada2}}</ion-label></ion-item>\n          <ion-item ><ion-label text-wrap>{{onibusInfo.parada3}}</ion-label></ion-item>\n          <ion-item ><ion-label text-wrap>{{onibusInfo.parada4}}</ion-label></ion-item>\n          <ion-item ><ion-label text-wrap>{{onibusInfo.parada5}}</ion-label></ion-item>\n          <ion-item ><ion-label text-wrap>{{onibusInfo.parada6}}</ion-label></ion-item>\n          <ion-item ><ion-label text-wrap>{{onibusInfo.parada7}}</ion-label></ion-item>\n          <ion-item ><ion-label text-wrap>{{onibusInfo.parada8}}</ion-label></ion-item> \n          <ion-item ><ion-label text-wrap>{{onibusInfo.parada9}}</ion-label></ion-item>\n          <ion-item ><ion-label text-wrap>{{onibusInfo.parada10}}</ion-label></ion-item>\n        </form>\n      </ion-card>\n</ion-content>'/*ion-inline-end:"C:\Users\Douglas M\Desktop\BusGo_Mobilealpha\BusGo_Mobile\src\pages\informa-es\informa-es.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */]])
    ], InformaEsPage);
    return InformaEsPage;
}());

//# sourceMappingURL=informa-es.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContateNosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__maps_maps__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_fire_database__ = __webpack_require__(98);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ContateNosPage = /** @class */ (function () {
    function ContateNosPage(navCtrl, formbuilder, db, toastController) {
        //this.registerForm = this.formbuilder.group({
        // name   :[null, [Validators.required, Validators.minLength(5)]],
        //email  :[null, [Validators.required, Validators.email]],
        // text   :[null, [Validators.required, Validators.minLength(10)]],
        //}
        this.navCtrl = navCtrl;
        this.formbuilder = formbuilder;
        this.db = db;
        this.toastController = toastController;
        this.pushPage = __WEBPACK_IMPORTED_MODULE_3__maps_maps__["a" /* MapsPage */];
        this.params = { id: 42 };
    }
    ContateNosPage.prototype.addMsg = function (text) {
        var _this = this;
        this.db.database.ref('/mensagem').push({
            text: text
        })
            .then(function () {
            _this.toastController.create({
                message: 'Mensagem enviada com sucesso',
                duration: 3000
            }).present();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__maps_maps__["a" /* MapsPage */]);
        });
    };
    ContateNosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contate-nos',template:/*ion-inline-start:"C:\Users\Douglas M\Desktop\BusGo_Mobilealpha\BusGo_Mobile\src\pages\contate-nos\contate-nos.html"*/'<ion-header>\n  <ion-navbar color=\'navbarColor\'>\n    <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    <ion-title>\n      <img src="../../assets/imgs/logobus.png" width="40px" style="display:inline-block" height="40px"/>\n      Contate_nos\n    </ion-title>\n</ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-item>\n      <ion-textarea type="text" rows="6" cols="20" placeholder="Descreva seu problema ou sugestão..."\n      [(ngModel)]="text"></ion-textarea>\n    </ion-item>\n\n  <button (click)="addMsg(text)" ion-button color="assertive" block\n  [disabled]="!text || text.length < 3">\n    Enviar\n  </button>\n</ion-content>'/*ion-inline-end:"C:\Users\Douglas M\Desktop\BusGo_Mobilealpha\BusGo_Mobile\src\pages\contate-nos\contate-nos.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4__angular_fire_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]])
    ], ContateNosPage);
    return ContateNosPage;
}());

//# sourceMappingURL=contate-nos.js.map

/***/ }),

/***/ 416:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SobreNSPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SobreNSPage = /** @class */ (function () {
    function SobreNSPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    SobreNSPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sobre-ns',template:/*ion-inline-start:"C:\Users\Douglas M\Desktop\BusGo_Mobilealpha\BusGo_Mobile\src\pages\sobre-ns\sobre-ns.html"*/'<ion-header>\n  <ion-navbar color=\'navbarColor\'>\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n      <ion-title>\n        <img src="../../assets/imgs/logobus.png" width="40px" style="display:inline-block" height="40px"/>\n        Sobre nós\n      </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page8">\n  <button id="sobreNS-button4" ion-button clear color="dark" full>\n    Termos de serviço\n  </button>\n  <button id="sobreNS-button5" ion-button clear color="dark" full>\n    Dados do aplicativo\n  </button>\n</ion-content>\n<ion-footer>2019\n  Bus Go v 1.0.0</ion-footer>\n\n'/*ion-inline-end:"C:\Users\Douglas M\Desktop\BusGo_Mobilealpha\BusGo_Mobile\src\pages\sobre-ns\sobre-ns.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], SobreNSPage);
    return SobreNSPage;
}());

//# sourceMappingURL=sobre-ns.js.map

/***/ }),

/***/ 419:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(424);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 424:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_card_onibus_card_onibus__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_contate_nos_contate_nos__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_maps_maps__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_informa_es_informa_es__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_sobre_ns_sobre_ns__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_fire__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__environments_environment__ = __webpack_require__(830);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_fire_auth__ = __webpack_require__(831);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_storage__ = __webpack_require__(836);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_geolocation__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_firebase_service_firebase_service__ = __webpack_require__(838);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_fire_database__ = __webpack_require__(98);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_card_onibus_card_onibus__["a" /* CardOnibusPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_contate_nos_contate_nos__["a" /* ContateNosPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_maps_maps__["a" /* MapsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_informa_es_informa_es__["a" /* InformaEsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_sobre_ns_sobre_ns__["a" /* SobreNSPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_fire__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_13__environments_environment__["a" /* environment */].firebase),
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/card-onibus/card-onibus.module#CardOnibusPageModule', name: 'CardOnibusPage', segment: 'card-onibus', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_15__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_fire_database__["b" /* AngularFireDatabaseModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_card_onibus_card_onibus__["a" /* CardOnibusPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_contate_nos_contate_nos__["a" /* ContateNosPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_maps_maps__["a" /* MapsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_informa_es_informa_es__["a" /* InformaEsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_sobre_ns_sobre_ns__["a" /* SobreNSPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_14__angular_fire_auth__["a" /* AngularFireAuth */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_18__angular_fire_database__["a" /* AngularFireDatabase */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_17__providers_firebase_service_firebase_service__["a" /* FirebaseServiceProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 466:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_contate_nos_contate_nos__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_maps_maps__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_sobre_ns_sobre_ns__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_card_onibus_card_onibus__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_maps_maps__["a" /* MapsPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_5__pages_maps_maps__["a" /* MapsPage */] },
            { title: 'Sobre nós', component: __WEBPACK_IMPORTED_MODULE_6__pages_sobre_ns_sobre_ns__["a" /* SobreNSPage */] },
            { title: 'Contate-nos', component: __WEBPACK_IMPORTED_MODULE_4__pages_contate_nos_contate_nos__["a" /* ContateNosPage */] },
            { title: 'Pesquisa Ônibus', component: __WEBPACK_IMPORTED_MODULE_7__pages_card_onibus_card_onibus__["a" /* CardOnibusPage */] },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Douglas M\Desktop\BusGo_Mobilealpha\BusGo_Mobile\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-title>\n      &nbsp;&nbsp;&nbsp;\n      <img src="../../assets/imgs/logobus.png" width="40px" style="display:inline-block" height="40px"/>\n      &nbsp;&nbsp;&nbsp;\n      BusGo\n    </ion-title>\n  </ion-header>\n\n  <ion-content>\n    <ion-list > \n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)" color=\'listColor\'>\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\Douglas M\Desktop\BusGo_Mobilealpha\BusGo_Mobile\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 830:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyBUy55pMtWvbEl8VcWplrP3hebpyqnvis4",
        authDomain: "aplicativo-onibus.firebaseapp.com",
        databaseURL: "https://aplicativo-onibus.firebaseio.com",
        projectId: "aplicativo-onibus",
        storageBucket: "aplicativo-onibus.appspot.com",
        messagingSenderId: "318091954040"
    }
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 838:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_fire_database__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(93);
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
  Generated class for the FirebaseServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var FirebaseServiceProvider = /** @class */ (function () {
    function FirebaseServiceProvider(http, db) {
        this.http = http;
        this.db = db;
        this.onibusDB = [];
    }
    FirebaseServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1__angular_fire_database__["a" /* AngularFireDatabase */]])
    ], FirebaseServiceProvider);
    return FirebaseServiceProvider;
}());

//# sourceMappingURL=firebase-service.js.map

/***/ })

},[419]);
//# sourceMappingURL=main.js.map