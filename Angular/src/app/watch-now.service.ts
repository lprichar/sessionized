import { Injectable } from '@angular/core';
import { Room, Speaker } from './sessionize-service.service';

@Injectable({
  providedIn: 'root',
})
export class WatchNowService {
  public getHours(): Date[] {
    // TODO: customize start and end time
    const startTime = 9;
    const endTime = 16;
    const year = 2020;
    const month = 8;
    const day = 26;
    // TODO: customize start and end time
    const startDate = new Date(year, month, day, 8, 30, 0, 0);

    const hours: Date[] = [];
    hours.push(startDate);

    for (let i = startTime; i <= endTime; i++) {
      hours.push(new Date(year, month, day, i, 0, 0, 0));
    }
    return hours;
  }

  // TODO: customize registration link
  public registerUrl: string = "https://www.eventbrite.com/e/northern-va-codecamp-fall-2020-tickets-119774387417";

  getUrlForRoom(room: Room): string {
    // TODO: commend out this or replace with your custom watch URL's
    if (room.id === 15355) {
      return 'https://teams.microsoft.com/l/meetup-join/19%3ameeting_NTdmMDllYjgtYWMzZi00MWQ5LThjNGYtNmYwOGE1MWVjZjI2%40thread.v2/0?context=%7b%22Tid%22%3a%22522429d4-f37f-4713-a7d9-58d6450b01b6%22%2c%22Oid%22%3a%22b821e4e9-0c4f-45bd-962a-71dac376dd03%22%2c%22IsBroadcastMeeting%22%3atrue%7d';
    }
    if (room.id === 15356) {
      return 'https://teams.microsoft.com/l/meetup-join/19%3ameeting_ZjgzZjE2MmYtZjZiNC00YTM3LWEyMWQtOThmOGNjMDEwMzg5%40thread.v2/0?context=%7b%22Tid%22%3a%22522429d4-f37f-4713-a7d9-58d6450b01b6%22%2c%22Oid%22%3a%22b821e4e9-0c4f-45bd-962a-71dac376dd03%22%2c%22IsBroadcastMeeting%22%3atrue%7d';
    }
    if (room.id === 15357) {
      return 'https://teams.microsoft.com/l/meetup-join/19%3ameeting_ZGJlZDU3ZWItYmFiYi00ZmY4LTlmNWMtNjM5ZWJlYmI1OGM5%40thread.v2/0?context=%7b%22Tid%22%3a%22522429d4-f37f-4713-a7d9-58d6450b01b6%22%2c%22Oid%22%3a%22b821e4e9-0c4f-45bd-962a-71dac376dd03%22%2c%22IsBroadcastMeeting%22%3atrue%7d';
    }
    if (room.id === 15358) {
      return 'https://teams.microsoft.com/l/meetup-join/19%3ameeting_M2E4M2E2MmQtZTE5Ny00MDJhLTk5YjEtOGFmNTFiZjMxZjMy%40thread.v2/0?context=%7b%22Tid%22%3a%22522429d4-f37f-4713-a7d9-58d6450b01b6%22%2c%22Oid%22%3a%22b821e4e9-0c4f-45bd-962a-71dac376dd03%22%2c%22IsBroadcastMeeting%22%3atrue%7d';
    }
    return null;
  }

  // TODO: customize gender information
  public isMale(speaker: Speaker): boolean {
    return !(speaker.firstName === 'Milecia' || (speaker.firstName === 'LaBrina'));
  }

  constructor() {}
}
