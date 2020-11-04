import { Participant } from 'src/app/shared/models/participant';
import { Injectable } from '@angular/core';
import { ParticipantsService } from '../participants/participants.service';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private _user: Participant = {};
  private _login: boolean = false;

  constructor(
    private participant: ParticipantsService
  ) { }

  singIn(email: string, password: string) {
    this.participant.getListParticipants().toPromise().then(res => {
      res.forEach(element => {
        if (email.localeCompare(element.email) == 0 && password.localeCompare(element.password) == 0) {
          this._user = element;
          this._login = true;
        }
      });
    });
  }

  signOff() {
    this._user = {};
    this._login = false;
  }

  obtenerImgRandom() {
    return 'assets/imgRandom/' + Math.floor((Math.random() * (10 - 1) + 1)) + '.jpg';
  }

  get urlImg(): string {
    return this._user.urlImg !== undefined ? this._user.urlImg : this.obtenerImgRandom();
  }

  get name(): string {
    return this._user.name;
  }

  get login(): boolean {
    return this._login;
  }

}
