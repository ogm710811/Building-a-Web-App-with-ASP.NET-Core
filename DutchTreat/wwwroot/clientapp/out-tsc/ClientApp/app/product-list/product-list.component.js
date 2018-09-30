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
import { DataService } from '../services/data.service';
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
        Component({
            selector: 'product-list',
            templateUrl: './product-list.component.html',
            styleUrls: ['./product-list.component.css']
        }),
        __metadata("design:paramtypes", [DataService])
    ], ProductListComponent);
    return ProductListComponent;
}());
export { ProductListComponent };
//# sourceMappingURL=product-list.component.js.map