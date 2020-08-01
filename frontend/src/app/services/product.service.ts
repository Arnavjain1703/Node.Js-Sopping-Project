import { Subject } from 'rxjs';
import { Product } from '../models/product.module';

export class ProductService

{


    ProductChanged=new Subject<Product[]>();
    
    private products:Product[]=[

    ]

    getProducts()
    {
        return this.products
    }

    getProduct(index:number)
    {
        return this.products.slice()[index];
    }

    
    setService(products:Product[])
    {
        this.products=products;
        this.ProductChanged.next(this.products);
        
    }

     
 
}