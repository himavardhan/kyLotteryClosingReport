import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private formBuild:FormBuilder){}


userFormData= this.formBuild.group({
  username:['',Validators.required],
  password:[''],
  confirmpassword:[''],
  email:[''],
  billingAddress:this.formBuild.group({
    addressline1:[''], 
    city:[''],
    state:[''],
    zipcode:['']
    })
  })

  title = 'gitdemo';
 /* userFormData  = new FormGroup({
    username: new FormControl(),
    password:new FormControl(),
    confirmpassword:new FormControl(),
    email:new FormControl(),
    billingAddress:new FormGroup({
      addressline1:new FormControl(), 
      city:new FormControl(),
      state:new FormControl(),
      zipcode:new FormControl()})
 });*/

 addValidData(){
  /*this.userFormData.setValue({
    "username": "himavardha",
    "password": "123456",
    "confirmpassword": "123456",
    "email": "him@gmail.in",
    "billingAddress": {
      "addressline1": "422 west 12th street",
      "city": "Covington",
      "state": "Ky",
      "zipcode": "41011"
    }
  });*/
  this.userFormData.patchValue({ "username": "himavardha",
  "password": "123456",
  "confirmpassword": "123456",
  "email": "him@gmail.in",
  "billingAddress": {
    "addressline1": "422 west 12th street", 
    "zipcode": "41011"
  }});
 }
 
 
}
