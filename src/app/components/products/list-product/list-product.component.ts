import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Product } from "src/app/product";
import { ProductService } from "src/app/services/product.service";

@Component({
  selector: "app-list-product",
  templateUrl: "./list-product.component.html",
  styleUrls: ["./list-product.component.css"],
})
export class ListProductComponent implements OnInit {
  products: Product[] = [];
  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit() {
    this.products = this.productService.products;
  }
  deleteProduct(index) {
    if (window.confirm("Are you sure ?")) {
      this.productService.deleteProduct(index);
      this.router.navigate(['/product/list']);
    }
  }
}
