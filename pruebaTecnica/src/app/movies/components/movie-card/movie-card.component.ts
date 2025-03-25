import { Component, Input } from '@angular/core';

interface Movie {
  id: number;
  title: string;
  image: string;
  rating: number;
  isFirstCard: boolean;
}

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
    return Math.round(this.movie.rating / 2);
  }
}
