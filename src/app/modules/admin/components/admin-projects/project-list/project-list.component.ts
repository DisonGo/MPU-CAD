import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import {
  Project
} from 'src/app/shared/project.interface';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  selected = ""
  @Input() projects ? : Project[];
  @Output() projectChanged = new EventEmitter < Project > ();
  @Output() projectOrderChanged = new EventEmitter < Project[] > ();
  constructor() {}
  changeProject(project: Project) {
    this.selected = project._id
    this.projectChanged.emit(project)
  }
  moveProject(project: Project, up: boolean) {
    if (typeof (this.projects) != "undefined") {
      let i = this.projects.indexOf(project)
      if (up) {
        let fisrtElem
        let secondElem
        switch (i) {
          case 0:
            fisrtElem = this.projects.shift()
            secondElem = this.projects.pop()
            if (fisrtElem && secondElem) {
              this.projects.unshift(secondElem)
              this.projects.push(fisrtElem)
            }
            break;
          case (this.projects.length - 1):
            fisrtElem = this.projects[this.projects.length - 2]
            secondElem = this.projects[this.projects.length - 1]
            if (fisrtElem && secondElem) {
              this.projects[this.projects.length - 2] = secondElem
              this.projects[this.projects.length - 1] = fisrtElem
            }
            break;
          default:
            let firstArr = this.projects.slice(0, i)
            let secondArr = this.projects.slice(i, this.projects.length)
            if (firstArr && secondArr) {
              fisrtElem = firstArr.pop()
              secondElem = secondArr.shift()
              if (fisrtElem && secondElem) {
                firstArr.push(secondElem)
                secondArr.unshift(fisrtElem)
                this.projects = firstArr.concat(secondArr)
                this.projectOrderChanged.emit(this.projects)
              }
            }
            break
        }
      } else {
        let fisrtElem
        let secondElem
        switch (i) {
          case 0:
            fisrtElem = this.projects[1]
            secondElem = this.projects[0]
            if (fisrtElem && secondElem) {
              this.projects[1] = secondElem
              this.projects[0] = fisrtElem
            }
            break;
          case (this.projects.length - 1):
            fisrtElem = this.projects.shift()
            secondElem = this.projects.pop()
            if (fisrtElem && secondElem) {
              this.projects.unshift(secondElem)
              this.projects.push(fisrtElem)
            }
            break;
          default:
            let firstArr = this.projects.slice(0, i+1)
            let secondArr = this.projects.slice(i+1, this.projects.length)
            if (firstArr && secondArr) {
              fisrtElem = firstArr.pop()
              secondElem = secondArr.shift()
              if (fisrtElem && secondElem) {
                firstArr.push(secondElem)
                secondArr.unshift(fisrtElem)
                this.projects = firstArr.concat(secondArr)
              }
            }
            break
          }
          this.projectOrderChanged.emit(this.projects)
      }
    }
  }
  ngOnInit(): void {}


}
