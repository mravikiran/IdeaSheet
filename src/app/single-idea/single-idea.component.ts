import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'single-idea',
  templateUrl: './single-idea.component.html',
  styleUrls: ['./single-idea.component.css']
})
export class SingleIdeaComponent implements OnInit {

  @Input('singleIdea') singleIdea: any;
  @Input('isFirstIdea') isFirstIdea: boolean;
  constructor() { 
    this.singleIdea = { title : 'Connect', description: 'A multiplayer game where other players try to guess the secret word of a single player', author: 'unknown', checked: true};
  }

  ngOnInit() {
  }

  OnUpvote(numberOfUpvotes) {
    console.log(numberOfUpvotes);
  }

}
