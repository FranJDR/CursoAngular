import { SpotifyService } from './../../../../shared/services/spotify/spotify.service';
import { Component, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { SessionService } from 'src/app/shared/services/session/session.service';

@Component({
  selector: 'app-home-music',
  templateUrl: './home-music.component.html',
  styleUrls: ['./home-music.component.scss']
})
export class HomeMusicComponent implements OnInit {

  artists: any;

  constructor(
    private spotify: SpotifyService,
    private session: SessionService
  ) { }

  ngOnInit(): void {
    this.spotify.searchArtist('a').then(res => {
      this.artists = res.artists.items;
    });
  }

  keyUp(event) {
    debounceTime(1500);
    distinctUntilChanged();
    this.spotify.searchArtist(event).then(res => {
      this.artists = res.artists.items;
      console.log(res);
    });
  }

  addFavourite(idArtist: string): void {
    this.session.addArtistFavourite(idArtist);
  }

  removeFavourite(idArtist: string): void {
    this.session.removeArtistFavourite(idArtist);
  }

  isFavourite(idArtist): boolean {
    return this.session.isArtistFavourite(idArtist);
  }
}
