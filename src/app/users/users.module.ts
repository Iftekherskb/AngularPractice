import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormComponent } from './form/form.component';
import {FormsModule} from '@angular/forms';




@NgModule({
  declarations: [LoginComponent, SignupComponent, FormComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    LoginComponent,
    SignupComponent,
    FormComponent
  ]
})
export class UsersModule { }
