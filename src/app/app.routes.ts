import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { MoviesComponent } from './movies/movies.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent },
    { path: 'movies/:title', component: MoviesComponent }, 

//   { path: 'movies', component: MoviesComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

