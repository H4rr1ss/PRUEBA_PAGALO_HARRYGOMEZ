import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Actor } from 'src/app/core/models/author.interface';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  private apiUrl = environment.apiURL;

  constructor(private http: HttpClient) { }

  getMovieCredits(movieId: number): Observable<Actor[]> {
    const url = `${this.apiUrl}/movie/${movieId}/credits`;
    const params = {
      language: 'es-ES',
    };

    return this.http.get<{ cast: any[] }>(url, { params }).pipe(
      map(response => response.cast.slice(0, 4).map(actor => ({
        id: actor.id,
        name: actor.name,
        character: actor.character,
        profile_path: actor.profile_path ? `${environment.sizePoster}${actor.profile_path}` : '/assets/icons/avatar.webp',
      })))
    );
  }

  getMovieCast(movieId: number): Observable<{ actors: Actor[]; crew: Actor[] }> {
    const url = `${this.apiUrl}/movie/${movieId}/credits`;
    const params = {
      language: 'es-ES',
    };

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
}
