import { Component, Input, OnInit } from '@angular/core';
import { Session } from '../sessionize-service.service';

@Component({
  selector: 'app-small-speaker',
  templateUrl: './small-speaker.component.html',
  styleUrls: ['./small-speaker.component.scss']
})
export class SmallSpeakerComponent implements OnInit {
  @Input()
  public session: Session;

  constructor() { }

  ngOnInit(): void {
  }

}
