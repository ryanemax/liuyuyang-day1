import { Component, OnInit } from '@angular/core';
import { ContactService } from "../contact.service"

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  list:Array<any>;
  constructor(private contactServ:ContactService) {
    this.list = this.contactServ.contacts
  }

  asc(){
    this.contactServ.asc()
  }
  desc(){
    this.contactServ.desc()
  }
  random(){
    this.contactServ.random()
  }
  ngOnInit() {
  }

}
