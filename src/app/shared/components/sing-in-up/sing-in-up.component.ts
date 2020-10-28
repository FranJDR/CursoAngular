import { ParticipantsService } from './../../services/participants/participants.service';
import { Participant } from './../../models/participant';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sing-in-up',
  templateUrl: './sing-in-up.component.html',
  styleUrls: ['./sing-in-up.component.scss']
})
export class SingInUpComponent implements OnInit {

  reactiveForm: FormGroup;
  participants: Participant;

  email: string;
  password: string;
  name: string;

  constructor(
    private formBuilder: FormBuilder,
    private participantsService: ParticipantsService
  ) { }

  ngOnInit(): void {
  }

  singIn(): void {

  }

  singUp(): void {

  }


}
