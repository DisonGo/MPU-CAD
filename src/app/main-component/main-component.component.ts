import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpServiceService } from '../services/http-service.service';
import { Project } from '../shared/project.interface';
import { TeamWorker } from '../shared/team-worker.interface';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {

  TeamWorkers:TeamWorker[] = [];
  projects:Project[] = [];
  env = environment
  constructor(private serv:HttpServiceService){}  
  async getData(){
    try{
      this.TeamWorkers = await this.serv.getUsers()
      this.projects= await this.serv.getProjects();
    }catch(e){
      console.log(e);
    }finally{
      console.log(this.TeamWorkers,this.projects);
    }
  }
  ngOnInit(): void {
    this.getData()
  }

}
