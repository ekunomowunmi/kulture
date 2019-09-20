import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../product.model';
import { ProductType } from '../../product-type.component';
import { StarRatingComponent } from 'ng-starrating';

@Component({
  selector: 'app-product-items',
  templateUrl: './product-items.component.html',
  styleUrls: ['./product-items.component.css']
})
export class ProductItemsComponent implements OnInit {
  rate = 1;
  @Input() product:Product;
  productType: ProductType;

  constructor() { }

  ngOnInit() {

  }
  onRate($event:{oldValue:number, newValue:number, starRating:StarRatingComponent}) {
    alert(`Old Value:${$event.oldValue},
      New Value: ${$event.newValue},
      Checked Color: ${$event.starRating.checkedcolor},
      Unchecked Color: ${$event.starRating.uncheckedcolor}`);
  }
  onGotToDetail(product){

  }

}
