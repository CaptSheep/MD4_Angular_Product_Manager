import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Category } from "src/app/services/category";
import { CategoryService } from "src/app/services/category.service";

@Component({
  selector: "app-create-category",
  templateUrl: "./create-category.component.html",
  styleUrls: ["./create-category.component.css"],
})
export class CreateCategoryComponent implements OnInit {
  categories: Category[];
  createCategoryForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private categoryService: CategoryService,
    private router: Router
  ) {}

  ngOnInit() {
    this.createCategoryForm = this.fb.group({
      id: ["", Validators.required],
      name: ["", Validators.required],
    });
  }
  createCategory() {
    const data = this.createCategoryForm.value;
    if (data) {
      this.categoryService.categories.push(data);
      this.router.navigate(["/category/list"]);
    }
  }
}
