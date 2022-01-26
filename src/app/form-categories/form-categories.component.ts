import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService } from '../services/categories.service';
import { LanguagesService } from '../services/languages.service';

@Component({
  selector: 'app-form-categories',
  templateUrl: './form-categories.component.html',
  styleUrls: ['./form-categories.component.css'],
})
export class FormCategoriesComponent implements OnInit {
  postCategories!: FormGroup;
  listLanguages: any;
  categoriesId: any;
  categories: any;

  constructor(
    private fb: FormBuilder,
    private categoriesService: CategoriesService,
    private languagesService: LanguagesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.categoriesId = this.route.snapshot.params['id'];
    console.log('route', this.route.snapshot.params['id']);

    this.postCategories =
      this.route.snapshot.params['movies-categories-register'];
    console.log(
      'route',
      this.route.snapshot.params['movies-categories-register']
    );

    this.postCategories = this.fb.group({
      id: [''],
      name: ['', [Validators.required]],
      language: ['', [Validators.required]],
    });
    
    this.getById();
    this.postCategory();
    this.putCategory();
    this.getLanguages();
  }

  postCategory() {
    this.categoriesService
      .postCategory(this.postCategories.value)
      .subscribe((data) => {
        this.postCategories = data;
        alert('Category created successfully!');
        setTimeout(() => {
          this.router.navigate(['']);
        }, 1500);
        console.log('postCategories', this.postCategories);
      });
  }

  getLanguages() {
    this.languagesService.getLanguages().subscribe((data) => {
      this.listLanguages = data;
      console.log('listLanguages', this.listLanguages);
    });
  }

  getById() {
    this.categoriesService.getById(this.categoriesId).subscribe((data) => {
      this.categories = data;
      this.postCategories.patchValue(this.categories);
      console.log('categories', this.categories);
    });
  }

  putCategory() {
    this.categoriesService
      .putCategory(this.categoriesId, this.postCategories.value)
      .subscribe((data) => {
        this.categoriesId, (this.postCategories = data);
        alert('Category edited successfully');
        setTimeout(() => {
          this.router.navigate(['']);
        }, 1500);
        console.log('putCategory', this.putCategory);
      });
  }

  compareFn(c1: any, c2: any): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }


}
