import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
products : Product[];
createProductForm : FormGroup;
id = this.route.snapshot.paramMap.get('id');
  constructor(
    private fb : FormBuilder,
    private route : ActivatedRoute,
    private router : Router,
    private productService : ProductService
  ) { }

  ngOnInit() {
    this.createProductForm = this.fb.group({
      id : ["",Validators.required],
      name : ["",Validators.required],
      description : ["",Validators.required],
      price : ["", Validators.required]
    });
  }
createProduct(){
  const data = this.createProductForm.value
  if(data){
    this.productService.products.push(data);
    this.router.navigate(['product/list'])
  }
}
}
