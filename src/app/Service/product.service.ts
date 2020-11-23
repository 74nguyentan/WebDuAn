import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = 'http://localhost:8000/greenmarket/api/mathang';
  private url = 'http://localhost:8000/greenmarket/api/idloaihang';
  private url_user = 'http://localhost:8000/greenmarket/api/iduser';
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

  getidusers(id: string): Observable<any> {
    return this.http.get(`${this.url_user}/${id}`);
  }

  createproduct(products: Object): Observable<Object> {
    console.log(products);
    return this.http.post(`${this.baseUrl}`, products);
  }

  deleteproduct(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  updateProduct(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

}
