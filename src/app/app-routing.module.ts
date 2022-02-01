import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { FormCategoriesComponent } from './form-categories/form-categories.component';
import { FormMovieComponent } from './form-movie/form-movie.component';
import { FormUserComponent } from './form-user/form-user.component';
import { MenuComponent } from './menu/menu.component';
import { MoviesIdComponent } from './movies-id/movies-id.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { UsersListComponent } from './users-list/users-list.component';

const routes: Routes = [
  {
    path: '',
    component: MenuComponent,
    children: [
      { path: '', component: MoviesListComponent },
      { path: 'movies-details/:id', component: MoviesIdComponent },
      { path: 'movies-register', component: FormMovieComponent },
      { path: 'movies-update/:id', component: FormMovieComponent },
      { path: 'movies-users-list', component: UsersListComponent },
      { path: 'movies-users-register', component: FormUserComponent },
      { path: 'movies-users-update/:id', component: FormUserComponent },
      { path: 'movies-categories', component: CategoriesListComponent },
      {
        path: 'movies-categories-register',
        component: FormCategoriesComponent,
      },
      {
        path: 'movies-categories-update/:id',
        component: FormCategoriesComponent,
      },
      {
        path: 'movies-categories-delete/:id',
        component: FormCategoriesComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
