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

  constructor(
    private formBuilder: FormBuilder,
    private participantsService: ParticipantsService
  ) { }

  ngOnInit(): void {
    this.reactiveForm = this.createFormGroup();
  }

  private createFormGroup(): FormGroup {
    return new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')
      ]),
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(5)
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8)
      ])
    });
  }

  singIn(): void {

  }

  singUp(): void {
    if (this.reactiveForm.valid) {
      this.participantsService.singUpParcipant(this.reactiveForm.value)
        .then(() => {
          this.reactiveForm.reset();
        });
    }
  }

}
