# MoviesGuard  

Este **guard** protege las rutas relacionadas con las películas, asegurando que solo los usuarios autenticados puedan acceder a ellas. Si el usuario no está autenticado, será redirigido a la página de **login**.  

---

## 📌 Importación y Dependencias  
El guard utiliza:  
- **`AuthService`** → Para verificar si el usuario está autenticado.  
- **`Router`** → Para redirigir a `/login` si el usuario no tiene acceso.  
- **`CanActivate`** → Interfaz de Angular para restringir acceso a rutas protegidas.  

```typescript
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
```

## Método canActivate()
Este método verifica si el usuario está autenticado antes de permitir el acceso a la ruta protegida.

```typescript
canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
  if (this.authService.isLoggedIn()) {
    return true;
  }
  this.router.navigate(['/login']);
  return false;
}
```

✅ Si isLoggedIn() devuelve true, el usuario puede acceder a la ruta.  
❌ Si isLoggedIn() devuelve false, el usuario es redirigido a /login.

## Aplicación del Guard en Rutas
Para proteger rutas con este guard, se debe agregar canActivate: [MoviesGuard] en el app-routing.module.ts:

```typescript
import { MoviesGuard } from './guards/movies.guard';

const routes: Routes = [
  { path: 'pelicula/:id', component: MovieDetailComponent, canActivate: [MoviesGuard] },
  { path: 'pelicula/:id/:movieName/elenco', component: MovieCastComponent, canActivate: [MoviesGuard] },
];
```