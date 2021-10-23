import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { TeamWorker } from '../shared/team-worker.interface';
import { Project } from '../shared/project.interface';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private http:HttpClient) {
  }
  
  //TeamWorkers
  
  getUsers() {
    return this.http.get<TeamWorker[]>(`${environment.serverUrl}/teamWorkers`).toPromise();
  }

  createUser(TeamWorker: TeamWorker) {
    return this.http.post(`${environment.serverUrl}/teamWorkers`, TeamWorker).toPromise();
  }

  updateUser(TeamWorker: TeamWorker) {
    return this.http.put(`${environment.serverUrl}/teamWorkers/${TeamWorker._id}`, TeamWorker).toPromise();
  }

  deleteUser(TeamWorker: TeamWorker) {
    return this.http.delete(`${environment.serverUrl}/teamWorkers/${TeamWorker._id}`).toPromise();
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
