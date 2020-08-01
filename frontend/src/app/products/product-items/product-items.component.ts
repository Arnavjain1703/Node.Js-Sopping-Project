import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product.module';

@Component({
  selector: 'app-product-items',
  templateUrl: './product-items.component.html',
  styleUrls: ['./product-items.component.css']
})
export class ProductItemsComponent implements OnInit {

  constructor() { }
  @Input () product:Product;
  @Input() index:number;
  display=false;
  image1:string;
  image2:string;
  image3:string;
  image4:string;
  ngOnInit(): void {
this.image1=this.product.ImageUrl1;
this.image2=this.product.ImageUrl2;
this.image3=this.product.ImageUrl3;
this.image4=this.product.ImageUrl4;
console.log(this.product)
  }
details()
  {

  }
  call()
  {
    this.display=true;
  }
  uncall()
  {
    this.display=false;
  }


}
