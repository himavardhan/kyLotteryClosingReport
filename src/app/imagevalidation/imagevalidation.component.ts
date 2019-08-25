import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imagevalidation',
  templateUrl: './imagevalidation.component.html',
  styleUrls: ['./imagevalidation.component.css']
})
export class ImagevalidationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onFileChanged(fileData){
   // const file = fileData.target.files[0];
   console.log(fileData.target.files.length)
    console.log(fileData.target.files[0].size);
    console.log(fileData.target.files[0].type);
   
  }

  uploadImage(imageInfo){

    console.log(imageInfo.target);


  }
}
