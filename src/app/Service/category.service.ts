import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  // private baseUrl = 'http://localhost:8989/api/loaihang';
  //private baseUrl = 'http://localhost:8989/api/category';
  constructor(private http: HttpClient) { }

  getAll(url): Observable<any>{
    return this.http.get(url + '/');
  }

  // getEmployee(id: number): Observable<any> {
  //   return this.http.get(`${this.baseUrl}/${id}`);
  // }
}
