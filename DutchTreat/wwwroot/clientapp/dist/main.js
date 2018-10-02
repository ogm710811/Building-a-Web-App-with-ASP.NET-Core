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

/***/ "./app/app.component.html":
/*!********************************!*\
  !*** ./app/app.component.html ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./app/app.component.ts":
/*!******************************!*\
  !*** ./app/app.component.ts ***!
  \******************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Product List';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'the-shop',
            template: __webpack_require__(/*! ./app.component.html */ "./app/app.component.html"),
            styles: []
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./app/app.module.ts":
/*!***************************!*\
  !*** ./app/app.module.ts ***!
  \***************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./app/app.component.ts");
/* harmony import */ var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product-list/product-list.component */ "./app/product-list/product-list.component.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cart/cart.component */ "./app/cart/cart.component.ts");
/* harmony import */ var _shop_shop_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shop/shop.component */ "./app/shop/shop.component.ts");
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./checkout/checkout.component */ "./app/checkout/checkout.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login/login.component */ "./app/login/login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







;




var appRoutes = [
    { path: "", component: _shop_shop_component__WEBPACK_IMPORTED_MODULE_8__["ShopComponent"] },
    { path: "checkout", component: _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_9__["CheckoutComponent"] },
    { path: "login", component: _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_6__["ProductListComponent"],
                _cart_cart_component__WEBPACK_IMPORTED_MODULE_7__["CartComponent"],
                _shop_shop_component__WEBPACK_IMPORTED_MODULE_8__["ShopComponent"],
                _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_9__["CheckoutComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoutes, {
                    useHash: true,
                    enableTracing: false // for debugging of the routes
                })
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./app/cart/cart.component.html":
/*!**************************************!*\
  !*** ./app/cart/cart.component.html ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Shopping Cart</h3>\r\n<div>Number of Items:{{dataService.order.items.length}}</div>\r\n<div>Subtotal:{{dataService.order.subtotal | currency}}</div>\r\n<table class=\"table table-info table-hover\">\r\n    <thead>\r\n        <tr>\r\n            <td><strong>Product</strong></td>\r\n            <td><strong>Quantity</strong></td>\r\n            <td><strong>Price</strong></td>\r\n            <td><strong>Total</strong></td>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor=\"let i of dataService.order.items\">\r\n            <td>{{i.productCategory}}</td>\r\n            <td>{{i.quantity}}</td>\r\n            <td>{{i.unitPrice | currency}}</td>\r\n            <td>{{(i.unitPrice * i.quantity) | currency}}</td>\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n<button class=\"btn btn-success\" *ngIf=\"dataService.order.items.length > 0\" (click)=\"onCheckout()\">Checkout</button>\r\n"

/***/ }),

/***/ "./app/cart/cart.component.ts":
/*!************************************!*\
  !*** ./app/cart/cart.component.ts ***!
  \************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_dataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/dataService */ "./app/services/dataService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CartComponent = /** @class */ (function () {
    function CartComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
    }
    CartComponent.prototype.ngOnInit = function () {
    };
    CartComponent.prototype.onCheckout = function () {
        if (this.dataService.loginRequired) {
            // force to login
            this.router.navigate(['login']);
        }
        else {
            //goto checkout
            this.router.navigate(['checkout']);
        }
    };
    CartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'the-cart',
            template: __webpack_require__(/*! ./cart.component.html */ "./app/cart/cart.component.html"),
            styleUrls: []
        }),
        __metadata("design:paramtypes", [_services_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "./app/checkout/checkout.component.css":
/*!*********************************************!*\
  !*** ./app/checkout/checkout.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".checkout-thumb {\n  max-width: 100px;\n}\n"

/***/ }),

/***/ "./app/checkout/checkout.component.html":
/*!**********************************************!*\
  !*** ./app/checkout/checkout.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n        <div class=\"col-12 alert-warning p-3\" *ngIf=\"errorMessage\">{{errorMessage}}</div>\r\n        <div class=\"col-12\">\r\n            <h3>Confirm Order</h3>\r\n            <table class=\"table table-bordered table-hover\">\r\n                <tr *ngFor=\"let o of dataService.order.items\">\r\n                    <td><img src=\"/img/{{ o.productArtId }}.jpg\" alt=\"o.productTitle\" class=\"img-thumbnail checkout-thumb\" /></td>\r\n                    <td>{{ o.productCategory }}({{ o.productSize }}) - {{ o.productArtist }}: {{ o.productTitle }}</td>\r\n                    <td>{{ o.quantity }}</td>\r\n                    <td>{{ o.unitPrice|currency:'USD':true }}</td>\r\n                    <td>{{ (o.unitPrice * o.quantity)|currency:'USD':true }}</td>\r\n                </tr>\r\n            </table>\r\n            <div class=\"col-md-4 col-md-offset-8 text-right\">\r\n                <table class=\"table table-condensed\">\r\n                    <tr>\r\n                        <td class=\"text-right\">Subtotal</td>\r\n                        <td class=\"text-right\">{{ dataService.order.subtotal|currency:'USD':true }}</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td class=\"text-right\">Shipping</td>\r\n                        <td class=\"text-right\">$ 0.00</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td class=\"text-right\">Total:</td>\r\n                        <td class=\"text-right\">{{ dataService.order.subtotal|currency:'USD':true }}</td>\r\n                    </tr>\r\n                </table>\r\n                <button class=\"btn btn-success m-2\" (click)=\"onCheckout()\">Complete Purchase</button>\r\n                <a routerLink=\"/\" class=\"btn btn-info\">Cancel</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./app/checkout/checkout.component.ts":
/*!********************************************!*\
  !*** ./app/checkout/checkout.component.ts ***!
  \********************************************/
/*! exports provided: CheckoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutComponent", function() { return CheckoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_dataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/dataService */ "./app/services/dataService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CheckoutComponent = /** @class */ (function () {
    function CheckoutComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        this.errorMessage = '';
    }
    CheckoutComponent.prototype.onCheckout = function () {
        var _this = this;
        this.dataService.checkout()
            .subscribe(function (success) {
            if (success) {
                _this.router.navigate(['/']);
            }
        }, function (error) { return _this.errorMessage = "Failed to save order"; });
    };
    CheckoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "checkout",
            template: __webpack_require__(/*! ./checkout.component.html */ "./app/checkout/checkout.component.html"),
            styles: [__webpack_require__(/*! ./checkout.component.css */ "./app/checkout/checkout.component.css")]
        }),
        __metadata("design:paramtypes", [_services_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CheckoutComponent);
    return CheckoutComponent;
}());



/***/ }),

/***/ "./app/interfaces/order-item.ts":
/*!**************************************!*\
  !*** ./app/interfaces/order-item.ts ***!
  \**************************************/
/*! exports provided: OrderItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderItem", function() { return OrderItem; });
var OrderItem = /** @class */ (function () {
    function OrderItem() {
    }
    return OrderItem;
}());



/***/ }),

/***/ "./app/interfaces/order.ts":
/*!*********************************!*\
  !*** ./app/interfaces/order.ts ***!
  \*********************************/
/*! exports provided: Order */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Order", function() { return Order; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

var Order = /** @class */ (function () {
    function Order() {
        this.orderDate = new Date();
        this.items = new Array();
    }
    Object.defineProperty(Order.prototype, "subtotal", {
        get: function () {
            return lodash__WEBPACK_IMPORTED_MODULE_0__["sum"](lodash__WEBPACK_IMPORTED_MODULE_0__["map"](this.items, function (i) { return i.unitPrice * i.quantity; }));
        },
        enumerable: true,
        configurable: true
    });
    return Order;
}());



/***/ }),

/***/ "./app/login/login.component.html":
/*!****************************************!*\
  !*** ./app/login/login.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-4 col-md-offset-4\">\r\n        <div class=\"alert alert-warning\" *ngIf=\"errorMessage\">{{errorMessage}}</div>\r\n        <form (submit)=\"onLogin()\" #theForm=\"ngForm\" novalidate>\r\n            <div class=\"form-group\">\r\n                <label for=\"username\">Username</label>\r\n                <input type=\"text\" class=\"form-control\" name=\"username\" #username=\"ngModel\" [(ngModel)]=\"credentials.username\" required />\r\n                <div class=\"text-danger\" *ngIf=\"username.touched && username.invalid && username.errors.required\">Username is required</div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label for=\"password\">Password</label>\r\n                <input type=\"password\" class=\"form-control\" name=\"password\" #password=\"ngModel\" [(ngModel)]=\"credentials.password\" required />\r\n                <div class=\"text-danger\" *ngIf=\"password.touched && password.invalid && password.errors.required\">Password is required</div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <input type=\"submit\" class=\"btn btn-success\" value=\"Login\" [disabled]=\"theForm.invalid\" />\r\n                <a routerLink=\"/\" class=\"btn btn-default\">Cancel</a>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./app/login/login.component.ts":
/*!**************************************!*\
  !*** ./app/login/login.component.ts ***!
  \**************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_dataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/dataService */ "./app/services/dataService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        this.credentials = {
            username: '',
            password: ''
        };
        this.errorMessage = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLogin = function () {
        var _this = this;
        this.dataService.login(this.credentials)
            .subscribe(function (success) {
            if (success) {
                if (_this.dataService.order.items.length == 0) {
                    _this.router.navigate(['/']);
                }
                else {
                    _this.router.navigate(['checkout']);
                }
            }
        }, function (error) { return _this.errorMessage = "Failed to login"; });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./app/login/login.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [_services_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./app/product-list/product-list.component.css":
/*!*****************************************************!*\
  !*** ./app/product-list/product-list.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".product-info img {\r\n    max-width: 100px;\r\n    float: left;\r\n    margin: 0 2px;\r\n    border: solid 1px black;\r\n}\r\n\r\n.product-info .product-name {\r\n    font-size: large;\r\n    font-weight: bold;\r\n}\r\n"

/***/ }),

/***/ "./app/product-list/product-list.component.html":
/*!******************************************************!*\
  !*** ./app/product-list/product-list.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n        <div class=\"product-info col-4\" *ngFor=\"let p of products\">\r\n            <div class=\"card bg-light p-1 m-1\">\r\n                <img src=\"/img/{{p.artId}}.jpg\" class=\"img-fluid\" [alt]=\"p.title\" />\r\n                <div class=\"product-name\">{{p.category}} - {{p.size}}</div>\r\n                <ul class=\"product-props\">\r\n                    <li><strong>Price:</strong> {{p.price | currency}}</li>\r\n                    <li><strong>Artist:</strong> {{p.artist}}</li>\r\n                    <li><strong>Title:</strong> {{p.title}}</li>\r\n                    <li><strong>Description:</strong> {{p.artDescription}}</li>\r\n                </ul>\r\n                <button id=\"buy-button\" class=\"btn btn-success\" (click)=\"addProduct(p)\">Buy</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./app/product-list/product-list.component.ts":
/*!****************************************************!*\
  !*** ./app/product-list/product-list.component.ts ***!
  \****************************************************/
/*! exports provided: ProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListComponent", function() { return ProductListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_dataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/dataService */ "./app/services/dataService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductListComponent = /** @class */ (function () {
    function ProductListComponent(dataService) {
        this.dataService = dataService;
        this.products = [];
    }
    ProductListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.loadProducts()
            .subscribe(function (success) {
            if (success) {
                _this.products = _this.dataService.products;
            }
        });
    };
    ProductListComponent.prototype.addProduct = function (product) {
        this.dataService.addToOrder(product);
    };
    ProductListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'product-list',
            template: __webpack_require__(/*! ./product-list.component.html */ "./app/product-list/product-list.component.html"),
            styles: [__webpack_require__(/*! ./product-list.component.css */ "./app/product-list/product-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], ProductListComponent);
    return ProductListComponent;
}());



/***/ }),

/***/ "./app/services/dataService.ts":
/*!*************************************!*\
  !*** ./app/services/dataService.ts ***!
  \*************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _interfaces_order__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../interfaces/order */ "./app/interfaces/order.ts");
/* harmony import */ var _interfaces_order_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../interfaces/order-item */ "./app/interfaces/order-item.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.token = "";
        this.tokenExpiration = new Date();
        this.order = new _interfaces_order__WEBPACK_IMPORTED_MODULE_3__["Order"]();
        this.products = [];
    }
    DataService.prototype.loadProducts = function () {
        var _this = this;
        return this.http.get("/api/products")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            _this.products = data;
            return true;
        }));
    };
    Object.defineProperty(DataService.prototype, "loginRequired", {
        get: function () {
            return this.token.length == 0 || this.tokenExpiration > new Date();
        },
        enumerable: true,
        configurable: true
    });
    DataService.prototype.login = function (creds) {
        var _this = this;
        return this.http.post("/account/createtoken", creds)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            var tokenInfo = response;
            _this.token = tokenInfo.token;
            _this.tokenExpiration = tokenInfo.expiration;
            return true;
        }));
    };
    DataService.prototype.checkout = function () {
        var _this = this;
        if (!this.order.orderNumber) {
            this.order.orderNumber = this.order.orderDate.getFullYear().toString() + this.order.orderDate.getTime().toString();
        }
        return this.http.post("/api/orders", this.order, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ "Authorization": "Bearer " + this.token })
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            _this.order = new _interfaces_order__WEBPACK_IMPORTED_MODULE_3__["Order"]();
            return true;
        }));
    };
    DataService.prototype.addToOrder = function (product) {
        var item = this.order.items.find(function (i) { return i.productId == product.id; });
        if (item) {
            item.quantity++;
        }
        else {
            item = new _interfaces_order_item__WEBPACK_IMPORTED_MODULE_4__["OrderItem"]();
            item.productId = product.id;
            item.productArtist = product.artist;
            item.productCategory = product.category;
            item.productArtId = product.artId;
            item.productTitle = product.title;
            item.productSize = product.size;
            item.unitPrice = product.price;
            item.quantity = 1;
            this.order.items.push(item);
        }
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./app/shop/shop.component.html":
/*!**************************************!*\
  !*** ./app/shop/shop.component.html ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <div class=\"row no-gutters\">\r\n        <div class=\"col-9 p-0\">\r\n            <h3>{{title}}</h3>\r\n            <product-list></product-list>\r\n        </div>\r\n        <div class=\"col-3 p-0\">\r\n            <div class=\"card bg-light p-2\">\r\n                <the-cart></the-cart>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./app/shop/shop.component.ts":
/*!************************************!*\
  !*** ./app/shop/shop.component.ts ***!
  \************************************/
/*! exports provided: ShopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopComponent", function() { return ShopComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ShopComponent = /** @class */ (function () {
    function ShopComponent() {
    }
    ShopComponent.prototype.ngOnInit = function () {
    };
    ShopComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'the-shop',
            template: __webpack_require__(/*! ./shop.component.html */ "./app/shop/shop.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], ShopComponent);
    return ShopComponent;
}());



/***/ }),

/***/ "./environments/environment.ts":
/*!*************************************!*\
  !*** ./environments/environment.ts ***!
  \*************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./main.ts":
/*!*****************!*\
  !*** ./main.ts ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***********************!*\
  !*** multi ./main.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Developer Projects by Tech\ASP.NET Core\PLURALSIGHT\Building-a-Web-App-with-ASP.NET-Core\DutchTreat\ClientApp\main.ts */"./main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map