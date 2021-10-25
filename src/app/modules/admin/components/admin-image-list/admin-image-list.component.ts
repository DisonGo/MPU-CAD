import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HttpServiceService } from 'src/app/services/http-service.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-admin-image-list',
  templateUrl: './admin-image-list.component.html',
  styleUrls: ['./admin-image-list.component.css']
})
export class AdminImageListComponent implements OnInit {
  selectedImage:any
  serverUrl = environment.serverUrl
  @Input() images: any;
  @Output() imgSelected = new EventEmitter();
  selectImage(imgLink:string){
    if(!(this.selectedImage == imgLink)){
      this.selectedImage = imgLink
    }else
    {
      this.selectedImage = ''
    }
    this.imgSelected.emit(this.selectedImage)
  }
  constructor(private http:HttpServiceService) { }
  ngOnInit(): void {
  }

}
