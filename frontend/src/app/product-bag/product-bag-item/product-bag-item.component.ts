import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-bag-item',
  templateUrl: './product-bag-item.component.html',
  styleUrls: ['./product-bag-item.component.css']
})
export class ProductBagItemComponent implements OnInit {

  constructor() { }
  @Input () product:any;
  @Input() index:number;
  image:string;
  ngOnInit(): void {
    // this.image = this.product.productId.imageUrl1
    console.log(this.product.productId)
    this.image=this.product.productId.ImageUrl1
    
  }

}
