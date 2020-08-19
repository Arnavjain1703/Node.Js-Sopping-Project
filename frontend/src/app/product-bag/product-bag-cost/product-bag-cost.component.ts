import { Component, OnInit,Input } from '@angular/core';
import { Product } from 'src/app/models/product.module';

@Component({
  selector: 'app-product-bag-cost',
  templateUrl: './product-bag-cost.component.html',
  styleUrls: ['./product-bag-cost.component.css']
})
export class ProductBagCostComponent implements OnInit {

  constructor() { }
@Input() index:number;
@Input () product:any;

  
ngOnInit(): void {
  // console.log(this.product)
    
  }


}
