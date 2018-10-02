import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/dataService';
import { Product } from '../interfaces/product';

@Component({
    selector: 'product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    public products: Product[] = [];

    constructor(private dataService: DataService) { }

    ngOnInit() {
        this.dataService.loadProducts()
            .subscribe(success => {
                if (success) {
                    this.products = this.dataService.products;
                }
            })
    }

    addProduct(product: Product) {
        this.dataService.addToOrder(product);
    }

}
