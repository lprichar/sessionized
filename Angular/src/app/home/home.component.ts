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
    this.hours.push(new Date(2020, 8, 26, 8, 30, 0, 0));

    for (let i = 9; i <= 16; i++) {
      this.hours.push(new Date(2020, 8, 26, i, 0, 0, 0));
    }

    this.sessionizeService
      .getSessionizeData()
      .subscribe((sessionizeApiResult) => {
        this.rooms = sessionizeApiResult.rooms;
      });
  }
}
