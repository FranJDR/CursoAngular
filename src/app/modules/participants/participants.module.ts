import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ParticipantsRoutingModule } from './participants-routing.module';

import { HomeParticipantsComponent } from './components/home-participants/home-participants.component';
import { MaterialModule } from 'src/app/material.module';
import { FormsModule } from '@angular/forms';
import { ViewDetailsComponent } from './components/view-details/view-details.component';

@NgModule({
  declarations: [
    HomeParticipantsComponent,
    ViewDetailsComponent
  ],
  imports: [
    CommonModule,
    ParticipantsRoutingModule,
    RouterModule,
    MaterialModule,
    FormsModule
  ]
})
export class ParticipantsModule { }
