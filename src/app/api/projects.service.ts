import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import type Project from './models/Project.type'

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  requestUrl = 'http://localhost:8080'
  constructor(private http: HttpClient) { }

  getProject(projectId: number) {
    return this.http.get<Project>(this.requestUrl + '/projects/' + projectId);
  }
}
