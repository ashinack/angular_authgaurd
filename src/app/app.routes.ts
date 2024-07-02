import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuardService } from './auth-guard.service';
import { PostsComponent } from './posts/posts.component';
import { CountryCodeComponent } from './country-code/country-code.component';
import { ProductsComponent } from './products/products.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    // canActivate: [AuthGuardService],
  },
  {
    path: 'post',
    component: PostsComponent,
    // canActivate: [AuthGuardService],
  },
  {
    path: 'country',
    component: CountryCodeComponent,
    // canActivate: [AuthGuardService],
  },
  {
    path: 'products',
    component: ProductsComponent,
    // canActivate: [AuthGuardService],
  },
];
