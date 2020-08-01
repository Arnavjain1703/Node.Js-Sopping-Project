import { Component, OnInit } from '@angular/core';
import { ServerService } from '../services/server.service';
import {ProductService} from '../services/product.service';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.css']
})
export class FrontpageComponent implements OnInit {

  constructor( private serverService:ServerService,
               private productService:ProductService,
               private appComponent:AppComponent,
               private router:Router,) { }
  title = 'shoppingELF';
  myStyle: object = {};
  myParams: object = {};
  width: number = 100;
  height: number = 100;
  tk:any;

  ngOnInit() {
    this.myStyle = {
      'position': 'fixed',
      'width': '100%',
      'height': '100%',
      'z-index': -3,
      'top': 0,
      'left': 0,
      'right': 0,
      'bottom': 0,
  };

this.myParams = {
      particles: {
          number: {
              value: 200,
          },
          color: {
              value: 'red'
          },
          shape: {
              type: 'circle',
          },
  }
};
  }

  menProducts()
{  this.appComponent.loaders();
  this.serverService.getallProducts("5f230a70372719a97b0b5b9b")
  .subscribe(
    response=>
    {  
      
   console.log(response);
   this.tk=response;
   this.productService.setService(this.tk.Products);
   this.router.navigate(['products'])
   this.appComponent.loaderOff();
  
      
    },
     error=> {
       console.log(error);
       this.appComponent.loaderOff();

     }

  )

 

  
}

womenProducts()
{
  this.appComponent.loaders();
  this.serverService.getallProducts("5f2468e190137b58dcbb07ce")
  .subscribe(
    response=>
    {  
      
   console.log(response);
   this.tk=response;
   this.productService.setService(this.tk.Products);
   this.router.navigate(['products'])

   this.appComponent.loaderOff();
  
      
    },
     error=> {
       console.log(error);
       this.appComponent.loaderOff();

     }

  )
  


}

kidsProducts()
{  this.appComponent.loaders()
  this.serverService.getallProducts("5f2468eb90137b58dcbb07cf")
  .subscribe(
    response=>
    {  
      
   console.log(response);
   this.tk=response;
   this.productService.setService(this.tk.Products);
   this.router.navigate(['products'])

   this.appComponent.loaderOff();
  
      
    },
     error=> {
       console.log(error);
       this.appComponent.loaderOff();

     }

  )
  

}

}
