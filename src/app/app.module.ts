import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistComponent } from './components/artist/artist.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

// ROUTES
import { ROUTES } from './app.routes';

// Pipes
import { ImagesPipe } from './pipes/images.pipe';
/* import { SpotifyService } from './services/spotify.service'; */
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';
import { LoadingComponent } from './components/shared/loading/loading.component';

/* services */



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistComponent,
    NavbarComponent,
    ImagesPipe,
    DomseguroPipe,
    TarjetasComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot( ROUTES, { useHash: true } ),

  ],
  providers: [
    /*SpotifyService / con la nueva versión ya no hace falta declararlos*/
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
