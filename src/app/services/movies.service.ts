import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  getMovies() {
    return this.http.get(`${apiUrl}/movies/list`);
  }

  getById(moviesID: any) {
    return this.http.get(`${apiUrl}/movies/list/${moviesID}`);
  }

  postMovie(movie: any) {
    return this.http.post<any>(`${apiUrl}/movies/register`, movie);
  }

  putMovie(moviesID: any, movie: any) {
    return this.http.put<any>(`${apiUrl}/movies/update/${moviesID}`, movie);
  }

  deleteMovie(movieId: any) {
    return this.http.delete<any>(
      `${apiUrl}/movies/delete/${movieId}`
    );
  }
}


