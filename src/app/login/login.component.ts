import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  aim="Your Perfect Bankimg Partner"
  account="Account Number Please"

  constructor() { }

  ngOnInit(): void {
  }

}
