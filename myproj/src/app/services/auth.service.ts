import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {Observable, of, throwError, catchError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  login(userInfo: {username: string, password: string}): Observable<string | boolean> {
    if (userInfo.username === 'admin' && userInfo.password === 'admin') {
      this.setToken('3VLkmIWADu8UlhycukU4xjH9KHq9uee1hp8PCTAcoUdzav0RGTTV9IImW3h0cSHG')
      return of(true)
    }
    return throwError(() => new Error('Login error'))
  }
}
