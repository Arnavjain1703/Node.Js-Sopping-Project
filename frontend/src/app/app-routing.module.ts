import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductItemComponent } from './product-item/product-item.component';
import { AppComponent } from './app.component';
import { FrontPageComponent } from './front-page/front-page.component';


const routes: Routes = [
  {path:'', redirectTo:'homepage',pathMatch:'full'},
  {path:'upload',component:ProductItemComponent},
  {path:'homepage',component:FrontPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
