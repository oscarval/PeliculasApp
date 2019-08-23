import { Injectable } from '@angular/core';

import { Jsonp } from "@angular/http";
import 'rxjs/Rx';
import { DatePipe } from '@angular/common';

@Injectable()
export class PeliculasService {

  private apikey:string = "a8d05c5d1d55dc8d596947f775d106f9";
  private urlmoviedb:string = "https://api.themoviedb.org/3";

  constructor(
    private jsonp:Jsonp
  ) { }

  getPopulares(){
    let url = `${this.urlmoviedb}/discover/movie?sort_by=popularity.desc&api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get(url).map(resp => resp.json());
  }

  getCartelera(){
    let datePipe = new DatePipe('es-ES');
    let date1 = new Date();
    let date2 = new Date();
    date1.setDate( date1.getDate() - 10 );
    date2.setDate( date2.getDate() - 1 );
    let dateIni = datePipe.transform(date1, 'yyyy-MM-dd');
    let dateFin = datePipe.transform(date2, 'yyyy-MM-dd');

    let url = `${this.urlmoviedb}/discover/movie?primary_release_date.gte=${dateIni}&primary_release_date.lte=${dateFin}&api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get(url).map(resp => resp.json());
  }

  getInfantiles(){
    let url = `${this.urlmoviedb}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get(url).map(resp => resp.json());
  }

  buscarPelicula(term:string){
    let url = `${this.urlmoviedb}/search/movie?query=${term}&api_key=${this.apikey}&sort_by=popularity.desc&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get(url).map(resp => resp.json());
  }

  getPelicula(id:string){
    let url = `${this.urlmoviedb}/movie/${id}?api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get(url).map(resp => resp.json());
  }

}
