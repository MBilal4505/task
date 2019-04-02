import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterFormComponent } from './register-form/register-form.component';

const routes: Routes = [
{ path: '', component: RegisterFormComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterFormComponent }
];
@NgModule({
  declarations: [],
  exports: [RouterModule
    
  ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
