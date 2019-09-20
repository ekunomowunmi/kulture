import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CarouselModule} from 'primeng/carousel';
import { ButtonModule} from 'primeng/button';
// import { RatingModule} from 'primeng/rating';
import { FormsModule} from '@angular/forms';
import { RatingModule } from 'ng-starrating';
import { TextareaAutosizeModule } from 'ngx-textarea-autosize';
import * as $ from 'jquery';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProductsComponent } from './products/products.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductItemsComponent } from './products/product-list/product-items/product-items.component';
import { ProductService } from './products/product.service';
import { HttpClientModule} from '@angular/common/http';
import { ShopbycategoryHomeComponent } from './shopbycategory-home/shopbycategory-home.component';
import { TipsComponent } from './tips/tips.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { WhatWeDoComponent } from './what-we-do/what-we-do.component';
import { NewArrivalsComponent } from './new-arrivals/new-arrivals.component';
import { CarouselpageComponent } from './carouselpage/carouselpage.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    ProductsComponent,
    ProductListComponent,
    ProductItemsComponent,
    ShopbycategoryHomeComponent,
    TipsComponent,
    ReviewsComponent,
    ProductDetailComponent,
    WhatWeDoComponent,
    NewArrivalsComponent,
    CarouselpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    ButtonModule,
    RatingModule,
    FormsModule,
    HttpClientModule,
    TextareaAutosizeModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
