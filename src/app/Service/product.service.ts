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
  private url_tenhang = 'http://localhost:8000/greenmarket/api/mathang1'; 
  private url_ = 'http://localhost:8000/greenmarket/api/fitler';
  private url__ = 'http://localhost:8000/greenmarket/api/gia100';
  private url300 = 'http://localhost:8000/greenmarket/api/gia300';
  private url1000 = 'http://localhost:8000/greenmarket/api/gia1000';
  private url_report = 'http://localhost:8000/greenmarket/api/tocao';
  constructor(private http: HttpClient) { }

  getProductList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getProduct(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  getProduct1(tenHang: string): Observable<any> {
    return this.http.get(`${this.url_tenhang}/${tenHang}`);
  }

  getidloaihang(id: number): Observable<any> {
    return this.http.get(`${this.url}/${id}`);
  }
  getfitler(id: any): Observable<any> {
    return this.http.get(`${this.url_}/${id}`);
  }
  getprice(id: any): Observable<any> {
    return this.http.get(`${this.url__}/${id}`);
  }
  getprice300(id: any): Observable<any> {
    return this.http.get(`${this.url300}/${id}`);
  }
  getprice1000(id: any): Observable<any> {
    return this.http.get(`${this.url1000}/${id}`);
  }

  getidusers(id: any): Observable<any> {
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

  updatereport(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.url_report}/${id}`, value);
  }
  
}
