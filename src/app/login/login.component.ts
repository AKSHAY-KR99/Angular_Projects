import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  aim="Your Perfect Banking Partner"
  loginForm = this.fb.group({
    accno:['',[Validators.required,Validators.minLength(4),Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.minLength(4),Validators.pattern('[a-zA-Z0-9]*')]]
  })
 
  

  constructor(private router:Router,private dataService:DataService, private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  // ChangeAcc(event:any){

  //   this.accno = event.target.value
  //   console.log(this.accno);
    
  // }
  // ChangePswd(event:any){

  //   this.pswd = event.target.value
  //   console.log(this.pswd);
    



  login(){
    
    var acno = this.loginForm.value.accno
    var pswd = this.loginForm.value.pswd

    
    const result = this.dataService.login(acno,pswd);

    if(result){
      this.router.navigateByUrl("dashboard")
    }

  }

  register(){

    // alert("Registration succesfull")
    this.router.navigateByUrl("register")


  }


}
