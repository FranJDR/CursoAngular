import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './shared/components/admin/admin.component';
import { HomeComponent } from './shared/components/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // { path: ' admin', component: AdminComponent },
  {
    path: 'home', component: HomeComponent, children: [
      { path: 'music', loadChildren: () => import('../app/modules/music/music.module').then(m => m.MusicModule) },
      { path: 'users', loadChildren: () => import('../app/modules/users/users.module').then(m => m.UsersModule) },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
