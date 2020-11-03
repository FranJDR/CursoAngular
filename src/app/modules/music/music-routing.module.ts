import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumComponent } from './components/album/album.component';
import { ArtistComponent } from './components/artist/artist.component';
import { HomeMusicComponent } from './components/home-music/home-music.component';
import { ViewAlbumsComponent } from './components/view-albums/view-albums.component';
import { ViewArtistComponent } from './components/view-artist/view-artist.component';
import { ViewSongsComponent } from './components/view-songs/view-songs.component';

const routes: Routes = [
    { path: '', redirectTo: 'homeMusic', pathMatch: 'full' },
    {
        path: 'homeMusic', component: HomeMusicComponent, children: [
            { path: 'artist', component: ArtistComponent },
            { path: 'album', component: AlbumComponent }
        ]
    },
    { path: 'viewAlbums', component: ViewAlbumsComponent },
    { path: 'viewArtist', component: ViewArtistComponent },
    { path: 'viewSongs', component: ViewSongsComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MusicRoutingModule { }
