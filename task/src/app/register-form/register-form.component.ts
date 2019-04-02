import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import $ from "jquery";
@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  firstname: String;
  lastname: String;
	username: String;
	email: String;
	address:String;
	password: String;
	country: String;
  constructor(private validateService: ValidateService, 
              private flashMessage: FlashMessagesService) { }

  ngOnInit() {
  }
  
onRegisterSubmit() {
	const user = {
      firstname: this.firstname,
      lastname: this.lastname,
      username: this.username,
      email: this.email,
      address: this.address,
      password: this.password,
      country: this.country


      //Required Fields 
    }

if (!this.validateService.validateRegister(user)) {

      this.flashMessage.show('Please enter required fields', {cssClass:'alert-danger', timeout: 3000});
      return false;
    }
    //Email Validation
    if (!this.validateService.validateEmail(user.email)) {
     this.flashMessage.show('Please enter a valid email', {cssClass:'alert-danger', timeout: 3000});
     return false;
    }

if (!this.validateService.validatePassword(user.password)) {
     this.flashMessage.show('Please enter alpnumeric password', {cssClass:'alert-danger', timeout: 3000});
     return false;
    }
}
}
