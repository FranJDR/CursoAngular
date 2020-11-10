import { NotificationsService } from './../notifications/notifications.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Participant } from '../../models/participant';

@Injectable({
  providedIn: 'root'
})
export class ParticipantsService {

  private url: string = 'http://localhost:3000/participants';

  constructor(
    private httpClient: HttpClient,
    private notificationsService: NotificationsService
  ) { }

  addArtistFavourite(idArtist: string, user: Participant): void {
    if (user.idsFavArtist == null) {
      user.idsFavArtist = [];
    }
    user.idsFavArtist.push(idArtist);
    this.editParcipant(user).then(() => {
      this.notificationsService.addedToFavorites();
    });
  }

  removeArtistFavourite(idArtist: string, user: Participant): void {
    user.idsFavArtist.splice(user.idsFavArtist.indexOf(idArtist), 1);
    this.editParcipant(user).then(() => {
      this.notificationsService.removedFromFavorites();
    });
  }

  getParticipant(id: string): Promise<Participant> {
    return this.httpClient.get(this.url + '/' + id).toPromise();
  }

  getObsParticipant(id: string): Observable<Participant> {
    return this.httpClient.get(this.url + '/' + id).pipe(map((res: Participant) => res));
  }

  getListParticipants(): Observable<Participant[]> {
    return this.httpClient.get(this.url)
      .pipe(map((res: Participant[]) => res));
  }

  signUpParcipant(participant: Participant): Promise<any> {
    return this.httpClient.post(this.url, this.getNewParticipant(participant)).toPromise()
      .then(() => {
        console.log('Usuario creado.');
      }).catch(err => console.log);
  }

  editParcipant(user: Participant): Promise<any> {
    return this.httpClient.put(this.url + '/' + user.id, user).toPromise()
      .then(() => {
        console.log('Usuario editado.');
      }).catch(err => console.log);
  }

  deleteParcipant(id: string): Promise<any> {
    return this.httpClient.delete(this.url + '/' + id).toPromise()
      .then(() => {
        console.log('Usuario eliminado.');
      }).catch(err => console.log);
  }

  private getNewParticipant(participant: Participant): Participant {
    return {
      name: participant.name,
      email: participant.email,
      password: participant.password,
      center: '',
      phone: '',
      age: '',
      urlImg: 'assets/imgRandom/user.png',
      address: {
        street: '',
        city: '',
        cp: '',
        province: ''
      },
      idsFavAlbum: [],
      idsFavArtist: [],
      idsFavSong: []
    }
  }

}
