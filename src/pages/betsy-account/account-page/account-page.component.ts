import { Component, OnInit } from '@angular/core';
import { MaterialModule } from "@angular/material"

import { BetsyAccountService } from "../betsy-account.service"

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.scss']
})
export class AccountPageComponent implements OnInit {
  accounting:Array<any>;
  
    constructor(private accountServ:BetsyAccountService) {
      this.accounting = this.accountServ.accounting
    }
    asc(){
      this.accountServ.asc()
    }
    desc(){
      this.accountServ.desc()
    }
    random(){
      this.accountServ.random()
    }
    addAccount(){
    //  let newContact = {}
      this.accountServ.addAccount()
    }

  
 ngOnInit() {
 } 

}
