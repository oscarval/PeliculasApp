import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { JsonpModule, HttpModule } from "@angular/http";

import { APP_ROUTING } from './app.routes';

// Components
import { AppComponent } from './app.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { PeliculaComponent } from './components/peliculas/pelicula.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { NavbarComponent } from './components/navbar/navbar.component';

// services
import { PeliculasService } from "./services/peliculas.service";

// Pipes
import { SinfotoPipe } from './pipes/sinfoto.pipe';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    PeliculasComponent,
    PeliculaComponent,
    BuscarComponent,
    NavbarComponent,
    SinfotoPipe,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    JsonpModule,
    HttpModule,
    ReactiveFormsModule,
    APP_ROUTING
  ],
  providers: [PeliculasService],
  exports : [
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
