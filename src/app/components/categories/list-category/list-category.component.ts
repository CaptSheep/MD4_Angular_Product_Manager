import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Category } from "src/app/services/category";
import { CategoryService } from "src/app/services/category.service";

@Component({
  selector: "app-list-category",
  templateUrl: "./list-category.component.html",
  styleUrls: ["./list-category.component.css"],
})
export class ListCategoryComponent implements OnInit {
  categories: Category[] = [];

  constructor(private categoryService: CategoryService,
    private router : Router) {}

  ngOnInit() {
    this.categories = this.categoryService.categories;
  }
  deleteCategory(index){
  if(window.confirm('Are you sure ?')){
  this.categoryService.deleteCategory(index);
  this.router.navigate(["/category/list"]);
    }
  }
}
