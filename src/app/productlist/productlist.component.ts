import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Params} from '@angular/router';
import { Services } from '../services';
@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
id;
allproducts;
  constructor(private route : ActivatedRoute,private services : Services) { }

  ngOnInit() {

    this.route.params.subscribe(param => {
      let id = param['id'];
      this.services.getproduct(id).subscribe(Product => {
        this.allproducts = Product;
        console.log(this.allproducts);
      })

    })

  }
  

}
