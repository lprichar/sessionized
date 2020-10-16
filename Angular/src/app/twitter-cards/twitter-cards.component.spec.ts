import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitterCardsComponent } from './twitter-cards.component';

describe('TwitterCardsComponent', () => {
  let component: TwitterCardsComponent;
  let fixture: ComponentFixture<TwitterCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwitterCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwitterCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
