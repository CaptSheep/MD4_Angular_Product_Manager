import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Product } from "src/app/product";
import { ProductService } from "src/app/services/product.service";

@Component({
  selector: "app-edit-product",
  templateUrl: "./edit-product.component.html",
  styleUrls: ["./edit-product.component.css"],
})
export class EditProductComponent implements OnInit {
  products: Product[];
  editProductForm: FormGroup;
  id = this.route.snapshot.paramMap.get("id");
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.products = this.productService.findProductById(this.id)
    this.editProductForm = this.fb.group({
      id: [this.products[0].id],
      name: [this.products[0].name],
      description: [this.products[0].description],
      price: [this.products[0].price],
    });
  }
  editProduct() {
    const data = this.editProductForm.value;
    this.productService.updateProduct(this.id, data);
    return this.router.navigate(["product/list"]);
  }
}
