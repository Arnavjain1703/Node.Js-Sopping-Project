import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {path:'',redirectTo: 'frontpage', pathMatch:'full'},
    {path:'login',component:LoginComponent},
    {path:'signup',component:SignupComponent},
    {path:'frontpage',component:FrontpageComponent},
    {path:'products',component:ProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
