import {Pipe,PipeTransform} from '@angular/core';
import {Product} from './product';


@Pipe({
    name:'ProductFilter'
})

export class FilterProduct implements PipeTransform{

   transform(value:Product[],filterby:string):Product[]
     {
          if(!value){
              return [];
          }
          if(!filterby) {
              return value;
          }
         filterby = filterby.toLocaleLowerCase();
         return filterby ? value.filter((pro:Product) => pro.product.toLocaleLowerCase().includes(filterby)):value;
     }

}