import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
email: String;
password: String;
  constructor(private flashMessage: FlashMessagesService,
  	private router: Router) { }

  ngOnInit() {
  }
onLoginSubmit() {
	const login = {
      email: this.email,
      password: this.password
}
if (login.email== 'bilal@example.com'&& login.password=='123') {
        this.flashMessage.show('You Have login Successfully', {cssClass:'alert-success', timeout: 3000});
        this.router.navigate(['/register']);
      }
}
}