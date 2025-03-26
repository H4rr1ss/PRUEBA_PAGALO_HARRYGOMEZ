import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Movie } from 'src/app/core/models/movie.interface';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private apiUrl = environment.apiURL;

  constructor(private http: HttpClient) { }

  getPopularMovie(): Observable<Movie> {
    return this.http.get<{ results: Movie[] }>(`${this.apiUrl}/movie/popular?language=es-ES&page=1`).pipe(
      map(response => response.results[0])
    );
  }

  getMovieById(movieId: number): Observable<Movie> {
    const params = {
      language: 'es-ES',
    };
    return this.http.get<Movie>(`${this.apiUrl}/movie/${movieId}`, { params });
  }

  getMovies(page: number): Observable<Movie[]> {
    const params = {
      language: 'es-ES',
      page: page.toString(),
    };
    return this.http.get<any>(`${this.apiUrl}/movie/now_playing`, { params }).pipe(
      map((response) => {
        return response.results.map((movie: Movie) => ({
          id: movie.id,
          title: movie.title,
          poster_path: movie.poster_path ? `${environment.sizePoster}${movie.poster_path}` : '',
          vote_average: movie.vote_average,
        }));
      })
    );
  }

  getTopRatedMovies(page: number): Observable<Movie[]> {
    const params = {
      language: 'es-ES',
      page: page.toString(),
    };

    return this.http.get<any>(`${this.apiUrl}/movie/top_rated`, { params }).pipe(
      map((response) => {
        return response.results.map((movie: Movie) => ({
          id: movie.id,
          title: movie.title,
          poster_path: movie.poster_path ? `${environment.sizePoster}${movie.poster_path}` : '',
          vote_average: movie.vote_average,
        }));
      })
    );
  }

  // Método para obtener películas recomendadas
  getRecommendedMovies(movieId: number): Observable<any> {
    const url = `${this.apiUrl}/movie/${movieId}/recommendations`;
    const params = {
      language: 'es-ES',
      page: '1',
    };

    return this.http.get<{ results: any[] }>(url, { params }).pipe(
      map(response => response.results.slice(0, 4).map(movie => ({
        id: movie.id,
        title: movie.title,
        poster_path: movie.poster_path ? `${environment.sizePoster}${movie.poster_path}` : '',
        vote_average: movie.vote_average
      })))
    );
  }
}
