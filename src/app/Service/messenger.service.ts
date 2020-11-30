import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {
  private baseUrl = 'http://localhost:8000/greenmarket/api/tousers';
  private baseUrl1 = 'http://localhost:8000/greenmarket/api/fromusers';
  constructor(private http: HttpClient) { }

  gettomessenger(id: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  getfrommessenger(id: any): Observable<any> {
    return this.http.get(`${this.baseUrl1}/${id}`);
  }
}
