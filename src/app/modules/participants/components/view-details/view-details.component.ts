import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Participant } from 'src/app/shared/models/participant';
import { ParticipantsService } from 'src/app/shared/services/participants/participants.service';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.scss']
})
export class ViewDetailsComponent implements OnInit {

  participant: Participant;

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
  });;

  constructor(
    private participantsService: ParticipantsService,
    private router: ActivatedRoute
  ) { }

  ngOnInit(): void {
    let id = this.router.snapshot.paramMap.get('id');
    this.participantsService.getParticipant(id).then(res => {
      this.participant = res;
      if (this.participant.urlImg.localeCompare('') == 0) {
        this.participant.urlImg = this.obtenerImgRandom();
      }
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
      urlImg: this.myFormGroup.value.urlImg,
      address: {
        street: this.myFormGroup.value.street,
        cp: this.myFormGroup.value.postalCode,
        city: this.myFormGroup.value.city,
        province: this.myFormGroup.value.province
      }
    };
    this.participantsService.editParcipant(aux);
    window.location.reload();
  }

  obtenerImgRandom() {
    return 'assets/imgRandom/' + Math.floor((Math.random() * (10 - 1) + 1)) + '.jpg';
  }

}
