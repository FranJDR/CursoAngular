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
        "Bearer BQBsI_YTJarSQ7zfn1CKc04Rzf5ujPNLzmGgkEO7Ha8mpDimnn7fL3cGpzqRwm0fZE4OIU8ZRGMPnOMKCjHyUzkB1qhXA6H_OnnBeTc7Rq16zagWai_5kt-mJnI2ITBq3eLjFtAj"
    });
    return this.httpClient.get(url, { headers });
  }

  searchArtist(nameArtist: string): Promise<any> {
    return this.getQuery(`search?q=${nameArtist}&type=artist`).toPromise();
  }

  getArtista(idArtist: string) {
    return this.getQuery(`artists/${idArtist}`).toPromise();
      // .pipe(map(data => data['artists'].items));
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
