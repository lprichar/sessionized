import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakerComponentComponent } from './speaker.component';

describe('SpeakerComponentComponent', () => {
  let component: SpeakerComponentComponent;
  let fixture: ComponentFixture<SpeakerComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpeakerComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeakerComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
