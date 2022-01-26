import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor(private http: HttpClient) {}

  getCategory() {
    return this.http.get(`${apiUrl}/movies/categories`);
  }

  getById(categorieID: any) {
    return this.http.get(`${apiUrl}/movies/categories/${categorieID}`);
  }

  postCategory(categories: any) {
    return this.http.post<any>(
      `${apiUrl}/movies/categories/register`,
      categories
    );
  }

  putCategory(categorieID: any, category: any) {
    return this.http.put<any>(
      `${apiUrl}/movies/categories/update/${categorieID}`,
      category
    );
  }

  deleteCategory(categorieID: any) {
    return this.http.delete<any>(
      `${apiUrl}/movies/categories/delete/${categorieID}`);
  }
}
