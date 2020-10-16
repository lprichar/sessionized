import { Component, OnInit } from '@angular/core';
import { DateConverterService } from '../date-converter.service';
import { Room, Session, SessionizeService } from '../sessionize-service.service';

@Component({
  selector: 'app-export',
  templateUrl: './export.component.html',
  styleUrls: ['./export.component.scss']
})
export class ExportComponent implements OnInit {
  public sessions: Session[] = [];
  public roomNames: { [id: number]: string };
  public speakerNames: { [id: number]: string };

  constructor(private sessionizeService: SessionizeService, private dateConverterService: DateConverterService) { }

  ngOnInit(): void {
    this.sessionizeService
      .getSessionizeData()
      .subscribe((sessionizeApiResult) => {
        this.sessions = sessionizeApiResult.sessions;
        this.roomNames = {};
        sessionizeApiResult.rooms.forEach(r => {
          this.roomNames[r.id] = r.name;
        });
        this.speakerNames = {};
        sessionizeApiResult.speakers.forEach(s => {
          this.speakerNames[s.id] = s.firstName + ' ' + s.lastName;
        });
      });
  }

  public toSeconds(dateString: string): number {
    return this.dateConverterService.toTime(dateString);
  }

}
