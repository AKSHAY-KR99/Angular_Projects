import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  lLogin: Date = new Date();

  withdrawForm = this.fb.group({

    accno: ['', [Validators.required, Validators.minLength(4), Validators.pattern('[0-9]*')]],
    pswd: ['', [Validators.required, Validators.minLength(4), Validators.pattern('[a-zA-Z0-9]*')]],
    amt: ['', [Validators.required, Validators.pattern('[0-9]*')]]
  })


  depositForm = this.fb.group({

    accno: ['', [Validators.required, Validators.minLength(4), Validators.pattern('[0-9]*')]],
    pswd: ['', [Validators.required, Validators.minLength(4), Validators.pattern('[a-zA-Z0-9]*')]],
    amt: ['', [Validators.required, Validators.pattern('[0-9]*')]]
  })

  constructor(public dataService: DataService, private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  deposit() {

    var accno = this.depositForm.value.accno
    var pswd = this.depositForm.value.pswd
    var amt = this.depositForm.value.amt

    const result = this.dataService.deposit(accno, pswd, amt)

    if (result) {
      alert("transaction was succesful")
    }
    else {
      alert("Transaction Failed")
    }
  }

  withdraw() {
    var accno = this.withdrawForm.value.accno
    var pswd = this.withdrawForm.value.pswd
    var amt = this.withdrawForm.value.amt


    const result = this.dataService.withdraw(accno, pswd, amt)

    if (result) {
      alert("transaction was succesful")
    }
    else {
      alert("Transaction Failed")
    }
  }

}
