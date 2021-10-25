import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import {
  HttpServiceService
} from 'src/app/services/http-service.service';
import { TeamWorker } from 'src/app/shared/team-worker.interface';

import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {
  teamWorkerForm!: FormGroup
  selectedTeamWorker: TeamWorker = {
    _id: '',
    name: '',
    surname: '',
    project: '',
    imgLink: ''
  }
  windowHeight = window.innerHeight - 100 + "px"
  teamWorkers: TeamWorker[] = []
  checked = false
  images: any
  serverUrl = environment.serverUrl+"/"
  constructor(private http: HttpServiceService, private fb: FormBuilder) {}
  async getData() {
    try {
      this.teamWorkers = await this.http.getTeamWorkers()
      await this.getImages()
    } catch (e) {
      console.log(e);
    }
  }
  selectImg(imglink:string){
    this.selectedTeamWorker.imgLink = imglink
  }
  switchCheck()
  {
    this.checked = this.checked? false:true
  }
  async getImages(){
    try{
      this.images = await this.http.getImages()
    }catch(e){
      console.log(e);
    }
  }
  changeTeamWorkersOrder(teamWorkers: any) {
    this.teamWorkers = teamWorkers
    this.resetTeamworker()
    this.reconstructTeamWorkers()
  }
  getValues() {
    let values = this.teamWorkerForm.value
    this.selectedTeamWorker.name = values.name
    this.selectedTeamWorker.surname = values.surname
    this.selectedTeamWorker.project = values.project
  }
  changeTeamWorkerView(teamWorker: any) {
    this.teamWorkerForm.get('name')?.setValue(teamWorker.name)
    this.teamWorkerForm.get('surname')?.setValue(teamWorker.surname)
    this.teamWorkerForm.get('project')?.setValue(teamWorker.project)
    this.selectedTeamWorker = teamWorker
  }
  resetForm() {
    this.teamWorkerForm.get('name')?.setValue('')
    this.teamWorkerForm.get('surname')?.setValue('')
    this.teamWorkerForm.get('project')?.setValue('')
  }
  resetTeamworker() {
    this.selectedTeamWorker = {
      _id: '',
      name: '',
      surname: '',
      project: '',
      imgLink: ''
    }
  }
  reset() {
    this.resetForm()
    this.resetTeamworker()
  }
  isNew() {
    return this.selectedTeamWorker._id == ''
  }
  createTeamWorker() {
    this.getValues()
    this.uploadTeamWorker(this.selectedTeamWorker)
  }
  async deleteTeamWorker() {
    let teamWorker = this.selectedTeamWorker
    if (!this.isNew()) {
      try {
        await this.http.deleteTeamWorkers(teamWorker)
      } catch (e) {
        console.log(e);
      } finally {
        this.getData()
      }
    }
    this.reset()
  }
  async reconstructTeamWorkers() {
    try {
      await this.http.reconstructTeamWorkers(this.teamWorkers)
    } catch (e) {
      console.log(e);
    } finally {
      this.getData()
    }
  }
  async updateTeamWorkers() {
    this.getValues()
    let teamWorker = this.selectedTeamWorker
    if (!this.isNew()) {
      try {
        await this.http.updateTeamWorkers(teamWorker)
      } catch (e) {
        console.log(e);
      } finally {
        this.getData()
      }
    }
  }
  async uploadTeamWorker(teamWorkers: TeamWorker) {
    try {
      await this.http.createTeamWorker(teamWorkers)
    } catch (e) {
      console.log(e);
    } finally {
      this.getData()
    }
  }
  ngOnInit(): void {
    const controls = {
      name: ['', Validators.required],
      surname: ['', Validators.required],
      project: ['', Validators.required]
    }
    this.teamWorkerForm = this.fb.group(controls)
    this.getData()
  }

}
