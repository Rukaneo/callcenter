import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  signUpShowApp: boolean = false;
  loginShowApp: boolean = true;

  constructor() { }

  ngOnInit(): void {

  }


  loginShow(){
    this.signUpShowApp = false;
    this.loginShowApp = true;
   
  }

  signUpShow () {
    this.signUpShowApp = true;
    this.loginShowApp = false;

  }

}
