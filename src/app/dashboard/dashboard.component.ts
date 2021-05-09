import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  acno=""
  pswd=""
  amt=""

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
  }

  deposit(){

    
    const result = this.dataService.deposit(this.acno,this.pswd,this.amt)

    if (result){
      alert("transaction was succesful")
    }
    else{
      alert("Transaction Failed")
    }
  }

  withdraw(){

    
    const result = this.dataService.withdraw(this.acno,this.pswd,this.amt)

    if (result){
      alert("transaction was succesful")
    }
    else{
      alert("Transaction Failed")
    }
  }

}
