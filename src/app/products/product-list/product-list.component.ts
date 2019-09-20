import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from '../product.model';
import { Observable, Subscription } from 'rxjs';
import { ProductType } from '../product-type.component';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products:Product[];
  productss: Observable<Product[]>;
  @Input() catType: ProductType;
  category: {name:string};
  paramsSubscription: Subscription
  constructor(private prodService:ProductService,private route:ActivatedRoute) {


  }

  ngOnInit() {
    console.log('In product list');
    this.products = this.prodService.GetNewArrivals();
//     this.category = {
//       name:this.route.snapshot.params['name'],
//     };

//     this.paramsSubscription = this.route.params
//   .subscribe(
//     ((params: Params) =>{
//       if (params['name']) {
//         this.category.name = params['name'];
//         var catName = this.category.name.replace(this.category.name.charAt(0),this.category.name.charAt(0).toUpperCase());
//         this.prodService.GetProductByCategory(catName).subscribe(
//           (res: Product[]) =>{
//             this.products =res;
//             var myDb = [];


//             res.forEach(obj=>{
//               console.log('obj.cattype: '+obj._ProductType);
//                 let category:Product = obj as Product;
//                 category = new Product(category._Name,category._Description,category._Price,category._ImagePath,category._Size,category._Number,category._ProductId,category._ProductType);
//                 myDb.push(category);
// console.log("category details list is: "+category._ImagePath);
//             }),
//             this.products = res;
//             console.log('res: '+this.products);
//           }
//         );

//       // }
//       }
//     })

//   );

  }

}
