import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  AccountDetails:any = {
    1000: { acno: 1000, pswd: "user1", balance: 5000 , uname:"user1"},
    1001: { acno: 1001, pswd: "user2", balance: 3000 , uname:"user2"},
    1002: { acno: 1002, pswd: "user3", balance: 10000 , uname:"user3"},
    1003: { acno: 1003, pswd: "user4", balance: 1000 , uname:"user4"},
}

  constructor() { }

  register(acno:any,pswd:any,uname:any){
    let dataset= this.AccountDetails;
    if(acno in dataset){
      return false;
    }
    else{
      
      dataset[acno]={
        acno,pswd,balance:0,uname
      }
      return true

    }


  }

  login(acno:any,pswd:any){

    let dataset = this.AccountDetails
    if (acno in dataset) {
      if (pswd == dataset[acno]["pswd"]) {
        return true;
          alert("login Succesfull")
        
      }
      else {
        
        alert("Invalid Password")
        return false;
      }

    }
    else {
      alert("Invalid Account Number, Please Register")
      return false;
    }
  }

  deposit(acno:any,pswd:any,amount:any){

    var acno=acno;
    var pswd=pswd;
    var amt=parseInt(amount);
    
    let dataset = this.AccountDetails
    if (acno in dataset) {
      if (pswd == dataset[acno]["pswd"]) {
        
        dataset[acno]["balance"]+=amt
        alert(`Amount ${amt} credited succesfully, New Balance is ${dataset[acno]["balance"]}`)
        return true;
          
        
      }
      else {
        
        alert("Invalid Password")
        return false;
      }

    }
    else {
      alert("Invalid Account Number, Please Register")
      return false;
    }
  }

  withdraw(acno:any,pswd:any,amount:any){

    var acno=acno;
    var pswd=pswd;
    var amt=parseInt(amount);
    
    let dataset = this.AccountDetails
    if (acno in dataset) {
      if (pswd == dataset[acno]["pswd"]) {
        
        if(amt>dataset[acno]["balance"]){
          alert("Insufficient Balance")
        }
        else{
        dataset[acno]["balance"]-=amt
        alert(`Amount ${amt} debited succesfully, New Balance is ${dataset[acno]["balance"]}`)
        return dataset[acno]["balance"];
      }
          
        
      }
      else {
        
        alert("Invalid Password")
        return false;
      }

    }
    else {
      alert("Invalid Account Number, Please Register")
      return false;
    }
  }

}
