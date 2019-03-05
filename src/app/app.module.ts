import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule} from "@angular/forms";
import { AvatarComponentComponent } from './avatar-component/avatar-component.component';
import { TimelineComponent } from './timeline/timeline.component';
import {TimeAgoPipe} from 'time-ago-pipe';
import { TweetComponent } from './tweet/tweet.component';

@NgModule({
  declarations: [
    AppComponent,
    AvatarComponentComponent,
    TimelineComponent,
    TimeAgoPipe,
    TweetComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
