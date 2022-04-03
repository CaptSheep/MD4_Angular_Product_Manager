
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/services/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {
categories: Category [];
editCategoryForm: FormGroup;
id = this.route.snapshot.paramMap.get('id');
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private categoryService: CategoryService) { }

  ngOnInit() {
    this.categories = this.categoryService.findCategoryById(this.id);
    this.editCategoryForm = this.fb.group({
      id : [this.categories[0].id],
      name : [this.categories[0].name]
    });

  }
  edit() {
    const data = this.editCategoryForm.value;
    this.categoryService.update(this.id, data);
    return this.router.navigate(['/category/list']);
  }

}
