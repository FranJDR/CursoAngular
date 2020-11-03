import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
      console.log(this.participant);
    });
  }

  editProfile(): void {
    this.participantsService.editParcipant(this.participant);
    window.location.reload();
  }

}
