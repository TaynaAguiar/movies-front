import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get(`${apiUrl}/movies/users`);
  }

  getById(userId: any) {
    return this.http.get(`${apiUrl}/movies/users/${userId}`);
  }

  postUsers(user: any) {
    return this.http.post<any>(`${apiUrl}/movies/users/register`, user);
  }

  putUsers(userId: any, user: any) {
    return this.http.put<any>(`${apiUrl}/movies/users/update/${userId}`, user);
  }

  deleteUsers(userId: any) {
    return this.http.delete<any>(`${apiUrl}/movies/users/delete/${userId}`);
  }
}
