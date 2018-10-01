import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';;
import { CartComponent } from './cart/cart.component';
import { ShopComponent } from './shop/shop.component'
import { CheckoutComponent } from './checkout/checkout.component';
import { LoginComponent } from './login/login.component'


const appRoutes: Routes = [
    { path: "", component: ShopComponent },
    { path: "checkout", component: CheckoutComponent },
    { path: "login", component: LoginComponent }
];

@NgModule({
    declarations: [
        AppComponent,
        ProductListComponent,
        CartComponent,
        ShopComponent,
        CheckoutComponent,
        LoginComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        RouterModule.forRoot(appRoutes, {
            useHash: true,
            enableTracing: false // for debugging of the routes
        })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
