import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ParticipantsService } from 'src/app/shared/services/participants/participants.service';

@Component({
  selector: 'app-dialog-edit-participant',
  templateUrl: './dialog-edit-participant.component.html',
  styleUrls: ['./dialog-edit-participant.component.scss']
})
export class DialogEditParticipantComponent implements OnInit {
  @Input() id;

  constructor(
    private participantsService: ParticipantsService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

}
