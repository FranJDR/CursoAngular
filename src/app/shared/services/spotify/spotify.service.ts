import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(
    private httpClient: HttpClient
  ) { }

  private getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers: HttpHeaders = new HttpHeaders({
      Authorization:
        "Bearer BQDnzOQjUUzDyfC2lAXED3jOX3CnMc19xFv10yBE4j8Bs0pIBjXJTohw2583uV1NJW30j8kTU5T_hd6gY2VoyXSGalYaXqY6sz-dtQMDbK5DyAAFvr6aqzfC_T-D_yAkD3RIVTcA"
    });
    return this.httpClient.get(url, { headers });
  }

  searchArtist(nameArtist: string): Promise<any> {
    return this.getQuery(`search?q=${nameArtist}&type=artist`).toPromise();
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
