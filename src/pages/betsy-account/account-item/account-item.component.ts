import { Component, OnInit, Input} from '@angular/core';
import { BetsyAccountService } from "../betsy-account.service"
import { Location } from "@angular/common"

@Component({
  selector: 'app-account-item',
  templateUrl: './account-item.component.html',
  styleUrls: ['./account-item.component.scss']
})
export class AccountItemComponent implements OnInit {
  @Input() account:any
  constructor(private accountServ:BetsyAccountService,
    private loc:Location) { }
 
    delete(account){
      this.accountServ.deleteById(account.objectId).subscribe(data=>{
          location.href = "/betsy-account"
      })
    }
    edit(){
      this.accountServ.editObject = this.account
    }

    
  ngOnInit() {
  }

}
