import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from './services/http-service.service';
import { Project } from './shared/project.interface';
import { User } from './shared/user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  users:User[] = [];
  projects:Project[] = [];
  constructor(private serv:HttpServiceService){}  
  async getData(){
    try{
      this.users = await this.serv.getUsers();
      this.projects= await this.serv.getProjects();
    }catch(e){
      console.log(e);
    }finally{
      console.log(this.users,this.projects);
    }
  }
  ngOnInit(): void {
    this.getData()
  }
}