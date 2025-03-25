import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopularComponent } from './pages/popular/popular.component';
import { MovieDetailComponent } from './pages/movie-detail/movie-detail.component';
import { NowPlayingComponent } from './pages/now-playing/now-playing.component';
import { MovieCastComponent } from './pages/movie-cast/movie-cast.component';



@NgModule({
  declarations: [
    PopularComponent,
    MovieDetailComponent,
    NowPlayingComponent,
    MovieCastComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PopularComponent,
    MovieDetailComponent,
    NowPlayingComponent,
    MovieCastComponent
  ]
})
export class MoviesModule { }
