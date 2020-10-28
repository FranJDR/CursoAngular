import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';
import { SingInUpComponent } from './shared/components/sing-in-up/sing-in-up.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'singInUp', component: SingInUpComponent },
  {
    path: 'home', component: HomeComponent, children: [
      { path: 'music', loadChildren: () => import('../app/modules/music/music.module').then(m => m.MusicModule) },
      { path: 'participants', loadChildren: () => import('../app/modules/participants/participants.module').then(m => m.ParticipantsModule) },
      { path: 'singInUp', component: SingInUpComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
