import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServerService } from './services/server.service';
import { ProductsComponent } from './products/products.component';
import { ProductItemsComponent } from './products/product-items/product-items.component';
import { ProductService } from './services/product.service';
import { ProductDetailsComponent } from './products/product-details/product-details.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    NavbarComponent,
    FrontpageComponent,
    ProductsComponent,
    ProductItemsComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule, 
    ReactiveFormsModule
  ],
  providers: [ServerService,AppComponent,ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
