import { Component, OnInit } from '@angular/core';
import { ContactService } from "../contact.service"

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  contacts:Array<any>;

  constructor(private contactServ:ContactService) {
    this.contacts = this.contactServ.contacts
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
  addContact(){
    let newContact = {
      name:"Rita",
      sex:"F",
      mobile:"13677777777"
    }
    this.contactServ.addContact(newContact)
  }

  ngOnInit() {
  }

}
