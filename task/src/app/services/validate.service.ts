import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {

  constructor() { }
  validateRegister(user){
  	if (user.firstname == undefined || user.lastname == undefined || user.email == undefined || user.username == undefined || user.password == undefined || user.address == undefined || user.country == undefined ) {
  		return false;
  	} else {
  		return true;
  	}
  }
  validateEmail(email){
const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  validatePassword(password){
const pas = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
return pas.test(password);
}
}
