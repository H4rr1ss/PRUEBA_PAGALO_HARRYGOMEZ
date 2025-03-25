import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopularComponent } from './pages/popular/popular.component';
import { MovieDetailComponent } from './pages/movie-detail/movie-detail.component';
import { NowPlayingComponent } from './pages/now-playing/now-playing.component';
import { MovieCastComponent } from './pages/movie-cast/movie-cast.component';
import { FormsModule } from '@angular/forms';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { SharedModule } from '../shared/shared.module';
import { TabButtonComponent } from './components/tab-button/tab-button.component';
@NgModule({
  declarations: [
    PopularComponent,
    MovieDetailComponent,
    NowPlayingComponent,
    MovieCastComponent,
    MovieCardComponent,
    TabButtonComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ],
  exports: [
    PopularComponent,
    MovieDetailComponent,
    NowPlayingComponent,
    MovieCastComponent
  ]
})
export class MoviesModule { }
