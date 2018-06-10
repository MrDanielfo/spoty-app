import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  artistas: any[] = [];
  loading: boolean;

  constructor(
    private _http: HttpClient,
    private _spotify: SpotifyService
  ) { }

  buscar( termino: string) {
    console.log(termino);
    this.loading = true;
    this._spotify.getArtists(termino).subscribe( (params: any) => {
      console.log(params);
      this.artistas = params;
      this.loading = false;
    });
  }
}
