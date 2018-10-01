import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
    selector: 'the-cart',
    templateUrl: './cart.component.html',
    styleUrls: []
})
export class CartComponent implements OnInit {

    constructor(
        private dataService: DataService,
        private router: Router
    ) { }

    ngOnInit() {
    }

    onCheckout() {
        if (this.dataService.loginRequired) {
            // force to login
            this.router.navigate(['login']);
        } else {
            //goto checkout
            this.router.navigate(['checkout']);
        }
    }

}
