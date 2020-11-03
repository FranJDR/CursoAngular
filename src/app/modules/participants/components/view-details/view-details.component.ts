import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Participant } from 'src/app/shared/models/participant';
import { ParticipantsService } from 'src/app/shared/services/participants/participants.service';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.scss']
})
export class ViewDetailsComponent implements OnInit {

  participant: Participant;

  constructor(
    private participantsService: ParticipantsService,
    private router: ActivatedRoute
  ) { }

  ngOnInit(): void {
    let id = this.router.snapshot.paramMap.get('id');
    this.participantsService.getParticipant(id).then(res => {
      this.participant = res;
    });
  }

  editProfile(): void {
    this.participantsService.editParcipant(this.participant);
    window.location.reload();
  }

}
