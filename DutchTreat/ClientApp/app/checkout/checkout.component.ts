import { Component } from "@angular/core";
import { DataService } from "../services/dataService";
import { Router } from "@angular/router";

@Component({
    selector: "checkout",
    templateUrl: "checkout.component.html",
    styleUrls: ['checkout.component.css']
})
export class CheckoutComponent {
    errorMessage: string = '';

    constructor(
        private dataService: DataService,
        private router: Router
    ) { }

    onCheckout() {
        this.dataService.checkout()
            .subscribe(success => {
                if (success) {
                    this.router.navigate(['/']);
                }
            }, error => this.errorMessage = "Failed to save order");
    }
}
