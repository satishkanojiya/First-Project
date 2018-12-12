import { Component, OnInit } from '@angular/core';
import {Services} from '../services';
import {Router} from '@angular/router';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  a=true;
  listsearch;
  change(){
    this.a=!this.a
  }
  users;
  constructor(private services : Services,private route : Router) { }

  ngOnInit() {

    this.services.getuserinfo().subscribe(data => {
      this.users = data;
      console.log(data);
    })

  }

  onBack()
  {
    this.route.navigate(['/Product']);
  }

}
