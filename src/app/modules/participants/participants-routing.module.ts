import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeParticipantsComponent } from './components/home-participants/home-participants.component';

const routes: Routes = [
  { path: '', redirectTo: 'homeParticipants', pathMatch: 'full' },
  {
    path: 'homeParticipants', component: HomeParticipantsComponent, children: [
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParticipantsRoutingModule { }
