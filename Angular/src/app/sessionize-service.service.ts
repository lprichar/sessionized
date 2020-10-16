import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SessionizeService {
  constructor(private http: HttpClient) { }

  public getSessionizeData(): Observable<SessionizeApiResult> {
    const url = 'https://sessionize.com/api/v2/d5qrg1tt/view/All';
    return this.http.get(url).pipe(
      map(res => res as SessionizeApiResult)
    );
  }
}

export interface SessionizeApiResult {
  sessions: Session[];
  speakers: Speaker[];
  questions: Question[];
  categories: Category[];
  rooms: Room[];
}

export interface Session {
  id: string;
  title: string;
  description: string;
  startsAt: string;
  endsAt: string;
  roomId: number;
  speakers: string[];
  speaker: Speaker;
}

export interface Speaker {
  id: string;
  firstName: string;
  lastName: string;
  bio: string;
  tagLine: string;
  profilePicture: string;
  links: Link[];
}

export interface Link {
  title: string;
  url: string;
  linkType: string;
}

export interface Question {
  id: number;
  question: string;
}

export interface Category {
  id: number;
  title: string;
}

export interface Room {
  id: number;
  name: string;
}
