var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { DataService } from '../services/dataService';
import { Router } from '@angular/router';
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
        Component({
            selector: 'the-cart',
            templateUrl: './cart.component.html',
            styleUrls: []
        }),
        __metadata("design:paramtypes", [DataService,
            Router])
    ], CartComponent);
    return CartComponent;
}());
export { CartComponent };
//# sourceMappingURL=cart.component.js.map