import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private httpClient: HttpClient) {
    this.searchArtist('Lisa').then(res => console.log(res));
  }

  private getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers: HttpHeaders = new HttpHeaders({
      Authorization:
        "Bearer BQCgb-2y-ojjmuYJb76igbP8dYGfsl2G890HpwJlSdZctl59SaMAkJm2mLSpZM0T2XcAgfZvWIzdbTJ4sUFp4bkTpQ7pj31IZmplMDJDMvQRFMIJ3mfj6VrkZONjoA486rHUE_gT"
    });
    return this.httpClient.get(url, { headers });
  }

  searchArtist(nameArtist: string): Promise<any> {
    return this.getQuery('https://api.spotify.com/v1/search?q=' + nameArtist + '&type=artist').toPromise();
  }

  getArtista(idArtist: string) {
    return this.getQuery(`artists/${idArtist}`)
      .pipe(map(data => data['artists'].items));
  }

  getTopTracks(idArtist: string) {
    return this.getQuery(`artists/${idArtist}/top-tracks?country=us`)
      .pipe(map(data => data["tracks"]));
  }

  getAlbums(idArtist: string) {
    return this.getQuery(`artists/${idArtist}/albums`).toPromise();
    // .pipe(map((data: any) => data.items));
  }

  getAlbum(idAlbum: string) {
    return this.getQuery(`albums/${idAlbum}`).toPromise();
    // .pipe(map((data: any) => data));
  }


}
