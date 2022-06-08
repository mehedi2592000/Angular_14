import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegesComponent } from './reges/reges.component';
import { FromComponent } from './from/from.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent,
    RegesComponent,
    FromComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    LoginComponent,
    RegesComponent,
    FromComponent
  ]
})
export class UserAuthModule { }
