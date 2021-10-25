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
  
  getTeamWorkers() {
    return this.http.get<TeamWorker[]>(`${environment.serverUrl}/teamWorkers`).toPromise();
  }

  createTeamWorker(TeamWorker: TeamWorker) {
    return this.http.post(`${environment.serverUrl}/teamWorkers`, TeamWorker).toPromise();
  }

  updateTeamWorkers(TeamWorker: TeamWorker) {
    return this.http.put(`${environment.serverUrl}/teamWorkers/${TeamWorker._id}`, TeamWorker).toPromise();
  }

  deleteTeamWorkers(TeamWorker: TeamWorker) {
    return this.http.delete(`${environment.serverUrl}/teamWorkers/${TeamWorker._id}`).toPromise();
  }
  reconstructTeamWorkers(TeamWorkers: TeamWorker[]){
    return this.http.post(`${environment.serverUrl}/teamWorkers`, TeamWorkers).toPromise();
  }


  //Projects

  getProjects() {

    return this.http.get<Project[]>(`${environment.serverUrl}/projects`).toPromise();
  }

  createProject(project: Project) {
    return this.http.post(`${environment.serverUrl}/projects`, project).toPromise();
  }
  
  reconstructProjects(projects: Project[]){
    return this.http.post(`${environment.serverUrl}/projects`, projects).toPromise();
  }

  updateProject(project: Project) {
    return this.http.put(`${environment.serverUrl}/projects/${project._id}`, project).toPromise();
  }

  deleteProject(project: Project) {
    return this.http.delete(`${environment.serverUrl}/projects/${project._id}`).toPromise();
  }

  //Files

  postImage(file:any){
    return this.http.post(`${environment.serverUrl}/imgs`,file).toPromise()
  }

  getImages(){
    return this.http.get(`${environment.serverUrl}/imgs/all`).toPromise()
  }
  deleteImage(imgLink:string) {
    return this.http.delete(`${environment.serverUrl}/${imgLink}`).toPromise();
  }
  downloadImage(imgLink:string) : any {
		return this.http.get(`${environment.serverUrl}/${imgLink}`, {responseType: 'blob'}).toPromise();
  }
}
