import { Component, HostListener, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movie } from 'src/app/core/models/movie.interface';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styles: []
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

  constructor(private apiMovies: MoviesService) {}

  ngOnInit(): void {
    this.loadMovies();
  }

  // Cargar películas desde la API
  loadMovies(): void {
    if (this.isLoading) return;
    this.isLoading = true;

    const apiCall = this.selectedTab === 'cartelera'
      ? this.apiMovies.getMovies(this.currentPage)
      : this.apiMovies.getTopRatedMovies(this.currentPage);

    apiCall.subscribe({
      next: (response: Movie[]) => {
        this.movies = [...this.movies, ...response];
        this.filteredMovies = [...this.movies];

        if (this.startDate && this.endDate) {
          this.filterMoviesByDate();
        }

        this.currentPage++;
        this.isLoading = false;
      },
      error: (error: any) => {
        console.error('Error al cargar películas:', error);
        this.isLoading = false;
      }
    });
  }

  searchMovies(): void {
    if (this.searchQuery.trim() === '') {
      this.filteredMovies = [...this.movies];
      return;
    }

    this.isLoading = true;
    this.apiMovies.searchMovies(this.searchQuery).subscribe({
      next: (response: Movie[]) => {
        this.filteredMovies = response;
        this.isLoading = false;
      },
      error: (err: any) => {
        console.error('Error al buscar películas:', err);
        this.isLoading = false;
      }
    });
  }

  // range dates
  onDateRangeSelected(dateRange: { startDate: string; endDate: string }): void {
    this.startDate = dateRange.startDate;
    this.endDate = dateRange.endDate;
    this.filterMoviesByDate();
  }

  // Filter
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

  // Scroll
  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    if (this.searchQuery.trim() || this.startDate || this.endDate) return;

    const scrollPosition = window.scrollY + window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    if (scrollPosition >= documentHeight - 10) {
      this.loadMovies();
    }
  }

  setTab(tab: string): void {
    if (this.selectedTab === tab) return;

    this.selectedTab = tab;
    this.movies = [];
    this.filteredMovies = [];
    this.currentPage = 1;
    this.loadMovies();
    this.scrollToTop();
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
