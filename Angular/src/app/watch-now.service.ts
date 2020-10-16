import { Injectable } from '@angular/core';
import { Room } from './sessionize-service.service';

@Injectable({
  providedIn: 'root',
})
export class WatchNowService {
  getUrlForRoom(room: Room): string {
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

  constructor() {}
}
