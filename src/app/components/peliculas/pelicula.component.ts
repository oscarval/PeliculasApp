import { Component, OnInit } from '@angular/core';
import { PeliculasService } from "../../services/peliculas.service";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styles: []
})
export class PeliculaComponent implements OnInit {

  public peli: any;
  public peliImage:string;
  public urlimages:string= "http://image.tmdb.org/t/p/w300";

  constructor(
    private pelisservices: PeliculasService,
    private activateRoute: ActivatedRoute
  ) {

  }

  ngOnInit() {
    this.activateRoute.params.subscribe(params => {
      this.pelisservices.getPelicula(params["id"]).subscribe( resp =>{
        this.peliImage = this.urlimages + resp.poster_path;
        this.peli = resp;
        console.log(resp);
        // this.peli = resp;
      });
    });
  }

}
