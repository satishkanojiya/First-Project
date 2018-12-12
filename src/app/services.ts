
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {Product} from './model/product';
import {map} from 'rxjs/operators';
@Injectable()
export class Services{
    
    private url='../assets/allproduct.json';
    constructor(private http : HttpClient){}
    getuserinfo():Observable<Product>{
        return this.http.get<Product>(this.url);
    }

    getproduct(id:number):Observable<Product>{
        return this.http.get<Product[]>(this.url).pipe(map(data => {
            let item = data.find(item => item.productId == id);
            return item;
        }))
    }

}