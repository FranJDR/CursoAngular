import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Album } from '../../models/album';
import { Artist } from '../../models/artist';
import { Song } from '../../models/song';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  private urlArtist: string = '';
  private urlAlbum: string = '';
  private urlSong: string = '';

  constructor(private httpClient: HttpClient) { }

  public getListArtist(id) {
    return null;
  }

  public getListFavArtist(idsFavArtist: string[]): Promise<Artist> {
    return new Promise(res => {
      var retorno: Artist[] = [];
      for (let i = 0; i < idsFavArtist.length; i++) {
        this.getArtist(idsFavArtist[i]).then((res: Artist) => {
          retorno.push(res);
        });
      }
      return retorno;
    });
  }

  public getListAlbums(idArtist: string) {
    return null;
  }

  public getListFavAlbums(idsFavAlbums: string[]): Promise<Album[]> {
    return new Promise(res => {
      var retorno: Album[] = [];
      for (let i = 0; i < idsFavAlbums.length; i++) {
        this.getAlbum(idsFavAlbums[i]).then((res: Album) => {
          retorno.push(res);
        });
      }
      return retorno;
    });
  }

  public getListSongs(idAlbum: string) {
    return null;
  }

  public getListFavSongs(idsFavSongs: string[]): Promise<Song[]> {
    return new Promise(res => {
      var retorno: Song[] = [];
      for (let i = 0; i < idsFavSongs.length; i++) {
        this.getSong(idsFavSongs[i]).then((res: Song) => {
          retorno.push(res);
        });
      }
      return retorno;
    });
  }

  private getArtist(id): Promise<Artist> {
    return this.httpClient.get(this.urlArtist + '/' + id).toPromise();
  }

  private getAlbum(id): Promise<Album> {
    return this.httpClient.get(this.urlAlbum + '/' + id).toPromise();
  }

  private getSong(id): Promise<Song> {
    return this.httpClient.get(this.urlSong + '/' + id).toPromise();
  }

}
