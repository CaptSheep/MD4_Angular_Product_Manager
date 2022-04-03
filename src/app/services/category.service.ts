import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from './category';

@Injectable({
  providedIn: "root",
})
export class CategoryService {
  categories: Category[] = [
    {
      id: "1",
      name: "Iphone 13 Promax",
    },
    {
      id: "2",
      name: "Samsung Galaxy S22 Ultra",
    },
    {
      id: "3",
      name: "LG G Pro",
    },
  ];
  constructor(
    private router : Router
  ) {}

  findCategoryById(id) {
    return this.categories.filter((categories, index) => {
      return categories.id == id;
    });
  }

  update(id, data) {
    const index = this.findIndexCategory(id);
    if (index !== -1) {
      this.categories[index].id = data.id;
      this.categories[index].name = data.name;
    }
  }
  findIndexCategory(id) {
    for (let i = 0; i < this.categories.length; i++) {
      if (this.categories[i].id == id) {
        return i;
      }
    }
    return -1;
  }
  deleteCategory(index) {
    this.findIndexCategory(index);
    this.categories.splice(index, 1);
    
  }
}
