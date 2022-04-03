import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CreateCategoryComponent } from "./components/categories/create-category/create-category.component";
import { EditCategoryComponent } from "./components/categories/edit-category/edit-category.component";
import { ListCategoryComponent } from "./components/categories/list-category/list-category.component";
import { DeleteCategoryComponent } from "./components/categories/delete-category/delete-category.component";
import { DeleteProductComponent } from "./components/products/delete-product/delete-product.component";
import { EditProductComponent } from "./components/products/edit-product/edit-product.component";
import { CreateProductComponent } from "./components/products/create-product/create-product.component";
import { ListProductComponent } from "./components/products/list-product/list-product.component";
import { MasterComponent } from "./layouts/master/master.component";
import { CoreComponent } from "./layouts/core/core.component";
import { FooterComponent } from "./layouts/core/footer/footer.component";
import { HeaderComponent } from "./layouts/core/header/header.component";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    CreateCategoryComponent,
    EditCategoryComponent,
    ListCategoryComponent,
    DeleteCategoryComponent,
    DeleteProductComponent,
    EditProductComponent,
    CreateProductComponent,
    ListProductComponent,
    MasterComponent,
    CoreComponent,
    FooterComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    ReactiveFormsModule, 
    RouterModule
  ]
,
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
