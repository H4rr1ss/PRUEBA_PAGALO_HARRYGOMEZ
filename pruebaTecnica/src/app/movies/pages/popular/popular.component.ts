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
  startDate: string = '';
  endDate: string = '';
  movies: Movie[] = [];
  filteredMovies: Movie[] = [];
  currentPage: number = 1;
  isLoading: boolean = false;

  constructor(private apiMovies:MoviesService) { }

  ngOnInit(): void {
    this.loadMovies();
  }

  loadMovies(): void {
    if (this.isLoading) return;
    this.isLoading = true;

    if (this.selectedTab === 'cartelera') {
      this.apiMovies.getMovies(this.currentPage).subscribe(
        (response: Movie[]) => {
          this.movies = [...this.movies, ...response];
          this.filteredMovies = [...this.movies];
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
          this.movies = [...this.movies, ...response];
          this.filteredMovies = [...this.movies];
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

  searchMovies(): void {
    if (this.searchQuery.trim() === '') {
      // Si la búsqueda está vacía, recargar la lista original
      this.currentPage = 1;
      this.movies = [];
      this.loadMovies();
      return;
    }

    this.isLoading = true;
    this.apiMovies.searchMovies(this.searchQuery).subscribe({
      next: (response: Movie[]) => {
        this.movies = response;
        this.filteredMovies = response;
        this.isLoading = false;
      },
      error: (err:any) => {
        console.error('Error al buscar películas:', err);
        this.isLoading = false;
      }
    });
  }

  onDateRangeSelected(dateRange: { startDate: string; endDate: string }): void {
    this.startDate = dateRange.startDate;
    this.endDate = dateRange.endDate;

    this.filterMoviesByDate();
  }

  filterMoviesByDate(): void {
    if (!this.startDate || !this.endDate) {
      this.filteredMovies = [...this.movies];
      return;
    }

    const start = new Date(this.startDate);
    const end = new Date(this.endDate);

    this.filteredMovies = this.movies.filter(movie => {
      if (!movie.release_date) return false;
      const releaseDate = new Date(movie.release_date);
      return releaseDate >= start && releaseDate <= end;
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    if (this.searchQuery.trim()) return;

    const scrollPosition = window.scrollY + window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    if (scrollPosition >= documentHeight - 10) {
      this.loadMovies();
    }
  }

  setTab(tab: string): void {
    this.selectedTab = tab;
    this.movies = [];
    this.filteredMovies = [];
    this.currentPage = 1;
    this.loadMovies();
  }
}
