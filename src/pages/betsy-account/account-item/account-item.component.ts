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
  constructor(private contactServ:BetsyAccountService,
    private loc:Location) { }

  ngOnInit() {
  }

}
