import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  private baseUrl = 'http://localhost:8000/greenmarket/api/idlichsu';
  private baseUrl1 = 'http://localhost:8000/greenmarket/api/lichsu';
  constructor(private http: HttpClient) { }

 getHistory(id: any): Observable<any> {
   return this.http.get(`${this.baseUrl}/${id}`);
 }

 createhistory(history: object): Observable<object>{
   return this.http.post(`${this.baseUrl1}`, history);
 }

 updatehistory(id: any , value: any): Observable<object>{
   return this.http.put(`${this.baseUrl}/${id}`, value);
 }

 deleteHistory(id: any): Observable<any> {
  return this.http.get(`${this.baseUrl1}/${id}`);
}
}
