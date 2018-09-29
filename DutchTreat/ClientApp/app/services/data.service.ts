import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Product } from '../interfaces/product';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    public products: Product[] = [];

    constructor(private http: HttpClient) { }

    loadProducts(): Observable<boolean> {
        return this.http.get("/api/products")
            .pipe(
                map((data: Product[]) => {
                    this.products = data;
                    return true;
                }));
    }
}
