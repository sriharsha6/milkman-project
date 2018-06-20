import { connectService } from './../services/connect.service';
import { Component, OnInit } from '@angular/core';


@Component({
 selector: 'app-products',
 templateUrl: './products.component.html',
 styleUrls: ['./products.component.css'],
 providers:[connectService]
})
export class ProductsComponent implements OnInit {
 
  productdetails:any
 constructor(private Service:connectService) {
   var data;
   this.Service.products(data).subscribe(response=>{
    console.log(response);
     let m=response.json();
     this.productdetails=m.data;
     console.log(this.productdetails);
     //this.pricedetail = this.productdetails.product_skus;
   })
  }

 ngOnInit() {
 }

}