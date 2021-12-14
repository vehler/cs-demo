import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, NEVER, Observable, throwError } from 'rxjs';
import { AuthService } from '../auth/auth.service';

const UNAUTHENTICATED = 401;
const UNAUTHROIZED = 403;

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) { }

  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
      .pipe(

        catchError((err: HttpErrorResponse): Observable<never> => {

          if ([UNAUTHENTICATED, UNAUTHROIZED].includes(err.status) && this.authService.getToken()) {
            // auto logout if 401 or 403 response returned from api
            this.authService.logout();
            return NEVER;
          }

          const error = (err?.message) || err.statusText;

          console.error(err);

          return throwError(() => new Error(error));
        })

      );
  }

}
