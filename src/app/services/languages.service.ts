import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LanguagesService {
  constructor(private http: HttpClient) {}

  getLanguages() {
    return this.http.get(`${apiUrl}/movies/languages`);
  }
}
