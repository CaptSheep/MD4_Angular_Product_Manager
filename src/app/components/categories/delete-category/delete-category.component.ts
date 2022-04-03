// import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Category } from 'src/app/services/category';
import { CategoryService } from 'src/app/services/category.service';


@Component({
  selector: "app-delete-category",
  templateUrl: "./delete-category.component.html",
  styleUrls: ["./delete-category.component.css"],
})
export class DeleteCategoryComponent implements OnInit {
  categories: Category[];
  id = this.route.snapshot.paramMap.get("id");
  constructor(
    private route: ActivatedRoute,
    // private router: Router,
    private categoryService: CategoryService
  ) {}

  ngOnInit() {

  }


}

