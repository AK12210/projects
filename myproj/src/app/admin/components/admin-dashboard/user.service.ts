import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';

export interface MyUser {
  id?: number;
  username: string;
  password: string;
  roles: string;
  active: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:8080/api/users';
  constructor(private http: HttpClient) {}

  getUsers(search: string = ''): Observable<MyUser[]> {
  const params = new HttpParams().set('search', search);
  return this.http.get<MyUser[]>(`http://localhost:8080/api/users`, { params });
}

  createUser(user: MyUser): Observable<MyUser> {
    const currentUsername = localStorage.getItem('username');
    return this.http.post<MyUser>(`${this.baseUrl}/${currentUsername}`, user);
  }
  updateUser(id: number, user: MyUser): Observable<MyUser> {
    const currentUsername = localStorage.getItem('username');
    return this.http.put<MyUser>(`${this.baseUrl}/${currentUsername}/${id}`, user);
  }

  deleteUser(id: number | undefined): Observable<void> {
    const currentUsername = localStorage.getItem('username');
    return this.http.delete<void>(`${this.baseUrl}/${currentUsername}/${id}`);
  }

}
