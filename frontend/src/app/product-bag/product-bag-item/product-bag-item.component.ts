import { Component, OnInit, Input } from '@angular/core';
import { ProductBagCostComponent } from '../product-bag-cost/product-bag-cost.component';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-bag-item',
  templateUrl: './product-bag-item.component.html',
  styleUrls: ['./product-bag-item.component.css']
})
export class ProductBagItemComponent implements OnInit {

  constructor(private service:CartService) { }
  @Input () product:any;
  @Input() index:number;
  image:string;
  quantity=0;
  ngOnInit(): void {
    // this.image = this.product.productId.imageUrl1
    console.log(this.product.productId)
    this.image=this.product.productId.ImageUrl1
    
  }
drop()
{
  this.quantity=this.quantity+1;
  this.service.updateQuantity(this.index,this.quantity)
  
     
}

}
