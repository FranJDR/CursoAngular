import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Participant } from '../../models/participant';

@Injectable({
  providedIn: 'root'
})
export class ParticipantsService {

  private url: string = 'http://localhost:3000/participants';

  constructor(private httpClient: HttpClient) { }

  singUpParcipant(participant: Participant): Promise<any> {
    return this.httpClient.post(this.url, participant).toPromise()
      .then(() => {
        console.log('Usuario creado.');
      })
      .catch(err => {
        console.log(err);
      });
  }

  editParcipant(user: Participant): Promise<any> {
    return this.httpClient.put(this.url + '/' + user.id, user).toPromise()
      .then(() => {
        console.log('Usuario editado.');
      })
      .catch(err => {
        console.log(err);
      });
  }

  deleteParcipant(id: string): Promise<any> {
    return this.httpClient.delete(this.url + '/' + id).toPromise()
      .then(() => {
        console.log('Usuario eliminado.');
      })
      .catch(err => {
        console.log(err);
      });
  }

}
