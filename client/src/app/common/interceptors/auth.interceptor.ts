import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private readonly authService: AuthService) { }

  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

      const token = this.authService.getToken();
      const isApiUrl = request.url.startsWith(environment.apiRoot);

      if (token && isApiUrl) {
          request = request.clone({
              setHeaders: { Authorization: `Bearer ${token}` }
          });
      }

      return next.handle(request);
  }

}
