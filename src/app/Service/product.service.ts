import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = 'http://localhost:8989/greenmarket/api/mathang';
  private url = 'http://localhost:8989/greenmarket/api/idloaihang';
  constructor(private http: HttpClient) { }

  getProductList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getProduct(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  getidloaihang(id: number): Observable<any> {
    return this.http.get(`${this.url}/${id}`);
  }

  createproduct(products: Object): Observable<Object> {
    console.log(products);
    return this.http.post(`${this.baseUrl}`, products);
  }
}
