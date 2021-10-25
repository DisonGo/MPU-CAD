import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import {
  HttpServiceService
} from 'src/app/services/http-service.service';
import {
  Project
} from 'src/app/shared/project.interface';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-admin-projects',
  templateUrl: './admin-projects.component.html',
  styleUrls: ['./admin-projects.component.css']
})
export class AdminProjectsComponent implements OnInit {
  projectForm!: FormGroup
  selectedProject: Project = {
    _id: '',
    name: '',
    shortDescr: '',
    longDescr: '',
    frontImgLink: '',
    innerImgLink: ''
  }
  fileToUpload: File | null = null;
  windowHeight = window.innerHeight - 100 + "px"
  projects: Project[] = []
  checked = false
  images: any
  serverUrl = environment.serverUrl+"/"
  constructor(private http: HttpServiceService, private fb: FormBuilder) {}
  async getData() {
    try {
      this.projects = await this.http.getProjects()
      await this.getImages()
    } catch (e) {
      console.log(e);
    }
  }
  handleFileInput(event:any) {
    let file = event.target.files
    this.fileToUpload = file.item(0);
    console.log(this.fileToUpload);
  }
  selectImg(imglink:string){
    this.selectedProject.frontImgLink = imglink
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
  async uploadImg(){
    if(this.fileToUpload){
      let formData = new FormData()
      formData.append('image',this.fileToUpload)
      try{
        await this.http.postImage(formData)
        
      }catch(e){
        console.log(e);
      }
    }
  }
  changeProjectsOrder(projects: Project[]) {
    this.projects = projects
    this.resetProject()
    this.reconstructProjects()
  }
  getValues() {
    let values = this.projectForm.value
    this.selectedProject.name = values.name
    this.selectedProject.shortDescr = values.shortDescr
  }
  changeProjectView(project: Project) {
    this.projectForm.get('name')?.setValue(project.name)
    this.projectForm.get('shortDescr')?.setValue(project.shortDescr)
    this.selectedProject = project
  }
  resetForm() {
    this.projectForm.get('name')?.setValue('')
    this.projectForm.get('shortDescr')?.setValue('')
  }
  resetProject() {
    this.selectedProject = {
      _id: '',
      name: '',
      shortDescr: '',
      longDescr: '',
      frontImgLink: '',
      innerImgLink: ''
    }
  }
  reset() {
    this.resetForm()
    this.resetProject()
  }
  isNew() {
    return this.selectedProject._id == ''
  }
  createProject() {
    this.getValues()
    this.uploadProject(this.selectedProject)
  }
  async deleteProject() {
    let project = this.selectedProject
    if (!this.isNew()) {
      try {
        await this.http.deleteProject(project)
      } catch (e) {
        console.log(e);
      } finally {
        this.getData()
      }
    }
    this.reset()
  }
  async reconstructProjects() {
    try {
      await this.http.reconstructProjects(this.projects)
    } catch (e) {
      console.log(e);
    } finally {
      this.getData()
    }
  }
  async updateProject() {
    this.getValues()
    let project = this.selectedProject
    if (!this.isNew()) {
      try {
        await this.http.updateProject(project)
      } catch (e) {
        console.log(e);
      } finally {
        this.getData()
      }
    }
  }
  async uploadProject(project: Project) {
    try {
      await this.http.createProject(project)
    } catch (e) {
      console.log(e);
    } finally {
      this.getData()
    }
  }
  ngOnInit(): void {
    const controls = {
      name: ['', Validators.required],
      shortDescr: ['', Validators.required]
    }
    this.projectForm = this.fb.group(controls)
    this.getData()
  }
}
