import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { MovieListPageComponent } from './movie-list-page/movie-list-page.component';
import { MovieItemComponent } from './movie-item/movie-item.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: MovieListPageComponent, pathMatch: 'full' }
    ])
  ],
  
  declarations: [MovieListPageComponent,MovieItemComponent]
})
export class MovieModule { }
