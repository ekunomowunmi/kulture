import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from './product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ProductService]
})
export class ProductsComponent implements OnInit {
  products :Product[];
  selectedItem: Product;

  constructor(private prodService: ProductService) { }

  ngOnInit() {
    console.log('In products');
    this.prodService.itemSelected.subscribe(
      (product:Product)=>
      {
        this.selectedItem = product;
      }
    )
  }

}
