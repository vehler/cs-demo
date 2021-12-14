import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { AuthService } from '../common/auth/auth.service';
import { Product } from './products.models';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private api = `${environment.apiRoot}/v1`;

  constructor(
    private readonly http: HttpClient,
    private readonly authService: AuthService
    ) { }

  public getProducts(): Observable<Product[]> {

    const user = this.authService.getuserInfo();
    const id = user.sub;

    return this.http.get<Product[]>(`${this.api}/users/${id}/products`);
  }

}
