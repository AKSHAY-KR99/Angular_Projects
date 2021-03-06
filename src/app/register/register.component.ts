import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  
  aim = "Registration Page"

  registerForm = this.fb.group({
    uname:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    accno:['',[Validators.required,Validators.minLength(4),Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.minLength(4),Validators.pattern('[a-zA-Z0-9]*')]]
  })

  constructor(private dataService: DataService,private router:Router, private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  register() {

    console.log(this.registerForm.get('uname')?.errors);
    if(this.registerForm.get('uname')?.errors){
      alert("username required")
    }

    if(this.registerForm.valid){
    var uname = this.registerForm.value.uname
    var accno = this.registerForm.value.accno
    var pswd = this.registerForm.value.pswd

    
    

    const result = this.dataService.register(accno, pswd, uname)
    if(result){
      alert("Registration Successfully Completed")
      this.router.navigateByUrl("")
    }
    else{
      alert("Account Already Exist. Please login")
    
    }
  
  }
  else{
    alert("Invalid form")
  }
    
  }

}
