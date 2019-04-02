import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
@NgModule({
  declarations: [
    AppComponent,
    RegisterFormComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FlashMessagesModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
