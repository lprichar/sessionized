import { Component, OnInit } from '@angular/core';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-transition-screens',
  templateUrl: './transition-screens.component.html',
  styleUrls: ['./transition-screens.component.scss']
})
export class TransitionScreensComponent implements OnInit {
  public msgBody: string;
  public msgBodyTemp: string;
  public msgTitle: string;
  public msgTitleTemp: string;

  constructor() { }

  ngOnInit(): void {
  }

  public showText(): void {
    this.msgTitle = this.msgTitleTemp;
    this.msgBody = this.msgBodyTemp;
  }

  public outToLunch(): void {
    this.msgTitle = 'Out to Lunch';
    this.msgBody = 'This track is temporarily closed due to an catastrophic discussion on tabs vs spaces between the organizers over anchovy pizza 🍕.  We\'ll be back at ~1 PM EDT.  Rumor is there\'s fun stuff happening in the /etc channel.';
  }

  public gettingStarted(): void {
    this.msgTitle = 'Getting Ready';
    this.msgBody = 'Booting up.  Need ☕.  Hang tight, we\'ll be with you in a sec';
  }

  public technicalDifficulties(): void {
    this.msgTitle = 'Technical Difficulties';
    this.msgBody = 'This track is temporarily paused due to unexpected velociraptor trouble.  Hang tight, unless anyone is unexpectedly eaten we\'ll be back soon.';
  }

  public reset(): void {
    this.msgTitle = undefined;
    this.msgBody = undefined;
  }
}
