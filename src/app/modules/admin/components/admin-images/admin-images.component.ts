import { Component, OnInit } from '@angular/core';
import * as FileSaver from 'file-saver';
import { HttpServiceService } from 'src/app/services/http-service.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-admin-images',
  templateUrl: './admin-images.component.html',
  styleUrls: ['./admin-images.component.css']
})
export class AdminImagesComponent implements OnInit {
  fileToUpload: File | null = null;
  windowHeight = window.innerHeight - 100 - 30 + "px"
  checked = false
  selectedImg = ''
  images:any
  bufferImg:any
  serverUrl = environment.serverUrl +"/"
  constructor(private http: HttpServiceService) { }
  switchCheck()
  {
    this.checked = this.checked? false:true
  }
  handleFileInput(event:any) {
    let reader = new FileReader()
    let file = event.target.files
    this.fileToUpload = file.item(0);
    reader.onload =()=>{
      this.bufferImg = reader.result
    }
    reader.readAsDataURL(file.item(0))
    console.log(this.fileToUpload);
  }
  selectImg(imglink:string){
    this.selectedImg = imglink
  }
  async uploadImg(){
    if(this.fileToUpload){
      let formData = new FormData()
      formData.append('image',this.fileToUpload)
      try{
        await this.http.postImage(formData)
        
      }catch(e){
        console.log(e);
      }finally{
        this.getImages()
      }
    }
  }
  async getImages(){
    try{
      this.images = await this.http.getImages()
    }catch(e){
      console.log(e);
    }
  }
  async deleteImg(){
    if(this.selectedImg){
      try{
        await this.http.deleteImage(this.selectedImg)   
      }catch(e){
        console.log(e);
      }finally{
        this.getImages()
        this.selectedImg = ''
      }
    }
  }
  async download(){
    let name = this.selectedImg
    if(name){
      try{
        let blob = await this.http.downloadImage(name)
        blob = new Blob([blob],{ type: 'text/json; charset=utf-8' })
        FileSaver.saveAs(blob, name.slice(5,name.length));
      }catch(e){
        console.log(e);
      }
    }
  }
  ngOnInit(): void {
    this.getImages()
  }

}
