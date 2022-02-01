import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { MatInputModule } from '@angular/material/input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MenuComponent } from './menu/menu.component';
import { MoviesIdComponent } from './movies-id/movies-id.component';
import { FormMovieComponent } from './form-movie/form-movie.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { FormCategoriesComponent } from './form-categories/form-categories.component';
import { UsersListComponent } from './users-list/users-list.component';
import { FormUserComponent } from './form-user/form-user.component';
import { AccessibilityComponent } from './accessibility/accessibility.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    MenuComponent,
    MoviesIdComponent,
    FormMovieComponent,
    CategoriesListComponent,
    FormCategoriesComponent,
    UsersListComponent,
    FormUserComponent,
    AccessibilityComponent,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
