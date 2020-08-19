import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()

export class ServerService
{     
    tk:any;
    public rootUrl="http://localhost:8080"



    constructor(private http :HttpClient,
                private router:Router)
        {}
       
       
    signup(name:string,email:string,password:string) 
        {  
            const headers = new HttpHeaders({'Content-Type':'application/json'});
            return this.http.post(this.rootUrl+'/signup',JSON.stringify({name,email,password}),
            {headers:headers})
        }    
        login(email:string ,password:string)
        { 
          const headers = new HttpHeaders({'Content-Type':'application/json'});
         return this.http.post(this.rootUrl+'/login',JSON.stringify({email,password}),{headers:headers})
         
          
        }
        getallProducts(category:String)
        {
          const headers = new HttpHeaders({'Content-Type':'application/json','Authorization':this.getToken()});
         return this.http.post(this.rootUrl+'/getProducts',JSON.stringify({category}),{headers:headers})
        }
        addtocart(productId:string,size:string)
        {
          const headers = new HttpHeaders({'Content-Type':'application/json','Authorization':this.getToken()});
         return this.http.post(this.rootUrl+'/addtocart',JSON.stringify({productId,size}),{headers:headers})
        }
        getcartProduct()
        {
          const headers = new HttpHeaders({'Content-Type':'application/json','Authorization':this.getToken()});
          return this.http.get(this.rootUrl+'/getcartproduct',{headers:headers});
        }
        order(orders:any[])
        {
          const headers = new HttpHeaders({'Content-Type':'application/json','Authorization':this.getToken()});
          return this.http.post(this.rootUrl+'/order',JSON.stringify({orders}),{headers:headers})
        }
  loggedIn()
  {
    return !!localStorage.getItem('token')
  }

  loggedIn2()
  {
    return !!localStorage.getItem('token2')
  } 
  getToken(){
    return localStorage.getItem('token')
  }
  loggOut()
  {
    localStorage.removeItem('token');

  }
          
}