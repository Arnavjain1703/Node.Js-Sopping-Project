import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Subscription } from 'rxjs';
import { Product } from '../models/product.module';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private ProductService:ProductService) { }
   ProductSubscription:Subscription
   products:Product[];
  ngOnInit(): void {
    this.ProductSubscription=this.ProductService.ProductChanged.subscribe((products:Product[])=>
      {
        this.products=products;
        this.ProductSubscription.unsubscribe()
      })
     this.products=this.ProductService.getProducts() 
     
  }

}
