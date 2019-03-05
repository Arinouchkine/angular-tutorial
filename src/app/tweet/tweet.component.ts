import { Component, OnInit, Input } from '@angular/core';
import {Tweet} from "../tweet";

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.less']
})
export class TweetComponent implements OnInit {

  @Input() tweet:Tweet;

  constructor() { }

  ngOnInit() {
  }

  likeAdd()
  {

    if (this.tweet.likeB)
    {
      this.tweet.like--;
      this.tweet.likeB = false;
    }
    else {
      this.tweet.like++;
      this.tweet.likeB = true;
    }

  }

}
