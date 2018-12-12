import {RouterModule,Routes} from '@angular/router'
import {HomeComponent} from './home/home.component';
import {ProductComponent} from './product/product.component';
import { ProductlistComponent } from './productlist/productlist.component';

export const routes=[

   {
    path:'Home',
    component:HomeComponent
   },
   {
       path:'Product',
       component:ProductComponent
   },
   {
       path:'productlist/:id',
       component:ProductlistComponent
   }


]
