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
  products:any[]=[];
  cartSubscription:Subscription;
  total=0;
  orders:any=[];
  order:any={
    productId:"",
    size:0,
    quantity:0,
  };
  ngOnInit(): void {

      this.ServerService.getcartProduct().subscribe((response:any)=>
      {
          this.cartService.setService(response.Products);
           
      })
      this.cartSubscription = this.cartService.CartProductChanged.subscribe(products=>
        {
          this.products = products;
          this.total=0;
          this.orders=[];
          for(let i=0;i<products.length;i++)
          {
            let quantity=(products[i].quantity?products[i].quantity:0);
            this.total=this.total+quantity*products[i].productId.Product_price;
             this.order.productId =  products[i].productId._id;
            this.order.size = products[i].size;
            this.order.quantity=quantity;
            // console.log(order)
            this.orders.push(this.order);
          }
          console.log(this.orders)
        }
        
        )
        this.products=this.cartService.getProducts()
         
        
  }
  ordernow()
  { console.log(this.orders)
    this.ServerService.order(this.orders).subscribe(response=>
      {
         console.log(response)
      },
      error=>
      {
        console.log(error)
      }
      )
  }

}
