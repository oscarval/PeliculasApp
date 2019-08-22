import { RouterModule, Routes } from '@angular/router';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { PeliculaComponent } from './components/peliculas/pelicula.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { Component } from '@angular/core';

const app_routes: Routes = [
  { path: 'peliculas', component: PeliculasComponent },
  { path: 'pelicula/:id', component: PeliculaComponent },
  { path: 'buscar', component: BuscarComponent },
  { path: 'buscar/:term', component: BuscarComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'peliculas' }
];

export const APP_ROUTING = RouterModule.forRoot(app_routes);
