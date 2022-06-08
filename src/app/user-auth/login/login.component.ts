import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getName(name:string)
  {
    //alert(name);

    console.warn(name);
  }

place=" ";
  getshow(sh:string)
  {
    console.warn(sh);
    this.place=sh;
  }

nam="hasan";
val=false;
}
