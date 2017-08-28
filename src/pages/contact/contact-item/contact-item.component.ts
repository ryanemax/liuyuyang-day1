import { Component, OnInit, Input } from '@angular/core';
import { ContactService } from "../contact.service"
import { Location } from "@angular/common"

@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.scss']
})
export class ContactItemComponent implements OnInit {
  @Input() user:any

  constructor(private contactServ:ContactService,
  private loc:Location) { }
  delete(user){
    this.contactServ.deleteById(user.objectId)
  }
  edit(){
    this.contactServ.editObject = this.user
    // this.loc.go("/contact/edit")
    // location.href = "/contact/edit"
  }

  ngOnInit() {
  }

}
