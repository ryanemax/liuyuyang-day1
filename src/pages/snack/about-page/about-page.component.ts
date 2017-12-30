import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, ParamMap } from '@angular/router';
import {SnackService} from '../snack.service'
import {MatDialog, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private loc:Location,
    private snackService:SnackService,
    public dialog: MatDialog) {}

  back(){
    this.loc.back()
  }

  ngOnInit() {
  }

}
