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
        Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styles: []
        }),
        __metadata("design:paramtypes", [DataService,
            Router])
    ], LoginComponent);
    return LoginComponent;
}());
export { LoginComponent };
//# sourceMappingURL=login.component.js.map