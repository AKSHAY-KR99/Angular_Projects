import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  aim="Your Perfect Bankimg Partner"
  accno="Account Number Please"
  pswd=""
 
  AccountDetails:any = {
    1000: { acno: 1000, pswd: "user1", blnce: 5000 , uname:"user1"},
    1001: { acno: 1001, pswd: "user2", blnce: 3000 , uname:"user2"},
    1002: { acno: 1002, pswd: "user3", blnce: 10000 , uname:"user3"},
    1003: { acno: 1003, pswd: "user4", blnce: 1000 , uname:"user4"},
}

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  ChangeAcc(event:any){

    this.accno = event.target.value
    console.log(this.accno);
    
  }
  ChangePswd(event:any){

    this.pswd = event.target.value
    console.log(this.pswd);
    

  }

  login(){
    
    var acno = this.accno
    var pswd = this.pswd

    let dataset = this.AccountDetails
    if (acno in dataset) {
      if (pswd == dataset[acno]["pswd"]) {
        alert("login Succesfull")
        this.router.navigateByUrl("dashboard")
      }
      else {
        alert("Invalid Password")
      }

    }
    else {
      alert("Invalid Account Number, Please Register")
    }
  }
}
