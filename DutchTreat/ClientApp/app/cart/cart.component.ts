import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
    selector: 'the-cart',
    templateUrl: './cart.component.html',
    styleUrls: []
})
export class CartComponent implements OnInit {

    constructor(private dataService: DataService) { }

    ngOnInit() {
    }

}
