import { SessionService } from './../../services/session/session.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NotificationsService } from '../../services/notifications/notifications.service';
import { ParticipantsService } from '../../services/participants/participants.service';

@Component({
  selector: 'app-sing-in-up',
  templateUrl: './sing-in-up.component.html',
  styleUrls: ['./sing-in-up.component.scss']
})
export class SingInUpComponent implements OnInit, AfterViewInit {

  reactiveFormSingUp: FormGroup;

  singInForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(
    private participantsService: ParticipantsService,
    private notifications: NotificationsService,
    private sessionService: SessionService
  ) { }

  ngOnInit(): void {
    this.reactiveFormSingUp = this.createFormGroupSingUp();
  }

  private createFormGroupSingUp(): FormGroup {
    return new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern("^[^@]+@[^@]+\.[a-zA-Z]{2,}$")
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
    let email = this.singInForm.value.email;
    let password = this.singInForm.value.password;
    this.sessionService.singIn(email, password);
    if (this.sessionService.login) this.notifications.sessionStarted();
  }

  singUp(): void {
    if (this.reactiveFormSingUp.valid) {
      this.participantsService.singUpParcipant(this.reactiveFormSingUp.value)
        .then(() => {
          this.reactiveFormSingUp.reset();
          this.notifications.successfullyRegistered();
        });
    }
  }

  ngAfterViewInit(): void {
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');

    signUpButton.addEventListener('click', () => {
      container.classList.add("right-panel-active");
    });

    signInButton.addEventListener('click', () => {
      container.classList.remove("right-panel-active");
    });
  }

  get name() { return this.reactiveFormSingUp.get('name'); }
  get email() { return this.reactiveFormSingUp.get('email'); }
  get password() { return this.reactiveFormSingUp.get('password'); }
}
