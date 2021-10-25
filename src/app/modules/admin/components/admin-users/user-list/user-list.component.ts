import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import { TeamWorker } from 'src/app/shared/team-worker.interface';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  selected = ""
  @Input() teamWorkers ? : TeamWorker[];
  @Output() teamWorkerChanged = new EventEmitter <TeamWorker> ();
  @Output() teamWorkerOrderChanged = new EventEmitter <TeamWorker[]> ();
  constructor() {}
  changeTeamWorker(teamWorker: TeamWorker) {
    this.selected = teamWorker._id
    this.teamWorkerChanged.emit(teamWorker)
  }
  moveTeamWorker(teamWorker: TeamWorker, up: boolean) {
    if (typeof (this.teamWorkers) != "undefined") {
      let i = this.teamWorkers.indexOf(teamWorker)
      if (up) {
        let fisrtElem
        let secondElem
        switch (i) {
          case 0:
            fisrtElem = this.teamWorkers.shift()
            secondElem = this.teamWorkers.pop()
            if (fisrtElem && secondElem) {
              this.teamWorkers.unshift(secondElem)
              this.teamWorkers.push(fisrtElem)
            }
            break;
          case (this.teamWorkers.length - 1):
            fisrtElem = this.teamWorkers[this.teamWorkers.length - 2]
            secondElem = this.teamWorkers[this.teamWorkers.length - 1]
            if (fisrtElem && secondElem) {
              this.teamWorkers[this.teamWorkers.length - 2] = secondElem
              this.teamWorkers[this.teamWorkers.length - 1] = fisrtElem
            }
            break;
          default:
            let firstArr = this.teamWorkers.slice(0, i)
            let secondArr = this.teamWorkers.slice(i, this.teamWorkers.length)
            if (firstArr && secondArr) {
              fisrtElem = firstArr.pop()
              secondElem = secondArr.shift()
              if (fisrtElem && secondElem) {
                firstArr.push(secondElem)
                secondArr.unshift(fisrtElem)
                this.teamWorkers = firstArr.concat(secondArr)
                this.teamWorkerOrderChanged.emit(this.teamWorkers)
              }
            }
            break
        }
      } else {
        let fisrtElem
        let secondElem
        switch (i) {
          case 0:
            fisrtElem = this.teamWorkers[1]
            secondElem = this.teamWorkers[0]
            if (fisrtElem && secondElem) {
              this.teamWorkers[1] = secondElem
              this.teamWorkers[0] = fisrtElem
            }
            break;
          case (this.teamWorkers.length - 1):
            fisrtElem = this.teamWorkers.shift()
            secondElem = this.teamWorkers.pop()
            if (fisrtElem && secondElem) {
              this.teamWorkers.unshift(secondElem)
              this.teamWorkers.push(fisrtElem)
            }
            break;
          default:
            let firstArr = this.teamWorkers.slice(0, i + 1)
            let secondArr = this.teamWorkers.slice(i + 1, this.teamWorkers.length)
            if (firstArr && secondArr) {
              fisrtElem = firstArr.pop()
              secondElem = secondArr.shift()
              if (fisrtElem && secondElem) {
                firstArr.push(secondElem)
                secondArr.unshift(fisrtElem)
                this.teamWorkers = firstArr.concat(secondArr)
              }
            }
            break
        }
        this.teamWorkerOrderChanged.emit(this.teamWorkers)
      }
    }
  }
  ngOnInit(): void {}

}
