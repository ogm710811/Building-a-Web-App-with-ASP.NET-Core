import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
    selector: 'product-list',
    templateUrl: './product-list.component.html',
    styles: []
})
export class ProductListComponent implements OnInit {
    public products = [];

    constructor(private dataService: DataService) { }

    ngOnInit() {
        this.dataService.loadProducts()
            .subscribe(success => {
                if (success) {
                    this.products = this.dataService.products;
                }
            })
    }

}
