import { Injectable } from '@angular/core';

import { Jsonp } from "@angular/http";
import 'rxjs/Rx';

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

}
