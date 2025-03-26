import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/core/models/movie.interface';
import { MoviesService } from '../../services/movies.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthorService } from '../../services/author.service';
import { Actor } from 'src/app/core/models/author.interface';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styles: []
})
export class MovieDetailComponent implements OnInit {
  recommendedMovies: Movie[] = [];
  selectedStars: number = 0;
  hoveredStar: number = 0;
  movie: Movie | undefined;
  actors: Actor[] = [];

  constructor(
    private moviesService: MoviesService,
    private authorService: AuthorService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const movieId = Number(params.get('id'));

      if (!movieId) {
        this.router.navigate(['/peliculas']); // Redirige si el ID es inválido
        return;
      }

      this.loadMovieDetails(movieId);
    });
  }

  // Función para manejar el clic en las estrellas
  onStarClick(star: number): void {
    this.selectedStars = star;
  }

  private loadMovieDetails(movieId: number): void {
    this.moviesService.getMovieById(movieId).subscribe({
      next: (movie: Movie) => {
        if (!movie) {
          this.router.navigate(['/peliculas']);
          return;
        }

        this.movie = movie;

        // Solo ejecutamos estas peticiones si la película es válida
        this.loadRecommendedMovies(movieId);
        this.loadMovieCredits(movieId);
      },
      error: (err) => {
        console.error('Error al obtener los detalles de la película');
        this.router.navigate(['/peliculas']);
      }
    });
  }

  private loadRecommendedMovies(movieId: number): void {
    this.moviesService.getRecommendedMovies(movieId).subscribe({
      next: (movies) => this.recommendedMovies = movies,
      error: (err) => console.error('Error al cargar recomendaciones:', err)
    });
  }

  private loadMovieCredits(movieId: number): void {
    this.authorService.getMovieCredits(movieId).subscribe({
      next: (actors) => this.actors = actors,
      error: (err) => console.error('Error al cargar los actores:', err)
    });
  }
}
