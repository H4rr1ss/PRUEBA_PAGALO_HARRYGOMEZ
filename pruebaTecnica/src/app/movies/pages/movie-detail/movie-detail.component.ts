import { Component } from '@angular/core';
import { Movie } from 'src/app/core/models/movie.interface';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styles: [
  ]
})
export class MovieDetailComponent {

  movieData:Movie = {
    id: 1112,
    title: 'Snow White',
    poster_path: '',
    vote_average: 5.0,
    overview:
      "Princess Snow White flees the castle when the Evil Queen, in her jealousy over Snow White's inner beauty, tries to kill her. Deep into the dark woods, she stumbles upon seven magical dwarves and a young thief named Jonathan. Together, they strive to survive the Queen's relentless pursuit and aspire to take back the kingdom in the process...",
  };

  actors = [
    {
      name: 'Rachel Zegler',
      role: 'Snow White',
      image: 'https://image.tmdb.org/t/p/w300/2v9FVVBUrrkW2m3QOcYkuhq9A6o.jpg'
    },
    {
      name: 'Rachel Zegler',
      role: 'Snow White',
      image: 'https://image.tmdb.org/t/p/w300/2v9FVVBUrrkW2m3QOcYkuhq9A6o.jpg'
    },
    {
      name: 'Rachel Zegler',
      role: 'Snow White',
      image: 'https://image.tmdb.org/t/p/w300/2v9FVVBUrrkW2m3QOcYkuhq9A6o.jpg'
    },
    {
      name: 'Rachel Zegler',
      role: 'Snow White',
      image: 'https://image.tmdb.org/t/p/w300/2v9FVVBUrrkW2m3QOcYkuhq9A6o.jpg'
    },
  ];

  relatedMovies = [
    {
      id: 22,
      title: '1Captain America: Brave New World',
      poster_path: 'https://image.tmdb.org/t/p/w300/pzIddUEMWhWzfvLI3TwxUG2wGoi.jpg',
      vote_average: 6.1
    },
    {
      id: 99,
      title: '2Captain America: Brave New World',
      poster_path: 'https://image.tmdb.org/t/p/w300/pzIddUEMWhWzfvLI3TwxUG2wGoi.jpg',
      vote_average: 6.1
    },
    {
      id: 112,
      title: '3Captain America: Brave New World',
      poster_path: 'https://image.tmdb.org/t/p/w300/pzIddUEMWhWzfvLI3TwxUG2wGoi.jpg',
      vote_average: 6.1
    },
    {
      id: 22,
      title: '4Captain America: Brave New World',
      poster_path: 'https://image.tmdb.org/t/p/w300/pzIddUEMWhWzfvLI3TwxUG2wGoi.jpg',
      vote_average: 6.1
    },
  ];}
