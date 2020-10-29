import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ParticipantsRoutingModule } from './participants-routing.module';

import { HomeParticipantsComponent } from './components/home-participants/home-participants.component';
import { MaterialModule } from 'src/app/material.module';
// import { CdkTableModule } from '@angular/cdk/table';


@NgModule({
  declarations: [
    HomeParticipantsComponent
  ],
  imports: [
    CommonModule,
    ParticipantsRoutingModule,
    RouterModule,
    MaterialModule,
    // CdkTableModule,
  ]
})
export class ParticipantsModule { }
