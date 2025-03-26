# Interceptor  

Este **interceptor HTTP** se encarga de interceptar todas las solicitudes salientes y agregar automáticamente la **API Key** de autenticación en la cabecera `Authorization`.  

---

## Importación y Dependencias  

El interceptor usa `HttpInterceptor` de **Angular** para modificar las solicitudes antes de que se envíen.  

```typescript
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
```

## Implementación del Interceptor

El interceptor se inyecta globalmente en la aplicación.

```typescript
@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {
  private apiKey = 'API_KEY';

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
```
✅ Intercepta todas las solicitudes HTTP enviadas desde la aplicación.  
✅ Clona la solicitud y le agrega el encabezado Authorization con la API Key.  
✅ Envía la solicitud modificada a la API de TheMovieDB.  

## Registro del Interceptor en app.module.ts

Para que el interceptor funcione correctamente, debe registrarse en el módulo principal de la aplicación:
```typescript
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorInterceptor } from './interceptors/interceptor.interceptor';

@NgModule({
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorInterceptor, multi: true }
  ]
})
export class AppModule {}
```

✅ multi: true permite que este interceptor se combine con otros interceptores que puedan existir.