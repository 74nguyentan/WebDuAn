
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private baseUrl = 'http://localhost:8000/greenmarket/api/idusers';
  private baseUrl1 = 'http://localhost:8000/greenmarket/api/binhluan';
  private baseUrl2 = 'http://localhost:8000/greenmarket/api/idmathang';

  constructor(private http: HttpClient) { }

  getComment(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl2}/${id}`);
  }

  createcomment(comments: object): Observable<object> {
    return this.http.post(`${this.baseUrl1}`, comments);
  }

  get(url, id): Observable<any> {
    return this.http.get(url + id);
  }
}
