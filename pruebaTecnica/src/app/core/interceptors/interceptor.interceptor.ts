import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {
  private apiKey = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MTQzYWQ0ODBlYmM5MjE4NGJlMWU2MzNiMjBjOGQxZiIsIm5iZiI6MTc0Mjc2NzY4MC43OTQsInN1YiI6IjY3ZTA4NjQwMzBlNjVlN2JlZWM3MzM4YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bh9_MtkAzIcksGQIVhLdLo-uiCythRzhtgJPffcKO8w';

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Clona la solicitud y agrega la cabecera de autorización
    const cloned = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.apiKey}`
      }
    });

    return next.handle(cloned);
  }
}
