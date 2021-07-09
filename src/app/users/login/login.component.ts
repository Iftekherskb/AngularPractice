import { hasLifecycleHook } from '@angular/compiler/src/lifecycle_reflector';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  currentValue = "";
   textBox = true;
   name = "hello";
   show = "red";
   
  ngOnInit(): void {
  }
  myEvent(val){
    console.warn(val);
    this.currentValue = val;

  };
  clearEvent(){
  this.currentValue = "";

  };
  enable(){
    this.textBox = false;
  }

}
