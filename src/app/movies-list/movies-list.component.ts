import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css'],
})
export class MoviesListComponent implements OnInit {
  listMovies: any;

  constructor(private moviesService: MoviesService, private router: Router) {}

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies() {
    this.moviesService.getMovies().subscribe((data) => {
      this.listMovies = data;
      console.log('listMovies', this.listMovies);
    });
  }

  deleteMovie(movieId: any) {
    this.moviesService.deleteMovie(movieId).subscribe((data) => {
      alert('Movie delete successfully');
      setTimeout(() => {
        location.reload();
      }, 500);
      console.log('deu certo');
    });
  }
}
