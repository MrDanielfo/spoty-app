import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {

  paises: any[] = [];
  lanzamientos: any[] = [];
  loading: boolean;
  error: boolean;
  mensajeError: string;

  constructor(
    private _http: HttpClient,
    private spotify: SpotifyService
  ) {

    console.log('Buen Constructor');

    this.loading = true;
    this.error = false;

    this.spotify.getNewReleases().subscribe( (params: any) => {
      this.lanzamientos = params;
      this.loading = false;
    }, ( errorServicio ) => {
        this.loading = false;
        this.error = true;
        console.log(errorServicio.error.error.message);
        this.mensajeError = errorServicio.error.error.message;
    });
    /* formas de mostrar un error en el subscribe */
  }



}

 /*this.http.get('https://restcountries.eu/rest/v2/lang/es').subscribe( (params: any) => {
        this.paises = params;
        console.log(params);
     });*/
