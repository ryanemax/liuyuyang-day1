import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { MovieListPageComponent } from './movie-list-page/movie-list-page.component';
import { MovieItemComponent } from './movie-item/movie-item.component';
import { MovieDetailPageComponent } from './movie-detail-page/movie-detail-page.component';
import { MovieService } from './movie.service';
import { MovieManagePageComponent } from './movie-manage-page/movie-manage-page.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: MovieListPageComponent, pathMatch: 'full' },
      { path: 'detail', component: MovieDetailPageComponent, pathMatch: 'full' },
      { path: 'manage', component: MovieManagePageComponent, pathMatch: 'full' }
    ])
  ],
  providers:[MovieService],
  declarations: [MovieListPageComponent,MovieItemComponent,MovieDetailPageComponent,MovieManagePageComponent]
})
export class MovieModule { }
