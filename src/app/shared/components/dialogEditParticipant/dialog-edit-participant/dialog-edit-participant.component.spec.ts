import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditParticipantComponent } from './dialog-edit-participant.component';

describe('DialogEditParticipantComponent', () => {
  let component: DialogEditParticipantComponent;
  let fixture: ComponentFixture<DialogEditParticipantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogEditParticipantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogEditParticipantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
