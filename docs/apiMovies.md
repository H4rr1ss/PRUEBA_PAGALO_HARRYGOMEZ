# API Movies

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

# API Author

## Obtener Créditos de una Película

Obtiene los 4 actores principales de una película según su movieId.
```typescript
getMovieCredits(movieId: number): Observable<Actor[]> {
  const url = `${this.apiUrl}/movie/${movieId}/credits`;
  const params = { language: 'es-ES' };

  return this.http.get<{ cast: any[] }>(url, { params }).pipe(
    map(response => response.cast.slice(0, 4).map(actor => ({
      id: actor.id,
      name: actor.name,
      character: actor.character,
      profile_path: actor.profile_path ? `${environment.sizePoster}${actor.profile_path}` : '',
    })))
  );
}
```

* URL: `/movie/{movieId}/credits`
* Parámetros: movieId (ID de la película).
* Retorna: Un array con los 4 actores principales.

## Obtener el Reparto y Equipo de Producción

Obtiene la lista de actores principales y el equipo de producción de una película.
```typescript
getMovieCast(movieId: number): Observable<{ actors: Actor[]; crew: Actor[] }> {
  const url = `${this.apiUrl}/movie/${movieId}/credits`;
  const params = { language: 'es-ES' };

  return this.http.get<{ cast: any[]; crew: any[] }>(url, { params }).pipe(
    map(response => {
      const actors = response.cast
        .filter(actor => actor.known_for_department === 'Acting')
        .map(actor => ({
          id: actor.id,
          name: actor.name,
          character: actor.character,
          profile_path: actor.profile_path ? `${environment.sizePoster}${actor.profile_path}` : '/assets/icons/avatar.webp',
        }));

      const crew = response.crew
        .filter(actor => actor.known_for_department !== 'Acting')
        .map(actor => ({
          id: actor.id,
          name: actor.name,
          character: actor.job,  // Aquí usamos job para el equipo
          profile_path: actor.profile_path ? `${environment.sizePoster}${actor.profile_path}` : '/assets/icons/avatar.webp',
        }));

      return { actors, crew };
    })
  );
}
```

* URL: `/movie/{movieId}/credits`  
* Parámetros: movieId (ID de la película).  
* Retorna: Un objeto con:  
  * actors → Lista de actores principales.  
  * crew → Lista del equipo de producción.