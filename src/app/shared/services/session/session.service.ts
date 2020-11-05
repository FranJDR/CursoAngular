import { NotificationsService } from './../notifications/notifications.service';
import { Participant } from 'src/app/shared/models/participant';
import { Injectable } from '@angular/core';
import { ParticipantsService } from '../participants/participants.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private _user: Participant = {};

  private jsonID: string = 'sessionID';

  constructor(
    private participant: ParticipantsService,
    private router: Router,
    private notificationsService: NotificationsService
  ) {
    this.loadUser();
  }

  private loadUser() {
    let sessionId: string = sessionStorage.getItem(this.jsonID);
    console.log('sessionId : ' + sessionId);
    console.log(this._user);
    if (sessionId !== null) {
      this.participant.getParticipant(sessionId).then(res => { this._user = res; });
    }
  }

  singIn(email: string, password: string) {
    this.participant.getListParticipants().toPromise().then(res => {
      res.forEach(element => {
        if (email.localeCompare(element.email) == 0 && password.localeCompare(element.password) == 0) {
          this._user = element;
          sessionStorage.setItem(this.jsonID, this._user.id);
          this.router.navigate(['home/music']);
          this.notificationsService.sessionStarted();
        }
      });
    });
  }

  signOff() {
    this._user = {};
    sessionStorage.removeItem(this.jsonID);
    this.router.navigate(['singInUp']);
    this.notificationsService.closedSession();
  }

  get urlImg(): string {
    return this._user.urlImg;
  }

  get name(): string {
    return this._user.name;
  }

}
