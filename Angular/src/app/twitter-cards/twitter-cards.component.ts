import { Component, OnInit } from '@angular/core';
import { Session, SessionizeService, Speaker } from '../sessionize-service.service';

@Component({
  selector: 'app-twitter-cards',
  templateUrl: './twitter-cards.component.html',
  styleUrls: ['./twitter-cards.component.scss']
})
export class TwitterCardsComponent implements OnInit {
  public speakers: Speaker[] = null;
  public sessionsBySpeakerId: { id: string, session: Session }[] = [];

  constructor(private sessionizeService: SessionizeService, private watchNowService: WatchNowService) { }

  ngOnInit(): void {
    this.sessionizeService.getSessionizeData().subscribe(sessionizeApiResult => {
      sessionizeApiResult.sessions
        .filter(s => s.speakers.length === 1)
        .forEach(session => {
           this.sessionsBySpeakerId[session.speakers[0]] = session;
       });

      this.speakers = sessionizeApiResult.speakers.filter(s => this.sessionsBySpeakerId[s.id]);
    });
  }

  public isMale(speaker: Speaker): boolean {
    return this.watchNowService.isMale(speaker);
  }

}
