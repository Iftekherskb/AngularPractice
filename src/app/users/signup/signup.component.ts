import { assertPlatform, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }
  myName = "Boss"
  color = "red";

  data = [
    {
      Name: "Sakib",
      age: 24
    },
    {
      Name: "Boss",
      age: 24
    },
    {
      Name : "Cox's",
      age : 24
    }
  ]

  ngOnInit(): void {
  }
  getName(name) {
    alert(name)
  };

}
