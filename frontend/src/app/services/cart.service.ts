import { Subject } from 'rxjs';
import { Cartproduct } from '../models/cart.module';

export class CartService

{


    CartProductChanged=new Subject<Cartproduct[]>();
    
    private products:Cartproduct[]=[

    ]

    getProducts()
    {
        return this.products;
        console.log(this.products)
    }

    getProduct(index:number)
    {
        return this.products.slice()[index];
    }
    
    
    setService(products:Cartproduct[])
    {
        this.products=products;
        this.CartProductChanged.next(this.products);
        
        
    }

     
 
}