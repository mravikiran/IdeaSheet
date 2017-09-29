import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'upvote',
  templateUrl: './upvote.component.html',
  styleUrls: ['./upvote.component.css']
})
export class UpvoteComponent implements OnInit {

  upVoted: boolean;
  @Input('numberOfUpvotes') numberOfUpvotes: number;
  @Output('onClick') onClick: EventEmitter<number> = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  //determine from service if the user has liked this already
  // also set number of upvotes
  this.numberOfUpvotes = 4;
  this.upVoted = false;
  }

  OnClick()
  {
    //console.log("upvoted clicked!!!");

    this.upVoted = !this.upVoted;
    if(this.upVoted)
      {
        this.numberOfUpvotes = this.numberOfUpvotes +1;
      }
      else{
        this.numberOfUpvotes = this.numberOfUpvotes -1;
      }
      this.onClick.emit(this.numberOfUpvotes);
  }

}
