import { NotificationsService } from './../../../../shared/services/notifications/notifications.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Participant } from 'src/app/shared/models/participant';
import { ParticipantsService } from 'src/app/shared/services/participants/participants.service';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.scss']
})
export class ViewDetailsComponent implements OnInit {

  participant: Participant = { urlImg: 'assets/imgRandom/user.png' };

  myFormGroup: FormGroup = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    center: new FormControl(''),
    age: new FormControl(''),
    phone: new FormControl(''),
    street: new FormControl(''),
    postalCode: new FormControl(''),
    city: new FormControl(''),
    province: new FormControl(''),
    urlImg: new FormControl(''),
  });;

  constructor(
    private participantsService: ParticipantsService,
    private activeRouter: ActivatedRoute,
    private notificationsService: NotificationsService
  ) { }

  ngOnInit(): void {
    let id = this.activeRouter.snapshot.paramMap.get('id');
    this.participantsService.getParticipant(id).then(res => {
      this.participant = res;
      this.myFormGroup = this.createFormGroup();
    });
  }

  createFormGroup(): FormGroup {
    return new FormGroup({
      name: new FormControl(this.participant.name),
      email: new FormControl(this.participant.email),
      center: new FormControl(this.participant.center),
      age: new FormControl(this.participant.age),
      phone: new FormControl(this.participant.phone),
      urlImg: new FormControl(''),
      street: new FormControl(this.participant.address.street),
      postalCode: new FormControl(this.participant.address.cp),
      city: new FormControl(this.participant.address.city),
      province: new FormControl(this.participant.address.province),
    });
  }

  editProfile(): void {
    let aux: Participant = {
      id: this.participant.id,
      password: this.participant.password,
      name: this.myFormGroup.value.name,
      email: this.myFormGroup.value.email,
      center: this.myFormGroup.value.center,
      age: this.myFormGroup.value.age,
      phone: this.myFormGroup.value.phone,
      urlImg: ''.localeCompare(this.myFormGroup.value.urlImg) !== 0 ? this.myFormGroup.value.urlImg : 'assets/imgRandom/user.png',
      address: {
        street: this.myFormGroup.value.street,
        cp: this.myFormGroup.value.postalCode,
        city: this.myFormGroup.value.city,
        province: this.myFormGroup.value.province
      }
    };
    this.participantsService.editParcipant(aux).then(() => {
      this.notificationsService.successfullyEdited();
      this.ngOnInit();
    });
  }


}
