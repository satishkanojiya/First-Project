import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import{NavigationComponent} from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import {RouterModule} from '@angular/router';
import { routes } from './apps.routes';
import {HttpClientModule} from '@angular/common/http';
import {Services} from './services';
import { ProductlistComponent } from './productlist/productlist.component';
import { FormsModule } from '@angular/forms';
import {FilterProduct} from './model/Product.Filter.pipe';
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    ProductComponent,
    ProductlistComponent,
    FilterProduct
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
  ],
  providers: [Services],
  bootstrap: [AppComponent]
})
export class AppModule { }
