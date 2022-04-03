import { Injectable } from "@angular/core";
import { Product } from "../product";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  products: Product[] = [
    {
      id: 1,
      name: "Iphone 12 Pro Max",
      description: "Dien thoai Iphone",
      price: 32500000,
    },
    {
      id: 2,
      name: "Iphone 12 Pro ",
      description: "Dien thoai Iphone",
      price: 30000000,
    },
    {
      id: 3,
      name: "Samsung S22 ",
      description: "Dien thoai SamSung",
      price: 32500000,
    },
    {
      id: 4,
      name: "Oppo Reno ",
      description: "Dien thoai Oppo",
      price: 7000000,
    },
  ];
  constructor() {}
  findProductById(id) {
    return this.products.filter((products, index) => {
      return products.id == id;
    });
  }
  findIndexOfProduct(id) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id == id) {
        return i;
      }
    }
    return -1;
  }
  updateProduct(id, data) {
    const index = this.findIndexOfProduct(id);
    if (index !== -1) {
      this.products[index].id = data.id;
      this.products[index].name = data.name;
      this.products[index].description = data.description;
      this.products[index].price = data.price;
    }
  }
  deleteProduct(index){
    this.findIndexOfProduct(index);
    this.products.splice(index, 1)
  }
}
