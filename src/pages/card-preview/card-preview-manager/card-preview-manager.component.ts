import { Component, OnInit ,Input} from '@angular/core';
import { CardPreviewService } from '../card-preview.service';


@Component({
  selector: 'app-card-preview-manager',
  templateUrl: './card-preview-manager.component.html',
  styleUrls: ['./card-preview-manager.component.scss']
})
export class CardPreviewManagerComponent implements OnInit {
  @Input() card:Card
  cards:Array<Card>;
  clickCount:number = 0;
  sortTypeTmp:number = 0;
  
  constructor(private cardPreviewService:CardPreviewService) { 
    this.cards = this.cardPreviewService.cards;
  }

  ngOnInit() {
  }
  del(card){
    this.cardPreviewService.del(card);
  }
  sort(type) {
    if ( type !== this.sortTypeTmp) {
       this.clickCount = 0;
       this.sortTypeTmp = type;
    }
    if (this.clickCount === 0) {
      this.cardPreviewService.asc(type);
      this.clickCount++;
    }else if (this.clickCount === 1) {
      this.cardPreviewService.desc(type);
      this.clickCount++;
    }else if (this.clickCount === 2) {
      this.cardPreviewService.random();
      this.clickCount = 0;
    }
  }
}


