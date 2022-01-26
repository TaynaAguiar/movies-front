import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService } from '../services/categories.service';
import { LanguagesService } from '../services/languages.service';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-form-movie',
  templateUrl: './form-movie.component.html',
  styleUrls: ['./form-movie.component.css'],
})
export class FormMovieComponent implements OnInit {
  postMovie!: FormGroup;
  listCategory: any;
  listLanguages: any;
  moviesId: any;
  movie: any;

  constructor(
    private moviesService: MoviesService,
    private categoriesService: CategoriesService,
    private languagesService: LanguagesService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.moviesId = this.route.snapshot.params['id'];
    console.log('route', this.route.snapshot.params['id']);
    this.postMovie = this.route.snapshot.params['movies-register'];
    console.log('route', this.route.snapshot.params['movies-register']);

    this.postMovie = this.fb.group({
      id: [''],
      title: ['', [Validators.required]],
      synopsis: ['', [Validators.required]],
      image: ['', [Validators.required]],
      date: ['', [Validators.required]],
      duration: ['', [Validators.required]],
      language: ['', [Validators.required]],
      category: ['', [Validators.required]],
    });

    this.getCategory();
    this.getLanguages();
    this.putMovies();
    this.getById();
  }

  postMovies() {
    this.moviesService.postMovie(this.postMovie.value).subscribe((data) => {
      this.postMovie = data;
      alert('movie created successfully');
      setTimeout(() => {
        this.router.navigate(['']);
      }, 1000);
      console.log('postMovies', this.postMovie);
    });
  }

  getCategory() {
    this.categoriesService.getCategory().subscribe((data) => {
      this.listCategory = data;
      console.log('listCategory', this.listCategory);
    });
  }

  getLanguages() {
    this.languagesService.getLanguages().subscribe((data) => {
      this.listLanguages = data;
      console.log('listLanguages', this.listLanguages);
    });
  }

  getById() {
    this.moviesService.getById(this.moviesId).subscribe((data) => {
      this.movie = data;
      this.postMovie.patchValue(this.movie);
      console.log('movie', this.movie);
    });
  }

  putMovies() {
    this.moviesService
      .putMovie(this.moviesId, this.postMovie.value)
      .subscribe((data) => {
        this.moviesId, (this.postMovie = data);
        alert('movie edited successfully');
        setTimeout(() => {
          this.router.navigate(['']);
        }, 1000);
        console.log('putMovies', this.putMovies);
      });
  }

  compareFn(c1: any, c2: any): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }

  
}
