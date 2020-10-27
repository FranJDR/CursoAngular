import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { MusicAdminComponent } from './components/music-admin/music-admin.component';

const routes: Routes = [
  { path: '', redirectTo: 'musicAdmin', pathMatch: 'full' },
  { path: 'musicAdmin', component: MusicAdminComponent }
];


@NgModule({
  declarations: [MusicAdminComponent],
  imports: [
    CommonModule
  ]
})
export class MusicModule { }
