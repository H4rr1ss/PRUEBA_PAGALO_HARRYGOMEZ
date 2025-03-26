import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieCastComponent } from './movies/pages/movie-cast/movie-cast.component';
import { PopularComponent } from './movies/pages/popular/popular.component';
import { MovieDetailComponent } from './movies/pages/movie-detail/movie-detail.component';
import { LoginComponent } from './auth/pages/login/login.component';

const routes: Routes = [
  {path: '', redirectTo:'peliculas', pathMatch: 'full'},
  {path: 'auth', component: LoginComponent},
  {path: 'peliculas', component: PopularComponent},
  {path: 'pelicula/:id', component: MovieDetailComponent},
  {path: 'pelicula/:id/:movieName/elenco', component: MovieCastComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
