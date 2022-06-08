import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegesComponent } from './reges/reges.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegesComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    LoginComponent,
    RegesComponent
  ]
})
export class UserAuthModule { }
