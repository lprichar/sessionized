import { Component, Input, OnInit } from '@angular/core';
import { Speaker } from '../sessionize-service.service';

@Component({
  selector: 'app-twitter-username',
  template: `<a [href]="twitterUrl" *ngIf="twitterUrl"> @{{twitterUsername}}</a><span *ngIf="!twitterUrl">{{speaker.firstName}} {{speaker.lastName}}</span>`,
})
export class TwitterUsernameComponent implements OnInit {
  constructor() {}

  @Input()
  public speaker: Speaker;

  public twitterUsername : string;
  public twitterUrl: string;

  ngOnInit(): void {
    const twitterLink = this.speaker.links.find(l => l.linkType === 'Twitter');
    if (twitterLink) {
      this.twitterUrl = twitterLink.url;
      const parts = this.twitterUrl.split('/');
      this.twitterUsername = parts[parts.length - 1];
    }
  }
}
