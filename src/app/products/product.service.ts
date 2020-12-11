import { Injectable,EventEmitter } from "@angular/core";
import { Product } from './product.model';
import { Observable } from 'rxjs';
import {throwError as observableThrowError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Response, RequestOptions } from "@angular/http";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ProductType } from './product-type.component';

@Injectable()

export class ProductService{

  itemSelected = new EventEmitter<Product>();

    private newArrivals:Product[] = [
      new Product('Black Shirt','Very Delicious Shirt',5000,'../../assets/images/shirt2.jpg','Small',6,'pro1',ProductType.Shirt),
      new Product('Sth Shirt','Very Delicious Shirt',5000,'../../assets/images/shirt1.PNG','Small',6,'pro2',ProductType.Shirt),
      new Product('Red Shirt','Very Delicious Shirt',5000,'../../assets/images/shirt8.jpg','Small',6,'pro3',ProductType.Shirt),
      new Product('Black Shirt','Very Delicious Shirt',5000,'../../assets/images/shirt2.jpg','Small',6,'pro1',ProductType.Shirt),
      new Product('Sth Shirt','Very Delicious Shirt',5000,'../../assets/images/shirt1.PNG','Small',6,'pro2',ProductType.Shirt),

    ];

//     new Category('Blue Ball Gown','A flowery designed one strand gown',
//     15000,'../../assets/images/BallGown_BlueDres1.jpg',SizeVarType[SizeVarType[SizeVarType.Medium]],1,'pro1',0),
//       new Category('Green Ball Gown','A green ornest silk one armed gown',
//     12000,'../../assets/images/BallGown_Green.jpg',SizeVarType[SizeVarType.Large],1,'pro1',0),
//     new Category('Red Ball Gown','A V-neck body-con, fish tail gown',
//     15000,'../../assets/images/BallGown_redDres3.jpg',SizeVarType[SizeVarType.Small],1,'pro1',0),
//       new Category('Wedding Gown','Layered Wedding Dress',
//     45000,'../../assets/images/wedding_dress1.jpg',SizeVarType[SizeVarType.Small],1,'pro1',0),
//     new Category('Fitted Wedding Gown','Fitted A Line Wedding Dress',
//     15000,'../../assets/images/wedding_dress4.jpg',SizeVarType[SizeVarType.Small],1,'pro1',0),
//       new Category('Silver Wedding Gown','Silver-Lined Wedding gown',
//     12000,'../../assets/images/wedding_dress3.jpg',SizeVarType[SizeVarType.Small],1,'pro1',0),
//   ];


 urlProducts = "";
  constructor(private http:HttpClient) {


  }
  public _serverError(err: any): Observable<any> {
    console.log('server error:', err);  // debug
    if (err instanceof Response) {
        return observableThrowError(err.json().error || 'backend server error');

    }
    return observableThrowError(err || 'backend server error');
}

GetNewArrivals(){
  return this.newArrivals.slice();
}
  GetProducts():Observable<Product[]>{
    return this.http.get<Product[]>(this.urlProducts).pipe(catchError(this._serverError));
  }
  GetProductByCategory(category: string):Observable<Product[]>{
    return this.http.get<Product[]>(`${this.urlProducts}/${category}`).
    pipe(catchError(this._serverError));
  }

}
