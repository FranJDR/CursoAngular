import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeParticipantsComponent } from './home-participants.component';

describe('HomeParticipantsComponent', () => {
  let component: HomeParticipantsComponent;
  let fixture: ComponentFixture<HomeParticipantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeParticipantsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeParticipantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
