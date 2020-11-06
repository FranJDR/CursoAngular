import { SpotifyService } from './../../../../shared/services/spotify/spotify.service';
import { Component, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-home-music',
  templateUrl: './home-music.component.html',
  styleUrls: ['./home-music.component.scss']
})
export class HomeMusicComponent implements OnInit {

  artists: any;

  constructor(private spotify: SpotifyService) { }

  ngOnInit(): void {
  }

  keyUp(event) {
    console.log(event);
    debounceTime(1000),
      distinctUntilChanged()
    this.spotify.searchArtist(event).then(res => {
      this.artists = res.artists.items;
      console.log(this.artists);
    });
  }

}
