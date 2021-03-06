import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '../../material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MusicRoutingModule } from './music-routing.module';
import { ArtistComponent } from './components/artist/artist.component';
import { HomeMusicComponent } from './components/home-music/home-music.component';
import { AlbumComponent } from './components/album/album.component';
import { ViewArtistComponent } from './components/view-artist/view-artist.component';
import { ViewAlbumsComponent } from './components/view-albums/view-albums.component';
import { ViewSongsComponent } from './components/view-songs/view-songs.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ArtistComponent,
    AlbumComponent,
    HomeMusicComponent,
    ViewArtistComponent,
    ViewAlbumsComponent,
    ViewSongsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MusicRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class MusicModule { }
