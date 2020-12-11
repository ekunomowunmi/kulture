import { Component, OnInit } from '@angular/core';
import { Review } from './review.model';
import { ReviewsService } from './reviews.service';
import { StarRatingComponent } from 'ng-starrating';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  Review:string;
  reviews: Review[];
  constructor(private reviewService:ReviewsService ) { }

  ngOnInit() {

   this.reviews = this.reviewService.getReviews();
  }
  onRate($event:{oldValue:number, newValue:number, starRating:StarRatingComponent}) {
    alert(`Old Value:${$event.oldValue},
      New Value: ${$event.newValue},
      Checked Color: ${$event.starRating.checkedcolor},
      Unchecked Color: ${$event.starRating.uncheckedcolor}`);
  }
}
