import { Subject } from 'rxjs';
import { Product } from '../models/product.module';

export class CartService

{


    CartProductChanged=new Subject<any[]>();
    
    private products:any[]=[

    ]

    getProducts()
    {
        return this.products
    }
    addtocart(product:any)
    {
         this.products.push(product);
         this.CartProductChanged.next(this.products)
    }
    getProduct(index:number)
    {
        return this.products.slice()[index];
    }

    updateQuantity(index:number,quantity:any)
    {
        this.products[index].quantity=quantity
        this.CartProductChanged.next(this.products)
        console.log(this.products[index])
        console.log(index)
        
    }
    setService(products:any[])
    {
        this.products=products;
        this.CartProductChanged.next(this.products);
        
    }

     
 
}