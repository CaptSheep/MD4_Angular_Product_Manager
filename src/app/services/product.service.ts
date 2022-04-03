import { Injectable } from '@angular/core';
import { Product } from '../product';

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
      description: "Dien thoai Iphone",
      price: 32500000,
    },
  ];
  constructor() {}
}
