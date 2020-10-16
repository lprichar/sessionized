import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransitionScreensComponent } from './transition-screens.component';

describe('TransitionScreensComponent', () => {
  let component: TransitionScreensComponent;
  let fixture: ComponentFixture<TransitionScreensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransitionScreensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransitionScreensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
