import { SpotifyService } from './../../../../shared/services/spotify/spotify.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-music',
  templateUrl: './home-music.component.html',
  styleUrls: ['./home-music.component.scss']
})
export class HomeMusicComponent implements OnInit {

  artists: any;

  constructor(private spotify: SpotifyService) { }

  ngOnInit(): void {
    this.spotify.searchArtist('lisa').then(res => {
      this.artists = res.artists.items;
      console.log(this.artists);
    });
  }

  getGenres(genres: string[]): string {
    let retorno: string = '';
    genres.forEach(element => {
      retorno += element + ', ';
    });
    return retorno;
  }

}
