import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpServiceService } from './services/http-service.service';
import { Project } from './shared/project.interface';
import { TeamWorker} from './shared/team-worker.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(){}  
  ngOnInit(): void {
  }
}