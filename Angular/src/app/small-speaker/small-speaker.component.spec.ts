import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallSpeakerComponent } from './small-speaker.component';

describe('SmallSpeakerComponent', () => {
  let component: SmallSpeakerComponent;
  let fixture: ComponentFixture<SmallSpeakerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmallSpeakerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallSpeakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
