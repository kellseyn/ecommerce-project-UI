import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.css']
})
export class AuthPageComponent implements OnInit {
  loginToggle = true;
  signupToggle = false;
  constructor() { }

  ngOnInit(): void {
  }
  loginToggler(){
    this.loginToggle = !this.loginToggle;
    this.signupToggle = !this.signupToggle;
  }

}
