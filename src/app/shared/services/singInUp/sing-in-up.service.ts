import { Participant } from './../../models/participant';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SingInUPService {

  private url: string = 'http://localhost:3000/participants';

  constructor(private httpClient: HttpClient) { }

  singUpParcipant(participant: Participant): Promise<any> {
    return this.httpClient.post(this.url, participant).toPromise()
      .then(() => {
        console.log('Usuario creado');
      })
      .catch(err => {
        console.log(err);
      });
  }

  singInParticipant() {

  }

}
