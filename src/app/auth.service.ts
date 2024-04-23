import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  requestUrl = 'http://localhost:8080'
  constructor(private http: HttpClient) { }

  authenticate (key: string, passKey: string) {
    return this.http.post<HttpResponse<null> | HttpErrorResponse>('http://localhost:8080/authenticate', { key, passKey });
  }
}
