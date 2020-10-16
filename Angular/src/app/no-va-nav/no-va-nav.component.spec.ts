import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoVaNavComponent } from './no-va-nav.component';

describe('NoVaNavComponent', () => {
  let component: NoVaNavComponent;
  let fixture: ComponentFixture<NoVaNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoVaNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoVaNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
