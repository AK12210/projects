import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface MyUser {
  id?: number;
  username: string;
  password: string;
  roles: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:8080/api/my_user';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<MyUser[]> {
    return this.http.get<MyUser[]>(this.baseUrl);
  }

  createUser(user: MyUser): Observable<MyUser> {
    return this.http.post<MyUser>(this.baseUrl, user);
  }
}
