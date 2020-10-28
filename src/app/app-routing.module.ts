import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home', component: HomeComponent, children: [
      { path: 'music', loadChildren: () => import('../app/modules/music/music.module').then(m => m.MusicModule) },
      { path: 'participants', loadChildren: () => import('../app/modules/participants/participants.module').then(m => m.ParticipantsModule) },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
