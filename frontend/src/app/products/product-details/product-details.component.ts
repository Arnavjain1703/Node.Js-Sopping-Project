import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product.module';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { ServerService } from 'src/app/services/server.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  paramsubscription:Subscription;
  index:number;
  image1:any;
  image2:any;
  image3:any;
  image4:any;
  product:Product;
  productId:string;
  size:string;
  clicked=false;
  constructor(private route:ActivatedRoute,
              private productService:ProductService,
              public  serverService:ServerService) { }
  
  ngOnInit(): void {
    this.paramsubscription = this.route.params.subscribe
    ((params:Params)=>
    { 
      this.index=+params['id']
    })
    this.product = this.productService.getProduct(this.index);
    this.image1=this.product.ImageUrl1;
    this.image2=this.product.ImageUrl2;
    this.image3=this.product.ImageUrl3;
    this.image4=this.product.ImageUrl4;
    this.productId=this.product._id;
  }
   Add()
   {
      this.serverService.addtocart(this.productId,this.size).subscribe((response)=>
      {
        console.log(response)
      },
      (error)=>
      {
        console.log(error)
      }
      )
   }
   oneOrder()
   {

   }
   call(size:string)
   { this.size=size;
     this.clicked=true;
   }

}
