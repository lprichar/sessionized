import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateConverterService {
  public toTime(dateString: string): number {
    return new Date(dateString + '-0400').getTime();
  }

  constructor() { }
}
