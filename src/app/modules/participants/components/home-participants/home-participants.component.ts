import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Participant } from 'src/app/shared/models/participant';
import { ParticipantsService } from 'src/app/shared/services/participants/participants.service';

@Component({
  selector: 'app-home-participants',
  templateUrl: './home-participants.component.html',
  styleUrls: ['./home-participants.component.scss']
})
export class HomeParticipantsComponent implements OnInit {

  participants: Participant[];

  constructor(private participantsService: ParticipantsService) { }

  ngOnInit(): void {
    this.participantsService.getListParticipants().subscribe(res => {
      this.participants = res;
      console.log(this.participants);
    });
  }

}
