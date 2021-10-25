import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from 'src/app/services/http-service.service';
import { Project } from 'src/app/shared/project.interface';
import { TeamWorker } from 'src/app/shared/team-worker.interface';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {
  TeamWorkers:TeamWorker[] = [];
  projects:Project[] = [];
  env = environment
  constructor(private serv:HttpServiceService){}  
  async getData(){
    try{
      this.TeamWorkers = await this.serv.getTeamWorkers();
      this.projects= await this.serv.getProjects();
    }catch(e){
      console.log(e);
    }
  }
  ngOnInit(): void {
    this.getData()
  }

}
