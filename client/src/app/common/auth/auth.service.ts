import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { User } from 'src/app/+users/users.models';
import { environment } from 'src/environments/environment';

interface Token {
  access_token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authUrl = `${environment.apiRoot}/v1/auth`;

  constructor(
    private readonly router: Router,
    private readonly http: HttpClient) {

  }

  public login(email: string, password: string): Observable<boolean> {
    return this.http.post<Token>(`${this.authUrl}/login`, { email, password })
      .pipe(
        map((token: Token) => {
          sessionStorage.setItem('_token', token.access_token);
          return true;
        })
      );
  }

  public getToken(): string | null {
    return sessionStorage.getItem('_token')
  }

  public isLoggedIn(): boolean {
    return this.getToken() !== null;
  }

  public logout(): void {
    this.http.post<any>(`${this.authUrl}/logout`, {})
      .subscribe(_ => {
        sessionStorage.clear();
        this.router.navigate(['/login']);
      });
  }

  public getuserInfo () {
    var base64Url = (this.getToken() || '').split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
};

}
