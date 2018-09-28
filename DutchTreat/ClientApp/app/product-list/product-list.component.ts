import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'product-list',
    templateUrl: './product-list.component.html',
    styles: []
})
export class ProductListComponent implements OnInit {
    public products = [{
        title: "First Product",
        price: 19.99
    }, {
        title: "Second Product",
        price: 9.99
    }, {
        title: "Third Product",
        price: 14.99
    }];

    constructor() { }

    ngOnInit() {
    }

}
