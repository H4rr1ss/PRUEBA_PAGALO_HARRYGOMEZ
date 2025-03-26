#  MoviesService  

Este servicio se encarga de consumir la API de TheMovieDB para obtener información sobre películas populares, en cartelera, mejor calificadas y recomendadas.  

## Obtener Película Popular

Devuelve la primera película de la lista de películas populares.
```typescript
getPopularMovie(): Observable<Movie> {
  const url = `${this.apiUrl}/movie/popular?language=es-ES&page=1`;
  return this.http.get<{ results: Movie[] }>(url).pipe(
    map(response => response.results[0])
  );
}
```

* URL: `/movie/popular`
* Retorna: Un objeto Movie.

## Obtener Película por ID

Retorna los detalles de una película específica.
```typescript
getMovieById(movieId: number): Observable<Movie> {
  const params = { language: 'es-ES' };
  return this.http.get<Movie>(`${this.apiUrl}/movie/${movieId}`, { params });
}
```

* URL: `/movie/{movieId}`
* Parámetros: movieId (Número de la película).
* Retorna: Un objeto Movie con información detallada.

## Obtener Películas en Cartelera

Obtiene la lista de películas en cartelera con paginación.
```typescript
getMovies(page: number): Observable<Movie[]> {
  const url = `${this.apiUrl}/movie/now_playing`;
  const params = { language: 'es-ES', page: page.toString() };

  return this.http.get<any>(url, { params }).pipe(
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
```

* URL: `/movie/now_playing`
* Parámetros: page (Número de página).
* Retorna: Un array de películas con su información básica.


## Obtener Películas Mejor Calificadas

Obtiene la lista de películas mejor calificadas con paginación.
```typescript
getTopRatedMovies(page: number): Observable<Movie[]> {
  const url = `${this.apiUrl}/movie/top_rated`;
  const params = { language: 'es-ES', page: page.toString() };

  return this.http.get<any>(url, { params }).pipe(
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
```

* URL: `/movie/top_rated`
* Parámetros: page (Número de página).
* Retorna: Un array de películas con su información básica.


## Obtener Películas Recomendadas

Devuelve un máximo de 4 películas recomendadas basadas en un movieId.
```typescript
getRecommendedMovies(movieId: number): Observable<any> {
  const url = `${this.apiUrl}/movie/${movieId}/recommendations`;
  const params = { language: 'es-ES', page: '1' };

  return this.http.get<{ results: any[] }>(url, { params }).pipe(
    map(response => response.results.slice(0, 4).map(movie => ({
      id: movie.id,
      title: movie.title,
      poster_path: movie.poster_path ? `${environment.sizePoster}${movie.poster_path}` : '',
      vote_average: movie.vote_average
    })))
  );
}

```

* URL: `/movie/{movieId}/recommendations`
* Parámetros: movieId (ID de la película).
* Retorna: Un array con 4 películas recomendadas.