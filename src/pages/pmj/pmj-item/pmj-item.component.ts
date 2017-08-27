import { Component, OnInit, Input } from '@angular/core';
import { PmjService } from "../pmj.service"
@Component({
  selector: 'app-pmj-item',
  templateUrl: './pmj-item.component.html',
  styleUrls: ['./pmj-item.component.scss']
})
export class PmjItemComponent implements OnInit {

  @Input() brand:any

  constructor(private pmjService:PmjService) { }

  ngOnInit() {
  }

  delete(brand){
    this.pmjService.deleteByName(brand.name)
  }

  edit(){
    this.pmjService.editObject = this.brand
  }
}
