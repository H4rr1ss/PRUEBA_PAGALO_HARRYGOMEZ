import { Component, Input } from '@angular/core';
import { Movie } from 'src/app/core/models/movie.interface';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styles: [
  ]
})
export class MovieCardComponent{
  @Input() movie!: Movie;
  stars: number[] = [0, 1, 2, 3, 4]

  get roundedRating(): number {
    return Math.round(this.movie.vote_average / 2);
  }
}
