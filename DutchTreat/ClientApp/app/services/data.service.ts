import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Product } from '../interfaces/product';
import { Observable } from 'rxjs';
import { Order } from '../interfaces/order';
import { OrderItem } from '../interfaces/order-item';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    public products: Product[] = [];
    public order: Order = new Order();
    private token: string = '';
    private tokenExpiration: Date;

    constructor(private http: HttpClient) { }

    public get loginRequired(): boolean {
        return this.token.length == 0 || this.tokenExpiration > new Date();
    }

    login(credentials): Observable<boolean> {
        return this.http
            .post("/account/createtoken", credentials)
            .pipe(
                map((data: any) => {
                    this.token = data.token;
                    this.tokenExpiration = data.expiration;
                    return true;
                })
            )
    }

    loadProducts(): Observable<boolean> {
        return this.http
            .get("/api/products")
            .pipe(
                map((data: Product[]) => {
                    this.products = data;
                    return true;
                }));
    }

    addToOrder(newProduct: Product) {
        let item: OrderItem = this.order.items.find(item => item.id == newProduct.id)

        if (item) {
            item.quantity++;
        } else {
            item = new OrderItem();

            item.id = newProduct.id;
            item.productArtist = newProduct.artist;
            item.productArtId = newProduct.artId;
            item.productCategory = newProduct.category;
            item.productSize = newProduct.size;
            item.productTitle = newProduct.title;
            item.unitPrice = newProduct.price;
            item.quantity = 1;

            this.order.items.push(item);
        }

    }
}
