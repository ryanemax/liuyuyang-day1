import {Component, ViewChild,Input, OnInit} from '@angular/core';
import { CardPreviewService,CardDatabase ,CardDataSource} from '../card-preview.service';
import {DataSource} from '@angular/cdk';
import {MdSort} from '@angular/material';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';
import {MdDialog} from '@angular/material';
import {MdDialogRef} from '@angular/material';
import {MdDialogConfig} from '@angular/material';
import { AddCardDailogComponent } from '../add-card-dailog/add-card-dailog.component';

@Component({
  selector: 'app-card-preview-manager',
  templateUrl: './card-preview-manager.component.html',
  styleUrls: ['./card-preview-manager.component.scss']
})


export class CardPreviewManagerComponent implements   OnInit {
  @Input() card:Card
  cards:Array<Card>;
  clickCount:number = 0;
  sortTypeTmp:number = 0;
  cardDatabase:CardDatabase
  dataSource: CardDataSource | null;
  @ViewChild(MdSort) sort: MdSort;
  displayedColumns = ['Name', 'Type', 'Cost', 'Vocation', 'Img','operator'];
  constructor(private cardPreviewService:CardPreviewService ,public dialog:MdDialog) {
    // this.cardPreviewService.getCards().subscribe(data=>{
    //   this.cards = data
    // })
    this.cardDatabase = new CardDatabase(cardPreviewService);
    // cardDatabase.

  }
  openDialogImg(card) {
    this.cardPreviewService.card = card;
    this.dialog.open(AlertComponent);
  }
  del(card:Card){
    this.cardDatabase.del(card);

  }
  openDialog(card) {
    this.cardPreviewService.card = card;
    let dialogRef = this.dialog.open(AddCardDailogComponent);
    dialogRef.afterClosed().subscribe(result => {
     setTimeout(()=> {
       this.dataSource.refresh();
       console.log(result);
      },500);


    });
  }
  ngOnInit() {
      this.dataSource = new CardDataSource(this.cardDatabase, this.sort);

    }

  }

  @Component({
    template : `<img src = "{{card.img}}">`
    })
    export class AlertComponent {

      card :Card;

      constructor(private cardPreviewService:CardPreviewService){
      this.card = this.cardPreviewService.card;
      }
     }

