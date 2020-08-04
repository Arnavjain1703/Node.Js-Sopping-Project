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

    getProduct(index:number)
    {
        return this.products.slice()[index];
    }

    
    setService(products:any[])
    {
        this.products=products;
        this.CartProductChanged.next(this.products);
        
    }

     
 
}