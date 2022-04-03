import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateCategoryComponent } from './components/categories/create-category/create-category.component';
import { DeleteCategoryComponent } from './components/categories/delete-category/delete-category.component';
import { EditCategoryComponent } from './components/categories/edit-category/edit-category.component';
import { ListCategoryComponent } from './components/categories/list-category/list-category.component';
import { CreateProductComponent } from './components/products/create-product/create-product.component';
import { DeleteProductComponent } from './components/products/delete-product/delete-product.component';
import { EditProductComponent } from './components/products/edit-product/edit-product.component';
import { ListProductComponent } from './components/products/list-product/list-product.component';
import { MasterComponent } from './layouts/master/master.component';



const routes: Routes = [
  {
    path: "category",
    component: MasterComponent,
    children: [
      {
        path: "list",
        component: ListCategoryComponent,
      },
      {
        path: "create",
        component: CreateCategoryComponent,
      },
      {
        path: ":id/edit",
        component: EditCategoryComponent,
      },
      {
        path: ":id/delete",
        component: DeleteCategoryComponent,
      },

    ],
  },
  {
    path: "product",
    component: MasterComponent,
    children: [
      {
        path: "list",
        component: ListProductComponent,
      },
      {
        path: "create",
        component: CreateProductComponent,
      },
      {
        path: ":id/edit",
        component: EditProductComponent,
      },
      {
        path: ":id/delete",
        component: DeleteProductComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
