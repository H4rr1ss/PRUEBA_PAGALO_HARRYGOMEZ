import { Component, OnInit } from '@angular/core';
import { MovieCredits } from 'src/app/core/models/author.interface';
import { AuthorService } from '../../services/author.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-movie-cast',
  templateUrl: './movie-cast.component.html',
  styles: [
  ]
})
export class MovieCastComponent implements OnInit {
  actors: MovieCredits = { actors: [], crew: [] };
  movieName!: string;

  constructor(
    private authorService: AuthorService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const movieId = Number(params.get('id'));
      this.movieName = params.get('movieName')!;
      if (!movieId) return;
      if (!this.movieName) return;

      this.loadMovieDetails(movieId);
    });
  }

  private loadMovieDetails(movieId: number): void {
    this.authorService.getMovieCast(movieId).subscribe({
      next: (actors) => {
        this.actors = actors;
      },
      error: (error) => console.error('Error al cargar los actores', error)
    });
  }

}
