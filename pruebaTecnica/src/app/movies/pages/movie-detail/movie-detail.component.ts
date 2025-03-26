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
    this.route.paramMap.subscribe(params => {
      const movieId = Number(params.get('id'));
      if (!movieId) return;

      this.loadMovieDetails(movieId);
    });
  }

  private loadMovieDetails(movieId: number): void {
    this.moviesService.getMovieById(movieId).subscribe(
      (movie: Movie) => this.movie = movie,
      error => console.error('Error al obtener los detalles de la película', error)
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

;}
