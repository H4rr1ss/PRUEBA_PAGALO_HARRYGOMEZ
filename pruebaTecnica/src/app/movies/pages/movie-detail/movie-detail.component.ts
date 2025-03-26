import { Component } from '@angular/core';
import { Movie } from 'src/app/core/models/movie.interface';
import { MoviesService } from '../../services/movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styles: [
  ]
})
export class MovieDetailComponent {
  recommendedMovies: Movie[] = [];
  movie: Movie | undefined;

  constructor(
    private moviesService: MoviesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const movieId = Number(this.route.snapshot.paramMap.get('id'));

    this.moviesService.getMovieById(movieId).subscribe(
      (movie: Movie) => {
        this.movie = movie;
      },
      error => {
        console.error('Error al obtener los detalles de la película', error);
      }
    );

    this.moviesService.getRecommendedMovies(movieId).subscribe(
      movies => this.recommendedMovies = movies,
      error => console.error('Error al cargar recomendaciones', error)
    );
  }

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
