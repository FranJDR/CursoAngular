import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ArtistComponent } from './components/artist/artist.component';
import { AlbumComponent } from './components/album/album.component';
import { HomeMusicComponent } from './home-music/home-music.component';
import { MusicRoutingModule } from './music-routing.module';

@NgModule({
  declarations: [
    ArtistComponent,
    AlbumComponent,
    HomeMusicComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MusicRoutingModule
  ]
})
export class MusicModule { }
