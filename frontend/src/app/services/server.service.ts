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