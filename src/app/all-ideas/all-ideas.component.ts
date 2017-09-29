import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'all-ideas',
  templateUrl: './all-ideas.component.html',
  styleUrls: ['./all-ideas.component.css']
})
export class AllIdeasComponent implements OnInit {

  allIdeas: any[] = [
    { title : 'Connect', description: 'A multiplayer game where other players try to guess the secret word of a single player', author: 'unknown', checked: true},
    { title : 'Call tracker', description: 'A app to keep track of calls made to close people and remind', author: 'unknown', checked: true},
    { title : 'EV charge network', description: 'app to collaborate on EV charging', author: 'unknown', checked: true}
  ];
  constructor() { }

  ngOnInit() {
  }

}
