import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public hours: Date[] = [];

  constructor() { }

  ngOnInit(): void {
    this.hours.push(new Date(2020, 8, 26, 8, 30, 0, 0));
    for (let i = 9; i <= 16; i++) {
      this.hours.push(new Date(2020, 8, 26, i, 0, 0, 0));
    }
  }

}
