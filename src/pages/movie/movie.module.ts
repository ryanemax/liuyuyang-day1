import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MovieListPageComponent } from './movie-list-page/movie-list-page.component';
import { MovieItemComponent } from './movie-item/movie-item.component';
import { MovieDetailPageComponent } from './movie-detail-page/movie-detail-page.component';
import { MovieManagePageComponent } from './movie-manage-page/movie-manage-page.component';

import { MovieService } from './movie.service';

import {MdSelectModule,MdButtonModule,MdInputModule,MdCardModule} from '@angular/material';
import { MaterialModule } from "@angular/material";




// 引入第三方共享模块
import { SharedModule } from "../../shared/shared.module";



@NgModule({
  imports: [
    CommonModule,MdSelectModule,MdButtonModule,MaterialModule,MdInputModule,MdCardModule,FormsModule,
    RouterModule.forChild([
      { path: '', component: MovieListPageComponent, pathMatch: 'full' },
      { path: 'detail/:id', component: MovieDetailPageComponent, pathMatch: 'full' },
      { path: 'manage/:id', component: MovieManagePageComponent, pathMatch: 'full' }
    ])
  ],
  providers:[MovieService],
  declarations: [MovieListPageComponent,MovieItemComponent,MovieDetailPageComponent,MovieManagePageComponent]
})
export class MovieModule { }
