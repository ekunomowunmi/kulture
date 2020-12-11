import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { TipsComponent } from './tips/tips.component';
import { ProductsComponent } from './products/products.component';
import { HomepageComponent } from './homepage/homepage.component';


const routes: Routes = [
  {path:'',component:HomepageComponent, pathMatch:'full'},
  {path: 'reviews', component: ReviewsComponent},
  {path: 'tips', component:TipsComponent},
  {path: 'products', component:ProductsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
