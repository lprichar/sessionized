import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DateConverterService } from '../date-converter.service';
import {
  Room,
  Session,
  SessionizeApiResult,
  SessionizeService,
} from '../sessionize-service.service';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.scss'],
})
export class TracksComponent implements OnInit {
  public rooms: Room[] = [];
  public activeRoom: Room = null;
  public sessions: Session[] = [];

  private sessionizeApiResult: SessionizeApiResult;

  constructor(
    private sessionizeService: SessionizeService,
    private route: ActivatedRoute,
    private dateConverterService: DateConverterService
  ) {}

  public ngOnInit(): void {
    this.sessionizeService
      .getSessionizeData()
      .subscribe((sessionizeApiResult) => {
        this.sessionizeApiResult = sessionizeApiResult;
        this.rooms = sessionizeApiResult.rooms;

        this.route.params.subscribe((params) => {
          const roomIdStr = params.id;
          const roomId = roomIdStr ? parseInt(roomIdStr, 10) : undefined;
          const activeRoom = roomId
            ? this.rooms.find((r) => r.id === roomId)
            : this.rooms[0];

          this.setRoom(activeRoom);
        });
      });
  }

  public toSeconds(startsAt: string): number {
    return this.dateConverterService.toTime(startsAt);
  }

  public setRoom(room: Room): void {
    this.activeRoom = room;
    this.sessions = this.sessionizeApiResult.sessions.filter(
      (s) => s.roomId === room.id && s.speakers.length === 1
    );
    this.sessions.forEach((session) => {
      session.speaker = this.sessionizeApiResult.speakers.find(
        (s) => s.id === session.speakers[0]
      );
    });
  }
}
