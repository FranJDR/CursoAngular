import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeParticipantsComponent } from './components/home-participants/home-participants.component';
import { ViewDetailsComponent } from './components/view-details/view-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'homeParticipants', pathMatch: 'full' },
  {
    path: 'homeParticipants', component: HomeParticipantsComponent, children: [

    ]
  },
  { path: 'homeParticipants/viewDetails/:id', component: ViewDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParticipantsRoutingModule { }
