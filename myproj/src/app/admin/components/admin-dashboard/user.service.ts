import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

  getUsers(): Observable<MyUser[]> {
    return this.http.get<MyUser[]>(this.baseUrl);
  }

  createUser(user: MyUser): Observable<MyUser> {
    return this.http.post<MyUser>(this.baseUrl, user);
  }
  updateUser(id: number, user: MyUser): Observable<MyUser> {
    return this.http.put<MyUser>(`${this.baseUrl}/${id}`, user);
  }

  deleteUser(id: number | undefined): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
