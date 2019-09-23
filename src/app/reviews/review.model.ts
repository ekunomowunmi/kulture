export class Review{
  /**
   *
   */
  constructor(public rate:number, public reviewMessage:string, public name :string, public Title:string,public date:Date) {
   this.rate = rate;
   this.reviewMessage = reviewMessage;
   this.name = name;
   this.Title = Title;
   this.date = date;

  }
}
