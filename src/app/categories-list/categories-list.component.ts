import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../services/categories.service';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css'],
})
export class CategoriesListComponent implements OnInit {
  listCategory: any;
  categories: any;

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit(): void {
    this.getCategory();
  }

  getCategory() {
    this.categoriesService.getCategory().subscribe((data) => {
      this.listCategory = data;
      console.log('listCategory', this.listCategory);
    });
  }

  deleteCategory(categoryId: any) {
    this.categoriesService.deleteCategory(categoryId).subscribe((data) => {
       alert('Category delete successfully');
       setTimeout(() => {
         location.reload();
       }, 500);
      console.log("deu certo");
     });
  }
}
