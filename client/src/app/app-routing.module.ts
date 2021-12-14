import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './+products/products.component';
import { HomeComponent } from './common/components/home/home.component';
import { LoginComponent } from './common/components/login/login.component';
import { NotFoundComponent } from './common/components/not-found/not-found.component';
import { ShellComponent } from './common/components/shell/shell.component';
import { AuthGuard } from './common/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: ShellComponent,
    children: [
      {
        path: '',
        component: ProductsComponent
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: '/not-found' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
