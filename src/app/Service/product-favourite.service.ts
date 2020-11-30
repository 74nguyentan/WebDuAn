import { Observable } from 'rxjs';
import { productFavourite } from './../model/productFavourite';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductFavouriteService {

  private url = 'http://localhost:8000/greenmarket/favourite/favourite';
  constructor(private http: HttpClient) { }

createFavoute(productFavourite:productFavourite){
  return this.http.post(`${this.url}`,productFavourite);
}

getidusers(id: any): Observable<any> {
  return this.http.get(`${this.url}/${id}`);
}
getidMatHang(id: any): Observable<any> {
  return this.http.get(`${this.url}/mathang/${id}`);
}
deleteFavourite(id:number):Observable<any>{
  return this.http.delete(`${this.url}/${id}`,{responseType: 'text'});
}

}
