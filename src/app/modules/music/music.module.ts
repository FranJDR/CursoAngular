import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MusicRoutingModule } from './music-routing.module';
import { ArtistComponent } from './components/artist/artist.component';
import { HomeMusicComponent } from './components/home-music/home-music.component';
import { AlbumComponent } from './components/album/album.component';

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
