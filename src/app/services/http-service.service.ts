import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../shared/user.interface';
import { Project } from '../shared/project.interface';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private http:HttpClient) {
  }
  
  //Users
  
  getUsers() {
    return this.http.get<User[]>(`${environment.serverUrl}/users`).toPromise();
  }

  createUser(user: User) {
    return this.http.post(`${environment.serverUrl}/users`, user).toPromise();
  }

  updateUser(user: User) {
    return this.http.put(`${environment.serverUrl}/users/${user._id}`, user).toPromise();
  }

  deleteUser(user: User) {
    return this.http.delete(`${environment.serverUrl}/users/${user._id}`).toPromise();
  }

  //Projects

  getProjects() {
    return this.http.get<Project[]>(`${environment.serverUrl}/projects`).toPromise();
  }

  createProject(project: Project) {
    return this.http.post(`${environment.serverUrl}/projects`, project).toPromise();
  }

  updateProject(project: Project) {
    return this.http.put(`${environment.serverUrl}/projects/${project._id}`, project).toPromise();
  }

  deleteProject(project: Project) {
    return this.http.delete(`${environment.serverUrl}/projects/${project._id}`).toPromise();
  }
}
