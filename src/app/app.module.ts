import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SingleIdeaComponent } from './single-idea/single-idea.component';
import { AllIdeasComponent } from './all-ideas/all-ideas.component';
import { NothingComponentComponent } from './nothing-component/nothing-component.component';
import { NothingComponent } from './nothing/nothing.component';
import { AuthorsComponent } from './authors/authors.component';
import { UpvoteComponent } from './upvote/upvote.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SingleIdeaComponent,
    AllIdeasComponent,
    NothingComponentComponent,
    NothingComponent,
    AuthorsComponent,
    UpvoteComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { 
        path: 'ideas', 
        component: AllIdeasComponent
      },
      {
        path: '**',
        component: NothingComponent
      } 
  ])
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
