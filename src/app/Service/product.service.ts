import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = 'http://localhost:8989/api/mathang';
  private url = 'http://localhost:8989/api/idloaihang';
  constructor(private http: HttpClient) { }

  getProductList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  // getAll(url): Observable<any>{
  //   return this.http.get(url + '/');
  // }

  // get(url, id: any) {
  //   return this.http.get<any>(url + '/' + id);
  // }

  getProduct(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  getidloaihang(id: number): Observable<any> {
    return this.http.get(`${this.url}/${id}`);
  }
}
