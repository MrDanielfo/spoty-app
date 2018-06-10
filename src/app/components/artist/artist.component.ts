import { Component, OnInit } from '@angular/core';
// el activated Route va en la página donde ya se manejan parámetros
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent {

  artista: any = {};
  loading: boolean;
  toptracks: any = {};

  constructor(
    private _activatedRoute: ActivatedRoute,
    private spotify: SpotifyService
  ) {
    this.loading = true;
    this._activatedRoute.params.subscribe( params => {
      this.getArtist(params['id']);
      this.getTopTracks(params['id']);
    });

  }

  getArtist(id: string) {
    this.loading = true;
    this.spotify.getArtist(id).subscribe( (artista: any) => {
      console.log(artista);
      this.artista = artista;
      this.loading = false;
    });
  }

  getTopTracks(id: string) {
    this.loading = true;
    this.spotify.getTopTracks(id).subscribe( (topTracks: any) => {
      console.log(topTracks);
      this.toptracks = topTracks;
      this.loading = false;
    });
  }


}


