import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ParticipantsRoutingModule } from './participants-routing.module';

import { HomeParticipantsComponent } from './components/home-participants/home-participants.component';


@NgModule({
  declarations: [
    HomeParticipantsComponent
  ],
  imports: [
    CommonModule,
    ParticipantsRoutingModule,
    RouterModule
  ]
})
export class ParticipantsModule { }
