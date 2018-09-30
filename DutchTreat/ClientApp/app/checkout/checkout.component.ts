import { Component } from "@angular/core";
import { DataService } from "../services/data.service";

@Component({
    selector: "checkout",
    templateUrl: "checkout.component.html",
    styleUrls: ['checkout.component.css']
})
export class CheckoutComponent {

    constructor(private dataService: DataService) {
    }

    onCheckout() {
        // TODO
        alert("Doing checkout");
    }
}
