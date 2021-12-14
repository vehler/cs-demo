import { NgModule } from '@angular/core';
import { CommonModule as AngularCommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ShellComponent } from './components/shell/shell.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { JWTInterceptorProvider, ErrorInterceptorProvider } from './helpers/app.providers';


@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    NotFoundComponent,
    ShellComponent
  ],
  imports: [
    AngularCommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    AngularCommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    HomeComponent,
    LoginComponent,
    NotFoundComponent,
    ShellComponent
  ],
  providers: [
    JWTInterceptorProvider,
    ErrorInterceptorProvider
  ],
})
export class CommonModule { }
