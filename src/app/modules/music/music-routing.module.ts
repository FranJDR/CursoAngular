import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumComponent } from './components/album/album.component';
import { ArtistComponent } from './components/artist/artist.component';
import { HomeMusicComponent } from './components/home-music/home-music.component';

const routes: Routes = [
    { path: '', redirectTo: 'homeMusic', pathMatch: 'full' },
    {
        path: 'homeMusic', component: HomeMusicComponent, children: [
            { path: 'artist', component: ArtistComponent },
            { path: 'album', component: AlbumComponent }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MusicRoutingModule { }
