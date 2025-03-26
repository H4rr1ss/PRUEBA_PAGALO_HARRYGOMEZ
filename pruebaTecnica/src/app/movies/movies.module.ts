import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopularComponent } from './pages/popular/popular.component';
import { MovieDetailComponent } from './pages/movie-detail/movie-detail.component';
import { MovieCastComponent } from './pages/movie-cast/movie-cast.component';
import { FormsModule } from '@angular/forms';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { SharedModule } from '../shared/shared.module';
import { TabButtonComponent } from './components/tab-button/tab-button.component';
import { ActorCardComponent } from './components/actor-card/actor-card.component';
import { MoviePopularComponent } from './components/movie-popular/movie-popular.component';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [
    PopularComponent,
    MovieDetailComponent,
    MovieCastComponent,
    MovieCardComponent,
    TabButtonComponent,
    ActorCardComponent,
    MoviePopularComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterLink
  ],
  exports: [
    PopularComponent,
    MovieDetailComponent,
    MovieCastComponent
  ]
})
export class MoviesModule { }
