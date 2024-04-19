import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  requestUrl = 'http://localhost:8080'
  constructor(private http: HttpClient) { }

  authenticate(projectKey: string, projectPassKey: string) {
    return this.http.post('http://localhost:8080/authenticate', { projectKey, projectPassKey })
  }
}
