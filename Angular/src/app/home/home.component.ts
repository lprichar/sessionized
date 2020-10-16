import { Component, OnInit } from '@angular/core';
import { Room, SessionizeService } from '../sessionize-service.service';
import { WatchNowService } from '../watch-now.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public hours: Date[] = [];
  public rooms: Room[];

  constructor(
    private sessionizeService: SessionizeService,
    private watchNowService: WatchNowService
  ) {}

  public getPlayUrl(room: Room): string {
    return this.watchNowService.getUrlForRoom(room);
  }

  ngOnInit(): void {
    this.hours = this.watchNowService.getHours();

    this.sessionizeService
      .getSessionizeData()
      .subscribe((sessionizeApiResult) => {
        this.rooms = sessionizeApiResult.rooms;
      });
  }
}
