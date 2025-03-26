import { Component, HostListener, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movie } from 'src/app/core/models/movie.interface';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styles: [`
    .loader {
      border: 4px solid #f3f3f3;
      border-top: 4px solid #3498db;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      animation: spin 2s linear infinite;
    }

    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `]
})
export class PopularComponent implements OnInit {
  selectedTab = 'cartelera';
  searchQuery = '';
  movies: Movie[] = [];
  currentPage: number = 1;
  isLoading: boolean = false;

  constructor(private apiMovies:MoviesService) { }

  ngOnInit(): void {
    this.loadMovies();
  }

  loadMovie() {

  }

  loadMovies(): void {
    if (this.isLoading) return; // Evita llamadas múltiples
    this.isLoading = true;

    if (this.selectedTab === 'cartelera') {
      this.apiMovies.getMovies(this.currentPage).subscribe(
        (response: Movie[]) => {
          this.movies = [...this.movies, ...response]; // Agrega las nuevas películas a la lista existente
          this.currentPage++;
          this.isLoading = false;
        },
        (error: any) => {
          console.error('Error al cargar las películas de cartelera', error);
          this.isLoading = false;
        }
      );
    } else if (this.selectedTab === 'populares') {
      this.apiMovies.getTopRatedMovies(this.currentPage).subscribe(
        (response: Movie[]) => {
          this.movies = [...this.movies, ...response]; // Agrega las nuevas películas a la lista existente
          this.currentPage++;
          this.isLoading = false;
        },
        (error: any) => {
          console.error('Error al cargar las películas top rated', error);
          this.isLoading = false;
        }
      );
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const scrollPosition = window.scrollY + window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    if (scrollPosition >= documentHeight - 10) {
      this.loadMovies();
    }
  }

  setTab(tab: string): void {
    this.selectedTab = tab;
    this.movies = [];
    this.currentPage = 1;
    this.loadMovies();
  }
}
