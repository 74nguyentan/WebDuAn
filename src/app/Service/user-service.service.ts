import { Users } from './../Model/user';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  static getUserByEmail(email_user: string) {
    throw new Error('Method not implemented.');
  }
  private baseUrl = 'http://localhost:8000/greenmarket/users/users';

  constructor(private http: HttpClient) { }

  createUser(Users: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, Users);
  }

  getUserById(id: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  getUserByEmail(email: String): Observable<any> {
    return this.http.get(`${this.baseUrl}/email/${email}`);
  }
  updateUser(id: any, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  // deleteEmployee(id: number): Observable<any> {
  //   return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  // }

  // getEmployeesList(): Observable<any> {
  //   return this.http.get(`${this.baseUrl}`);
  // }

}
