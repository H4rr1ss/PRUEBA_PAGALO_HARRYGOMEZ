import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/core/models/movie.interface';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movie-popular',
  templateUrl: './movie-popular.component.html',
  styles: [`
    .clip-custom {
      clip-path: polygon(0% 0%, 100% 0%, 100% 90%, 50% 100%, 0% 90%);
    }
  `]
})
export class MoviePopularComponent implements OnInit {

  movie: Movie | null = null;  // La película más popular
  isLoading: boolean = false;

  constructor(private apiMovies: MoviesService) { }

  ngOnInit(): void {
    this.loadPopularMovie();
  }

  // Cargar solo la película más popular
  loadPopularMovie(): void {
    if (this.isLoading) return;  // Evita llamadas múltiples
    this.isLoading = true;

    this.apiMovies.getPopularMovie().subscribe(
      (response: Movie) => {
        this.movie = response;  // Asigna la película más popular
        this.isLoading = false;
      },
      (error: any) => {
        console.error('Error al cargar la película popular', error);
        this.isLoading = false;
      }
    );
  }
}
