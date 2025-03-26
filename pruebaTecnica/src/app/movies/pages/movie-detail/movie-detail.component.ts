import { Component } from '@angular/core';
import { Movie } from 'src/app/core/models/movie.interface';
import { MoviesService } from '../../services/movies.service';
import { ActivatedRoute } from '@angular/router';
import { AuthorService } from '../../services/author.service';
import { Actor } from 'src/app/core/models/author.interface';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styles: [
  ]
})
export class MovieDetailComponent {
  recommendedMovies: Movie[] = [];
  movie: Movie | undefined;
  actors: Actor[] = [];

  constructor(
    private moviesService: MoviesService,
    private authorService: AuthorService,
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

    this.authorService.getMovieCredits(movieId).subscribe(
      actors => this.actors = actors,
      error => console.error('Error al cargar los actores', error)
    );
  }
;}
