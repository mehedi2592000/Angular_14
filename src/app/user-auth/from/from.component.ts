import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-from',
  templateUrl: './from.component.html',
  styleUrls: ['./from.component.css']
})
export class FromComponent implements OnInit {

  constructor() { }

  userdata:any={};


  ngOnInit(): void {
  }

  getData(data:NgForm)
  {
    console.warn(data);
    this.userdata=data;
  }
}
