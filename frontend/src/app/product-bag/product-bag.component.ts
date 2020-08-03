import { Component, OnInit } from '@angular/core';
import { ServerService } from '../services/server.service';
import { CartService } from '../services/cart.service';
import {Cartproduct} from '../models/cart.module'
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-product-bag',
  templateUrl: './product-bag.component.html',
  styleUrls: ['./product-bag.component.css']
})
export class ProductBagComponent implements OnInit {

  constructor(private ServerService:ServerService,
              private cartService:CartService) { }
  products:Cartproduct[];
  cartSubscription:Subscription;
  ngOnInit(): void {
    // this.cartSubscription = this.cartService.CartProductChanged.subscribe(products=>
    //   {
    //     this.products = products;
    //   })
    //   this.ServerService.getcartProduct().subscribe((response:any)=>
    //   {
    //       this.cartService.setService(response.Products)
    //       this.products = response.Products
          
          
    //   })
     
  }
order()
{
  
}
}
