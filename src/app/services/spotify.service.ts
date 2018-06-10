import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// rxjs

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(
    private _http: HttpClient
  ) {
    console.log('Spotify service listo');
  }

  getQuery( query: string ) {
    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization' : 'Bearer BQBKN45jgPs_GnsIBxcs3HqDh39Qtjjc2GVR4HOgnadCnAGi-A0gQMR2wV_iYSSNkU2dNtLg4FaUw-LlL74'
    });

    return this._http.get(url, { headers } );
  }

  getNewReleases() {

    return this.getQuery('browse/new-releases?country=MX&limit=20')
    .pipe( map( params => params['albums'].items ));
  }

  getArtists(termino: string) {

    return this.getQuery(`search?q=${ termino }&type=artist&limit=30`)
      .pipe( map( params => params['artists'].items));
    /* una forma de utilizar las funciones de flecha de manera óptima */
  }

  getArtist(id: string) {

    return this.getQuery(`artists/${ id }`);
      // .pipe( map( params => params['artists'].items));
    /* una forma de utilizar las funciones de flecha de manera óptima */
  }

  getTopTracks(id: string) {
    return this.getQuery(`artists/${ id }/top-tracks?country=MX`)
           .pipe( map( params => params['tracks']));
  }

}
