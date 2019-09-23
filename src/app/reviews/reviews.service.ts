import { Injectable } from '@angular/core';
import { Review } from './review.model';
import { Subject, Observable } from 'rxjs';

@Injectable()

export class ReviewsService{
newReview:Review;
reviewChanged = new Subject<Review[]>();
  public allReviews: Review[] = [
    new Review(3,'Very good material','Alice Benson','Great',new Date(Date.now())),
    new Review(4,'Very good material','Alison Baker','Great',new Date(Date.now())),
    new Review(5,'Very good material','Benjamin Franklin','Great',new Date(Date.now())),
    new Review(4,'Very good material','Joyce Mayer','Great',new Date(Date.now())),
    new Review(5,'Very good material','Kacha Amara','Great',new Date(Date.now())),
  ];


  getReviews(){
    return this.allReviews.slice();
  }

  // GetCategories():Observable<Review[]>{
  //   return this.allReviews.slice();
  // }
  PostReview(review: Review)
  {
    this.allReviews.push(review);
    this.reviewChanged.next([...this.allReviews]);
  }
}

