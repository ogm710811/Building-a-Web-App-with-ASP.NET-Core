var StoreCustomer = /** @class */ (function () {
    function StoreCustomer(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.visits = 0;
    }
    Object.defineProperty(StoreCustomer.prototype, "name", {
        get: function () {
            return this.ourName;
        },
        set: function (value) {
            this.ourName = value;
        },
        enumerable: true,
        configurable: true
    });
    StoreCustomer.prototype.showName = function () {
        alert(this.firstName);
    };
    return StoreCustomer;
}());
//# sourceMappingURL=storecustomer.js.map